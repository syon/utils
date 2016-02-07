var page = require('webpage').create();

var address = phantom.args[0];
var output  = phantom.args[1];
var vp_w    = phantom.args[2];
var vp_h    = phantom.args[3];

console.log(address + " -> " + output);

page.viewportSize = {
  width:   vp_w,
  height:  vp_h,
  margin:  "0px",
  padding: "0px"
};

page.open(address, function (status) {
  if (status == 'success') {
    page.render(output);
    phantom.exit();
  } else {
    console.log('error', address);
  }
});
