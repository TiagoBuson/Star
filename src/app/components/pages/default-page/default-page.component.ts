import { Component, OnInit } from '@angular/core';
import {endWith} from "rxjs";
import {keyframes} from "@angular/animations";

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent implements OnInit {
  jpeg: any = "jpeg";
  jpg: any = "jpg";



  constructor() {
  }

  ngOnInit(): void {
  }

}
