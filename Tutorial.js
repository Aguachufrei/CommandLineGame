const IO = require("./IO");
const LoremIpsum = require("./LoremIpsum");


Tutorial();
async function Tutorial(){
    await IO.spell("A continuacion vamos a repasar ciertos controles basicos que seran necesarios para progresar en el juego",30,false);
    await IO.spell("Pulsa espacio para continuar de un dialogo a otro cuando este haya terminado, prueba ahora:",30,false);
    await IO.spell("Dialogo 1");
    await IO.spell("Dialogo 2");
    await IO.spell("Dialogo 3");
    await IO.spell("...",200,false);await IO.spell(" ¡Bien hecho! ",30,true,false);
    await IO.spell("Tambien puedes hacer que los textos largos se escriban del tiron presionando la letra espacio",30);
    await IO.spell("Prueba con el siguiente texto",30);
    await IO.spell(LoremIpsum.loremIpsum);
    await IO.say("");
    await IO.spell("Parece que se ha llenado la pantalla de texto")
    await IO.spell("Recuerda que puedes limpiar la pantalla usando ctrl + u")
    await IO.spell("Vamos a empezar aprendiendo a como responder preguntas",30);
    await IO.spell("Las preguntas se podran distinguir por estar entre los signos '¿' y '?'",30);
    await IO.spell("Seguida a la pregunta encontraras el simbolo '>' que indicara que ahora eres tu el que tiene que dar la respuesta");
    await IO.spell("El tipo de respuestas pueden variar desde un numero o una palabra hasta una frase entera");
    //await IO.askEqualLoop("Vale probemos, escribe ahora manzana","manzana","Veo que ya has comprendido como responder","Intentalo de nuevo, escribe 'manzana'");
    
}
