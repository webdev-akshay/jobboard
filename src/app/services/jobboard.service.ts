import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class JobboardService {
  private apiUrl= environment.apiUrl;
  private apiKey=environment.apiKey
  private headers:HttpHeaders;
  constructor(private http:HttpClient) { 
    this.headers=new HttpHeaders({
      'x-rapidapi-key':this.apiKey,
      'x-rapidapi-host':'jsearch.p.rapidapi.com'
    })
  }


  getJobDetails(query:string):Observable<any>{
    // const params={
    //   company:company,
    //   job_Title:jobTitle,
    //   location_type:'ANY',
    //   years_of_experience:'ALL'
    // };
    const params={
      query:query
    }
    return this.http.get(`${this.apiUrl}/search` ,{headers: this.headers,params})
  }
}
