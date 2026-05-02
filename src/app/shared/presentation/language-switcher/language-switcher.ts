import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-language-switcher',
  imports: [MatIconButton],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcher {
  private translate = inject(TranslateService);

  currentLanguage = 'en';

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
    this.translate.use(this.currentLanguage);
  }
}
