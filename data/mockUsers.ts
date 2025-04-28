export interface CognitiveAreaScore {
  id: 'memory' | 'attention' | 'speed' | 'logic' | 'language' | 'spatial';
  name: string;
  score: number;
  trend: 'improving' | 'stable' | 'declining';
  lastSessionDate: string;
}

export interface UserCognitiveProfile {
  id: string;
  name: string;
  avatarUrl?: string;
  overallScore: number;
  overallTrend: 'improving' | 'stable' | 'declining';
  lastActive: string;
  sessionsThisWeek: number;
  cognitiveAreas: CognitiveAreaScore[];
  recommendedAreaIds?: (
    | 'memory'
    | 'attention'
    | 'speed'
    | 'logic'
    | 'language'
    | 'spatial'
  )[];
}

export const mockUsersData: UserCognitiveProfile[] = [
  {
    id: '1',
    name: 'Ana Martínez',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    overallScore: 85,
    overallTrend: 'improving',
    lastActive: '2023-10-26T10:30:00Z',
    sessionsThisWeek: 5,
    cognitiveAreas: [
      {
        id: 'memory',
        name: 'Memoria',
        score: 88,
        trend: 'improving',
        lastSessionDate: '2023-10-26T10:00:00Z',
      },
      {
        id: 'attention',
        name: 'Atención',
        score: 90,
        trend: 'stable',
        lastSessionDate: '2023-10-25T15:10:00Z',
      },
      {
        id: 'speed',
        name: 'Velocidad',
        score: 75,
        trend: 'improving',
        lastSessionDate: '2023-10-26T10:15:00Z',
      },
      {
        id: 'logic',
        name: 'Lógica',
        score: 82,
        trend: 'stable',
        lastSessionDate: '2023-10-24T09:00:00Z',
      },
    ],
    recommendedAreaIds: ['speed'],
  },
  {
    id: '2',
    name: 'Carlos Gómez',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
    overallScore: 72,
    overallTrend: 'stable',
    lastActive: '2023-10-25T08:15:00Z',
    sessionsThisWeek: 3,
    cognitiveAreas: [
      {
        id: 'memory',
        name: 'Memoria',
        score: 65,
        trend: 'stable',
        lastSessionDate: '2023-10-24T11:00:00Z',
      },
      {
        id: 'attention',
        name: 'Atención',
        score: 75,
        trend: 'improving',
        lastSessionDate: '2023-10-25T08:00:00Z',
      },
      {
        id: 'speed',
        name: 'Velocidad',
        score: 70,
        trend: 'stable',
        lastSessionDate: '2023-10-23T16:30:00Z',
      },
      {
        id: 'spatial',
        name: 'Visuoespacial',
        score: 78,
        trend: 'stable',
        lastSessionDate: '2023-10-22T10:00:00Z',
      },
    ],
    recommendedAreaIds: ['memory', 'speed'],
  },
  {
    id: '3',
    name: 'Elena Rodríguez',
    overallScore: 68,
    overallTrend: 'declining',
    lastActive: '2023-10-20T14:00:00Z',
    sessionsThisWeek: 1,
    cognitiveAreas: [
      {
        id: 'memory',
        name: 'Memoria',
        score: 70,
        trend: 'declining',
        lastSessionDate: '2023-10-19T09:30:00Z',
      },
      {
        id: 'logic',
        name: 'Lógica',
        score: 65,
        trend: 'stable',
        lastSessionDate: '2023-10-20T14:00:00Z',
      },
      {
        id: 'language',
        name: 'Lenguaje',
        score: 72,
        trend: 'stable',
        lastSessionDate: '2023-10-18T17:00:00Z',
      },
    ],
    recommendedAreaIds: ['memory', 'logic'],
  },
  {
    id: '4',
    name: 'Javier Fernández',
    avatarUrl: 'https://i.pravatar.cc/150?img=4',
    overallScore: 92,
    overallTrend: 'stable',
    lastActive: '2023-10-27T07:00:00Z',
    sessionsThisWeek: 6,
    cognitiveAreas: [
      {
        id: 'memory',
        name: 'Memoria',
        score: 95,
        trend: 'stable',
        lastSessionDate: '2023-10-26T08:00:00Z',
      },
      {
        id: 'attention',
        name: 'Atención',
        score: 90,
        trend: 'stable',
        lastSessionDate: '2023-10-27T07:00:00Z',
      },
      {
        id: 'speed',
        name: 'Velocidad',
        score: 93,
        trend: 'improving',
        lastSessionDate: '2023-10-25T10:00:00Z',
      },
      {
        id: 'logic',
        name: 'Lógica',
        score: 90,
        trend: 'stable',
        lastSessionDate: '2023-10-24T14:20:00Z',
      },
      {
        id: 'spatial',
        name: 'Visuoespacial',
        score: 88,
        trend: 'stable',
        lastSessionDate: '2023-10-23T11:50:00Z',
      },
    ],
  },
  {
    id: '5',
    name: 'Luisa Peña',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    overallScore: 78,
    overallTrend: 'improving',
    lastActive: '2023-10-26T18:00:00Z',
    sessionsThisWeek: 4,
    cognitiveAreas: [
      {
        id: 'attention',
        name: 'Atención',
        score: 80,
        trend: 'improving',
        lastSessionDate: '2023-10-26T17:30:00Z',
      },
      {
        id: 'language',
        name: 'Lenguaje',
        score: 75,
        trend: 'stable',
        lastSessionDate: '2023-10-25T09:00:00Z',
      },
      {
        id: 'logic',
        name: 'Lógica',
        score: 80,
        trend: 'improving',
        lastSessionDate: '2023-10-24T10:15:00Z',
      },
    ],
    recommendedAreaIds: ['language'],
  },
  {
    id: '6',
    name: 'Ricardo Solis',
    avatarUrl: 'https://i.pravatar.cc/150?img=6',
    overallScore: 62,
    overallTrend: 'stable',
    lastActive: '2023-10-27T09:45:00Z',
    sessionsThisWeek: 2,
    cognitiveAreas: [
      {
        id: 'memory',
        name: 'Memoria',
        score: 55,
        trend: 'declining',
        lastSessionDate: '2023-10-22T13:00:00Z',
      },
      {
        id: 'speed',
        name: 'Velocidad',
        score: 68,
        trend: 'stable',
        lastSessionDate: '2023-10-27T09:30:00Z',
      },
      {
        id: 'spatial',
        name: 'Visuoespacial',
        score: 65,
        trend: 'stable',
        lastSessionDate: '2023-10-25T14:00:00Z',
      },
    ],
    recommendedAreaIds: ['memory', 'spatial'],
  },
  {
    id: '7',
    name: 'Marta Díaz',
    overallScore: 89,
    overallTrend: 'stable',
    lastActive: '2023-10-25T11:20:00Z',
    sessionsThisWeek: 7,
    cognitiveAreas: [
      {
        id: 'memory',
        name: 'Memoria',
        score: 92,
        trend: 'stable',
        lastSessionDate: '2023-10-24T08:00:00Z',
      },
      {
        id: 'attention',
        name: 'Atención',
        score: 85,
        trend: 'stable',
        lastSessionDate: '2023-10-25T11:00:00Z',
      },
      {
        id: 'logic',
        name: 'Lógica',
        score: 90,
        trend: 'stable',
        lastSessionDate: '2023-10-23T15:00:00Z',
      },
      {
        id: 'language',
        name: 'Lenguaje',
        score: 88,
        trend: 'improving',
        lastSessionDate: '2023-10-22T16:45:00Z',
      },
    ],
  },
  {
    id: '8',
    name: 'Pablo Núñez',
    avatarUrl: 'https://i.pravatar.cc/150?img=8',
    overallScore: 75,
    overallTrend: 'declining',
    lastActive: '2023-10-27T12:00:00Z',
    sessionsThisWeek: 3,
    cognitiveAreas: [
      {
        id: 'memory',
        name: 'Memoria',
        score: 70,
        trend: 'declining',
        lastSessionDate: '2023-10-27T11:30:00Z',
      },
      {
        id: 'attention',
        name: 'Atención',
        score: 80,
        trend: 'stable',
        lastSessionDate: '2023-10-26T14:00:00Z',
      },
      {
        id: 'speed',
        name: 'Velocidad',
        score: 72,
        trend: 'declining',
        lastSessionDate: '2023-10-25T18:00:00Z',
      },
      {
        id: 'spatial',
        name: 'Visuoespacial',
        score: 78,
        trend: 'stable',
        lastSessionDate: '2023-10-24T12:00:00Z',
      },
    ],
    recommendedAreaIds: ['memory', 'speed'],
  },
];
