import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
    amount: number;
    coinValue: number;
    totalCoins: number;
    transaction;
    alert;

    constructor(private _httpService: HttpService) { }

    ngOnInit() { 
        this.coinValue = this._httpService.coinValue;
        this.totalCoins = this._httpService.totalCoins;
    }

    reset() {
        this.transaction = {
            id: 0,
            action: "Sell",
            amount: 0,
            value: 1
        }
    }

    sell() {
        this._httpService.deductValue(this.amount);
        this._httpService.sellCoin(this.amount);
        this.coinValue = this._httpService.coinValue;
        this.totalCoins = this._httpService.totalCoins;
        this.transaction = {
            id: Math.floor(Math.random()*1000 - 1),
            action: "Sell",
            amount: this.amount,
            value: this.coinValue
        }
        this._httpService.history.push(this.transaction);
        this.alert = "Transaction completed!";
        this.reset();
    }
}
