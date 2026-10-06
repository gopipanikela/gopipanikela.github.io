const projects = [
  {
    number:"01",
    title:"SINDHURI JAI BHARATH",
    category:"Agricultural Brand Film",
    description:"A cinematic agricultural product edit built around farmer emotion, product detail and premium visual storytelling. The edit uses AI-assisted visuals and continuity-focused generation to create a coherent brand story.",
    role:"Editing • Storytelling • AI Visual Workflow • Color • Sound",
    tags:["Premiere Pro","AI Visuals","Brand Film","9:16"],
    thumbnail: "assets/images/sindhuri_thumbnail_1600x1000.jpg",
    video:"",
    link:""
  },
  {
    number:"02",
    title:"MONORO",
    category:"SaaS / Product Film",
    description:"A product-focused edit for MonoRo, an AI-powered business operations platform. The approach combines clean pacing, product explanation, UI-led storytelling and cinematic visual language.",
    role:"Editing • Product Storytelling • Sound Design • Color",
    tags:["Premiere Pro","Product Film","SaaS","AI"],
    thumbnail:"",
    video:"",
    link:""
  },
  {
    number:"03",
    title:"DECEMBER DELIGHTS",
    category:"Brand / Social Content",
    description:"Social-first branded content created for December Delights, focused on visual appetite, rhythm, product presentation and fast mobile-friendly storytelling.",
    role:"Editing • Pacing • Sound Design • Color",
    tags:["Premiere Pro","Social","Food Brand","Short-form"],
    thumbnail:"",
    video:"",
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
        <div class="play">▶</div>
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
