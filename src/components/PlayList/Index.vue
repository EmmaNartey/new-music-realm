<template>
    <div>

        <div class="ui stackable five cards" v-show="playlists.length > 0">
            <div class='ui card' v-for="playlist in playlists" :key="playlist.id">
                <playlist-card :playlist="playlist" :key="playlist.id"></playlist-card>
            </div>
        </div>

        <div class="no-playlists" v-show="playlists.length === 0">
            <p class="text-danger"><i class="microphone slash icon"></i>No Playlists found!</p>
        </div>

        <div id="app">
            <button class="ui inverted blue button" id="show-modal" @click="showModal = true">Create Playlist</button>
            <!-- use the modal component, pass in the prop -->
            <modal v-if="showModal" @close="showModal = false">
                <!--
                you can use custom content here to overwrite
                default content
                -->
                <h3 slot="header">Create Your Playlist</h3>
            </modal>
        </div>

  </div>
</template>

<script>
import PlayListCard from "./PlayListCard";
import Modal from "./Modal";

export default {
    components: {
        'playlist-card': PlayListCard,
        'modal': Modal
    },

    data(){
        return{
            // The actively shown playlists
            playlists: [],

            showModal: false

        }
    }
}
</script>

<style scoped>

h3 {
  margin-top: 10px;
  color: #2185d0;
  text-align: center;
}

.no-playlists {
    font-weight: bold;
    color: aliceblue;
    text-align: center;
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
}

.ui.inverted.blue.button, .ui.inverted.blue.buttons .button {
    color: #2185d0;
    box-shadow: 0 0 0 2px #2185d0 inset!important;
}

.ui.inverted.blue.button:focus, .ui.inverted.blue.buttons .button:focus {
    background-color: #2185d0;
    color: #fff;
}

.ui.inverted.blue.button:hover, .ui.inverted.blue.buttons .button:hover {
    background-color: #2185d0;
    color: #fff;
}

</style>
