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
 links.forEach(([label,url])=>{const a=document.createElement('a');a.className='contact-link';a.textContent=label+' →';a.href=url;if(url.startsWith('https:')){a.target='_blank';a.rel='noopener noreferrer'}box.append(a)});
 const a=document.createElement('a');a.href='#program';a.className='text-link';a.textContent='Посмотреть программу ↓';a.addEventListener('click',()=>dialog.close());box.append(a);
 dialog.showModal();
}
document.querySelectorAll('[data-contact]').forEach(b=>b.addEventListener('click',()=>contact(b.dataset.contact)));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>previousFocus?.focus());
const questions=[{title:'Где вы чаще замечаете знакомый сценарий?',options:['В близких отношениях','В работе и ответственности','В отношении к себе']},{title:'Что вы чаще делаете в такой ситуации?',options:['Соглашаюсь, хотя хочу отказать','Беру на себя больше, чем могу','Доказываю, что достоин большего','Откладываю важный разговор']},{title:'Какого нового опыта вам сейчас хочется?',options:['Говорить о своих желаниях прямо','Оставлять другим их ответственность','Действовать без бесконечного одобрения','Выбирать и делать конкретный шаг']}];
let step=0;const answers=[];const qs=document.querySelector('#q-step'),qt=document.querySelector('#q-title'),qo=document.querySelector('#q-options'),qr=document.querySelector('#q-result'),qb=document.querySelector('#q-back');
function renderQuiz(){qb.hidden=step===0;qr.hidden=true;qo.hidden=false;if(step===3){qs.textContent='ВАШ ПЕРВЫЙ ХОД';qt.textContent='Сценарий начинается с привычной реакции.';qo.hidden=true;qr.hidden=false;qr.replaceChildren();const p=document.createElement('p');p.textContent='Вы заметили знакомую историю '+['в близких отношениях','в работе и ответственности','в отношении к себе'][answers[0]]+'. Ваша привычная реакция: «'+questions[1].options[answers[1]]+'».';const p2=document.createElement('p');p2.textContent='Ваш желаемый шаг: «'+questions[2].options[answers[2]]+'». Вспомните один недавний эпизод и спросите себя: в какой момент я мог бы попробовать этот выбор?';const p3=document.createElement('p');p3.textContent='С этим наблюдением можно прийти на тренинг и исследовать его в живой практике.';const b=document.createElement('button');b.className='btn small';b.textContent='Посмотреть программу →';b.onclick=()=>document.querySelector('#program').scrollIntoView({behavior:'smooth'});qr.append(p,p2,p3,b);qb.textContent='↺ Пройти ещё раз';return}qs.textContent='ВОПРОС '+(step+1)+' ИЗ 3';qt.textContent=questions[step].title;qo.replaceChildren();questions[step].options.forEach((text,i)=>{const b=document.createElement('button');b.type='button';b.className='quiz-option';b.textContent=text+' →';b.onclick=()=>{answers[step]=i;step++;renderQuiz();qt.tabIndex=-1;qt.focus({preventScroll:true})};qo.append(b)});qb.textContent='← Назад'}
qb.onclick=()=>{step=step===3?0:Math.max(0,step-1);renderQuiz()};renderQuiz();

/* GalleryContainer / GalleryCol interaction adapted from Skillry Angled Gallery Hero. */
const galleryEl=document.querySelector('.gallery');
const motionAllowed=matchMedia('(min-width:761px) and (prefers-reduced-motion:no-preference)');
let pendingFrame=false;
function updateGallery(){pendingFrame=false;if(!galleryEl)return;const r=galleryEl.getBoundingClientRect();const p=Math.max(0,Math.min(1,(innerHeight-r.top)/(innerHeight+r.height)));galleryEl.style.setProperty('--angle',motionAllowed.matches?Math.max(0,12*(1-p*2))+'deg':'0deg');galleryEl.style.setProperty('--shift',motionAllowed.matches?12*(1-p*2)+'px':'0px')}
function requestGallery(){if(!pendingFrame){pendingFrame=true;requestAnimationFrame(updateGallery)}}
addEventListener('scroll',requestGallery,{passive:true});addEventListener('resize',requestGallery);motionAllowed.addEventListener('change',requestGallery);updateGallery();
