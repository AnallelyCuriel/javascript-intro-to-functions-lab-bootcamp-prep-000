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

function whisper(string){
  if(string===string.toUpperCase()){
    console.log(string.toLowerCase()) 
  }
  
}