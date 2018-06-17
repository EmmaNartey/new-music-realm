import HowlerAudioEngine from './HowlerAudioEngine';

export default class Player{

  static _songs = [];
  static _queued = [];
  static _engine = new HowlerAudioEngine();

  static play(songs){

    if(!Array.isArray(songs)){
        songs = [songs];
    }

    Player._queued = songs;

    if(Player._queued.length > 0){
      // We play the next item in the queue
      Player._engine.play(Player._queued.shift())
    }
  }

  static pause(){
    Player._engine.pause();
  }

  static stop(){
    Player._engine.stop();
  }

  static shuffle() {

    let shuffled = [];

    // We shuffle the songs in the queue
    for(let i = 0; i < Player._queued.length; i++){

      // We pick a random index from the remaining songs
      const randomIndex = Math.floor((Math.random()) * (Player._queued.length - i - 1));

      // Add the song at the random index not already selected
      shuffled.push(Player._queued.filter(song => !Array.isArray(shuffled))[randomIndex]);
    }

    // We play the first track
    Player.play(shuffled);
  }

  /**
   * Gets the currently playing song
   * @returns {Howl}
   */
  static getNowPlaying(){
      return Player._engine.getNowPlaying();
  }

}
