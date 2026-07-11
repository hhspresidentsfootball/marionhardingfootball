const target = new Date('2026-08-21T19:00:00-04:00').getTime();
function tick(){const diff=Math.max(0,target-Date.now());const d=Math.floor(diff/(1000*60*60*24));const h=Math.floor((diff/(1000*60*60))%24);const m=Math.floor((diff/(1000*60))%60);const s=Math.floor((diff/1000)%60);const set=(id,val)=>{const el=document.getElementById(id); if(el) el.textContent=String(val).padStart(2,'0')};set('days',d);set('hours',h);set('mins',m);set('secs',s)}tick();setInterval(tick,1000);
const dtrData={
  discipline:{title:'Discipline',meaning:'Do the right thing',actions:['Embraces being coached','Ability to stay focused on the task','Committed & true to your word'],result:'Great character. Better person.'},
  team:{title:'Team',meaning:'Every person. Every day.',actions:['Value each team member','Trusting relationships with teammates & coaches','Hold teammates accountable'],result:'Brotherhood'},
  relentless:{title:'Relentless',meaning:'Great effort',actions:['Show up early & stay late','Give your absolute best every day — heart','Willing to do the things your opponent is not'],result:'Successful — Win!!'}
};
const tabs=[...document.querySelectorAll('.dtr-tab')],panel=document.querySelector('.dtr-panel');
function renderDTR(key){const d=dtrData[key];tabs.forEach(t=>t.classList.toggle('active',t.dataset.dtr===key));panel.innerHTML=`<h4>${d.title}</h4><p><strong>Meaning:</strong> ${d.meaning}</p><p><strong>Actions:</strong></p><ul>${d.actions.map(a=>`<li>${a}</li>`).join('')}</ul><p><strong>Result:</strong> ${d.result}</p>`}
tabs.forEach(t=>t.addEventListener('click',()=>renderDTR(t.dataset.dtr)));if(panel)renderDTR('discipline');
