import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Accordian } from 'src/app/models/accordian';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionItemComponent implements OnInit {

  @Input() item: Accordian;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void { }

}
