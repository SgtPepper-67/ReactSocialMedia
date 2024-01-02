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
        <Post/>
        <Post/>
      </div>
    </div>
  );
}

export default MyPosts;