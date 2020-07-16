// nuestro archivo de configuracion contiene  puerto, URL y funciones 


const confi = {
    VERSION: 1,
    BUILD: 1,
    URL: 'http://127.0.0.1',
    API_PATH : '/api',
    PORT: process.env.PORT || 3000,
    DB: {
        //MongoDB configuration
        HOST : 'localhost',
        PORT : '27017',
        DATABASE : 'myapp'
    },

/*
 * get DB Connection String for connecting to MySQL database
 */

getDBString: function() {
    return 'mongodb://'+ this.DB.HOST + ':' + this.DB.PORT+'/'+ this.DB.DATABASE
},

/*
* Get the http URL
*/

getHTTPUrl: function() {
    return 'http://' + this.URL + ":" + this.PORT
}

}


module.exports = confi ;