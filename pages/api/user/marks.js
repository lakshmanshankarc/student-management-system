import mysql2 from 'mysql2';
import { ConnectionObject } from "./connection"
const pool = mysql2.createPool(ConnectionObject);
import { verify } from 'jsonwebtoken';
// +----------+-------------+------+-----+---------+-------+
// | Field    | Type        | Null | Key | Default | Extra |
// +----------+-------------+------+-----+---------+-------+
// | email    | varchar(50) | NO   | PRI | NULL    |       |
// | testname | varchar(20) | YES  |     | NULL    |       |
// | graphics | varchar(5)  | YES  |     | NULL    |       |
// | iot      | varchar(5)  | YES  |     | NULL    |       |
// | webtech  | varchar(5)  | YES  |     | NULL    |       |
// | stlab    | varchar(5)  | YES  |     | NULL    |       |
// | project  | varchar(5)  | YES  |     | NULL    |       |
// +----------+-------------+------+-----+---------+-------+

export default async function handler(req, res) {
    const { method } = req;
    const { token } = req.cookies;
    if (method === 'POST') {
        verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) res.status(401).json({ 'Unauthorized': err })
            if (user.role === 'student') res.status(401).json({ 'Unauthorized': 'Student' })
            else if (user) {
                console.log(req.body);
                postMarks(req, res);
            }
        });
    } else if (method === 'GET') {
        verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) res.status(401).json({ 'Unauthorized': err })
            if (user.role === 'student') {
                getMarksByEmail(user.email, req, res);
            }
            else if (user) {
                getAllMarks(req, res);
            }
        });
    }
}


// Path: pages/api/user/marks.js

function postMarks(req, res) {
    const { email, testname, graphics, iot, webtech, stlab, project } = req.body;
    const q = `INSERT INTO StudentMarks (email, testname, graphics, iot, webtech, stlab, project) VALUES ('${email}', '${testname}', ${graphics}, ${iot}, ${webtech}, ${stlab}, ${project})`;
    pool.query(q, (err, result) => {
        if (err) res.status(400).json({ 'Error': err });
        res.status(200).json({ 'Success': 'Marks Added' });
    }
    )
}


function getMarksByEmail(email, req, res) {
    const query = `SELECT * FROM StudentMarks WHERE email='${email}'`;
    pool.query(query, (err, result) => {
        if (err) res.status(400).json({ 'Error': err });
        res.status(200).json(result);
    })
}


function getAllMarks(req, res) {
    const q = `SELECT * FROM StudentMarks`;
    pool.query(q, (err, result) => {
        if (err) res.status(400).json({ 'Error': err });
        res.status(200).json(result);
    }
    )
}