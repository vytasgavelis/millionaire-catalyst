import { NextApiRequest, NextApiResponse } from 'next';
import TransactionCategory from '~/types/transaction-category';
const fs = require('fs');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let rawdata = fs.readFileSync(process.cwd() + "/src/pages/api/categories.json");
    let categories: TransactionCategory[] = JSON.parse(rawdata);

    res.status(200).json({ categories });
}