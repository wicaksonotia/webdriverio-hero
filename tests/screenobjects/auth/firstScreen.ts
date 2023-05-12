import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class FirstScreen extends AppScreen {
    constructor () {
        super('(//XCUIElementTypeOther[@name="buttonMASUKLabel"])[10]');
    }
    
    //define selectors using getter methods
    private get btnMasuk () { return $('~buttonundefined'); }
    // private get alert () { return $('//XCUIElementTypeAlert[@name="“AYO SRC HERO” Would Like to Send You Notifications"]'); }
    private get alertAllow () { return $('~Allow'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        // await expect(this.alert).toBeDisplayed();
        await expect(this.btnMasuk).toBeDisplayed();
    }

    async masuk () {
        // await expect(this.alert).toBeDisplayed();
        // await this.alertAllow.click();
        await expect(this.btnMasuk).toBeDisplayed();
        await this.btnMasuk.click();
    }
}

export default new FirstScreen();