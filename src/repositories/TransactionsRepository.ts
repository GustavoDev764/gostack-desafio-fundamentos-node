import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    let income: number = 0;
    let outcome: number = 0;
    let total: number = 0;
    this.transactions.forEach(item => {
      if (item.type === 'income') {
        income += item.value;
      } else {
        outcome += item.value;
      }
    });
    total = income - outcome;
    const balance: Balance = { income, outcome, total };
    return balance;
  }

  public create({ title, value, type }: Omit<Transaction, 'id'>): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
