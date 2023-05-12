import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class MisiRetailerScreen extends AppScreen {
    constructor() {
        super('//XCUIElementTypeApplication[@name="AYO SRC HERO"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther');
    }

    //define selectors using getter methods
    private get txtAlamat() { return $('~Alamat'); }
    private get searchBar() { return $('//XCUIElementTypeOther[@name="searchCustomerInput"]'); }

    //scenario 4 7
    private get txtMission() { return $('//XCUIElementTypeStaticText[@name="History TSM"]'); } //butuh update
    // private get txtMission () { return $('~HTSM04'); } //butuh update
    private get txtMissionClick() { return $('~HTSM02'); } //butuh update
    private get dropdownViewAll() { return $('(//XCUIElementTypeOther[@name="btnViewAllMissionToko"])[5]'); } //butuh update
    private get txtMissionStatus() { return $('(//XCUIElementTypeStaticText[@name="Butuh Diverifikasi"])[1]'); }
    private get txtDetails() { return $('(//XCUIElementTypeOther[@name="Details"])[1]'); }
    private get txtMissionStatusDisetujui() { return $('(//XCUIElementTypeStaticText[@name="Misi Disetujui"])[1]'); }

    //scenario 5 8
    // private get txtMission () { return $('//XCUIElementTypeStaticText[@name="History TSM"]'); } //butuh update
    // // private get txtMission () { return $('~HTSM04'); } //butuh update
    // private get txtMissionClick () { return $('~HTSM03'); } //butuh update
    // private get dropdownViewAll () { return $('(//XCUIElementTypeOther[@name="btnViewAllMissionToko"])[17]'); } //butuh update
    // private get txtMissionStatus () { return $('(//XCUIElementTypeStaticText[@name="Butuh Diverifikasi"])[1]'); }
    // private get txtDetails () { return $('(//XCUIElementTypeOther[@name="Details"])[1]'); }
    private get txtMissionStatusDitolak() { return $('(//XCUIElementTypeStaticText[@name="Misi Ditolak"])[1]'); }

    //scenario 6 10 11
    // private get txtMission () { return $('//XCUIElementTypeStaticText[@name="History TSM"]'); } //butuh update
    // // private get txtMission () { return $('~HTSM01-End'); } //butuh update
    // private get txtMissionClick () { return $('~HTSM04'); } //butuh update
    // private get dropdownViewAll () { return $('(//XCUIElementTypeOther[@name="btnViewAllMissionToko"])[18]'); } //butuh update
    // private get txtMissionStatus() { return $('(//XCUIElementTypeStaticText[@name="Approval Material"])[1]'); }
    // private get txtDetails () { return $('(//XCUIElementTypeOther[@name="Details"])[1]'); }
    private get txtMissionStatusMaterialDisetujui() { return $('(//XCUIElementTypeStaticText[@name="Material Disetujui"])[1]'); }

    //scenario 9
    // private get txtMission () { return $('//XCUIElementTypeStaticText[@name="History TSM"]'); }
    // private get txtMissionClick () { return $('//XCUIElementTypeStaticText[@name="TBR Pilgan"]'); }
    // // private get txtMission () { return $('~HTSM02'); } //butuh update
    // // private get txtMissionClick () { return $('~HTSM01-End'); }
    // private get dropdownViewAll () { return $('(//XCUIElementTypeOther[@name="btnViewAllMissionToko"])[19]'); } //butuh update
    // private get txtDetails () { return $('(//XCUIElementTypeOther[@name="Details"])[1]'); }

    //scenario 12
    // private get txtMission () { return $('//XCUIElementTypeStaticText[@name="History TSM"]'); }
    // private get txtMissionClick () { return $('//XCUIElementTypeStaticText[@name="misi semua reward"]'); }
    // // private get txtMission () { return $('~HTSM00-Expired'); } //butuh update
    // // private get txtMissionClick () { return $('~HTSM00-Expired'); }
    // private get dropdownViewAll () { return $('(//XCUIElementTypeOther[@name="btnViewAllMissionToko"])[20]'); } //butuh update
    // private get txtDetails () { return $('(//XCUIElementTypeOther[@name="Berakhir"])[1]'); }

    //scenario 14
    private get btnPicker() { return $('~btnShowPicker'); }
    private get list() { return $('//XCUIElementTypeButton[@name="Not Regis AYO SRC"]'); }
    private get store1() { return $('(//XCUIElementTypeOther[@name=" PDG0029544EZD MINANG MART AIR TAWAR 1 IMO 2 "])[2]'); }
    private get store2() { return $('(//XCUIElementTypeOther[@name=" PDG0029544EZD MINANG MART AIR TAWAR 1 IMO 1 "])[2]'); }
    // private get txtMission () { return $('//XCUIElementTypeStaticText[@name="History TSM"]'); } //butuh update
    // private get txtMissionClick () { return $('~HTSM-MisiNotRegisSRC'); }
    // private get dropdownViewAll () { return $('(//XCUIElementTypeOther[@name="btnViewAllMissionToko"])[2]'); } //butuh update
    // private get txtDetails () { return $('(//XCUIElementTypeOther[@name="Details"])[1]'); }

    //scenario 26
    // private get txtMission () { return $('//XCUIElementTypeStaticText[@name="History TSM"]'); }
    // private get txtMissionClick () { return $('//XCUIElementTypeStaticText[@name="test PB toko wknd 2"]'); }
    // private get dropdownViewAll () { return $('(//XCUIElementTypeOther[@name="btnViewAllMissionToko"])[1]'); } //butuh update
    // private get txtDetails () { return $('(//XCUIElementTypeOther[@name="Details"])[1]'); }


    //scenario 15-20
    private get tabB2BGSM() { return $('~B2B'); }
    private get tabB2BGSR() { return $('~GSR'); }
    private get addProduct() { return $('(//XCUIElementTypeOther[@name="+"])[1]') }
    private get product1() { return $('//XCUIElementTypeStaticText[@name="Avolution Menthol 20"]') }
    private get product2() { return $('//XCUIElementTypeStaticText[@name="Marlboro Ice Burst 21"]') }
    private get product3() { return $('//XCUIElementTypeStaticText[@name="Sampoerna A Filter 12"]') }
    private get btnSubmit() { return $('~SUBMIT'); }
    private get btnConfirm() { return $('//XCUIElementTypeButton[@name="Yes, Sure"]') }
    private get tabB2C() { return $('~B2C'); }
    private get txtBottomB2C() { return $('//XCUIElementTypeStaticText[@name="#YTD Referral Konsumen"]'); }
    private get tabDTE() { return $('~DTE'); }
    private get txtBottomDTE() { return $('//XCUIElementTypeStaticText[@name=" Total Comply Mission"]'); }
    private get tabPaguyuban() { return $('~PAGUYUBAN'); }
    private get txtBottomPaguyuban() { return $('//XCUIElementTypeStaticText[@name="Log Join Paguyuban"]'); }
    private get tabPartnership() { return $('~PARTNERSHIP'); }
    private get txtBottomPartnership() { return $('//XCUIElementTypeStaticText[@name="Order Private Label"]'); }
    private get tabProgram() { return $('~PROGRAM'); }

    private get btnOK() { return $('~OK'); }
    private get btnBack() { return $('~buttonBack'); }

    //a method to encapsule automation code to interact with the page
    async page() {
        await expect(this.txtAlamat).toBeDisplayed();
    }

    async search({ toko }: { toko: string; }) {
        await expect(this.searchBar).toBeDisplayed();
        await this.searchBar.setValue(toko);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
    }

    async scrollDown() {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.txtMission, 20);
    }

    async viewAll() {
        await Gestures.checkIfDisplayedWithSwipeDown(await this.txtMissionClick, 5);
        await this.dropdownViewAll.click();
        // await Gestures.swipeUpCustom();
        // await this.txtDetails.waitForDisplayed();
        await driver.pause(3000);
    }

    async statusSebelum() {
        console.log('Status Misi: ' + await this.txtMissionStatus.getText());
    }

    async openDetails() {
        await this.txtDetails.click();
    }

    async OK() {
        await this.btnOK.waitForDisplayed({ timeout: 600000 });
        await this.btnOK.click();
    }

    async statusDisetujui() {
        console.log('Status Misi: ' + await this.txtMissionStatusDisetujui.getText());
    }

    async statusDitolak() {
        console.log('Status Misi: ' + await this.txtMissionStatusDitolak.getText());
    }

    async statusMaterialDisetujui() {
        console.log('Status Misi: ' + await this.txtMissionStatusMaterialDisetujui.getText());
    }

    async B2BGSM() {
        await this.tabB2BGSM.click()
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnSubmit, 10);
        await this.btnSubmit.waitForDisplayed();
        await driver.pause(3000);
    }

    async B2BGSR() {
        await Gestures.checkIfDisplayedWithSwipeDown(await this.tabB2BGSM, 10);
        await this.tabB2BGSR.click();
        await this.btnOK.waitForDisplayed();
        await this.btnOK.click();
        await Gestures.swipeUpCustom();
    }

    async B2C() {
        await this.tabB2C.click()
        await Gestures.checkIfDisplayedWithSwipeUp(await this.txtBottomB2C, 10);
    }

    async DTE() {
        await this.tabDTE.click()
        await Gestures.checkIfDisplayedWithSwipeUp(await this.txtBottomDTE, 10);
    }

    async Paguyuban() {
        await this.tabPaguyuban.click()
        // await Gestures.checkIfDisplayedWithSwipeUp(await this.txtBottomPaguyuban, 10);
    }

    async Partnership() {
        await this.tabPartnership.click()
        // await Gestures.checkIfDisplayedWithSwipeUp(await this.txtBottomPartnership, 10);
        // await Gestures.swipeUpCustom();
        // await Gestures.swipeUpCustom();
        // await Gestures.swipeUpCustom();
    }

    async Program() {
        await this.tabProgram.click()
        await Gestures.swipeUpCustom();
        // await Gestures.swipeUpCustom();
        // await Gestures.swipeUpCustom();
    }

    async pick1() {
        await this.btnPicker.click();
        await this.list.click();
        await this.store1.click();
    }

    async pick2() {
        await this.btnPicker.click();
        await this.list.click();
        await this.store2.click();
    }

    async productList() {
        await this.product1.waitForDisplayed();
        // await this.product2.waitForDisplayed();
        await this.product3.waitForDisplayed();
    }

    async order() {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnSubmit, 10);
        await this.addProduct.click();
        await this.btnSubmit.click();
        await this.btnConfirm.click();
    }

    async back() {
        await this.btnBack.click();
    }
}

export default new MisiRetailerScreen();