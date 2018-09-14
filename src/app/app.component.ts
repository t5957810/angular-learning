import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(translateService: TranslateService) {
    // 設定預設語系
    translateService.setDefaultLang('zh-tw');
    // 設定目前要使用的語系
    translateService.use('zh-tw');

  }
}
