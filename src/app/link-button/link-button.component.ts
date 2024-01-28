import {Component, Input} from '@angular/core';
import {LinkButtonOption} from "./link-button-option";
import {MatTooltip} from "@angular/material/tooltip";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-link-button',
    standalone: true,
    imports: [
        MatButton,
        MatTooltip,
        NgOptimizedImage
    ],
    templateUrl: './link-button.component.html',
    styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent {

    @Input() icon: LinkButtonOption = LinkButtonOption.None;
    @Input() link?: string;

    hovering = false;
    clicked = false;

    public get options(): typeof LinkButtonOption {
        return LinkButtonOption;
    }

    public iconForOption(option: LinkButtonOption) {
        switch (option) {
            case LinkButtonOption.Spotify:
                return "assets/link-button-icons/spotify.svg";
            case LinkButtonOption.LinkedIn:
                return "assets/link-button-icons/linkedin.svg";
            case LinkButtonOption.GitHub:
                return "assets/link-button-icons/github.svg";
            case LinkButtonOption.LastFm:
                return "assets/link-button-icons/lastfm.svg";
            case LinkButtonOption.CV:
                return "assets/link-button-icons/cv.svg";
            case LinkButtonOption.Instagram:
                return "assets/link-button-icons/instagram.svg";
            case LinkButtonOption.Facebook:
                return "assets/link-button-icons/facebook.svg"
            case LinkButtonOption.TikTok:
                return "assets/link-button-icons/tiktok.svg"
            default:
                return "";
        }
    }

    public colorThemeForOption(option: LinkButtonOption) {
        switch (option) {
            case LinkButtonOption.Spotify:
                return "mat-spotify";
            case LinkButtonOption.LinkedIn:
                return "mat-linkedin";
            case LinkButtonOption.GitHub:
                return "mat-github";
            case LinkButtonOption.LastFm:
                return "mat-lastfm";
            case LinkButtonOption.CV:
                return "mat-cv";
            case LinkButtonOption.Instagram:
                return "mat-instagram";
            case LinkButtonOption.Facebook:
                return "mat-facebook";
            case LinkButtonOption.TikTok:
                return "mat-tiktok";
            default:
                return "";
        }
    }

    buttonClicked() {
        this.clicked = true;
        setTimeout(() => {
            this.clicked = false;
            if (this.link)
                window.open(this.link, 'replace');
        }, 250);
    }
}
