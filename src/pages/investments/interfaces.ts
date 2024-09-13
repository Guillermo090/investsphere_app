interface CryptoInterface {
    purchase_date: string;
    currency_bought?: string;
    purchase_amount: number;
    base_currency: string;
    amount_of_bought_currency: number;
    commission: number;
    platform:string;
}

export default CryptoInterface