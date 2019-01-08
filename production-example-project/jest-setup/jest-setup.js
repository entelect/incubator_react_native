import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('react-redux', () => require('react-redux-mock'));
jest.mock('redux');
jest.mock('react-navigation', () => ({
    createStackNavigator: jest
        .fn()
        .mockName('createStackNavigator')
        .mockImplementation(data => data)
    /* Add more react-navigation mocks here as they are needed */
}));
