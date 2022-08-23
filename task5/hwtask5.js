let bnt = document.getElementById('btn');

function chk(event){
    let textMess = '';
    if(event.type == 'click'){
        console.log('I was pressed!');
        textMess = 'I was pressed!';
    } 

    if(event.type == 'mouseenter'){
        console.log('Mouse on ME !');
        textMess = 'Mouse on ME !';
    } 

    if(event.type == 'mouseleave'){
        console.log('Mouse is not on me!');
        textMess = 'Mouse is not on me!';
    } 
   
   let par = document.createElement('p');
   par.innerHTML = textMess;
   document.body.append(par);

}

function mOver(){
    console.log('Mouse on ME !');
}

bnt.addEventListener('click',chk);
bnt.addEventListener('mouseenter',chk);
bnt.addEventListener('mouseleave',chk);


//bnt.onmouseover = mOver; 