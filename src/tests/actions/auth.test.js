import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    login,
    startLogin,
    logout,
    startLogout
} from '../../actions/auth'

const createMockStore = configureMockStore([thunk]);

test('should set up login action object', () => {
    const uid = 'SLKXIDHSEHIEROIRU3424'
    const action = login(uid);

    expect(action).toEqual({ type : 'LOGIN', uid});
});

test('should set up logout action object', () => {
    const action = logout();

    expect(action).toEqual({ type : 'LOGOUT' });
});
