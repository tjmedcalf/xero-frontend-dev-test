import express from 'express';
import Datastore from 'nedb';
import fs from 'fs';

const app = express();

const db = new Datastore({
  filename: 'db.json',
  autoload: true
});

var handleRequest = (opts, req, res) => {
  fs.readFile('everyone.hbs', 'utf8', (err, data) => {
    if(err) {
      res.status(500).send(err.message);
    } else {
      res.contentType('application/json');
      res.header("Access-Control-Allow-Origin", "*");

      db.find(opts, {}, (err, docs) => {
        if(err) {
          res.status(500).send(err.message);
        } else {
          res.status(200).send(docs);
        }
      });
    }
  });
}

app.get(['/api/everyone'], (req, res) => handleRequest({}, req, res) );
app.get(['/api/male'], (req, res) => handleRequest({gender: 'male'}, req, res) );
app.get(['/api/female'], (req, res) => handleRequest({gender: 'female'}, req, res) );

app.listen(3000, function () {
  console.log('Example app listening on port 3000!'); // eslint-disable-line no-console
});