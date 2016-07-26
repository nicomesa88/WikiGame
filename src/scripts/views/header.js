import React from 'react'

const Header = React.createClass({
    render: function(){
        return (
            <div id = 'headerContainer'>
                <h1>Wiki Clicks</h1>
                <h3>The Wikipedia Game</h3>
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
                <a href = '#about'>About</a>
                <a href = '#login'>Log In</a>
            </div>
        )
    }
})

export default Header