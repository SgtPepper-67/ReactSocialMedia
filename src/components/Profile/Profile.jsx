import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <main>
      <div>
        <img height="400px" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt=""></img>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts/>
      <div>
        New post
      </div>
    </main>
  );
}

export default Profile