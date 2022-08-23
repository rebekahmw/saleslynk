import Head from 'next/head'
import ErrorWrapper from '../error/wrapper.error';
import GlobalHeader from '../header/global.header';

type Props = {
	children: React.ReactChild
}

const ErrorLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>Boxmodel - Bespoke Software and Business Solutions Architects</title>
				<meta property="og:title" content="Boxmodel - Bespoke Software and Business Solutions Architects" />
				<meta name="description" content="We think outside the box when we design &amp; build Bespoke Software, Business Applications, IoT/Dashboarding solutions and Native Applications to solve real business problems." />
				<meta property="og:description" content="We think outside the box when we design &amp; build Bespoke Software, Business Applications, IoT/Dashboarding solutions and Native Applications to solve real business problems." />
				<meta name="keywords" content="bespoke, software, applications, business, solutions, IoT, internet of things, internet of everything, architects, developers, web, websites, ios, android, windows, systems" />
				<meta property="og:keywords" content="bespoke, software, applications, business, solutions, IoT, internet of things, internet of everything, architects, developers, web, websites, ios, android, windows, systems" />
				<meta name="author" content="Boxmodel" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />



				<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
				<link rel="manifest" href="/icons/site.webmanifest" />
				<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#111417" />
				<link rel="shortcut icon" href="/icons/favicon.ico" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="msapplication-config" content="/icons/browserconfig.xml" />
				<meta name="theme-color" content="#111417" />


			</Head>
			<div>
				<GlobalHeader />
				<ErrorWrapper>
					{children}
				</ErrorWrapper>
			</div>
		</>
	)
}

export default ErrorLayout;