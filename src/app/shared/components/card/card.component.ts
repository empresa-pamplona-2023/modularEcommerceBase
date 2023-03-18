import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input('id') id!: string;
  @Input('name') name!: string;
  @Input('price') price!: string;
  @Input('brand') brand!: string;
  @Input('keyword') keyword!: string;
  @Input('img') img!: string;

}

