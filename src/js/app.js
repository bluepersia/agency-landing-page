const menu = document.querySelector ('.menu');

document.querySelector ('.masthead__menu-btn').addEventListener ('click', openMenu);
menu.addEventListener ('click', e => e.stopPropagation());
document.addEventListener ('click', closeMenu);


function openMenu (e)
{
    e.stopPropagation ();
    menu.classList.add ('menu--open');
}

function closeMenu ()
{
    menu.classList.remove ('menu--open');
}