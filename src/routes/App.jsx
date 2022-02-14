import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Registry from '../containers/Registry';
import Player from '../containers/Player';
import NotFound from '../containers/NotFound';

import Layout from '../components/Layout';

import '../assets/styles/Global.scss';
import '../assets/styles/Media.scss';

const App = () =>
{
	return(
		<Router>
			<Layout>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/login" component={Login}/>
						<Route exact path="/registry" component={Registry}/>
						<Route exact path="/player/:id" component={Player}/>
						<Route component={NotFound}/>
					</Switch>
			</Layout>
		</Router>
	);
};

export default App;