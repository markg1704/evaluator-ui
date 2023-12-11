import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evaluator-ui';

  public isUser(): boolean {
    // TODO - logic here
    return false;
  }

  public onSignIn(): void {
        // TODO - logic here
    console.log("Sign in clicked")
  }

  public onSignOut(): void {
        // TODO - logic here
    console.log("Sign out Clicked");
  }
}
