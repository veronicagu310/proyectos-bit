import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-icon-detail',
  templateUrl: './icon-detail.component.html',
  styleUrls: ['./icon-detail.component.css']
})
export class IconDetailComponent implements OnInit {

  @Input() source: string;
  @Input() label: string;
  @Output() message = new EventEmitter();

  form?: FormGroup;
  name?: string;
  user?: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log('source', this.source);
    this.message.emit('Hola mundo');
  }

}
