import mysql2 from 'mysql2';
import { ConnectionObject } from "./connection"
const pool = mysql2.createPool(ConnectionObject);
import { verify } from 'jsonwebtoken';
// +------------+-------------+------+-----+---------+-------+
// | Field      | Type        | Null | Key | Default | Extra |
// +------------+-------------+------+-----+---------+-------+
// | regNo      | varchar(20) | NO   |     | NULL    |       |
// | email      | varchar(50) | NO   | PRI | NULL    |       |
// | tutor      | varchar(50) | NO   |     | NULL    |       |
// | department | varchar(50) | NO   |     | NULL    |       |
// | year       | varchar(50) | NO   |     | NULL    |       |
// | address    | text        | NO   |     | NULL    |       |
// | phone      | varchar(50) | NO   |     | NULL    |       |
// +------------+-------------+------+-----+---------+-------+

export default async function handler(req, res) {
    const { method } = req;
    const { token } = req.cookies;
    if (method === 'POST') {
        verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) res.status(401).json({ 'Unauthorized': err })
            if (user.role === 'student') res.status(401).json({ 'Unauthorized': 'Student' })
            else if (user) {
                const { email } = req.body;
                const [rows, fields] = await pool.promise().query(`SELECT * FROM UserInfo WHERE email = '${email}'`);
                if (rows.length === 0) {
                    // create new user
                    const { regno, tutor, email, department, year, address, phone } = req.body;
                    pool.query(`INSERT INTO UserInfo (regNo,email,tutor,department,year,address,phone) VALUES("${regno}","${email}","${tutor}","${department}","${year}","${address}","${phone}")`, (err, result) => {
                        if (err) res.status(500).json({ 'Error': err });
                        else res.status(200).json({ 'Success': 'New User Created', msg: result });
                    });
                }
                else {
                    const { regNo, tutor, department, year, address, phone } = rows[0];
                    res.status(200).json({ regNo, tutor, department, year, address, phone });
                }
            }
        });
    } else if (method === 'GET') {
        verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) res.status(401).json({ 'Unauthorized': err })
            if (user.role === 'student') {
                const { email } = user;
                const rows = await pool.promise().query(`SELECT * FROM UserInfo WHERE email = '${email}'`);
                res.status(200).json(rows[0]);
            }
            else if (user) {
                const rows = await pool.promise().query(`SELECT * FROM UserInfo`);
                res.status(200).json(rows[0]);
            }
        });
    }
}
