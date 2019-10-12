// Parse the data
const mi = lukin(MI);

function route() {
  const hash = window.location.hash.replace('#','');
  if( hash ) {
    window.history.pushState("", "", '/' + hash);
  }

  var  pathname = window.location.pathname.replace(basePath.replace('/','\/').replace('~','\~'),'');
  if (pathname.charAt(pathname.length - 1) == '/') {
      pathname = pathname.substr(0, pathname.length - 1);
  }
  if (pathname.charAt(0) == '/') {
      pathname = pathname.substr(1, pathname.length);
  }
  const loc = pathname.split('/');

  if( loc[0] === "") loc[0] = 'index';
  if( loc[1] === undefined) loc[1] = 'index';

  var html = '';

  if (loc.length !== 2 || mi[loc[0]][loc[1]] === undefined) {
    html = '404';
  } else {
    html = lipu(mi,loc[0],loc[1],basePath);
  }

  document.getElementById("content").innerHTML = html;
}

route();
window.onhashchange = () => route();
window.onpopstate = () => route();

function linkClick(e) {
  e.preventDefault();
  window.history.pushState("", "", e.target.href);
  route();
}
