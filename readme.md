
# **Vae Vivorum**

*Twin Stick Shooter  
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

- Background art for first map  
- Different Maps with different background art  
- Select Maps in maps.html  
- Add Map modifiers  
- Add difficulties to maps  
- Rewards for map completion  
- Enemy spawns are randomized  
- Enemy spawns are randomized based on difficulty slider  

### Weapons

- Different Weapons  
- Change Weapons out in equipment.html  

### Ships

- Different Ships  
- Different stats for each ship  
- Change ships on ships.html  

### RPG Elements

- Gain levels based on xp  
- Gain passive ability points to spend in player.html  
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

- Create Index.html Registration & Login system **DONE**  
- Create Models/Relationships **DONE**  
- TEST MODELS  
- Bcrypt everything important in session  
- Add Footer to each page with my info **DONE**  
- Create dashboard.html **DONE**  
- Player Ship image **DONE**  
- Enemy ship images **DONE**  
- Background Image  
- Find out why spaceship.png isn't showing up on game.html **DONE**  
- Create game.html **DONE**  
- Create game.js  **DONE**
- Create Weapon Types  
- Power-ups to swap weapons  
- Differentiate between enemy and friendly fires **DONE**  
- Stop Enemies when they reach bottom of game area **DONE**  
- Change deleteEnemies() function to delete whenever enemy is out of bounds, not JUST bottom of screen **DONE**  
- When enemies hit, they die **DONE**  
- proper collision detection **DONE**  
- TEST COLLISION DETECTION, Also known as, FIX COLLISION DETECTION **DONE**  
- Responsive Game Screen  
- Enemies move left & right & up as well **DONE, EXCEPT THEY DON'T MOVE UP**  
- When enemy hits you, you take damage, Ramming **DONE**  
- Make enemies fire at you  
- When hit by enemy fire lose health/armor **DONE**  
- Finish spawnEnemyWave(), decide what type of enemy to spawn **DONE**  
- Armor and Health numbers on screen **DONE**  
- Player can move across the whole map **DONE**  
- Differentiate between Game and Viewport  
- Fix mouse movement top of screen  
- Convert to OOP **DONE**  
- Shields recharge **DONE**    
- Need Victory screen  
- Need ENDGAME screen  
- Change movement to use class methods **CANCELLED**  
- Finish gameOver() function  
- Finish victory() function  
- Look at better hitboxes  
- Finish adding Score and +kills to player object **DONE**  
- Fix shieldRechargeDelay (maybe AJAX?) **DONE**  
- Multiple kinds of enemies  
- Should be able to fire and move at the same time **DONE**  
- Player and Enemy objects pass width and height to style.css!  
- Figure out classes vs database for storing information **DONE**  
- Make all ships smaller (??)  
- Create .py script to add a bunch of entries to the database  
- Pass database info using JSON but first need to enter everything into DB  
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
- Add image to missile  
- Add gradients to make progress bars look nice  
- Remove ability to shoot with the mouse (??)  
- Reduce the height of the screen  
- Ensure it works on all screen sizes  
- Enemies can move diagonally **DONE**  
- Illusion of map motion  
- Enemies spawn in correct pattern (eg line/cluster/circle)  
- Break apart munitions images  
- Finish Resizing ships **DONE**  
- Add numFormation=2 Spawner **DONE**  
- Player ship not showing up on dashboard **DONE**  
- Resize player ship for dashboard/index  
- Fix enemy spawn formations  

### Sandbox

- offsetX and offsetY for targeting fire with mouse  
- Slow down mouse movement  
- Enemies fire AT player or in-line with their formation, not randomly  

# Backlog TODO  

- CREATE Page & Form to create abilities, ships, items, etc..  
- Control with mouse and keyboard **DONE**  
- Aim weapons with mouse  
- SOUNDS  
- player.html to level-up  
- Alt ship images  
- Create function to quickly add basic equipment & abilities & users to game for testing  
- Create map to choose levels, start with simple list of links  
- Create equipment.html  
- create ships.html  
- create store.html  
- Create Manual  
- Tutorial Page  
- Show equipped gear on dashboard.html  
- Implement AJAX on necessary pages  
- Eventually Set up Bootstrap "cards" system for each map  
- Change to fire and aim with mouse  
- Add Pause Functionality  
- Create Health and Armor Bars for each enemy on screen  
- Have to reload or pause if firing too often **DONE**  
- When enemies hit, they take damage instead  
- Explosions when enemies hit/destroyed  
- Add movement patterns to enemies  


---

# Artist Credits

"[asset name]" by [author name] licensed [license(s)]: [asset url]  
"Spaceship Tut" by Skorpio licensed CC-BY 3.0 and GPL 3.0: https://opengameart.org/content/spaceship-tutorial-0  
"Bullet Effects" by Master484 licensed Public Domain: https://opengameart.org/content/bullet-collection-2-m484-games  















