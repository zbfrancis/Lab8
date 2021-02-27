const main = require('../assets/scripts/main');

describe('formatVolumeIconPath', () => {
    test('Volume 3', () => {
        expect(main(75)).toMatch('./assets/media/icons/volume-level-3.svg');
    });

    test('Volume 2', () => {
        expect(main(55)).toMatch('./assets/media/icons/volume-level-2.svg');
    });

    test('Volume 1', () => {
        expect(main(1)).toMatch('./assets/media/icons/volume-level-1.svg');
    });

    test('Volume 0', () => {
        expect(main(-42)).toMatch('./assets/media/icons/volume-level-0.svg');
    });

});
