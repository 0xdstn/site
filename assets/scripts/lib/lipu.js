"use strict";

function lipu(mi,section,pg) {
  const page = mi[section][pg];
  const lines = page.BODY;
  const key = {
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
    _: "em"
  };

  const tplKey = {
    b: "strong",
    i: "em",
    l: "a",
    d: "directory",
    p: "page"
  };

  function findMatches(line) {

    let matches = [];
    let regex = /\[([a-z]{1}):(.*?)\]/g;

    if (String.prototype.matchAll !== undefined) {
      matches = [...line.matchAll(regex)];
    } else {
      let match = regex.exec(line);
      while (match !== null) {
        matches.push(match);
        match = regex.exec(line);
      }
    }

    return matches;
  }

  function tpl(line) {
    const matches = findMatches(line);
    matches.forEach(m => {
      const k = m[1];
      if (!tplKey[k]) return false;
      if (k === "l") {
        const link = m[2].split("|");
        const url = link[0].replace("#","");
        const target = url.indexOf("http") > -1 ? ' target="_blank"' : "";
        let txt = link[1] || link[0];
        if (txt.substr(0, 1) == "#") txt = txt.substr(1, txt.length);
        if( target.length ) {
          line = line.replace(m[0], `<a href="${url}"${target}>${txt}</a>`);
        }
        else {
          line = line.replace(m[0], `<a href="/~dustin/${url}" onclick="return linkClick(event);">${txt}</a>`);
        }
      } else if (k === "p" && page[m[2]]) {
        line = line.replace(m[0], page[m[2]]);
      } else if (k === "d") {
        let list = `<div class="posts">`;
        for (let x in mi[m[2]]) {
          const page = mi[m[2]][x];
          if (x !== "index") {
            let subtext = (m[2] === 'thoughts' ? page.DATE : page.DESC);
            list += `
              <div class="post">
                <span>
                  <a href="/~dustin/${page.LINK}" onclick="return linkClick(event);">${page.NAME}</a><br>
                  <span class="sub">${page.DESC}</span>
                </span>
              </div>`;
          }
        }
        list += "</div>";
        line = line.replace(m[0], list);
      } else {
        line = line.replace(m[0], `<${tplKey[k]}>${m[2]}</${tplKey[k]}>`);
      }
    });
    return line;
  }

  let output = "";
  let inList = false;
  let prev = "";

  lines.forEach(l => {
    let text = l.substr(2, l.length);
    const char = l.substr(0, 1);
    const last = prev;
    prev = char;
    if (char === "!") output += text; // Raw html
    if (char === "/") return false; // Comment
    if (!key[char]) return false; // Invalid

    // List item
    if (["-", "#"].includes(char)) {
      if (inList && last !== char) output += `</${key[last]}>`;
      if (last !== char) output += `<${key[char]}>`;
      output += `<li>${tpl(text)}</li>`;
      inList = true;
    } else if (char === "@") {
      const hasLink = text.indexOf("|") > -1;
      if (hasLink) {
        const sp = text.split("|");
        const link = sp[1];
        const target =
          link.indexOf("http") > -1 || link.substr(0, 1) === "/"
            ? ' target="_blank"'
            : "";
        text = sp[0];

        if( target.length ) {
          output += `<a class="img" href="${link}"${target}>`;
        }
        else {
          output += `<a class="img" href="/~dustin/${link}">`;
        }
      }
      output += `<img src="/~dustin/${text}">`;
      if (hasLink) output += "</a>";
    } else {
      if (inList) {
        output += `</${key[last]}>`;
        inList = false;
      }
      const title = char === "^" ? ' class="title"' : "";
      let val = `<${key[char]}${title}>${tpl(text)}</${key[char]}>`;
      if (["*", "_"].includes(char)) val = `<p>${val}</p>`;
      output += val;
    }
  });

  return output;
}

if (typeof module !== 'undefined') module.exports = lipu;
