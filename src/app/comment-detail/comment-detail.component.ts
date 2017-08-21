import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Comment } from '../comments.model';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {
  comment: Comment;
  id: number;

  constructor(private commentService: CommentService,
  			  private route: ActivatedRoute,
  			  private router: Router) { }

  ngOnInit() {
    console.log("comment detail activated");
  	this.route.params
  		.subscribe(
  			(params: Params) => {
  				this.id = +params['id'];
  				this.comment = this.commentService.getComment(this.id);
  			})
  }

  onEditComment() {
  	this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteComment() {
  	this.commentService.deleteComment(this.id);
  	this.router.navigate(['/comments']);
  }

}
