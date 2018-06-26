import LocalRepository from "./LocalRepository";
import Playlist from "./Playlist";

/**
 * Playlist Manager
 */
export default class PlaylistManager{

  constructor(){
      this.repository = new LocalRepository;
  }

  /**
   * Gets all the playlists
   */
  all(){
      const playlists = this.repository.load();
      return playlists.map(playlist => new Playlist(playlist.name, playlist.songs));
  }

  /**
   * Gets a playlist by name
   * @param name
   * @returns {*}
   */
  get(name){
      const found = this.repository.get(name);
      if(found !== null) return new Playlist(found.name, found.songs);
      return null;
  }

  /**
   * Checks if a playlist name exists
   * @param name
   * @returns {boolean}
   */
  exists(name){
      return this.repository.exists(name);
  }

  /**
   * Creates a new playlist
   * @param name
   * @param songs
   */
  add(name, songs = []){
      this.repository.create(name, songs);
  }

  /**
   * Removes a playlist
   * @param name
   */
  remove(name){
      this.repository.remove(name);
  }

  /**
   * Updates a playlist
   * @param name
   * @param songs
   */
  update(name, songs){
      this.repository.update(name, songs);
  }

}
