import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-enquire',
  templateUrl: './enquire.component.html',
  styleUrls: ['./enquire.component.css']
})
export class EnquireComponent implements OnInit {
  enquiryForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<EnquireComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.enquiryForm = this.fb.group({
      fullName: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.pattern(EMAIL_REGEX)]],
      mobile: ['',Validators.required],
      details: ['', Validators.required]
    })
  }
}
