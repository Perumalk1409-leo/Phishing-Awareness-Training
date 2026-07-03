function checkQuiz(){

let score=0;

let q1=document.querySelector('input[name="q1"]:checked');

let q2=document.querySelector('input[name="q2"]:checked');

let q3=document.querySelector('input[name="q3"]:checked');

if(q1) score+=parseInt(q1.value);

if(q2) score+=parseInt(q2.value);

if(q3) score+=parseInt(q3.value);

let result="";

if(score==3){

result="Excellent! You are phishing aware.";

}

else if(score==2){

result="Good! Review phishing tips again.";

}

else{

result="Needs Improvement. Please study the training.";

}

document.getElementById("score").innerHTML=

"Your Score: "+score+"/3<br>"+result;

}