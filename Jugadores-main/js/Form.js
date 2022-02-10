class Form {
    constructor() {
        this.input = createInput("name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');
    }

    //Ocultar el formulario cuando cambia el estado del juego
    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
        

    display() {
        var title = createElement('h2');
        title.html("Carrera de Autos");
        //Centrado
        title.position(displayWidth/2 - 50, 0);

        this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);
        
        this.button.position(displayWidth/2 +30, displayHeight/2);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hola " + player.name);
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        });

    }
}