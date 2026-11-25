(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
ym(114669607,"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});
window.ymGoal=function(g){try{ym(114669607,"reachGoal",g)}catch(e){}};
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest('a[href*="t.me/KubrakovaES"]');if(a)ymGoal("tg_click");});
(function(){
  var K="cookieOk";
  function show(){
    try{if(localStorage.getItem(K))return}catch(e){}
    var d=document.createElement("div");
    d.setAttribute("role","note");
    d.style.cssText="position:fixed;left:16px;bottom:16px;z-index:50;max-width:340px;background:#fff;color:#0f2a33;border:1px solid #d3e4e8;border-radius:14px;box-shadow:0 8px 24px rgba(15,42,51,.12);padding:12px 14px;font:13px/1.45 Manrope,system-ui,sans-serif;display:flex;gap:12px;align-items:center";
    d.innerHTML='<span>Сайт использует cookie и Яндекс Метрику, чтобы собирать обезличенную статистику посещений.</span><button type="button" style="flex:none;font:inherit;font-weight:700;border:0;border-radius:10px;padding:8px 12px;background:#0fa3a3;color:#fff;cursor:pointer">Понятно</button>';
    d.querySelector("button").onclick=function(){try{localStorage.setItem(K,"1")}catch(e){}d.remove()};
    document.body.appendChild(d);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",show);else show();
})();
