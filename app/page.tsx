"use client";

import React, { useState } from "react";

interface GameAccount {
  id: number;
  game: string;
  title: string;
  price: { myr: number; idr: number };
  image: string;
  level: number;
  rank: string;
  heroes?: number;
  skins?: number;
  characters?: string[];
  features: string[];
}

export default function GameAccountMarketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGame, setSelectedGame] = useState<string>("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<GameAccount | null>(
    null
  );
  const [currency, setCurrency] = useState<"myr" | "idr">("myr");

  const games = [
    "All Games",
    "Mobile Legends",
    "eFootball",
    "PUBG Mobile",
    "Genshin Impact",
  ];

  const accounts: GameAccount[] = [
    {
      id: 1,
      game: "Mobile Legends",
      title: "Mythic Account",
      price: { myr: 450, idr: 1500000 },
      image: "1",
      level: 85,
      rank: "Mythic II",
      heroes: 150,
      skins: 89,
      features: [
        "150 Heroes Unlocked",
        "89 Epic & Legend Skins",
        "High Winrate",
        "Full Emblem",
      ],
    },
    {
      id: 2,
      game: "Mobile Legends",
      title: "Legend Account",
      price: { myr: 280, idr: 950000 },
      image: "2",
      level: 62,
      rank: "Legend III",
      heroes: 98,
      skins: 45,
      features: ["98 Heroes", "45 Skins", "High Credit Score", "Good Win Rate"],
    },
    {
      id: 3,
      game: "eFootball",
      title: "Legendary Pack",
      price: { myr: 320, idr: 1100000 },
      image: "3",
      level: 45,
      rank: "Division 1",
      features: [
        "50+ Legendary Players",
        "Featured Players",
        "Max Team Spirit",
        "5000+ eFootball Points",
      ],
    },
    {
      id: 4,
      game: "eFootball",
      title: "Master Account",
      price: { myr: 190, idr: 650000 },
      image: "4",
      level: 38,
      rank: "Division 2",
      features: ["30+ Legendary Players", "Good Squad", "High Team Spirit"],
    },
    {
      id: 5,
      game: "PUBG Mobile",
      title: "Conqueror S12",
      price: { myr: 520, idr: 1750000 },
      image: "5",
      level: 92,
      rank: "Conqueror",
      features: [
        "Conqueror Tier",
        "Multiple Gun Skins",
        "Rare Outfits",
        "Max RP Pass",
      ],
    },
    {
      id: 6,
      game: "PUBG Mobile",
      title: "Ace Account",
      price: { myr: 380, idr: 1300000 },
      image: "6",
      level: 78,
      rank: "Ace",
      features: ["Ace Tier", "Glacier M416", "Multiple X-Suits", "Good Stats"],
    },
    {
      id: 7,
      game: "Genshin Impact",
      title: "AR 58 Premium",
      price: { myr: 680, idr: 2300000 },
      image: "7",
      level: 58,
      rank: "AR 58",
      characters: ["Hu Tao", "Raiden", "Zhongli", "Kazuha", "Nahida"],
      features: [
        "8x 5-Star Characters",
        "Multiple 5-Star Weapons",
        "All Regions 100%",
        "High Investment",
      ],
    },
    {
      id: 8,
      game: "Genshin Impact",
      title: "AR 45 Starter",
      price: { myr: 420, idr: 1400000 },
      image: "8",
      level: 45,
      rank: "AR 45",
      characters: ["Ayaka", "Yelan", "Kazuha"],
      features: ["4x 5-Star Characters", "Well Built Teams", "Good Artifacts"],
    },
    {
      id: 9,
      game: "Mobile Legends",
      title: "GM Account",
      price: { myr: 150, idr: 500000 },
      image: "9",
      level: 48,
      rank: "Grandmaster",
      heroes: 80,
      skins: 25,
      features: ["80 Heroes", "25 Skins", "Clean Record"],
    },
    {
      id: 10,
      game: "eFootball",
      title: "Premium Squad",
      price: { myr: 240, idr: 800000 },
      image: "10",
      level: 52,
      rank: "Division 1",
      features: ["40+ Legendary Players", "Top Formations", "High Rating"],
    },
    {
      id: 11,
      game: "PUBG Mobile",
      title: "Crown Tier",
      price: { myr: 290, idr: 980000 },
      image: "11",
      level: 65,
      rank: "Crown III",
      features: ["Crown Tier", "Gun Skins Collection", "Multiple Outfits"],
    },
    {
      id: 12,
      game: "Genshin Impact",
      title: "AR 50 Limited",
      price: { myr: 550, idr: 1850000 },
      image: "12",
      level: 50,
      rank: "AR 50",
      characters: ["Furina", "Neuvillette", "Alhaitham"],
      features: [
        "6x 5-Star Characters",
        "Limited Characters",
        "Good Progression",
      ],
    },
  ];

  const filteredAccounts = accounts
    .filter(
      (acc) => selectedGame === "all" || acc.game.toLowerCase() === selectedGame
    )
    .filter(
      (acc) =>
        searchQuery === "" ||
        acc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        acc.game.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleInterest = (account: GameAccount) => {
    setSelectedAccount(account);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-black tracking-tight">
              GammaC
            </h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrency("myr")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  currency === "myr"
                    ? "text-black"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                MYR
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setCurrency("idr")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  currency === "idr"
                    ? "text-black"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                IDR
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mt-10">
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search accounts..."
          className="w-full px-6 py-4 border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
        />
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-black mb-4 tracking-tight">
            Premium Game Accounts
          </h2>
          <p className="text-xl text-gray-600">
            Verified accounts with instant delivery
          </p>
        </div>

        {/* Game Filter */}
        <div className="flex justify-center gap-4 mb-16">
          {games.map((game, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedGame(index === 0 ? "all" : game.toLowerCase())
              }
              className={`px-5 py-2 text-sm font-medium transition-colors ${
                (index === 0 && selectedGame === "all") ||
                game.toLowerCase() === selectedGame
                  ? "text-black border-b-2 border-black"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {game}
            </button>
          ))}
        </div>

        {/* Accounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccounts.map((account) => (
            <div
              key={account.id}
              className="group cursor-pointer"
              onClick={() => handleInterest(account)}
            >
              <div className="bg-gray-100 aspect-square mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-9xl font-light text-gray-300 group-hover:scale-105 transition-transform duration-300">
                  {account.image}
                </span>
              </div>
              <div className="text-sm text-gray-500 mb-1">{account.game}</div>
              <h3 className="text-lg font-medium text-black mb-2">
                {account.title}
              </h3>
              <div className="text-xl font-semibold text-black">
                {currency === "myr"
                  ? `RM ${account.price.myr}`
                  : `Rp ${account.price.idr.toLocaleString("id-ID")}`}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedAccount && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-none max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Image Preview */}
              <div className="bg-gray-100 aspect-video mb-8 flex items-center justify-center">
                <span className="text-9xl font-light text-gray-300">
                  {selectedAccount.image}
                </span>
              </div>

              {/* Account Details */}
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 mb-2">
                    {selectedAccount.game}
                  </div>
                  <h3 className="text-3xl font-semibold text-black mb-4">
                    {selectedAccount.title}
                  </h3>
                  <div className="text-2xl font-semibold text-black">
                    {currency === "myr"
                      ? `RM ${selectedAccount.price.myr}`
                      : `Rp ${selectedAccount.price.idr.toLocaleString(
                          "id-ID"
                        )}`}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Level</div>
                      <div className="text-lg font-medium text-black">
                        {selectedAccount.level}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Rank</div>
                      <div className="text-lg font-medium text-black">
                        {selectedAccount.rank}
                      </div>
                    </div>
                    {selectedAccount.heroes && (
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Heroes</div>
                        <div className="text-lg font-medium text-black">
                          {selectedAccount.heroes}
                        </div>
                      </div>
                    )}
                    {selectedAccount.skins && (
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Skins</div>
                        <div className="text-lg font-medium text-black">
                          {selectedAccount.skins}
                        </div>
                      </div>
                    )}
                  </div>

                  {selectedAccount.characters && (
                    <div className="mb-6">
                      <div className="text-sm text-gray-500 mb-2">
                        Featured Characters
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedAccount.characters.map((char, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-sm text-black"
                          >
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="text-sm text-gray-500 mb-3">Features</div>
                    <ul className="space-y-2">
                      {selectedAccount.features.map((feature, idx) => (
                        <li key={idx} className="text-black flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 flex gap-4">
                  <button className="flex-1 bg-black text-white py-4 text-sm font-medium hover:bg-gray-800 transition-colors">
                    Chat with Seller
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-8 py-4 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-32">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-gray-500">
            © 2026 GameAccounts. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
