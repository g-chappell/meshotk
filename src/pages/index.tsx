import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";

export default function Home() {
    return (
        <div className="bg-black w-full text-white text-center">
            <Head>
                <title>Pirate Mesh dApp on Cardano</title>
                <meta name="description" content="A Cardano dApp powered by Mesh" />
            </Head>
            <main
                className={`flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-black to-red-900`}
            >
                <h1 className="text-6xl font-bold mb-20 text-red-600 font-[serif]">
                    <a href="https://meshjs.dev/" className="hover:text-red-400 transition-colors">
                        Mesh
                    </a>{" "}
                    <span className="text-white">Pirate Bay</span>
                </h1>

                <div className="mb-20">
                    <CardanoWallet />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center justify-around gap-6">
                    <a
                        href="https://meshjs.dev/apis"
                        className="bg-red-950/50 rounded-xl border-2 border-red-800 hover:scale-105 hover:border-red-600 transition max-w-96 p-5 backdrop-blur-sm"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-red-500">Captains Log</h2>
                        <p className="text-gray-300">
                            Chart yer course through our documentation with live demos and code treasures - perfect for learning the ways of the Cardano seas.
                        </p>
                    </a>

                    <a
                        href="https://meshjs.dev/guides"
                        className="bg-red-950/50 rounded-xl border-2 border-red-800 hover:scale-105 hover:border-red-600 transition max-w-96 p-5 backdrop-blur-sm"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-red-500">Pirates Guide</h2>
                        <p className="text-gray-300">
                            Whether ye be launching NFT treasure or setting up a merchants store, these guides will help ye navigate these waters.
                        </p>
                    </a>

                    <a
                        href="https://meshjs.dev/smart-contracts"
                        className="bg-red-950/50 rounded-xl border-2 border-red-800 hover:scale-105 hover:border-red-600 transition max-w-96 p-5 md:mx-auto lg:mx-5 md:col-span-2 lg:col-span-1 backdrop-blur-sm"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-red-500">Ships Contracts</h2>
                        <p className="text-gray-300">
                            Open-source smart contracts, complete with maps, demos, and the full ships code for yer plundering pleasure.
                        </p>
                    </a>
                </div>
            </main>
            <footer className="p-8 border-t border-red-900 flex justify-center bg-black">
                <MeshBadge isDark={true} />
            </footer>
        </div>
    );
}