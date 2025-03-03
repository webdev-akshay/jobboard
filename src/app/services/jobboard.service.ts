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


  getJobDetails(objectUrl:string,query:string):Observable<any>{
    const params={
      query:query
    }
    let url=environment.apiUrl +objectUrl
    return this.http.get(url,{headers: this.headers,params})
  }

  getsalaryDetails(company:string,jobtitle:string,locationType:string,years_of_experience:string):Observable<any>{
    const params={
      company:company,
      job_title:jobtitle,
      location_type:'ANY',
      years_of_experience:'ALL'
    }
    return this.http.get(`${this.apiUrl}/company-job-salary`, {headers:this.headers, params})
  }
}
