let nombre = prompt ("Ingrese su Nombre Aqui!");

let portaLlavero = 4500;
let adornoTorta = 2500;
let maquetas = 4300;
let servilletero = 3500;

alert ("Bienvenido/a " + nombre);
alert ("Somos Creaciones Irina Algo Diferente en Souvenires")

let pedido = prompt ("¿Desea que lo guiemos en la eleccion de sus Productos? Ingrese SI o NO"); 

if ((pedido === "no") || (pedido === "No") || (pedido === "NO") || (pedido === "nO")){
    
    alert (" Esperemos Vuelvas Pronto a ver Nuestros Productos, Estamos a su Disposicion!");
    }
    else {
        let pedido = prompt ("Estos son nuestros Productos: porta llaveros / adornos de torta / maquetas / servilleteros");
        
        switch (pedido) {
            
            case "porta llaveros":
            alert ("Gracias Por Su Eleccion. Su Total es de: $ " + portaLlavero);
            break;


            case "adornos de torta":
            alert ("Gracias Por Su Eleccion. Su Total es de: $ " + adornoTorta);
            break;


            case "maquetas":
            alert ("Gracias Por Su Eleccion. Su Total es de: $ " + maquetas);
            break;


            case "servilleteros":
            alert ("Gracias Por Su Eleccion. Su Total es de: $ " + servilletero);
            break; }
    }
    
    
    function termino (){
        alert (nombre + " Estamos Preparando su pedido Espero sea de su Agrado!")
    }
    termino ()