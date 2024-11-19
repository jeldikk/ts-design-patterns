// abstract class Button {
//   public abstract render(): void;
//   public abstract onClick(func: Function): void;
// }
interface Button {
  render(): void;
  onClick(func: Function): void;
}

class WindowsButton implements Button {
  render() {
    console.log("WindowsButton: Rendered");
  }

  public onClick(func: Function): void {
    console.log("WindowsButton: Clicked");
  }
}

class MacOSButton implements Button {
  render() {
    console.log("MacOSButton: Rendered");
  }
  public onClick(func: Function): void {
    console.log("MacOSButton: Clicked");
  }
}

// abstract class Checkbox {
//   public abstract render(): void;
//   public abstract toggle(): void;
// }
interface Checkbox {
  render(): void;
  toggle(): void;
}

class WindowsCheckbox implements Checkbox {
  public render(): void {
    console.log("WindowsCheckbox: Rendered");
  }

  public toggle(): void {
    console.log("WindowsCheckbox: Toggled");
  }
}

class MacOSCheckbox implements Checkbox {
  public render(): void {
    console.log("MacOSCheckbox: Rendered");
  }

  public toggle(): void {
    console.log("MacOSCheckbox: Toggled");
  }
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(button: Button): Checkbox;
}

class WindowsFactory implements GUIFactory {
  createButton(): WindowsButton {
    return new WindowsButton();
  }
  createCheckbox(button: WindowsButton): WindowsCheckbox {
    return new WindowsCheckbox();
  }
}

class MacOSFactory implements GUIFactory {
  createButton(): MacOSButton {
    return new MacOSButton();
  }
  createCheckbox(button: MacOSButton): MacOSCheckbox {
    return new MacOSCheckbox();
  }
}
