function sum(){
  let a = document.querySelector(".teste").value;
  let b = document.querySelector(".teste2").value;
  let result = parseInt(a) + parseInt(b);
  document.querySelector(".output").innerHTML = "the sum of " + a +" and " +b +" is: " + result;      
}
function mult(){
  let a = document.querySelector(".teste").value;
  let b = document.querySelector(".teste2").value;
  let result = parseInt(a)*parseInt(b);
  document.querySelector(".output").innerHTML = "the multiplication of " + a +" and " +b +" is: " + result;     
}
function div(){
  let a = document.querySelector(".teste").value;
  let b = document.querySelector(".teste2").value;
  let result = parseInt(a)/parseInt(b);
  document.querySelector(".output").innerHTML = "the division of " + a +" and " +b +" is: " + result; 
  if (a == 0 && b == 0) {
    document.querySelector(".output").innerHTML = "error!";
    document.querySelector(".output").style.cssText="color:red;";
  }    
}