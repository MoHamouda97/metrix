import { Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  constructor(private router: Router) {}

  logout() {
    sessionStorage.clear();
    this.router.navigate(['sign-in'])
  }

}
