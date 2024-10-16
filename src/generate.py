#!/usr/bin/env python3

import sys
import shutil
import os
import re
import html
import datetime

args = sys.argv

if len(args) == 4:
    srcPath = args[1]
    outPath = args[2]
    basePath = args[3]

else:
    srcPath = "./"
    outPath = "../"
    basePath = "/"

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
    "e": "emoji",
    "r": "recent",
    "z": "books",
    "p": "posts",
    "o": "100daystooffload",
    "f": "100daystooffload",
    "t": "tokipona"
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
    "speech": "128172",
    "coffee": "9749",
    "metal": "129304",
    "plant": "127793",
    "mail": "128235",
    "paint": "127912",
    "christmas": "127876",
    "checkmark": "9989",
    "camera": "128247",
    "building": "127970",
    "paper": "128221",
    "bowl": "129379",
    "log": "128210",
    "green": "129001",
    "red": "128997",
    "yellow": "129000",
    "thought": "128173",
    "man": "128104",
    "autumn": "127810",
    "heart": "128153",
    "hammer": "128296",
    "ghost": "128123",
    "alien": "128125",
    "clapper": "127916",
    "christmas": "127876",
    "letter": "9993",
    "newspaper": "128240",
    "keyboard": "9000",
    "cloud": "9729",
    "web": "127760",
    "bookmark": "128278",
    "mic": "127908",
    "lockkey": "128272",
    "weather": "127780",
    "search": "128270",
    "calendar": "128197",
    "video": "127909",
    "bird": "128038"
}

singular = {
        "projects": "Project",
        "wiki": "Wiki entry",
        "writing": "Post",
        "thoughts": "Thought",
        "recipes": "Recipe",
        "art": "Art Post",
        "changelog": "Changelog"
}

# Read the header
with open(srcPath + "templates/header.html", "r") as headerFile:
	header = headerFile.read()
headerFile.close()
header = header.replace('[BASEPATH]',basePath)

# Read the footer
with open(srcPath + "templates/footer.html", "r") as footerFile:
	footer = footerFile.read()
footerFile.close()

def sectionEmoji(section):
    e = ''
    if section == 'projects':
        e = 'computer'
    elif section == 'wiki':
        e = 'book'
    elif section == 'recipes':
        e = 'bowl'
    elif section == 'writing':
        e = 'paper'
    elif section == 'thoughts':
        e = 'thought'
    elif section == 'hello':
        e = 'wave'
    elif section == 'art':
        e = 'paint'
    elif section == 'changelog':
        e = 'log'
    else:
        return ''
    return '<span class="emoji">&#{};</span>'.format(emoji[e])

def tpl(line):
    matches = re.findall(r'\[([a-z]{1}):(.*?)\]', line)
    for m in matches:
        k = m[0]
        tag = "[{}:{}]".format(m[0],m[1])
        if k not in tplKey: continue
        if k == "r":
            types = m[1].split(",")
            ul = "<ul>"
            for x in types:
                page = data[x][list(data[x])[1]]
                ul += '<li>{} {}: <strong>{}</strong> <a href="{}">{}</a>'.format(sectionEmoji(x),singular[x],page["DATE"].replace("-","."),basePath + page["LINK"],page["NAME"])
            ul += "</ul>"
            line = line.replace(tag,ul)
        if k == "p":
            posts = ''
            for page in data[m[1]]:
                if page != 'index':
                    posts += generateContent(m[1], page)
            line = line.replace(tag,posts)
        if k == "o":
            line = line.replace(tag,'Post ' + m[1] + '/100 of <a href="/thoughts/100-days-to-offload">#100DaysToOffload</a>')
        if k == "f":
            out = '<ol>'
            lis = {}
            for section in data:
                if section != 'devnull':
                    for page in data[section]:
                        if page != 'index':
                            for tmpLn in data[section][page]['BODY']:
                                if tmpLn[2:5] == '[o:':
                                    lis[tmpLn[5:8]] = '<em>'+data[section][page]['DATE'].replace('-','.')+'</em> ' + '<a href="/'+section+'/'+page+'">'+data[section][page]['NAME']+'</a>'
            for x in range(1,101):
                key = "{:03d}".format(x)
                if key in lis:
                    out += '<li>'+lis[key]+'</li>'
            out += '</ol>'
            line = line.replace(tag,out)
        if k == "l":
            link = m[1].split("|")
            url = link[0]
            target = ' target="_blank"' if url.startswith("http") else ""
            txt = link[1] if len(link) > 1 else link[0]
            if len(target):
                line = line.replace(tag,'<a href="{}"{}>{}</a>'.format(url,target,txt))
            elif url.startswith("#") or url.startswith("mailto:"):
                line = line.replace(tag,'<a href="{}">{}</a>'.format(url,txt))
            else:
                line = line.replace(tag,'<a href="{}">{}</a>'.format(basePath+url,txt))
        elif k == "d":
            ul = "<ul>"
            sec = m[1]
            showSubs = False
            if sec == 'index':
                tmpPages = []
                for x in data:
                    if x != 'index' and x != 'devnull' and '/' not in x:
                        tmpPages.append(x)
            elif '/' in sec:
                tmpPages = []
                sp = sec.split('/')
                sec = sp[0]
                showSubs = True
                for x in data[sp[0]]:
                    if x.startswith(sp[1]+'/'):
                        tmpPages.append(x)
            else:
                tmpPages = data[sec]
            for x in tmpPages:
                if sec == 'index':
                    page = data[x]['index']
                    ul += '<li><a href="{}">{}</a> {}'.format(basePath + page["LINK"].replace('/index',''),page["NAME"],page["DESC"])
                elif x != "index" and ('/' not in x or showSubs):
                    page = data[sec][x]
                    if sec == 'writing' or sec == 'art':
                        ul += '<li><strong>{}</strong> <a href="{}">{}</a><br>{}'.format(page["DATE"].replace("-","."),basePath + page["LINK"],page["NAME"],page["DESC"])
                    elif sec == 'thoughts':
                        ul += '<li><strong>{}</strong> <a href="{}">{}</a>'.format(page["DATE"].replace("-","."),basePath + page["LINK"],page["NAME"])
                    else:
                        ul += '<li><a href="{}">{}</a> {}'.format(basePath + page["LINK"],page["NAME"],page["DESC"])
            ul += "</ul>"
            line = line.replace(tag,ul)
        elif k == "e":
            if m[1] in emoji:
                line = line.replace(tag, ' <span class="emoji">&#{};</span>'.format(emoji[m[1]]))
        elif k == "z":
            if m[1] == 'read-prior' or m[1] == 'current':
                booksOut = '<ul>'
            else:
                booksOut = '<ol>'
            booksFile = open("../books/" + m[1] + ".txt", "r")
            for book in booksFile:
                book = book.strip()
                b = book.split(' | ')
                booksOut += '<li><strong>{}</strong> by <em>{}</em>'.format(b[0],b[1])
            booksFile.close()
            if m[1] == 'read-prior' or m[1] == 'current':
                booksOut += '</ul>'
            else:
                booksOut += '</ol>'
            line = line.replace(tag, booksOut)
        elif k == "t":
            line = line.replace(tag, ' <span class="tp">{}</span>'.format(m[1]))
        else:
            line = line.replace(tag, "<{}>{}</{}>".format(tplKey[k],m[1],tplKey[k]))

    return line

def generateContent(section, pg):
    output = ""

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
            if char in ["2","3","4","5","6"]:
                val = '<{} id="{}">{}</{}>'.format(key[char], re.sub('<[^<]+?>', '', tpl(text)).strip(), tpl(text), key[char])
            elif char == '1':
                val = '<{}>{} {}</{}>'.format(key[char], sectionEmoji(section), tpl(text), key[char])
            else:
                val = "<{}>{}</{}>".format(key[char], tpl(text), key[char])
            if char in ["*","_"]: val = "<p>%s</p>" % val
            output += val
                            
    # Close the list or pre if we still have one open
    if inList or inPre:
        output += "</%s>" % key[last]

    return output

def createPage(fileName, section, pg):
    print("    Creating file: " + fileName + ".html")

    output = generateContent(section, pg)

    finalOutput = header.replace("[TITLE]",data[section][pg]["NAME"])
    if section != 'index':
        if pg == 'index':
            finalOutput += '<a href="' + basePath + '">..</a>'
        elif '/' in pg:
            sp = pg.split('/')
            finalOutput += '<a href="' + basePath + section + '/' + sp[0] + '">..</a>'
        else:
            finalOutput += '<a href="' + basePath + section + '">..</a>'
    finalOutput += output
    if section in ['writing','projects','wiki','art','thoughts'] and pg != 'index':
        finalOutput += '<blockquote class="thanks">' + tpl('[e:wave] Hey! Thanks for reading! If you have any comments or questions about this post, or anything else, I\'d love to chat! You can find the best way to contact me on my [l:hello|hello page] or send me an [l:mailto:0xdstn@protonmail.com?subject=RE: '+data[section][pg]["NAME"]+'|email]') + '.</blockquote>'
    finalOutput += footer

    if data[section][pg]["DATE"] != "":
        data[section][pg]["RENDERED"] = output
        data[section][pg]["LINK"] = 'https://0xdstn.site/' + section + '/' + pg
        if section == "changelog" and page != 'index':
            xmlItemsChangelog[data[section][pg]["DATE"]+"_"+pg] = data[section][pg]
        elif section == "tokipona" and page != 'index':
            xmlItemsToki[data[section][pg]["DATE"]+"_"+pg] = data[section][pg]
        elif section != "devnull" and section != "tokipona" and page != 'index':
            xmlItems[data[section][pg]["DATE"]+"_"+pg] = data[section][pg]

    f = open(outPath + fileName + ".html", "w")
    f.write(finalOutput)
    f.close()

def parseData(df):
    for line in df:
        line = line.strip()
        if line == "":
            continue

        if line[0] == "~":
            pg = line[1:len(line)].split(" : ")
            url = pg[0].split("/")
            curSection = url[0]
            curPage = url[1]
            if len(url) == 3:
                curPage = url[1] + '/' + url[2]

            if curSection not in data: 
                data[curSection] = {}

            data[curSection][curPage] = {
                "NAME": pg[1],
                "DESC": pg[2],
                "LINK" : pg[0],
                "BODY" : [],
				"DATE" : pg[3] if len(pg) > 3  else ""
            }
        else:
            if curPage == "" or curSection == "":
                continue
            data[curSection][curPage]["BODY"].append(line)

xmlItems = {}
xmlItemsChangelog = {}
xmlItemsToki = {}
data = {}
curSection = ""
curPage = ""

dataFile = open(srcPath + "data.txt", "r")
parseData(dataFile)
dataFile.close()

devnull= open(srcPath + "devnull.txt", "r")
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

xmlOutput = ""
xmlKeys = []
for i in xmlItems:
    xmlKeys.append(i)

xmlKeys.sort()

xmlOutput += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1" xmlns:content="http://purl.org/rss/1.0/modules/content">\n'
xmlOutput += '  <channel>\n'
xmlOutput += '    <title>0xdstn</title>\n'
xmlOutput += '    <link>https://0xdstn.site' + basePath + '</link>\n'
xmlOutput += '    <description>~dustin</description>\n'
xmlOutput += '    <language>en-us</language>\n'
xmlOutput += '    <atom:link href="https://0xdstn.site' + basePath + 'index.xml" rel="self" type="application/rss+xml" />\n'

for i in xmlKeys:
    item = xmlItems[i]
    d = datetime.datetime.strptime(item["DATE"], '%Y-%m-%d')
    xmlOutput += '      <item>\n'
    xmlOutput += '        <title>' + item["NAME"] + '</title>\n'
    xmlOutput += '        <link>' + item["LINK"] + '</link>\n'
    xmlOutput += '        <guid>' + item["LINK"] + '</guid>\n'
    xmlOutput += '        <dc:creator>~dustin</dc:creator>\n'
    xmlOutput += '        <pubDate>' + d.strftime("%a, %d %b %Y %H:%M:%S %z") + '</pubDate>\n'
    xmlOutput += '        <description><![CDATA[' + item["RENDERED"] + ']]></description>\n'
    xmlOutput += '        <content:encoded>' + html.escape(item["RENDERED"]) + '</content:encoded>\n'
    xmlOutput += '      </item>\n'

xmlOutput += '  </channel>\n'
xmlOutput += '</rss>'

f = open(outPath + "index.xml", "w")
f.write(xmlOutput)
f.close()

xmlOutputChangelog = ""
xmlKeysChangelog = []
for i in xmlItemsChangelog:
    xmlKeysChangelog.append(i)

xmlKeysChangelog.sort()

xmlOutputChangelog += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1" xmlns:content="http://purl.org/rss/1.0/modules/content">\n'
xmlOutputChangelog += '  <channel>\n'
xmlOutputChangelog += '    <title>0xdstn Changelog</title>\n'
xmlOutputChangelog += '    <link>https://0xdstn.site' + basePath + '/changelog</link>\n'
xmlOutputChangelog += '    <description>0xdstn</description>\n'
xmlOutputChangelog += '    <language>en-us</language>\n'
xmlOutputChangelog += '    <atom:link href="https://0xdstn.site' + basePath + 'changelog.xml" rel="self" type="application/rss+xml" />\n'

for i in xmlKeysChangelog:
    item = xmlItemsChangelog[i]
    d = datetime.datetime.strptime(item["DATE"], '%Y-%m-%d')
    xmlOutputChangelog += '      <item>\n'
    xmlOutputChangelog += '        <title>' + item["NAME"] + '</title>\n'
    xmlOutputChangelog += '        <link>' + item["LINK"] + '</link>\n'
    xmlOutputChangelog += '        <guid>' + item["LINK"] + '</guid>\n'
    xmlOutputChangelog += '        <dc:creator>0xdstn</dc:creator>\n'
    xmlOutputChangelog += '        <pubDate>' + d.strftime("%a, %d %b %Y %H:%M:%S %z") + '</pubDate>\n'
    xmlOutputChangelog += '        <description><![CDATA[' + item["RENDERED"] + ']]></description>\n'
    xmlOutputChangelog += '        <content:encoded>' + html.escape(item["RENDERED"]) + '</content:encoded>\n'
    xmlOutputChangelog += '      </item>\n'

xmlOutputChangelog += '  </channel>\n'
xmlOutputChangelog += '</rss>'

f = open(outPath + "changelog.xml", "w")
f.write(xmlOutputChangelog)
f.close()

xmlOutputToki = ""
xmlKeysToki = []
for i in xmlItemsToki:
    xmlKeysToki.append(i)

xmlKeysToki.sort()

xmlOutputToki += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1" xmlns:content="http://purl.org/rss/1.0/modules/content">\n'
xmlOutputToki += '  <channel>\n'
xmlOutputToki += '    <title>0xdstn - toki pona</title>\n'
xmlOutputToki += '    <link>https://0xdstn.site' + basePath + '/tokipona</link>\n'
xmlOutputToki += '    <description>0xdstn</description>\n'
xmlOutputToki += '    <language>en-us</language>\n'
xmlOutputToki += '    <atom:link href="https://0xdstn.site' + basePath + 'tokipona.xml" rel="self" type="application/rss+xml" />\n'

for i in xmlKeysToki:
    item = xmlItemsToki[i]
    d = datetime.datetime.strptime(item["DATE"], '%Y-%m-%d')
    xmlOutputToki += '      <item>\n'
    xmlOutputToki += '        <title>' + item["NAME"] + '</title>\n'
    xmlOutputToki += '        <link>' + item["LINK"] + '</link>\n'
    xmlOutputToki += '        <guid>' + item["LINK"] + '</guid>\n'
    xmlOutputToki += '        <dc:creator>~dustin</dc:creator>\n'
    xmlOutputToki += '        <pubDate>' + d.strftime("%a, %d %b %Y %H:%M:%S %z") + '</pubDate>\n'
    xmlOutputToki += '        <description><![CDATA[' + item["RENDERED"] + ']]></description>\n'
    xmlOutputToki += '        <content:encoded>' + html.escape(item["RENDERED"]) + '</content:encoded>\n'
    xmlOutputToki += '      </item>\n'

xmlOutputToki += '  </channel>\n'
xmlOutputToki += '</rss>'

f = open(outPath + "tokipona.xml", "w")
f.write(xmlOutputToki)
f.close()

def createLinkdump(output,num,curDate):
    title = 'Linkdump #'+num + ' (' + curDate + ')'
    finalOutput = header.replace("[TITLE]",title)
    finalOutput += '<h1>'+title+'</h1>'
    finalOutput += '<ul>'
    finalOutput += output
    finalOutput += '</ul>'
    finalOutput += footer
    f = open(outPath + 'linkdump/' + num + ".html", "w")
    f.write(finalOutput)
    f.close()

def linkdumpEmoji(linkType):
    e = ''
    if linkType == 'V':
        e = 'video'
    elif linkType == 'A':
        e = 'paper'
    elif linkType == 'S':
        e = 'web'
    elif linkType == 'M':
        e = 'headphones'
    elif linkType == 'T':
        e = 'book'
    else:
        return ''
    return '<span class="emoji">&#{};</span>'.format(emoji[e])

linkdumpFile = open(srcPath + "linkdump.txt", "r")

curDump = 1
padded = '001' 
curDate = ''
output = ''
dumpLinks = ''
for line in linkdumpFile:
    if line != '' and line != '\n':
        sp = line.split(' | ')
        dsp = sp[0].split('-')
        em = ''
        if curDate == '':
            curDate = dsp[0]+'-'+dsp[1]
        if curDate != dsp[0]+'-'+dsp[1]:
            # TODO: generate html here
            createLinkdump(output,padded,curDate)
            dumpLinks += '<li><a href="'+basePath+'linkdump/'+padded+'.html">Linkdump #'+padded+'</a> <em>('+curDate+')</em></li>'
            curDump += 1
            curDate = dsp[0]+'-'+dsp[1]
            padded = str(curDump).zfill(3)
            output = ''
        output += '<li>'+linkdumpEmoji(sp[1])+' <a href="'+sp[2]+'" target="_blank">' + sp[3] + '</a> <em>('+sp[0]+')</em><br />'+sp[4]+'</li>'
createLinkdump(output,padded,curDate)
dumpLinks += '<li><a href="'+basePath+'linkdump/'+padded+'.html">Linkdump #'+padded+'</a> <em>('+curDate+')</em></li>'
linkdumpFile.close()

linkdumpIndexOutput = header.replace("[TITLE]","Linkdumps")
linkdumpIndexOutput += '<h1>Linkdumps</h1>'
linkdumpIndexOutput += '<ul>'
linkdumpIndexOutput += dumpLinks
linkdumpIndexOutput += '</ul>'
linkdumpIndexOutput += footer
f = open(outPath + "linkdump/index.html", "w")
f.write(linkdumpIndexOutput)
f.close()
