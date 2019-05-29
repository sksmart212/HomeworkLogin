import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs2 extends Login{
    @Given("^registered user is on homepage$")
    public void registered_user_is_on_homepage()  {
        // Write code here that turns the phrase above into concrete actions

    }

    @When("^registerd user click on log in button$")
    public void registerd_user_click_on_log_in_button() {

        LoginButton();
    }

    @When("^User enter Email as \"(.*?)\" and Password as \"(.*?)\"$")
    public void user_enter_Email_as_and_Password_as(String arg1, String arg2) {
        LoginUser(arg1,arg2);

    }

    @When("^clicks on log in button$")
    public void clicks_on_log_in_button()  {
        // Write code here that turns the phrase above into concrete actions

    }

    @Then("^user should be able to see the message \"(.*?)\"$")
    public void user_should_be_able_to_see_the_message(String arg1)  {
        AssertMessage(arg1);

    }

}
