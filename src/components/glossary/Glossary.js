import React from 'react'
import './glossary.scss'

function Glossary({ active }) {
    return (
        <>
            {/* <Navbar /> */}
            <div className={active ? "glossary-main ml-5" : "glossary-main"}>
                <div className="container">
                    <div className="row  pt-5">
                        <div className="col-10 text-centers ml-auto">
                            <h3>1. LPs Simplified</h3><br />
                            Liquidity is the blood of the economy. As a hodler of two different tokens, you want to keep your holdings while they pay you dividends. If you provide liquidity, you earn a yield.

                            Thanks to open-source smart contracts you can rest assured that your holdings are fully safe while earning dividends from them. And with the unique BabylonSwap ecosystem you can expect these yields to be unheard of.

                            LPs are tokens on their own, but they’ll always maintain the same value of both tokens that were supplied. So whenever you want to redeem your LPs back into your original two tokens you will have the same value that you had when you supplied them. So if you supply 1M ANTI and 10,000 USDX and get LPs in return, whenever you want to redeem the LPs you’ll receive the same value of 1M ANTI and 10,000 USDX.

                            Let’s say you had a specific amount of tokens in two different tokens that you exchanged for LPs, when you exit the pool you will get the same value you had in both tokens, but due to changes in price you might get less from one token and more from the other (due to the change in ratio inside the pool due to adding & removing tokens from the pool due to the trading) but if you instantly decide to sell the extra tokens back to the other token you will end up with the same amount of both tokens that you started with (minus a very small difference called “Impermanent loss”).

                            Impermanent Loss is a minimal loss that happens only when you remove liquidity while the pool ratio is different from what it was when you added liquidity, but it’s minimal and it never exceeds 0.08% of the profit/loss that would’ve been realized if you kept your tokens instead of supplying them.

                            So practically whenever you remove liquidity you get back to pretty much where you were before (As if you kept your tokens in your wallet).

                            Example:

                            Let’s say in the BabylonSwap Ecosystem the current supply in the whole pool of ANTI-USDX is 10M ANTI and 100,000 USDX.

                            Let’s say you already supplied to this pool 1M ANTI and 10,000 USDX with the price 1 ANTI = 0.01 USDX.

                            Now if someone somewhere in the world buys 1M ANTI with 10,000 USDX at the current price the pool becomes 110,000 USDX and 9M ANTI, the Automated Market Maker calculates the optimal price that should be given to the seller and after the sale is completed we should end up with a different ratio of let’s say 1 ANTI = 0.012 USDX

                            If you decide to leave the pool at any moment you’ll receive back your tokens at whatever the current ratio is. So after a while you decide to exit and you end up with something like 915,000 ANTI and 11,365 USDX, at that point if you decide to instantly swap the extra 1365 USDX into ANTI you’ll get in return that 85,000 ANTI that was missing so practically you end up back to the 1M ANTI and 10,000 USDX you started with (Minus The LP Tax)

                            <h3 className="pb-3 pt-4">2. The Bigger Picture</h3>
                            The Antikythera Ecosystem is a result of the groundbreaking Research & Development performed by Antikythera Labs.

                            Brave New Babylon is the only scalable blockchain in the world thanks to The Antikythera Ecosystem and its financial heart BabylonSwap.

                            BabylonSwap Powers Antikythera Which Itself Powers Brave New Babylon.<br />

                            BabylonSwap is Powered by God The Most High.<br />

                            This is a brief abstract of the Antikythera Universe. We have thousands of papers illustrating the intricate details of our ecosystem and the perfected technology that powers it, but sharing everything here will be an exercise in futility, so instead we give you this brief and efficient summary of Antikythera.<br />

                            Enjoy.<br />

                            First things first: Blockchain was NOT supposed to be another example of the Tragedy of the Common. Blockchain is about Abundance. NOT Scarcity.<br />

                            We will go through every existing idea to scale public blockchains to date and we will show how all of them do NOT work:<br /><br />

                            - Increasing the block size indefinitely with no extra plans (like Bitcoin Cash):<br />

                            In all the current Blockchains increasing the block size indefinitely will result in an inevitable centralization that will eventually lead to the destruction of the blockchain because it will become hackable. Increasing the block size indefinitely in the current public blockchains will result in a continuous decreasing in decentralization which will eventually make it possible for anybody to launch 51% attacks and Sybil attacks on the network and basically crash it.

                            But Off-Chain solutions can not scale either:<br /><br />

                            - Creating second layer Channels (like Bitcoin):<br />

                            Channels like the Lightening Network are impossible to scale without centralizing all the power in the hands of a few entities who are not miners nor stakers in the network. If Alice wants to send money to Bob with whom she doesn’t have an open channel, then she’ll have to use channels that connect to Bob. But in order to find a route to reach Bob every channel inside the route should have an open channel with enough liquidity to process the transaction between Alice and Bob. <br />

                            THERE HAS TO BE ENOUGH FUNDS LOADED IN EACH CHANNEL ALONG THE WAY FOR IT TO WORK. This is why Centralized Hubs will naturally occur in which there is enough liquidity and enough channels to process transactions between the Channel’s users. These Centralized Hubs are third party settlement organizations that are completely centralized to the point that they will eventually be forced by 20th century regimes to implement KYC and AML protocols to spy on world citizens. Also this inevitable centralization of Hubs in Off-Chain channels will result in easy theft and hacking that can easily be perpetrated by these centralized Hubs.

                            Now just replace the term “Open Channel” with “Checking Account”: These centralized Hubs will be run by the same evil financial institutions that Blockchain was created to challenge.

                            Additionally we have the Routing problem in these channels which makes the system obsolete in its core. Each Channel Node finds and runs it own Routes. Due to how channels are constantly opening and closing, how nodes are constantly opening and closing, and how funds are constantly moving between channels, Routing paths can be open one second and closed the next second. Individual nodes are expected to go through all this data and decide the optimal Routing path every time they want to make a new transaction. Eventually the network will hit an inevitable ceiling when there is too much data in the off-chain network for normal nodes to handle using their available hardware.<br />

                            As you can see, power in these channel protocols eventually moves to centralized hands which eventually pushes people back to the congested On-Chain Layer 1 (which can not scale either as we already established)

                            Off-Chain channels can NOT scale a decentralized blockchain.<br />

                            People will eventually jump back On-Chain since Off-Chain solutions can’t scale the whole blockchain and these solutions become unusable and completely centralized anyway after reaching specific user capacity thresholds which means people will eventually jump back On-Chain. Meaning now we’re back to our original problem of the impossibility of scaling by increasing the block size limit indefinitely On-Chain with no extra measures.<br /><br />

                            - Ethereum Sharding:<br />

                            Sharding is a common practice in Computer Science that consists of splitting a Database into multiple Instances each containing a portion of the whole data set. Each Instance is known as a “Shard”.<br />

                            In Ethereum each Shard is a separate new chain. Ethereum Sharding is basically creating 64 Instances to host the Ethereum Blockchain. This makes Ethereum 64 times bigger in size meaning it’ll handle 64 times more data. Each Ethereum Staker will need to host only one Shard (Executable Shard) in the Staking Node which decreases the load on Stakers. The Shard the staker needs to host is the only Shard that handles Transactions (including Smart Contracts), all the other 63 Shards are used to store extra data related to the throughput of the main Shard.

                            Based on the current state of Ethereum jumping 64 times in blockchain size from here won’t make any difference and Ethereum will still be unable to scale.

                            Ethereum used a fancy word to allow itself to increase the size of the whole blockchain without solving the scalability issue. Ethereum is still impossible to scale. When inevitably the 64 Shards are no longer enough to handle the throughput of Ethereum, then Vitalik will go for another hard fork, then another hard fork, then another one, causing countless splits in the process like Ethereum Classic (ETC) and soon Ethereum Legacy and Ethereum 2.0 and more while making Ethereum increasingly susceptible to 51% attacks and Sybil attacks until it completely crashes as mathematics predict.

                            Socialism and Communism rely on making centralized changes every now and then to keep an agenda going, but a truly free market should be handed over to the invisible hand of the economy which reflects the free will of the market participants based on their economic incentives. Sharding is a socialist attempt to delay facing the inevitable problem of scalability by making the blockchain 64 times bigger when the blockchain should actually scale to infinity, not 64 times. Sharding is an utter waste of time and in my view it’s just a political move to kick the can down the road until we hit the inevitable impasse.<br /><br />

                            - Ethereum Rollups:<br />

                            The Ethereum devs likely understand what we explained above yet they insist on the socialist approach. Rollups is their next fancy-sounding plan to kick the can down the road a little tiny bit more. Simply put, Rollups execute transactions outside of Layer 1 but post the transaction data on Layer 1. Rollups basically take care of the computation off-chain while posting the outcomes on the Ethereum Blockchain. As you can see, this will at best make the blockchain’s throughput slightly bigger which is far from enough to scale a decentralized blockchain. Arbitrum, Optimism, ZK, or whatever name they choose, it’s just another form of kicking the can down the road a little bit more.

                            Application-Specific Layer 2 Scaling Solutions:

                            Sidechains, Plasma, Channels, and the likes are all application-specific second layer chains that require depositing and withdrawing to and from the Ethereum Blockchain which means just like the Lightning Network they can’t scale beyond a threshold and they inevitably turn into centralized hubs.

                            Recap:

                            Block size limits can’t be increased indefinitely:

                            Increasing the block size indefinitely in the current public blockchains will result in a continuous decreasing in decentralization which will eventually make it possible for anybody to launch 51% attacks and Sybil attacks on the network and basically crash it.

                            But Off-Chain solutions can not scale either:

                            People will eventually jump back On-Chain since Off-Chain solutions can’t scale the blockchain and these solutions become unusable and completely centralized after reaching specific user capacity thresholds which means people will eventually jump back On-Chain. Meaning we’ll find ourselves eventually back to our original problem of the impossibility of scaling by increasing the block size limit indefinitely On-Chain.

                            So

                            As you can see blockchain in its current form can’t scale (what The Evil One wants)

                            My team found the solution. We came up with Antikythera and its financial center BabylonSwap to make Brave New Babylon perpetually scalable forever.<br />

                            The solution:<br />

                            Antikythera (ANTI) is the native Token of Antikythera:

                            <br />

                            BabylonSwap is a swap and an AMM dapp with preset parameters in the smart contracts that are completely automated and can NEVER be altered

                            BabylonSwap Fees:<br /><br />

                            <b>0.25% Trade Fee</b><br />

                            - 0.09% to Farms<br />
                            - 0.05% to Locking Liquidity (Locking LPs Forever in that Pool)<br />

                            - 0.03% to the Next Brave New Babylon Block Reward<br />

                            - 0.005% to the USDX Bank<br />

                            - 0.01% to Free Roulette<br />

                            - 0.03% to Antikythera Storage Providers<br />

                            - 0.005% to Antikythera Computation Providers<br />

                            - 0.015% to the Antikythera Metaverse<br />

                            - 0.01% to Antikythera Hotspot Providers<br />

                            - 0.005% to Liga Daily Match Winner<br /><br />

                            <b>LP Tax: 3% on entry and 3% on exit:</b><br />

                            - 1.5% goes to LP providers of the pair<br />
                            - 0.25% goes to Locking LPs Forever in that pair<br />

                            - 0.1% goes to the ANTI Bank<br />
                            - 0.1% goes to the USDX Bank<br />
                            - 0.1% goes to the GOLDX Bank<br />
                            - 0.1% goes to the BTCX Bank<br />
                            - 0.1% goes to the ETHX Bank<br />

                            - 0.05% goes to Free Roulette<br />

                            - 0.25% goes to the the Next Brave New Babylon Block Reward<br />

                            - 0.1% goes to the Antikythera Metaverse<br />

                            - 0.25% goes to the Antikythera Storage Providers<br />
                            - 0.1% goes to the Antikythera Computation Providers<br />

                            <br />

                            Antikythera mixes storage and staking under one Tab (Scribe) in the Antikythera App

                            As you can see above, BabylonSwap is continuously sending bigger and bigger rewards to the Validators of the Brave New Babylon Network. Game Theory combined with Sound Economics solve the Blockchain Scaling “Trilemma”.<br />

                            Let’s elaborate:<br />

                            The Staking Node and the Storage can be accessed Simultaneously in one Tab inside the Antikythera App:

                            (.pkg, .exe, .msi, .dmg, .ipa, .apk)<br />

                            The Tab is called: <b>Scribe.</b><br />

                            In this tab the Staker provides Storage from his device (he can give up to 85% of his available Storage)

                            000 Becoming a Brave New Babylon Scribe via Antikythera:<br />

                            - When you add Storage 50% of the storage you added is used to open an automated Staking Node and the other 50% is used to provide storage to ANTI holders by adding it to the global storage pool<br />

                            - The global storage pool divides that pooled amount of storage equally between every ANTI out of the 1 Trillion ANTI that’s in circulation since the beginning.<br />

                            - If a storage user needs more ANTI to maintain the use of the same amount of storage he was already using (in the case of the global storage pool dropping in size) that data is archived on the Brave New Babylon Blockchain as a Read-Only instance accessible to the user.<br />

                            - 100% of the payouts coming from BabylonSwap to the Storage Providers is automatically swapped to FTM via BabylonSwap and that amount goes to the Automated Staking Node. The FTM that goes to the Automated Staking Node is locked inside the Automated Staking Node until the Scribe stops providing storage (until Provided Storage = 0) then that ANTI is unlocked. All Earnings from the Staking Node are instantly withdrawable.<br />

                            - The Automated Staking Node starts downloading the whole Blockchain from the bottom up starting from the Genesis Block throughout the Brave New Babylon Blockchain DAG Structure.<br />

                            <br /><br />

                            - When a ANTI holder uses his ANTI to receive Storage from the pool (inside the Scribe section inside Antikythera App), 100% of that ANTI is automatically swapped to FTM via BabylonSwap and that amount goes to opening an Automated Staking Node with 50% of the Storage he was given. The remaining 50% of the storage can be used by the ANTI holder. The ANTI that was automatically taken from the Storage Users and deposited in their Automated Staking Node is locked inside the Automated Staking Node until they stop using storage (until Used Storage = 0) then that ANTI is unlocked.

                            - The Automated Staking Node starts downloading the whole Blockchain from the bottom up starting from the Genesis Block throughout the Brave New Babylon Blockchain DAG Structure.

                            <br />

                            - The Storage Providers and the Storage Users can deposit and withdraw Extra FTM to/from their Staking Nodes whenever they want. The Extra FTM Deposited and Withdrawn to/from the Automated Staking Node is NEVER locked.

                            <br />

                            This means:<br />

                            - If Brave New Babylon stakers want to download the whole Blockchain all they need to do is provide enough storage in the “Scribe” section in the Antikythera App and the provided storage should be enough to store all the blocks (they can see if all the blocks were downloaded and they’ll know how much storage they should provide to have all the blocks)

                            000 Computation:

                            When you add Computation to the Antikythera ecosystem (via The Antikythera App) 100% of that Computation is added to a global pool of Computation. Computation Providers receive a continuous stream of revenue from BabylonSwap as mentioned above. ANTI Holders can use that Computation in the “Console” Section (which is the most advanced graphical operating system to date) inside the Antikythera App. They can use their Scribe Storage as the Hard Drive of their Antikythera Console. Inside the Console they will find both the DNS Browser and the Legacy Browser, the latter is a browser that interacts with the Web Content that is hosted on the Brave New Babylon Blockchain via a hashed URL. In the URL Bar Visitors can enter the Text that corresponds to the Hash of the Web3 Content hosted on the Antikythera Decentralized Storage Network or on the Brave New Babylon Blockchain itself. Users of the Antikythera App can create Web3 Content fully hosted on Brave New Babylon using MoorishScript which is a section inside the Antikythera App that allows developers to deploy decentralized Web3 Sites and decentralized Web3 Apps on top of the Antikythera Decentralized Storage Network or the Brave New Babylon Blockchain itself taking only a few clicks to do so.

                            <br /><br />

                            <b>ANTI total supply:</b><br />

                            1 Trillion ANTI = 1,000,000,000,000 ANTI<br />

                            Antikythera (ANTI) has an initial supply of 1 Trillion ANTI.<br />

                            BabylonSwap has an Affiliate Program called Evangelism.<br />

                            Here is how Evangelism works:<br />

                            Every Whitelisted Address is linked in a smart contract to its Downline Addresses (the addresses that whitelisted that address by adding it as their Evangelist’s Address + the addresses that are 10 levels below the whitelisted address)<br />

                            Every Whitelisted Address collects a Credit which is equal to the Downline Address’ Level’s coefficient times the Downline Address’ Total Earnings in BabylonSwap from Free Roulette and Farms and Banks (calculated in ANTI in real-time based on the price feed of BabylonSwap)<br />

                            Credit = Level Coefficient x referral earnings calculated in ANTI<br />

                            The Level Coefficient of the BabylonSwap earnings of each Level of the Evangelist’s downline:<br />

                            Level 1: 1<br />
                            Level 2: 2<br />
                            Level 3: 3<br />
                            Level 4: 4<br />
                            Level 5: 5<br />
                            Level 6: 6<br />
                            Level 7: 7<br />
                            Level 8: 8<br />
                            Level 9: 9<br />
                            Level 10: 10<br />

                            An Evangelist collects Credits and has a Credit Ratio.<br />

                            Credit Ratio = Evangelist Credit / Total Credit By All BabylonSwap Evangelists

                            The trade fee and LP tax that comes from BabylonSwap to Evangelists is automatically distributed proportionally to all Evangelists based on their Credit Ratio. For example an Evangelist with a Credit Ratio of 15% at the time of the airdrop will receive 15% of what came to Evangelists.<br />

                            When the Credit of one (or many) Evangelist reaches 1000 Points, then what arrives next from BabylonSwap is distributed based on the same logic to all Evangelists THEN after that the Counter resets to zero.<br />

                            So after one (or many) of the Evangelists reaches or crosses 1000 Points, the counter automatically resets to zero and the process above starts again from the beginning again.<br />

                            So basically it becomes a cycle: whenever an Evangelist’s Credit reaches 1000 Points, what arrives in the pot next gets distributed for a last time following the same logic and THEN the Evangelism Counter resets to zero.<br /><br />



                            <b>Specifications of The Brave New Babylon Blockchain (Spooned and Forked):</b><br />

                            - Brave New Babylon Blockchain speaks Greek by being accessible via MetaMask which is the first decentralized open-source web3 wallet in history.<br />

                            - Antikythera (ANTI) is the native coin of the Antikythera Ecosystem residing on top of Brave New Babylon.<br />



                            The Dynamic Block Size Limit Model:<br />

                            Brave New Babylon will always have a Block Size Limit. But this Block Size Limit automatically adapts to all circumstances thanks to the game theory of the Antikythera economic incentives.<br />

                            (1) Previous Block’s Transactions’ Size = The Size of all the data (Transactions) stored in the previous Block<br />

                            (2) To set the new Block Size Limit: The system checks Previous Block Ratio which is the % of the Previous Block’s Transactions’ Size (in KB) compared to the current Block Size Limit (in KB)<br />

                            (3) If Previous Block Ratio is bigger than 90%, the Block Size Limit gets 10% bigger in size (otherwise nothing happens)<br /><br />



                            <b>Zero Fee Possible:</b><br />

                            There is no minimum fee required for any transactions. Zero Fee Transactions are Possible on Brave New Babylon.<br /><br />

                            <b>BabylonSwap Block Reward:</b><br />

                            Due to Arbitrage and the Automated Locking of Liquidity there will always be trading activity on BabylonSwap. This means there will always be a Block Reward coming from BabylonSwap (on top of the collected transaction fees) that Brave New Babylon Validators receive for validating the Brave New Babylon Blockchain.<br />

                            - This BabylonSwap Block Reward goes to the same wallet that received the last On-Chain Block Reward and it is automatically allocated as follows:<br />

                            Block Ratio = Block’s Transactions’ Size / Current Block Size Limit

                            <br /><br />

                            - If Block Ratio of the Validated Block is NOT 90% or higher, then BabylonSwap Block Reward is distributed as follow:

                            Paid BabylonSwap Block Reward = BabylonSwap Block Reward x Block Ratio<br />

                            Unpaid BabylonSwap Block Reward = BabylonSwap Block Reward - Paid BabylonSwap Block Reward<br />

                            Unpaid BabylonSwap Block Reward is rolled up to the next BabylonSwap Block Reward:<br />

                            Next BabylonSwap Block Reward = Current Unpaid BabylonSwap Block Reward + Next BabylonSwap Block Reward

                            <br /><br />

                            - If Block Ratio of the Validated Block is 90% or higher, then BabylonSwap Block Reward is distributed as follow:<br />

                            Paid BabylonSwap Block Reward = 0<br />

                            Unpaid BabylonSwap Block Reward = 100% of BabylonSwap Block Reward<br />

                            Unpaid BabylonSwap Block Reward is rolled up to the next BabylonSwap Block Reward:<br />

                            Next BabylonSwap Block Reward = Current Unpaid BabylonSwap Block Reward + Next BabylonSwap Block Reward<br />

                            <br /><br />

                            The Preset Unalterable parameters of the Antikythera Ecosystem guarantee infinite scalability. When we talk about scaling Blockchain the first thing that comes to mind is the Scalability Trilemma.<br />

                            I need to mention here that our approach towards this Trilemma was never mainstream.<br />

                            The question everyone has been asking is: “How can we improve scalability without reducing security and decentralization?”<br />

                            We believe that trying to answer this question in this form will inevitably lead to the destruction of the network. This is because both Security and Decentralization are maximally sensitive variables that get affected with the smallest changes in the other maximally authoritative variable which is Scalability. Trying to “not reduce” Security and Decentralization is the equivalent of trying to keep their change rate at zero. Trying to keep two maximally sensitive variables at the same level while changing the remaining maximally authoritative variable has the same odds of trying to keep the width of a skyscraper at the same level while changing its height: The skyscraper will inevitably crash.<br />

                            The question we asked in Antikythera Labs is the following: “How can we make the three variables go up at the same time?”<br />

                            We answered this question with the preset unalterable parameters mentioned above which resulted in the perfect blockchain that scales to infinity which is Brave New Babylon.<br />

                            - Decentralization: Unlike all existing blockchains that automatically treat their financial ecosystems as side projects, Brave New Babylon adopts the Wall-Street philosophy at its core. Think of Brave New Babylon as a maximally capitalistic society. The heart of a Capitalist society is the free market. BabylonSwap is the Wall Street of the Brave New Babylon Blockchain via the Antikythera Ecosystem. But unlike traditional markets, the Core Wall Street of the Brave New Babylon Blockchain is an Automated Market driven by Automated Market Makers and Automated Locking of Liquidity and Free Market Arbitrage. The automated economic ecosystem at the core of Brave New Babylon uses Smart Contract Automation to establish the foundational market incentives necessary to guarantee eternal liquidity and perpetual trading volumes that themselves guarantee Decentralization. Game Theory solves the day. Additionally, a portion of every move that happens on top of BabylonSwap goes to the Scribes as mentioned above. The level of decentralization will perpetually keep increasing as the size of the network keeps increasing. Scaling up increases the network’s size which increases the network’s decentralization. The more the network scales up the more decentralized it gets. Thanks to The Dynamic Block Limit mechanisms the network is maximally decentralized at all times.<br />

                            - Security: Brave New Babylon is maximally decentralized because scaling up causes the network to get increasingly more decentralized. Brave New Babylon is a unique form of DAG (Directed Acyclic Graph) that perfects the performance and security of the Blockchain. Brave New Babylon uses a revolutionary Consensus Mechanism that insures perfect Security and requires a hacker to take control of 85% of the network to be able to attack the network. The Brave New Babylon Consensus Mechanism is a Leaderless Consensus Protocol that insures Instant Finality of Transactions (requiring a few milliseconds to settle on-chain). Transactions made on the Brave New Babylon Blockchain are instantly settled On-Chain unlike Bitcoin and Ethereum for example where this can often take several hours based on the data we have from the previous decade. In simplified words the Brave New Babylon Consensus can be summed up as follows:<br />

                            The Brave New Babylon network consists of a large number of nodes. Each of these nodes can cast one of these three votes: Neutral, True, False. Each node starts as Neutral until it is asked to vote on the new block where it should either vote True or False. That vote becomes the node’s Chosen Vote in the network. At this point the node queries other random nodes in the network and creates a Queried Network. If the queried nodes are still Neutral they will adopt the node’s Chosen Vote. If the majority of the queried nodes have the Chosen Vote the node takes no action. If the majority of the queried nodes have the Opposite Vote the node will Flip to the Opposite Vote and now the Opposite Vote will become the Chosen Vote of the node. Multiple Rounds of Querying will occur with multiple random nodes until the majority of the Brave New Babylon network has the same Vote and everyone is on the same page. The side with the most support ends up winning at the end. Mathematics insure the inevitability of this outcome. This process guarantees reaching consensus.<br />

                            Brave New Babylon momentarily starts using a Short Memory by giving each node a Counter. This per-node counter stores how many consecutive Rounds of Querying gave the same Chosen Vote. A node accepts the current Vote when its counter exceeds β which is a preset security parameter.<br />

                            (1) Each node maintains a counter cnt;<br />

                            (2) Upon every Chosen Vote change, the node resets cnt to 0;<br />

                            (3) Upon every successful consecutive Round of Querying that gave the Chosen Vote, the node increments cnt;<br />

                            Simply put, for every Round of Querying that returns the same Chosen Vote, the counter adds +1. Every time the node flips its Vote, the counter resets to 0. When the counter reaches a preset high enough number it will lock-in at this level and no longer flip or query. This Locking creates an ending period to the querying cycle.<br />

                            The above Memory is Momentary and Short. Right the above process the network’s nodes begin to have a persistent Memory by creating a State of Confidence. The Confidence Counter holds a longer Memory than the earlier Counter, changing based on its confidence in past Rounds of Querying instead of relying only on the node’s consecutive results.<br />

                            Blocks that were confirmed via the Brave New Babylon consensus protocol are stored in a LAG data structure called the Brave New Babylon Blockchain. Brave New Babylon is maximally-scalable on node count, optimally fast, and fully decentralized.<br />

                            Going back to our Blockchain Trilemma, Brave New Babylon requires controlling an impossible 85% of this maximally-scalable network to be able to attack it. This makes Brave New Babylon maximally secure at all times.<br />

                            - Scalability:<br />

                            The above Model guarantees infinite scalability. Brave New Babylon is the infrastructure layer of the decentralized internet. Through the Antikythera Console people not only can navigate the Antikythera internet but they can also create web3 sites and dapps. Antikythera Labs is capitalizing on this infinite scalability to build advanced technological solutions that were never possible before.

                            <br /><br />

                            The Antikythera Internet: Via the Antikythera App users can allow the App to work on the background as a Hotspot that shares the Antikythera internet with other devices. Hotspot providers receive a portion of the Trade Fee of BabylonSwap. The Antikythera App users can turn their devices into Antikythera Hotspots that share access to the Antikythera network and receive a never-ending stream of revenue from BabylonSwap for doing it. Antikythera Hotspots can be turned on at any time in the Antikythera App via the tab “Hotspot”. Users will be asked to allow the app to run at the background as an Antikythera Hotspot and they should accept that to be eligible to receive the revenue stream from BabylonSwap.

                            The following is the exact ready-to-deploy roadmap of the Antikythera Mega Project by Antikythera Labs (leading dev team of the Brave New Babylon Network). Unlike other devs working on other blockchains we are NOT restricted by anything because Brave New Babylon is the only scalable public blockchain in the world.

                            Everything mentioned below is fully decentralized and built 100% on top of the Brave New Babylon Blockchain & fully running before Christmas 2023

                            Ruby is a sharp-looking gender-neutral Avatar made of Carbon Nanotubes (Or Aluminium). Ruby is a dynamic machine with dynamic arms and legs and a unique esthetic charm.

                            Avatar Ruby exists in both the Ruby Metaverse and the Real Universe.

                            <br /><br />

                            - The 6 native forms of The Antikythera Downloadable App are:<br />

                            .pkg<br />
                            .exe<br />
                            .msi<br />
                            .dmg<br />
                            .ipa<br />
                            .apk<br />

                            - Brave New Babylon Blockchain is accessible via Antikythera App because The Antikythera Downloadable App in itself is a Wallet on top of The Brave New Babylon Blockchain.<br />

                            - The Antikythera Downloadable App contains the following Sections:<br />

                            (1) Wallet: Brave New Babylon Wallet<br />

                            (2) BabylonSwap: Contains everything inside the BabylonSwap web3 app on top of Brave New Babylon<br />

                            (3) Scribe: Explained Above<br />

                            (4) Computing Power: Explained Above<br />

                            <br /><br />

                            (5) Social Media: (Structured as below)<br />

                            - Profile :<br />

                            My Profile:<br />
                            (Texts, Videos, Audio)<br />
                            <br /><br />
                            Settings:<br />
                            (Public vs Private personal Profile)<br />
                            (Hide vs Allow Messenger messages from other Profiles)<br />

                            - Friends<br />

                            My Friends - Check Profile or Start Messenger or Delete Friend<br />

                            Add Friend - Enter Friend Username - Send Request<br />

                            Requests - Accept Button for each Request<br />

                            - Messenger : Conversation List<br />

                            <br /><br />

                            (6) Console : (Structured as below)<br />

                            - Desk: Console Desktop with KytheraOS<br />

                            - Antikythera: 3D Open World with CrossFire Zone + Cabin Wood For Layered Teleportation + Metaverse where individuals and businesses can live and prosper and also operate locations in which users can Externally Teleport from the Antikythera Metaverse to any other Metaverse belonging to that business or individual.<br />

                            - Antikythera Browser: Kythera Internet & DNS Internet<br />

                            - Antikythera Studio: CAD Studio & Film Studio & MoorishScript<br />
                            <br />

                            (7) App Help: (One Page With Text & Graphs & Pictures)
                            <br /><br />

                            (8) Hotspot: Explained Below

                            <br /><br />

                            000 Hotspot Providers:<br />

                            0.005% of the Swap Fee of BabylonSwap goes to the Hotspot Providers of The Antikythera Internet.<br />

                            After clicking Hotspot the App will ask for your permission to run on the background of your operating system and use your device’s built-in Hotspot Router to share access to the Antikythera Internet with other devices located in the same geographical area.<br />

                            Regardless of the device used to share the Antikythera Internet, the automated smart contract that pays the Hotspot Providers distributes the reward proportionally based on the number of peer devices the Providers shared the Antikythera Internet with.<br />

                            000 Console.<br />

                            The Antikythera App supports TouchScreen Technology ONLY. For everything inside the Antikythera App that uses TouchScreen technology, if you are using a device that does not support TouchScreen Technology, you will have to pair your device with a TouchScreen device via the Antikythera App.<br />

                            The Metaverse of Antikythera is accessible only through TouchScreen devices or the Ruby VR Kit. You can visit the App Help section inside Antikythera App for the exact use instructions.<br />

                            MoorishScript allows you to easily create dApps on top of the Antikythera internet and the DNS internet.<br />

                            Inside MoorishScript there is a Show or Hide Button which prompts the MoorishScript keyboard. The TouchScreen Keyboard consists of 4 lines of the Moorish Aramaic letters, 12 letters in each of the 3 upper lines and 2 letter in the remaining line at the bottom left corner followed by the numbers & special characters button followed by a return button followed by a rectangular space button followed by a delete button followed by an empty space in the bottom right corner of the screen where the Show or Hide Button is situated. You can visit the Help section of MoorishScript for the exact use instructions.<br />

                            Moorish Aramaic is the only language inside MoorishScript<br />

                            Moorish Aramaic Alphabet Scythe (33 columns - 38 Letters).<br />

                            أ & ا & إ & ئ & ؤ & آ
                            ء<br />
                            ب<br />
                            پ<br />
                            ت<br />
                            ث<br />
                            ج<br />
                            چ<br />
                            ح<br />
                            خ<br />
                            د<br />
                            ذ<br />
                            ر<br />
                            ز<br />
                            س<br />
                            ش<br />
                            ص<br />
                            ض<br />
                            ط<br />
                            ظ<br />
                            ع<br />
                            غ<br />
                            ف<br />
                            ڤ<br />
                            ق<br />
                            ك<br />
                            ل<br />
                            م<br />
                            ن<br />
                            ه<br />
                            و<br />
                            ي<br />
                            ة<br />
                            <br />
                            Example:<br />

                            ئسرائيل<br />
                            ايسرائيل<br />
                            إيسرائيل<br />
                            ئيسرائيل<br />
                            ءيسرائيل<br />
                            إسراءيل<br />
                            ئسراءيل<br />
                            ايسراءيل<br />
                            إيسراءيل<br />
                            ئيسراءيل<br />
                            ءيسراءيل<br />

                            Since Moorish Aramaic is based on an Oral Culture: The written form always follows the oral form, not the opposite. Today Moorish Aramaic is the main spoken dialect inside the Kingdom of Morocco.<br />

                            Moorish Aramaic is an Atomic Language.<br />

                            •000 Excerpts from the Moorish Aramaic Dictionary explained in English alphabet:<br />

                            - The Ka Rule of The Present Tense:<br />

                            (1st + 3rd) Singular & Plural<br />

                            Ka + Verb in masculine imperative = Present<br />

                            (2nd) Singular & Plural<br />

                            Kat + Verb in masculine imperative = Present<br />

                            - The Easy Past Tense:<br />

                            1st singular:<br />

                            masculine imperative + t = Past<br />

                            2nd singular:<br />

                            masculine imperative + ti = Past<br />

                            3rd singular masculine:<br />

                            masculine imperative = Past<br />

                            3rd singular feminine:<br />

                            masculine imperative + at = Past<br />

                            1st plural:<br />

                            masculine imperative + na = Past<br />

                            2nd plural:<br />

                            masculine imperative + tou = Past<br />

                            3rd plural:<br />

                            masculine imperative + ou = Past<br />

                            -- The Ghadi Rule of the Future Tense:<br />

                            1st & 3rd singular + 1st & 2nd & 3rd plural:<br />

                            Ghadi + masculine imperative = Future<br />

                            2nd singular:<br />

                            Ghadi + t + masculine imperative = Future<br />

                            - The Ma-Sh Rule of the Negative Past:<br />

                            1st & 3rd singular + 1st & 3rd plural:<br />

                            Ma + Easy Past + Sh = Negative Past Form<br />

                            2nd singular & plural:<br />

                            Mat + Easy Past + Sh = Negative Past Form<br />

                            - The Ma-Sh Rule of the Negative Present:<br />

                            1st & 3rd singular + 1st & 3rd plural:<br />

                            Ma + Ka Rule of Present + Sh = Negative Present Form<br />

                            2nd singular & plural:<br />

                            Mat + Ka Rule of Present + Sh = Negative Present Form<br />

                            - The Ma-Sh Rule of the Negative Future:<br />

                            1st & 3rd singular + 1st & 3rd plural:<br />

                            Ma + Ghadi Rule of Future + Sh + masculine imperative = Negative Future Form<br />

                            2nd singular & plural:<br />

                            Ma + Ghadi Rule of Future + Sh + t + masculine imperative = Negative Past Form<br />

                            <br /><br />

                            Our mission explained via theological words with a mixture of Moorish Aramaic & Arabic:<br />

                            هادي واحد الفكرة ماعارفينهاش عامة المؤمنين إيلا قنعاتك بارطاجيها مع مؤمنين آخرين راه هادشي اللي باغي الله بغانا نضويو على هادوك اللي فالضلام<br />

                            بزاف ديال الناس كايسحاب ليهم التوقيت الفيزيائي (الوقت من منظور الأشياء المخلوقة الحية) ديال يوم القيامة، اللي هو يوم نهاية تحكم الشّرّ بالأرض، كايسحاب ليهم هاد التوقيت موجود دابا في العالم الفيزيائي المخلوق. لهاد السبب منين كانقولو لشي مؤمنين راه حنا خدامين كانردو الأرض جنة كايقولو لينا ربي اللي غايديرها ماشي حنا و حنا غير "مفعول به" و هادا خطأ فادح بزاف في فهم الله<br />

                            كايبداو لهدرة بالحقيقة كايقولو "ربي عارف التوقيت الحقيقي ديال يوم القيامة" اللي هي الحقيقة و هاحنا غانفهمو شنو هو التوقيت الحقيقي و شنو هو الفرق بينو و بين التوقيت الفيزيائي، و لكن للأسف عامة المؤمنين مافاهمينش شنو كاتعني هاد الجملة بالضبط و هادشي كايأثر فحياتهم بطريقة سلبية بزاف<br />

                            في علم الفيزياء كاينة واحد الظاهرة سميتها التشابك الكمّي اللي فهمناها منين راقبنا على المستوى الميكروسكوبي المجهري المجسمات الصغيرة جدا التي تشكل ما نسميه الوجود اللي هو أي حاجة اللي كاينة فهاد العالم. هاد المجسمات الصغيرة لقيناها كاتدير واحد الحاجة ماعمرنا شفناها قبل. لقينا هاد المجسمات متشابكة كمّيا مع بعضها البعض. هاد المجسمات كايبقاو مرتبطين، و إيلا درنا أي تغيير فالمجسم الأول، في نفس اللحظة كاتتغير الحالة ديال المجسم الآخر اللي مرتبط معاه، واخا المجسّم الأول يكون فالمغرب و المجسم الآخر نديوه لجنوب إفريقيا<br />

                            زدنا قلّبنا كثر و حنا نلقاو أن هاد المجسمات أصلا ماكايناش (لا وجود لها) حتا كانحسبوها واش كاينة ولا لا، عاد كاتبان، واخا ماكانتش كاينة قبل. منين ماكانحسبوهاش ماكاتكونش فحتا شي مكان. حرفيّا حنا هوما اللي كانعطيو لهاد لمجسمات شكل و محتوى و مكان فيزيائي (معلومات). وقتما جينا أنا و ياك نديرو قياس و نعبرو الحسابات ديال شي حاجة صغيرة بزاف، القياس ديال تجمّع المجسمات الصغيرة اللي غادي تلقا نتا غايكون مختلف تماما على اللي غانلقا أنا. نحن من يقرر ماهيّة العالم باستعمال عقلنا الناطق (لّوچوس ديالنا)<br />

                            يعني من المنظور ديال الله (المنظور الحقيقي) هاد يوم القيامة مازال ماموجودش، ولكن حنا غادي نديرو يوم القيامة و غايولي كاين موجود شي نهار في المستقبل الفيزيائي<br />

                            الله خارج مجال الوقت. الوقت هو تغيّر حالة هذه المجسمات الصغيرة داخل المجال الفيزيائي (الإنتروبيا). وقتما درنا شي حاجة (زيادة الإنتروبيا) في العالم و تّافقنا عليها و قرّرناها بعقولنا الناطقة كاتولّي موجودة. هادشي اللي كايقول العلم الحقيقي و الجامعات العالمية كلها متفقة مع كل كلمة قلنا حتال دابا<br />

                            الله خارج الوقت (خارج الإنتروبيا الفيزيائية) و عقله الناطق (اللوچوس = كلمة الله) خلق الكون و كل ما فيه. عقله الناطق اللامحدود يعرف كل فكرة ممكنة و يعرف كل السيناريوهات التي ممكن أن يتسبب بها كل مخلوق و ما يدور في قلب كل مخلوق (روحه الحكيمة تعرف ما في كلّ القلوب). هذه المعلومات تجعل حكمته مثالية و بالتالي الله بحكمته المطلقة اللامحدودة و بقدراته التحليلة اللامحدودة يعرف الطريقة الكاملة التي سينتهي بها حكم الشّرّ على الأرض و سياقها الكامل و بالتالي يعرف التوقيت الحقيقي ليوم القيامة (كامل حقائق يوم القيامة = سياقه التاريخي الجغرافي الفيزيائي الكامل + كل الحقائق الموجودة في العالم الحقيقي). أمّا التوقيت الفيزيائي فهو مازال غير موجود أصلا (الوقت الفيزيائي = الإنتروبيا الفيزيائية). الله تعالى يعرف كل ما هو موجود في العالم الفيزيائي و كل ما هو موجود في العالم الحقيقي بما في ذلك كل معلومة موجودة عن كل مخلوق و كل تحليل ممكن لكل معلومة و ماهيّة الحق في كل شيء موجود في العالم الفيزيائي و الحقيقي. كاين فرق مطلق بين الموجود و الغير موجود. التوقيت الفيزيائي ديال يوم القيامة مازال ليس موجود حنا اللي غانردّوه موجود<br />

                            و بالتالي نستنتج أن هاد يوم القيامة حنا اللي غانديروه بالعقول الناطقة و بالحرية المطلقة ديالنا اللي عطانا الله و هو غادي يسهّل علينا الأمور كيف ما واعدنا غادي يدير إيلا صلّينا من قلبنا و غادي يتدخّل غير منين ضروري خاصو يتدخل، حيت كيفما القوّة ديالو و القدرة ديالو عندهم صفة الكمال، العدل ديالو و الحب ديالو حتا هوما عندهم صفة الكمال. هادشي علاش عطانا النعمة ديال الحرية المطلقة + النعمة ديال العقل الناطق<br />

                            - Avatar Ruby:<br />

                            Ruby in the Antikythera Metaverse:<br />

                            Antikythera Labs has every reason to believe that the Antikythera Mechanism recently found by archeologists was a Portal to the Antikythera Metaverse. As such, Antikythera Labs created a 2.0 version of the Antikythera Metaverse.<br />

                            You can interact with Antikythera via your TouchScreen Device or your TouchScreen Paired Device or the Ruby VR Kit.<br />

                            The Antikythera Metaverse is a beautiful island with an Infinite Sky and a Map that scales down Infinitely by automatically launching new Layers with Infinite Skies that contain the same map (with the same Lands & Buildings & Flying Objects of the main map). So if you own a land in the main map, you own a land in every map layer in the Antikythera Metaverse. There are 4 Elevators (1 at every corner) inside every user’s Command Center (Personal Cabin Wood):<br />

                            First Elevator: Allows avatars to move between Layers.<br />

                            Whenever a Layer has a million Ruby avatars (or a million of any item Category) that layer stops accepting more avatars (or items) and a new layer is unlocked for the Ruby Avatars to populate.<br />

                            2nd Elevator: Allows access to the Antikythera Zero-Fee P2P ANTI To NFT & NFT To ANTI Marketplace where people can trade between Antikythera-based non-fungible assets (NFTs) and ANTI.<br />

                            3rd Elevator: Allows access to Shoot: Antikythera’s in-built Football Simulation Video Game that uses TouchScreen Technology. In Shoot you can play 1v1 FIFA-like Simulated Football games with other players using a collection of all the famous Professional Football Teams and all their Famous Players between 1920 and 2020. Shoot Players can bid the same amount of ANTI on a game and the winner takes it all.<br />

                            4th Elevator: Allows access to the Antikythera University<br />

                            - The synopsis of the Antikythera Metaverse:<br />

                            In the Antikythera Metaverse, the most advanced renewable energy is Antikythera (ANTI).<br />

                            Antikythera (ANTI) is the native Token of the Antikythera Ecosystem which is the beating heart of Brave New Babylon. ANTI is won by the winners of the Battles that take place in the CrossFire Arena (From BabylonSwap). ANTI functions as the only source of Energy and Material in Antikythera.<br />

                            Ever since the 3D printing revolution in the early 2000s, humanity has been relying solely on 3D printers to create things. Ruby Avatars are no different.<br />

                            The 3D printers available in the market of Antikythera are all compatible with ANTI. You put the right amount of ANTI inside the machine, you upload the blueprint to the 3D printer which exists at the center of your Wood Cabin using your in-built Ruby Watch, and the 3D printer creates that item for you.<br />

                            Ruby Watch (a watch that projects your Command Center, which is your main personal computer, as a square-shaped hologram with 9 circles in front of you to browse and interact with the Internet of Things through The Antikythera Internet) is a native squared black screen located in the upper part of the right hand of Ruby.<br />

                            Antikythera (ANTI) changes its texture when exposed to heat, thus it serves as the only Renewable Source of Energy and Material used in every manufacturing industry in the Antikythera Metaverse.<br />

                            Using ANTI in the 3D Printer inside your Cabin Wood allows the Ruby Metaverse Avatars to build the following item Categories:<br />

                            Flying Objects<br />
                            Houses & Buildings<br />
                            Cars<br />
                            Ships<br />
                            Trucks<br />
                            Buses<br />
                            Guns<br />
                            Bullets (For Guns)<br />
                            Magnetic Pins (Standard Size)<br />
                            Mobile Lifts (Standard Size)<br />
                            Screens (Any Size)<br />
                            Sofas (Any Size)<br />
                            Tables (Any Size)<br />
                            Papers (Any Size)<br />

                            Mobile Lifts are thin Squares that you can take anywhere in the Antikythera Metaverse. You can use the three commands “Ascend”, “Descend”, and “Stop”, by connecting your Ruby Watch to the Mobile Lift.<br />

                            Magnetic Pins automatically stick to any surface in the Antikythera Metaverse. They allow you to have Paintings and other Papers exhibited on the walls of your building.<br />

                            Players use the Ruby Avatar to interact with the Ruby Metaverse. They can learn how to create blueprints that can be uploaded to the 3D Printers by attending the Antikythera University inside the Antikythera Metaverse. The Antikythera University allows Ruby to enter a small Cinema Room with a comfortable sofa where the Ruby can interact with the University’s Library using its Ruby Watch and watch Video Tutorials to learn how to create and upload CAD Blueprints (from Antikythera Studio) to 3D Printers for the purpose of creating new items.<br />

                            Every new item built in the Antikythera Metaverse is an NFT on top of the Ruby Blockchain<br />

                            Note: Your can upload Pictures in PNG, Videos in MP4, Text Files, CAD Files, and NFTs, to your Ruby Watch using the Antikythera App.<br />

                            1 ANTI allows users to build material with the following pricing:

                            1 ANTI = 1 Ruby Height of Material = Height of One Ruby in Printed Material with Standard Thickness

                            The pieces of Land are limited in supply and they are NFTs. Every piece of land exists simultaneously in multiple layers (since every layer can hold only up to 1 million Ruby Avatars and 1 million items of each item category) which means the number of eye-balls on your piece of Land in the Antikythera Metaverse will keep perpetually increasing and will keep scaling up infinitely (unlike traditional real estate), this factor alone is expected to make these pieces of land and the buildings on top of them more and more valuable as the Antikythera Metaverse scales up to infinity.

                            Legal Height = Height in the sky above which users can populate with their Flying Objects and become Indigenous to their Personal Air Space = 10 Ruby Heights in the sky.

                            Note: CAD Studio is the native software for building Blueprints in the Antikythera Metaverse. CAD Studio can be found in any Ruby Watch and in the Antikythera App. You can master CAD Studio by attending the Universities of the Antikythera Metaverse.

                            -- The LifePlay & GamePlay of The Antikythera Metaverse:

                            You interact with Antikythera through a First Person Perspective both in Antikythera City and the CrossFire Arena. The Antikythera Metaverse feels like a First Person Shooter Game. When you signup or login with your Antikythera App, the first Metaverse place you find your Ruby in is at the center of your small Wood Cabin standing on your Personal 3D Printer. This Wood Cabin has 4 Elevators in each of its 4 corners. The first Elevator is a Teleportation Portal that can Teleport users to the other layers of the Antikythera Metaverse Map.

                            The Wood Cabin has two doors opposite to each other. One leads to the Antikythera Metaverse (livable digital world) while the other leads to the CrossFire Arena (PUBG-like game).

                            The Water in the Ruby Metaverse behaves in a similar way to the Dead Sea in Jordan. This is due to the high concentration of Antikythera Particles in the water. This means an Avatar swimming in the water can never drown.

                            If an Avatar remains in Antikythera City and is not used for 3 days, the Avatar gets evaporated and no longer exists in the Antikythera Metaverse until it is reactivated by logging in with the same wallet after which point you’ll find yourself in your Wood Cabin.

                            The Rewards:

                            As mentioned above, BabylonSwap generates an endless revenue to the Antikythera Metaverse. The perpetual stream of revenue coming from BabylonSwap is split equally between the 5 winners of the 5 vs 5 battles that take place in the CrossFire Arena.

                            In Antikythera, a President is voted for once every 30 days. The President has authority to send Ruby Avatars to Jail. Jail in the Antikythera Metaverse is a completely dark realm where the Avatar is sent for a specific period of time during which the Avatar can’t see nor hear nor interact with anything. Presidents are voted for once every 30 days: the candidate who receives the highest vote count by all Antikythera users is declared President for the next 30 days. Voting is open all the time to the Antikythera population.

                            Real Life Ruby:

                            Real Life Ruby is a physical Ruby Avatar that exists on Earth. The system allows you to use your device or put-on a VR set to be able to move and interact with people using Real Life Ruby from a First Person Perspective. So you can be in Paris and your Ruby is in New York and you can move with your Ruby across the streets of New York and do anything a human would normally do acting as Ruby while you are still physically in Paris.

                            Ruby Kit:

                            To control the Ruby Avatar in both the Metaverse and the Universe you can use The Ruby Kit. The Ruby VR Kit consists of the two following devices:

                            -- The Ruby Carpet: An electronic rectangular Carpet that works like a treadmill (the treadmill is automated and it interacts with the feet movement to keep the user at its center). At every corner of the carpet there are 4 small Pyramids (size of a human hand) and each Pyramid has one small circular Camera at the center of the face that points towards the center of the Carpet. The 4 Pyramids are located at the 4 corners of the electronic rectangular Carpet. The Pyramids use perfected Kinect Technology to map details. As the player starts moving on top of the electronic treadmill Carpet, the treadmill starts moving automatically towards the opposite direction of the move of the player who always remains at its center. Thanks to the Cameras of the Pyramids, the Carpet can calculate the exact distances the player travels and it adjusts by moving the electronic treadmill carpet to the opposite direction based on the same calculations so that the player always ends up remaining at the center of the electronic carpet. The above is fully secured by Smart Contract Automation on top of Kythera.

                            -- The Ruby Headset: A cool-looking Headset (with the same esthetic motif of Ruby’s head). The Ruby Headset is used to see through the eyes of Ruby, talk as ruby and hear what Ruby hears.

                            Medical Technology:

                            Cancer Spiders:

                            The Ruby Cancer Spiders are microscopic machines that look like spiders under a telescope with 8 thin legs that are used to interact with cells. Cancer cells are abnormal cells that divide continually and flood the system with other abnormal cells and form tumors. The Ruby Cancer Spiders are Artificially Intelligent Machines that are programmed to map the human body and identify cancer cells. It has been proven that the pHe of cancer cells is significantly more acidic than normal cells. Generally, pHe values of the normal tissues (brain tissues, subcutaneous tissues, etc.) are in the range of 7.2–7.5. However, pHe of tumour cells is significantly more acidic in the range of 6.4 to 7.0. The Cancer Spiders take advantage of this significant distinction to target and treat the cancer cell using their perfected chemical cancer therapy. The process is pain-free and straightforward: The cancer spiders are injected in the blood stream, using the printed Syringe the Spiders are printed inside of, and everything takes care of itself from there. Cancer spiders are extremely small in size that they can penetrate any tissue in the human body which allows them to completely heal any type of cancer. The cancer spiders are fully decentralized dapps that use Smart Contract Automation on top of Kythera.

                            Dementia Spiders: The Ruby Dementia Spiders target the microscopic clumps of the protein beta-amyloid (Plaques) that cause Dementia and the tau-rich microscopic fiber knots called Tangles which also cause Dementia. Similar to how Cancer Spiders target cancer cells, Dementia Spiders target Plaques and Tangles. Dementia Spiders use Magnetic Resonance Imaging (MRI) to identify Plaques (clusters that form in spaces between nerve cells) and Tangles (microscopic fiber knots of the brain cells). They then use their microscopic legs to apply their perfected chemical dementia therapy which results in the total elimination of any Plaques and Tangles on the brain. The patient is fully healed from Dementia after the session is completed. The Dementia Spiders are fully decentralized dapps that use Smart Contract Automation on top of Kythera.

                            Life Extension Spiders: The Life Extension Spiders are microscopic IoT Devices that you can pair with your Real Life Ruby using your Ruby Watch (Squared TouchScreen on the wrist of Real Life Ruby). The Life Extension Spiders use Magnetic Resonance Imaging (MRI) and perfected Fluorescent Mapping to read and save the exact brain activity of the person while Real Life Ruby moves. This allows your Personal Ruby Avatar to become paired to you which will make it possible to use Life Extension Ruby later to extend the number of your days on earth.

                            Note: After 10 days of circulation throughout the bloodstream, the Spiders (Cancer, Dementia, Life Extension) automatically self destruct using a compatible chemical therapy that turns them into microscopic dust that gets eliminated by the Anti-Bodies.

                            -- Dr Ruby:

                            Just like the Cancer and Dementia and Life Extension Spiders which people can print using any standard 3D Printer by pasting the Open Source Blueprints Kythera Labs is offering to the world via the internet, people can also print Dr Ruby which is a rectangular Box where people can lie on their back and get operated on by a smart contract automated surgeon. Dr Ruby is a Cryo-Conservation Machine and each part in it is designed to make sure the person remains safe at all times. Dr Ruby maps the person and the content of the body in real time using perfected mapping technologies.

                            Cryostasis is a procedure in which a person is frozen in a preset low temperature. The human cells contain water which allows Dr Ruby to successfully keep someone intact for any amount of time until the person is de-frozen again.

                            Synthetic Ruby Heart: In case there are any Heart anomalies in a person they can use Dr Ruby by sleeping in the comfortable bed inside the Dr Ruby Box. In case the heart doesn’t get back to functioning correctly with electric shocks applied by the Box then Dr Ruby will automatically cryogenically freeze the person and replace the heart of that person with a new Synthetic Heart that works like a pump programmed to cause the right blood pressure in the bloodstream of the body to keep it alive. Everything is 100% guaranteed with Smart Contract Automation on top of Kythera. Each Dr Ruby Box can create One Synthetic Ruby Heart. A new Dr Ruby Box ought to be printed if more than one synthetic heart is needed.

                            Synthetic Ruby Lung: In case there are any Lung anomalies in a person they can use Dr Ruby by sleeping in the comfortable bed inside the Dr Ruby Box. In case the person’s Lungs are no longer functional in a way that will maintain the person alive then Dr Ruby freezes the person cryogenically and replaces the original lungs with the Synthetic Ruby Lung which is a Synthetic Chamber that behaves exactly like normal healthy lungs and gets connected through micro-surgery to the rest of the body. Each Dr Ruby Box can create One Synthetic Ruby Lung. A new Dr Ruby Box ought to be printed if more than one synthetic lung is needed.

                            Life Extension Ruby:

                            During their use of their Real Life Ruby Avatars, people can use Life Extension Spiders to pair a Ruby Avatar to the person’s Brain Activity and thus the person becomes able to move the Ruby Avatar directly by willing it (just like your own hand moves instantly when you will it)

                            Going back to Dr Ruby, in case other parts of the body are damaged in a way that will definitely cause the person’s death, people can activate Dr Ruby Life Extension Mode. People should add the Black Box situated inside their Personally Paired Ruby Avatar (the Black Box is the Central Unit of the Ruby Avatar where all your Ruby data is stored) to the Dr Ruby Box in the appropriate Black Box Chamber. Dr Ruby then creates a Ruby Avatar with the same Black Box inside of it (meaning the new avatar behaves exactly like your paired avatar) and then Dr Ruby performs a microscopic surgery that connects that newly created Ruby Avatar with the person via the neck area. When the operation is completed the person can now continue living life with the body of a Ruby while maintaining their human neck & head. Each Dr Ruby Box can create One Life Extension Ruby Avatar. A new Dr Ruby Box ought to be printed if more than one Life Extension Ruby is needed.

                            Proto-Food Cubes & Proto-Drink Capsules:

                            Because enjoying delicious food and drinks is essential for any human being including those using Life Extension Ruby, Dr Ruby is also a 3D Printer where you can put material and print things. Dr Ruby comes with Three Capsules. You put the food or drink in the first Capsule, the second Capsule is where you get the Proto-Food (small cubes of food) or the Proto-Drink (a drinkable liquid), the third Capsule is the trash capsule. There are phospholipids in the following foods and drinks. The Dr Ruby technology extracts, reads, fetches, reshapes, and transforms these phospholipids to create new organic cells. All you have to do is inject a cube or a capsule (with the Dr Ruby Specifications printed on Dr Ruby based on Measurement Standards widely-used in 2020) of that specific food or drink in the first capsule in Dr Ruby and everything takes care of itself from there.

                            The full encompassing List of Raw Foods and Raw Drinks convertible to Proto-Foods and Proto-Drinks via Dr Ruby:

                            1- Potatoes<br />
                            2- Tomatoes<br />
                            3- Carrots<br />
                            4- Onions<br />
                            5- Garlic<br />
                            6- Broccoli<br />
                            7- Cauliflower<br />
                            8- Eggplant<br />
                            9- Ginger<br />
                            10- Spinach<br />
                            11- Coriander<br />
                            12- Celery<br />
                            13- Cucumber<br />
                            14- Pumpkin<br />
                            15- Sweet Potatoes<br />
                            16- Peas<br />
                            17- Mint<br />
                            18- Radish<br />
                            19- Mushroom<br />
                            20- Olive<br />
                            21- Beetroot<br />
                            22- Lettuce<br />
                            23- Okra<br />
                            24- Courgette<br />
                            25- Calabash<br />
                            26- Corn<br />
                            27- Cabbage<br />
                            28- Turnip<br />
                            29- Pinto Beans<br />
                            30- Green Beans<br />
                            31- Black Beans<br />
                            32- Green Pepper<br />
                            33- Red Pepper<br />
                            34- Yellow Pepper<br />
                            35- Orange Pepper<br />
                            36- Basil<br />
                            37- Parsley<br />
                            38- Tea<br />
                            39- Apples<br />
                            40- Oranges<br />
                            41- Lemons<br />
                            42- Strawberries<br />
                            43- Raspberries<br />
                            44- Blueberries<br />
                            45- Blackberries<br />
                            46- Pineapples<br />
                            47- Kiwi<br />
                            48- Peach<br />
                            49- Apricot<br />
                            50- Pears<br />
                            51- Watermelons<br />
                            52- Grapes<br />
                            53- Cherry<br />
                            54- Fig<br />
                            55- Coconut<br />
                            56- Pitaya<br />
                            57- Jackfruit<br />
                            58- Avocado<br />
                            59- Bananas<br />
                            60- Plum<br />
                            61- Pomegranate<br />
                            62- Papaya<br />
                            63- Dates<br />
                            64- Mango<br />
                            65- Melon<br />
                            66- Mandarin<br />
                            67- Black Pepper<br />
                            68- While Pepper<br />
                            69- Paprika<br />
                            70- Cumin<br />
                            71- Thyme<br />
                            72- Salt<br />
                            73- Curry Powder<br />
                            74- Oregano<br />
                            75- Cinnamon<br />
                            76- Chili<br />
                            77- Turmeric<br />
                            78- Saffron<br />
                            79- Clove<br />
                            80- Cardamom<br />
                            81- Fish<br />
                            82- Chicken<br />
                            83- Beef<br />
                            84- Lamb<br />
                            85- Shellfish<br />
                            86- Duck<br />
                            87- Veal<br />
                            88- Turkey<br />
                            89- Rabbit<br />
                            90- Ostrich<br />
                            91- Pork<br />
                            92- Water<br />
                            93- Cooking Oil<br />
                            94- Milk<br />
                            95- Honey<br />
                            96- Coke<br />
                            97- Soda Water<br />
                            98- Cereal<br />
                            99- Sauerkraut<br />
                            100- Marshmallow<br />
                            101- Soy Beans<br />
                            102- Broad Beans<br />

                            You don’t need to bring your apple every time you want to create a proto-food that tastes like your apple. Instead, you just save your apple’s Taste on your Dr Ruby which means next time Dr Ruby will only use the necessary amount of Phospholipids inside the first capsule to recreate your saved Taste + the Nutrients inside the first capsule + The Texture Data inside the first capsule in order to create your fresh apple-tasting small cubes of proto-food.<br />

                            Data collected by Dr Ruby from the Raw Food and Raw Drink:<br />

                            (1) Taste<br />
                            (2) Texture<br />
                            (3) Nutrients<br />

                            Thanks to the Perfected Synthetic DNA Technology of Dr Ruby, you can save the Taste, Texture, or Nutrient of your raw food and then print new proto-food that shares the same saved Taste or Texture or Nutrient. This will allow to create new delicious kinds of food for humanity.<br />

                            The newly-created DNA has a perfected in-built chemotherapy system that fully destroys, in coordination with the immune system and the bloodstream, any Waste of the proto-food or the proto-drink that’s not assimilated by the body at the Small Intestine level and at the Large Intestine level. This process is never felt by the human body.<br />

                            Time has arrived for humans to stop eating and drinking polluted dirt residing in a Fallen Earth. Proto-Foods and Proto-Drinks are the future of humanity.<br />

                            ••••••••••••••••••••••••••••••••••••
                            <br />
                            Liga: The Smart League of Football & Science<br />

                            Being the only scalable blockchain in the world Brave New Babylon is introducing the concept of Smart Leagues with its LIGA Token<br />

                            Liga: Decentralized Football & Scientific Research League<br />

                            Liga is a unique Smart Contract built on top of Antikythera ecosystem. It’s a Governance smart contract governed by the Liga Team Captains and the hodlers of ANTI.<br />

                            As you can see above there is a Yield coming from BabylonSwap to Liga Match Winners which pays the winner of every football game (Match) played on top of the Liga Smart Contract. 85% of that Yield goes to the Match Winning Team Captain while the remaining 15% goes to the League Voters (those who used their ANTI via the League’s Site to Double-Check the correct Match Score to insure zero cheating). ANTI holders can also use their ANTI to bet on the Matches via the Smart Contract.<br />

                            In case of a Tie there is no payout and the Yield is added to the next Match Winner.<br />

                            The blueprint of the League Camera Device is open source and can be uploaded to any standard 3D printer of 2020 to create a Camera directly connected to the Antikythera League Smart Contract. The Device has perfected Camera specifications inspired by the iPhone 13 Pro Max. Whenever two teams click “Go Live” in their League Camera Device the feed goes live on top of the Smart Contract and instantly becomes watchable via the User Interface of Antikythera League.<br />

                            Antikythera League Smart Contract Betting Logic:<br />

                            ••••••••••••••<br />

                            (1) Team A Win<br />
                            (2) Team B Win<br />
                            (3) Tie<br />

                            When No Tie:<br />

                            (1) & (2) pay each other<br />
                            (3) pays (1) & (2)<br />

                            When Tie:<br />

                            (1) & (2) pay (3)<br />

                            ••••••••••••••••••••••••••••••••<br />

                            Ruby Face Mask<br />

                            The Ruby Face Mask is a IoT device that you can get to become fully stuck to your face when you activate Water Mode. The edge of the mask is automatically knitted to your skin using microscopic carbonic strings that keep the Ruby Face Mask fully attached to your face. The external portion of the Mask extracts Oxygen atoms from the water and uses its inbuilt microscopic system to cause the chemical reactions necessary to create breathable air for the user to breath. The Ruby Face Mask allows people to stay inside water as much time as they want. The Ruby Face Masks are equipped with in-built Infinite Energy Batteries. Whenever you deactivate Water Mode, the edge of the mask is automatically unknitted without leaving any traces visible by a human being.<br />

                            Ruby Car<br />

                            Ruby Car uses the Density of the Medium around it to keep itself stuck to the Terra Firma below it. The Ruby Car is a Sporty Car with 8 Oxygen Sensors (Similar to the one in Ruby Face Mask) on the 8 corners of the Car (4 in the upper corners & 4 in the lower corners). Every Ruby Car gives enough breathable air to 10 human beings on average. Ruby Car is a Convertible car and the rooftop (also made of carbon fiber) can be mechanically activated with a button inside the car which insures complete isolation from the outside world.<br />

                            Ruby Water Shoes:<br />

                            The Ruby Water Shoes are 3D Printable Shoes that use the Density of the Medium around them to keep themselves stuck to the Terra Firma below them. The Ruby Water Shoes can be moved by humans inside water which allows the humans to walk inside water with the same dynamics of walking on land inside earth’s atmosphere.<br />

                            Ruby Sea Home:<br />

                            The Ruby Sea Home is a transparent glass-like home made of Carbon Nanotubes. The home is a rectangular living space with 8 Oxygen Sensors (Similar to the one in Ruby Face Mask) on the 8 corners of the house (4 in the roof corners & 4 in the ground corners). Every 100 Squared Meter of living space gives enough breathable air to 100 human beings on average. The Ruby 3D Printer has a section where you can enter the number of Squared Meters you want your Sea Home to have.<br />

                            •••••••••••••••••••••••••••<br />


                            To Print any physical device from the above (Ruby Devices, Therapeutic Spiders, Proto-Food, etc) you will use our Open-Source Blueprints to print our Specialized Ruby 3D Printer via any Standard 3D Printer that uses aluminum amongst those available in the 2020 world market. The Specialized Ruby 3D Printer allows you to print the above IoT-equipped Things by connecting the printed Parts Tetris-Style. The printed Parts are given consecutive numbers by the Ruby Printer and they are connectable to each other through a Stick that’s shooting out of one of the sides of each connectable Part. That Stick has two Tubes opposite of each other shooting out of the opposite sides of the lower part of the Stick. The Stick also has two Tubes opposite of each-other shooting from the opposite sides of the upper part of the Stick. When you pinch two opposite Tubes, all 4 Tubes retract and disappear inside the Stick, this allows you to connect Parts following their consecutive number sequencing (1, 2, 3, etc) until you get the final product ready for use.<br />

                            Every one of the Energy-Requiring devices mentioned above will be equipped from the get-go with an Infinite Energy Battery.<br />

                            We will also give away as an open-source resource the blueprint of a Standard Infinite Energy Battery that anyone can print to start using instead of the current limited Standard Batteries found in the 2020 market.<br />

                            Our Infinite Battery is powered by its perfected energy-recycling technology designed to make the battery an infinite source of energy.<br />

                            •••••••••••••••••••••••••••••••••••••<br />


                            All X-Derivatives natively listed on BabylonSwap can be Cash-Settled at any moment in MoroccoX.<br />

                            Thanks to economics, MoroccoX insures correct Price Discovery of all 50 Native X Assets of BabylonSwap throughout its first decade of existence. However, it is a mathematical inevitability that one day within this first decade BabylonSwap will have maximum liquidity locked inside of it for these 50 X assets which will make MoroccoX obsolete because every one of these 50 assets will be eternally pegged and always convertible to other assets directly inside of BabylonSwap.<br />

                            MoroccoX is a CeDeFi Financial Institution that allows settling X-Derivatives in Cash and converting all 50 native X assets of BabylonSwap to FTM.<br />


                            Here is the Page Layout of The MoroccoX page inside BabylonSwap:<br />


                            •••••••••••••••••••••••••••••••••<br />



                            (The X Tokens of BabylonSwap displayed as a List)

                            -- In front of every X Token Balance there is a Button:<br />

                            Button: Settle in FTM<br />

                            (After clicking the Button you enter the Amount in Metamask and the Funds will be sent to the MoroccoX admin wallet)

                            -- When you Convert an X Token on MoroccoX:

                            1. The Asset is INSTANTLY converted to Brave New Babylon (FTM) at the Current Global Market Price (Price Discovery Happens in the Highest Liquidity Market Worldwide) of that asset when the Convert Button is clicked

                            2. Kindly wait for up to 120 hours after the withdrawal is submitted for the funds to show up in your wallet

                            -- 4 Simple Steps to Settle your MoroccoX Derivatives in Cash:

                            (1) Login with Metamask

                            (2) See Your Balance in every X Token

                            (3) When you click the Button you send your Token to the MoroccoX Wallet

                            (4) Within 120 hours you should receive your FTM in Your Wallet

                            -- If your Conversion takes more than 120 hours feel free to contact our Support Team either privately by texting the admins of the Antikythera Telegram Group or publicly by sharing your message in the chat of the Antikythera Telegram Group.<br />

                            ••••••••••••••••••••••••••••••••<br />


                            In the words of The Godfather, we designed a Blockchain Ecosystem that’s too irresistible for anybody to ever refuse.

                            Amateurs create mediocre useless crypto assets and keep begging partners to accept their crypto tokens; meanwhile, we create Antikythera and BabylonSwap and right away an endless network of partners is organically born.<br />


                            ==========================<br />


                            History of Peace:<br />


                            The Empire of Morocco started as an organized settlement in the western bay of the Euphrates around the 65th century BC. The Moorish civilization developed a unique political philosophy of societal management by influencing the political behavior of the rest of the world’s populations thanks to verbal protectorate agreements with those populations. The Moorish Empire reached its pre-historic golden age when it capitalized on a strategic coalition between the Amorites and the Sargons in Phoenicia around the 25th century BC. After establishing the mighty Mauro-Babylonian Empire, and being a group of pioneering ancient traders, they travelled throughout MENA and established great influence over the rest of the world thanks to their intellectual superiority. The people of North Africa and Middle East and Southern Europe surrounded themselves around the powerful Mauro-Roman Kingdom that used Volubilis and Memphis as its central cities until wars broke out in early AD. The travelling traders did not stop in North Africa and Southern Europe but actually extended to the Far Morocco (the Americas) and the Moorish Empire had full Power over the continent of America by the 1st century BC. The stories of Moroccans who embarked in ships heading to the Americas via the strong oceanic current of the Safi bay in Morocco are very famous across Moorish land dating back to centuries Before Christ. Moroccans discovered the continent of America and Moroccans are the Indigenous Americans on whom Plymouth Rock landed more than 2000 years later by a couple of delusional eccentric imperialists.<br />


                            By AD Byzantine Special Interests invaded the North African Region which is the central State of the Mauro-Roman Empire and it was able to maintain control over some major strategic locations in North Africa for a few decades. But in the meantime a Federation of Moorish Autonomous States made it impossible for the Byzantines to use the areas they stole in any productive way or impose the slightest political influence in them. Moroccans have always been a free people who don’t take kindly to external invasion. After the fall of the Byzantine control, Islam started in Moorish land by the Muslim-Christian prophet Mohamed and his daughter Fatima. The popularity of Islam quickly reached the Atlantic and the Far Morocco which meant the beginning of a new chapter in Moorish history which is the Mauro-Islamic Empire.<br />


                            For those of you who are not in the know, I feel compelled to inform you that Muslims, unlike today’s Orthodox Jews, believe in Christ Jesus as the Messiah of Israel and the Logos of God (كلمة الله). This makes them Muslim-Christians or Christian-Muslims since they believe in Jesus Christ and they believe in the same canonical New Testament currently followed by most Christians. Prophet Mohamed insisted throughout his earthly ministry back around 600 AD that the Evangelion of Christ can not be corrupted by the Evil Powers of this world because God the Monad is protecting it as his eternal love letter to his children. Today, thanks to the application of the Scientific Method in the Study of History, we know exactly what is the Evangelion of 600 AD that Prophet Mohamed was referring to: It is the same Evangelion of Catholics today. In short, Prophet Mohamed, just like Saint Augustine and Saint Paul and Saint Marcion, preached the good news of Jesus Christ<br />


                            Similarly to what the Medici family and its friends did to the Catholic church between 1300 and 1500, over two centuries after the passing of prophet Mohamed, most Islamitic influential positions in the world began getting hijacked by the Saffahists, while the true Islam was preserved in Moorish land under the Moroccan Empire. The Moorish culture is mostly oral which meant historically it produced less writings than the Saffahists, but the truth doesn’t need to be written for it to be true just as the lie is always a lie even if it’s on the morning’s newspaper. With the help of prophet Mohamed, a local Moorish Arab influencer descending from the infamous “Umaya”, which is a family internationally known for its intellect back at that time, established the first Islamitic Empire in MENA and Iberia and the Far Morocco. The Umayad Empire is the Moroccan Empire reverting its structure back from a temporary federation of states to a unified Kingdom again. Islam was an unprecedented model of peace in the world creating a by-default framework that allowed true freedom of speech and true freedom of thought. Islam in a nutshell is a belief in God’s fulfillment of his promise to Abraham to bless humanity in the end times and bring the Kingdom of God where the children of Allah worship the Father freely under their own Fig Trees and under their own Vines. Abu Abbas Ssaffah (an arabic word that means killer or assassin or murderer) started the Abbassids (Saffahists) who decided to create a fake literature for Islam that can align with their Saffahist tendencies, a literature that reflects their psychopathy.<br />


                            Moors defended Islam sharply, fleeing to Iberia and the Far Morocco (The Americas) with the true interpretation of the original Islamitic literature. Islam, the unprecedented framework of peace, remained safe in MENA and Iberia and the Americas under the Moroccan Empire despite the Saffahist efforts. While Saffahists praised ignorance and blind belief in illegitimate authoritarian regimes, Muslims praised the Divine Logos through Lady Wisdom Sophia thus starting a worldwide scientific revolution over a millenium before the European Renaissance started. The Saffahists realized if they wanted to defeat the Moroccan Empire and replace true Islam with their fake psychopathic cult they had to gain influence around Gibraltar. The Fatimid dynasty is arguably the oldest Sicilian mafia of hired murderers. Pushed by Saffahist influence, this group started in Sicily and quickly became a regional power thanks to their inhumaine methods of war. The Fatimids sent their army of murderers “The Hashashins” (Arabic for weed smokers or hashish smokers, this is where the words “Assassin” and “Assassins” come from) to fight Christian-Muslims in Moorish land. The Hashashins established an autonomous rule in Antakya in Turkey and the same group later established the Ottoman dynasty. Through Ottoman brutality the Saffahists were able to keep control over many strategic pieces of land until their fall in 1917. The influence of the Saffahists has been dissipating since 1917 while the Moroccan Empire and true Islam survived another war against them.<br />


                            The Moroccan Empire owned over two thirds of the world’s Gold supply in the 1600s which shows that Morocco was always the most powerful Empire in the world even at the exact time when Suleiman “The Magnificent” was ruling over the Ottomans. In this same period of time, the Moroccan Empire was Effectively Ruling over the Continent of Africa. The Moroccan Empire has a unique method of ruling that consists of voluntarily granting communities complete Autonomy which allowed people in Africa to lead peaceful and prosperous lives while enjoying the flawless international protection of their Moorish overlords. Up until the mid 1800s the Moroccan Empire had full power over Africa which blocked imperialist Europe from invading and subduing the peaceful Citizens of Africa. Morocco declared the Autonomy of the United States in 1977 and 9 years later established the Moroccan Treaty with the United States in 1786 which established the rights of the Moorish people in both Africa and the Far Morocco “Al Maghrib Al Aqsa” which is the Continent of America. The United States’ Constitution guarantees the rights of the Moroccan citizens in the United States being subjects to the Moroccan King since the treaties established prior to the US Constitution are Unalterable Laws in the United States of America. The Moroccan Empire was protecting its subjects in Africa and in the Far Morocco from Slavery and Kidnappings with its citizenship and was fighting every day against the Slavery Holocaust in the Far Morocco perpetrated by a few psychopaths who decided to take advantage of the secluded geographical location of the United States to do evil unto other human beings for personal financial gain. During the Slavery Holocaust the Moroccan citizenship protected every person who had it against forced kidnapping and forced slavery since the US Constitution fully protects the subjects of the Moroccan Emperor. Moroccan citizens answer to the laws of the Moroccan Kingdom and not the laws of any of the Autonomous States in the Far Morocco. Thanks to the Moorish Citizenship, the number of people who were spared or saved from the American Slavery Holocaust greatly exceeds the number of people who suffered its injustice. Moorish Lobbies in the United States were able to elect Abraham Lincoln who declared a just war against these psychopaths and ended this terrible chapter in human history.<br />


                            By the beginning of the 20th century special interests brought the Empire and the world to some pretty dark places. World War I started one year after the Moorish Empire was exiled from international affairs for the first time in history since the 65th century BC. World War II on the other hand ended one year after the Istiqlal Party was established which is a Moroccan coalition to bring down the French protectorate treaty applied over the central Moorish Land around the historical Fez. The rest is history.<br />


                            Moorish Empire:<br />


                            Indigenous Land: Americas + Southern Europe + Tamazgha + Pishon + Gihon + Western Euphrates + Western Tigris<br />


                            Land that were once under a Moorish Emperial Protectorate: Subsaharan Africa + Mesopotamia + China + Russia + India + Oceania + Northern Europe<br />


                            Morocco is the only True Earthly Empire under God while all other “empires” you’ve ever heard of are what the history books in the Kingdom of God will refer to as Neo-Empires.<br />


                            •••••••••••••••••••••••••••••••<br />


                            Antikythera and its financial heart BabylonSwap power the Brave New Babylon Blockchain which is the decentralized advanced solution this world desperately needs. We are here to establish God’s will.<br />

                            Special thanks to the Amrani Airways team for their fruitful contribution in the development of the Antikythera Ecosystem.<br />

                            Sincerely,<br />
                            Nabil Amrani<br />
                            Antikythera Labs<br />

                        </div>
                    </div>
                    <div className="row  pt-5">
                        <div className="col-lg-7 col-10 mx-auto">
                            <div className='inner-book'>
                                <img src="/tokens/01.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/02.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/03.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/04.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/05.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/06.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/07.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/08.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/09.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/10.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/11.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/12.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/13.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/14.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/15.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/16.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/17.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/18.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/19.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/20.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/21.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/22.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/23.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/24.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/25.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/26.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/28.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/29.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/31.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/32.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/33.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/34.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/35.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/36.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/37.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/38.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/39.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/40.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/41.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/42.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/43.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/44.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/45.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/46.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/47.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/48.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/49.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/50.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/51.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/52.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/53.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/54.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/55.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/56.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/57.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/58.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/59.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/60.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/61.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/62.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/63.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/64.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/65.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/66.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/67.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/68.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/69.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/70.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/71.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/72.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/73.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/74.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/75.jpg" className='img-fluid my-4 w-100' alt="" />
                                <img src="/tokens/76.jpg" className='img-fluid my-4 w-100' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Glossary