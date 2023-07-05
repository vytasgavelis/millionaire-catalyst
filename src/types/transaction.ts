import TransactionCategory from "./transaction-category";

export default interface Transaction {
    amount: number,
    category: TransactionCategory,
    paidByUsername: string,
    isSplit: boolean,
    splitRatio: number
}