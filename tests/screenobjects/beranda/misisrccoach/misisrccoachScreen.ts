import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class MisiSRCCoachScreen extends AppScreen {
    constructor() {
        super('//XCUIElementTypeApplication[@name="AYO SRC HERO"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther');
    }

    //define selectors using getter methods
    private get txtAlamat() { return $('~Alamat'); }
    private get searchBar() { return $('//XCUIElementTypeOther[@name="searchCustomerInput"]'); }

    //scenario 13
    private get txtMission() { return $('//XCUIElementTypeStaticText[@name="History TSM"]'); }
    // private get txtMission () { return $('~HTSM-TBR'); }
    private get txtMissionClick() { return $('~HTSM-MisiSRCCoach'); }
    private get dropdownViewAll() { return $('(//XCUIElementTypeOther[@name="btnViewAllMissionToko"])[1]'); } //butuh update
    private get txtDetails() { return $('//XCUIElementTypeOther[@name="Details"]'); }

    //scenario 16
    // // private get txtMission () { return $('//XCUIElementTypeStaticText[@name="History TSM"]'); }
    // private get txtMission () { return $('~HTSM-TBR'); }
    // private get txtMissionClick () { return $('~HTSM-Quiz'); }
    // private get dropdownViewAll () { return $('(//XCUIElementTypeOther[@name="btnViewAllMissionToko"])[5]'); } //butuh update
    // private get txtDetails () { return $('//XCUIElementTypeOther[@name="Details"]'); }

    //scenario 22
    // private get txtMission () { return $('//XCUIElementTypeStaticText[@name="History TSM"]'); }
    // // private get txtMission () { return $('~HTSM-NTBR'); }
    // private get txtMissionClick () { return $('~HTSM-TBR'); }
    // private get dropdownViewAll () { return $('(//XCUIElementTypeOther[@name="btnViewAllMissionToko"])[6]'); } //butuh update
    // private get txtDetails () { return $('//XCUIElementTypeOther[@name="Details"]'); }

    private get btnOK() { return $('~OK') }
    private get btnBack() { return $('~buttonBack'); }

    //a method to encapsule automation code to interact with the page
    async page() {
        await expect(this.txtAlamat).toBeDisplayed();
        await driver.pause(2000);
    }

    async search({ toko }: { toko: string; }) {
        await expect(this.searchBar).toBeDisplayed();
        await this.searchBar.setValue(toko);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
    }

    async scrollDown() {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.txtMission, 10);
    }

    async viewAll() {
        await Gestures.checkIfDisplayedWithSwipeDown(await this.txtMissionClick, 5);
        await this.dropdownViewAll.click();
    }

    async openDetails() {
        await this.txtDetails.click();
    }

    async OK() {
        await expect(this.btnOK).toBeDisplayed();
        await this.btnOK.click();
    }

    async back() {
        await this.btnBack.click();
    }
}

export default new MisiSRCCoachScreen();