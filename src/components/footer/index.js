import styles from './footer.module.scss';
import FacebookIcon from '@/icons/facebookIcon';
import InstagramIcon from '@/icons/instagramIcon';
import TwitterIcon from '@/icons/twitterIcon';
import Link from 'next/link';
const FooterImage = '/assets/images/footer-img.png';
export default function Footer() {
    return (
        <>
            <div className={styles.footerimg}>
                {/* <video src="https://res.cloudinary.com/izyjnpsh/video/upload/v1786087658/Characters_going_up_down_1080p_202608041249_gduerq.mp4" loop muted playsInline autoPlay></video> */}
                <img src={FooterImage} alt='FooterImage' />
            </div>
            <footer className={styles.footer}>
                <div className='container'>
                    <div className={styles.footerGrid}>
                        <div className={styles.leftContent}>
                            <h3>
                                ZeonFX Limited
                            </h3>
                            <p>
                                Registered Address: <br />Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros Islet, Saint Lucia
                            </p>
                            <p>
                                Registration Number: <br />2026-00156
                            </p>
                            <p>
                                Physical Address: <br />
                                Office 4, 25 Corinth Hilltop, Corinth, Gros-Islet, Saint Lucia
                            </p>
                            <a href='callto:+1 758 572 5128'>
                                Call Us: +1 758 572 5128
                            </a>
                            <a href='mailto:support@zeonfx.com'>
                                Email Us: support@zeonfx.com
                            </a>
                            <div className={styles.socialAlignment}>
                                <a href='https://www.facebook.com/zeonfxofficial' target='_blank'>
                                    <FacebookIcon />
                                </a>
                                <a href='https://www.instagram.com/zeonfxofficial' target='_blank'>
                                    <InstagramIcon />
                                </a>
                                <a href='https://x.com/zeonfxofficial' target='_blank'>
                                    <TwitterIcon />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className={styles.menuAlignment}>
                                <div>
                                    <h3>
                                        Markets
                                    </h3>
                                    <Link href="/forex">Forex</Link>
                                    <Link href="/indices">Indices</Link>
                                    <Link href="/metals">Metals</Link>
                                    <Link href="/commodities">Commodities</Link>
                                    <Link href="/stocks">Stocks</Link>
                                    <Link href="/crypto">Crypto CFDs</Link>
                                </div>
                                <div>
                                    <h3>
                                        Trading
                                    </h3>
                                    <Link href="/account">Accounts</Link>
                                    <Link href="/deposit-withdraws">Deposits & <br /> Withdrawals</Link>
                                </div>
                                <div>
                                    <h3>
                                        Platform
                                    </h3>
                                    <a href='https://www.metatrader5.com/en/download' target='_blank'>MetaTrader 5</a>
                                    <a href='https://web.metatrader.app/terminal?lang=en' target='_blank'>Web Trader</a>
                                </div>
                                <div>
                                    <h3>
                                        Company
                                    </h3>
                                    <Link href="/company">About ZeonFX</Link>
                                    <Link href="/why-zeonfx">Why ZeonFX</Link>
                                    <Link href="/partners">Partners (IB / Affiliate)</Link>
                                    <Link href="/blog">Blog</Link>
                                    <Link href="/contact">Contact & Support</Link>
                                </div>
                                <div>
                                    <h3>
                                        Legal
                                    </h3>
                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                    <Link href="/terms-conditions">Terms & Conditions</Link>
                                    <Link href="/risk-disclosure">Risk Disclosure</Link>
                                    <Link href="/aml-policy">AML Policy</Link>
                                </div>
                            </div>
                            <div className={styles.footerSecmenu}>
                                <div>
                                    <h3>
                                        Tools
                                    </h3>
                                    <Link href='/tools'>Calculator</Link>
                                    <Link href='/tools#EconomicCalendar'>Economic Calendar</Link>
                                    <Link href='/tools#marketnews'>News & Sentiment</Link>
                                    <Link href='/tools#TradeGuard'>Trade Guard</Link>

                                </div>
                                <div>
                                    <h3>
                                        Promotions
                                    </h3>
                                    <Link href='/promotions'>
                                        Trade & Win
                                    </Link>

                                </div>
                                <div>
                                    <h3>
                                        Social Trading
                                    </h3>
                                    <Link href="/social-trading">
                                        Social Trading
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerTextList}>
                        <div className={styles.text}>
                            <h3>Company & Registration</h3>
                            <p>ZeonFX Limited is registered in Saint Lucia. Registered office: Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros Islet, Saint Lucia. Registration Number: 2026-00156. Physical office: Office 4, 25 Corinth Hilltop, Corinth, Gros-Islet, Saint Lucia. ZeonFX Limited operates as an execution-only broker and does not provide investment
                                advice. General enquiries: support@zeonfx.com.
                            </p>
                        </div>
                        <div className={styles.text}>
                            <h3>Risk Warning</h3>
                            <p>
                                Trading in foreign exchange (forex) and contracts for difference (CFDs) involves a high level of risk and may not be suitable for all investors. Leveraged trading can result in losses that exceed your initial deposit. You should carefully consider your investment objectives, level of experience,
                                and risk tolerance before trading. Past performance is not indicative of future results.
                            </p>
                        </div>
                        <div className={styles.text}>
                            <h3>Restricted Regions</h3>
                            <p>
                                ZeonFX Limited does not provide services to citizens or residents of the United States, Cuba, Iraq, Myanmar, India, North Korea, Sudan, or the United Arab Emirates. The services of ZeonFX Limited are not intended for distribution to, or use by, any person in any country or jurisdiction where
                                such distribution or use would be contrary to local law or regulation.
                            </p>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <p>
                            © 2026 ZeonFX Limited. All rights reserved.
                        </p>
                        <p>
                            Trading in financial instruments involves significant risk and may not be suitable for all investors. Past performance is not indicative
                            of future results. ZeonFX Limited is licensed in Saint Lucia.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
