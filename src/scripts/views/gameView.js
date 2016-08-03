import React from 'react'
import Header from './header'
import ACTIONS from '../actions'
import GAME_STORE from '../store'
import {RandomArticleModel, RandomArticleCollection} from '../models/models'
import $ from 'jquery'

const GameView = React.createClass({

	getInitialState: function() {
		return GAME_STORE.getData()
	},

	// componentWillMount: function() {
	// 	ACTIONS.fetchArticleText(this.state.startColl)
	// 	GAME_STORE.on('updateComponent', () => {
	// 		this.setState(GAME_STORE.getData())
	// 	})


	// },

	render: function(){
		return (
			<div className = 'gameContainer'>
			<Header />
			<Sidebar endPoint = {this.state.endTitle}/>
			<WikiContainer articleHTML = {this.state.articleHTML}/>
			</div>
		)
	}
})

const Sidebar = React.createClass({

	getEndArticle: function(){
		ACTIONS.getEndArticle()
		return
	},


	render: function(){
		return (
			<div className = 'sidebar'>
				<h3>Goal: {this.props.endPoint.replace(/_/ig, ' ')} </h3>
				<h3> Clicks: 0 </h3>
				<h3> Time: </h3>
				<h3> Path: </h3>
			</div>
		)
	}
})

const WikiContainer = React.createClass({

	fetchArticleText: function(title) {
		ACTIONS.fetchArticleText(title)
		return
	},

	articleLink: function(clickEvent){
		clickEvent.preventDefault()

	},

	render: function() {
		return (
			<div className = 'wikiView'>
				<span dangerouslySetInnerHTML = {{__html: this.props.articleHTML}} onClick = {this.articleLink}/>
			</div>
		)
	}
})

export default GameView