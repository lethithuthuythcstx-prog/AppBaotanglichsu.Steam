/**
 * Type definitions for the STEAM Interactive Historical Museum Applet
 */

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: number;
  topic?: string;
  isFallback?: boolean;
  audioPlaying?: boolean;
}

export interface MaritimeZone {
  id: string;
  nameVi: string;
  nameEn: string;
  breadth: string;
  legalBasis: string; // UNCLOS 1982 & Luật Biển 2012
  descriptionVi: string;
  descriptionEn: string;
  sovereigntyLevelVi: string;
  sovereigntyLevelEn: string;
  keyActivities: string[];
  keyResources: string[];
  unit5Connection: string;
  color: string;
  iconName: string;
}

export interface ExhibitItem {
  id: string;
  titleVi: string;
  titleEn: string;
  roomId: string;
  maritimeZoneId: string;
  historicalFigureOrTopic: string;
  era: string;
  shortDescVi: string;
  shortDescEn: string;
  dialogueGuide: {
    foreignStudent: string;
    vietnameseGuide: string;
  };
  audioGuideScript: string;
  unit5GrammarFocus: string[]; // e.g. ["should", "must", "respect"]
  vocabulary: {
    word: string;
    type: string;
    phonetic: string;
    meaningVi: string;
    example: string;
  }[];
  chibiPrompt: string;
  chibiCharacterName: string;
  chibiDescription: string;
  steamAspects: {
    science: string;
    technology: string;
    engineering: string;
    art: string;
    math: string;
  };
}

export interface ExhibitRoom {
  id: string;
  nameVi: string;
  nameEn: string;
  theme: string;
  bannerGradient: string;
  items: ExhibitItem[];
}

export interface ChibiCustomizerState {
  character: string;
  era: string;
  costume: string;
  accessory: string;
  expression: string;
  background: string;
  artStyle: string;
}

export interface Unit5VocabItem {
  word: string;
  pronunciation: string;
  meaning: string;
  definition: string;
  collocation: string;
  example: string;
}
