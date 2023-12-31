var swiper = new Swiper(".mySwiperSL", {
	loop: true,
	pagination: {
	  el: ".swiper-pagination",
	  dynamicBullets: true,
	},
});
var swiper2 = new Swiper('.blog-slider', {
	spaceBetween: 30,
	effect: 'fade',
	loop: true,
	mousewheel: {
	  invert: false,
	},
	// autoHeight: true,
	pagination: {
	  el: '.blog-slider__pagination',
	  clickable: true,
	}
  });

  const menuBtn = document.querySelector(".menu-icon span");
  const searchBtn = document.querySelector(".search-icon");
  const cancelBtn = document.querySelector(".cancel-icon");
  const items = document.querySelector(".nav-items");
  const form = document.querySelector("form");
  menuBtn.onclick = ()=>{
	items.classList.add("active");
	menuBtn.classList.add("hide");
	searchBtn.classList.add("hide");
	cancelBtn.classList.add("show");
  }
  cancelBtn.onclick = ()=>{
	items.classList.remove("active");
	menuBtn.classList.remove("hide");
	searchBtn.classList.remove("hide");
	cancelBtn.classList.remove("show");
	form.classList.remove("active");
	cancelBtn.style.color = "#ff3d00";
  }
  searchBtn.onclick = ()=>{
	form.classList.add("active");
	searchBtn.classList.add("hide");
	cancelBtn.classList.add("show");
  }

  const buttonArticle7 = document.getElementById('7');
buttonArticle7.addEventListener('click', function() {
  	window.location.href = '../ITClub/pages.html?5';
});
const buttonArticle8 = document.getElementById('8');
buttonArticle8.addEventListener('click', function() {
  	window.location.href = '../ITClub/pages.html?6';
});
const buttonArticle9 = document.getElementById('9');
buttonArticle9.addEventListener('click', function() {
  	window.location.href = '../ITClub/pages.html?7';
});
