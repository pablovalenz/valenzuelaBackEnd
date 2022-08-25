// console.log('primer Desafio')

// const nombre = 'pepe'
// let edad = 25
// const precio = 99.9
// const series = [
//     'Lost','friends','Los Simpsons'
// ]
// const peliculas = [
//     {
//         nombre: 'Terminator 2',
//         ano: '1999',
//         protagonista: ['Arnol','sara','jhon']
//     },
//     {
//         nombre: 'Matrix',
//         ano: '2003',
//         protagonista: ['Neo','trinity','morpheo']
//     },
//     {
//         nombre: 'Totoro',
//         ano: '1986',
//         protagonista: ['totoro','las nenas']
//     }
    
// ]

// console.log(nombre,edad,precio,series,peliculas)

// edad ++
// console.log(edad)

// series.push('martillo hammer')
// console.log(series)


// class Usuario{
//     constructor(nombre,email,pass){
//         this.nombre = nombre
//         this.email = email
//         this.pass = pass
//     }

//     tieneEmail(){
//         if(this.email){
//             return true
//         } else {
//             return false
//         }
//     }

//     actualizarPass(newPass){
//         this.pass = newPass
//     }
// }

// const usuario = new Usuario('Juan','email@email.com','12345')
// const usuario2 = new Usuario('Carlos','null','abcds')
// console.log(usuario2)
// usuario2.actualizarPass('12345')
// console.log(usuario2)

class Usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
}

const primerUsuario = new Usuario('Pedro','Gonzalez',[{nombre: 'Libro1', autor: 'Alguien'},{nombre:'libro2', autor:'Otro alguien'}],['perro','gato','loro'])
console.log(primerUsuario)
