import { Time } from "@angular/common";

export class Transaction {
    transactionId! : number;
    transactionDateTime! : Time;
    transactionType! : string;
    toAccount! : number
    fromAccount! : number;
    inAccount! : number;
    amount! : number;
}
