// Chaque objet est un article. Les champs "titre", "extrait" et "contenu"
// existent dans les trois langues : { fr: ..., en: ..., it: ... }.
// "rubrique" doit être "livres", "reflexion" ou "aparte".
// "slug" doit être unique et sans espace (utilisé dans l'adresse de la page).
// "date" : un article daté dans le futur reste masqué jusqu'à cette date.
// Pour programmer une heure précise : "2026-11-02T12:00:00+01:00" (heure de Zurich).

export const articles = [
  {
    slug: "je-ne-vous-suivrai-pas",
    rubrique: "livres",
    image: "/couvertures/ionesco-rhinoceros.jpg",
    image2: "/couvertures/landmesser-1936.jpg",
    date: "2026-11-13",
    titreItalique: null,
    titre: {
      fr: "« Je ne vous suivrai pas, je ne vous comprends pas ! »",
      en: "\"I won't follow you, I don't understand you!\"",
      it: "« Non vi seguirò, non vi capisco! »",
    },
    extrait: {
      fr: "Eugène Ionesco, Rhinocéros",
      en: "Eugène Ionesco, Rhinoceros",
      it: "Eugène Ionesco, Il rinoceronte",
    },
    legende2: {
      fr: "August Landmesser, l'homme qui défia Hitler. Cette photo de 1936 est extrêmement célèbre. C'est celle d'un homme, ouvrier sur un chantier naval de Hambourg, qui refuse de faire le salut nazi. C'est un geste de défi, mais aussi d'amour pour Irma, sa compagne qui était juive.",
      en: "August Landmesser, the man who defied Hitler. This 1936 photo is extremely famous. It shows a man, a worker at a Hamburg shipyard, refusing to give the Nazi salute. It is an act of defiance, but also of love for Irma, his partner, who was Jewish.",
      it: "August Landmesser, l'uomo che sfidò Hitler. Questa foto del 1936 è famosissima. È quella di un uomo, operaio in un cantiere navale di Amburgo, che si rifiuta di fare il saluto nazista. È un gesto di sfida, ma anche d'amore per Irma, la sua compagna, che era ebrea.",
    },
    contenu: {
      fr: [
        "Quand les boussoles de l'humanité sont détraquées – assez souvent donc – il est l'heure de (re)lire *Rhinocéros* de Ionesco, une œuvre qu'on pourrait croire écrite aujourd'hui, tant il y souffle le même air vicié que celui qu'on respire en ce moment : la langue travestie sans scrupules pour mieux déformer la réalité, la pensée critique méthodiquement reniée, l'ignorance triomphante, les idéologies vertueusement odieuses promues par un relativisme moral complaisant et rusé qui autorise et encourage toutes les compromissions. Pas de dépaysement en vue pour le lecteur contemporain mais – et c'est ce qui vaut le détour – cette ultime longue réplique, une ode à la résistance, qui rachète un peu l'ignominie ambiante, d'où qu'elle vienne. « […] Je suis le dernier homme, je le resterai jusqu'au bout ! Je ne capitule pas ! »",
        "Ce texte de Ionesco, d'abord rédigé sous forme d'une nouvelle puis d'une pièce de théâtre, trouve son origine dans une expérience relatée par l'écrivain Denis de Rougemont, que Ionesco rapporte en 1960 dans la préface américaine de sa pièce : « *En 1933 l'écrivain Denis de Rougemont se trouvait en Allemagne à Nuremberg au moment d'une manifestation nazie. Il nous raconte qu'il se trouvait au milieu d'une foule compacte attendant l'arrivée de Hitler. Les gens donnaient des signes d'impatience lorsqu'on vit apparaître, tout au bout d'une avenue et tout petits dans le lointain, le Führer et sa suite. De loin, le narrateur vit la foule qui était prise progressivement d'une sorte d'hystérie, acclamant frénétiquement l'homme sinistre. L'hystérie se répandait, avançait, avec Hitler, comme une marée. Le narrateur était d'abord étonné par ce délire. Mais lorsque le Führer arriva tout près et que les gens, à ses côtés, furent contaminés par l'hystérie générale, Denis de Rougemont sentit, en lui-même, cette rage qui tentait de l'envahir, ce délire qui « l'électrisait ». Il était tout prêt à succomber à cette magie, lorsque quelque chose monta des profondeurs de son être et résista à l'orage collectif. Denis de Rougemont nous raconte qu'il se sentait mal à l'aise, affreusement seul, dans la foule, à la fois résistant et hésitant. Puis ses cheveux se hérissant, « littéralement » dit-il, sur sa tête, il comprit ce que voulait dire l'Horreur Sacrée. À ce moment-là, ce n'était pas sa pensée qui résistait, ce n'était pas des arguments qui lui venaient à l'esprit, mais c'était tout son être, toute « sa personnalité » qui se rebiffait. Là est peut-être le point de départ de* Rhinocéros ».",
        "Relire *Rhinocéros*, donc, et espérer avec Hölderlin que là où croît le péril, croît aussi ce qui sauve…",
      ],
      en: [
        "When humanity's compasses go haywire – which is to say, fairly often – it is time to (re)read Ionesco's *Rhinoceros*. You could believe it was written today, so thick is it with the same foul air we are breathing right now: language shamelessly disguised the better to distort reality, critical thinking methodically disowned, ignorance triumphant, virtuously odious ideologies promoted by a complacent, cunning moral relativism that permits and encourages every compromise. No change of scenery in sight for the contemporary reader. But – and this is what makes the trip worthwhile – there is that final long speech, an ode to resistance, which partly redeems the surrounding ignominy, wherever it comes from. \"[…] I'm the last man, and I'll stay that way until the end! I'm not capitulating!\"",
        "Ionesco first wrote this text as a short story, then as a play. It has its origins in an experience recounted by the writer Denis de Rougemont, which Ionesco relates in 1960 in the American preface to his play: \"*In 1933, the writer Denis de Rougemont was in Nuremberg, Germany, during a Nazi rally. He tells us that he was in the middle of a dense crowd awaiting Hitler's arrival. People were showing signs of impatience when, at the far end of an avenue, tiny in the distance, the Führer and his entourage appeared. From afar, the narrator watched the crowd gradually seized by a kind of hysteria, frantically cheering the sinister man. The hysteria spread, advancing with Hitler like a tide. At first the narrator was astonished by this frenzy. But when the Führer came very close and the people beside him were infected by the general hysteria, Denis de Rougemont felt within himself that rage trying to invade him, that frenzy which 'electrified' him. He was on the verge of succumbing to this spell when something rose from the depths of his being and resisted the collective storm. Denis de Rougemont tells us that he felt uneasy, terribly alone in the crowd, at once resisting and hesitating. Then, as his hair stood on end, 'literally', he says, he understood what Sacred Horror meant. At that moment it was not his thought that resisted, no arguments came to his mind: it was his whole being, his whole 'personality', that rebelled. That is perhaps the starting point of* Rhinoceros.\"",
        "So: reread *Rhinoceros*, and hope with Hölderlin that where danger grows, that which saves grows too…",
      ],
      it: [
        "Quando le bussole dell'umanità sono impazzite – il che accade piuttosto spesso – è l'ora di (ri)leggere *Il rinoceronte* di Ionesco. Si potrebbe credere che sia stato scritto oggi, tanto vi soffia la stessa aria viziata che respiriamo in questo momento: la lingua travestita senza scrupoli per deformare meglio la realtà, il pensiero critico metodicamente rinnegato, l'ignoranza trionfante, le ideologie virtuosamente odiose promosse da un relativismo morale compiacente e scaltro che autorizza e incoraggia ogni compromesso. Nessuno spaesamento in vista per il lettore contemporaneo. Ma – ed è questo che vale la deviazione – c'è quell'ultima, lunga battuta, un'ode alla resistenza, che riscatta un po' l'ignominia circostante, da qualunque parte provenga. « […] Sono l'ultimo uomo, e lo resterò fino alla fine! Io non capitolo! »",
        "Ionesco scrisse questo testo prima in forma di racconto e poi di pièce teatrale. Nasce da un'esperienza narrata dallo scrittore Denis de Rougemont, che Ionesco riporta nel 1960 nella prefazione americana alla sua opera: « *Nel 1933 lo scrittore Denis de Rougemont si trovava in Germania, a Norimberga, durante una manifestazione nazista. Racconta che si trovava in mezzo a una folla compatta che attendeva l'arrivo di Hitler. La gente dava segni d'impazienza quando si videro comparire, in fondo a un viale e piccolissimi in lontananza, il Führer e il suo seguito. Da lontano, il narratore vide la folla presa a poco a poco da una sorta di isteria, che acclamava freneticamente l'uomo sinistro. L'isteria si propagava, avanzava insieme a Hitler, come una marea. Il narratore fu dapprima stupito da quel delirio. Ma quando il Führer giunse vicinissimo e la gente, accanto a lui, fu contagiata dall'isteria generale, Denis de Rougemont sentì dentro di sé quella rabbia che cercava di invaderlo, quel delirio che lo \"elettrizzava\". Stava per soccombere a quella magia, quando qualcosa salì dalle profondità del suo essere e resistette alla tempesta collettiva. Denis de Rougemont racconta che si sentiva a disagio, terribilmente solo, in mezzo alla folla, al tempo stesso resistente ed esitante. Poi, mentre i capelli gli si rizzavano, \"letteralmente\", dice, sulla testa, capì che cosa volesse dire l'Orrore Sacro. In quel momento non era il suo pensiero a resistere, non erano argomenti che gli venivano in mente: era tutto il suo essere, tutta la sua \"personalità\" a ribellarsi. È forse questo il punto di partenza del* Rinoceronte ».",
        "Rileggere *Il rinoceronte*, dunque, e sperare con Hölderlin che là dove cresce il pericolo, cresca anche ciò che salva…",
      ],
    },
  },
  {
    slug: "l-hiver-des-hommes",
    rubrique: "livres",
    image: "/couvertures/jacques-carnets-de-moleskine.jpg",
    date: "2026-11-11T12:00:00+01:00",
    titreItalique: null,
    titre: {
      fr: "L'hiver des hommes",
      en: "The Winter of Men",
      it: "L'inverno degli uomini",
    },
    extrait: {
      fr: "Dans les tranchées de 1914, un jeune homme de vingt-trois ans écrit la guerre sans haine, avec une rage de vivre intacte.",
      en: "In the trenches of 1914, a twenty-three-year-old writes about the war without hatred, his rage to live intact.",
      it: "Nelle trincee del 1914, un giovane di ventitré anni racconta la guerra senza odio, con un'intatta voglia di vivere.",
    },
    contenu: {
      fr: [
        "Dans ce journal des tranchées, tout semble en décalage et provoque la surprise. Tout d'abord, la finesse d'observation d'un tout jeune homme d'à peine vingt-trois ans, qui exècre la guerre, « une saleté », et méprise la stupidité des gradés de son escouade, mais qui traverse ce temps immonde de carnage et de devoir avec une rage de vivre qui le met à l'abri du désespoir et surtout de la haine.",
        "L'ennemi, qu'on attendrait hideux et voué aux gémonies ? Un être la plupart du temps invisible, qui prend les traits d'un cadavre en putréfaction qu'on ressort de l'eau et sur lequel on voit briller une alliance qui dit toutes les promesses d'une existence humaine désormais anéantie. Une vision effroyable, un sombre jour d'octobre 1914, qui lui inspirera un poème, « Le Noyé », qui n'est pas sans rappeler le glaçant « Dormeur du val » de Rimbaud.",
        "La guerre ? Omniprésente dans la rumeur des canons, le sifflement des obus, les réveils à l'aube, les chevaux crevés dans la Meuse où l'on se lave et que l'on boit aussi, les longues marches forcées, les blessés qu'on évacue sans discontinuer, moribonds, déchiquetés, hagards, fous parfois, « l'air de morts déterrés ». Mais aussi la beauté des paysages rencontrés et les couleurs du ciel à l'aube, invariablement sublimes, même en temps de guerre.",
        "Au fond des tranchées de la Meuse, le 8 novembre 1914, dans cet hiver des hommes qui ne fait que commencer, il écrit : « Il faut rester intact ». Plus d'un siècle plus tard, à la veille d'un nouvel hiver, cette injonction est plus que jamais d'actualité.",
        "Lucien Jacques, Carnets de moleskine, préface de Jean Giono, Gallimard.",
      ],
      en: [
        "In this trench diary, everything seems out of step and comes as a surprise. First of all, the keen observation of a very young man, barely twenty-three, who loathes the war, \"a filthy thing\", and despises the stupidity of the officers in his squad, yet who passes through this foul time of carnage and duty with a rage to live that shields him from despair and, above all, from hatred.",
        "The enemy, whom one would expect to be hideous and reviled? A being who is mostly invisible, and who takes the form of a rotting corpse pulled out of the water, on which a wedding ring gleams, speaking of all the promises of a human life now destroyed. A horrifying sight, on a dark October day in 1914, which will inspire him to write a poem, \"The Drowned Man\", not unlike Rimbaud's chilling \"The Sleeper in the Valley\".",
        "The war? Ever-present in the rumble of the guns, the whistle of the shells, the dawn awakenings, the dead horses in the Meuse, where the men wash and which they drink too, the long forced marches, the wounded evacuated without respite, dying, torn apart, haggard, sometimes mad, \"looking like corpses dug up\". But also the beauty of the landscapes along the way and the colours of the sky at dawn, invariably sublime, even in wartime.",
        "Deep in the trenches of the Meuse, on 8 November 1914, at the start of this winter of men, he writes: \"One must remain intact.\" More than a century later, on the eve of a new winter, this injunction is more relevant than ever.",
        "Lucien Jacques, Carnets de moleskine, préface de Jean Giono, Gallimard.",
      ],
      it: [
        "In questo diario di trincea, tutto sembra fuori posto e suscita sorpresa. Innanzitutto, l'acutezza di sguardo di un giovanissimo di appena ventitré anni, che detesta la guerra, «una porcheria», e disprezza la stupidità dei graduati della sua squadra, ma che attraversa questo tempo immondo di carneficina e di dovere con una rabbia di vivere che lo mette al riparo dalla disperazione e soprattutto dall'odio.",
        "Il nemico, che ci si aspetterebbe orrendo e messo alla gogna? Un essere il più delle volte invisibile, che assume i tratti di un cadavere in putrefazione ripescato dall'acqua, su cui brilla una fede nuziale che racconta tutte le promesse di un'esistenza umana ormai annientata. Una visione spaventosa, in un cupo giorno d'ottobre del 1914, che gli ispirerà una poesia, «L'annegato», che richiama il raggelante «Dormiente della valle» di Rimbaud.",
        "La guerra? Onnipresente nel rombo dei cannoni, nel sibilo delle granate, nei risvegli all'alba, nei cavalli morti nella Mosa, dove ci si lava e da cui si beve anche, nelle lunghe marce forzate, nei feriti evacuati senza sosta, moribondi, dilaniati, stravolti, a volte impazziti, «con l'aria di morti dissepolti». Ma anche la bellezza dei paesaggi attraversati e i colori del cielo all'alba, invariabilmente sublimi, anche in tempo di guerra.",
        "In fondo alle trincee della Mosa, l'8 novembre 1914, in questo inverno degli uomini appena cominciato, scrive: «Bisogna restare intatti». Più di un secolo dopo, alla vigilia di un nuovo inverno, questa ingiunzione è più che mai attuale.",
        "Lucien Jacques, Carnets de moleskine, préface de Jean Giono, Gallimard.",
      ],
    },
  },
  {
    slug: "etre-ou-ne-pas-etre-un-heros",
    rubrique: "livres",
    image: "/couvertures/bandinelli-quelques-jours.jpg",
    date: "2026-11-02T12:00:00+01:00",
    titreItalique: null,
    titre: {
      fr: "Être ou ne pas être un héros",
      en: "To be or not to be a hero",
      it: "Essere o non essere un eroe",
    },
    extrait: {
      fr: "Réquisitionné en 1938 pour guider Hitler et Mussolini dans les musées de Rome et de Florence, l'historien de l'art Ranuccio Bianchi Bandinelli se joue d'eux… mais n'ose pas aller plus loin.",
      en: "Drafted in 1938 to guide Hitler and Mussolini through the museums of Rome and Florence, art historian Ranuccio Bianchi Bandinelli toys with them… but dares go no further.",
      it: "Precettato nel 1938 per guidare Hitler e Mussolini nei musei di Roma e Firenze, lo storico dell'arte Ranuccio Bianchi Bandinelli si prende gioco di loro… ma non osa andare oltre.",
    },
    contenu: {
      fr: [
        "Ranuccio Bianchi Bandinelli, professeur italien d'histoire de l'art, est réquisitionné pour accompagner le volet privé de la visite de Hitler à Mussolini en 1938 et conduire les deux dictateurs dans les musées romains et florentins.",
        "Impuissant et indigné, il consigne ses impressions dans son carnet, dont ce livre est un extrait. Le portrait qui se dégage de ces deux hommes est assez attendu : l'indifférence grimaçante de l'un le dispute aux interprétations préconçues, délirantes de l'autre, dans une description habile et sobre qui ne s'embarrasse pas de longs discours.",
        "Mais l'intérêt véritable du texte est ailleurs.",
        "Bandinelli s'aperçoit bien vite du pouvoir relatif que son savoir lui procure sur les deux hommes. Il n'hésite pas alors - pâle revanche - à se jouer d'eux, en trichant avec la vérité et les exactitudes pour mesurer son emprise sur eux et le caractère influençable et parfois puéril de leur personnalité. « Comme nous passions sur le pont Alle Grazie, Mussolini s'enquit de la profondeur de l'Arno. Un mètre soixante-quinze, répondis-je ; mais le chiffre sembla maigre, et je le justifiai en affirmant que son niveau était bas en ce moment. En période haute, il atteint quatre ou cinq mètres, ce qu'on trouva adapté à la grandeur historique de cette rivière. »",
        "Mais de son vrai pouvoir sur les deux dictateurs, Bandinelli n'usera pas. Il ne communiquera pas aux militants antifascistes qui fomentent un attentat le parcours tenu secret que devra suivre le véhicule des deux hommes. Il doit lui-même prendre place dans la voiture. Et il n'est pas un héros.",
        "« Nous sommes tous coupables de cet état des choses auquel nous n'avons pas consenti mais qui nous a trouvés inertes, passifs, accommodants, par tranquillité personnelle et par égoïsme de classe. »",
        "Ranuccio Bianchi Bandinelli, Quelques jours avec Hitler et Mussolini.",
      ],
      en: [
        "Ranuccio Bianchi Bandinelli, an Italian professor of art history, is drafted to accompany the private part of Hitler's 1938 visit to Mussolini and to lead the two dictators through the museums of Rome and Florence.",
        "Powerless and outraged, he records his impressions in his notebook, of which this book is an extract. The portrait of the two men that emerges is rather predictable: the grimacing indifference of the one vies with the preconceived, delirious interpretations of the other, in a deft and sober description that wastes no time on long speeches.",
        "But the real interest of the text lies elsewhere.",
        "Bandinelli soon realises the relative power his knowledge gives him over the two men. So he does not hesitate - a pale revenge - to toy with them, bending the truth and the facts to gauge his hold over them and the impressionable, at times childish, nature of their personalities. \"As we crossed the Ponte alle Grazie, Mussolini asked how deep the Arno was. One metre seventy-five, I replied; but the figure seemed meagre, and I justified it by claiming that the river was low at the moment. In high water it reaches four or five metres, which was found fitting for the historic grandeur of this river.\"",
        "But his real power over the two dictators, Bandinelli will not use. He will not pass on to the anti-fascist militants plotting an attack the secret route the two men's car is to follow. He himself is to ride in that car. And he is no hero.",
        "\"We are all guilty of this state of affairs, to which we did not consent but which found us inert, passive, accommodating, for the sake of our personal peace and out of class selfishness.\"",
        "Ranuccio Bianchi Bandinelli, Quelques jours avec Hitler et Mussolini.",
      ],
      it: [
        "Ranuccio Bianchi Bandinelli, professore italiano di storia dell'arte, viene precettato per accompagnare la parte privata della visita di Hitler a Mussolini nel 1938 e guidare i due dittatori nei musei di Roma e di Firenze.",
        "Impotente e indignato, annota le sue impressioni nel suo taccuino, di cui questo libro è un estratto. Il ritratto che emerge dei due uomini è piuttosto prevedibile: l'indifferenza arcigna dell'uno se la contende con le interpretazioni preconcette e deliranti dell'altro, in una descrizione abile e sobria che non si perde in lunghi discorsi.",
        "Ma il vero interesse del testo è altrove.",
        "Bandinelli si accorge ben presto del potere relativo che il suo sapere gli conferisce sui due uomini. Non esita allora - magra rivincita - a prendersi gioco di loro, barando con la verità e con l'esattezza per misurare la propria presa su di loro e il carattere influenzabile, e talvolta puerile, della loro personalità. «Mentre passavamo sul ponte alle Grazie, Mussolini chiese quanto fosse profondo l'Arno. Un metro e settantacinque, risposi; ma la cifra parve misera, e la giustificai affermando che in quel momento il livello era basso. In piena raggiunge i quattro o cinque metri, il che fu ritenuto adeguato alla grandezza storica di questo fiume.»",
        "Ma del suo vero potere sui due dittatori, Bandinelli non si servirà. Non comunicherà ai militanti antifascisti che preparano un attentato il percorso, tenuto segreto, che dovrà seguire l'auto dei due uomini. Lui stesso deve prendere posto in quella macchina. E non è un eroe.",
        "«Siamo tutti colpevoli di questo stato di cose, al quale non abbiamo acconsentito ma che ci ha trovati inerti, passivi, accomodanti, per tranquillità personale e per egoismo di classe.»",
        "Ranuccio Bianchi Bandinelli, Quelques jours avec Hitler et Mussolini.",
      ],
    },
  },
  {
    slug: "curieuse-espece-que-la-notre",
    rubrique: "reflexion",
    image: "/couvertures/dictionnaire-mots-manquants.jpg",
    date: "2026-10-20",
    titreItalique: null,
    titre: {
      fr: "Curieuse espèce que la nôtre",
      en: "What a curious species we are",
      it: "Curiosa specie, la nostra",
    },
    extrait: {
      fr: "Des mots qui manquent pour dire le pire, d'autres qui prolifèrent pour travestir le réel : que dit notre langue de ce que nous sommes ?",
      en: "Words that fail us when it comes to the worst, others that multiply to disguise reality: what does our language say about who we are?",
      it: "Parole che mancano per dire il peggio, altre che proliferano per travestire il reale: che cosa dice la nostra lingua di ciò che siamo?",
    },
    contenu: {
      fr: [
        "Il y a bien sûr le Petit Larousse, le Petit Robert, celui des synonymes, celui des antonymes, le dictionnaire étymologique (qu'on emporterait sur une île déserte s'il n'en fallait qu'un), l'interminable dynastie des dictionnaires amoureux (dont les rejetons ne sont pas tous nés sous la même bonne étoile, il faut bien le reconnaître). Il y a aussi évidemment celui des idées reçues de Flaubert. Et puis le Gaffiot et le Bailly, les frères siamois de la bibliothèque, que nous sommes de moins en moins nombreux à connaître.",
        "Mais il y a aussi, depuis 2016, le Dictionnaire des mots manquants. Une véritable curiosité, qui ne doit son existence qu'au fait qu'il y a des zones de la réalité qu'aucun mot ne vient recouvrir. On peut par exemple nommer celui qui a perdu son conjoint, ses parents, ou celui qui a tué son frère. Mais par quel terme désigne-t-on le parent qui a perdu son enfant ? Aucune entrée dans les registres. Une réalité éprouvée dans l'âme, le cœur, les tripes, jusqu'au dernier souffle. Mais qui n'a pas droit de cité dans la langue. L'entendement, de toute évidence, n'a pas prévu le coup. La pire de toutes les malédictions, que la langue, paradoxalement, s'obstine à ne pas nommer.",
        "Cet ouvrage étonnant nous propose un parcours dans l'indicible - et il est vaste, comme la souffrance et la barbarie qui l'ont creusé -, soulevant ainsi une question fondamentale, dont s'emparent la philosophie et la psychanalyse : que disent de notre condition humaine ces trous béants de la pensée, situés quelque part entre l'interdiction morale de taire et l'impossibilité de dire ?",
        "Curieuse espèce que la nôtre : muette devant l'abîme, intarissable devant le vide. Car si les mots nous manquent pour dire le pire, ils prolifèrent pour habiller le rien, et plus encore pour travestir le réel.",
        "À quand, dès lors, le dictionnaire des mots qui n'auraient jamais dû exister, ces mots-masques qui affichent une vertu pour mieux en pratiquer le contraire, ces tartuffes du lexique qui disent une chose et en font une autre, et qui empestent le mauvais air d'un temps fâché avec la vérité et la rigueur ? Les candidats se pressent au portillon, chacun avec son tour de passe-passe : la bienveillance, chevalier blanc de la vertu qui, sous couvert d'écoute et de sollicitude, impose ou fait taire, la transparence qui dévoile pour mieux surveiller, la résilience qui érige le moindre désagrément en exploit héroïque, l'empouvoirement qui laisse chacun seul face à ce qui le dépasse… La liste s'allongera à mesure que s'émoussera notre exigence de justesse et de probité. Au train où vont les choses, cela méritera sans doute bientôt un ouvrage entier.",
        "Belinda Cannone et Christian Doumet (dir.), Dictionnaire des mots manquants, Éditions Thierry Marchaisse, 2016.",
      ],
      en: [
        "There is, of course, the Petit Larousse, the Petit Robert, the dictionary of synonyms, the dictionary of antonyms, the etymological dictionary (the one we would take to a desert island if we could take only one), the endless dynasty of the \"Dictionnaires amoureux\" (not all of whose offspring were born under the same lucky star, it must be said). There is also, of course, Flaubert's Dictionary of Received Ideas. And then the Gaffiot and the Bailly, the Siamese twins of the library, known to fewer and fewer of us.",
        "But since 2016 there has also been the Dictionnaire des mots manquants, the Dictionary of Missing Words. A true curiosity, which owes its existence solely to the fact that there are areas of reality that no word covers. We can name someone who has lost a spouse or parents, or someone who has killed their brother. But what word do we use for a parent who has lost a child? No entry in the registers. A reality felt in the soul, the heart, the gut, until one's last breath, yet with no place in the language. Understanding, quite clearly, did not see it coming. The worst of all curses, which language, paradoxically, stubbornly refuses to name.",
        "This astonishing book takes us on a journey into the unspeakable - and it is vast, like the suffering and barbarity that carved it out - raising a fundamental question taken up by philosophy and psychoanalysis: what do these gaping holes in thought, lying somewhere between the moral duty not to keep silent and the impossibility of speaking, say about our human condition?",
        "What a curious species we are: mute before the abyss, inexhaustible before the void. For if words fail us when it comes to the worst, they proliferate to dress up nothingness, and even more to disguise reality.",
        "So when will we have a dictionary of words that should never have existed, those mask-words that display a virtue the better to practise its opposite, those Tartuffes of the lexicon that say one thing and do another, reeking of the foul air of an age at odds with truth and rigour? The candidates are jostling at the gate, each with its own sleight of hand: benevolence, white knight of virtue, which under the guise of listening and care imposes or silences; transparency, which reveals the better to watch; resilience, which turns the slightest inconvenience into a heroic feat; empowerment, which leaves each of us alone with what overwhelms us… The list will grow as our demand for accuracy and integrity grows dull. At the rate things are going, it will no doubt soon deserve a whole book of its own.",
        "Belinda Cannone and Christian Doumet (eds.), Dictionnaire des mots manquants, Éditions Thierry Marchaisse, 2016.",
      ],
      it: [
        "Ci sono, certo, il Petit Larousse, il Petit Robert, il dizionario dei sinonimi, quello dei contrari, il dizionario etimologico (quello che porteremmo su un'isola deserta, se se ne potesse scegliere uno solo), l'interminabile dinastia dei «Dictionnaires amoureux» (i cui rampolli non sono tutti nati sotto la stessa buona stella, bisogna pur riconoscerlo). C'è anche, ovviamente, il Dizionario dei luoghi comuni di Flaubert. E poi il Gaffiot e il Bailly, i fratelli siamesi della biblioteca, che siamo sempre meno numerosi a conoscere.",
        "Ma dal 2016 esiste anche il Dictionnaire des mots manquants, il dizionario delle parole mancanti. Una vera curiosità, che deve la sua esistenza soltanto al fatto che ci sono zone della realtà che nessuna parola riesce a coprire. Possiamo per esempio nominare chi ha perso il coniuge, i genitori, o chi ha ucciso il proprio fratello. Ma con quale termine si designa il genitore che ha perso un figlio? Nessuna voce nei registri. Una realtà vissuta nell'anima, nel cuore, nelle viscere, fino all'ultimo respiro, ma che non ha diritto di cittadinanza nella lingua. L'intelletto, evidentemente, non l'aveva previsto. La peggiore di tutte le maledizioni, che la lingua, paradossalmente, si ostina a non nominare.",
        "Quest'opera sorprendente ci propone un percorso nell'indicibile - ed è vasto, come la sofferenza e la barbarie che l'hanno scavato -, sollevando così una questione fondamentale, di cui si impadroniscono la filosofia e la psicoanalisi: che cosa dicono della nostra condizione umana questi vuoti spalancati del pensiero, situati da qualche parte tra il divieto morale di tacere e l'impossibilità di dire?",
        "Curiosa specie, la nostra: muta davanti all'abisso, inesauribile davanti al vuoto. Perché se le parole ci mancano per dire il peggio, proliferano per vestire il nulla, e ancor più per travestire il reale.",
        "A quando, dunque, il dizionario delle parole che non sarebbero mai dovute esistere, queste parole-maschera che ostentano una virtù per meglio praticarne il contrario, questi tartufi del lessico che dicono una cosa e ne fanno un'altra, e che ammorbano l'aria di un'epoca in rotta con la verità e il rigore? I candidati si accalcano al cancello, ciascuno con il suo gioco di prestigio: la benevolenza, cavaliere bianco della virtù che, col pretesto dell'ascolto e della sollecitudine, impone o mette a tacere; la trasparenza, che svela per meglio sorvegliare; la resilienza, che erige il minimo contrattempo a impresa eroica; l'empowerment, che lascia ciascuno solo davanti a ciò che lo sovrasta… La lista si allungherà man mano che si affievolirà la nostra esigenza di giustezza e di probità. Di questo passo, meriterà senz'altro presto un libro intero.",
        "Belinda Cannone e Christian Doumet (a cura di), Dictionnaire des mots manquants, Éditions Thierry Marchaisse, 2016.",
      ],
    },
  },
  {
    slug: "haine-sweet-haine",
    rubrique: "reflexion",
    image: "/couvertures/eco-fabrique-de-l-ennemi.jpg",
    date: "2026-10-18",
    titreItalique: null,
    titre: {
      fr: "Haine, sweet haine",
      en: "Hate, sweet hate",
      it: "Odio, dolce odio",
    },
    extrait: {
      fr: "Un chauffeur de taxi new-yorkais, une question saugrenue, et Umberto Eco nous tend le miroir : pourquoi l'humanité a-t-elle tant besoin d'ennemis ?",
      en: "A New York taxi driver, an odd question, and Umberto Eco holds up the mirror: why does humanity need enemies so badly?",
      it: "Un tassista newyorkese, una domanda bizzarra, e Umberto Eco ci porge lo specchio: perché l'umanità ha tanto bisogno di nemici?",
    },
    contenu: {
      fr: [
        "Dès les premières phrases de la mémorable conférence prononcée à l'Université de Bologne en 2008 par Umberto Eco, le ton est donné, et il est voltairien :",
        "« Il y a quelques années à New York, je suis tombé sur un chauffeur de taxi pakistanais. Il m'a demandé d'où je venais, je lui ai répondu d'Italie et il a été frappé d'apprendre que nous étions si peu nombreux et que notre langue n'était pas l'anglais. Enfin, il m'a demandé quels étaient nos ennemis. Devant mon incompréhension, il m'a expliqué qu'il voulait savoir avec quels peuples nous étions en guerre depuis des siècles pour des revendications territoriales, des haines ethniques, d'incessantes violations de frontières, etc. Je lui ai dit que nous n'étions en guerre avec personne. Avec patience, il m'a réexpliqué qu'il voulait savoir quels étaient nos adversaires historiques, ceux qui nous massacraient et ceux que nous massacrions. Je lui ai répété que nous n'en avions pas, que la dernière guerre, nous l'avions faite il y a plus d'un demi-siècle et d'ailleurs, en la commençant avec un ennemi et en la finissant avec un autre. Il n'était pas satisfait. Comment pouvait-il exister un peuple sans ennemis ? Je suis descendu de voiture en lui laissant deux dollars de pourboire pour le dédommager de notre pacifisme indolent, puis m'est venu à l'esprit ce que j'aurais dû lui répondre, à savoir qu'il est inexact de dire que les Italiens n'ont pas d'ennemis. En fait ils n'ont pas d'ennemis extérieurs et de toute façon, étant sans cesse en guerre les uns avec les autres, ils n'arrivent jamais à se mettre d'accord pour établir qui ils sont : Pise contre Lucca, Guelfi contre Ghibellini, Nordistes contre Sudistes, Fascistes contre Partisans, Mafia contre État, gouvernement contre magistrature - et dommage qu'à l'époque il n'y ait pas encore eu la chute des deux gouvernements Prodi, sinon j'aurais pu lui expliquer avec plus de clarté ce que signifiait perdre une guerre sous le feu ami. »",
        "Derrière l'ironie grinçante et la feinte désinvolture du propos se dessine, au fil des pages et avec l'air de ne pas y toucher, le portrait d'une humanité effrayante et haineuse.",
        "Des bas-reliefs romains représentant des barbares menaçants au pessimisme sartrien qui voit dans la présence de l'Autre un enfer, en passant par la figure de l'Antéchrist, l'archi-ennemi qui prend dès les origines du christianisme le visage du juif, ou encore par les multiples chasses aux sorcières qui ont ponctué l'histoire de l'humanité depuis l'Antiquité, Eco interroge notre irrépressible besoin de nous constituer des ennemis - parfois avec une généreuse flexibilité dans leur désignation - pour forger notre identité et asseoir notre pouvoir.",
        "À la clé, une question : l'éthique est-elle donc si impuissante face à ce besoin ancestral dévastateur ?",
        "Umberto Eco, La Fabrique de l'ennemi, Grasset.",
      ],
      en: [
        "From the very first lines of the memorable lecture Umberto Eco gave at the University of Bologna in 2008, the tone is set, and it is Voltairean.",
        "Eco recalls a taxi ride in New York with a Pakistani driver. On learning that his passenger was Italian, the driver wanted to know who Italy's enemies were: which peoples it had been fighting for centuries over borders, territory or ethnic hatred. Eco replied that Italy was at war with no one, and that its last war lay more than half a century behind it, begun with one enemy and ended with another. The driver remained unconvinced: \"How could there be a people without enemies?\" Eco got out, leaving a two-dollar tip to make up for such indolent pacifism, and only then thought of the answer he should have given: Italians have no external enemies because they are far too busy fighting one another, Pisa against Lucca, Guelphs against Ghibellines, North against South, Fascists against partisans, Mafia against State.",
        "Behind the biting irony and feigned nonchalance of the piece emerges, page after page and as if in passing, the portrait of a frightening, hate-filled humanity.",
        "From Roman bas-reliefs depicting menacing barbarians to Sartrean pessimism, which sees hell in the presence of the Other, by way of the figure of the Antichrist, the arch-enemy who from the very beginnings of Christianity took on the face of the Jew, or the many witch hunts that have punctuated human history since Antiquity, Eco examines our irrepressible need to create enemies for ourselves - sometimes with generous flexibility in how we designate them - in order to forge our identity and secure our power.",
        "Which leaves one question: is ethics really so powerless in the face of this ancestral, devastating need?",
        "Umberto Eco, Inventing the Enemy (Costruire il nemico). French edition: La Fabrique de l'ennemi, Grasset.",
      ],
      it: [
        "Fin dalle prime righe della memorabile conferenza tenuta da Umberto Eco all'Università di Bologna nel 2008, il tono è dato, ed è volterriano.",
        "Eco ricorda una corsa in taxi a New York con un autista pakistano. Saputo che il passeggero era italiano, l'autista volle sapere chi fossero i nemici dell'Italia: con quali popoli fosse in guerra da secoli per confini, territori o odi etnici. Eco rispose che l'Italia non era in guerra con nessuno e che l'ultima guerra risaliva a più di mezzo secolo prima, cominciata con un nemico e finita con un altro. L'autista non si diede per vinto: «Come poteva esistere un popolo senza nemici?» Eco scese lasciandogli due dollari di mancia, per risarcirlo di un pacifismo così indolente, e solo allora gli venne in mente la risposta che avrebbe dovuto dare: gli italiani non hanno nemici esterni perché sono fin troppo occupati a combattersi tra loro, Pisa contro Lucca, guelfi contro ghibellini, nordisti contro sudisti, fascisti contro partigiani, mafia contro Stato.",
        "Dietro l'ironia graffiante e la finta disinvoltura del discorso si delinea, pagina dopo pagina e come se nulla fosse, il ritratto di un'umanità spaventosa e piena d'odio.",
        "Dai bassorilievi romani che raffigurano barbari minacciosi al pessimismo sartriano che vede nella presenza dell'Altro un inferno, passando per la figura dell'Anticristo, l'arcinemico che fin dalle origini del cristianesimo assume il volto dell'ebreo, o ancora per le numerose cacce alle streghe che hanno scandito la storia dell'umanità dall'Antichità, Eco interroga il nostro irrefrenabile bisogno di costruirci dei nemici - talvolta con una generosa flessibilità nella loro designazione - per forgiare la nostra identità e consolidare il nostro potere.",
        "Resta una domanda: l'etica è dunque così impotente di fronte a questo bisogno ancestrale e devastante?",
        "Umberto Eco, Costruire il nemico e altri scritti occasionali, Bompiani. Edizione francese: La Fabrique de l'ennemi, Grasset.",
      ],
    },
  },
  {
    slug: "de-la-terre-promise-a-la-chaise-electrique",
    rubrique: "reflexion",
    image: "/couvertures/dos-passos-devant-la-chaise.jpg",
    date: "2026-10-06",
    titreItalique: null,
    titre: {
      fr: "De la terre promise à la chaise électrique",
      en: "From the promised land to the electric chair",
      it: "Dalla terra promessa alla sedia elettrica",
    },
    extrait: {
      fr: "En 1927, John Dos Passos prenait la défense de Sacco et Vanzetti, deux immigrés italiens promis à la chaise électrique. Un pamphlet qui n'a pas pris une ride.",
      en: "In 1927, John Dos Passos took up the defence of Sacco and Vanzetti, two Italian immigrants bound for the electric chair. A pamphlet that has not aged a day.",
      it: "Nel 1927 John Dos Passos prendeva le difese di Sacco e Vanzetti, due immigrati italiani destinati alla sedia elettrica. Un pamphlet che non ha perso nulla della sua forza.",
    },
    contenu: {
      fr: [
        "Brûlant d'actualité mais curieusement resté sous le vent ces dernières années : un texte assez exceptionnel de John Dos Passos sur l'affaire Sacco et Vanzetti, respectivement cordonnier et poissonnier, ci-devant anarchistes et Italo-Américains.",
        "Pas (seulement) un ouvrage contre la peine de mort : avant tout un pamphlet historique et littéraire sur les crispations de l'Amérique en temps de crise, sur la diabolisation des immigrés sur cette terre pourtant promise, sur la cruauté humaine en général, et l'injustice en particulier, lorsqu'elle est érigée en système d'État.",
        "C'était en 1927. Aujourd'hui donc.",
        "John Dos Passos, Devant la chaise électrique. Sacco et Vanzetti : histoire de l'américanisation de deux travailleurs étrangers, traduit de l'anglais et préfacé par Alice Béja, Gallimard, coll. Arcades.",
      ],
      en: [
        "Burningly topical, yet curiously left in the shadows these past few years: a quite exceptional text by John Dos Passos on the Sacco and Vanzetti case, the one a shoemaker, the other a fishmonger, erstwhile anarchists and Italian-Americans.",
        "Not (only) a book against the death penalty: above all a historical and literary pamphlet on America's tensions in times of crisis, on the demonisation of immigrants in this supposedly promised land, on human cruelty in general, and on injustice in particular, when it is raised into a system of state.",
        "That was in 1927. In other words, today.",
        "John Dos Passos, Facing the Chair: Story of the Americanization of Two Foreignborn Workmen (1927). French edition: Devant la chaise électrique, translated and introduced by Alice Béja, Gallimard, Arcades.",
      ],
      it: [
        "Di bruciante attualità, eppure stranamente rimasto in ombra in questi ultimi anni: un testo davvero eccezionale di John Dos Passos sul caso Sacco e Vanzetti, rispettivamente calzolaio e pescivendolo, anarchici d'altri tempi e italoamericani.",
        "Non (solo) un libro contro la pena di morte: soprattutto un pamphlet storico e letterario sulle tensioni dell'America in tempo di crisi, sulla demonizzazione degli immigrati in quella terra che pure era promessa, sulla crudeltà umana in generale, e sull'ingiustizia in particolare, quando viene eretta a sistema di Stato.",
        "Era il 1927. Cioè oggi.",
        "John Dos Passos, Facing the Chair: Story of the Americanization of Two Foreignborn Workmen (1927). Edizione francese: Devant la chaise électrique, tradotta e introdotta da Alice Béja, Gallimard, collana Arcades.",
      ],
    },
  },
  {
    slug: "durrenmatt-la-visite-de-la-vieille-dame",
    rubrique: "aparte",
    image: "/couvertures/tkm-vieille-dame-1.jpg",
    image2: "/couvertures/tkm-vieille-dame-2.jpg",
    date: "2026-10-01",
    titre: {
      fr: "Dürrenmatt, La Visite de la vieille dame : que sommes-nous prêts à devenir ?",
      en: "Dürrenmatt, The Visit: what are we prepared to become?",
      it: "Dürrenmatt, La visita della vecchia signora: che cosa siamo disposti a diventare?",
    },
    titreItalique: {
      fr: "La Visite de la vieille dame",
      en: "The Visit",
      it: "La visita della vecchia signora",
    },
    extrait: {
      fr: "Un univers à vomir, irrécupérable. Le nôtre ?",
      en: "A world to make you retch, beyond saving. Ours?",
      it: "Un universo da vomitare, irrecuperabile. Il nostro?",
    },
    contenu: {
      fr: [
        "Promettre de l'argent contre un acte abject. Attendre ensuite tranquillement que les lambeaux de principes susceptibles de sauver ce qui reste d'honneur se dissolvent dans la compromission et que l'innommable se produise. Réussir enfin le pervers tour de force de transformer ce renoncement en exigence de justice et en acte de courage. Un univers à vomir, irrécupérable. Le nôtre ? Que sommes-nous prêts à devenir ?",
        "La Visite de la vieille dame de Dürrenmatt [au TKM](https://www.tkm.ch/representation/la-visite-de-la-vieille-dame-2/) par Omar Porras et le Teatro Malandro, dans une mise en scène extravagante et burlesque, qui laisse insidieusement le malaise gagner le spectateur et où les masques qui sont la signature de la troupe trouvent ici leur plus troublante expression.",
        "À voir au TKM Théâtre Kléber-Méleau, Renens, jusqu'au 1er novembre 2026.",
      ],
      en: [
        "Promise money in exchange for an abject deed. Then wait, calmly, for the shreds of principle that might have saved what honour remains to dissolve into compromise, and for the unspeakable to take place. Finally pull off the perverse feat of recasting that surrender as a demand for justice and an act of courage. A world to make you retch, beyond saving. Ours? What are we prepared to become?",
        "Dürrenmatt's The Visit [at the TKM](https://www.tkm.ch/representation/la-visite-de-la-vieille-dame-2/), staged by Omar Porras and the Teatro Malandro in an extravagant, burlesque production that lets unease creep insidiously over the audience, and where the masks that are the company's signature find their most unsettling expression.",
        "At the TKM Théâtre Kléber-Méleau, Renens, until 1 November 2026.",
      ],
      it: [
        "Promettere denaro in cambio di un atto abietto. Poi attendere tranquillamente che i brandelli di principi capaci di salvare quel che resta dell'onore si sciolgano nel compromesso e che l'innominabile accada. Riuscire infine nel perverso tour de force di trasformare quella rinuncia in esigenza di giustizia e in atto di coraggio. Un universo da vomitare, irrecuperabile. Il nostro? Che cosa siamo disposti a diventare?",
        "La visita della vecchia signora di Dürrenmatt [al TKM](https://www.tkm.ch/representation/la-visite-de-la-vieille-dame-2/) per la regia di Omar Porras e del Teatro Malandro, in una messa in scena stravagante e burlesca, che lascia insidiosamente crescere il disagio nello spettatore e dove le maschere, firma della compagnia, trovano qui la loro espressione più inquietante.",
        "Da vedere al TKM Théâtre Kléber-Méleau, Renens, fino al 1° novembre 2026.",
      ],
    },
  },
    {
    slug: "promenons-nous-dans-le-parc",
    rubrique: "livres",
    image: "/couvertures/calaferte-promenade.jpg",
    date: "2026-09-27",
    titreItalique: null,
    titre: {
      fr: "Promenons-nous dans le parc avec Louis Calaferte",
      en: "Let's take a walk in the park with Louis Calaferte",
      it: "Andiamo a spasso nel parco con Louis Calaferte",
    },
    extrait: {
      fr: "Quatre-vingt-sept petits récits insupportables : on en émerge en suffoquant, mais avec la furieuse envie de changer le monde.",
      en: "Eighty-seven unbearable little tales: you emerge gasping for air, yet with a furious desire to change the world.",
      it: "Ottantasette piccoli racconti insopportabili: se ne esce soffocando, ma con la voglia furiosa di cambiare il mondo.",
    },
    contenu: {
      fr: [
        "Louis Calaferte, Promenade dans un parc, Gallimard, coll. L'Imaginaire, 1987.",
        "Pour accompagner Calaferte en promenade, nul besoin de jarrets bien exercés à la marche : un moral d'acier suffira. Car le narrateur est lugubre, et sa conversation déprimante à souhait. La quatrième de couverture a tôt fait de nous avertir. Ici le monde prend la couleur d'une colonie pénitentiaire. Et de fait, on erre dans les tourments les plus triviaux du quotidien tel un détenu entre ses quatre murs : la décrépitude de l'âge, le souvenir nostalgique de nos parents disparus, l'inaction et la perte de sens, la rumeur, la cruauté, l'incapacité à aimer, la faute professionnelle, la trahison, l'enfermement carcéral… Pas un recoin des tracasseries de l'existence qui n'échappe à sa plume sobrement désespérée.",
        "Mais pourquoi donc s'infliger pareille lecture ? se demandera-t-on.",
        "Question de survie, sans doute. Car telle est la vertu paradoxale de ces 87 petits récits insupportables : on en émerge en suffoquant, mais avec la furieuse envie de changer le monde.",
      ],
      en: [
        "Louis Calaferte, Promenade dans un parc, Gallimard, coll. L'Imaginaire, 1987.",
        "To walk out with Calaferte you need no legs hardened by hiking: nerves of steel will do. For the narrator is gloomy, and his conversation as depressing as one could wish. The back cover wastes no time warning us. Here the world takes on the colour of a penal colony. And indeed we wander through the most trivial torments of daily life like an inmate within his four walls: the decay of age, the wistful memory of our departed parents, idleness and the loss of meaning, gossip, cruelty, the inability to love, professional misconduct, betrayal, imprisonment… Not one nook of life's petty vexations escapes his soberly despairing pen.",
        "But why on earth inflict such a read upon oneself? one may wonder.",
        "A matter of survival, no doubt. For such is the paradoxical virtue of these eighty-seven unbearable little tales: you emerge from them gasping for air, yet with a furious desire to change the world.",
      ],
      it: [
        "Louis Calaferte, Promenade dans un parc, Gallimard, coll. L'Imaginaire, 1987.",
        "Per accompagnare Calaferte a passeggio non servono garretti allenati alla marcia: basterà un morale d'acciaio. Perché il narratore è lugubre, e la sua conversazione deprimente quanto basta. La quarta di copertina ci avverte subito. Qui il mondo prende il colore di una colonia penale. E in effetti si vaga tra i tormenti più banali del quotidiano come un detenuto tra le sue quattro mura: la decrepitezza dell'età, il ricordo nostalgico dei genitori scomparsi, l'inerzia e la perdita di senso, la diceria, la crudeltà, l'incapacità di amare, l'errore professionale, il tradimento, la reclusione carceraria… Non c'è angolo delle seccature dell'esistenza che sfugga alla sua penna sobriamente disperata.",
        "Ma perché mai infliggersi una simile lettura? ci si chiederà.",
        "Questione di sopravvivenza, senza dubbio. Perché questa è la virtù paradossale di questi ottantasette piccoli racconti insopportabili: se ne esce soffocando, ma con la voglia furiosa di cambiare il mondo.",
      ],
    },
  },
  {
    slug: "cent-ans-de-solitude",
    rubrique: "livres",
    image: "/couvertures/cent-ans-de-solitude.png",
    date: "2026-07-23",
    titreItalique: { fr: "Cent ans de solitude", en: "One Hundred Years of Solitude", it: "Cent'anni di solitudine" },
    titre: {
      fr: "Et bien sûr et avant tout, il y a Cent ans de solitude.",
      en: "And of course, above all, there is One Hundred Years of Solitude.",
      it: "E naturalmente, prima di tutto, c'è Cent'anni di solitudine.",
    },
    extrait: {
      fr: "Bien plus puissant qu'un chef d'œuvre absolu : une vision du monde, une reformulation grandiose du réel.",
      en: "Far more powerful than an absolute masterpiece: a vision of the world, a grandiose reformulation of reality.",
      it: "Ben più potente di un capolavoro assoluto: una visione del mondo, una grandiosa riformulazione del reale.",
    },
    contenu: {
      fr: [
        "Et bien sûr et avant tout, il y a Cent ans de solitude.",
        "Bien plus puissant qu'un chef d'œuvre absolu.",
        "Une vision du monde, une reformulation grandiose du réel, qui brouille les frontières entre le visible et l'invisible, les vivants et les morts, le présent et le passé.",
        "Un récit cataclysmique peuplé de mères et de fils, de mariées et de linceuls, de poignards et de frères, de cirques et de cimetières, de charlatans et de dieux, de revenants et de fuyards, de gitans et de corsaires, d'esprits, de malédictions, de prédictions et de prémonitions, de sortilèges et de sacrilèges, de miracles, de déluges, de fourmis rouges et de goyaves, d'iguanes et de curés.",
        "García Márquez, avec la ferveur de Shéhérazade, nous livre de sa voix bariolée un portrait halluciné et poétique du genre humain et nous donne à voir du même coup les prodigieuses contrées de son imagination déchaînée.",
        "A Macondo, repaire chimérique des Caraïbes et théâtre de l'action, c'est tout l'Occident de Homère, de Boccace, de Rabelais et de Cervantes qui se bouscule, dans un tohu-bohu digne de l'Olympe ou de la Genèse.",
      ],
      en: [
        "And of course, above all, there is One Hundred Years of Solitude.",
        "Far more powerful than an absolute masterpiece.",
        "A vision of the world, a grandiose reformulation of reality, one that blurs the borders between the visible and the invisible, the living and the dead, the present and the past.",
        "A cataclysmic tale peopled with mothers and sons, brides and shrouds, daggers and brothers, circuses and cemeteries, charlatans and gods, ghosts and fugitives, gypsies and corsairs, spirits, curses, predictions and premonitions, spells and sacrileges, miracles, floods, red ants and guavas, iguanas and priests.",
        "García Márquez, with the fervour of Scheherazade, delivers in his motley voice a hallucinated and poetic portrait of humankind, and in the same stroke lets us glimpse the prodigious lands of his unbridled imagination.",
        "In Macondo, that chimerical Caribbean lair and stage of the action, the whole West of Homer, Boccaccio, Rabelais and Cervantes jostles together, in a hubbub worthy of Olympus or of Genesis.",
      ],
      it: [
        "E naturalmente, prima di tutto, c'è Cent'anni di solitudine.",
        "Ben più potente di un capolavoro assoluto.",
        "Una visione del mondo, una grandiosa riformulazione del reale, che confonde i confini tra il visibile e l'invisibile, i vivi e i morti, il presente e il passato.",
        "Un racconto cataclismico popolato di madri e di figli, di spose e di sudari, di pugnali e di fratelli, di circhi e di cimiteri, di ciarlatani e di dèi, di fantasmi e di fuggiaschi, di gitani e di corsari, di spiriti, di maledizioni, di predizioni e di premonizioni, di sortilegi e di sacrilegi, di miracoli, di diluvi, di formiche rosse e di guaiave, di iguane e di preti.",
        "García Márquez, con il fervore di Shahrazàd, ci consegna con la sua voce variopinta un ritratto allucinato e poetico del genere umano e ci fa intravedere al tempo stesso le prodigiose contrade della sua immaginazione scatenata.",
        "A Macondo, tana chimerica dei Caraibi e teatro dell'azione, è tutto l'Occidente di Omero, di Boccaccio, di Rabelais e di Cervantes che si accalca, in un parapiglia degno dell'Olimpo o della Genesi.",
      ],
    },
  },
  {
    slug: "dictature-des-ressentis",
    rubrique: "reflexion",
    image: "/couvertures/dictature-des-ressentis.jpg",
    date: "2026-08-15",
    titre: {
      fr: "La dictature des ressentis : quand Eugénie Bastié pulvérise les dogmes du nouvel ordre moral",
      en: "La dictature des ressentis: when Eugénie Bastié shatters the dogmas of the new moral order",
      it: "La dictature des ressentis: quando Eugénie Bastié polverizza i dogmi del nuovo ordine morale",
    },
    titreItalique: {
      fr: "La dictature des ressentis",
      en: "La dictature des ressentis",
      it: "La dictature des ressentis",
    },
    extrait: {
      fr: "Décryptage éclairé et éclairant de la déconstruction de notre rapport au réel sur laquelle prospère le wokisme, et de l'émergence de l'individu et de ses ressentis comme l'exclusive mesure de toute chose.",
      en: "An enlightened and illuminating analysis of the dismantling of our relationship to reality on which wokeism thrives, and of the rise of the individual and their feelings as the sole measure of all things.",
      it: "Una decifrazione lucida e illuminante dello smantellamento del nostro rapporto con il reale su cui prospera il wokismo, e dell'emergere dell'individuo e dei suoi sentimenti come unica misura di ogni cosa.",
    },
    contenu: {
      fr: [
        "Décryptage éclairé et éclairant de la déconstruction de notre rapport au réel sur laquelle prospère le wokisme et de l'émergence, dans notre société, de l'individu et ses ressentis comme l'exclusive mesure de toute chose.",
        "Et l'on voudrait paradoxalement que ce soit sur ce principe clivant, qui est l'un des fondements du relativisme moral, que se construise un monde plus uni…",
        "Loin du resserrement des liens sociaux promis par cette vision du monde, c'est à une pulvérisation en règle de l'idée de collectivité qu'on assiste : le fameux « vivre ensemble », noble mantra s'il en est, partout radieusement proclamé et d'où viendrait notre salut, se résume en fait à une somme d'intérêts individuels éclatés qui tentent de s'imposer souvent à coups d'invectives ou de sermons, parfois les deux ensemble, selon l'urgence du sujet ou le rapport de force.",
        "Tous les adeptes de ce nouvel ordre moral (doctorants en sciences sociales des universités occidentales en tête, comme nous le rappelle Eugénie Bastié) n'ont qu'à bien se tenir : la résistance face à l'effondrement de la rationalité moderne héritée des Lumières s'organise avec méthode et détermination.",
        "Les chroniques publiées dans Le Figaro et rassemblées dans cet ouvrage en témoignent. Dans ce naufrage de la pensée qui signe notre postmodernité, elles apparaissent comme autant de petites bouées salutaires.",
        "Pour tenter de concilier — éternel combat — liberté individuelle et intérêts collectifs, c'est la raison qu'il faut appeler à la rescousse, et non la vertu.",
        "La raison est toujours vecteur d'unité. La vertu, jamais.",
      ],
      en: [
        "An enlightened and illuminating analysis of the dismantling of our relationship to reality on which wokeism thrives, and of the rise, in our society, of the individual and their feelings as the sole measure of all things.",
        "And we would paradoxically want a more united world to be built upon this divisive principle — one of the very foundations of moral relativism…",
        "Far from the tightening of social bonds this worldview promises, what we are witnessing is a wholesale pulverisation of the very idea of the collective: the famous “living together”, a noble mantra if ever there was one, radiantly proclaimed everywhere as the source of our salvation, in fact boils down to a sum of fragmented individual interests that try to impose themselves, often through invective or sermons, sometimes both at once, depending on the urgency of the topic or the balance of power.",
        "All the adherents of this new moral order (social-science doctoral students at Western universities foremost among them, as Eugénie Bastié reminds us) had better watch out: the resistance to the collapse of the modern rationality inherited from the Enlightenment is organising itself with method and determination.",
        "The columns published in Le Figaro and gathered in this book bear witness to it. Amid this shipwreck of thought that marks our postmodernity, they appear as so many small, saving lifebuoys.",
        "To reconcile — that eternal struggle — individual freedom and collective interests, it is reason we must call to the rescue, not virtue.",
        "Reason is always a vector of unity. Virtue, never.",
      ],
      it: [
        "Una decifrazione lucida e illuminante dello smantellamento del nostro rapporto con il reale su cui prospera il wokismo, e dell'emergere, nella nostra società, dell'individuo e dei suoi sentimenti come unica misura di ogni cosa.",
        "E si vorrebbe, paradossalmente, che sia proprio su questo principio divisivo — uno dei fondamenti del relativismo morale — che si costruisca un mondo più unito…",
        "Lontano dal rafforzamento dei legami sociali promesso da questa visione del mondo, ciò a cui si assiste è una vera e propria polverizzazione dell'idea stessa di collettività: il famoso « vivere insieme », nobile mantra se mai ce n'è uno, ovunque proclamato con entusiasmo e da cui verrebbe la nostra salvezza, si riduce in realtà a una somma di interessi individuali frammentati che cercano di imporsi, spesso a colpi di invettive o di prediche, a volte entrambe insieme, a seconda dell'urgenza del tema o dei rapporti di forza.",
        "Tutti gli adepti di questo nuovo ordine morale (i dottorandi in scienze sociali delle università occidentali in testa, come ci ricorda Eugénie Bastié) non hanno che da tenersi pronti: la resistenza di fronte al crollo della razionalità moderna ereditata dall'Illuminismo si organizza con metodo e determinazione.",
        "Le cronache pubblicate su Le Figaro e raccolte in questo volume ne sono la testimonianza. In questo naufragio del pensiero che segna la nostra postmodernità, esse appaiono come tante piccole boe di salvataggio.",
        "Per tentare di conciliare — eterna lotta — libertà individuale e interessi collettivi, è la ragione che bisogna chiamare in soccorso, non la virtù.",
        "La ragione è sempre veicolo di unità. La virtù, mai.",
      ],
    },
  },
  {
    slug: "churchill-the-painter",
    rubrique: "aparte",
    image: "/couvertures/churchill-1.jpg",
    image2: "/couvertures/churchill-2.jpg",
    date: "2026-08-19",
    titre: {
      fr: "Churchill : et en plus il peint",
      en: "Churchill: and what's more, he paints",
      it: "Churchill: e per di più, dipinge",
    },
    extrait: {
      fr: "Inattendu et, pour tout dire, assez éblouissant.",
      en: "Unexpected and, to be honest, quite dazzling.",
      it: "Inaspettato e, a dirla tutta, piuttosto abbagliante.",
    },
    contenu: {
      fr: [
        "« Happy are the painters, for they shall not be lonely. Light and colour, peace and hope, will keep them company to the end… or almost to the end of the day. » — Winston Churchill",
        "Inattendu et, pour tout dire, assez éblouissant.",
        "[The Wallace Collection — Winston Churchill : The Painter](https://www.wallacecollection.org/whats-on/exhibitions-displays/winston-churchill-the-painter/)",
        "À voir jusqu'au 29 novembre à Londres, dans le magnifique écrin qu'est Hertford House, au cœur de Marylebone.",
      ],
      en: [
        "« Happy are the painters, for they shall not be lonely. Light and colour, peace and hope, will keep them company to the end… or almost to the end of the day. » — Winston Churchill",
        "Unexpected and, to be honest, quite dazzling.",
        "[The Wallace Collection — Winston Churchill : The Painter](https://www.wallacecollection.org/whats-on/exhibitions-displays/winston-churchill-the-painter/)",
        "On view until 29 November in London, in the magnificent setting of Hertford House, in the heart of Marylebone.",
      ],
      it: [
        "« Happy are the painters, for they shall not be lonely. Light and colour, peace and hope, will keep them company to the end… or almost to the end of the day. » — Winston Churchill",
        "Inaspettato e, a dirla tutta, piuttosto abbagliante.",
        "[The Wallace Collection — Winston Churchill : The Painter](https://www.wallacecollection.org/whats-on/exhibitions-displays/winston-churchill-the-painter/)",
        "Da vedere fino al 29 novembre a Londra, nel magnifico scrigno che è Hertford House, nel cuore di Marylebone.",
      ],
    },
  },
  {
    slug: "nabokov-un-nom-qui-pique",
    rubrique: "reflexion",
    image: "/couvertures/nabokov-litteratures.jpg",
    date: "2026-09-08",
    titre: {
      fr: "Nabokov, un nom qui pique...",
      en: "Nabokov, a name with a sting...",
      it: "Nabokov, un nome che pizzica...",
    },
    extrait: {
      fr: "Mais il n'y a pas que Lolita dans sa vie... C'est toute la littérature européenne et russe qu'il a étreinte.",
      en: "There is more to his life than Lolita... It is the whole of European and Russian literature that he embraced.",
      it: "Ma non c'è solo Lolita nella sua vita... È tutta la letteratura europea e russa che ha abbracciato.",
    },
    contenu: {
      fr: [
        "Nabokov : un nom qui pique. Mais il n'y a pas que Lolita dans sa vie...",
        "C'est toute la littérature européenne et russe qu'il a étreinte et que l'on retrouve commentée ici, dans des conférences iconoclastes et réjouissantes prononcées un peu partout en Amérique entre 1941 et 1958.",
        "Mention spéciale pour sa lecture hétérodoxe du Don Quichotte :",
        "« Les deux parties de Don Quichotte constituent une véritable encyclopédie de la cruauté. C'est l'un des livres les plus durs et les plus barbares qu'on ait jamais écrits. Et sa cruauté est artistique. (…). D'abord, je vais passer en revue quelques joyeux échantillons de cruauté physique dans la première partie du livre. (…) Je vais (donc) me contenter d'éclairer de ma petite lampe de poche un coin de la salle de torture. Ensuite, j'étudierai les cruautés mentales de la seconde partie. »",
        "Vladimir Nabokov, Littératures, Bouquins / Robert Laffont.",
      ],
      en: [
        "Nabokov: a name with a sting. But there is more to his life than Lolita...",
        "It is the whole of European and Russian literature that he embraced, and that we find discussed here, in iconoclastic and exhilarating lectures given all over America between 1941 and 1958.",
        "Special mention for his heterodox reading of Don Quixote:",
        "« The two parts of Don Quixote form a veritable encyclopedia of cruelty. It is one of the harshest and most barbarous books ever written. And its cruelty is artistic. (…). First, I shall review a few merry samples of physical cruelty in the first part of the book. (…) I shall therefore content myself with shining my little pocket torch into one corner of the torture chamber. Then I shall examine the mental cruelties of the second part. »",
        "Vladimir Nabokov, Littératures, Bouquins / Robert Laffont.",
      ],
      it: [
        "Nabokov: un nome che pizzica. Ma non c'è solo Lolita nella sua vita...",
        "È tutta la letteratura europea e russa che ha abbracciato, e che ritroviamo qui commentata, in conferenze iconoclaste e godibilissime tenute un po' ovunque in America tra il 1941 e il 1958.",
        "Menzione speciale per la sua lettura eterodossa del Don Chisciotte:",
        "« Le due parti del Don Chisciotte costituiscono una vera enciclopedia della crudeltà. È uno dei libri più duri e più barbari che siano mai stati scritti. E la sua crudeltà è artistica. (…). Anzitutto, passerò in rassegna qualche allegro campione di crudeltà fisica nella prima parte del libro. (…) Mi limiterò dunque a illuminare con la mia piccola torcia un angolo della sala di tortura. Poi studierò le crudeltà mentali della seconda parte. »",
        "Vladimir Nabokov, Littératures, Bouquins / Robert Laffont.",
      ],
    },
  },
];

// Renvoie la valeur d'un champ traduit dans la langue voulue,
// avec repli sur le français si la traduction manque.
export function champ(valeur, langue) {
  if (valeur && typeof valeur === "object" && !Array.isArray(valeur)) {
    return valeur[langue] || valeur.fr;
  }
  return valeur;
}

// Un article n'est visible qu'à partir de sa date (et heure) de publication.
export function estPublie(article) {
  return new Date(article.date) <= new Date();
}

function articlesPublies() {
  return articles.filter(estPublie);
}

export function articlesParRubrique(rubrique) {
  return articlesPublies()
    .filter((a) => a.rubrique === rubrique)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function tousLesArticles() {
  return articlesPublies().sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function articleParSlug(slug) {
  return articlesPublies().find((a) => a.slug === slug);
}
