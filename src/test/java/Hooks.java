import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.mortbay.util.IO;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Hooks extends BasePage {
    private IO FileUtils;
    BrowserSelector Browserselector =new BrowserSelector();
    static String timestamp =new SimpleDateFormat("dd.MM.yy.HH.mm.SS").format(new Date());
    @Before
    public void setupBrowser() {
        Browserselector.setUpBrowser();

        driver.get("http://demo.nopcommerce.com/");

    }
    @After
    public void closeBrowser(Scenario scenario ) throws IOException {
        driver.quit();

        if (scenario.isFailed()) {

            capturescreenshot(driver,scenario.getName().replaceAll("[.,:;?!]","")+ timestamp + ".png");

        }}

    public void capturescreenshot(WebDriver String, String Name)
    {

        try{
            TakesScreenshot screenshot  =(TakesScreenshot)String;  /*we have to create object as it is interface*/

            File source =screenshot.getScreenshotAs(OutputType.FILE);


            FileUtils.copyFile(source, new File("./Screenshots/"+ Name ));

        }
        catch  (java.io.IOException e)
        {
            System.out.println("Failed to capture screenshot: " + e.getMessage());
        }

    }

}






