var value=0;
var empty=[];
function operate(arr){
    
    if(arr[1]==='+'){
        value=(+arr[0]+ +arr[2]);
        display(value);
        
    }else  if(arr[1]==='-'){
       value=(+arr[0]- +arr[2]);
       display (value);
    }else  if(arr[1]==='*'){
        value= (+arr[0]*+arr[2]);
        display (value);
    }else  if(arr[1]==='/'){
        value= (+arr[0]/+arr[2]);
       display (value);
    }
    return;
}


   function display(result){
    div1.textContent+= result;
    
   }


   var arr = [];
   var i = 0;
function enterValue(){
  arr[i]=this.textContent;
  display(arr[i]);
  i++;
  if(i>=4){
   operate(arr);
   arr=empty;
   i=0;
}
}

function clrVal(){
    let holder=div1.textContent;
      holder=   holder.split('');
      holder.pop();
      holder=holder.join('');
      div1.textContent=holder;
      arr.pop();
      i--;            
  
}
function delFunc(){
    arr=empty;
    i=0;
    div1.textContent='';
}

const body = document.querySelector('.body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
const div1 = document.createElement('div');
div1.classList.add('subcontainer1');
const div2 = document.createElement('div');
div2.classList.add('subcontainer2');
const div3 = document.createElement('div');
div3.classList.add('subcontainer3');
container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);
const clear = document.createElement('button');
const del = document.createElement('button');
clear.classList.add('button');
clear.textContent='CLEAR';
del.classList.add('button');
del.textContent='DELETE';
div2.appendChild(clear);
div2.appendChild(del);

    const i7 = document.createElement('button');
    i7.classList.add('key');
    i7.textContent='7';
    div3.appendChild(i7);

    const i8 = document.createElement('button');
    i8.classList.add('key');
    i8.textContent='8';
    div3.appendChild(i8);
    
    const i9 = document.createElement('button');
    i9.classList.add('key');
    i9.textContent='9';
    div3.appendChild(i9);

    const idiv = document.createElement('button');
    idiv.classList.add('key');
    idiv.textContent='/';
    div3.appendChild(idiv);

    const i4 = document.createElement('button');
    i4.classList.add('key');
    i4.textContent='4';
    div3.appendChild(i4);

    const i5 = document.createElement('button');
    i5.classList.add('key');
    i5.textContent='5';
    div3.appendChild(i5);

    const i6 = document.createElement('button');
    i6.classList.add('key');
    i6.textContent='6';
    div3.appendChild(i6);

    const imul = document.createElement('button');
    imul.classList.add('key');
    imul.textContent='*';
    div3.appendChild(imul);

    const i1 = document.createElement('button');
    i1.classList.add('key');
    i1.textContent='1';
    div3.appendChild(i1);

    const i2 = document.createElement('button');
    i2.classList.add('key');
    i2.textContent='2';
    div3.appendChild(i2);

    const i3 = document.createElement('button');
    i3.classList.add('key');
    i3.textContent='3';
    div3.appendChild(i3);

    const imin = document.createElement('button');
    imin.classList.add('key');
    imin.textContent='-';
    div3.appendChild(imin);

    const idot = document.createElement('button');
    idot.classList.add('key');
    idot.textContent='.';
    div3.appendChild(idot);

    const izer = document.createElement('button');
    izer.classList.add('key');
    izer.textContent='0';
    div3.appendChild(izer);

    const ieq = document.createElement('button');
    ieq.classList.add('key');
    ieq.textContent='=';
    div3.appendChild(ieq);

    const iadd = document.createElement('button');
    iadd.classList.add('key');
    iadd.textContent='+';
    div3.appendChild(iadd);

    const key= document.querySelectorAll('.key');
    key.forEach(key=>key.addEventListener('click',enterValue));
   clear.addEventListener('click',clrVal);
   del.addEventListener('click',delFunc);

