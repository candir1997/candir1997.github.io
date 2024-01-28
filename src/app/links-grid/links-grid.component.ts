import {Component} from '@angular/core';
import {LinkButtonOption} from "../link-button/link-button-option";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {LinkButtonComponent} from "../link-button/link-button.component";
import {NgFor} from "@angular/common";

@Component({
    selector: 'app-links-grid',
    standalone: true,
    imports: [
        LinkButtonComponent,
        MatCard,
        NgFor,
        MatCardContent,
        MatCardTitle
    ],
    templateUrl: './links-grid.component.html',
    styleUrls: ['./links-grid.component.scss']
})
export class LinksGridComponent {

    links = [{
        icon: LinkButtonOption.Instagram,
        link: 'https://instagram.com/salon.candir'
    }, {
        icon: LinkButtonOption.Facebook,
        link: 'https://facebook.com/frizercandir'
    }, {
        icon: LinkButtonOption.TikTok,
        link: 'https://tiktok.com/@salon.candir'
    }];

}
