import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";
import { useState } from "react";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedTab, setSelectedTab] = useState("dashboard");

    const handleNavClick = (tab: string) => {
        setIsLoading(true);
        setSelectedTab(tab);
        setTimeout(() => setIsLoading(false), 800);
    };

    return (
        <div className="bg-black min-h-screen text-white flex">
            <Head>
                <title>Pirate Mesh dApp on Cardano</title>
                <meta name="description" content="A Cardano dApp powered by Mesh" />
            </Head>

            {/* Left Navigation */}
            <nav className="w-64 bg-red-950/50 border-r border-red-800 p-6 flex flex-col gap-4">
                <div className="mb-8">
                    <h1 className="text-3xl font-['Pirata_One'] text-red-600 float-animation">
                        Mesh Pirate Bay
                    </h1>
                </div>

                {[
                    { id: "dashboard", icon: "🏴‍☠️", label: "Ship's Dashboard" },
                    { id: "crew", icon: "⚔️", label: "Crew Manifest" },
                    { id: "treasure", icon: "💰", label: "Treasure Vault" },
                    { id: "charts", icon: "🗺️", label: "Navigation Charts" },
                    { id: "ports", icon: "⚓", label: "Port Registry" },
                    { id: "maintenance", icon: "🔧", label: "Ship's Maintenance" }
                ].map(item => (
                    <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`nav-button ${selectedTab === item.id ? 'bg-red-900/30 border-red-800' : ''}`}
                    >
                        <span className="mr-2">{item.icon}</span>
                        {item.label}
                    </button>
                ))}
            </nav>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Top Bar with Wallet */}
                <div className="h-16 bg-red-950/30 border-b border-red-800 flex justify-between items-center px-6">
                    {isLoading && <div className="compass-loader" />}
                    <CardanoWallet />
                </div>

                {/* Main Content */}
                <main className="flex-1 p-8 bg-gradient-to-b from-black to-red-900/50 overflow-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl font-['Pirata_One'] mb-8 text-red-500 float-animation">
                            Welcome Aboard, Sailor!
                        </h2>

                        <div className="grid gap-8">
                            <div className="treasure-card">
                                <h3 className="text-2xl font-['Cinzel_Decorative'] font-bold mb-4 text-red-400">
                                    Captains Latest Orders
                                </h3>
                                <p className="text-gray-300 font-serif leading-relaxed">
                                    Ahoy crew! Our mission be to navigate the treacherous waters of the Cardano blockchain.
                                    Weve spotted rich opportunities on the horizon, and our coffers be ready for the taking!
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="treasure-card">
                                    <h3 className="text-xl font-['Cinzel_Decorative'] font-bold mb-3 text-red-400">
                                        Ships Stats
                                    </h3>
                                    <ul className="space-y-4 text-gray-300">
                                        <li className="flex justify-between items-center">
                                            <span>🏴‍☠️ Crew Members:</span>
                                            <span className="stats-value">1,234</span>
                                        </li>
                                        <li className="flex justify-between items-center">
                                            <span>💰 Treasury:</span>
                                            <span className="stats-value">50,000 ADA</span>
                                        </li>
                                        <li className="flex justify-between items-center">
                                            <span>⚔️ Successful Raids:</span>
                                            <span className="stats-value">89</span>
                                        </li>
                                        <li className="flex justify-between items-center">
                                            <span>🗺️ Territories:</span>
                                            <span className="stats-value">5</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="treasure-card">
                                    <h3 className="text-xl font-['Cinzel_Decorative'] font-bold mb-3 text-red-400">
                                        Upcoming Voyages
                                    </h3>
                                    <ul className="space-y-4 text-gray-300">
                                        {[
                                            { icon: "🎯", text: "NFT Treasure Hunt", date: "Next Full Moon" },
                                            { icon: "⚓", text: "DeFi Port Exploration", date: "Two Days Hence" },
                                            { icon: "🔧", text: "Smart Contract Upgrade", date: "When Stars Align" },
                                            { icon: "💎", text: "Gem Token Launch", date: "As Tide Rises" }
                                        ].map((voyage, index) => (
                                            <li key={index} className="flex items-center justify-between">
                                                <span>
                                                    <span className="mr-2">{voyage.icon}</span>
                                                    {voyage.text}
                                                </span>
                                                <span className="text-red-400 text-sm italic">{voyage.date}</span>
                                            </li>
                                        ))}
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