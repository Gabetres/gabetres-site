const html = document.querySelector('html');
const mode = document.querySelector('#mode-icon');
const darkMode = localStorage.getItem("darkMode");


//armazenar local storage
if (darkMode === "true") {
  html.classList.add('dark-mode');
  mode.classList.remove('fa-moon');
  mode.classList.add('fa-sun');
  document.getElementById("blue").style.display="inline";
  document.getElementById("red").style.display="none";
} else {
  html.classList.remove('dark-mode');
  mode.classList.add('fa-moon');
  document.getElementById("red").style.display="inline";
  document.getElementById("blue").style.display="none";
}

//aplicação

mode.addEventListener('click', function(){
    html.classList.toggle('dark-mode');
  
    if (html.classList.contains('dark-mode')) {
      localStorage.setItem("darkMode", "true");
      mode.classList.remove('fa-moon');
      mode.classList.add('fa-sun');
      document.getElementById("blue").style.display="inline";
      document.getElementById("red").style.display="none";
    } else {
      localStorage.setItem("darkMode", "false");
      mode.classList.add('fa-moon');
      mode.classList.remove('fa-sun');
      document.getElementById("red").style.display="inline";
      document.getElementById("blue").style.display="none";
    }
  });
