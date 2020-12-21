import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NepaliDate } from './types';

@Component({
  selector: 'jui-datepicker',
  templateUrl: 'jui-datepicker.component.html',
  styleUrls: [
    'jui-datepicker.component.css'
  ]
})
export class JuiDatepickerComponent implements OnInit {
  @Input("isEnglish") isEnglish: boolean = true;
  @Output("onDateSelected") onDateSelected = new EventEmitter();

  isOpen = false;
  selectedDate: NepaliDate;
  currentDate = new Date();
  dayOver = false;
  monthOver = false;
  yearOver = false;
  years = [];
  days = [
    '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32'
  ];
  months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
  yearsEnglish = [
    '2000', '2001','2002', '2003','2004', '2005','2006', '2007','2008', '2009','2010', 
    '2011','2012', '2013','2014', '2015','2016', '2017','2018','2019','2020',
    '2021','2022','2023','2025','2026','2027','2028','2029','2030'];

  yearsNepali = [
      '2060', '2061', '2062', '2063', '2064', '2065', '2066', '2067','2068', '2069',
      '2070', '2071', '2072', '2073', '2074', '2075', '2076', '2077','2078', '2079',
      '2080', '2081', '2082', '2083', '2084', '2085', '2086', '2087','2088', '2089'
  ];
  
  selectedDay = "0";
  selectedMonth = "0";
  selectedYear = "0";
  showDatePicker = false;
  formattedDate = "";
  dateFormatter = (selectedDate: NepaliDate) => {
    const dd =
      Number(this.selectedDate.day) < 10 ? "0" + selectedDate.day : selectedDate.day;
    const mm =
      Number(this.selectedDate.month) < 10 ? "0" + selectedDate.month : selectedDate.month;
    return `${dd}/${mm}/${this.selectedDate.year}`;
  };
  
  constructor() { }

  ngOnInit(): void {
    // init with current day
    let date = new Date();
    this.selectedDay = date.getDate() + "";
    this.selectedMonth = (date.getMonth() + 1)+ "";
    this.selectedYear = date.getFullYear() + "";
    this.selectedDate = { day: this.selectedDay, month: this.selectedMonth, year: this.selectedYear};
    if(this.isEnglish)
      this.years = this.yearsEnglish;
    else
      this.years = this.yearsNepali;
  }

  setCurrentDate()
  {
    let currentNepaliDate;    
  }

  prevDay()
  {
    let index = this.days.indexOf(this.selectedDay);
     if(index === 0)
        index = this.days.length;
     this.selectedDay = this.days[--index];
  }

  nextDay()
  {
    let index = this.days.indexOf(this.selectedDay);
    if(index === (this.days.length - 1))
       index = -1;     
    this.selectedDay = this.days[++index];
  }

  
  prevMonth()
  {
    let index = this.months.indexOf(this.selectedMonth);
     if(index === 0)
        index = this.months.length;
     this.selectedMonth = this.months[--index];
  }

  nextMonth()
  {
     let index = this.months.indexOf(this.selectedMonth);
     if(index === (this.months.length - 1))
        index = -1;     
     this.selectedMonth = this.months[++index];
  }

  prevYear()
  {
    let index = this.years.indexOf(this.selectedYear);
    if(index === 0)
       index = this.years.length;
    this.selectedYear = this.years[--index];
  }

  nextYear()
  {
    let index = this.years.indexOf(this.selectedYear);
    if(index === (this.years.length - 1))
       index = -1;     
    this.selectedYear = this.years[++index];
  }

  open() 
  {
    this.isOpen = true;
  }

  toggleDatePicker(target)
  {
    if(!this.isOpen && target == "outside") return;
    // check if this drop down is opened or no
    this.isOpen = !this.isOpen;    
  }

  dateSelected()
  {  
    this.isOpen = false;
    this.selectedDate.day = this.selectedDay;
    this.selectedDate.month = this.selectedMonth;
    this.selectedDate.year = this.selectedYear;
    this.fromValue();
    this.onDateSelected.emit(this.selectedDate);
  }

  fromValue()
  {
    if(this.selectedDay && this.selectedMonth && this.selectedYear)
    {
      this.formattedDate = this.dateFormatter(this.selectedDate);
    }
  }
}