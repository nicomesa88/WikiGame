import React from 'react'
import GAME_STORE from '../store'
import ACTIONS from '../actions'



const Welcome = React.createClass({

	getInitialState: function() {
		return GAME_STORE.getData()
	},

	componentWillMount: function() {
		GAME_STORE.on('updateComponent', () => {
			this.setState(GAME_STORE.getData())
		})
	},

	letsplay: function(clickEvent) {
		clickEvent.preventDefault()
		if(clickEvent.target.tagName === 'A'){
			ACTIONS.letPlay()
			return
		}
	},

	render: function(){
		return (
			<div className = {this.state.welcomeShowing ? "welcomeBox":"welcomeBox hidden"} >
				<h1> Welcome to WikiClicks! </h1>
				<h3>The goal of this game is to get from one wikipedia article to another in as few clicks as possible. Make sure you read the summaries given at the beginning and get your mind ready to connect the dots.</h3>
				<h3>If you're ready to take this challenge on and to think in a new way, just click the button below!</h3>
				<a href = '#' onClick = {this.letsplay}>LET'S PLAY</a>
			</div>
		)
	}
})

export default Welcome