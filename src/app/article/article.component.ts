import {Component, Input, OnInit} from '@angular/core';
import {article} from "../../assets/article";
import {IonicModule} from "@ionic/angular";
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgForOf,
        NgIf
    ]
})
export class ArticleComponent implements OnInit {

    constructor() {
    }

    @Input('datas') datas!: article[];

    ngOnInit() {
        console.log(`t=${this.datas}`);
    }

}
