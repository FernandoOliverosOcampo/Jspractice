// var a = {
//     A:0,
//     B:0,
//     C:0,
//     D:0,
//     ressultado: function(){
//         if(a.C > a.B && a.D > a.B && a.D > a.C && a.D < a.A){
//             return true;
//         }
//             return false;
//     },
//     intervalo: setInterval(function(){
//         a.A = Math.ceil(Math.random()*4)
//         a.B = Math.ceil(Math.random()*4)
//         a.C = Math.ceil(Math.random()*4)
//         a.D = Math.ceil(Math.random()*4)
//         if(a.ressultado()){
//             clearInterval(a.intervalo);
//             console.log("Atleta A", a.A);
//             console.log("Atleta B", a.B);
//             console.log("Atleta C", a.C);
//             console.log("Atleta D", a.D);
//         }
//     },1)
// };
//PROBLEMA CABALLOS
// var b = {
//     mac : {edad:0, velocidad:0, color:0},
//     smith : {edad:0, velocidad:0, color:0},
//     jack : {edad:0, velocidad:0, color:0},
//     will : {edad:0, velocidad:0, color:0},
//     resultado: function(){
//         if(b.mac.color > b.smith.color &&
//             b.mac.velocidad > b.jack.velocidad&&
//             b.mac.edad > b.jack.edad &&
//             b.will.velocidad > b.jack.velocidad&&
//             b.mac.edad > b.will.edad&&
//             b.mac.edad > b.smith.edad&&
//             b.will.color > b.smith.color&&
//             b.smith.velocidad > b.jack.velocidad&&
//             b.jack.color > b.smith.color
//             ){
//             return true;
//         }
//         return false;
//     },
//     intervalo: setInterval(function(){
//         b.mac.color = Math.ceil(Math.random()*2)
//         b.mac.velocidad = Math.ceil(Math.random()*2)
//         b.mac.edad = Math.ceil(Math.random()*2)
//         b.smith.color = Math.ceil(Math.random()*2)
//         b.smith.velocidad = Math.ceil(Math.random()*2)
//         b.smith.edad = Math.ceil(Math.random()*2)
//         b.jack.color = Math.ceil(Math.random()*2)
//         b.jack.velocidad = Math.ceil(Math.random()*2)
//         b.jack.edad = Math.ceil(Math.random()*2)
//         b.will.color = Math.ceil(Math.random()*2)
//         b.will.velocidad = Math.ceil(Math.random()*2)
//         b.will.edad = Math.ceil(Math.random()*2)
//         if(b.resultado()){
//             clearInterval(b.intervalo);
//             console.log("Caballo mac", b.mac);
//             console.log("Caballo smith", b.smith);
//             console.log("Caballo jack", b.jack);
//             console.log("Caballo will", b.will);
//         }
//     },1)
// };
//SILENCIO
// var c = {
//     angela:{ voz:0},
//     celina: {voz:0},
//     resultado: function(){
//         if(c.celina.voz > c.angela.voz){
//             return true;
//         }
//         return false;
//     },
//     intervalo: setInterval(function(){
//         c.angela.voz = Math.ceil(Math.random()*3)
//         c.celina.voz = Math.ceil(Math.random()*3)
//         if(c.resultado()){
//             clearInterval(c.intervalo);
//             console.log("Voz angela", c.angela);
//             console.log("Voz celina", c.celina);
//         }
//     },1)
// }
//Perros
// var d = {
//           galgo: 0,
//           dogo: 0,
//           alamo: 0,
//           podenco: 0,
//           resultado: function () {
//              if (
//                 d.podenco > d.galgo&& 
//                 d.podenco < d.alamo&&
//                 d.dogo > d.alamo&&
//                 d.podenco > d.galgo
//              ) {
//                      return true;
//              }
//                      return false;
//           },
//           intervalo: setInterval(function () {
//             d.galgo = Math.ceil(Math.random() * 4)
//             d.alamo = Math.ceil(Math.random() * 4)
//             d.podenco = Math.ceil(Math.random() * 4)
//             d.dogo = Math.ceil(Math.random() * 4)
//             if (d.resultado()) {
//                 console.log("Perro galgo", d.galgo);
//                 console.log("Perro dogo", d.dogo);
//                 console.log("Perro alamo", d.alamo);
//                 console.log("Perro podenco", d.podenco);
//                 clearInterval(d.intervalo);
//             }
//           }, 1)
//         }
// var d = {
//             galgo: 0,
//             dogo: 0,
//             alamo: 0,
//             podenco: 0,
//             resultado: function () {
//                 if (
//                     d.podenco > d.galgo &&
//                     d.alamo > d.galgo &&
//                     d.alamo < d.dogo &&
//                     d.dogo > d.podenco &&
//                     d.alamo > d.podenco
//                 ) 
//                 {
//                     return true;
//                 }
//                 return false;
//             },
//             intervalo: setInterval(function () {
//                 d.galgo = Math.ceil(Math.random() * 4);
//                 d.podenco = Math.ceil(Math.random() * 4);
//                 d.alamo = Math.ceil(Math.random() * 4);
//                 d.dogo = Math.ceil(Math.random() * 4);
//                 if (d.resultado()) {
//                     console.log('dogo come: ' + d.dogo);
//                     console.log('alamo come: ' + d.alamo);
//                     console.log('podenco come: ' + d.podenco);
//                     console.log('galgo come: ' + d.galgo);
//                     clearInterval(d.intervalo);
//                 }
//             }, 1)
//         }
// COMPROBACION DE EDAD
// let edad = prompt("Digite su edad");
// parseInt(edad);
// if (edad >= 18) {
//     alert("Es mayor de edad y puede conducir");
// }else{
//     alert("Es menor de edad y no puede conducir");
// }
// let nota = prompt("Escriba la nota");
// parseInt(nota);
// if(nota <= 10 && nota >= 9){
//     alert("Su nota es: " + nota + " es sobresaliente");
// }else if( nota <= 9 && nota >=7 ){
//     alert("Su nota es: " + nota + " es notable");
// }else if(nota <=7 && nota >= 6){
//     alert("Su nota es: "+ nota + " Bien")
// }else if(nota <=6 && nota >= 5){
//     alert("Su nota es: "+ nota + " Suficiente")
// }else if(nota <=5 && nota >= 3){
//     alert("Su nota es: "+ nota + " Insuficiente")
// }else if(nota <=3 && nota >=0){
//     alert("Su nota es: "+ nota + " Muy deficiente")
// }else{
//     if(nota != undefined){
//         alert('INTRODUCE UN VALOR VALIDO')
//     }
// }
// function contar(){
//     let texto = new String(prompt("Digite el texto"));
//     console.log(`El texto ${texto} contiene: `,texto.length,"letras");
// }
// contar();
// function  contador(){
//     let texto = prompt("Digite el texto");
//     let contador = prompt("Digite la cantidad de veces");
//     parseInt(contador);
//     if (texto == texto){
//         for(i = 0; i < contador; i++){
//             console.info("el texto es ",texto );
//         }
//     }else if(!texto){
//         console.warn("Te equivocaste")
//     }
// }
// contador();
// //split para dividir
// function dividir(){
//     let divido = prompt("Digite la palabra a dividir");
//     console.log("el resultado es: ", divido.split(""));
// }
// dividir();
// function recortar() {
//     let palabrota = prompt("Digite la palabra");
//     console.log(palabrota.slice(0, 3));
// }
// recortar();
//4. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un
// «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
// var numero = ""
// do{
//     var cantidad = prompt("digite los numeros");
//     parseInt(cantidad);
//     if( cantidad == cantidad && !cantidad){
//         numero = numero + cantidad;
//     }
//     else if(cantidad != cantidad){
//         alert("te equivocastes")
//     }
// }
// while(confirm("Desea seguir?"))
// console.log(numero);
//   // DECLARAMOS UNA VARIABLE DONDE VAMOS A CONCATENAR LAS CADENAS
//   var resultado = ""
//   // BUCLE DO WHILE PARA INTRODUCIR VARIAS CADENAS
//   do {
//       // PEDIMOS LA CADENA POR TECLADO
//       var cadena = prompt("Introduce una cadena");
//       // SI LA VARIABLE RESULTADO ESTÁ VACÍA
//       if (resultado == "") {
//           // CONCATENAMOS SIN UTILIZAR GUIÓN
//           resultado = resultado + cadena;
//       }
//       // SINÓ
//       else {
//           // CONCATENAMOS CON GUIÓN
//           resultado = resultado + "-" + cadena;
//       }
//   // MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
//   } while (confirm("Desea seguir?"));
//   // SI SE PULSÓ CANCELAR IMPRIMIMOS EL RESULTADO 
//   console.log(resultado); 
// let nombre = "Fernando";
// let saludo = `Hola señor ${nombre} como se encuentra`;
// console.log(saludo);
// let ul = ' <li>Primavera</li> <li>Verano</li> <li>Otoño</li><li>Invierno</li>'
// let ul2 = `
// <li>Primavera</li>
// <li>Verano</li>
// <li>Otoño</li>
// <li>Invierno</li>
// `
// console.log(ul2)
// console.log(ul)
//DATOS NUMERICOS
// let a = 2;
// let b = new Number(10);
// let c = 7.19;
// let d = "5.6"
// console.log(a,b);
// console.log(c.toFixed(1)); //fixed es cantidad de numeros decimales
// console.log(parseInt(c));
// console.log(parseFloat(c))
// console.log(typeof c) //type of = typo de variable
// console.log(a+b);
// console.log(c+parseInt(d));
// console.log(c+parseFloat(d));
//DATOS BOOLEANOS
// let verdadero = true;
// let falso = false;
// console.log(verdadero, falso);
// NULL UNDEFINED AND NaN
// let indefinida; //No esta definida
// console.log(indefinida);
// let nulo = null; //colocado intencionalmente
// console.log(nulo)
// //NaN not a number
// let nan = "hola" * 3.7;
// console.log(nan); 
//FUNCIONES
//función declarada
// function estoEsUnaFuncion(){
//     console.log("Uno");
//     console.log("dos");
//     console.log("tres");
// }
// function unaFuncionQueDevuelveValor(){
//     console.log("Uno");
//     return 19;
//     console.log("dos");
//     console.log("tres");
//     return "La funcion a retornado una cadena de texto"
// }
// //invocación de función
// // estoEsUnaFuncion();
// // let valorDeFuncion = unaFuncionQueDevuelveValor();
// // console.log(valorDeFuncion);
// function saludar(nombre = "desconocido", edad = 0){
//     console.log(`hola señor ${nombre}, y tengo ${edad}`)
// }
// saludar("fernando", 7);
// saludar();
// //Funciones declardas vs funciones expresadas
// funcionDeclarada();
// function funcionDeclarada(){
//     console.log("Esto es una",
//     "funcion declarada puede invocarse en cualquier lugar");
// }
// funcionDeclarada();
// //funciones expresadas tienden a ser declaradas con const
// // funcion anonima const funcionExpresada = ( )=>{}
// const funcionExpresada = function(){
//     console.log('Esta es una funcion expresada, no se puede invocar',
//     ' antes porque tira ...')
// }
// funcionExpresada();
//CLASE DE AYER 16/04/2023
//ARRAYS
// const arreglo=[];
// const b = [1,true, 'Hola',["A","b","C",[1,2,3]]];
// console.log(arreglo);
// console.log(b);
// console.log(b[0]);
// console.log(b[2]);
// console.log(b[3][3][0])//Ingresar a un arreglo dentro de otro
// const c = Array.of("X","Y","Z",9,8,7);
// console.log(c)
// const d = Array(100).fill(false); //crea un objeto de 100 propiedades false
// console.log(d)
// const e = new Array();
// console.log(e)
// const f = new Array(1,2,3,true,false)
// console.log(f)
// const colores = ["rojo","verde","azul"];
// console.log(colores)
// colores.push("negro")//Ingresa nuevos datos a un array;
// console.log(colores)
// colores.pop();
// console.log(colores);//quita el ultimo elemento del array
// //ejecutar funcion por cada elemento del array
// colores.forEach(function(el,index){
// console.log(`<li id="${index}">${el}</li>`)
// })
// const registro = [
// ]
//     let nombre = prompt("digite un nombre");
//     let apellido = prompt("digite un apellido");
//     let edad = prompt("digite su edad");
//     if (nombre === nombre && apellido === apellido && edad ===edad){
//     registro.push(nombre,apellido,edad);
//     console.log(registro);
//     console.log("datos añadidos correctamente");
//     }else{
//     console.warn("Esta ocurriendo un error revisa el codigo")
//     }
//OBJETOS
// const objeto ={ 
// }
// console.log(objeto);
// const fernando = {
//     nombre:"Fernando",
//     apellido:"Oliveros",
//     edad: "22",
//     pasatiempo: ["jugar", "ver videos"],
//     soltero: false,
//     contacto:{
//         email:"ksfnskfnksf",
//         twitter:"dlfslglkdm"
//     },
//     saludar: function(){
//         console.log("HOLA :)");//metodo
//     },
//     decirMiNombre: function(){
//         console.log(`HOLA ME LLAMO ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
//     }
// }
// console.log(fernando);
// console.log(fernando["nombre"]); //ambas anotaciones son validas
// console.log(fernando.nombre);//pero esta es la mejor
// console.log(fernando.pasatiempo[1]);
// console.log(fernando.contacto.email);//acceder a un objeto detro de otro
// fernando.saludar();//llamar funcion dentro de un objeto
// fernando.decirMiNombre();
// console.log(Object.keys(fernando))
// console.log(Object.values(fernando))
// console.log(fernando.hasOwnProperty("nombre"))//evalua si una propiedad esta en el objeto
//Ejercicio practico
// const registroDatos = [
// ]
// do{
//  function registro(){
//    let nombre = prompt("Digite el nombre");
//    let apellido = prompt("Digite el apellido");
//    let edad = prompt("Digite la edad");
//    parseInt(edad); 
//    if( nombre === nombre && apellido === apellido && edad ===edad){
//         registroDatos.push(nombre,apellido,edad);
//         console.log(registroDatos);
//         console.log("Datos registrados de forma exitosa");
//    }else if((nombre != undefined )&& (apellido !=undefined) && (edad===" ")){
//         alert("Verifique que los datos sean correctos");
//         return false;
//    }else{
//         console.log("Estas aprendiendo");
//    }
//  }
// }
// while(registro(),confirm("desea continuar"));
//Operadores
//operadores aritmeticos
// let a = 5+5 - 10 *3
// let modulo = 5%2 //residuo de una operacion
// console.log(modulo)
// console.log(a)
//operadores relacionales
// console.log(8>9);
// console.log(9>8)
// console.log(8>=9)
// console.log(9>=8)
//operadores de incremento y decremento.
// let i=2;
// // i = i+2;
// // i+=3
// //operador unario
// i++;
// i--;
// ++i;
// --i;
// console.log(i)
//Estructuras de condicionales. 
// let edad = 17;
// if(edad > 17){
//     console.log("Eres mayor de edad")
// }else{
//     console.warn("eres menor de edad")
// }
// if(edad >= 18){
//     console.log("Eres mayor de edad")
// }else{
//     console.warn("eres menor de edad")
// }
// let hora = prompt("Digite la hora");
// parseInt(hora);
// if(hora >= 0 && hora <= 5){
//     console.log("Dejame dormir")
// }else if(hora >=6 && hora <=11){
//     console.log("Buenos Dias"); 
// }else if(hora >=12 && hora <=18){
//     console.log("Buenas tardes");
// }else{
//     console.log("buenas noches")
// }
//OPERADOR TERNARIO-TIENE TRES PARTES
// console.log("Operador ternario");
// let edad = 17;
// let eresMayo = (edad >=18)
//   ?"Eres mayor de edad"
//   :"Eres menor de edad"
// console.log(eresMayo)
//switch case
// let dia = 3;
// switch(dia){
//     case 0:
//         console.log("Domingo")
//         break;
//     case 1:
//         console.log("Lunes")
//         break;
//     case 2:
//         console.log("Marte");
//         break;
//     case 3:
//         console.log("Miercoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     case 6:
//         console.log("Sabado");
//         break;
//     default:
//         console.warn("No existe ese dia")
//         break;   
// }
// const registroDatos = [
// ]
// do{
//  function registro(){
//    let nombre = prompt("Digite el nombre");
//    let apellido = prompt("Digite el apellido");
//    let edad = prompt("Digite la edad");
//    parseInt(edad); 
//     switch(nombre, apellido,edad){
//         case nombre, apellido, edad:
//             registroDatos.push(nombre,apellido,edad);
//             console.log(registroDatos);
//             console.log("Datos registrados de forma exitosa");
//             break;
//         case undefined , undefined, undefined:
//             alert("Los datos estan erroneos");
//             break;
//         default:
//             console.warn("Estas aprendiendo")
//             break;
//     }
//  }
// }
// while(registro(),confirm("desea continuar"));
//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor
//     function mayor(){
//         for(i = 0; i < 3; i++){
//         let edad = prompt("Escriba su edad");
//         let nombre = prompt("Escriba su nombre");
//         parseInt(edad);
//         var maximo = Math.max(edad, edad, edad);
//         if (maximo == edad) {
//             document.write("El mayor es: " + nombre);
//         }
//         if (maximo == edad) {
//             document.write("El mayor es: " + nombre);
//         }
//         if (maximo == edad) {
//             document.write("El mayor es: " + nombre);
//         }
//     }
// }
// mayor();
// let aleatorio = Math.floor(Math.random()*99+1); //floor redondea los numero decimales
// let ale = Math.floor(Math.random()*99+1); 
// let torio = Math.floor(Math.random()*99+1); 
// console.log(aleatorio)
// console.log(ale)
// console.log(torio)
//CICLOS
// let contador = 0;
//compara con las lineas que estan dentro
// while(contador < 10){
//     console.log("while",contador);
//     contador ++;
// }
//condicionado a que la condicion se cumpla
// do{
//     console.log("DO WHILE",contador);
//     contador ++;
// }while(contador < 10);
//Ciclo for
// for(let i = 0; i < 10; i++){
//     console.log("HOLA!!!",i)
// }
// let numero = [10,20,30,40,50,60,70,80,90];
// // //aqui depende del numero de documentos que tiene el arreglo
// // for(let i = 0; i < numero.length ; i++){ //length define la cantidad de la iteracion
// //     console.log(numero[i]);
// // }
// //clico for in
// // for especial utilizado para objetos
// const fernando = {
//     nombre: "Fernando",
//     apellido: "Oliveros",
//     edad: 22
// }
// for (const propiedad in fernando) {
//     console.log(`key: ${propiedad}, Value: ${fernando[propiedad]}`);//para leer la propiedad y el valor que esta tiene
// }
// //permite recorrer todos los objetos de cualquier cosa que sea iterable.
// //se utiliza para arreglos, cadenas de textos, etc.
// let cadena = "hola mundo";
// for (const caracter of cadena) {
//         console.log(caracter);
// }
//manejo de errores
//sentencia try catch finally
// try {
//     console.log("Se agrega el codigo a evaluar");
//     noExiste;
//     console.log("Segundo mensaje")
// } catch (error) {                       //gestiona el error
//     console.log("Captura el error");
//     console.log(error);
// }finally{
//     console.log("Se ejecutara siempre al final de un bloque try catch")
// }
// try {
//     let numero = "y";
//     if(isNaN(numero)){
//         throw new Error("Te equivocaste gilipollas");
//     }
//     console.log(numero * numero)
// } catch (error) {
//     console.log(`Este es el error: ${error}`)
// }
//BREAK & CONTINUE
// const numero = [1,2,3,4,5,6,7,8,9,0]
// for(let i = 0; i < numero.length; i++){
//     if(i===5){
//         break;//corta hasta el numero
//     }
//     console.log(numero[i])
// }
// for(let i = 0; i < numero.length; i++){
//     if(i===5){
//         continue;//omite el valor que esta en esa iteración
//     }
//     console.log(numero[i])
// }
//DESTRUCTURACION
//nueva forma de asignar valores a array y objetos
// const numeros = [1,2,3];
// //sin destructuracion
// let uno = numeros[0],
//     dos = numeros[1],
//     tres = numeros[2];
//     console.log(uno,dos,tres);
// //con destructuracion
// const [one, two, three] = numeros;
// console.log(one,two,three)
// let persona = {
//     nombre:"fernando",
//     apellido:"oliveros",
//     edad: 22
// }
// //las variables deben tener el mismo nombre de las propiedades
// const {nombre, apellido, edad} = persona;
// console.log(nombre,apellido,edad);
//CLASE DE 3 17/04/2023
//OBJETOS LITERALES
// let nombre = "Fernando",
//     edad    = 7;
//     const perro = {
//         nombre: nombre,
//         edad: edad,
//         ladrar: function(){
//             console.log("GUAU GUAUU")
//         }
//     }
// console.log(perro);
// perro.ladrar()
// //objeto nuevo
// const dog ={
//     nombre,
//     edad,
//     raza: "callejero",
//     ladrar(){  //metodo en objetos literales.
//         console.log("GUAU  GUAUUUUU GUAUU")
//     }
// }
// console.log(dog)
// dog.ladrar();
//PARAMETROS rest y operador spread
// function sumar (a,b, ...c){ //parametros que resive una funcion
//     let resultado = a +b;
//     c.forEach(function (n){
//         resultado += n
//     })
//     return resultado;
// }
// console.log(sumar(1,2))
// console.log(sumar(1,2,3))
// console.log(sumar(1,2,3,6))
// //spread operator
// const arr1 = [1,2,3,4,5],
//     arr2 =[6,7,8,9,0]
//     console.log(arr1,arr2)
// const arr3 = [...arr1,...arr2]//para incluir dos arreglos en uno nuevo utilizamos el spread operator
// console.log(arr3);
//ARROWS FUNTIONS O FUNCIONES FLECHAS
//nueva forma de definir funciones anonimas y que sean expresadas.
// const pepe = (nombre)=>{
//     console.log(`Hola ${nombre}`)
// }
// const pepe1 = nombre=> console.log(`Hola ${nombre}`)
// const sumar = function(a,b){
//     return a+b;
// }
// const sumar =(a,b)=> a+b;
// console.log(sumar(8,9))
// pepe("Fernando")
// pepe1("Camilo")
// const funcionDeVariaLineas =()=>{
//     console.log("uno")
//     console.log("uno")
//     console.log("uno")
// }
// funcionDeVariaLineas();   // this palabra reservada de objetos
// //iterar con funciones flechas
// const numeros =[1,2,3,4,5];
// numeros.forEach((el,index) =>{
//     console.log(`el elemento ${el}, esta en la posicion ${index}`)
// })
// //capacidad de capturar 
// const perro = {
//     nombre:"pepe",
//     ladrar(){ //saltar el contexto donde estan
//         console.log(this)
//     }
// }
// perro.ladrar();
//PROTOTIPOS
//mecanismo por el cual un objeto puede heredar atributos y metodos.
// const animal ={
//     nombre: "pepe",
//     sonar(){
//         console.log("hago sonido porque estoy vivo")
//     }
// }
// const animal2 ={
//     nombre: "lola bunny",
//     sonar(){
//         console.log("hago sonido porque estoy vivo")
//     }
// }
// console.log(animal)
// console.log(animal2)
//funcion constructora
// function Animal(nombre,genero){
//     //atributos
//     this.nombre = nombre;
//     this.genero =  genero;
//     //metodos
//     }
//     this.sonar = function(){
//         console.log("hago sonido porque estoy vivo")
//     }
//     this.saludar=function(){
//         console.log(`hola me llamo ${this.nombre}`)
//     }
//funcion constructora donde asignamos el metodo al prototipo
// function Animal(nombre,genero){
//     //atributos
//     this.nombre = nombre;
//     this.genero =  genero;
// }
// //Metodos agregados al prototipo de la funcion constructora
//     Animal.prototype.sonar = function(){
//         console.log("hago sonido porque estoy vivo")
//     }
//     Animal.prototype.saludar=function(){
//         console.log(`hola me llamo ${this.nombre}`)
//     }
// const snoopy =  new Animal( "Snoopy", "Macho"),
// lola = new Animal("LOLA BUNNY", "HEMBRA")
// console.log(snoopy)
// console.log(lola)
// snoopy.sonar();
// snoopy.saludar();
// lola.sonar();
// lola.saludar();
"use strict";