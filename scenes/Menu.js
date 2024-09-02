export default class Menu extends Phaser.Scene {
    constructor() {
      super("main");
    }
    init(){ 
    }

    preload(){
    this.load.image("menuimg", "./public/backgroundbrillo.png");
    this.load.image("play", "./public/playb.png");
    }

    create(){   
    this.menuimg = this.add.image(500, 300, "menuimg");
    this.play = this.add.image(500, 300, "play").setInteractive();
  
    
    this.input.on('gameobjectover', (pointer, gameObject) =>
      {

          gameObject.setScale(1.1)

      });

      this.input.on('gameobjectout', (pointer, gameObject) =>
      {

          gameObject.setScale(1);

      });
    this.play.setInteractive();
    this.play.on("pointerdown", () =>{
      this.scene.start("Game");
    })
    }

    update () {


    }

}   