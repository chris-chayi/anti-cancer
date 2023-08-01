import {Component} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {ExploreContainerComponent} from '../explore-container/explore-container.component';
import {article, datas} from "../../assets/article";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
    standalone: true,
    imports: [IonicModule, ExploreContainerComponent, NgForOf],
})
export class Tab1Page {
     datas: article[];

    constructor() {
        this.datas = datas;
    }

}
