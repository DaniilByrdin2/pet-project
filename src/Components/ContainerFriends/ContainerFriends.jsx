import { connect } from "react-redux";
import Friends from './Friends/Friends';
import { follow,unfollow,setUsers,
    setTotalUsers,currentPage,toogleIsFetching,
    toogleDisable, onPageChange, firstUsers, thunkUnfollow, thunkFollow,    onPageArrow,onPageArrowFirst } from '../../Redux/Redusers/Reduser_FriendsPage'
import React from "react";
// import Preloader from '../Preloader/Preloader';



class FriendsAPIComponent extends React.Component {
    render = () => {
        return (
        <>
            {/* { this.props.isFetching ? <Preloader /> : null } */}
            <Friends
                toogleDisableUsesr = {this.props.toogleDisableUsesr}           
                toogleDisable = {this.props.toogleDisable}
                FriendsPage={this.props.FriendsPage}
                follow={this.props.follow}
                numberPage={this.props.numberPage}
                totalUsers={this.props.totalUsers}
                sizePage={this.props.sizePage}
                unfollow={this.props.unfollow}
                Fol={this.props.thunkFollow}
                Unfol={this.props.thunkUnfollow}
                PageChange={this.props.onPageChange} 

                arrow = {this.props.arrow}
                onPageArrow = {this.props.onPageArrow}
                onPageArrowFirst= {this.props.onPageArrowFirst}
                pages={this.props.pages}

                isFetching= {this.props.isFetching}
                />
        </>)
    }

    componentDidMount() {
        this.props.firstUsers( this.props.numberPage ,this.props.sizePage)
    }
}

let mapStateToProps = (state) => {
    return {
        FriendsPage: state.FriendsPage.UsersList,
        sizePage: state.FriendsPage.sizePage,
        totalUsers: state.FriendsPage.totalUsers,
        numberPage: state.FriendsPage.numberPage,
        isFetching: state.FriendsPage.isFetching,
        toogleDisableUsesr: state.FriendsPage.toogleDisableUsesr,
        arrow: state.FriendsPage.arrow,
        pages: state.FriendsPage.pages,
    }
}
let ContainerFriends = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsers,
    currentPage,
    toogleIsFetching,
    toogleDisable,

    onPageChange,
    thunkUnfollow,
    thunkFollow,
    firstUsers,

    onPageArrow,
    onPageArrowFirst,
})(FriendsAPIComponent);

export default ContainerFriends;