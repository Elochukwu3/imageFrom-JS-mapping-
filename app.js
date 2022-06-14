let carType = [
    {name: " Mercedes Benz",
    model: "Ben23383",
    amount: "#200,000",
    productionDate: 2020,
    image: "image/mercedes.jpeg",
    speed: " 300km/hr",
    favColor: [ "red", "black", "white",],
    made: "Qatar",
},

{name: " Mercedes 304",
model: "Ben304II",
amount: "$1,200,00",
productionDate: 2019,
image: "image/mercedes-34.jpeg",
speed: " 400km/hr",
favColor: [ "pink", "black",],
made: "Italy",
},

{name: " Buggatti",
model: "GatiYT46",
amount: "$4,500,000",
productionDate: 2020,
image: "image/buggatti.jpeg",
speed: " 18,00km/hr",
favColor: [ "ash", "black",],
made: "Germany",
}, 

{name: " Toyota Corl",
model: "ToyRfgL89",
amount: "$59,000",
productionDate: 2021,
image: "image/corolla.jpeg",
speed: " 200km/hr",
favColor: [ "black", "blue", ],
made: "Beelgium",
},

{name: " Ferrari",
model: "FecKlR34",
amount: "$2,001,000",
productionDate: 2017,
image: "image/ferari.jpeg",
speed: " 12,000km/hr",
made: "Korea",
}, 



{name: " Grill Benz",
model: "BenZ:r34",
amount: "$1,300,000",
productionDate: 2017,
image: "image/grill.jpeg",
speed: " 2,000km/hr",
favColor: [ "red", "black", "grey", ],
made: "Japan",
}, 

{name: " Lambo",
model: "lamT67s",
amount: "$6,200,000",
productionDate: 2019,
image: "image/lambo.webp",
speed: " 16,000km/hr",
favColor: [ "lemon", "black",],
made: "Germany",
}, 

{name: "Royce Rolls",
model: "BRce4YUd",
amount: "$7,000,000",
productionDate: 2021,
image: "image/royce-rolls.webp",
speed: "19,000km/hr",
favColor: [ "red", "black", "white", ],
made: "USA",
},
  {name: " Toyota Camry",
model: "TyC4rS",
amount: "$200,000",
productionDate: 2016,
image: "image/toyota.jpeg",
speed: " 300km/hr",
favColor: [ "red", "black", "white", ],
made: "Nigeria",
},
];

//  prpduction date
function getDate(yr) {
    let currentYear= new Date().getFullYear();
    let space = currentYear - yr;
    if (space < 2) {
        return `${space} year ago`;
    }
    else{

        return `${space} years ago`;
    }
}
//  fav color
function favColor(fav) {
    if (fav == undefined) {
        return`No favorite color`
    }else{
        return fav;
    }
};


let carMapping = carType.map( function (c) {
    return `<div class="cars-collection">
                <div class="image-cont">
                    <img src= ${c.image} class="car-img">
                 </div>
                 <div class="text-cont">
                    <p> Name: ${c.name}</p>
                    <p> Model: ${c.model}</p>
                    <p> Amount: ${c.amount}</p>
                    <p>Speed: ${c.speed}</p>
                    <p>Date: ${getDate(c.productionDate)}</p>
                    <p> Favorite: ${favColor(c.favColor)}</p>
                    <p> Made: ${c.made}</p>
                 </div>
            </div>`
});

 let carDiv = document.querySelector(".carDiv");
 carDiv.innerHTML =`
 <div class="page-container">
 <h2> JB Car collections</h2>
            <div class="car-holder">
                 ${carMapping}
             </div>
        </div>`