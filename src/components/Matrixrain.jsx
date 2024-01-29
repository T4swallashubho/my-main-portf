// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

export class Matrixrain extends Component {
  constructor(props) {
    super(props);
    this.state = { canvas: "" };
  }

  componentDidMount() {
    const canvas = document.getElementById("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // create context
    const ctx = canvas.getContext("2d");

    this.setState({ canvas: canvas });

    // create linear gradient styles.
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

    // Add three color stops
    gradient.addColorStop(0, "green");
    gradient.addColorStop(0.2, "yellow");
    gradient.addColorStop(0.5, "red");
    gradient.addColorStop(0.75, "blue");
    gradient.addColorStop(1, "orange");

    // we can create Linear gradient style either radial gradient style

    // create and draw individual symbol objects // manage the individual symbols
    class Symbols {
      constructor(x, y, fontSize, canvasHeight) {
        this.characters =
          "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        // choose random text string to be drawn
        this.text = "";
        this.canvasHeight = canvasHeight;
      }

      // this would actually draw the symbols on the screen
      draw(context) {
        this.text = this.characters.charAt(
          Math.random() * this.characters.length
        );
        context.fillStyle = gradient;
        // this would fill the canvas finally-with random text
        context.fillText(
          this.text,
          this.x * this.fontSize,
          this.y * this.fontSize
        );

        if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.9) {
          this.y = 0;
        } else {
          this.y += 1;
        }
      }
    }

    //create, update all symbols main wrapper around the rain effect. manage the entuire effect (all symbols drawn at once)
    class Effect {
      constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 14;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.#initialize();
      }

      // this is the private method in a class and is an example of abstraction concept for objects
      #initialize() {
        for (let i = 0; i < this.columns; i++) {
          // now each symbol will have access to public draw method from the Symbol class and all other properties mentioned.
          this.symbols[i] = new Symbols(i, 0, this.fontSize, this.canvasHeight);
        }
      }

      // to resize the effect as per the screen size
      resize(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
      }
    }

    const effect = new Effect(canvas.width, canvas.height);

    // we need to create animation effect // draw 60 times per second to create animation

    let lastTime = 0;
    let fps = 80;
    let timer = 0;
    const nextFrame = 1000 / fps;

    function animateLoop(timeStamp) {
      const deltaTime = timeStamp - lastTime;
      if (timer > nextFrame) {
        ctx.fillStyle = "rgba(0,0,0,.05)";
        ctx.font = effect.fontSize + "px  monospace";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = gradient;
        effect.symbols.forEach((symbol) => symbol.draw(ctx));
        timer = 0;
      } else {
        timer += deltaTime;
      }

      requestAnimationFrame(animateLoop);
    }

    // timer will only be available from second loop of animation frame onwards
    animateLoop(0);

    // on screen resize adjust the Effect of the Matrix

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      effect.resize(canvas.width, canvas.height);
    });
  }

  render() {
    return <>{this.state.canvas}</>;
  }
}

export default Matrixrain;
