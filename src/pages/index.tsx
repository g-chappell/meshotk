import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";
import { useState } from "react";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedTab, setSelectedTab] = useState("dashboard");

    const services = [
        {
            title: "Treasure Mapping",
            description: "Chart your course through the Cardano blockchain with our advanced navigation tools",
            icon: "🗺️"
        },
        {
            title: "Smart Contract Raids",
            description: "Execute flawless smart contract interactions with our battle-tested strategies",
            icon: "⚔️"
        },
        {
            title: "Token Forging",
            description: "Mint your own tokens with our master craftsman's tools",
            icon: "⚒️"
        },
        {
            title: "Crew Management",
            description: "Manage your digital assets with our comprehensive portfolio tools",
            icon: "👥"
        }
    ];

    const stats = [
        { value: "50K+", label: "Successful Transactions" },
        { value: "100M", label: "ADA Managed" },
        { value: "10K+", label: "Crew Members" },
        { value: "95%", label: "Success Rate" }
    ];

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
                    {/* Hero Section */}
                    <section className="max-w-6xl mx-auto mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-6xl font-['Pirata_One'] mb-6 text-red-500 float-animation">
                                    Navigate the Blockchain Seas
                                </h2>
                                <p className="text-xl text-gray-300 mb-8">
                                    Set sail on your blockchain journey with the most fearsome crew in the Cardano waters.
                                </p>
                                <button className="px-8 py-3 bg-red-700 hover:bg-red-600 transition-colors rounded-lg text-white font-bold">
                                    Join the Crew
                                </button>
                            </div>
                            <div className="treasure-card p-8">
                                <div className="stats-grid grid grid-cols-2 gap-8">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="text-center">
                                            <div className="text-3xl font-['Cinzel_Decorative'] text-red-400 mb-2">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-gray-300">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="max-w-6xl mx-auto mb-20">
                        <h3 className="text-4xl font-['Cinzel_Decorative'] text-red-400 mb-12 text-center">
                            Our Services
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="treasure-card group cursor-pointer">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h4 className="text-xl font-['Cinzel_Decorative'] text-red-400 mb-3">
                                        {service.title}
                                    </h4>
                                    <p className="text-gray-300">
                                        {service.description}
                                    </p>
                                    <div className="mt-4 flex items-center text-red-400 group-hover:text-red-300">
                                        <span>Learn more</span>
                                        <span className="ml-2">→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="max-w-6xl mx-auto">
                        <div className="treasure-card text-center py-16">
                            <h3 className="text-4xl font-['Pirata_One'] text-red-500 mb-6">
                                Ready to Set Sail?
                            </h3>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Join our crew of blockchain buccaneers and start your journey through the Cardano seas.
                            </p>
                            <button className="px-8 py-3 bg-red-700 hover:bg-red-600 transition-colors rounded-lg text-white font-bold">
                                Connect Wallet
                            </button>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="p-4 border-t border-red-900 flex justify-center bg-black">
                    <MeshBadge isDark={true} />
                </footer>
            </div>
        </div>
    );
}