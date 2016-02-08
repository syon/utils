"use strict";
let fs        = require('fs');
let child     = require('child_process');
let phantomjs = require('phantomjs-prebuilt');

const vp_w = 980;
const vp_h = 768;

let txt = fs.readFileSync('targets.txt').toString();
let urls = txt.replace(/\r/g, '').split("\n");
let targets = [];
urls.forEach((line, i) => {
  let d = line.split("\t");
  let t = {
    out: `results/${d[0]}.png`,
    url: d[1]
  }
  if (d.length == 2) targets.push(t);
});

let promises = [];
for (const t of targets) {
  let options = ["render.js", t.url, t.out, vp_w, vp_h];
  let childPromise = new Promise((resolve) => {
    child.execFile(phantomjs.path, options, (error, stdout, stderr) => {
      if (error != null) {
        console.error(stderr);
      }
      else {
        console.log(stdout);
      }
      resolve();
    });
  });
  promises.push(childPromise);
}

Promise
  .all(promises)
  .then((results) => {
    console.log("Done.");
  });
