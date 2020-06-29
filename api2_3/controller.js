import { insertToDatabase, queryDatabaseForProduct, filterDatabaseForProduct } from './dbOperations'
// import{_Chain} from 'underscore'
let enterProductInfo = (req, res) => {
    let product_name = req.body.product_name;
    let quantity = req.body.quantity;
    let product_type = req.body.product_type;

    insertToDatabase(product_name, quantity, product_type)
        .then((result) => {
            res.status(result.code).send(result);
        }).catch((error) => {
            res.status(500).send(error);
        })
}

let getProductInfo = (req, res) => {
    let product_name = req.body.product_name;

    queryDatabaseForProduct(product_name)
        .then((result) => {
            res.status(result.code).send(result);
        }).catch((error) => {
            res.status(500).send(error);
        })
}


let findProduct = (req, res) => {
    var queryParams = req.query;
    // console.log(queryParams)
    if (queryParams.hasOwnProperty('quantity') && queryParams.hasOwnProperty('product_type')) {
        let quantity = queryParams.quantity;
        let product_type = queryParams.product_type;                        //.toLowerCase();
        filterDatabaseForProduct(quantity, product_type)
            .then((result) => {
                res.status(result.code).send(result);
            }).catch((error) => {
                res.status(500).send(error);
            })

    } else
        res.status(500).send({ code: 500, data: 'Fill the query params' })

}

export { enterProductInfo, getProductInfo, findProduct };