var express = require("express"),
app = express(),
methodOverride = require('method-override'),
bodyParser = require("body-parser");
db = require('./models');

var morgan = require('morgan');
app.use(morgan('tiny'));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));


function addBook(title, author, year) {
  db.Book.create({
    title: title,
    author: author,
    year: year
  }, function (err, book) {
    if (err) {
      console.log(err);
    } else {
      console.log(book);
    }
  });
}

function updateBook(title, author, year, id) {
  db.Book.update(
    {_id: id},
    {title: title,
    author: author,
    year: year},
    function (err, book) {
    if (err) {
      console.log(err);
    } else {
      console.log(book);
    }
  });
}

app.get('/', function(req,res){
  res.redirect('/books');
});

app.get('/books', function(req,res){
  db.Book.find({}, function (err, books) {
    res.render('index', {books:books});
  });
});

app.get('/books/new', function(req,res){
  res.render('new');
});

app.post('/books', function(req,res){
  var newBook = req.body.book;
  addBook(newBook.title, newBook.author, newBook.year);
  res.redirect('/books');
});

app.get('/books/:id', function(req,res){
  db.Book.findOne({_id: req.params.id}, function (err, book) {
    res.render('show', {book: book});
  });
});

app.get('/books/:id/edit', function(req,res){
  db.Book.findOne({_id: req.params.id}, function (err, book) {
    res.render('edit', {book: book});
  });
});

app.put('/books/:id', function(req,res){
  var book = req.body.book;
  updateBook(book.title, book.author, book.year, req.params.id);
  res.redirect('/books');
});

app.delete('/books/:id', function(req,res){
  db.Book.remove({_id: req.params.id}, function (err, book) {
  res.redirect('/books');
});
});

app.get('*', function(req,res){
  res.render('404');
});

app.listen(3000, function(){
  "Server is listening on port 3000";
});
