// selecting elements in html using dome selector  usinf documnet option & id of the elements 
// console.log(document.getElementById('myparagraph'))
// console.log(document.getElementById("heading"))
// another way of writting it 
// console.log("hello world")
// extracting the dome lelement with the help of ID

const paragraph = document.getElementById('myparagraph');
// console.log(paragraph)

// addEventListener function works like a switch
paragraph.addEventListener('click', () => {
    paragraph.classList.toggle('highlight');
});

// extracting elements with the help of name of class
// const item=document.getElementsByClassName("itemlist");
// console.log(item)

// extracting elelemtns with the help of query selector 
// it allows to do with the help of CSS sy,bolsl like # and .
const listitems=document.querySelectorAll('.itemlist')
console.log(listitems)
// query selctor: single element ko select krega 
const head=document.querySelector('#heading');
// console.log(head)
head.style.color='green'
// head.style.size='1000px'

// agr query selcrtoer m class denge tou wo firsdt item ko hi uthayega 
const firstitem=document.querySelector('.itemlist')
console.log(firstitem)
// we can also extract the elemtns with the help of tag name 
const tagname=document.getElementsByTagName('li')
console.log(tagname)
