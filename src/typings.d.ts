interface Pokemon {
  name: string;
  types: Array<{
    slot: number;
    type: {
      name: string;
    };
  }>;
  id: number;
  sprites: {
    front_default: string | null;
    other?: {
      [key: string]: {
        front_default: string | null;
      };
    };
    versions: {
      [key: string]: {
        [key: string]: {
          animated?: {
            front_default?: string | null;
          };
        };
      };
    };
  };
}
