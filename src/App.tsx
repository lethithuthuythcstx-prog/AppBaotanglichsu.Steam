import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MentorChat } from "./components/MentorChat";
import { MaritimeZonesExplorer } from "./components/MaritimeZonesExplorer";
import { VirtualMuseum } from "./components/VirtualMuseum";
import { ChibiPromptStudio } from "./components/ChibiPromptStudio";
import { SitemapCodeBuilder } from "./components/SitemapCodeBuilder";
import { CurriculumRubricModal } from "./components/CurriculumRubricModal";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("mentor");
  const [activePromptData, setActivePromptData] = useState<{ prompt: string; name: string } | null>(null);

  const handleExploreZoneFromChat = (zoneId: string) => {
    setActiveTab("maritime");
  };

  const handleAskMentorAboutZone = (zoneName: string) => {
    setActiveTab("mentor");
  };

  const handleAskMentorAboutExhibit = (exhibitTitle: string) => {
    setActiveTab("mentor");
  };

  const handleSelectPromptForStudio = (prompt: string, characterName: string) => {
    setActivePromptData({ prompt, name: characterName });
    setActiveTab("chibi");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Tab Content */}
      <main className="flex-1 pb-8">
        {activeTab === "mentor" && (
          <MentorChat 
            onExploreZone={handleExploreZoneFromChat}
            onExploreChibi={() => setActiveTab("chibi")}
          />
        )}

        {activeTab === "maritime" && (
          <MaritimeZonesExplorer 
            onAskMentorAboutZone={handleAskMentorAboutZone}
          />
        )}

        {activeTab === "museum" && (
          <VirtualMuseum 
            onSelectPromptForStudio={handleSelectPromptForStudio}
            onAskMentorAboutExhibit={handleAskMentorAboutExhibit}
          />
        )}

        {activeTab === "chibi" && (
          <ChibiPromptStudio 
            initialPrompt={activePromptData?.prompt}
            initialName={activePromptData?.name}
          />
        )}

        {activeTab === "sitemap" && (
          <SitemapCodeBuilder />
        )}

        {activeTab === "rubric" && (
          <CurriculumRubricModal />
        )}
      </main>

      {/* Compact Institutional Footer */}
      <footer className="bg-slate-950/90 border-t border-slate-800/80 py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            Dự án <span className="text-amber-400 font-semibold">Bảo tàng Lịch sử Tương tác</span> • Giáo dục Liên môn STEAM Lớp 8
          </p>
          <p className="text-[11px] text-slate-500">
            Tuân thủ Công ước UNCLOS 1982, Luật Biển Việt Nam 2012 & Chương trình Tiếng Anh Unit 5 Global Success.
          </p>
        </div>
      </footer>
    </div>
  );
}
