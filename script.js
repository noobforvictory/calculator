var val1='';
var val2='';
var operator='';
var empty='0';

function operate(){
    findVal();
    let result=0;
    if(operator==='+'){
      result= sum(val1,val2);
    }else   if(operator==='-'){
        result=   diff(val1,val2);
    }else   if(operator==='*'){
        result=    product(val1,val2);
    }else   if(operator==='/'){
        result=   div(val1,val2);
    }
    
    
    val2='';
    operator='';
    clearFunc();
    val1=result;
    div1.textContent = result;
}

function sum(a,b){
return (+a + +b);
}

function diff(a,b){
return +a -+b;
 }

function product(a,b){
return +a * +b;
 }

function div(a,b){
 return +a / +b;
 }

 function display(){
    if(div1.textContent==='0'){
        div1.textContent='';
    }
    if(this.textContent!=='='){
    div1.textContent+=this.textContent;
    }
 }
 function clearFunc(){
div1.textContent=empty;
val2='';
operator='';
val1='';
 }

 function operatorFunc(){
    if(val1!=='' && operator!==''){
        operate();
        operator=this.textContent;
    }
    operator=this.textContent;
    val1=div1.textContent;
    div1.textContent +=operator;
    
 }
 
 function findVal(){
    let idx=0;
    let arr = div1.textContent.split('');
    for(let i=0; i<arr.length;i++){
      if(arr[i]==='+'||arr[i]==='-'||arr[i]==='*'||arr[i]==='/'){
        idx=i;
      }
    }
    val2=div1.textContent.substring(idx+1);
   
 }

 function delFunc(){
    let holder= div1.textContent.split('');
   let x= holder.pop();
   if(x==='+'||x==='-'||x==='/'||x==='*'){
    operator='';
    val1='';
   }
    holder=holder.join('');
    div1.textContent=holder;
 }

const body = document.querySelector('.body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
const div1 = document.createElement('div');
div1.classList.add('subcontainer1');
div1.textContent='0';
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
    idiv.classList.add('oKey');
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
    imul.classList.add('oKey');
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
    imin.classList.add('oKey');
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
    iadd.classList.add('oKey');
    iadd.textContent='+';
    div3.appendChild(iadd);

    ieq.addEventListener('click',operate);
    const keys =document.querySelectorAll('.key');
    keys.forEach(key=>key.addEventListener('click',display));
    clear.addEventListener('click',clearFunc);
    const oKeys = document.querySelectorAll('.oKey');
    oKeys.forEach(key=>key.addEventListener('click',operatorFunc));
    del.addEventListener('click',delFunc);