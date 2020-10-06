import Head from "next/head";

const MainHead = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Zamur Borges Vedovatto" />
        <meta name="description" content="Melhores Investidores" />

        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="/css/bootstrap.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/style.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/responsive.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/main.css"
          type="text/css"
          media="all"
        />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

        <script src="/js/jquery.js"></script>
        <script src="/js/fluidvids.js"></script>
        <script src="/js/infinitescroll.js"></script>
        <script src="/js/justified.js"></script>
        <script src="/js/slick.js"></script>
        <script src="/js/theia-sticky-sidebar.js"></script>
        <script src="/js/aos.js"></script>
        <script src="/js/custom.js"></script>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.5.5/dist/css/uikit.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.5/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.5/dist/js/uikit-icons.min.js"></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-171618941-1"
        ></script>
        <script src="/js/ganalytics.js"></script>
        <script
          data-ad-client="ca-pub-3961120270072973"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <title>Melhores Investidores</title>
      </Head>
    </>
  );
};

export default MainHead;
