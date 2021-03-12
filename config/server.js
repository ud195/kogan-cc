const express = require('express')
const exphbs = require('express-handlebars')
const hbsHelpers = require('../libs/hbsHelpers');
const path = require('path')

// require routes
const routeHome = require('../routes/home')

const app = express();

// use express-handlebars view engine and set views template directory
const hbs = exphbs.create({
    helpers: hbsHelpers()
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

// serve static files form /public
app.use(express.static('./public')) // serve static files

// Set your routes here
app.get('/', async (req, res, next) => routeHome(req, res, next))

// Start the server
app.listen(process.env.PORT || 3000, () => console.log(`Express server listening on port ${process.env.PORT || 3000}!`))
