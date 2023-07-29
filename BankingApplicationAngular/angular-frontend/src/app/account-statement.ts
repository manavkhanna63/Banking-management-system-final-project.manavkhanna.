import { Transaction } from "./transaction";

export class AccountStatement {
    currentBalance! : number;
    customerName! : string;
    transactions! : Transaction[];
}
