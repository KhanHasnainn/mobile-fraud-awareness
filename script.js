window.onload=function(){

alert("Warning: Never share OTP or bank details with anyone. Stay safe from mobile fraud!");

}
function checkAnswer(correct){

if(correct){
document.getElementById("result").innerHTML="Correct! Never share OTP.";
}

else{
document.getElementById("result").innerHTML="Wrong! OTP should never be shared.";
}

}
function darkMode(){
document.body.classList.toggle("dark");
}