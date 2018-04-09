import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Root from '../containers/Root';

class Routes extends React.Component{
	render(){
		const {store, history} = this.props;
		return(
			<Router store={store} history={history}>
				<Route path='/' component={Root}>
					<IndexRoute component={Root}/>
				</Route>
			</Router>
		)
	}
}

export default Routes;