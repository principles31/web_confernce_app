const humbergur = document.querySelector('.humber');
const menuList = document.querySelector('.desk_menu');
const navbar = document.querySelector('.second_nav');
const listItems = document.querySelectorAll('.desk_menu_list');
const closeMenu = document.querySelector('.closeMenu');

/* reset menu function */

function resetMenu() {
  listItems.forEach((item) => item.classList.remove('show'));
  humbergur.classList.remove('hidden');
  menuList.classList.remove('ul_list');
  navbar.classList.remove('expand');
  closeMenu.classList.remove('close_show');
}

humbergur.addEventListener('click', () => {
  listItems.forEach((item) => item.classList.remove('hidden'));
  listItems.forEach((item) => item.classList.add('show'));

  humbergur.classList.add('hidden');
  menuList.classList.add('ul_list');
  navbar.classList.add('expand');
  closeMenu.classList.add('close_show');

});

closeMenu.addEventListener('click', resetMenu);

function resizeWindow() {
  if (window.innerWidth > 768) {
    resetMenu();
  }
}

window.addEventListener('resize', resizeWindow);