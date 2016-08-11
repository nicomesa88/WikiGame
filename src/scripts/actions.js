import GAME_STORE from './store'
import {RandomArticleModel, RandomArticleCollection, ArticleSumModel} from './models/models'
import $ from 'jquery'

const ACTIONS = {

	getStartArticle: function() {
		var startPoint = new RandomArticleModel()
		startPoint.fetch().then((response) => {
			var title = response.items[0].title
			GAME_STORE.set('startTitle',title)
			this.fetchArticleText(title)
			this.getStartSummary(title)
			this.checkForWin(title)
		})
	},

	getEndArticle: function() {
		var endPoint = new RandomArticleModel()
		endPoint.fetch().then((response) => {
			var endingTitle = response.items[0].title
			GAME_STORE.set('endTitle', endingTitle)
			this.getEndSummary(endingTitle)
			this.checkForWin(endingTitle)
			this.fetchArticleText(endingTitle)
		})
	},

	getStartSummary: function(title) {
		var sumURL = 'https://en.wikipedia.org/api/rest_v1/page/summary/'
		var promise = $.getJSON({
			url: `${sumURL + title}`
		})
		promise.then(function(response){
			console.log(response.extract)
			GAME_STORE.set('startSummary', response.extract)
		})
	},

	getEndSummary: function(endingTitle){
		var sumURL = 'https://en.wikipedia.org/api/rest_v1/page/summary/'
		var promise = $.getJSON({
			url: `${sumURL + endingTitle}`
		})
		promise.then(function(response){
			console.log(response.extract)
			GAME_STORE.set('endSummary', response.extract)
		})
	},

	fetchArticleText: function(title) {
		var articleURL = 'https://en.wikipedia.org/w/api.php'
		var promise = $.getJSON('/wiki/article', {
			url: `${articleURL}?action=parseAMPERSANDformat=jsonAMPERSANDprop=textAMPERSANDpage=${title}`
		})
		promise.then(function(response){
			var responseObj = JSON.parse(response)
			GAME_STORE.set('clicks', GAME_STORE.data.clicks += 1)
			GAME_STORE.set('articleHTML', responseObj.parse.text['*'])
			GAME_STORE.set('articlePath', GAME_STORE.data.articlePath += title.replace(/_/ig, ' ') + ', ')


		})
		if (title === GAME_STORE.data.endTitle) {
				alert('You Won!')
			}

	},

	setPath: function(startTitle, endTitle) {
		var articleURL = 'https://en.wikipedia.org/w/api.php'
		var promise = $.getJSON('/wiki/article', {
			url: `${articleURL}?action=parseAMPERSANDformat=jsonAMPERSANDprop=textAMPERSANDpage=${startTitle}`
		})
		promise.then(function(response){
			var responseObj = JSON.parse(response)
			GAME_STORE.set('articleHTML', responseObj.parse.text['*'])
			GAME_STORE.set('articlePath', GAME_STORE.data.articlePath += startTitle.replace(/_/ig, ' ') + ', ')
		})
		GAME_STORE.set('startTitle', startTitle)
		GAME_STORE.set('endTitle', endTitle)
		var sumURL = 'https://en.wikipedia.org/api/rest_v1/page/summary/'
		var promise = $.getJSON({
			url: `${sumURL + endTitle}`
		})
		promise.then(function(response){
			console.log(response.extract)
			GAME_STORE.set('endSummary', response.extract)
		})

	},

	initClicks: function() {
		GAME_STORE.set('clicks', 0)
	},

	initPath: function() {
		GAME_STORE.set('articlePath', ' ')
	},

	// checkForWin: function(endingTitle){
	// 	var articlePath = GAME_STORE.data.articlePath
	// 	for(var i = 0; i < articlePath.length; i++) {
	// 		if (articlePath[i].split(', ') === endingTitle.replace(/_/ig, ' ') + ', ') {
	// 			GAME_STORE.set('win', true)
	// 			alert(`You Win! You reached your goal in ${GAME_STORE.data.clicks}`)
	// 		}
	// 	}
	// }

}

export default ACTIONS