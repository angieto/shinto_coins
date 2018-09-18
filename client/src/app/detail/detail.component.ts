import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    selectedTransaction;

    constructor( private _route: ActivatedRoute,
                 private _router: Router, 
                 private _httpService: HttpService ) { }
    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.selectedTransaction = this._httpService.getDetail(params.id);
            console.log("This is the detail", this.selectedTransaction);
        });
    }
}
