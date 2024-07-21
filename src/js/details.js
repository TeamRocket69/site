document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const productDetails = {
        Sweden: {
            name: 'Minecraft - Sweden',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Daniel Rosenfeld (C418)',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Multiplataforma',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Piano instrumentos acústicos e eletrônicos',
            image: 'src/partituras/Minecraft-Sweden.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b></font> Iniciante',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 1',
            duration: '<font color="#322E33"><b>Duração:</b></font> 02:05',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> D, Bm',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Clássico',
            link: 'https://youtu.be/aBkTkxKDduc?si=VS7R9ybn_rx8bqjO',
            file: 'src/partituras/Minecraft-Sweden.pdf',
            description: '"Minecraft - Sweden" é uma das músicas mais conhecidas da trilha sonora do jogo Minecraft, criada pelo compositor alemão Daniel Rosenfeld, conhecido como C418. Esta faixa específica é uma das músicas mais icônicas e amadas pelos jogadores de Minecraft.'
        },
        UnderGroundTheme: {
            name: 'Super Mario Bros. - Underground Theme',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Koji Kondo',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Nintendo Entertainment System (NES)',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Piano',
            image: 'src/partituras/SuperMarioBros-UnderGroundTheme.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Iniciante',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 1',
            duration: '<font color="#322E33"><b>Duração:</b></font> 00:25',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> C, Am',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha Sonora',
            link: 'https://youtu.be/c0SuIMUoShI?si=2rxW3FOjqI7r8sFt',
            file: 'src/partituras/SuperMarioBros-UnderGroundTheme.pdf',
            description: 'A trilha sonora "Underground Theme" do jogo Super Mario Bros. é uma das composições mais reconhecíveis e icônicas na história dos videogames. Criada pelo lendário compositor Koji Kondo, essa música é sinônimo de exploração e desafio nos níveis subterrâneos do jogo. A música começa com uma linha de baixo pulsante e repetitiva, que imediatamente estabelece uma atmosfera misteriosa e tensa. Essa linha de baixo é acompanhada por notas esparsas e ecoantes, criando uma sensação de profundidade e isolamento, que é perfeita para os níveis subterrâneos onde os jogadores devem navegar por labirintos e evitar inimigos. A simplicidade da melodia, combinada com seu ritmo hipnótico, faz com que a "Underground Theme" seja ao mesmo tempo cativante e um pouco inquietante. A música é composta por uma série de frases musicais curtas que se repetem, reforçando a sensação de estar preso em um labirinto subterrâneo. Além de criar uma atmosfera única, a "Underground Theme" também é notável por sua capacidade de evocar a sensação de exploração e descoberta. Cada nota parece estar carregada de suspense, incentivando os jogadores a continuar avançando, mesmo diante dos desafios. Esta trilha sonora é um exemplo brilhante de como a música pode ser usada para enriquecer a experiência de jogo, proporcionando uma camada adicional de imersão e emoção. A "Underground Theme" de Super Mario Bros. continua a ser uma parte querida e nostálgica da cultura dos videogames, lembrada por sua melodia icônica e seu impacto duradouro.'
        },
        Megalovania: {
            name: 'Undertale - Megalovania',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Toby Fox',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> PC, PlayStation, Nintendo Switch, Xbox',
            instrument: '<font color="#322E33"><b>Instrumentos:</b></font> Sintetizadores eletrônicos (incluindo sintetizadores FM e amostragem), guitarra elétrica distorcida, percussão eletrônica.',
            image: 'src/partituras/Undertale-Megalovania.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Intermediário',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 5',
            duration: '<font color="#322E33"><b>Duração:</b></font> 02:42',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> F, Dm',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha Sonora',
            link: 'https://youtu.be/wDgQdr8ZkTw?si=OMy2m_rfBiv19igR',
            file: 'src/partituras/Undertale-Megalovania.pdf',
            description: '"Megalovania" é uma das trilhas sonoras mais icônicas e intensas do jogo Undertale, composta por Toby Fox. Esta música é conhecida por sua energia eletrizante, ritmo acelerado e impacto emocional, sendo um dos temas mais memoráveis e populares da comunidade de jogadores. A música começa com uma introdução dramática e misteriosa, usando sintetizadores e percussão eletrônica para criar uma sensação de urgência e excitação. A melodia principal é conduzida por um riff de guitarra distorcida, que se destaca pela sua intensidade e complexidade. Ao longo da peça, "Megalovania" apresenta variações dinâmicas e mudanças de ritmo que aumentam a tensão e mantêm os ouvintes completamente envolvidos. A combinação de elementos eletrônicos e instrumentais cria uma atmosfera única de batalha e confronto, refletindo a intensidade dos momentos em que a música é tocada no jogo. A composição é marcada por suas linhas melódicas distintas e progressões de acordes que alternam entre momentos frenéticos e partes mais cadenciadas, proporcionando uma experiência auditiva que complementa perfeitamente a jogabilidade intensa e desafiadora de Undertale. "Megalovania" não é apenas uma trilha sonora; é um símbolo de determinação, desafio e ação dentro do universo de Undertale. A música continua a ser reverenciada não apenas por sua qualidade musical, mas também por sua capacidade de capturar a essência emocional e narrativa do jogo de maneira única e memorável'
        },
        TromboneFanfare: {
            name: 'Sonic Boom - Trombone Fanfare',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Richard Jacques',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Nintendo 3DS',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Trombones (vários, para criar uma fanfarra).',
            image: 'src/partituras/SonicBoom-TromboneFanfare.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Iniciante',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 2',
            duration: '<font color="#322E33"><b>Duração:</b></font> 01:08',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> C, Am',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha Sonora',
            link: 'https://youtu.be/NW-cQXEOgmc?si=iyGFIHCwd16lukoF',
            file: 'src/partituras/SonicBoom-TromboneFanfare.pdf',
            description: 'A trilha sonora "Trombone Fanfare" do jogo Sonic Boom é uma peça musical vibrante e enérgica que reflete a ação acelerada e a aventura constante da franquia Sonic. Composta por Richard Jacques, esta música é um exemplo de como os elementos tradicionais da fanfarra podem ser combinados com a modernidade dos videogames para criar uma experiência auditiva emocionante. A música começa com uma fanfarra ousada e dinâmica tocada por trombones, estabelecendo imediatamente uma sensação de grandiosidade e entusiasmo. Os trombones são acompanhados por uma percussão forte e ritmada, que adiciona um elemento de urgência e movimento à peça. A melodia é cativante e poderosa, capturando a essência da velocidade e da ação que define os jogos Sonic. À medida que a música avança, ela mantém um ritmo constante e acelerado, com variações dinâmicas que mantêm o ouvinte envolvido e empolgado. A combinação de instrumentos de sopro e percussão cria uma atmosfera de celebração e triunfo, ideal para momentos de vitória e conquista dentro do jogo. "Trombone Fanfare" é uma trilha sonora que exemplifica a energia vibrante e o espírito aventureiro de Sonic Boom. A música não só acompanha a ação do jogo, mas também intensifica a experiência do jogador, proporcionando uma trilha sonora memorável que ressoa com a emoção e a adrenalina das aventuras de Sonic e seus amigos.'
        },
        LittlerootTown: {
            name: 'Pokémon Ruby, Sapphire & Emerald - Littleroot Town',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Junichi Masuda',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Game Boy',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Sintetizadores eletrônicos, instrumentos de sopro sintetizados',
            image: 'src/partituras/Pokemon-Littleroot-Town.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Intermediário',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 3',
            duration: '<font color="#322E33"><b>Duração:</b></font> 02:07',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> F, Dm',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha Sonora',
            link: 'https://youtu.be/im6tbN9SZXs?si=tqTCN7ZX9wqM5HkX',
            file: 'src/partituras/Pokemon-Littleroot-Town.pdf',
            description: 'A trilha sonora "Littleroot Town" do jogo Pokémon é uma peça musical que encapsula perfeitamente a sensação de início de uma nova aventura. Composta por Junichi Masuda, esta música serve como tema para a cidade natal do protagonista em Pokémon Ruby, Sapphire, e Emerald, assim como nos remakes Omega Ruby e Alpha Sapphire. "Littleroot Town" começa com uma melodia suave e acolhedora tocada por instrumentos de sopro, que imediatamente evocam uma sensação de segurança e familiaridade. A música é acompanhada por acordes suaves de cordas e um ritmo leve, criando uma atmosfera serena que reflete o ambiente pacífico da cidadezinha. A simplicidade da composição, combinada com sua melodia alegre, faz com que os jogadores sintam um vínculo especial com Littleroot Town, um lugar que simboliza o começo de suas jornadas no mundo Pokémon. A música é ao mesmo tempo nostálgica e esperançosa, lembrando os jogadores dos momentos de descoberta e dos primeiros passos dados em direção a aventuras épicas. A trilha sonora de "Littleroot Town" é uma celebração da simplicidade e da beleza dos começos humildes, capturando a essência do espírito aventureiro que define a série Pokémon.'
        },
        WetHands: {
            name: 'Minecraft - Wet Hands',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Daniel Rosenfeld (C418)',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Multiplataforma',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Piano acústico.',
            image: 'src/partituras/Minecraft-WetHands.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Iniciante',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 1',
            duration: '<font color="#322E33"><b>Duração:</b></font> 01:31',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> A, F#m',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Clássico',
            link: 'https://youtu.be/MSepOYJxB64?si=FOiitUBbxQxj5sYE',
            file: 'src/partituras/Minecraft-WetHands.pdf',
            description: '"Wet Hands" é uma das composições mais queridas da trilha sonora de Minecraft, criada por C418 (Daniel Rosenfeld). Esta peça é reconhecida por sua simplicidade encantadora e sua habilidade de evocar emoções profundas através de uma melodia suave e introspectiva. A música é centrada em um piano solitário, cujas notas claras e delicadas se desdobram em uma melodia serena e contemplativa. "Wet Hands" captura a sensação de calma e quietude que frequentemente acompanha a exploração do mundo de Minecraft. Cada nota é tocada com precisão e cuidado, criando uma atmosfera de introspecção e paz que complementa perfeitamente o ritmo tranquilo do jogo. A estrutura minimalista de "Wet Hands" permite que os jogadores se concentrem no momento presente, seja construindo, explorando ou simplesmente apreciando a vastidão e a beleza do mundo ao seu redor. A música evoca uma sensação de nostalgia e melancolia leve, lembrando os jogadores dos momentos de descoberta e das paisagens serenas encontradas ao longo de suas jornadas. Esta faixa é um exemplo brilhante de como a trilha sonora de Minecraft consegue ser ao mesmo tempo simples e profundamente impactante, tornando-se uma parte integral da experiência imersiva do jogo.'
        },
        FallenDown: {
            name: 'Undertale - Fallen Down',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Toby Fox',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> PC, PlayStation, Nintendo Switch, Xbox',
            instrument: '<font color="#322E33"><b>Instrumentos:</b></font> Piano, violão acústico',
            image: 'src/partituras/Undertale-FallenDown.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Intermediário',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 3',
            duration: '<font color="#322E33"><b>Duração:</b></font> 02:42',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> D, Bm',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha Sonora',
            link: 'https://youtu.be/cGBMTAGzWPs?si=oeXdy-9RbsfoA-6T',
            file: 'src/partituras/Undertale-FallenDown.pdf',
            description: '"Fallen Down" é uma das trilhas sonoras emocionais e evocativas do jogo indie Undertale, composta por Toby Fox. Esta música é conhecida por capturar perfeitamente momentos de nostalgia, reflexão e melancolia dentro da narrativa rica e emocional de Undertale. A música começa com um piano suave e delicado, que estabelece uma atmosfera calma e contemplativa desde o primeiro acorde. A melodia é simples, mas profundamente emotiva, transmitindo uma sensação de serenidade e introspecção que reflete os temas do jogo. Ao longo da peça, elementos adicionais, como acordes de violão e harmonias suaves, são introduzidos, adicionando camadas à melodia principal e criando uma experiência auditiva rica e envolvente. A composição é marcada por mudanças sutis na dinâmica e no ritmo, que ajudam a sustentar a atmosfera de tranquilidade e tristeza pacífica. "Fallen Down" é uma trilha sonora que ressoa com os jogadores não apenas por sua beleza musical, mas também por sua capacidade de evocar emoções profundas e complexas. A música se torna um reflexo dos momentos de quietude e contemplação que os personagens e jogadores experimentam ao longo da jornada de Undertale. Esta trilha sonora exemplifica a habilidade de Toby Fox de criar músicas que não apenas complementam, mas também enriquecem a narrativa e a atmosfera do jogo, tornando "Fallen Down" uma peça memorável e querida entre os fãs de Undertale em todo o mundo.'
        },
        TetrisTheme: {
            name: 'Tetris Theme',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Hirokazu Tanaka',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Multiplataforma',
            instrument: '<font color="#322E33"><b>Instrumentos:</b></font> Sintetizadores eletrônicos, principalmente geradores de onda quadrada e sintetizadores FM.',
            image: 'src/partituras/Tetris-Theme.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Intermediário',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 2',
            duration: '<font color="#322E33"><b>Duração:</b></font> 01:36',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> C, Am',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha Sonora',
            link: 'https://youtu.be/NmCCQxVBfyM?si=goeyCj2EaKm0uIAU',
            file: 'src/partituras/Tetris-Theme.pdf',
            description: 'O "Tetris Theme" é uma das trilhas sonoras mais reconhecíveis e icônicas da história dos videogames. Composta originalmente por Hirokazu Tanaka para o jogo Tetris lançado em 1989 para o Game Boy, esta música é sinônimo do desafio e da jogabilidade viciante que caracterizam o clássico jogo de quebra-cabeça. A música começa com uma melodia simples e cativante, composta por uma combinação de notas eletrônicas que se repetem em um padrão envolvente. A batida constante e o ritmo acelerado refletem a natureza rápida e estratégica do jogo Tetris, onde os jogadores devem girar e encaixar blocos em movimento para criar linhas completas. A "Tetris Theme" é conhecida por sua capacidade de manter os jogadores focados e motivados, incentivando-os a alcançar pontuações mais altas enquanto enfrentam desafios crescentes. A simplicidade da melodia, combinada com sua energia contagiante, cria uma experiência auditiva que complementa perfeitamente a mecânica do jogo. Ao longo dos anos, o "Tetris Theme" se tornou um ícone cultural, reconhecido não apenas por sua associação com o jogo Tetris original, mas também por sua capacidade de evocar nostalgia e lembranças de jogos de quebra-cabeça clássicos. A música continua a ser remixada e reinterpretada em várias formas de mídia, demonstrando seu impacto duradouro e sua popularidade entre os fãs de videogames em todo o mundo.'
        },
        EliteFourTheme: {
            name: 'Pokémon Ruby, Sapphire & Emerald - Elite Four Theme',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Junichi Masuda',
            platform: '<font color="#322E33"><b>Plataforma:</b></fcrystal',
            description: 'A trilha sonora "Elite Four Theme" dos jogos Pokémon Ruby, Sapphire e Emerald é uma peça musical épica e intensamente energética que captura a seriedade e a grandiosidade das batalhas finais contra os membros da Elite Four. Composta por Junichi Masuda, esta música é um marco que define o clímax da jornada dos treinadores Pokémon na região de Hoenn. A música começa com uma introdução poderosa e dramática, utilizando acordes fortes e uma percussão vigorosa que imediatamente estabelece um clima de alta tensão e expectativa. A melodia principal, com suas notas rápidas e ascendentes, transmite uma sensação de urgência e desafio, refletindo a seriedade do confronto contra alguns dos treinadores mais fortes do jogo. Ao longo da composição, há uma combinação de temas orquestrais e eletrônicos que criam uma atmosfera de batalha intensa e épica. Os ritmos acelerados e as mudanças dinâmicas na melodia mantêm os jogadores em um estado constante de alerta e excitação, capturando a importância dessas batalhas decisivas. O "Elite Four Theme" é projetado para envolver os jogadores emocionalmente, fazendo-os sentir a magnitude do momento enquanto enfrentam a Elite Four. A música, com sua complexidade e energia, intensifica a experiência de jogo, tornando cada batalha um evento memorável e grandioso. Esta trilha sonora é mais do que apenas uma música de fundo; ela simboliza a culminação de todo o esforço e treinamento dos jogadores, proporcionando uma trilha sonora apropriada para um dos desafios mais significativos do jogo.'
        },
        TheGreatFairyFountain: {
            name: "The Legend of Zelda: Twilight Princess - The Great Fairy's Fountain",
            composer: '<font color="#322E33"><b>Compositor:</b></font> Koji Kondo',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Nintendo GameCube, Wii',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Piano',
            image: 'src/partituras/TheLegendofZelda-TheGreatFairyFountain.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b></font> Intermediário',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 1',
            duration: '<font color="#322E33"><b>Duração:</b></font> 00:50',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> Bb, Gm',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha Sonora',
            link: 'https://youtu.be/OdfqvsdSOuI?si=N43-18pfnqu0k7dC',
            file: 'src/partituras/TheLegendofZelda-TheGreatFairyFountain.pdf',
            description: 'A faixa é conhecida por sua melodia suave e reconfortante, muitas vezes associada aos locais onde as Great Fairy Fountains aparecem nos jogos da franquia. Essas fontes são locais místicos onde as Grandes Fadas residem e concedem poderes especiais ao protagonista, Link, como melhorias em equipamentos, aumento de saúde ou magia, entre outras habilidades. A música da Great Fairy Fountain geralmente toca quando Link se aproxima desses locais sagrados, criando uma atmosfera de encantamento e mistério. A melodia é caracterizada por sua simplicidade e beleza, com notas suaves que evocam um sentimento de tranquilidade e magia. Ao longo dos anos, a música se tornou um símbolo querido para os fãs da série, lembrando-os das experiências emocionantes e da jornada épica vivida por Link através do reino de Hyrule'
        },
        BattleMusic: {
            name: 'Pokémon Red, Blue & Yellow - Trainer Battle Music',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Junichi Masuda',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Game Boy',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Sintetizadores eletrônicos, percussão eletrônica (como bateria eletrônica), possivelmente instrumentos de sopro sintetizados.',
            image: 'src/partituras/Pokemon-RBY-Battle-Music.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Intermediário',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 5',
            duration: '<font color="#322E33"><b>Duração:</b></font> 02:51',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> C, Am',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha Sonora',
            link: 'https://youtu.be/Fupfr_eVLPo?si=K7adBleJ8EjZ59Nt',
            file: 'src/partituras/Pokemon-RBY-Battle-Music.pdf',
            description: 'A trilha sonora "Trainer Battle Music" dos jogos Pokémon Red, Blue e Yellow é uma peça musical icônica que simboliza a tensão e a excitação dos combates Pokémon. Composta por Junichi Masuda, esta música é uma parte fundamental da experiência de batalha que define a série. A música começa com uma introdução intensa e rápida, usando acordes poderosos e ritmos pulsantes que imediatamente aumentam a adrenalina do jogador. A melodia principal, tocada em um ritmo acelerado, é ao mesmo tempo cativante e desafiadora, refletindo a urgência e a competitividade das batalhas contra outros treinadores. A trilha sonora é composta por linhas de baixo enérgicas e sequências de notas rápidas que criam uma sensação de movimento constante e imprevisibilidade. Cada batalha se torna uma experiência emocionante, com a música intensificando a sensação de que cada movimento conta e cada decisão é crucial para a vitória. O "Trainer Battle Music" é projetado para manter os jogadores engajados e focados, capturando a essência da estratégia e da emoção que permeiam os combates Pokémon. A intensidade da música, combinada com sua melodia inesquecível, faz com que cada encontro com um treinador seja memorável e eletrizante. Esta trilha sonora é mais do que apenas uma música de fundo; é uma parte integral da identidade dos jogos Pokémon Red, Blue e Yellow, deixando uma marca indelével na memória dos jogadores e contribuindo para a atmosfera única e emocionante das batalhas Pokémon.'
        },
        GreenHillZone: {
            name: 'Sonic The Hedgehog - Green Hill Zone',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Masato Nakamura',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Sega Genesis (Mega Drive)',
            instrument: '<font color="#322E33"><b>Instrumentos:</b></font> Sintetizadores eletrônicos, percussão eletrônica',
            image: 'src/partituras/SonicTheHedgehog-GreenHillZone.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Iniciante',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 2',
            duration: '<font color="#322E33"><b>Duração:</b></font> 00:54',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> C, Am',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha Sonora',
            link: 'https://youtu.be/G-i8HYi1QH0?si=ldAdhCKz95qRlkx3',
            file: 'src/partituras/SonicTheHedgehog-GreenHillZone.pdf',
            description: 'A música "Green Hill Zone" do jogo Sonic the Hedgehog é uma das trilhas sonoras mais icônicas e reconhecíveis da história dos videogames. Composta por Masato Nakamura, do grupo japonês Dreams Come True, esta música captura a essência da velocidade e da aventura que definem o jogo Sonic. A música começa com uma introdução animada e enérgica, caracterizada por uma melodia cativante e ritmos acelerados que refletem o estilo de jogo rápido e dinâmico de Sonic. Os instrumentos utilizados são principalmente sintetizadores e percussão eletrônica, que criam uma sensação de movimento e ação constante. Ao longo da peça, há variações dinâmicas que mantêm os jogadores imersos na experiência, alternando entre seções mais intensas e momentos mais suaves que permitem uma breve pausa antes de voltar à ação. A combinação de melodias memoráveis e ritmos pulsantes torna "Green Hill Zone" uma trilha sonora que não só complementa, mas também impulsiona a jogabilidade do Sonic. Esta música é não apenas um tema de abertura, mas também um símbolo da nostalgia e do espírito aventureiro que muitos associam ao Sonic the Hedgehog desde seu lançamento inicial.'
        },
        FileCityTheme: {
            name: 'Digimon World - File City day and night Theme',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Makoto Tomozawa',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> PlaySation',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Sintetizadores eletrônicos, possivelmente com variações de textura e timbre.',
            image: 'src/partituras/DigimonWorld-FileCityTheme.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Intermediário',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 3',
            duration: '<font color="#322E33"><b>Duração:</b></font> 06:28',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> A, F#m',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha sonora',
            link: 'https://youtu.be/9oDImbXccKM?si=dDhBRKKIaRRuncv1',
            file: 'src/partituras/DigimonWorld-FileCityTheme.pdf',
            description: 'A trilha sonora "File City Theme" do jogo Digimon World é uma peça musical nostálgica que captura a essência do primeiro jogo da série para PlayStation. Composta por Makoto Tomozawa, a música é alegre e convidativa, refletindo a segurança e a esperança encontradas na File City, o ponto central de encontro para os jogadores e seus Digimons. O tema começa com uma melodia cativante e otimista que transmite uma sensação de comunidade e amizade. Os instrumentos de sopro leves e os acordes suaves do teclado criam uma atmosfera acolhedora, transportando os jogadores para um mundo digital vibrante e cheio de vida. À medida que a música progride, ela mantém um ritmo constante e sereno, proporcionando um pano de fundo perfeito para a exploração e a aventura dentro do jogo. A simplicidade da composição, combinada com sua melodia memorável, faz com que os jogadores se sintam imediatamente em casa em File City, prontos para embarcar em suas jornadas no mundo dos Digimons.'
        },
        SubwooferLullaby: {
            name: 'Minecraft - Subwoofer Lullaby',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Daniel Rosenfeld (C418).',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Multiplataforma',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Piano elétrico (pode incluir sintetizadores simulando sons de piano), efeitos sonoros de sintetizadores ambientais.',
            image: 'src/partituras/Minecraft-SubwooferLullaby.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Iniciante',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 2',
            duration: '<font color="#322E33"><b>Duração:</b></font> 03:09',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> C, Am',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Clássico',
            link: 'https://youtu.be/Gpd85y_iTxY?si=Cw1LyhNLFouWt1Dj',
            file: 'src/partituras/Minecraft-SubwooferLullaby.pdf',
            description: '"Subwoofer Lullaby" é uma das trilhas sonoras icônicas do jogo Minecraft, composta por C418 (Daniel Rosenfeld). Esta peça musical é um exemplo perfeito de como a simplicidade e a repetição podem criar uma atmosfera imersiva e relaxante. A faixa começa com uma linha de baixo suave e envolvente, que se entrelaça com notas de piano etéreas e sutis. A combinação de sons eletrônicos e acústicos estabelece uma sensação de tranquilidade e exploração, características centrais da experiência de jogar Minecraft. O ritmo lento e cadenciado de "Subwoofer Lullaby" proporciona um pano de fundo sereno, perfeito para momentos de construção, exploração e reflexão dentro do vasto mundo gerado proceduralmente. A melodia minimalista, porém emocionalmente ressonante, evoca uma sensação de nostalgia e aventura, capturando a essência do que torna Minecraft uma experiência única. À medida que os jogadores se perdem na criação de suas próprias histórias e mundos, "Subwoofer Lullaby" serve como um companheiro musical constante, lembrando-os da simplicidade e beleza da exploração e da criatividade.'
        },
        TitleTheme: {
            name: 'Pokémon Red & Blue - Title Theme',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Junichi Masuda',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Game Boy',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Sintetizadores eletrônicos, especialmente geradores de onda quadrada e FM.',
            image: 'src/partituras/Pokemon-RB-Title-Theme.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Intermediário',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 1',
            duration: '<font color="#322E33"><b>Duração:</b></font> 01:00',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> C, Am',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha sonora',
            link: 'https://youtu.be/NdJQopRuH1E?si=wvMppxfw_5rMIEIQ',
            file: 'src/partituras/Pokemon-RB-Title-Theme.pdf',
            description: 'A trilha sonora "Title Theme" dos jogos Pokémon Red e Blue é uma das composições mais icônicas e reconhecíveis da franquia Pokémon. Composta por Junichi Masuda, essa música introduz os jogadores ao mundo dos Pokémon de maneira épica e cativante desde o momento em que ligam o Game Boy. A música começa com uma fanfarra triunfante que rapidamente se transforma em uma melodia energética e empolgante. A combinação de acordes potentes e uma linha de baixo pulsante cria uma sensação de grandeza e aventura, preparando os jogadores para a jornada emocionante que está por vir. A melodia é simples, mas memorável, e evoca um sentimento de determinação e entusiasmo. À medida que a música progridCe, ela mantém um ritmo acelerado e dinâmico, refletindo a energia e a empolgação de começar uma nova aventura no mundo Pokémon. A trilha sonora captura perfeitamente a essência do espírito exploratório e competitivo da série, convidando os jogadores a embarcarem em sua própria jornada para se tornarem Mestres Pokémon. O "Title Theme" de Pokémon Red e Blue é mais do que apenas uma introdução musical; é um chamado à aventura que ressoa com jogadores de todas as idades, deixando uma impressão duradoura desde os primeiros segundos de jogo.'
        },
        Butterfly: {
            name: 'Digimon World - Butterfly',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Wada Kouji',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Televisão, Serviços de Streaming',
            instrument: '<font color="#322E33"><b>Instrumentos:</b></font> Voz, guitarra elétrica, bateria',
            image: 'src/partituras/DigimonWorld-Butterfly.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Iniciante',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 5',
            duration: '<font color="#322E33"><b>Duração:</b></font> 04:04',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> E, C#m',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha Sonora',
            link: 'https://youtu.be/MuhkUzGAeHA?si=J6ZKU11Wkax_LXZW',
            file: 'src/partituras/DigimonWorld-Butterfly.pdf',
            description: '"Butterfly" é uma música icônica do anime Digimon Adventure, sendo o tema de abertura original da série. Foi interpretada pelo grupo japonês Koji Wada. A música é conhecida por sua energia vibrante e otimista, capturando o espírito de aventura e amizade que são temas centrais no mundo de Digimon. Com uma combinação de rock e elementos eletrônicos, "Butterfly" se tornou uma das canções mais reconhecíveis e queridas pelos fãs do anime, evocando nostalgia e entusiasmo pela jornada dos Digiescolhidos e seus parceiros Digimon.'
        },
        GrannyTheme: {
            name: 'Granny Theme',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Misc Computer Games',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Multiplataforma',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Piano',
            image: 'src/partituras/GrannyTheme.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Iniciante',
            pages: 'Páginas: 2',
            link: 'https://youtu.be/EJ5h5vLEbqI?si=lJ9W5PIbhqikcowx',
            file: 'src/partituras/GrannyTheme.pdf',
            description: 'A música tema de "Granny" é uma parte essencial da atmosfera tensa e assustadora do jogo. Composta por Misc Computer Games, ela utiliza sons dissonantes e efeitos sonoros que contribuem para criar uma sensação de suspense e medo durante o jogo. A música aumenta a tensão à medida que o jogador tenta escapar da casa enquanto é perseguido pela avó, adicionando uma camada adicional de imersão à experiência de jogo.'
        },
        GymTheme: {
            name: 'Pokémon - Gym Theme',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Compositor: Junichi Masuda. Artistas envolvidos: Go Ichinose, Hitomi Sato',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Game Boy',
            instrument: '<font color="#322E33"><b>Instrumentos:</b></font> Sintetizadores e instrumentos de percussão',
            image: 'src/partituras/Pokemon-Gym-Theme.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Iniciante',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 1',
            duration: '<font color="#322E33"><b>Duração:</b></font> 01:14 ',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> F, Dm',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha sonora',
            link: 'https://youtu.be/biLeC5D4S48?si=NUd4v2l9CYjQ_OU_',
            file: 'src/partituras/Pokemon-Gym-Theme.pdf',
            description: 'O "Gym Theme" é uma peça musical que aparece em diversos jogos da série Pokémon, especialmente nos momentos em que o jogador desafia os líderes de ginásio. Esses temas musicais são projetados para refletir o ambiente desafiador e emocionante das batalhas de ginásio, onde os treinadores Pokémon competem para ganhar insígnias e progredir em suas jornadas.'
        },
        LavenderTown: {
            name: 'Pokémon - Lavender Town',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Junichi Masuda. Artistas envolvidos: Go Ichinose, Hitomi Sato',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Game Boy',
            instrument: '<font color="#322E33"><b>Instrumentos:</b></font> Sintetizadores e instrumentos de percussão',
            image: 'src/partituras/Pokemon-Lavender-Town.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Iniciante',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 1',
            duration: '<font color="#322E33"><b>Duração:</b></font> 01:28',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> C, Am',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha sonora',
            link: 'https://youtu.be/JNJJ-QkZ8cM?si=f6vUuMxBe5Bk9PSy',
            file: 'src/partituras/Pokemon-Lavender-Town.pdf',
            description: 'O tema de Lavender Town, também conhecido como "Lavender Town Syndrome", é uma das músicas mais icônicas e intrigantes da série de jogos Pokémon. Composta por Junichi Masuda, essa faixa musical é notável não apenas por sua melodia única e atmosférica, mas também por sua associação com uma lenda urbana dentro da comunidade de jogadores de Pokémon.'
        },
        Route1: {
            name: 'Pokémon - Route 1',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Junichi Masuda. Artistas envolvidos: Go Ichinose, Hitomi Sato',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Game Boy',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Sintetizadores e instrumentos de percussão',
            image: 'src/partituras/Pokemon-Route1.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Intermediário',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 2',
            duration: '<font color="#322E33"><b>Duração:</b></font> 00:46',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> D, Bm',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha sonora',
            link: 'https://youtu.be/u0G12EBW4KY?si=XG0p21ojD0pI1aUI',
            file: 'src/partituras/Pokemon-Route1.pdf',
            description: 'O tema da Rota 1 em Pokémon é uma das músicas mais reconhecíveis e icônicas da série de jogos Pokémon. Composta por Junichi Masuda, essa música desempenha um papel crucial em estabelecer a atmosfera inicial e a jornada emocionante que os jogadores irão experimentar ao iniciar sua aventura pelo mundo Pokémon.'
        },
        PokemonTheme: {
            name: 'Pokemon Theme',
            composer: '<font color="#322E33"><b>Compositores:</b></font> John Siegler, John Loeffler. Intérprete: Jason Paige',
            platform: '<font color="#322E33"><b>Plataformas:</b></font> Televisão, Serviços de Streaming',
            instrument: '<font color="#322E33"><b>Instrumentos:</b></font> Voz, Guitarras elétricas, bateria',
            image: 'src/partituras/Pokemon-Theme.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Intermediário',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 4',
            duration: '<font color="#322E33"><b>Duração:</b></font> 02:56',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> Bb, Gm',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Rock, Trilha sonora',
            link: 'https://youtu.be/fCkeLBGSINs?si=EjgS0oV4ts2QIoBQ',
            file: 'src/partituras/Pokemon-Theme.pdf',
            description: 'A música tema de Pokémon, também conhecida como "Pokémon Theme", é uma das músicas mais emblemáticas e reconhecíveis da cultura pop, especialmente entre os fãs da franquia de jogos, desenhos animados e filmes de Pokémon. Composta por John Siegler e John Loeffler, e interpretada pela banda Jason Paige, a música tema foi introduzida como o tema de abertura da série animada Pokémon nos Estados Unidos.'
        },
        JetPou: {
            name: 'JetPou',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Desconhecido (informação não disponível publicamente)',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Dispositivos móveis (iOS e Android)',
            instrument: '<font color="#322E33"><b>Instrumentos:</b></font> Sintetizadores eletrônicos, percussão eletrônica',
            image: 'src/partituras/Pou-JetPou.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b></font>Iniciante',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 1',
            duration: '<font color="#322E33"><b>Duração:</b></font> 01:17',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> C, Am',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Experimental',
            link: 'https://youtu.be/oWvHNQhPLUY?si=njPjkFnZRxjqjOSs',
            file: 'src/partituras/Pou-JetPou.pdf',
            description: 'Jet Pou complementa perfeitamente a adrenalina do jogo. Com batidas pulsantes e melodias cativantes, a música cria uma atmosfera dinâmica e empolgante. Seus elementos eletrônicos e ritmo acelerado elevam a experiência de jogo, mantendo os jogadores imersos na ação enquanto pilotam o avião com o Pou. Uma escolha perfeita para intensificar a emoção e o ritmo desta aventura aérea!'
        },
        SkyJump: {
            name: 'SkyJump',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Desconhecido (informação não disponível publicamente)',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Dispositivos móveis (iOS e Android)',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Sintetizadores eletrônicos, percussão eletrônica',
            image: 'src/partituras/Pou-SkyJump.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Iniciante',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 1',
            duration: '<font color="#322E33"><b>Duração:</b></font> 00:33',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> A, F#m',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Clássico',
            link: 'https://youtu.be/6sUE15ocU9E?si=8JU5u5Z1k8rAT-QO',
            file: 'src/partituras/Pou-SkyJump.pdf',
            description: '"Sky Jump" é outra trilha sonora do jogo Pou, projetada para acompanhar os desafios emocionantes e a jogabilidade vertical onde Pou salta pelos céus. A música é otimista e encorajadora, usando melodias simples e ritmos animados para refletir a ascensão de Pou no jogo. Os instrumentos eletrônicos são proeminentes, criando uma atmosfera de diversão e exploração enquanto os jogadores buscam alcançar alturas cada vez maiores.'
        },
        SuperMarioBrosMainTheme: {
            name: 'Super Mario Bros. - Main Theme',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Koji Kondo',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Nintendo Entertainment System (NES)',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Piano',
            image: 'src/partituras/SuperMarioBros-MainTheme.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Intermediário',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 2',
            duration: '<font color="#322E33"><b>Duração:</b></font> 01:53',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> C, Am',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha Sonora',
            link: 'https://youtu.be/NTa6Xbzfq1U?si=DScfPZfXjymdxNi0',
            file: 'src/partituras/SuperMarioBros-MainTheme.pdf',
            description: 'A música tema do Super Mario Bros. é uma das mais reconhecíveis e icônicas da história dos videogames. Composta por Koji Kondo, um renomado compositor japonês conhecido por suas contribuições musicais para diversos jogos da Nintendo, a música tema do Super Mario Bros. foi criada para o jogo de mesmo nome, lançado pela Nintendo em 1985 para o console NES (Nintendo Entertainment System)'
        },
        BreathoftheWild: {
            name: "The Legend of Zelda: Breath of the Wild - Kass' Theme",
            composer: '<font color="#322E33"><b>Compositor:</b></font> Yasuaki Iwata',
            platform: '<font color="#322E33"><b>Plataformas:</b></font> Nintendo Switch, Wii U',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Piano, Acordeon',
            image: 'src/partituras/TheLegendofZelda-Breathofthewild-KassTheme.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Intermediário',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 2',
            duration: '<font color="#322E33"><b>Duração:</b></font> 01:45',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> C, Am',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha sonora',
            link: 'https://youtu.be/XrvZrBCR6-A?si=V9yGGKpbS5WLBt2o',
            file: 'src/partituras/TheLegendofZelda-Breathofthewild-KassTheme.pdf',
            description: "Kass's Theme é uma música memorável da série de jogos 'The Legend of Zelda', composta para 'Breath of the Wild'. A faixa é reconhecida por sua melodia suave e encantadora, tocada no acordeão por Kass, um bardo da raça Rito. Kass viaja por Hyrule, compartilhando canções e lendas que ajudam o protagonista, Link, em sua jornada."
        },
        TheLegendofZeldaMainTheme: {
            name: 'The Legend of Zelda - Main Theme',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Koji Kondo',
            platform: '<font color="#322E33"><b>Plataformas:</b></font> Super Nintendo Entertainment System (NES), Nintendo 64, Nintendo GameCube, Nintendo Switch, W<font color="#322E33"><b>ii,</b></font> Wii U',
            instrument: 'Instrumentos: Orquestra (violinos, trompetes, flautas, percussão, etc.)',
            image: 'src/partituras/TheLegendofZelda-MainTheme.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Iniciante',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 1',
            duration: '<font color="#322E33"><b>Duração:</b></font> 01:21',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> C, Am',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha sonora',
            link: 'https://youtu.be/cGufy1PAeTU?si=hwElRPtRBTHHHcHR',
            file: 'src/partituras/TheLegendofZelda-MainTheme.pdf',
            description: 'O tema principal de Zelda, também conhecido como "Zelda Main Theme" ou "The Legend of Zelda Theme", é uma composição icônica que serve como tema principal e leitmotiv recorrente ao longo da série de jogos "The Legend of Zelda". Composta por Koji Kondo, esta música é uma das mais reconhecíveis e queridas pelos fãs de videogames em todo o mundo.'
        },
        ZeldasLullaby: {
            name: "The Legend of Zelda: Ocarina of Time - Zelda's Lullaby",
            composer: '<font color="#322E33"><b>Compositor:</b></font> Koji Kondo',
            platform: '<font color="#322E33"><b>Plataforma:</b></font> Nintendo 64',
            instrument: '<font color="#322E33"><b>Instrumento:</b></font> Piano',
            image: 'src/partituras/TheLegendofZelda-ZeldasLullaby(OcarinaofTime).png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Iniciante',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 1',
            duration: '<font color="#322E33"><b>Duração:</b></font> 00:43',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> G, Em',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha sonora',
            link: 'https://youtu.be/EPhfbtjqWM8?si=3fYc5x5iTLLMAbIQ',
            file: 'src/partituras/TheLegendofZelda-ZeldasLullaby(OcarinaofTime).pdf',
            description: "The Legend of Zelda: Great Lullaby é uma música icônica e comovente da popular série de jogos <i>The Legend of Zelda</i> da Nintendo. Esta melodia, frequentemente referida como <i>Zelda's Lullaby</i>, é uma peça central no universo musical da franquia, composta por Koji Kondo. A canção serve como tema principal da Princesa Zelda, caracterizando-se por suas notas suaves e uma sensação de serenidade que captura a essência do personagem e do reino de Hyrule."
        },
        Home: {
            name: 'Undertale - Home',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Toby Fox',
            platform: '<font color="#322E33"><b>Plataformas:</b></font> PC, PlayStation, Nintendo Switch, Xbox',
            instrument: '<font color="#322E33"><b>Instrumentos:</b></font> Piano, Sintetizadores',
            image: 'src/partituras/Undertale-Home.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Iniciante',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 2',
            duration: '<font color="#322E33"><b>Duração:</b></font> 04:01',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> A, F#m',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha sonora',
            link: 'https://youtu.be/5_E_y1AWAfc?si=aydbOL0-fihb4nGK',
            file: 'src/partituras/Undertale-Home.pdf',
            description: '"Undertale - Home" é uma faixa musical do jogo Undertale, composta por Toby Fox. Essa música é notável por sua melodia suave e emotiva, frequentemente associada a momentos de calma e reflexão dentro do jogo. Com instrumentação simples, como piano e sintetizadores suaves, "Home" evoca uma sensação de nostalgia e conforto, transmitindo uma atmosfera acolhedora ao jogador. É uma peça que complementa a narrativa do jogo, adicionando profundidade emocional às interações do protagonista com os personagens e ambientes de Undertale.'
        },
        SpiderDance: {
            name: 'Undertale - Spider Dance',
            composer: '<font color="#322E33"><b>Compositor:</b></font> Toby Fox',
            platform: '<font color="#322E33"><b>Plataformas:</b></font> PC, PlayStation, Nintendo Switch, Xbox',
            instrument: '<font color="#322E33"><b>Instrumentos:</b></font> Sintetizadores',
            image: 'src/partituras/Undertale-SpiderDance.png',
            difficulty: '<font color="#322E33"><b>Nível de dificuldade:</b> </font> Intermediário',
            pages: '<font color="#322E33"><b>Páginas:</b></font> 4',
            duration: '<font color="#322E33"><b>Duração:</b></font> 01:45',
            key: '<font color="#322E33"><b>Tonalidade:</b></font> Ab, Fm',
            genre: '<font color="#322E33"><b>Gênero:</b></font> Trilha sonora',
            link: 'https://youtu.be/YZ3XjVVNagU?si=uPP2tf4scyCrq4Tk',
            file: 'src/partituras/Undertale-SpiderDance.pdf',
            description: 'Spider Dance é uma música icônica do jogo "Undertale", composta por Toby Fox. A faixa é conhecida por seu ritmo animado e enérgico, tocada durante a batalha contra Muffet, uma aranha antropomórfica que tenta extorquir o protagonista, Frisk.'
        }
    };

    const product = productDetails[productId];

    if (product) {
        document.getElementById('partitura-detalhes').innerHTML = `
            <center><h2>${product.name}</h2></center>
            <li>${product.composer}</li>
            <li>${product.platform}</li>
            <li>${product.instrument}</li>
            <li>${product.difficulty}</li>
            <li>${product.pages}</li>
            <li>${product.duration}</li>
            <li>${product.key}</li>
            <li>${product.genre}</li>
            <li>Link (YouTube): <a href="${product.link}" target="blank">${product.link}</a></li>
            <center><li><a href="${product.file}" class="button" download="${product.name}">Download</a></li></center>

        `;
        document.getElementById('image').innerHTML = `
        <img src ="${product.image}" alt="${product.name}"></img>
        `;
        document.getElementById('description').innerHTML = `
        <p>${product.description}</p>
        `;
    } else {
        document.getElementById('partitura-detalhes').innerHTML = '<p>Partitura não encontrada :/</p>';
    }
});