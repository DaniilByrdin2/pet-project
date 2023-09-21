import React from 'react';
import { useState } from 'react';

import { Field, reduxForm } from 'redux-form';

import styles from './MyPosts.module.css';
import c from '../../../Login/login.module.css'

import Post from './Posts/Post.jsx';

import {FormProfile, FormPostProfile} from '../../../Form/Form';
import {requaredInput, maxLength} from '../../../../Utils/ValidateForm/Validator';

import { ButtonDashed } from '../../../UI-Components/Button/Button';
import { CloseCircleOutlined } from '@ant-design/icons'



const maxSymbol = maxLength(30);

const FormAddPost = (props) => {
    
    const [ choosePhoto, setChoosePhoto ] = useState( false )
    const [ userPostPhoto, setUserPostPhoto ] = useState( null )

    const {handleSubmit, reset} = props;

    const submit = (values) => {

        const photo = userPostPhoto

        props.onAddPost( values, photo );
        props.reset();
    }

    return (
        <>
        <form onSubmit={ handleSubmit(submit) } >
            <Field  name='textPost' component={ FormProfile } validate={ [requaredInput, maxSymbol] }/>
            <button className={c.buttonSubmit} type='onSubmit'>Add Post</button>

                { choosePhoto ?
                    <div className={styles.activeChangePost}>
                        <input type='file' onChange={(e) => {
                            setUserPostPhoto( e.target.files[0] )
                            setChoosePhoto(p => !p)
                        }} />
                        <div onClick={() => { setChoosePhoto(p => !p) }}><CloseCircleOutlined /></div>
                    </div>
                    :
                    <div>
                        <ButtonDashed fn={() => { setChoosePhoto(p => !p) }} text={'Add Photo'} />
                    </div>}
        </form> 
        </>
    )
}            
let FormAddPostRedux = reduxForm({
    form: 'PostForm',
})(FormAddPost)



const MyPosts = (props)=> {

    let post = props.posts.map( post => 
        <div className={styles.PostContainer}>
            <Post 
                    dataPost = { props.UserProfilePost }  
                    datePost = { post.date } 
                    textPost={post.textPost} 
                    likesCount={post.likesCount}
                    imgPost = { post.photoPost }
            />
        </div>
    );
    let textPost = props.newPostText;


    return (
        <>
            <div className={styles.container}>
                <div className='posts'>
                    <p>My Posts</p>
                </div>
                <div className={ styles.postModification }>
                    <FormAddPostRedux onAddPost={props.onAddPost} />
                </div>
            </div>
            {post}
        </>
    );
}
export default MyPosts;
