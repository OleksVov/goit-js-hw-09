!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.querySelector("body"),r=null;e.setAttribute("disabled","disabled"),t.addEventListener("click",(function(){r=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled"),e.setAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.fd657677.js.map