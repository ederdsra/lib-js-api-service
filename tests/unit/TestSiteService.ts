import { SiteService } from '../../src/index';
import mockAxios from 'jest-mock-axios';
import siteData from '../__mocks__/site';

afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
});

it('Site -> should get all Gator Sites from the server', () => {
    
    // setup
    let catchFn = jest.fn();

    // work
    SiteService
        .site()
        .then(response => {
            expect(response).toEqual(siteData.calls.getSites.response);
        })
        .catch(catchFn);
    
    // expect
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(siteData.calls.getSites.url, siteData.calls.getSites.params);
    expect(catchFn).not.toHaveBeenCalled();
});