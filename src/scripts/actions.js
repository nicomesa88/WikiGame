import GAME_STORE from './store'
import {RandomArticleModel} from './models/models'

const ACTIONS = {

	getStartArticle: function() {
		var startPoint = new RandomArticleModel()
		startPoint.fetch().then(function(response){
			console.log(response.items[0].title)
			GAME_STORE.set('startTitle',response.items[0].title)
		})
	},

	getEndArticle: function() {
		var endPoint = new RandomArticleModel()
		endPoint.fetch().then(function(response){
			console.log(response.items[0].title)
			GAME_STORE.set('endTitle',response.items[0].title)
		})
	}

}

export default ACTIONS