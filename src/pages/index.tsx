import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";

export default function Home() {
    return (
        <div className="bg-black min-h-screen text-white flex">
            <Head>
                <title>Pirate Mesh dApp on Cardano</title>
                <meta name="description" content="A Cardano dApp powered by Mesh" />
            </Head>

            {/* Left Navigation */}
            <nav className="w-64 bg-red-950/50 border-r border-red-800 p-6 flex flex-col gap-4">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-red-600 font-[serif]">
                        Mesh Pirate Bay
                    </h1>
                </div>

                <button className="nav-button">Ships Dashboard</button>
                <button className="nav-button">Crew Manifest</button>
                <button className="nav-button">Treasure Vault</button>
                <button className="nav-button">Navigation Charts</button>
                <button className="nav-button">Port Registry</button>
                <button className="nav-button">Ships Maintenance</button>
            </nav>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Top Bar with Wallet */}
                <div className="h-16 bg-red-950/30 border-b border-red-800 flex justify-end items-center px-6">
                    <CardanoWallet />
                </div>

                {/* Main Content */}
                <main className="flex-1 p-8 bg-gradient-to-b from-black to-red-900/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-8 text-red-500">Welcome Aboard, Sailor!</h2>

                        <div className="grid gap-8">
                            <div className="bg-red-950/30 p-6 rounded-xl border border-red-800">
                                <h3 className="text-2xl font-bold mb-4 text-red-400">Captains Latest Orders</h3>
                                <p className="text-gray-300">
                                    Ahoy crew! Our mission be to navigate the treacherous waters of the Cardano blockchain.
                                    Weve spotted rich opportunities on the horizon, and our coffers be ready for the taking!
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-red-950/30 p-6 rounded-xl border border-red-800">
                                    <h3 className="text-xl font-bold mb-3 text-red-400">Ships Stats</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>Crew Members: 1,234</li>
                                        <li>Treasury: 50,000 ADA</li>
                                        <li>Successful Raids: 89</li>
                                        <li>Territories: 5</li>
                                    </ul>
                                </div>

                                <div className="bg-red-950/30 p-6 rounded-xl border border-red-800">
                                    <h3 className="text-xl font-bold mb-3 text-red-400">Upcoming Voyages</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>NFT Treasure Hunt</li>
                                        <li>DeFi Port Exploration</li>
                                        <li>Smart Contract Upgrade</li>
                                        <li>Gem Token Launch</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="p-4 border-t border-red-900 flex justify-center bg-black">
                    <MeshBadge isDark={true} />
                </footer>
            </div>
        </div>
    );
}