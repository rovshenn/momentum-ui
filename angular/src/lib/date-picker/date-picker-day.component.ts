import { Component, OnInit, Input } from '@angular/core';
import { DatePickerService } from './date-picker.service';

@Component({
  selector: 'md-date-picker-day',
  template: `
    {{ displayDay }}
  `,
  styles: [],
  host: {
    class: 'md-button md-button--circle md-button--28 md-datepicker__day',
    '[class.md-button--disabled]': 'isDisable',
    '[class.md-datepicker__day--selected]': 'isSelected',
    '[class.md-datepicker__day--focus]': 'isFocus',
    '[class.md-datepicker__day--today]': 'isToday',
    '[class.md-datepicker__day--outside-month]': 'isOutsideMonth',
    '[attr.ariaLabel]': '',
    '[attr.aria-selected]': 'false',
    '[attr.tabIndex]': '-1',
    '(click)': 'onclick()'
  }
})
export class DatePickerDayComponent implements OnInit {

  /** @prop Required day that the DatePickerDay displays */
  @Input() day: any;
  /** @prop Required month that the DatePickerDay displays */
  @Input() month: any;

  public isDisable = false;
  public isSelected = false;
  public isFocus = false;
  public isToday = false;
  public isOutsideMonth = false;

  public displayDay;


  public onclick = () => {
    this.datePickerService.select(this.day);
    this.datePickerService.setOpenStatus(false);
  }

  constructor(
    private datePickerService: DatePickerService
  ) {
    const s = this.datePickerService;
    s.focused$.subscribe(date => {
      this.checkState();
    });
    s.selected$.subscribe(date => {
      this.checkState();
    });
    s.viewed$.subscribe(date => {
      this.checkState();
    });
  }

  ngOnInit() {
    this.displayDay = this.datePickerService.getDate(this.day);
    this.checkState();
  }

  private checkState = () => {
    const s = this.datePickerService,
      d = this.day;
    this.isDisable = s.isDayDisabled(d);
    this.isSelected = s.isSelected(d);
    this.isFocus = s.isFocus(d);
    this.isToday = s.isToday(d);
    this.isOutsideMonth = s.isOutsideMonth(d, this.month);
  }

}
