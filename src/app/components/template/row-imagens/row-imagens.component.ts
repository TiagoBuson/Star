import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-row-imagens',
  templateUrl: './row-imagens.component.html',
  styleUrls: ['./row-imagens.component.css']
})
export class RowImagensComponent implements OnInit {

  @Input() img1:any = '';
  @Input() img2:any = '';
  @Input() img3:any = '';
  @Input() type:any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
