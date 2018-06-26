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
   * Gets the name of the playlist
   * @returns {*}
   */
  getName(){
      return this.name;
  }


  /**
   * Gets the thumbnail of the playlist
   * @returns {*}
   */
  getThumbnail(){
    if(this.songs.length > 0){
        // We return the thumbnail of the first song
        return this.songs[0].thumbnail;
    }

    // @TODO: Return a generic thumbnail for empty playlists
    return null;
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
