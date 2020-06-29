import {con} from './dbConnect'

function insertToDatabase(product_name, quantity, product_type) {
    return new Promise((resolve, reject) => {
        let insertQuery = 'insert into product_table(product_name, quantity, product_type) values ?';

        let values = [[product_name, quantity, product_type]];

        con.query(insertQuery, [values], function (error, rows) {
            if (error) {
                console.log(error)
                reject({ code: 500, data: error })
            }
            else {
                resolve({ code: 200, data: 'Details entered in database' })
            }
        })
    })
}

function queryDatabaseForProduct(product_name){
    return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM product_table WHERE product_name=?`;
    con.query(sql, [product_name], (error, results, fields) => {
      if (error) {
        reject({ code: 500, data: error });
      }else{
      console.log(results);
      if(results.length == 0)
      reject({ code: 500, data: 'No records found' });
      else
      resolve({ code: 200, data: results })
      }
    });
}) 
}

function filterDatabaseForProduct(quantity, product_type){
    return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM product_table WHERE quantity=? AND product_type=?`;
    con.query(sql, [quantity, product_type], (error, results, fields) => {
      if (error) {
        reject({ code: 500, data: error });
      }else{
      console.log(results);
      if(results.length == 0)
      reject({ code: 500, data: 'No records found' });
      else
      resolve({ code: 200, data: results })
      }
    });
}) 
}


export{insertToDatabase, queryDatabaseForProduct, filterDatabaseForProduct}