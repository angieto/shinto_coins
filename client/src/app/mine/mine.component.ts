import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
    userAnswer: Number;
    answer: Number = 13;
    alert;
    transaction;
    wrongInput = false;
    totalCoins = this._httpService.totalCoins;
    coinValue = this._httpService.coinValue;

    constructor(private _httpService: HttpService) { }

    ngOnInit() { 
    }

    onSubmit() {
        // check if user's input match with the correct answer
        if (this.userAnswer == this.answer) {
            // reset the answer back to a default 0
            this.userAnswer = 0;
            // increase the value of coin by 1
            this._httpService.addValue(1);
            // increase the number of coin by 1
            this._httpService.addCoin(1);
            this.alert = "You increased the coin value by 1!"
            this.transaction = {
                id: Math.floor(Math.random()*1000 - 1),
                action: "Mine",
                amount: 1,
                value: this.coinValue + 1
            }
            this._httpService.history.push(this.transaction);

        } else {
            this.wrongInput = true;
            this.alert = "Oops, not the right answer!";
        }
    }
}
