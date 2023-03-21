import { ChainablePromiseElement } from 'webdriverio'
import { UserModel } from '../model/user.model'

class ProfilePage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/profile'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }





    // async function showHiddenFileInput(browser: WebdriverIO.Browser): Promise<void> {
    //     await browser.execute(() => {
    //         const htmlElement = document.querySelector('[type="file"]') as HTMLElement
    //         htmlElement.style.cssText = 'display:block !important; opacity: 1; position: inherit;'
    //     })
    // }


    // public async uploadFile(filePath: string): Promise < void> {
    //     await this.getInputFile().waitForExist({
    //         timeoutMsg: 'File input field was not exist',
    //     })
    //         await showHiddenFileInput(this.browser)
    //         const file: string = await this.browser.uploadFile(filePath)
    //         await this.getInputFile().setValue(file)
    // }

    //     private getInputFile(): ChainablePromiseElement < Promise < WebdriverIO.Element >> {
    //     return this.browser.$('[type="file"]')
    // }


    // async function showHiddenFileInput(browser: WebdriverIO.Browser): Promise<void> {
    //     await browser.execute(() => {
    //         const htmlElement = document.querySelector('[type="file"]') as HTMLElement
    //         htmlElement.style.cssText = 'display:block !important; opacity: 1; position: inherit;'
    //     })
    // }


    // public async uploadFile(filePath: string): Promise < void> {
    //     await this.getInputFile().waitForExist({
    //         timeoutMsg: 'File input field was not exist',
    //     })
    //         await showHiddenFileInput(this.browser)
    //         const file: string = await this.browser.uploadFile(filePath)
    //         await this.getInputFile().setValue(file)
    // }

    // public async uploadFile(filePath: string): Promise < void> {
    //     await this.getInputFile().waitForExist({
    //         timeoutMsg: 'File input field was not exist',
    //     })
    //         const file: string = await this.browser.uploadFile(filePath)
    //         await this.getInputFile().setValue(file)
    // }

    // private getInputFile(): ChainablePromiseElement < Promise < WebdriverIO.Element >> {
    //     return this.browser.$('[type="file"]')
    // }









    public async fillEmailComboBox(user: UserModel): Promise<void> {
        await this.getEmailComboBox().waitForClickable({
            timeoutMsg: 'Email ComboBox was not clickable'
        })
        await this.getEmailComboBox().selectByVisibleText(user.email)
    }

    public async fillFieldBio(user: UserModel): Promise<void> {
        await this.getFieldBio().waitForDisplayed({
            timeoutMsg: 'Field Bio was not displayed'
        })
        await this.getFieldBio().setValue(user.bio)
    }

    public async fillFieldName(user: UserModel): Promise<void> {
        await this.getFieldName().waitForDisplayed({
            timeoutMsg: 'Field Name was not displayed'
        })
        await this.getFieldName().setValue(user.name)
    }

    public async openUrl(): Promise<void> {
        await this.browser.url(this.url)
    }

    public async saveChanges(): Promise<void> {
        await this.getButtonUpdate().waitForClickable({
            timeoutMsg: 'Update button was not clickable'
        })
        await this.getButtonUpdate().click()
    }

    public async selectPronounsCombobox(user: UserModel): Promise<void> {
        await this.getPronounsCombobox().waitForDisplayed({
            timeoutMsg: 'Pronouns combobox was not clickable'
        })
        await this.getPronounsCombobox().selectByVisibleText(user.pronouns)
    }

    private getButtonUpdate(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@data-target="waiting-form.submit"]')
    }

    private getEmailComboBox(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_email"]')
    }

    private getFieldBio(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_bio"]')
    }

    private getFieldName(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_name"]')
    }

    private getPronounsCombobox(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_pronouns_select"]')
    }
}

export {
    ProfilePage,
}