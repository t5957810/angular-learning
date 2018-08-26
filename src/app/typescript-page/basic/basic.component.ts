import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const obj = {
      jQuery: '成功!',
      version: '3.3.1'
    };

    _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
      console.log(key);
    });

    $.each( obj, function( key, value ) {
      console.log('在Angular中測試使用jQuery：', key + ': ' + value );
    });
  }

}
