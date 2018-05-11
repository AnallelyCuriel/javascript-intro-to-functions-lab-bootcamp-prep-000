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

}