function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
var valString
if(string.toLowerCase() === string){
 valString=string.toUpperCase()
}else{
  valString=string
}
 console.log(valString)
}

function logWhisper(string){

  var valString
if(string.toUpperCase() === string){
 valString=string.toLowerCase()
}else{
  valString=string
}
 console.log(valString)
}

function sayHiToGrandma(string){
  if(string.toLowerCase()=== string){
    console.log("I can\'t hear you!")
  }else if(string.toUpperCase()=== string){
    console.log("YES INDEED!")
  }else if(string.equalsTo("I love you, Grandma.")){
    console.log("")
  }
  
  
}