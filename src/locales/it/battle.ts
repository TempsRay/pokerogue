import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} è apparso.",
  "trainerAppeared": "{{trainerName}}\nvuole combattere!",
  "trainerAppearedDouble": "{{trainerName}}\nvogliono combattere!",
  "trainerSendOut": "{{trainerName}} manda in campo\n{{pokemonName}}!",
  "singleWildAppeared": "Appare {{pokemonName}} selvatico!",
  "multiWildAppeared": "Appaiono {{pokemonName1}}\ne {{pokemonName2}} salvatici!",
  "playerComeBack": "Rientra, {{pokemonName}}!",
  "trainerComeBack": "{{trainerName}} ha ritirato {{pokemonName}}!",
  "playerGo": "Vai! {{pokemonName}}!",
  "trainerGo": "{{trainerName}} manda in campo {{pokemonName}}!",
  "switchQuestion": "Vuoi cambiare\n{{pokemonName}}?",
  "trainerDefeated": "Hai sconfitto\n{{trainerName}}!",
  "moneyWon": "Hai vinto {{moneyAmount}}₽",
  "pokemonCaught": "Preso! {{pokemonName}} è stato catturato!",
  "partyFull": "La tua squadra è al completo.\nVuoi liberare un Pokémon per far spazio a {{pokemonName}}?",
  "pokemon": "Pokémon",
  "sendOutPokemon": "Vai! {{pokemonName}}!",
  "hitResultCriticalHit": "Brutto colpo!",
  "hitResultSuperEffective": "È superefficace!",
  "hitResultNotVeryEffective": "Non è molto efficace…",
  "hitResultNoEffect": "Non ha effetto su {{pokemonName}}!",
  "hitResultOneHitKO": "KO con un colpo!",
  "attackFailed": "Ma ha fallito!",
  "attackHitsCount": "Colpito {{count}} volta/e!",
  "expGain": "{{pokemonName}} ha guadagnato\n{{exp}} Punti Esperienza!",
  "levelUp": "{{pokemonName}} è salito al\nlivello {{level}}!",
  "learnMove": "{{pokemonName}} impara\n{{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} vorrebbe imparare\n{{moveName}}.",
  "learnMoveLimitReached": "Tuttavia, {{pokemonName}}\nconosce già quattro mosse.",
  "learnMoveReplaceQuestion": "Vuoi che ne dimentichi una e al suo\nposto apprenda {{moveName}}?",
  "learnMoveStopTeaching": "Vuoi smettere di fargli imparare\n{{moveName}}?",
  "learnMoveNotLearned": "{{pokemonName}} non ha imparato\n{{moveName}}.",
  "learnMoveForgetQuestion": "Quale mossa deve dimenticare?",
  "learnMoveForgetSuccess": "{{pokemonName}} ha dimenticato la mossa\n{{moveName}}.",
  "countdownPoof": "@d{32}1, @d{15}2, @d{15}e@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}ta-daaaa!",
  "learnMoveAnd": "E…",
  "levelCapUp": "Il livello massimo\nè aumentato a {{levelCap}}!",
  "moveNotImplemented": "{{moveName}} non è ancora implementata e non può essere selezionata.",
  "moveNoPP": "Non ci sono PP rimanenti\nper questa mossa!",
  "moveDisabled": "{{moveName}} è disabilitata!",
  "noPokeballForce": "Una forza misteriosa\nimpedisce l'uso dell Poké Ball.",
  "noPokeballTrainer": "Non puoi catturare\nPokémon di altri allenatori!",
  "noPokeballMulti": "Puoi lanciare una Poké Ball\nquando rimane un solo Pokémon!",
  "noPokeballStrong": "Il Pokémon avversario è troppo forte per essere catturato!\nDevi prima indebolirlo!",
  "noEscapeForce": "Una forza misteriosa\nimpedisce la fuga.",
  "noEscapeTrainer": "Non puoi sottrarti\nalla lotta con un'allenatore!",
  "noEscapePokemon": "{{moveName}} di {{pokemonName}}\npreviene la {{escapeVerb}}!",
  "runAwaySuccess": "Scampato pericolo!",
  "runAwayCannotEscape": "Non puoi fuggire!",
  "escapeVerbSwitch": "cambiando",
  "escapeVerbFlee": "fuggendo",
  "notDisabled": "{{pokemonName}}'s {{moveName}} non è più\ndisabilitata!",
  "turnEndHpRestore": "{{pokemonName}}'s HP was restored.",
  "hpIsFull": "{{pokemonName}}'s\nHP is full!",
  "skipItemQuestion": "Sei sicuro di non voler prendere nessun oggetto?",
  "eggHatching": "Oh!",
  "ivScannerUseQuestion": "Vuoi usare lo scanner di IV su {{pokemonName}}?",
  "wildPokemonWithAffix": "{{pokemonName}} selvatico",
  "foePokemonWithAffix": "{{pokemonName}} avversario",
  "useMove": "{{pokemonNameWithAffix}} usa {{moveName}}!",
  "drainMessage": "Viene prelevata energia\n da{{pokemonName}}!",
  "regainHealth": "{{pokemonName}} ha rigenerato\npunti salute!",
  "fainted": "{{pokemonNameWithAffix}} non è più in\ngrado di combattere!",
  "statRose": "{{pokemonNameWithAffix}}'s {{stats}} è aumentato/a!",
  "statSharplyRose": "{{pokemonNameWithAffix}}'s {{stats}} è aumentato/a molto!",
  "statRoseDrastically": "{{pokemonNameWithAffix}}'s {{stats}} è aumentato/a drasticamente!",
  "statWontGoAnyHigher": "{{pokemonNameWithAffix}}'s {{stats}} non può aumentare più di così!",
  "statFell": "{{pokemonNameWithAffix}}'s {{stats}} è diminuito/a!",
  "statHarshlyFell": "{{pokemonNameWithAffix}}'s {{stats}} è diminuito/a molto!",
  "statSeverelyFell": "{{pokemonNameWithAffix}}'s {{stats}} è diminuito/a drasticamente!",
  "statWontGoAnyLower": "{{pokemonNameWithAffix}}'s {{stats}} non può diminuire più di così!",
  "ppReduced": "It reduced the PP of {{targetName}}'s\n{{moveName}} by {{reduction}}!",
  "battlerTagsRechargingLapse": "{{pokemonNameWithAffix}} deve\nricaricarsi!",
  "battlerTagsTrappedOnAdd": "{{pokemonNameWithAffix}} non può\npiù fuggire!",
  "battlerTagsTrappedOnRemove": "{{pokemonNameWithAffix}} è stato liberato\nda {{moveName}}",
  "battlerTagsFlinchedLapse": "{{pokemonNameWithAffix}} tentenna!",
  "battlerTagsConfusedOnAdd": "{{pokemonNameWithAffix}} è\nconfuso!",
  "battlerTagsConfusedOnRemove": "{{pokemonNameWithAffix}} non\nè più confuso!",
  "battlerTagsConfusedOnOverlap": "{{pokemonNameWithAffix}} è\ngià confuso!",
  "battlerTagsConfusedLapse": "{{pokemonNameWithAffix}} è\nconfuso!",
  "battlerTagsConfusedLapseHurtItself": "Si colpisce da solo per via della\nconfusione!",
  "battlerTagsDestinyBondLapseIsBoss": "{{pokemonNameWithAffix}} è immune\na Destinobbligato.",
  "battlerTagsDestinyBondLapse": "{{pokemonNameWithAffix}} trascina\ncon sé{{pokemonNameWithAffix2}}!",
  "battlerTagsInfatuatedOnAdd": "{{pokemonNameWithAffix}} si è infatuato\ndi {{sourcePokemonName}}!",
  "battlerTagsInfatuatedOnOverlap": "{{pokemonNameWithAffix}} è\ngià infatuato!",
  "battlerTagsInfatuatedLapse": "{{pokemonNameWithAffix}} è infatuato\ndi {{sourcePokemonName}}!",
  "battlerTagsInfatuatedLapseImmobilize": "{{pokemonNameWithAffix}} è\nimmobilizzato dall'infatuazione!",
  "battlerTagsInfatuatedOnRemove": "{{pokemonNameWithAffix}} non è\npiù infatuato.",
  "battlerTagsSeededOnAdd": "{{pokemonNameWithAffix}} è pieno di semi!",
  "battlerTagsSeededLapse": "La salute di {{pokemonNameWithAffix}}\nviene prelevata da Parassiseme!",
  "battlerTagsSeededLapseShed": "Parassiseme di {{pokemonNameWithAffix}}\nha risucchiato la melma!",
  "battlerTagsNightmareOnAdd": "{{pokemonNameWithAffix}} sta\navendo un Incubo!",
  "battlerTagsNightmareOnOverlap": "{{pokemonNameWithAffix}} sta\ngià avendo un Incubo!",
  "battlerTagsNightmareLapse": "{{pokemonNameWithAffix}} è bloccato\nin un Incubo!",
  "battlerTagsEncoreOnAdd": "{{pokemonNameWithAffix}} ha\nsubito Ripeti!",
  "battlerTagsEncoreOnRemove": "L'effetto di Ripeti su {{pokemonNameWithAffix}}\n è terminato!",
  "battlerTagsHelpingHandOnAdd": "{{pokemonNameWithAffix}} è pronto ad\naiutare {{pokemonName}}!",
  "battlerTagsIngrainLapse": "{{pokemonNameWithAffix}} assorbe\nnutrienti dalle sue radici!",
  "battlerTagsIngrainOnTrap": "{{pokemonNameWithAffix}} ha messo le radici!",
  "battlerTagsAquaRingOnAdd": "{{pokemonNameWithAffix}} si è circondato\ncon un velo d'acqua!",
  "battlerTagsAquaRingLapse": "{{moveName}} ha ripristinato\ni PS di {{pokemonName}}!",
  "battlerTagsDrowsyOnAdd": "{{pokemonNameWithAffix}} sta per addormentarsi!",
  "battlerTagsDamagingTrapLapse": "{{pokemonNameWithAffix}} subisce danni\nper via di {{moveName}}!",
  "battlerTagsBindOnTrap": "{{pokemonNameWithAffix}} viene schiacciato da\n{{moveName}} di {{sourcePokemonName}}!",
  "battlerTagsWrapOnTrap": "{{pokemonNameWithAffix}} è stato avvinghiato\nda {{sourcePokemonName}}!",
  "battlerTagsVortexOnTrap": "{{pokemonNameWithAffix}} è intrappolato\nnel vortice!",
  "battlerTagsClampOnTrap": "{{sourcePokemonNameWithAffix}} sta intenagliando\n{{pokemonName}}!",
  "battlerTagsSandTombOnTrap": "{{pokemonNameWithAffix}} è intrappolato\nda {{moveName}}!",
  "battlerTagsMagmaStormOnTrap": "{{pokemonNameWithAffix}} è intrappolato\nnel magma vorticoso!",
  "battlerTagsSnapTrapOnTrap": "{{pokemonNameWithAffix}} è intrappolato\nin una tagliola!",
  "battlerTagsThunderCageOnTrap": "{{sourcePokemonNameWithAffix}} ha intrappolato\n{{pokemonNameWithAffix}}!",
  "battlerTagsInfestationOnTrap": "{{pokemonNameWithAffix}} ha subito un\ninfestazione da parte di {{sourcePokemonNameWithAffix}}!",
  "battlerTagsProtectedOnAdd": "{{pokemonNameWithAffix}}\nsi è protetto!",
  "battlerTagsProtectedLapse": "{{pokemonNameWithAffix}}\nsi è protetto!",
  "battlerTagsEnduringOnAdd": "{{pokemonNameWithAffix}} si prepara a\nsubire il colpo!",
  "battlerTagsEnduringLapse": "{{pokemonNameWithAffix}} resiste\nal colpo!",
  "battlerTagsSturdyLapse": "{{pokemonNameWithAffix}} ha resistito\ngrazie a Vigore!",
  "battlerTagsPerishSongLapse": "Il conto alla rovescia di Ultimocanto per {{pokemonNameWithAffix}} scende a {{turnCount}}.",
  "battlerTagsTruantLapse": "{{pokemonNameWithAffix}} sta\nciondolando!",
  "battlerTagsSlowStartOnAdd": "{{pokemonNameWithAffix}} non\ningrana!",
  "battlerTagsSlowStartOnRemove": "{{pokemonNameWithAffix}} ritrova\nlo slancio!",
  "battlerTagsHighestStatBoostOnAdd": "{{statName}} di {{pokemonNameWithAffix}}\nviene aumentato/a!",
  "battlerTagsHighestStatBoostOnRemove": "Gli effetti di {{abilityName}}\ndi {{pokemonNameWithAffix}} sono cessati!",
  "battlerTagsCritBoostOnAdd": "{{pokemonNameWithAffix}} si prepara\nalla lotta!",
  "battlerTagsCritBoostOnRemove": "{{pokemonNameWithAffix}} si è rilassato.",
  "battlerTagsSaltCuredOnAdd": "{{pokemonNameWithAffix}} è stato messo sotto sale!",
  "battlerTagsSaltCuredLapse": "{{pokemonNameWithAffix}} viene colpito da {{moveName}}!",
  "battlerTagsCursedOnAdd": "{{pokemonNameWithAffix}} ha sacrificato metà dei suoi PS per\nlanciare una maledizione su {{pokemonName}}!",
  "battlerTagsCursedLapse": "{{pokemonNameWithAffix}} subisce la maledizione!"
} as const;
