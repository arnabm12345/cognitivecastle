const express = require('express')
const router = express.Router()
const passport = require('passport')

const { adminLogin, addFaculty, addStudent,
    addSubject, getAllFaculty, getAllStudents, getAllSubjects,
    addAdmin, 
    getAllStudent,
    getAllSubject,uploadNote,getFaculty,addSubjectToFaculty,getAllUploadedNotes} = require('../controller/adminController')
const { upload } = require('../server');

router.post('/login', adminLogin)
router.post('/addAdmin', addAdmin )
router.post('/getAllFaculty', passport.authenticate('jwt', { session: false }),getAllFaculty)
router.post('/getAllStudent', passport.authenticate('jwt', { session: false }), getAllStudent)
router.post('/getAllSubject', passport.authenticate('jwt', { session: false }), getAllSubject)
router.post('/addFaculty', passport.authenticate('jwt', { session: false }), addFaculty)
router.get('/getFaculties', passport.authenticate('jwt', { session: false }), getAllFaculty)
router.post('/addStudent', passport.authenticate('jwt', { session: false }),addStudent)
router.get('/getStudents', passport.authenticate('jwt', { session: false }), getAllStudents)
router.post('/addSubject', passport.authenticate('jwt', { session: false }), addSubject)
router.post('/getFaculty', passport.authenticate('jwt', { session: false }), getFaculty)
router.post('/addSubjectToFaculty', passport.authenticate('jwt', { session: false }), addSubjectToFaculty)
router.get('/getAllUploadedNotes',getAllUploadedNotes)
router.get('/getSubjects', getAllSubjects)
router.post('/uploadNote', passport.authenticate('jwt', { session: false }), uploadNote);

module.exports = router