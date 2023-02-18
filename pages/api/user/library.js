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
                PostBookIssued(req, res);
            }
        });
    } else if (method === 'GET') {
        verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) res.status(401).json({ 'Unauthorized': err })
            if (user.role === 'student') {
                getSingleUserBooks(req, res, user.email);
            }
            else if (user) {
                getAllUserBooks(req, res);
            }
        });
    }
}

function PostBookIssued(req, res) {
    const { email, bookname } = req.body;
    console.log(bookname);
    const issueDate = new Date();
    const sql = `INSERT INTO StudentLibrary (email, bookName, issuedate) VALUES ('${email}', '${bookname}', '${issueDate}')`;
    pool.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ 'Error': err })
        }
        else {
            res.status(200).json({ 'Success': result })
        }
    });
}


function getSingleUserBooks(req, res, email) {
    const sql = `SELECT * FROM StudentLibrary WHERE email = '${email}'`;
    pool.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ 'Error': err })
        }
        else {
            res.status(200).json({ 'student': result })
        }
    });
}


function getAllUserBooks(req, res) {
    const q = `SELECT * FROM StudentLibrary`;
    pool.query(q, (err, result) => {
        if (err) {
            res.status(500).json({ 'Error': err })
        }
        else {
            res.status(200).json({ 'teacher': result })
        }
    }
    );
}