import LogoStyles from "../../styles/icons/Icons.module.scss";
import style from "../../utils/styles";

type Props = {
	perkName: string
}

const PerkIcon: React.FC<Props> = ({ perkName }) => {
	return (
		<div className={style([LogoStyles.iconWrapper])}>
			<div className={style([LogoStyles.perkIcon])}>
				{perkName.toLowerCase() === "pension" ? <svg viewBox="0 0 60 60"><g data-name="Group 2174" transform="translate(-376 -1720)"><rect data-name="Rectangle 80" width="60" height="60" rx="10" transform="translate(376 1720)" fill="#fff" /><g data-name="Group 2170" transform="translate(-669.905 1404.095)" fill="none" stroke="#00e783" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle data-name="Ellipse 229" cx="14" cy="14" r="14" transform="translate(1061.905 331.905)" /><g data-name="Group 2173"><path data-name="Line 128" d="M1072.184 346.419h6.167" /><path data-name="Path 10885" d="M1079.627 343.247a2.481 2.481 0 1 0-4.962 0v5.139a2.853 2.853 0 0 1-2.481 2.658h7.265" /></g></g></g></svg> : null}
				{perkName.toLowerCase() === "holidays" ? <svg viewBox="0 0 60 60"><g data-name="Group 2175" transform="translate(-376 -1720)"><rect data-name="Rectangle 80" width="60" height="60" rx="10" transform="translate(376 1720)" fill="#fff" /><g data-name="Group 2176" fill="none" stroke="#00e783" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path data-name="Path 10886" d="M420 1760.302h-8.876a13.458 13.458 0 0 0-8.875 3.7" /><path data-name="Line 129" d="m411.571 1760.302-4.734-12.327" /><path data-name="Line 130" d="m403.165 1737.773-.55-1.445" /><path data-name="Path 10887" d="M402.389 1737.774c-7.278 3-12 8.524-9.878 14.109l.548 1.446 3.469-1.432.837-2.018 1.938.873 13.871-5.727.838-2.017 1.936.872 3.467-1.431-.549-1.446c-2.126-5.588-9.199-6.235-16.477-3.229Z" /></g></g></svg> : null}
				{perkName.toLowerCase() === "equipment" ? <svg viewBox="0 0 60 60"><g data-name="Group 2177" transform="translate(-376 -1720)"><rect data-name="Rectangle 80" width="60" height="60" rx="10" transform="translate(376 1720)" fill="#fff" /><g data-name="Group 334" fill="none" stroke="#00e783" strokeWidth="2"><g data-name="Group 333"><path data-name="Path 10777" d="M419.581 1746.123v-8.828a1.358 1.358 0 0 0-1.414-1.293h-27.755a1.357 1.357 0 0 0-1.412 1.3v19.993a1.357 1.357 0 0 0 1.412 1.3h24.553" strokeLinecap="round" strokeLinejoin="round" /><path data-name="Line 10" strokeLinecap="round" d="M396.048 1763.993h16.486" /><path data-name="Line 11" d="M404.291 1758.438v5.417" /></g><path data-name="Path 10778" d="M422.92 1746.604h-6.678a1 1 0 0 0-1 1v15.4a1 1 0 0 0 1 1h6.678a1 1 0 0 0 1-1v-15.4a1 1 0 0 0-1-1Z" strokeLinecap="round" strokeLinejoin="round" /></g></g></svg> : null}
				{perkName.toLowerCase() === "flexibility" ? <svg viewBox="0 0 60 60"><g data-name="Group 2179" transform="translate(-376 -1720)"><rect data-name="Rectangle 80" width="60" height="60" rx="10" transform="translate(376 1720)" fill="#fff" /><g data-name="Group 2180" transform="translate(210.5 -5195.502)" fill="none" stroke="#00e783" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle data-name="Ellipse 230" cx="14" cy="14" r="14" transform="translate(181.5 6931.502)" /><path data-name="Line 131" d="m202.804 6952.805-5.942-5.94" /><circle data-name="Ellipse 231" cx="1.931" cy="1.931" r="1.931" transform="translate(193.569 6943.571)" /><path data-name="Line 132" d="M195.017 6938.806v4.827" /></g></g></svg> : null}
				{perkName.toLowerCase() === "progression" ? <svg viewBox="0 0 60 60"><g data-name="Group 2183" transform="translate(-376 -1720)"><rect data-name="Rectangle 80" width="60" height="60" rx="10" transform="translate(376 1720)" fill="#fff" /><g data-name="Group 2184" fill="none" stroke="#00e783" strokeWidth="2"><path data-name="Path 10888" d="M419.622 1745.663h-6.811a.359.359 0 0 0-.378.381v4.184h-6.432a.358.358 0 0 0-.378.38v4.185h-6.432a.358.358 0 0 0-.379.38v4.184h-6.432a.359.359 0 0 0-.378.38v3.881a.359.359 0 0 0 .378.38h27.243a.358.358 0 0 0 .378-.38v-17.65a.347.347 0 0 0-.379-.305Z" strokeMiterlimit="10" /><g data-name="Group 2181" strokeLinecap="round" strokeLinejoin="round"><path data-name="Path 10889" d="M414.444 1736c-5.174 6.239-10.12 11.793-21.989 11.793" /><path data-name="Path 10890" d="M410.718 1736h3.728v3.8" /></g></g></g></svg> : null}
				{perkName.toLowerCase() === "travel" ? <svg viewBox="0 0 60 60"><g data-name="Group 2185" transform="translate(-376 -1720)"><rect data-name="Rectangle 80" width="60" height="60" rx="10" transform="translate(376 1720)" fill="#fff" /><g data-name="Group 2187" transform="translate(-779.5 894.5)" fill="none" stroke="#00e783" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle data-name="Ellipse 232" cx="14" cy="14" r="14" transform="translate(1171.5 841.5)" /><path data-name="Path 10892" d="m1188.396 858.397-5.793-5.793 10.138-4.345Z" /><path data-name="Path 10893" d="m1188.397 858.396-5.793-5.793-4.345 10.138Z" /></g></g></svg> : null}
				{perkName.toLowerCase() === "dog-friendly" ? <svg viewBox="0 0 60 60"><g data-name="Group 2709" transform="translate(-376 -1720)"><rect data-name="Rectangle 80" width="60" height="60" rx="10" transform="translate(376 1720)" fill="#fff" /><g data-name="Group 2710"><g data-name="Group 2715"><path data-name="Path 11522" d="m415.108 1758.229-.083-.278-.167-.444-.111-.277-.305-.555-.416-.527-.555-.5-.638-.583-.527-.5-.5-.555-.416-.555-.389-.583-.416-.777-.25-.527-.305-.582-.389-.639-.444-.582-.305-.306-.305-.277-.416-.305-.5-.223-.638-.222-.638-.083h-.666l-.638.083-.916.333-.888.61-.583.583-.361.555-.361.638-.472.971-.444.861-.5.666-.61.777-1.8 1.664-.167.139-.416.583-.333.666-.194.833-.111.749-.028.833.083.555.25.777.361.721.389.5.5.5.666.444.777.361.583.138.888.028.86-.195.527-.25.222-.167.5-.277.472-.277.416-.25.444-.194.361-.167.416-.111.444-.027.527.083.388.084.638.305.777.388.638.416.583.333.583.25.555.111.472.027.388-.027.611-.167.777-.36.555-.388.583-.583.416-.555.361-.75.222-.722.083-.609v-.64l-.028-.36Z" fill="none" stroke="#00e783" strokeWidth="2" /></g><g data-name="Group 2716" transform="translate(407.384 1736.014)"><ellipse data-name="Ellipse 257" cx="4.271" cy="2.995" rx="4.271" ry="2.995" transform="rotate(-83.97 4.72 4.247)" fill="none" stroke="#00e783" strokeMiterlimit="3.998" strokeWidth="2" /></g><g data-name="Group 2717" transform="translate(397.872 1736)"><ellipse data-name="Ellipse 258" cx="2.995" cy="4.271" rx="2.995" ry="4.271" transform="rotate(-6.03 5.971 .315)" fill="none" stroke="#00e783" strokeMiterlimit="3.998" strokeWidth="2" /></g><g data-name="Group 2718" transform="translate(413.424 1743.303)"><ellipse data-name="Ellipse 259" cx="4.246" cy="2.997" rx="4.246" ry="2.997" transform="rotate(-77.47 5.167 4.145)" fill="none" stroke="#00e783" strokeWidth="2" /></g><g data-name="Group 2719" transform="translate(391 1743.302)"><ellipse data-name="Ellipse 260" cx="2.997" cy="4.246" rx="2.997" ry="4.246" transform="rotate(-12.58 5.932 .656)" fill="none" stroke="#00e783" strokeWidth="2" /></g></g></g></svg> : null}
				{perkName.toLowerCase() === "no timesheets" ? <svg viewBox="0 0 60 60"><g data-name="Group 2711" transform="translate(-376 -1720)"><rect data-name="Rectangle 80" width="60" height="60" rx="10" transform="translate(376 1720)" fill="#fff" /><g data-name="Group 2712" fill="none" stroke="#29ea89" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path data-name="Path 11525" d="M396.828 1737.929H392v26.069h28v-26.069h-4.828" /><path data-name="Rectangle 2485" d="M397 1736h4v5h-4z" /><path data-name="Rectangle 2486" d="M411 1736h4v5h-4z" /><path data-name="Line 167" d="M401 1738h10" /><path data-name="Line 168" d="M392 1745h28" /><g data-name="Group 2715"><path data-name="Line 169" d="m402 1750 9 9" /><path data-name="Line 170" d="m411 1750-9 9" /></g></g></g></svg> : null}
				{perkName.toLowerCase() === "refreshments" ? <svg viewBox="0 0 60 60"><g data-name="Group 2716" transform="translate(-376 -1720)"><rect data-name="Rectangle 80" width="60" height="60" rx="10" transform="translate(376 1720)" fill="#fff" /><g data-name="Group 2717" fill="none" stroke="#29ea89" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path data-name="Path 11526" d="M413.962 1737.186v20.916a4.2 4.2 0 0 1-4.183 4.184h-13.6a4.2 4.2 0 0 1-4.183-4.184v-20.916" /><path data-name="Line 171" d="M392 1737h21.968" /><path data-name="Line 172" d="M396 1741.285v15" /><path data-name="Path 11527" d="M413.962 1742.861a6.038 6.038 0 0 1 0 12.076" /></g></g></svg> : null}
			</div>
		</div>
	)
}

export default PerkIcon;