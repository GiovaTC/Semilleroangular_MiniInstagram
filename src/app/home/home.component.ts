import { Component } from '@angular/core';
import { PersonalInformationService } from '../services/personal-information.service';
import { PersonalInformationType } from '../../types/PersonalInformation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  account: PersonalInformationType | null = null;

  constructor(private personalInformation: PersonalInformationService) {}

  ngOnInit() {
    this.account = this.personalInformation.getPersonalInformation();
    console.log("this.account", this.account)
  }

}
