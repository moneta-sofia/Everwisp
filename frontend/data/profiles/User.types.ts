export type UserState = "online" | "offline";
export type Genre = "Male" | "Female" | "NoBinary" | "Other";
export type Language = "ES" | "EN" | "PT" | "FR";
export type Role = "ADMIN" | "HOST" | "NORMAL" | "MOD";

export interface UserProfile {
  userData: {
    id: string;
    name: string;
    role: Role;
    profilePicture: string | null;
    status: UserState;
    country: string;
    language: Language;
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
