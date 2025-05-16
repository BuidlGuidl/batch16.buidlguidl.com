import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

const thumbnailPath = "/thumbnail.png";

export const metadata = getMetadata({
  title: "Scaffold-Eth | Batch 16 Buidlguidl Stake",
  description:
    "A decentralized staking application built by Batch 16 BuidlGuidl members. Explore our collaborative Web3 project built with Scaffold-ETH 2 on Arbitrum.",
  imageRelativePath: thumbnailPath,
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
