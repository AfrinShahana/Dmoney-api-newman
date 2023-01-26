const newman = require ('newman');

newman.run({
      collection :'https://api.postman.com/collections/25408740-12439bc1-4a30-40a7-9be6-094d80632bf0?access_key=PMAT-01GQMCGHH6CSAQC3K712A01S6S',


    // collection: require ('./collection/collection.json'),
    // collection: require ('./collection/assignment-02 roadtosdet.postman_collection.json'),
    //environment:require ('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',//if not specified , the file will be written to 'newman/'
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');

});