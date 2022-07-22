const menuIcon = document.getElementById('hambuger-menu');
const navBar = document.getElementById('nav-bar');
const menuList = document.querySelector('.nav-link');
const menuItemList = document.querySelectorAll('nav-link li');
const main = document.querySelector('main');
const header = document.querySelector('header');
const email = document.getElementById('nav-mail');
const btnClose = document.getElementById('btn-close');
const logo = document.getElementsByClassName('logo')[0];
const social = document.getElementById('#special');
menuIcon.addEventListener('click', () => {
  email.style.display = 'none';
  menuIcon.style.display = 'none';
  main.style.display = 'none';
  logo.style.display = 'none';
  btnClose.style.display = 'block';
  btnClose.style.alignSelf = 'flex-end';
  btnClose.style.marginRight = '50px';

  header.style.height = '100vh';
  header.style.alignItems = 'flex-start';

  navBar.style.display = 'flex';
  navBar.style.flexDirection = 'column';
  navBar.style.justifyContent = 'space-between';
  navBar.style.width = '100%';
  menuList.style.paddingTop = '100px';

  menuList.style.display = 'block';
  menuList.style.alignItems = 'initial';
  menuList.style.width = '95%';
  menuList.style.color = '#fff5e1';
  social.style.opacity = '0';

  menuIcon.style.opacity = 0;
});

function collabsable() {
  menuIcon.style.display = 'block';
  main.style.display = 'block';
  logo.style.display = 'block';
  email.style.display = 'block';

  btnClose.style.display = 'none';
  navBar.style.width = 'auto';
  header.style.height = '48px';
  header.style.alignItems = 'center';

  menuList.style.display = 'none';
}

btnClose.addEventListener('click', () => {
  collabsable();
  window.location.reload();
});

menuItemList.forEach((item) => {
  item.addEventListener('click', () => {
    collabsable();
    window.location.reload();
  });
});
