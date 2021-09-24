const { element, browser } = require("protractor");

describe('Loging in as a', function () {
  it('Bank manager, Bob should be able to log in', function () {

    browser.get('https://www.way2automation.com/angularjs-protractor/banking/#/login');

    bankMgrLoginBtn = element(by.xpath("//button[.='Bank Manager Login']"));
    bankMgrLoginBtn.click();
    expect(browser.getCurrentUrl()).toBe('https://www.way2automation.com/angularjs-protractor/banking/#/manager');

  });
  it('Customer Kate, should be able to log in', function () {

    browser.get('https://www.way2automation.com/angularjs-protractor/banking/#/login');

    customerLoginBtn = element(by.xpath("//button[.='Customer Login']"));
    customerLoginBtn.click();
    expect(browser.getCurrentUrl()).toBe('https://www.way2automation.com/angularjs-protractor/banking/#/customer');

  });

  it('Bob should be able to add new customer Karen', function () {

    browser.get('https://www.way2automation.com/angularjs-protractor/banking/#/login');
    bankMgrLoginBtn = element(by.xpath("//button[.='Bank Manager Login']"));
    createCustomerBtn = element(by.xpath("//button[contains(.,'Add Customer')]"));
    firstName = element(by.css("[placeholder = 'First Name']"));
    lastName = element(by.css("[placeholder = 'Last Name']"));
    postalCode = element(by.css("[placeholder = 'Post Code']"));
    addCustomerBtn = element(by.xpath("//button[@class='btn btn-default']"));
    bankMgrLoginBtn.click();
    expect(browser.getCurrentUrl()).toBe('https://www.way2automation.com/angularjs-protractor/banking/#/manager');
    createCustomerBtn.click();
    firstName.sendKeys("Karen");
    lastName.sendKeys("Authur");
    postalCode.sendKeys("07234");
    addCustomerBtn.click();
    browser.sleep(1000);
    browser.switchTo().alert().accept();
  });
  it('Karen should be available on the customer list', function () {

    browser.get('https://www.way2automation.com/angularjs-protractor/banking/#/login');
    bankMgrLoginBtn = element(by.xpath("//button[.='Bank Manager Login']"));
    customerListBtn = element(by.xpath("//button[contains(.,'Customers')]"));
    customerSearchLst = element(by.css("[ng-model='searchCustomer']"));
    customerTable = element(by.xpath("//table"));
    bankMgrLoginBtn.click();
    expect(browser.getCurrentUrl()).toBe('https://www.way2automation.com/angularjs-protractor/banking/#/manager');
    customerListBtn.click();
    customerSearchLst.click();
    customerSearchLst.sendKeys("Karen");
    browser.sleep(1000);
    expect(customerTable.getText()).toContain("Karen");
  });

  it('Bob should be able to delete customer Ron', function () {
    browser.get('https://www.way2automation.com/angularjs-protractor/banking/#/login');
    bankMgrLoginBtn = element(by.xpath("//button[.='Bank Manager Login']"));
    customerListBtn = element(by.xpath("//button[contains(.,'Customers')]"));
    customerSearchLst = element(by.css("[ng-model='searchCustomer']"));
    customerTable = element(by.xpath("//table"));
    customerDelBtn = element(by.css("[ng-click='deleteCust(cust)']"));
    bankMgrLoginBtn.click();
    expect(browser.getCurrentUrl()).toBe('https://www.way2automation.com/angularjs-protractor/banking/#/manager');
    customerListBtn.click();
    customerSearchLst.click();
    customerSearchLst.sendKeys("Ron");
    browser.sleep(1000);
    expect(customerTable.getText()).toContain("Ron");
    customerDelBtn.click();
    browser.sleep(1000);
    customerListBtn.click();
    customerSearchLst.click();
    customerSearchLst.clear();
    browser.sleep(1000);
    customerSearchLst.sendKeys("Ron");
    expect(customerTable.getText()).not.toContain("Ron");
  });

  it('Customer Harry, should be able to deposit $20 in his account and verify the balance increases by same', function () {
    browser.get('https://www.way2automation.com/angularjs-protractor/banking/#/login');
    customerLoginBtn = element(by.xpath("//button[.='Customer Login']"));
    userSelectBtn = element(by.id("userSelect"));
    userSelect = element(by.css("[value='2']"));
    userLoginBtn = element(by.css(".btn-default"));
    depositBtn = element(by.css("[ng-class='btnClass2']"));
    amountInput = element(by.css("[ng-model='amount']"));
    depositSubmitBtn = element(by.css("[type='submit']"));
    depositConfirmText = element(by.css(".error"));
    accountBalance = element(by.css("strong:nth-of-type(2)"));
    customerLoginBtn.click();
    expect(browser.getCurrentUrl()).toBe('https://www.way2automation.com/angularjs-protractor/banking/#/customer');
    userSelectBtn.click();
    userSelect.click();
    userLoginBtn.click();
    expect(browser.getCurrentUrl()).toBe('https://www.way2automation.com/angularjs-protractor/banking/#/account');
    depositBtn.click();
    amountInput.sendKeys("20");
    depositSubmitBtn.click();
    expect(depositConfirmText.getText()).toEqual('Deposit Successful');
    expect(accountBalance.getText()).toEqual('20');

  });
  it('Customer Harry, should not be able to withdraw $90 from his available balance in his account', function () {
    browser.get('https://www.way2automation.com/angularjs-protractor/banking/#/login');
    customerLoginBtn = element(by.xpath("//button[.='Customer Login']"));
    userSelectBtn = element(by.id("userSelect"));
    userSelect = element(by.css("[value='2']"));
    userLoginBtn = element(by.css(".btn-default"));
    withdrawalBtn = element(by.css("[ng-class='btnClass3']"));
    amountInput = element(by.css("[ng-model='amount']"));
    withdrawalSubmitBtn = element(by.css("[type='submit']"));
    depositConfirmText = element(by.css(".error"));
    accountBalance = element(by.css("strong:nth-of-type(2)"));
    customerLoginBtn.click();
    expect(browser.getCurrentUrl()).toBe('https://www.way2automation.com/angularjs-protractor/banking/#/customer');
    userSelectBtn.click();
    userSelect.click();
    userLoginBtn.click();
    expect(browser.getCurrentUrl()).toBe('https://www.way2automation.com/angularjs-protractor/banking/#/account');
    withdrawalBtn.click();
    amountInput.sendKeys("90");
    withdrawalSubmitBtn.click();
    expect(depositConfirmText.getText()).toEqual('Transaction Failed. You can not withdraw amount more than the balance.');
    expect(accountBalance.getText()).toEqual('20');

  });


});
