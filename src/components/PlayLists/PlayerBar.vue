<template>
    <div class="nowPlayingBar-container">
        <div class="now-playing-bar-container">
            <div class="now-playing-bar">
                <div class="now-playing-bar_left">
                    <div class="now-playing">
                        <span draggable="true">
                            <a href="" style="border: none;">
                                <div class="now-playing_cover-art">
                                    <div class="cover-art shadow" aria-hidden="true" style="width: 56px; height: 56px">
                                        <div>
                                            <div class="cover-art-image cover-art-image-loaded" style="background-image: url('');"></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </span>
                        <div class="track-info ellipsis-one-line">
                            <div class="track-info__name ellipsis-one-line">
                                <div class="react-contextmenu-wrapper">
                                    <span draggable="true">
                                        <a href="">Title</a>
                                    </span>
                                </div>
                            </div>
                            <div class="track-info__artists link-subtle ellipsis-one-line">
                                <div class="react-contextmenu-wrapper">
                                    <span draggable="true">
                                        <a href="">Artiste</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button class="control-button spoticon-add-16" title="Save to Playlist">
                            ::before
                        </button>
                    </div>
                </div>
                <div class="now-playing-bar_center">
                    <div class="player-controls">
                        <div class="player-controls__buttons">
                            <button class="control-button spoticon-shuffle-16" title="Enable shuffle">
                                :before
                            </button>
                            <button class="control-button spoticon-skip-back-16" title="Previous">
                                ::before
                            </button>
                            <button class="control-button spoticon-play-16 control-button--circled" title="Play">
                                ::before
                                ::after
                            </button>
                            <button class="control-button spoticon-skip-forward-16" title="Next">
                                ::before
                            </button>
                            <button class="control-button spoticon-repeat-16" title="Enable repeat">
                                ::before
                            </button>
                        </div>
                        <div class="playback-bar">
                            <div class="playback-bar__progress-time">0:38</div>
                            <div class="progress-bar">
                                <div class="middle-align progress-bar__bg">
                                    <div class="progress-bar__fg" style="width: 23.284%;"></div>
                                    <div class="middle-align progress-bar__slider" style="left: 23.284%;"></div>
                                </div>
                            </div>
                            <div class="playback-bar__progress-time">2:42</div>
                        </div>
                    </div>
                </div>
                <div class="now-playing-bar_right">
                    <div class="now-playing-bar__right__inner">
                        <div class="extra-controls">
                            <div class="volume-bar">
                                <button class="spoticon-volume-16 control-button volume-bar__icon" aria-label="Mute">
                                    ::before
                                </button>
                                <div class="progress-bar">
                                    <div class="middle-align progress-bar__bg">
                                        <div class="progress-bar__fg" style="width: 100%;"></div>
                                        <div class="middle-align progress-bar__slider" style="left: 100%;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'player-bar',

    data(){
        return{
            
        }
    }
}
</script>

<style>
.nowPlayingBar-container {
    background-color: #181818;
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 101;
}

.now-playing-bar-container {
    min-width: 620px;
    background-color: #282828;
    border-top: 1px solid #000;
    display: flex;
    flex-direction: column;
    height: auto;
    user-select: none;
}

.now-playing-bar {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 90px;
    padding: 0 16px;
}

.now-playing-bar__left {
    width: 30%;
    min-width: 180px;
}

.now-playing {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

[draggable] {
    user-select: none;
}

.now-playing__cover-art {
    flex-shrink: 0;
    margin-right: 14px!important;
}

.cover-art.shadow {
    box-shadow: 0 0 10px rgba(0,0,0,.3);
}

.cover-art {
    margin: 0;
    display: block;
    border: 0;
    outline: 0;
    position: relative;
    background-color: #282828;
}

.cover-art .cover-art-image-loaded {
    opacity: 1;
}

.cover-art .cover-art-image {
    transition-property: opacity;
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(.3,0,.4,1);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover!important;
    background-position: 50%;
}

.track-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
}

.ellipsis-one-line {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.track-info__name {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: .015em;
    color: #fff;
}

.react-contextmenu-wrapper {
    display: inline;
}

.track-info__artists {
    font-size: 11px;
    line-height: 16px;
    letter-spacing: .015em;
}
.link-subtle {
    transition-property: color;
    transition-duration: .2s;
    transition-timing-function: linear;
    color: hsla(0,0%,100%,.6);
}

.track-info__artists a:link, .track-info__artists a:visited {
    color: #b3b3b3;
}

.control-button {
    background-color: transparent;
    border: none;
    color: hsla(0,0%,100%,.6);
    width: 32px;
    min-width: 32px;
    height: 32px;
    position: relative;
}

.spoticon-add-16:before {
    content: "\F138";
    font-size: 16px;
}
[class*=" spoticon-"]:before, [class^=spoticon-]:before {
    font-family: glue1-spoticon;
    font-style: normal;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    line-height: inherit;
    vertical-align: bottom;
    display: inline-block;
    text-decoration: inherit;
}

.now-playing-bar__center {
    width: 40%;
    max-width: 722px;
}

.player-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.player-controls__buttons {
    margin-bottom: 12px;
    display: flex;
    width: 224px;
    justify-content: space-between;
    flex-flow: row nowrap;
}

.spoticon-shuffle-16:before {
    content: "\F144";
    font-size: 16px;
}

.spoticon-skip-back-16:before {
    content: "\F146";
    font-size: 16px;
}

.control-button--circled {
    transition: none 33ms cubic-bezier(.3,0,.7,1);
    transition-property: all;
}

.spoticon-play-16:before {
    content: "\F132";
    font-size: 16px;
}

.control-button--circled:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 500px;
    border: 1px solid hsla(0,0%,100%,.6);
}

.spoticon-skip-forward-16:before {
    content: "\F148";
    font-size: 16px;
}

.spoticon-repeat-16:before {
    content: "\F13E";
    font-size: 16px;
}

.playback-bar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.playback-bar__progress-time {
    font-size: 11px;
    line-height: 16px;
    letter-spacing: .015em;
    min-width: 40px;
    text-align: center;
}

.progress-bar {
    height: 12px;
    position: relative;
    width: 100%;
}

.progress-bar__bg {
    background-color: #404040;
    border-radius: 2px;
    display: flex;
    height: 4px;
    width: 100%;
}

.middle-align {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.progress-bar__fg {
    transition-property: background-color;
    transition-duration: .1s;
    transition-timing-function: cubic-bezier(1,0,.7,1);
    background-color: #b3b3b3;
    border-radius: 2px;
    height: 4px;
}

.progress-bar__slider {
    transition-property: transform;
    transition-duration: .1s;
    transition-timing-function: cubic-bezier(1,0,.7,1);
    background-color: #fff;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    margin-top: -6px;
    z-index: 100;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
    transform: scale(0);
}

.middle-align.progress-bar__slider {
    position: absolute;
    top: 50%;
}

.playback-bar__progress-time {
    font-size: 11px;
    line-height: 16px;
    letter-spacing: .015em;
    min-width: 40px;
    text-align: center;
}

.now-playing-bar__right {
    width: 30%;
    min-width: 180px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.now-playing-bar__right__inner {
    width: 180px;
}

.extra-controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.volume-bar {
    align-items: center;
    width: 136px;
    display: flex;
}

.volume-bar__icon {
    margin-right: 2px;
}

.spoticon-volume-16:before {
    content: "\F15E";
    font-size: 16px;
}

.progress-bar {
    height: 12px;
    position: relative;
    width: 100%;
}

.progress-bar__bg {
    background-color: #404040;
    border-radius: 2px;
    display: -ms-flexbox;
    display: flex;
    height: 4px;
    width: 100%;
}

.progress-bar__fg {
    transition-property: background-color;
    transition-duration: .1s;
    transition-timing-function: cubic-bezier(1,0,.7,1);
    background-color: #b3b3b3;
    border-radius: 2px;
    height: 4px;
}

.progress-bar__slider {
    transition-property: transform;
    transition-duration: .1s;
    transition-timing-function: cubic-bezier(1,0,.7,1);
    background-color: #fff;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    margin-top: -6px;
    z-index: 100;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
    transform: scale(0);
}
</style>
