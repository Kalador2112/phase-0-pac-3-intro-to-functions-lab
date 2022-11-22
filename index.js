function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
     console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}




function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
     const string = "I can't hear you!"
     return string
   } else if (string === string.toUpperCase()) {
     const string = "YES INDEED!"
     return string
   } else {
     const string = "I would love to!"
     return string
   }
}

sayHiToHeadphonedRoommate("let's have dinner together!")
sayHiToHeadphonedRoommate("LET'S HAVE DINNER TOGETHER!")
sayHiToHeadphonedRoommate("Let's have dinner together!")
 