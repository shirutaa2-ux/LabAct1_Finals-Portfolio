import profilePic from "../profile.webp";

export default function Hero() {
  return (
    <header className="hero">
      <img src={profilePic} alt="Niel Arvin" className="profile-pic" />
      <h1 className="fade-in">Niel Arvin Reyes</h1>
      <p className="subtitle slide-up">Showcasing my journey in CS and development</p>
    </header>
  );
}
