import { Component } from '@angular/core';
import { ConfigService, LanguageService } from '@igo2/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-qcca-footer',
  templateUrl: './qcca-footer.component.html',
  styleUrls: ['./qcca-footer.component.scss']
})
export class FooterComponent {

  public url$: Observable<string> =
  of(this.configService.getConfig('qccaMod.footer.url') || '');

  constructor(private configService: ConfigService,
    protected languageService: LanguageService) {
  }

}
