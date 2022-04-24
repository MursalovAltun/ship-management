import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const reducer = connectRouter(history);

const middleware = routerMiddleware(history);

const RouterStore = {
  history,
  reducer,
  middleware,
};

export default RouterStore;
