import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document';

class AppDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html>
                <title>Portfodia</title>
                <Head>
                    <meta charSet="utf-8"/>    
                    <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&f[]=bebas-neue@400&f[]=chillax@1,600,500,300,700,400,200&f[]=clash-display@200,400,700,500,600,1,300&display=swap" rel="stylesheet"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default AppDocument;
