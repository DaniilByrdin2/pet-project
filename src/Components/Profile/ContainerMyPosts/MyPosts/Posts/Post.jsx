import styles from './Post.module.css';

import {LikeOutlined, DislikeOutlined} from '@ant-design/icons'

const Post = ( props )=> {

    const {textPost , likesCount, imgPost, datePost} = props

    const avatar = props.dataPost ? props.dataPost.data.photos.small : null
    const name = props.dataPost ? props.dataPost.data.fullName : null 
    
    const imagePost = imgPost ? URL.createObjectURL(imgPost)  : null

    return (
        <div className={styles.container}>
            <div className={ styles.headerPost }>
                <img className={styles.avatar} src={ avatar } alt="Avatar" />
                <div className={ styles.postDate }>
                    <div>{ name }</div>
                    <div>{ datePost }</div>
                </div>
            </div>

            <div>
                <div className={ styles.PostContainer }>
                    <div className={ styles.textPost }>{ textPost }</div>

                    { imagePost ? 
                    <div className={styles.imgPostUserContainer}>
                        <img className={styles.imgPostUser} src={imagePost} alt="postImg" />
                    </div> : null }

                    <div className={ styles.containerCount }>
                        <div className={ styles.likeCount }>{likesCount}</div><LikeOutlined />
                        <div className={ styles.dislikeCount }>{likesCount}</div><DislikeOutlined />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Post;