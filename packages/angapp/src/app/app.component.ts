import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { nonBuildableLib } from '@repo/non-buildable-lib';
import { buildableLib } from '@repo/buildable-lib'

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
