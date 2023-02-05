import { hash } from "bcrypt";
import prisma from "../../../../lib/prisma";

export default async function handler(req, res) {
    const { name,email, password,age,height,gender } = req.body;
    const exists = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (exists) {
        res.status(400).send("User already exists");
    } else {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: await hash(password, 10),
                age,
                height,
                gender
            },
        });
        res.status(200).json(user);
    }
}