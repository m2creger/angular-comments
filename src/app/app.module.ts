import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { HttpModule } from '@angular/http';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentService } from './comment.service';
import { EditCommentsComponent } from './edit-comments/edit-comments.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { CommentComponent } from './comment/comment.component';
import { CommentsComponent } from './comments/comments.component';



@NgModule({
  declarations: [
    AppComponent,
    NewCommentComponent,
    CommentListComponent,
    EditCommentsComponent,
    CommentDetailComponent,
    CommentComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
