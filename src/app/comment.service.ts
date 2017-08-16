import { Injectable } from '@angular/core';
import { Comment } from './comments.model';
import { COMMENTS } from './mock-comments';

@Injectable()
export class CommentService {
	getComments(): Promise<Comment[]> {
		return Promise.resolve(COMMENTS);
	}
}