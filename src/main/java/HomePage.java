import org.openqa.selenium.By;

public class HomePage extends Utils{
    LoadProp loadProperties = new LoadProp();


    private By _Apparel = By.xpath("//a[@href=\"/apparel\"]");
    private By Books = By.xpath("//a[@href=\"/books\"]");

    private By _Computers = By.xpath("//a[@href='/computers'][1]");
    private By _Notebooks = By.xpath("//a[@href='/notebooks'][1]");


    //Assert HomePage
    public void assert_HomePage(String StrExpected)


    {
        assertCurrentURL(StrExpected);
    }




    public void NavigateURL(By navigation)
    {
        clickElement(navigation);


}


    }




