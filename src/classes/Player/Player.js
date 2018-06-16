import HowlerAudioEngine from './HowlerAudioEngine';

export default class Player{

  /**
   * The player instance
   * @type {Player}
   * @private
   */
  static _instance = null;

  constructor(songs = []){
    this.songs = songs;
    this.queued = songs;

    // We set the player engine
    this.engine = new HowlerAudioEngine();
  }

  play(){
    if(this.queued.length > 0){
      // We play the next item in the queue
      this.engine.play(this.queued.shift())
    }
  }

  pause(){
    this.engine.pause();
  }

  stop(){
    this.engine.stop();
  }

  shuffle() {

    let shuffled = [];

    // We shuffle the songs in the queue
    for(let i = 0; i < this.queued.length; i++){

      // We pick a random index from the remaining songs
      const randomIndex = Math.floor((Math.random()) * (this.queued.length - i - 1));

      // Add the song at the random index not already selected
      shuffled.push(this.queued.filter(song => !Array.isArray(shuffled))[randomIndex]);
    }

    this.queued = shuffled;

    // We play the first track
    this.play();
  }


  static getInstance(songs){

    if(!Array.isArray(songs)){
      songs = [songs];
    }

    // We make an instance if we don't already
    // have an instance
    if(Player._instance === null){
      Player._instance = new Player(songs);
    }else{

      // We set the songs of the player
      Player._instance.songs = songs;
      Player._instance.queued = songs;
    }

    Player._instance.stop();

    return Player._instance;
  }

}
