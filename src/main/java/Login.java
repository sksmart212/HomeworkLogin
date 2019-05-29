import org.openqa.selenium.By;

public class Login  extends Utils{
    public void LoginButton() {
        clickElement(By.linkText("Log in"));
    }
    //function to login user with email and password
    public void LoginUser(String Email, String Password) {

        clearAndThenEnterText(By.id("Email"), Email);
        clearAndThenEnterText(By.id("Password"), Password);
        clickElement(By.xpath("//input[@class='button-1 login-button' and @value='Log in']"));
    }

    //function to validate user login is successful or not
    public void AssertMessage(String Msg)
    {
        if(Msg.equals("No Message")) {
            System.out.println("User Logged in Successfully");
        }
        else if (Msg.equals("Login was unsuccessful. Please correct the errors and try again. No customer account found"))
        {
            System.out.println("Login Unsuccessful");
        }
        else if (Msg.equals("Please enter your email"))
        {
            System.out.println("Email Address is Invalid");
        }
        else if (Msg.equals("Please enter your email "))
        {
            System.out.println("Login Credentials are Invalid");
        }
    }
}
