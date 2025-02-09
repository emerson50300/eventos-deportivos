// Mapeo de canales con sus URLs
const streams = {
    'espn_deportes': 'https://user.tvcluboficial.com/live/m/m/530.m3u8',
    'espn_mx': 'https://user.tvcluboficial.com/live/m/m/530.m3u8',
    'espn_sur': 'https://user.tvcluboficial.com/live/m/m/34.m3u8',
    'espn_hd': 'https://user.tvcluboficial.com/live/m/m/486.m3u8',
    'fox_sports_2': 'https://user.tvcluboficial.com/live/m/m/53.m3u8',
    'fox_sports_premium': 'https://user.tvcluboficial.com/live/m/m/658.m3u8',
    'sky_sports_mx': 'https://user.tvcluboficial.com/live/m/m/989.m3u8',
    'sky_sports_premier': 'https://user.tvcluboficial.com/live/m/m/900.m3u8',
    'sky_sports_ca': 'https://user.tvcluboficial.com/live/m/m/1131.m3u8',
    'vix_plus': 'https://user.tvcluboficial.com/live/m/m/1131.m3u8',
    'tigo_sports': 'https://user.tvcluboficial.com/live/m/m/764.m3u8',
    'bein_n': 'https://user.tvcluboficial.com/live/m/m/1132.m3u8',
    'azteca7': 'https://user.tvcluboficial.com/live/m/m/7.m3u8',
    'canal5': 'https://user.tvcluboficial.com/live/m/m/14.m3u8',
    'telemundo': 'https://user.tvcluboficial.com/live/m/m/92.m3u8',
    'tudn_usa': 'https://user.tvcluboficial.com/live/m/m/698.m3u8',
    'movistar_deportes': 'https://user.tvcluboficial.com/live/m/m/925.m3u8'
};

// Nombres de los canales
const channelNames = {
    'espn_deportes': 'ESPN Deportes',
    'espn_mx': 'ESPN México',
    'espn_sur': 'ESPN Sur',
    'espn_hd': 'ESPN HD',
    'fox_sports_2': 'Fox Sports 2',
    'fox_sports_premium': 'Fox Sports Premium',
    'sky_sports_mx': 'SKY Sports MX HD',
    'sky_sports_premier': 'SKY Sports Premier HD',
    'sky_sports_ca': 'Sky Sports CA',
    'vix_plus': 'VIX+',
    'tigo_sports': 'Tigo Sports',
    'bein_n': 'BeIN Sports',
    'azteca7': 'Azteca 7',
    'canal5': 'Canal 5',
    'telemundo': 'Telemundo',
    'tudn_usa': 'TUDN USA',
    'movistar_deportes': 'Movistar Deportes HD'
};

// Mapeo de canales ESPN con sus URLs directas
const ESPN_CHANNELS = {
    'ESPN': {
        url: 'https://user.tvcluboficial.com/live/m/m/34.m3u8',
        logo: 'http://x.playerlatino.live/espn.png',
        id: 34
    },
    'ESPN 2': {
        url: 'https://user.tvcluboficial.com/live/m/m/35.m3u8',
        logo: 'http://x.playerlatino.live/espn2.png',
        id: 35
    },
    'ESPN 2 HD': {
        url: 'https://user.tvcluboficial.com/live/m/m/484.m3u8',
        logo: 'http://x.playerlatino.live/espn2.png',
        id: 484
    },
    'ESPN 2 HD Multi': {
        url: 'https://user.tvcluboficial.com/live/m/m/1353.m3u8',
        logo: 'http://x.playerlatino.live/espn2.png',
        id: 1353
    },
    'ESPN 2 MX': {
        url: 'https://user.tvcluboficial.com/live/m/m/531.m3u8',
        logo: 'http://x.playerlatino.live/espn2.png',
        id: 531
    },
    'ESPN 2 MX HD Multi': {
        url: 'https://user.tvcluboficial.com/live/m/m/1388.m3u8',
        logo: 'http://x.playerlatino.live/espn2.png',
        id: 1388
    },
    'ESPN 3 HD': {
        url: 'https://user.tvcluboficial.com/live/m/m/485.m3u8',
        logo: 'http://x.playerlatino.live/espn3.png',
        id: 485
    },
    'ESPN 3 HD Multi': {
        url: 'https://user.tvcluboficial.com/live/m/m/1355.m3u8',
        logo: 'http://x.playerlatino.live/espn3.png',
        id: 1355
    },
    'ESPN 3 MX HD Multi': {
        url: 'https://user.tvcluboficial.com/live/m/m/1389.m3u8',
        logo: 'http://x.playerlatino.live/espn3.png',
        id: 1389
    },
    'ESPN 4 HD Multi': {
        url: 'https://user.tvcluboficial.com/live/m/m/1359.m3u8',
        logo: 'http://x.playerlatino.live/espn4.png',
        id: 1359
    },
    'ESPN 4 HD Sur Multi': {
        url: 'https://user.tvcluboficial.com/live/m/m/1360.m3u8',
        logo: 'http://x.playerlatino.live/espn4.png',
        id: 1360
    },
    'ESPN Extra Multi': {
        url: 'https://user.tvcluboficial.com/live/m/m/1357.m3u8',
        logo: 'http://x.playerlatino.live/espn4.png',
        id: 1357
    },
    'ESPN HD': {
        url: 'https://user.tvcluboficial.com/live/m/m/486.m3u8',
        logo: 'http://x.playerlatino.live/espn.png',
        id: 486
    },
    'ESPN HD Multi': {
        url: 'https://user.tvcluboficial.com/live/m/m/1351.m3u8',
        logo: 'http://x.playerlatino.live/espn4.png',
        id: 1351
    },
    'ESPN MX': {
        url: 'https://user.tvcluboficial.com/live/m/m/530.m3u8',
        logo: 'http://x.playerlatino.live/espn.png',
        id: 530
    },
    'ESPN MX HD Multi': {
        url: 'https://user.tvcluboficial.com/live/m/m/1387.m3u8',
        logo: 'http://x.playerlatino.live/espn4.png',
        id: 1387
    },
    'ESPN Plus': {
        url: 'https://user.tvcluboficial.com/live/m/m/37.m3u8',
        logo: 'http://x.playerlatino.live/espnplus.png',
        id: 37
    },
    'ESPN Plus HD': {
        url: 'https://user.tvcluboficial.com/live/m/m/487.m3u8',
        logo: 'http://x.playerlatino.live/espnplus.png',
        id: 487
    },
    'ESPN Premium HD': {
        url: 'https://user.tvcluboficial.com/live/m/m/952.m3u8',
        logo: 'http://x.playerlatino.live/espnpremium.png',
        id: 952
    }
};

// Mapeo de canales Fox Sports
const FOX_SPORTS_CHANNELS = {
    'Fox Sports': {
        url: 'https://user.tvcluboficial.com/live/m/m/52.m3u8',
        logo: 'http://x.playerlatino.live/foxsports.png',
        id: 52
    },
    'Fox Sports HD': {
        url: 'https://user.tvcluboficial.com/live/m/m/493.m3u8',
        logo: 'http://x.playerlatino.live/foxsports.png',
        id: 493
    },
    'Fox Sports MX': {
        url: 'https://user.tvcluboficial.com/live/m/m/527.m3u8',
        logo: 'http://x.playerlatino.live/foxsports.png',
        id: 527
    },
    'Fox Sports MX Multi': {
        url: 'https://user.tvcluboficial.com/live/m/m/1361.m3u8',
        logo: 'http://x.playerlatino.live/foxsports.png',
        id: 1361
    },
    'Fox Sports 2': {
        url: 'https://user.tvcluboficial.com/live/m/m/53.m3u8',
        logo: 'http://x.playerlatino.live/foxsports2.png',
        id: 53
    },
    'Fox Sports 2 HD': {
        url: 'https://user.tvcluboficial.com/live/m/m/494.m3u8',
        logo: 'http://x.playerlatino.live/foxsports2.png',
        id: 494
    },
    'Fox Sports 2 MX': {
        url: 'https://user.tvcluboficial.com/live/m/m/528.m3u8',
        logo: 'http://x.playerlatino.live/foxsports2.png',
        id: 528
    },
    'Fox Sports 2 MX Multi': {
        url: 'https://user.tvcluboficial.com/live/m/m/1364.m3u8',
        logo: 'http://x.playerlatino.live/foxsports2.png',
        id: 1364
    },
    'Fox Sports 3 HD': {
        url: 'https://user.tvcluboficial.com/live/m/m/839.m3u8',
        logo: 'http://x.playerlatino.live/foxsports3.png',
        id: 839
    },
    'Fox Sports 3 MX': {
        url: 'https://user.tvcluboficial.com/live/m/m/54.m3u8',
        logo: 'http://x.playerlatino.live/foxsports3.png',
        id: 54
    },
    'Fox Sports Premium HD': {
        url: 'https://user.tvcluboficial.com/live/m/m/658.m3u8',
        logo: 'http://x.playerlatino.live/foxsportspremium.png',
        id: 658
    }
};

// Mapeo de canales DSports
const DSPORTS_CHANNELS = {
    'DSports': {
        url: 'https://user.tvcluboficial.com/live/m/m/259.m3u8',
        logo: 'http://x.playerlatino.live/directvsports.png',
        id: 259
    },
    'DSports HD': {
        url: 'https://user.tvcluboficial.com/live/m/m/974.m3u8',
        logo: 'http://x.playerlatino.live/directvsports.png',
        id: 974
    },
    'DSports +': {
        url: 'https://user.tvcluboficial.com/live/m/m/935.m3u8',
        logo: 'http://x.playerlatino.live/directvplus.png',
        id: 935
    },
    'DSports 2': {
        url: 'https://user.tvcluboficial.com/live/m/m/667.m3u8',
        logo: 'http://x.playerlatino.live/directvsports2.png',
        id: 667
    },
    'DSports 2 HD': {
        url: 'https://user.tvcluboficial.com/live/m/m/975.m3u8',
        logo: 'http://x.playerlatino.live/directvsports2.png',
        id: 975
    }
};

// Mapeo de canales Movistar Deportes
const MOVISTAR_CHANNELS = {
    'Movistar Deportes HD': {
        url: 'https://user.tvcluboficial.com/live/m/m/925.m3u8',
        logo: 'http://x.playerlatino.live/movistar_deportes.png',
        id: 925
    },
    'Movistar Deportes 2 HD': {
        url: 'https://user.tvcluboficial.com/live/m/m/367.m3u8',
        logo: 'http://x.playerlatino.live/movistar_deportes2.png',
        id: 367
    },
    'Movistar Deportes Sur': {
        url: 'https://user.tvcluboficial.com/live/m/m/366.m3u8',
        logo: 'http://x.playerlatino.live/movistar_deportes.png',
        id: 366
    }
};

// Otros canales deportivos
const OTHER_SPORTS_CHANNELS = {
    'TVC Deportes': {
        url: 'https://user.tvcluboficial.com/live/m/m/837.m3u8',
        logo: 'http://x.playerlatino.live/tvcdeportes.png',
        id: 837
    },
    'Univisión Deportes': {
        url: 'https://user.tvcluboficial.com/live/m/m/373.m3u8',
        logo: 'http://x.playerlatino.live/univisiondeportes.png',
        id: 373
    },
    'CDN Deportes': {
        url: 'https://user.tvcluboficial.com/live/m/m/1277.m3u8',
        id: 1277
    }
};

// Eventos deportivos del día
const eventos = [
    {
        id: 1,
        hora: "11:30",
        liga: " La Liga",
        equipos: "Real Sociedad vs Espanyol",
        canales: ["ESPN DEPORTES"]
    },
    {
        id: 2,
        hora: "13:45",
        liga: " Serie A",
        equipos: "Napoli vs Udinese",
        canales: ["ESPN MX"]
    },
    {
        id: 3,
        hora: "13:45",
        liga: " Liga Francesa",
        equipos: "Angers SCO vs Marsella",
        canales: ["BeinSports Ñ"]
    },
    {
        id: 4,
        hora: "14:00",
        liga: " La Liga",
        equipos: "Sevilla vs Barcelona",
        canales: ["ESPN DEPORTES"]
    },
    {
        id: 5,
        hora: "15:00",
        liga: " LMF",
        equipos: "L.A Firpo vs C.D Águila",
        canales: ["TIGO SPORTS"]
    },
    {
        id: 6,
        hora: "15:15",
        liga: " LMF",
        equipos: "Platense vs Metapán",
        canales: ["Canal 4 SV"]
    },
    {
        id: 7,
        hora: "17:30",
        liga: " Super Bowl NFL",
        equipos: "Philadelphia Eagles vs Kansas City Chiefs",
        canales: ["ESPN HD", "Fox Sports 2", "Fox Sports Premium", "Azteca 7", "Canal 5", "Telemundo"]
    },
    {
        id: 8,
        hora: "18:00",
        liga: " Liga MX",
        equipos: "Pumas vs Mazatlán",
        canales: ["TUDN USA"]
    },
    {
        id: 9,
        hora: "21:05",
        liga: " Liga MX",
        equipos: "Guadalajara vs Tijuana",
        canales: ["Telemundo"]
    }
];

// Mapeo de eventos a canales específicos por región
const eventChannelsByRegion = {
    'Sevilla vs Barcelona': {
        'MX': ['SKY Sports MX'],
        'CA': ['SKY Sports CA', 'Vix+', 'Tigo Sports'],
        'SA': ['ESPN Sur'],
        'US': ['ESPN Deportes']
    }
};

// Mapeo de eventos a canales específicos
const eventChannels = {
    'Sevilla vs Barcelona': [
        'SKY Sports MX',
        'SKY Sports CA',
        'Vix+',
        'Tigo Sports',
        'ESPN Sur',
        'ESPN Deportes'
    ],
    'Real Sociedad vs Espanyol': ['ESPN DEPORTES', 'ESPN HD', 'Fox Sports HD'],
    'Napoli vs Udinese': ['ESPN MX', 'ESPN HD', 'Fox Sports'],
    'Angers SCO vs Marsella': ['BeinSports Ñ HD', 'BeinSports Ñ', 'BeinSports HD'],
    'L.A Firpo vs C.D Águila': ['TIGO SPORTS'],
    'Platense vs Metapán': ['Canal 4 SV'],
    'Philadelphia Eagles vs Kansas City Chiefs': ['ESPN HD', 'Fox Sports 2', 'Fox Sports Premium HD', 'Azteca 7', 'Canal 5', 'Telemundo'],
    'Pumas vs Mazatlán': ['TUDN USA'],
    'Guadalajara vs Tijuana': ['Telemundo']
};

// Función para abrir el reproductor
function abrirReproductor(streamId) {
    if (!streamId || !streams[streamId]) {
        alert('Canal no disponible temporalmente');
        return;
    }

    const streamUrl = streams[streamId];
    const channelName = channelNames[streamId] || streamId;

    // Intentar abrir directamente en la aplicación externa
    window.location.href = streamUrl;
}

// Función para encontrar el canal apropiado según el evento
function findChannelForEvent(eventName) {
    // Mapeo de eventos a canales específicos por región
    const eventChannelsByRegion = {
        'Sevilla vs Barcelona': {
            'MX': ['SKY Sports MX'],
            'CA': ['SKY Sports CA', 'Vix+', 'Tigo Sports'],
            'SA': ['ESPN Sur'],
            'US': ['ESPN Deportes']
        }
    };

    // Mapeo de eventos a canales específicos
    const eventChannels = {
        'Sevilla vs Barcelona': [
            'SKY Sports MX',
            'SKY Sports CA',
            'Vix+',
            'Tigo Sports',
            'ESPN Sur',
            'ESPN Deportes'
        ],
        'Real Sociedad vs Espanyol': ['ESPN DEPORTES', 'ESPN HD', 'Fox Sports HD'],
        'Napoli vs Udinese': ['ESPN MX', 'ESPN HD', 'Fox Sports'],
        'Angers SCO vs Marsella': ['BeinSports Ñ HD', 'BeinSports Ñ', 'BeinSports HD'],
        'L.A Firpo vs C.D Águila': ['TIGO SPORTS'],
        'Platense vs Metapán': ['Canal 4 SV'],
        'Philadelphia Eagles vs Kansas City Chiefs': ['ESPN HD', 'Fox Sports 2', 'Fox Sports Premium HD', 'Azteca 7', 'Canal 5', 'Telemundo'],
        'Pumas vs Mazatlán': ['TUDN USA'],
        'Guadalajara vs Tijuana': ['Telemundo']
    };

    const preferredChannels = eventChannels[eventName] || [];

    // Buscar en todos los grupos de canales
    for (const channelName of preferredChannels) {
        // ESPN Channels
        if (ESPN_CHANNELS[channelName]) {
            return {
                stream_id: ESPN_CHANNELS[channelName].id,
                name: channelName,
                direct_url: ESPN_CHANNELS[channelName].url,
                logo: ESPN_CHANNELS[channelName].logo
            };
        }
        // Fox Sports Channels
        if (FOX_SPORTS_CHANNELS[channelName]) {
            return {
                stream_id: FOX_SPORTS_CHANNELS[channelName].id,
                name: channelName,
                direct_url: FOX_SPORTS_CHANNELS[channelName].url,
                logo: FOX_SPORTS_CHANNELS[channelName].logo
            };
        }
        // BeIN Sports Channels
        if (BEIN_CHANNELS[channelName]) {
            return {
                stream_id: BEIN_CHANNELS[channelName].id,
                name: channelName,
                direct_url: BEIN_CHANNELS[channelName].url,
                logo: BEIN_CHANNELS[channelName].logo
            };
        }
        // DSports Channels
        if (DSPORTS_CHANNELS[channelName]) {
            return {
                stream_id: DSPORTS_CHANNELS[channelName].id,
                name: channelName,
                direct_url: DSPORTS_CHANNELS[channelName].url,
                logo: DSPORTS_CHANNELS[channelName].logo
            };
        }
        // Movistar Channels
        if (MOVISTAR_CHANNELS[channelName]) {
            return {
                stream_id: MOVISTAR_CHANNELS[channelName].id,
                name: channelName,
                direct_url: MOVISTAR_CHANNELS[channelName].url,
                logo: MOVISTAR_CHANNELS[channelName].logo
            };
        }
        // Other Sports Channels
        if (OTHER_SPORTS_CHANNELS[channelName]) {
            return {
                stream_id: OTHER_SPORTS_CHANNELS[channelName].id,
                name: channelName,
                direct_url: OTHER_SPORTS_CHANNELS[channelName].url,
                logo: OTHER_SPORTS_CHANNELS[channelName].logo
            };
        }
    }

    // Si no encontramos un canal directo, buscamos en la API
    if (channels.length > 0) {
        for (const channelName of preferredChannels) {
            const channel = channels.find(ch => 
                ch.name.toLowerCase().includes(channelName.toLowerCase()) && 
                ch.stream_type === 'live'
            );
            if (channel) return channel;
        }
    }

    return null;
}