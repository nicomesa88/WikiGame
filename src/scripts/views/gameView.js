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

	componentWillMount: function() {
		ACTIONS.setPath(this.props.startTitle, this.props.endTitle)
		ACTIONS.initClicks()
		GAME_STORE.on('updateComponent', () => {
			this.setState(GAME_STORE.getData())
		})
	},

	componentWillUnmount: function() {
		ACTIONS.initClicks()
		ACTIONS.initPath()
		GAME_STORE.off('updateComponent')
	},

	render: function(){
		return (
			<div className = 'gameContainer'>
			<Header />
			<Sidebar startPoint = {this.state.startTitle} endPoint = {this.state.endTitle} clicks = {this.state.clicks} path = {this.state.articlePath} endSum = {this.state.endSummary}/>
			<WikiContainer endPoint= {this.state.endTitle} articleHTML = {this.state.articleHTML}/>
			</div>
		)
	}
})

const Sidebar = React.createClass({

	getStartArticle: function(){
		ACTIONS.getStartArticle()
		return
	},

	getEndArticle: function(){
		ACTIONS.getEndArticle()
		return
	},


	render: function(){
		console.log(typeof GAME_STORE.data.articlePath)
		return (
			<div className = 'sidebar'>
				<h3>Goal: Get from {this.props.startPoint.replace(/_/ig, ' ')} to {this.props.endPoint.replace(/_/ig, ' ')} </h3>
				<p> {this.props.endPoint.replace(/_/ig, ' ')}: {this.props.endSum.split('. ')[0]}</p>
				<h3> Clicks: {this.props.clicks} </h3>
				{//<h3> Time: </h3>
				}
				<h3> Path: {this.props.path}</h3>

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
		if(clickEvent.target.tagName === 'A'){
			ACTIONS.fetchArticleText(clickEvent.target.title.replace(/ /g, '_'))
			return
		}
	},


	checkForWin:function(endingTitle){
		ACTIONS.checkForWin
		return
	},


	render: function() {
		return (
			<div className = 'wikiView'>
				<span dangerouslySetInnerHTML = {{__html: this.props.articleHTML}} onClick = {this.articleLink} />
			</div>
		)
	}
}

export default GameView