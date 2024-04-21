document.onreadystatechange=()=>{
let about =
`Hello there, my name is Candy, Jessie is my nickname. I am 21 years old.
I love making friends, coding, browsing, and dancing.
I go swimming, hiking or visit friends during my free time.
My favourite dish is Chapati and Chicken.`
document.querySelector("#about-text").textContent=about.slice(0,154)+"..."

document.querySelector(".read").addEventListener('click',()=>{
document.querySelector(".read").textContent="Read less"
document.querySelector("#about-text").textContent=about
})


if(document.readyState !=="complete"){
document.querySelector("#body").style.visibility="hidden"
document.querySelector("#splash").style.visibility="visible"
}else{
document.querySelector("#body").style.visibility="visible"
document.querySelector("#splash").style.visibility="hidden"
}
}

let links=document.querySelector('.links')
links.addEventListener('click',e=>{
	let section= e.target.dataset.section
	let elem=document.getElementById(`${section}`)
	elem.scrollIntoView({behavior:"smooth"})
})
let portfolio = document.getElementById("portfolio-btn")
portfolio.addEventListener('click',()=>{
	/*let fuls=document.documentElement
	if(fuls.requestFullscreen){
		fuls.requestFullscreen();
	}else if(fuls.mzRequestFullscreen){
		fuls.mzRequestFullscreen();
	}else if(fuls.webkitRequestFullscreen){
		fuls.webkitRequestFullscreen();
	}else if(fuls.msRequestFullscreen){
		fuls.msRequestFullscreen();
	}*/
	let elem=document.getElementById("portfolio")
	elem.scrollIntoView({behavior:"smooth"})
})


window.onscroll= ()=>{
if(document.body.scrollTop>50||document.documentElement.scrollTop>50){
document.getElementById("header").style.height="60px"
document.getElementById("header").style.background="#222"
}else{
document.getElementById("header").style.height="65px"
document.getElementById("header").style.background="rgba(0,0,0,.4)"
}
}

