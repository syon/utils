var page   = require('webpage').create();
var system = require('system');

var address = system.args[1];
var output  = system.args[2];
var vp_w    = system.args[3];
var vp_h    = system.args[4];

page.viewportSize = {
  width:   vp_w,
  height:  vp_h,
  margin:  "0px",
  padding: "0px"
};

page.open(address, function (status) {
  console.log("URL:", address);
  console.log("OUT:", output);
  if (status == 'success') {
    window.setTimeout(function () {
      page.render(output);
      console.log("Success.");
      phantom.exit();
    }, 500); // Wait after loaded
  } else {
    console.log('error');
    phantom.exit();
  }
});
