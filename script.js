// recuperation des elements du dom
const form = document.querySelector('#form');
const modeSombre = document.querySelector('#mode_sombre');
const taillePetite = document.querySelector('#taille_petite');
const tailleMoyenne = document.querySelector('#taille_moyenne');
const tailleGrande = document.querySelector('#taille_grande');
const taille = document.querySelectorAll('input[name="taille"]');
const bntSauvegarde = document.querySelector('.btn')
chargement()

// gerer le formulaire
form.addEventListener('submit', (e)=>{
    e.preventDefault()
sauvegarde();
    
})

// gerer le mode sombre
modeSombre.addEventListener('change', ()=>{
    document.body.classList.toggle('dark-mode');
})

// gerer la taille des textes
taille.forEach(taille => {
    taille.addEventListener('change', ()=>{
        document.body.classList.remove('small');
        document.body.classList.remove('medium');
        document.body.classList.remove('large');
        document.body.classList.add(taille.value);
    })
})

// gerer la sauvegarde des preferences dans le local storage
function sauvegarde(){
    localStorage.setItem('modeSombre', modeSombre.checked);
    // parcourir la liste des tailles
    for (let i = 0; i < taille.length; i++) {
        if (taille[i].checked) {
            localStorage.setItem('taille', taille[i].value);
            break;
        }
        console.log(taille[i].value);   
    }
   
}

// recuperer les preferences du local storage
// gerer le chargement du page 
function chargement(){
    for (let i = 0; i < taille.length; i++) {
        if (taille[i].value === localStorage.getItem('taille')) {
           document.body.classList.add(taille[i].value);
            break;
        }
        console.log(taille[i].checked);
    }
    if (localStorage.getItem('modeSombre') === 'true') {
        modeSombre.checked = true;
        document.body.classList.add('dark-mode');
    }
}


