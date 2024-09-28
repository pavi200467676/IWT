document.getElementById('menu-icon').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown-menu');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});