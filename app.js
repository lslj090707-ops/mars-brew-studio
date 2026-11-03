(function(){
'use strict';
const DATA=window.BREW_DATA,KEY='mars.brew.studio.v1',$=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clock=s=>Math.floor(Math.max(0,s)/60)+':'+String(Math.floor(Math.max(0,s)%60)).padStart(2,'0');
const pretty=s=>clock(s).padStart(5,'0');
const clamp=(n,min,max)=>Math.min(max,Math.max(min,n));
let state={selected:'gesha-pure',configs:{},records:[],sound:true,timer:null,roast:{}};
try{const s=JSON.parse(localStorage.getItem(KEY)||'null');if(s&&typeof s==='object'){if(DATA.recipes.some(r=>r.id===s.selected))state.selected=s.selected;if(s.configs&&typeof s.configs==='object')state.configs=s.configs;if(s.roast&&typeof s.roast==='object')state.roast=s.roast;if(Array.isArray(s.records))state.records=s.records.filter(validRecord).map(cleanRecord).slice(0,1000);state.sound=s.sound!==false;if(s.timer&&typeof s.timer==='object'&&Number.isFinite(s.timer.acc)&&s.timer.acc>=0&&s.timer.acc<=7200&&(s.timer.start===null||Number.isFinite(s.timer.start)))state.timer=s.timer;}}catch(e){}
let storageWarning=false,audio=null,wake=null,pending=null,tags=new Set(),scale={},visibleFocus=true,onlyCurrent=false,toastTimeout,lastTick=-1,fired=new Set(),lastSaved=0;
function validRecord(r){return r&&typeof r.id==='string'&&r.id.length<=100&&DATA.recipes.some(x=>x.id===r.recipe)&&Number.isFinite(r.dose)&&r.dose>=5&&r.dose<=45&&Number.isFinite(r.water)&&r.water>0&&r.water<=1200&&Number.isFinite(r.ice)&&r.ice>=0&&r.ice<=1200&&Number.isFinite(r.grind)&&r.grind>0&&r.grind<=9&&Number.isFinite(r.seconds)&&r.seconds>=0&&r.seconds<=7200&&typeof r.date==='string'&&Number.isFinite(Date.parse(r.date))&&(!r.tags||(Array.isArray(r.tags)&&r.tags.every(t=>typeof t==='string'&&t.length<=50)))&&(!r.note||(typeof r.note==='string'&&r.note.length<=1000));}
function cleanRecord(r){const o={...r};delete o.factor;const T={};['sweet','acid','bitter','astringent','body','clean','qaroma','qflavor','qafter','qacid','qsweet','qmouth','qall'].forEach(k=>{const v=r.taste&&r.taste[k];if(Number.isInteger(v)&&v>=1&&v<=5)T[k]=v;});if(Object.keys(T).length)o.taste=T;else delete o.taste;if(typeof o.next!=='string')delete o.next;else o.next=o.next.slice(0,400);['temp','blind','dripper'].forEach(k=>{if(typeof o[k]!=='string')delete o[k];else o[k]=o[k].slice(0,40);});return o;}
function persist(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){if(!storageWarning){storageWarning=true;toast('浏览器未能保存，请导出备份保留记录');}}}
function toast(s){$('toast').textContent=s;$('toast').classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>$('toast').classList.remove('visible'),3500);}
function recipe(){return DATA.recipes.find(r=>r.id===state.selected);}
function bean(r=recipe()){return DATA.beans.find(b=>b.id===r.bean);}
function mode(r=recipe()){return DATA.modes.find(m=>m.id===r.mode);}
function dripperOf(r=recipe()){return r.dripper||'sw';}
function drippers(){return DATA.drippers||[{id:'sw',name:'Hario Switch 03',short:'Switch 03'},{id:'qt',name:'清庭三旋空山文',short:'三旋空山文'}];}
function visibleMode(modeId){return modeId&&modeId.indexOf('cmp')!==0&&modeId!=='flat'?modeId:'pure';}
function findRecipe(beanId, modeId, dripperId){
 const d=dripperId||'sw', m=modeId;
 if(m&&(m.indexOf('cmp')===0||m==='flat')){
  const hit=DATA.recipes.find(r=>r.bean===beanId&&r.mode===m&&(r.dripper||'sw')===d);
  if(hit)return hit;
 }
 const id=beanId+'-'+m+(d==='qt'?'-qt':'');
 let hit=DATA.recipes.find(r=>r.id===id);
 if(hit)return hit;
 hit=DATA.recipes.find(r=>r.bean===beanId&&r.mode===m&&(r.dripper||'sw')===d);
 return hit||null;
}
function selectCombo(beanId, modeId, dripperId, opts){
 if(busy()){toast('完成或重置当前计时后，再切换配方');return;}
 const m=visibleMode(modeId), d=dripperId||'sw';
 const hit=findRecipe(beanId, m, d);
 if(!hit){toast(d==='qt'?'这套豆子和冲法还没有三旋空山文方案':'没有找到对应方案');return;}
 state.selected=hit.id;persist();render();
 if(opts&&opts.toast)toast(opts.toast);
}
function config(r=recipe()){const c=state.configs[r.id]||{};return {dose:Number.isFinite(c.dose)?clamp(c.dose,5,45):r.dose,grind:Number.isFinite(c.grind)?Math.round(clamp(c.grind,.1,9)*10)/10:r.grind};}
function amounts(r=recipe()){const c=config(r),factor=c.dose/r.dose;return {dose:c.dose,water:Math.round(r.water*factor),ice:Math.round(r.ice*factor),grind:c.grind,factor};}
function busy(){return !!state.timer;}
function elapsed(){const t=state.timer;return t?Math.min(7200,t.acc+(t.start===null?0:Math.max(0,(Date.now()-t.start)/1000))):0;}
function ratio(w,d){return '1:'+Number((w/d).toFixed(2));}
function temperatureText(r=recipe()){return r.temperature.value+r.temperature.unit;}
function singleVerified(r=recipe()){const c=config(r);return r.verified&&c.dose===r.dose&&c.grind===r.grind;}
function events(r=recipe()){
const a=amounts(r),out=[];
r.actions.forEach((x,i)=>{
out.push({at:x.at,until:x.until,water:x.water===null?null:Math.round(x.water*a.factor),valve:x.valve||'开',text:x.text,index:i,pour:x.water!==null});
if(x.until!==null&&(!r.actions[i+1]||x.until<r.actions[i+1].at)){
const next=r.actions[i+1];out.push({at:x.until,until:null,water:Math.round(x.water*a.factor),valve:x.valve||'开',text:next?(x.valve==='关'?'停止注水，保持关阀浸泡':'停止注水，等待下一段'):'注水完成，观察粉面与流速',index:i,pour:false,wait:true});}
});
return out.sort((a,b)=>a.at-b.at);
}
function render(){
const r=recipe(),b=bean(),a=amounts(),m=mode(),locked=busy(),v=singleVerified();
$('beans').innerHTML=DATA.beans.map(x=>'<button class="bean '+(x.id===r.bean?'active':'')+'" data-bean="'+x.id+'" aria-pressed="'+(x.id===r.bean)+'" '+(locked?'disabled':'')+'><span class="bean-glyph" aria-hidden="true"></span><b>'+esc(x.short)+'</b><small>'+esc(x.country||'')+'</small></button>').join('');
const vis=DATA.recipes.filter(x=>x.mode.indexOf('cmp')!==0&&x.mode!=='flat');
$('recipeCount').textContent='五支豆，每套冲法都可选 Hario Switch 03 或清庭三旋空山文，外加对照和 v2 探索。先选豆子、冲法和滤杯。';
$('allRecipesButton').textContent='查看全部参数与状态';
$('recipeIndexTitle').textContent=vis.length+' 套可见方案，分别校准。';
$('modes').innerHTML=DATA.modes.filter(x=>!x.hidden).map(x=>'<button class="mode '+(x.id===r.mode?'active':'')+'" data-mode="'+x.id+'" aria-pressed="'+(x.id===r.mode)+'" '+(locked?'disabled':'')+'>'+esc(x.name)+'</button>').join('');
$('drippers').innerHTML=drippers().map(x=>'<button class="dripper '+(x.id===dripperOf(r)?'active':'')+'" data-dripper="'+x.id+'" aria-pressed="'+(x.id===dripperOf(r))+'" '+(locked?'disabled':'')+'><b>'+esc(x.short)+'</b><small>'+esc(x.detail||x.name)+'</small></button>').join('');
$('recipeHeading').innerHTML='<div><h3>'+esc(b.name)+'</h3><p>'+esc(b.meta)+' · '+esc(m.name)+'</p>'+(b.labelInfo?'<p>'+esc(b.labelInfo)+'</p>':'')+'<p class="dripper-line">'+esc(dripperName(r))+'</p></div><span class="status '+statusInfo(r).cls+'">'+esc(statusInfo(r).text)+'</span>';
$('temperatureCard').innerHTML='<div class="temperature-main"><span class="temperature-label">注水水温 · 壶内</span><strong>'+esc(r.temperature.value)+'<small>'+esc(r.temperature.unit)+'</small></strong><span class="temperature-detail">'+esc(r.temperature.detail)+'</span><span class="temperature-basis">'+esc(r.temperature.status)+'</span></div><p>'+esc(r.temperature.note)+'</p><small class="temperature-method">开始注水时的壶温，不是粉床温度。各段使用同壶水，自然降温，不要求中途重新加热。</small>';
const tiles=[['咖啡粉',a.dose,'g','研磨前称量'],['热水',a.water,'g',ratio(a.water,a.dose)+' · 不含冰'],['ZP6',a.grind.toFixed(1),'',grindSub(r,a)],a.ice?['分享壶冰',a.ice,'g','总投入水比 '+ratio(a.water+a.ice,a.dose)]:(r.noWindow?['干点','待实测','','记下真实时间 · 无预设估计']:['估计窗口',clock(r.window[0]),'','至 '+clock(r.window[1])+' · 估计，非硬指标'])];
$('metrics').innerHTML=tiles.map(t=>'<div class="metric"><span class="metric-label">'+t[0]+'</span><span class="metric-value">'+t[1]+'</span><span class="metric-unit">'+t[2]+'</span><span class="metric-sub">'+t[3]+'</span></div>').join('');
$('doseInput').value=a.dose;$('grindInput').value=a.grind.toFixed(1);
document.querySelectorAll('#fineTune input,#fineTune button').forEach(el=>el.disabled=locked);
$('statusNote').textContent=v?'保留你的成功参数：18 g / 297 g / 4.2。两杯正面反馈，继续同参数复现。':a.dose!==r.dose?'粉量已改变，水与冰按比例换算；原注水节奏和估计窗口尚未按此粉量验证。':r.status.kind==='m'?'这套已有杯记录，见下方杯中线索。参数可以调，但一次只改一项。':'刻度是 App 起点值，含全局 −0.4 偏移，这个偏移没有被验证。目前只有瑰夏纯热 4.2 是实测刻度。调整只作用于当前豆子与冲法。';
if(r.startNote)$('statusNote').textContent=r.startNote+(a.dose!==r.dose?' 粉量已改变，水与冰按比例换算，节奏尚未按此粉量验证。':'');
if(b.notes)$('statusNote').textContent+=' '+b.notes;
if(r.feedbackNote)$('statusNote').textContent+=' '+r.feedbackNote;
$('steps').innerHTML=r.actions.map((x,i)=>{
const cumulative=x.water??r.actions.slice(0,i).reverse().find(step=>step.water!==null)?.water??0;
const water=Math.round(cumulative*a.factor);
let sub=x.until===null?'观察放流，不追加水':clock(x.until)+' 前注完 · 本段加 '+(water-(i?Math.round((r.actions[i-1].water??r.water)*a.factor):0))+' g';
if(x.checkpoint)sub=esc(x.checkpoint)+' · 中途读数';
if(x.water!==null)sub+=' · 水温 '+esc(temperatureText(r))+'（'+(i?'同壶水':'起始壶温')+'）';
return '<li class="step" data-step="'+i+'"><span class="step-number">'+String(i+1).padStart(2,'0')+'</span><span class="step-time">'+clock(x.at)+'</span><div class="step-copy">'+esc(x.text)+'<small>'+sub+'</small></div><div class="step-target"><span class="stage-ratio">'+ratio(water,a.dose)+'</span><span class="step-grams">'+water+' g · '+(x.valve==='关'?'关阀':'开阀')+'</span><span class="stage-ratio-label">累计粉水比</span></div></li>';}).join('');
$('referenceEnd').innerHTML=r.noWindow?'<b>干点没有预设估计</b>，两杯都以粉面看不见明显积水为终点，记下真实时间。不按秒数截流。':'<b>估计窗口 '+clock(r.window[0])+'–'+clock(r.window[1])+'</b>，只是估计。以粉面看不见明显积水为记录终点，不会按它截流。'+(r.windowNote?' '+esc(r.windowNote):'')+' 不要为了追秒数，改掉已经好喝的参数。';
const cup=r.cup;
$('tasteTitle').textContent=cup?cup.title:b.tasteTitle||({pb:'轻盈的花香，干净的甜。',gesha:'让花果香走在前面。',alo:'蓝莓与葡萄的风味方向。',cm:'果味在前，奶油感在后。'})[b.id]||'从杯中寻找这批豆的风味。';
$('tasteDescription').textContent=cup?cup.desc:b.taste;
$('tasteStatus').textContent=cup?cup.status:b.tasteStatus||'来自原豆子档案的风味线索，不是你的杯中结果。这一套还没有杯记录。';
drawTimeline();renderToday();renderRest();renderRecords();renderAll();renderSuggest();renderCompare();renderGear();updateTimer();
}
function drawTimeline(){
const r=recipe(),w=600,L=62,R=12,W=w-L-R,max=Math.ceil((Math.max(r.window[1],r.cut||0)+10)/30)*30,x=t=>L+t/max*W;
let s='<svg viewBox="0 0 600 108" role="img" aria-label="注水和阀门时间轴"><text class="tl-label" x="0" y="29">注水</text><text class="tl-label" x="0" y="58">阀门</text><rect class="tl-bg" x="'+L+'" y="8" width="'+W+'" height="26" rx="7"/><rect class="tl-bg" x="'+L+'" y="42" width="'+W+'" height="20" rx="7"/>';
if(!r.noWindow)s+='<rect class="tl-win" x="'+x(r.window[0])+'" y="3" width="'+(x(r.window[1])-x(r.window[0]))+'" height="64" rx="6"/>';
r.actions.forEach((a,i)=>{if(a.water!==null)s+='<rect class="tl-pour" x="'+x(a.at)+'" y="8" width="'+Math.max(5,x(a.until)-x(a.at))+'" height="26" rx="5"/>';if(a.valve==='关'){const n=r.actions.slice(i+1).find(b=>b.valve==='开');const end=n?n.at:r.window[1];s+='<rect class="tl-valve" x="'+x(a.at)+'" y="42" width="'+(x(end)-x(a.at))+'" height="20" rx="5"/>';}});
for(let t=0;t<=max;t+=30){s+='<line class="tl-tick" x1="'+x(t)+'" x2="'+x(t)+'" y1="72" y2="79"/>';if(t%60===0||t===max)s+='<text class="tl-num" x="'+x(t)+'" y="101" text-anchor="middle">'+clock(t)+'</text>';}
s+='<line id="playhead" class="tl-head" x1="'+L+'" x2="'+L+'" y1="2" y2="74" opacity="0"/></svg>';
$('timeline').innerHTML=s;$('timeline').dataset.max=max;
}
function updateTimer(){
const r=recipe(),a=amounts(),ev=events(),e=elapsed(),running=state.timer&&state.timer.start!==null;
let cur=ev[0];for(const t of ev){if(t.at<=e)cur=t;}
const next=ev.find(t=>t.at>e);
$('timer').textContent=pretty(e);$('focusCard').style.setProperty('--p',(Math.min(1,e/Math.max(30,r.window[1]))*100).toFixed(1)+'%');$('timerState').textContent=running?'冲煮中':busy()?'已暂停':'准备冲煮';
$('timerCaption').textContent=running?'跟随节奏，水量看累计读数':busy()?'已暂停，继续后从这里计时':'第一滴水落下时，点击开始';
$('currentTemperature').textContent='注水水温 '+temperatureText(r)+' · '+(r.temperature.unit?'约值，开始注水时的壶温':r.temperature.detail)+' · 各段同壶水';
$('currentIndex').textContent=cur.wait?'等待 · 第 '+(cur.index+1)+' 段之后':'第 '+String(cur.index+1).padStart(2,'0')+' 步 / '+r.actions.length+' 步';
$('valveBadge').textContent=cur.valve==='关'?'保持关阀':r.mode==='pure'||r.mode==='pice'?'全程开阀':'保持开阀';
$('valveBadge').classList.toggle('closed',cur.valve==='关');
$('currentAction').textContent=cur.text.replace(/，\d+:\d{2} 前注完/,'').replace('；小碟盖住杯口','');
$('currentWater').textContent=cur.water===null?a.water:cur.water;
$('currentRatio').textContent=ratio(cur.water===null?a.water:cur.water,a.dose);
$('pourDeadline').textContent=cur.pour?clock(cur.until)+' 前注完'+(busy()?' · 还剩 '+Math.max(0,Math.ceil(cur.until-e))+' 秒':''):cur.valve==='关'?'保持关阀，等待浸泡':'保持开阀，不再追加水';
if(next){$('nextStep').innerHTML='下一步 <b>'+clock(next.at)+' · '+esc(next.text)+'</b><br>'+((next.pour&&next.water!==null)?'累计至 '+ratio(next.water,a.dose)+'（'+next.water+' g） · ':'')+(busy()?'还有 '+Math.max(0,Math.ceil(next.at-e))+' 秒':'计时开始后自动提示');}
else{$('nextStep').innerHTML='<b>等待滤过，观察粉面。</b><br>'+(r.noWindow?'没有预设估计，':'估计 '+clock(r.window[0])+'–'+clock(r.window[1])+'，')+'粉面没有明显积水时，手动完成。';}
$('startButton').innerHTML=(running?'暂停计时':busy()?'继续冲煮':'开始冲煮')+' '+(running?'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="4.5" width="4.2" height="15" rx="1.4"/><rect x="13.8" y="4.5" width="4.2" height="15" rx="1.4"/></svg>':'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z"/></svg>');
$('resetButton').disabled=!busy();$('finishButton').hidden=!busy();
$('soundButton').textContent='提示音 '+(state.sound?'开':'关');$('soundButton').setAttribute('aria-pressed',String(state.sound));
document.querySelectorAll('.step').forEach((el,i)=>{el.classList.toggle('active',i===cur.index);el.classList.toggle('done',i<cur.index);});
const mb=$('miniBar');mb.hidden=!busy()||visibleFocus;if(!mb.hidden){const w=cur.water===null?a.water:cur.water;mb.innerHTML='<span class="mb-time">'+pretty(e)+'</span><span class="mb-mid"><b>'+ratio(w,a.dose)+' · '+w+' g</b><small>'+(cur.valve==='关'?'关阀':'开阀')+(next?' · 下一步 '+Math.max(0,Math.ceil(next.at-e))+' 秒':' · 观察粉面')+'</small></span><span class="mb-go">回到计时 ↑</span>';}
const ph=$('playhead');if(ph){const x=62+Math.min(e,Number($('timeline').dataset.max))/Number($('timeline').dataset.max)*526;ph.setAttribute('x1',x);ph.setAttribute('x2',x);ph.setAttribute('opacity',busy()?1:0);}
}
function unlockAudio(){try{const C=window.AudioContext||window.webkitAudioContext;if(C){audio=audio||new C();if(audio.state==='suspended')audio.resume().catch(()=>{});}}catch(e){}}
function beep(strong){if(!state.sound||!audio||audio.state!=='running')return;try{const o=audio.createOscillator(),g=audio.createGain(),now=audio.currentTime;o.type='sine';o.frequency.value=strong?660:440;g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(.15,now+.02);g.gain.exponentialRampToValueAtTime(.0001,now+.2);o.connect(g);g.connect(audio.destination);o.start(now);o.stop(now+.23);}catch(e){}}
async function keepAwake(){try{if('wakeLock'in navigator&&state.timer&&state.timer.start!==null&&document.visibilityState==='visible'){wake=await navigator.wakeLock.request('screen');$('wakeNote').textContent='已请求屏幕常亮 · 参考秒数不决定好喝与否。';}}catch(e){$('wakeNote').textContent='若屏幕自动熄灭，请调整设备设置。计时会持续保留。';}}
function releaseWake(){if(wake){wake.release().catch(()=>{});wake=null;}}
function select(id){if(busy()){toast('完成或重置当前计时后，再切换配方');return;}if(DATA.recipes.some(r=>r.id===id)){state.selected=id;persist();render();}}
document.addEventListener('click',function(e){
const bb=e.target.closest('[data-bean]'),mm=e.target.closest('[data-mode]'),dd=e.target.closest('[data-dripper]'),gg=e.target.closest('[data-grind]'),cl=e.target.closest('[data-close]'),rr=e.target.closest('[data-recipe]');
if(bb){const r0=recipe();selectCombo(bb.dataset.bean, visibleMode(r0.mode), dripperOf(r0));}
if(mm){const r0=recipe();selectCombo(r0.bean, mm.dataset.mode, dripperOf(r0));}
if(dd){const r0=recipe();selectCombo(r0.bean, visibleMode(r0.mode), dd.dataset.dripper);}
if(gg&&!busy()){const c=config();c.grind=Math.round(clamp(c.grind+Number(gg.dataset.grind),.1,9)*10)/10;state.configs[state.selected]=c;persist();render();}
if(cl)$(cl.dataset.close).close();
if(rr&&!busy()){select(rr.dataset.recipe);$('allRecipesDialog').close();window.scrollTo({top:0,behavior:'smooth'});}
const t=e.target.closest('[data-taste]');if(t){const v=t.dataset.taste;if(tags.has(v)){tags.delete(v);t.classList.remove('active');}else{tags.add(v);t.classList.add('active');}}
});
function changeOptions(){if(busy())return;const d=Number($('doseInput').value),g=Number($('grindInput').value);if(!Number.isFinite(d)||d<5||d>45||!Number.isFinite(g)||g<.1||g>9){toast('粉量请填 5–45 g，刻度请填 0.1–9.0');render();return;}state.configs[state.selected]={dose:Math.round(d*10)/10,grind:Math.round(g*10)/10};persist();render();}
$('doseInput').addEventListener('change',changeOptions);$('grindInput').addEventListener('change',changeOptions);
$('restoreRecipe').onclick=()=>{if(!busy()){delete state.configs[state.selected];persist();render();toast('已恢复当前配方，其他配方未改变');}};
$('startButton').onclick=()=>{unlockAudio();if(!state.timer){state.timer={acc:0,start:Date.now()};fired=new Set();beep(true);}else if(state.timer.start===null){state.timer.start=Date.now();}else{state.timer.acc=elapsed();state.timer.start=null;releaseWake();}persist();render();if(state.timer.start!==null)keepAwake();};
$('resetButton').onclick=()=>{state.timer=null;fired=new Set();persist();releaseWake();render();toast('计时已重置，配方保留');};
$('soundButton').onclick=()=>{state.sound=!state.sound;unlockAudio();if(state.sound)beep(false);persist();updateTimer();};
$('finishButton').onclick=()=>{const sec=Math.floor(elapsed());if(state.timer.start!==null){state.timer.acc=elapsed();state.timer.start=null;}pending={recipe:state.selected,...amounts(),seconds:sec,date:new Date().toISOString()};releaseWake();persist();updateTimer();$('finishTime').value=clock(sec);$('feedbackText').value='';tags=new Set();scale={};document.querySelectorAll('[data-taste]').forEach(el=>el.classList.remove('active'));document.querySelectorAll('[data-scale]').forEach(el=>el.classList.remove('on'));$('blindLabel').value='';$('feedbackSummary').textContent=bean().name+' · '+mode().name+' · '+(recipe().dripper==='qt'?'三旋空山文 · ':'')+pending.dose+' g / '+pending.water+' g · ZP6 '+pending.grind.toFixed(1);$('feedbackDialog').showModal();};
$('feedbackForm').onsubmit=e=>{e.preventDefault();if(!pending)return;const val=$('finishTime').value.trim(),m=val.match(/^(\d{1,2}):([0-5]\d)$/);if(!m){toast('时间请填分:秒，例如 2:10');return;}const sec=Number(m[1])*60+Number(m[2]);if(sec>7200){toast('请核对完成时间');return;}const r={...pending,id:typeof crypto.randomUUID==='function'?crypto.randomUUID():Date.now()+'-'+Math.random().toString(16).slice(2),seconds:sec,tags:Array.from(tags),note:$('feedbackText').value.trim().slice(0,1000),taste:Object.keys(scale).length?{...scale}:undefined,blind:$('blindLabel').value.trim().slice(0,6)||undefined,temp:temperatureText(recipe()),dripper:recipe().dripper||'sw'};delete r.factor;r.next=makeNext(r);state.records.unshift(r);state.records=state.records.slice(0,1000);state.timer=null;pending=null;persist();$('feedbackDialog').close();render();toast('这一杯已记录，配方保持不变');};
function dripperName(r){return r.dripper==='qt'?'清庭三旋空山文 280 ml · NANO 185 波浪滤纸':'Hario Switch 03 · V60-03 滤纸';}
function statusInfo(r){const s=r.status||{kind:'u',cups:0};return s.kind==='m'?{cls:'measured',text:'已实测（'+s.cups+' 杯）'}:s.kind==='p'?{cls:'tentative',text:'暂定'}:{cls:'untested',text:'未测试'};}
function grindSub(r,a){const moved=Math.abs(a.grind-r.grind)>0.001;const pre=moved?'已改动 · ':'';
 if(r.mode==='flat')return pre+'可选探索 · 只比 11-03 那杯细 0.2';
 if(r.id==='gesha-cmp-qt'||r.id==='gesha-pure-qt')return pre+'11-03 已冲 · 干点 1:30 · 好喝';
 if(r.mode.indexOf('cmp')===0)return pre+'沿用瑰夏纯热 4.2 · 对照杯未实测';
 if(r.id==='gesha-pure')return pre+'已实测 · 唯一实测的刻度';
 if(r.status.kind==='m')return pre+'已冲 '+r.status.cups+' 杯 · 手册基线 '+(r.baseline!=null?r.baseline.toFixed(1):'无');
 if(r.baseline!=null)return pre+'起点 · 含 −0.4 偏移，未验证 · 手册 '+r.baseline.toFixed(1);
 return pre+'新豆起点 · 没有手册基线';}
function todayStr(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function dayDiff(f,t){return Math.round((Date.parse(t+'T00:00:00')-Date.parse(f+'T00:00:00'))/864e5);}
function addDays(s,n){const d=new Date(Date.parse(s+'T00:00:00')+n*864e5);return String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function roastOf(id){return state.roast[id]||(DATA.beans.find(b=>b.id===id)||{}).roastDate||'';}
function restInfo(b){const d=roastOf(b.id);if(!d)return null;const n=dayDiff(d,todayStr());const rd=b.restDays;let tone='plain',txt='烘焙后第 '+n+' 天，这包豆没有记录建议养豆期';
 if(rd){const f=addDays(d,rd[0]),t=addDays(d,rd[1]);if(n<rd[0]){tone='wait';txt='养豆中，还差 '+(rd[0]-n)+' 天到建议窗口（'+f+' 至 '+t+'）';}else if(n<=rd[1]){tone='go';txt='在建议窗口内（'+f+' 至 '+t+'）';}else{tone='late';txt='已超过建议窗口（'+f+' 至 '+t+'）';}}
 return {n,tone,txt,d};}
function renderRest(){const b=bean(),i=restInfo(b);
 $('restRow').innerHTML=(i?'<span class="rest-chip '+i.tone+'">第 '+i.n+' 天</span><span class="rest-text">'+esc(i.txt)+'</span>':'<span class="rest-text">烘焙日期没有记录，填上就能看到养豆天数。</span>')+'<label class="rest-date">烘焙日<input type="date" id="roastInput" value="'+esc(roastOf(b.id))+'" max="'+todayStr()+'"></label>';}
function renderToday(){const al=DATA.beans.find(x=>x.id==='alo-light'),i=restInfo(al);const chips=[];
 if(i)chips.push('<button class="today-chip '+i.tone+'" data-recipe-go="alo-light-pure"><span>Alo 浅焙</span><b>第 '+i.n+' 天</b><small>'+esc(i.txt)+'</small></button>');
 const cs=state.records.filter(x=>x.recipe==='gesha-cmp-sw').length,cq=state.records.filter(x=>x.recipe==='gesha-cmp-qt').length+DATA.history.filter(x=>x.recipe==='gesha-cmp-qt').length;
 chips.push('<button class="today-chip" data-jump="comparePanel"><span>Switch 03 对三旋空山文</span><b>'+(cs&&cq?'两杯都冲了':cs||cq?'冲了一杯':'待冲')+'</b><small>三旋空山文 11-03 已冲一杯 · 干点 1:30</small></button>');
 chips.push('<button class="today-chip" data-jump="notesPanel"><span>三旋空山文笔记</span><b>评杯与酸甜</b><small>评分标准和可选探索</small></button>');
 const visN=DATA.recipes.filter(x=>x.mode.indexOf('cmp')!==0&&x.mode!=='flat').length;
 const m=DATA.recipes.filter(x=>x.mode.indexOf('cmp')!==0&&x.mode!=='flat'&&x.status.kind==='m').length;
 chips.push('<button class="today-chip" id="todayAll"><span>已实测的方案</span><b>'+m+' / '+visN+'</b><small>其余是起点或暂定，见全部参数</small></button>');
 $('todayStrip').innerHTML='<p class="eyebrow">今日 · '+todayStr()+'</p><div class="today-grid">'+chips.join('')+'</div>';}
function prevOf(rec){return state.records.find(x=>x.id!==rec.id&&x.recipe===rec.recipe&&Date.parse(x.date)<Date.parse(rec.date));}
function diffText(rec){const p=prevOf(rec);if(!p)return '';const ch=[];if(p.grind!==rec.grind)ch.push('研磨 '+Number(p.grind).toFixed(1)+' → '+Number(rec.grind).toFixed(1));if(p.dose!==rec.dose)ch.push('粉量 '+p.dose+' → '+rec.dose+' g');else if(p.water!==rec.water)ch.push('热水 '+p.water+' → '+rec.water+' g');if(p.temp&&rec.temp&&p.temp!==rec.temp)ch.push('水温 '+p.temp+' → '+rec.temp);
 return ch.length?'和上一杯相比：'+ch.join('，')+(ch.length>1?'（一次改了多项，不好归因）':''):'和上一杯相比：参数没有变化';}
function suggest(rec){
 const r=DATA.recipes.find(x=>x.id===rec.recipe)||{},T=rec.taste||{},tg=rec.tags||[],g=Number(rec.grind),f1=n=>n.toFixed(1);
 const b=DATA.beans.find(x=>x.id===r.bean)||{},ri=b.restDays?restInfo(b):null;
 const dryT=tg.includes('发干发涩')||T.astringent>=4,bitter=tg.includes('尾苦明显')||T.bitter>=4;
 const sour=tg.includes('偏酸偏薄')||(T.acid>=4&&T.sweet<=2);
 const flat=T.sweet<=2&&!(T.acid>=3)&&!(T.bitter>=3);
 const watery=T.body<=2&&T.sweet>=3&&!sour&&!bitter&&!dryT;
 const good=(T.sweet>=4||tg.includes('甜感好'))&&!bitter&&!dryT&&!sour;
 let act,why,alt='';const notes=[];
 if(T.qall>=4&&!dryT&&!bitter){act='参数不变，这一杯可以保留';why='整体印象已经是高分。只有想探索时才动：一次只改一项，例如 ZP6 '+f1(g)+' → '+f1(g-0.2)+'，和这杯同日对比。';alt='探索杯没有更好，就回到这一杯的参数。';}
 else if((dryT||bitter)&&ri&&ri.n<b.restDays[0]){act='参数不变，养豆后同参数复冲';why='这包豆才第 '+ri.n+' 天（'+ri.txt+'）。先别改研磨，也别只怪新鲜度，养到窗口再用相同参数冲一杯。';alt='复冲后仍然'+(dryT?'发干发涩':'苦')+'：下一杯只把 ZP6 '+f1(g)+' 改成 '+f1(g+0.2)+'。';}
 else if(dryT){act='ZP6 '+f1(g)+' → '+f1(g+0.2)+'（调粗 0.2）';why='发干发涩多半是细粉或搅动过度，先调粗。结尾不要搅拌，也不要敲杯。涩的时候不要调细。';}
 else if(bitter){act='ZP6 '+f1(g)+' → '+f1(g+0.2)+'（调粗 0.2）';why='后段苦，按手册先调粗两格。';alt='再冲仍苦：下一个变量是水温，用 X-pro 设到 90°C，不要和研磨一起改。';}
 else if(sour){act='ZP6 '+f1(g)+' → '+f1(g-0.2)+'（调细 0.2）';why='酸尖、甜感不足，像萃取不够，按手册调细两格。';}
 else if(flat){act='ZP6 '+f1(g)+' → '+f1(g-0.2)+'（调细 0.2）';why='不甜、味道空，按手册调细两格。';}
 else if(watery){const nr=Math.round(rec.dose*(rec.water/rec.dose-1));act='热水 '+rec.water+' g → '+nr+' g（粉水比收紧 1）';why='酸甜是对的但偏薄，说明浓度低，只改粉水比，研磨不动。';}
 else if(good){act='参数不变，同参数再冲一杯';why='甜感好，苦和涩都不高。先确认能复现，再动下一项。';}
 else{act='参数不变，先补全评分';why='现有记录分辨不出问题。同参数再冲一杯，评分补全再决定改哪一项。';}
 if(!r.noWindow&&r.window&&rec.seconds!=null&&Number.isFinite(rec.seconds)){if(rec.seconds>r.window[1]+30)notes.push('干点 '+clock(rec.seconds)+'，比估计窗口晚。窗口只是估计，不单独据此改参数。');else if(rec.seconds<r.window[0]-30)notes.push('干点 '+clock(rec.seconds)+'，比估计窗口早。窗口只是估计，不单独据此改参数。');}
 const p=prevOf(rec);if(p&&(p.grind!==rec.grind||p.dose!==rec.dose))notes.push('上一杯已经改过参数。这杯的味道先归因于那一项改动，再决定下一项。');
 return {act,why,alt,notes};}
function makeNext(rec){const s=suggest(rec);return [s.act+'。',s.why,s.alt].filter(Boolean).join(' ');}
function renderSuggest(){const r=recipe(),last=state.records.find(x=>x.recipe===r.id);let h='<p class="eyebrow">下一杯建议</p>';
 if(last){const s=suggest(last);h+='<span class="tag-suggest">建议</span><h3>'+esc(s.act)+'</h3><p>'+esc(s.why)+'</p>'+(s.alt?'<p class="sg-alt">'+esc(s.alt)+'</p>':'')+s.notes.map(n=>'<p class="sg-note">'+esc(n)+'</p>').join('')+'<small>依据你 '+esc(new Date(last.date).toLocaleDateString('zh-CN',{month:'numeric',day:'numeric'}))+' 的记录。规则来自冲煮手册，是建议，不是实测结论，一次只改一项。</small>';}
 else h+='<h3>先冲一杯，再给建议。</h3><p>冲完记下味道评分和真实干点，这里会按手册规则只建议改一个变量。</p>';
 if(r.nextTest)h+='<div class="sg-plan"><span>计划中的下一杯</span><p>'+esc(r.nextTest)+'</p></div>';
 $('suggestCard').innerHTML=h;}
const SCALES=[['sweet','甜感'],['acid','酸质'],['bitter','苦感'],['astringent','涩感 / 发干'],['body','厚度'],['clean','干净度']];
const QSCALES=[['qaroma','香气'],['qflavor','风味'],['qafter','余韵'],['qacid','酸质'],['qsweet','甜感'],['qmouth','口感'],['qall','整体']];
const ALLSC=SCALES.concat(QSCALES.map(([k,n])=>[k,'品质·'+n]));
function scaleDots(t){return '<span class="dots">'+[1,2,3,4,5].map(i=>'<i'+(i<=t?' class="on"':'')+'></i>').join('')+'</span>';}
function renderCompare(){
 const sw=DATA.recipes.find(x=>x.id==='gesha-cmp-sw'),qt=DATA.recipes.find(x=>x.id==='gesha-cmp-qt');
 const L=id=>state.records.find(x=>x.recipe===id)||DATA.history.find(x=>x.recipe===id),ls=L(sw.id),lq=L(qt.id);
 const row=(k,a,b)=>'<tr><th>'+k+'</th><td>'+a+'</td><td>'+b+'</td></tr>';
 let t='<table class="cmp-table"><thead><tr><th></th><th>Switch 03</th><th>三旋空山文</th></tr></thead><tbody>'+
  row('滤杯','Hario Switch 03，360 ml','清庭三旋空山文，280 ml')+
  row('滤纸','Hario V60-03','NANO 莱赛尔高流速 185 波浪滤纸')+
  row('粉 / 水','15 g / 248 g · 1:16.5','15 g / 248 g · 1:16.5')+
  row('ZP6 · 水温','4.2 · 沸水约 93°C','4.2 · 沸水约 93°C')+
  row('阀门','全程开','全程开（推断）')+'</tbody></table>';
 t+='<table class="cmp-table cmp-result"><thead><tr><th>结果</th><th>Switch 03</th><th>三旋空山文</th></tr></thead><tbody>'+
  row('干点',ls&&ls.seconds!=null?clock(ls.seconds):'未冲',lq&&lq.seconds!=null?clock(lq.seconds):'未冲');
 if(ls&&ls.blind||lq&&lq.blind)t+=row('杯标',esc((ls&&ls.blind)||'无'),esc((lq&&lq.blind)||'无'));
 ALLSC.forEach(([k,n])=>{const a=ls&&ls.taste&&ls.taste[k],b=lq&&lq.taste&&lq.taste[k];if(a||b)t+=row(n,a?scaleDots(a):'未评',b?scaleDots(b):'未评');});
 if(ls&&ls.note||lq&&lq.note)t+=row('笔记',esc((ls&&ls.note)||''),esc((lq&&lq.note)||''));
 t+='</tbody></table>';
 let verdict='';
 if(ls&&lq){const bits=[];if(ls.seconds!=null&&lq.seconds!=null){const d=lq.seconds-ls.seconds;bits.push(d===0?'干点相同':'三旋空山文干点比 Switch 03 '+(d>0?'晚':'早')+' '+Math.abs(d)+' 秒');}
  ALLSC.forEach(([k,n])=>{const a=ls.taste&&ls.taste[k],b=lq.taste&&lq.taste[k];if(a&&b&&a!==b)bits.push(n+' '+(b>a?'+':'−')+Math.abs(b-a));});
  verdict='<p class="cmp-verdict"><b>差别（三旋空山文相对 Switch 03）：</b>'+esc(bits.length?bits.join('，'):'没有明显差别')+'。推断：这是“杯加滤纸”整套的差别，不能全算在杯型上。</p>';}
 else verdict='<p class="cmp-verdict muted">两杯都冲完以后，这里会列出干点和评分的差别。</p>';
 const notes=['<li><b>读法：</b>三旋空山文这杯是好咖啡。花果香更清晰，酸甜苦平衡，只是甜感比 Switch 03 基线略低。差别可能来自萃取率或水流速度，没有测过，不要当成缺点。</li>','<li><b>推断：</b>高流速莱赛尔纸让滤水更快，所以干点 1:30 比预期早；第三段比计划早结束、每段之间粉床都滤空，说明决定干点的是粉床阻力（NANO 185、三旋空空心底、研磨 4.2），不是注水节奏。滤纸和 Switch 03 的 V60-03 纸不同，比较的是“杯加纸”整套。</li>','<li><b>分段注水不会溢出。</b>只有关阀全浸泡，才要看 280 ml 的容量。</li>','<li><b>盲测：</b>让别人把两杯倒进编号一样的杯子，你不看杯标打分，记录时填杯标，最后揭晓。60°C、40°C、室温各尝一次。</li>','<li><b>一次只比一个差别。</b>粉水、研磨、水温、注水节奏，一次只动一项。</li>'];
 const lede=lq?'<p class="cmp-lede">三旋空山文 11-03 已冲一杯：干点 '+(lq.seconds!=null?clock(lq.seconds):'未计时')+'，花果香更清晰，整体平衡，甜感略低于 Switch 03。Switch 03 同参数那杯还没冲。</p>':'<p class="cmp-lede">同一包瑰夏，同样的 15 g / 248 g、ZP6 4.2、沸水。两杯都还没有冲。</p>';
 $('compareBody').innerHTML=lede+t+verdict+'<div class="cmp-actions"><button class="start-btn" data-pick="gesha-cmp-sw">冲 Switch 03 这杯</button><button class="start-btn" data-pick="gesha-flat-v2">三旋空山文 v2 · 可选探索 ZP6 4.0</button></div><ul class="cmp-notes">'+notes.join('')+'</ul>';}
function renderGear(){$('gearBody').innerHTML='<dl class="gear-list">'+DATA.gear.map(g=>'<div><dt>'+esc(g[0])+'</dt><dd>'+esc(g[1])+'</dd></div>').join('')+'</dl>';}
function renderRecords(){
 $('recordCount').textContent=state.records.length;const r0=recipe();
 $('filterButton').setAttribute('aria-pressed',onlyCurrent);$('filterButton').textContent=onlyCurrent?'显示全部':'只看当前方案';
 const mine=(onlyCurrent?state.records.filter(x=>x.recipe===r0.id):state.records).slice(0,30);
 const hist=DATA.history.filter(h=>!onlyCurrent||h.recipe===r0.id).map(h=>({...h,reference:true}));
 const list=mine.concat(hist);
 $('records').innerHTML=(!state.records.length?'<div class="empty-record">下一杯的进步，藏在这一杯的记录里。<small>完成计时后可以记下强度和品质印象评分。下面是你已有的历史实测。</small></div>':'')+(list.length?list.map(rec=>{const rr=DATA.recipes.find(x=>x.id===rec.recipe),bb=DATA.beans.find(x=>x.id===rr.bean),mm=DATA.modes.find(x=>x.id===rr.mode),dt=new Date(rec.date);
  const when=rec.reference?'<b>'+String(dt.getMonth()+1).padStart(2,'0')+'.'+String(dt.getDate()).padStart(2,'0')+'</b>历史实测'+(rec.dateNote?'<br>'+esc(rec.dateNote):''):'<b>'+String(dt.getMonth()+1).padStart(2,'0')+'.'+String(dt.getDate()).padStart(2,'0')+'</b>'+dt.toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit',hour12:false});
  const sec=Number.isFinite(rec.seconds)&&rec.seconds!=null?clock(rec.seconds):esc(rec.timeText||'未计时');
  const meta=[rec.dose+' g / '+rec.water+' g'+(rec.ice?' + 冰 '+rec.ice+' g':''),'ZP6 '+Number(rec.grind).toFixed(1)];if(rec.temp)meta.push(rec.temp);if(rec.dripper==='qt')meta.push('三旋空山文');if(rec.blind)meta.push('杯标 '+rec.blind);
  const sc=rec.taste?'<div class="rec-scale">'+ALLSC.filter(([k])=>rec.taste[k]).map(([k,n])=>'<span>'+n+scaleDots(rec.taste[k])+'</span>').join('')+'</div>':'';
  const df=rec.reference?'':diffText(rec);
  return '<article class="record'+(rec.reference?' reference':'')+'"><div class="record-date">'+when+'</div><div><h3>'+esc(bb.name)+' · '+esc(mm.name)+'</h3><div class="record-meta">'+esc(meta.join(' · '))+'</div>'+(rec.tags&&rec.tags.length?'<div class="record-tags">'+rec.tags.map(t=>'<span>'+esc(t)+'</span>').join('')+'</div>':'')+sc+(rec.note?'<p class="record-notes">'+esc(rec.note)+'</p>':'')+(df?'<p class="record-diff">'+esc(df)+'</p>':'')+(rec.next?'<p class="record-next"><b>建议</b>'+esc(rec.next)+'</p>':'')+'</div><div class="record-time">'+sec+'<small>'+(Number.isFinite(rec.seconds)&&rec.seconds!=null?'粉面积水消失':'没有精确计时')+'</small>'+(rec.reference?'':'<button class="record-del" data-del="'+esc(rec.id)+'">删除</button>')+'</div></article>';}).join(''):'<div class="empty-record">没有符合的记录。</div>');
}

function dripperShort(r){return dripperOf(r)==='qt'?'三旋空山文':'Switch 03';}
function renderAll(){$('allRecipes').innerHTML=DATA.recipes.map(r=>{const a=amounts(r);return '<tr data-recipe="'+r.id+'" tabindex="0" role="button" aria-label="选择'+esc(bean(r).short+' · '+mode(r).name+' · '+dripperShort(r))+'"><td>'+esc(bean(r).short)+'<small>'+esc(mode(r).name)+' · '+esc(dripperShort(r))+'</small></td><td>'+a.dose+' / '+a.water+' / '+a.ice+'</td><td class="table-temperature">'+esc(temperatureText(r))+'<small>'+esc(r.temperature.detail)+'</small><small>'+esc(r.temperature.status)+'</small></td><td>'+a.grind.toFixed(1)+'</td><td>'+'<span class="status mini '+statusInfo(r).cls+'">'+esc(statusInfo(r).text)+'</span>'+'</td></tr>';}).join('');}
$('allRecipes').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();e.target.closest('[data-recipe]')?.click();}});
$('historyButton').onclick=()=>$('recordsPanel').scrollIntoView({behavior:'smooth'});
$('allRecipesButton').onclick=()=>$('allRecipesDialog').showModal();
$('printButton').onclick=()=>window.print();
$('exportButton').onclick=()=>{const obj={format:'mars-brew-studio',version:1,exportedAt:new Date().toISOString(),app:'2026-11-03-v5',records:state.records,configs:state.configs,roast:state.roast,selected:state.selected};const blob=new Blob([JSON.stringify(obj,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='mars-brew-backup-'+new Date().toISOString().slice(0,10)+'.json';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('已导出配方设置与 '+state.records.length+' 条记录');};
$('importButton').onclick=()=>$('importFile').click();
$('importFile').onchange=async e=>{const f=e.target.files[0];if(!f)return;if(busy()){toast('请先完成或重置当前计时');e.target.value='';return;}if(f.size>5000000){toast('文件过大，请选择冲煮台导出的备份');e.target.value='';return;}try{const obj=JSON.parse(await f.text());if(obj.format!=='mars-brew-studio'||obj.version!==1||!Array.isArray(obj.records)||obj.records.length>1000||!obj.records.every(validRecord))throw Error();const existing=new Set(state.records.map(r=>r.id));const imported=obj.records.filter(r=>!existing.has(r.id)).map(cleanRecord);if(obj.roast&&typeof obj.roast==='object')for(const k in obj.roast)if(/^\d{4}-\d\d-\d\d$/.test(obj.roast[k])&&DATA.beans.some(b=>b.id===k))state.roast[k]=obj.roast[k];state.records=imported.concat(state.records).sort((a,b)=>Date.parse(b.date)-Date.parse(a.date)).slice(0,1000);if(obj.configs&&typeof obj.configs==='object'){for(const r of DATA.recipes){const c=obj.configs[r.id];if(c&&Number.isFinite(c.dose)&&c.dose>=5&&c.dose<=45&&Number.isFinite(c.grind)&&c.grind>=.1&&c.grind<=9)state.configs[r.id]={dose:c.dose,grind:c.grind};}}persist();render();toast('已合并 '+imported.length+' 条新记录，并恢复有效配方设置');}catch(err){toast('文件格式不匹配，未导入。请选择本工具的 JSON 备份。');}e.target.value='';};
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'){updateTimer();keepAwake();}else persist();});
window.addEventListener('pagehide',persist);
setInterval(()=>{if(!state.timer||state.timer.start===null)return;const e=elapsed(),sec=Math.floor(e);if(sec!==lastTick){lastTick=sec;for(const item of events()){if(item.at===0)continue;for(const offset of [3,0]){const at=item.at-offset,key=item.at+'-'+offset;if(Math.abs(e-at)<.7&&!fired.has(key)){fired.add(key);beep(offset===0);}}}if(Date.now()-lastSaved>5000){persist();lastSaved=Date.now();}}updateTimer();if(e>=7200){state.timer.acc=7200;state.timer.start=null;persist();releaseWake();toast('计时已满 120 分钟，已暂停');}},250);

{const row=([k,n])=>'<div class="scale-row"><span>'+n+'</span><span class="scale-btns">'+[1,2,3,4,5].map(i=>'<button type="button" data-scale="'+k+'" data-v="'+i+'" aria-label="'+n+' '+i+'">'+i+'</button>').join('')+'</span></div>';$('scaleRows').innerHTML='<p class="scale-sub">强度：有多少（1 弱 5 强）</p>'+SCALES.map(row).join('')+'<p class="scale-sub">品质印象：好不好（1 低 5 高，参照 SCA CVA 和世界冲煮杯评分表）</p>'+QSCALES.map(row).join('')+'<p class="scale-sub small">酸质和甜感看品质，不看多少。整体包含平衡，冷却后也要再看一次。</p>';}
document.addEventListener('click',e=>{
 const sc=e.target.closest('[data-scale]');if(sc){const k=sc.dataset.scale,v=Number(sc.dataset.v);if(scale[k]===v)delete scale[k];else scale[k]=v;document.querySelectorAll('[data-scale="'+k+'"]').forEach(x=>x.classList.toggle('on',Number(x.dataset.v)<=(scale[k]||0)));return;}
 const j=e.target.closest('[data-jump]');if(j){const t=$(j.dataset.jump);if(t.tagName==='DETAILS')t.open=true;t.scrollIntoView({behavior:'smooth'});return;}
 const g=e.target.closest('[data-recipe-go]');if(g){if(busy()){toast('请先完成或重置当前计时');return;}select(g.dataset.recipeGo);document.querySelector('.select-panel').scrollIntoView({behavior:'smooth'});return;}
 const pk=e.target.closest('[data-pick]');if(pk){if(busy()){toast('请先完成或重置当前计时');return;}select(pk.dataset.pick);window.scrollTo({top:0,behavior:'smooth'});toast('已选好，滑到计时卡开始');return;}
 const dl=e.target.closest('[data-del]');if(dl){if(confirm('删除这条记录？导出的备份不受影响。')){state.records=state.records.filter(x=>x.id!==dl.dataset.del);persist();render();toast('已删除');}return;}
 if(e.target.closest('#filterButton')){onlyCurrent=!onlyCurrent;renderRecords();return;}
 if(e.target.closest('#todayAll')){$('allRecipesButton').click();return;}
});
document.addEventListener('change',e=>{if(e.target.id==='roastInput'){const v=e.target.value;if(/^\d{4}-\d\d-\d\d$/.test(v))state.roast[bean().id]=v;else delete state.roast[bean().id];persist();render();toast(v?'烘焙日期已保存':'已清除烘焙日期');}});
$('miniBar').onclick=()=>$('focusCard').scrollIntoView({behavior:'smooth',block:'start'});
if('IntersectionObserver' in window)new IntersectionObserver(es=>{visibleFocus=es[0].isIntersecting;updateTimer();},{threshold:.2}).observe($('focusCard'));

(function(){const tabs=[...document.querySelectorAll('#tabbar [data-tab]')];if(!tabs.length)return;
const target=id=>id==='select'?document.querySelector('.select-panel'):$(id);
tabs.forEach(b=>b.addEventListener('click',()=>{const el=target(b.dataset.tab);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}));
let tick=false;function spy(){tick=false;let cur=0;tabs.forEach((b,i)=>{const el=target(b.dataset.tab);if(el&&el.getBoundingClientRect().top<innerHeight*.55)cur=i;});
if(innerHeight+scrollY>=document.documentElement.scrollHeight-4)cur=tabs.length-1;
tabs.forEach((b,i)=>b.classList.toggle('on',i===cur));}
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(spy);}},{passive:true});spy();})();

render();if(state.timer){for(const item of events())if(item.at<elapsed()){fired.add(item.at+'-0');fired.add(item.at+'-3');}toast('已恢复上次计时与配方。');}
})();
