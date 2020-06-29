import { writeFileContents } from './writeFile'

let writeFile = async (req, res) => {
    try {
        let fileName = req.body.fileName;
        let contents = req.body.contents;
        let result = await writeFileContents(fileName, contents);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send({
            code: 500,
            error: 'Error occured'
        })
    }
}

export { writeFile }
