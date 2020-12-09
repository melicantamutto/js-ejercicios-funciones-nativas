// UNO


// tienenMismaLongitud(a, b)

// Crear una función tienenMismaLongitud que tome como argumentos dos strings a y b y devuelva true si tienen la misma longitud o false de lo contrario

const igualLongitud = (a, b) => {
    if (a.length === b.length){
        alert(true);
    } else{
        alert(false);
    }
}

//igualLongitud('javascript', 'java') // false
//igualLongitud('manzana', 'cerveza') // true


// DOS


// esUltimoCaracter(palabra, caracter)

// Crear una función igualLongitud que tome como argumentos una palabra y un caracter y devuelva true si la palabra termina con el caracter o false de lo contrario

const esUltimoCaracter = (palabra, caracter) =>{
    const ultimoCaracter = palabra.charAt(palabra.length - 1);
    if(ultimoCaracter === caracter){
        alert(true);
    } else {
        alert(false);
    }
}

//esUltimoCaracter('lovelace', 'e') // true
//esUltimoCaracter('lovelace', 'f') // false


// TRES


// esContraseniaValida(contrasenia)

// Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres

const esValida = (contrasenia) =>{
    if(contrasenia.length >= 8){
        alert(true);
    } else{
        alert(false);
    }
}

//esValida('contraseniaMuySegura') // true
//esValida('abc123') // false


// CUATRO


// sonIguales(a, b)

// Crear una función sonIguales que tome como argumentos dos strings a y b y devuelva true si ambos strings tienen el mismo contenido independientes del caso y false en caso contrario.

const sonIguales = (a, b) =>{
    if(a.toLowerCase() === b.toLowerCase()){
        alert(true);
    } else{
        alert(false);
    }
}

// sonIguales('javascript', 'JavaScript') // true
// sonIguales('AdA LoVeLaCe', 'Ada Lovelace') // true
// sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO') // false


// CINCO


// contarPalabras(str)

// Crear una función contarPalabras que tome como argumento un string str y devuelva la cantidad de palabras que posee

const contarPalabras = (str) => {
    const textoDividido = str.split(' ');
    alert(textoDividido.length);
}

// contarPalabras('javascript') // 1
// contarPalabras('ada lovelace') // 2
// contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos') // 14


// SEIS


// burlarse(str)contrasenia.length
const burlarse = (str) => {
    const newStr = str.replace(/[aAeEoOuU]/g, 'i');
    alert(newStr);
}

//burlarse('programar es dificil') // 'prigimir is dificil'


// SIETE


// esFraccionMayorAUno(fraccion)

// Crear una función esFraccionMayorAUno que tome como argumento un string fraccion (en el formato 'numerador/denominador') y devuelva true si dicha fracción es mayor a 1 o false de lo contrario

const esFraccionMayorAUno = (fraccion) =>{
    const resultadoFraccion = Number(fraccion.match(/\d/)) / Number(fraccion.charAt(fraccion.length -1));
    if(resultadoFraccion > 1){
        alert(true);
    } else{
        alert(false);
    }
}

//esFraccionMayorAUno('1/2') // false
//esFraccionMayorAUno('2/2') // false
//esFraccionMayorAUno('4/2') // true


// OCHO


// capitalizar(str)

// Crear una función capitalizar que tome como argumento un string str y devuelva el mismo string con la primera letra en mayúscula

const capitalizar = (str) => {
    const newStr= str.charAt(0).toUpperCase() + str.slice(1);
    alert(newStr);
}

//capitalizar('lovelace') // 'Lovelace'
//capitalizar('había una vez...') // 'Había una vez...'


// NUEVE


// aHackerSpeak(str)

// Crear una función aHackerSpeak que tome como argumento un string str y el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:

const aHackerSpeak = (str) =>{
    const numberWriting = {'i':'1', 'I':'1','e':'3', 'E':'3', 'a':'4', 'A':'4', 's':'5','S':'5','o':'0','O':'0',};
    const newStr = str.replace(/[iIeEaAsSoO]/g, m => numberWriting[m]);
    alert(newStr);
}

// - Las i se transforman en 1
// - Las e se transforman en 3
// - Las a se transforman en 4
// - Las s se transforman en 5
// - Las 0 se transforman en 0

// aHackerSpeak('javascript') // 'j4v45cr1pt'
// aHackerSpeak('soy una hacker') // '50y un4 h4ck3r'
// aHackerSpeak('ADA LOVELACE') // '4D4 L0V3L4C3'


// DIEZ me gustaria que lo intente resolver el profe


// obtenerPrimeraOracion(str)

// Crear una función obtenerPrimeraOracion que tome como argumento un string str y la primera oración de dicho string

const obtenerPrimeraOracion = (str) =>{
    const primeraOracion= str.split('.')
    alert(primeraOracion[0]+'.');
}

//obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración') // 'A mí no me preguntes, sólo soy una oración'
//obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.') // 'Tengo varias oraciones.'


// ONCE


// ocultarContrasenia(contrasenia)

// Crear una función ocultarContraseña que tome como argumento una contrasenia de solo numeros y devuelva un string con dicha contraseña ocultada con astericos *, es decir, un string con la misma longitud donde todos sus caracteres son astericos

const ocultarContrasenia = (contrasenia) =>{
    const soloNumeros = typeof contrasenia;
    const largoContrasenia = contrasenia.toString().length;
    const asterisco = '*';
    const ocultada = asterisco.repeat(largoContrasenia);
    if(soloNumeros == 'number'){
        alert(ocultada);
    } else{
        alert('Ingresá solo números')
    }
}


//ocultarContrasenia(123456) // '******'
//ocultarContrasenia(111222333) // '*********'


// DOCE


// espaciarCaracteres(str)

// Crear una función espaciarCaracteres que tome como argumento un string str y devuelva un string con todos sus caracteres separados por un espacio

const espaciarCaracteres = (str) => alert(str.match(/\w/g).join(' '));

//espaciarCaracteres('javascript') // 'j a v a s c r i p t'
//espaciarCaracteres('ada lovelace') // 'a d a l o v e l a c e'


// TRECE


// removerVocales(str)

// Crear una función espaciarCaracteres que tome como argumento un string str y devuelva un string con todas sus vocales removidas

const removerVocales = (str) => alert(str.replace(/[aAeEiIoOuU]/g, ''));

//removerVocales('javascript') // 'jvscrpt'
//removerVocales('ada lovelace') // 'd lvlc'


// CATORCE


// obtenerExtension(archivo)

// Crear una función obtenerExtension que tome como argumento un string archivo con el formato 'nombre.extension' y devuelva la extensión del archivo

const obtenerExtension = (archivo) => alert(archivo.slice(archivo.indexOf('.')+1))

//obtenerExtension('imagen.png') // 'png'
//obtenerExtension('index.html') // 'html'
//obtenerExtension('notas.txt') // 'txt'


// QUINCE


// esPuenteSeguro(puente)

// Crear una función esPuenteSeguro que tome como string un puente que consista en caracteres numerales y espacios y devuelva true si el puente está cortado (tiene espacios) o false si está entero y es seguro atravesar

const esPuenteSeguro = (puente) => {
    if (puente.includes(' ')){
         alert(false);
    } else{ 
        alert(true);
    }
};

//esPuenteSeguro('### ##') // false
//esPuenteSeguro('##### ####') // false
//esPuenteSeguro('########') // true


// DIECISEIS


// obtenerSubreddit(url)

const obtenerSubreddit = (url) => {
    const urlUno = url.slice(0, url.length-1);
    alert(urlUno.slice(urlUno.lastIndexOf('/')+1));
}

// Reddit es una red de comunidades en la que cada comunidad se conocer como subreddit. Crear una función obtenerSubreddit que tome como argumento un string url que consista en la url de un subreddit (p. ej. 'https://www.reddit.com/r/dankmemes/') y devuelva el subreddit (p. ej. 'dankmemes')

//obtenerSubreddit('https://www.reddit.com/r/javascript/') // 'javascript'
//obtenerSubreddit('https://www.reddit.com/r/aww/') // 'aww'


// DIECISIETE


// convertirEnAcronimo(str)

// Crear una función convertirEnAcronimo que tome como argumento un string str y un string con todos los caracteres en mayúscula y separados por un punto

const convertirEnAcronimo = (str) => (str.match(/\w/g).join('.').toUpperCase())+'.';

//alert(convertirEnAcronimo('afip')) // 'A.F.I.P.'
//alert(convertirEnAcronimo('nasa')) // 'N.A.S.A.'


// DIECIOCHO


// esAnioNuevo(fecha)

// Crear una función esAnioNuevo que tome como argumento un string fecha con el formato DD:MM:YYYY un argumento y devuelva true si la fecha es año nuevo o false si no lo es

const esAnioNuevo = (fecha) => {
    if(fecha.match(/\d+\W\d+/) == '01/01'){
        alert(true);
    } else {
        alert(false);
    }
}

//esAnioNuevo('03/05/2015') // false
//esAnioNuevo('22/01/1987') // false
//esAnioNuevo('01/01/2020') // true


// DIECINUEVE


// aprueba(nota)

// Crear una función aprueba que tome como argumento un número nota y devuelva true si aprueba el examente (6 o más) o false si no. El número tiene que redondearse primero antes de evaluarlo

const aprueba = (nota) =>{
    const notaRedondeada = Math.round(Number(nota));
    if(notaRedondeada >= 6){
        alert(true);
    } else{
        alert(false);
    }
}

//aprueba(1) // false
//aprueba(5.4) // false
//aprueba(5.5) // true
//aprueba(5.6) // true
//aprueba(8) // true


// VEINTE


// obtenerDuracionEnSegundos(duracion)

// Crear una función obtenerDuracionEnSegundos que tome como argumento un string duracion con el formato (mm:ss) y la cantidad de segundos totales de la duración

const obtenerDuracionEnSegundos = (duracion) => parseInt(duracion.charAt(0) + duracion.charAt(1)) * 60 + parseInt(duracion.charAt(3) + duracion.charAt(4));

//alert(obtenerDuracionEnSegundos('00:33')) // 33
//alert(obtenerDuracionEnSegundos('01:05')) // 65
//alert(obtenerDuracionEnSegundos('10:42')) // 642