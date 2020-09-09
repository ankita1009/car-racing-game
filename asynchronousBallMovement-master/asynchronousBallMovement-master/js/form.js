class Form{
    constructor() {

    }
    display() {
        var title=createElement('h2');
        title.html('car racing game');
        title.position(200,100);
        var input = createInput("name");
        input.position(200,250);
        var button=createButton('play');
        button.position(200,300);
        var greeting=createElement('h3');
        greeting.position(200,350);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html('hey '+ name);
        })
    }
}