const html = document.querySelector('html');
const mode = document.querySelector('#mode-icon');


mode.addEventListener('click', function(){
html.classList.toggle('dark-mode');
});

mode.addEventListener('click', () => {
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        document.getElementById("blue").style.display="inline";
        document.getElementById("red").style.display="none";


        return;
    }
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
        document.getElementById("red").style.display="inline";
        document.getElementById("blue").style.display="none";
    }
);