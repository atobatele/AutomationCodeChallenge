
Feature: Automate As an Engr. Candidate I need to automate https://www.way2automation.com/angularjs-protractor/banking/#/login/

  @newcustomer
  Scenario: As bank manager ,Add a customer and validate the customer has been added to the table under customer tab
    Given Bank manager is logged in
    When Bank manager clicks Add Customer button
    And Bank manager enters customer details in the fields
    And Bank manager clicks the Add Customer button
    Then A new customer should be successfully created

  @deletecustomer
  Scenario: As bank manager ,Delete customer Name: Ron and validate customer has been deleted”
    Given Bank manager is logged in
    When Bank manager clcks the Customers button
    And Bank manager searches for customer Ron
    And Bank manager clicks the delete button for the record
    Then the record for Ron should no longer be listed.

  @deposit
  Scenario: As a Customer, make a deposit and confirm my balance is correct
    Given Customer is logged in
    When Customer clicks on deposit button
    And Customer enters 20 to be deposited
    And Customer clicks on Deposit button
    Then I should see Deposit successful
    Then Customer should see the balance increase by amount deposited.

  @withdrwal
  Scenario: As a Customer, ensure I cannot withdraw more from my account than is in my balance
    Given Customer is logged in
    When Customer clicks on Withdrawal button
    And Customer enters amount more than balance to withdrawn
    And Customer clicks on Withdraw button
    Then I should see Transaction failed message
    Then Customer should see the balance remain the same.
