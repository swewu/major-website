import Image from "next/image";
function HomePage() {
  return (
    <div>
      <h1> Welcome to Software Engineer</h1>
      <Image
        src="/asset/welcome.jpg"
        alt="welcome"
        width="640px"
        height="420px"
        layout="fixed"
      ></Image>
    </div>
  );
}

export default HomePage;
