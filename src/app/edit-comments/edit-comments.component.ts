import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-edit-comments',
  templateUrl: './edit-comments.component.html',
  styleUrls: ['./edit-comments.component.css']
})
export class EditCommentsComponent implements OnInit {
  id: number;
  editMode = false;
  commentForm: FormGroup;
  
  constructor(private route: ActivatedRoute,
              private commentService: CommentService,
              private router: Router) { }

  ngOnInit() {
    console.log("editing comments");
  	this.route.params
  		.subscribe(
  			(params: Params) => {
  				this.id = +params['id'];
  				this.editMode = params['id'] != null;
          this.initForm();
  		});
  }

  onSubmit() {
    if (this.editMode) {
      this.commentService.updateComment(this.id, this.commentForm.value);
    } else {
      this.commentService.addComment(this.commentForm.value);
    }
    this.onCancel();
   }

   onCancel() {
     this.router.navigate(['../'], {relativeTo: this.route});
   }
   
   private initForm() {
     let commentText = '';
     let commentAuthor = '';

     if (this.editMode) {
       const comment = this.commentService.getComment(this.id);
       commentText = comment.comment;
       commentAuthor = comment.author;
     }

     this.commentForm = new FormGroup({
        'comment': new FormControl(commentText),
        'author': new FormControl(commentAuthor)
     })
   }
}
