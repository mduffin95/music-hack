var conductor = new BandJS();
conductor.setTimeSignature(4,4);
conductor.setTempo(120);
var piano = conductor.createInstrument();
piano.setVolume(100);
conductor.setOnFinishedCallback(newBar);
function newBar(){

}
piano.note('quarter', 'C4');
piano.note('quarter', 'D4');
piano.note('quarter', 'E4');
var player = conductor.finish();
