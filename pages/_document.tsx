import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document';class AppDocument extends Document {    static async getInitialProps(ctx: DocumentContext) {        const initialProps = await Document.getInitialProps(ctx);        return {...initialProps};    }    render() {        return (            <Html>                <title>Portfodia</title>                <Head>                    <meta charSet="utf-8"/>                </Head>                <body>                <Main/>                <NextScript/>                </body>            </Html>        );    }}export default AppDocument;