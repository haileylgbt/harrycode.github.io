let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
]

let words = [
    "accommodation",
    "accomplished",
    "accuracy",
    "achievement",
    "adjustment",
    "administrator",
    "adult",
    "advance",
    "advancement",
    "affair",
    "affection",
    "affectionate",
    "aging",
    "agony",
    "alert",
    "alone",
    "altar",
    "alternative",
    "amateur",
    "ambassador",
    "ambitious",
    "analysis",
    "angel",
    "angry",
    "animation",
    "antenna",
    "antique",
    "anxiety",
    "appearance",
    "appropriate",
    "architecture",
    "arena",
    "arsenal",
    "artificial",
    "asset",
    "assistant",
    "associate",
    "asylum",
    "athletic",
    "attached",
    "attitude",
    "authentic",
    "autumn",
    "awful",
    "awkward",
    "backup",
    "baggage",
    "balloon",
    "bankrupt",
    "baseball",
    "battle",
    "beast",
    "beforehand",
    "beverage",
    "bicycle",
    "biology",
    "birth",
    "blank",
    "blessing",
    "bonus",
    "bought",
    "bound",
    "boundary",
    "bowling",
    "boxing",
    "brand",
    "brave",
    "breakdown",
    "breaking",
    "bright",
    "brightness",
    "brink",
    "bronze",
    "browser",
    "brute",
    "budget",
    "building",
    "bully",
    "burning",
    "cabbage",
    "calculator",
    "campus",
    "candidate",
    "canvas",
    "casting",
    "category",
    "century",
    "certification",
    "championship",
    "chemical",
    "chess",
    "chosen",
    "church",
    "civil",
    "civilian",
    "civility",
    "classification",
    "climate",
    "closet",
    "clown",
    "collect",
    "collector",
    "color",
    "combat",
    "comedian",
    "comic",
    "commentary",
    "compact",
    "compass",
    "complaint",
    "completion",
    "complex",
    "complexity",
    "computer",
    "confession",
    "confusion",
    "connected",
    "consumption",
    "content",
    "controller",
    "conversation",
    "converter",
    "copper",
    "corpse",
    "corrupt",
    "covert",
    "creature",
    "criminal",
    "crimson",
    "criticism",
    "crown",
    "crushed",
    "crystal",
    "cultural",
    "curiosity",
    "daily",
    "daughter",
    "decade",
    "declaration",
    "deliver",
    "density",
    "depression",
    "description",
    "desirable",
    "desktop",
    "destruction",
    "determination",
    "determined",
    "dictator",
    "dictionary",
    "dinner",
    "diplomacy",
    "director",
    "discovery",
    "education",
    "efficiency",
    "election",
    "elevator",
    "english",
    "enemy",
    "envoy",
    "equipment",
    "exception",
    "excitement",
    "existence",
    "extra",
    "famous",
    "favourite",
    "fearful",
    "fiction",
    "fighter",
    "finished",
    "finnish",
    "football",
    "footprint",
    "forced",
    "forehead",
    "foreign",
    "fossil",
    "freedom",
    "friendship",
    "frozen",
    "frustration",
    "function",
    "funny",
    "futile",
    "generation",
    "generator",
    "generous",
    "government",
    "graduated",
    "graphics",
    "grief",
    "growing",
    "guest",
    "guidance",
    "hangman",
    "hardship",
    "harmony",
    "heart",
    "height",
    "hierarchy",
    "history",
    "hobby",
    "holiday",
    "honest",
    "house",
    "humanity",
    "hungry",
    "hunting",
    "ideology",
    "illusion",
    "illustration",
    "imagination",
    "immigrant",
    "important",
    "impossible",
    "improvement",
    "income",
    "innocent",
    "innovation",
    "insanity",
    "insect",
    "inspiration",
    "instruction",
    "interrupt",
    "invasion",
    "invitation",
    "island",
    "journalism",
    "keyboard",
    "knitting",
    "labour",
    "landscape",
    "laptop",
    "laundry",
    "leadership",
    "legal",
    "legendary",
    "library",
    "lighting",
    "lightning",
    "limit",
    "limitation",
    "loose",
    "luxury",
    "lying",
    "machinery",
    "magazine",
    "magic",
    "magnificent",
    "makeup",
    "mandatory",
    "manual",
    "marked",
    "marketplace",
    "master",
    "masterpiece",
    "mathematics",
    "media",
    "migration",
    "mining",
    "mistaken",
    "mixture",
    "moderator",
    "modern",
    "modest",
    "monthly",
    "monument",
    "morning",
    "motor",
    "mouse",
    "mountain",
    "music",
    "musical",
    "mythology",
    "natural",
    "navigator",
    "nephew",
    "neutrality",
    "noisy",
    "north",
    "northeast",
    "northwest",
    "notebook",
    "number",
    "nutrition",
    "ocean",
    "olive",
    "onion",
    "opening",
    "opponent",
    "orange",
    "organic",
    "organization",
    "organizer",
    "oversight",
    "overweight",
    "packaging",
    "padding",
    "painting",
    "paranoid",
    "partisan",
    "party",
    "peaceful",
    "pencil",
    "percentage",
    "performance",
    "personal",
    "personality",
    "perspective",
    "philosophy",
    "photography",
    "piracy",
    "plausible",
    "playground",
    "pleasant",
    "pocket",
    "polished",
    "polite",
    "politician",
    "popularity",
    "portfolio",
    "poverty",
    "power",
    "practical",
    "prayer",
    "precious",
    "presentation",
    "pretty",
    "private",
    "professor",
    "progression",
    "promise",
    "proof",
    "propaganda",
    "protective",
    "prototype",
    "puppet",
    "purple",
    "quiet",
    "railway",
    "ratio",
    "reader",
    "reasoning",
    "rebel",
    "rebellion",
    "recession",
    "recipe",
    "recognition",
    "refrigerator",
    "registration",
    "relief",
    "remarkable",
    "remorse",
    "repetition",
    "reputation",
    "resemblance",
    "resolution",
    "resource",
    "retirement",
    "river",
    "romance",
    "rotten",
    "royalty",
    "running",
    "sadness",
    "salary",
    "satellite",
    "sausage",
    "scattered",
    "school",
    "security",
    "select",
    "selective",
    "selfish",
    "senior",
    "sensation",
    "sensitive",
    "series",
    "serving",
    "session",
    "severity",
    "shadow",
    "sheep",
    "sheet",
    "sheriff",
    "shipment",
    "shocking",
    "short",
    "shotgun",
    "silver",
    "skate",
    "skeleton",
    "skill",
    "sleeping",
    "social",
    "solitary",
    "solitude",
    "sophisticated",
    "sorrow",
    "south",
    "southeast",
    "southwest",
    "speaker",
    "spelling",
    "spider",
    "sport",
    "standard",
    "state",
    "status",
    "statue",
    "steam",
    "steep",
    "stereo",
    "stone",
    "storage",
    "store",
    "stormy",
    "straw",
    "strong",
    "stubborn",
    "stuck",
    "student",
    "succession",
    "suffering",
    "summary",
    "summer",
    "sunset",
    "superintendent",
    "surgery",
    "suspicious",
    "Swedish",
    "tactical",
    "tasty",
    "taxation",
    "technique",
    "technology",
    "template",
    "terminal",
    "termination",
    "terrible",
    "territory",
    "terror",
    "theater",
    "theory",
    "thief",
    "threatening",
    "throat",
    "tired",
    "tolerance",
    "topping",
    "total",
    "tracker",
    "traitor",
    "transparent",
    "treasury",
    "treatment",
    "trust",
    "tuition",
    "tutorial",
    "umbrella",
    "underground",
    "understanding",
    "underwater",
    "universe",
    "university",
    "unstable",
    "usage",
    "utility",
    "vaccine",
    "variety",
    "vegetarian",
    "veteran",
    "viable",
    "vicinity",
    "video",
    "villain",
    "vintage",
    "violent",
    "virus",
    "visibility",
    "volatile",
    "volcano",
    "wardrobe",
    "warfare",
    "warning",
    "warrior",
    "weekly",
    "whole",
    "wilderness",
    "wooden",
    "world",
    "worthless",
    "wound",
    "wretched",
    "writer",
    "writing",
    "wrong",
    "young"
]

function newGame() {
    
}