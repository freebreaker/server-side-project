
import React from 'react';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Route ,Router, IndexRoute ,hashHistory} from 'react-router';
import TabBottom from './AllPages'
import Component1 from './Components/Component1';
import ProjectBList from "./Components/ProjectB/ProjectBList";
import ProjectBOrder from "./Components/ProjectB/ProjectBOrder";
import ProjectBDetail from './Components/ProjectB/ProjectBDetail';
import SignUp  from './Components/SignIn/SignUp';
import Recharge from './Components/Account/Recharge'
import MyBorrows from './Components/Account/MyBorrows'
import Home from './Home';
import translateStyle from './translate.scss';

class Container extends React.Component {
    constructor(props){
        super(props)
        this.state={
            transitionName:'transitionWrapperPush'
        }
    }
    // componentWillMount() {
    //     document.body.style.margin = "0px";
    //     // 这是防止页面被拖拽
    //     document.body.addEventListener('touchmove', (ev) => {
    //         ev.preventDefault();
    //     });
    // }
    componentWillReceiveProps(nextProps){
        if(nextProps.location.action == "PUSH"){
            this.setState({transitionName:'transitionWrapperPush'})
        }else if(nextProps.location.action == "POP"){
            this.setState({transitionName:'transitionWrapperPop'})
        }
    }

    render() {
        return (
            <ReactCSSTransitionGroup
            transitionName={this.state.transitionName}
            className={translateStyle[this.state.transitionName]}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            component="div"
            >
                <div key={this.props.location.pathname} 
                    className={this.props.location.pathname}
                    style={{position:"absolute", width: "100%"}}>
                        {this.props.children}
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}


const routes = (
    <Route path='/' component= {Container}>
        <IndexRoute component={TabBottom}/>
        <Route path="Mobile" component = {TabBottom} />
        <Route path="ProjectBList" component = {ProjectBList} />
        <Route path="ProjectBDetail/:name" component = {ProjectBDetail}/>
        <Route path="ProjectBOrder/:name" component = {ProjectBOrder}/>
        <Route path="Register" component = {SignUp}/>
        <Route path="Recharge" component = {Recharge}/>
        <Route path="MyBorrows" component = {MyBorrows}/>
    </Route>
);

export default routes;

