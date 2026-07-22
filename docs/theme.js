/* Shared light/dark toggle for Hisaab doc pages.
   Uses the same localStorage key as the landing page, so the
   choice carries across the whole subdomain. */
(function(){
  "use strict";
  var root=document.documentElement;
  function current(){
    return root.getAttribute("data-theme") ||
      (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  function set(t){root.setAttribute("data-theme",t);try{localStorage.setItem("hisaab-theme",t);}catch(e){}}
  function toggle(){set(current()==="dark"?"light":"dark");}
  var btn=document.getElementById("theme");
  if(btn)btn.addEventListener("click",toggle);
  document.addEventListener("keydown",function(e){
    if((e.key==="t"||e.key==="T")&&!/input|textarea/i.test(e.target.tagName))toggle();
  });
})();
