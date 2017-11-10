// import React from 'react';
// import { render } from 'react-dom';

// import App from './componets/App';


// render(<App/>, document.querySelector('#main'));

import React from 'react';
import {render} from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'
import StorePicker from './componets/Store'

import App from './componets/App'
import NotFound from './componets/NotFound'
const Root = () => {
	return(
		<BrowserRouter>
		<div>
			<Match exactly pattern="/" component={StorePicker} />
			<Match pattern="/store/:storeId" component={App} />
			<Miss component={NotFound}/>
		</div>
		</BrowserRouter>
		)
}
render(<Root/>, document.querySelector('#main'));


