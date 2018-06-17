
import {Howl, Howler} from 'howler';

export default class HowlerAudioEngine{

  constructor(){
    this.playing = null;
    this.currentSong = null;
  }

  play(song){

    if(this.playing !== null){

        // There's already a song playing
        // We fade out that song and stop it
        // eventually
        const current = this.playing;
        current.fade(1, 0, 4000);

        setInterval(function(){
            current.stop();
        }, 5000);

    }

    this.currentSong = song;

    this.playing = new Howl({
      src: [this.currentSong]
    });

    this.playing.play();
  }

  pause(){
    if(this.playing !== null){
      this.playing.pause();
    }
  }

  stop(){
    if(this.playing !== null){
      this.playing.stop();
    }
  }

  /**
   * Gets the currently playing song
   * @returns {null|Howl}
   */
  getNowPlaying(){
    return this.currentSong;
  }
}
