import prisma from "../../../../../lib/prisma";


export default async function handle(req, res) {

    const email = req.query.email

    if (req.method === "PUT") {
        const {weight} = req.body;

        const post = await prisma.user.update({
            where: {email: email},
            data: {
                weight: parseInt(weight)
            },
        })

        let height = parseInt(post.height)*Math.pow(10,-2)

        let valBmi = (parseInt(post.weight) / Math.pow(height,2)).toPrecision(4)
        const bmi = await prisma.bmi.create({
            data: {
                value: parseFloat(valBmi),
                userId: post.id,
            }
        });
        res.status(201).json(bmi.value)
    }
    else if (req.method === "GET") {
        const post = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        const exists = await prisma.bmi.findMany({
            where: {
                userId: post.id,
            },
        });
        if (exists) {
            res.status(200).json(exists);
        } else {
            res.status(400).send("Data doesn't exist.")
        }
    } else {
        res.status(400).send("Unauthorized request.")
    }

}