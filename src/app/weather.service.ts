import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getweather(city: string, units: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + '18f54abeadc84f9a534b01754fb5faa8&units=' + units);

    // return this.http.get(' https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=18f54abeadc84f9a534b01754fb5faa8');
  }

}
