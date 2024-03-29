import s from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}><a href="/profile">Profile</a></div>
      <div className={s.item}><a href="/dialogs">Messages</a></div>
      <div className={s.item}><a href="#">News</a></div>
      <div className={s.item}><a href="#">Music</a></div>
      <div className={s.item}><a href="#">Setting</a></div>
    </nav>
  );
}

export default Navbar