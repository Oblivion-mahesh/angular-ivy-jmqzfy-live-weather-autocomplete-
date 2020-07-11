import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  formattedAddress='';
  options = {
    compopnentRestrictions :{
      country:['Au']
    }
  }
  public handleAddressChange(address: any) {
    this.formattedAddress = address.formatted_address;
        // Do some stuff
    }

  name = 'Angular ' + VERSION.major;
  
}
