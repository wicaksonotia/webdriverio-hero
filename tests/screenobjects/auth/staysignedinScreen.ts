import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class StaySignedInScreen extends AppScreen {
    constructor () {
        super('//XCUIElementTypeOther[@name="Sign in to your account"]');
    }

    //define selectors using getter methods
    private get pageName () { return $('//XCUIElementTypeStaticText[@name="Stay signed in?"]'); }
    private get btnNo () { return $('~No'); }
    private get btnYes () { return $('~Yes'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.btnYes).toBeDisplayed();
    }

    async yes () {
        await this.btnYes.click();
    }
}

export default new StaySignedInScreen();