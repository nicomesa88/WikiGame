import React from 'react'

const Header = React.createClass({
	render: function(){
		return (
			<div id = 'headerContainer'>
				<h1>Wiki Clicks</h1>
				<h2>The Wikipedia Game</h2>
				<NavBar />
			</div>
		)
	}
})

const NavBar = React.createClass({
	render: function(){
		return (
			<div id = 'navBar'>
				<a href = '#home'>Home</a>
			</div>
		)
	}
})

export default Header