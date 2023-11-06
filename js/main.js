const doc = document;
const box = doc.querySelector('.box');
const btnAdd = doc.querySelector('.add');
const btnDel = doc.querySelector('.del');
const btnBefore = doc.querySelector('.before');
const btnAfter = doc.querySelector('.after');
const btn = doc.querySelectorAll('.btn');

let count = 0;
let selectedElementNumber = null;
// let element;

btn.forEach(function(btnEl) {
  btnEl.style.cursor = 'pointer';
});

btnAdd.onclick = function() {
  const item = doc.createElement('div');

  count ++;
  item.className = 'item';
  item.innerHTML = count;
  item.dataset.number = count;

  item.onclick = function(){
    unActiveAll();
    this.classList.toggle('active');
    showCurrentEl(this);
    selectedElementNumber = this.dataset.number;

    // element = this;
  };

  box.append(item);
}

// btnDel.onclick = function(){
//   if(element){
//     element.remove();
//   }
// }

btnDel.onclick = function() {
  const currenItem = getCurrentElement();
  if (!currenItem) {
    return;
  }

  currenItem.remove();
  selectedElementNumber = null;
}

btnBefore.onclick = function() {
  const currenItem = getCurrentElement();
  if (!currenItem) {
    return;
  }
  
  const item = cloneElement(currenItem);
  currenItem.before(item);
}

btnAfter.onclick = function() {
  const currenItem = getCurrentElement();
  if (!currenItem) {
    return;
  }
  
  const item = cloneElement(currenItem);
  currenItem.after(item);
}

function cloneElement(currentElement) {
  const item = currentElement.cloneNode(true);
  count++;
  item.classList.remove('active');
  item.dataset.number = count;
  item.innerHTML = item.innerHTML + '-c';

  item.onclick = function() {
    clickHandler(this);
  }

  return item;
}

function clickHandler(context) {
  unActiveAll();
  context.classList.toggle('active');
  showCurrentEl(context);
  selectedElementNumber = context.dataset.number;
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

function getCurrentElement() {
  const item = doc.querySelector(`.item[data-number="${selectedElementNumber}"]`);
  if(!item) {
    alert('Not selected item !!!');
    return false;
  }

  return item;
}



