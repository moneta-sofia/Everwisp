import type { UserPorfile } from "./User.types";

export const topHostsMock = [
    {
        userData: {
            id: "vanta",
            name: "Vanta",
            role: "HOST",
            porfilePicture: "/images/avatar-vanta.png",
            status: "online",
            country: "US",
            languaje: "ENG",
        },

        presentation: {
            shortDescription: "everything is black and white",
            longDescription:
                "No necesito hacer ruido para destacar. Juego con calma, observo cada detalle y dejo que la partida hable por mí. Todo es blanco o negro: ganar o aprender.",
        },

        stats: {
            rankingPosition: 1,
            hoursStream: 2100,
            mainGames: [
                {
                    game: "Valorant",
                    rank: "DIAMOND II",
                },
                {
                    game: "CSGO",
                    rank: "MASTER GUARDIAN II",
                },
                {
                    game: "Apex Legends",
                    rank: "PLATINUM",
                },
            ],
            OtherGames: {
                game: "+ 6 Juegos",
            },
        },

        feed: [
            {
                content: "everything is black and white",
                image: "/images/posts/vanta-black-white.png",
                date: "7 de abril",
            },
            {
                content: "quiet stream, clean games, good night",
                image: null,
                date: "9 de abril",
            },
        ],

        links: {
            instagram: "",
            x: "",
            playfriends: "",
        },
    },

    {
        userData: {
            id: "sauloko",
            name: "Sauloko",
            role: "HOST",
            porfilePicture: "/images/avatar-sauloko.png",
            status: "online",
            country: "BR",
            languaje: "PT",
        },

        presentation: {
            shortDescription: "o caos é meu habitat natural 🐇",
            longDescription:
                "Vivo cada partida como si fuera la última, entre jugadas inesperadas, risas con la comunidad y momentos que terminan siendo mejores que cualquier victoria. El caos es mi zona segura.",
        },

        stats: {
            rankingPosition: 2,
            hoursStream: 4950,
            mainGames: [
                {
                    game: "Valorant",
                    rank: "PLATINO I",
                },
                {
                    game: "League of Legends",
                    rank: "GOLD IV",
                },
                {
                    game: "Minecraft",
                    rank: "CASUAL",
                },
            ],
            OtherGames: {
                game: "+ 8 Juegos",
            },
        },

        feed: [
            {
                content: "o caos é meu habitat natural 🐇",
                image: "/images/posts/sauloko-chaos.png",
                date: "7 de abril",
            },
            {
                content: "hoy se gana o se grita, no hay punto medio",
                image: null,
                date: "8 de abril",
            },
        ],

        links: {
            instagram: "",
            x: "",
            playfriends: "",
        },
    },

    {
        userData: {
            id: "mora",
            name: "Mora",
            role: "HOST",
            porfilePicture: "/images/avatar-mora.png",
            status: "online",
            country: "AR",
            languaje: "ES",
        },

        presentation: {
            shortDescription: "streams largos y café frío. hola.",
            longDescription:
                "Entre partidas eternas, charlas random y café que siempre se enfría, hago streams para pasarla bien con la comunidad. No prometo ganar siempre, pero sí quedarme hasta el final.",
        },

        stats: {
            rankingPosition: 3,
            hoursStream: 4200,
            mainGames: [
                {
                    game: "League of Legends",
                    rank: "SILVER I",
                },
                {
                    game: "Valorant",
                    rank: "GOLD III",
                },
                {
                    game: "Overwatch 2",
                    rank: "PLATINUM",
                },
            ],
            OtherGames: {
                game: "+ 12 Juegos",
            },
        },

        feed: [
            {
                content: "streams largos y café frío. hola.",
                image: "/images/posts/mora-stream.png",
                date: "7 de abril",
            },
            {
                content: "el café ya está frío pero seguimos en ranked",
                image: null,
                date: "8 de abril",
            },
        ],

        links: {
            instagram: "",
            x: "",
            playfriends: "",
        },
    },
] satisfies UserPorfile[];