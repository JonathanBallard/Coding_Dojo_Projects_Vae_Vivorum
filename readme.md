
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

- TEST MODELS  
- Bcrypt everything important in session  
- Responsive Game Screen  
- Differentiate between Game and Viewport  
- Fix mouse movement top of screen  
- Look at better hitboxes  
- Make all ships smaller (??)  
- Create .py script to add a bunch of entries to the database    
- Reduce the height of the screen  
- Ensure it works on all screen sizes  
- Resize player ship for dashboard/index  
- Game world larger than viewport so enemies can spawn little bit at a time not all at once  
- Shields should stop recharging when you take damage  
- Performance loss around 100 kills  
- Fix line formation Spawning  
- Missiles hitbox too small  
- Change Background Image Randomly (??)  
- Create overview.html  
- Ensure all instances of the word 'dashboard' are replaced with 'Space Dock' and all use correct anchor image  
- Icons for future abilities: bolt, bomb, biohazard, burn, chess-rook, cog, cogs, coins, crosshairs, fighter-jet, fire, fire-alt, flask, bullseye  
- Implement player levels and passive abilities  
- Add in 2 more enemy weapon types  
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
- Upgrades based on xp **BACKLOG**  
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

### Sandbox

- offsetX and offsetY for targeting fire with mouse  
- Slow down mouse movement  
- Enemies fire AT player or in-line with their formation, not randomly  

# Backlog TODO  

- CREATE Page & Form to create abilities, ships, items, etc..  
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
- Explosions when enemies hit/destroyed  
- Add movement patterns to enemies  
- Add damaged enemy images  
- Missiles do area damage  
- Upgrades based on xp  
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

1)   


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













