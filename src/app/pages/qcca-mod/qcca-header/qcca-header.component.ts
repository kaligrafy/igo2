import { Component } from '@angular/core';
import { ConfigService, LanguageService } from '@igo2/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-qcca-header',
  templateUrl: './qcca-header.component.html',
  styleUrls: ['./qcca-header.component.scss']
})
export class HeaderComponent {

  public title$: Observable<string> =
  of(this.configService.getConfig('QccaHeader.title') || this.configService.getConfig('title'));

  constructor(private configService: ConfigService,
    protected languageService: LanguageService) {}

  changeLanguage() {
    if (this.languageService.getLanguage() === 'fr'){
      this.languageService.setLanguage('en');
    } else {
      this.languageService.setLanguage('fr');
    }
  }

}
