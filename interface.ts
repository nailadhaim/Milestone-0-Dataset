export interface ResearchStation {
    id: string;
    name: string;
    director: string;
    logoUrl: string;
    establishedYear: number;
    focus: string;
  }
  
  export interface Planet {
    id: string;
    name: string;
    description: string;
    age: number;
    isHabitable: boolean;
    discoveryDate: string;
    imageUrl: string;
    classification: string;
    resources: string[];
    researchStation: ResearchStation;
  }