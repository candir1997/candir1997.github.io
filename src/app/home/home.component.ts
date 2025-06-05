import {Component} from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {LinkButtonComponent} from "../link-button/link-button.component";
import {LinkButtonOption} from "../link-button/link-button-option";
import {NgForOf} from "@angular/common";
import {LinksGridComponent} from "../links-grid/links-grid.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        MatCard,
        MatButton,
        LinksGridComponent,
        MatCardHeader,
        MatCardTitle,
        MatCardContent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    protected images = [
        'assets/art/3.jpg',
        'assets/art/1.jpg',
        'assets/art/11.jpg',
        'assets/art/4.jpg',
        'assets/art/12.jpg',
        'assets/art/5.jpg',
        'assets/art/7.jpg',
        'assets/art/2.jpg',
        'assets/art/9.jpg',
        'assets/art/15.jpg',
        'assets/art/17.jpg',
        'assets/art/13.jpg',
    ]
}
