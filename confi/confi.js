// nuestro archivo de configuracion contiene  puerto, URL y funciones 


const confi = {
    VERSION: 1,
    BUILD: 1,
    URL: 'http://127.0.0.1',
    API_PATH : '/api',
    PORT: process.env.PORT || 3000,
    HOSTDB: 'localhost',
    USERDB: 'node_test',
    PASSWORDDB: 'coding-is-awesome1970',
/*
 * get DB Connection String for connecting to MySQL database
 */


/*
* Get the http URL
*/

getHTTPUrl: function() {
    var  conexion = 'http://' + this.URL + ":" + this.PORT;
    return conexion;
}

}


module.exports = confi ;
  