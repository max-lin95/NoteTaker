const PORT = process.env.PORT || 3000;
const fs = require('fs');
const path = require('parth');
const express = require('express');
const app = express();
const noteReq = require('./db/db.json');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

