

export const NavBar = ({ theme, toggleTheme }) => {
  return (
    <div className="navbar">
      <img
        src={
          theme === "light"
            ? "https://i.pinimg.com/564x/fb/3a/41/fb3a41cb36290985fbbd86ad11a2bcc5.jpg"
            : "https://i.pinimg.com/236x/74/ca/3c/74ca3c0b73a91b67e493bf72c508daa2.jpg"
        }
        alt="Pokemon-logo"
      />
      <h2 style={{ cursor: "pointer" }} onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </h2>
    </div>
  );
};
