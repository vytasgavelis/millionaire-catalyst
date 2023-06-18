import { NextApiRequest, NextApiResponse } from 'next';
const fs = require('fs');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await insertTransaction(req.body);
    res.status(200).json({ 'body': req.body });
}

// TODO: add transaction typew
async function insertTransaction(transaction) {
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

    const values = [
        ['6/5/2023', `$${transaction.transactionAmount}`, '', transaction.category.name, '👦 Vytas', 'foobar description'],
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