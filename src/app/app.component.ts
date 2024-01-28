import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardTitle} from "@angular/material/card";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, RouterOutlet, MatToolbar, MatButton, MatCard, MatCardTitle, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'candir-rs';
}
