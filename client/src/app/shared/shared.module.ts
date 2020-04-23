import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagerComponent } from './components/pager/pager.component';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { OrderTotalComponent } from './components/order-total/order-total.component';

@NgModule({
  declarations: [PagingHeaderComponent, PagerComponent, OrderTotalComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    CarouselModule,
    OrderTotalComponent
  ]
})
export class SharedModule { }
