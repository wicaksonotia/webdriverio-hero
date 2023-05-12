import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class OutletBaseScreen extends AppScreen {
    constructor () {
        super('//XCUIElementTypeApplication[@name="AYO SRC HERO"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther');
    }
    
    //define selectors using getter methods
    private get alert () { return $('//XCUIElementTypeStaticText[@name="Alert"]'); }
    private get alertDesc () { return $('//XCUIElementTypeStaticText[@name="Toko tidak ditemukan"]'); }
    private get btnOK () { return $('~OK'); }
    private get tsOOR () { return $('//XCUIElementTypeOther[@name="OOR"]/XCUIElementTypeSwitch'); }
    private get searchBar () { return $('//XCUIElementTypeTextField[@name="inputSearchRetailer"]'); }
    private get btnSearch () { return $('~searchFilter'); }
    private get toggleFilter () { return $('~openToggleFilter'); }
    private get filterHari () { return $('(//XCUIElementTypeOther[@name=" Pilih Hari"])[2]'); }
    private get selectFilterHari () { return $('(//XCUIElementTypeOther[@name="Senin"])[2]'); }
    private get filterKPS () { return $('(//XCUIElementTypeOther[@name="KPS 13/2023"])[2]'); } //butuh update
    private get selectFilterKPS () { return $('(//XCUIElementTypeOther[@name="KPS 13/2023"])[2]'); }
    private get filterUrutkan () { return $('//XCUIElementTypeOther[@name=" Urutkan"]'); }
    private get selectFilterUrutkan () { return $('(//XCUIElementTypeOther[@name="Name A-Z"])[1]'); }
    private get filterVisitType () { return $('//XCUIElementTypeOther[@name=" Visit Type"]'); }
    private get selectFilterPhysicalVisit () { return $('(//XCUIElementTypeOther[@name="Physical Visit"])[1]'); }
    private get selectFilterVirtualVisit () { return $('(//XCUIElementTypeOther[@name="Virtual Visit"])[1]'); }
    private get filterJamKunjungan () { return $('//XCUIElementTypeOther[@name=" Pilih Jam Kunjungan"]'); }
    private get selectFilterJamKunjungan () { return $('(//XCUIElementTypeOther[@name="Pukul 13:00 - 15:00"])[1]'); }
    private get btnReset () { return $('~resetFilter'); }
    private get clickRetailer () { return $('~clickRetainer'); }
    private get pinnedRetailer1 () { return $('(//XCUIElementTypeOther[@name="pinnedRetailer"])[1]'); }
    private get pinnedRetailer2 () { return $('(//XCUIElementTypeOther[@name="pinnedRetailer"])[2]'); }
    private get btnClose () { return $('~closeSideDrawer'); }

    private get showDetailToko () { return $('~showDetailToko'); }
    private get toggleShowStorePict () { return $('(//XCUIElementTypeOther[@name="toggleShowStorePict"])[2]'); }
    private get toggleCloseStorePict () { return $('(//XCUIElementTypeOther[@name="toggleCloseStorePict"])[5]'); }
    private get btnEditCoachNotes () { return $('~sEditCoachNotes'); }
    private get inputSalesNotes () { return $('~inputSalesNotes'); }
    private get pinCallToAction1 () { return $('(//XCUIElementTypeOther[@name="pinCallToAction"])[1]'); }
    private get pinCallToAction2 () { return $('(//XCUIElementTypeOther[@name="pinCallToAction"])[2]'); }

    private get historyKoin () { return $('(//XCUIElementTypeOther[@name="openRiwayatKoin"])[2]'); }
    private get btnTutup () { return $('(//XCUIElementTypeOther[@name="openRiwayatKoin"])[2]'); }
    private get historyKoinXP () { return $('(//XCUIElementTypeOther[@name="openRiwayatXp"])[2]'); }
    private get btnTutupXP () { return $('(//XCUIElementTypeOther[@name="openRiwayatXp"])[2]'); }
    
    private get tabVisit () { return $('~openVisit'); }
    private get tabBrand () { return $('~openBrand'); }
    private get tabTradePromo () { return $('~openTradePromo'); }
    private get tabEcosystem () { return $('~openEcosystem'); }
    private get directToDetailMission () { return $('(//XCUIElementTypeOther[@name="directToDetailMission"])[29]'); } //butuh update
    // private get directToDetailMission ()x { return $('(//XCUIElementTypeOther[@name="directToDetailMission"])[25]'); } //butuh update
    private get jmlTransaksiPrivateLabel () { return $('//XCUIElementTypeStaticText[@name="JUMLAH TRANSAKSI PRIVATE LABEL"]'); }

    private get buttonNavigationhome () { return $('~ButtonNavigationhome'); }
    
    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.alert).toBeDisplayed();
        await expect(this.alertDesc).toBeDisplayed();
        await expect(this.alertDesc).toHaveText("Toko tidak ditemukan");
        await expect(this.btnOK).toBeDisplayed();
    }
    
    async pageSPV () {
        await expect(this.searchBar).toBeDisplayed();
        await expect(this.btnSearch).toBeDisplayed();
        await expect(this.btnReset).toBeDisplayed();
    }
    
    async okAlert () {
        await this.btnOK.click();
    }

    async checklistCTA () {
        await this.pinCallToAction1.click();
        await this.pinCallToAction2.click();
    }

    async editNotes ({notes} : {notes:string;}) {
        await this.btnEditCoachNotes.click();
        await this.inputSalesNotes.clearValue();
        await this.inputSalesNotes.setValue(notes);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.btnEditCoachNotes.click();
    }
    
    async switchOOR () {
        await expect(this.tsOOR).toBeDisplayed();
        await this.tsOOR.click();
    }

    async searchRetailer ({retailer} : {retailer:string;}) {
        await expect(this.searchBar).toBeDisplayed();
        await this.searchBar.setValue(retailer);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.btnSearch.click();
    }

    async selectRetailer () {
        await expect(this.clickRetailer).toBeDisplayed();
        await this.clickRetailer.click();
    }

    async checklistRetailer () {
        await this.pinnedRetailer1.click();
        await this.pinnedRetailer2.click();
    }

    async openAllTab () {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.tabVisit, 15);
        await this.tabEcosystem.click();
        await driver.pause(1500);
        await Gestures.checkIfDisplayedWithSwipeUp(await this.jmlTransaksiPrivateLabel, 15);
        await this.tabVisit.click();
        await driver.pause(1500);
        await this.tabBrand.click();
        await driver.pause(1500);
        await this.tabTradePromo.click();
        await driver.pause(1500);
    }

    async detailRetailer () {
        await expect(this.showDetailToko).toBeDisplayed();
        await this.showDetailToko.click();
        await this.toggleShowStorePict.click();
        await expect(this.toggleCloseStorePict).toBeDisplayed();
        await this.toggleCloseStorePict.click();
        await this.showDetailToko.click();
    }

    async goToHome () {
        await this.buttonNavigationhome.click();
    }

    async klikSearch () {
        await this.btnReset.click();
    }

    async resetSearch () {
        await this.btnReset.click();
    }

    async filter () {
        await driver.pause(1500);
        await this.toggleFilter.click();
        await this.filterHari.click();
        await this.selectFilterHari.click();
        await this.btnSearch.click();
        await this.btnReset.click();
        await this.filterKPS.click();
        await this.selectFilterKPS.click();
        await this.btnSearch.click();
        await this.btnReset.click();
        await this.filterUrutkan.click();
        await this.selectFilterUrutkan.click();
        await this.btnSearch.click();
        await this.btnReset.click();
        await this.filterVisitType.click();
        await this.selectFilterPhysicalVisit.click();
        await this.btnSearch.click();
        await this.btnReset.click();
        await this.filterVisitType.click();
        await this.selectFilterVirtualVisit.click();
        await this.btnSearch.click();
        await this.btnReset.click();
        await this.filterJamKunjungan.click();
        await this.selectFilterJamKunjungan.click();
        await this.btnSearch.click();
        await this.btnReset.click();
    }

    async closeDrawer () {
        await this.btnClose.click();
    }

    async openXPHistory () {
        await this.historyKoinXP.click();
        await driver.pause(1500);
        await this.btnTutupXP.click();
        await expect(this.historyKoinXP).toBeDisplayed();
    }

    async retailerDetails () {
        await expect(this.historyKoin).toBeDisplayed();
    }

    async openCoinHistory () {
        await this.historyKoin.click();
        await driver.pause(1500);
        await this.btnTutup.click();
        await expect(this.historyKoin).toBeDisplayed();
    }

    async openTabEcosystem () {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.tabVisit, 5);
        await Gestures.swipeUpCustom()
        await expect(this.tabEcosystem).toBeDisplayed();
        await this.tabEcosystem.click();
        await Gestures.checkIfDisplayedWithSwipeUp(await this.jmlTransaksiPrivateLabel, 5);
        await Gestures.swipeUpCustom()
    }

    async goToDetailMisi () {
        // await expect(this.directToDetailMission).toBeDisplayed();
        await this.directToDetailMission.click();
    }

}

export default new OutletBaseScreen();