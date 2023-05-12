import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class InputEmailScreen extends AppScreen {
    constructor () {
        super('//XCUIElementTypeOther[@name="Sign in to your account"]');
    }

    //define selectors using getter methods
    private get pageName () { return $('//XCUIElementTypeStaticText[@name="Sign in"]'); }
    private get txtEmail () { return $('~example@PMINTL.NET'); }
    private get btnNext () { return $('~Next'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await expect (this.pageName).toBeDisplayed();
        await expect (this.txtEmail).toBeDisplayed();
        await expect (this.btnNext).toBeDisplayed();
    }
    
    async inputEmail ({ email } : { email:string; }) {
        await expect(this.txtEmail).toBeDisplayed();
        await this.txtEmail.click();
        await this.txtEmail.setValue(email);
        await driver.hideKeyboard();
    }

    async next () {
        await this.btnNext.click();
    }
}

export default new InputEmailScreen();