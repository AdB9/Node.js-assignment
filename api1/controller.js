import { readFileContents } from './readFile'

let readFile = (req, res) => {
    try {
        let fileName = req.body.fileName;
        let result = readFileContents(fileName);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send({
            code: 500,
            error: 'Error occured'
        })
    }
}

export { readFile }
