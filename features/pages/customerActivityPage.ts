
import {browser, element, by} from 'protractor';

export class CustomerSearchPage {
  customerName = element(by.css(".fontBig"));
  customerDepositBtn = element(by.css("[ng-class='btnClass2']"))
  amountBox = element(by.css("[ng-model='amount']"));
  submitBtn = element(by.css("[type='submit']"))

}


