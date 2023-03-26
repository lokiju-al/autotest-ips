import { LoginPage } from '../page-object/Login.page'
import { IssuesPage } from '../page-object/Issues.page'
import { userData } from '../data/user.data'
import { UserModel, createUserModel } from '../model/user.model'
import { issueData } from '../data/issue.data'
import { IssueModel, createIssueModel } from '../model/issue.model'

describe('Issues test', async () => {
    let loginPage: LoginPage
    let issuesPage: IssuesPage
    const user: UserModel = createUserModel(userData)
    const issue: IssueModel = createIssueModel(issueData)
    const invalidTitle: string = '123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 12345'
    const invalidFile: string = 'src/files/exe_git-bash.exe'

    before(async () => {
        loginPage = new LoginPage(browser)
        issuesPage = new IssuesPage(browser)
        await loginPage.openUrl()
        await loginPage.fillFieldLogin(user.login)
        await loginPage.fillFieldPassword(user.password)
        await loginPage.clickButtonLogin()
    })

    beforeEach(async () => {
        await issuesPage.openUrl(user.urlIssuesPage)
    })

    // it('The user should be able to successfully create tasks with a valid number of characters in the title', async () => {
    //     await issuesPage.clickButtonNewIssue()
    //     await issuesPage.fillFieldTitle(issue.title)
    //     await issuesPage.clickButtonSubmitNewIssue()

    //     expect(await issuesPage.getIssueTitleText()).toEqual(issue.title)
    // })

    // it('The user should not be able to successfully create tasks with a 1025 character title', async () => {
    //     await issuesPage.clickButtonNewIssue()
    //     await issuesPage.fillFieldTitle(invalidTitle)
    //     await issuesPage.clickButtonSubmitNewIssue()

    //     expect(await issuesPage.getAlertInvalidTitleText()).toEqual('There was an error creating your Issue: title is too long (maximum is 256 characters).')
    // })

    // it('The user should be able to successfully add valid format files to the task', async () => {
    //     await issuesPage.clickButtonNewIssue()
    //     await issuesPage.fillFieldTitle(issue.title)
    //     await issuesPage.uploadCommentFile(issue.commentFilePath)
    //     await issuesPage.clickButtonSubmitNewIssue()

    //     expect(await issuesPage.getCommentFileAttribute()).toEqual('_blank')
    // })

    // it('The user should not be able to successfully add invalid format files to the task', async () => {
    //     await issuesPage.clickButtonNewIssue()
    //     await issuesPage.uploadCommentFile(invalidFile)

    //     expect(await issuesPage.getAlertInvalidFileText()).toEqual('We don’t support that file type. Try again with a GIF, JPEG, JPG, MOV, MP4, PNG, SVG, WEBM, CSV, DOCX, FODG, FODP, FODS, FODT, GZ, LOG, MD, ODF, ODG, ODP, ODS, ODT, PATCH, PDF, PPTX, TGZ, TXT, XLS, XLSX or ZIP.')
    // })

    after(async () => {
        await browser.reloadSession()
    })
})