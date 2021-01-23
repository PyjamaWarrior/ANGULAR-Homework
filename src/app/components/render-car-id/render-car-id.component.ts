import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-render-car-id',
  templateUrl: './render-car-id.component.html',
  styleUrls: ['./render-car-id.component.scss']
})
export class RenderCarIdComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
