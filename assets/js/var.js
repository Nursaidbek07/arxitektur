"use strict";
window.addEventListener("DOMContentLoaded", () => {
const loader = document.querySelector(".loader"),
  dropdown = document.querySelector('.dropdown'),
  dropdownList = document.querySelector('.dropdown-list'),  
  burger = document.querySelector(".burger"),
  navbar = document.querySelector('.navbar'),
  slider = document.querySelector('.slider'),
  sliderTabImg = document.querySelectorAll('.slider-tab img')

// Loader
  document.body.style.cssText = "overflow: hidden;";
  setInterval(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      document.body.style.cssText = "overflow: visible;";
      loader.style.display = "none";
    }, 500);
  }, 2000);
  // Dropdown
  dropdown.addEventListener('click', (e)=>{
    dropdownList.classList.toggle('active')
  })
  // Burger
  burger.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
  })
  // Chala Slider
  let transformation = 0;
  // Carousel tab
  sliderTabImg.forEach((item, index)=>{
    item.addEventListener('click', (e)=>{
      transformation = index * 100
      slider.style.cssText = `transform: translateX(-${transformation}vw)`
      console.log(index);
      document.body.querySelector('.slider-tab').querySelector('.active').classList.remove('active')
      item.classList.add('active')
    })
  })
  const interId = setInterval(()=>{
    slider.style.cssText = `transform: translateX(-${transformation}vw)`
    transformation = transformation +  100
    if (transformation >= 300) {
      transformation = 0
    }
  }, 8000)
  interId
  // Navbar js works

});
