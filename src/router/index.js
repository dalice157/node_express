import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from '../containers/Root';
import Main from '../containers/Main';
import Api from '../containers/Api';

export default (
	<Route path="/" component={Root}>
		<IndexRoute component={Main}/>
		<Route path="api/user/:pid" component={Api}/>
	</Route>
)
