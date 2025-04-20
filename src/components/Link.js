const Link = ({ href, text }) => (
  <a
    href={href}
    className="nav-link"
    aria-label="On Click"
  >
    {text}
  </a>
);

export default Link;