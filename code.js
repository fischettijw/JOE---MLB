onEvent("imgMLB", "click", function( ) {
  setScreen("srnJWF");
});
onEvent("btnMets", "click", function(event) {
  setScreen("srnMets");
});
onEvent("btnReturnMets", "click", function( ) {
  setScreen("srnMaster");
});
onEvent("btnMetsReturn", "click", function( ) {
  setScreen("srnMaster");
});
onEvent("btnPhillies", "click", function(event) {
  setScreen("srnPhillies");
});
onEvent("btnPhillieReturn", "click", function(event) {
  setScreen("srnMaster");
});
onEvent("btnBraves", "click", function(event) {
  setScreen("srnBraves");
});
onEvent("btnBravesReturn", "click", function(event) {
  setScreen("srnMaster");
});
onEvent("btnNationals", "click", function(event) {
  setScreen("srnNationals");
});
onEvent("btnNationalsReturn", "click", function(event) {
  setScreen("srnMaster");
});
onEvent("btnMarlins", "click", function(event) {
  setScreen("srnMarlins");
});
onEvent("btnMarlinsReturn", "click", function(event) {
  setScreen("srnMaster");
});
onEvent("btnJWFreturn", "click", function( ) {
  setScreen("srnMaster");
});
onEvent("cbxMusic", "change", function(event) {
  if (getChecked("cbxMusic")) {
    playSound("assets/Take Me OutToTheBallgame.mp3", true);
  } else {
    stopSound("assets/Take Me OutToTheBallgame.mp3");
  }
});
