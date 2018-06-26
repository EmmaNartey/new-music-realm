/**
 * The playlist key in storage
 * @type {string}
 */
const PLAYLIST_KEY = 'MUSIC_REALM_PLAYLIST';

/**
 * Local Storage Repository
 * This class stores the playlist in the
 * user's local storage (browser)
 */
export default class LocalRepository{


  /**
   * We load the playlists from the browser's local storage
   * @returns {*}
   */
  load(){
        const playlists = window.docCookies.getItem(PLAYLIST_KEY);

        if(playlists === null) return [];
        return JSON.parse(playlists);
  }

  /**
   * Creates a new playlist
   * @param name
   * @param songs
   */
  create(name, songs = []){
      const playlists = this.load();
      playlists.push({
        name: name,
        songs: songs
      });
      this._save(playlists);
  }

  /**
   * Saves the playlists
   * @param playlists
   * @private
   */
  _save(playlists){
    window.docCookies.setItem(PLAYLIST_KEY, JSON.stringify(playlists), Infinity);
  }

  /**
   * Checks if a name already exists
   * @param name
   * @returns {boolean}
   */
  exists(name){
      const match = this.load().filter(playlist => playlist.name === name);
      return match.length > 0;
  }

  /**
   * Removes a playlist
   * @param name
   */
  remove(name){
    const remaining = this.load().filter(playlist => playlist.name !== name);
    this._save(remaining);
  }

  /**
   * Gets a playlist by name
   * @param name
   */
  get(name){
      const found = this.load().filter(playlist => playlist.name === name);
      return found.length > 0 ? found[0] : null;
  }

  /**
   * Updates a playlist with songs
   * @param name
   * @param songs
   */
  update(name, songs){

    /**
     * We remove the existing one.
     * This is because we don't anticipate
     * a lot of music in one playlist
     */
    this.remove(name);

      // We add the new playlist
      this.create(name, songs);
  }

}
