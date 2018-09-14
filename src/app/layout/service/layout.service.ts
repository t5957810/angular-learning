import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(
    private httpClient: HttpClient,


  ) { }



  getApiData() {
    return this.httpClient
    .get('http://opendata.hccg.gov.tw/dataset/6360f2bd-e43e-4584-a3d8-970c4872f071/resource/c9485ba6-b291-44c6-a3d3-5f530941d4d9/download/20180807171825760.json');

  }

  getTaipeiApiData() {
    // return this.httpClient.get('/opendata/datalist/apiAccess?scope=resourceAquire&rid=0b544701-fb47-4fa9-90f1-15b1987da0f5');
    return this.httpClient
    .get('https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=0b544701-fb47-4fa9-90f1-15b1987da0f5')
    .pipe(
      map( (data: any) =>
        data.result.results
      ),
      tap( data => console.log('data= ', data)),
    );

  }

}
