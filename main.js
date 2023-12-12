const iteminput=document.getElementById('iteminput');
const itemlist=document.getElementById('itemlist');

function additem(){
    const newitemtest = iteminput.value;
    if(newitemtest !== ''){
        const newitem= createlistitem(newitemtest);
        itemlist.appendChild(newitem);
        iteminput.value='';
    }
}

function createlistitem(text){
   const listitem= document.createElement('li');
   listitem.textContent = text;
   return listitem;
}

