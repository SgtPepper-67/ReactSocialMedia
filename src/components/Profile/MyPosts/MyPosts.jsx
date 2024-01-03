import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add Button</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?"/>
        <Post message="What are you doing here"/>
      </div>
    </div>
  );
}

export default MyPosts;