export interface KoreanParticle {
  id: string;
  particle: string;
  romanization: string;
  meaning: string;
  usage: string;
  examples: {
    korean: string;
    romanization: string;
    portuguese: string;
  }[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'subject' | 'object' | 'topic' | 'location' | 'time' | 'possessive' | 'conjunction';
}