import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { TranslateService, TranslatePipe, } from "@ngx-translate/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TranslatePipe,
    MatToolbarModule,
    MatTooltip,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  language: string;

  components = [
    { name: 'home', target: 'home' },
    { name: 'aboutUs', target: 'about-us' },
    { name: 'members', target: 'members' },
    { name: 'articles', target: 'articles' },
    { name: 'news', target: 'news' },
    { name: 'openPositions', target: 'open-positions' },
    { name: 'contact', target: 'contact' },
  ]

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    this.language = 'el'
    this.translate.use(this.language);
  }

  resizeHeader(event: Event) {
    var div = event.target as HTMLDivElement
    if (div.scrollTop > 50) {
      document.getElementById("header")!.classList.add('toolbar-shrinked')
    } else {
      document.getElementById("header")!.classList.remove('toolbar-shrinked')
    }
  }

  changeRoute(target: string) {
    var toolbarLinks = document.getElementsByClassName('toolbar-links')
    for (let node of toolbarLinks) {
      node.classList.remove('toolbar-link-selected')
    }
    document.getElementById('toolbar-link-' + target)!.classList.add('toolbar-link-selected')
    this.router.navigateByUrl('/' + target)

  }

  switchLanguage(language: string) {
    this.language = language
    this.translate.use(language);
  }

}
