"use strict";

function lukin(mi) {
  const lines = mi.split("\n");
  let output = {};

  let curSection = '';
  let curPage = '';
  lines.forEach((line) => {
    if (line === '') return; 

    if (line[0] === '~') {

      let pg = line.substr(1,line.length).split(' : ')
      let url = pg[0].split('/');

      curSection = url[0];
      curPage = url[1] || 'index';
      if (output[curSection] === undefined) output[curSection] = {};
      
      output[curSection][curPage] = {
        NAME: pg[1],
        DESC: pg[2],
        LINK : pg[0],
        BODY : []
      };
    }
    else {
      if (!curPage || !curSection) return;
      output[curSection][curPage].BODY.push(line);
    }
  });

  return output;
}
if (typeof module !== 'undefined') module.exports = lukin; 
