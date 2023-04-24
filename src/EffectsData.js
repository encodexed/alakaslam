const EffectsData = [
	{
		id: 0,
		name: "Breach",
		counterEffect: 12,
		summary: "Reduces spell resistance",
		compatibleEffects: [10, 17, 29, 11, 22, 25, 18, 19],
		reagents: [0, 17, 30],
		hierarchy: 28,
		potionName: "Essence of Ravage Spell Protection",
		poisonName: "Breaching Poison IX",
		potionEffect:
			"Applies <span class='text-purple-400'>Minor Breach</span> to you, reducing your Spell Resistance by 2974 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies <span class='text-purple-400'>Minor Breach</span> to your target, reducing Spell Resistance by 2974 for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Breach.png",
	},
	{
		id: 1,
		name: "Cowardice",
		counterEffect: 11,
		summary: "Reduces weapon and spell damage",
		compatibleEffects: [19, 21, 14, 12, 22, 3],
		reagents: [2, 3, 32],
		hierarchy: 21,
		potionName: "Essence of Cowardice",
		poisonName: "Cowardice Poison IX",
		potionEffect:
			"Applies <span class='text-purple-400'>Minor Cowardice</span> to you, reducing your Weapon and Spell Damage by 215 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies <span class='text-purple-400'>Minor Cowardice</span> to your target, reducing their Weapon and Spell Damage by 215 for 6.4 seconds.",
		src: "/images/effects/Cowardice.png",
	},
	{
		id: 2,
		name: "Defile",
		counterEffect: 29,
		summary: "Reduces healing taken",
		compatibleEffects: [12, 9, 30, 15, 21, 8, 10, 17, 18, 7, 14],
		reagents: [6, 11, 20, 22, 26],
		hierarchy: 23,
		potionName: "Essence of Defile",
		poisonName: "Defiling Poison IX",
		potionEffect:
			"Grants you <span class='text-purple-400'>Minor Defile</span>, reducing your healing taken by 8% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Defile</span>, reducing healing your victim takes by 8% for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Defile.png",
	},
	{
		id: 3,
		name: "Detection",
		counterEffect: 14,
		summary: "Detects invisible units",
		compatibleEffects: [26, 19, 23, 22, 11, 18, 6, 4, 29, 1, 12, 31, 9, 28],
		reagents: [5, 8, 28, 32, 33],
		hierarchy: 8,
		potionName: "Essence of Detection",
		poisonName: "Stealth-Draining Poison IX",
		potionEffect:
			"Increase your Stealth Detection by 20 meters for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Exposes your victim, preventing them from stealthing for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Detection.png",
	},
	{
		id: 4,
		name: "Enervation",
		counterEffect: 31,
		summary: "Reduces critical damage",
		compatibleEffects: [22, 8, 24, 16, 20, 10, 18, 27, 14, 6, 3, 29],
		reagents: [12, 16, 23, 28],
		hierarchy: 20,
		potionName: "Essence of Ravage Weapon Critical",
		poisonName: "Enervating Poison IX",
		potionEffect:
			"Applies <span class='text-purple-400'>Minor Enervation</span> to you, reducing your critical damage by 12% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies <span class='text-purple-400'>Minor Enervation</span> to your victim, reducing all Critical Damage by 12% for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Enervation.png",
	},
	{
		id: 5,
		name: "Entrapment",
		counterEffect: 28,
		summary: "Stuns/immobilises the target",
		compatibleEffects: [18, 19, 20, 21, 25, 31],
		reagents: [14, 31],
		hierarchy: 29,
		potionName: "Essence of Stun",
		poisonName: "Entrapping Poison IX",
		potionEffect:
			"<span class='text-purple-400'>Stuns</span> for 15.6 seconds. (45 second cooldown)",
		poisonEffect:
			"<span class='text-purple-400'>Immobilizes</span> your victim for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Entrapment.png",
	},
	{
		id: 6,
		name: "Fracture",
		counterEffect: 10,
		summary: "Reduces physical resistance",
		compatibleEffects: [13, 23, 31, 18, 20, 4, 3, 29],
		reagents: [13, 27, 28],
		hierarchy: 27,
		potionName: "Essence of Ravage Armor",
		poisonName: "Fracturing Poison IX",
		potionEffect:
			"Applies <span class='text-purple-400'>Minor Fracture</span> to you, reducing your Physical Resistance by 1320 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies <span class='text-purple-400'>Minor Fracture</span> to your victim, reducing Physical Resistance by 1320 for 6.4 seconds. (10 second cooldown)",
		src: "/images/effects/Fracture.png",
	},
	{
		id: 7,
		name: "Gradual Ravage Health",
		counterEffect: 15,
		summary: "Drains health over a duration",
		compatibleEffects: [26, 25, 21, 20, 30, 29, 18, 17, 2],
		reagents: [9, 15, 22],
		hierarchy: 30,
		potionName: "Essence of Creeping Ravage Health",
		poisonName: "Gradual Ravage Health Poison IX",
		potionEffect:
			"Ravage 1011 <span class='text-red-500'>Health</span> per second for 48.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Deals 871 <span class='text-emerald-700'>Poison</span> damage per second for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Gradual_Ravage_Health.png",
	},
	{
		id: 8,
		name: "Heroism",
		counterEffect: 26,
		summary: "Increases ultimate generation, inflicts healing absorption",
		compatibleEffects: [30, 14, 29, 15, 21, 2, 22, 4, 24],
		reagents: [10, 11, 12],
		hierarchy: 24,
		potionName: "Essence of Heroism",
		poisonName: "Traumatic Poison IX",
		potionEffect:
			"Grants you <span class='text-amber-500'>Minor Heroism</span> restoring 1 Ultimate every 1.5 seconds for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts 2000 <span class='text-purple-400'>Heal Absorption</span> to your target, negating healing they receive for 5.5 seconds, and grants you <span class='text-amber-500'>Minor Heroism</span>, granting you 1 Ultimate every 1.5 seconds for 7.2 seconds. (10s cooldown)",
		src: "/images/effects/Heroism.png",
	},
	{
		id: 9,
		name: "Hindrance",
		counterEffect: 24,
		summary: "Reduces movement speed",
		compatibleEffects: [12, 30, 2, 20, 16, 21, 14, 15, 31, 3, 28],
		reagents: [6, 18, 26, 33],
		hierarchy: 7,
		potionName: "Essence of Slow",
		poisonName: "Hindering Poison IX",
		potionEffect:
			"Applies <span class='text-purple-400'>Hindrance</span> to you, reducing Movement Speed by 40% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies <span class='text-purple-400'>Hindrance</span> to your target, reducing Movement Speed by 40% for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Hindrance.png",
	},
	{
		id: 10,
		name: "Increase Armor",
		counterEffect: 6,
		summary: "Alters physical resistance",
		compatibleEffects: [0, 17, 29, 16, 20, 4, 21, 23, 12, 2],
		reagents: [0, 16, 19, 20],
		hierarchy: 12,
		potionName: "Essence of Armor",
		poisonName: "Resolve-Draining Poison IX",
		potionEffect:
			"Increases your <span class='text-amber-500'>Physical Resistance</span> by 5280 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Reduces your target's Physical Resistance by 1320, and increases your Physical Resistance by 1320 for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Increase_Armor.png",
	},
	{
		id: 11,
		name: "Increase Spell Power",
		counterEffect: 1,
		summary: "Alters spell power",
		compatibleEffects: [22, 18, 3, 0, 25, 19],
		reagents: [8, 17, 30],
		hierarchy: 26,
		potionName: "Essence of Spell Power",
		poisonName: "Sorcery-Draining Poison IX",
		potionEffect:
			"Grants <span class='text-amber-500'>Major Sorcery</span> which increases your Spell Damage by 20% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Cowardice</span> to your target and grants you <span class='text-amber-500'>Minor Sorcery</span>, reducing their Weapon and Spell Damage by 215 and increasing your Spell Power by 10% for 3.5 seconds.",
		src: "/images/effects/Increase_Spell_Power.png",
	},
	{
		id: 12,
		name: "Increase Spell Resist",
		counterEffect: 0,
		summary: "Alters spell resistance",
		compatibleEffects: [21, 1, 22, 9, 30, 2, 10, 17, 19, 3],
		reagents: [3, 6, 20, 32],
		hierarchy: 13,
		potionName: "Essence of Spell Protection",
		poisonName: "Ward-Draining Poison IX",
		potionEffect:
			"Increases your Spell Resistance by 5280 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Reduces your target's Spell Resistance by 1320, and increases your Spell Resistance by 1320 for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Increase_Spell_Resist.png",
	},
	{
		id: 13,
		name: "Increase Weapon Power",
		counterEffect: 16,
		summary: "Alters physical power",
		compatibleEffects: [23, 18, 24, 6, 31, 20],
		reagents: [1, 13, 27],
		hierarchy: 25,
		potionName: "Essence of Weapon Power",
		poisonName: "Brutality-Draining Poison IX",
		potionEffect:
			"Grants <span class='text-amber-500'>Major Brutality</span> which increases your Weapon Damage by 20% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Maim</span> to your target and grants you <span class='text-amber-500'>Minor Brutality</span>, reducing their Damage by 5% and increasing your Weapon Damage by 10% for 3.5 seconds. (10 second cooldown)",
		src: "/images/effects/Increase_Weapon_Power.png",
	},
	{
		id: 14,
		name: "Invisible",
		counterEffect: 3,
		summary: "Lets you vanish, or marks your victim",
		compatibleEffects: [
			19, 1, 21, 8, 30, 29, 25, 24, 28, 18, 27, 4, 9, 15, 2,
		],
		reagents: [2, 10, 21, 23, 26],
		hierarchy: 9,
		potionName: "Essence of Invisibility",
		poisonName: "Conspicuous Poison IX",
		potionEffect: "Vanish for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Marks your victim, permitting you to see them while stealthed for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Invisible.png",
	},
	{
		id: 15,
		name: "Lingering Health",
		counterEffect: 7,
		summary: "Restores health over a duration",
		compatibleEffects: [21, 27, 29, 8, 2, 24, 17, 19, 30, 9, 14],
		reagents: [4, 11, 24, 25, 26],
		hierarchy: 10,
		potionName: "Essence of Lingering Health",
		poisonName: "Gradual Health Drain Poison IX",
		potionEffect:
			"Restore 898 <span class='text-red-500'>Health</span> per second for 16.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Deals 871 <span class='text-emerald-700'>Poison</span> damage per second to your target and restores 822 <span class='text-red-500'>Health</span> per second to you for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Lingering_Health.png",
	},
	{
		id: 16,
		name: "Maim",
		counterEffect: 13,
		summary: "Reduces damage output",
		compatibleEffects: [20, 10, 4, 21, 9, 23],
		reagents: [16, 18, 19],
		hierarchy: 22,
		potionName: "Essence of Ravage Weapon Power",
		poisonName: "Maiming Poison IX",
		potionEffect:
			"Applies <span class='text-purple-400'>Minor Maim</span> to you, reducing all damage you deal by 5% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies <span class='text-purple-400'>Minor Maim</span>, reducing your victim's Damage by 5% for 3.5 seconds. (10 second cooldown)",
		src: "/images/effects/Maim.png",
	},
	{
		id: 17,
		name: "Protection",
		counterEffect: 30,
		summary: "Reduces damage taken",
		compatibleEffects: [0, 10, 29, 12, 2, 18, 7, 15, 24, 26, 22],
		reagents: [0, 20, 22, 24, 29],
		hierarchy: 11,
		potionName: "Essence of Protection",
		poisonName: "Protection-Reversing Poison IX",
		potionEffect:
			"Grants you <span class='text-amber-500'>Minor Protection</span>, reducing your damage taken by 5% for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Vulnerability</span> to your target and grants you <span class='text-amber-500'>Minor Protection</span>, increasing damage your victim takes by 5% and reducing your damage taken by 5% for 2.5 seconds. (10 second cooldown)",
		src: "/images/effects/Protection.png",
	},
	{
		id: 18,
		name: "Ravage Health",
		counterEffect: 21,
		summary: "Drains health over a duration",
		compatibleEffects: [
			23, 13, 24, 22, 11, 3, 19, 20, 5, 17, 7, 2, 27, 4, 14, 6, 26, 0,
		],
		reagents: [1, 8, 14, 22, 23, 27, 29, 30],
		hierarchy: 1,
		potionName: "Essence of Ravage Health",
		poisonName: "Damage Health Poison IX",
		potionEffect:
			"Ravage 8931 <span class='text-red-500'>Health</span> immediately.<br>Ravage an additional 535 <span class='text-red-500'>Health</span> over 48.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Deals 1342 <span class='text-emerald-700'>Poison</span> damage per second for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Ravage_Health.png",
	},
	{
		id: 19,
		name: "Ravage Magicka",
		counterEffect: 22,
		summary: "Increases magicka costs",
		compatibleEffects: [
			1, 21, 14, 26, 23, 3, 18, 20, 5, 24, 30, 15, 0, 11, 12,
		],
		reagents: [2, 5, 14, 25, 30, 32],
		hierarchy: 3,
		potionName: "Essence of Ravage Magicka",
		poisonName: "Damage Magicka Poison IX",
		potionEffect:
			"Increases the cost of <span class='text-sky-500'>Magicka</span> abilities by 215% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Increases the cost of your victim's <span class='text-sky-500'>Magicka</span> abilities by 10% for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Ravage_Magicka.png",
	},
	{
		id: 20,
		name: "Ravage Stamina",
		counterEffect: 23,
		summary: "Increases stamina costs",
		compatibleEffects: [18, 19, 5, 30, 7, 29, 16, 10, 4, 21, 9, 6, 13],
		reagents: [14, 15, 16, 18, 27],
		hierarchy: 4,
		potionName: "Essence of Ravage Stamina",
		poisonName: "Damage Stamina Poison IX",
		potionEffect:
			"Increases the cost of <span class='text-green-500'>Stamina</span> abilities by 215% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Increases the cost of your victim's <span class='text-green-500'>Stamina</span> abilities by 10% for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Ravage_Stamina.png",
	},
	{
		id: 21,
		name: "Restore Health",
		counterEffect: 18,
		summary:
			"Restores/drains health immediately and over time, grants major fortitude",
		compatibleEffects: [
			19, 1, 14, 12, 22, 15, 27, 29, 23, 28, 26, 25, 7, 8, 2, 20, 16, 9, 10,
			31, 5,
		],
		reagents: [2, 3, 4, 7, 9, 11, 18, 19, 31],
		hierarchy: 2,
		potionName: "Essence of Health",
		poisonName: "Drain Health Poison IX",
		potionEffect:
			"Restore 8369 <span class='text-red-500'>Health</span> immediately.<br>Grants <span class='text-amber-500'>Major Fortitude</span> which increases your <span class='text-red-500'>Health Recovery</span> by 30% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Drains Health from your target, dealing 1342 <span class='text-emerald-700'>Poison</span> damage to your target and restoring 1266 <span class='text-red-500'>Health</span> to you per second for 2.4 seconds. (10 second cooldown)",
		src: "/images/effects/Restore_Health.png",
	},
	{
		id: 22,
		name: "Restore Magicka",
		counterEffect: 19,
		summary:
			"Restores/drains magicka immediately and over time, grants major intellect",
		compatibleEffects: [
			12, 21, 1, 23, 28, 11, 18, 3, 4, 8, 24, 0, 25, 26, 17,
		],

		reagents: [3, 7, 8, 12, 17, 29],
		hierarchy: 18,
		potionName: "Essence of Magicka",
		poisonName: "Drain Magicka Poison IX",
		potionEffect:
			"Restore 7582 <span class='text-sky-500'>Magicka</span> immediately.<br>Grants <span class='text-amber-500'>Major Intellect</span> which increases your <span class='text-sky-500'>Magicka Recovery</span> by 30% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Drains <span class='text-sky-500'>Magicka</span> from your target, increasing the cost of their <span class='text-sky-500'>Magicka</span> abilities by 10%, and restores 238 <span class='text-sky-500'>Magicka</span> to you per second for 3.5 seconds. (10 second cooldown)",
		src: "/images/effects/Restore_Magicka.png",
	},
	{
		id: 23,
		name: "Restore Stamina",
		counterEffect: 20,
		summary:
			"Restores/drains stamina immediately and over time, grants major endurance",
		compatibleEffects: [13, 18, 24, 26, 19, 3, 21, 22, 28, 6, 31, 10, 16],
		reagents: [1, 5, 7, 13, 19],
		hierarchy: 19,
		potionName: "Essence of Stamina",
		poisonName: "Drain Stamina Poison IX",
		potionEffect:
			"Restore 7582 <span class='text-green-500'>Stamina</span> immediately.<br>Grants <span class='text-amber-500'>Major Endurance</span> which increases your <span class='text-green-500'>Stamina Recovery</span> by 30% for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Drains <span class='text-green-500'>Stamina</span> from your target, increasing the cost of their <span class='text-green-500'>Stamina</span> abilities by 10%, and restores 238 <span class='text-green-500'>Stamina</span> to you per second for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Restore_Stamina.png",
	},
	{
		id: 24,
		name: "Speed",
		counterEffect: 9,
		summary: "Alters movement speed",
		compatibleEffects: [23, 13, 18, 22, 4, 8, 25, 14, 28, 15, 29, 17, 19, 30],
		reagents: [1, 12, 21, 24, 25],
		hierarchy: 6,
		potionName: "Essence of Speed",
		poisonName: "Speed-Draining Poison IX",
		potionEffect:
			"Grants <span class='text-amber-500'>Major Expedition</span> which increases your Movement Speed by 30% for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Hindrance</span> to your target and grants you <span class='text-amber-500'>Major Expedition</span>, reducing their Movement Speed by 40% and increasing your Movement Speed by 30% for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Speed.png",
	},
	{
		id: 25,
		name: "Spell Critical",
		counterEffect: 27,
		summary: "Alters spell critical",
		compatibleEffects: [26, 7, 21, 11, 22, 0, 24, 14, 28, 31, 5],
		reagents: [9, 17, 21, 31],
		hierarchy: 14,
		potionName: "Essence of Spell Critical",
		poisonName: "Prophecy-Draining Poison IX",
		potionEffect:
			"Grants <span class='text-amber-500'>Major Prophecy</span> which gives you 2629 Spell Critical Rating for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Uncertainty</span> to your target and grants you <span class='text-amber-500'>Minor Prophecy</span>, reducing their Weapon and Spell Critical by 1320 and increasing your Spell Critical by 1314 for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Spell_Critical.png",
	},
	{
		id: 26,
		name: "Timidity",
		counterEffect: 8,
		summary: "Removes generated ultimate",
		compatibleEffects: [19, 23, 3, 25, 7, 21, 18, 22, 17],
		reagents: [5, 9, 29],
		hierarchy: 32,
		potionName: "Essence of Timidity",
		poisonName: "Timidity Poison IX",
		potionEffect:
			"Grants you <span class='text-purple-400'>Minor Timidity</span>, consuming 1 <span class='text-pink-400'>Ultimate</span> every 1.5 seconds for 47.6 seconds. (45s cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Timidity</span> on your target, consuming 1 <span class='text-pink-400'>Ultimate</span> every 1.5 seconds for 2.3 seconds. (10s cooldown)",
		src: "/images/effects/Timidity.png",
	},
	{
		id: 27,
		name: "Uncertainty",
		counterEffect: 25,
		summary: "Reduces critical chance rate",
		compatibleEffects: [21, 15, 29, 18, 4, 14],
		reagents: [4, 23],
		hierarchy: 31,
		potionName: "Essence of Ravage Spell Crit",
		poisonName: "Uncertainty Poison IX",
		potionEffect:
			"Applies <span class='text-purple-400'>Minor Uncertainty</span> to you, reducing all critical ratings by 1320 for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Applies <span class='text-purple-400'>Minor Uncertainty</span> to your victim, reducing all critical ratings by 1320 for 10.5 seconds. (10 second cooldown)",
		src: "/images/effects/Uncertainty.png",
	},
	{
		id: 28,
		name: "Unstoppable",
		counterEffect: 5,
		summary: "Grants crowd control immunity, immobilises",
		compatibleEffects: [21, 22, 23, 25, 24, 14, 31, 9, 3],
		reagents: [7, 21, 33],
		hierarchy: 16,
		potionName: "Essence of Immovability",
		poisonName: "Escapist's Poison IX",
		potionEffect:
			"Become immune to knockback and disabling effects for 10.4 seconds. (45 second cooldown)",
		poisonEffect:
			"<span class='text-purple-400'>Immobilizes</span> your target and grants you <span class='text-amber-500'>Unstoppable</span>, rendering you immune to control effects for 3.9 seconds. This poison will also break you free of ongoing control effects. (10 second cooldown)",
		src: "/images/effects/Unstoppable.png",
	},
	{
		id: 29,
		name: "Vitality",
		counterEffect: 2,
		summary: "Increases healing taken",
		compatibleEffects: [0, 10, 17, 21, 15, 27, 8, 30, 14, 20, 7, 24, 6, 4, 3],
		reagents: [0, 4, 10, 15, 24, 28],
		hierarchy: 5,
		potionName: "Essence of Vitality",
		poisonName: "Vitality-Draining Poison IX",
		potionEffect:
			"Grants you <span class='text-amber-500'>Major Vitality</span>, increasing your healing taken by 16% for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Defile</span> to your target and grants you <span class='text-amber-500'>Minor Vitality</span>, reducing their healing taken by 8% while increasing your healing taken by 8% for 3.9 seconds. (10 second cooldown)",
		src: "/images/effects/Vitality.png",
	},
	{
		id: 30,
		name: "Vulnerability",
		counterEffect: 17,
		summary: "Increases damage taken",
		compatibleEffects: [12, 9, 2, 8, 14, 29, 20, 7, 19, 24, 15],
		reagents: [6, 10, 15, 25],
		hierarchy: 17,
		potionName: "Essence of Vulnerability",
		poisonName: "Vulnerability Poison IX",
		potionEffect:
			"Grants you <span class='text-purple-400'>Minor Vulnerability</span>, increasing your damage taken by 5% for 15.7 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Vulnerability</span>, increasing damage your victim takes by 5% for 3.9 seconds. (10 second cooldown)",
		src: "/images/effects/Vulnerability.png",
	},
	{
		id: 31,
		name: "Weapon Critical",
		counterEffect: 4,
		summary: "Alters weapon critical",
		compatibleEffects: [13, 23, 6, 21, 25, 5, 9, 3, 28],
		reagents: [13, 31, 33],
		hierarchy: 15,
		potionName: "Essence of Weapon Crit",
		poisonName: "Savagery-Draining Poison IX",
		potionEffect:
			"Grants you <span class='text-amber-500'>Major Savagery</span> which gives you 2629 Weapon Critical Rating for 47.6 seconds. (45 second cooldown)",
		poisonEffect:
			"Inflicts <span class='text-purple-400'>Minor Enervation</span> to your target and grants you <span class='text-amber-500'>Minor Savagery</span>, reducing their Critical Damage by 10% and increasing your Weapon Critical by 1314 for 5.5 seconds. (10 second cooldown)",
		src: "/images/effects/Weapon_Critical.png",
	},
];

export default EffectsData;
