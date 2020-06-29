"use strict"
import fs from 'fs';

let writeFileContents = (filename, contents) => {
    return new Promise(function (resolve, reject) {
        try{
        let result = fs.writeFileSync(filename, contents, 'utf8')
        resolve({ code: 200, data: 'Contents written to the file' })
        } catch(e){
            reject({ code: 500, data: 'Error occured' })
        }
    })
}

export { writeFileContents }