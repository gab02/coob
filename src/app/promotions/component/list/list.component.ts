import { NgwWowService } from 'ngx-wow';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private wowService: NgwWowService,private router: Router, ) {
    this.wowService.init();
  }

  ngOnInit(): void {
    this.wowService.init();
  }
  howWork(){
    this.router.navigate([ 'funcionamento']);

  }
  home(){
    this.router.navigate([ 'home']);

  }
  news(){
    this.router.navigate([ 'news']);

  }
  promotions(){
    this.router.navigate([ 'promotions']);

  }
  depostiions(){
    this.router.navigate([ 'depostions']);

  }partners(){
    this.router.navigate([ 'partners']);

  }
}
