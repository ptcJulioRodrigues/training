'use strict';

const
  express      = require('express'),
  path         = require('path'),
  cors         = require('cors'),
  contacts     = require('./data/contactBook.json'),
  historical   = require('./data/contactBook.json');

const app = express();
app.use(cors());

app.get('/v0/contacts/', (req, res) => {
  res.json(contacts);
});

const matchResults = (data, path, value) => data.filter(item => {
    const pattern = new RegExp(value, 'gi');
    return pattern.test(item[path]);
});

app.get('/v0/contacts/autocomplete', (req, res) => {
  if (!req.query.name && req.query.number)
    return res.status(400);

    let foundResults;
    if (req.query.name)
      foundResults = matchResults(contacts, 'name', req.query.name);
    if (req.query.number)
        foundResults = matchResults(contacts, 'number', req.query.number);

  return res.json(foundResults);
});

let server = app.listen(8080, '0.0.0.0', () => {
  console.log(`API listening on http://${server.address().address}:${server.address().port}`);
});
