import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class DetailsScreen extends AppScreen {
    constructor () {
        super('//XCUIElementTypeApplication[@name="AYO SRC HERO"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther');
    }

    //define selectors using getter methods
    private get txtDeadline () { return $('~Deadline'); }
    private get txtDeskripsiMisi () { return $('//XCUIElementTypeStaticText[@name="Deskripsi Misi"]'); }
    private get txtXPYangAkanDiperoleh () { return $('//XCUIElementTypeStaticText[@name="XP yang akan diperoleh"]'); }
    private get btnSetujui () { return $('~btnApproveMission'); }
    private get btnTolak () { return $('~btnRejectPress'); }
    private get radiobtnAlasan () { return $('~radioButtonInputradioButton|0'); }
    private get btnKirim () { return $('~btnRejectMission'); }
    private get btnYa () { return $('~btnApproveMaterials'); }
    private get inputAnswer1 () { return $('//XCUIElementTypeTextField[@name="inputundefined"]'); }
    private get inputAnswer2 () { return $('//XCUIElementTypeTextView[@name="inputundefined"]'); }
    private get btnKirimMisi () { return $('~btnSubmitSubmission'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await this.txtDeadline.waitForDisplayed();
    }

    async approve () {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnSetujui, 10);
        await this.btnSetujui.click();
    }

    async reject () {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnTolak, 10);
        await this.btnTolak.click();
        await this.radiobtnAlasan.click();
        await this.btnKirim.click();
    }

    async approveMaterial () {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnYa, 10);
        await this.btnYa.click();
    }

    async submitMission ({ answer } : { answer:string; }) {
        await expect(this.inputAnswer1).toBeDisplayed();
        await this.inputAnswer1.setValue(answer);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await expect(this.inputAnswer2).toBeDisplayed();
        await this.inputAnswer2.setValue(answer);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.btnKirimMisi.click();
    }

    async detailMisi () {
        await expect(this.txtDeadline).toBeDisplayed();
        await expect(this.txtDeskripsiMisi).toBeDisplayed();
    }

    async detailMisiXP () {
        await expect(this.txtDeadline).toBeDisplayed();
        await expect(this.txtXPYangAkanDiperoleh).toBeDisplayed();
    }
}

export default new DetailsScreen();