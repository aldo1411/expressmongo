const exphbs = require('express-handlebars')
const app = require('./app')

const port = 5000;

// Run middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Homepage route
app.get('/', (req, res) => 
    res.render('index', {
        title: 'WebDev Students',
        students
    })
);

app.listen(port, () => console.log('Running express app!'));