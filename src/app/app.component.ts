import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evaluator-ui';

  constructor(private modalService: NgbModal) {}

  public onShowAbout(aboutModal: any): void {
    this.modalService.open(aboutModal, { ariaLabelledBy: 'modal-basic-title' })
  }

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
