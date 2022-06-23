import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card} from "../models/card";

@Injectable({
  providedIn: 'root'
})

export class CardService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private http: HttpClient
  ) {}

  getCard(): Observable<Card[]> {
    return this.http.get<Card[]>('/cards');
  }
}
