//client js
console.log("test");
var conductor = new BandJS();
conductor.setTimeSignature(4,4);
conductor.setTempo(120);
var piano = conductor.createInstrument();
piano.setVolume(100);
conductor.setOnFinishedCallback(newBar);
function newBar(){

}
var keysHeld = [0,0,0,0,0,0,0,0];
setInterval(checkKeysDown, 1000*60/120/8  );

function checkKeysDown(){
for(var i=0;i<keysHeld.length;i++){
  if(keysHeld[i] !== 0){
    console.log(keysHeld);
    keysHeld[i]++;
    //key = 0;
  }
}
}

document.addEventListener('keydown', function(event) {
    switch(event.keyCode){
      case 90:
      if(keysHeld[0] === 0){
        keysHeld[0] = 1;
        console.log("C");
      }
      break;

      /*
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
      break;*/
      case 13:
      console.log("enter");
      var player = conductor.finish();
      player.play();
      player.loop(true);
    }

});
document.addEventListener('keyup', function(event) {
  switch(event.keyCode){
    case 90:
    console.log("C held for " + getLength(keysHeld[0]));
    piano.note(getLength(keysHeld[0]), 'C4');
    keysHeld[0] = 0;
    break;
    case 88:
    console.log("C held for " + getLength(keysHeld[0]));
    piano.note(getLength(keysHeld[0]), 'C4');
    keysHeld[0] = 0;
    break;
    case 67:
    console.log("C held for " + getLength(keysHeld[0]));
    piano.note(getLength(keysHeld[0]), 'C4');
    keysHeld[0] = 0;
    break;
    case 86:
    console.log("C held for " + getLength(keysHeld[0]));
    piano.note(getLength(keysHeld[0]), 'C4');
    keysHeld[0] = 0;
    break;
    case 66:
    console.log("C held for " + getLength(keysHeld[0]));
    piano.note(getLength(keysHeld[0]), 'C4');
    keysHeld[0] = 0;
    break;
    case 78:
    console.log("C held for " + getLength(keysHeld[0]));
    piano.note(getLength(keysHeld[0]), 'C4');
    keysHeld[0] = 0;
    break;
    case 77:
    console.log("C held for " + getLength(keysHeld[0]));
    piano.note(getLength(keysHeld[0]), 'C4');
    keysHeld[0] = 0;
    break;
}
});

function getLength(len){
if(len == 1){
  return 'eighth';
}else if(len == 2){
  return 'quarter';
}else if(len < 4){
  return 'half';
}else{
  return 'whole';
}

}
