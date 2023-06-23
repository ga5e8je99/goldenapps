let inpN = document.getElementById("uname");
let inpP = document.getElementById("password");
let seeP = document.getElementById("spass");
let pN= document.getElementById("placeusername");
let pP= document.getElementById("placepassword");
let iconp= document.querySelector("#spass i");
//user name
function focN(){
  pN. .transform="translate(150%,-63%)";
  pN. .transition="all 0.5s";
}
function bloN(){
  if(inpN.value==""){
    pN. .transform="translate(150%,63%)";
  pN. .transition="all 0.5s";
  }
}
//user password
function focP(){
  pP. .transform="translate(150%,-63%)";
  pP. .transition="all 0.5s";
}
function bloP(){
  if(inpP.value==""){
    pP. .transform="translate(150%,63%)";
  pP. .transition="all 0.5s";
  }
}
//see pass

function sp(){
  if(inpP.type===password){
    inpP.type=text;
    
  }
  else{
    inpP.type=password;
    
  }
}
