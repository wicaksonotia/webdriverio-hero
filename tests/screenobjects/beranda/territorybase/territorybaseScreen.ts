import AppScreen from '../../AppScreen';
import Gestures from '../../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class TerritoryBaseScreen extends AppScreen {
    constructor () {
        super('//XCUIElementTypeApplication[@name="AYO SRC HERO"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther');
    }
    
    //define selectors using getter methods
    private get searchBarREE () { return $('//XCUIElementTypeOther[@name="Cari nama toko disini"]'); }
    private get searchBar () { return $('//XCUIElementTypeOther[@name="Cari nama district disini"]'); }
    private get searchBarSPV () { return $('//XCUIElementTypeOther[@name="Cari nama territory disini"]'); }
    private get searchBarSPVSummary () { return $('//XCUIElementTypeOther[@name="Cari nama KPI"]'); }
    private get btnCari () { return $('~Cari'); }
    private get reset () { return $('~x'); }
    private get filter () { return $('(//XCUIElementTypeOther[@name=" Filter Kps"])[2]'); }
    private get popUpTitle () { return $('//XCUIElementTypeStaticText[@name="Pilih Routing"]'); }
    private get btnReset () { return $('~Reset'); }
    private get btnTerapkan () { return $('~Terapkan'); }
    private get btnKPS1 () { return $('//XCUIElementTypeOther[@name="KPS 7"]'); }
    private get btnKPS2 () { return $('//XCUIElementTypeOther[@name="KPS 8"]'); }
    private get btnKPS3 () { return $('//XCUIElementTypeOther[@name="KPS 9"]'); }
    private get btnKPS4 () { return $('//XCUIElementTypeOther[@name="KPS 10"]'); }
    private get tsShowPresentage () { return $('(//XCUIElementTypeOther[@name="Show Percentage"])[2]/XCUIElementTypeSwitch'); }

    private get filterREE () { return $('(//XCUIElementTypeOther[@name=" Filter"])[2]'); }
    private get pilihHariREE () { return $('(//XCUIElementTypeOther[@name="Pilih Hari"])[1]'); }
    private get btnHari () { return $('~Selasa'); }
    private get btnShowMore () { return $('//XCUIElementTypeOther[@name="SHOW MORE"]'); }
    private get filterHariREE () { return $('(//XCUIElementTypeOther[@name=" Filter Hari"])[1]'); }

    private get tabByKPITrend () { return $('//XCUIElementTypeOther[@name="By KPI Trend"]'); }
    private get btnSelectKPI () { return $('(//XCUIElementTypeOther[@name=" Select KPI"])[2]'); }
    private get popUpTitleKPI () { return $('//XCUIElementTypeStaticText[@name="Pilih KPI"]'); }
    private get pilihKPI () { return $('//XCUIElementTypeOther[@name="Actual Visit"]'); } //butuh update "Brand SGR12 AV_Out"
    private get pilihKPIREE () { return $('//XCUIElementTypeOther[@name="Brand AIR12 AV_Out"]'); }
    private get btnTerapkanKPI () { return $('(//XCUIElementTypeOther[@name="Terapkan"])[3]'); }
    private get tsShowPresentageKPI () { return $('//XCUIElementTypeOther[@name="Show Percentage"]/XCUIElementTypeSwitch'); }

    private get tabSummary () { return $('~Summary'); }
    private get btnSelectTerritory () { return $('(//XCUIElementTypeOther[@name=" Select Territory"])[2]'); }
    private get popUpTitleTerritory () { return $('//XCUIElementTypeStaticText[@name="Pilih Territory"]'); }
    private get pilihTerritory () { return $('~TPPW005'); }
    private get btnDownloadTerritoryData () { return $('(//XCUIElementTypeOther[@name="Download Territory Data"])[3]'); }
    private get alert () { return $('//XCUIElementTypeStaticText[@name="Alert"]'); }
    private get alertDesc () { return $('//XCUIElementTypeStaticText[@name="Download Data Berhasil"]'); }
    private get btnOK () { return $('~OK'); }
    private get closePopUp () { return $('(//XCUIElementTypeOther[@name=""])[2]'); }
    private get btnFilterComply () { return $('(//XCUIElementTypeOther[@name=" Filter Comply"])[2]'); }
    private get btnComply () { return $('~Comply'); }
    private get btnTidakComply () { return $('//XCUIElementTypeOther[@name="Tidak Comply"]'); }
    private get btnTerapkanComply () { return $('(//XCUIElementTypeOther[@name="Terapkan"])[1]'); }
    private get directToDetailToko () { return $('(//XCUIElementTypeOther[@name="492 Toko"])[2]'); } //butuh update "80 Toko"
    private get searchBarOutlet () { return $('//XCUIElementTypeOther[@name="inputSearchRetailer"]'); }
    private get btnSearchFilter () { return $('~searchFilter'); }
    private get btnResetFilter () { return $('~resetFilter'); }
    private get toggleFilter () { return $('~handlerToggleFilter'); }
    private get ddPilihHari () { return $('(//XCUIElementTypeOther[@name=" Pilih Hari"])[1]'); }
    private get pilihHari () { return $('(//XCUIElementTypeOther[@name="Senin"])[1]'); }
    private get clickRetailer () { return $('~clickRetainer'); }
    private get btnClose () { return $('~closeSideDrawer'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.searchBar).toBeDisplayed();
        await expect(this.btnCari).toBeDisplayed();
    }

    async pageSPV () {
        await expect(this.searchBarSPV).toBeDisplayed();
        await expect(this.btnCari).toBeDisplayed();
    }

    async pageREE () {
        // await expect(this.searchBarREE).toBeDisplayed();
        await expect(this.btnCari).toBeDisplayed();
    }
    
    async search ({code} : {code:string;}) {
        await this.searchBar.setValue(code);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.btnCari.click();
    }

    async searchSPV ({territory} : {territory:string;}) {
        await this.searchBarSPV.setValue(territory);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.btnCari.click();
    }

    async searchREE ({toko} : {toko:string;}) {
        await this.searchBarREE.setValue(toko);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.btnCari.click();
        await driver.pause(3000);
    }

    async searchSPVSummary ({kpi} : {kpi:string;}) {
        await this.searchBarSPVSummary.setValue(kpi);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.btnCari.click();
    }
    
    async showPresentage () {
        await driver.pause(3000);
        await this.tsShowPresentage.click();
    }

    async showPresentageKPI () {
        await driver.pause(3000);
        await this.tsShowPresentageKPI.click();
    }

    async clearSearch () {
        await this.reset.click();
    }

    async klikSearch () {
        await this.btnCari.click();
    }

    async filterForREE () {
        await this.filterREE.click();
        await expect(this.popUpTitle).toBeDisplayed();
        await expect(this.btnReset).toBeDisplayed();
        await expect(this.btnTerapkan).toBeDisplayed();
        await this.btnKPS1.click();
        await this.btnTerapkan.click();
        await driver.pause(3000);
        await this.filterREE.click();
        await this.btnKPS2.click();
        await this.pilihHariREE.click();
        await this.btnHari.click();
        await this.btnTerapkan.click();
        await driver.pause(3000);
        await this.filterREE.click();
        await this.btnReset.click();
        await this.btnTerapkan.click();
        await driver.pause(3000);
        await expect(this.filterREE).toBeDisplayed();
    }

    async showMore () {
        await this.btnShowMore.click();
    }

    async filterHari () {
        await this.filterHariREE.click();
        await this.btnHari.click();
        await this.btnTerapkan.click();
        await driver.pause(3000);
        await expect(this.filterHariREE).toBeDisplayed();
    }

    async filterKPS () {
        await this.filter.click();
        await expect(this.popUpTitle).toBeDisplayed();
        await expect(this.btnReset).toBeDisplayed();
        await expect(this.btnTerapkan).toBeDisplayed();
        await this.btnKPS1.click();
        await this.btnTerapkan.click();
        await driver.pause(3000);
        await this.filter.click();
        await this.btnKPS2.click();
        await this.btnTerapkan.click();
        await driver.pause(3000);
        await this.filter.click();
        await this.btnKPS3.click();
        await this.btnTerapkan.click();
        await driver.pause(3000);
        await this.filter.click();
        await this.btnReset.click();
        await this.btnTerapkan.click();
        await expect(this.filter).toBeDisplayed();
    }

    async openTabByKPITrend () {
        await this.tabByKPITrend.click();
    }

    async byKPITrend ({code} : {code:string;}) {
        await this.btnSelectKPI.click();
        await expect(this.popUpTitleKPI).toBeDisplayed();
        await this.pilihKPI.click();
        await this.btnTerapkanKPI.click();
        await this.searchBar.setValue(code);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.btnCari.click();
        await driver.pause(3000);
        await this.reset.click();
        await this.btnCari.click();
    }

    async byKPITrendREE ({code} : {code:string;}) {
        await this.btnSelectKPI.click();
        await expect(this.popUpTitleKPI).toBeDisplayed();
        await this.pilihKPIREE.click();
        await this.btnTerapkanKPI.click();
        await this.searchBarREE.setValue(code);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.btnCari.click();
        await driver.pause(3000);
        await this.reset.click();
        await this.btnCari.click();
    }

    async byKPITrendSPV ({code1, code2, code3} : {code1:string; code2:string; code3:string;}) {
        await this.btnSelectKPI.click();
        await expect(this.popUpTitleKPI).toBeDisplayed();
        await this.pilihKPI.click();
        await this.btnTerapkanKPI.click();
        await this.searchBarSPV.setValue(code1);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.btnCari.click();
        await driver.pause(3000);
        await this.reset.click();
        await this.searchBarSPV.setValue(code2);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.btnCari.click();
        await driver.pause(3000);
        await this.reset.click();
        await this.searchBarSPV.setValue(code3);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.btnCari.click();
        await driver.pause(3000);
        await this.reset.click();
        await this.btnCari.click();
    }
    
    async openTabSummary () {
        await this.tabSummary.click();
    }

    async selectTerritory () {
        await this.btnSelectTerritory.click();
        await expect(this.popUpTitleTerritory).toBeDisplayed();
        await this.pilihTerritory.click();
        await this.btnDownloadTerritoryData.click();
    }

    async OKAlert () {
        await expect(this.alert).toBeDisplayed();
        await expect(this.alertDesc).toBeDisplayed();
        await this.btnOK.click();
        await this.closePopUp.click();
    }

    async filterComply ({toko}:{toko:string;}) {
        await this.btnFilterComply.click();
        await this.btnComply.click();
        await this.btnTerapkanComply.click();
        await driver.pause(3000);
        await this.btnFilterComply.click();
        await this.btnTidakComply.click();
        await this.btnTerapkanComply.click();
        await driver.pause(3000);

        await this.directToDetailToko.click();
        await this.searchBarOutlet.setValue(toko);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.btnSearchFilter.click();
        await this.btnResetFilter.click();

        await this.toggleFilter.click();
        await this.ddPilihHari.click();
        await this.pilihHari.click();
        await this.btnSearchFilter.click();
        await this.clickRetailer.click();
        await driver.pause(3000);
        await this.btnClose.click();
    }
}

export default new TerritoryBaseScreen();