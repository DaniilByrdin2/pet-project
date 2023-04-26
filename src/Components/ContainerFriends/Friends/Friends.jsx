import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styles from './Friends.module.css';
import imgAnonymusUser from './img/images.png';
import arrowLeft from './img/app-arrow-left.png';
import arrowRight from './img/app-arrow-right.png';
import Preloader from '../../Preloader/Preloader';

const Friends = (props) => {
    let colPage = Math.ceil(props.totalUsers / props.sizePage);
    let pages = props.pages;
    let pagesArrow = props.arrow;
    return (
        <>
            { props.isFetching ?  <Preloader /> :       
            <div className={styles.friendsCont}>
                <div className={styles.containerNumberPage}>
                    <span onClick={() => { props.onPageArrowFirst(pages[0], props.sizePage) }}><img className={styles.arrowLeft} src={arrowLeft} /></span>
                    {pages.map(p => {
                        return <span onClick={() => { props.PageChange(p, props.sizePage) }} className={props.numberPage === p && styles.selectedPage}>{p}</span>
                    })}
                    <span onClick={() => { props.onPageArrow(pagesArrow[pagesArrow.length - 1], props.sizePage) }}><img className={styles.arrowRight} src={arrowRight} /></span>
                </div>
                {
                    props.FriendsPage.map(u =>
                        <div key={u.id} className={styles.friends}>
                            <span>
                                <NavLink to={'/profile/' + u.id}>
                                    <div>
                                        <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : imgAnonymusUser} alt="123" />
                                    </div>
                                </ NavLink>
                                <div>
                                    {u.followed
                                        ? <button className={styles.wrapperBTN} disabled={props.toogleDisableUsesr.some(id => {
                                            return id === u.id
                                        })}
                                            onClick={() => {
                                                props.Unfol(u.id)
                                            }}>Unfallow</button>
                                        : <button className={styles.wrapperBTN} disabled={props.toogleDisableUsesr.some(id => {
                                            return id === u.id
                                        })}
                                            onClick={() => {
                                                props.Fol(u.id)
                                            }}>Fallow</button>}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                            </span>
                        </div>)
                }
            </div>}
        </>)
}

export default Friends;