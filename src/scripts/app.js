import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import {RandomArticleModel, RandomArticleCollection} from './models/models'

import About from './views/aboutView'
import Home from './views/homeView'
import GameView from './views/gameView'
import LoginView from './views/loginView'

console.log('yolo4')

const app = function() {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'':'handleHome',
			'game?start=:startArticle&end=:endArticle':'handleLiveGame',
			'about': 'handleAbout',
			'login': 'handleLogin',
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
			ReactDOM.render( <GameView articleHTML = {RandomArticleCollection}/>, document.querySelector('.container'))
		},

		handleLogin:function() {
			ReactDOM.render( <LoginView/>, document.querySelector('.container'))
		},

		redirectHome: function() {
			location.hash = ''
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