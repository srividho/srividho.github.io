document.querySelector('.menu-btn')?.addEventListener('click', () => {
  const nav = document.querySelector('.topbar nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  if (nav.style.display === 'flex') {
    nav.style.position = 'absolute';
    nav.style.top = '64px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '18px 5%';
    nav.style.background = '#0b0d11';
    nav.style.flexDirection = 'column';
    nav.style.borderBottom = '1px solid #063d2a';
  }
});
