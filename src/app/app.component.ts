import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}
  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 3000);

    try {
      AOS.init();
    } catch (error) {
      console.log(error);
    }
  }
}
