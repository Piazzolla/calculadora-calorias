import { Budget } from 'interfaces/budget';
import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../../lib/mongodb';

type Data = | { message: string }
            | Budget;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    console.log('BUDGET API HANDLER');
    switch (req.method) {
        case 'POST':
            return createBudget(req, res);
        default:
            return res.status(400).json({ message: 'Bad Request' })
    }
}

const createBudget = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    //TODO: verify that the user is logged in

    const budget = req.body as Budget;

    try {
        const client = await clientPromise;
        const db = client.db("cal-calc");
        await db.collection("budgets").insertOne(budget);
        res.status(200).json({ message: 'Proceso realizado correctamente' })

    } catch (e) {
        console.error(e);
    }
}
