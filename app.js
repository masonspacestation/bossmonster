let bank = 100
let victories = 0
updateStats()

const heroes = [
	{
		name: 'Jet Spacerock',
		type: 'astro',
		damage: 5,
		health: 100
	},
	{
		name: 'Kosmo Ironstag',
		type: 'astro',
		damage: 10,
		health: 50
	}
]

const boss = {
	health: 100,
	maxHealth: 100,
	damage: 5,
	level: 1
}

// let hungerInterval = setInterval(damageHeroes, 3000)

// SECTION damageHeroes, healHero, collectReward
function damageHeroes() {

	heroes.forEach(hero => {
		hero.health -= boss.damage
		if (hero.health < 0) hero.health = 0
		console.log('Hero Health:', hero.name, hero.health)
		console.log('Damage to Heroes:', boss.damage)
		drawHeroStats(hero.health)
	})
}

function healHero(heroName) {
	// debugger
	let heroToHeal = heroes.find(hero => hero.name == heroName)
	console.log("heal: ", heroName)
	if (bank > 25) {
		bank -= 25,
			heroToHeal.health += 50
	}
	console.log(heroToHeal)
	updateStats(heroToHeal)
}

function collectReward() {
	bank += boss.level * 20
	drawBank()
	drawBossHealth(boss.health)
}


// SECTION damageBoss, levelUpBoss
function damageBoss() {
	let teamDamage = 0

	heroes.forEach(hero => {
		teamDamage += hero.damage
	})

	if (teamDamage >= boss.health) {
		victories + 1
		levelUpBoss()
		collectReward()

	} else if (teamDamage < boss.health) {
		boss.health -= teamDamage
	}
	console.log('Damage to Boss:', teamDamage)
	console.log('Boss Health:', boss.health)
}

function levelUpBoss() {
	boss.maxHealth = boss.maxHealth * 1.1
	boss.health = boss.maxHealth
	boss.level += 1
	boss.damage = boss.damage * (.5 * boss.level)
	console.log(boss)
}

// SECTION drawheroHealth, drawBossHealth, drawBank, drawStats

// drawStats will incorporate drawHeroHealth, drawBossHealth, victories, credits, teamHealth

function updateStats(value) {

	drawVictories()
	drawBank()
	drawHeroStats(value)
	drawBossHealth(value)
}

function drawHeroStats(heroHealth) {
	document.getElementById('heroTeamHealth').innerHTML = `<b>❤️: ${heroHealth}</b>`
}

function drawBossHealth(bossHealth) {
	document.getElementById('bossHealth').innerHTML = `<b>🖤: ${bossHealth}</b>`
}

function drawBank() {
	document.getElementById('bank').innerHTML = `<b>Credits: ${bank}</b>`
}

function drawVictories() {
	document.getElementById('victories').innerHTML = `<b>Victories: ${victories}</b>`
}

// switch statement to change boss image

updateStats()

// 🪦
// function damageHeroes() {

// 	heroes.forEach(hero => {
// 		let heroHealth = hero.health -= boss.damage
// 		if (boss.damage >= heroHealth) {
// 			heroHealth = 0
// 		} else if (boss.damage < heroHealth) {
// 			heroHealth -= boss.damage

// 		}
// 		console.log('Hero Health:', heroHealth)
// 		console.log('Damage to Heroes:', boss.damage)
// 	})
// }

// function damageHeroes() {
// 	// let eachHero = heroes.forEach(hero => {
// 	// 	hero.health
// 	// 	let heroHealth = calcDamage(hero)
// 	// })

// 	let hero1 = heroes[0].health
// 	let hero2 = heroes[1].health

// 	if (boss.damage >= hero1) {
// 		hero1 = 0
// 	} else if (boss.damage < hero1) {
// 		hero1 -= boss.damage
// 	}

// 	if (boss.damage >= hero2) {
// 		hero2 = 0
// 	} else if (boss.damage < hero2) {
// 		hero2 -= boss.damage
// 	}

// 	console.log('Hero 1 Health:', hero1)
// 	console.log('Hero 2 Health:', hero2)
// 	console.log('Damage to Heroes:', boss.damage)

// }

// function calcDamage(hero) {

// 	let attackStrength = hero.health -= boss.damage
// 	if (boss.damage >= attackStrength) {
// 		attackStrength = 0
// 	} else if (boss.damage < attackStrength) {
// 		attackStrength -= boss.damage

// 	}
// 	console.log('Hero Health:', attackStrength)
// 	console.log('Damage to Heroes:', boss.damage)
// }

