@login
Feature:registered user should be log in successfully with valid credentials and should be able to see successful log in message
  Scenario Outline:registered user should be able  to log in with valid credential
    Given registered user is on homepage

    When registerd user click on log in button
    And  User enter Email as "<Email>" and Password as "<Password>"
    And  clicks on log in button
    Then user should be able to see the message "<message>"

    Examples:
      | Email  | Password | message |
      | sksmart2107@gmail.com | Kantar007@@ | No Message |
      | sksmart2107@gmail.com |          | Login was unsuccessful. Please correct the errors and try again. No customer account found|
      |                       | Delhi123 | Please enter your email |
      |                       |           | Please enter your email |


