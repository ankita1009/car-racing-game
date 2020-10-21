class Form{
    constructor() {
        this.title=createElement('h2');
        this.input = createInput("name");
        this.button=createButton('play');
        this.greeting=createElement('h3');
        this.restart=createButton('Restart')
    }

    hide() {
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
        this.title.hide();
    }
    display() {
        this.title.html('car racing game');
        this.title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.restart.position(displayWidth-100,20);
       
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html('hey '+ player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        })

        this.restart.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })
        

    }


}
