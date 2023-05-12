import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class InputPasswordScreen extends AppScreen {
    constructor() {
        super('//XCUIElementTypeOther[@name="Sign in to your account"]');
    }

    //define selectors using getter methods
    private get pageName() { return $('//XCUIElementTypeStaticText[@name="ADFS Logon Page"]'); }
    private get txtPassword() { return $('//XCUIElementTypeSecureTextField[@name="Enter the password for sutrujah@pmintl.net"]'); }
    private get btnSignIn() { return $('//XCUIElementTypeButton[@name="Sign in"]'); }

    //a method to encapsule automation code to interact with the page
    async page() {
        // await expect(this.pageName).toBeDisplayed();
        await expect(this.txtPassword).toBeDisplayed();
        await expect(this.btnSignIn).toBeDisplayed();
    }

    async inputPassword({ password }: { password: string; }) {
        await expect(this.txtPassword).toBeDisplayed();
        await this.txtPassword.click();
        await this.txtPassword.setValue(password);
        await driver.hideKeyboard();
    }

    async signIn() {
        await this.btnSignIn.click();
    }
}

export default new InputPasswordScreen();