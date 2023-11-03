const doc = document;
const box = doc.querySelector('.box');
const btnAdd = doc.querySelector('.add');
const btnDel = doc.querySelector('.del');
const btnCloneB = doc.querySelector('.before');
const btnCloneA = doc.querySelector('.after');
const btn = doc.querySelectorAll('.btn');

let count = 1;
let element;

btn.forEach(function(btnEl) {
  btnEl.style.cursor = 'pointer';
});

btnAdd.onclick = function() {
  const item = doc.createElement('div');
  item.className = 'item';
  item.innerHTML = count;

  item.onclick = function(){
    unActiveAll();
    this.classList.toggle('active');

    showCurrentEl(this);

    element = this;
  };

  count ++;
  box.append(item);
}

btnDel.onclick = function(){
  if(element){
    element.remove();
  }
}

btnCloneB.onclick = function() {
  if(element){
    let clone = element.cloneNode(true);
    element.after(clone);
    element.classList.remove('active');
    element.innerHTML = element.innerHTML + '-c';
  }
}

btnCloneA.onclick = function() {
  if(element){
    let clone = element.cloneNode(true);
    element.before(clone);
    element.classList.remove('active');
    element.innerHTML = element.innerHTML + '-c';
  }
}








function unActiveAll() {
  const items = doc.querySelectorAll('.item');
  items.forEach(function(item){
    item.classList.remove('active');
  });
}

function showCurrentEl(currentEl) {
  const showEl = doc.querySelector('.selected span:last-child');
  showEl.innerHTML = currentEl.innerHTML;
}











// btnAdd.onclick = function() {
//   const item = doc.createElement('div');
//   item.className = 'item';
//   item.innerHTML = count;

//   item.onclick = function(){
//     this.remove();
//   };

//   count ++;

//   box.append(item);
// }
