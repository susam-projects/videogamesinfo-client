import NavBar from "./NavBar";
import { HeaderTop } from "./HeaderTop";

export function Header() {
  return (
    <>
      <div className="header fadeInDown">
        <HeaderTop />
        <NavBar />
      </div>

      <style jsx>{`
        .header {
          position: relative;
          z-index: 1000;
          width: 100%;
        }
      `}</style>
    </>
  );
}
