class Amplifier {
  public turnOn(): void {
    console.log("Amplifier: Turn ON");
  }
  public setVolume(level: number): void {
    console.log(`Amplifier Setting Volume : ${level}`);
  }
}

class DvdPlayer {
  public turnOn(): void {
    console.log("DvdPlayer: Turn ON");
  }
  public play(movie: string): void {
    console.log(`Playing Movie :${movie}`);
  }
}

class Projector {
  public turnOn(): void {
    console.log("Projector: Turn ON");
  }
  public setInput(dvdPlayer: DvdPlayer): void {
    console.log("Setting Input for DVD Player");
  }
}

class Lights {
  public toggle(): void {
    console.log("Toggling the Lights");
  }
  public dim(level: number): void {
    console.log(`Dimming the light to level : ${level}`);
  }
}

class HomeTheaterFacade {
  constructor(
    private amplifier: Amplifier,
    private dvdPlayer: DvdPlayer,
    private projector: Projector,
    private lights: Lights
  ) {}

  watchMovie(movie: string): void {}
}

// Using the classes

const amplifier = new Amplifier();
const lights = new Lights();
const dvdPlayer = new DvdPlayer();
const projector = new Projector();

const homeTheater = new HomeTheaterFacade(
  amplifier,
  dvdPlayer,
  projector,
  lights
);

homeTheater.watchMovie("");
