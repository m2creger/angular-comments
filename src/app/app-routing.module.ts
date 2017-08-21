import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route files
import  { CommentsComponent } from './comments/comments.component';

import { CommentListComponent } from './comment-list/comment-list.component';
import { EditCommentsComponent } from './edit-comments/edit-comments.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
const commentRoutes: Routes = [
	{ path: '', redirectTo: '/comments', pathMatch: 'full'},
	{ path: 'comments', component: CommentsComponent, children: [
		{ path: 'new', component: EditCommentsComponent },
		{ path: ':id', component: CommentDetailComponent },
		{ path: ':id/edit', component: EditCommentsComponent},

	]}
	

];

@NgModule({
  imports: [RouterModule.forRoot(commentRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}