function Footer(){
    return <footer className="page-footer
    #6a1b9a purple darken-3">
    <div className="footer-copyright">
      <div className="container">
        © {new Date().getFullYear()}
        Sharapov Kirill
        <a className="grey-text
        text-lighten-4 right" href="#!">Repository</a>
      </div>
    </div>
  </footer>
}

export { Footer };