let bnt1 = document.getElementById('btn1');
let bnt2 = document.getElementById('btn2');
let bnt3 = document.getElementById('btn3');
let ref = document.getElementById('linkRef');

function chkBackground(event){
    if(event.type == 'click'){
        console.log(1);
        if (event.target.id=='btn1'){
            document.body.style.backgroundColor = 'blue'; 
        }     
    }    
}

function btn2Dbl() {
    document.body.style.backgroundColor = 'pink'; 
}

function btn3Hold() {
    document.body.style.backgroundColor = 'brown'; 
}

function btn3Free() {
    document.body.style.backgroundColor = 'white'; 
}

function refOver() {
    document.body.style.backgroundColor = 'yellow'; 
}

bnt1.addEventListener('click',chkBackground);
bnt2.ondblclick = btn2Dbl;
bnt3.onmousedown = btn3Hold;
bnt3.onmouseup = btn3Free;
//bnt3.onkeydown = btn3Hold;
//bnt3.onkeyup = btn3Free;
ref.onmouseover = refOver;

