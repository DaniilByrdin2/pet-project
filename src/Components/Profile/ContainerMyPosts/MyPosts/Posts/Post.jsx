import c from './Post.module.css';

const Post = (props)=> {
    return (
        <div className={c.container}>
            <img src="" alt="Avatar" />
            <span>{props.textPost} {props.likesCount}</span>
        </div>
    );
}
export default Post;