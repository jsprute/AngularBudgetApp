import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountType, Account } from './../entities'

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  private baseUrl = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient) { }

  ////////////////////////
  // ACCOUNT TYPES
  ////////////////////////  
  getAccountTypes(): Observable<AccountType[]>{
    return this.http.get<AccountType[]>(`${this.baseUrl}/accounttypes`);
  }

  createAccountType(record: AccountType): Observable<AccountType>{
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post<AccountType>(`${this.baseUrl}/accounttypes`, JSON.stringify(record).replace(/"_/g, '"'),options);
  }

  updateAccountType(record: AccountType): Observable<AccountType>{
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.put<AccountType>(`${this.baseUrl}/accounttypes/${record.id}`, JSON.stringify(record).replace(/"_/g, '"'), options);
  } 
  
  getAccountType(id: number): Observable<AccountType>{
    return this.http.get<AccountType>(`${this.baseUrl}/accounttypes/${id}`);
  }
  
  deleteAccountType(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/accounttypes/${id}`);
  }

  //////////////////////////
  // ACCOUNTS
  /////////////////////////
  getAccounts(): Observable<Account[]>{
    return this.http.get<Account[]>(`${this.baseUrl}/accounts`);
  }

  createAccount(record: Account): Observable<Account>{
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post<Account>(`${this.baseUrl}/accounts`, JSON.stringify(record).replace(/"_/g, '"'),options);
  }

  updateAccount(record: Account): Observable<Account>{
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.put<Account>(`${this.baseUrl}/accounts/${record.id}`, JSON.stringify(record).replace(/"_/g, '"'), options);
  } 
  
  getAccount(id: number): Observable<Account>{
    return this.http.get<Account>(`${this.baseUrl}/accounts/${id}`);
  }
  
  deleteAccount(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/accounts/${id}`);
  }
}
