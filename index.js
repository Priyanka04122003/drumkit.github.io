function sounds(){
  if(document.activeElement.id=='w'){
    var audio=new Audio("tom-1.mp3");
    audio.play();
  }
  else if(document.activeElement.id=='a'){
    var audio=new Audio("tom-2.mp3");
    audio.play();
  }
  else if(document.activeElement.id=='s'){
    var audio=new Audio("tom-3.mp3");
    audio.play();
  }
  else if(document.activeElement.id=='d'){
    var audio=new Audio("tom-4.mp3");
    audio.play();
  }
  else if(document.activeElement.id=='j'){
    var audio=new Audio("kick-bass.mp3");
    audio.play();
  }
  else if(document.activeElement.id=='k'){
    var audio=new Audio("snare.mp3");
    audio.play();
  }
  else if(document.activeElement.id=='l'){
    var audio=new Audio("crash.mp3");
    audio.play();
  }
}

document.addEventListener("keypress",function(event){
  if(event.key=='w'){
    var audio=new Audio('tom-1.mp3');
    audio.play();
    ducument.getElementById('w').classlist.add('add');
    setInterval(() => {
      ducument.getElementById('w').classlist.remove('add');
    }, 200)
  }
  else if(event.key=='a'){
    var audio=new Audio('tom-2.mp3');
    audio.play();
    ducument.getElementById('a').classlist.add('add');
    setInterval(() => {
      ducument.getElementById('a').classlist.remove('add');
    }, 200)
  }
  else if(event.key=='s'){
    var audio=new Audio('tom-3.mp3');
    audio.play();
    ducument.getElementById('s').classlist.add('add');
    setInterval(() => {
      ducument.getElementById('s').classlist.remove('add');
    }, 200)
  }
  else if(event.key=='d'){
    var audio=new Audio('tom-4.mp3');
    audio.play();
    ducument.getElementById('d').classlist.add('add');
    setInterval(() => {
      ducument.getElementById('d').classlist.remove('add');
    }, 200)
  }
  else if(event.key=='j'){
    var audio=new Audio('kick-bass.mp3');
    audio.play();
    ducument.getElementById('j').classlist.add('add');
    setInterval(() => {
      ducument.getElementById('j').classlist.remove('add');
    }, 200)
  }
  else if(event.key=='k'){
    var audio=new Audio('snare.mp3');
    audio.play();
    ducument.getElementById('k').classlist.add('add');
    setInterval(() => {
      ducument.getElementById('k').classlist.remove('add');
    }, 200)
  }
  else if(event.key=='l'){
    var audio=new Audio('crash.mp3');
    audio.play();
    ducument.getElementById('l').classlist.add('add');
    setInterval(() => {
      ducument.getElementById('l').classlist.remove('add');
    }, 200)
  }
})