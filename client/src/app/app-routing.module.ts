import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
import { BrowseComponent } from './browse/browse.component';
import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'mine', component: MineComponent },
    { path: 'sell', component: SellComponent},
    { path: 'buy', component: BuyComponent },
    { path: 'ledger', component: BrowseComponent },
    { path: 'transaction/:id', component: DetailComponent },
    { path: "**", redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }