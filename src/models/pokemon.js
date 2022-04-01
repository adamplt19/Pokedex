export class Pokemon {
// Propriétés d'un Pokemon : methodes
id;
name;
height;
types;
weight;
img;
imgBack;


//Constructeur de la classe Pokemon
constructor(anId, aName, anHeight, types , aWeight , anImage, anImageBack) {
    this.id = anId
    this.name = aName
    this.height = anHeight
    this.types = types
    this.weight = aWeight
    this.img = anImage
    this.imgBack = anImageBack
}


}