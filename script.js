(function(){
'use strict';
var $=function(s){return document.querySelector(s)};
var $$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var load=function(k,d){try{var v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}};
var save=function(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
var RATE=12600;
var C={bt:['Black Titanium','#2f3033'],wt:['White Titanium','#e8e6e1'],nt:['Natural Titanium','#b9b2a6'],dt:['Desert Titanium','#c3a58a'],bluet:['Blue Titanium','#4b5668'],
sil:['Silver','#e3e4e6'],ora:['Cosmic Orange','#e8742f'],db:['Deep Blue','#2f4a6e'],blk:['Black','#1f2022'],wht:['White','#f4f4f2'],
mist:['Mist Blue','#a9bfd6'],sage:['Sage','#aab99e'],lav:['Lavender','#b8a9d3'],sb:['Space Black','#262628'],cw:['Cloud White','#f2f2f0'],
lg:['Light Gold','#dcc9a0'],sky:['Sky Blue','#9cc3e6'],pink:['Pink','#f1b9c8'],teal:['Teal','#7aa9a8'],ultra:['Ultramarine','#5a6bd6'],
blue:['Blue','#8fb0cf'],green:['Green','#b5d1b1'],yel:['Yellow','#f1e08a'],mid:['Midnight','#2a2e3a'],star:['Starlight','#efe9e0'],pur:['Purple','#cdb9e4'],red:['Red','#c4202d'],
gold:['Gold','#e8d3b0'],dp:['Deep Purple','#4f3a63'],gr:['Graphite','#54524f'],sierra:['Sierra Blue','#a7c1d9'],alp:['Alpine Green','#576856'],pred:['(PRODUCT)RED','#c4202d']};
function mk(id,n,c,type,scr,chip,ram,mp,lens,bat,col,st,d,r){return {id:id,n:n,c:c,type:type,scr:scr,chip:chip,ram:ram,mp:mp,k:lens,bat:bat,col:col,st:st,d:d,r:r}}
var G=function(a){return a.map(function(x){return [x>=1000?(x/1000)+'TB':x+'GB',0]})};
var M=[
mk('17pm','iPhone 17 Pro Max','pro','promax','6.9"','A19 Pro',12,48,3,39,['sil','ora','db'],[['256GB',1199],['512GB',1399],['1TB',1599],['2TB',1999]],0,4.9),
mk('17p','iPhone 17 Pro','pro','pro','6.3"','A19 Pro',12,48,3,33,['sil','ora','db'],[['256GB',1099],['512GB',1299],['1TB',1499]],0,4.9),
mk('17','iPhone 17','std','std','6.3"','A19',8,48,2,30,['blk','wht','mist','sage','lav'],[['256GB',799],['512GB',999]],0,4.8),
mk('air','iPhone Air','air','air','6.5"','A19 Pro',12,48,1,27,['sb','cw','lg','sky'],[['256GB',999],['512GB',1199],['1TB',1399]],0,4.7),
mk('16pm','iPhone 16 Pro Max','pro','promax','6.9"','A18 Pro',8,48,3,33,['bt','wt','nt','dt'],[['256GB',1199],['512GB',1399],['1TB',1599]],5,4.8),
mk('16p','iPhone 16 Pro','pro','pro','6.3"','A18 Pro',8,48,3,27,['bt','wt','nt','dt'],[['128GB',999],['256GB',1099],['512GB',1299],['1TB',1499]],5,4.8),
mk('16pl','iPhone 16 Plus','std','plus','6.7"','A18',8,48,2,27,['blk','wht','pink','teal','ultra'],[['128GB',899],['256GB',999],['512GB',1199]],8,4.6),
mk('16','iPhone 16','std','std','6.1"','A18',8,48,2,22,['blk','wht','pink','teal','ultra'],[['128GB',799],['256GB',899],['512GB',1099]],8,4.7),
mk('15pm','iPhone 15 Pro Max','pro','promax','6.7"','A17 Pro',8,48,3,29,['bt','wt','bluet','nt'],[['256GB',1199],['512GB',1399],['1TB',1599]],10,4.8),
mk('15p','iPhone 15 Pro','pro','pro','6.1"','A17 Pro',8,48,3,23,['bt','wt','bluet','nt'],[['128GB',999],['256GB',1099],['512GB',1299],['1TB',1499]],10,4.7),
mk('15pl','iPhone 15 Plus','std','plus','6.7"','A16 Bionic',6,48,2,26,['blk','blue','green','yel','pink'],[['128GB',899],['256GB',999],['512GB',1199]],12,4.5),
mk('15','iPhone 15','std','std','6.1"','A16 Bionic',6,48,2,20,['blk','blue','green','yel','pink'],[['128GB',799],['256GB',899],['512GB',1099]],12,4.6),
mk('14pm','iPhone 14 Pro Max','pro','promax','6.7"','A16 Bionic',6,48,3,29,['sb','sil','gold','dp'],[['128GB',1099],['256GB',1199],['512GB',1399],['1TB',1599]],15,4.7),
mk('14p','iPhone 14 Pro','pro','pro','6.1"','A16 Bionic',6,48,3,23,['sb','sil','gold','dp'],[['128GB',999],['256GB',1099],['512GB',1299],['1TB',1499]],15,4.6),
mk('14pl','iPhone 14 Plus','std','plus','6.7"','A15 Bionic',6,12,2,26,['mid','star','blue','pur','red','yel'],[['128GB',899],['256GB',999],['512GB',1199]],15,4.5),
mk('14','iPhone 14','std','std','6.1"','A15 Bionic',6,12,2,20,['mid','star','blue','pur','red','yel'],[['128GB',699],['256GB',799],['512GB',999]],15,4.5),
mk('13pm','iPhone 13 Pro Max','pro','promax','6.7"','A15 Bionic',6,12,3,28,['gr','gold','sil','sierra','alp'],[['128GB',1099],['256GB',1199],['512GB',1399],['1TB',1599]],20,4.6),
mk('13p','iPhone 13 Pro','pro','pro','6.1"','A15 Bionic',6,12,3,22,['gr','gold','sil','sierra','alp'],[['128GB',999],['256GB',1099],['512GB',1299],['1TB',1499]],20,4.6),
mk('13','iPhone 13','std','std','6.1"','A15 Bionic',4,12,2,19,['mid','star','blue','pink','green','red'],[['128GB',699],['256GB',799],['512GB',999]],20,4.5),
mk('se3','iPhone SE 3','std','se','4.7"','A15 Bionic',4,12,1,15,['mid','star','pred'],[['64GB',429],['128GB',479],['256GB',579]],20,4.3)];
var ACC=[{id:'a1',n:'AirPods Pro',p:249,e:'🎧'},{id:'a2',n:'MagSafe Charger',p:39,e:'🔌'},{id:'a3',n:'Silicone Case',p:49,e:'📱'},{id:'a4',n:'USB-C Cable',p:19,e:'🔗'}];
var T={
uz:{home:'Bosh sahifa',models:'iPhone modellari',about:'Apple haqida',accessories:'Aksessuarlar',contact:'Aloqa',cart:'Savat',login:'Kirish',register:'Ro‘yxatdan o‘tish',heroTitle:'Yangi iPhone bilan tanishing',heroText:'Titan. Kuchli. Go‘zal. Eng yangi iPhone endi bizda.',buy:'Hozir sotib olish',explore:'Modellarni ko‘rish',latest:'Eng yangi iPhone',best:'Eng ko‘p sotilganlar',offers:'Maxsus takliflar',offersP:'Cheklangan muddatli chegirmalar',search:'Qidirish...',all:'Hammasi',pro:'Pro',std:'Standart',air:'Air',aboutP:'Original iPhone va aksessuarlar, rasmiy kafolat bilan.',why:'Nega biz?',why1:'Original mahsulot',why2:'Tez yetkazish',why3:'Kafolat',reviews:'Mijozlar fikrlari',send:'Yuborish',total:'Jami',empty:'Savat bo‘sh',checkout:'Rasmiylashtirish',add:'Savatga',details:'Batafsil',added:'Savatga qo‘shildi',thanks:'Buyurtma qabul qilindi!',nofound:'Hech narsa topilmadi',color:'Rang',storage:'Xotira',screen:'Ekran',chip:'Protsessor',camera:'Kamera',battery:'Batareya',ram:'RAM',from:'dan',sale:'Chegirma',lens1:'bitta',lens2:'ikkilamchi',lens3:'uchlamchi',hours:'soat video',fname:'Ism',lname:'Familiya',phone:'Telefon (+998...)',pass:'Parol',pass2:'Parolni tasdiqlang',eEmail:'Email noto‘g‘ri',ePass:'Parol kamida 6 belgi',eName:'Ism va familiyani kiriting',ePhone:'Telefon noto‘g‘ri',eMatch:'Parollar mos emas',eExists:'Bu email ro‘yxatdan o‘tgan',eWrong:'Email yoki parol xato',okReg:'Muvaffaqiyatli ro‘yxatdan o‘tdingiz!',okLogin:'Xush kelibsiz',bye:'Xayr!',desc_promax:'Eng katta ekran, eng kuchli kamera va eng uzoq ishlaydigan batareya.',desc_pro:'Professional kamera va titan korpus ixcham o‘lchamda.',desc_std:'Kundalik foydalanish uchun ajoyib kamera, tezkor chip va yorqin ranglar.',desc_plus:'Katta ekran va uzoq batareya qulay narxda.',desc_air:'Juda yupqa va yengil dizayn, kuchli chip bilan.'},
en:{home:'Home',models:'iPhone Models',about:'About Apple',accessories:'Accessories',contact:'Contact Us',cart:'Cart',login:'Login',register:'Register',heroTitle:'Discover The New iPhone',heroText:'Titanium. Powerful. Beautiful. The latest iPhone is here.',buy:'Buy Now',explore:'Explore Models',latest:'Latest iPhone',best:'Best Sellers',offers:'Special Offers',offersP:'Limited-time discounts',search:'Search...',all:'All',pro:'Pro',std:'Standard',air:'Air',aboutP:'Original iPhones and accessories with official warranty.',why:'Why Choose Us',why1:'Original products',why2:'Fast delivery',why3:'Warranty',reviews:'Customer Reviews',send:'Send',total:'Total',empty:'Your cart is empty',checkout:'Checkout',add:'Add to Cart',details:'Details',added:'Added to cart',thanks:'Order received!',nofound:'Nothing found',color:'Color',storage:'Storage',screen:'Display',chip:'Processor',camera:'Camera',battery:'Battery',ram:'RAM',from:'from',sale:'Sale',lens1:'single',lens2:'dual',lens3:'triple',hours:'h video playback',fname:'First name',lname:'Last name',phone:'Phone (+998...)',pass:'Password',pass2:'Confirm password',eEmail:'Invalid email',ePass:'Password must be 6+ characters',eName:'Enter first and last name',ePhone:'Invalid phone',eMatch:'Passwords do not match',eExists:'Email already registered',eWrong:'Wrong email or password',okReg:'Registration successful!',okLogin:'Welcome',bye:'Goodbye!',desc_promax:'The biggest display, the most capable camera and the longest battery life.',desc_pro:'Pro camera system and titanium design in a compact size.',desc_std:'Great camera, fast chip and vivid colors for everyday use.',desc_plus:'A big display and long battery life at a friendly price.',desc_air:'Ultra-thin and light design powered by a pro-grade chip.'},
ru:{home:'Главная',models:'Модели iPhone',about:'Об Apple',accessories:'Аксессуары',contact:'Контакты',cart:'Корзина',login:'Войти',register:'Регистрация',heroTitle:'Откройте новый iPhone',heroText:'Титан. Мощь. Красота. Новейший iPhone уже здесь.',buy:'Купить',explore:'Смотреть модели',latest:'Новейшие iPhone',best:'Хиты продаж',offers:'Спецпредложения',offersP:'Скидки на ограниченное время',search:'Поиск...',all:'Все',pro:'Pro',std:'Стандарт',air:'Air',aboutP:'Оригинальные iPhone и аксессуары с гарантией.',why:'Почему мы',why1:'Оригинальные товары',why2:'Быстрая доставка',why3:'Гарантия',reviews:'Отзывы клиентов',send:'Отправить',total:'Итого',empty:'Корзина пуста',checkout:'Оформить',add:'В корзину',details:'Подробнее',added:'Добавлено в корзину',thanks:'Заказ принят!',nofound:'Ничего не найдено',color:'Цвет',storage:'Память',screen:'Экран',chip:'Процессор',camera:'Камера',battery:'Батарея',ram:'ОЗУ',from:'от',sale:'Скидка',lens1:'одинарная',lens2:'двойная',lens3:'тройная',hours:'ч видео',fname:'Имя',lname:'Фамилия',phone:'Телефон (+998...)',pass:'Пароль',pass2:'Повторите пароль',eEmail:'Неверный email',ePass:'Пароль не короче 6 символов',eName:'Введите имя и фамилию',ePhone:'Неверный телефон',eMatch:'Пароли не совпадают',eExists:'Email уже зарегистрирован',eWrong:'Неверный email или пароль',okReg:'Регистрация прошла успешно!',okLogin:'Добро пожаловать',bye:'До свидания!',desc_promax:'Самый большой экран, лучшая камера и самая долгая работа от батареи.',desc_pro:'Профессиональная камера и титановый корпус в компактном размере.',desc_std:'Отличная камера, быстрый чип и яркие цвета на каждый день.',desc_plus:'Большой экран и долгая работа по доступной цене.',desc_air:'Сверхтонкий и лёгкий дизайн с мощным чипом.'}};
Object.assign(T.uz,{latest:'Yangi kelganlar',explore:'Ko‘proq ko‘rish',heroTitle:'iPhone. Mukammal tajriba.',os:'Operatsion tizim',display:'Displey',flip:'Old / orqa',demoNote:'Narxlar demo hisoblanadi va haqiqiy sotuv narxi emas.',footer:'Demo do‘kon. Apple Inc. bilan bog‘liq emas.',desc_se:'Klassik dizayn, Touch ID va kuchli A15 chip qulay narxda.'});
Object.assign(T.en,{latest:'New Arrivals',explore:'Explore More',heroTitle:'iPhone. The Ultimate Experience.',os:'Operating system',display:'Display type',flip:'Front / back',demoNote:'Prices are for demo purposes and are not real selling prices.',footer:'Demo store. Not affiliated with Apple Inc.',desc_se:'Classic design, Touch ID and the powerful A15 chip at a friendly price.'});
Object.assign(T.ru,{latest:'Новинки',explore:'Узнать больше',heroTitle:'iPhone. Максимум впечатлений.',os:'Операционная система',display:'Тип дисплея',flip:'Спереди / сзади',demoNote:'Цены демонстрационные и не являются реальными ценами продажи.',footer:'Демо-магазин. Не связан с Apple Inc.',desc_se:'Классический дизайн, Touch ID и мощный чип A15 по доступной цене.'});
var lang=load('ip_lang','uz'),theme=load('ip_theme','light'),cart=load('ip_cart',[]),cat='all',authMode='login',openId=null,sel={},front=false;
if(!T[lang])lang='uz';
var t=function(k){return (T[lang]&&T[lang][k])||T.en[k]||k};
var usd=function(n){return '$'+n.toLocaleString('en-US')};
var uzs=function(n){return (n*RATE).toLocaleString('en-US').replace(/,/g,' ')+' UZS'};
var byId=function(id){return M.filter(function(m){return m.id===id})[0]};
var pr=function(m,i){return Math.round(m.st[i][1]*(100-m.d)/100)};
function selOf(m){if(!sel[m.id])sel[m.id]={c:m.col[0],s:0};return sel[m.id]}
var toastT;
function toast(m){var e=$('#toast');e.textContent=m;e.classList.add('show');clearTimeout(toastT);toastT=setTimeout(function(){e.classList.remove('show')},2200)}
/* Phone image (SVG, recolors per selected color) */
var gid=0;
function phone(colKey,k){
  var h=C[colKey][1],id='g'+(gid++);
  var cams=[[44,36],[44,60],[70,48]].slice(0,k===3?3:k===2?2:1);
  if(k===1)cams=[[56,42]];
  var cam=cams.map(function(p){return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="8" fill="#111" stroke="#888" stroke-width="2"/>'}).join('');
  return '<svg viewBox="0 0 120 240" role="img" aria-label="'+C[colKey][0]+'"><defs><linearGradient id="'+id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+h+'"/><stop offset="1" stop-color="'+h+'" stop-opacity=".7"/></linearGradient></defs><rect x="4" y="4" width="112" height="232" rx="22" fill="url(#'+id+')" stroke="rgba(0,0,0,.35)" stroke-width="2"/><rect x="9" y="9" width="102" height="222" rx="18" fill="#0b0b0d"/><rect x="42" y="14" width="36" height="10" rx="5" fill="#000"/><rect x="9" y="9" width="102" height="222" rx="18" fill="url(#'+id+')" opacity=".12"/><g transform="translate(0,0)" opacity="0">'+cam+'</g></svg>';
}
function phoneBack(colKey,k){
  var h=C[colKey][1],id='b'+(gid++);
  var cams=k===3?[[34,34],[34,62],[60,48]]:k===2?[[34,34],[34,62]]:[[48,38]];
  var cam=cams.map(function(p){return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="9" fill="#151517" stroke="#777" stroke-width="2.5"/>'}).join('');
  var box=k===1?'<rect x="20" y="16" width="80" height="34" rx="12" fill="#00000030"/>':'<rect x="16" y="16" width="'+(k===3?58:36)+'" height="'+(k===3?64:60)+'" rx="14" fill="#00000028" stroke="#ffffff30"/>';
  if(k===1)cam='<circle cx="42" cy="33" r="8" fill="#151517" stroke="#777" stroke-width="2"/><circle cx="74" cy="33" r="5" fill="#111"/>';
  return '<svg viewBox="0 0 120 240" role="img" aria-label="'+C[colKey][0]+'"><defs><linearGradient id="'+id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+h+'"/><stop offset="1" stop-color="'+h+'" stop-opacity=".72"/></linearGradient></defs><rect x="4" y="4" width="112" height="232" rx="22" fill="url(#'+id+')" stroke="rgba(0,0,0,.35)" stroke-width="2"/>'+box+cam+'<text x="60" y="140" font-size="26" text-anchor="middle" fill="rgba(0,0,0,.25)"></text></svg>';
}
var img=phoneBack;

/* Language / theme */
function applyLang(){
  document.documentElement.lang=lang;
  $$('[data-i18n]').forEach(function(e){e.textContent=t(e.dataset.i18n)});
  $$('[data-i18n-ph]').forEach(function(e){e.placeholder=t(e.dataset.i18nPh)});
  $('#lang').value=lang;renderAll();updateAuthUI();setMode(authMode);if(openId)openDetail(openId);
}
$('#lang').addEventListener('change',function(e){lang=e.target.value;save('ip_lang',lang);applyLang()});
function applyTheme(){document.documentElement.setAttribute('data-theme',theme);$('#theme').textContent=theme==='dark'?'☀️':'🌙'}
$('#theme').addEventListener('click',function(){theme=theme==='dark'?'light':'dark';save('ip_theme',theme);applyTheme()});
/* Nav */
$('#burger').addEventListener('click',function(){$('#links').classList.toggle('open')});
$$('#links a').forEach(function(a){a.addEventListener('click',function(){$('#links').classList.remove('open')})});
$('#searchBtn').addEventListener('click',function(){$('#models').scrollIntoView({behavior:'smooth'});setTimeout(function(){$('#search').focus()},500)});
window.addEventListener('scroll',function(){$('#nav').classList.toggle('scrolled',window.scrollY>40);$('#toTop').classList.toggle('show',window.scrollY>400)});
$('#toTop').addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});

/* Products */
function disp(m){return m.id==='se3'?'Retina HD LCD':(m.c==='pro'||m.c==='air'||m.id==='17')?'Super Retina XDR OLED, ProMotion':'Super Retina XDR OLED'}
function stars(r){var f=Math.round(r);return '★★★★★'.slice(0,f)+'☆☆☆☆☆'.slice(0,5-f)}
function priceBox(m,i){var o=m.st[i][1],p=pr(m,i);return '<div class="pricebox">'+(m.d?'<span class="badge">'+t('sale')+' -'+m.d+'%</span><s>'+usd(o)+'</s>':'')+'<div class="big">'+usd(p)+'</div><small>'+uzs(p)+'</small></div>'}
function swatches(m,attr){var s=selOf(m);return '<div class="sw">'+m.col.map(function(k){return '<button '+attr+'="'+m.id+'|'+k+'" title="'+C[k][0]+'" aria-label="'+C[k][0]+'" style="background:'+C[k][1]+'" class="'+(s.c===k?'on':'')+'"></button>'}).join('')+'</div>'}
function card(m){
  var s=selOf(m);
  return '<div class="card pcard"><div class="pimg" data-open="'+m.id+'">'+img(s.c,m.k)+'</div><h3>'+m.n+'</h3><div class="rate">'+stars(m.r)+' <small>'+m.r+'</small></div><p class="cname" style="min-height:0;margin:4px 0">'+t('desc_'+m.type)+'</p><small>'+t('ram')+' '+m.ram+'GB · ROM '+m.st[0][0]+'–'+m.st[m.st.length-1][0]+'<br>'+m.scr+' · '+m.mp+'MP '+t('lens'+m.k)+'</small>'+swatches(m,'data-sw')+'<div class="cname">'+C[s.c][0]+'</div>'+priceBox(m,s.s)+'<div class="pbtn"><button class="btn small ghost" data-open="'+m.id+'">'+t('details')+'</button><button class="btn small" data-buyphone="'+m.id+'">'+t('buy')+'</button><button class="btn small ghost" data-addphone="'+m.id+'">'+t('add')+'</button></div></div>';
}
function fill(sel,list){$(sel).innerHTML=list.map(card).join('')}
function renderCats(){$('#cats').innerHTML=['all','pro','std','air'].map(function(k){return '<button data-cat="'+k+'" class="'+(k===cat?'on':'')+'">'+t(k)+'</button>'}).join('')}
function renderProducts(){
  var q=$('#search').value.trim().toLowerCase();
  var list=M.filter(function(m){return (cat==='all'||m.c===cat)&&m.n.toLowerCase().indexOf(q)>-1});
  $('#products').innerHTML=list.length?list.map(card).join(''):'<p class="center" style="grid-column:1/-1">'+t('nofound')+'</p>';
}
function renderAcc(){$('#accGrid').innerHTML=ACC.map(function(a){return '<div class="card"><div style="font-size:3.5rem">'+a.e+'</div><h3>'+a.n+'</h3><div class="price">'+usd(a.p)+'<small>'+uzs(a.p)+'</small></div><button class="btn small" data-addacc="'+a.id+'">'+t('add')+'</button></div>'}).join('')}
function renderAll(){
  renderCats();renderProducts();renderAcc();renderCart();
  fill('#latestGrid',['17pm','17p','17','air'].map(byId));
  fill('#bestGrid',['17pm','16p','15','16'].map(byId));
  fill('#offersGrid',M.filter(function(m){return m.d>=12}).slice(0,3));
}
$('#cats').addEventListener('click',function(e){var b=e.target.closest('[data-cat]');if(!b)return;cat=b.dataset.cat;renderCats();renderProducts()});
$('#search').addEventListener('input',renderProducts);

/* Detail */
function openDetail(id){
  var m=byId(id);if(!m)return;openId=id;var s=selOf(m);
  $('#detailBox').innerHTML='<button class="icon close" data-closedetail>✕</button><div class="dl">'+(front?phone(s.c,m.k):img(s.c,m.k))+'<button class="btn small ghost" data-flip>'+t('flip')+'</button></div><div class="dr"><h2 style="font-size:1.8rem">'+m.n+'</h2><div class="rate">'+stars(m.r)+' '+m.r+'</div><p class="cname" style="min-height:0;margin:6px 0">'+t('desc_'+m.type)+'</p>'+priceBox(m,s.s)+'<b>'+t('color')+':</b> <span class="cname">'+C[s.c][0]+'</span>'+swatches(m,'data-dsw')+'<b>'+t('storage')+':</b><div class="st">'+m.st.map(function(x,i){return '<button data-dst="'+i+'" class="'+(i===s.s?'on':'')+'">'+x[0]+'</button>'}).join('')+'</div><ul class="specs"><li><b>'+t('screen')+':</b> '+m.scr+'</li><li><b>'+t('chip')+':</b> '+m.chip+'</li><li><b>'+t('ram')+':</b> '+m.ram+' GB</li><li><b>'+t('storage')+':</b> '+m.st.map(function(x){return x[0]}).join(' / ')+'</li><li><b>'+t('camera')+':</b> '+m.mp+'MP, '+t('lens'+m.k)+'</li><li><b>'+t('battery')+':</b> '+m.bat+' '+t('hours')+'</li><li><b>'+t('os')+':</b> iOS 26</li><li><b>'+t('display')+':</b> '+disp(m)+'</li></ul><div class="pbtn" style="justify-content:flex-start"><button class="btn" data-addphone="'+m.id+'">'+t('add')+'</button><button class="btn ghost" data-buyphone="'+m.id+'">'+t('buy')+'</button></div></div>';
  $('#detail').classList.add('open');
}
function closeDetail(){openId=null;$('#detail').classList.remove('open')}
$('#detail').addEventListener('click',function(e){if(e.target.id==='detail')closeDetail()});
document.addEventListener('click',function(e){
  var el;
  if((el=e.target.closest('[data-sw]'))){var a=el.dataset.sw.split('|');selOf(byId(a[0])).c=a[1];renderAll();return}
  if((el=e.target.closest('[data-dsw]'))){var b=el.dataset.dsw.split('|');selOf(byId(b[0])).c=b[1];openDetail(b[0]);renderAll();return}
  if((el=e.target.closest('[data-dst]'))){selOf(byId(openId)).s=+el.dataset.dst;openDetail(openId);renderAll();return}
  if(e.target.closest('[data-flip]')){front=!front;openDetail(openId);return}
  if((el=e.target.closest('[data-open]'))){openDetail(el.dataset.open);return}
  if(e.target.closest('[data-closedetail]')){closeDetail();return}
  if((el=e.target.closest('[data-addphone]'))){addPhone(el.dataset.addphone);return}
  if((el=e.target.closest('[data-buyphone]'))){addPhone(el.dataset.buyphone);closeDetail();$('#drawer').classList.add('open');return}
  if((el=e.target.closest('[data-addacc]'))){var x=ACC.filter(function(a){return a.id===el.dataset.addacc})[0];addItem({key:x.id,n:x.n,sub:'',p:x.p,e:x.e,q:1})}
});
/* Cart */
function addPhone(id){
  var m=byId(id),s=selOf(m),st=m.st[s.s];
  addItem({key:id+'|'+s.c+'|'+st[0],n:m.n,sub:C[s.c][0]+' · '+st[0],p:pr(m,s.s),col:s.c,k:m.k,q:1});
}
function addItem(it){
  var f=cart.filter(function(c){return c.key===it.key})[0];
  if(f)f.q++;else cart.push(it);
  save('ip_cart',cart);renderCart();toast(t('added'));
}
function renderCart(){
  var total=0,count=0;
  $('#cartItems').innerHTML=cart.length?cart.map(function(c){
    total+=c.p*c.q;count+=c.q;
    var ph=c.col?'<div class="ph">'+img(c.col,c.k)+'</div>':'<div class="ph" style="font-size:2rem;text-align:center">'+(c.e||'📦')+'</div>';
    return '<div class="item">'+ph+'<div><b>'+c.n+'</b><br><small>'+c.sub+'</small><br>'+usd(c.p*c.q)+'</div><div class="qty"><button data-dec="'+c.key+'">−</button><span>'+c.q+'</span><button data-inc="'+c.key+'">+</button></div><button class="del" data-rm="'+c.key+'">🗑️</button></div>';
  }).join(''):'<p class="center" style="padding:40px 0">'+t('empty')+'</p>';
  $('#cartTotal').textContent=usd(total);$('#cartUzs').textContent=uzs(total);$('#cartCount').textContent=count;
}
$('#cartItems').addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  var key=b.dataset.inc||b.dataset.dec||b.dataset.rm;
  var it=cart.filter(function(c){return c.key===key})[0];if(!it)return;
  if(b.dataset.inc)it.q++;if(b.dataset.dec)it.q--;
  if(b.dataset.rm||it.q<=0)cart=cart.filter(function(c){return c.key!==key});
  save('ip_cart',cart);renderCart();
});
$('#cartBtn').addEventListener('click',function(){$('#drawer').classList.add('open')});
$('#closeCart').addEventListener('click',function(){$('#drawer').classList.remove('open')});
$('#checkout').addEventListener('click',function(){
  if(!cart.length){toast(t('empty'));return}
  cart=[];save('ip_cart',cart);renderCart();$('#drawer').classList.remove('open');toast(t('thanks'));
});

/* Auth */
var EM=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function setMode(m){
  authMode=m;var r=m==='register';
  $$('.reg').forEach(function(e){e.style.display=r?'':'none'});
  $('#authTitle').textContent=t(m);$('#authSubmit').textContent=t(m);$('#switchAuth').textContent=t(r?'login':'register');$('#authErr').textContent='';
}
function updateAuthUI(){var u=load('ip_session',null);$('#authBtn').textContent=u?u.fname+' ✕':t('login');$('#regBtn').style.display=u?'none':''}
function openAuth(m){setMode(m);$('#modal').classList.add('open')}
$('#authBtn').addEventListener('click',function(){
  if(load('ip_session',null)){try{localStorage.removeItem('ip_session')}catch(e){}updateAuthUI();toast(t('bye'))}else openAuth('login');
});
$('#regBtn').addEventListener('click',function(){openAuth('register')});
$('#closeModal').addEventListener('click',function(){$('#modal').classList.remove('open')});
$('#modal').addEventListener('click',function(e){if(e.target.id==='modal')$('#modal').classList.remove('open')});
$('#switchAuth').addEventListener('click',function(e){e.preventDefault();setMode(authMode==='login'?'register':'login')});
$('#showPass').addEventListener('click',function(){var h=$('#pass').type==='password';$('#pass').type=h?'text':'password';$('#pass2').type=h?'text':'password'});
$('#authForm').addEventListener('submit',function(e){
  e.preventDefault();
  var err=$('#authErr'),email=$('#email').value.trim().toLowerCase(),pass=$('#pass').value,users=load('ip_users',[]);
  if(!EM.test(email)){err.textContent=t('eEmail');return}
  if(pass.length<6){err.textContent=t('ePass');return}
  if(authMode==='register'){
    var f=$('#fname').value.trim(),l=$('#lname').value.trim(),ph=$('#phone').value.trim();
    if(f.length<2||l.length<2){err.textContent=t('eName');return}
    if(!/^\+?\d{9,14}$/.test(ph)){err.textContent=t('ePhone');return}
    if(pass!==$('#pass2').value){err.textContent=t('eMatch');return}
    if(users.some(function(u){return u.email===email})){err.textContent=t('eExists');return}
    users.push({fname:f,lname:l,phone:ph,email:email,pass:pass});save('ip_users',users);
    toast('✅ '+t('okReg'));setMode('login');
  }else{
    var u=users.filter(function(x){return x.email===email&&x.pass===pass})[0];
    if(!u){err.textContent=t('eWrong');return}
    save('ip_session',u);updateAuthUI();$('#modal').classList.remove('open');toast('✅ '+t('okLogin')+', '+u.fname);
  }
  $('#authForm').reset();
});
$('#msgForm').addEventListener('submit',function(e){
  e.preventDefault();
  if(!EM.test($('#msgEmail').value.trim())){toast(t('eEmail'));return}
  toast('✅ '+t('send'));$('#msgForm').reset();
});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeDetail();$('#modal').classList.remove('open');$('#drawer').classList.remove('open')}});
/* Hero + carousel */
$('#heroPhone').innerHTML=phoneBack('ora',3);
var track=$('#track'),cur=0,timer,sx=null;
var slides=['17pm','17p','17','air','16pm','15p'].map(byId);
track.innerHTML=slides.map(function(m){var c=m.col[Math.min(1,m.col.length-1)];return '<div class="slide">'+phoneBack(c,m.k)+'<div><h3>'+m.n+'</h3><p>'+m.scr+' · '+m.chip+'<br>'+C[c][0]+'</p></div></div>'}).join('');
$('#dots').innerHTML=slides.map(function(_,i){return '<button data-i="'+i+'" aria-label="Slide '+(i+1)+'"></button>'}).join('');
function go(i){cur=(i+slides.length)%slides.length;track.style.transform='translateX('+(-cur*100)+'%)';$$('#dots button').forEach(function(d,k){d.classList.toggle('on',k===cur)})}
function auto(){clearInterval(timer);timer=setInterval(function(){go(cur+1)},4500)}
$('#next').addEventListener('click',function(){go(cur+1);auto()});
$('#prev').addEventListener('click',function(){go(cur-1);auto()});
$('#dots').addEventListener('click',function(e){var b=e.target.closest('button');if(b){go(+b.dataset.i);auto()}});
$('#carousel').addEventListener('pointerdown',function(e){sx=e.clientX});
window.addEventListener('pointerup',function(e){if(sx===null)return;var d=e.clientX-sx;sx=null;if(Math.abs(d)>50){go(d<0?cur+1:cur-1);auto()}});

/* Init */
applyTheme();applyLang();go(0);auto();
window.addEventListener('load',function(){setTimeout(function(){$('#loader').classList.add('hide')},300)});
setTimeout(function(){$('#loader').classList.add('hide')},2000);
})();
