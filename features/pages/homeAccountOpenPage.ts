
import {browser, element, by} from 'protractor';

export class HomeAccountOpenPage {

  customerLoginBtn = element(by.xpath("//button[.='Customer Login']"));
  bankMgrLoginBtn = element(by.xpath("//button[.='Bank Manager Login']"));

  selectCustomerLogin() {
    this.customerLoginBtn.click();
  }

  selectBankMgrLogin() {
    this.bankMgrLoginBtn.click();
  }


}
