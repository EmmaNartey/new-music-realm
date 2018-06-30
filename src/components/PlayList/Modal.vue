<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <i class="times icon" @click="$emit('close')"></i>

                    <div class="modal-header">
                        <slot name="header">
                        default header
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">

                            <div v-show="!state.done">
                              <div class='ui inverted icon input'>
                                <input id='playlist-term' v-model="form.name" class='prompt' type='text' placeholder='Playlist Name'>
                              </div>

                              <button class="ui inverted blue button" @click="create" v-show="!state.processing">
                                Create
                              </button>
                              <i class="fa fa-spinner fa-spin fa-2x" v-show="state.processing"></i>
                            </div>
                          <div v-show="state.done">
                            <p>{{ form.name }} is created!</p>
                          </div>
                        </slot>
                    </div>

                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {

    data(){
      return{
        form: {
          name: ''
        },

        state: {
          processing: false,
          done: false
        }
      }
    },
    methods: {

        create(){

          // We indicate that we're processing
          this.state.processing = true;

          // We create the playlist
          if(this.form.name.length === 0){
            // User provided no name
              alert('Please provide a name for the playlist');

              // We indicate that processing is done!
              this.state.processing = false;
              return;
          }

          if(window.Playlists.exists(this.form.name)){
             alert('There is a playlist with this name. Please choose another name.');

             // We indicate that processing is done!
             this.state.processing = false;
             return;
          }

          window.Playlists.add(this.form.name);



          // We indicate that state.processing is done!
          this.state.processing = false;
          this.state.done = true;
          // We close the modal
          window.$emit('close');
        }

    }

}
</script>

<style scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 350px;
  height: 150px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.times.icon {
    float: right;
    color: #2185d0;
    cursor: pointer;
    margin-bottom: 20px;
}

.times.icon:hover {
    color: #033153d2;
}

.modal-header {
  margin-top: 10px;
  margin-bottom: 10px;
  color: #42b983;
}

.modal-body {
  margin: 40px 0;
}

.ui.input>input {
    background: #2185d0;
    color: #fff;
}

.ui.inverted.blue.button {
  float: right;
  padding: 0.9em 1.0em 0.9em;
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

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
