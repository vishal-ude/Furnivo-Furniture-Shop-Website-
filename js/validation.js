// Furnivo - Contact Form
document.addEventListener("DOMContentLoaded",function(){const form=document.getElementById("contact-form");
if(form)form.addEventListener("submit",function(e){e.preventDefault();alert("Thank you! Your message has been submitted.");form.reset();});});