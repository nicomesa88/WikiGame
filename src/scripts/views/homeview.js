import React from 'react'
import Header from './header'
import ACTIONS from '../actions'
import {RandomArticleModel, RandomArticleCollection, ArticleSumModel} from '../models/models'
import GAME_STORE from '../store'

console.log('homeview hiloyo')

const Home = React.createClass({

	getInitialState: function() {
		return GAME_STORE.getData()
	},

	componentWillMount: function(){
		ACTIONS.initClicks()
		ACTIONS.getStartArticle()
		ACTIONS.getEndArticle()
		ACTIONS.getStartSummary()
		ACTIONS.getEndSummary()
		GAME_STORE.on('updateComponent',() => {
			this.setState(GAME_STORE.getData())
		})
	},

	componentWillUnmount: function() {
		ACTIONS.initClicks()

		GAME_STORE.off('updateComponent')
	},

	render: function(){
		return (
			<div className = 'home'>
				<Header />
				<ChallengeBox startColl = {this.state.startTitle} endColl = {this.state.endTitle} startSum = {this.state.startSummary} endSum = {this.state.endSummary}/>
			</div>
		)
	}
})

const ChallengeBox = React.createClass({


	render: function(){
		console.log(`#game?start=${this.props.startColl}&end=${this.props.endColl}`)
		return (
			<div className = 'challegeBox'>
				{//<input type = 'text' name = 'name' placeholder = 'Enter Name'/>
			}
				<StartPoint startColl = {this.props.startColl} startSum = {this.props.startSum}/>
				<EndPoint endColl = {this.props.endColl} endSum = {this.props.endSum}/>
				<a href = {`#game?start=${this.props.startColl}&end=${this.props.endColl}`}>PLAY</a>
			</div>
		)
	}
})

const StartPoint = React.createClass({

	getStartPoint: function() {
		ACTIONS.getStartArticle()
		return
	},

	getStartSum: function() {
		ACTIONS.getStartSummary()
		return
	},


	render: function(){
		return(
			<div className = 'startPoint'>
			<h3>Start: {this.props.startColl.replace(/_/ig, ' ')}</h3>
			<p>Summary: {this.props.startSum}</p>
			</div>
		)
	}
})

const EndPoint = React.createClass({

	getEndPoint: function() {
		ACTIONS.getEndArticle()
		return
	},

	getEndSum: function() {
		ACTIONS.getEndSummary()
		return
	},

	render: function() {
		return(
			<div className = 'endPoint'>
			<h3>End Point: {this.props.endColl.replace(/_/ig, ' ')}</h3>
			<p>Summary: {this.props.endSum}</p>
			</div>
		)
	}
})

export default Home