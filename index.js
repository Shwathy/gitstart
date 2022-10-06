//console.dir(document);
console.log(document.domain);
console.log(document.title);
console.log(document.URL);
console.log(document.doctype);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.head);
//document.all[10].textContent='Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);
console.log(document.getElementById('header-title'));
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='hello 2';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';
items.style.backgroundColor='#f4f4f4';
//tagname
//var items=document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent='hello 2';
//li[1].style.fontWeight='bold';
//li[1].style.backgroundColor='yellow'
//query selector
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';
var input=document.querySelector('input');
input.value ="hello world";
