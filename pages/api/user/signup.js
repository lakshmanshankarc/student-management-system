import mysql2 from 'mysql2';
import { ConnectionObject } from "./connection"
const pool = mysql2.createPool(ConnectionObject);
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    const { email, password } = req.body;
    const q = `SELECT * FROM LoginDetails WHERE email="${email}";`
    pool.query(q, async (err, result) => {
        if (err) {
            console.log(err);
        } else if (result.length !== 0) {
            res.status(201).json({ message: "user Already exists", result });
        }
        // req object = 
        let { email, password, username, role } = req.body;
        const hashed = await bcrypt.hash(password, 10);
        const q = `INSERT INTO LoginDetails (username,email, password, role) VALUES ("${username}","${email}", "${hashed}", "${role}");`
        pool.query(q, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(201).json({ message: "user creation Successfull" });
            }
        });
    });
}

