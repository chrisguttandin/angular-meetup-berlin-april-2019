import { env } from 'process';
import { browser, by } from 'protractor';
import { elementShotMatchers, expectElementShot, resembleElementShot } from 'element-shot';

const navigateTo = (path: string) => {
    return browser.get((env.IS_SMOKE_TEST) ? `/angular-meetup-berlin-april-2019${ path }` : path);
}

describe('slides', () => {

    beforeEach(() => {
        jasmine.addMatchers(elementShotMatchers);
    });

    describe('first slide', () => {

        it('should look the same', async () => {
            navigateTo('/');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

        it('should look the same', async () => {
            navigateTo('/slides/1');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('second slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/2');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-2');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('third slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/3');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-3');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('fourth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/4');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-4');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('fifth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/5');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-5');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('sixth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/6');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-6');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('seventh slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/7');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-7');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('eighth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/8');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-8');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('nineth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/9');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-9');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('tenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/10');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-10');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('eleventh slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/11');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-11');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twelveth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/12');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-12');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('thirteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/13');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-13');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('fourteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/14');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-14');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('fifteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/15');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-15');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('sixteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/16');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-16');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('seventeenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/17');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-17');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('eighteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/18');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-18');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('nineteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/19');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-19');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twentieth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/20');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-20');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twenty first slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/21');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-21');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twenty second slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/22');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-22');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twenty third slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/23');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-23');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twenty fourth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/24');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-24');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twenty fifth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/25');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-25');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twenty sixth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/26');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-26');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twenty seventh slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/27');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-27');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twenty eighth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/28');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-28');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twenty nineth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/29');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-29');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('thirtieth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/30');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-30');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('thirty first slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/31');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-31');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('thirty second slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/32');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-32');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('thirty third slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/33');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-33');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('thirty fourth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/34');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-34');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('thirty fifth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/35');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-35');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('thirty sixth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/36');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-36');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('thirty seventh slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/37');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-37');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('thirty eighth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/38');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-38');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('thirty nineth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/39');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-39');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0, 0.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

});
