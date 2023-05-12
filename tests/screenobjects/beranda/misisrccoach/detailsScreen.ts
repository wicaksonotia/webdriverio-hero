import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class DetailsScreen extends AppScreen {
    constructor() {
        super('//XCUIElementTypeApplication[@name="AYO SRC HERO"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther');
    }

    //define selectors using getter methods  
    private get txtDeadline() { return $('~Deadline'); }
    private get inputAnswer() { return $('~inputundefined') }
    private get selectAnswer() { return $('//XCUIElementTypeOther[@name="Opsi 1"]') }
    private get selectAnswer1() { return $('(//XCUIElementTypeOther[@name="radioButtonInputradioButton|1"])[1]') }
    private get selectAnswer2() { return $('(//XCUIElementTypeOther[@name="radioButtonInputradioButton|1"])[2]') }
    private get btnLanjutKirim() { return $('~btnNextQuestion') }
    private get btnKirim() { return $('~btnSubmitSubmission') }
    private get btnDetailAnswer() { return $('//XCUIElementTypeOther[@name="Lihat Jawaban"]'); }
    private get btnBack() { return $('~buttonBack'); }

    //a method to encapsule automation code to interact with the page
    async page() {
        await this.txtDeadline.waitForDisplayed();
    }

    async answer({ ans }: { ans: string; }) {
        //question-1
        await expect(this.inputAnswer).toBeDisplayed();
        await this.inputAnswer.setValue(ans);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }

        //question-2
        await this.selectAnswer.waitForDisplayed();
        await this.selectAnswer.click();
        await this.btnKirim.click();
    }

    async chooseAnswer() {
        //question-1
        await expect(this.selectAnswer1).toBeDisplayed();
        await this.selectAnswer1.click();

        //question-2
        await expect(this.selectAnswer2).toBeDisplayed();
        await this.selectAnswer2.click();
        await this.btnKirim.click();
    }

    async submitAnswer({ ans }: { ans: string; }) {
        //question-1
        await expect(this.inputAnswer).toBeDisplayed();
        await this.inputAnswer.setValue(ans);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.btnLanjutKirim.click();

        //question-2
        await expect(this.selectAnswer).toBeDisplayed();
        await this.selectAnswer.click();
        await this.btnLanjutKirim.click();

        //question-3
        await expect(this.inputAnswer).toBeDisplayed();
        await this.inputAnswer.setValue(ans);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.btnLanjutKirim.click();
    }

    async detailAnswer() {
        await this.btnDetailAnswer.click();
        await driver.pause(3000);
        await this.btnBack.click();
    }

    async back() {
        await this.btnBack.click();
    }
}

export default new DetailsScreen();