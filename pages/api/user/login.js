import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ConnectionObject } from "./connection"
import { createPool } from 'mysql2';
const pool = createPool(ConnectionObject);

export default async function handler(req, res) {
    const { method } = req
    if (method === 'POST') {
        // Process a POST request
        const { email, password } = req.body;
        const q = `SELECT * FROM LoginDetails WHERE email="${email}";`
        pool.query(q, async (err, result) => {
            if (err) res.status(401).json('Unauthorized')
            else if (result.length !== 0) {
                const { password: hashed } = result[0];
                const { username, role } = result[0];
                const user = {
                    email: email,
                    username: username,
                    role: role
                }
                const match = await bcrypt.compare(password, hashed);
                if (match) {
                    const token = jwt.sign(user, process.env.JWT_SECRET);
                    res.status(200).json({ token: token, user: user });
                } else {
                    res.status(401).json('Unauthorized')
                }
            }
        });
    } else {
        // Handle any other HTTP method
        res.status(401).json('Unauthorized')
    }
}


