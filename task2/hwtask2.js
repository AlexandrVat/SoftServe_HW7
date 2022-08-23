let bnt = document.getElementById('chStyle');

function chkText () {
    let txt = document.getElementById('text');
    txt.className = 'ptext';
}

bnt.onclick = chkText;