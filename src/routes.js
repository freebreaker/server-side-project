
import React from 'react';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Route ,Router, IndexRoute ,hashHistory} from 'react-router';
import TabBottom from './AllPages'
import Component1 from './Components/Component1';
import ProjectBList from "./Components/ProjectB/ProjectBList";
import ProjectBOrder from "./Components/ProjectB/ProjectBOrder";
import ProjectBDetail from './Components/ProjectB/ProjectBDetail';
import ProjectDetailList from './Components/ProjectB/ProjectDetailList';
import SignUp  from './Components/SignIn/SignUp';
import Recharge from './Components/Account/Recharge'
import WithDraw from './Components/Account/WithDraw'
import MyBorrows from './Components/Account/MyBorrows'
import MyAssets from './Components/MyAssets/MyAssets.js'
import MyRisk from './Components/MyRisk/MyRisk.js'
import MyGifts from "./Components/MyGifts/MyGifts.js"
import RMoneyText from "./Components/MyGifts/RMoneyText.js"
import RMoneyUse from "./Components/MyGifts/RMoneyUse.js"
import MyFriends from "./Components/MyFriends/MyFriends.js"
import Lucky from "./Components/MyGifts/Lucky"
import LuckyNew from "./Components/MyGifts/LuckyNew"
import Exchange from "./Components/MyGifts/Exchange"
import MyCoupon from "./Components/MyGifts/MyCoupon"
import ExchangeCoupon from "./Components/MyGifts/ExchangeCoupon"
import Security from "./Components/MySecurity/Security.js"
import Order from "./Components/MyOrder/Order"
import OrderDetails from './Components/MyOrder/OrderDetails'
import Advice from "./Components/YourAdvice/Advice"
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
            // <ReactCSSTransitionGroup
            // transitionName={this.state.transitionName}
            // className={translateStyle[this.state.transitionName]}
            // transitionEnterTimeout={300}
            // transitionLeaveTimeout={300}
            // component="div"
            // >
                <div key={this.props.location.pathname} 
                    className={this.props.location.pathname}
                    style={{position:"absolute", width: "100%"}}>
                        {this.props.children}
                </div>
            /* </ReactCSSTransitionGroup> */
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
        <Route path="ProjectDetailList/:name" component = {ProjectDetailList}/>
        <Route path="Register" component = {SignUp}/>
        <Route path="WithRecharge" component = {Recharge}/>
        <Route path="WithDraw" component = {WithDraw}/>
        <Route path="MyBorrows" component = {MyBorrows}/>
        <Route path="MyAssets" component = {MyAssets}/>
        <Route path="MyGifts" component = {MyGifts}/>
        <Route path="MyRisk" component = {MyRisk}/>
        <Route path="MyGifts/RMoneyText" component = {RMoneyText}/>
        <Route path="MyGifts/RMoneyUse" component = {RMoneyUse}/>
        <Route path="MyGifts/Lucky" component = {Lucky}/>
        <Route path="MyGifts/LuckyNew" component = {LuckyNew}/>
        <Route path="MyGifts/Exchange" component = {Exchange}/>
        <Route path="MyGifts/MyCoupon" component = {MyCoupon}/>
        <Route path="MyGifts/ExchangeCoupon" component = {ExchangeCoupon}/>
        <Route path="MyFriends" component = {MyFriends}/>
        <Route path="Security" component = {Security}/>
        <Route path="MyOrder" component = {Order}/>
        <Route path="MyOrder/Details" component = {OrderDetails}/>
        <Route path="YourAdvice" component = {Advice}/>
    </Route>
);

export default routes;

