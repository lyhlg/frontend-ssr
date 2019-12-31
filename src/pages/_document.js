import React from 'react';
import NextDocument from 'next/document';
import { ServerStyleSheet as StyledComponentSheets, createGlobalStyle } from 'styled-components';
// import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles';
import reset from '../styles/reset';
import custom from '../styles/custom';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${custom}
`;

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const styledComponentSheet = new StyledComponentSheets();
    // const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => styledComponentSheet.collectStyles(<App {...props} />),
          //materialUiSheets.collect()
        });

      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            <GlobalStyle />
            {initialProps.styles}
            {styledComponentSheet.getStyleElement()}
            {/* {materialUiSheets.getStyleElement()} */}
          </>
        ),
      };
    } finally {
      styledComponentSheet.seal();
    }
  }
}
