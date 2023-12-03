//  MILESTONE 0 & 1
const team =[
    
    {
        "name": "Wayne Barret",
        "role": "Founder & CEO",
        "image": "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "image": "img/angela-caroll-chief-editor.jpg"
    },
    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "image": "img/walter-gordon-office-manager.jpg"
    },
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "image": "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "image": "img/scott-estrada-developer.jpg"
    },
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "image": "img/barbara-ramos-graphic-designer.jpg"
        },
]
;
// CONSOLE LOG MILESTONE 1
// for (let chiave in team){
//     console.log(chiave , team[chiave]);
// }

// MILESTONE 2

// VARIABILE PER STAMPARE I DATI PARTENDO DA 1 INVECE DA 0
// let i =0;
// for(let chiave in team){
//     const newElement= document.createElement("div");
//     // INCREMENTO CONTATORE PER VISUALIZZARE LA STAMPA DEI DATI PARTENDO DA 1
//     i++;
//     // newElement.append( chiave,team[chiave].name);
//     newElement.append(`${i} ${team[chiave].name}`) ;
//     newElement.append( ` ${"/\t/ "} ${team[chiave].role}`);
//     newElement.append( ` ${"/\t/ Ruolo:"} ${team[chiave].role}`);
//     newElement.append( `${"/\t/ immagine: "} ${team[chiave].image}`);
//     document.getElementById("boh").append(newElement);
// }
// BONUS 1
let i =0;
for(let chiave in team){
    const newElement= document.createElement("div");
    
    // INCREMENTO CONTATORE PER VISUALIZZARE LA STAMPA DEI DATI PARTENDO DA 1
    i++;
    // newElement.append( chiave,team[chiave].name);
    newElement.append(`${i} ${team[chiave].name}`) ;
    newElement.append( ` ${"/\t/ "} ${team[chiave].role}`);
    newElement.append( ` ${"/\t/ Ruolo:"} ${team[chiave].role}`);
    const image= document.createElement("img");
    image.classList.add("image");
    image.src= `${team[chiave].image}`;
    newElement.append(image);
    document.getElementById("boh").append(newElement);
}