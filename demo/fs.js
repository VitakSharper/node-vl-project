const fs = require('fs');
const path = require('path');


// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Le repertoire a ete crée...')
// });

const filePath = path.join(__dirname, 'test', 'text.txt');
// fs.writeFile(filePath, 'Some content', (err) => { // appendFile - to add content to the file
//     if (err) {
//         throw err
//     }
//     console.log('Le Fichier a ete crée!!')
// });

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }
    console.log(content)
    // const data = Buffer.from(content)
    // console.log('Content: ', data.toString())
})
