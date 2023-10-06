// class Forma {
//     type =  "geometrica"
//     color = "Rojo"
//     constructor() {
//         console.log("Constructor padre")
//     }
//     show() {
//         console.log(`Soy una forma ${this.type} de color ${this.color}`)
//     }

//     setColor(color) {
//         this.color = color
//     }
// }

// //Clase Hija

// class Cuadrado extends Forma {
//     type="cuadrada"
//     constructor() {
//         super()
//         console.log("Constructor hijo")
//     }
// }

// const c1 = new Cuadrado()
// c1.show()

// const c2 = new Cuadrado()
// c2.setColor("Azul")

// c2.show()



// class Animal {

//     constructor(name) {

//         this.speed = 0
//         this.name = name
//     }

//     run(speed) {
//         this.speed = speed
//         alert (`${this.name} corre a una velocidad de ${this.speed}`)
//     }

//     stop() {
//         this.speed = 0
//         alert (`${this.name} se quedó quieto`)

//     }
// }

// let animal = new Animal("Cocodrilo")
// animal.run("20 km/h")


// class Rabbit extends Animal {
//     hide() {
//         alert (`${this.name} se esconde`)
//     }
// }

// let rabbit = new Rabbit ("Conejo blanco")
// rabbit.run(50)
// rabbit.hide()



// class Pokemon {
//     constructor(name, type, level) {

//         this.name = name
//         thos.type = type
//         this.level = level 
//     }
    
//     attack (move) {
//         console.log (`${this.name} usa ${this.move}`)
//     }
// }

// const Pikachu = new Pokemon ("Pikachu", "Electrico", "20")
// Pikachu.attack("Thunderbolt")


//#2
// class Pokemon {
//     constructor(name, type, level) {

//         #pp = 100;
//         this.name = name
//         thos.type = type
//         this.level = level 
//     }

//     #takeDamage(damage) {
//         this.pp -= damage;   
//         console.log (`${this.name} toma ${damage} daño `)
//     }


//     receiveAttck(move) {
//         console.log  (`${this.name} recibe ${move}`)
//     }
    
//     attack (move) {
//         console.log (`${this.name} usa ${this.move}`)
//     }
// }

// const Pikachu = new Pokemon ("Pikachu", "Electrico", "20")
// Pikachu.attack("Thunderbolt")


//#3


// class Pokemon {
//     constructor(name, type) {

//         this.name = name;
//         this.type = type;
//     }

//     attack (move) {
//         console.log (`${this.name} usa ${move}`)
//     }
// }

// class firePokemon extends Pokemon {
//     constructor (name) {
//         super(name, "fire")
//     }
// }

// const Charmander = new firePokemon ("Charmander")
// Charmander.attack()



//#4

class Pokemon {
    constructor(name, type) {

        this.name = name;
        this.type = type;
    }

    attack (move) {
        console.log (`${this.name} usa ${move}`)
    }
}

class firePokemon extends Pokemon {
    constructor (name) {
        super(name, "fire")
    }
}

const Charmander = new firePokemon ("Charmander")
Charmander.attack()


