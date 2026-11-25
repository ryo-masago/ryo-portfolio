interface FooterProps {
  name: string;
}

function Footer(props: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className = "portfolio-footer">
      <p>&copy; {currentYear} {props.name}. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
