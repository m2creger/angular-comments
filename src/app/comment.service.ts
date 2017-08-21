import { Injectable } from '@angular/core';
import { Comment } from './comments.model';

import { Subject } from 'rxjs/Subject';
@Injectable()
export class CommentService {
	
	commentChanged = new Subject<Comment[]>();
	private comments: Comment[] = [
		new Comment('first comment!', 'John Guy'),
		new Comment('nice work!', 'John Guy')
	];

	getComments() {
		return this.comments.slice();
	}
	getComment(index: number) {
		return this.comments[index];
	}

	addComment(comment: Comment) {
		this.comments.push(comment);
		this.commentChanged.next(this.comments.slice());
	}
	deleteComment(index: number) {
		this.comments.splice(index, 1);
		this.commentChanged.next(this.comments.slice());

	}
	updateComment(index: number, newComment: Comment) {
		this.comments[index] = newComment;
		this.commentChanged.next(this.comments.slice());

	}
}