/** @format */

/**
 * External Dependencies
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import { getPartnerSlugFromQuery } from 'state/selectors';
import JetpackLogo from 'components/jetpack-logo';

export class JetpackConnectHeaderLogo extends PureComponent {
	static propTypes = {
		partnerSlug: PropTypes.string,
	};

	renderPartnerLogo() {
		const { translate, partnerSlugFromQuery } = this.props;
		const { partnerSlug = partnerSlugFromQuery } = this.props;
		const baseCobrandedAttributes = {
			className: 'jetpack-connect-header-logo__cobranded-logo',
		};

		switch ( partnerSlug ) {
			case 'dreamhost':
				return (
					<svg { ...baseCobrandedAttributes } width="634" viewBox="0 0 1268 150">
						<title>
							{ translate( 'Co-branded Jetpack and %(partnerName)s logo', {
								args: {
									partnerName: 'DreamHost',
								},
							} ) }
						</title>
						<g id="Page-1" fill="none" fillRule="evenodd">
							<g id="SVGs" transform="translate(-28 -10)">
								<g id="Jetpack-+-Dreamhost" transform="translate(28 10)">
									<g id="gridicons-plus-small" transform="translate(219 35.082353)">
										<path id="Rectangle-path" d="M0 0h81.8823529v81.8823529H0z" />
										<path
											id="Shape"
											fill="#324452"
											fillRule="nonzero"
											d="M61.4117647 37.5294118H44.3529412V20.4705882h-6.8235294v17.0588236H20.4705882v6.8235294h17.0588236v17.0588235h6.8235294V44.3529412h17.0588235"
										/>
									</g>
									<g id="dh_logo-blue" fillRule="nonzero" transform="translate(369 12)">
										<g id="Group">
											<g id="Shape" fill="#071C26">
												<path
													d="M.82379863 1.4416476H33.3638444c31.5102975 0 58.0778032 13.3867277 58.0778032 49.4279176 0 31.7162472-25.9496568 48.8100687-55.194508 48.8100687H.82379863V1.4416476zM22.4485126 79.4965675h11.3272311c20.1830664 0 35.2173913-7.6201373 35.2173913-29.8627002 0-19.3592678-15.4462242-28.215103-33.7757437-28.215103H22.4485126v58.0778032z"
													transform="translate(160.640732 16.475973)"
												/>
												<path
													d="M102.562929 32.1281465h20.800915v10.9153318h.20595c4.530892-8.2379863 10.297483-12.5629291 19.359268-12.5629291 2.265446 0 4.942792.2059497 7.002288.617849v18.9473684c-2.883295-.8237986-5.76659-1.4416476-8.855835-1.4416476-15.858124 0-17.711671 9.0617849-17.711671 22.6544622v28.215103h-20.800915V32.1281465z"
													transform="translate(160.640732 16.475973)"
												/>
												<path
													d="M220.572082 87.9405034c-6.590389 8.443936-17.50572 13.3867276-28.421052 13.3867276-20.800916 0-37.482838-13.7986269-37.482838-35.4233408 0-21.4187643 16.681922-35.423341 37.482838-35.423341 19.359267 0 31.510297 13.798627 31.510297 35.423341v6.590389h-48.192219c1.647597 7.8260869 7.620137 12.9748284 15.652173 12.9748284 6.796339 0 11.327232-3.5011442 14.828376-8.2379863l14.622425 10.7093821zm-17.71167-29.8627002c.20595-7.0022883-5.354691-12.7688787-12.768879-12.7688787-9.061785 0-14.210526 6.1784897-14.622425 12.7688787h27.391304z"
													transform="translate(160.640732 16.475973)"
												/>
												<path
													d="M276.17849 91.0297483h-.20595c-4.530892 7.208238-12.974828 10.0915327-21.418764 10.0915327-12.562929 0-23.89016-7.2082375-23.89016-20.8009149 0-23.2723112 28.215103-23.6842105 45.514874-23.6842105 0-7.4141876-6.17849-12.1510297-13.386728-12.1510297-6.796339 0-12.562929 3.0892448-16.887872 8.0320366l-11.121281-11.3272311c7.620137-7.208238 18.741418-10.9153319 29.65675-10.9153319 24.30206 0 30.686499 12.3569794 30.686499 34.805492v34.1876431H275.97254v-8.2379863h.20595zm-5.148742-21.006865c-6.384439 0-20.594965.617849-20.594965 9.6796339 0 4.9427917 5.354691 7.4141876 9.885583 7.4141876 8.237986 0 15.858124-4.3249428 15.858124-12.5629291v-4.5308924h-5.148742z"
													transform="translate(160.640732 16.475973)"
												/>
												<path
													d="M308.306636 32.1281465h19.977117v9.0617849h.20595c2.677345-5.3546911 9.473684-10.9153319 19.771167-10.9153319 9.473684 0 17.093821 3.9130435 20.800915 12.1510298 4.942792-8.6498856 11.327231-12.1510298 21.418764-12.1510298 18.32952 0 23.89016 12.9748284 23.89016 29.2448513v39.7482838h-21.006865V60.1372998c0-6.1784897-2.265446-11.5331808-9.061785-11.5331808-9.473684 0-12.562929 6.7963387-12.562929 15.0343249v35.6292907h-20.800915v-35.423341c0-4.9427918.20595-15.034325-9.267734-15.034325-10.915332 0-12.56293 8.443936-12.56293 17.0938216v33.569794h-20.800915V32.1281465z"
													transform="translate(160.640732 16.475973)"
												/>
												<path
													d="M427.345538 1.4416476h21.624714v36.4530892h42.01373V1.4416476h21.624714v98.2379863h-21.624714v-42.631579h-42.01373v42.4256293h-21.624714z"
													transform="translate(160.640732 16.475973)"
												/>
												<path
													d="M559.359268 30.4805492c20.800915 0 37.482837 13.798627 37.482837 35.423341 0 21.4187643-16.681922 35.4233408-37.482837 35.4233408-20.800916 0-37.482838-13.7986269-37.482838-35.4233408 0-21.624714 16.681922-35.423341 37.482838-35.423341zm0 52.3112128c10.297483 0 16.681922-7.0022883 16.681922-17.0938215S569.8627 48.604119 559.359268 48.604119c-10.297483 0-16.681922 7.0022883-16.681922 17.0938215 0 10.2974828 6.384439 17.0938215 16.681922 17.0938215z"
													transform="translate(160.640732 16.475973)"
												/>
												<path
													d="M644.416476 51.8993135c-3.089245-3.7070938-7.002288-5.7665904-12.15103-5.7665904-3.501144 0-7.620137 1.4416476-7.620137 5.5606407 0 9.8855836 35.011442 1.4416476 35.011442 27.1853547 0 17.0938215-16.681923 22.2425625-31.098399 22.2425625-9.473684 0-19.771167-2.2654458-26.567505-9.0617844l12.562929-14.0045767c3.913043 4.7368421 8.443936 7.4141877 14.622425 7.4141877 4.736842 0 9.473685-1.235698 9.473685-4.9427918 0-10.9153318-35.011442-1.6475973-35.011442-27.3913044 0-15.8581235 14.210526-22.6544622 28.215103-22.6544622 8.855835 0 18.741419 2.2654462 24.919908 8.8558352l-12.356979 12.5629291z"
													transform="translate(160.640732 16.475973)"
												/>
												<path
													d="M715.675057 48.8100686h-18.329519v22.4485126c0 7.208238.823798 12.5629291 9.885583 12.5629291 2.265447 0 6.590389-.2059497 8.443936-1.8535469v17.2997712c-4.530892 1.6475974-9.679634 2.0594964-14.622425 2.0594964-13.798627 0-24.50801-5.7665903-24.50801-20.3890159V48.8100686h-13.386727V32.1281465h13.386727V12.1510297h20.800916v19.9771168h18.329519v16.6819221z"
													transform="translate(160.640732 16.475973)"
												/>
											</g>
											<g id="mark_1_">
												<path
													id="Shape"
													fill="#071C26"
													d="M124.187643 93.5011442c-10.091533 5.5606407-21.624714 8.6498858-33.9816933 8.4439358-36.6590389-.823799-65.4919909-30.2745995-64.8741419-66.1098397.2059496-12.1510298 3.9130435-23.4782609 10.0915332-32.95194511C15.8581236 13.798627 2.47139588 34.187643 2.05949657 57.8718535 1.23569794 93.5011442 30.2745995 123.157895 66.7276888 123.981693c24.3020595.4119 45.5148742-11.73913 57.4599542-30.4805488"
												/>
												<path
													id="Shape"
													fill="#0073EC"
													d="M70.6407323 0c-9.8855836 0-19.1533181 2.47139588-27.3913044 7.00228833-5.1487414 8.44393597-8.0320366 18.12356977-8.4439359 28.00915327-.617849 31.0983982 24.7139588 56.8421053 56.2242563 57.4599543 9.4736837 0 20.1830667-2.2654462 28.4210527-6.7963387 4.942792-8.4439359 7.826087-18.3295194 7.826087-28.8329519C127.688787 25.5377574 102.15103 0 70.6407323 0z"
												/>
											</g>
										</g>
										<path
											id="Shape"
											fill="#071C26"
											d="M883.524027 18.3295195c0-1.0297483.20595-2.0594966.617849-3.0892449.4119-1.0297483 1.029749-1.6475973 1.647598-2.4713959.617849-.617849 1.441647-1.2356979 2.471396-1.6475972.823798-.4118993 1.853546-.617849 2.883295-.617849 1.029748 0 2.059496.2059497 2.883295.617849.823799.4118993 1.647597.8237986 2.471396 1.6475972.617849.617849 1.235698 1.4416476 1.647597 2.4713959s.617849 1.8535469.617849 3.0892449c0 1.0297482-.20595 2.0594965-.617849 3.0892448-.411899.8237986-1.029748 1.6475973-1.647597 2.4713959-.617849.617849-1.441648 1.2356979-2.471396 1.6475972-.823799.4118994-1.853547.617849-2.883295.617849-1.029749 0-2.059497-.2059496-2.883295-.617849-.823799-.4118993-1.647598-.8237986-2.471396-1.6475972-.617849-.617849-1.235698-1.4416476-1.647598-2.4713959-.411899-1.0297483-.617849-2.0594966-.617849-3.0892448zm1.441648 0c0 .8237986.20595 1.8535469.411899 2.4713958.4119.8237987.823799 1.4416476 1.235698 2.0594966.617849.617849 1.235698 1.0297483 2.059497 1.4416476.823799.4118993 1.647597.4118993 2.471396.4118993.823798 0 1.647597-.2059496 2.471396-.4118993.823798-.4118993 1.441647-.8237986 2.059496-1.4416476.617849-.617849 1.029748-1.2356979 1.235698-2.0594966.411899-.8237986.411899-1.6475972.411899-2.4713958 0-.8237987-.205949-1.853547-.411899-2.4713959-.411899-.8237987-.823798-1.4416476-1.235698-2.0594966-.617849-.617849-1.235698-1.0297483-2.059496-1.4416476-.823799-.4118993-1.647598-.4118993-2.471396-.4118993-.823799 0-1.647597.2059496-2.471396.4118993-.823799.4118993-1.441648.8237986-2.059497 1.4416476-.617849.617849-1.029748 1.2356979-1.235698 2.0594966-.411899.6178489-.411899 1.4416476-.411899 2.4713959zm3.295195-4.5308925h3.295194c2.059497 0 3.089245.8237986 3.089245 2.4713959 0 .8237986-.20595 1.4416476-.617849 1.8535469-.411899.4118993-1.029748.617849-1.647597.617849l2.471396 3.9130434h-1.441648l-2.471396-3.9130434h-1.441647v3.9130434h-1.441648l.20595-8.8558352zm1.235698 3.9130435h2.265446c.205949 0 .617849 0 .823798-.2059497.20595 0 .4119-.2059496.617849-.4118993.20595-.2059496.20595-.4118993.20595-.8237986 0-.2059497 0-.617849-.20595-.8237986-.205949-.2059497-.205949-.4118994-.411899-.4118994-.20595 0-.411899-.2059496-.617849-.2059496h-2.471396l-.205949 2.8832952z"
										/>
									</g>
									<g id="Jetpack-Logomark" fillRule="nonzero">
										<circle
											id="Oval"
											cx="74.8571429"
											cy="74.8571429"
											r="74.8571429"
											fill="#00BE28"
										/>
										<path
											id="Shape"
											fill="#FFF"
											d="M78.5714286 62.2857143v72.5714287L116 62.2857143z"
										/>
										<path
											id="Shape"
											fill="#FFF"
											d="M71 87.2857143V14.8571429L33.7142857 87.2857143z"
										/>
									</g>
								</g>
							</g>
						</g>
					</svg>
				);

			case 'pressable':
				return (
					<svg { ...baseCobrandedAttributes } width="662.5" viewBox="0 0 1325 170">
						<title>
							{ translate( 'Co-branded Jetpack and %(partnerName)s logo', {
								args: {
									partnerName: 'Pressable',
								},
							} ) }
						</title>
						<g id="2x-copy" fill="none" fillRule="evenodd">
							<g id="Jetpack-+-Pressable" transform="translate(88 10)">
								<g id="gridicons-plus-small" transform="translate(222 34)">
									<path id="Rectangle-path" d="M0 0h81.5384615v81.5384615H0z" />
									<path
										id="Shape"
										fill="#324452"
										fillRule="nonzero"
										d="M61.1538462 37.3717949H44.1666667V20.3846154h-6.7948718v16.9871795H20.3846154v6.7948718h16.9871795v16.9871795h6.7948718V44.1666667h16.9871795"
									/>
								</g>
								<g id="Jetpack-Logomark" fillRule="nonzero">
									<circle id="Oval" cx="75.2794139" cy="75.2794139" r="75.2794139" fill="#00BE28" />
									<path
										id="Shape"
										fill="#FFF"
										d="M79.014652 62.6370696v72.9808054l37.639707-72.9808054z"
									/>
									<path
										id="Shape"
										fill="#FFF"
										d="M71.4005128 87.7780952V14.9409524L33.9044689 87.7780952z"
									/>
								</g>
								<g id="pressable-logo-vector-01" fillRule="nonzero" transform="translate(372 12)">
									<g id="Group">
										<g id="Shape">
											<path
												fill="#ACB8D5"
												d="M79.1186441 63.1630508c-41.2735594 0-75.2945763-15.6918644-78.85491529-31.5155932H0v27.6915255h.1318644c1.8461017 16.219322 36.5264407 31.5155932 78.9867797 31.5155932 42.4603389 0 77.1406779-15.2962712 78.9867799-31.5155932h.131864V31.6474576h-.263729c-3.560339 15.8237288-37.581356 31.5155932-78.8549149 31.5155932z"
												transform="translate(23.735593)"
											/>
											<path
												fill="#3E63A6"
												d="M79.1186441 0C35.4715254 0 0 12.2633898 0 28.8783051c0 .9230508.1318644 1.8461017.26372881 2.7691525C3.8240678 47.4711864 37.8450847 63.1630508 79.1186441 63.1630508c41.2735589 0 75.2945759-15.6918644 78.8549149-31.5155932.263729-.9230508.263729-1.8461017.263729-2.7691525C158.237288 12.2633898 122.765763 0 79.1186441 0z"
												transform="translate(23.735593)"
											/>
										</g>
										<path
											id="Shape"
											fill="#3E63A6"
											d="M0 82.6789831c0 16.4830508 29.9332203 45.7569489 102.854237 45.7569489 72.921017 0 102.590509-29.4057625 104.43661-44.8338981 1.714238-15.4281356-18.724745-26.3728814-18.724745-26.3728814s-2.637288 42.5922034-85.711865 42.5922034c-79.1186438 0-86.3711862-42.5922034-86.3711862-42.5922034S0 66.1959322 0 82.6789831z"
										/>
									</g>
									<g id="Group" fill="#3E63A6" transform="translate(270.322034 11.867797)">
										<path
											id="Shape"
											d="M.92305085 8.04372881c0-2.90101695 1.45050847-3.29661017 3.29661017-3.29661017H32.0430508c23.4718645 0 31.12 6.46135596 31.12 27.16406776v2.241695c0 21.2301694-8.0437288 27.1640678-31.12 27.1640678H12.6589831v34.6803389c0 1.9779661-1.1867797 3.2966102-3.16474581 3.2966102-2.76915254 0-8.57118644-.7911864-8.57118644-2.3735593V8.04372881zM12.5271186 15.0325424v35.7352542h19.3840678c15.56 0 19.2522034-3.2966102 19.2522034-16.7467797V31.779322c0-13.5820339-3.6922034-16.7467796-19.2522034-16.7467796H12.5271186z"
										/>
										<path
											id="Shape"
											d="M100.348814 37.4494915c-7.7800004 0-15.0325428 2.901017-15.0325428 3.8240678v54.7237288c0 2.3735594-1.4505085 3.1647458-3.1647458 3.1647458-2.3735593 0-7.6481356-.5274576-7.6481356-2.1098305V36.7901695c0-4.3515254 10.5491526-9.0986441 25.1861017-9.0986441 3.1647455 0 11.8677965-.1318644 11.8677965 3.4284746 0 5.1427119-1.18678 7.2525424-2.637288 7.2525424-2.637288-.3955932-4.878983-.9230509-8.571186-.9230509z"
										/>
										<path
											id="Shape"
											d="M147.292542 99.1620339c-21.230169 0-28.350847-8.439322-28.350847-31.3837288V51.1633898c0-16.7467796 8.571186-23.34 25.317966-23.34h1.714237c17.801695 0 24.52678 6.7250848 24.52678 19.5159322v3.1647458c0 15.56-6.59322 20.7027119-41.009831 20.7027119 0 13.4501695 5.010848 18.8566101 20.04339 18.8566101 6.988814 0 14.373221-1.9779661 18.197288-1.9779661 1.318644 0 2.241695.7911865 2.241695 6.461356 0 1.4505084-.527457 1.9779661-1.977966 2.3735593-6.065762 1.4505085-14.505085 2.2416949-20.702712 2.2416949zm12.658983-51.9545763c0-7.2525423-4.483389-10.9447457-15.032542-10.9447457-9.098644 0-15.428136 2.7691525-15.428136 14.7688135v11.7359322c26.372882 0 30.328814-2.2416949 30.328814-12.9227118v-2.6372882h.131864z"
										/>
										<path
											id="Shape"
											d="M202.016271 89.5359322c10.021695 0 15.955593-2.2416949 15.955593-8.8349153 0-15.6918644-34.152881-12.1315254-34.152881-35.7352542 0-14.5050847 11.604068-17.1423729 23.471864-17.1423729 8.834916 0 14.109492.3955933 18.065424 1.0549153 1.846102.2637288 2.241695 1.3186441 2.241695 2.7691525 0 4.4833899-1.450508 6.9888136-2.769152 6.9888136-4.087797-.3955932-8.834916-1.1867797-15.032543-1.1867797-9.626102 0-15.428135 1.9779661-15.428135 7.9118644 0 13.4501695 34.284745 10.5491526 34.284745 35.339661 0 14.900678-10.812881 18.5928814-24.922373 18.5928814-5.802033 0-13.845762-.3955932-20.307118-1.7142373-1.582373-.5274576-1.846102-1.0549152-1.846102-2.1098305 0-5.9338983 2.241695-7.120678 3.164746-7.120678h.527458c4.747118.5274577 10.153559 1.1867797 16.746779 1.1867797z"
										/>
										<path
											id="Shape"
											d="M260.564068 89.5359322c10.021695 0 15.955593-2.2416949 15.955593-8.8349153 0-15.6918644-34.152881-12.1315254-34.152881-35.7352542 0-14.5050847 11.604067-17.1423729 23.471864-17.1423729 8.834915 0 14.109492.3955933 18.065424 1.0549153 1.846101.2637288 2.241695 1.3186441 2.241695 2.7691525 0 4.4833899-1.450509 6.9888136-2.769153 6.9888136-4.087796-.3955932-8.834915-1.1867797-15.032542-1.1867797-9.626102 0-15.428136 1.9779661-15.428136 7.9118644 0 13.4501695 34.284746 10.5491526 34.284746 35.339661 0 14.900678-10.812881 18.5928814-24.922373 18.5928814-5.802034 0-13.845763-.3955932-20.307119-1.7142373-1.582372-.5274576-1.846101-1.0549152-1.846101-2.1098305 0-5.9338983 2.241695-7.120678 3.164746-7.120678h.527457c4.878983.5274577 10.153559 1.1867797 16.74678 1.1867797z"
										/>
										<path
											id="Shape"
											d="M347.858305 92.0413559c0 2.901017-12.131525 7.120678-25.44983 7.120678-17.537967 0-25.054238-6.3294915-25.054238-21.3620339 0-13.5820339 5.274577-19.9115254 21.23017-19.9115254 6.725085 0 14.37322 1.5823729 18.724746 3.0328813v-11.340339c0-9.098644-4.087797-12.3952542-16.74678-12.3952542-5.933898 0-12.658983.9230509-16.74678 1.7142373-2.373559 0-2.769152-5.5383051-2.769152-6.4613559 0-1.5823729.395593-2.1098305 1.186779-2.3735594 2.637288-.9230508 11.604068-2.2416949 21.098305-2.2416949 16.483051 0 24.658644 4.3515255 24.658644 21.4938983v42.7240678h-.131864zm-10.549152-22.8125423c-.923051-.9230509-10.417289-3.1647458-16.351187-3.1647458-8.96678 0-12.922712 2.3735593-12.922712 12.3952542 0 9.2305085 4.087797 12.2633899 14.636949 12.2633899 5.274577 0 13.713899-1.5823729 14.768814-2.901017V69.2288136h-.131864z"
										/>
										<path
											id="Shape"
											d="M372.385085 33.7572881c5.274576-3.2966101 12.527118-5.9338983 20.438983-5.9338983 16.746779 0 19.252203 11.6040678 19.252203 23.7355933v24.1311864c0 12.7908474-3.692203 23.34-24.790508 23.34-6.593221 0-16.483051-.3955932-23.34-3.560339-1.846102-.7911864-2.505424-1.9779661-2.505424-4.3515254V2.76915254c0-1.58237288 5.274576-2.1098305 8.043729-2.1098305 1.977966 0 3.032881 1.31864406 3.032881 3.69220338V33.7572881h-.131864zm0 53.9325424c0 .7911864 7.516271 2.2416949 14.768813 2.2416949 13.45017 0 14.109492-7.3844068 14.109492-14.2413559V51.9545763c0-6.8569492-.659322-14.3732204-10.944746-14.3732204-8.307458 0-17.537966 4.0877966-17.801695 6.0657627v44.0427119h-.131864z"
										/>
										<path
											id="Shape"
											d="M449.789492 94.5467797c0 4.0877966-8.307458 4.4833898-11.340339 4.4833898-9.757967 0-15.032543-4.8789831-15.032543-17.5379661V2.63728814c0-1.7142373 5.802034-1.9779661 7.911865-1.9779661 1.846101 0 3.164745.92305084 3.164745 3.03288135V79.9098305c0 5.6701695 1.18678 9.0986441 6.725085 9.0986441 1.846102 0 3.560339-.3955932 6.065763-.7911865 1.450508-.1318644 2.505424 4.4833899 2.505424 6.3294916z"
										/>
										<path
											id="Shape"
											d="M483.414915 99.1620339c-21.230169 0-28.350847-8.439322-28.350847-31.3837288V51.1633898c0-16.7467796 8.571186-23.34 25.317966-23.34h1.714237c17.801695 0 24.52678 6.7250848 24.52678 19.5159322v3.1647458c0 15.56-6.59322 20.7027119-41.009831 20.7027119 0 13.4501695 5.010848 18.8566101 20.04339 18.8566101 6.988814 0 14.373221-1.9779661 18.197288-1.9779661 1.318644 0 2.241695.7911865 2.241695 6.461356 0 1.4505084-.527457 1.9779661-1.977966 2.3735593-6.065763 1.4505085-14.505085 2.2416949-20.702712 2.2416949zm12.658983-51.9545763c0-7.2525423-4.48339-10.9447457-15.032542-10.9447457-9.098644 0-15.428136 2.7691525-15.428136 14.7688135v11.7359322c26.372882 0 30.328814-2.2416949 30.328814-12.9227118v-2.6372882h.131864z"
										/>
									</g>
								</g>
							</g>
						</g>
					</svg>
				);

			case 'milesweb':
				return (
					<img
						{ ...baseCobrandedAttributes }
						width="662.5px"
						height="85px"
						src="/calypso/images/jetpack/jetpack-milesweb-connection.png"
						alt={ translate( 'Co-branded Jetpack and %(partnerName)s logo', {
							args: {
								partnerName: 'MilesWeb',
							},
						} ) }
					/>
				);

			case 'bluehost':
				return (
					<svg { ...baseCobrandedAttributes } width="662.5" viewBox="0 0 1325 170">
						<title>
							{ translate( 'Co-branded Jetpack and %(partnerName)s logo', {
								args: {
									partnerName: 'Bluehost',
								},
							} ) }
						</title>
						<g id="SVGs" fill="none" fillRule="evenodd">
							<g id="Jetpack-+-Bluehost" transform="translate(97 10)">
								<g id="gridicons-plus-small" transform="translate(229 34)">
									<path id="Rectangle-path" d="M0 0h81.5384615v81.5384615H0z" />
									<path
										id="Shape"
										fill="#324452"
										fillRule="nonzero"
										d="M61.1538462 37.3717949H44.1666667V20.3846154h-6.7948718v16.9871795H20.3846154v6.7948718h16.9871795v16.9871795h6.7948718V44.1666667h16.9871795"
									/>
								</g>
								<g id="bluehost-logo" transform="translate(389 15)">
									<path
										id="Shape"
										fill="#3575D3"
										fillRule="nonzero"
										d="M0 33.7808824h33.2360294V0H0v33.7808824zm43.0433824 0h33.2360294V0H43.0433824v33.7808824zm43.5882352 0h33.2360294V0H86.6316176v33.7808824zM0 77.3691176h33.2360294V43.5882353H0v33.7808823zm43.0433824 0h33.2360294V43.5882353H43.0433824v33.7808823zm43.5882352 0h33.2360294V43.5882353H86.6316176v33.7808823zM0 120.957353h33.2360294V87.1764706H0v33.7808824zm43.0433824 0h33.2360294V87.1764706H43.0433824v33.7808824zm43.5882352 0h33.2360294V87.1764706H86.6316176v33.7808824z"
									/>
									<g id="Group" transform="translate(179.801471)">
										<path
											id="Shape"
											fill="#3575D3"
											fillRule="nonzero"
											d="M8.71764706 110.060294c7.08308824 3.813971 14.16617644 4.903677 20.15955884 4.903677 15.8007353 0 30.5117647-9.2625 30.5117647-32.6911769 0-20.7044117-11.4419118-32.1463235-26.1529412-32.1463235-9.8073529 0-18.525 5.4485294-24.51838234 11.9867647v47.9470587zm0-57.7544116c6.53823534-5.4485295 15.25588234-9.807353 25.60808824-9.807353 16.8904412 0 33.7808823 11.9867647 33.7808823 40.3191177 0 29.4220589-18.525 40.3191179-38.6845588 40.3191179-11.4419117 0-21.79411762-3.269118-29.4220588-8.172794V0h8.71764706v52.3058824z"
										/>
										<path
											id="Shape"
											fill="#3575D3"
											fillRule="nonzero"
											d="M82.8176471 121.502206h8.1727941V0h-8.1727941z"
										/>
										<g id="Shape">
											<path
												d="M117.143382 12.5316176c-15.255882-.5448529-27.7874996 10.8970589-28.8772055 26.6977942h53.3955885c1.089706-13.6213236-8.172794-26.1529412-24.518383-26.6977942z"
												transform="translate(108.970588 38.139706)"
											/>
											<path
												fill="#3575D3"
												fillRule="nonzero"
												d="M55.0301471 59.3889706c-7.0830883 10.3522059-16.3455883 16.8904412-26.6977942 16.8904412-9.2625 0-17.980147-4.9036765-17.980147-23.4286765V5.44852941H1.63455882V53.9404412c0 23.4286764 11.44191178 30.5117647 23.97352938 30.5117647 11.9867647 0 22.3389706-6.5382353 29.4220589-16.3455883V83.3625h8.717647V5.44852941h-8.717647V59.3889706z"
												transform="translate(108.970588 38.139706)"
											/>
											<path
												fill="#3575D3"
												fillRule="nonzero"
												d="M118.233088 4.35882353C99.1632353 3.81397059 81.1830882 16.8904412 80.0933824 41.4088235 79.0036765 63.2029412 92.625 83.9073529 118.233088 84.4522059c11.441912.5448529 20.704412-3.2691177 27.242647-6.5382353l-2.724264-7.0830882c-6.538236 3.8139705-15.255883 6.5382352-23.97353 5.9933823C98.6183824 76.2794118 88.2661765 61.0235294 88.2661765 46.3125h62.1132355c2.724264-24.5183824-11.441912-41.40882353-32.146324-41.95367647zM88.8110294 39.2294118C89.9007353 23.4286765 101.8875 11.9867647 117.688235 12.5316176c15.800736.544853 25.063236 13.6213236 25.063236 26.6977942H88.8110294z"
												transform="translate(108.970588 38.139706)"
											/>
										</g>
										<path
											id="Shape"
											fill="#3575D3"
											fillRule="nonzero"
											d="M287.1375 58.8441176c6.538235-9.8073529 16.345588-16.3455882 28.332353-16.3455882 15.255882 0 24.518382 11.9867647 24.518382 28.8772059v49.5816177h-8.717647V73.0102941c0-16.8904412-8.717647-22.8838235-17.980147-22.8838235-11.441912 0-21.249265 8.717647-26.697794 17.4352941v53.3955883H277.875V0h8.717647v58.8441176h.544853z"
										/>
										<path
											id="Shape"
											fill="#3575D3"
											fillRule="nonzero"
											d="M362.327206 82.2727941c0 17.4352941 9.807353 32.1463239 28.332353 32.1463239 17.980147 0 28.332353-15.2558827 28.332353-32.1463239 0-17.4352941-10.352206-32.1463235-28.332353-32.1463235-17.980147.5448529-28.332353 15.2558823-28.332353 32.1463235zm65.927206 0c0 25.6080879-17.435294 40.3191179-37.05 40.3191179-22.338971 0-37.05-17.980147-37.05-40.3191179 0-23.4286765 16.345588-39.7742647 37.05-39.7742647 19.614706 0 37.05 14.7110294 37.05 39.7742647z"
										/>
										<path
											id="Shape"
											fill="#3575D3"
											fillRule="nonzero"
											d="M447.869118 107.880882c6.538235 4.358824 13.621323 6.538236 20.704411 6.538236 8.172795 0 17.980147-3.269118 17.980147-11.441912 0-7.0830884-7.627941-12.5316178-19.069852-16.8904413-13.076471-5.4485294-24.518383-10.3522059-24.518383-22.3389706 0-12.5316176 11.441912-20.7044117 26.697794-20.7044117 8.172794 0 15.255883 2.1794117 21.249265 5.4485294L487.643382 55.575c-4.903676-2.7242647-10.897058-4.3588235-17.980147-4.3588235-12.531617 0-18.525 6.5382353-18.525 13.0764706 0 8.1727941 9.2625 11.4419117 21.249265 16.3455882 18.525 7.0830882 22.338971 15.8007353 22.338971 22.8838237 0 11.986765-11.441912 19.614706-26.152942 19.614706-8.717647 0-16.890441-2.724265-24.518382-7.083089l3.813971-8.172794z"
										/>
										<path
											id="Shape"
											fill="#3575D3"
											fillRule="nonzero"
											d="M550.846324 43.5882353v7.0830882h-25.608089v42.4985294c0 12.5316181 5.44853 20.7044121 16.345589 21.2492651 4.903676 0 9.807352-1.089706 14.711029-3.269118l2.724265 7.627941c-4.903677 2.179412-10.897059 3.269118-16.890442 3.269118-13.621323 0-25.063235-8.717647-25.063235-28.3323531V51.2161765h-13.621323v-7.6279412h13.621323V17.4352941h8.717647v26.1529412h25.063236z"
										/>
									</g>
								</g>
								<g id="Jetpack-Logomark" fillRule="nonzero">
									<circle id="Oval" cx="75.2794139" cy="75.2794139" r="75.2794139" fill="#00BE28" />
									<path
										id="Shape"
										fill="#FFF"
										d="M79.014652 62.6370696v72.9808054l37.639707-72.9808054z"
									/>
									<path
										id="Shape"
										fill="#FFF"
										d="M71.4005128 87.7780952V14.9409524L33.9044689 87.7780952z"
									/>
								</g>
							</g>
						</g>
					</svg>
				);

			case 'inmotion':
				return (
					<svg { ...baseCobrandedAttributes } width="468" viewBox="0 0 936 151">
						<title>
							{ translate( 'Co-branded Jetpack and %(partnerName)s logo', {
								args: {
									partnerName: 'InMotion',
								},
							} ) }
						</title>
						<g id="Page-1" fill="none" fillRule="evenodd">
							<g id="SVGs" transform="translate(-195 -10)">
								<g id="Jetpack-+-InMotion" transform="translate(195 10)">
									<g id="Group-2">
										<g id="gridicons-plus-small" transform="translate(215 34)">
											<path id="Rectangle-path" d="M0 0h81.5384615v81.5384615H0z" />
											<path
												id="Shape"
												fill="#324452"
												fillRule="nonzero"
												d="M61.1538462 37.3717949H44.1666667V20.3846154h-6.7948718v16.9871795H20.3846154v6.7948718h16.9871795v16.9871795h6.7948718V44.1666667h16.9871795"
											/>
										</g>
										<g id="imh_logo" fillRule="nonzero" transform="translate(360)">
											<path
												id="Shape"
												fill="#C42227"
												d="M17.6 23.0666667L133.733333 23l-2.466666 12L17.6 23.0666667zM0 24.7333333L130.066667 39l-2.333334 10.5333333L0 24.7333333z"
											/>
											<path
												id="Shape"
												fill="#000"
												d="M416.133333 6L412.4 21.5333333H425L421.866667 34.6H409.2l-1.866667 7.1333333c-.4 1.8-.733333 3.1333334-.933333 4.1333334-.333333 2.1333333-1.4 4.6666666 2.2 6.4666666 1.8.8666667 6.933333.7333334 10.8.2666667l-6.8 13.3333333-5.8.2h-5.333333c-5.6 0-9.6-1.3333333-11.866667-3.6-1.8-1.7333333-2.666667-4.4666666-2.666667-8.2 0-2.1333333.4-5 1.133334-8.6666666L390.933333 34.6h-7.266666l3.066666-13.0666667H394.2L396.533333 11.4l19.6-5.4zm-62.266666 14.4c5 0 8.333333.3333333 11.466666 1.0666667 3.133334.7333333 5.6 1.8666666 7.533334 3.4 3.066666 2.6 5.333333 6.4 5.333333 11.8666666 0 4.5333334-1.066667 9-3.133333 13.3333334-3.266667 7-8.2 10.8666666-14.066667 13.6666666-4.6 2.2-13.266667 3.7333334-19.266667 3.5333334-5.933333-.2-8.533333-.5333334-11.133333-1.1333334-2.6-.6-5.333333-1.8666666-7.2-3.2666666-3.4-2.4666667-5.6-5.9333334-5.6-11.3333334 0-4.8666666.666667-8.6666666 2.733333-13.5333333C322.4 33.6 325.866667 29.4666667 329.2 27c3-2.2666667 6.4-3.8666667 10.266667-4.8666667C343.333333 21.0666667 347.8 20.4 353.866667 20.4zM350.8 32.7333333c-4.2 0-7.933333 2-10.2 5.1333334-1.866667 2.6666666-3.2 6.0666666-3.2 9.4666666 0 4.8666667 2.666667 7.3333334 7.933333 7.3333334 4.133334 0 7.866667-2.0666667 10.133334-5.2 1.866666-2.6 3.266666-6.2 3.266666-9.6 0-4.8-2.666666-7.0666667-7.933333-7.1333334zm-186.4-11.2l-10.8 44.3333334h-18.4L146 21.5333333h18.4zM161.266667.66666667C163.8.8 165.533333 1.6 166.8 3.06666667c1.266667 1.46666666 1.4 3.4 1.333333 5.26666666C167.666667 11.5333333 166.533333 13.4666667 164 15.4c-2.866667 2-5.2 2.7333333-9.133333 2.4-2.466667-.2-4.6-1.3333333-5.6-2.6-1.066667-1.2666667-1.533334-3.2-1.333334-5.2.2-2 1.266667-4.46666667 3.8-6.53333333C154.266667 1.4 158.4.53333333 161.266667.66666667zm28.666666 20.86666663L189.066667 25.4c3.866666-2.4666667 6.466666-3.5333333 9.2-4.2 3-.8 5.333333-.9333333 9.066666-.8 4.533334.1333333 7.6 1.1333333 10.533334 3.0666667 2.6 1.9333333 4.2 4.2666666 4.466666 7.9333333.066667 2.5333333-.8 6.3333333-.8 6.3333333L214.733333 66h-18.066666l5.4-22.2666667c.533333-2.5333333.866666-3.8666666.933333-5 .333333-3.6-2.4-4.5333333-6.266667-4.5333333-3.266666 0-7.2 1.0666667-9.133333 3.1333333C186 39 185.066667 41.6 183.866667 46.4L179.133333 66h-18.2l10.733334-44.4h18.266666v-.0666667zm177.2 54.4l-5.266666 24.7333337c2.2-1.866667 4.133333-3.2000003 5.866666-3.9333337 1.733334-.7333333 3.6-1.0666666 5.733334-1.0666666 3.066666 0 5.466666.8 7.266666 2.3333333 1.8 1.5333333 2.666667 3.666667 2.666667 6.4 0 1.2-.2 2.866667-.666667 5l-4.6 21.866667h-5.8l4.6-21.733334c.266667-1.266666.4-2.333333.4-3.266666 0-1.733334-.533333-3.133334-1.666666-4.133334-1.066667-1-2.6-1.466666-4.533334-1.466666-1.466666 0-3 .333333-4.533333.933333-1.533333.6-2.8 1.466667-3.8 2.466667-1.4 1.4-2.333333 3.266666-2.866667 5.6l-4.6 21.6h-5.8L361.266667 76h5.866666v-.0666667zM408.8 95.6666667c4.133333 0 7.4 1.1333333 9.733333 3.4C420.866667 101.333333 422 104.533333 422 108.666667c0 2.733333-.466667 5.533333-1.4 8.266666-.933333 2.8-2.2 5.2-3.866667 7.333334-4 5.133333-9.2 7.666666-15.533333 7.666666-4.133333 0-7.4-1.133333-9.733333-3.4C389.133333 126.266667 388 123.066667 388 119c0-2.8.466667-5.533333 1.4-8.333333s2.2-5.2 3.866667-7.333334C397.2 98.3333333 402.4 95.8 408.8 95.6666667zm-1.066667 5.0666663c-4.6 0-8.2 2.466667-10.8 7.4C395.266667 111.266667 394.4 114.6 394.4 118c0 2.933333.733333 5.2 2.2 6.8 1.333333 1.466667 3.266667 2.2 5.6 2.2 4.6 0 8.2-2.466667 10.8-7.4 1.666667-3.133333 2.533333-6.466667 2.533333-9.8 0-2.866667-.666666-5.066667-2-6.666667-1.333333-1.6-3.266666-2.4-5.8-2.4zM452.8 101.8l-5.733333 3.266667c-.066667-1.6-.533334-2.733334-1.4-3.466667-.866667-.733333-2.133334-1.066667-3.866667-1.066667-1.933333 0-3.6.533334-4.933333 1.666667-1.333334 1.133333-2 2.466667-2 4.066667 0 1.066666.466666 1.866666 1.333333 2.466666.866667.6 2.666667 1.266667 5.266667 1.933334 3.066666.8 5.133333 1.8 6.333333 2.933333 1.133333 1.133333 1.733333 2.8 1.733333 5.066667 0 3.133333-1.333333 6.066666-4.066666 8.733333-3.2 3.133333-7.266667 4.666667-12.2 4.666667-3.266667 0-5.733334-.733334-7.466667-2.2-1.733333-1.466667-2.866667-3.866667-3.466667-7.2l6-2.333334c.266667 4.6 2.4 6.933334 6.533334 6.933334 2.666666 0 4.866666-.866667 6.533333-2.666667 1.333333-1.4 1.933333-2.933333 1.933333-4.666667 0-1.066666-.466666-1.866666-1.333333-2.466666-.866667-.6-2.666667-1.266667-5.333333-2.066667-2.2-.6-3.733334-1.2-4.666667-1.733333-.933333-.533334-1.666667-1.266667-2.266667-2.2-.733333-1.133334-1.066666-2.4-1.066666-3.866667 0-1.333333.333333-2.733333 1.066666-4.2.733334-1.466667 1.666667-2.8 2.8-3.9333333 2.6-2.4666667 5.933334-3.7333334 10.133334-3.7333334 2.8 0 5 .4666667 6.6 1.4C450.8 98.0666667 452 99.6 452.8 101.8zm17.666667-16.6l-2.4 11.2666667H477.8l-1.066667 5.0000003H467l-3.533333 16.666666C463 120.4 462.733333 122 462.733333 123c0 2.6 1.666667 3.933333 5.066667 3.933333 1.133333 0 2.533333-.266666 4.2-.866666l-1.533333 4.866666c-2.266667.666667-4.133334.933334-5.6.933334-2.666667 0-4.666667-.6-6-1.8-1.4-1.2-2.066667-2.933334-2.066667-5.133334 0-1.8.333333-4.133333.933333-7L461.266667 101.4h-5.6l1.066666-5h5.6L464.2 87.5333333 470.466667 85.2zm18.2 11.2666667l-7.4 34.7333333h-5.8l7.4-34.7333333h5.8zM489.2 78.7333333c.933333 0 1.666667.2666667 2.266667.8666667.6.6.866666 1.3333333.866666 2.2666667 0 1.2666666-.466666 2.3333333-1.466666 3.3333333s-2.133334 1.4666667-3.4 1.4666667C486.6 86.6666667 485.8 86.4 485.2 85.8c-.6-.6-.866667-1.3333333-.866667-2.2666667 0-1.2666666.466667-2.4 1.466667-3.3333333 1-.9333333 2.133333-1.4666667 3.4-1.4666667zm14.533333 17.7333334L502.866667 100.6c2.2-1.8666667 4.133333-3.2 5.866666-3.9333333 1.733334-.7333334 3.6-1.0666667 5.733334-1.0666667 3.066666 0 5.466666.8 7.266666 2.3333333C523.533333 99.4666667 524.4 101.6 524.4 104.333333c0 1.2-.2 2.866667-.666667 5l-4.6 21.866667h-5.8l4.6-21.733333c.266667-1.266667.4-2.333334.4-3.266667 0-1.733333-.533333-3.133333-1.666666-4.133333-1.066667-1-2.6-1.466667-4.533334-1.466667-1.466666 0-3 .333333-4.533333.933333-1.533333.6-2.8 1.466667-3.8 2.466667-1.4 1.4-2.333333 3.266667-2.866667 5.6l-4.6 21.6h-5.8l7.4-34.7333333h5.8zm61.466667 0L557.866667 131.2c-1 4.666667-2.733334 8.466667-5.266667 11.333333-1.866667 2.133334-4.133333 3.866667-6.8 5.066667-2.6 1.2-5.133333 1.8-7.666667 1.8-3.466666 0-6.4-1-8.933333-2.933333-1-.8-1.8-1.666667-2.4-2.666667-.6-1-1.133333-2.4-1.666667-4.266667L530.8 135.8c.6 5.733333 3.4 8.533333 8.266667 8.533333 3.733333 0 6.866666-1.666666 9.466666-5.066666 1.6-2 2.8-5.066667 3.666667-9.133334l.666667-3.2C549 130.333333 545.066667 132 540.933333 132c-2.933333 0-5.6-.933333-7.866666-2.8-2.8-2.333333-4.266667-5.8-4.266667-10.266667 0-2.733333.466667-5.533333 1.4-8.266666.933333-2.733334 2.2-5.2 3.866667-7.333334 1.866666-2.4 4.133333-4.2666663 6.8-5.6666663C543.533333 96.3333333 546.2 95.6 548.866667 95.6c2 0 3.8.4 5.333333 1.2 1.533333.8 2.933333 2.0666667 4.2 3.866667L559.266667 96.4l5.933333.0666667zm-16.466667 4.2000003c-4.6 0-8.2 2.466666-10.8 7.4C536.266667 111.2 535.4 114.533333 535.4 118c0 2.933333.733333 5.2 2.133333 6.8C538.866667 126.266667 540.8 127 543.2 127c4.6 0 8.2-2.466667 10.8-7.466667 1.666667-3.133333 2.533333-6.4 2.533333-9.866666 0-2.866667-.666666-5.066667-2-6.6-1.333333-1.533334-3.266666-2.333334-5.8-2.4zM233.066667 21.5333333h18.2L250.6 24.6666667c3.6-2.0666667 4.933333-2.8 7.2-3.4 3.733333-1 6.533333-1.1333334 9.333333-1 3.533334.1333333 5.533334.6666666 7.933334 1.8 1.8 1.0666666 3.2 2 4.866666 4.3333333 4.4-2.9333333 7.4-4.2666667 10.4-5.1333333C293.466667 20.4 296.4 20.2 299.8 20.2c4.733333 0 8.466667 1.0666667 10.866667 3 2.4 1.9333333 4.466666 4.6666667 4.466666 8.4.133334 1.8666667-.733333 5.3333333-.733333 5.3333333L307.466667 65.8h-18.2L294.8 42.4s.6-2.7333333.8-3.9333333C296 35.8 294.066667 34.2 290.4 34.1333333c-3.466667-.0666666-6.4.6-8.466667 3.1333334-1.4 1.6-1.866666 3.0666666-3.066666 7.3333333L273.8 65.9333333h-18.133333s5.266666-21.8 5.6-23.5333333c.2-.8666667.6-2.5333333.733333-3.8666667.466667-2.8-1.733333-4.3333333-5-4.4666666-3.066667-.0666667-5.6 1.0666666-7.4 2.6666666-2.533333 2.2666667-3.266667 5.8666667-4.4 9.8l-4.666667 19.3333334H222.4l10.666667-44.3333334zm310.466666 0L542.666667 25.4c3.866666-2.4666667 6.466666-3.5333333 9.2-4.2 3-.8 5.333333-.9333333 9.066666-.8 4.533334.1333333 7.6 1.1333333 10.533334 3.0666667 2.6 1.9333333 4.2 4.2666666 4.466666 7.9333333.066667 2.5333333-.8 6.3333333-.8 6.3333333L568.333333 66H550.2l5.4-22.2666667c.533333-2.5333333.866667-3.8666666.933333-5 .333334-3.6-2.466666-4.5333333-6.266666-4.5333333-3.266667 0-7.2 1.0666667-9.133334 3.1333333C539.533333 39 538.6 41.6 537.4 46.4L532.666667 66h-18L525.4 21.6h18.133333v-.0666667zm-91 0l-10.8 44.3333334h-18.4l10.8-44.3333334h18.4zM449.4.66666667c2.533333.13333333 4.266667.93333333 5.533333 2.4 1.266667 1.46666666 1.4 3.4 1.333334 5.26666666-.466667 3.19999997-1.6 5.13333337-4.133334 7.06666667-2.866666 2-5.2 2.7333333-9.133333 2.4-2.466667-.2-4.6-1.3333333-5.6-2.6-1.066667-1.2666667-1.533333-3.2-1.333333-5.2.2-2 1.266666-4.46666667 3.8-6.53333333C442.4 1.33333333 446.533333.53333333 449.4.66666667zm40 19.60000003c5 0 8.333333.3333333 11.466667 1.0666666 3.133333.7333334 5.6 1.8666667 7.533333 3.4 3.066667 2.6 5.333333 6.4 5.333333 11.8666667 0 4.5333333-1.066666 9-3.133333 13.3333333-3.266667 7-8.2 10.8666667-14.066667 13.6666667-4.6 2.2-13.266666 3.7333333-19.266666 3.5333333-5.933334-.2-8.533334-.5333333-11.133334-1.1333333-2.6-.6-5.333333-1.8666667-7.2-3.2666667-3.4-2.4666666-5.6-5.9333333-5.6-11.3333333 0-4.8666667.666667-8.6666667 2.733334-13.5333333 1.866666-4.4 5.333333-8.5333334 8.666666-11C467.733333 24.6 471.133333 23 475 22c3.866667-1 8.266667-1.6666667 14.4-1.7333333zm-3.133333 12.4c-4.2 0-7.933334 2-10.2 5.1333333-1.866667 2.6666667-3.2 6.0666667-3.2 9.4666667C472.866667 52.1333333 475.533333 54.6 480.8 54.6c4.133333 0 7.866667-2.0666667 10.133333-5.2C492.8 46.8 494.2 43.2 494.2 39.8c0-4.8666667-2.666667-7.0666667-7.933333-7.1333333z"
											/>
										</g>
										<g id="Jetpack-Logomark" fillRule="nonzero">
											<circle
												id="Oval"
												cx="75.2794139"
												cy="75.2794139"
												r="75.2794139"
												fill="#00BE28"
											/>
											<path
												id="Shape"
												fill="#FFF"
												d="M79.014652 62.6370696v72.9808054l37.639707-72.9808054z"
											/>
											<path
												id="Shape"
												fill="#FFF"
												d="M71.4005128 87.7780952V14.9409524L33.9044689 87.7780952z"
											/>
										</g>
									</g>
								</g>
							</g>
						</g>
					</svg>
				);

			default:
				return null;
		}
	}

	render() {
		return (
			<div className="jetpack-connect-header-logo">
				{ this.renderPartnerLogo() || <JetpackLogo full size={ 45 } /> }
			</div>
		);
	}
}

const mapStateToProps = state => ( {
	partnerSlugFromQuery: getPartnerSlugFromQuery( state ),
} );

export default connect( mapStateToProps )( localize( JetpackConnectHeaderLogo ) );
