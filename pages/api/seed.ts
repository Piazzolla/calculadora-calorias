import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import { SeedIngredient } from '../../interfaces/seedData';
import initialData from '../../data/initial-data'

type Data = {
    message: string
}

const seedData = async (req:NextApiRequest, res:NextApiResponse<Data>) => {

    try {
        const client = await clientPromise;
        const db = client.db("cal-calc");
        await db.collection("ingredients").insertMany(initialData);
        res.status(200).json({ message: 'Proceso realizado correctamente' })

    } catch (e) {
        console.error(e);
    }
}

export default seedData;