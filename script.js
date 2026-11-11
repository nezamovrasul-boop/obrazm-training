const dialog=document.querySelector('#contact-dialog');
let previousFocus;
function contact(title){
 previousFocus=document.activeElement;
 document.querySelector('#contact-title').textContent=title;
 const box=document.querySelector('#contact-options');box.replaceChildren();
 const c=window.EVENT_CONTACTS||{};
 const links=[];
 if(c.phone&&/^\+?\d[\d ()-]{6,}$/.test(c.phone))links.push(['Позвонить: +998 90 987 73 15','tel:'+c.phone.replace(/[^+\d]/g,'')]);
 if(c.telegram&&/^[a-zA-Z0-9_]{5,}$/.test(c.telegram))links.push(['Написать в Telegram','https://t.me/'+c.telegram]);
 if(c.whatsapp&&/^\d{7,15}$/.test(c.whatsapp))links.push(['Написать в WhatsApp','https://wa.me/'+c.whatsapp]);
 if(c.paymentUrl&&/^https:\/\//.test(c.paymentUrl))links.push(['Перейти к оплате',c.paymentUrl]);
 const p=document.createElement('p');
 p.textContent=links.length?'Выберите удобный способ связи. Уточните стоимость, расписание и условия участия по телефону +998 90 987 73 15.':'Контакты организаторов скоро появятся. Сейчас можно познакомиться с программой и сохранить её, чтобы вернуться к решению об участии.';
 if(!links.length)p.className='contact-note';box.append(p);
 links.forEach(([label,url])=>{const a=document.createElement('a');a.className='btn contact-link';a.textContent=label;a.href=url;if(url.startsWith('https:')){a.target='_blank';a.rel='noopener noreferrer'}box.append(a)});
 const a=document.createElement('a');a.href='#program';a.className='text-link';a.textContent='Посмотреть программу';a.addEventListener('click',()=>dialog.close());box.append(a);
 dialog.showModal();
}
document.querySelectorAll('[data-contact]').forEach(b=>b.addEventListener('click',()=>contact(b.dataset.contact)));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>previousFocus?.focus());
const questions=[{title:'Где вы чаще замечаете знакомый сценарий?',options:['В близких отношениях','В работе и ответственности','В отношении к себе']},{title:'Что вы чаще делаете в такой ситуации?',options:['Соглашаюсь, хотя хочу отказать','Беру на себя больше, чем могу','Доказываю, что достоин большего','Откладываю важный разговор']},{title:'Какого нового опыта вам сейчас хочется?',options:['Говорить о своих желаниях прямо','Оставлять другим их ответственность','Действовать без бесконечного одобрения','Выбирать и делать конкретный шаг']}];
let step=0;const answers=[];const qs=document.querySelector('#q-step'),qt=document.querySelector('#q-title'),qo=document.querySelector('#q-options'),qr=document.querySelector('#q-result'),qb=document.querySelector('#q-back');
function renderQuiz(){qb.hidden=step===0;qr.hidden=true;qo.hidden=false;if(step===3){qs.textContent='ВАШ ПЕРВЫЙ ХОД';qt.textContent='Сценарий начинается с привычной реакции.';qo.hidden=true;qr.hidden=false;qr.replaceChildren();const p=document.createElement('p');p.textContent='Вы заметили знакомую историю '+['в близких отношениях','в работе и ответственности','в отношении к себе'][answers[0]]+'. Ваша привычная реакция: «'+questions[1].options[answers[1]]+'».';const p2=document.createElement('p');p2.textContent='Ваш желаемый шаг: «'+questions[2].options[answers[2]]+'». Вспомните один недавний эпизод и спросите себя: в какой момент я мог бы попробовать этот выбор?';const p3=document.createElement('p');p3.textContent='С этим наблюдением можно прийти на тренинг и исследовать его в живой практике.';const b=document.createElement('button');b.className='btn small';b.textContent='Посмотреть программу';b.onclick=()=>document.querySelector('#program').scrollIntoView({behavior:'smooth'});qr.append(p,p2,p3,b);qb.textContent='Пройти ещё раз';return}qs.textContent='ВОПРОС '+(step+1)+' ИЗ 3';qt.textContent=questions[step].title;qo.replaceChildren();questions[step].options.forEach((text,i)=>{const b=document.createElement('button');b.type='button';b.className='quiz-option';b.textContent=text;b.onclick=()=>{answers[step]=i;step++;renderQuiz();qt.tabIndex=-1;qt.focus({preventScroll:true})};qo.append(b)});qb.textContent='Назад'}
qb.onclick=()=>{step=step===3?0:Math.max(0,step-1);renderQuiz()};renderQuiz();

const photoSlides=[
 {src:'ruslan-yoga.webp',alt:'Руслан Молодцов на практике',label:'Ведущий'},
 {src:'RV-21-05-112.webp',alt:'Групповая практика на предыдущем мероприятии',label:'Взаимодействие'},
 {src:'RV-YOGA-23-05-100.webp',alt:'Йогическая практика на открытой площадке',label:'Присутствие'}
];
let photoIndex=0,photoLoading=false;
const photo=document.querySelector('#hero-photo'),photoStatus=document.querySelector('#gallery-status');
const photoButtons=[document.querySelector('#gallery-prev'),document.querySelector('#gallery-next')];

const reducedHeroMotion=matchMedia('(prefers-reduced-motion:reduce)');
async function changePhoto(direction){
 if(photoLoading)return;
 const next=(photoIndex+direction+photoSlides.length)%photoSlides.length;
 const slide=photoSlides[next],preload=new Image();photoLoading=true;
 photoButtons.forEach(b=>b.disabled=true);
 const finish=()=>{photoLoading=false;photoButtons.forEach(b=>b.disabled=false)};
 preload.onerror=()=>{photoStatus.textContent='Фото временно недоступно. Попробуйте ещё раз.';finish()};
 preload.onload=async()=>{
 let outgoing;
 try{
 if(!reducedHeroMotion.matches&&photo.animate){
 outgoing=photo.cloneNode(false);outgoing.removeAttribute('id');outgoing.alt='';outgoing.setAttribute('aria-hidden','true');outgoing.className='photo-outgoing';photo.parentElement.append(outgoing);
 }
 photoIndex=next;photo.src=slide.src;photo.alt=slide.alt;
 photoStatus.textContent=String(next+1).padStart(2,'0')+' / 03 · '+slide.label;
 if(outgoing){
 const distance=innerWidth<761?40:75;
 await outgoing.animate([{transform:'translateX(0) rotate(0deg)',opacity:1},{transform:'translateX('+(-direction*distance)+'px) rotate('+(-direction*7)+'deg)',opacity:0}],{duration:380,easing:'cubic-bezier(.22,.75,.25,1)'}).finished;
 }
 }catch(error){/* Finish safely if animation is interrupted. */}
 finally{outgoing?.remove();finish()}
 };
 preload.src=slide.src;
}
photoButtons[0].addEventListener('click',()=>changePhoto(-1));
photoButtons[1].addEventListener('click',()=>changePhoto(1));

let swipeStart;
const heroFrame=document.querySelector('.gallery-frame');
heroFrame.addEventListener('pointerdown',e=>{if(e.isPrimary&&e.pointerType!=='mouse')swipeStart={x:e.clientX,y:e.clientY}});
heroFrame.addEventListener('pointerup',e=>{if(!swipeStart)return;const dx=e.clientX-swipeStart.x,dy=e.clientY-swipeStart.y;swipeStart=null;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.5)changePhoto(dx<0?1:-1)});
heroFrame.addEventListener('pointercancel',()=>{swipeStart=null});
reducedHeroMotion.addEventListener('change',()=>{if(reducedHeroMotion.matches)heroFrame.getAnimations({subtree:true}).forEach(a=>a.finish())});
