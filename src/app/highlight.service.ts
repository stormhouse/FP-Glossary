import { Injectable } from '@angular/core';

import 'prismjs';
import 'prismjs/components/prism-javascript';

declare var Prism: any;

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  constructor() { }

  public hightlight(): void {
    Prism.highlightAll();
  }
}
