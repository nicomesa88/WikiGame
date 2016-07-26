import React from 'react'

const Header = React.createClass({
    render: function(){
        return (
            <div id = 'headerContainer'>
                <h1>WikiClicks</h1>
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
                <a>Home</a>
                <a>About</a>
                <a>Log In</a>
            </div>
        )
    }
})

export default Header