import { Component, AfterViewChecked } from '@angular/core';
import { HighlightService } from './highlight.service';

@Component({
  selector: 'app-root',
  template: `<main>
<app-functor></app-functor>
</main>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  private hightlighted: boolean = false;

  constructor(private highlightService: HighlightService) { }

  ngAfterViewChecked() {
    if (!this.hightlighted) {
      this.highlightService.hightlight();
      this.hightlighted = true;
    }
  }
}
