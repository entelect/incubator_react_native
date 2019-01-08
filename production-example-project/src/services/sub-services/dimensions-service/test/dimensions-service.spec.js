import { Dimensions } from 'react-native';

import dimensionsService from '../dimensions-service';

describe('dimensionsService - Unit Test', () => {
    Dimensions.get = jest.fn().mockName('Dimensions.get');

    it('should return the correct dimensions when in portrait', () => {
        Dimensions.get.mockImplementation(() => ({ height: 1600, width: 900 }));
        const { height, width } = dimensionsService.getScreenDimensions();
        expect(height).toEqual(1600);
        expect(width).toEqual(900);
    });

    it('should return the correct dimensions when in landscape', () => {
        Dimensions.get.mockImplementation(() => ({ height: 900, width: 1600 }));
        const { height, width } = dimensionsService.getScreenDimensions();
        expect(height).toEqual(1600);
        expect(width).toEqual(900);
    });
});
