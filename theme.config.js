export default {
  repository: 'https://github.com/construct-rpg/docs',
  titleSuffix: '',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Construct Docs</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        The Next Gen Modular RPG System
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Construct Docs: Docs for the Next Gen Modular RPG System" />
      <meta name="og:description" content="Construct Docs: Docs for the Next Gen Modular RPG System" />
      <meta name="og:title" content="Construct Docs: Docs for the Next Gen Modular RPG System" />
      /<meta name="og:image" content="https://docs.construct-rpg.net/construct-docs.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>MIT {new Date().getFullYear()} © <a href="https://github.com/tionis">Tionis</a></>
}
