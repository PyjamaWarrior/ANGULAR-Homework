import {Component, OnInit} from '@angular/core';
import {Car} from '../../models/car';
import {carsList} from '../../../data/carsList';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: Car[] = carsList;

  constructor() {
  }

  ngOnInit(): void {
  }

}
