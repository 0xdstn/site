#!/usr/bin/env python3

import shutil
import os
import re

basePath = "/~dustin/"
outPath = "../"

key = {
    "&": "p",
    "1": "h1",
    "2": "h2",
    "3": "h3",
    "4": "h4",
    "5": "h5",
    "6": "h6",
    "-": "ul",
    "#": "ol",
    ">": "blockquote",
    "@": "img",
    "?": "div",
    "^": "h1",
    "*": "strong",
    "_": "em",
    "%": "pre"
}

tplKey = {
    "b": "strong",
    "i": "em",
    "l": "a",
    "c": "code",
    "d": "directory",
    "e": "emoji"
}

emoji = {
	"wave": "128075",
	"computer": "128187",
	"lock": "128274",
	"globe": "127760",
	"clock": "128338",
	"earth": "127758",
	"pray": "128591",
	"books": "128218",
	"book": "128216",
	"headphones": "127911",
	"speech": "128172"
}

# Read the header
with open("templates/header.html", "r") as headerFile:
	header = headerFile.read()
headerFile.close()
header = header.replace('[BASEPATH]',basePath)

# Read the footer
with open("templates/footer.html", "r") as footerFile:
	footer = footerFile.read()
footerFile.close()

def tpl(line):
    matches = re.findall(r'\[([a-z]{1}):(.*?)\]', line)
    for m in matches:
        k = m[0]
        tag = "[{}:{}]".format(m[0],m[1])
        if k not in tplKey: continue
        if k == "l":
            link = m[1].split("|")
            url = link[0]
            target = ' target="_blank"' if url.startswith("http") else ""
            txt = link[1] if len(link) > 1 else link[0]
            if len(target):
                line = line.replace(tag,'<a href="{}"{}>{}</a>'.format(url,target,txt))
            elif url.startswith("#"):
                line = line.replace(tag,'<a href="{}">{}</a>'.format(url,txt))
            else:
                line = line.replace(tag,'<a href="{}">{}</a>'.format(basePath+url,txt))
        elif k == "d":
            ul = "<ul>"
            for x in data[m[1]]:
                page = data[m[1]][x]
                if x != "index":
                    ul += '<li><a href="{}">{}</a> {}'.format(basePath + page["LINK"],page["NAME"],page["DESC"])
            ul += "</ul>"
            line = line.replace(tag,ul)
        elif k == "e":
            if m[1] in emoji:
                line = line.replace(tag, ' <span class="emoji">&#{};</span>'.format(emoji[m[1]]))
        else:
            line = line.replace(tag, "<{}>{}</{}>".format(tplKey[k],m[1],tplKey[k]))

    return line

def createPage(fileName, section, pg):
    print("    Creating file: " + fileName + ".html")

    output = header.replace("[TITLE]",data[section][pg]["NAME"])

    page = data[section][pg];
    lines = page["BODY"];

    inList = False
    inPre = False
    prev = ""

    for l in lines:
        text = l[2:len(l)]
        char = l[0:1]
        last = prev
        prev = char

        # Raw HTML
        if char == "!": output += text

        # Key not found or comment
        if char not in key or char == "/": continue

        # Close the list if we still have one open
        if char not in ["-","#"] and inList:
            output += "</%s>" % key[last]
            inList = False;

        # Close the pre if we still have one open
        if char != "%" and inPre:
            output += "</%s>" % key[last]
            inPre = False;

        # Lists
        if char in ["-","#"]:
            if inList and last != char: output += "</%s>" % key[last]
            if last != char: output += "<%s>" % key[char]
            output += "<li>%s</li>" % tpl(text)
            inList = True
        # Pre 
        elif char == "%":
            if inPre and last != char: output += "</%s>" % key[last]
            if last != char: output += "<%s>" % key[char]
            output += tpl(text) + "<br>"
            inPre = True
        # Image
        elif char == "@":
            hasLink = "|" in text
            if hasLink:
                sp = text.split("|")
                link = sp[1]
                text = sp[0]
                target = ' target="_blank"' if link.startswith("http") else ""
            if len(target):
                output += '<a href="{}"{}>'.format(link,target)
            else:
                output += '<a href="{}">'.format(basePath+link)
            output += '<img src="{}">'.format(basePath+link)
            if hasLink: output += "</a>"
        # All other tags
        else:
            if char in ["1","2","3","4","5","6"]:
                val = '<{} id="{}">{}</{}>'.format(key[char], tpl(text), tpl(text), key[char])
            else:
                val = "<{}>{}</{}>".format(key[char], tpl(text), key[char])
            if char in ["*","_"]: val = "<p>%s</p>" % val
            output += val
                            
    # Close the list or pre if we still have one open
    if inList or inPre:
        output += "</%s>" % key[last]
    output += footer

    f = open(outPath + fileName + ".html", "w")
    f.write(output)
    f.close()

def parseData(df):
    for line in df:
        line = line.strip()
        if line == "":
            continue

        if line[0] == "~":
            pg = line[1:len(line)].split(" : ")
            url = pg[0].split("/");
            curSection = url[0];
            curPage = url[1] if len(url) > 1 else "index"

            if curSection not in data: 
                data[curSection] = {}

            data[curSection][curPage] = {
                "NAME": pg[1],
                "DESC": pg[2],
                "LINK" : pg[0],
                "BODY" : []
            }
        else:
            if curPage == "" or curSection == "":
                continue
            data[curSection][curPage]["BODY"].append(line)

data = {}
curSection = ""
curPage = ""

dataFile = open("data.txt", "r")
parseData(dataFile)
dataFile.close()

devnull= open("devnull.txt", "r")
parseData(devnull)
devnull.close()

# Loop through each section
for section in data:
    print("[*] SECTION " + section)

    # Recursively remove dir if exists
    if os.path.isdir(outPath + section):
        shutil.rmtree(outPath + section)

    # Create the dir
    print("    Creating dir: " + section);
    os.mkdir(outPath + section)

    print("")

    # Create html files for this section
    for page in data[section]:
        print("[+] PAGE " + page);

        # Index page
        if page == "index":
            # Create the html file
            if section == "index":
                createPage(page,section,page)
            else:
                createPage(section + "/" + page,section,page)
        else:
            # Create the dir
            print("    Creating dir: " + section + "/" + page);
            os.mkdir(outPath + section + "/" + page)

            # Create the html file
            createPage(section + "/" + page + "/index",section,page)

        print("");

    print("---");
    print("");

