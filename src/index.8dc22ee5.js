(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(t){if(t.ep)return;t.ep=!0;const l=n(t);fetch(t.href,l)}})();const f=[{id:1,company:"Photosnap",logo:"./images/photosnap.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:"./images/manage.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"./images/account.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"./images/myhome.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:"./images/loop-studios.svg",new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"./images/faceit.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:"./images/shortly.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"./images/insure.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:"./images/eyecam-co.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"./images/the-air-filter-company.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}],u=document.getElementById("lists__jobs"),r=document.getElementById("filter"),c=document.getElementById("filter__tags");let a=[];function p(o){u.innerHTML="",o.forEach(e=>{u.innerHTML+=`
          <div class="job box__shadow ${e.featured&&"featured__border"}">
            <div class="job__info">
              <img class="img__company" src="${e.logo}" alt="${e.company} logo">
              <div class="job__info--wrap">
                <ul class="list">
                  <li class="job__company">${e.company}</li>
                  <li style="display:${e.new?"block":"none"};" class="job__new">NEW!</li>
                  <li style="display:${e.featured?"block":"none"};" class="job__featured">FEATURED</li>
                </ul>
               
    
                <p class="job__title">${e.position}</p>

                <ul class="list">
                  <li class="muted">${e.postedAt}</li>
                  <li class="muted">.</li>
                  <li class="muted">${e.contract}</li>
                  <li class="muted">.</li>
                  <li class="muted">${e.location}</li>
                </ul>

                <hr>
              </div>
            </div>
              
            <ul class="list">
            ${v(e.role,e.languages,e.level,e.tools).map(n=>`<li class="tag">${n}</li>`).join("")}  
              </ul>
          </div>`})}p(f);function v(o,e,n,i){return[o,...e,n,...i]}function d(){console.log("filter job chamado");let o=[];return f.forEach(e=>{y(e)&&o.push(e)}),p(o)}function y(o){let e=!0;return a==null||a.forEach(n=>{o.role!==n&&o.level!==n&&!o.languages.includes(n)&&!o.tools.includes(n)&&(e=!1)}),e}window.addEventListener("click",o=>{const e=o.target;e.className==="tag"&&(a.includes(e.innerText)||(a.push(e.innerText),m(),d()))});function m(){c.classList.remove("hidden"),r.innerHTML="",a.length!=0&&a.forEach((o,e)=>{r.innerHTML+=`<li id="${e}" class="tag tag__filter">${o}</li>`})}window.addEventListener("click",o=>{const e=o.target;e.classList[1]==="tag__filter"&&(a.splice(Number(e.id),1),m(),d()),a.length===0&&c.classList.add("hidden")});var g;(g=document.getElementById("clear__btn"))==null||g.addEventListener("click",()=>{r.innerHTML="",c.classList.add("hidden"),a=[],d()});
