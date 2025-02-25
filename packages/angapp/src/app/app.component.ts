import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { nonBuildableLib } from '../../../non-buildable-lib/src/index';
import { buildableLib } from '../../../buildable-lib/src/index';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angapp';
  ngOnInit() {
    nonBuildableLib();
    buildableLib();
  }
}
