import React from 'react'
import Header from './header'
import ACTIONS from '../actions'
import {RandomArticleModel, RandomArticleCollection} from '../models/models'
import GAME_STORE from '../store'

console.log('homeview hi')

const Home = React.createClass({

	getInitialState: function() {
		return GAME_STORE.getData()
	},

	componentWillMount: function(){
		ACTIONS.getStartArticle()
		ACTIONS.getEndArticle()
		GAME_STORE.on('updateComponent',() => {
			this.setState(GAME_STORE.getData())
		})
	},

	componentWillUnmount: function() {
		GAME_STORE.off('updateComponent')
	},

	render: function(){
		return (
			<div className = 'home'>
				<Header />
				<ChallengeBox startColl = {this.state.startTitle} endColl = {this.state.endTitle}/>
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
				<StartPoint startColl = {this.props.startColl}/>
				<EndPoint endColl = {this.props.endColl}/>
				{//<button>PICK AGAIN</button>/
				}
				<a href = {`#game?start=${this.props.startColl}&end=${this.props.endColl}`}>PLAY</a>
			</div>
		)
	}
})

const StartPoint = React.createClass({

	getStartPoint: function(){
		ACTIONS.getStartArticle()
		return
	},

	render: function(){
		return(
			<div className = 'startPoint'>
			<h3>Start: {this.props.startColl.replace(/_/ig, ' ')}</h3>
			</div>
		)
	}
})

const EndPoint = React.createClass({

	getEndPoint: function(){
		ACTIONS.getEndPoint()
		return
	},

	render: function(){
		return(
			<div className = 'endPoint'>
			<h3>End Point: {this.props.endColl.replace(/_/ig, ' ')}</h3>
			</div>
		)
	}
})

export default Home