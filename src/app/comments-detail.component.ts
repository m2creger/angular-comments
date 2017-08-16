import { Component, Input } from '@angular/core';
import { Comment } from './comments.model';

@Component({
	selector: 'comments-detail',
	template: `
		<div *ngIf="comment">
			
			
		      <div>
		        <label>Comment: </label>
		        <input [(ngModel)]="comment.comment" placeholder="comment"/>
		        <input [(ngModel)]="comment.author" placeholder="author"/>
		      </div>
		</div>
		<comments-detail [comment]="selectedComment"></comments-detail>
	`

})

export class CommentsDetailComponent {
	@Input() comment: Comment;
}