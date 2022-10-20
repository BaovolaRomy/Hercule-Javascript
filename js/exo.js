//ETAPE 2
const hercule = {
    name : 'Hercule',
    job : 'Demi-Dieu',
    age : 35,
    department : 75,
    arm : 60.5,
    inRelationship : true,
    

//ETAPE 3
    amis : [
        'Jupiter ',
        'Junon ',
        'Alcmène ',
        'Déjanire ',
    ],

    init : function(){
        base.fillProfil(hercule); 
        base.printFriends(hercule.amis);
        base.setBestFriend(hercule.amis[0]);

// ETAPE 4
    hercule.headerBanner = document.getElementById('header-banner');
    hercule.h1 = document.createElement('h1');
    hercule.h1.textContent = 'Vous consultez le profil de Hercule';
    hercule.headerBanner.appendChild(h1);
    }

}






// ETAPE 5
let i=0;
for (i; i<11; i++){
   base.displayWork(i);
}
base.displayWork(0);

// ETAPE 6
const disponibilite = true;
const availability = document.getElementById('availability');
if(base.getHour() >= 8 && base.getHour()<20){
    disponibilite;
    availability.innerHTML = 'Disponible';
}else{
    availability;
    availability.classList.add('off');
}

// ETAPE 7
function getRandomPseudo (prenom='', department=0){
    return(`${prenom}-du-${department}`);
}
const pseudo = getRandomPseudo('Hercule',hercule.department);
const profilName = document.getElementById('profil-name');
profilName.textContent = `${pseudo}`;

// ETAPE 8
const menu = document.getElementById('menu-toggler');
menu.addEventListener('click', function(event){
    if(menu){
        headerBanner.classList.toggle('banner--open');
    }
})

// ETAPE 9
const contact = document.getElementById('contact');
contact.addEventListener('click', function(event){
    event.preventDefault();
    alert('Hercule ne souhaite pas être dérangé');
})

// ETAPE 10
// affichage des calculs dans les 2 éléments

// Hercule
const pourcentageHercule = (base.vote.hercule/(base.vote.hercule+base.vote.cesar))*100;
const trendsHercule = document.querySelector('#trends-hercule :nth-child(2)');
const peoplePopularityHercule = document.querySelector('.people__popularity');
trendsHercule.innerHTML = parseInt(`${pourcentageHercule}-%`);
const elementHercule = document.querySelector('#trends-hercule :nth-child(3)');
const barreHercule = document.querySelector('.people__bar');
document.querySelector('#trends-hercule :nth-child(3)').style.width = "69%";


// Cesar
const pourcentageCesar = (base.vote.cesar/(base.vote.hercule+base.vote.cesar))*100;
const trendCesar = document.querySelector('#trends-cesar :nth-child(2)');
console.log(trendCesar);
trendCesar.id = 'cesar';
trendCesar.innerHTML= parseInt(`${pourcentageCesar} "%"`);
const elementCesar = document.querySelector('#trends-cesar :nth-child(3)');
elementCesar.id = 'barreCesar';
document.getElementById('barreCesar').style.width = (`${pourcentageCesar}`);

