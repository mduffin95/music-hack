//client js
console.log("test");
var conductor = new BandJS();
conductor.setTimeSignature(4,4);
conductor.setTempo(120);
var piano = conductor.createInstrument();
conductor.setOnFinishedCallback(callback);

document.addEventListener('keydown', function(event) {
    switch(event.keyCode){
      case 67:
      console.log("C");
      piano.note('quarter', 'C4');
      piano.play();
      break;


    }
});
