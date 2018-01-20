var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/courseInfo', function(req, res) {
    // scrape location
    url = 'https://www.ryerson.ca/calendar/2017-2018/courses/computer-science/CPS/406/';

    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            var title, description, prereq;
            var json = { title: "", description: "", prereq: "" };

            title = $('div.courseComponent > h2').text();

            json.title = title;

            json.description = $('div.courseDescription').text();
            description = json.description;

            prereq = $("div.requisites > p ").first().text().trim();
            json.prereq = prereq;

        }

        fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err) {
            console.log('File successfully written! - Check your project directory for the output.json file');
        })

        res.send( JSON.stringify(json, null, 4))
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;
