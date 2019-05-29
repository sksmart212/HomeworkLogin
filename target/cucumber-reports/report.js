$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "registered user should be log in successfully with valid credentials and should be able to see successful log in message",
  "description": "",
  "id": "registered-user-should-be-log-in-successfully-with-valid-credentials-and-should-be-able-to-see-successful-log-in-message",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "registered user should be able  to log in with valid credential",
  "description": "",
  "id": "registered-user-should-be-log-in-successfully-with-valid-credentials-and-should-be-able-to-see-successful-log-in-message;registered-user-should-be-able--to-log-in-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "registered user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "registerd user click on log in button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter Email as \"\u003cEmail\u003e\" and Password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be able to see the message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "registered-user-should-be-log-in-successfully-with-valid-credentials-and-should-be-able-to-see-successful-log-in-message;registered-user-should-be-able--to-log-in-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password",
        "message"
      ],
      "line": 12,
      "id": "registered-user-should-be-log-in-successfully-with-valid-credentials-and-should-be-able-to-see-successful-log-in-message;registered-user-should-be-able--to-log-in-with-valid-credential;;1"
    },
    {
      "cells": [
        "sksmart2107@gmail.com",
        "Kantar007@@",
        "No Message"
      ],
      "line": 13,
      "id": "registered-user-should-be-log-in-successfully-with-valid-credentials-and-should-be-able-to-see-successful-log-in-message;registered-user-should-be-able--to-log-in-with-valid-credential;;2"
    },
    {
      "cells": [
        "sksmart2107@gmail.com",
        "",
        "Login was unsuccessful. Please correct the errors and try again. No customer account found"
      ],
      "line": 14,
      "id": "registered-user-should-be-log-in-successfully-with-valid-credentials-and-should-be-able-to-see-successful-log-in-message;registered-user-should-be-able--to-log-in-with-valid-credential;;3"
    },
    {
      "cells": [
        "",
        "Delhi123",
        "Please enter your email"
      ],
      "line": 15,
      "id": "registered-user-should-be-log-in-successfully-with-valid-credentials-and-should-be-able-to-see-successful-log-in-message;registered-user-should-be-able--to-log-in-with-valid-credential;;4"
    },
    {
      "cells": [
        "",
        "",
        "Please enter your email"
      ],
      "line": 16,
      "id": "registered-user-should-be-log-in-successfully-with-valid-credentials-and-should-be-able-to-see-successful-log-in-message;registered-user-should-be-able--to-log-in-with-valid-credential;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13602409198,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "registered user should be able  to log in with valid credential",
  "description": "",
  "id": "registered-user-should-be-log-in-successfully-with-valid-credentials-and-should-be-able-to-see-successful-log-in-message;registered-user-should-be-able--to-log-in-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "registered user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "registerd user click on log in button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter Email as \"sksmart2107@gmail.com\" and Password as \"Kantar007@@\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be able to see the message \"No Message\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs2.registered_user_is_on_homepage()"
});
formatter.result({
  "duration": 240438312,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs2.registerd_user_click_on_log_in_button()"
});
formatter.result({
  "duration": 2268102207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sksmart2107@gmail.com",
      "offset": 21
    },
    {
      "val": "Kantar007@@",
      "offset": 61
    }
  ],
  "location": "MyStepdefs2.user_enter_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 2646739545,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs2.clicks_on_log_in_button()"
});
formatter.result({
  "duration": 93640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No Message",
      "offset": 40
    }
  ],
  "location": "MyStepdefs2.user_should_be_able_to_see_the_message(String)"
});
formatter.result({
  "duration": 478396,
  "status": "passed"
});
formatter.after({
  "duration": 839292956,
  "status": "passed"
});
formatter.before({
  "duration": 9265311501,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "registered user should be able  to log in with valid credential",
  "description": "",
  "id": "registered-user-should-be-log-in-successfully-with-valid-credentials-and-should-be-able-to-see-successful-log-in-message;registered-user-should-be-able--to-log-in-with-valid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "registered user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "registerd user click on log in button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter Email as \"sksmart2107@gmail.com\" and Password as \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be able to see the message \"Login was unsuccessful. Please correct the errors and try again. No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs2.registered_user_is_on_homepage()"
});
formatter.result({
  "duration": 32472,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs2.registerd_user_click_on_log_in_button()"
});
formatter.result({
  "duration": 2093409539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sksmart2107@gmail.com",
      "offset": 21
    },
    {
      "val": "",
      "offset": 61
    }
  ],
  "location": "MyStepdefs2.user_enter_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 1645474269,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs2.clicks_on_log_in_button()"
});
formatter.result({
  "duration": 80047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. No customer account found",
      "offset": 40
    }
  ],
  "location": "MyStepdefs2.user_should_be_able_to_see_the_message(String)"
});
formatter.result({
  "duration": 203139,
  "status": "passed"
});
formatter.after({
  "duration": 1037320922,
  "status": "passed"
});
formatter.before({
  "duration": 9262194188,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "registered user should be able  to log in with valid credential",
  "description": "",
  "id": "registered-user-should-be-log-in-successfully-with-valid-credentials-and-should-be-able-to-see-successful-log-in-message;registered-user-should-be-able--to-log-in-with-valid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "registered user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "registerd user click on log in button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter Email as \"\" and Password as \"Delhi123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be able to see the message \"Please enter your email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs2.registered_user_is_on_homepage()"
});
formatter.result({
  "duration": 37381,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs2.registerd_user_click_on_log_in_button()"
});
formatter.result({
  "duration": 2490845534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    },
    {
      "val": "Delhi123",
      "offset": 40
    }
  ],
  "location": "MyStepdefs2.user_enter_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 447380603,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs2.clicks_on_log_in_button()"
});
formatter.result({
  "duration": 30206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your email",
      "offset": 40
    }
  ],
  "location": "MyStepdefs2.user_should_be_able_to_see_the_message(String)"
});
formatter.result({
  "duration": 209558,
  "status": "passed"
});
formatter.after({
  "duration": 798722566,
  "status": "passed"
});
formatter.before({
  "duration": 18581172119,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "registered user should be able  to log in with valid credential",
  "description": "",
  "id": "registered-user-should-be-log-in-successfully-with-valid-credentials-and-should-be-able-to-see-successful-log-in-message;registered-user-should-be-able--to-log-in-with-valid-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "registered user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "registerd user click on log in button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter Email as \"\" and Password as \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be able to see the message \"Please enter your email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs2.registered_user_is_on_homepage()"
});
formatter.result({
  "duration": 41912,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs2.registerd_user_click_on_log_in_button()"
});
formatter.result({
  "duration": 3410408944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "MyStepdefs2.user_enter_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 336672917,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs2.clicks_on_log_in_button()"
});
formatter.result({
  "duration": 25298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your email",
      "offset": 40
    }
  ],
  "location": "MyStepdefs2.user_should_be_able_to_see_the_message(String)"
});
formatter.result({
  "duration": 97038,
  "status": "passed"
});
formatter.after({
  "duration": 939649619,
  "status": "passed"
});
});