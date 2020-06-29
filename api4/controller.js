import { nonRepeatingChar } from './non_repeating_char';

let firstNonRepeatingChar = (req, res) => {
    try{
    let string = req.body.string;
    if (string) {
        nonRepeatingChar(string)
            .then(function (result) {
                console.log(result)
                res.status(200).send(result)
            })
            .catch(function (e) {
                console.log(e)
                res.status(500).send(e);
            });
    } else {
        res.status(500).send({
            code: 500,
            error: 'Please fill all the params'
        })
    }
}
    catch(e){
        res.status(500).send({
            code: 500,
            error: 'Error occured'
        })
    }
};

export {firstNonRepeatingChar};