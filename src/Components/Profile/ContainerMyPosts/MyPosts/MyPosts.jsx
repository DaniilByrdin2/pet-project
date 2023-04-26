import c from './MyPosts.module.css';
import Post from './Posts/Post.jsx';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {FormProfile} from '../../../Form/Form';
import {requaredInput, maxLength} from '../../../../Utils/ValidateForm/Validator';

const maxSymbol = maxLength(10);

const formAddPost = (props) => {
    const {handleSubmit, reset} = props;
    const submit = (values) => {
        props.onAddPost(values);
        props.reset();
    }
    return (
        <form onSubmit={ handleSubmit(submit) } >
            <Field  name='textPost' component={FormProfile} validate={ [requaredInput, maxSymbol] }/>
            <button className={c.gradientButton} type='onSubmit'>Добавить пост</button>
        </form>
    )
}            
let FormAddPostRedux = reduxForm({
    form: 'PostForm',
})(formAddPost)

const MyPosts = (props)=> {
    let post = props.posts.map( post => <Post textPost={post.textPost} likesCount={post.likesCount}/>);
    let textPost = props.newPostText;

    return (
        <div className={c.container}>
            <span>My Posts</span>
            <FormAddPostRedux onAddPost={props.onAddPost}/>
            {post}
        </div>
    );
}
export default MyPosts;