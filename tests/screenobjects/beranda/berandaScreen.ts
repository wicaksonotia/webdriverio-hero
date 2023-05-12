import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class BerandaScreen extends AppScreen {
    constructor () {
        super('//XCUIElementTypeApplication[@name="AYO SRC HERO"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther');
    }
    
    //define selectors using getter methods
    private get cardMisiRetailer () { return $('(//XCUIElementTypeOther[@name="registeredButton"])[3]'); }
    private get cardMisiSRCCoach () { return $('(//XCUIElementTypeOther[@name="registeredButton"])[3]'); }
    private get btnPicker () { return $('~btnShowPicker'); }
    private get list () { return $('//XCUIElementTypeButton[@name="Misi untuk SRC Coach"]'); }
    private get store1 () { return $('(//XCUIElementTypeOther[@name=" TEG0007587 AYAM GORENG LIK RI SRC 2 "])[1]'); }
    private get store2 () { return $('(//XCUIElementTypeOther[@name=" Test Toko Weekend PBO 2 SRC 4 "])[1]'); }
    private get btnSyncData () { return $('~syncButton'); }
    private get btnSyncGSM () { return $('~syncGSMButton'); }
    private get btnOK () { return $('~OK'); }

    private get menuOutletBase () { return $('~ButtonNavigationexit-to-app'); }
    private get menuTerritoryBase () { return $('~ButtonNavigationequalizer'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        // await expect(this.cardMisiRetailer).toBeDisplayed();
        // await expect(this.cardMisiSRCCoach).toBeDisplayed();
        await expect(this.btnSyncData).toBeDisplayed();
        // await expect(this.btnSyncGSM).toBeDisplayed();
    }
    
    async menuMisiRetailer () {
        await this.cardMisiRetailer.click();
    }
    
    async menuMisiuntukSRCCoach () {
        await this.cardMisiSRCCoach.click();
        await this.btnPicker.click();
        await this.list.click();
        await this.store1.click();
    }

    async syncData () {
        await expect(this.btnSyncData).toBeDisplayed();
        await this.btnSyncData.click();
    }

    async syncGSM () {
        await expect(this.btnSyncGSM).toBeDisplayed();
        await this.btnSyncGSM.click();
    }

    async OK () {
        await this.btnOK.waitForDisplayed({timeout: 660000});
        await this.btnOK.click();
    }

    async goToOutletBase () {
        await this.menuOutletBase.waitForDisplayed();
        await this.menuOutletBase.click();
    }

    async goToTerritoryBase () {
        await this.menuTerritoryBase.waitForDisplayed();
        await this.menuTerritoryBase.click();
    }

    async analytics () {
        await driver.pause(3000);
        await Gestures.swipeLeftCustom();
        await Gestures.swipeRightCustom();
    }
}

export default new BerandaScreen();