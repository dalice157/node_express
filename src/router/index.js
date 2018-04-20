import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from '../containers/Root';
import Main from '../containers/Main';
import Api from '../containers/Api';
import Items from '../components/Items';

export default (
	<Route path="/" component={Root}>
		<IndexRoute component={Main}/>
		<Route path="shop/:sid" component={Api}>
			<IndexRoute component={Items}/>
		</Route>
	</Route>
)
