// los archivos JSON

const Persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 25,
  telefono: "829-789-6598",
  direccion: {
    calle: "Calle 1",
    ciudad: "Santo Domingo",
    pais: "República Dominicana",
  },
};

const objetoPequenio = {
  dominio: "cced.com",
  subdominio: "subdominio.com",
};

console.log(Persona);

//convertir un objeto a JSON
const PersonaJSON = JSON.stringify(Persona);

console.log(PersonaJSON);

//convertir un JSON a un objeto o deserializar
const PersonaStringObjeto = JSON.parse(PersonaJSON);
console.log(PersonaStringObjeto);

const Carro = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 1992,
  caracteristicas: {
    color: "Rojo vino",
    puertas: 4,
    aros: 16,
    motor: "Gasolina",
    pistones: "V6",
  },
  toJson: function () {
    return {
      marca: this.marca,
      modelo: this.modelo,
      año: this.año,
      caracteristicas: this.caracteristicas.pistones,
    };
  },
};

const CarroJSON = JSON.stringify(Carro);
console.log(CarroJSON);

/*
Crea un objeto que represente un libro con propiedades como título, 
autor y año. Serializa el objeto a JSON y luego deserialízalo.
*/
const Libro = {
  titulo: "La Biblia",
  autor: "Dios",
  año: "400 A.C",
};

const LibroJSON = JSON.stringify(Libro);
console.log(LibroJSON);
// Deserializar el JSON a un objeto
const LibroDeserializado = JSON.parse(LibroJSON);
console.log(LibroDeserializado);
