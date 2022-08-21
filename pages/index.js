import Image from "next/image";
function HomePage() {
  return (
    <div>
      <h1> Welcome to Software Engineer</h1>
      <Image
        src="/asset/logo.jpg"
        alt="welcome"
        width="320px"
        height="435px"
        layout="fixed"
      ></Image>
    </div>
  );
}

export default HomePage;
