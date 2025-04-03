// Los objetos en javascript

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

//acceso a las propiedades del objeto
console.log(Persona.nombre, Persona.apellido);

const Persona2 = new Object(Persona);
console.log(Persona2);

Persona2.nombre = "Miguel";
Persona2.apellido = "Medina Salcie";
Persona2.edad = 16;
console.log(Persona2);

const Persona3 = {
  nombre: "Jofreisy",
  apellido: "Montero",
  edad: 16,
  saludar() {
    alert(`Hola, nombre es ${(this.nombre, this.apellido)} 
      y tengo ${this.edad} años`);
  },
};
Persona3.saludar();

function Persona4(nombre, edad) {
  (this.nombre = nombre), (this.edad = edad);
}

const Lucas = new Persona4("Lucas", 16);
console.log(Lucas);

const Angel = new Persona4("Angel", 15);
const Wanda = new Persona4("Wanda", 17);
