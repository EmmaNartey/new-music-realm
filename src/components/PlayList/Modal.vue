<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                        default header
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                        <input type="text" placeholder="Playlist Name">
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                        <button class="ui inverted blue button" @click="$emit('close')">
                            Create
                        </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    
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
  width: 400px;
  height: 200px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.ui.inverted.blue.button {
  float: right;
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
