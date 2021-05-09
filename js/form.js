class Form{
    constructor(){
this.input = createInput('Enter Your Name');
this.button = createButton('Click To Play');
this.title = createElement('H1');
this.greeting = createElement('H1');
    }

  display(){
      this.input.position(150,250);
      this.button.position(300,250);
      this.title.position(150,100);  
      this.title.html("Racecar Racing");
// arrow function
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          var name = this.input.value();
          playerCount+=1;
          this.greeting.html("Welcome " + name + " to the racecar game!")
          this.greeting.position(50,250);
          player.updateName(name);
          player.updateCount(playerCount);
     })
  }  
}