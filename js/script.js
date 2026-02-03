const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");
const createPet = function (name, species) {
    const pet = {
       name: name,
       species: species,
       isTired: 5, 
       sleep: function () {
           console.log(`${this.name} needs a nap. Zzz...`);
           this.isTired = 1;
       },
       play: function () {
        if (this.isTired === 10) {
         console.log("Too tired to play.");
         this.sleep();
        } else {
         console.log(`Yay! ${this.name} loves to play!`);
         this.isTired += 1;
        }
       } 
     };
   return pet;
};
const una = createPet("Una", "kitten");
const honey = createPet("Honey", "rabbit");
const kevin = createPet("Kevin", "bearded dragon");
const bailey = createPet("Bailey", "dog");
const pepper = createPet("Pepper", "leopard gecko");

// console.log(una, honey, kevin, bailey, pepper);
// honey.sleep();
// pepper.play();
// console.log(honey, pepper);

una.isTired = 8;
kevin.isTired = 9;

const allPets = [
  una,
  honey,
  kevin,
  bailey,
  pepper
];

console.log(allPets);

const showPets = function (petArray) {
  pets.innerHTML = "";

  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping.";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};
statusButton.addEventListener("click", function () {
  showPets(allPets);
  }
);





