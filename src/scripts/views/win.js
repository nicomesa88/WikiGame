import React from 'react'
import GAME_STORE from '../store'
import ACTIONS from '../actions'

const Win = React.createClass({

	getInitialState: function() {
		return GAME_STORE.getData()
	},

	componentWillMount: function() {
		GAME_STORE.on('updateComponent', () => {
			this.setState(GAME_STORE.getData())
		})
	},

	winReset: function(clickEvent) {
		if(clickEvent.target.tagName === 'A'){
			ACTIONS.winStoreReset()
			return
		}
	},

	render: function(){
		return (
			<div className = {this.state.win ? "winBox":"winBox hidden"} >
				<h1> CONGRATS! YOU WON! </h1>
				<h3>You made it to the goal in {this.state.clicks} clicks.</h3>
				<h3>Reload the page to try to beat your score, or copy and past the URL to challenege a friend.  If you would like to play a new game click the button below</h3>
				<a href = '#home' onClick = {this.winReset}>PLAY</a>
			</div>
		)
	},

	something: function(){

	}
})




export default Win