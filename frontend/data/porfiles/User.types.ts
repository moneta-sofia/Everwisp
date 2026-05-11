export type UserState = "online" | "offline";
export type Genre = "Male" | "Female" | "NoBinary" | "Other";
export type Languaje = "ES" | "ENG" | "PT" | "FR";
export type Role = "ADMIN" | "HOST" | "NORMAL" | "MOD";

export interface UserPorfile {
  userData: {
    id: string;
    name: string;
    role: Role;
    porfilePicture: string | null;
    status: UserState;
    country: string;
    languaje: Languaje;
  };

  presentation: {
    shortDescription: string;
    longDescription?: string;
  };

  stats?: {
    rankingPosition?: number;
    hoursStream?: number;
    mainGames?: {
      game: string;
      rank?: string;
    }[];
    OtherGames?: {
      game: string;
    };
  };

  feed?: {
    content: string;
    image: string | null;
    date: string;
  }[];

  links: {
    instagram?: string;
    x?: string;
    playfriends?: string;
  };
}
