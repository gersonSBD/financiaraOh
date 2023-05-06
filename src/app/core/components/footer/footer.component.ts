import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public items: any[];

  constructor() {
    this.items = [];
  }

  ngOnInit(): void {
  }

}
