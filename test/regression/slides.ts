import { env } from 'process';
import { browser, by } from 'protractor';
import { elementShotMatchers, expectElementShot, resembleElementShot } from 'element-shot';

const navigateTo = (path: string) => {
    return browser.get(`${browser.baseUrl}${path}`);
};

describe('slides', () => {
    beforeEach(() => {
        jasmine.addMatchers(elementShotMatchers);
    });

    describe('first slide', () => {
        it('should look the same', async () => {
            await navigateTo('/');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(7.6, 7.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

        it('should look the same', async () => {
            await navigateTo('/slides/1');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(7.6, 7.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('second slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/2');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-2');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3.8, 4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('third slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/3');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-3');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(4, 4.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fourth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/4');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-4');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(1.8, 2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fifth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/5');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-5');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(6.1, 6.3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('sixth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/6');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-6');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(2.9, 3.1);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('seventh slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/7');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-7');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(4.6, 4.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('eighth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/8');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-8');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(2.8, 3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('nineth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/9');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-9');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(4.2, 4.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('tenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/10');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-10');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(1.4, 1.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('eleventh slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/11');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-11');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3.6, 3.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twelveth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/12');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-12');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3, 3.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('thirteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/13');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-13');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3.3, 3.5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fourteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/14');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-14');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(2.1, 2.3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fifteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/15');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-15');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3.6, 3.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('sixteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/16');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-16');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(2.7, 2.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('seventeenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/17');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-17');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(1.4, 1.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('eighteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/18');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-18');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3, 3.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('nineteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/19');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-19');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3.2, 3.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twentieth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/20');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-20');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(1.9, 2.1);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty first slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/21');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-21');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(5.7, 5.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty second slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/22');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-22');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(2, 2.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty third slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/23');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-23');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(2.1, 2.3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty fourth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/24');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-24');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(2.4, 2.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty fifth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/25');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-25');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(2.6, 2.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty sixth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/26');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-26');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3.7, 3.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty seventh slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/27');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-27');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(1.6, 1.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty eighth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/28');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-28');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(2.4, 2.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty nineth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/29');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-29');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3.2, 3.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('thirtieth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/30');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-30');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(1.5, 1.7);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('thirty first slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/31');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-31');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(6.3, 6.5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('thirty second slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/32');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-32');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(6.3, 6.5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('thirty third slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/33');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-33');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(6.4, 6.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('thirty fourth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/34');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-34');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(2.7, 2.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('thirty fifth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/35');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-35');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(0.6, 0.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('thirty sixth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/36');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-36');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(4.1, 4.3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('thirty seventh slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/37');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-37');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(3.1, 3.3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('thirty eighth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/38');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-38');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(4.2, 4.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('thirty nineth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/39');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-39');

            if (env.CI) {
                expectElementShot(result).toHaveMismatchWithinRange(4, 4.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });
});
