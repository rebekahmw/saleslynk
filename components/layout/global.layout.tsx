import Head from "next/head";
import GlobalHeader from "../header/global.header";
import GlobalFooter from "../footer/global.footer";
import { ActivePageType } from "../header/global.navigation";
import ConfirmCookie from "../cookie/Confirm.cookie";

export type AlternativeContactType = {
	title: string;
	button: string;
	href: string;
};

type Props = {
	homepage?: boolean;
	activePage?: ActivePageType;
	clear?: boolean;
	hideContact?: boolean;
	alternativeContact?: AlternativeContactType;
	children: React.ReactChild;
};

const GlobalLayout: React.FC<Props> = ({
	homepage,
	activePage,
	clear,
	hideContact,
	alternativeContact,
	children,
}) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>
					Boxmodel - Bespoke Software &amp; Business Solutions
				</title>
				<meta
					property="og:title"
					content="Boxmodel - Bespoke Software &amp; Business Solutions"
					key="og:title"
				/>
				<meta
					name="description"
					content="We're a global software development house. We design &amp; build bespoke software, business solutions, native apps and IoT/dashboards."
					key="description"
				/>
				<meta
					property="og:description"
					content="We're a global software development house. We design &amp; build bespoke software, business solutions, native apps and IoT/dashboards."
					key="og:description"
				/>
				<meta
					name="keywords"
					content="bespoke, software, applications, business, solutions, IoT, internet of things, internet of everything, architects, developers, web, websites, ios, android, windows, systems"
					key="keywords"
				/>
				<meta
					property="og:keywords"
					content="bespoke, software, applications, business, solutions, IoT, internet of things, internet of everything, architects, developers, web, websites, ios, android, windows, systems"
					key="og:keywords"
				/>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/boxmodel/image/upload/v1653382615/assets/boxmodel_og_image_upqpyz.jpg"
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta name="author" content="Boxmodel" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/icons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/icons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/icons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/icons/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/icons/safari-pinned-tab.svg"
					color="#111417"
				/>
				<link rel="shortcut icon" href="/icons/favicon.ico" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta
					name="msapplication-config"
					content="/icons/browserconfig.xml"
				/>
				<meta name="theme-color" content="#111417" />
			</Head>
			<div>
				<GlobalHeader
					homepage={homepage}
					activePage={activePage}
					clear={clear}
				/>
				{children}
				<GlobalFooter
					hideContact={hideContact}
					alternativeContact={alternativeContact}
				/>
			</div>
			<ConfirmCookie />
		</>
	);
};

export default GlobalLayout;
