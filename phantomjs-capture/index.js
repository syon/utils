"use strict";
var fs        = require('fs');
var child     = require('child_process');
var phantomjs = require('phantomjs');

const vp_w = 980;
const vp_h = 768;

var array = fs.readFileSync('targets.txt').toString().split("\n");
var targets = [];
array.forEach((a, i) => {
  let t = {
    url: a,
    out: `results/${i}.png`
  }
  if (a.length > 0) targets.push(t);
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
