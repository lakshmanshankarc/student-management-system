import mysql2 from 'mysql2';
import { ConnectionObject } from "./connection"
const pool = mysql2.createPool(ConnectionObject);
import { verify } from 'jsonwebtoken';
import { stringToList, listToString, monthToString } from '../../../utils/main';
// +--------+-------------+------+-----+---------+-------+
// | Field  | Type        | Null | Key | Default | Extra |
// +--------+-------------+------+-----+---------+-------+
// | email  | varchar(50) | NO   | PRI | NULL    |       |
// | absent | text        | YES  |     | NULL    |       |
// | OD     | text        | YES  |     | NULL    |       |
// | month  | varchar(20) | YES  |     | NULL    |       |
// +--------+-------------+------+-----+---------+-------+

export default async function handler(req, res) {
    const { method } = req;
    const { token } = req.cookies;
    if (method === 'POST') {
        verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) res.status(401).json({ 'Unauthorized': err })
            if (user.role === 'student') res.status(401).json({ 'Unauthorized': 'Student' })
            else if (user) {
                const { email, status } = req.body;
                console.log(email, status);
                if (status === 'absent') return ifAbsent(email, req, res)
                else if (status === 'OD') return ifOD(email, req, res)
                else res.status(400).json({ 'Error': 'Invalid Status' })
            }
        });
    } else if (method === 'GET') {
        verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) res.status(401).json({ 'Unauthorized': err })
            if (user.role === 'student') {
                returnByEmail(user.email, req, res)
            }
            else if (user) {
                returnAll(req, res)
            }
        });
    }
}


function ifAbsent(email, req, res) {
    console.log('Absent Activated');
    let q = `SELECT * FROM StudentAttendance WHERE email = "${email}"`
    pool.query(q, (err, data) => {
        if (err) res.status(500).json({ 'Error': err })
        if (data.length === 0) {
            // insert into table
            let query = `INSERT INTO StudentAttendance (email, absent,month) VALUES ("${email}", "${new Date().getDate()}", "${monthToString(new Date().getMonth())}")`
            pool.query(query, (err, data) => {
                if (err) res.status(500).json({ 'Error': err })
                res.status(200).json({ 'Success': 'Inserted Successfully' })
            })
        } else {
            let dates = stringToList(data[0].absent)
            dates.push(new Date().getDate())
            dates = listToString(dates)
            let query = `UPDATE StudentAttendance SET absent = "${dates}" WHERE email = "${email}"`
            pool.query(query, (err, data) => {
                if (err) res.status(500).json({ 'Error': err })
                res.status(200).json({ 'Success': 'Updated Successfully' })
            })
        }
    })
}


function ifOD(email, req, res) {
    let q = `SELECT * FROM StudentAttendance WHERE email = "${email}"`
    pool.query(q, (err, data) => {
        if (err) res.status(500).json({ 'Error': err })
        if (data.length === 0) {
            // insert into table
            let query = `INSERT INTO StudentAttendance (email, OD, month) VALUES ("${email}", "${new Date().getDate()}", "${monthToString(new Date().getMonth())}")`
            pool.query(query, (err, data) => {
                if (err) res.status(500).json({ 'Error': err })
                res.status(200).json({ 'Success': 'Inserted Successfully' })
            })
        } else {
            let dates = stringToList(data[0].OD)
            dates.push(new Date().getDate())
            dates = listToString(dates)
            let query = `UPDATE StudentAttendance SET OD = "${dates}" WHERE email = "${email}"`
            pool.query(query, (err, data) => {
                if (err) res.status(500).json({ 'Error': err })
                res.status(200).json({ 'Success': 'Updated Successfully' })
            })
        }
    })
}

function returnAll(req, res) {
    const q = `SELECT * FROM StudentAttendance`
    pool.query(q, (err, data) => {
        if (err) res.status(500).json({ 'Error': err })
        res.status(200).json({ data })
    }
    )
}
function returnByEmail(email, req, res) {
    const q = `SELECT * FROM StudentAttendance WHERE email = "${email}"`
    pool.query(q, (err, data) => {
        if (err) res.status(500).json({ 'Error': err })
        res.status(200).json({ data })
    })
}