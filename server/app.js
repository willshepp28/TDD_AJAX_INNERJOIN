const express = require('express'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000,
    cors = require('cors'),
    index = require('./routes/index'),
    userApi = require('./Api/userApi'),
    postApi = require('./Api/postApi'),
    agreeApi = require('./Api/agreeApi'),
    disagreeApi = require('./Api/disagreeApi'),
    application = express();


application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: false }));

// Express will allow requests from port 8080
// 8080 needs access to our json data
application.use(cors({
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
  }));
  


application.use('/', index);

// Api
application.use('/api/v1/users', userApi);
application.use('/api/v1/posts', postApi);
application.use('/api/v1/agree', agreeApi);
application.use('/api/v1/disagree', disagreeApi);



application.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});


module.exports = application;