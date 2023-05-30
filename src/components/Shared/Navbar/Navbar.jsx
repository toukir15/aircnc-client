import Container from "../Container";
import Logo from "./logo";

export default function Navbar() {
  return (
    <div className="fixed w-ful bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row item-center justify-between gap-3 md:gap-0">
            <Logo />
            <div>Search</div>
            <div>Menu</div>
          </div>
        </Container>
      </div>
    </div>
  );
}
