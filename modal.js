//interactive elements

const openButton = document.getElementsByTagName('button')[0];
const closeButton = document.getElementById('closeButton');
const ferme = document.getElementsByClassName('close')[0];



closeButton.onclick = function(){
    ferme.classList.remove('ferme')
};

openButton.onclick = function(){
    ferme.classList.add('ferme');
}