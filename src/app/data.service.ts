import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{environment} from '../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
gifs=new BehaviorSubject<any>([]);
  constructor(private http: HttpClient ) {}
  
  searchGifs(gifName:string){
    return this.http.get('https://api.giphy.com/v1/gifs/search?limit=30&q='+ 
    gifName +'&api_key='+ environment.gifyApiKey)
    .subscribe((response:any)=>{
    this.gifs.next(response.data)
    });
  }  
  getGifs(){
    return this.gifs.asObservable();
  }
}
