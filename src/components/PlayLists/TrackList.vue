<template>
    <div class="react-contextmenu-wrapper">
       <div draggable="true">
            <li class="tracklist-row" role="button" tabindex="0">

                <div class="tracklist-col position-outer">
                    <div class="tracklist-play-pause tracklist-top-align">

                    </div>
                    <div class="position tracklist-top-align">

                    </div>
                </div>

                <div class="tracklist-col name">
                    <div class="track-name-wrapper ellipsis-one-line tracklist-top-align">
                        <span class="tracklist-name">Title</span>
                        <span class="second-line ellipsis-one-line">
                            <span>
                                <span class="react-contextmenu-wrapper">
                                    <span draggable="true">
                                        <a tabindex="-1" class="link-subtle" href="#">Artiste</a>
                                    </span>
                                </span>
                            </span>
                            <span class="second-line-separator" aria-label="in album">•</span>
                            <span class="react-contextmenu-wrapper">
                                <span draggable="true">
                                    <a tabindex="-1" class="link-subtle" href="#">Title</a>
                                </span>
                            </span>
                        </span>
                    </div>
                </div>

                <div class="tracklist-col more">
                    <div class="tracklist-top-align">
                        <div class="react-contextmenu-wrapper">
                            <button class="btn btn-transparent btn--narrow btn--no-margin btn--no-padding">
                                <div class="spoticon-ellipsis-24"></div>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="tracklist-col tracklist-col-duration">
                    <div class="tracklist-duration tracklist-top-align">
                        <span>3:26</span>
                    </div>
                </div>

            </li>
       </div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.react-contextmenu-wrapper {
    display: inline;
}

.tracklist-row {
    transition-property: background-color;
    transition-duration: .2s;
    transition-timing-function: linear;
    display: flex;
    height: 4.56em;
    list-style-type: none;
    user-select: none;
}

.tracklist-col.position-outer {
    font-feature-settings: "tnum";
    letter-spacing: 0;
    text-align: right;
    padding-right: 1em;
    width: 3em;
}

.tracklist-col {
    display: block;
    height: 4.56em;
}

.tracklist-top-align {
    margin-top: .5em;
}
.tracklist-play-pause {
    color: #fff;
    display: none;
}

.tracklist-top-align.position {
    margin-top: .69em;
}

.tracklist-col.name {
    text-align: left;
    flex: 1;
    width: 0;
    overflow: hidden;
}

.ellipsis-one-line {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.tracklist-top-align {
    margin-top: .5em;
}

.tracklist-name {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: .015em;
    color: #fff;
}

.track-name-wrapper .second-line {
    display: block;
}

.link-subtle {
    transition-property: color;
    transition-duration: .2s;
    transition-timing-function: linear;
    color: hsla(0,0%,100%,.6);
}
a, a:focus, a:hover {
    text-decoration: none;
}

.track-name-wrapper .second-line-separator {
    display: inline-block;
    transform: translateY(-1px);
    font-size: .8em;
    padding: 0 8px;
}

.tracklist-row .more {
    display: none;
    text-align: right;
    padding-right: 1em;
}

.btn.btn-transparent {
    background-color: transparent;
}
.btn--narrow {
    min-width: 50px;
}
.btn--no-padding {
    padding: 0;
}
.btn--no-margin {
    margin: 0;
}
.btn {
    font-size: 11px;
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: .16em;
    transition: none 33ms cubic-bezier(.3,0,.7,1);
    transition-property: all;
    color: #fff;
    display: inline-block;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    background-image: none;
    border: 0;
    border-radius: 500px;
    white-space: normal;
    will-change: transform;
    line-height: 1.6;
    vertical-align: middle;
    user-select: none;
}

.tracklist-col-duration {
    font-feature-settings: "tnum";
    letter-spacing: 0;
    text-align: right;
    padding-right: 1em;
    width: 3.9em;
}

</style>

