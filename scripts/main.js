let a = 0;
let b = 0;
function myFunction1() {
  document.getElementById('counter-box1').innerText = a += 1;
};
function myFunction2() {
  document.getElementById('counter-box2').innerText = b += 1;
};
function clearFunction1() {
  document.getElementById('counter-box1').innerText = a = 0;
  document.getElementById('counter-box2').innerText = b = 0;
}
