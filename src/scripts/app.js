import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

import Home from './views/homeView'
import GameView from './views/gameView'


const app = function() {
    var AppRouter = Backbone.Router.extend({
        routes: {
            'home':'handleHome',
            'game/play':'handleLiveGame',
            '*cathAll': 'redirectHome'
        },

        handleHome: function () {
            ReactDOM.render( <Home/>, document.querySelector('.container'))
        },

        handleLiveGame: function () {
            ReactDOM.render( <GameView />, document.querySelector('.container'))
        },

        redirectHome: function () {
            location.hash = 'home'
        },

        initialize: function(){
            Backbone.history.start()
        }
    })
    new AppRouter()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..