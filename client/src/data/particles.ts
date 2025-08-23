import { KoreanParticle } from '../types/particles';

export const koreanParticles: KoreanParticle[] = [
  {
    id: '1',
    particle: '이/가',
    romanization: 'i/ga',
    meaning: 'Partícula de sujeito',
    usage: 'Marca o sujeito da frase. Use 이 após consoante e 가 após vogal.',
    examples: [
      {
        korean: '저가 학생이에요.',
        romanization: 'jeoga haksaeng-ieyo.',
        portuguese: 'Eu sou estudante.'
      },
      {
        korean: '고양이가 귀여워요.',
        romanization: 'goyang-iga gwiyeowoyo.',
        portuguese: 'O gato é fofo.'
      }
    ],
    difficulty: 'beginner',
    category: 'subject'
  },
  {
    id: '2',
    particle: '을/를',
    romanization: 'eul/reul',
    meaning: 'Partícula de objeto',
    usage: 'Marca o objeto direto. Use 을 após consoante e 를 após vogal.',
    examples: [
      {
        korean: '물을 마셔요.',
        romanization: 'mureul masyeoyo.',
        portuguese: 'Bebo água.'
      },
      {
        korean: '책을 읽어요.',
        romanization: 'chaegeul ilgeoyo.',
        portuguese: 'Leio um livro.'
      }
    ],
    difficulty: 'beginner',
    category: 'object'
  },
  {
    id: '3',
    particle: '은/는',
    romanization: 'eun/neun',
    meaning: 'Partícula de tópico',
    usage: 'Marca o tópico da conversa ou contraste. Use 은 após consoante e 는 após vogal.',
    examples: [
      {
        korean: '저는 한국 사람이에요.',
        romanization: 'jeoneun hanguk saram-ieyo.',
        portuguese: 'Eu sou coreano.'
      },
      {
        korean: '사과는 빨갛고 바나나는 노래요.',
        romanization: 'sagwaneun ppalgahgo banananeneun noraeyo.',
        portuguese: 'A maçã é vermelha e a banana é amarela.'
      }
    ],
    difficulty: 'beginner',
    category: 'topic'
  },
  {
    id: '4',
    particle: '에',
    romanization: 'e',
    meaning: 'Partícula de lugar/tempo',
    usage: 'Indica localização, direção ou tempo específico.',
    examples: [
      {
        korean: '학교에 가요.',
        romanization: 'hakgyo-e gayo.',
        portuguese: 'Vou à escola.'
      },
      {
        korean: '3시에 만나요.',
        romanization: 'se-si-e mannayo.',
        portuguese: 'Nos encontramos às 3 horas.'
      }
    ],
    difficulty: 'beginner',
    category: 'location'
  },
  {
    id: '5',
    particle: '에서',
    romanization: 'eseo',
    meaning: 'Partícula de local de ação',
    usage: 'Indica o lugar onde uma ação acontece.',
    examples: [
      {
        korean: '도서관에서 공부해요.',
        romanization: 'doseogwan-eseo gongbuheyo.',
        portuguese: 'Estudo na biblioteca.'
      },
      {
        korean: '집에서 쉬어요.',
        romanization: 'jib-eseo swieoyo.',
        portuguese: 'Descanso em casa.'
      }
    ],
    difficulty: 'beginner',
    category: 'location'
  },
  {
    id: '6',
    particle: '의',
    romanization: 'ui',
    meaning: 'Partícula possessiva',
    usage: 'Indica posse ou relação entre duas palavras.',
    examples: [
      {
        korean: '저의 친구',
        romanization: 'jeoui chingu',
        portuguese: 'Meu amigo'
      },
      {
        korean: '한국의 음식',
        romanization: 'hangug-ui eumsik',
        portuguese: 'Comida da Coreia'
      }
    ],
    difficulty: 'beginner',
    category: 'possessive'
  },
  {
    id: '7',
    particle: '고',
    romanization: 'go',
    meaning: 'Partícula de conexão',
    usage: 'Conecta duas frases ou palavras com significado "e".',
    examples: [
      {
        korean: '예쁘고 똑똑해요.',
        romanization: 'yeppeugo ttokttokheyo.',
        portuguese: 'É bonita e inteligente.'
      },
      {
        korean: '공부하고 운동해요.',
        romanization: 'gongbuhago undonghaeyo.',
        portuguese: 'Estudo e faço exercício.'
      }
    ],
    difficulty: 'intermediate',
    category: 'conjunction'
  },
  {
    id: '8',
    particle: '부터',
    romanization: 'buteo',
    meaning: 'Partícula "desde/a partir de"',
    usage: 'Indica o ponto de partida no tempo ou espaço.',
    examples: [
      {
        korean: '월요일부터 금요일까지',
        romanization: 'woryoil-buteo geumyoil-kkaji',
        portuguese: 'De segunda a sexta-feira'
      },
      {
        korean: '지금부터 시작해요.',
        romanization: 'jigeumbuteo sijakhaeyo.',
        portuguese: 'Começamos a partir de agora.'
      }
    ],
    difficulty: 'intermediate',
    category: 'time'
  }
];

export const difficultyColors = {
  beginner: 'korean-green',
  intermediate: 'korean-orange', 
  advanced: 'korean-purple'
};

export const categoryColors = {
  subject: 'korean-blue',
  object: 'korean-orange',
  topic: 'korean-purple',
  location: 'korean-green',
  time: 'korean-blue',
  possessive: 'korean-orange',
  conjunction: 'korean-purple'
};