"use strict" 
import fs from 'fs';

let readFileContents = (fileName) => {

let path = `E:/nodeAssignment/fileDirectory/${fileName}`;
try {
    const data = fs.readFileSync(path, 'utf8')
    // console.log(data)
    return(data);
  } catch (err) {
    console.error(err)
    return(err)
  }
}

export {readFileContents}