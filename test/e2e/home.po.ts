import { env } from 'process';
import { browser, by, element } from 'protractor';
import { promise } from 'selenium-webdriver'; // tslint:disable-line:no-implicit-dependencies

export class HomePage {
    public getHeadline(): promise.Promise<string> {
        return element(by.css('amb-app h1')).getText();
    }

    public getSubHeadline(): promise.Promise<string> {
        return element(by.css('amb-app h2')).getText();
    }

    public navigateTo(): promise.Promise<any> {
        return browser.get(env.IS_SMOKE_TEST === 'true' ? '/angular-meetup-berlin-april-2019' : '/');
    }
}
