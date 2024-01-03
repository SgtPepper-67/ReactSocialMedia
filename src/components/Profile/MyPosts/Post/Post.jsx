import s from './Post.module.css'

function Post(props) {
  console.log(props.message);
  
  return (
    <div className={s.item}>
      <img alt="avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeu_2xfqounYauO2lOTc97tuTWTGey832_g&usqp=CAU">
      </img>
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
}

export default Post;