// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    // Define variables to store values
    coinValue: number = 1;
    totalCoins: number = 0;
    history = [];

    // Don't need HttpClient to communicate with backend
    constructor() { }

    addValue(num) {
        this.coinValue += num;
        console.log("Shinto's current value:", this.coinValue);
        return this.coinValue;
    }

    addCoin(num) {
        this.totalCoins += num;
        console.log("Your total coins:", this.totalCoins);
        return this.totalCoins;
    }

    deductValue(num) {
        this.coinValue -= num;
        console.log("Shinto's current value:", this.coinValue);
        return this.coinValue;
    }

    sellCoin(num) {
        this.totalCoins -= num;
        console.log("Your total coins:", this.totalCoins);
        return this.totalCoins;
    }

    getDetail(id) {
        for (let transaction of this.history) {
            if (transaction.id == id) {
                console.log("This is the transaction", transaction);
                return transaction;
            }
        }
    }

}
