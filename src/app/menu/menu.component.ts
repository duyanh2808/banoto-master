import { Component, OnInit } from '@angular/core';
import { ApiService } from '../lib/api.service';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { BaseComponent } from '../lib/base-component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent implements OnInit {
  menus:any;
  constructor(private _api: ApiService) { 
    super();
  }
  ngOnInit(): void {
    this._api.get('/api/itemgroup/get-menu').takeUntil(this.unsubscribe).subscribe(res => {
      this.menus = res;
      debugger;
      console.log(this.menus);
    }); 
  }

}