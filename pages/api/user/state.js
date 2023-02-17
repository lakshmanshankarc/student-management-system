import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ConnectionObject } from "./connection"
import { createPool } from 'mysql2';

const pool = createPool(ConnectionObject);

export default async function handler(req, res) {
    const { method } = req
    if (method === "GET") {
        const { token } = req.cookies;
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) res.status(401).json('Unauthorized')
            else {
                res.status(200).json({ user: user });
            }
        })
    } else {
        res.status(401).json('Unauthorized')
    }
}
