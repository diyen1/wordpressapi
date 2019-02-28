import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CrudField} from '../crud-field';
import {HttpClient} from '@angular/common/http';
import {MdlSnackbarService} from '@angular-mdl/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-crud-create',
  templateUrl: './crud-create.component.html',
  styleUrls: ['./crud-create.component.scss']
})
export class CrudCreateComponent implements OnInit, OnChanges {

  form: any;

  @Input() fields: CrudField[] = [];

  @Input() submitButtonText = 'Submit';

  @Input() loading = false;

  @Output() outputData: any = new EventEmitter<any>();

  controlsConfig = {};

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private mdlSnackbarService: MdlSnackbarService,
  ) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initializeForm();
  }

  initializeForm(): void {

    for (let i = 0; i < this.fields.length; i++) {
      const field = this.fields[i];
      const value = field.value || '';
      this.controlsConfig[field.key] = [value, Validators.required];
    }

    /*this.form = this.fb.group({
      fullNames: ['', Validators.required],
      mobilePhone: ['', Validators.required],
      homePhone: ['', Validators.required],
      town: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
    });*/

    this.form = this.fb.group(this.controlsConfig);
  }

  onSubmit(formData) {
    this.loading = true;

    for (let i = 0; i < this.fields.length; i++) {
      const field = this.fields[i];

      if (field.type === 'image_array') {
        const imageCount = field.image_count;
        formData[field.key] = [];
        for (i = 0; i < imageCount; i++) {
          if (formData[field.key + '_' + i] !== '') {
            formData[field.key].push(formData[field.key + '_' + i]);
          }
          delete formData[field.key + '_' + i];
        }
      }
    }

    this.form.reset();

    // this.http.post('https://diyenmomjang.info/wordpressapi/wp-json/dm/add_post', formData).subscribe((data) => {
    this.http.post(environment.url + '/wp-json/dm/add_post', formData).subscribe(
      (data) => {
        console.log('addPost', data);
        this.loading = false;
        this.mdlSnackbarService.showSnackbar({
          message: 'Successfully added post',
        });
      },
      () => {
        this.loading = false;
      }
    );

    this.outputData.emit(formData);
  }

  fileAddedCallback() {
    console.log('file added callback');
  }

}
