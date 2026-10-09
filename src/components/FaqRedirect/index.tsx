import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// FAQ は albumie.app に移したので、旧 URL から転送する
// GitHub Pages では 301 リダイレクトを設定できないため meta refresh を使う
export default function FaqRedirect(): JSX.Element {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const url = `https://albumie.app/${currentLocale}/faq`;

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${url}`} />
        <link rel="canonical" href={url} />
      </Head>
      <p>
        <a href={url}>{url}</a>
      </p>
    </>
  );
}
