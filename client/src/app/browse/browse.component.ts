import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-browse',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

    history = this._httpService.history;

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.history = this._httpService.history;
    }

}
