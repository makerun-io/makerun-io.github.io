export default {
  logo: <span>Makerun.io</span>,
  project: {
    link: 'https://github.com/makerun-io/makerun-io.github.io'
  },
  docsRepositoryBase: 'https://github.com/makerun-io/makerun-io.github.io/tree/main',
  head: 
    <link rel="icon" type="image/png" href="https://www.makerun.io/favicon.ico" />,
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://www.makerun.io">
          makerun.io
        </a>
        .
      </span>
    )
  }
  // ... other theme options

}