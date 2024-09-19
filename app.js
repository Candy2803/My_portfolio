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
	const maxLength = originalText.indexOf('creativity');

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
		if (person == null || person == text) {
		  alert("User cancelled the prompt.");
		} else {
		  alert("Hello " + person + "! Contact me via: \n call/whatsapp : 0727862079 or \n E-mail : candyjessie2@gmail.com");
		}
		
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
	event.preventDefault(); 

	const form = event.target;
	const formData = new FormData(form);

	fetch(form.action, {
		method: form.method,
		body: formData,
		headers: {
			'Accept': 'application/json'
		}
	})
	.then(response => response.json())
	.then(data => {
		alert('Your message has been sent successfully!');
		
		window.location.reload();
	})
	.catch(error => {
		console.error('Error:', error);
		alert('There was a problem with your submission. Please try again.');
	});
});

