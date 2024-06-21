document.onreadystatechange=()=> {


if(document.readyState !=="complete"){
document.querySelector("#body").style.visibility="hidden"
document.querySelector("#splash").style.visibility="visible"
}else{
document.querySelector("#body").style.visibility="visible"
document.querySelector("#splash").style.visibility="hidden"
}
}
document.addEventListener("DOMContentLoaded", function(){
	const aboutText = document.getElementById('about-text');
	const readButton = document.getElementById('read');

	const originalText = aboutText.textContent.slice();
	const maxLength = originalText.indexOf('visit');

	let truncatedText = maxLength !== -1 ? originalText.substring(0, maxLength) + '...': originalText;
	let isCollapsed = true;

	aboutText.textContent = truncatedText;

	readButton.addEventListener('click', function(){
		if (isCollapsed) {
			aboutText.textContent = originalText;
			readButton.textContent = 'Read less';
		} else {
			aboutText.textContent = truncatedText;
			readButton.textContent = 'Read more';
		}

		isCollapsed = !isCollapsed;
	});
});
let links=document.querySelector('.links')
links.addEventListener('click',e=>{
	let section= e.target.dataset.section
	let elem=document.getElementById(`${section}`)
	elem.scrollIntoView({behavior:"smooth"})
})
let portfolio = document.getElementById("portfolio-btn")
portfolio.addEventListener('click',()=>{
	let elem=document.getElementById("portfolio")
	elem.scrollIntoView({behavior:"smooth"})
})
function myBtn(){
		let text;
		let person = prompt("Please enter your name:", "");
		if (person == null || person == "") {
		  alert("User cancelled the prompt.");
		} else {
		  alert("Hello " + person + "! Contact me via: \n call/whatsapp : 0727862079 or \n E-mail : jacintamzungu@gmail.com");
		}
		document.getElementById("alert").innerHTML = text;
}



