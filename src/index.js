import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ClienteCreate from './clientes/Create'
import ClientesAdmin from './ClientesAdmin';

ReactDOM.render(
  <Router>
      <div>
          <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/clientes' component={ClientesAdmin} />
            <Route path='/clientes/create' component={ClienteCreate} />
          </Switch>
      </div>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();