import {Howl, Howler} from 'howler';

export default class HowlerAudioEngine{

  constructor(){
    this.playing = null;
  }

  play(song){
    this.playing = new Howl({
      src: [song]
    });

    this.playing.play();
  }

  pause(){
    console.log('Pausing ', song);
  }

  stop(){
    if(this.playing !== null){
      this.playing.stop();
    }
  }
}