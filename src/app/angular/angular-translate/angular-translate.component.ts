import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-angular-translate',
  templateUrl: './angular-translate.component.html',
  styleUrls: ['./angular-translate.component.css']
})
export class AngularTranslateComponent implements OnInit {
  name = '名字';
  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  translate() {
    this.translateService.get('title').subscribe(
      title => {
        console.log(title);
      }
    );

    this.translateService.get('name').subscribe(
      name => {
        this.name = 'name';
      }
    );



    this.translateService.use('en');

  }

}
