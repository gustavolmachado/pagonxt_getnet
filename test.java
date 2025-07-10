import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import java.net.URL;
import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

public class AddContactTest {

    public static void main(String[] args) {

        AndroidDriver<MobileElement> driver;

        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
        caps.setCapability(MobileCapabilityType.DEVICE_NAME, "emulator-5554"); // ou o nome do seu dispositivo
        caps.setCapability("appPackage", "com.android.contacts");
        caps.setCapability("appActivity", ".activities.PeopleActivity");
        caps.setCapability("noReset", "true");

        try {
            driver = new AndroidDriver<>(new URL("http://localhost:4723/wd/hub"), caps);
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

            // Passo 2: Ir para adicionar contato
            driver.findElementByAccessibilityId("Criar contato").click();

            // Passo 3: Inserir dados
            driver.findElementByXPath("//android.widget.EditText[@text='Nome']").sendKeys("João");
            driver.findElementByXPath("//android.widget.EditText[@text='Sobrenome']").sendKeys("Silva");
            driver.findElementByXPath("//android.widget.EditText[@text='Telefone']").sendKeys("11999999999");
            driver.findElementByXPath("//android.widget.EditText[@text='E-mail']").sendKeys("joao@exemplo.com");

            // Confirmar
            driver.findElementById("com.android.contacts:id/menu_save").click();

            // Passo 4: Validar dados
            // Pode variar conforme o app de contatos do dispositivo
            MobileElement nomeExibido = driver.findElementById("com.android.contacts:id/large_title");
            if (nomeExibido.getText().contains("João")) {
                System.out.println("✅ Contato criado com sucesso.");
            } else {
                System.out.println("❌ Erro ao criar contato.");
            }

            driver.quit();

        } catch (MalformedURLException e) {
            System.out.println("Erro na URL do Appium Server: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Erro durante o teste: " + e.getMessage());
        }
    }
}