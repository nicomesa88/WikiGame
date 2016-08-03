import Backbone from 'backbone'
import _ from 'underscore'
import {RandomArticleCollection, RandomArticleModel} from './models/models'

const GAME_STORE = _.extend(Backbone.Events,{
	data:{
		collection: new RandomArticleCollection(),
		start: new RandomArticleModel(),
		startSummary: '',
		end: new RandomArticleModel(),
		endSummary: '',
		startTitle: "",
		endTitle: "",
		articleHTML: '',
		articlePath: [],
		gameTime: 0
	},

	getData: function(){
		return _.clone(this.data)
	},

	emitChange: function(){
		this.trigger('updateComponent')
	},

	set: function(prop,value) {
		console.log('setting ' + prop + ' with ' + value)
		if (this.data[prop] === undefined) {
			throw new Error("that thing don't exist in data")
		}
		this.data[prop] = value
		this.emitChange()
	},

	initialize: function() {
		this.data.start.on('sync update', this.emitChange.bind(this))
	}

})

GAME_STORE.initialize()

export default GAME_STORE