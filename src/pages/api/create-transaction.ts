import { NextApiRequest, NextApiResponse } from 'next';
import Transaction from '~/types/transaction';
const fs = require('fs');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await insertTransaction(req.body);
    res.status(200).json({ 'body': req.body });
}

// TODO: add transaction typew
async function insertTransaction(transaction: Transaction) {
    const { GoogleAuth } = require('google-auth-library');
    const { google } = require('googleapis');

    const auth = new GoogleAuth({
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
        keyFile: "/home/vytas/projects/millionaire-catalyst/millionaire-catalyst/src/keys/google-credentials.json"
    });
    const spreadsheetId = process.env.GOOGLE_SHEETS_SHEET_ID;
    const service = google.sheets({ version: 'v4', auth });
    const range = "Transactions!B397:G618";

    const result = await service.spreadsheets.values.get({
        spreadsheetId,
        range,
    });

    const nextEmptyRow = 397 + result.data.values.length;

    const currentDate = new Date();
    const month = currentDate.getMonth() + 1; // getMonth() returns zero-based month, so we add 1
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    
    const formattedDate = `${month}/${day}/${year}`;

    const values = [
        [formattedDate, `$${transaction.amount}`, '', transaction.category.name, transaction.paidByUsername, JSON.stringify(transaction)],
    ];

    const resource = {
        values: values,
    };
    const sheetName = "Transactions";

    const response = await service.spreadsheets.values.append({
        spreadsheetId: spreadsheetId,
        range: `${sheetName}!B${nextEmptyRow}:B${nextEmptyRow}`,
        valueInputOption: 'USER_ENTERED',
        resource: resource,
    });

}