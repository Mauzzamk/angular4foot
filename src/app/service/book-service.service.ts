import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../layout/dashboard/book';



@Injectable()
export class BookServiceService {

  bookUrl = "https://jsonplaceholder.typicode.com";	
 imageUrl = ""

    constructor(private http: HttpClient) { }

    getBooksFromStore(user: string): Observable<Book[]> {
        return this.http.get<Book[]>(this.bookUrl + "/" + user);
    }
    getFavBookFromStore(id: number): Observable<Book> {
        return this.http.get<Book>(this.bookUrl + "/" + id);
    }    
    getBooksByCategoryFromStore(category: string): Observable<Book[]> {
        return this.http.get<Book[]>(this.bookUrl + "?category=" + category);
    }        
    getUser() : Observable <any>{
      return this.http.get<any>(this.imageUrl);
      
    }
}