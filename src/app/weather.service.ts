/*import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {

  constructor() { }

}*/

import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
@Injectable({
  providedIn : 'root'
})
export class WeatherService {
   url ="https://api.openweathermap.org/data/2.5/weather";
  apiKey = '7a343352221086751de64df5febf3c67';

  constructor(private http: HttpClient) { }


getWeatherDataByCoords(lat, lon)
{
    let params = new HttpParams()
    .set('lat',lat)
    .set('lon',lon)
    .set('units','imperial')
    .set('appid',this.apiKey)


    return this.http.get(this.url, {params});   
}
getWeatherDataByCityName(city: string)
{
  let params = new HttpParams()
  .set('q',city)
  .set('units','imperial')
  .set('appid',this.apiKey);
  return this.http.get(this.url,{params});
}



}