import { NgwWowService } from 'ngx-wow';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  showFiller = false;

  constructor(private wowService: NgwWowService,public dialog: MatDialog,private router: Router, ) {
    this.wowService.init();
  }

  ngOnInit(): void {
    this.wowService.init();
  }
howWork(){
  this.router.navigate([ 'funcionamento']);

}
openDialog() {
  const dialogRef = this.dialog.open(DialogContentExampleDialog);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
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
 this.router.navigate([ 'depositions']);

}partners(){
  this.router.navigate([ 'partners']);

}
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
  styleUrls: ['./list.component.scss']

})
export class DialogContentExampleDialog {
  hotel: boolean = false;
}
