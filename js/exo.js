//ETAPE 2
const hercule = {
    name : 'Hercule',
    job : 'Demi-Dieu',
    age : 35,
    department : 75,
    arm : 60.5,
    inRelationship : 'oui',

//ETAPE 3
    amis : [
        'Jupiter ',
        'Junon ',
        'Alcmène ',
        'Déjanire ',
    ]
}
base.fillProfil(hercule); 
base.printFriends(hercule.amis);
base.setBestFriend(hercule.amis[0]);

