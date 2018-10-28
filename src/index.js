import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import './css/line-awesome.css'
import './css/line-awesome-font-awesome.css'
import './css/loaders.css'
import './css/materialize.css'
import './css/owl.carousel.min.css'
import './css/owl.theme.default.min.css'
import './css/style.css'
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/*<Route component={App}>*/}
            {/*</Route>*/}
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
