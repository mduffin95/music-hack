//client js
console.log("test");
var conductor = new BandJS();
conductor.setTimeSignature(4,4);
conductor.setTempo(120);
var piano = conductor.createInstrument();
conductor.setOnFinishedCallback(newBar);
function newBar(){

}

document.addEventListener('keydown', function(event) {
    switch(event.keyCode){
      case 90:
      console.log("C");
      piano.note('quarter', 'C4');
      break;
      case 88:
      console.log("D");
      piano.note('quarter', 'D4');
      break;
      case 67:
      console.log("E");
      piano.note('quarter', 'E4');
      break;
      case 86:
      console.log("F");
      piano.note('quarter', 'F4');
      break;
      case 66:
      console.log("G");
      piano.note('quarter', 'G4');
      break;
      case 78:
      console.log("A");
      piano.note('quarter', 'A4');
      break;
      case 77:
      console.log("B");
      piano.note('quarter', 'B4');
      break;
      case 13:
      console.log("enter");
      var player = conductor.finish();
      player.play();
      player.loop(true);

    }
});
