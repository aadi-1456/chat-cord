const mongoose = require('mongoose');

const url = 'mongodb+srv://adityalal603:J6BRu6fMePmaKQYf@cluster0.8faaizq.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))