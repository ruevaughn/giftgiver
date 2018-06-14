// Finally, add a src/setupTests.js file to configure the enzmye adapter for our tests. The disableLifecyleMethods portion is needed to allow us to modify props through different tests.
import requestAnimationFrame from './tempPolyfills';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });


