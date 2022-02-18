function dis(val){
  document.getElementById('result').value+=val;
}
function sol(){
  let x =
  document.getElementById('result').value;
  let y = eval(x) 
  document.getElementById('result').value=y;
}
function clr(){
  document.getElementById('result').value='';
}
alert(
  '  Welcome to Manmeet calculator' );
