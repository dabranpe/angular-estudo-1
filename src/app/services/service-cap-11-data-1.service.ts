import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCap11Data1Service {

  constructor(private http: HttpClient) { }

  fetchData():Observable<any>{
    let auth_token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiIxNTQ1IiwibmFtZSI6IlRISUFHTyBEQSBTSUxWQSBDSFJJU1RPRk9MSSIsIkNPRElHT19GVU5DSU9OQUwiOiIwNTUzOTQiLCJqdGkiOiJkNjcwMzc0Yy1hYTVjLTRhNGItOTAxZS05OTFlMzRmNzE4YzIiLCJuYmYiOjE3MTQ2NTc2NDAsImlhdCI6MTcxNDY1NzY0MCwicm9sZSI6WyJQT1JUQUwiLCJSSCJdLCJleHAiOjE3MTQ2NzU2NDAsImlzcyI6IkVSUC1SZW5hdmUiLCJhdWQiOiJodHRwczovL2xvY2FsaG90cy5jb20ifQ.mxtniZrnNKwQ-d5-BaTjc7nXwgcAu26fWwhxuNUhnpk';
    
    let _httpOptions = {
      headers: new HttpHeaders({                
          'Authorization': `Bearer ${auth_token}`
      })
    };

    
    return this.http.get<any>('https://localhost:7231/api/cliente',  _httpOptions);      
    
    
  }
}
