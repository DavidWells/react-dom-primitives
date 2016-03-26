const copyTemplate = require('copy-template-dir')
const path = require('path')
const fs = require('fs');
const tagList = require('../src/tagList')
const primativeDir = path.join(__dirname, `../src/primatives`)

/* if directory exists delete it first */

var indexFile = ''

for (var i = 0; i < tagList.length; i++) {
  var tagName = capitalize(tagList[i])
  var lastItem = (tagList.length - 1) === i
  // Build index.js for primatives
  indexFile += "export " + tagName + " from './" + tagName + "'\n"
  // indexFile += "export " + tagName + "Class from './" + tagName + "/" + tagName + ".class'\n"
  //
  makePrimativeComponent(tagName, lastItem)

}

function makePrimativeComponent(name, runFinalCallback) {
  const vars = { name: name }
  const inDir = path.join(__dirname, `../src/templates/primative`)
  const outDir = path.join(__dirname, `../src/primatives/${name}`)

  if (fs.existsSync(outDir)) {
    console.log('directory exists delete')
    deleteFolderRecursive(outDir)
  }

  copyTemplate(inDir, outDir, vars, (err, createdFiles) => {
    if (err) throw err

    createdFiles.forEach(filePath => {
      //console.log(`Created ${filePath}`)
      var newName = filePath.replace('ComponentName', name)
      fs.rename(`${filePath}`, newName, function(err) {
          if ( err ) console.log('ERROR: ' + err);
          //console.log(`Created ${newName}`)
      });
    })

    if (runFinalCallback) {
      console.log('done run create index.js')
      writeIndexFile()
    }

  })
}

function writeIndexFile(){
   fs.writeFile(primativeDir + '/index.js', indexFile, function (err) {
     if (err) {
       return console.log(err)
     }
   })
}

function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function deleteFolderRecursive (folderPath) {

  if (folderPath.match(/utils/)) {
    return false
  }

  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach(function (file,index) {
      var curPath = folderPath + '/' + file
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath)
      } else { // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(folderPath)
  }
}
