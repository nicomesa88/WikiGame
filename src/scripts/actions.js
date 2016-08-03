import GAME_STORE from './store'
import {RandomArticleModel, RandomArticleCollection} from './models/models'
import $ from 'jquery'

const ACTIONS = {

	getStartArticle: function() {
		var startPoint = new RandomArticleModel()
		startPoint.fetch().then((response) => {
			var title = response.items[0].title
			GAME_STORE.set('startTitle',title)
			this.fetchArticleText(title)
		})
	},

	getEndArticle: function() {
		var endPoint = new RandomArticleModel()
		endPoint.fetch().then(function(response){
			console.log(response.items[0].title)
			GAME_STORE.set('endTitle', response.items[0].title)
		})
	},

	fetchArticleText: function(title) {
		var articleURL = 'https://en.wikipedia.org/w/api.php'
		var promise = $.getJSON('/wiki/article', {
			url: `${articleURL}?action=parseAMPERSANDformat=jsonAMPERSANDprop=textAMPERSANDpage=${title}`
		})
		promise.then(function(response){
			console.log('article response')
			console.log(response)
			var responseObj = JSON.parse(response)
			GAME_STORE.set('articleHTML', responseObj.parse.text['*'])
		})

	},


	changeArticle: function(){

	}

}

export default ACTIONS