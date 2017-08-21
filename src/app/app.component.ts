import { Component, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from './comments.model';
import { CommentService } from './comment.service';
import { EditCommentsComponent } from './edit-comments/edit-comments.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommentService]
})
export class AppComponent {
  loadedComment = 'comment';

  constructor() { }


  ngOnInit() {
 
  }
  
  onNavigate(comment: string) {
    this.loadedComment = comment;
  }
  
}
