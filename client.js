//client js
console.log("test");
var conductor = new BandJS();
conductor.setTimeSignature(4,4);
conductor.setTempo(120);
var inst = conductor.createInstrument();
var guitar = conductor.createInstrument('triangle');
var bass = conductor.createInstrument('sawtooth');


inst.setVolume(100);
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
      case 88:
      if(keysHeld[1] === 0){
        keysHeld[1] = 1;
        console.log("D");
      }
      break;
      case 67:
      if(keysHeld[2] === 0){
        keysHeld[2] = 1;
        console.log("E");
      }
      break;
      case 86:
      if(keysHeld[3] === 0){
        keysHeld[3] = 1;
        console.log("F");
      }
      break;
      case 66:
      if(keysHeld[4] === 0){
        keysHeld[4] = 1;
        console.log("G");
      }
      break;
      case 78:
      if(keysHeld[5] === 0){
        keysHeld[5] = 1;
        console.log("A");
      }
      break;
      case 77:
      if(keysHeld[6] === 0){
        keysHeld[6] = 1;
        console.log("B");
      }
      break;
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
    inst.note(getLength(keysHeld[0]), 'C4');
    keysHeld[0] = 0;
    break;
    case 88:
    console.log("C held for " + getLength(keysHeld[1]));
    inst.note(getLength(keysHeld[1]), 'D4');
    keysHeld[1] = 0;
    break;
    case 67:
    console.log("C held for " + getLength(keysHeld[2]));
    inst.note(getLength(keysHeld[2]), 'E4');
    keysHeld[2] = 0;
    break;
    case 86:
    console.log("C held for " + getLength(keysHeld[3]));
    inst.note(getLength(keysHeld[3]), 'F4');
    keysHeld[3] = 0;
    break;
    case 66:
    console.log("C held for " + getLength(keysHeld[4]));
    inst.note(getLength(keysHeld[4]), 'G4');
    keysHeld[4] = 0;
    break;
    case 78:
    console.log("C held for " + getLength(keysHeld[5]));
    inst.note(getLength(keysHeld[5]), 'A4');
    keysHeld[5] = 0;
    break;
    case 77:
    console.log("C held for " + getLength(keysHeld[6]));
    inst.note(getLength(keysHeld[6]), 'B4');
    keysHeld[6] = 0;
    break;
}
});

function getLength(len){
if(len <= 1){
  return 'eighth';
}else if(len == 2){
  return 'quarter';
}else if(len < 4){
  return 'half';
}else{
  return 'whole';
}

}
