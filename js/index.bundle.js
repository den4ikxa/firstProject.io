(()=>{"use strict";const e=document.querySelector(".modal"),n=document.querySelector(".nav__item-shop");function t(n){e.style.display="block"}function o(n){e.style.display="none"}n.addEventListener("mouseenter",(e=>{t()})),n.addEventListener("mouseleave",(()=>{o()})),e.addEventListener("mouseenter",(()=>{t()})),e.addEventListener("mouseleave",(()=>{o()})),window.onclick=function(n){n.target==e&&(e.style.display="none")}})();