
import {browser, element, by} from 'protractor';

export class CustomerSearchPage {

  customerSearch = element(by.id("userSelect"));
  selectUser = element(by.xpath("//option[.='Ron Weasly']"));
  loginPerson = element(by.css(".btn-default"));
}
