const IO = require("./IO");
/* say(" .--.                                         .-.  .-.    _                .--.                       ")
say(": .--'                                        : :  : :   :_;              : .--'                      ")
say(": :    .--. ,-.,-.,-.,-.,-.,-. .--.  ,-.,-. .-' :  : :   .-.,-.,-. .--.   : : _  .--.  ,-.,-.,-. .--. ")
say(": :__ ' .; :: ,. ,. :: ,. ,. :' .; ; : ,. :' .; :  : :__ : :: ,. :' '_.'  : :; :' .; ; : ,. ,. :' '_.'")
say("`.__.'`.__.':_;:_;:_;:_;:_;:_;`.__,_;:_;:_;`.__.'  :___.':_;:_;:_;`.__.'  `.__.'`.__,_;:_;:_;:_;`.__.'")
say("-----------------------------------------------------")
say("-----------------------------------------------------") */
                                                                                                                                                                      
(async function(){
    //Command Line Game (2ms)
await IO.longSpell([
"   ____                                                                   ___       ____                                     ____                                     ",
"  6MMMMb/                                                                 `MM       `MM'     68b                            6MMMMb/                                   ",
" 8P    YM                                                                  MM        MM      Y89                           8P    YM                                   ",
"6M      Y   _____  ___  __    __  ___  __    __      ___   ___  __     ____MM        MM      ___ ___  __     ____         6M      Y    ___   ___  __    __     ____   ",
"MM         6MMMMMb `MM 6MMb  6MMb `MM 6MMb  6MMb   6MMMMb  `MM 6MMb   6MMMMMM        MM      `MM `MM 6MMb   6MMMMb        MM         6MMMMb  `MM 6MMb  6MMb   6MMMMb  ",
"MM        6M'   `Mb MM69 `MM69 `Mb MM69 `MM69 `Mb 8M'  `Mb  MMM9 `Mb 6M'  `MM        MM       MM  MMM9 `Mb 6M'  `Mb       MM        8M'  `Mb  MM69 `MM69 `Mb 6M'  `Mb ",
"MM        MM     MM MM'   MM'   MM MM'   MM'   MM     ,oMM  MM'   MM MM    MM        MM       MM  MM'   MM MM    MM       MM     ___    ,oMM  MM'   MM'   MM MM    MM ",
"MM        MM     MM MM    MM    MM MM    MM    MM ,6MM9'MM  MM    MM MM    MM        MM       MM  MM    MM MMMMMMMM       MM     `M',6MM9'MM  MM    MM    MM MMMMMMMM ",
"YM      6 MM     MM MM    MM    MM MM    MM    MM MM'   MM  MM    MM MM    MM        MM       MM  MM    MM MM             YM      M MM'   MM  MM    MM    MM MM       ",
" 8b    d9 YM.   ,M9 MM    MM    MM MM    MM    MM MM.  ,MM  MM    MM YM.  ,MM        MM    /  MM  MM    MM YM    d9        8b    d9 MM.  ,MM  MM    MM    MM YM    d9 ",
"  YMMMM9   YMMMMM9 _MM_  _MM_  _MM_MM_  _MM_  _MM_`YMMM9'Yb_MM_  _MM_ YMMMMMM_      _MMMMMMM _MM__MM_  _MM_ YMMMM9          YMMMM9  `YMMM9'Yb_MM_  _MM_  _MM_ YMMMM9  ",
"",
"",
"",
"",
"",
"",
"",
"",
],2);
await IO.longSpell([
"                                                                           Bienvenido Jugador",
"                                                             Este es un juego que se juega desde la terminal",
"                                             Antes de nada recuerda que puedes salir en cualquier momento presionando ctrl + z",
],15);
nombre = await IO.ask("como te llamas?");
await IO.spell("Hola " + nombre + " encantado de conocerte");











})();
