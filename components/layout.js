import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div class="container">
      <Header />
      <div style={{ margin: "10px 20px" }}>{children}</div>
      <Footer />
    </div>
  );
}
