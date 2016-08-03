let request = require('request')

let Router = require('express').Router;
const wikiRouter = Router()


wikiRouter.get('/article', function (req, ourResponse) {
  let apiURL = req.query.url.replace(/AMPERSAND/g,'&')
  console.log(apiURL)
  request(apiURL,function(err, apiResponse, body) {
    // console.log(err)
    // console.log('\n\n\n\n\n\n\n\n\n\n\n\nhere comes api response')
    // console.log(apiResponse)
    // console.log('\n\n\n\n\n\n\n\n\n\n\n\nhere comes body')
    // console.log(body)
    if (err) {
        ourResponse.status(500).send(err)
    }
    else {
        ourResponse.json(body)
    }
  })
});


module.exports = wikiRouter

// http://localhost:3000/wiki/article?url=https://en.wikipedia.org/w/api.php?action=parseAMPERSANDformat=jsonAMPERSANDprop=textAMPERSANDpage=Sara_Gambetta