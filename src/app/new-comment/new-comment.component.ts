import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';
import { Comment } from '../comments.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  commentForm: FormGroup;

  constructor(private commentService: CommentService,
              private router: Router,
              private route: ActivatedRoute) { }

  onSubmit() {
    console.log(this.commentForm.value)
    this.commentService.addComment(this.commentForm.value);
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    let newComment = '';
    let newAuthor = '';

    this.commentForm = new FormGroup ({
      'comment': new FormControl(newComment),
      'author': new FormControl(newAuthor)
    })
  }

}
