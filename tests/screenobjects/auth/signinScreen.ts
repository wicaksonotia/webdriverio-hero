import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class SignInScreen extends AppScreen {
    constructor () {
        super('~Signin');
    }

    //define selectors using getter methods
    private get pageName () { return $('//XCUIElementTypeStaticText[@name="Sign in with your corporate ID"]'); }
    private get btnAyoHeroQA () { return $('~ayo-hero-qa'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.pageName).toBeDisplayed();
    }

    async QA () {
        await this.btnAyoHeroQA.click();
    }
}

export default new SignInScreen();