// // document tou mujhr pura documnet select krke d dega 

// console.log(document)
// // now ab ham doccument ka koi n]bhi element access kr sakte h 
// //  getting url of the documne t
// console.log(document.URL)
// // gettin thr domain name 
// console.log(document.domain)
// // getting only specific object portion 
// console.log(document.body)
// console.log(document.head)
// // getting all elements usiing dir 
// console.dir(document)
// console.dir(document.all)
// // selecting elemtns at a particular specific index 
// console.dir(document.all[5])
// // changing the title dynamically 
// document.title="ziaurrehman"
// // working with the body 
// const body=document.body
// // addding text to body dynamicaally 
// // append function 
// body.append("hey wassup how are you !!","hey I'm alright whats about ya'")
// // creating new element 
// const div=document.createElement('h1')
// console.log(div)
// const div1=document.createElement('p')
// console.log(div1)
// // in sab method s simply elelemnt ko memory tou mil gyi but ow add nhhi hue 

// //  adding text to the elementds 
// // 1: innertext function 
// div.innerText="welcome to coding ninjas"
// body.appendChild(div)
// // secodn method of adding text to element 
// // div.textContent="yoou can choose any programming language"
// div.innerText="html,css and javascript"


const strong=document.createElement('strong')
strong.innerText="this text is written in the bold format ";
const body=document.body;
const div=document.createElement('div')
body.appendChild(div)
div.append(strong)
// lets add anchor tag 
const anchor=document.createElement('a');
anchor.innerText="go to google";
const div3=document.createElement('div')
div3.appendChild(anchor)
body.appendChild(div3)

// in 3 lines ka shrotcut h innerhtml tag
const div4=document.createElement('div')
div4.innerHTML='<strong>hello welcome to coding ninjas</strong> <br> <a href="#">go to google.com</a> <br> <p>i would like to introdue myself</p>'
body.append(div4)

// removing elements from the document
const ans=document.querySelector('malik')
const strong1=document.getElementById("zia")
// simply remove it 
// strong1.remove()
// second method
// ans.removeChild(strong1)

// attributes : propertirs and methods 
// getting value of the attribute 
console.log(strong1.getAttribute("id"))
const script=document.querySelector('script')
console.log(script.getAttribute('src'))
// console.log(ans.getAttribute("id"))
const ap=document.querySelector('.heading')
console.log(ap.getAttribute('class'))

// set attribute : seetting the value 
ap.setAttribute('class','abcdefg')
// removin the attributr 
ap.removeAttribute('class')

// adding and removing of the classses 
ap.classList.add("tities")
ap.classList.remove('tities')

// toggle function : on and off ki trsh kaam krta h 
// agr class hogi tou remove kr denga otherwise create kr dega 
ap.classList.toggle("tities")
ap.classList.toggle("tities")
// for styling 
ap.style.setProperty('color','green')
ap.style.setProperty('background-color','red')
ap.style.setProperty('font-family','bold')