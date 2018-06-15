import React, { Component } from 'react';
import BottomTab from '../../PubComponents/BottomTab.js';
import TopBar from '../../PubComponents/TopBar';

class MyFriends extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="MyFriends" style={{paddingTop:55,paddingBottom:65}}>
                <TopBar title="我的好友" BackTo ="/MyGifts" Id={this.props.location.state.Id}/>
                <div className='MyFriendsInvite'>
                freinds
                </div>
                <BottomTab/>
            </div>
        );
    }
}

export default MyFriends;