import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.httpClientService.get({
      controller: "products"
    }).subscribe(data => console.log(data));

    /*     this.httpClientService.delete({
          controller: "products"
        },
          "6730bf56-591b-4c3f-9f68-bfeee2d8bf29").subscribe(); */

    /* this.httpClientService.put({ controller: "products" },
      {
        id: "6730bf56-591b-4c3f-9f68-bfeee2d8bf29",
        name: "Renkli Kalemler",
        stock: 5000,
        price: 10.2
      }
    ).subscribe(); */

    /*     this.httpClientService.post({
          controller: "products"
        }, {
          name: "Kalem",
          stock: 100,
          price: 15
        }).subscribe(); */
  }


}
