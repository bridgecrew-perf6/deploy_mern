
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@march-db.xis6f.mongodb.net/exam1_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));