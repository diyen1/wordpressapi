import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MdlSnackbarService} from '@angular-mdl/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wordpressapi client';

  fields = [
    {
      key: 'post_title',
      name: 'Post Title',
      type: 'text',
      value: '',
    },
    {
      key: 'post_content',
      name: 'Post Content',
      type: 'text_area',
      value: '',
    },
  ];

  loading = false;

  constructor(
    private http: HttpClient,
    private mdlSnackbarService: MdlSnackbarService,
    ) {}

  addPost(formData) {
  }

  ngOnInit(): void {
    // this.mdlSnackbarService.showSnackbar({
    //   message: 'Successfully added post',
    // });
  }
}
