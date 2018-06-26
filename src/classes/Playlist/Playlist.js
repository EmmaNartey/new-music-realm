/**
 * A playlist
 */
export default class Playlist{

    constructor(name, songs){
        this.name = name;
        this.songs = songs;
    }

  /**
   * Gets the number of songs in the playlist
   */
  getSongCount(){
        return this.songs.length;
  }

  /**
   * Removes a song from the playlist
   * @param song
   */
  remove(song){
      this.songs = this.songs.filter(currentSong => song.source !== currentSong.source);
  }

  /**
   * Adds a song to the playlist
   * @param song
   */
  add(song){
    this.songs.push(song);
  }

  /**
   * Gets the songs in the playlist
   * @returns {array}
   */
  getSongs(){
    return this.songs;
  }

  /**
   * Converts the playlist to json
   * @returns {{name: *, songs: *}}
   */
  toJson(){
      return {
        name: this.name,
        songs: this.songs
      }
  }

}
