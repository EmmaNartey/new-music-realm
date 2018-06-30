<template>
    <div class="ui segment">
        <div class="ui stackable grid">

            <div class="four wide column grid">
                <img id="cover" class="ui fluid image" src="https://i0.wp.com/www.dcleakers.com/wp-content/uploads/2018/01/loyalty.jpg?resize=400%2C434">
                <h2 class="ui header">Bigdee</h2>
                <span class="no-of-songs">9 Songs</span>

                <div class="ui divider"></div>

                <div class="ui centered grid">
                    <button class="btn btn-blue">Play</button>
                </div>

                <div class="ui divider"></div>

                <div class="horizontal-list tracklist-header__extra-buttons">
                    <div class="react-contextmenu-wrapper">
                        <button class="btn btn-transparent btn--narrow" title="More">
                            <i class="ellipsis horizontal icon"></i>
                        </button>                      
                    </div>
                </div>

            </div>

            <div class="eight wide column">
                <ol>
                    <div class="react-contextmenu-wrapper">

                    </div>
                </ol>
            </div>

        </div>
    </div>    
</template>

<style>
.ui.header {
    text-align: center;
}

.ui.centered.grid {
    margin-top: 10px;
    margin-bottom: 30px
}

.btn.btn-blue {
    background-color: #2185d0;
    padding: 11px 44px;
    cursor: pointer;
}

.btn {
    font-size: 11px;
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: .16em;
    transition: none 33ms cubic-bezier(.3,0,.7,1);
    transition-property: all;
    color: #fff;
    margin-top: 16px;
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    touch-action: manipulation;
    background-image: none;
    border: 0;
    border-radius: 500px;
    min-width: 130px;
    white-space: normal;
    will-change: transform;
    line-height: 1.6;
    vertical-align: middle;
    user-select: none;
}

.horizontal-list {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px
}

.react-contextmenu-wrapper {
    display: inline;
}

.btn.btn-transparent {
    background-color: transparent;
}
.btn--narrow {
    min-width: 50px;
}

.ellipsis.icon {
    color: black;
    font-weight: bold;
    font-size: 1.8em;
    cursor: pointer;
    line-height: inherit;
    letter-spacing: -.005em;
}
</style>


