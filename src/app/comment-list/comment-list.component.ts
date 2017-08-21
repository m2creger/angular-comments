import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Comment } from '../comments.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from '../comment.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentListComponent implements OnInit {

  comments: Comment[];

  subscription: Subscription;

  constructor(private commentService: CommentService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.subscription = this.commentService.commentChanged
  		.subscribe(
  			(comments: Comment[]) => {
  				this.comments = comments;
  			});
  		this.comments = this.commentService.getComments();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
