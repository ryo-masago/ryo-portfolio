interface HeaderProps {
  name: string;
}

function Header(props: HeaderProps) {
  return (
    <header className = "portfolio-header">
      <h2 className = "portfolio-name">{props.name}</h2>
    </header>
  );
}

export default Header;
