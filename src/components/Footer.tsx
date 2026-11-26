interface FooterProps {
  name: string;
}

function Footer(props: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className = "portfolio-footer">
      <div className = "footer-content">
        <span className = "footer-logo">{"</>"}</span>
        <span className = "footer-slogan">Learning and Building</span>
        <p>&copy; {currentYear} {props.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
