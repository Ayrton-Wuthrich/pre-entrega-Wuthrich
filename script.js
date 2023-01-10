siguiente = prompt("Gracias por entrar a nuestra pagina. Escriba OK para continuar")
while(siguiente != "OK"){
    alert("Ingrese OK para continuar")
    siguiente = prompt("Escriba OK para continuar")
}

do{
    numero = prompt("Ingrese un numero del 1 al 5 para obtener su chiste")
    if(numero > 5){
        alert("Ingrese un numero del 1 al 5 por favor. Gracias.")
        numero = prompt("Ingrese un numero del 1 al 5 para obtener su chiste")
        if(numero > 5){
            alert("Relogea la pagina por no poner un numero del 1 al 5 :)")
        }
    }
    if(numero == 1){
        alert("¿Cuál es el último animal que subió al arca de Noé? El del-fin.")
        break
    }

    if(numero == 2){
        alert("¿Cómo se dice pañuelo en japonés? Saka-moko.")
        break
    }

    if(numero == 3){
        alert("Hay tres tipos de personas en el mundo: los que saben contar y los que no.")
        break
    }

    if(numero == 4){
        alert("Sale el doctor después de un parto y el padre de la criatura le pregunta: ¿Doctor cómo salió todo? El doctor le dice: todo salió bien, pero tuvimos que colocarle oxígeno al bebé. El padre, horrorizado, le dice: pero doctor, nosotros queríamos ponerle Gabriel.")
        break
    }

    if(numero == 5){
        alert("A Juanito le dice la maestra: Juanito, ¿qué harías si te estuvieses ahogando en la piscina? Juanito le responde: Me pondría a llorar mucho para desahogarme.")
        break
    }
    
} while (numero <= 5){
    alert("ESPERO QUE TE HAYA GUSTADO")
}

do{
    chiste2 = prompt("Ingrese 'CHISTES NEGROS' para otro contenido o 'ESC' para finalizar")
        if (chiste2 == "CHISTES NEGROS"){
        alert("NOOOOO ESOS CHISTE ACA NO JAJAJA")
        break
        }

        if (chiste2 == "ESC"){
        alert("Muy bien por no querer leer chistes inadecuados. Gracias")
        break
        }
} while (chiste2 == "CHISTES NEGROS" , "ESC"){
    alert("Ahora si, espero que te haya gustado. Te dejo una encuesta para valorar la pagina")
}

var risa = parseInt(prompt("Del 1 al 5 cuanta risa te dio el chiste"))
while (risa > 5){
    alert("Del 1 al 5 cuanta risa te dio el chiste")
    risa = parseInt(prompt("Del 1 al 5 cuanta risa te dio el chiste"))
}
var originalidad = parseInt(prompt("Del 1 al 5 cuanta originalidad tuvo la pagina"))
while (originalidad > 5){
    alert("Del 1 al 5 cuanta originalidad tuvo la pagina")
    originalidad = parseInt(prompt("Del 1 al 5 cuanta originalidad tuvo la pagina"))
}
var nota = risa + originalidad
console.log(nota)