import Logo from "./Logo";
import Form from "./Form";

export default function TopBar({ children }) {
  return (
    <div id="top-bar-container">
      <Logo />
      <div className="search-bar-container blank-line">
        <Form />
        {children}
      </div>
    </div>
  );
}
