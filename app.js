const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//express app
const app = express();

// connect to database
const db = 'mongodb+srv://admin:Trustno1@cluster0.frzgx.mongodb.net/sparks';
mongoose.connect(db)
.then((result) => app.listen(3000)) //connect to db then listen...
.catch((err) => console.log(err));

//add view engine
app.set('view engine', 'ejs');


//middleware for public static files
app.use(express.static('public')); //files made available to the front end
app.use(express.urlencoded({extended: true})); // now you can use req.body in app.post request (for info in webform) need name attribute and action POST on create.ejs

/* save new blog to database / test routes

app.get('/add', (req, res) => {  
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about new blog',
        body: 'blog content'
    });
    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
});

app.get('/all', (req, res) => {   //find all blogs from db
    Blog.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
});

app.get('/single', (req, res) => {
    Blog.findById('653ebe4ab56ed36f2c1fe038')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
});

*/

//render JSON to an endpoint  
app.get('/blogs/outages', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*"); //who has access ?
    Blog.find().sort({createdAt: -1}) // .sort to have top score at top
    .then ((result) => {
res.json({ blogs: result})
    })
})


//routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
});

app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1}) // .sort to have newest at top
    .then ((result) => {
        res.render('index', {title: 'Home', blogs: result});
    })
    .catch((err) => {
        console.log(err)
    })
})

app.post('/blogs', (req, res) => {
    //console.log(req.body);
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    })
});

app.get('/blogs/create', (req, res) => {
    res.render('create',{title: 'Create Product'});
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    //console.log(id);
    Blog.findById(id)
    .then(result => {
    res.render('details', {blog: result, title: 'Details' }) //details view to see post details after click
    })
    .catch(err => {
        console.log(err);
        res.status(404).render('404',{title: 'Page Not Found'}); 
    })
});

// update
app.get('/blogs/update/:id', (req, res) => {
    res.render('update',{title: 'Update Product'});
});

app.put('/blogs/', async (req, res) => {

    //const id = req.params.id;
    //console.log(id);
     await Blog.updateOne({_id: ObjectId("663f707d2909a0c2c22e2ee1")}, {$set: {snippet:42}})
     .then(result => {
        res.json({ redirect: '/blogs' })
    })
    .catch(err => {
        console.log(err);
    })
    
    })



app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)

.then(result => {
    res.json({ redirect: '/blogs' })
})
.catch(err => {
    console.log(err);
})

})
//redirect if needed later
/*
app.get('/about-oldpage', (req, res) => {
    res.redirect('/about')
});
*/

// 404 error - use()  
app.use((req, res) =>{
  res.status(404).render('404',{title: 'Page Not Found'});  
});

