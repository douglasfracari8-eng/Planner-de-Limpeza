import { PageData } from './types';

export const PLANNER_COLORS = [
  'bg-red-200', 'bg-orange-200', 'bg-yellow-200', 'bg-green-200', 'bg-blue-200', 'bg-purple-200',
  'bg-pink-200', 'bg-indigo-200', 'bg-teal-200', 'bg-lime-200',
];

export const PLANNER_DATA: PageData[] = [
  {
    id: 'cover',
    type: 'cover',
    title: 'LIMPEZA PARA TDAH',
    subtitle: 'PLANEJADOR TUDO-EM-UM',
    content: []
  },
  {
    id: 'hacks',
    type: 'hacks',
    title: 'LIMPEZA PARA TDAH',
    subtitle: 'TRUQUES/DICAS',
    content: [
      { id: '01', title: 'Defina um Timer de 5-15 Minutos', description: 'Comece com um impulso curto - apenas 5 a 15 minutos. Você ficará surpreso com o quanto pode fazer quando começar.', icon: 'Timer' },
      { id: '02', title: 'Divida em Tarefas Pequenas', description: 'Em vez de "limpar a cozinha", faça: Limpe o balcão, coloque a louça na pia, jogue o lixo fora. Pequenas vitórias = grande motivação.', icon: 'List' },
      { id: '03', title: 'Ouça Música ou um Podcast', description: 'Crie uma playlist de limpeza ou ouça um podcast divertido. Isso mantém seu cérebro engajado e transforma a limpeza em uma festa ou hora da história.', icon: 'Headphones' },
      { id: '04', title: 'Use uma Lista de Verificação Visual', description: 'Anote cada tarefa. Riscar itens ajuda você a se manter no caminho certo e dá um impulso de dopamina a cada vez que você completa algo.', icon: 'Checklist' },
      { id: '05', title: 'Experimente o Método Pomodoro', description: 'Trabalhe por 25 minutos, faça uma pausa de 5 minutos. Isso mantém seu cérebro fresco e ajuda a evitar o esgotamento.', icon: 'Pomodoro' },
      { id: '06', title: 'Use Cestas para Organização Rápida', description: 'Jogue tudo em cestas rotuladas (ex: "Quarto", "Brinquedos", "Lixo") e lide com isso mais tarde. Limpa a desordem rapidamente.', icon: 'Basket' },
      { id: '07', title: 'Fale em Voz Alta', description: 'Diga em voz alta o que você está fazendo: "Agora estou pegando os sapatos... agora estou colocando eles no armário." Isso helpsa seu cérebro a se manter focado.', icon: 'Chat' },
      { id: '08', title: 'Feche a Porta para Distrações', description: 'Limpando um cômodo? Feche a porta para outras áreas bagunçadas. Longe da vista = longe da mente enquanto você se concentra em um espaço.', icon: 'Door' },
      { id: '09', title: 'Mantenha Materiais de Limpeza em Cada Cômodo', description: 'Facilite o começo. Um mini kit em cada cômodo economiza viagens e desculpas.', icon: 'Supplies' },
      { id: '10', title: 'Faça uma "Reinicialização" Noturna de 10 Minutos', description: 'Toda noite, passe 10 minutos arrumando seu espaço. Isso evita o acúmulo e cria uma manhã mais calma.', icon: 'Reset' }
    ]
  },
  {
    id: 'bedroom',
    type: 'checklist',
    title: 'QUARTO',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1: PREPARAR & ORGANIZAR', tasks: [
        { text: 'Abra as janelas para ventilar' }, { text: 'Reúna todos os materiais de limpeza' }, { text: 'Escolha uma pequena área para começar' }, { text: 'Recolha o lixo e esvazie as lixeiras' }, { text: 'Pegue as roupas do chão e da cama' }, { text: 'Separe a roupa suja em cestos (lave depois)' }, { text: 'Remova pratos, copos e embalagens' }, { text: 'Limpe superfícies como criados-mudos e cômodas' }, { text: 'Coloque itens que pertencem a outros lugares em uma caixa de "realocação"' }
      ]},
      { title: 'PASSO 2: TIRAR O PÓ DE CIMA PARA BAIXO', tasks: [
        { text: 'Tire o pó do ventilador de teto e luminárias' }, { text: 'Limpe prateleiras, decorações e porta-retratos' }, { text: 'Tire o pó da cabeceira, abajures e despertadores' }, { text: 'Tire o pó dos rodapés e cantos' }, { text: 'Limpe as saídas de ar ou filtros de ar, se necessário' }
      ]},
      { title: 'PASSO 3: LIMPAR & HIGIENIZAR SUPERFÍCIES', tasks: [
        { text: 'Limpe criados-mudos, cômodas e mesas' }, { text: 'Limpe espelhos e superfícies de vidro' }, { text: 'Limpe maçanetas, puxadores de gaveta e interruptores' }, { text: 'Desinfete controles remotos, telefones e interruptores de luz' }, { text: 'Limpe manchas em paredes, portas e marcas' }
      ]},
      { title: 'PASSO 4: CAMA & TECIDOS', tasks: [
        { text: 'Tire e lave lençóis, fronhas e cobertores' }, { text: 'Vire ou aspire a superfície do colchão' }, { text: 'Coloque roupa de cama limpa e afofe os travesseiros' }, { text: 'Lave ou tire o pó de cortinas e persianas' }
      ]},
      { title: 'PASSO 5: CHÃO POR ÚLTIMO', tasks: [
        { text: 'Aspire carpetes ou varra e passe pano nos pisos' }, { text: 'Limpe debaixo da cama, cantos e móveis pequenos' }
      ]},
      { title: 'PASSO 6: TOQUES FINAIS', tasks: [
        { text: 'Coloque os itens de volta no lugar' }, { text: 'Borrife um purificador de ar ou acenda uma vela' }
      ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICAS: Faça uma zona de cada vez (cama, escrivaninha, chão)' }
  },
  {
    id: 'bathroom',
    type: 'checklist',
    title: 'BANHEIRO',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1: ORGANIZAR & PREPARAR', tasks: [
        { text: 'Remova todos os itens dos balcões, prateleiras e área do chuveiro' }, { text: 'Jogue fora frascos vazios, produtos velhos e lixo' }, { text: 'Retire toalhas, tapetes e cortinas de chuveiro para lavar' }, { text: 'Abra as janelas ou ligue o exaustor para ventilação' }
      ]},
      { title: 'PASSO 2: TIRAR O PÓ & LIMPEZA A SECO PRIMEIRO', tasks: [
        { text: 'Tire o pó de luminárias, saídas de ar e exaustores' }, { text: 'Limpe espelhos e superfícies de vidro a seco (sem produto ainda)' }, { text: 'Varra ou aspire o chão para remover cabelos e detritos' }
      ]},
      { title: 'PASSO 3: LIMPAR DE CIMA PARA BAIXO', tasks: [
        { text: 'Borrife e limpe paredes, azulejos e superfícies do chuveiro' }, { text: 'Esfregue as portas do chuveiro ou cortinas' }, { text: 'Limpe a pia, torneiras e bancadas' }
      ]},
      { title: 'PASSO 4: ESFREGAR & DESINFETAR PROFUNDAMENTE', tasks: [
        { text: 'Limpe o vaso sanitário por dentro e por fora (assento, base e alavanca)' }, { text: 'Esfregue a banheira ou o chão do chuveiro com limpador' }, { text: 'Limpe todas as maçanetas, interruptores e puxadores de porta' }, { text: 'Desinfete a lixeira e limpe debaixo dela' }
      ]},
      { title: 'PASSO 5: CHÃO & TOQUES FINAIS', tasks: [
        { text: 'Passe pano no chão (comece do canto mais distante e vá saindo)' }, { text: 'Recoloque tapetes, toalhas e cortinas de chuveiro lavados' }, { text: 'Reabasteça papel higiênico, sabonete e suprimentos' }
      ]},
      { title: 'PASSO 6: REVISÃO FINAL', tasks: [
        { text: 'Esvazie o lixo e coloque um saco novo' }, { text: 'Verifique os espelhos e vidros em busca de manchas' }, { text: 'Acenda uma vela ou use um purificador de ar' }, { text: 'Faça uma varredura visual rápida para pontos esquecidos' }
      ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICAS: Foque no progresso, não na perfeição.' }
  },
  {
    id: 'kitchen',
    type: 'checklist',
    title: 'COZINHA',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
        { title: '1. BANCADAS & SUPERFÍCIES', tasks: [ { text: 'Limpe toda a bagunça' }, { text: 'Limpe bancadas e backsplash' }, { text: 'Limpe pequenos eletrodomésticos (torradeira, cafeteira, liquidificador)' } ]},
        { title: '2. ÁREA DA PIA', tasks: [ { text: 'Esfregue pia e torneira' }, { text: 'Limpe ralo e triturador de lixo' }, { text: 'Troque esponja ou pano' } ]},
        { title: '3. ARMÁRIOS & GAVETAS', tasks: [ { text: 'Limpe portas e puxadores' }, { text: 'Organize um armário de cada vez' }, { text: 'Verifique se há alimentos vencidos ou recipientes velhos' } ]},
        { title: '4. FOGÃO & FORNO', tasks: [ { text: 'Limpe o fogão e os botões' }, { text: 'Limpe dentro do forno' }, { text: 'Lave as grelhas do fogão e as bandejas de gotejamento' } ]},
        { title: '5. GELADEIRA & FREEZER', tasks: [ { text: 'Remova comida velha' }, { text: 'Limpe prateleiras e gavetas' }, { text: 'Limpe o exterior e os puxadores' } ]},
        { title: '6. MICRO-ONDAS & LAVA-LOUÇAS', tasks: [ { text: 'Limpe por dentro e por fora' }, { text: 'Execute um ciclo de limpeza (lava-louças)' }, { text: 'Limpe o filtro e as vedações de borracha' } ]},
        { title: '7. PISOS & LIXO', tasks: [ { text: 'Varra e passe pano no chão' }, { text: 'Esvazie o lixo e limpe a lixeira' }, { text: 'Coloque um novo saco de lixo' } ]},
        { title: '8. TOQUES FINAIS', tasks: [ { text: 'Limpe interruptores de luz e maçanetas' }, { text: 'Troque os panos de prato/Acenda uma vela ou abra uma janela' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICAS: Comece com uma pequena zona (como o balcão ou a pia).' }
  },
  {
    id: 'living-room',
    type: 'checklist',
    title: 'SALA DE ESTAR',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1: ORGANIZAR & ARRUMAR', tasks: [ { text: 'Recolha o lixo e jogue fora.' }, { text: 'Junte pratos sujos e leve para a cozinha.' }, { text: 'Coloque itens fora do lugar de volta em seus devidos lugares.' }, { text: 'Arrume revistas, livros e papéis.' }, { text: 'Remova qualquer coisa que não pertença à sala de estar.' } ]},
      { title: 'PASSO 2: TIRAR O PÓ DAS SUPERFÍCIES', tasks: [ { text: 'Tire o pó de prateleiras, mesas e decoração.' }, { text: 'Limpe TV, controles remotos e eletrônicos.' }, { text: 'Tire o pó de luminárias e ventiladores de teto.' }, { text: 'Limpe peitoris de janela e rodapés.' }, { text: 'Limpe portas e batentes.' } ]},
      { title: 'PASSO 3: CUIDADOS COM OS MÓVEIS', tasks: [ { text: 'Aspire ou limpe sofás e cadeiras.' }, { text: 'Lave capas de almofada removíveis.' }, { text: 'Tire o pó ou lustre móveis de madeira.' }, { text: 'Limpe a mesa de centro e as mesinhas laterais.' }, { text: 'Afofe travesseiros e dobre cobertores.' } ]},
      { title: 'PASSO 4: JANELAS & CORTINAS', tasks: [ { text: 'Limpe janelas de vidro e portas.' }, { text: 'Tire o pó ou lave persianas e cortinas.' }, { text: 'Limpe todos os espelhos.' } ]},
      { title: 'PASSO 5: PISOS & TAPETES', tasks: [ { text: 'Aspire carpetes ou tapetes.' }, { text: 'Sacuda tapetes ou limpe por baixo.' }, { text: 'Passe pano em pisos duros, se necessário.' }, { text: 'Mova os móveis um pouco para limpar por baixo.' } ]},
      { title: 'PASSO 6: TOQUES FINAIS', tasks: [ { text: 'Recoloque a decoração de forma organizada.' }, { text: 'Organize revistas, livros e controles remotos.' }, { text: 'Borrife purificador de ar ou abra as janelas.' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICAS: Foque no progresso, não na perfeição.' }
  },
  {
    id: 'dining-room',
    type: 'checklist',
    title: 'SALA DE JANTAR',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1: INÍCIO RÁPIDO', tasks: [ { text: 'Coloque uma música animada ou defina um cronômetro de 15 minutos.' }, { text: 'Pegue um saco de lixo e um cesto de roupa suja (para itens que pertencem a outro lugar).' } ]},
      { title: 'PASSO 2: LIMPAR SUPERFÍCIES', tasks: [ { text: 'Limpe a mesa de jantar, aparador e cadeiras.' }, { text: 'Jogue o lixo fora e mova qualquer coisa que não pertença ao local.' }, { text: 'Limpe as superfícies enquanto avança.' } ]},
      { title: 'PASSO 3: TIRAR O PÓ DE TUDO', tasks: [ { text: 'Comece de cima: luminárias, ventilador de teto, porta-retratos.' }, { text: 'Passe para prateleiras, peitoris de janela e móveis.' }, { text: 'Finalize com rodapés e cantos.' } ]},
      { title: 'PASSO 4: LIMPAR MÓVEIS', tasks: [ { text: 'Limpe a mesa, cadeiras e qualquer outro móvel.' }, { text: 'Preste atenção nas pernas e na parte de baixo das cadeiras.' } ]},
      { title: 'PASSO 5: LAVAR TECIDOS', tasks: [ { text: 'Remova e lave capas de cadeira, toalhas de mesa ou jogos americanos.' }, { text: 'Limpe assentos de vinil ou couro com um pano úmido.' } ]},
      { title: 'PASSO 6: JANELAS & VIDRO', tasks: [ { text: 'Limpe janelas, espelhos e portas de vidro.' }, { text: 'Limpe manchas de armários ou molduras de vidro.' } ]},
      { title: 'PASSO 7: PISOS', tasks: [ { text: 'Varra ou aspire debaixo da mesa e das cadeiras.' }, { text: 'Mova os móveis um pouco para pegar migalhas escondidas.' }, { text: 'Passe pano ou limpe tapetes, se necessário.' } ]},
      { title: 'PASSO 8: TOQUES FINAIS', tasks: [ { text: 'Recoloque arranjos de mesa ou decoração.' }, { text: 'Borrife um purificador de ar leve ou abra as janelas para ventilar.' }, { text: 'Dê um passo para trás e aprecie seu espaço limpo.' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICA PRO: Foque em uma área de cada vez: mesa, cadeiras, pisos e superfícies.' }
  },
  {
    id: 'pet-chore',
    type: 'checklist',
    title: 'TAREFAS DOS PETS',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1: PREPARE SEU PET & SUPRIMENTOS', tasks: [ { text: 'Dê banho e escove os pets completamente antes de limpar o espaço' }, { text: 'Reúna todos os suprimentos de limpeza: limpadores seguros para pets, detergentes, luvas, aspirador, esfregão, rolo de fiapos, sacos de lixo' } ]},
      { title: 'PASSO 2: ROUPAS DE CAMA & ITENS MACIOS', tasks: [ { text: 'Lave a cama do pet com detergente seguro para pets (água quente, se permitido)' }, { text: 'Lave e desinfete brinquedos (borracha, plástico e tecido lavável)' }, { text: 'Passe rolo de fiapos em cortinas e superfícies macias onde os pets se esfregam' } ]},
      { title: 'PASSO 3: ÁREAS DE COMIDA & ÁGUA', tasks: [ { text: 'Desinfete as tigelas de comida e água (mergulhe em água quente com sabão)' }, { text: 'Limpe profundamente as áreas de alimentação: paredes, tapetes e respingos de comida' } ]},
      { title: 'PASSO 4: CAIXAS DE TRANSPORTE, CASINHAS & FERRAMENTAS DE HIGIENE', tasks: [ { text: 'Higienize caixas de transporte e casinhas (remova almofadas, limpe por dentro/fora)' }, { text: 'Limpe e organize ferramentas de higiene (escovas, cortadores de unha, etc.)' } ]},
      { title: 'PASSO 5: PISOS & MÓVEIS', tasks: [ { text: 'Aspire os móveis, incluindo debaixo das almofadas' }, { text: 'Aspire atrás e debaixo dos móveis onde os pets se escondem ou descansam' }, { text: 'Passe pano nos pisos com limpador seguro para pets (foco em áreas de alto tráfego)' }, { text: 'Limpe a vapor tapetes ou carpetes para remover pelos, manchas e odores' }, { text: 'Limpe rodapés e paredes na altura do pet' }, { text: 'Tire o pó de ventiladores de teto e saídas de ar onde o pelo do pet pode se acumular' } ]},
      { title: 'PASSO 6: ÁREAS ESPECIAIS & QUALIDADE DO AR', tasks: [ { text: 'Areje e aspire colchões se os pets dormem na sua cama' }, { text: 'Troque ou limpe os filtros do ar condicionado/aquecedor' }, { text: 'Limpe janelas e portas de correr com manchas de nariz/patas' } ]},
      { title: 'PASSO 7: LIXO, QUINTAL & DIVERSOS', tasks: [ { text: 'Desinfete latas de lixo (especialmente as usadas para dejetos de pets)' }, { text: 'Limpe o quintal/pátio de dejetos ou pelos se os pets saem' }, { text: 'Lave capas de assento de carro e aspire o carro se os pets andam com você' }, { text: 'Organize os suprimentos do pet (petiscos, remédios, coleiras, etc.)' } ]},
      { title: 'PASSO 8: TOQUES FINAIS', tasks: [ { text: 'Inspecione cantos escondidos para acúmulo de pelos ou acidentes' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICA PRO: Limpe onde seu pet passa mais tempo: camas, sofás e tapetes.' }
  },
  {
    id: 'playroom',
    type: 'checklist',
    title: 'QUARTO DE BRINCAR',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1: ORGANIZAR & ARRUMAR', tasks: [ { text: 'Recolha todos os brinquedos, jogos e materiais de arte' }, { text: 'Separe em categorias: manter, doar, descartar itens quebrados' }, { text: 'Coloque itens semelhantes em caixas ou cestos rotulados' } ]},
      { title: 'PASSO 2: TIRAR O PÓ & SUPERFÍCIES ALTAS', tasks: [ { text: 'Tire o pó dos cantos do teto, saídas de ar e luminárias' }, { text: 'Limpe as pás do ventilador de teto' }, { text: 'Limpe paredes e rodapés' } ]},
      { title: 'PASSO 3: JANELAS & PORTAS', tasks: [ { text: 'Limpe janelas, peitoris e trilhos' }, { text: 'Limpe espelhos (se houver)' }, { text: 'Desinfete maçanetas, interruptores e controles remotos' } ]},
      { title: 'PASSO 4: CUIDADOS COM BRINQUEDOS & JOGOS', tasks: [ { text: 'Limpe e desinfete todos os brinquedos (plástico, pelúcia e tecido)' }, { text: 'Limpe tabuleiros de jogos e peças de quebra-cabeça' }, { text: 'Organize os brinquedos de forma organizada em caixas ou prateleiras rotuladas' } ]},
      { title: 'PASSO 5: MÓVEIS & ÁREAS DE BRINCAR', tasks: [ { text: 'Aspire ou limpe sofás, cadeiras, pufes' }, { text: 'Limpe e desinfete mesas e cadeiras de brincar' }, { text: 'Verifique os móveis em busca de parafusos soltos ou danos' } ]},
      { title: 'PASSO 6: PISOS', tasks: [ { text: 'Aspire carpetes ou tapetes completamente' }, { text: 'Lave o carpete ou limpe a vapor, se necessário' }, { text: 'Varra e passe pano em pisos duros, incluindo a limpeza sob móveis e atrás de unidades de armazenamento' } ]},
      { title: 'PASSO 7: LIVROS & MATERIAIS DE APRENDIZAGEM', tasks: [ { text: 'Tire o pó e reorganize as estantes de livros' }, { text: 'Limpe livros e materiais de aprendizagem' }, { text: 'Remova livros danificados' } ]},
      { title: 'PASSO 8: TOQUES FINAIS', tasks: [ { text: 'Esvazie e desinfete as lixeiras' }, { text: 'Adicione um purificador de ar ou abra as janelas para ventilação' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICA PRO: Foque em uma seção de cada vez para evitar sobrecarga.' }
  },
  {
    id: 'whole-house',
    type: 'checklist',
    title: 'CASA INTEIRA',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1 - PREPARAÇÃO RÁPIDA', tasks: [ { text: 'Reúna suprimentos: limpador multiuso, panos de microfibra, espanador, aspirador, esfregão, sacos de lixo, luvas.' }, { text: 'Etiquete quatro caixas: Manter, Doar, Lixo, Realocar.' }, { text: 'Ligue a música e defina um cronômetro curto (15-20 minutos). Trabalhe em rajadas.' } ]},
      { title: 'PASSO 2 - LIMPEZA DA CASA INTEIRA', tasks: [ { text: 'Organize superfícies e pisos. Recolha itens cômodo por cômodo e separe em suas caixas.' }, { text: 'Tire o pó de todas as superfícies - prateleiras, rodapés, saídas de ar, luminárias e ventiladores de teto (de cima para baixo).' }, { text: 'Limpe janelas e peitoris - por dentro e por fora (onde alcançável), incluindo os trilhos.' }, { text: 'Limpe paredes, portas, maçanetas e interruptores - remova manchas, poeira e impressões digitais.' }, { text: 'Aspire estofados e debaixo das almofadas - sofás, cadeiras e cabeceiras de tecido.' }, { text: 'Lave cortinas e limpe persianas - ou aspire-as com um acessório de escova macia.' }, { text: 'Aspire e passe pano nos pisos - mova móveis leves, se puder, para alcançar a poeira escondida.' }, { text: 'Higienize latas de lixo e lixeiras de reciclagem - por dentro e por fora.' } ]},
      { title: 'PASSO 3 - LIMPEZA PROFUNDA DA COZINHA', tasks: [ { text: 'Limpe por dentro e por fora dos eletrodomésticos - geladeira (incluindo serpentinas), forno, micro-ondas, lava-louças.' }, { text: 'Limpe armários e gavetas - por dentro e por fora.' }, { text: 'Desengordure o backsplash e as paredes - especialmente atrás do fogão e da pia.' }, { text: 'Limpe a pia e a torneira completamente - descalcifique se necessário, lustre as luminárias.' }, { text: 'Organize a despensa e limpe as prateleiras - jogue fora itens vencidos e reabasteça de forma organizada.' } ]},
      { title: 'PASSO 4 - LIMPEZA PROFUNDA DO BANHEIRO', tasks: [ { text: 'Esfregue o chuveiro, a banheira e o rejunte - use uma escova de rejunte ou limpador a vapor para o acúmulo.' }, { text: 'Higienize o vaso sanitário - limpe por dentro, por fora, sob o assento e atrás da base.' }, { text: 'Limpe o toucador, a pia e o espelho - lustre a torneira e as luminárias.' }, { text: 'Limpe gavetas e armários por dentro/fora - remova tudo antes de reorganizar.' }, { text: 'Lave ou substitua a cortina do chuveiro e o forro - ou limpe as portas de vidro.' } ]},
      { title: 'PASSO 5 - LIMPEZA PROFUNDA DO QUARTO', tasks: [ { text: 'Gire e aspire o colchão - considere a limpeza a vapor ou desodorização.' }, { text: 'Lave toda a roupa de cama - lençóis, fronhas, protetores de colchão e travesseiros.' }, { text: 'Organize armários e cômodas - limpe as gavetas e reorganize as roupas.' } ]},
      { title: 'PASSO 6 - TOQUES FINAIS', tasks: [ { text: 'Limpe as saídas de ar, substitua os filtros de HVAC e desinfete eletrônicos - controles remotos, teclados e interruptores de luz.' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICAS: Se você se sentir travado, mude de cômodo e volte mais tarde.' }
  },
    {
    id: 'laundry',
    type: 'checklist',
    title: 'LAVANDERIA',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1: ORGANIZAR & ARRUMAR', tasks: [ { text: 'Jogar fora frascos de detergente vazios e produtos de limpeza vencidos.' }, { text: 'Juntar itens fora do lugar e separar em Manter, Doar ou Lixo.' }, { text: 'Limpar e organizar prateleiras, racks e caixas de armazenamento.' }, { text: 'Agrupar produtos de lavanderia por tipo (detergentes, amaciantes, removedores de manchas).' } ]},
      { title: 'PASSO 2: LIMPEZA PROFUNDA DOS ELETRODOMÉSTICOS', tasks: [ { text: 'Executar um ciclo de limpeza na lavadora com vinagre ou limpador de máquina.' }, { text: 'Remover e esfregar a bandeja do dispensador de detergente.' }, { text: 'Higienizar a junta de borracha (para lavadoras de carregamento frontal).' }, { text: 'Limpar o exterior da lavadora, tampa e botões.' }, { text: 'Inspecionar e limpar as mangueiras de água para poeira ou vazamentos.' }, { text: 'Limpar o coletor de fiapos do secador com água morna e sabão.' }, { text: 'Aspirar dentro do compartimento do coletor de fiapos para remover fiapos escondidos.' }, { text: 'Limpar o tambor do secador com um limpador suave e pano úmido.' }, { text: 'Desconectar e limpar a mangueira de ventilação do secador para prevenir risco de incêndio.' }, { text: 'Limpar o exterior do secador e o painel de controle.' } ]},
      { title: 'PASSO 3: SUPERFÍCIES E DETALHES DO CÔMODO', tasks: [ { text: 'Passar pano e desinfetar o chão, especialmente sob os eletrodomésticos.' }, { text: 'Tirar o pó dos rodapés, cantos e luminárias.' }, { text: 'Limpar interruptores, portas de armário e prateleiras.' }, { text: 'Limpar saídas de ar ou grelhas e trocar filtros, se necessário.' }, { text: 'Limpar cestos de lavanderia, hampers e caixas.' }, { text: 'Lavar ou desinfetar bolas de secadora e bolas de lã.' }, { text: 'Descalcificar e limpar o ferro; limpar a tábua e a estrutura de passar.' }, { text: 'Verificar teias de aranha ou poeira atrás de eletrodomésticos e nos cantos.' }, { text: 'Esvaziar o lixo e reabastecer os suprimentos de forma organizada.' }, { text: 'Borrifar purificador de ar ou usar folhas de secadora para um cheiro limpo.' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICA PRO: Separe primeiro - Mantenha cestos separados para brancos, coloridos e delicados. Separar uma vez economiza tempo depois.' }
  },
  {
    id: 'office',
    type: 'checklist',
    title: 'ESCRITÓRIO',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1: ORGANIZAR & ARRUMAR', tasks: [ { text: 'Limpar a superfície da mesa de tudo.' }, { text: 'Organizar papéis - triturar, arquivar ou reciclar.' }, { text: 'Remover itens vencidos ou desnecessários de gavetas e prateleiras.' } ]},
      { title: 'PASSO 2: TIRAR O PÓ & LIMPAR SUPERFÍCIES', tasks: [ { text: 'Tirar o pó de prateleiras, porta-retratos e decoração.' }, { text: 'Limpar mesa, prateleiras e todas as superfícies planas.' }, { text: 'Limpar janelas e peitoris.' }, { text: 'Limpar rodapés e cantos.' } ]},
      { title: 'PASSO 3: ELETRÔNICOS & SUPRIMENTOS', tasks: [ { text: 'Limpar teclado, mouse e telefone com lenços desinfetantes.' }, { text: 'Tirar o pó do monitor do computador e limpar a tela suavemente.' }, { text: 'Higienizar controles remotos, fones de ouvido e outros eletrônicos.' }, { text: 'Organizar material de escritório - canetas, clipes, notas adesivas.' }, { text: 'Organizar e arrumar cabos usando clipes ou abraçadeiras.' } ]},
      { title: 'PASSO 4: MÓVEIS & PISOS', tasks: [ { text: 'Limpar a cadeira do escritório (braços, base e assento).' }, { text: 'Aspirar ou varrer o chão, incluindo debaixo dos móveis.' }, { text: 'Endireitar móveis e cabos para um layout arrumado.' } ]},
      { title: 'PASSO 5: LIXO & LIMPEZA', tasks: [ { text: 'Esvaziar lixo e lixeiras de reciclagem.' }, { text: 'Desinfetar maçanetas, interruptores de luz e puxadores de gaveta.' }, { text: 'Limpar dentro das gavetas e organizadores.' }, { text: 'Desinfetar impressora, scanner e dispositivos compartilhados.' } ]},
      { title: 'PASSO 6: TOQUES FINAIS', tasks: [ { text: 'Refrescar plantas - tirar o pó das folhas ou substituir as mortas.' }, { text: 'Verificar itens vencidos como lanches ou suprimentos.' }, { text: 'Arejar o ambiente - abrir uma janela ou usar um purificador de ar suave.' }, { text: 'Definir uma pequena "zona de manutenção" para limpezas rápidas diárias.' }, { text: 'Revisar o espaço de trabalho - certificar-se de que tudo tem um lugar.' }, { text: 'Dê um passo para trás e aproveite seu escritório limpo e organizado.' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICA PRO: Não se esqueça debaixo da mesa e ao redor das cadeiras.' }
  },
  {
    id: 'outdoor',
    type: 'checklist',
    title: 'ÁREA EXTERNA',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1: ORGANIZAR & PREPARAR O QUINTAL', tasks: [ { text: 'Remover lixo, itens quebrados e desordem desnecessária.' }, { text: 'Rastele, ensaque e remova folhas, galhos e detritos do quintal.' }, { text: 'Apare e borde plantas, sebes e bordas crescidas demais.' }, { text: 'Arranque ervas daninhas pela raiz e limpe bem os canteiros de flores.' } ]},
      { title: 'PASSO 2: VARRER & LAVAR SUPERFÍCIES COM PRESSÃO', tasks: [ { text: 'Limpe profundamente a entrada de carros e calçadas com uma lavadora de alta pressão.' }, { text: 'Esfregue e higienize o pátio ou deck.' }, { text: 'Varra e limpe profundamente a entrada da garagem ou galpão e a área ao redor.' }, { text: 'Esfregue ou lave com pressão as cercas para remover mofo e acúmulo.' } ]},
      { title: 'PASSO 3: LAVAR EXTERIOR & JANELAS', tasks: [ { text: 'Lave com pressão todo o revestimento exterior ou tijolo da casa.' }, { text: 'Lave a porta da garagem e remova manchas, teias de aranha e acúmulo de sujeira.' }, { text: 'Lave completamente as janelas externas e limpe todas as telas.' } ]},
      { title: 'PASSO 4: LIMPAR MÓVEIS EXTERNOS & TAPETES', tasks: [ { text: 'Esfregue profundamente os móveis externos, incluindo almofadas e armações.' }, { text: 'Limpe tapetes ou capachos externos com água e sabão, depois seque completamente.' }, { text: 'Limpe profundamente a área da piscina ou banheira de hidromassagem, incluindo móveis e azulejos (se aplicável).' } ]},
      { title: 'PASSO 5: HIGIENIZAR LUMINÁRIAS, FERRAMENTAS & GRELHA', tasks: [ { text: 'Remova sujeira e insetos das luminárias externas e limpe as coberturas de vidro.' }, { text: 'Higienize lixeiras, lixeiras de reciclagem e composteiras por dentro e por fora.' }, { text: 'Limpe profundamente a grelha ou churrasqueira, incluindo grelhas, bandejas e exterior.' }, { text: 'Esfregue e desinfete todas as ferramentas e equipamentos de jardim.' }, { text: 'Esvazie, lave e refresque a terra em vasos e floreiras.' } ]},
      { title: 'PASSO 6: CALHAS, PRAGAS & TOQUES FINAIS', tasks: [ { text: 'Remova todos os detritos e lave profundamente calhas e algerozes.' }, { text: 'Inspecione toda a área externa em busca de pragas, ninhos ou infestações e trate se necessário.' }, { text: 'Varra novamente para recolher os detritos restantes.' }, { text: 'Coloque os itens organizados de volta no lugar.' }, { text: 'Regue as plantas ou adicione decoração externa, se necessário.' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICA PRO: Recompense-se - pegue um petisco, faça uma pausa ou relaxe ao ar livre.' }
  },
  {
    id: 'entryway',
    type: 'checklist',
    title: 'HALL DE ENTRADA',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1: ORGANIZAR & ARRUMAR', tasks: [ { text: 'Remover sapatos, casacos, bolsas e outros itens.' }, { text: 'Separar itens em pilhas para guardar, doar ou realocar.' }, { text: 'Sacudir ou aspirar tapetes antes de colocá-los de volta.' } ]},
      { title: 'PASSO 2: TIRAR O PÓ & VARRER SUPERFÍCIES', tasks: [ { text: 'Tirar o pó de prateleiras, bordas e qualquer móvel.' }, { text: 'Limpar interruptores de luz, batentes de porta e rodapés.' } ]},
      { title: 'PASSO 3: LIMPAR PISOS', tasks: [ { text: 'Varrer ou aspirar todo o chão, incluindo os cantos.' }, { text: 'Passar pano em pisos duros ou limpar profundamente tapetes/capachos.' } ]},
      { title: 'PASSO 4: LIMPAR PORTAS & FERRAGENS', tasks: [ { text: 'Limpar a porta da frente por dentro e por fora.' }, { text: 'Polir maçanetas, puxadores e fechaduras.' } ]},
      { title: 'PASSO 5: LIMPAR ESPELHOS & VIDRO', tasks: [ { text: 'Limpar espelhos, painéis de vidro ou janelas com limpador sem manchas.' } ]},
      { title: 'PASSO 6: ORGANIZAR ARMAZENAMENTO', tasks: [ { text: 'Guardar sapatos, casacos e bolsas de forma organizada.' }, { text: 'Usar cestos ou caixas para itens pequenos.' } ]},
      { title: 'PASSO 7: TOQUES FINAIS', tasks: [ { text: 'Trocar os capachos.' }, { text: 'Borrifar um purificador de ar sutil ou óleo essencial para um cheiro limpo.' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICA PRO: Mantenha uma pequena cesta perto da porta para uma organização diária rápida para manter a entrada limpa.' }
  },
  {
    id: 'garage',
    type: 'checklist',
    title: 'GARAGEM',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1 - PREPARAR & ORGANIZAR ÁREA', tasks: [ { text: 'Abrir a porta da garagem para ventilação e luz.' }, { text: 'Reunir 4 caixas: Manter / Doar / Lixo / Realocar.' }, { text: 'Remover itens grandes e móveis para a entrada de carros.' }, { text: 'Organizar itens rapidamente - uma decisão para cada um.' }, { text: 'Separar materiais perigosos para descarte seguro posterior.' } ]},
      { title: 'PASSO 2 - TIRAR O PÓ & LIMPAR TEIAS DE ARANHA', tasks: [ { text: 'Começar de cima (teto, cantos, luzes).' }, { text: 'Tirar o pó de prateleiras, armários e racks de armazenamento.' }, { text: 'Limpar janelas e peitoris.' } ]},
      { title: 'PASSO 3 - LIMPAR SUPERFÍCIES', tasks: [ { text: 'Limpar paredes, rodapés e portas (por dentro e por fora).' }, { text: 'Limpar e higienizar bancada de trabalho ou balcões.' }, { text: 'Limpar eletrodomésticos (freezer, geladeira), se houver.' } ]},
      { title: 'PASSO 4 - LIMPEZA DO PISO', tasks: [ { text: 'Varrer o chão completamente.' }, { text: 'Aspirar bordas e cantos.' }, { text: 'Esfregar ou passar pano no chão com desengraxante.' }, { text: 'Lavar lixeiras e lixeiras de reciclagem.' } ]},
      { title: 'PASSO 5 - ORGANIZAR & GUARDAR', tasks: [ { text: 'Limpar ferramentas e ferragens; guardar de forma organizada.' }, { text: 'Organizar por zonas (Ferramentas / Esportes / Quintal / Sazonal).' }, { text: 'Etiquetar caixas ou prateleiras para encontrar rapidamente mais tarde.' }, { text: 'Limpar e verificar bicicletas ou equipamentos esportivos.' }, { text: 'Armazenar itens perigosos com segurança.' } ]},
      { title: 'PASSO 6 - VERIFICAÇÃO FINAL & MANUTENÇÃO', tasks: [ { text: 'Lubrificar trilhos e dobradiças da porta da garagem.' }, { text: 'Verificar luzes, tomadas e pragas; consertar ou substituir conforme necessário.' }, { text: 'Agendar sua próxima mini limpeza (mensal ou trimestral).' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICA PRO: Faça uma pausa ou pegue um pequeno agrado após terminar cada zona para se manter motivado.' }
  },
  {
    id: 'storage',
    type: 'checklist',
    title: 'ARRUMAÇÃO',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1: LIMPAR & PREPARAR (ANTES DE QUALQUER LIMPEZA)', tasks: [ { text: 'Reunir todos os suprimentos de limpeza, luvas, sacos de lixo, caixas e etiquetas.' }, { text: 'Remover tudo do espaço de armazenamento - esvaziá-lo completamente.' }, { text: 'Organizar itens imediatamente: **Manter / Doar / Reciclar / Descartar.' }, { text: 'Retirar itens indesejados ou vencidos do cômodo imediatamente.' } ]},
      { title: 'PASSO 2: INSPECIONAR & CONSERTAR PROBLEMAS (ANTES DE LIMPAR QUALQUER COISA)', tasks: [ { text: 'Verificar se há pragas, excrementos ou ninhos.' }, { text: 'Inspecionar paredes, piso e teto em busca de vazamentos, umidade ou mofo.' }, { text: 'Limpar e desinfetar qualquer mofo ou bolor encontrado.' }, { text: 'Substituir filtros de ar ou verificar o desumidificador, se usar um.' } ]},
      { title: 'PASSO 3: LIMPAR DE CIMA → BAIXO (PARA QUE A SUJEIRA CAIA PARA BAIXO UMA VEZ)', tasks: [ { text: 'Tirar o pó de tetos, luminárias, saídas de ar e cantos primeiro.' }, { text: 'Limpar paredes, prateleiras e superfícies de armários em seguida.' }, { text: 'Limpar janelas e saídas de ar completamente.' }, { text: 'Desinfetar maçanetas, interruptores e outros pontos de alto toque.' } ]},
      { title: 'PASSO 4: LIMPEZA DO PISO & BASE (SEMPRE POR ÚLTIMO)', tasks: [ { text: 'Aspirar ou varrer todo o piso, incluindo os cantos.' }, { text: 'Passar pano ou lavar o chão com base no material.' }, { text: 'Varrer e arrumar do lado de fora da entrada para evitar rastrear sujeira de volta.' } ]},
      { title: 'PASSO 5: ORGANIZAR & PROTEGER (AGORA QUE O ESPAÇO ESTÁ TOTALMENTE LIMPO)', tasks: [ { text: 'Limpar ou substituir caixas e recipientes antes de reabastecer.' }, { text: 'Agrupar itens semelhantes em zonas (ferramentas, decoração, sazonal, etc.).' }, { text: 'Etiquetar cada caixa e prateleira de forma clara e consistente.' }, { text: 'Colocar itens usados com frequência em locais de fácil acesso; os raramente usados mais altos ou mais profundos.' }, { text: 'Verificar a iluminação para brilho e instalar repelentes de pragas, se necessário.' } ]},
      { title: 'PASSO 6: FINALIZAÇÃO & MANUTENÇÃO (PARA MANTER ASSIM)', tasks: [ { text: 'Devolver apenas os itens "Manter" limpos para o armazenamento - nada sujo.' }, { text: 'Limpar e lubrificar ferramentas ou equipamentos antes de guardá-los.' }, { text: 'Fazer uma limpeza rápida de desinfecção na maçaneta da porta e na área de entrada.' }, { text: 'Tirar uma foto de sua configuração organizada para referência futura.' }, { text: 'Agendar a próxima data de limpeza profunda (a cada 3-6 meses).' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICA PRO: Tire fotos de "antes e depois" - elas dão impulsos de dopamina e acompanham o progresso.' }
  },
  {
    id: 'shower-tub',
    type: 'checklist',
    title: 'CHUVEIRO/BANHEIRA',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1: REMOVER & PREPARAR', tasks: [ { text: 'Remover todos os itens pessoais, tapetes e toalhas.' }, { text: 'Abrir a janela ou ligar o exaustor.' }, { text: 'Reunir suprimentos de limpeza (limpador, escova, esponja, pano, luvas).' } ]},
      { title: 'PASSO 2: TIRAR O PÓ & VARRER', tasks: [ { text: 'Varrer ou aspirar o chão para remover detritos soltos.' }, { text: 'Limpar paredes, cantos e teias de aranha do teto.' } ]},
      { title: 'PASSO 3: PRÉ-TRATAR & DEIXAR DE MOLHO', tasks: [ { text: 'Borrifar azulejos, banheira e luminárias com limpador.' }, { text: 'Aplicar limpador de rejunte nas linhas de rejunte.' }, { text: 'Mergulhar o chuveiro em vinagre ou usar spray descalcificante.' }, { text: 'Deixar os limpadores agirem por 5-10 minutos.' } ]},
      { title: 'PASSO 4: ESFREGAR SUPERFÍCIES', tasks: [ { text: 'Esfregar o rejunte com uma escova dura.' }, { text: 'Esfregar a banheira, azulejos, torneiras, alças e tampa do ralo.' }, { text: 'Remover resíduos de sabão, manchas de água dura, mofo e bolor.' }, { text: 'Limpar e desinfetar prateleiras, saboneteiras e suportes.' } ]},
      { title: 'PASSO 5: ENXAGUAR & SECAR', tasks: [ { text: 'Enxaguar todas as superfícies completamente com água morna (de cima para baixo).' }, { text: 'Secar paredes, banheira, luminárias e vidro com pano de microfibra.' }, { text: 'Usar rodo em portas de vidro para evitar manchas de água.' } ]},
      { title: 'PASSO 6: RESTAURAR & FINALIZAR', tasks: [ { text: 'Lavar ou substituir a cortina/forro do chuveiro e os tapetes de banho.' }, { text: 'Devolver os itens pessoais limpos para a área do chuveiro.' }, { text: 'Limpar/desinfetar o exaustor do banheiro.' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICA PRO: Limpe de cima para baixo, da esquerda para a direita.' }
  },
  {
    id: 'windows',
    type: 'checklist',
    title: 'JANELAS',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1: PREPARAR & ORGANIZAR', tasks: [ { text: 'Remover cortinas, persianas ou cortinados.' }, { text: 'Retirar decorações, plantas ou itens dos peitoris.' }, { text: 'Varrer ou aspirar o chão ao redor das janelas.' }, { text: 'Reunir todos os suprimentos de limpeza (panos de microfibra, balde, esponja, limpador de vidro, escova, luvas).' }, { text: 'Colocar luvas e equipamento de proteção, se necessário.' } ]},
      { title: 'PASSO 2: REMOVER PÓ & TEIAS DE ARANHA', tasks: [ { text: 'Tirar o pó da moldura superior e dos cantos da janela.' }, { text: 'Remover teias de aranha de todos os cantos e bordas.' }, { text: 'Limpar o peitoril da janela com um pano seco.' }, { text: 'Tirar o pó ou aspirar os trilhos da janela.' }, { text: 'Soltar a sujeira nas ranhuras com uma escova pequena ou escova de dentes.' } ]},
      { title: 'PASSO 3: LIMPEZA DO VIDRO INTERIOR', tasks: [ { text: 'Borrifar limpador de vidro ou água com sabão no vidro interior.' }, { text: 'Limpar em movimentos circulares para remover impressões digitais e poeira.' }, { text: 'Passar o rodo de cima para baixo para um acabamento sem manchas.' }, { text: 'Limpar cantos e bordas com um pano de microfibra.' }, { text: 'Verificar se há pontos perdidos e retocar.' } ]},
      { title: 'PASSO 4: LIMPEZA DO VIDRO EXTERIOR', tasks: [ { text: 'Varrer a sujeira solta e os detritos do peitoril exterior.' }, { text: 'Borrifar o vidro exterior com limpador ou água com sabão.' }, { text: 'Esfregar manchas teimosas suavemente com uma esponja.' }, { text: 'Passar o rodo ou limpar para um acabamento sem manchas.' }, { text: 'Enxaguar com água limpa, se necessário, e secar completamente.' } ]},
      { title: 'PASSO 5: LIMPEZA DA MOLDURA & TRILHO', tasks: [ { text: 'Limpar as molduras internas e externas com água e sabão.' }, { text: 'Esfregar os trilhos da janela com uma escova de dentes velha.' }, { text: 'Limpar os trilhos com um pano úmido e secar completamente.' }, { text: 'Lubrificar as partes móveis para janelas de correr, se necessário.' } ]},
      { title: 'PASSO 6: TOQUES FINAIS', tasks: [ { text: 'Recolocar cortinas, persianas ou outros tratamentos de janela.' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICA PRO: Limpe as janelas de cima para baixo e por dentro primeiro para evitar sujar áreas que você já limpou.' }
  },
  {
    id: 'family-room',
    type: 'checklist',
    title: 'SALA DE FAMÍLIA',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1 - PREPARAR & ORGANIZAR', tasks: [ { text: 'Pegar 3 sacos/caixas: Manter / Doar / Lixo' }, { text: 'Abrir janelas e cortinas para ar fresco' }, { text: 'Recolher lixo, copos, embalagens e desordem aleatória' }, { text: 'Juntar brinquedos, livros e cobertores em um só lugar' }, { text: 'Limpar mesas, prateleiras e superfícies de suporte de TV' } ]},
      { title: 'PASSO 2 - TIRAR O PÓ DE CIMA PARA BAIXO', tasks: [ { text: 'Remover teias de aranha dos cantos e tetos' }, { text: 'Tirar o pó das pás do ventilador de teto e luminárias' }, { text: 'Tirar o pó de prateleiras, porta-retratos, abajures e decorações' }, { text: 'Limpar peitoris e trilhos de janela' }, { text: 'Tirar o pó de rodapés e limpar saídas de ar' } ]},
      { title: 'PASSO 3 - JANELAS & VIDRO', tasks: [ { text: 'Limpar janelas por dentro e por fora' }, { text: 'Lavar ou limpar persianas e cortinas' }, { text: 'Limpar espelhos e superfícies de vidro' } ]},
      { title: 'PASSO 4 - MÓVEIS & TECIDOS', tasks: [ { text: 'Limpar todos os móveis com o limpador certo, polir móveis de madeira e acabamentos' }, { text: 'Aspirar sofá/cadeiras e debaixo das almofadas' }, { text: 'Lavar almofadas e cobertores' }, { text: 'Limpar profundamente a área da lareira (se houver)' } ]},
      { title: 'PASSO 5 - ELETRÔNICOS & PONTOS DE TOQUE', tasks: [ { text: 'Limpar TV e eletrônicos com cuidado' }, { text: 'Limpar e desinfetar controles remotos, interruptores e maçanetas' }, { text: 'Higienizar brinquedos e acessórios de jogos' }, { text: 'Verificar e substituir lâmpadas queimadas' } ]},
      { title: 'PASSO 6 - PISOS & REINICIALIZAÇÃO FINAL', tasks: [ { text: 'Mover móveis pequenos, aspirar por baixo e por trás' }, { text: 'Aspirar e passar pano nos pisos (ou limpar a vapor o carpete)' }, { text: 'Desinfetar áreas de animais de estimação e remover pelos de animais' }, { text: 'Adicionar purificador de ar ou difusor para frescor' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICA PRO: Não mire na perfeição - mire no concluído. Uma sala de família limpa é melhor do que uma perfeita.' }
  },
  {
    id: 'stairways',
    type: 'checklist',
    title: 'ESCADARIAS',
    subtitle: 'CHECKLIST DE LIMPEZA PROFUNDA',
    content: [
      { title: 'PASSO 1: PREPARAR + LIMPAR ÁREA', tasks: [ { text: 'Remover sapatos, tapetes ou qualquer desordem das escadas e patamares.' }, { text: 'Reunir suprimentos (aspirador, vassoura, esfregão, panos de microfibra, limpador).' }, { text: 'Certificar-se de que a escadaria esteja bem iluminada antes de começar.' } ]},
      { title: 'PASSO 2: TIRAR O PÓ DAS ÁREAS ALTAS PRIMEIRO', tasks: [ { text: 'Tirar o pó de corrimãos, fusos, balaústres e bordas da parede.' }, { text: 'Limpar luminárias ou arandelas de parede.' }, { text: 'Usar um espanador de microfibra para cantos e teias de aranha.' } ]},
      { title: 'PASSO 3: LIMPAR & HIGIENIZAR SUPERFÍCIES', tasks: [ { text: 'Limpar corrimãos com desinfetante ou limpador de madeira.' }, { text: 'Limpar rodapés e acabamento da escada.' }, { text: 'Limpar manchas nas paredes, se necessário.' } ]},
      { title: 'PASSO 4: ASPIRAR OU VARRER ESCADAS', tasks: [ { text: 'Começar do degrau de cima e descer.' }, { text: 'Usar um acessório de escova para bordas e cantos.' }, { text: 'Verificar sob a borda de cada degrau para poeira escondida.' } ]},
      { title: 'PASSO 5: PASSAR PANO OU LIMPAR PISO', tasks: [ { text: 'Para escadas de madeira - usar um esfregão úmido (não molhado) e limpador seguro para madeira.' }, { text: 'Para escadas com carpete - aspirar novamente ou limpar manchas.' }, { text: 'Secar as escadas completamente para evitar escorregar.' } ]},
      { title: 'PASSO 6: TOQUE FINAL + REINICIALIZAÇÃO', tasks: [ { text: 'Recolocar tapetes ou passadeiras de escada (certifique-se de que estão planos).' }, { text: 'Colocar os itens de volta de forma organizada (sapatos, decoração, etc.).' }, { text: 'Borrifar purificador de ar ou abrir uma janela para ar fresco.' }, { text: 'Verificação visual rápida - corrimãos brilhantes, degraus limpos, sem desordem!' } ]}
    ],
    footer: { showNotes: true, showReward: true, tip: 'DICA PRO: Comece no degrau de cima e trabalhe para baixo para que a sujeira não caia nos degraus limpos.' }
  },
  {
    id: 'master-cleaning-list-1',
    type: 'master-list',
    title: 'LISTA MESTRA DE LIMPEZA',
    subtitle: 'MANTENHA-SE ORGANIZADO COM ESTE CHECKLIST TUDO-EM-UM',
    content: [
      {
        title: '',
        columns: [
          { title: 'CASA INTEIRA', items: ['Tirar pó de teias de aranha & cantos do teto', 'Tirar pó de luminárias & abajures', 'Tirar pó de prateleiras, molduras & decoração', 'Tirar pó de persianas & peitoris de janela', 'Limpar rodapés', 'Limpar manchas nas paredes', 'Limpar maçanetas, puxadores & interruptores', 'Limpar tapetes & carpetes', 'Passar pano ou vapor nos pisos', 'Lavar coberturas de janela', 'Limpar vidros & telas de janela', 'Limpar debaixo dos móveis', 'Lavar capas de sofá & almofadas', 'Lavar enchimentos de almofadas', 'Limpar latas de lixo', 'Limpar saídas de ar & registros', 'Trocar filtros de ar', 'Limpar eletrônicos', 'Lavar roupas de cama', 'Arejar o cômodo & refrescar tecidos'] },
          { title: 'ÁREA DE ESTAR', items: ['Aspirar/tirar pó de móveis & almofadas', 'Limpar atrás & debaixo de eletrônicos', 'Limpar todos os móveis', 'Lavar mantas', 'Limpar almofadas', 'Limpar organizadores, caixas & cestos', 'Limpar prateleiras & armários (maçanetas, puxadores)', 'Tirar pó de decoração & quadros', 'Lavar ou limpar manchas em estofados', 'Aspirar/tirar pó debaixo dos móveis'] }
        ]
      },
      {
        title: '',
        columns: [
           { title: 'QUARTO', items: ['Tirar pó de teias de aranha', 'Limpar roupas de cama, cobertores, edredons', 'Limpar lençóis, protetor de colchão, saias de cama', 'Aspirar todos os móveis', 'Polir todos os móveis de madeira', 'Limpar decoração e quadros', 'Limpar brinquedos/livros/armários infantis', 'Limpar caixas/baldes', 'Limpar qualquer estofado', 'Virar ou girar colchão', 'Recolher roupas'] },
           { title: 'COZINHA', items: ['Lavar & guardar pratos', 'Limpeza profunda do fogão & forno', 'Limpar micro-ondas', 'Limpar lava-louças', 'Limpar pequenos eletrodomésticos', 'Limpar armários', 'Limpar bancadas', 'Esfregar & desinfetar pia', 'Limpar puxadores & maçanetas', 'Limpar dentro da geladeira', 'Limpar dentro do freezer', 'Esvaziar lixo', 'Limpar pia, descarte & ralo de borracha', 'Limpar torneira & pulverizador', 'Limpar descarte de lixo', 'Lavar a lixeira', 'Limpar decoração de parede', 'Limpar backsplash', 'Limpar mesa, cadeiras & banquetas', 'Organizar itens da despensa', 'Organizar armários & gavetas'] }
        ]
      }
    ]
  },
  {
    id: 'master-cleaning-list-2',
    type: 'master-list',
    title: 'LISTA MESTRA DE LIMPEZA',
    subtitle: 'MANTENHA-SE ORGANIZADO COM ESTE CHECKLIST TUDO-EM-UM',
    content: [
      {
        title: '',
        columns: [
          { title: 'BANHEIRO', items: ['Esfregar pia & bancada', 'Limpar torneira & puxadores', 'Esfregar vaso sanitário (dentro & fora)', 'Esfregar chuveiro & banheira', 'Limpar chuveiro & acessórios', 'Lavar espelhos & vidros', 'Limpar armários & gavetas', 'Limpar azulejos & backsplash', 'Esvaziar lixo & lavar lixeira', 'Passar pano ou esfregar chão', 'Lavar tapetes & toalhas de banho', 'Limpar saídas de ar, ventiladores & luminárias'] },
          { title: 'SALA DE JANTAR', items: ['Tirar pó dos cantos do teto & luminárias', 'Limpar janelas & peitoris', 'Tirar pó de prateleiras, decoração & arte de parede', 'Limpar mesa & cadeiras', 'Limpar almofadas de cadeira ou estofados', 'Polir móveis de madeira', 'Limpar armários, buffet & puxadores', 'Aspirar ou passar pano no chão', 'Lavar cortinas ou limpar persianas', 'Esvaziar lixo & refrescar o ambiente'] }
        ]
      },
      {
        title: '',
        columns: [
          { title: 'LAVANDERIA', items: ['Limpar exterior da lavadora e secadora', 'Limpar tambor e dispenser da lavadora', 'Limpar coletor de fiapos e ventilação da secadora', 'Limpar balcões e prateleiras', 'Limpar pia de serviço e torneira', 'Limpar armários e puxadores', 'Aspirar ou passar pano no chão', 'Organizar suprimentos de lavanderia', 'Esvaziar lixo e lavar lixeira', 'Tirar pó de luminárias e cantos'] },
          { title: 'ESCRITÓRIO', items: ['Tirar pó de mesa, prateleiras e decoração', 'Limpar computador, teclado e mouse', 'Limpar tela do monitor', 'Organizar papéis e arquivos', 'Limpar armários e gavetas', 'Aspirar ou passar pano no chão', 'Esvaziar lixo e triturar papéis', 'Tirar pó de luminárias e cantos'] },

        ]
      },
       {
        title: '',
        columns: [
          { title: 'HALL DE ENTRADA', items: ['Limpar porta, puxadores e interruptores', 'Limpar tapete ou capacho de entrada', 'Tirar pó de prateleiras e decoração', 'Limpar espelhos ou vidros', 'Organizar sapatos e casacos', 'Aspirar ou passar pano no chão', 'Esvaziar cestos ou lixeiras'] },
          { title: 'GARAGEM', items: ['Varrer e passar pano no chão', 'Tirar pó de prateleiras e superfícies', 'Organizar ferramentas e suprimentos', 'Limpar portas e interruptores', 'Esvaziar lixo e reciclagem'] },
          { title: 'ÁREA EXTERNA', items: ['Varrer varanda, pátio e calçadas', 'Limpar móveis externos', 'Limpar janelas e portas', 'Esvaziar lixo externo e reciclagem'] }
        ]
      }
    ]
  },
  {
    id: 'log-book',
    type: 'log-book',
    title: 'REGISTRO DE LIMPEZA',
    subtitle: 'MANTENHA SUA ROTINA DE LIMPEZA ORGANIZADA E EM DIA',
    content: []
  },
    {
    id: 'goals',
    type: 'goals',
    title: 'METAS & PRIORIDADES DE LIMPEZA',
    subtitle: 'MANTENHA SUA ROTINA DE LIMPEZA ORGANIZADA E EM DIA',
    content: {}
  },
    {
    id: 'tracker',
    type: 'calendar-tracker',
    title: 'RASTREADOR DE LIMPEZA',
    subtitle: 'MANTENHA SUA ROTINA DE LIMPEZA ORGANIZADA E EM DIA',
    content: [
      { month: 'Janeiro' }, { month: 'Fevereiro' }, { month: 'Março' },
      { month: 'Abril' }, { month: 'Maio' }, { month: 'Junho' },
      { month: 'Julho' }, { month: 'Agosto' }, { month: 'Setembro' },
      { month: 'Outubro' }, { month: 'Novembro' }, { month: 'Dezembro' },
    ]
  },
  {
    id: 'daily-schedule',
    type: 'schedule',
    title: 'CRONOGRAMA DE LIMPEZA DIÁRIO',
    subtitle: 'MANTENHA SUA CASA ORGANIZADA E EM ORDEM',
    content: [
      {
        title: 'TAREFAS DIÁRIAS (15-20 MINUTOS)',
        columns: [
          { header: 'Manhã', tasks: ['Arrumar a cama', 'Limpar bancadas da cozinha', 'Lavar a louça do café da manhã', 'Limpar a pia da cozinha'] },
          { header: 'Tarde', tasks: ['Limpeza rápida de 5 minutos', 'Guardar itens fora do lugar', 'Limpar superfícies usadas'] },
          { header: 'Noite', tasks: ['Lavar a louça do jantar', 'Limpar o chão da cozinha', 'Preparar para o dia seguinte', 'Tirar o lixo'] }
        ]
      }
    ]
  },
  {
    id: 'weekly-schedule',
    type: 'schedule',
    title: 'CRONOGRAMA DE LIMPEZA SEMANAL',
    subtitle: 'MANTENHA SUA CASA ORGANIZADA E EM ORDEM',
    content: [
      {
        title: '',
        columns: [
            { header: 'Segunda', tasks: ['Limpar Banheiros'] },
            { header: 'Terça', tasks: ['Tirar o pó dos móveis'] },
            { header: 'Quarta', tasks: ['Aspirar e Passar Pano'] },
            { header: 'Quinta', tasks: ['Limpeza Profunda da Cozinha'] },
            { header: 'Sexta', tasks: ['Organizar e Arrumar'] },
            { header: 'Sábado', tasks: ['Lavar Roupa e Roupas de Cama'] },
            { header: 'Domingo', tasks: ['Planejar e Preparar a Semana'] }
        ]
      }
    ]
  },
  {
    id: 'monthly-schedule',
    type: 'schedule',
    title: 'CRONOGRAMA DE LIMPEZA MENSAL',
    subtitle: 'MANTENHA SUA CASA ORGANIZADA E EM ORDEM',
    content: [
      {
        title: '',
        columns: [
            { header: 'Semana 1', tasks: ['Limpar luminárias', 'Limpar rodapés', 'Limpar interruptores e maçanetas'] },
            { header: 'Semana 2', tasks: ['Limpar interior de eletrodomésticos', 'Limpar janelas e espelhos', 'Lavar cortinas e persianas'] },
            { header: 'Semana 3', tasks: ['Limpeza profunda de tapetes', 'Aspirar estofados', 'Organizar armários e gavetas'] },
            { header: 'Semana 4', tasks: ['Limpar despensa', 'Limpar exterior da casa (varanda)', 'Verificar detectores de fumaça'] }
        ]
      }
    ]
  },
  {
    id: 'seasonal-schedule',
    type: 'schedule',
    title: 'CRONOGRAMA DE LIMPEZA SAZONAL',
    subtitle: 'MANTENHA SUA CASA ORGANIZADA E EM ORDEM',
    content: [
      {
        title: '',
        columns: [
            { header: 'Primavera', tasks: ['Limpeza profunda da casa inteira', 'Organizar garagem', 'Lavar janelas (dentro/fora)', 'Limpar calhas'] },
            { header: 'Verão', tasks: ['Limpar churrasqueira e móveis de pátio', 'Manutenção do ar condicionado', 'Limpar ventiladores de teto', 'Controlar pragas'] },
            { header: 'Outono', tasks: ['Inspecionar lareira e chaminé', 'Guardar móveis de verão', 'Verificar isolamento de janelas', 'Limpar folhas do quintal'] },
            { header: 'Inverno', tasks: ['Organizar decorações de feriados', 'Limpeza profunda de tapetes', 'Proteger canos do congelamento', 'Verificar sistema de aquecimento'] }
        ]
      }
    ]
  },
  {
    id: 'declutter-guide',
    type: 'declutter-guide',
    title: 'GUIA DE ORGANIZAÇÃO',
    subtitle: 'DECIDA O QUE FAZER COM CADA ITEM',
    content: []
  },
  {
    id: 'declutter-checklist',
    type: 'master-list',
    title: 'CHECKLIST DE ORGANIZAÇÃO',
    subtitle: 'ORGANIZE SUA CASA, UM CÔMODO DE CADA VEZ',
    content: [
      {
        title: 'Áreas de Convivência & Quartos',
        columns: [
          { title: 'Superfícies', items: ['Mesas de centro e laterais', 'Prateleiras e estantes', 'Criados-mudos', 'Cômodas e penteadeiras'] },
          { title: 'Armazenamento', items: ['Gavetas', 'Armários', 'Guarda-roupas', 'Caixas e cestos'] }
        ]
      },
      {
        title: 'Cozinha & Banheiro',
        columns: [
          { title: 'Cozinha', items: ['Bancadas', 'Despensa e armários de comida', 'Gaveta de "tranqueiras"', 'Geladeira e freezer', 'Armário de potes e panelas'] },
          { title: 'Banheiro', items: ['Armário de remédios', 'Gavetas da penteadeira', 'Debaixo da pia', 'Box do chuveiro', 'Armário de roupas de banho'] }
        ]
      }
    ]
  },
  {
    id: '30-day-declutter',
    type: 'declutter-grid',
    title: 'DESAFIO DE ORGANIZAÇÃO DE 30 DIAS',
    subtitle: 'PEQUENOS PASSOS PARA UMA CASA SEM BAGUNÇA',
    content: [
      { area: 'Dia 1: Gaveta de tranqueiras' }, { area: 'Dia 2: Bancadas da cozinha' },
      { area: 'Dia 3: Armário de remédios' }, { area: 'Dia 4: Uma prateleira de livros' },
      { area: 'Dia 5: Revistas e jornais' }, { area: 'Dia 6: Mesa de centro' },
      { area: 'Dia 7: Geladeira' }, { area: 'Dia 8: Despensa' },
      { area: 'Dia 9: Criado-mudo' }, { area: 'Dia 10: Sapatos' },
      { area: 'Dia 11: Casacos e jaquetas' }, { area: 'Dia 12: Maquiagem e cosméticos' },
      { area: 'Dia 13: Brinquedos' }, { area: 'Dia 14: Filmes e músicas (DVDs, CDs)' },
      { area: 'Dia 15: Meias e roupas íntimas' }, { area: 'Dia 16: Joias e acessórios' },
      { area: 'Dia 17: Papelada e correspondência' }, { area: 'Dia 18: Eletrônicos antigos' },
      { area: 'Dia 19: Suprimentos de limpeza' }, { area: 'Dia 20: Roupas de cama e toalhas' },
      { area: 'Dia 21: Gaveta de utensílios' }, { area: 'Dia 22: Congelador' },
      { area: 'Dia 23: Artesanato ou hobbies' }, { area: 'Dia 24: Armário de Tupperware' },
      { area: 'Dia 25: Itens sentimentais' }, { area: 'Dia 26: Carro' },
      { area: 'Dia 27: Bolsas e mochilas' }, { area: 'Dia 28: Itens de decoração' },
      { area: 'Dia 29: Área de trabalho/escritório' }, { area: 'Dia 30: Apps e arquivos digitais' },
    ]
  },
  {
    id: 'supplies',
    type: 'supplies',
    title: 'SUPRIMENTOS DE LIMPEZA',
    subtitle: 'CHECKLIST ESSENCIAL E RECEITAS CASEIRAS',
    content: [
        {
            title: 'CHECKLIST ESSENCIAL DE SUPRIMENTOS',
            sections: [
                { title: 'Multiuso', items: ['Limpador multiuso', 'Panos de microfibra', 'Esponjas', 'Balde', 'Luvas de borracha', 'Borrifador'] },
                { title: 'Cozinha', items: ['Detergente de louça', 'Desengordurante', 'Limpador de forno', 'Limpador de aço inoxidável', 'Pastilhas para lava-louças'] },
                { title: 'Banheiro', items: ['Limpador de vaso sanitário', 'Limpador de mofo/bolor', 'Limpador de vidros', 'Limpador de azulejos', 'Desinfetante'] },
                { title: 'Pisos', items: ['Limpador de pisos (adequado ao seu tipo)', 'Vassoura e pá', 'Aspirador de pó', 'Esfregão'] },
                { title: 'Lavanderia', items: ['Detergente para roupas', 'Amaciante', 'Removedor de manchas', 'Alvejante'] },
                { title: 'Especialidade', items: ['Lustra-móveis', 'Limpador de carpetes', 'Escovas (vários tamanhos)', 'Sacos de lixo'] },
            ]
        },
        {
            title: 'RECEITAS DE LIMPADORES CASEIROS',
            sections: [
                { title: 'Limpador Multiuso', items: ['1 parte de vinagre branco', '1 parte de água', 'Cascas de limão (opcional)', 'Ramos de alecrim (opcional)'] },
                { title: 'Limpador de Vidros', items: ['2 xícaras de água', '1/2 xícara de vinagre branco', '1/4 xícara de álcool isopropílico 70%', '1-2 gotas de óleo essencial de laranja (opcional)'] },
                { title: 'Desengordurante de Cozinha', items: ['1 xícara de vinagre branco', '1/2 colher de chá de detergente', 'Borrifar, deixar agir por 5 min, limpar'] },
                { title: 'Limpador de Chão', items: ['1 galão de água morna', '1/2 xícara de vinagre branco', 'Algumas gotas de óleo essencial (opcional)'] },
            ]
        }
    ]
  },
  {
    id: 'challenge-intro',
    type: 'checklist',
    title: 'DESAFIO DE LIMPEZA DE 52 SEMANAS',
    subtitle: 'TRANSFORME SUA CASA EM UM ANO',
    content: [
      { title: 'COMO FUNCIONA', tasks: [
        { text: 'Este desafio divide a limpeza profunda da sua casa em 52 tarefas semanais gerenciáveis.' },
        { text: 'Concentre-se em uma pequena tarefa por semana para evitar a sobrecarga.' },
        { text: 'No final do ano, sua casa inteira terá recebido uma limpeza profunda e organizada.' },
        { text: 'Marque cada semana conforme você avança. Divirta-se!' }
      ]},
      { title: 'DICAS PARA O SUCESSO', tasks: [
        { text: 'Agende um horário específico a cada semana para sua tarefa.' },
        { text: 'Ouça música ou um podcast para tornar a tarefa mais agradável.' },
        { text: 'Não se preocupe com a perfeição. O objetivo é o progresso!' },
        { text: 'Recompense-se após completar as tarefas de um mês.' }
      ]}
    ]
  },
  ...Array.from({ length: 13 }).map((_, i): PageData => {
    const startWeek = i * 4 + 1;
    const endWeek = startWeek + 3;
    const weekData = [
        // Cozinha
        { week: 1, title: 'Limpar a geladeira e o freezer' }, { week: 2, title: 'Limpar o micro-ondas e a torradeira' }, { week: 3, title: 'Limpar o forno e o fogão' }, { week: 4, title: 'Limpar a lava-louças e a pia' },
        // Cozinha e Sala de Jantar
        { week: 5, title: 'Organizar a despensa' }, { week: 6, title: 'Limpar bancadas e backsplash' }, { week: 7, title: 'Limpar armários da cozinha (exterior)' }, { week: 8, title: 'Limpar a mesa e as cadeiras da sala de jantar' },
        // Sala de Estar
        { week: 9, title: 'Tirar o pó de todas as superfícies' }, { week: 10, title: 'Limpar eletrônicos (TV, controles)' }, { week: 11, title: 'Aspirar estofados e debaixo das almofadas' }, { week: 12, title: 'Lavar mantas e capas de almofada' },
        // Quartos
        { week: 13, title: 'Virar e aspirar colchões' }, { week: 14, title: 'Lavar todos os travesseiros e roupas de cama' }, { week: 15, title: 'Organizar um armário' }, { week: 16, title: 'Limpar criados-mudos e cômodas' },
        // Banheiros
        { week: 17, title: 'Limpar o chuveiro e a banheira' }, { week: 18, title: 'Limpar o vaso sanitário (dentro e fora)' }, { week: 19, title: 'Limpar espelhos e pias' }, { week: 20, title: 'Organizar armários e gavetas do banheiro' },
        // Áreas Gerais
        { week: 21, title: 'Limpar todas as janelas (interior)' }, { week: 22, title: 'Limpar todos os rodapés' }, { week: 23, title: 'Limpar todas as portas e maçanetas' }, { week: 24, title: 'Limpar todas as luminárias e interruptores' },
        // Lavanderia e Entrada
        { week: 25, title: 'Limpar a lavadora e a secadora' }, { week: 26, title: 'Organizar os suprimentos de lavanderia' }, { week: 27, title: 'Limpar o hall de entrada' }, { week: 28, title: 'Organizar sapatos e casacos' },
        // Limpeza Profunda
        { week: 29, title: 'Limpar debaixo dos móveis da sala' }, { week: 30, title: 'Limpar debaixo das camas' }, { week: 31, title: 'Limpar paredes' }, { week: 32, title: 'Limpar tapetes e carpetes' },
        // Exterior e Garagem
        { week: 33, title: 'Varrer a garagem' }, { week: 34, title: 'Organizar uma seção da garagem' }, { week: 35, title: 'Varrer a varanda/pátio' }, { week: 36, title: 'Limpar móveis externos' },
        // Manutenção
        { week: 37, title: 'Trocar filtros de ar' }, { week: 38, title: 'Limpar saídas de ar' }, { week: 39, title: 'Verificar detectores de fumaça' }, { week: 40, title: 'Limpeza profunda do lixo e reciclagem' },
        // Detalhes Finais
        { week: 41, title: 'Tirar pó de plantas (reais ou falsas)' }, { week: 42, title: 'Limpar quadros e decorações de parede' }, { week: 43, title: 'Polir móveis de madeira' }, { week: 44, title: 'Limpar persianas e cortinas' },
        // Preparação para Feriados/Eventos
        { week: 45, title: 'Organizar a despensa para feriados' }, { week: 46, title: 'Limpar a prataria e louças especiais' }, { week: 47, title: 'Limpeza profunda da cozinha' }, { week: 48, title: 'Limpeza profunda dos banheiros' },
        // Reinicialização
        { week: 49, title: 'Organizar a papelada' }, { week: 50, title: 'Limpar o carro' }, { week: 51, title: 'Organizar o armazenamento digital' }, { week: 52, title: 'Planejar o cronograma de limpeza do próximo ano!' }
    ];
    
    return {
      id: `challenge-weeks-${startWeek}-${endWeek}`,
      type: 'challenge',
      title: `DESAFIO DE 52 SEMANAS`,
      subtitle: `SEMANAS ${startWeek} - ${endWeek}`,
      content: weekData.slice(startWeek -1, endWeek).map(w => ({
        week: w.week,
        title: w.title,
        challenges: [{ title: 'Tarefas', tasks: [{ text: 'Complete esta tarefa esta semana.' }] }]
      }))
    };
  }),
  {
    id: 'maintenance-checklist',
    type: 'maintenance-checklist',
    title: 'CHECKLIST DE MANUTENÇÃO DA CASA',
    subtitle: 'MANTENHA SUA CASA SEGURA E FUNCIONANDO BEM',
    content: [
      { season: 'Primavera', tasks: ['Limpar calhas e algerozes', 'Lavar janelas e telas externas', 'Inspecionar o telhado em busca de danos', 'Verificar e limpar o ar condicionado', 'Testar detectores de fumaça e monóxido de carbono', 'Inspecionar o exterior em busca de rachaduras e pintura'] },
      { season: 'Verão', tasks: ['Limpar a grelha/churrasqueira', 'Verificar decks, pátios e cercas', 'Inspecionar e limpar ventiladores de teto', 'Controlar pragas (formigas, mosquitos)', 'Limpar o duto de ventilação da secadora', 'Verificar se há vazamentos em torneiras e canos'] },
      { season: 'Outono', tasks: ['Limpar e inspecionar lareira e chaminé', 'Verificar o sistema de aquecimento', 'Vedar correntes de ar em janelas e portas', 'Drenar e guardar mangueiras de jardim', 'Rastele as folhas e prepare o jardim para o inverno', 'Guardar móveis de exterior'] },
      { season: 'Inverno', tasks: ['Proteger canos contra congelamento', 'Limpar e organizar a garagem', 'Verificar o isolamento do sótão', 'Limpar cabeças de chuveiro para remover minerais', 'Inspecionar por danos causados por gelo', 'Planejar projetos de melhoria para o próximo ano'] }
    ]
  },
  {
    id: 'maintenance-log',
    type: 'maintenance-log',
    title: 'REGISTRO DE MANUTENÇÃO',
    subtitle: 'ACOMPANHE REPAROS E SERVIÇOS IMPORTANTES',
    content: {}
  },
  {
    id: 'project-planner',
    type: 'project-planner',
    title: 'PLANEJADOR DE PROJETO',
    subtitle: 'ORGANIZE GRANDES TAREFAS PASSO A PASSO',
    content: {}
  },
  {
    id: 'pantry-inventory',
    type: 'inventory',
    title: 'INVENTÁRIO DA DESPENSA',
    subtitle: 'NUNCA MAIS FIQUE SEM ITENS ESSENCIAIS',
    content: {}
  },
  {
    id: 'freezer-inventory',
    type: 'inventory',
    title: 'INVENTÁRIO DO FREEZER',
    subtitle: 'ACOMPANHE SUAS REFEIÇÕES E INGREDIENTES CONGELADOS',
    content: {}
  },
  {
    id: 'fridge-inventory',
    type: 'inventory',
    title: 'INVENTÁRIO DA GELADEIRA',
    subtitle: 'SAIBA O QUE VOCÊ TEM E REDUZA O DESPERDÍCIO',
    content: {}
  },
  {
    id: 'cleaning-supplies-inventory',
    type: 'inventory',
    title: 'INVENTÁRIO DE MATERIAL DE LIMPEZA',
    subtitle: 'NUNCA FIQUE SEM SEUS PRODUTOS ESSENCIAIS',
    content: {}
  },
  {
    id: 'shopping-list',
    type: 'shopping-list',
    title: 'LISTA DE COMPRAS',
    subtitle: 'ORGANIZE SUAS COMPRAS E NÃO ESQUEÇA NADA',
    content: {}
  },
  {
    id: 'zone-cleaning',
    type: 'zone-cleaning',
    title: 'PLANO DE LIMPEZA POR ZONA',
    subtitle: 'DIVIDA SUA CASA EM ZONAS PARA UMA LIMPEZA FOCADA',
    content: {
        explanation: 'A limpeza por zona envolve focar em uma área (ou "zona") da sua casa a cada semana. Ao longo de um mês, você terá feito uma limpeza profunda em toda a casa sem se sobrecarregar. Gaste 15-20 minutos por dia na zona da semana e siga a lista mestra de limpeza para aquela área.',
    }
  },
  {
    id: 'weekly-planner',
    type: 'weekly-planner',
    title: 'PLANEJADOR SEMANAL',
    subtitle: 'ORGANIZE SUA SEMANA E SUAS TAREFAS',
    content: {}
  },
  {
    id: 'meal-planner',
    type: 'meal-planner',
    title: 'PLANEJADOR DE REFEIÇÕES',
    subtitle: 'PLANEJE SUAS REFEIÇÕES E SIMPLIFIQUE AS COMPRAS',
    content: {}
  },
  {
    id: 'brain-dump',
    type: 'brain-dump',
    title: 'BRAIN DUMP',
    subtitle: 'TIRE TUDO DA SUA CABEÇA E COLOQUE NO PAPEL',
    content: {}
  },
  {
    id: 'password-tracker',
    type: 'password-tracker',
    title: 'REGISTRO DE SENHAS',
    subtitle: 'MANTENHA SUAS SENHAS SEGURAS E ORGANIZADAS',
    content: {}
  },
  {
    id: 'contacts',
    type: 'contacts',
    title: 'CONTATOS IMPORTANTES',
    subtitle: 'MANTENHA OS NÚMEROS IMPORTANTES À MÃO',
    content: {}
  },
  {
    id: 'monthly-budget',
    type: 'monthly-budget',
    title: 'ORÇAMENTO MENSAL',
    subtitle: 'CONTROLE SUAS FINANÇAS DOMÉSTICAS',
    content: {}
  },
  {
    id: 'expense-tracker',
    type: 'expense-tracker',
    title: 'RASTREADOR DE DESPESAS',
    subtitle: 'ACOMPANHE PARA ONDE SEU DINHEIRO ESTÁ INDO',
    content: {}
  },
  {
    id: 'bill-tracker',
    type: 'bill-tracker',
    title: 'CONTROLE DE CONTAS',
    subtitle: 'NUNCA MAIS PERCA UMA DATA DE VENCIMENTO',
    content: {}
  },
  {
    id: 'habit-tracker',
    type: 'habit-tracker',
    title: 'RASTREADOR DE HÁBITOS',
    subtitle: 'CONSTRUA BOAS ROTINAS, UM DIA DE CADA VEZ',
    content: {}
  },
  {
    id: 'pet-care',
    type: 'pet-care',
    title: 'CUIDADOS COM O PET',
    subtitle: 'INFORMAÇÕES IMPORTANTES SOBRE SEU AMIGO PELUDO',
    content: {}
  },
  {
    id: 'medical-info',
    type: 'medical-info',
    title: 'INFORMAÇÕES MÉDICAS',
    subtitle: 'TENHA OS DADOS DE SAÚDE DA FAMÍLIA SEMPRE À MÃO',
    content: {}
  },
  {
    id: 'school-info',
    type: 'school-info',
    title: 'INFORMAÇÕES ESCOLARES',
    subtitle: 'ORGANIZE A VIDA ACADÊMICA DOS SEUS FILHOS',
    content: {}
  },
  {
    id: 'chore-chart',
    type: 'chore-chart',
    title: 'QUADRO DE TAREFAS DA FAMÍLIA',
    subtitle: 'DIVIDINDO AS RESPONSABILIDADES PARA UMA CASA FELIZ',
    content: {}
  },
  {
    id: 'reward-chart',
    type: 'reward-chart',
    title: 'QUADRO DE RECOMPENSAS',
    subtitle: 'CELEBRANDO O TRABALHO DURO E A CONSISTÊNCIA',
    content: {}
  },
  {
    id: 'family-meeting-notes',
    type: 'family-meeting-notes',
    title: 'PAUTA DA REUNIÃO DE FAMÍLIA',
    subtitle: 'UM TEMPO PARA CONECTAR, PLANEJAR E RESOLVER JUNTOS',
    content: {}
  },
  {
    id: 'gratitude-journal',
    type: 'gratitude-journal',
    title: 'DIÁRIO DE GRATIDÃO',
    subtitle: 'FOQUE NO POSITIVO E CULTIVE A FELICIDADE',
    content: {}
  },
  {
    id: 'when-did-i-last-tracker',
    type: 'when-did-i-last-tracker',
    title: 'QUANDO FOI A ÚLTIMA VEZ...',
    subtitle: 'RASTREADOR DE TAREFAS INFREQUENTES',
    content: {}
  },
  {
    id: 'goals-board',
    type: 'goals-board',
    title: 'QUADRO DE METAS',
    subtitle: 'DEFINA E ACOMPANHE SUAS AMBIÇÕES',
    content: {}
  },
  {
    id: 'reading-tracker',
    type: 'reading-tracker',
    title: 'RASTREADOR DE LEITURA',
    subtitle: 'UMA PRATELEIRA PARA OS LIVROS QUE VOCÊ LEU',
    content: {}
  },
  {
    id: 'subscription-tracker',
    type: 'subscription-tracker',
    title: 'RASTREADOR DE ASSINATURAS',
    subtitle: 'CONTROLE SEUS SERVIÇOS RECORRENTES',
    content: {}
  },
  {
    id: 'vehicle-maintenance-log',
    type: 'vehicle-maintenance-log',
    title: 'MANUTENÇÃO DO VEÍCULO',
    subtitle: 'MANTENHA SEU CARRO EM PERFEITAS CONDIÇÕES',
    content: {}
  },
  {
    id: 'party-planner',
    type: 'party-planner',
    title: 'PLANEJADOR DE FESTAS',
    subtitle: 'ORGANIZE CELEBRAÇÕES INESQUECÍVEIS',
    content: {}
  },
  {
    id: 'travel-planner',
    type: 'travel-planner',
    title: 'PLANEJADOR DE VIAGEM',
    subtitle: 'ORGANIZE SUA PRÓXIMA AVENTURA',
    content: {}
  },
  {
    id: 'packing-list',
    type: 'packing-list',
    title: 'LISTA DE MALAS',
    subtitle: 'NÃO ESQUEÇA NADA IMPORTANTE',
    content: {}
  },
  {
    id: 'notes',
    type: 'notes',
    title: 'ANOTAÇÕES',
    subtitle: 'ESPAÇO PARA SUAS IDEIAS, LEMBRETES E PLANOS',
    content: {}
  },
  {
    id: 'final',
    type: 'final',
    title: 'MUITO OBRIGADO',
    subtitle: '',
    content: {}
  }
];