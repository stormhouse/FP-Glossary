import { Component, AfterViewChecked } from '@angular/core';
import { HighlightService } from './highlight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  constructor(private highlightService: HighlightService) { }

  ngAfterViewChecked() {

  }
}
