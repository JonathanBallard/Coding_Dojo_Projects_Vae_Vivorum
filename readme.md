
#### Current As Of 3/10/20

[My GitHub](https://github.com/JonathanBallard/)
[My Repo](https://github.com/JonathanBallard/Coding_Dojo_Projects_Vae_Vivorum.git)

# **Vae Vivorum**

*Shmup  
Based on the pre-bootcamp fighter jet game*  

# All Features

## Features - MVP

- Create Player Ship  
- Create Enemies Ships  
- Movement  
- Fire Weapons  
- Enemies  
- Destroy Enemies  
- Take Hits from Enemies  
- Win After certain number of enemies dead  
- XP gain  
- Score gain  
- Stored player info in database  

## Additional Features - Product Backlog

### Maps

- Background art for first map **DONE**  
- Different Maps with different background art  
- Select Maps in maps.html  
- Add Map modifiers  
- Add difficulties to maps  
- Rewards for map completion  
- Enemy spawns are randomized **DONE**  
- Enemy spawns are randomized based on difficulty slider  

### Weapons

- Different Weapons  
- Change Weapons out in equipment.html  

### Ships

- Different Ships  
- Different stats for each ship  
- Change ships on ships.html  

### RPG Elements

- Gain levels based on xp **DONE**  
- Gain passive ability points to spend in player.html **DONE**  
- Active Abilities to Select in player.html  
- Active Abilities unlocked based on player level  

### RPG Equipment

- Gear Drops off of enemies  
- Able to buy gear in a store  
- Different Slot arrangements for each Ship  
- Ships have abilities as well  
- Equipment has abilities as well  

### ROG Loot

- Items have Randomized Statistics and Abilities  

---

# MVP TODO  

- TEST MODELS  
- Differentiate between Game and Viewport  
- Fix mouse movement top of screen  
- Look at better hitboxes  
- Resize player ship for dashboard/index  
- Game world larger than viewport so enemies can spawn little bit at a time not all at once  
- Fix line formation Spawning  
- Missiles hitbox too small  
- Icons for future abilities: bolt, bomb, biohazard, burn, chess-rook, cog, cogs, coins, crosshairs, fighter-jet, fire, fire-alt, flask, bullseye  
- Add in 2 more enemy weapon types  
- 'extend' for classes  
- Create Boss Enemy, spawns after a certain score, or on a certain map/difficulty only  
- Create .py script to add a bunch of entries to the database **DONE**  
- Change Background Image Randomly (??) **CANCELLED**  
- Create difficulty slider OR set up map.html **DONE**  
- Statistics incorrectly calculating (score/money/xp all exactly doubled, no levels gained) **DONE**  
- Make all ships smaller (??) **CANCELLED**  
- Reduce the height of the screen **DONE**  
- Bcrypt everything important in session **DONE, NOTHING NEEDED**  
- Responsive Game Screen **DONE**  
- Come up with more lines for the overview page **DONE**  
- remove all alert()'s **DONE**  
- Find out what's causing .00000000000001 damage **DONE, problem was with shieldRechargeAmount**  
- Performance loss around 100 kills **DONE**  
- Implement Story **DONE**  
- Change endGame() to be called in GameLoop(), and logic checking for victory/loss conditions **DONE**  
- Shields recharging way too high **DONE**  
- Shields should stop recharging when you take damage **DONE**  
- Shields no longer recharging **DONE**  
- Overview problems **DONE**  
- Score not showing up properly on overview **DONE**  
- Game Still Crashing **DONE I THINK**  
- Ensure it works on all screen sizes **DONE - DESKTOP SCREEN SIZES**  
- Shouldnt be able to keep firing while reloading chaingun **DONE**  
- cleanup projectiles outside of viewport **DONE**  
- Ensure all instances of the word 'dashboard' are replaced with 'Space Dock' and all use correct anchor image **DONE**  
- torpedo/chaingunROund impact crashes game **DONE**  
- Must test ALL modifier variables in classes.js (such as this.damage = 25 * enemyDamageMultiplier)  
- Enemies spawn in more random edges **DONE**  
- Lock Passives Based on Level (??) **CANCELLED**  
- Implement player levels **DONE**    
- Implement passive abilities **DONE**  
- Create overview.html **DONE**  
- /outputPassives button is sending GET requests not POST **DONE**  
- Add XP til next level progress bar **DONE**  
- Fix ability purchase buttons on overview.html **DONE**  
- Change stats for each enemy type **DONE**  
- Enemies gain health based on level & difficulty **DONE**  
- More enemies shoot down **DONE**  
- Implement player victory **DONE**  
- Need Victory screen **DONE**  
- Finish victory() function **DONE**  
- Need ENDGAME screen **DONE**  
- Finish gameOver() function **DONE**  
- Pass database info using JSON but first need to enter everything into DB **CANCELLED**  
- /overview statistics aren't loading in until a page reload **DONE FOUND A WORKAROUND**  
- Add sound mute function **DONE**  
- Add in money gain **DONE**  
- Pass info from JavaScript to Python using JSON **DONE**  
- Fix AJAX/JSON **DONE**  
- Pass info from JavaScript to Python using a hidden form **CANCELLED**  
- Background Image **DONE**  
- Change img for torpedo **DONE**  
- Find sounds for chaingun firing & empty **DONE**  
- Add random element to chaingun's LEFT axis (inaccuracy) **DONE**  
- Make some enemies fire multiple times **DONE**  
- Dead enemies are still shooting **DONE**  
- Make enemies fire at you **DONE**  
- Take Armor into account in damage calculations **DONE**  
- Break apart munitions images **DONE**  
- new img for missile **DONE**  
- current missile img to be used as enemy fire **DONE**  
- Illusion of map motion **CANCELLED**  
- Shields recharge way too fast **DONE, DON'T KNOW HOW, BUT DONE**  
- Hook up sounds **DONE**  
- Create Index.html Registration & Login system **DONE**  
- Create Models/Relationships **DONE**  
- Add Footer to each page with my info **DONE**  
- Create dashboard.html **DONE**  
- Player Ship image **DONE**  
- Enemy ship images **DONE**  
- Player gains XP **DONE**  
- Add XP component **DONE**  
- Upgrades based on xp **DONE**  
- Find out why spaceship.png isn't showing up on game.html **DONE**  
- Create game.html **DONE**  
- Create game.js  **DONE**  
- Create Weapon Types **CANCELLED**  
- Power-ups to swap weapons (???) **CANCELLED**  
- Differentiate between enemy and friendly fires **DONE**  
- Stop Enemies when they reach bottom of game area **DONE**  
- Change deleteEnemies() function to delete whenever enemy is out of bounds, not JUST bottom of screen **DONE**  
- When enemies hit, they die **DONE**  
- proper collision detection **DONE**  
- TEST COLLISION DETECTION, Also known as, FIX COLLISION DETECTION **DONE**  
- Enemies move left & right & up as well **DONE, EXCEPT THEY DON'T MOVE UP**  
- When enemy hits you, you take damage, Ramming **DONE**  
- When hit by enemy fire lose health/armor **DONE**  
- Finish spawnEnemyWave(), decide what type of enemy to spawn **DONE**  
- Armor and Health numbers on screen **DONE**  
- Player can move across the whole map **DONE**  
- Convert to OOP **DONE**  
- Shields recharge **DONE**  
- Change movement to use class methods **CANCELLED**  
- Finish adding Score and +kills to player object **DONE**  
- Fix shieldRechargeDelay (maybe AJAX?) **DONE**  
- Multiple kinds of enemies **DONE**  
- Should be able to fire and move at the same time **DONE**  
- Player and Enemy objects pass width and height to style.css! **CANCELLED**  
- Figure out classes vs database for storing information **DONE**  
- Redo Movement **DONE**  
- Fix undefined object.left in collision detection (ITS A MISSILE, SPAWNED BY MOUSE) **DONE**  
- Move statistics text off of game area **CANCELLED**  
- Make statistics unselectable **DONE**    
- Make spawnEnemyWave() take parameter of enemy to spawn & spawn NumFormation number of enemies in the correct formation **DONE**  
- Create SpawnEnemy(enemyType) which is passed to spawnEnemyWave **DONE**
- Make spawnEnemyWave() have enemies move the correct way **DONE**  
- Delay between firing missiles **DONE THROUGH RELOAD FUNCTION**  
- Reload after x number of missiles fired **DONE**  
- Make an iteration counter **DONE**  
- Change enemy facing when moving **DONE**  
- Change HP and Shields to Progress bars **DONE**  
- Finish missileReload() function **DONE**  
- Add Missile Magazine Progress Bar **DONE**  
- Add image to missile **DONE**  
- Add gradients to make progress bars look nice **DONE**  
- Remove ability to shoot with the mouse (??) **DONE**  
- Enemies can move diagonally **DONE**  
- Enemies spawn in correct pattern (eg line/cluster/circle) **DONE**  
- Finish Resizing ships **DONE**  
- Add numFormation==2 Spawner **DONE**  
- Player ship not showing up on dashboard **DONE**  
- Fix enemy spawn formations for enemy2 and enemy5 **DONE**  
- Chaingun fires on Spacebar, Missile fires burst of 6 on '1' (keycode 49) or should swap to missile on 'lalt' (keycode 18)  (???) **DONE**  
- Ability Icons/Indicators that turn red when unavailable **DONE FOR ABILITY 1**  
- Fix enemy rotations **DONE**  
- Make progress bars line up nicely **DONE**  
- Shields sometimes go NaN **DONE**  
- Make Enemy5 spawn more often **DONE**  
- Change shieldRechargeRate to be based on percentage of max shields **DONE**  
- Center "equipment" under icon on dashboard.html **DONE**  
- Make sure spawning enemies don't get destroyed by border (escapedEnemies()) **DONE, NEEDS TESTING**  

# Optimizations  

- decrease number of projectiles  
- canvas??  
- play with chrome debugger  
- trim audio file length  
- play with game speed  
- play w/ removing sound for optimization, limit num of active voices  

### Sandbox

- offsetX and offsetY for targeting fire with mouse  
- Slow down mouse movement  
- Enemies fire AT player or in-line with their formation, not randomly  

# Backlog TODO  

- CREATE Page & Form to create abilities, ships, items, etc..  
- Aim weapons with mouse  
- player.html to level-up  
- Alt ship images  
- Create function to quickly add basic equipment & abilities & users to game for testing  
- Create map to choose levels, start with simple list of links **DONE**  
- Create equipment.html  
- create ships.html  
- create store.html  
- Create Manual  
- Tutorial Page  
- Show equipped gear on dashboard.html  
- Eventually Set up Bootstrap "cards" system for each map **DONE**  
- Change to fire and aim with mouse  
- Add Pause Functionality  
- Create Health and Armor Bars for each enemy on screen  
- Explosions when enemies hit/destroyed  
- Add movement patterns to enemies  
- Add damaged enemy images  
- Missiles do area damage  
- SOUNDS **DONE**  
- Implement AJAX on necessary pages **DONE**  
- Upgrades based on xp **DONE**  
- Control with mouse and keyboard **DONE**  
- Have to reload or pause if firing too often **DONE**  
- When enemies hit, they take damage instead **DONE**  

---

# Artist Credits

"[asset name]" by [author name] licensed [license(s)]: [asset url]  


"Light Switch on Sfx Sound Effect" by Nicole Marie T licensed CC-BY 4.0: https://opengameart.org/content/light-switch-on-sfx-sound-effect  
"Launches" by Michael Baradari licensed CC-BY 3.0: https://opengameart.org/content/4-projectile-launches  
"Space shooter sound fx pack 1" by Dravenx licensed CC-BY 3.0: https://opengameart.org/content/space-shooter-sound-effects  
"Space Ambient Tune" by Osmic licensed CC-BY 3.0: https://opengameart.org/content/space-ambient  
"Enemy Artwork" by Skorpio licensed CC-BY 3.0 and GPL 3.0: https://opengameart.org/content/spaceship-tutorial-0  
"Games Bullet Collection" by Master484 licensed Public Domain: https://opengameart.org/content/bullet-collection-2-m484-games  








# Pass Info Between Python & JavaScript  

### To Python  

1) On victory() or gameover() window.location.replace("/post_results/<json_data>"); or if that fails, a button to continue to "/post_results/<json_data>"  
2) /post_results/<json_data> will pass json_data, which is a JSON dictionary, to python  
3) update the database  
4) Redirect back to /overview  
5) Pick your passives  
6) Button on /overview takes you back to /dashboard  

### To JavaScript   

- Player/User stats (current_score, current_money, current_xp, current_level)  
- Player passives  

# Player Levels and Passive Abilities

### Levels  

### Abilities  

1) JavaScript checks XP against XP required for Level to see how many points are available  
2) Python templates through Jinja the current level of each ability to see how many points have been spent already  
3) JavaScript gets number of ability points for that level minus the number already spent (sent from python)  
4) Number of available points listed  
5) On "buy" click, number of available points subtracted in JavaScript  
6) On return to Space Dock, database is updated with new ability and points info  

### Abilities in Game  

1) Python templates through Jinja current level of each ability, d-none  
2) JavaScript reads in and uses  

# Story

While you were off exploring space, an Alien Race has come and conquered Earth. They've killed off 90% of the population. You are certain your family is still alive. So you made the decision that rather than return to Earth to rescue your family, you're going to kill off all the Alien supply ships to deprive the Aliens of their critical supply of space toast. You don't know which Aliens are the ones who attacked Earth so you just have to kill them all. You don't know which ships are the supply ships either, so Good Luck. Once you have annihilated all invaders you'll be able to return home safely to Earth into the arms of your loving family.  

### Messages for overview.html  

You have won this round, Stay Toasty young space hero.  

You blocked a major shipment of space toast. Alien stomachs are grumbling.  

I love the smell of space toast in the morning.  

You remember flying toasters from way back when? That's how space toast is made.  

Baby Bleeborb did not get space toast this week due to your efforts.  

Your family is (probably) waiting for you, redouble your efforts!  

When the Aliens invaded Earth, they attempted to target the brightest minds to prevent any resistance. They invaded the libraries first, but were forced to rethink their plans when they discovered that no-one read hard-copy books anymore.  

The Aliens swept through our defenses like they weren't even there. Our technology was no match for this vicious toaster-based assault.

Post-Invasion many of the surviving humans sought shelter underground, forming small communities founded on the ideas of equality of man, peace, and kindness to all living things. These communities quickly collapsed due to infighting about who was more equal, peaceful, and kind.

No-one knows what first drew the Aliens to Earth, but we suspect it was our raspberry jam.  

### Not Included  

# Abil Ideas  

- Nuclear Blast, unlocks after certain amount of score  
- bouncing weapon, does friendly damage too  
- 



# Map

- create route /game/<map_id> which leads to game but passes correct map with all the variables as well **DONE**
- map.js set "#startMissionMapId" href to /game/MAPIDHERE **CANCELLED**
- if map.id % 5 then background = "blahblah", else background = "blah2" **CANCELLED**
	- OR add background column to Map **DONE**
- fix CreateMap() error in route /addMap **DONE**
- read map attributs in game and use them **DONE**
- Download more backgrounds **DONE**
- Add a couple maps **DONE**
- Add map randomizer 
- Add instructions on populateDatabase **DONE**
- implement shieldRechargeRate 
- Other map modifiers: enemy.fireDelay, player.armor, enemy.shields, enemy.numShots, enemy.xpValue/moneyValue/scoreValue 
- Special modifier for enemy.numFormation (??) 
- Some maps enemies only come from 1 end (??) 
- Fix Map Play **DONE** 










