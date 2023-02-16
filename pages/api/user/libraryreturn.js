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
                res.status(200).json({ "🐬 ": "🐅 + 🦞 + 🐟 + 🐋 " })
            }
            else if (user) {
                res.status(200).json({ "🦁  ": "🐻 - 🧛  " })
            }
        });
    }
}

function PostBookIssued(req, res) {
    const { email, bookname } = req.body;
    const returnDate = new Date();
    const q = `UPDATE StudentLibrary SET returnDate='${returnDate}' WHERE email='${email}' AND bookName='${bookname}'`;
    pool.query(q, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ 'Error': err })
        }
        else {
            res.status(200).json({ 'Success': result })
        }
    })
}





