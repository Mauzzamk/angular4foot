import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../service/book-service.service';
import { Observable } from 'rxjs/Observable';
import { Book } from './book';
import { ToastrUtil } from '../../service/toastr.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  allBooks$ : Observable<Book[]>;
  allImage$ : Observable<Book[]>;

  profile = {};
  constructor(private bookService : BookServiceService,private toastr : ToastrUtil) { }

  showSuccess() {
    this.toastr.showError();
  }

  ngOnInit() {
    this.getBooks();
this.getImage();
  }

  getBooks() {
    this.allBooks$ = this.bookService.getBooksFromStore("users");
}
getImage(){  
  
  this.allImage$= this.bookService.getUser();

}
  

}
