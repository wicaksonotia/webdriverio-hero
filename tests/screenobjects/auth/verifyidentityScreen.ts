import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class VerifyIdentityScreen extends AppScreen {
    constructor() {
        super('//XCUIElementTypeOther[@name="Sign in to your account"]');
    }

    //define selectors using getter methods
    private get email() { return $('~sutrujah@pmintl.net'); }
    private get pageName() { return $('//XCUIElementTypeStaticText[@name="Verify your identity"]'); }
    private get textCode() { return $('//XCUIElementTypeButton[@name="Text +XX XXXXXXXXX85‎"]'); }
    private get btnCancel() { return $('~Cancel'); }

    //a method to encapsule automation code to interact with the page
    async page() {
        await expect(this.email).toBeDisplayed();
        await expect(this.pageName).toBeDisplayed();
        await expect(this.textCode).toBeDisplayed();
        await expect(this.btnCancel).toBeDisplayed();
    }

    async getCode() {
        await this.textCode.click();
    }
}

export default new VerifyIdentityScreen();