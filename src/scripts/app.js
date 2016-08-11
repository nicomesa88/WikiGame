import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import {RandomArticleModel, RandomArticleCollection} from './models/models'
import About from './views/aboutView'
import Home from './views/homeView'
import GameView from './views/gameView'

const app = function() {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'home':'handleHome',
			'game?start=:startArticle&end=:endArticle':'handleLiveGame',
			'about': 'handleAbout',
			'*cathAll': 'redirectHome'
		},

		handleAbout:function() {
			ReactDOM.render( <About/>, document.querySelector('.container'))
		},

		handleHome: function() {
			ReactDOM.render( <Home/>, document.querySelector('.container'))
		},

		handleLiveGame: function(startArticle, endArticle) {
			console.log(startArticle,endArticle)
			ReactDOM.render( <GameView articleHTML = {RandomArticleCollection} startTitle = {startArticle} endTitle = {endArticle}/>, document.querySelector('.container'))
		},

		redirectHome: function() {
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