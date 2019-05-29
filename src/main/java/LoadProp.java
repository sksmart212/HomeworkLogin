import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class LoadProp {
    static Properties prop;
    static FileInputStream input;
    String fileName="Config.properties";/*create file config file*/
    String fileLocatio="src\\main\\Resources\\TestData\\";


    public String getProperty(String key)

    {
        prop=new Properties();
        try
        {
            input=new FileInputStream( fileLocatio + fileName);
            prop.load(input);
            input.close();
        }catch(IOException e)
        {
            e.printStackTrace();
        }
        return prop.getProperty(key);
    }











}
