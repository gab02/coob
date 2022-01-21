import { NgwWowService } from 'ngx-wow';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngOnInit(): void {
  }

}
