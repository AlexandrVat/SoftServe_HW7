
let openWnd = window.open('', '', 'width=300,height=300,left=400,top=400');


setTimeout(function(){ openWnd.resizeTo(500,500) }, 2000);

setTimeout(function(){ openWnd.moveTo(200,200)  }, 4000);

setTimeout(function() {openWnd.close()}, 6000);

/*
const myTimeout = setTimeout(myGt, 2000);

function myGt() {
    openWnd.resizeTo(500,500);
}
*/
