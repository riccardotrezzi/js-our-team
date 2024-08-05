/*Creazione oggetto*/

const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angel Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
    
];

console.log('ourTeam', ourTeam, typeof ourTeam);

// console.log('ourTeam[0]', ourTeam[0], typeof ourTeam[0]);
// console.log('ourTeam[1]', ourTeam[1], typeof ourTeam[1]);
// console.log('ourTeam[2]', ourTeam[2], typeof ourTeam[2]);
// console.log('ourTeam[3]', ourTeam[3], typeof ourTeam[3]);
// console.log('ourTeam[4]', ourTeam[4], typeof ourTeam[4]);
// console.log('ourTeam[5]', ourTeam[5], typeof ourTeam[5]);

for(let i=0; i < ourTeam.length; i++){
    console.log(ourTeam[i]);

    console.log('Name:', ourTeam[i].name);
    console.log('Role:', ourTeam[i].role);
    console.log('Image:', ourTeam[i].image);

    const fullInfo = `${ourTeam[i].name} - ${ourTeam[i].role} - ${ourTeam[i].image}`;

    console.log('Full info', fullInfo);
}


