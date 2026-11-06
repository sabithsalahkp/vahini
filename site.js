(()=>{
  'use strict';
  const root=document.documentElement;
  const year=document.getElementById('year');
  if(year) year.textContent=String(new Date().getFullYear());
  const media=window.matchMedia('(prefers-color-scheme: dark)');
  const theme=document.getElementById('themeToggle');
  const sun='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>';
  const moon='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z"/></svg>';
  const isDark=()=>root.dataset.theme?root.dataset.theme==='dark':media.matches;
  function drawTheme(){
    if(!theme)return;
    const dark=isDark();
    theme.innerHTML=dark?sun:moon;
    theme.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');
    theme.setAttribute('title',dark?'Switch to light theme':'Switch to dark theme');
  }
  // Follow the device on page load and when OS preference changes. No saved override.
  root.removeAttribute('data-theme');
  drawTheme();
  theme?.addEventListener('click',()=>{root.dataset.theme=isDark()?'light':'dark';drawTheme()});
  media.addEventListener?.('change',()=>{root.removeAttribute('data-theme');drawTheme()});
  const menu=document.getElementById('menuToggle');
  const nav=document.getElementById('primaryNav');
  const header=document.getElementById('siteHeader');
  if(menu&&nav&&header){
    const mobile=window.matchMedia('(max-width: 767px)');
    function setMenu(open){
      if(!mobile.matches){
        nav.hidden=false;
        header.classList.remove('menu-is-open');
        menu.setAttribute('aria-expanded','false');
        menu.setAttribute('aria-label','Open menu');
        return;
      }
      nav.hidden=!open;
      menu.setAttribute('aria-expanded',String(open));
      menu.setAttribute('aria-label',open?'Close menu':'Open menu');
      header.classList.toggle('menu-is-open',open);
    }
    // Desktop/tablet has visible inline navigation; only phones use dropdown.
    setMenu(false);
    mobile.addEventListener?.('change',()=>setMenu(false));
    menu.addEventListener('click',(e)=>{
      if(!mobile.matches)return;
      e.stopPropagation();
      setMenu(nav.hidden);
    });
    nav.addEventListener('click',(e)=>{
      if(mobile.matches&&e.target.closest('a'))setMenu(false);
    });
    document.addEventListener('pointerdown',(e)=>{
      if(mobile.matches&&!nav.hidden&&!header.contains(e.target))setMenu(false);
    });
    document.addEventListener('keydown',(e)=>{
      if(mobile.matches&&e.key==='Escape'&&!nav.hidden){setMenu(false);menu.focus()}
    });
    window.addEventListener('pagehide',()=>{if(mobile.matches)setMenu(false)});
  }
  const here=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.site-nav [data-page]').forEach(link=>{
    if(link.dataset.page===here)link.setAttribute('aria-current','page');
  });
  const form=document.getElementById('enquiryForm');
  if(form)form.addEventListener('submit',function(e){
    e.preventDefault();if(!form.reportValidity())return;
    const d=new FormData(form);
    const lines=['Hello Vahini Weddings, I would like to enquire about an event.',
      'Name: '+d.get('name'),'Phone: '+(d.get('phone')||'Not provided'),
      'Event: '+d.get('event'),'Date: '+(d.get('date')||'To be confirmed'),
      'Location: '+(d.get('venue')||'To be confirmed'),
      'Details: '+(d.get('message')||'Please share availability and packages.')];
    const url='https://wa.me/919895066015?text='+encodeURIComponent(lines.join('\n'));
    const popup=window.open(url,'_blank','noopener,noreferrer');
    if(!popup)window.location.href=url;
  });
  if('serviceWorker' in navigator&&['http:','https:'].includes(location.protocol)){
    window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).then(reg=>reg.update()).catch(()=>{}));
  }
})();
