import { Helmet } from 'react-helmet';
import React from 'react';

type THeadings = {
  slug: string;
  depth: number;
  value: string;
};

interface IDoc {
  key: string;
  value: {
    name: string;
    menu: string;
    route: string;
    id: string;
    filepath: string;
    fullpath: string;
    link: string;
    slug: string;
    headings: THeadings[];
  };
}

/**
* Sample IDoc
key: "src/docs-only/Shadows.mdx"
value:
name: "Shadows"
menu: "Branding"
route: "/shadows"
id: "da8a89d5e1ba1da20429f47c54e29ac8"
filepath: "src/docs-only/Shadows.mdx"
fullpath: "F:\Github\Web-Design-Helpers\docz-app\src\docs-only\Shadows.mdx"
link: ""
slug: "src-docs-only-shadows"
headings: Array(1)
0: {slug: "shadows", depth: 1, value: "Shadows"} 
*/

const SEOHeader: React.FC<{ doc: IDoc }> = props => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { doc } = props;
  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <link rel="apple-touch-icon" href="/public/icon-192x192.png" />
      <link rel="icon" type="image/x-icon" href="/public/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/public/icon-512x512.png"
      />
    </Helmet>
  );
};

export default SEOHeader;
