import * as mysql from "mysql"
/*import  config  from "./config"*/
import credential from "./crendential";



const connection = mysql.createConnection(credential)
    

export default connection