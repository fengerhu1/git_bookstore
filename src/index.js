import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, Link } from 'react-router-dom'
import './index.css';
import Home from './Home';
import Login from './Login';
import Shopcar from './Shopcarhome'
import Bookdemo from './Bookdemo'
import Regist from './Regist'
import Starhome from './Starhome'
import Personaldata from './Personaldata'
import registerServiceWorker from './registerServiceWorker';
import login2 from './login2'

/*class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={Home}>
                    <Route path='list' component={Home}/>

                </Route>
            </Router>
        )
    }
}*/

//export default RouteMap

//<Time initialData= {data} headers= {headers}/>
/*var Ex = ReactDOM.render(
    <Home/>,
    document.getElementById('app')
);*/

//ReactDOM.render(<App />, document.getElementById('app'));
//function tick() {
//    ReactDOM.render(<Time />, document.getElementById('root2'));
//}
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={login2}/>
            <Route path='/regist' component={Regist}/>
            <Route path='/shopcar' component={Shopcar}/>
            <Route path='/bookdemo' component={Bookdemo}/>
            <Route path='/starhome' component={Starhome}/>
            <Route path="/personaldata" component={Personaldata}/>
            <Route path="/login2" component={login2}/>
        </Switch>
    </main>
)
var Ex = ReactDOM.render(
    <HashRouter>
        <Main />
    </HashRouter>,
    document.getElementById('app')
)
registerServiceWorker();
