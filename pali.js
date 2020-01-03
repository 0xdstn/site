const basePath = '/~dustin/';

// Imports
var fs = require('fs');
var rimraf = require('rimraf');

var mi = require('./assets/scripts/mi.js');
var lipu = require('./assets/scripts/lib/lipu.js');
var lukin = require('./assets/scripts/lib/lukin.js');

// HTML
var header = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700|PT+Sans:400,400i,700,700i&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="${basePath}assets/styles/main.css" />
    <title>Dustin</title>
  </head>
  <body>
    <div class="container">

      <header>
        <a class="logo" href="${basePath}" onclick="return linkClick(event);">D</a>
        <nav>
          <a href="${basePath}wiki/about" onclick="return linkClick(event);">About</a> <a href="${basePath}wiki" onclick="return linkClick(event);">Wiki</a> <a href="${basePath}projects" onclick="return linkClick(event);">Projects</a> <a href="${basePath}thoughts" onclick="return linkClick(event);">Thoughts</a>
        </nav>
      </header>

      <div id="content">`;

var footer = `</div>
    </div>
      <footer>
        <p class="thanks">Thanks for reading!</p>
        <p>
         <a href="${basePath}wiki/about" onclick="return linkClick(event);">About</a> <a href="${basePath}wiki" onclick="return linkClick(event);">Wiki</a> <a href="${basePath}projects" onclick="return linkClick(event);">Projects</a> <a href="${basePath}thoughts" onclick="return linkClick(event);">Thoughts</a>
        </p>
        <p>
        <a href="https://github.com/0xdstn" target="_blank">Github</a> <a href="mailto:0xdstn@protonmail.com">Email</a>
        </p>
				<p>
					<a href="https://webring.xxiivv.com/#random" target="_blank" class="webring">
						<img src="https://webring.xxiivv.com/icon.black.svg"/>
					</a>
				</p>
      </footer>
    <script type="text/javascript">const basePath = "${basePath}";</script>
    <script type="text/javascript" src="${basePath}assets/scripts/lib/lukin.js"></script>
    <script type="text/javascript" src="${basePath}assets/scripts/lib/lipu.js"></script>
    <script type="text/javascript" src="${basePath}assets/scripts/mi.js"></script>
    <script type="text/javascript" src="${basePath}assets/scripts/main.js"></script>
  </body>
</html>`;

// Load data
const data = lukin(mi);

// Loop through each section
for (var section in data) {
  console.log('[*] SECTION ' + section);

  // Recursively remove dir if exists
  if (fs.existsSync(section)){
    rimraf.sync(section);
  }

  // Create the dir
  console.log(`    Creating dir: ${section}`);
  fs.mkdirSync(section);

  console.log('');

  // Create html files for this section
  for (var page in data[section]) {
    console.log('[+] PAGE ' + page);

    // Index page
    if (page === 'index') {
      // Create the html file
      if (section === 'index') {
        console.log(`    Creating file: ${page}.html`);
        fs.writeFile(`${page}.html`,header + lipu(data, section, page, basePath) + footer, () => {});
      }
      else {
        console.log(`    Creating file: ${section}/${page}.html`);
        fs.writeFile(`${section}/${page}.html`,header + lipu(data, section, page, basePath) + footer, () => {});
      }
    } 
    // Sub page
    else {

      // Create the dir
      fs.mkdirSync(`${section}/${page}`);
      console.log(`    Creating dir: ${section}/${page}`);

      // Create the html file
      console.log(`    Creating file: ${section}/${page}/index.html`);
      fs.writeFile(`${section}/${page}/index.html`,header + lipu(data, section, page, basePath) + footer, () => {});
    }

    console.log('');
  }

  console.log('---');
  console.log('');
}

