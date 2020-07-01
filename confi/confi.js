const confi = {
    VERSION: 1,
    BUILD: 1,
    URL: 'http://127.0.0.1',
    API_PATH : '/api',
    PORT: process.env.PORT || 3000,


/*
 * Get DB Connection String for connecting to MongoDB database
 */

getDBString : function() {
    return 'mongodb://'+ this.DB.HOST + ':' + this.DB.PORT+'/'+ this.DB.DATABASE
},

/*
* Get the http URL
*/

getHTTPUrl : function() {
    return 'http://' + this.URL + ":" + this.PORT
}

}
module.exports = confi ;