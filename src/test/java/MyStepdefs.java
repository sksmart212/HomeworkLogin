import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;

public class MyStepdefs extends HomePage {
    HomePage myhome=new HomePage();
    private By ByCategory;
    @Given("^user is on homepage$")
    public void user_is_on_homepage(){
        // Write code here that turns the phrase above into concrete actions

    }

    @When("^user click on \"(.*?)\" link$")
    public void user_click_on_link(String arg1) {

        ByCategory=By.xpath("//a[@href='/" + arg1 + "'][1]");
       // ByCategory=By.linkText(arg1);
        myhome.NavigateURL(ByCategory);

    }

    @Then("^user should navigate on \"(.*?)\"$")
    public void user_should_navigate_on(String arg1)
    {
        myhome.assert_HomePage(arg1);
        // Write code here that turns the phrase above into concrete actions

    }

}
