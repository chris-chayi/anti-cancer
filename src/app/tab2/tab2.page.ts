import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {NgForOf, NgIf} from "@angular/common";
import {datas, datas2} from "../../assets/article";
import {ArticleComponent} from "../article/article.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
    imports: [IonicModule, ExploreContainerComponent, NgForOf, NgIf, ArticleComponent]
})
export class Tab2Page {

  constructor() {}

  protected readonly datas = datas2;
}
