import React, { useState, useRef, useEffect }from 'react'; 
import {View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const words = [
    "abets",
    "abhor",
    "abide",
    "abler",
    "abode",
    "abort",
    "about",
    "above",
    "abuse",
    "abuts",
    "ached",
    "aches",
    "acids",
    "acorn",
    "acres",
    "acrid",
    "acted",
    "actor",
    "acute",
    "adept",
    "adieu",
    "adios",
    "admen",
    "admin",
    "admit",
    "adobe",
    "adopt",
    "adore",
    "adorn",
    "adult",
    "adzes",
    "aeons",
    "afire",
    "after",
    "agent",
    "agile",
    "agism",
    "aglow",
    "agony",
    "aides",
    "ailed",
    "aimed",
    "aired",
    "aisle",
    "aitch",
    "album",
    "alder",
    "alert",
    "alien",
    "align",
    "alike",
    "alive",
    "aloes",
    "aloft",
    "alone",
    "along",
    "aloud",
    "alter",
    "altos",
    "amber",
    "ambit",
    "amble",
    "amend",
    "amity",
    "among",
    "amour",
    "ample",
    "amply",
    "amuse",
    "angel",
    "anger",
    "angle",
    "angry",
    "angst",
    "anise",
    "ankle",
    "anode",
    "antes",
    "antis",
    "antsy",
    "anvil",
    "aphid",
    "aping",
    "apron",
    "aptly",
    "arced",
    "argon",
    "argot",
    "argue",
    "arise",
    "armed",
    "arose",
    "arsed",
    "arson",
    "artsy",
    "ascot",
    "ashen",
    "aside",
    "asked",
    "askew",
    "aspen",
    "aspic",
    "atoms",
    "atone",
    "audio",
    "audit",
    "auger",
    "aught",
    "aunts",
    "aunty",
    "autos",
    "avers",
    "avert",
    "avoid",
    "avows",
    "awful",
    "awing",
    "awoke",
    "axing",
    "axiom",
    "axles",
    "azure",
    "backs",
    "bacon",
    "badge",
    "badly",
    "bagel",
    "bails",
    "bairn",
    "baits",
    "baize",
    "baked",
    "baker",
    "bakes",
    "baldy",
    "baled",
    "bales",
    "balks",
    "balms",
    "balmy",
    "bands",
    "bandy",
    "bangs",
    "banjo",
    "banks",
    "bards",
    "bared",
    "bares",
    "barfs",
    "barge",
    "barks",
    "barmy",
    "barns",
    "baron",
    "based",
    "baser",
    "basic",
    "basil",
    "basin",
    "baste",
    "batch",
    "bathe",
    "baths",
    "batik",
    "baton",
    "baulk",
    "bawdy",
    "bawls",
    "bayed",
    "bayou",
    "beach",
    "beads",
    "beady",
    "beaks",
    "beams",
    "beans",
    "beard",
    "bears",
    "beast",
    "beats",
    "beaus",
    "beaut",
    "beaux",
    "becks",
    "befit",
    "began",
    "begat",
    "begin",
    "begot",
    "begum",
    "begun",
    "being",
    "belay",
    "belch",
    "below",
    "belts",
    "bench",
    "bends",
    "bendy",
    "bents",
    "berks",
    "berth",
    "betas",
    "bhaji",
    "bides",
    "bidet",
    "biers",
    "bight",
    "bigot",
    "bijou",
    "biked",
    "biker",
    "bikes",
    "bilge",
    "bilks",
    "binds",
    "binge",
    "bingo",
    "biped",
    "birch",
    "birds",
    "birth",
    "bison",
    "bitch",
    "bites",
    "black",
    "blade",
    "blags",
    "blame",
    "bland",
    "blank",
    "blare",
    "blase",
    "blast",
    "blaze",
    "bleak",
    "bleat",
    "blend",
    "blest",
    "blimp",
    "blind",
    "blink",
    "blips",
    "blitz",
    "block",
    "blocs",
    "bloke",
    "blond",
    "blots",
    "blown",
    "blows",
    "blowy",
    "bluer",
    "blues",
    "blunt",
    "blurs",
    "blurt",
    "blush",
    "board",
    "boars",
    "boast",
    "boats",
    "bodes",
    "bodge",
    "bogey",
    "bogie",
    "bogus",
    "boils",
    "boles",
    "bolts",
    "bonce",
    "bonds",
    "boned",
    "boner",
    "bones",
    "bongs",
    "bonks",
    "bonus",
    "borax",
    "bored",
    "bores",
    "borne",
    "bosun",
    "botch",
    "bough",
    "bound",
    "bouts",
    "bowed",
    "bowel",
    "bower",
    "bowls",
    "boxed",
    "boxer",
    "boxes",
    "brace",
    "brags",
    "braid",
    "brain",
    "brake",
    "brand",
    "brash",
    "brats",
    "brave",
    "bravo",
    "brawl",
    "brawn",
    "brays",
    "bread",
    "break",
    "bream",
    "brews",
    "brick",
    "bride",
    "brief",
    "brigs",
    "brims",
    "brine",
    "bring",
    "brink",
    "briny",
    "brisk",
    "broad",
    "broil",
    "broke",
    "broth",
    "brown",
    "brows",
    "bruit",
    "brush",
    "brute",
    "bucks",
    "budge",
    "bugle",
    "build",
    "built",
    "bulge",
    "bulgy",
    "bulks",
    "bulky",
    "bumph",
    "bumps",
    "bumpy",
    "bunch",
    "bungs",
    "bunks",
    "bunts",
    "buoys",
    "burgh",
    "burks",
    "burly",
    "burns",
    "burnt",
    "burps",
    "burst",
    "bused",
    "bushy",
    "busty",
    "butch",
    "buxom",
    "buyer",
    "bylaw",
    "byres",
    "bytes",
    "caber",
    "cabin",
    "cable",
    "cadet",
    "cadge",
    "cadre",
    "cafes",
    "caged",
    "cages",
    "cagey",
    "cairn",
    "caked",
    "cakes",
    "calif",
    "calms",
    "calve",
    "calyx",
    "camel",
    "cameo",
    "camps",
    "campy",
    "candy",
    "caned",
    "canes",
    "canoe",
    "canto",
    "cants",
    "caped",
    "caper",
    "capes",
    "capon",
    "cards",
    "cared",
    "cares",
    "cargo",
    "carob",
    "carol",
    "carps",
    "carts",
    "carve",
    "cased",
    "caste",
    "cater",
    "caulk",
    "cause",
    "caved",
    "caver",
    "caves",
    "cavil",
    "cawed",
    "cedar",
    "cents",
    "certs",
    "chafe",
    "chain",
    "chair",
    "chalk",
    "champ",
    "chant",
    "chaos",
    "chaps",
    "chard",
    "charm",
    "chars",
    "chart",
    "chary",
    "chase",
    "chasm",
    "chats",
    "cheap",
    "cheat",
    "chefs",
    "chest",
    "chews",
    "chewy",
    "chide",
    "chief",
    "child",
    "chime",
    "chimp",
    "china",
    "chink",
    "chins",
    "chips",
    "chirp",
    "chits",
    "chive",
    "chivy",
    "choir",
    "choke",
    "chomp",
    "chops",
    "chord",
    "chore",
    "chose",
    "chows",
    "chugs",
    "chump",
    "chums",
    "chunk",
    "churn",
    "chute",
    "cider",
    "cigar",
    "cited",
    "cites",
    "civet",
    "claim",
    "clamp",
    "clams",
    "clang",
    "clank",
    "clans",
    "claps",
    "clash",
    "clasp",
    "claws",
    "clean",
    "clear",
    "cleat",
    "clefs",
    "cleft",
    "clerk",
    "climb",
    "clime",
    "cling",
    "clink",
    "clips",
    "cloak",
    "clods",
    "clogs",
    "clone",
    "clonk",
    "close",
    "cloth",
    "clots",
    "cloud",
    "clout",
    "clove",
    "clown",
    "clubs",
    "clued",
    "clues",
    "clump",
    "clung",
    "clunk",
    "coals",
    "coast",
    "coats",
    "cobra",
    "codas",
    "codes",
    "codex",
    "coeds",
    "coils",
    "coins",
    "colas",
    "colds",
    "coley",
    "colts",
    "comas",
    "combs",
    "comer",
    "comes",
    "comet",
    "comfy",
    "coned",
    "cones",
    "coney",
    "conga",
    "conks",
    "coped",
    "copes",
    "copse",
    "coral",
    "cords",
    "cored",
    "cores",
    "corgi",
    "corks",
    "corms",
    "corns",
    "corny",
    "corps",
    "cough",
    "could",
    "count",
    "coupe",
    "coups",
    "court",
    "coven",
    "cover",
    "coves",
    "covet",
    "cowed",
    "cower",
    "cowls",
    "coxed",
    "coxes",
    "coypu",
    "crabs",
    "craft",
    "crags",
    "cramp",
    "crams",
    "crane",
    "crank",
    "crape",
    "craps",
    "crash",
    "crate",
    "crave",
    "crawl",
    "craze",
    "crazy",
    "creak",
    "cream",
    "credo",
    "crept",
    "crest",
    "crews",
    "cribs",
    "cried",
    "cries",
    "crime",
    "crimp",
    "crisp",
    "croak",
    "croft",
    "crone",
    "crony",
    "crops",
    "croup",
    "crowd",
    "crown",
    "crows",
    "crude",
    "cruel",
    "cruet",
    "crumb",
    "crush",
    "crust",
    "crypt",
    "cubed",
    "cubes",
    "cuing",
    "cults",
    "cumin",
    "cunts",
    "cupid",
    "curbs",
    "curds",
    "cured",
    "cures",
    "curio",
    "curls",
    "curly",
    "curse",
    "curve",
    "curvy",
    "cushy",
    "cuter",
    "cutey",
    "cutie",
    "czars",
    "dagos",
    "daily",
    "dairy",
    "daisy",
    "dales",
    "dames",
    "damns",
    "damps",
    "dance",
    "dares",
    "darns",
    "darts",
    "dates",
    "datum",
    "daubs",
    "daunt",
    "dawns",
    "deals",
    "dealt",
    "deans",
    "dears",
    "deary",
    "death",
    "debar",
    "debit",
    "debts",
    "debug",
    "debut",
    "decaf",
    "decal",
    "decay",
    "decks",
    "decor",
    "decoy",
    "decry",
    "defog",
    "deify",
    "deign",
    "deism",
    "deity",
    "delay",
    "delis",
    "delta",
    "demob",
    "demon",
    "demos",
    "demur",
    "denim",
    "dents",
    "depot",
    "depth",
    "derby",
    "detox",
    "devil",
    "dhoti",
    "dhows",
    "dials",
    "diary",
    "dices",
    "dicey",
    "dicks",
    "dicky",
    "dicta",
    "diets",
    "dikes",
    "dimes",
    "dimly",
    "dinar",
    "diner",
    "dines",
    "dingo",
    "dingy",
    "dinky",
    "dipso",
    "dirge",
    "dirks",
    "dirty",
    "disco",
    "dishy",
    "ditch",
    "ditzy",
    "divan",
    "divas",
    "diver",
    "dives",
    "divot",
    "docks",
    "doers",
    "dogie",
    "dogma",
    "doily",
    "doing",
    "doles",
    "dolts",
    "domes",
    "donut",
    "dopes",
    "dopey",
    "dorks",
    "dorky",
    "dorms",
    "dotes",
    "doubt",
    "dough",
    "douse",
    "doves",
    "dowel",
    "downs",
    "downy",
    "dowry",
    "dowse",
    "doyen",
    "dozen",
    "dozes",
    "draft",
    "drags",
    "drain",
    "drake",
    "drams",
    "drank",
    "drape",
    "drawl",
    "drawn",
    "draws",
    "drays",
    "dream",
    "dregs",
    "dries",
    "drift",
    "drily",
    "drink",
    "drips",
    "drive",
    "drone",
    "drops",
    "drove",
    "drown",
    "drugs",
    "drums",
    "drunk",
    "ducal",
    "duchy",
    "ducks",
    "ducky",
    "ducts",
    "duels",
    "duets",
    "dukes",
    "dumbo",
    "dumps",
    "dumpy",
    "dunce",
    "dunes",
    "dunks",
    "dupes",
    "dusky",
    "dusty",
    "duvet",
    "dwarf",
    "dwelt",
    "dying",
    "dykes",
    "earls",
    "early",
    "earns",
    "earth",
    "ebony",
    "eclat",
    "edict",
    "edify",
    "edits",
    "eight",
    "eking",
    "elbow",
    "elfin",
    "email",
    "emirs",
    "emits",
    "empty",
    "enact",
    "endow",
    "enjoy",
    "enrol",
    "entry",
    "envoy",
    "epics",
    "epoch",
    "epoxy",
    "equal",
    "equip",
    "erupt",
    "ethic",
    "ethos",
    "euros",
    "evict",
    "evils",
    "exact",
    "exalt",
    "exams",
    "exist",
    "exits",
    "expat",
    "expos",
    "extol",
    "extra",
    "exult",
    "eying",
    "fable",
    "faced",
    "faces",
    "facet",
    "facts",
    "fades",
    "fails",
    "faint",
    "fairs",
    "fairy",
    "faith",
    "faked",
    "faker",
    "fakes",
    "fakir",
    "false",
    "famed",
    "fancy",
    "fangs",
    "farce",
    "fared",
    "fares",
    "farms",
    "farts",
    "fated",
    "fates",
    "fatso",
    "fault",
    "fauns",
    "faves",
    "favor",
    "fawns",
    "faxed",
    "faxes",
    "fazed",
    "fazes",
    "fears",
    "feast",
    "feats",
    "fecal",
    "feign",
    "feint",
    "felon",
    "femur",
    "fends",
    "feral",
    "ferns",
    "ferny",
    "fetal",
    "fetch",
    "fetid",
    "fetus",
    "feuds",
    "fiats",
    "fiber",
    "fibre",
    "fiche",
    "field",
    "fiend",
    "fiery",
    "fight",
    "filch",
    "filed",
    "files",
    "filet",
    "films",
    "filmy",
    "filth",
    "final",
    "finch",
    "finds",
    "fined",
    "finer",
    "fines",
    "finks",
    "fiord",
    "fired",
    "fires",
    "firms",
    "first",
    "firth",
    "fishy",
    "fiver",
    "fives",
    "fixed",
    "fixer",
    "fixes",
    "fjord",
    "flack",
    "flags",
    "flair",
    "flake",
    "flaky",
    "flame",
    "flank",
    "flans",
    "flaps",
    "flare",
    "flash",
    "flask",
    "flats",
    "flaws",
    "flays",
    "fleas",
    "fleck",
    "flesh",
    "flick",
    "flier",
    "flies",
    "fling",
    "flint",
    "flips",
    "flirt",
    "flits",
    "float",
    "flock",
    "floes",
    "flogs",
    "flops",
    "flora",
    "flour",
    "flout",
    "flown",
    "flows",
    "flubs",
    "flues",
    "fluid",
    "fluke",
    "fluky",
    "flung",
    "flunk",
    "flush",
    "flute",
    "flyer",
    "foals",
    "foams",
    "foamy",
    "focal",
    "focus",
    "fogey",
    "foils",
    "foist",
    "folds",
    "folks",
    "fonts",
    "foray",
    "force",
    "fords",
    "forge",
    "forks",
    "forms",
    "forte",
    "forth",
    "forts",
    "forty",
    "forum",
    "fouls",
    "found",
    "fount",
    "fours",
    "fowls",
    "foxed",
    "foxes",
    "foyer",
    "frail",
    "frame",
    "franc",
    "frank",
    "frats",
    "fraud",
    "frays",
    "freak",
    "fresh",
    "frets",
    "fried",
    "fries",
    "frigs",
    "frisk",
    "frock",
    "frogs",
    "frond",
    "front",
    "frosh",
    "frost",
    "froth",
    "frown",
    "froze",
    "fruit",
    "frump",
    "fucks",
    "fudge",
    "fuels",
    "fumed",
    "fumes",
    "funds",
    "fungi",
    "funks",
    "funky",
    "furls",
    "furze",
    "fused",
    "fusty",
    "futon",
    "fuzes",
    "gable",
    "gaily",
    "gains",
    "gaits",
    "gales",
    "games",
    "gamey",
    "gamut",
    "gaols",
    "gaped",
    "gapes",
    "gated",
    "gates",
    "gator",
    "gaudy",
    "gaunt",
    "gauze",
    "gauzy",
    "gavel",
    "gawks",
    "gawky",
    "gawps",
    "gayer",
    "gazed",
    "gazes",
    "gears",
    "gecko",
    "gelds",
    "gents",
    "genus",
    "germs",
    "ghost",
    "ghoul",
    "giant",
    "gibed",
    "gibes",
    "gifts",
    "gilds",
    "gilts",
    "gipsy",
    "girds",
    "girls",
    "girly",
    "giros",
    "girth",
    "gismo",
    "gites",
    "given",
    "giver",
    "gives",
    "gizmo",
    "glace",
    "glade",
    "gland",
    "glare",
    "glaze",
    "gleam",
    "glean",
    "glens",
    "glide",
    "glint",
    "glitz",
    "gloat",
    "globe",
    "globs",
    "glory",
    "glove",
    "glows",
    "glued",
    "glues",
    "gluey",
    "gluts",
    "gnash",
    "gnats",
    "gnaws",
    "gnome",
    "goads",
    "goals",
    "goats",
    "godly",
    "goers",
    "gofer",
    "golds",
    "gonad",
    "goner",
    "gored",
    "gores",
    "gorse",
    "goths",
    "gourd",
    "gouty",
    "gowns",
    "grabs",
    "grace",
    "grade",
    "grads",
    "graft",
    "grail",
    "grain",
    "grams",
    "grand",
    "grans",
    "grant",
    "grape",
    "graph",
    "grasp",
    "grate",
    "grave",
    "gravy",
    "grays",
    "graze",
    "great",
    "greys",
    "grids",
    "grief",
    "grime",
    "grimy",
    "grind",
    "grins",
    "gripe",
    "grips",
    "grits",
    "groan",
    "groin",
    "grope",
    "group",
    "grout",
    "grove",
    "growl",
    "grown",
    "grows",
    "grubs",
    "gruel",
    "grump",
    "grunt",
    "guano",
    "guard",
    "guest",
    "guide",
    "guild",
    "guile",
    "guilt",
    "guise",
    "gulch",
    "gulfs",
    "gulps",
    "gumbo",
    "gushy",
    "gusto",
    "gusty",
    "gutsy",
    "gyros",
    "habit",
    "hacks",
    "haiku",
    "hails",
    "hairs",
    "hairy",
    "hakes",
    "halos",
    "halts",
    "halve",
    "hands",
    "handy",
    "hangs",
    "hanks",
    "hanky",
    "hardy",
    "hared",
    "harem",
    "hares",
    "harks",
    "harms",
    "harps",
    "harpy",
    "harts",
    "haste",
    "hasty",
    "hated",
    "hater",
    "hates",
    "hauls",
    "haunt",
    "haven",
    "havoc",
    "hawed",
    "hawks",
    "hazed",
    "hazel",
    "hazes",
    "heads",
    "heady",
    "heals",
    "heaps",
    "heard",
    "hears",
    "heart",
    "heats",
    "heavy",
    "hefts",
    "hefty",
    "heirs",
    "heist",
    "helix",
    "helms",
    "helps",
    "herbs",
    "herds",
    "heron",
    "hertz",
    "hicks",
    "hides",
    "hiked",
    "hiker",
    "hikes",
    "hilts",
    "hinds",
    "hinge",
    "hints",
    "hired",
    "hires",
    "hived",
    "hives",
    "hoard",
    "hoary",
    "hocks",
    "hoick",
    "hoist",
    "hokey",
    "hokum",
    "holds",
    "holed",
    "holes",
    "homed",
    "homer",
    "homes",
    "homey",
    "honed",
    "hones",
    "honey",
    "honks",
    "honky",
    "hoped",
    "hopes",
    "horde",
    "horns",
    "horny",
    "horse",
    "horsy",
    "hosed",
    "hotel",
    "hotly",
    "hound",
    "hours",
    "house",
    "hovel",
    "hover",
    "howdy",
    "howls",
    "huger",
    "hulks",
    "human",
    "humid",
    "humor",
    "humps",
    "hunks",
    "hunky",
    "hunts",
    "hurls",
    "hurts",
    "husky",
    "hydra",
    "hyena",
    "hying",
    "hymen",
    "hymns",
    "hyped",
    "hyper",
    "hypes",
    "icons",
    "ideal",
    "ideas",
    "idler",
    "idles",
    "idols",
    "ikons",
    "image",
    "imbed",
    "imbue",
    "impel",
    "imply",
    "incur",
    "index",
    "inept",
    "inert",
    "infer",
    "ingot",
    "inked",
    "inlay",
    "inlet",
    "input",
    "inset",
    "inter",
    "intro",
    "inure",
    "irate",
    "irked",
    "irons",
    "irony",
    "islet",
    "itchy",
    "items",
    "ivory",
    "jacks",
    "jails",
    "jambs",
    "japes",
    "jaunt",
    "jawed",
    "jeans",
    "jerks",
    "jerky",
    "jibed",
    "jibes",
    "jihad",
    "jilts",
    "jinks",
    "jived",
    "jives",
    "jocks",
    "joeys",
    "johns",
    "joins",
    "joint",
    "joist",
    "joked",
    "joker",
    "jokes",
    "jokey",
    "jolts",
    "joule",
    "joust",
    "jowls",
    "jowly",
    "judge",
    "juice",
    "juicy",
    "julep",
    "jumbo",
    "jumps",
    "jumpy",
    "junks",
    "junky",
    "junta",
    "kaput",
    "karts",
    "kerbs",
    "ketch",
    "kilns",
    "kilos",
    "kilts",
    "kinda",
    "kinds",
    "kings",
    "kites",
    "klutz",
    "knave",
    "knead",
    "knelt",
    "knife",
    "knits",
    "knobs",
    "knots",
    "knows",
    "korma",
    "krona",
    "krone",
    "kudos",
    "labor",
    "laced",
    "laces",
    "lacks",
    "laden",
    "lager",
    "laird",
    "lairs",
    "laity",
    "lakes",
    "lambs",
    "lamer",
    "lamps",
    "lance",
    "lands",
    "lanes",
    "lanky",
    "lapse",
    "larch",
    "lards",
    "large",
    "largo",
    "larks",
    "laser",
    "latch",
    "later",
    "latex",
    "lathe",
    "laths",
    "lauds",
    "laugh",
    "lawns",
    "laxer",
    "layer",
    "lazed",
    "lazes",
    "leach",
    "leads",
    "leafs",
    "leafy",
    "leaks",
    "leaky",
    "leans",
    "leant",
    "leaps",
    "leapt",
    "learn",
    "leash",
    "least",
    "lefts",
    "lefty",
    "legit",
    "lemon",
    "lemur",
    "lends",
    "letch",
    "letup",
    "lexis",
    "liars",
    "licks",
    "lidos",
    "liens",
    "lifer",
    "lifts",
    "light",
    "liked",
    "liken",
    "likes",
    "limbo",
    "limbs",
    "limed",
    "limes",
    "limey",
    "limos",
    "limps",
    "lined",
    "liner",
    "lines",
    "lingo",
    "links",
    "lions",
    "liter",
    "lithe",
    "litre",
    "lived",
    "liven",
    "liver",
    "lives",
    "loads",
    "loafs",
    "loamy",
    "loans",
    "loath",
    "lobed",
    "lobes",
    "lochs",
    "locks",
    "locum",
    "locus",
    "lodes",
    "lodge",
    "lofts",
    "lofty",
    "logic",
    "loins",
    "loner",
    "longs",
    "loped",
    "lopes",
    "lords",
    "loser",
    "lotus",
    "lough",
    "lours",
    "louse",
    "lousy",
    "louts",
    "loved",
    "lover",
    "loves",
    "lovey",
    "lowed",
    "lower",
    "lubes",
    "lucid",
    "lucks",
    "lucky",
    "lucre",
    "luges",
    "lumps",
    "lumpy",
    "lunar",
    "lunch",
    "lunge",
    "lungs",
    "lupin",
    "lurch",
    "lured",
    "lures",
    "lurgy",
    "lurid",
    "lurks",
    "lusty",
    "lutes",
    "lying",
    "lymph",
    "lynch",
    "lyres",
    "lyric",
    "maces",
    "macho",
    "macks",
    "macro",
    "madly",
    "magic",
    "maids",
    "mails",
    "mains",
    "maize",
    "major",
    "maker",
    "makes",
    "males",
    "malts",
    "manes",
    "mange",
    "mango",
    "mangy",
    "manic",
    "manky",
    "manly",
    "manor",
    "manse",
    "maple",
    "march",
    "mares",
    "marge",
    "marks",
    "marsh",
    "marts",
    "mason",
    "match",
    "mated",
    "mater",
    "mates",
    "matey",
    "maths",
    "matzo",
    "mauls",
    "mauve",
    "maven",
    "maxed",
    "maxes",
    "maybe",
    "mayor",
    "mazes",
    "meals",
    "mealy",
    "means",
    "meant",
    "meany",
    "meats",
    "meaty",
    "medal",
    "media",
    "medic",
    "melon",
    "melts",
    "mends",
    "menus",
    "meows",
    "mercy",
    "merit",
    "metal",
    "meths",
    "metro",
    "miaow",
    "micks",
    "micro",
    "midge",
    "midst",
    "might",
    "mikes",
    "miles",
    "milks",
    "milky",
    "mince",
    "minds",
    "mined",
    "miner",
    "mines",
    "mingy",
    "minks",
    "minor",
    "mints",
    "minty",
    "minus",
    "mired",
    "mires",
    "mirth",
    "miser",
    "misty",
    "miter",
    "mites",
    "mitre",
    "mixed",
    "mixer",
    "mixes",
    "moans",
    "moats",
    "mocha",
    "mocks",
    "modal",
    "model",
    "modes",
    "mogul",
    "moist",
    "molar",
    "molds",
    "moldy",
    "moles",
    "molts",
    "money",
    "monks",
    "month",
    "moped",
    "mopes",
    "moral",
    "mores",
    "morns",
    "morph",
    "mosey",
    "motel",
    "motes",
    "moths",
    "motif",
    "mould",
    "moult",
    "mound",
    "mount",
    "mourn",
    "mouse",
    "mousy",
    "mouth",
    "moved",
    "mover",
    "moves",
    "movie",
    "mowed",
    "mower",
    "moxie",
    "mucks",
    "mucky",
    "mufti",
    "mulch",
    "mules",
    "munch",
    "mural",
    "murky",
    "mused",
    "mushy",
    "music",
    "musky",
    "musty",
    "muted",
    "mutes",
    "muzak",
    "mynah",
    "myths",
    "nacho",
    "nadir",
    "nails",
    "naive",
    "naked",
    "named",
    "names",
    "napes",
    "narcs",
    "narks",
    "narky",
    "nasty",
    "natch",
    "navel",
    "naves",
    "nears",
    "necks",
    "negro",
    "neigh",
    "nerds",
    "nerdy",
    "nervy",
    "newly",
    "newsy",
    "newts",
    "nexus",
    "nicer",
    "niche",
    "nicks",
    "nifty",
    "night",
    "nimby",
    "nixed",
    "nixes",
    "noble",
    "nobly",
    "nodal",
    "nodes",
    "noise",
    "noisy",
    "nomad",
    "norms",
    "north",
    "nosed",
    "nosey",
    "notch",
    "noted",
    "notes",
    "novae",
    "novel",
    "nudes",
    "nudge",
    "nuked",
    "nukes",
    "numbs",
    "nurse",
    "nymph",
    "oaken",
    "oakum",
    "oaths",
    "obeys",
    "obits",
    "ocean",
    "ocher",
    "ochre",
    "ocker",
    "odium",
    "often",
    "ogled",
    "ogles",
    "ogres",
    "oiled",
    "oinks",
    "okays",
    "olden",
    "older",
    "oldie",
    "olive",
    "omega",
    "omens",
    "omits",
    "onset",
    "opals",
    "opens",
    "opera",
    "opine",
    "opium",
    "opted",
    "optic",
    "orals",
    "orbit",
    "organ",
    "osier",
    "other",
    "ought",
    "ounce",
    "outed",
    "outer",
    "outre",
    "ovals",
    "ovary",
    "ovens",
    "overs",
    "overt",
    "owing",
    "owned",
    "owner",
    "oxide",
    "paced",
    "paces",
    "pacey",
    "packs",
    "pacts",
    "padre",
    "paged",
    "pager",
    "pages",
    "pails",
    "pains",
    "paint",
    "pairs",
    "paled",
    "paler",
    "pales",
    "palms",
    "palsy",
    "panel",
    "panes",
    "pangs",
    "panic",
    "pansy",
    "panto",
    "pants",
    "parch",
    "pared",
    "pares",
    "parks",
    "parky",
    "parse",
    "parts",
    "party",
    "paste",
    "pasty",
    "patch",
    "pater",
    "pates",
    "paths",
    "patio",
    "patsy",
    "pause",
    "paved",
    "paves",
    "pawed",
    "pawns",
    "payer",
    "peach",
    "peaks",
    "peaky",
    "peals",
    "pearl",
    "pears",
    "peaty",
    "pecan",
    "pecks",
    "pedal",
    "pelts",
    "penal",
    "penis",
    "peony",
    "perch",
    "peril",
    "perks",
    "perky",
    "perms",
    "pervs",
    "pesky",
    "pesto",
    "petal",
    "phase",
    "phial",
    "phone",
    "phony",
    "piano",
    "picks",
    "picky",
    "piers",
    "piety",
    "pigmy",
    "pikes",
    "pilaf",
    "pilau",
    "piled",
    "piles",
    "pilot",
    "pinch",
    "pined",
    "pines",
    "piney",
    "pings",
    "pinko",
    "pinks",
    "pinky",
    "pints",
    "pious",
    "pique",
    "piste",
    "pitas",
    "pitch",
    "pithy",
    "piton",
    "pivot",
    "pixel",
    "place",
    "plaid",
    "plain",
    "plait",
    "plane",
    "plank",
    "plans",
    "plant",
    "plate",
    "plays",
    "plead",
    "pleas",
    "pleat",
    "plebs",
    "plied",
    "plies",
    "plods",
    "plonk",
    "plots",
    "plows",
    "ploys",
    "pluck",
    "plugs",
    "plumb",
    "plume",
    "plums",
    "plunk",
    "plush",
    "poach",
    "podgy",
    "poems",
    "poets",
    "point",
    "poise",
    "poked",
    "poker",
    "pokes",
    "pokey",
    "polar",
    "poles",
    "polka",
    "polys",
    "ponce",
    "poncy",
    "ponds",
    "pongs",
    "porch",
    "pored",
    "pores",
    "porky",
    "ports",
    "posed",
    "poser",
    "posit",
    "pouch",
    "poufs",
    "pound",
    "pours",
    "pouts",
    "power",
    "prams",
    "prang",
    "prank",
    "prate",
    "prats",
    "prawn",
    "prays",
    "preys",
    "price",
    "prick",
    "pricy",
    "pride",
    "pried",
    "pries",
    "prigs",
    "prime",
    "print",
    "prion",
    "prise",
    "prism",
    "privy",
    "prize",
    "probe",
    "prods",
    "profs",
    "prole",
    "proms",
    "prone",
    "prong",
    "prose",
    "proud",
    "prove",
    "prowl",
    "prows",
    "proxy",
    "prude",
    "prune",
    "psalm",
    "pseud",
    "psych",
    "pubes",
    "pubic",
    "pucks",
    "pudgy",
    "puked",
    "pukes",
    "pulse",
    "pumas",
    "punch",
    "punks",
    "punts",
    "purge",
    "purls",
    "purse",
    "pushy",
    "pylon",
    "pyres",
    "quack",
    "quads",
    "quail",
    "quake",
    "qualm",
    "quark",
    "quart",
    "quash",
    "quays",
    "query",
    "quest",
    "quick",
    "quiet",
    "quilt",
    "quins",
    "quint",
    "quips",
    "quirk",
    "quite",
    "quits",
    "quoit",
    "quota",
    "quote",
    "quoth",
    "rabid",
    "raced",
    "races",
    "racks",
    "radio",
    "radon",
    "rafts",
    "raged",
    "rages",
    "raids",
    "rails",
    "rains",
    "rainy",
    "raise",
    "raked",
    "rakes",
    "ramps",
    "ranch",
    "randy",
    "range",
    "ranis",
    "ranks",
    "rants",
    "raped",
    "rapes",
    "rapid",
    "raspy",
    "rated",
    "rates",
    "ratio",
    "raved",
    "ravel",
    "raven",
    "raves",
    "rayon",
    "razed",
    "razes",
    "reach",
    "react",
    "reads",
    "ready",
    "realm",
    "reams",
    "reaps",
    "rebut",
    "recap",
    "recon",
    "recto",
    "refit",
    "regal",
    "rehab",
    "reign",
    "reins",
    "rejig",
    "relax",
    "relay",
    "relic",
    "remit",
    "remix",
    "renal",
    "rends",
    "rents",
    "repay",
    "reply",
    "resat",
    "resin",
    "resit",
    "retch",
    "rhino",
    "rhyme",
    "ricks",
    "rides",
    "ridge",
    "rifle",
    "rifts",
    "right",
    "riled",
    "riles",
    "rinds",
    "rings",
    "rinks",
    "rinse",
    "riots",
    "ripen",
    "risen",
    "risky",
    "rites",
    "ritzy",
    "rival",
    "riven",
    "rivet",
    "roach",
    "roads",
    "roams",
    "roans",
    "roast",
    "robed",
    "robes",
    "robin",
    "rocks",
    "rocky",
    "rogue",
    "roils",
    "roles",
    "roman",
    "romps",
    "roped",
    "ropes",
    "ropey",
    "rosin",
    "rotas",
    "rouge",
    "rough",
    "round",
    "rouse",
    "roust",
    "route",
    "routs",
    "roved",
    "roves",
    "rowan",
    "rowdy",
    "rowed",
    "royal",
    "rubes",
    "ruble",
    "rucks",
    "rugby",
    "ruing",
    "ruins",
    "ruled",
    "rules",
    "rumba",
    "rumps",
    "runes",
    "rungs",
    "runic",
    "runts",
    "rusty",
    "saber",
    "sable",
    "sabre",
    "sadhu",
    "sadly",
    "safer",
    "sahib",
    "saint",
    "saith",
    "salon",
    "salty",
    "salve",
    "salvo",
    "samey",
    "sandy",
    "saner",
    "sarge",
    "sarky",
    "sated",
    "satin",
    "satyr",
    "sauce",
    "saucy",
    "saute",
    "saved",
    "saver",
    "savor",
    "savoy",
    "sawed",
    "scald",
    "scale",
    "scalp",
    "scaly",
    "scamp",
    "scant",
    "scare",
    "scarf",
    "scarp",
    "scary",
    "scent",
    "schwa",
    "scion",
    "scold",
    "scone",
    "scope",
    "score",
    "scorn",
    "scour",
    "scout",
    "scowl",
    "scram",
    "scrap",
    "screw",
    "scrip",
    "scrub",
    "scrum",
    "seamy",
    "sebum",
    "sedan",
    "sepal",
    "sepia",
    "serif",
    "serum",
    "shack",
    "shade",
    "shady",
    "shaft",
    "shake",
    "shaky",
    "shale",
    "shalt",
    "shame",
    "shank",
    "shape",
    "shard",
    "share",
    "shark",
    "sharp",
    "shave",
    "shawl",
    "sheaf",
    "shear",
    "sheik",
    "shelf",
    "sherd",
    "shied",
    "shift",
    "shine",
    "shiny",
    "shire",
    "shirk",
    "shirt",
    "shite",
    "shoal",
    "shock",
    "shoed",
    "shone",
    "shore",
    "shorn",
    "short",
    "shout",
    "shove",
    "shown",
    "showy",
    "shred",
    "shrew",
    "shrub",
    "shrug",
    "shuck",
    "shunt",
    "shyer",
    "sibyl",
    "sicko",
    "sidle",
    "sight",
    "silky",
    "since",
    "sinew",
    "singe",
    "sired",
    "siren",
    "sitar",
    "sited",
    "sixth",
    "sixty",
    "sized",
    "skate",
    "skein",
    "skied",
    "skier",
    "skimp",
    "skint",
    "skirt",
    "skive",
    "slack",
    "slain",
    "slake",
    "slang",
    "slant",
    "slate",
    "slave",
    "slept",
    "slice",
    "slick",
    "slide",
    "slime",
    "slimy",
    "sling",
    "slink",
    "slope",
    "sloth",
    "slump",
    "slung",
    "slunk",
    "slurp",
    "slyer",
    "smack",
    "smart",
    "smear",
    "smelt",
    "smile",
    "smirk",
    "smite",
    "smith",
    "smock",
    "smoke",
    "smoky",
    "smote",
    "snack",
    "snafu",
    "snail",
    "snake",
    "snaky",
    "snare",
    "snarl",
    "sneak",
    "snick",
    "snide",
    "snipe",
    "snore",
    "snort",
    "snout",
    "snowy",
    "snuck",
    "soapy",
    "sober",
    "softy",
    "solar",
    "soled",
    "solid",
    "solve",
    "sonar",
    "sonic",
    "sound",
    "soupy",
    "south",
    "sowed",
    "sower",
    "space",
    "spade",
    "spake",
    "spank",
    "spare",
    "spark",
    "spate",
    "spawn",
    "speak",
    "spear",
    "speck",
    "spelt",
    "spend",
    "spent",
    "sperm",
    "spice",
    "spicy",
    "spied",
    "spiel",
    "spike",
    "spiky",
    "spilt",
    "spine",
    "spiny",
    "spire",
    "spite",
    "splat",
    "splay",
    "split",
    "spoil",
    "spoke",
    "spore",
    "sport",
    "spout",
    "sprat",
    "spray",
    "sprig",
    "sprog",
    "spume",
    "spunk",
    "spurn",
    "spurt",
    "squab",
    "squad",
    "squat",
    "squaw",
    "squib",
    "squid",
    "stack",
    "stage",
    "stagy",
    "staid",
    "stain",
    "stair",
    "stake",
    "stale",
    "stalk",
    "stamp",
    "stand",
    "stank",
    "stare",
    "stark",
    "stave",
    "steak",
    "steal",
    "steam",
    "stein",
    "steno",
    "stern",
    "stick",
    "stile",
    "sting",
    "stink",
    "stock",
    "stoic",
    "stoke",
    "stole",
    "stomp",
    "stone",
    "stony",
    "store",
    "stork",
    "storm",
    "story",
    "stoup",
    "stove",
    "strap",
    "straw",
    "stray",
    "strep",
    "strew",
    "strip",
    "strop",
    "strum",
    "stuck",
    "study",
    "stump",
    "stung",
    "stunk",
    "style",
    "suave",
    "sugar",
    "suing",
    "suite",
    "sulky",
    "super",
    "surge",
    "surly",
    "swain",
    "swami",
    "swamp",
    "swank",
    "sward",
    "swarm",
    "swath",
    "swear",
    "sweat",
    "swept",
    "swift",
    "swine",
    "swing",
    "swipe",
    "swirl",
    "sword",
    "swore",
    "sworn",
    "swung",
    "synch",
    "synod",
    "syrup",
    "table",
    "tacks",
    "tacky",
    "tacos",
    "tails",
    "taken",
    "taker",
    "takes",
    "tales",
    "talks",
    "talon",
    "tamed",
    "tamer",
    "tames",
    "tamps",
    "tango",
    "tangs",
    "tangy",
    "tanks",
    "taped",
    "taper",
    "tapes",
    "tapir",
    "tardy",
    "tarns",
    "taros",
    "tarps",
    "taupe",
    "tawny",
    "taxed",
    "taxes",
    "taxis",
    "teach",
    "teals",
    "teams",
    "tears",
    "techs",
    "tempi",
    "tempo",
    "temps",
    "tench",
    "tends",
    "tenor",
    "tepid",
    "terms",
    "terns",
    "thank",
    "thaws",
    "their",
    "therm",
    "thick",
    "thief",
    "thine",
    "thing",
    "think",
    "thins",
    "third",
    "thong",
    "thorn",
    "those",
    "threw",
    "throb",
    "throw",
    "thrum",
    "thuds",
    "thugs",
    "thumb",
    "thump",
    "thyme",
    "ticks",
    "tidal",
    "tides",
    "tiers",
    "tiger",
    "tikes",
    "tilde",
    "tiled",
    "tiler",
    "tiles",
    "timed",
    "timer",
    "times",
    "tines",
    "tinge",
    "tings",
    "tipsy",
    "tired",
    "tires",
    "toads",
    "toady",
    "today",
    "togas",
    "toils",
    "token",
    "tombs",
    "tomes",
    "tonal",
    "toned",
    "toner",
    "tones",
    "tongs",
    "tonic",
    "topaz",
    "topic",
    "topis",
    "torch",
    "touch",
    "tough",
    "tours",
    "towed",
    "towel",
    "tower",
    "towns",
    "toxic",
    "toxin",
    "toyed",
    "trace",
    "track",
    "trade",
    "trail",
    "train",
    "tramp",
    "trams",
    "traps",
    "trash",
    "trawl",
    "trays",
    "tread",
    "treks",
    "trend",
    "trews",
    "triad",
    "trial",
    "tribe",
    "trick",
    "tried",
    "tries",
    "trike",
    "trims",
    "trios",
    "tripe",
    "trips",
    "tromp",
    "trope",
    "truce",
    "truck",
    "trugs",
    "truly",
    "trump",
    "trunk",
    "tubas",
    "tuber",
    "tubes",
    "tucks",
    "tulip",
    "tumor",
    "tunas",
    "tuned",
    "tuner",
    "tunes",
    "tunic",
    "turbo",
    "turds",
    "turfs",
    "turns",
    "turps",
    "tuxes",
    "twang",
    "tweak",
    "twerp",
    "twice",
    "twigs",
    "twine",
    "twins",
    "twirl",
    "tying",
    "tykes",
    "typed",
    "types",
    "typos",
    "tyres",
    "tyros",
    "tzars",
    "ulcer",
    "umber",
    "uncle",
    "under",
    "unfit",
    "unify",
    "unite",
    "units",
    "unity",
    "unlit",
    "unmet",
    "untie",
    "until",
    "unzip",
    "upend",
    "upset",
    "urban",
    "urged",
    "urges",
    "urine",
    "usage",
    "usher",
    "using",
    "uteri",
    "vague",
    "vales",
    "valet",
    "valid",
    "valor",
    "value",
    "vamps",
    "vanes",
    "vapid",
    "vapor",
    "vault",
    "vegan",
    "veils",
    "veins",
    "velar",
    "veldt",
    "venal",
    "venom",
    "vents",
    "verbs",
    "verso",
    "vetch",
    "vials",
    "vibes",
    "vicar",
    "vices",
    "video",
    "views",
    "vigor",
    "viler",
    "vines",
    "vinyl",
    "viola",
    "viols",
    "viper",
    "viral",
    "virus",
    "visor",
    "vista",
    "vital",
    "vixen",
    "vocab",
    "vocal",
    "vodka",
    "vogue",
    "voice",
    "voids",
    "voila",
    "voile",
    "voles",
    "volts",
    "vomit",
    "voted",
    "voter",
    "votes",
    "vouch",
    "vowed",
    "vowel",
    "vying",
    "wacko",
    "wacky",
    "wader",
    "wades",
    "wadge",
    "wadis",
    "wafer",
    "wafts",
    "waged",
    "wager",
    "wages",
    "wagon",
    "waifs",
    "wails",
    "waist",
    "waits",
    "waive",
    "waked",
    "waken",
    "wakes",
    "walks",
    "waltz",
    "wands",
    "waned",
    "wanes",
    "wanks",
    "wanly",
    "wants",
    "wards",
    "wares",
    "warms",
    "warns",
    "warps",
    "warts",
    "warty",
    "waste",
    "watch",
    "water",
    "waved",
    "waver",
    "waves",
    "waxed",
    "waxen",
    "waxes",
    "weals",
    "weans",
    "wears",
    "weary",
    "weigh",
    "weird",
    "weirs",
    "welch",
    "welds",
    "welsh",
    "welts",
    "wench",
    "wends",
    "wetly",
    "whack",
    "whale",
    "whams",
    "wharf",
    "wheat",
    "whelk",
    "whelp",
    "whets",
    "while",
    "whims",
    "whine",
    "whips",
    "whirl",
    "whirs",
    "whisk",
    "whist",
    "white",
    "whole",
    "whops",
    "whore",
    "whorl",
    "whose",
    "whups",
    "wicks",
    "widen",
    "wider",
    "width",
    "wield",
    "wiles",
    "wilts",
    "wimps",
    "wimpy",
    "wince",
    "winch",
    "winds",
    "windy",
    "wines",
    "wings",
    "winks",
    "winos",
    "wiped",
    "wiper",
    "wipes",
    "wired",
    "wires",
    "wised",
    "wiser",
    "wispy",
    "witch",
    "wives",
    "wodge",
    "woken",
    "wolds",
    "wolfs",
    "woman",
    "wombs",
    "women",
    "wonks",
    "wonky",
    "words",
    "wordy",
    "works",
    "world",
    "worms",
    "wormy",
    "worse",
    "worst",
    "worth",
    "would",
    "wound",
    "woven",
    "wrack",
    "wraps",
    "wrath",
    "wreak",
    "wreck",
    "wrens",
    "wrest",
    "wring",
    "wrist",
    "write",
    "writs",
    "wrong",
    "wrote",
    "wrung",
    "yacht",
    "yacks",
    "yanks",
    "yards",
    "yarns",
    "yawed",
    "yawns",
    "yearn",
    "years",
    "yeast",
    "yelps",
    "yetis",
    "yield",
    "yikes",
    "yodel",
    "yogic",  "yogis",    "yoked",   "yokel",    "yokes",
    "yolks",    "yonks",
    "young",    "yours",    "youth",
    "yowls",    "zebra",    "zeros",    "zilch",    "zines",    "zings",    "zingy",    "zonal",    "zoned",    "zones",
  ];

export default function Keyboard(){
 const [word, setWord] = useState("");
 const [word1, setWord1] = useState("");
 const [word2, setWord2] = useState("");
 const [word3, setWord3] = useState("");
 const [word4, setWord4] = useState("");


 const [result, setResult] = useState(false);
 const [result1, setResult1] = useState(false);
 const [result2, setResult2] = useState(false);
 const [result3, setResult3] = useState(false);
 const [result4, setResult4] = useState(false);

 const[randomWord, setRandomWord] = useState('');


const [parallel1,  setParallel1] =useState(false);
const [parallel2, setParallel2] =useState(false);
const [parallel3,  setParallel3] =useState(false);
const [parallel4,  setParallel4] =useState(false);
const [parallel5,  setParallel5] =useState(false);

const [parallel6,  setParallel6] =useState(false);
const [parallel7, setParallel7] =useState(false);
const [parallel8,  setParallel8] =useState(false);
const [parallel9,  setParallel9] =useState(false);
const [parallel10,  setParallel10] =useState(false);


const [parallel11,  setParallel11] =useState(false);
const [parallel12, setParallel12] =useState(false);
const [parallel13,  setParallel13] =useState(false);
const [parallel14,  setParallel14] =useState(false);
const [parallel15,  setParallel15] =useState(false);

const [parallel16,  setParallel16] =useState(false);
const [parallel17, setParallel17] =useState(false);
const [parallel18,  setParallel18] =useState(false);
const [parallel19,  setParallel19] =useState(false);
const [parallel20,  setParallel20] =useState(false);

const [parallel21,  setParallel21] =useState(false);
const [parallel22, setParallel22] =useState(false);
const [parallel23,  setParallel23] =useState(false);
const [parallel24,  setParallel24] =useState(false);
const [parallel25,  setParallel25] =useState(false);

const [unParallel1,  setUnParallel1] =useState(false);
const [unParallel2, setUnParallel2] =useState(false);
const [unParallel3,  setUnParallel3] =useState(false);
const [unParallel4,  setUnParallel4] =useState(false);
const [unParallel5,  setUnParallel5] =useState(false);

const [unParallel6,  setUnParallel6] =useState(false);
const [unParallel7, setUnParallel7] =useState(false);
const [unParallel8,  setUnParallel8] =useState(false);
const [unParallel9,  setUnParallel9] =useState(false);
const [unParallel10,  setUnParallel10] =useState(false);


const [unParallel11,  setUnParallel11] =useState(false);
const [unParallel12, setUnParallel12] =useState(false);
const [unParallel13,  setUnParallel13] =useState(false);
const [unParallel14,  setUnParallel14] =useState(false);
const [unParallel15,  setUnParallel15] =useState(false);

const [unParallel16,  setUnParallel16] =useState(false);
const [unParallel17, setUnParallel17] =useState(false);
const [unParallel18,  setUnParallel18] =useState(false);
const [unParallel19,  setUnParallel19] =useState(false);
const [unParallel20,  setUnParallel20] =useState(false);

const [unParallel21,  setUnParallel21] =useState(false);
const [unParallel22, setUnParallel22] =useState(false);
const [unParallel23,  setUnParallel23] =useState(false);
const [unParallel24,  setUnParallel24] =useState(false);
const [unParallel25,  setUnParallel25] =useState(false);

const [isAvail1, setIsAvail1] = useState(false);
const [isAvail2, setIsAvail2] = useState(false);
const [isAvail3, setIsAvail3] = useState(false);
const [isAvail4, setIsAvail4] = useState(false);
const [isAvail5, setIsAvail5] = useState(false);

const [keyA, setKeyA] = useState(false);
const [keyB, setKeyB] = useState(false);
const [keyC, setKeyC] = useState(false);
const [keyD, setKeyD] = useState(false);
const [keyE, setKeyE] = useState(false);
const [keyF, setKeyF] = useState(false);
const [keyG, setKeyG] = useState(false);
const [keyH, setKeyH] = useState(false);
const [keyI, setKeyI] = useState(false);
const [keyJ, setKeyJ] = useState(false);
const [keyK, setKeyK] = useState(false);
const [keyL, setKeyL] = useState(false);
const [keyM, setKeyM] = useState(false);
const [keyN, setKeyN] = useState(false);
const [keyO, setKeyO] = useState(false);
const [keyP, setKeyP] = useState(false);
const [keyQ, setKeyQ] = useState(false);
const [keyR, setKeyR] = useState(false);
const [keyS, setKeyS] = useState(false);
const [keyT, setKeyT] = useState(false);
const [keyU, setKeyU] = useState(false);
const [keyV, setKeyV] = useState(false);
const [keyW, setKeyW] = useState(false);
const [keyX, setKeyX] = useState(false);
const [keyY, setKeyY] = useState(false);
const [keyZ, setKeyZ] = useState(false);

const [keyA1, setKeyA1] = useState(false);
const [keyB1, setKeyB1] = useState(false);
const [keyC1, setKeyC1] = useState(false);
const [keyD1, setKeyD1] = useState(false);
const [keyE1, setKeyE1] = useState(false);
const [keyF1, setKeyF1] = useState(false);
const [keyG1, setKeyG1] = useState(false);
const [keyH1, setKeyH1] = useState(false);
const [keyI1, setKeyI1] = useState(false);
const [keyJ1, setKeyJ1] = useState(false);
const [keyK1, setKeyK1] = useState(false);
const [keyL1, setKeyL1] = useState(false);
const [keyM1, setKeyM1] = useState(false);
const [keyN1, setKeyN1] = useState(false);
const [keyO1, setKeyO1] = useState(false);
const [keyP1, setKeyP1] = useState(false);
const [keyQ1, setKeyQ1] = useState(false);
const [keyR1, setKeyR1] = useState(false);
const [keyS1, setKeyS1] = useState(false);
const [keyT1, setKeyT1] = useState(false);
const [keyU1, setKeyU1] = useState(false);
const [keyV1, setKeyV1] = useState(false);
const [keyW1, setKeyW1] = useState(false);
const [keyX1, setKeyX1] = useState(false);
const [keyY1, setKeyY1] = useState(false);
const [keyZ1, setKeyZ1] = useState(false);

const [keyA2, setKeyA2] = useState(false);
const [keyB2, setKeyB2] = useState(false);
const [keyC2, setKeyC2] = useState(false);
const [keyD2, setKeyD2] = useState(false);
const [keyE2, setKeyE2] = useState(false);
const [keyF2, setKeyF2] = useState(false);
const [keyG2, setKeyG2] = useState(false);
const [keyH2, setKeyH2] = useState(false);
const [keyI2, setKeyI2] = useState(false);
const [keyJ2, setKeyJ2] = useState(false);
const [keyK2, setKeyK2] = useState(false);
const [keyL2, setKeyL2] = useState(false);
const [keyM2, setKeyM2] = useState(false);
const [keyN2, setKeyN2] = useState(false);
const [keyO2, setKeyO2] = useState(false);
const [keyP2, setKeyP2] = useState(false);
const [keyQ2, setKeyQ2] = useState(false);
const [keyR2, setKeyR2] = useState(false);
const [keyS2, setKeyS2] = useState(false);
const [keyT2, setKeyT2] = useState(false);
const [keyU2, setKeyU2] = useState(false);
const [keyV2, setKeyV2] = useState(false);
const [keyW2, setKeyW2] = useState(false);
const [keyX2, setKeyX2] = useState(false);
const [keyY2, setKeyY2] = useState(false);
const [keyZ2, setKeyZ2] = useState(false);

const [msg, setMsg] = useState('');

 const getRandomNumber=()=>{
    const randomIndex = Math.floor(Math.random()*words.length);
    return words[randomIndex];
}
useEffect(()=>{
    const rand = getRandomNumber();
    setRandomWord(rand);
}, []) 
const addKey=(letter)=>{
    if(word.length != 5){
    setWord(word+letter);
    }
}
const addKey1=(letter)=>{
    if(word1.length != 5){
    setWord1(word1+letter);
}
}
const addKey2=(letter)=>{
    if(word2.length != 5){
    setWord2(word2+letter);
}
}
const addKey3=(letter)=>{
    if(word3.length != 5){
    setWord3(word3+letter);
}
}
const addKey4=(letter)=>{
    if(word4.length != 5){
    setWord4(word4+letter);
}
}


const lowerWord = word.toLowerCase();
const lowerWord1 = word1.toLowerCase();
const lowerWord2 = word2.toLowerCase();
const lowerWord3 = word3.toLowerCase();
const lowerWord4 = word4.toLowerCase();


const wordArray = word.split("");
const wordArray1 = word1.split("");
const wordArray2 = word2.split("");
const wordArray3 = word3.split("");
const wordArray4 = word4.split("");

const wordarr = wordArray.map(letter => letter.toLowerCase()).join("");
const wordarr1 = wordArray1.map(letter => letter.toLowerCase()).join("");
const wordarr2 = wordArray2.map(letter => letter.toLowerCase()).join("");
const wordarr3 = wordArray3.map(letter => letter.toLowerCase()).join("");
const wordarr4 = wordArray4.map(letter => letter.toLowerCase()).join("");


const handleOnPress=(LetterKey)=>{
    if(!result){
    addKey(LetterKey);
 }
 if(result){
    addKey1(LetterKey);
 }
 if(result1){
    addKey2(LetterKey);
 }
 if(result2){
addKey3(LetterKey);
 }
 if(result3){
addKey4(LetterKey);
 }
}


const handleSearch =()=>{
    if (words.includes(lowerWord)) {
    console.log('found in dictionary...');
    setResult(true);   
    setIsAvail1(true);
    } else {
        console.log('not found');
        setResult(false);
        setIsAvail1(false);
    }  
    if(result){
        if(words.includes(lowerWord1)){
            console.log('2nd found');
        setResult1(true);
        setIsAvail2(true);
        }
    if(result1){
    if(words.includes(lowerWord2)){
        console.log('3rd found');
        setResult2(true);
        setIsAvail3(true);
        }
    }

if(result2){
    if(words.includes(lowerWord3)){
        console.log('4th found');
        setResult3(true);
        setIsAvail4(true);
        }
}
if(result3){
    if(words.includes(lowerWord4)){
        console.log('5th found');
        setResult4(true);
        setIsAvail5(true);
        }
    }
}
else{console.log('not found');}
         
}
const handleBackspace = () => {
    if (result3) {
      setWord4(word4.slice(0, -1));
    return;}else if (result2) {
      setWord3(word3.slice(0, -1));
    return;}else if (result1) {
      setWord2(word2.slice(0, -1));
    return;}else if (result) {
      setWord1(word1.slice(0, -1));
    return;}else if(!result){
      setWord(word.slice(0, -1));
    return;}
  }; 

  const randomArray = randomWord.split("");

  const handleKeyClr=(n)=>{
    if(wordarr[n]==='a'){
        setKeyA(true);
    }
    if(wordarr[n]==='b'){
        setKeyB(true);
    }
    if(wordarr[n]==='c'){
        setKeyC(true);
    }
    if(wordarr[n]==='d'){
        setKeyD(true);
    }
    if(wordarr[n]==='e'){
        setKeyE(true);
    }
    if(wordarr[n]==='f'){
        setKeyF(true);
    }
    if(wordarr[n]==='g'){
        setKeyG(true);
    }
    if(wordarr[n]==='h'){
        setKeyH(true);
    }
    if(wordarr[n]==='i'){
        setKeyI(true);
    }
    if(wordarr[n]==='j'){
        setKeyJ(true);
    }
    if(wordarr[n]==='k'){
        setKeyK(true);
    }
    if(wordarr[n]==='l'){
        setKeyL(true);
    }
    if(wordarr[n]==='m'){
        setKeyM(true);
    }
    if(wordarr[n]==='n'){
        setKeyN(true);
    }
    if(wordarr[n]==='o'){
        setKeyO(true);
    }
    if(wordarr[n]==='p'){
        setKeyP(true);
    }
    if(wordarr[n]==='q'){
        setKeyQ(true);
    }
    if(wordarr[n]==='r'){
        setKeyR(true);
    }
    if(wordarr[n]==='s'){
        setKeyS(true);
    }
    if(wordarr[n]==='t'){
        setKeyT(true);
    }
    if(wordarr[n]==='u'){
        setKeyU(true);
    }
    if(wordarr[n]==='v'){
        setKeyV(true);
    }
    if(wordarr[n]==='w'){
        setKeyW(true);
    }
    if(wordarr[n]==='x'){
        setKeyX(true);
    }
    if(wordarr[n]==='y'){
        setKeyY(true);
    }
    if(wordarr[n]==='z'){
        setKeyZ(true);
    }
  }

  const handleKeyClr1=(n)=>{
    if(wordarr1[n]==='a'){
        setKeyA(true);
    }
    if(wordarr1[n]==='b'){
        setKeyB(true);
    }
    if(wordarr1[n]==='c'){
        setKeyC(true);
    }
    if(wordarr1[n]==='d'){
        setKeyD(true);
    }
    if(wordarr1[n]==='e'){
        setKeyE(true);
    }
    if(wordarr1[n]==='f'){
        setKeyF(true);
    }
    if(wordarr1[n]==='g'){
        setKeyG(true);
    }
    if(wordarr1[n]==='h'){
        setKeyH(true);
    }
    if(wordarr1[n]==='i'){
        setKeyI(true);
    }
    if(wordarr1[n]==='j'){
        setKeyJ(true);
    }
    if(wordarr1[n]==='k'){
        setKeyK(true);
    }
    if(wordarr1[n]==='l'){
        setKeyL(true);
    }
    if(wordarr1[n]==='m'){
        setKeyM(true);
    }
    if(wordarr1[n]==='n'){
        setKeyN(true);
    }
    if(wordarr1[n]==='o'){
        setKeyO(true);
    }
    if(wordarr1[n]==='p'){
        setKeyP(true);
    }
    if(wordarr1[n]==='q'){
        setKeyQ(true);
    }
    if(wordarr1[n]==='r'){
        setKeyR(true);
    }
    if(wordarr1[n]==='s'){
        setKeyS(true);
    }
    if(wordarr1[n]==='t'){
        setKeyT(true);
    }
    if(wordarr1[n]==='u'){
        setKeyU(true);
    }
    if(wordarr1[n]==='v'){
        setKeyV(true);
    }
    if(wordarr1[n]==='w'){
        setKeyW(true);
    }
    if(wordarr1[n]==='x'){
        setKeyX(true);
    }
    if(wordarr1[n]==='y'){
        setKeyY(true);
    }
    if(wordarr1[n]==='z'){
        setKeyZ(true);
    }
  }

const handleKeyClr2=(n)=>{
    if(wordarr2[n]==='a'){
        setKeyA(true);
    }
    if(wordarr2[n]==='b'){
        setKeyB(true);
    }
    if(wordarr2[n]==='c'){
        setKeyC(true);
    }
    if(wordarr2[n]==='d'){
        setKeyD(true);
    }
    if(wordarr2[n]==='e'){
        setKeyE(true);
    }
    if(wordarr2[n]==='f'){
        setKeyF(true);
    }
    if(wordarr2[n]==='g'){
        setKeyG(true);
    }
    if(wordarr2[n]==='h'){
        setKeyH(true);
    }
    if(wordarr2[n]==='i'){
        setKeyI(true);
    }
    if(wordarr2[n]==='j'){
        setKeyJ(true);
    }
    if(wordarr2[n]==='k'){
        setKeyK(true);
    }
    if(wordarr2[n]==='l'){
        setKeyL(true);
    }
    if(wordarr2[n]==='m'){
        setKeyM(true);
    }
    if(wordarr2[n]==='n'){
        setKeyN(true);
    }
    if(wordarr2[n]==='o'){
        setKeyO(true);
    }
    if(wordarr2[n]==='p'){
        setKeyP(true);
    }
    if(wordarr2[n]==='q'){
        setKeyQ(true);
    }
    if(wordarr2[n]==='r'){
        setKeyR(true);
    }
    if(wordarr2[n]==='s'){
        setKeyS(true);
    }
    if(wordarr2[n]==='t'){
        setKeyT(true);
    }
    if(wordarr2[n]==='u'){
        setKeyU(true);
    }
    if(wordarr2[n]==='v'){
        setKeyV(true);
    }
    if(wordarr2[n]==='w'){
        setKeyW(true);
    }
    if(wordarr2[n]==='x'){
        setKeyX(true);
    }
    if(wordarr2[n]==='y'){
        setKeyY(true);
    }
    if(wordarr2[n]==='z'){
        setKeyZ(true);
    }
  }

  const handleKeyClr3=(n)=>{
    if(wordarr3[n]==='a'){
        setKeyA(true);
    }
    if(wordarr3[n]==='b'){
        setKeyB(true);
    }
    if(wordarr3[n]==='c'){
        setKeyC(true);
    }
    if(wordarr3[n]==='d'){
        setKeyD(true);
    }
    if(wordarr3[n]==='e'){
        setKeyE(true);
    }
    if(wordarr3[n]==='f'){
        setKeyF(true);
    }
    if(wordarr3[n]==='g'){
        setKeyG(true);
    }
    if(wordarr3[n]==='h'){
        setKeyH(true);
    }
    if(wordarr3[n]==='i'){
        setKeyI(true);
    }
    if(wordarr3[n]==='j'){
        setKeyJ(true);
    }
    if(wordarr3[n]==='k'){
        setKeyK(true);
    }
    if(wordarr3[n]==='l'){
        setKeyL(true);
    }
    if(wordarr3[n]==='m'){
        setKeyM(true);
    }
    if(wordarr3[n]==='n'){
        setKeyN(true);
    }
    if(wordarr3[n]==='o'){
        setKeyO(true);
    }
    if(wordarr3[n]==='p'){
        setKeyP(true);
    }
    if(wordarr3[n]==='q'){
        setKeyQ(true);
    }
    if(wordarr3[n]==='r'){
        setKeyR(true);
    }
    if(wordarr3[n]==='s'){
        setKeyS(true);
    }
    if(wordarr3[n]==='t'){
        setKeyT(true);
    }
    if(wordarr3[n]==='u'){
        setKeyU(true);
    }
    if(wordarr3[n]==='v'){
        setKeyV(true);
    }
    if(wordarr3[n]==='w'){
        setKeyW(true);
    }
    if(wordarr3[n]==='x'){
        setKeyX(true);
    }
    if(wordarr3[n]==='y'){
        setKeyY(true);
    }
    if(wordarr3[n]==='z'){
        setKeyZ(true);
    }
  }

  const handleKeyClr4=(n)=>{
    if(wordarr4[n]==='a'){
        setKeyA(true);
    }
    if(wordarr4[n]==='b'){
        setKeyB(true);
    }
    if(wordarr4[n]==='c'){
        setKeyC(true);
    }
    if(wordarr4[n]==='d'){
        setKeyD(true);
    }
    if(wordarr4[n]==='e'){
        setKeyE(true);
    }
    if(wordarr4[n]==='f'){
        setKeyF(true);
    }
    if(wordarr4[n]==='g'){
        setKeyG(true);
    }
    if(wordarr4[n]==='h'){
        setKeyH(true);
    }
    if(wordarr4[n]==='i'){
        setKeyI(true);
    }
    if(wordarr4[n]==='j'){
        setKeyJ(true);
    }
    if(wordarr4[n]==='k'){
        setKeyK(true);
    }
    if(wordarr4[n]==='l'){
        setKeyL(true);
    }
    if(wordarr4[n]==='m'){
        setKeyM(true);
    }
    if(wordarr4[n]==='n'){
        setKeyN(true);
    }
    if(wordarr4[n]==='o'){
        setKeyO(true);
    }
    if(wordarr4[n]==='p'){
        setKeyP(true);
    }
    if(wordarr4[n]==='q'){
        setKeyQ(true);
    }
    if(wordarr4[n]==='r'){
        setKeyR(true);
    }
    if(wordarr4[n]==='s'){
        setKeyS(true);
    }
    if(wordarr4[n]==='t'){
        setKeyT(true);
    }
    if(wordarr4[n]==='u'){
        setKeyU(true);
    }
    if(wordarr4[n]==='v'){
        setKeyV(true);
    }
    if(wordarr4[n]==='w'){
        setKeyW(true);
    }
    if(wordarr4[n]==='x'){
        setKeyX(true);
    }
    if(wordarr4[n]==='y'){
        setKeyY(true);
    }
    if(wordarr4[n]==='z'){
        setKeyZ(true);
    }
  }

  const handleYellowKeyClr=(n)=>{
    if(wordarr[n]==='a'){
        setKeyA1(true);
    }
    if(wordarr[n]==='b'){
        setKeyB1(true);
    }
    if(wordarr[n]==='c'){
        setKeyC1(true);
    }
    if(wordarr[n]==='d'){
        setKeyD1(true);
    }
    if(wordarr[n]==='e'){
        setKeyE1(true);
    }
    if(wordarr[n]==='f'){
        setKeyF1(true);
    }
    if(wordarr[n]==='g'){
        setKeyG1(true);
    }
    if(wordarr[n]==='h'){
        setKeyH1(true);
    }
    if(wordarr[n]==='i'){
        setKeyI1(true);
    }
    if(wordarr[n]==='j'){
        setKeyJ1(true);
    }
    if(wordarr[n]==='k'){
        setKeyK1(true);
    }
    if(wordarr[n]==='l'){
        setKeyL1(true);
    }
    if(wordarr[n]==='m'){
        setKeyM1(true);
    }
    if(wordarr[n]==='n'){
        setKeyN1(true);
    }
    if(wordarr[n]==='o'){
        setKeyO1(true);
    }
    if(wordarr[n]==='p'){
        setKeyP1(true);
    }
    if(wordarr[n]==='q'){
        setKeyQ1(true);
    }
    if(wordarr[n]==='r'){
        setKeyR1(true);
    }
    if(wordarr[n]==='s'){
        setKeyS1(true);
    }
    if(wordarr[n]==='t'){
        setKeyT1(true);
    }
    if(wordarr[n]==='u'){
        setKeyU1(true);
    }
    if(wordarr[n]==='v'){
        setKeyV1(true);
    }
    if(wordarr[n]==='w'){
        setKeyW1(true);
    }
    if(wordarr[n]==='x'){
        setKeyX1(true);
    }
    if(wordarr[n]==='y'){
        setKeyY1(true);
    }
    if(wordarr[n]==='z'){
        setKeyZ1(true);
    }
  }

  const handleYellowKeyClr1=(n)=>{
    if(wordarr1[n]==='a'){
        setKeyA1(true);
    }
    if(wordarr1[n]==='b'){
        setKeyB1(true);
    }
    if(wordarr1[n]==='c'){
        setKeyC1(true);
    }
    if(wordarr1[n]==='d'){
        setKeyD1(true);
    }
    if(wordarr1[n]==='e'){
        setKeyE1(true);
    }
    if(wordarr1[n]==='f'){
        setKeyF1(true);
    }
    if(wordarr1[n]==='g'){
        setKeyG1(true);
    }
    if(wordarr1[n]==='h'){
        setKeyH1(true);
    }
    if(wordarr1[n]==='i'){
        setKeyI1(true);
    }
    if(wordarr1[n]==='j'){
        setKeyJ1(true);
    }
    if(wordarr1[n]==='k'){
        setKeyK1(true);
    }
    if(wordarr1[n]==='l'){
        setKeyL1(true);
    }
    if(wordarr1[n]==='m'){
        setKeyM1(true);
    }
    if(wordarr1[n]==='n'){
        setKeyN1(true);
    }
    if(wordarr1[n]==='o'){
        setKeyO1(true);
    }
    if(wordarr1[n]==='p'){
        setKeyP1(true);
    }
    if(wordarr1[n]==='q'){
        setKeyQ1(true);
    }
    if(wordarr1[n]==='r'){
        setKeyR1(true);
    }
    if(wordarr1[n]==='s'){
        setKeyS1(true);
    }
    if(wordarr1[n]==='t'){
        setKeyT1(true);
    }
    if(wordarr1[n]==='u'){
        setKeyU1(true);
    }
    if(wordarr1[n]==='v'){
        setKeyV1(true);
    }
    if(wordarr1[n]==='w'){
        setKeyW1(true);
    }
    if(wordarr1[n]==='x'){
        setKeyX1(true);
    }
    if(wordarr1[n]==='y'){
        setKeyY1(true);
    }
    if(wordarr1[n]==='z'){
        setKeyZ1(true);
    }
  }

const handleYellowKeyClr2=(n)=>{
    if(wordarr2[n]==='a'){
        setKeyA1(true);
    }
    if(wordarr2[n]==='b'){
        setKeyB1(true);
    }
    if(wordarr2[n]==='c'){
        setKeyC1(true);
    }
    if(wordarr2[n]==='d'){
        setKeyD1(true);
    }
    if(wordarr2[n]==='e'){
        setKeyE1(true);
    }
    if(wordarr2[n]==='f'){
        setKeyF1(true);
    }
    if(wordarr2[n]==='g'){
        setKeyG1(true);
    }
    if(wordarr2[n]==='h'){
        setKeyH1(true);
    }
    if(wordarr2[n]==='i'){
        setKeyI1(true);
    }
    if(wordarr2[n]==='j'){
        setKeyJ1(true);
    }
    if(wordarr2[n]==='k'){
        setKeyK1(true);
    }
    if(wordarr2[n]==='l'){
        setKeyL1(true);
    }
    if(wordarr2[n]==='m'){
        setKeyM1(true);
    }
    if(wordarr2[n]==='n'){
        setKeyN1(true);
    }
    if(wordarr2[n]==='o'){
        setKeyO1(true);
    }
    if(wordarr2[n]==='p'){
        setKeyP1(true);
    }
    if(wordarr2[n]==='q'){
        setKeyQ1(true);
    }
    if(wordarr2[n]==='r'){
        setKeyR1(true);
    }
    if(wordarr2[n]==='s'){
        setKeyS1(true);
    }
    if(wordarr2[n]==='t'){
        setKeyT1(true);
    }
    if(wordarr2[n]==='u'){
        setKeyU1(true);
    }
    if(wordarr2[n]==='v'){
        setKeyV1(true);
    }
    if(wordarr2[n]==='w'){
        setKeyW1(true);
    }
    if(wordarr2[n]==='x'){
        setKeyX1(true);
    }
    if(wordarr2[n]==='y'){
        setKeyY1(true);
    }
    if(wordarr2[n]==='z'){
        setKeyZ1(true);
    }
  }

  const handleYellowKeyClr3=(n)=>{
    if(wordarr3[n]==='a'){
        setKeyA1(true);
    }
    if(wordarr3[n]==='b'){
        setKeyB1(true);
    }
    if(wordarr3[n]==='c'){
        setKeyC1(true);
    }
    if(wordarr3[n]==='d'){
        setKeyD1(true);
    }
    if(wordarr3[n]==='e'){
        setKeyE1(true);
    }
    if(wordarr3[n]==='f'){
        setKeyF1(true);
    }
    if(wordarr3[n]==='g'){
        setKeyG1(true);
    }
    if(wordarr3[n]==='h'){
        setKeyH1(true);
    }
    if(wordarr3[n]==='i'){
        setKeyI1(true);
    }
    if(wordarr3[n]==='j'){
        setKeyJ1(true);
    }
    if(wordarr3[n]==='k'){
        setKeyK1(true);
    }
    if(wordarr3[n]==='l'){
        setKeyL1(true);
    }
    if(wordarr3[n]==='m'){
        setKeyM1(true);
    }
    if(wordarr3[n]==='n'){
        setKeyN1(true);
    }
    if(wordarr3[n]==='o'){
        setKeyO1(true);
    }
    if(wordarr3[n]==='p'){
        setKeyP1(true);
    }
    if(wordarr3[n]==='q'){
        setKeyQ1(true);
    }
    if(wordarr3[n]==='r'){
        setKeyR1(true);
    }
    if(wordarr3[n]==='s'){
        setKeyS1(true);
    }
    if(wordarr3[n]==='t'){
        setKeyT1(true);
    }
    if(wordarr3[n]==='u'){
        setKeyU1(true);
    }
    if(wordarr3[n]==='v'){
        setKeyV1(true);
    }
    if(wordarr3[n]==='w'){
        setKeyW1(true);
    }
    if(wordarr3[n]==='x'){
        setKeyX1(true);
    }
    if(wordarr3[n]==='y'){
        setKeyY1(true);
    }
    if(wordarr3[n]==='z'){
        setKeyZ1(true);
    }
  }

  const handleYellowKeyClr4=(n)=>{
    if(wordarr4[n]==='a'){
        setKeyA1(true);
    }
    if(wordarr4[n]==='b'){
        setKeyB1(true);
    }
    if(wordarr4[n]==='c'){
        setKeyC1(true);
    }
    if(wordarr4[n]==='d'){
        setKeyD1(true);
    }
    if(wordarr4[n]==='e'){
        setKeyE1(true);
    }
    if(wordarr4[n]==='f'){
        setKeyF1(true);
    }
    if(wordarr4[n]==='g'){
        setKeyG1(true);
    }
    if(wordarr4[n]==='h'){
        setKeyH1(true);
    }
    if(wordarr4[n]==='i'){
        setKeyI1(true);
    }
    if(wordarr4[n]==='j'){
        setKeyJ1(true);
    }
    if(wordarr4[n]==='k'){
        setKeyK1(true);
    }
    if(wordarr4[n]==='l'){
        setKeyL1(true);
    }
    if(wordarr4[n]==='m'){
        setKeyM1(true);
    }
    if(wordarr4[n]==='n'){
        setKeyN1(true);
    }
    if(wordarr4[n]==='o'){
        setKeyO1(true);
    }
    if(wordarr4[n]==='p'){
        setKeyP1(true);
    }
    if(wordarr4[n]==='q'){
        setKeyQ1(true);
    }
    if(wordarr4[n]==='r'){
        setKeyR1(true);
    }
    if(wordarr4[n]==='s'){
        setKeyS1(true);
    }
    if(wordarr4[n]==='t'){
        setKeyT1(true);
    }
    if(wordarr4[n]==='u'){
        setKeyU1(true);
    }
    if(wordarr4[n]==='v'){
        setKeyV1(true);
    }
    if(wordarr4[n]==='w'){
        setKeyW1(true);
    }
    if(wordarr4[n]==='x'){
        setKeyX1(true);
    }
    if(wordarr4[n]==='y'){
        setKeyY1(true);
    }
    if(wordarr4[n]==='z'){
        setKeyZ1(true);
    }
  }

  const handleGreyKeyClr=(n)=>{
    if(wordarr[n]==='a'){
        setKeyA2(true);
    }
    if(wordarr[n]==='b'){
        setKeyB2(true);
    }
    if(wordarr[n]==='c'){
        setKeyC2(true);
    }
    if(wordarr[n]==='d'){
        setKeyD2(true);
    }
    if(wordarr[n]==='e'){
        setKeyE2(true);
    }
    if(wordarr[n]==='f'){
        setKeyF2(true);
    }
    if(wordarr[n]==='g'){
        setKeyG2(true);
    }
    if(wordarr[n]==='h'){
        setKeyH2(true);
    }
    if(wordarr[n]==='i'){
        setKeyI2(true);
    }
    if(wordarr[n]==='j'){
        setKeyJ2(true);
    }
    if(wordarr[n]==='k'){
        setKeyK2(true);
    }
    if(wordarr[n]==='l'){
        setKeyL2(true);
    }
    if(wordarr[n]==='m'){
        setKeyM2(true);
    }
    if(wordarr[n]==='n'){
        setKeyN2(true);
    }
    if(wordarr[n]==='o'){
        setKeyO2(true);
    }
    if(wordarr[n]==='p'){
        setKeyP2(true);
    }
    if(wordarr[n]==='q'){
        setKeyQ2(true);
    }
    if(wordarr[n]==='r'){
        setKeyR2(true);
    }
    if(wordarr[n]==='s'){
        setKeyS2(true);
    }
    if(wordarr[n]==='t'){
        setKeyT2(true);
    }
    if(wordarr[n]==='u'){
        setKeyU2(true);
    }
    if(wordarr[n]==='v'){
        setKeyV2(true);
    }
    if(wordarr[n]==='w'){
        setKeyW2(true);
    }
    if(wordarr[n]==='x'){
        setKeyX2(true);
    }
    if(wordarr[n]==='y'){
        setKeyY2(true);
    }
    if(wordarr[n]==='z'){
        setKeyZ2(true);
    }
  }

  const handleGreyKeyClr1=(n)=>{
    if(wordarr1[n]==='a'){
        setKeyA2(true);
    }
    if(wordarr1[n]==='b'){
        setKeyB2(true);
    }
    if(wordarr1[n]==='c'){
        setKeyC2(true);
    }
    if(wordarr1[n]==='d'){
        setKeyD2(true);
    }
    if(wordarr1[n]==='e'){
        setKeyE2(true);
    }
    if(wordarr1[n]==='f'){
        setKeyF2(true);
    }
    if(wordarr1[n]==='g'){
        setKeyG2(true);
    }
    if(wordarr1[n]==='h'){
        setKeyH2(true);
    }
    if(wordarr1[n]==='i'){
        setKeyI2(true);
    }
    if(wordarr1[n]==='j'){
        setKeyJ2(true);
    }
    if(wordarr1[n]==='k'){
        setKeyK2(true);
    }
    if(wordarr1[n]==='l'){
        setKeyL2(true);
    }
    if(wordarr1[n]==='m'){
        setKeyM2(true);
    }
    if(wordarr1[n]==='n'){
        setKeyN2(true);
    }
    if(wordarr1[n]==='o'){
        setKeyO2(true);
    }
    if(wordarr1[n]==='p'){
        setKeyP2(true);
    }
    if(wordarr1[n]==='q'){
        setKeyQ2(true);
    }
    if(wordarr1[n]==='r'){
        setKeyR2(true);
    }
    if(wordarr1[n]==='s'){
        setKeyS2(true);
    }
    if(wordarr1[n]==='t'){
        setKeyT2(true);
    }
    if(wordarr1[n]==='u'){
        setKeyU2(true);
    }
    if(wordarr1[n]==='v'){
        setKeyV2(true);
    }
    if(wordarr1[n]==='w'){
        setKeyW2(true);
    }
    if(wordarr1[n]==='x'){
        setKeyX2(true);
    }
    if(wordarr1[n]==='y'){
        setKeyY2(true);
    }
    if(wordarr1[n]==='z'){
        setKeyZ2(true);
    }
  }

const handleGreyKeyClr2=(n)=>{
    if(wordarr2[n]==='a'){
        setKeyA2(true);
    }
    if(wordarr2[n]==='b'){
        setKeyB2(true);
    }
    if(wordarr2[n]==='c'){
        setKeyC2(true);
    }
    if(wordarr2[n]==='d'){
        setKeyD2(true);
    }
    if(wordarr2[n]==='e'){
        setKeyE2(true);
    }
    if(wordarr2[n]==='f'){
        setKeyF2(true);
    }
    if(wordarr2[n]==='g'){
        setKeyG2(true);
    }
    if(wordarr2[n]==='h'){
        setKeyH2(true);
    }
    if(wordarr2[n]==='i'){
        setKeyI2(true);
    }
    if(wordarr2[n]==='j'){
        setKeyJ2(true);
    }
    if(wordarr2[n]==='k'){
        setKeyK2(true);
    }
    if(wordarr2[n]==='l'){
        setKeyL2(true);
    }
    if(wordarr2[n]==='m'){
        setKeyM2(true);
    }
    if(wordarr2[n]==='n'){
        setKeyN2(true);
    }
    if(wordarr2[n]==='o'){
        setKeyO2(true);
    }
    if(wordarr2[n]==='p'){
        setKeyP2(true);
    }
    if(wordarr2[n]==='q'){
        setKeyQ2(true);
    }
    if(wordarr2[n]==='r'){
        setKeyR2(true);
    }
    if(wordarr2[n]==='s'){
        setKeyS2(true);
    }
    if(wordarr2[n]==='t'){
        setKeyT2(true);
    }
    if(wordarr2[n]==='u'){
        setKeyU2(true);
    }
    if(wordarr2[n]==='v'){
        setKeyV2(true);
    }
    if(wordarr2[n]==='w'){
        setKeyW2(true);
    }
    if(wordarr2[n]==='x'){
        setKeyX2(true);
    }
    if(wordarr2[n]==='y'){
        setKeyY2(true);
    }
    if(wordarr2[n]==='z'){
        setKeyZ2(true);
    }
  }

  const handleGreyKeyClr3=(n)=>{
    if(wordarr3[n]==='a'){
        setKeyA2(true);
    }
    if(wordarr3[n]==='b'){
        setKeyB2(true);
    }
    if(wordarr3[n]==='c'){
        setKeyC2(true);
    }
    if(wordarr3[n]==='d'){
        setKeyD2(true);
    }
    if(wordarr3[n]==='e'){
        setKeyE2(true);
    }
    if(wordarr3[n]==='f'){
        setKeyF2(true);
    }
    if(wordarr3[n]==='g'){
        setKeyG2(true);
    }
    if(wordarr3[n]==='h'){
        setKeyH2(true);
    }
    if(wordarr3[n]==='i'){
        setKeyI2(true);
    }
    if(wordarr3[n]==='j'){
        setKeyJ2(true);
    }
    if(wordarr3[n]==='k'){
        setKeyK2(true);
    }
    if(wordarr3[n]==='l'){
        setKeyL2(true);
    }
    if(wordarr3[n]==='m'){
        setKeyM2(true);
    }
    if(wordarr3[n]==='n'){
        setKeyN2(true);
    }
    if(wordarr3[n]==='o'){
        setKeyO2(true);
    }
    if(wordarr3[n]==='p'){
        setKeyP2(true);
    }
    if(wordarr3[n]==='q'){
        setKeyQ2(true);
    }
    if(wordarr3[n]==='r'){
        setKeyR2(true);
    }
    if(wordarr3[n]==='s'){
        setKeyS2(true);
    }
    if(wordarr3[n]==='t'){
        setKeyT2(true);
    }
    if(wordarr3[n]==='u'){
        setKeyU2(true);
    }
    if(wordarr3[n]==='v'){
        setKeyV2(true);
    }
    if(wordarr3[n]==='w'){
        setKeyW2(true);
    }
    if(wordarr3[n]==='x'){
        setKeyX2(true);
    }
    if(wordarr3[n]==='y'){
        setKeyY2(true);
    }
    if(wordarr3[n]==='z'){
        setKeyZ2(true);
    }
  }

  const handleGreyKeyClr4=(n)=>{
    if(wordarr4[n]==='a'){
        setKeyA2(true);
    }
    if(wordarr4[n]==='b'){
        setKeyB2(true);
    }
    if(wordarr4[n]==='c'){
        setKeyC2(true);
    }
    if(wordarr4[n]==='d'){
        setKeyD2(true);
    }
    if(wordarr4[n]==='e'){
        setKeyE2(true);
    }
    if(wordarr4[n]==='f'){
        setKeyF2(true);
    }
    if(wordarr4[n]==='g'){
        setKeyG2(true);
    }
    if(wordarr4[n]==='h'){
        setKeyH2(true);
    }
    if(wordarr4[n]==='i'){
        setKeyI2(true);
    }
    if(wordarr4[n]==='j'){
        setKeyJ2(true);
    }
    if(wordarr4[n]==='k'){
        setKeyK2(true);
    }
    if(wordarr4[n]==='l'){
        setKeyL2(true);
    }
    if(wordarr4[n]==='m'){
        setKeyM2(true);
    }
    if(wordarr4[n]==='n'){
        setKeyN2(true);
    }
    if(wordarr4[n]==='o'){
        setKeyO2(true);
    }
    if(wordarr4[n]==='p'){
        setKeyP2(true);
    }
    if(wordarr4[n]==='q'){
        setKeyQ2(true);
    }
    if(wordarr4[n]==='r'){
        setKeyR2(true);
    }
    if(wordarr4[n]==='s'){
        setKeyS2(true);
    }
    if(wordarr4[n]==='t'){
        setKeyT2(true);
    }
    if(wordarr4[n]==='u'){
        setKeyU2(true);
    }
    if(wordarr4[n]==='v'){
        setKeyV2(true);
    }
    if(wordarr4[n]==='w'){
        setKeyW2(true);
    }
    if(wordarr4[n]==='x'){
        setKeyX2(true);
    }
    if(wordarr4[n]==='y'){
        setKeyY2(true);
    }
    if(wordarr4[n]==='z'){
        setKeyZ2(true);
    }
  }



  const matchSearch = () =>{
 if(!result || result){   
    if(lowerWord === randomWord){
       setMsg('You WIN!');
    }
        if(wordarr[0]=== randomArray[0]){
            handleKeyClr(0);
            setParallel1(true);
            
        }else{
            setParallel1(false);
        }
        if(wordarr[1]=== randomArray[1]){
            handleKeyClr(1);
            setParallel2(true);
        }else{
            setParallel2(false);
        }
        if(wordarr[2]=== randomArray[2]){
            handleKeyClr(2);
            setParallel3(true);
        }else{
            setParallel3(false);
        }
        if(wordarr[3]=== randomArray[3]){
            handleKeyClr(3);
            setParallel4(true);
        }else{
            setParallel4(false);
        }
        if(wordarr[4]=== randomArray[4]){
            handleKeyClr(4);
            setParallel5(true);
        }else{
            setParallel5(false);
        }
    }
if(result){   
    if(lowerWord1 === randomWord){
       setMsg('You WIN!');
    }
        if(wordarr1[0]=== randomArray[0]){
            handleKeyClr1(0);
            setParallel6(true);
        }else{
            setParallel6(false);
        }
        if(wordarr1[1]=== randomArray[1]){
            handleKeyClr1(1);
            setParallel7(true);
        }else{
            setParallel7(false);
        }
        if(wordarr1[2]=== randomArray[2]){
            handleKeyClr1(2);
            setParallel8(true);
        }else{
            setParallel8(false);
        }
        if(wordarr1[3]=== randomArray[3]){
            handleKeyClr1(3);
            setParallel9(true);
        }else{
            setParallel9(false);
        }
        if(wordarr1[4]=== randomArray[4]){
            handleKeyClr1(4);
            setParallel10(true);
        }else{
            setParallel10(false);
        }
    }
    if(result && result1){   
    if(lowerWord2 === randomWord){
       setMsg('You WIN!');
    }
        if(wordarr2[0]=== randomArray[0]){
            handleKeyClr2(0);
            setParallel11(true);
        }else{
            setParallel11(false);
        }
        if(wordarr2[1]=== randomArray[1]){
            handleKeyClr2(1);
            setParallel12(true);
        }else{
            setParallel12(false);
        }
        if(wordarr2[2]=== randomArray[2]){
            handleKeyClr2(2);
            setParallel13(true);
        }else{
            setParallel13(false);
        }
        if(wordarr2[3]=== randomArray[3]){
            handleKeyClr2(3);
            setParallel14(true);
        }else{
            setParallel14(false);
        }
        if(wordarr2[4]=== randomArray[4]){
            handleKeyClr2(4);
            setParallel15(true);
        }else{
            setParallel15(false);
        }
    }  
    if(result && result1 && result2){   
    if(lowerWord3 === randomWord){
       setMsg('You WIN!');
    }
        if(wordarr3[0]=== randomArray[0]){
            handleKeyClr3(0);
            setParallel16(true);
        }else{
            setParallel16(false);
        }
        if(wordarr3[1]=== randomArray[1]){
            handleKeyClr3(1);
            setParallel17(true);
        }else{
            setParallel17(false);
        }
        if(wordarr3[2]=== randomArray[2]){
            handleKeyClr3(2);
            setParallel18(true);
        }else{
            setParallel18(false);
        }
        if(wordarr3[3]=== randomArray[3]){
            handleKeyClr3(3);
            setParallel19(true);
        }else{
            setParallel19(false);
        }
        if(wordarr3[4]=== randomArray[4]){
            handleKeyClr3(4);
            setParallel20(true);
        }else{
            setParallel20(false);
        }
    } 
      
    if(result && result1 && result2 && result3){   
        if(lowerWord4 === randomWord){
           setMsg('You WIN!');
        }
            if(wordarr4[0]=== randomArray[0]){
                handleKeyClr4(0);
                setParallel21(true);
            }else{
                setParallel21(false);
            }
            if(wordarr4[1]=== randomArray[1]){
                handleKeyClr4(1);
                setParallel22(true);
            }else{
                setParallel22(false);
            }
            if(wordarr4[2]=== randomArray[2]){
                handleKeyClr4(2);
                setParallel23(true);
            }else{
                setParallel23(false);
            }
            if(wordarr4[3]=== randomArray[3]){
                handleKeyClr4(3);
                setParallel24(true);
            }else{
                setParallel24(false);
            }
            if(wordarr4[4]=== randomArray[4]){
                handleKeyClr4(4);
                setParallel25(true);
            }else{
                setParallel25(false);
            }
        } 
}
const handleUnparallel=()=>{
   if(!result || result){
        for(let j=0; j<randomArray.length; j++){
            if(wordarr[0]===randomArray[j]){
                handleYellowKeyClr(0);
        setUnParallel1(true);
            }
            if(wordarr[1]===randomArray[j]){
                handleYellowKeyClr(1);
                setUnParallel2(true);
                    }
                    if(wordarr[2]===randomArray[j]){
                        handleYellowKeyClr(2);
                        setUnParallel3(true);
                            }
                            if(wordarr[3]===randomArray[j]){
                                handleYellowKeyClr(3);
                                setUnParallel4(true);
                                    }
                                    if(wordarr[4]===randomArray[j]){
                                        handleYellowKeyClr(4);
                                        setUnParallel5(true);
                                            }
        }
    }

    if(result){
        for(let j=0; j<randomArray.length; j++){
            if(wordarr1[0]===randomArray[j]){
                handleYellowKeyClr1(0);
        setUnParallel6(true);
            }
            if(wordarr1[1]===randomArray[j]){
                handleYellowKeyClr1(1);
                setUnParallel7(true);
                    }
                    if(wordarr1[2]===randomArray[j]){
                        handleYellowKeyClr1(2);
                        setUnParallel8(true);
                            }
                            if(wordarr1[3]===randomArray[j]){
                                handleYellowKeyClr1(3);
                                setUnParallel9(true);
                                    }
                                    if(wordarr1[4]===randomArray[j]){
                                        handleYellowKeyClr1(4);
                                        setUnParallel10(true);
                                            }
        }
    }
    if(result && result1){
        for(let j=0; j<randomArray.length; j++){
            if(wordarr2[0]===randomArray[j]){
                handleYellowKeyClr2(0);
        setUnParallel11(true);
            }
            if(wordarr2[1]===randomArray[j]){
                handleYellowKeyClr2(1);
                setUnParallel12(true);
                    }
                    if(wordarr2[2]===randomArray[j]){
                        handleYellowKeyClr2(2);
                        setUnParallel13(true);
                            }
                            if(wordarr2[3]===randomArray[j]){
                                handleYellowKeyClr2(3);
                                setUnParallel14(true);
                                    }
                                    if(wordarr2[4]===randomArray[j]){
                                        handleYellowKeyClr2(4);
                                        setUnParallel15(true);
                                            }
        }
    }
    
    if(result && result1 && result2){
        for(let j=0; j<randomArray.length; j++){
            if(wordarr3[0]===randomArray[j]){
                handleYellowKeyClr3(0);
        setUnParallel16(true);
            }
            if(wordarr3[1]===randomArray[j]){
                handleYellowKeyClr3(1);
                setUnParallel17(true);
                    }
                    if(wordarr3[2]===randomArray[j]){
                        handleYellowKeyClr3(2);
                        setUnParallel18(true);
                            }
                            if(wordarr3[3]===randomArray[j]){
                                handleYellowKeyClr3(3);
                                setUnParallel19(true);
                                    }
                                    if(wordarr3[4]===randomArray[j]){
                                        handleYellowKeyClr3(4);
                                        setUnParallel20(true);
                                            }
        }
    }      
    
    if(result && result1 && result2 && result3){
        for(let j=0; j<randomArray.length; j++){
            if(wordarr4[0]===randomArray[j]){
                handleYellowKeyClr4(0);
        setUnParallel21(true);
            }
            if(wordarr4[1]===randomArray[j]){
                handleYellowKeyClr4(1);
                setUnParallel22(true);
                    }
                    if(wordarr4[2]===randomArray[j]){
                        handleYellowKeyClr4(2);
                        setUnParallel23(true);
                            }
                            if(wordarr4[3]===randomArray[j]){
                                handleYellowKeyClr4(3);
                                setUnParallel24(true);
                                    }
                                    if(wordarr4[4]===randomArray[j]){
                                        handleYellowKeyClr4(4);
                                        setUnParallel25(true);
                                            }
        }
        if(words.includes(lowerWord4)){
        if(lowerWord4 !== randomWord){
            setFail(`Answer is ${randomWord}`);
        } 
    }
    }      
}
const [fail, setFail]= useState('');

const searchGrey=()=>{
    if(!result){
        if(words.includes(lowerWord)){
            for(let j=0; j<randomArray.length; j++){
            if(wordarr[0] !== randomArray[j] ){
                    handleGreyKeyClr(0);
            }
            if(wordarr[1] !== randomArray[j] ){
                    handleGreyKeyClr(1);
            }
            if(wordarr[2] !== randomArray[j] ){
                    handleGreyKeyClr(2);
            }
            if(wordarr[3] !== randomArray[j] ){
                    handleGreyKeyClr(3);
            }
            if(wordarr[4] !== randomArray[j] ){
                    handleGreyKeyClr(4);
            }
            
        }
        }
    }
    if(result){
        if(words.includes(lowerWord1)){
            for(let j=0; j<randomArray.length; j++){
            if(wordarr1[0] !== randomArray[j] ){
                    handleGreyKeyClr1(0);
            }
            if(wordarr1[1] !== randomArray[j] ){
                    handleGreyKeyClr1(1);
            }
            if(wordarr1[2] !== randomArray[j] ){
                    handleGreyKeyClr1(2);
            }
            if(wordarr1[3] !== randomArray[j] ){
                    handleGreyKeyClr1(3);
            }
            if(wordarr1[4] !== randomArray[j] ){
                    handleGreyKeyClr1(4);
            }
            
        }
        }
    }
    if(!result){
        if(words.includes(lowerWord2)){
            for(let j=0; j<randomArray.length; j++){
            if(wordarr2[0] !== randomArray[j] ){
                    handleGreyKeyClr2(0);
            }
            if(wordarr2[1] !== randomArray[j] ){
                    handleGreyKeyClr2(1);
            }
            if(wordarr2[2] !== randomArray[j] ){
                    handleGreyKeyClr2(2);
            }
            if(wordarr2[3] !== randomArray[j] ){
                    handleGreyKeyClr2(3);
            }
            if(wordarr2[4] !== randomArray[j] ){
                    handleGreyKeyClr2(4);
            }
            
        }
        }
    }
    if(!result){
        if(words.includes(lowerWord3)){
            for(let j=0; j<randomArray.length; j++){
            if(wordarr3[0] !== randomArray[j] ){
                    handleGreyKeyClr3(0);
            }
            if(wordarr3[1] !== randomArray[j] ){
                    handleGreyKeyClr3(1);
            }
            if(wordarr3[2] !== randomArray[j] ){
                    handleGreyKeyClr3(2);
            }
            if(wordarr3[3] !== randomArray[j] ){
                    handleGreyKeyClr3(3);
            }
            if(wordarr3[4] !== randomArray[j] ){
                    handleGreyKeyClr3(4);
            }
            
        }
        }
    }
    if(!result){
        if(words.includes(lowerWord4)){
            for(let j=0; j<randomArray.length; j++){
            if(wordarr4[0] !== randomArray[j] ){
                    handleGreyKeyClr4(0);
            }
            if(wordarr4[1] !== randomArray[j] ){
                    handleGreyKeyClr4(1);
            }
            if(wordarr4[2] !== randomArray[j] ){
                    handleGreyKeyClr4(2);
            }
            if(wordarr4[3] !== randomArray[j] ){
                    handleGreyKeyClr4(3);
            }
            if(wordarr4[4] !== randomArray[j] ){
                    handleGreyKeyClr4(4);
            }
            
        }
        }
    }

}

const showWin=()=>{
    if(!result){
        if(lowerWord === randomWord){
            setResult(false);
        }
    }
    if(result){
        if(lowerWord1=== randomWord){
            setResult1(false);
        }
    }
    if(result1 && result){
        if(lowerWord2=== randomWord){
            setResult2(false);
        }
    }
    if(result && result1 && result2){
        if(lowerWord3=== randomWord){
            setResult3(false);
        }
    }
    if(result && result1 && result2 && result3){
        if(lowerWord4=== randomWord){
            setResult4(false);
        }
    }
}

const [showError, setShowError]=useState('');
const showToast=()=>{
    setShowError('not found in dictionary!');

    setTimeout(() => {
        setShowError('');
      }, 2000);
    }
const handleToast1=()=>{
 if(!result){
    if(!words.includes(lowerWord)){
        showToast();
        setParallel1(false);
        setParallel2(false);
        setParallel3(false);
        setParallel4(false);
        setParallel5(false);
        setUnParallel1(false);
        setUnParallel2(false);
        setUnParallel3(false);
        setUnParallel4(false);
        setUnParallel5(false);
    }
}
}
const handleToast2=()=>{
    if(result){
    if(!words.includes(lowerWord1)){
        showToast();
        setParallel6(false);
        setParallel7(false);
        setParallel8(false);
        setParallel9(false);
        setParallel10(false);
        setUnParallel6(false);
        setUnParallel7(false);
        setUnParallel8(false);
        setUnParallel9(false);
        setUnParallel10(false);
    }
}
}
const handleToast3=()=>{
if(result && result1){   
if(!words.includes(lowerWord2)){
        showToast();
        setParallel11(false);
        setParallel12(false);
        setParallel13(false);
        setParallel14(false);
        setParallel15(false);
        setUnParallel11(false);
        setUnParallel12(false);
        setUnParallel13(false);
        setUnParallel14(false);
        setUnParallel15(false);
    }
}
}
const handleToast4=()=>{
if(result && result1 && result2){   
if(!words.includes(lowerWord3)){
        showToast();
        setParallel16(false);
        setParallel17(false);
        setParallel18(false);
        setParallel19(false);
        setParallel20(false);
        setUnParallel16(false);
        setUnParallel17(false);
        setUnParallel18(false);
        setUnParallel19(false);
        setUnParallel20(false);
    }
}
}
const handleToast5=()=>{
if(result && result1 && result2 && result3){
    if(!words.includes(lowerWord4)){
        showToast();
        setParallel21(false);
        setParallel22(false);
        setParallel23(false);
        setParallel24(false);
        setParallel25(false);
        setUnParallel21(false);
        setUnParallel22(false);
        setUnParallel23(false);
        setUnParallel24(false);
        setUnParallel25(false);
    }
}
}

const handleToast=()=>{
    handleToast1();
    handleToast2();
    handleToast3();
    handleToast4();
    handleToast5();
    showWin();
}

 let clr1,clr2,clr3,clr4,clr5,clr6,clr7,clr8,clr9,clr10,clr11,clr12,clr13,clr14,clr15,
 clr16,clr17,clr18,clr19,clr20,clr21,clr22,clr23,clr24,clr25;

 let txtclr1,txtclr2,txtclr3,txtclr4,txtclr5,txtclr6,txtclr7,txtclr8,txtclr9,txtclr10,
  txtclr11,txtclr12,txtclr13,txtclr14,txtclr15,txtclr16,txtclr17,txtclr18,txtclr19,txtclr20,
  txtclr21,txtclr22,txtclr23,txtclr24,txtclr25;
 
  let keyclr1,keyclr2,keyclr3,keyclr4,keyclr5,keyclr6,keyclr7,keyclr8,keyclr9,keyclr10,keyclr11,keyclr12,keyclr13,keyclr14,keyclr15,
  keyclr16,keyclr17,keyclr18,keyclr19,keyclr20,keyclr21,keyclr22,keyclr23,keyclr24,keyclr25,keyclr26;
 
  const manageKey =()=>{
    if(keyA){
        keyclr1='green';
    }
    if(keyB){
        keyclr2='green';
    }
    if(keyC){
        keyclr3='green';
    }
    if(keyD){
        keyclr4='green';
    }
    if(keyE){
        keyclr5='green';
    }
    if(keyF){
        keyclr6='green';
    }
    if(keyG){
        keyclr7='green';
    }
    if(keyH){
        keyclr8='green';
    }
    if(keyI){
        keyclr9='green';
    }
    if(keyJ){
        keyclr10='green';
    }
    if(keyK){
        keyclr11='green';
    }
    if(keyL){
        keyclr12='green';
    }
    if(keyM){
        keyclr13='green';
    }
    if(keyN){
        keyclr14='green';
    }
    if(keyO){
        keyclr15='green';
    }
    if(keyP){
        keyclr16='green';
    }
    if(keyQ){
        keyclr17='green';
    }
    if(keyR){
        keyclr18='green';
    }
    if(keyS){
        keyclr19='green';
    }
    if(keyT){
        keyclr20='green';
    }
    if(keyU){
        keyclr21='green';
    }
    if(keyV){
        keyclr22='green';
    }
    if(keyW){
        keyclr23='green';
    }
    if(keyX){
        keyclr24='green';
    }
    if(keyY){
        keyclr25='green';
    }
    if(keyZ){
        keyclr26='green';
    }
}


const manageYellowKey=()=>{
    if(keyA1){
        keyclr1='yellow';
    }
    if(keyB1){
        keyclr2='yellow';
    }
    if(keyC1){
        keyclr3='yellow';
    }
    if(keyD1){
        keyclr4='yellow';
    }
    if(keyE1){
        keyclr5='yellow';
    }
    if(keyF1){
        keyclr6='yellow';
    }
    if(keyG1){
        keyclr7='yellow';
    }
    if(keyH1){
        keyclr8='yellow';
    }
    if(keyI1){
        keyclr9='yellow';
    }
    if(keyJ1){
        keyclr10='yellow';
    }
    if(keyK1){
        keyclr11='yellow';
    }
    if(keyL1){
        keyclr12='yellow';
    }
    if(keyM1){
        keyclr13='yellow';
    }
    if(keyN1){
        keyclr14='yellow';
    }
    if(keyO1){
        keyclr15='yellow';
    }
    if(keyP1){
        keyclr16='yellow';
    }
    if(keyQ1){
        keyclr17='yellow';
    }
    if(keyR1){
        keyclr18='yellow';
    }
    if(keyS1){
        keyclr19='yellow';
    }
    if(keyT1){
        keyclr20='yellow';
    }
    if(keyU1){
        keyclr21='yellow';
    }
    if(keyV1){
        keyclr22='yellow';
    }
    if(keyW1){
        keyclr23='yellow';
    }
    if(keyX1){
        keyclr24='yellow';
    }
    if(keyY1){
        keyclr25='yellow';
    }
    if(keyZ1){
        keyclr26='yellow';
    }

}






    if(keyA2){
        keyclr1='grey';
    }
    if(keyB2){
        keyclr2='grey';
    }
    if(keyC2){
        keyclr3='grey';
    }
    if(keyD2){
        keyclr4='grey';
    }
    if(keyE2){
        keyclr5='grey';
    }
    if(keyF2){
        keyclr6='grey';
    }
    if(keyG2){
        keyclr7='grey';
    }
    if(keyH2){
        keyclr8='grey';
    }
    if(keyI2){
        keyclr9='grey';
    }
    if(keyJ2){
        keyclr10='grey';
    }
    if(keyK2){
        keyclr11='grey';
    }
    if(keyL2){
        keyclr12='grey';
    }
    if(keyM2){
        keyclr13='grey';
    }
    if(keyN2){
        keyclr14='grey';
    }
    if(keyO2){
        keyclr15='grey';
    }
    if(keyP2){
        keyclr16='grey';
    }
    if(keyQ2){
        keyclr17='grey';
    }
    if(keyR2){
        keyclr18='grey';
    }
    if(keyS2){
        keyclr19='grey';
    }
    if(keyT2){
        keyclr20='grey';
    }
    if(keyU2){
        keyclr21='grey';
    }
    if(keyV2){
        keyclr22='grey';
    }
    if(keyW2){
        keyclr23='grey';
    }
    if(keyX2){
        keyclr24='grey';
    }
    if(keyY2){
        keyclr25='grey';
    }
    if(keyZ2){
        keyclr26='grey';
    }




    if(isAvail1){
        clr1 = 'grey';
        clr2 = 'grey';
        clr3 = 'grey';
        clr4 = 'grey';
        clr5 = 'grey';
        txtclr1 = 'white';
        txtclr2 = 'white';
        txtclr3 = 'white';
        txtclr4 = 'white';
        txtclr5 = 'white';
    }
    if(isAvail2){
        clr6 = 'grey';
        clr7 = 'grey';
        clr8 = 'grey';
        clr9 = 'grey';
        clr10 = 'grey';
        txtclr6 = 'white';
        txtclr7 = 'white';
        txtclr8 = 'white';
        txtclr9 = 'white';
        txtclr10 = 'white';
    }
    if(isAvail3){
        clr11 = 'grey';
        clr12 = 'grey';
        clr13 = 'grey';
        clr14 = 'grey';
        clr15 = 'grey';
        txtclr11 = 'white';
        txtclr12 = 'white';
        txtclr13 = 'white';
        txtclr14 = 'white';
        txtclr15 = 'white';
    }
    if(isAvail4){
        clr16 = 'grey';
        clr17 = 'grey';
        clr18 = 'grey';
        clr19 = 'grey';
        clr20 = 'grey';
        txtclr16 = 'white';
        txtclr17 = 'white';
        txtclr18 = 'white';
        txtclr19 = 'white';
        txtclr20 = 'white';
    }
    if(isAvail5){
        clr21 = 'grey';
        clr22 = 'grey';
        clr23 = 'grey';
        clr24 = 'grey';
        clr25 = 'grey';
        txtclr21 = 'white';
        txtclr22 = 'white';
        txtclr23 = 'white';
        txtclr24 = 'white';
        txtclr25 = 'white';
    }
 
 if(unParallel1){
    clr1 ='yellow';
    manageYellowKey();
 }
 if(unParallel2){
    clr2 ='yellow';
    manageYellowKey();
 }
 if(unParallel3){
    clr3 ='yellow';
    manageYellowKey();
 }
 if(unParallel4){
    clr4 ='yellow';
    manageYellowKey();
 }
 if(unParallel5){
    clr5 ='yellow';
    manageYellowKey();
 }

 if(unParallel6){
    clr6 ='yellow';
    manageYellowKey();
 }
 if(unParallel7){
    clr7 ='yellow';
    manageYellowKey();
 }
 if(unParallel8){
    clr8 ='yellow';
    manageYellowKey();
 }
 if(unParallel9){
    clr9 ='yellow';
    manageYellowKey();
 }
 if(unParallel10){
    clr10 ='yellow';
    manageYellowKey();
 }

 if(unParallel11){
    clr11 ='yellow';
    manageYellowKey();
 }
 if(unParallel12){
    clr12 ='yellow';
    manageYellowKey();
 }
 if(unParallel13){
    clr13 ='yellow';
    manageYellowKey();
 }
 if(unParallel14){
    clr14 ='yellow';
    manageYellowKey();
 }
 if(unParallel15){
    clr15 ='yellow';
    manageYellowKey();
 }

 if(unParallel16){
    clr16 ='yellow';
    manageYellowKey();
 }
 if(unParallel17){
    clr17 ='yellow';
    manageYellowKey();
 }
 if(unParallel18){
    clr18 ='yellow';
    manageYellowKey();
 }
 if(unParallel19){
    clr19 ='yellow';
    manageYellowKey();
 }
 if(unParallel20){
    clr20 ='yellow';
    manageYellowKey();
 }

 if(unParallel21){
    clr21 ='yellow';
    manageYellowKey();
 }
 if(unParallel22){
    clr22 ='yellow';
    manageYellowKey();
 }
 if(unParallel23){
    clr23 ='yellow';
    manageYellowKey();
 }
 if(unParallel24){
    clr24 ='yellow';
    manageYellowKey();
 }
 if(unParallel25){
    clr25 ='yellow';
    manageYellowKey();
 }

if(parallel1){
    clr1='green';
    manageKey();
 }
 if(parallel2){
    clr2 ='green';
    manageKey();
 }
 if(parallel3){
    clr3 ='green';
    manageKey();
 }
 if(parallel4){
    clr4 ='green';
    manageKey();
 }
 if(parallel5){
    clr5 ='green';
    manageKey();
 } 

if(parallel6){
    clr6='green';
    manageKey();
 }
 if(parallel7){
    clr7 ='green';
    manageKey();
 }
 if(parallel8){
    clr8 ='green';
    manageKey();
 }
 if(parallel9){
    clr9 ='green';
    manageKey();
 }
 if(parallel10){
    clr10 ='green';
    manageKey();
 } 
if(parallel11){
    clr11='green';
    manageKey();
 }
 if(parallel12){
    clr12 ='green';
    manageKey();
 }
 if(parallel13){
    clr13 ='green';
    manageKey();
 }
 if(parallel14){
    clr14 ='green';
    manageKey();
 }
 if(parallel15){
    clr15 ='green';
    manageKey();
 } 

 if(parallel16){
     clr16='green';
     manageKey();
  }
  if(parallel17){
     clr17 ='green';
     manageKey();
  }
  if(parallel18){
     clr18 ='green';
     manageKey();
  }
  if(parallel19){
     clr19 ='green';
     manageKey();
  }
  if(parallel20){
     clr20 ='green';
     manageKey();
  }  

  if(parallel21){
      clr21='green';
      manageKey();
   }
   if(parallel22){
      clr22 ='green';
      manageKey();
   }
   if(parallel23){
      clr23 ='green';
      manageKey();
   }
   if(parallel24){
      clr24 ='green';
      manageKey();
   }
   if(parallel25){
      clr25 ='green';
      manageKey();
   }        

   const [showAlert, setShowAlert] = useState(false);

   const handleShowAlert=()=>{
    setShowAlert(true);
   }
const handleAlertCancel=()=>{
    setShowAlert(false);
}

const getResult=()=>{
    searchGrey();
  handleSearch();
  handleUnparallel();
  matchSearch();
  handleToast();
    }

 
    return(<View style={styles.whole}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={handleShowAlert}>
        <Text style={{alignItems:'center', color:'black', fontWeight:'bold', fontSize:'20px', paddingRight:'20px', paddingTop:'10px'}}>HELP!</Text>
        </TouchableOpacity>
        <Text style={{alignItems:'center', color:'black', fontWeight:'bold', fontSize:'30px'}}>WORDLE</Text>
        </View>
        <Text style={{alignItems:'center', color:'red', fontWeight:'bold', fontSize:'20px', paddingRight:'20px', paddingTop:'10px'}}>{showError}</Text>
        <View>
            <Modal visible={showAlert}  transparent={true} animationType='fade'>
        <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
            <View style={{flexDirection:'row'}}>
            <Text style={{height:'50px', width:'50px', backgroundColor:'green', fontSize:'20px', color:'white', paddingTop:'10px', fontWeight:'bold', borderRadius:'10px', borderWidth:1, textAlign:'center'}}>S</Text>
            <Text style={{paddingTop:'10px', fontSize:'20px'}}>Green color show the character is at right spot in the Word you guess.</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{height:'50px', width:'50px', backgroundColor:'yellow', fontSize:'20px', color:'white', paddingTop:'10px', fontWeight:'bold', borderRadius:'10px', borderWidth:1, textAlign:'center'}}>W</Text>
            <Text style={{paddingTop:'10px', fontSize:'20px'}}>Yellow color show the character is the Word you guess but at wrong spot.</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{height:'50px', width:'50px', backgroundColor:'grey', fontSize:'20px', color:'white', paddingTop:'10px', fontWeight:'bold', borderRadius:'10px', borderWidth:1, textAlign:'center'}}>G</Text>
            <Text style={{paddingTop:'10px', fontSize:'20px'}}>Grey color show that the character is not in the word. </Text>
            </View>
            <TouchableOpacity onPress={handleAlertCancel}>
            <Text style={{alignContent:'center', textAlign:'center', fontSize:'20px'}}>Cancel</Text>
            </TouchableOpacity>
        </View>
        </View>
       </Modal>
        </View>
        <View style={styles.firstBox}>
        <View  style={styles.container1}>
        <Text style={[styles.input, {backgroundColor: clr1, color:txtclr1}]}>{wordArray[0]}</Text>
        <Text style={[styles.input, {backgroundColor: clr2, color:txtclr2 }]}>{wordArray[1]}</Text>
        <Text style={[styles.input, {backgroundColor: clr3, color:txtclr3 }]}>{wordArray[2]}</Text>
        <Text style={[styles.input, {backgroundColor: clr4, color:txtclr4 }]}>{wordArray[3]}</Text>
        <Text style={[styles.input, {backgroundColor: clr5, color:txtclr5 }]}>{wordArray[4]}</Text>
        </View>
        <View  style={styles.container1}>
        <Text style={[styles.input, {backgroundColor: clr6, color:txtclr6 }]}>{wordArray1[0]}</Text>
        <Text style={[styles.input, {backgroundColor: clr7, color:txtclr7 }]}>{wordArray1[1]}</Text>
        <Text style={[styles.input, {backgroundColor: clr8, color:txtclr8 }]}>{wordArray1[2]}</Text>
        <Text style={[styles.input, {backgroundColor: clr9, color:txtclr9 }]}>{wordArray1[3]}</Text>
        <Text style={[styles.input, {backgroundColor: clr10, color:txtclr10 }]}>{wordArray1[4]}</Text>
        </View>
        <View  style={styles.container1}>
        <Text style={[styles.input, {backgroundColor: clr11, color:txtclr11 }]}>{wordArray2[0]}</Text>
        <Text style={[styles.input, {backgroundColor: clr12, color:txtclr12 }]}>{wordArray2[1]}</Text>
        <Text style={[styles.input, {backgroundColor: clr13, color:txtclr13 }]}>{wordArray2[2]}</Text>
        <Text style={[styles.input, {backgroundColor: clr14, color:txtclr14 }]}>{wordArray2[3]}</Text>
        <Text style={[styles.input, {backgroundColor: clr15, color:txtclr15 }]}>{wordArray2[4]}</Text>
        </View>
        <View  style={styles.container1}>
        <Text style={[styles.input, {backgroundColor: clr16, color:txtclr16 }]}>{wordArray3[0]}</Text>
        <Text style={[styles.input, {backgroundColor: clr17, color:txtclr17 }]}>{wordArray3[1]}</Text>
        <Text style={[styles.input, {backgroundColor: clr18, color:txtclr18 }]}>{wordArray3[2]}</Text>
        <Text style={[styles.input, {backgroundColor: clr19, color:txtclr19 }]}>{wordArray3[3]}</Text>
        <Text style={[styles.input, {backgroundColor: clr20, color:txtclr20 }]}>{wordArray3[4]}</Text>
        </View>
        <View  style={styles.container1}>
        <Text style={[styles.input, {backgroundColor: clr21, color:txtclr21 }]}>{wordArray4[0]}</Text>
        <Text style={[styles.input, {backgroundColor: clr22, color:txtclr22 }]}>{wordArray4[1]}</Text>
        <Text style={[styles.input, {backgroundColor: clr23, color:txtclr23 }]}>{wordArray4[2]}</Text>
        <Text style={[styles.input, {backgroundColor: clr24, color:txtclr24 }]}>{wordArray4[3]}</Text>
        <Text style={[styles.input, {backgroundColor: clr25, color:txtclr25 }]}>{wordArray4[4]}</Text>
        </View>
        </View>
        <Text style={{alignItems:'center', color:'black', fontWeight:'bold', fontSize:'30px'}}>{fail}</Text>
        <Text style={{alignItems:'center', color:'green', fontWeight:'bold', fontSize:'30px'}}>{msg}</Text>
        <View>
        <View  style={styles.container}>
        <TouchableOpacity  onPress={()=>handleOnPress('Q')}><Text style={[styles.keys,{backgroundColor:keyclr17, fontWeight:'bold'}]}>Q</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('W')}><Text style={[styles.keys,{backgroundColor:keyclr23, fontWeight:'bold'}]}>W</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('E')}><Text style={[styles.keys,{backgroundColor:keyclr5, fontWeight:'bold'}]}>E</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('R')}><Text style={[styles.keys,{backgroundColor:keyclr18, fontWeight:'bold'}]}>R</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('T')}><Text style={[styles.keys,{backgroundColor:keyclr20, fontWeight:'bold'}]}>T</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('Y')}><Text style={[styles.keys,{backgroundColor:keyclr25, fontWeight:'bold'}]}>Y</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('U')}><Text style={[styles.keys,{backgroundColor:keyclr21, fontWeight:'bold'}]}>U</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('I')}><Text style={[styles.keys,{backgroundColor:keyclr9, fontWeight:'bold'}]}>I</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('O')}><Text style={[styles.keys,{backgroundColor:keyclr15, fontWeight:'bold'}]}>O</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('P')}><Text style={[styles.keys,{backgroundColor:keyclr16, fontWeight:'bold'}]}>P</Text></TouchableOpacity>
        </View>
        <View  style={styles.container}>
        <TouchableOpacity  onPress={()=>handleOnPress('A')}><Text style={[styles.keys,{backgroundColor:keyclr1, fontWeight:'bold'}]}>A</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('S')}><Text style={[styles.keys,{backgroundColor:keyclr19, fontWeight:'bold'}]}>S</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('D')}><Text style={[styles.keys,{backgroundColor:keyclr4, fontWeight:'bold'}]}>D</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('F')}><Text style={[styles.keys,{backgroundColor:keyclr6, fontWeight:'bold'}]}>F</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('G')}><Text style={[styles.keys,{backgroundColor:keyclr7, fontWeight:'bold'}]}>G</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('H')}><Text style={[styles.keys,{backgroundColor:keyclr8, fontWeight:'bold'}]}>H</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('J')}><Text style={[styles.keys,{backgroundColor:keyclr10, fontWeight:'bold'}]}>J</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('K')}><Text style={[styles.keys,{backgroundColor:keyclr11, fontWeight:'bold'}]}>K</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('L')}><Text style={[styles.keys,{backgroundColor:keyclr12, fontWeight:'bold'}]}>L</Text></TouchableOpacity>
        </View>
        <View  style={styles.container}>
        <TouchableOpacity  onPress={()=>getResult()}><Text style={styles.enter}>Enter</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('Z')}><Text style={[styles.keys,{backgroundColor:keyclr26, fontWeight:'bold'}]}>Z</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('X')}><Text style={[styles.keys,{backgroundColor:keyclr24, fontWeight:'bold'}]}>X</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('C')}><Text style={[styles.keys,{backgroundColor:keyclr3, fontWeight:'bold'}]}>C</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('V')}><Text style={[styles.keys,{backgroundColor:keyclr22, fontWeight:'bold'}]}>V</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('B')}><Text style={[styles.keys,{backgroundColor:keyclr2, fontWeight:'bold'}]}>B</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('N')}><Text style={[styles.keys,{backgroundColor:keyclr14, fontWeight:'bold'}]}>N</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleOnPress('M')}><Text style={[styles.keys,{backgroundColor:keyclr13, fontWeight:'bold'}]}>M</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>handleBackspace()}><Text style={styles.back}>Back</Text></TouchableOpacity>
        </View>
        </View>
         </View>);
}

const styles = StyleSheet.create({
    keys:{
        height:'50px',
        width:'30px',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 10,
        textAlign:'center'
    },
    enter:{
        height:'50px',
        width:'60px',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        justifyContent:'space-between',
        textAlign:'center'

    },
    back:{
        height:'50px',
        width:'60px',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,

    },
    container:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        textAlign:'center',
        textAlignVertical:'bottom'
    },
    container1:{
        alignItems:'center',
        flexDirection:'row',
        alignContent:'center',
        alignSelf:'center',
        textAlign:'center',

    },  
    input:{
        textAlign:'center',
        paddingTop:'10px',
        height:'50px',
        width:'50px',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: '20px',
        fontWeight: 'bold'
    },
    firstBox:{
        
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 100,
    paddingTop:0,
    },
    whole:{
       flexDirection:'column',
       justifyContent:'flex-start',
       alignItems:'center',

    },
    modalBackground: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      alignItems: 'center',
      justifyContent: 'center'
    },
    modalContainer: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16
    },

})