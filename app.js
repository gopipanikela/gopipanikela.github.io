const projects = [
  {
    number:"01",
    title:"SINDHURI JAI BHARATH",
    category:"Agricultural Brand Film",
    description:"A cinematic agricultural brand film built around farmer emotion, product storytelling and strong visual continuity. I shaped the edit around pacing, visual storytelling, product detail and an emotionally driven narrative.",
    role:"Editing • Storytelling • AI Visual Workflow • Color • Sound",
    tags:["Premiere Pro","AI Visual Workflow","Brand Film","9:16"],
    thumbnail: "assets/images/sindhuri_thumbnail_1600x1000.jpg",
    video:"https://www.youtube.com/embed/k5NZW_RZJFI",
    link:""
  },
  {
    number:"02",
    title:"MONORO — AI AUDIT",
    category:"SaaS / Product Film",
    description:"A product-focused edit for MonoRo, an AI-powered business operations platform. I developed the visual direction and editing approach from my own creative concept, combining product UI, human storytelling, pacing and visual explanation to make a complex product easy to understand.",
    role:"Editing • Creative Direction • Storytelling • Product Visuals",
    tags:["Premiere Pro","Product Film","Storytelling","AI Product"],
    thumbnail:"assets/images/monoro_thumbnail_1600x1000.jpg",
    video:"https://www.youtube.com/embed/GZct0dF0T0s",
    link:""
  },
  {
    number:"03",
    title:"DECEMBER DELIGHTS",
    category:"Social / Food Content",
    description:"A social-first narrative edit built around a heated customer–staff argument over spaghetti. I used conflict, reaction timing, typography, pacing and a comedic reveal to turn a simple food experience into an engaging, discussion-driven story.",
    role:"Editing • Pacing • Sound Design • Typography • Retention",
    tags:["Premiere Pro","Social","Storytelling","Retention"],
    thumbnail:"assets/images/december_delights_thumbnail_1600x1000_play.jpg",
    video:"https://www.youtube.com/embed/4sEE1zIp2cs",
    link:""
  }
];

const grid = document.getElementById("projectGrid");
const modal = document.getElementById("modal");
const modalMedia = document.getElementById("modalMedia");
const modalInfo = document.getElementById("modalInfo");

function render(){
  grid.innerHTML = projects.map((p,i)=>`
    <article class="project-card" onclick="openProject(${i})">
      <div class="project-thumb">
        ${p.thumbnail ? `<img src="${p.thumbnail}" alt="${p.title} thumbnail">` : `<div class="thumb-placeholder"><span>${p.title}</span></div>`}
      </div>
      <div class="project-body">
        <div class="project-no">${p.number} / ${p.category}</div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");
}
function openProject(i){
  const p=projects[i];
  modalMedia.innerHTML = p.video
    ? (p.video.includes("youtube.com") || p.video.includes("youtu.be")
        ? `<iframe src="${p.video}" title="${p.title}" allowfullscreen></iframe>`
        : `<video controls playsinline src="${p.video}"></video>`)
    : `<div style="aspect-ratio:16/9;display:grid;place-items:center;background:#111;color:#666;font-size:13px">Add the project video in <b style="color:#c8ff32;margin-left:5px">app.js</b></div>`;
  modalInfo.innerHTML = `<div class="modal-role">${p.role}</div><h2>${p.title}</h2><p>${p.description}</p><div class="modal-meta">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>${p.link?`<a class="button primary" href="${p.link}" target="_blank" rel="noopener">Open project ↗</a>`:""}`;
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
}
function closeProject(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");modalMedia.innerHTML="";document.body.style.overflow=""}
document.querySelector(".modal-close").addEventListener("click",closeProject);
modal.addEventListener("click",e=>{if(e.target===modal)closeProject()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeProject()});
render();
