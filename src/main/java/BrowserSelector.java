import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class BrowserSelector extends  Utils{
    public void setUpBrowser() {
        String browser;
        LoadProp loadprop = new LoadProp();
        browser = loadprop.getProperty("Browser");
        System.setProperty("webdriver.chrome.driver", "src\\main\\Resources\\BrowserDriver\\chromedriver.exe");

        ChromeOptions options=new ChromeOptions();
        options.addArguments("--disable-infobars");
        options.addArguments("--disable-extension");
        options.addArguments("--disable-setUpBrowser-side-navigation");
        options.addArguments("--incognito");
        options.addArguments("--disable-blink-features-BlockCredentialeSubresources");
        driver=new ChromeDriver(options);
        driver.manage().window().fullscreen();
        waitForFixedTimeGivenInSecond(10);
    }

}
