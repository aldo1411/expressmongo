const Book = require('../models/book');

const findAll = async (req, res) => {
    const result = await Book.find()
    res.json(result)
}

const findByID = async (req, res) => {
        const exist = await Book.findById(req.params.id)

        if (exist) {
            res.json({ Book: exist });
        } else {
            res.status(400).json({ msg: `No Book with the id ${req.params.id}`});
        }
}

const save  = async (req, res) => {
    const newBook = {
        name: req.body.name,
        gender: req.body.gender,
        author: req.body.author,
        status: 'active'
    }
    
    if (!req.body.name || !req.body.gender || !req.body.author) {
        return res.status(400).json( { msg: 'Please include all data' });
    }
    
    const book = new Book(newBook)
    const result = await book.save()
    res.status(201).json({ msg: 'Book created', book: result })
    //res.redirect('/');
}

const update  = async (req, res) => {
    const exist = await Book.findById(req.params.id)

    if (exist) {
        const result = await Book.findOneAndUpdate({
            _id: req.params.id
        }, req.body)

        res.status(201).json({ msg: 'sutdent updated', Book: result });
    } else {
        res.status(400).json({ msg: `No Book with the id ${req.params.id}`});
    }
}

const deleteById  = async (req, res) => {
    const exist = await Book.findById(req.params.id)

    if (exist) {
        const result = await Book.deleteMany({ _id: req.params.id })
        res.json( { msg: 'Book deleted', Book: result });
    } else {
        res.status(400).json({ msg: `No Book with the id ${req.params.id}`});
    }
}


module.exports = {
    findAll,
    findByID,
    save,
    update,
    deleteById
}