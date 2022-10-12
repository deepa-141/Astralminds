import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Share your deep thoughts with us!</span>
        <span className="headerTitleLg">ASTRAL MINDS</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2017/02/23/17/56/moon-2092807_960_720.jpg"
        alt=""
      />
    </div>
  );
}
