let bnt = document.getElementById('btn');

function removeValue(){
    let listEl=document.getElementById("userСity");
    listEl.remove(listEl.selectedIndex);
}


bnt.onclick = removeValue;
