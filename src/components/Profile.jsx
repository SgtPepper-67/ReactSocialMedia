import s from "./Profile.module.css"

const Profile = () => {
  return (
    <main className={s.content}>
      <div>
        <img height="400px" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt=""></img>
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
      </div>
      <div>
        New post
      </div>
    </main>
  );
}

export default Profile