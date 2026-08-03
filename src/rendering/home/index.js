import Herobanner from './herobanner'
import WhyZeonfx from './whyZeonfx'
import MarketOverview from './marketOverview'
import OneAccount from './oneAccount'
import Snapshot from './snapshot'
import LaptopAnimation from './laptopAnimation'
import TradeGuard from './tradeGuard'
import SocialTrading from './socialTrading'
import HomeBoxList from './homeBoxList'
import TraderTools from './traderTools'
import StartTrading from './startTrading'
import BetterTrading from './betterTrading'
import GetStart from './getStart'

const startTradingSteps = [
  {
    id: "01",
    title: "Register",
    description: "Create your ZeonFX account online. It takes only a few minutes.",
    icon: '/assets/images/user.png'
  },
  {
    id: "02",
    title: "Verify",
    description: "Submit your ID and proof of address. Verification is handled quickly.",
    icon: '/assets/images/sec.png'
  },
  {
    id: "03",
    title: "Fund",
    description: "Deposit by card, bank transfer, e-wallet, or crypto. Funding clears fast.",
    icon: '/assets/images/three.png'
  },
  {
    id: "04",
    title: "Trade",
    description: "Log in to MT5 or the ZeonFX Web Terminal, pick your market, and start trading.",
    icon: '/assets/images/four.png'
  }
];

export default function HomePage() {
  return (
    <div>
      <Herobanner />
      <WhyZeonfx />
      <MarketOverview />
      <OneAccount />
      <Snapshot />
      <LaptopAnimation />
      <TradeGuard />
      <SocialTrading />
      <HomeBoxList />
      <TraderTools />
      <StartTrading
        badgeText="get started"
        title={
          <>
            Start Trading in  4 <span> Simple </span> Steps
          </>
        }
        townImage="/assets/images/town.png"
        primaryBtnText="Open Live account"
        secondaryBtnText="Try Demo"
        stepsData={startTradingSteps}
      />
      <BetterTrading />

    </div>
  )
}

