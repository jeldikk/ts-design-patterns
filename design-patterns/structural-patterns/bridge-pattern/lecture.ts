/**
 * Bridge pattern is a structural design pattern that lets you split a large class or a set of closely related classes into two
 * seperate hierarchies - abstraction and implementation - which can be developed independently of each other.
 */

interface MediaPlayerImplementation {
  playAudio(): void;
  playVideo(): void;
}

class WindowMediaPlayer implements MediaPlayerImplementation {
  playAudio(): void {
    console.log("Playing Audio on Windows Media Player");
  }

  playVideo(): void {
    console.log("Playing Video on Windows Media Player");
  }
}

class MacOSMediaPlayer implements MediaPlayerImplementation {
  playAudio(): void {
    console.log("Playing Audio from MacOSMediaPlayer");
  }

  playVideo(): void {
    console.log("Playing Video on MacOSMediaPlayer");
  }
}

abstract class MediaPlayerAbstraction {
  constructor(protected implementation: MediaPlayerImplementation) {}

  public abstract playFile(): void;
}

class AudioPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playAudio();
  }
}

class VideoPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playVideo();
  }
}

//Using the classes

const windowsMediaPlayer = new WindowMediaPlayer();
const macOsPlayer = new MacOSMediaPlayer();
const audioPlayer = new AudioPlayer(windowsMediaPlayer);
const videoPlayer = new VideoPlayer(macOsPlayer);

audioPlayer.playFile();
videoPlayer.playFile();
