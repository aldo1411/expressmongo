const Student = require('../models/stundent');

const findAll = async (req, res) => {
    const result = await Student.find()
    res.json(result)
}

const findByID = async (req, res) => {
        const exist = await Student.findById(req.params.id)

        if (exist) {
            res.json({ student: exist });
        } else {
            res.status(400).json({ msg: `No student with the id ${req.params.id}`});
        }
}

const save  = async (req, res) => {
    const newStudent = {
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    
    if (!req.body.name || !req.body.email) {
        return res.status(400).json( { msg: 'Please include name and email' });
    }
    
    const student = new Student(newStudent)
    const result = await student.save()
    res.status(201).json({ msg: 'Student created', student: result })
    //res.redirect('/');
}

const findByMail  = async (req, res) => {
    const exist = await Student.find({ email: req.params.email })

    if (exist) {
        res.json({ student: exist });
    } else {
        res.status(400).json({ msg: `No student with the email ${req.params.email}`});
    }
}

const update  = async (req, res) => {
    const exist = await Student.findById(req.params.id)

    if (exist) {
        const result = await Student.findOneAndUpdate({
            _id: req.params.id
        }, req.body)

        res.status(201).json({ msg: 'sutdent updated', student: result });
    } else {
        res.status(400).json({ msg: `No student with the id ${req.params.id}`});
    }
}

const deleteById  = async (req, res) => {
    const exist = await Student.findById(req.params.id)

    if (exist) {
        const result = await Student.deleteMany({ _id: req.params.id })
        res.json( { msg: 'Student deleted', student: result });
    } else {
        res.status(400).json({ msg: `No student with the id ${req.params.id}`});
    }
}


module.exports = {
    findAll,
    findByID,
    save,
    findByMail,
    update,
    deleteById
}