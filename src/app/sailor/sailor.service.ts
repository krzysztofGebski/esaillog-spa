import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Sailor} from "./sailor";

@Injectable({
  providedIn: 'root'
})
export class SailorService {

  constructor(private httpClient: HttpClient) {
  }

  getSailors() {
    return this.httpClient.get<Sailor[]>('/api/sailors');
  }
}
