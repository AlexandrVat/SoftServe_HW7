document.getElementById('wd').innerText = document.documentElement.clientWidth;
document.getElementById('ht').innerText = document.documentElement.clientHeight


function ref(){
//    console.log(document.documentElement.clientWidth);
//    console.log(document.documentElement.clientHeight);  
  document.getElementById('wd').innerText = document.documentElement.clientWidth;
  document.getElementById('ht').innerText = document.documentElement.clientHeight;
}

window.onresize = ref;