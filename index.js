var fs = require('fs');
var arff = require('node-arff');
var csvStr = require('csv-stringify');

// read params
var fileDest = null;
var dest = process.argv.indexOf('-d');
if (dest !== -1) {
	fileDest = process.argv[dest + 1];
}
var normalize = (process.argv.indexOf('-n') !== -1);
var headless = (process.argv.indexOf('-h') === -1);
var arffFilePath = process.argv.find(arg => /.+\.arff$/i.test(arg));

// read arff file
arff.load(arffFilePath, function(err, arrFile) {
  if (err) {
    return console.error(err);
  }
  
  // -n param specified
  if (normalize) {
	arrFile.normalize();
  }

  let fileName = arrFile.name;
  let attrs = arrFile.attributes;
  let csvData = arrFile.data.map(data => attrs.map(attrName => data[attrName]));
  
  // default output csv file
  if (fileDest === null) {
  	fileDest = process.cwd() + "/" + fileName + ".csv";
  }

  // -h param specified
  if (headless === false) {
  	csvData = [attrs].concat(csvData);
  }

  // write csv
  csvStr(csvData, function(err, output) {
  	if(err) {
        return console.log(err);
    }
  	fs.writeFile(fileDest, output, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log('created file', fileDest);
	});
  });
})