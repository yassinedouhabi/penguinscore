let navbar = document.getElementById('navbar');
let absoluteMenu = document.getElementById('absoluteMenu');

// give the absoluteMenu full height of the window - the height of the navbar
absoluteMenu.style.height = window.innerHeight - navbar.clientHeight + 'px';

let searchBar = document.getElementById('searchBar');
let searchButton = document.getElementById('searchButton');
let logo = document.getElementById('logo');

// when click on search button, the search bar will appear and the logo will disappear
searchButton.addEventListener('click', () => {
  if (searchBar.style.display === 'none') {
    searchBar.style.display = 'block';
    logo.style.display = 'none';
  } else {
    searchBar.style.display = 'none';
    logo.style.display = 'block';
  }
});
