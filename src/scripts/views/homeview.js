import React from 'react'
import Header from './header'
import ACTIONS from '../actions'


const Article1 = React.createClass({
    render: function(){
        return(
            <div className = 'articel1'>
            </div>
        )
    }
})

const Article2 = React.createClass({
    render: function(){
        return(
            <div className = 'article2'>
            </div>
        )
    }
})

const ChallengeBox = React.createClass({
    render: function(){
        return (
            <div className = 'challegeBox'>
                <form onSubmit = ''>
                    <input type = 'text' name = 'name' placeholder = 'Enter Name'/>
                    <Article1/>
                    <Article2/>
                    <button type = 'submit'>PLAY</button>
                    <button>Pick Again</button>
                </form>
            </div>
        )
    }
})

const Home = React.createClass({
    render: function(){
        return (
            <div className = 'home'>
                <Header />
                <ChallengeBox />
            </div>
        )
    }
})

export default Home