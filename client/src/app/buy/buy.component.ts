import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
    amount: number;
    coinValue: number = 1;
    totalCoins: number = 0;
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
            action: "Buy",
            amount: 0,
            value: 1
        }
    }

    purchase() {
        this._httpService.addValue(this.amount);
        this._httpService.addCoin(this.amount);
        this.coinValue = this._httpService.coinValue;
        this.totalCoins = this._httpService.totalCoins;
        this.transaction = {
            id: Math.floor(Math.random()*1000 - 1),
            action: "Buy",
            amount: this.amount,
            value: this.coinValue
        }
        this._httpService.history.push(this.transaction);
        this.alert = "Purchase completed!"
        this.reset();
    }
}
