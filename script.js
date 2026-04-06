const $ = id => document.getElementById(id);
const $all = sel => document.querySelectorAll(sel);

const store = {
  get: key => { try { return localStorage.getItem(key); } catch(e) { return null; } },
  set: (key, val) => { try { localStorage.setItem(key, val); } catch(e) {} }
};

const gamesData = [
  { "name": "1v1lol", "image": "logo.png", "url": "1v1lol" },
  { "name": "1v1space", "image": "splash.png", "url": "1v1space" },
  { "name": "10 Minutes Till Dawn", "image": "splash.png", "url": "10-minutes-till-dawn" },
  { "name": "100ng", "image": "100ng.jpg", "url": "100ng" },
  { "name": "2048", "image": "2048.png", "url": "2048" },
  { "name": "2048 Multitask", "image": "splash.png", "url": "2048-multitask" },
  { "name": "9007199254740992", "image": "logo-4.png", "url": "9007199254740992" },
  { "name": "DogeMiner", "image": "favicon.ico", "url": "DogeMiner" },
  { "name": "HexGL", "image": "icon.png", "url": "HexGL" },
  { "name": "Offline Paradise", "image": "assets/icon.jpeg", "url": "OfflineParadise" },
  { "name": "Stickman Survival", "image": "Icon.png", "url": "Stickman-Survival" },
  { "name": "A Dance of Fire and Ice", "image": "splash.png", "url": "a-dance-of-fire-and-ice" },
  { "name": "Achievement Unlocked", "image": "achievementunlocked.png", "url": "achievementunlocked" },
  { "name": "A Dark Room", "image": "splash.png", "url": "adarkroom" },
  { "name": "Adrenaline Challenge", "image": "adrenalinechallenge.jpg", "url": "adrenalinechallenge" },
  { "name": "Adventure Drivers", "image": "splash.png", "url": "adventure-drivers" },
  { "name": "Ages of Conflict", "image": "splash.jpg", "url": "ages-of-conflict" },
  { "name": "Alien Hominid", "image": "alienhominid.jpg", "url": "alienhominid" },
  { "name": "Align 4", "image": "board.png", "url": "align-4" },
  { "name": "Amidst the Clouds", "image": "splash.png", "url": "amidst-the-clouds" },
  { "name": "Among Us", "image": "red.png", "url": "among-us" },
  { "name": "Angry Sharks", "image": "assets/img/splash.png", "url": "angry-sharks" },
  { "name": "Aquapark Slides", "image": "splash.png", "url": "aquapark-slides" },
  { "name": "Astray", "image": "splash.png", "url": "astray" },
  { "name": "Avalanche", "image": "avalanche.png", "url": "avalanche" },
  { "name": "Awesome Tanks 2", "image": "awesometanks2.jpg", "url": "awesometanks2" },
  { "name": "Backrooms", "image": "img/splash.jpg", "url": "backrooms" },
  { "name": "Bad Ice Cream", "image": "bad-ice-cream.png", "url": "bad-ice-cream" },
  { "name": "Bad Ice Cream 2", "image": "bad-ice-cream-2.png", "url": "bad-ice-cream-2" },
  { "name": "Bad Ice Cream 3", "image": "bad-ice-cream-3.png", "url": "bad-ice-cream-3" },
  { "name": "Baldi's Basics", "image": "splash.png", "url": "baldis-basics" },
  { "name": "Ballistic Chickens", "image": "logo.png", "url": "ballistic-chickens" },
  { "name": "Basket Random", "image": "splash.jpeg", "url": "basket-random" },
  { "name": "Basketball Stars", "image": "assets/images/basketball-stars.png", "url": "basketball-stars" },
  { "name": "Basketbros.io", "image": "thumb.jpg", "url": "basketbros-io" },
  { "name": "Battle for Gondor", "image": "battleforgondor.JPG", "url": "battleforgondor" },
  { "name": "Big Red Button", "image": "bigredbutton.png", "url": "bigredbutton" },
  { "name": "BitLife", "image": "splash.png", "url": "bitlife" },
  { "name": "Black Hole Square", "image": "icon.png", "url": "blacholesquare" },
  { "name": "Black Knight", "image": "blackknight.png", "url": "blackknight" },
  { "name": "Bloons TD", "image": "bloonstd.jpg", "url": "bloonstd" },
  { "name": "Bloons TD 2", "image": "bloonstd2.png", "url": "bloonstd2" },
  { "name": "Bloxors", "image": "title.png", "url": "bloxors" },
  { "name": "BNTTS", "image": "icons/icon-256.png", "url": "bntts" },
  { "name": "Bob the Robber 2", "image": "splash.jpeg", "url": "bobtherobber2" },
  { "name": "Boxhead 2 Play", "image": "boxhead2play.jpg", "url": "boxhead2play" },
  { "name": "Boxing Random", "image": "512x512.jpg", "url": "boxing-random" },
  { "name": "Breaking the Bank", "image": "breakingthebank.png", "url": "breakingthebank" },
  { "name": "BTTS", "image": "images.png", "url": "btts" },
  { "name": "Burger and Frights", "image": "splash.png", "url": "burger-and-frights" },
  { "name": "Cannon Basketball 4", "image": "img/splash.png", "url": "cannon-basketball-4" },
  { "name": "Canyon Defense", "image": "canyondefense.png", "url": "canyondefense" },
  { "name": "Cars Simulator", "image": "splash.png", "url": "cars-simulator" },
  { "name": "Cell Machine", "image": "img/te9nDu.png", "url": "cell-machine" },
  { "name": "Champion Island", "image": "splash.png", "url": "champion-island" },
  { "name": "Champion Archer", "image": "championarcher.png", "url": "championarcher" },
  { "name": "Chill Radio", "image": "img/chill-icon.png", "url": "chill-radio" },
  { "name": "Chrome Dino", "image": "images/default_100_percent/offline/100-error-offline.png", "url": "chrome-dino" },
  { "name": "Circlo", "image": "img/download.png", "url": "circlo" },
  { "name": "Cluster Rush", "image": "splash.png", "url": "cluster-rush" },
  { "name": "CN Ping Pong", "image": "tabletennisultimate.png", "url": "cnpingpong" },
  { "name": "Connect 3", "image": "connect3.png", "url": "connect3" },
  { "name": "Cookie Clicker", "image": "cookie1.jpeg", "url": "cookie-clicker" },
  { "name": "Core Ball", "image": "pr_source.png", "url": "core-ball" },
  { "name": "Craftmine", "image": "images/animal-sheet0.png", "url": "craftmine" },
  { "name": "Creative Kill Chamber", "image": "creativekillchamber.jpg", "url": "creativekillchamber" },
  { "name": "Crossy Road", "image": "crossyroad.png", "url": "crossyroad" },
  { "name": "CS:GO Clicker", "image": "images/case1.png", "url": "csgo-clicker" },
  { "name": "CTR", "image": "logo.png", "url": "ctr" },
  { "name": "CTR Holiday", "image": "favicon.ico", "url": "ctr-holiday" },
  { "name": "CTR TR", "image": "logo.png", "url": "ctr-tr" },
  { "name": "Cubefield", "image": "assets/unnamed.png", "url": "cubefield" },
  { "name": "Cupcake 2048", "image": "favicon.ico", "url": "cupcake2048" },
  { "name": "Dante", "image": "splash.png", "url": "dante" },
  { "name": "Deal or No Deal", "image": "index.jpg", "url": "deal-or-no-deal" },
  { "name": "Death Run 3D", "image": "img/death.png", "url": "death-run-3d" },
  { "name": "Defend the Tank", "image": "images/splash.jpg", "url": "defend-the-tank" },
  { "name": "Doctor Acorn 2", "image": "splash.jpg", "url": "doctor-acorn2" },
  { "name": "Doge 2048", "image": "doge1.jpeg", "url": "doge2048" },
  { "name": "Doodle Jump", "image": "doodle.png", "url": "doodle-jump" },
  { "name": "Double Wires", "image": "doublewires.png", "url": "doublewires" },
  { "name": "Dragon vs. Bricks", "image": "splash.png", "url": "dragon-vs-bricks" },
  { "name": "Draw the Hill", "image": "icons/icon-512.png", "url": "draw-the-hill" },
  { "name": "Drift Boss", "image": "logo.png", "url": "drift-boss" },
  { "name": "Drift Hunters", "image": "drift-hunters.png", "url": "drift-hunters" },
  { "name": "Drive Mad", "image": "logo.jpg", "url": "drive-mad" },
  { "name": "Duck Life 1", "image": "ducklife.png", "url": "ducklife1" },
  { "name": "Duck Life 2", "image": "ducklife2.png", "url": "ducklife2" },
  { "name": "Duck Life 3", "image": "duck.png", "url": "ducklife3" },
  { "name": "Duck Life 4", "image": "splash.jpg", "url": "ducklife4" },
  { "name": "Edge Surf", "image": "splash.png", "url": "edge-surf" },
  { "name": "Edge Not Found", "image": "edge.png", "url": "edgenotfound" },
  { "name": "Eel Slap", "image": "eel-slap.png", "url": "eel-slap" },
  { "name": "Elastic Man", "image": "elasticman.jpg", "url": "elasticman" },
  { "name": "Endless War 3", "image": "endlesswar3.png", "url": "endlesswar3" },
  { "name": "Escaping the Prison", "image": "escapingtheprison.jpg", "url": "escapingtheprison" },
  { "name": "Evil Glitch", "image": "evil.png", "url": "evil-glitch" },
  { "name": "Evolution", "image": "splash.png", "url": "evolution" },
  { "name": "Exo", "image": "img/small.jpg", "url": "exo" },
  { "name": "Factory Balls", "image": "images/splash.png", "url": "factoryballs" },
  { "name": "Fairsquares", "image": "index.icon.png", "url": "fairsquares" },
  { "name": "Fake Virus", "image": "icon.png", "url": "fake-virus" },
  { "name": "Fancy Pants Adventures", "image": "fancypantsadventure.png", "url": "fancypantsadventures" },
  { "name": "Fireboy and Watergirl", "image": "logo.jpeg", "url": "fireboywatergirlforesttemple" },
  { "name": "Flappy 2048", "image": "favicon.ico", "url": "flappy-2048" },
  { "name": "Flappy Bird", "image": "flappybird.jpg", "url": "flappy-bird" },
  { "name": "Flash Tetris", "image": "flashtetris.png", "url": "flashtetris" },
  { "name": "Flippy Fish", "image": "2022_10_28_0jt_Kleki.png", "url": "flippy-fish" },
  { "name": "Five Nights at Wario's", "image": "splash.png", "url": "fnaw" },
  { "name": "Friday Night Funkin'", "image": "fnf-icon.jpg", "url": "fridaynightfunkin" },
  { "name": "Froggy's Battle", "image": "splash.png", "url": "froggys-battle" },
  { "name": "Fruit Ninja", "image": "FruitNinjaTeaser.jpg", "url": "fruitninja" },
  { "name": "Frying Nemo", "image": "splash.png", "url": "frying-nemo" },
  { "name": "Game Inside", "image": "img/display.png", "url": "game-inside" },
  { "name": "Generic Fishing Game", "image": "splash.png", "url": "generic-fishing-game" },
  { "name": "Geo Dash", "image": "geoscratchicon.png", "url": "geodash" },
  { "name": "George and the Printer", "image": "img/SnDTEn.png", "url": "georgeandtheprinter" },
  { "name": "Getaway Shootout", "image": "img/images.jpg", "url": "getaway-shootout" },
  { "name": "Gimme the Airpod", "image": "img/logo.png", "url": "gimme-the-airpod" },
  { "name": "Glass City", "image": "image.png", "url": "glass-city" },
  { "name": "Go Ball", "image": "game.jpg", "url": "go-ball" },
  { "name": "Goodnight", "image": "goodnight.jpg", "url": "goodnight" },
  { "name": "Google Feud", "image": "splash.png", "url": "google-feud" },
  { "name": "Google Snake", "image": "img/snake.png", "url": "google-snake" },
  { "name": "Gravity Soccer", "image": "splash.png", "url": "gravity-soccer" },
  { "name": "Greybox", "image": "ico.png", "url": "greybox" },
  { "name": "Grindcraft", "image": "img/splash.png", "url": "grindcraft" },
  { "name": "Hacker Type", "image": "logo192.png", "url": "hackertype" },
  { "name": "Handshakes", "image": "splaher.png", "url": "handshakes" },
  { "name": "Happy Hop", "image": "splash.png", "url": "happy-hop" },
  { "name": "HBA", "image": "hoverbotarena.JPG", "url": "hba" },
  { "name": "Helicopter", "image": "helicopter.png", "url": "helicopter" },
  { "name": "Hex Empire", "image": "hexempire.jpg", "url": "hexempire" },
  { "name": "Hextris", "image": "images/hextris-logo.png", "url": "hextris" },
  { "name": "Hungry Lamu", "image": "splash.png", "url": "hungry-lamu" },
  { "name": "Idle Breakout", "image": "img/thumbnail.png", "url": "idle-breakout" },
  { "name": "Idle Shark", "image": "img/sharkgame.png", "url": "idle-shark" },
  { "name": "Impossible Quiz", "image": "impossiblequiz.png", "url": "impossiblequiz" },
  { "name": "Interactive Buddy", "image": "interactivebuddy.jpg", "url": "interactivebuddy" },
  { "name": "Jetpack Joyride", "image": "splash.jpg", "url": "jetpack-joyride" },
  { "name": "Just Fall", "image": "unnamed.png", "url": "just-fall" },
  { "name": "Just One Boss", "image": "pv1Gr5.png", "url": "just-one-boss" },
  { "name": "Kitchen Gun Game", "image": "splash.png", "url": "kitchen-gun-game" },
  { "name": "Kitten Cannon", "image": "kittencannon.png", "url": "kittencannon" },
  { "name": "Knife Master", "image": "512x512.jpg", "url": "knife-master" },
  { "name": "Krunker", "image": "img/krunker-io.jpg", "url": "krunker" },
  { "name": "Learn to Fly", "image": "learntofly.png", "url": "learntofly" },
  { "name": "Learn to Fly 2", "image": "learn-to-fly-2.jpg", "url": "learntofly2" },
  { "name": "Madalin Stunt Cars 2", "image": "img/logo.jpg", "url": "madalin-stunt-cars-2" },
  { "name": "Madalin Stunt Cars 3", "image": "img/index.jpg", "url": "madalin-stunt-cars-3" },
  { "name": "Mario", "image": "Theme/Mario.gif", "url": "mario" },
  { "name": "Marvin Spectrum", "image": "marvinspectrum.png", "url": "marvinspectrum" },
  { "name": "Matrix Rampage", "image": "matrixrampage.jpg", "url": "matrixrampage" },
  { "name": "Meme 2048", "image": "img/hot.gif", "url": "meme2048" },
  { "name": "Merge Round Racers", "image": "splash.png", "url": "merge-round-racers" },
  { "name": "Mine Blocks", "image": "splash.png", "url": "mineblocks" },
  { "name": "Minecraft 1.5", "image": "splash.jpeg", "url": "minecraft-15" },
  { "name": "Minecraft 1.8", "image": "splash.png", "url": "minecraft-18" },
  { "name": "Minecraft Classic", "image": "pack.png", "url": "minecraft-classic" },
  { "name": "Minecraft Beta", "image": "bg_main.png", "url": "minecraftbeta" },
  { "name": "Minesweeper", "image": "img/minesweeper.png", "url": "minesweeper" },
  { "name": "Mini Putt", "image": "miniputt.png", "url": "miniputt" },
  { "name": "Missiles", "image": "miss.png", "url": "missiles" },
  { "name": "Moto X3M", "image": "splash.jpg", "url": "motox3m" },
  { "name": "Moto X3M Pool", "image": "splash.jpg", "url": "motox3m-pool" },
  { "name": "Moto X3M Spooky", "image": "splash.jpeg", "url": "motox3m-spooky" },
  { "name": "Moto X3M Winter", "image": "download.jpeg", "url": "motox3m-winter" },
  { "name": "Moto X3M 2", "image": "Moto-X3M-2.webp", "url": "motox3m2" },
  { "name": "My Rusty Submarine", "image": "splash.png", "url": "my-rusty-submarine" },
  { "name": "N-Gon", "image": "img/n-gonbot.png", "url": "n-gon" },
  { "name": "Ninja", "image": "logo1.png", "url": "ninja" },
  { "name": "Ninja vs Evil Corp", "image": "splash.png", "url": "ninjavsevilcorp" },
  { "name": "Noob Steve Parkour", "image": "512x512.jpg", "url": "noob-steve-parkour" },
  { "name": "NS Shaft", "image": "favicon.png", "url": "ns-shaft" },
  { "name": "NS Resurgence", "image": "neon.png", "url": "nsresurgence" },
  { "name": "Om Bounce", "image": "assets/icon.jpeg", "url": "om-bounce" },
  { "name": "OVO", "image": "ovo3.png", "url": "ovo" },
  { "name": "Pandemic 2", "image": "pandemic2.png", "url": "pandemic2" },
  { "name": "Papa's Burgeria", "image": "splash.jpg", "url": "papasburgeria" },
  { "name": "Papa's Pizzeria", "image": "papaspizzaria.jpg", "url": "papaspizzaria" },
  { "name": "Paper.io 2", "image": "images/icon512.png", "url": "paperio2" },
  { "name": "Papery Planes", "image": "splash.jpg", "url": "papery-planes" },
  { "name": "Particle Clicker", "image": "assets/pc32@2x.png", "url": "particle-clicker" },
  { "name": "Pixel Gun Survival", "image": "512x512.png", "url": "pixel-gun-survival" },
  { "name": "Polybranch", "image": "img/pic1.png", "url": "polybranch" },
  { "name": "Popcat Classic", "image": "android-chrome-512x512.png", "url": "popcat-classic" },
  { "name": "Portal Flash", "image": "portaltheflashversion.jpg", "url": "portalflash" },
  { "name": "Precision Client", "image": "logo.png", "url": "precision-client" },
  { "name": "Protektor", "image": "splash.jpg", "url": "protektor" },
  { "name": "Push the Square", "image": "img/splash.png", "url": "push-the-square" },
  { "name": "Push Your Luck", "image": "assets/img/push.png", "url": "push-your-luck" },
  { "name": "Rabbit Samurai", "image": "splash.png", "url": "rabbit-samurai" },
  { "name": "Rabbit Samurai 2", "image": "splash.png", "url": "rabbit-samurai2" },
  { "name": "Resent Client", "image": "splash.jpg", "url": "resent-client" },
  { "name": "Retro Bowl", "image": "img/icon.jpg", "url": "retro-bowl" },
  { "name": "Riddle School", "image": "riddleschool.png", "url": "riddleschool" },
  { "name": "Riddle School 2", "image": "riddleschool2.png", "url": "riddleschool2" },
  { "name": "Riddle School 3", "image": "riddleschool3.png", "url": "riddleschool3" },
  { "name": "Riddle School 4", "image": "riddleschool4.png", "url": "riddleschool4" },
  { "name": "Riddle School 5", "image": "riddleschool5.png", "url": "riddleschool5" },
  { "name": "Riddle Transfer", "image": "riddletransfer.png", "url": "riddletransfer" },
  { "name": "Riddle Transfer 2", "image": "riddletransfer2.png", "url": "riddletransfer2" },
  { "name": "Rolling Forests", "image": "icon.png", "url": "rolling-forests" },
  { "name": "Rolly Vortex", "image": "icon-256.png", "url": "rolly-vortex" },
  { "name": "Rooftop Snipers", "image": "img/thumb.png", "url": "rooftop-snipers" },
  { "name": "Ruffle", "image": "splash.png", "url": "ruffle" },
  { "name": "Slap The Monkey", "image": "slap-the-monkey.jpg", "url": "slap-the-monkey" },
  { "name": "Sand Game", "image": "sand-game.PNG", "url": "sand-game" },
  { "name": "Sandboxels", "image": "sandboxels.jpg", "url": "sandboxels" },
  { "name": "Santy is Home", "image": "splash.png", "url": "santy-is-home" },
  { "name": "Scrap Metal", "image": "img/splash.png", "url": "scrapmetal" },
  { "name": "Shell Shockers", "image": "img/favicon.png", "url": "shellshockers" },
  { "name": "Shot in the Dark", "image": "shot.png", "url": "shotinthedark" },
  { "name": "Shuttle Deck", "image": "splash.png", "url": "shuttledeck" },
  { "name": "Sky Car Stunt", "image": "512x512.jpg", "url": "sky-car-stunt" },
  { "name": "Sleeping Beauty", "image": "splash.png", "url": "sleepingbeauty" },
  { "name": "Slime Rush TD", "image": "splash.png", "url": "slime-rush-td" },
  { "name": "Slope", "image": "slope4.jpeg", "url": "slope" },
  { "name": "Slope 2", "image": "slope-2-logo.png", "url": "slope-2" },
  { "name": "Slope Ball", "image": "icon.jpg", "url": "slope-ball" },
  { "name": "Smash Karts", "image": "images/icon-512.png", "url": "smashkarts" },
  { "name": "Smoking Barrels", "image": "smokingbarrels.jpg", "url": "smokingbarrels" },
  { "name": "Snow Battle", "image": "img/logo.png", "url": "snowbattle" },
  { "name": "Soccer Random", "image": "splash.png", "url": "soccer-random" },
  { "name": "Soccer Skills", "image": "splash.png", "url": "soccer-skills" },
  { "name": "Soldier Legend", "image": "images/logo.jpg", "url": "soldier-legend" },
  { "name": "Solitaire", "image": "img/hover.jpg", "url": "solitaire" },
  { "name": "Sort the Court", "image": "img/splash.png", "url": "sort-the-court" },
  { "name": "Soundboard", "image": "img/mlg-favicon.png", "url": "soundboard" },
  { "name": "Space Company", "image": "whiteLogo.png", "url": "space-company" },
  { "name": "Space Garden", "image": "spl.png", "url": "spacegarden" },
  { "name": "Spinning Rat", "image": "favicon-32x32.png", "url": "spinningrat" },
  { "name": "Stack", "image": "stack.png", "url": "stack" },
  { "name": "Stack Bump 3D", "image": "thumbnail.jpg", "url": "stack-bump-3d" },
  { "name": "Starve", "image": "img/favicon.png", "url": "starve" },
  { "name": "Station 141", "image": "75wxYs.png", "url": "station-141" },
  { "name": "Stealing the Diamond", "image": "stealingthediamond.jpg", "url": "stealingthediamond" },
  { "name": "Stick Archers", "image": "splash.jpg", "url": "stick-archers" },
  { "name": "Stick Duel Battle", "image": "512x512.jpg", "url": "stick-duel-battle" },
  { "name": "Stick Merge", "image": "splash.png", "url": "stick-merge" },
  { "name": "Stickman Boost", "image": "icon-256.png", "url": "stickman-boost" },
  { "name": "Stickman Golf", "image": "splash.png", "url": "stickman-golf" },
  { "name": "Stickman Hook", "image": "unnamed.jpg", "url": "stickman-hook" },
  { "name": "Stick War", "image": "stickwar.jpg", "url": "stickwar" },
  { "name": "Storm the House 2", "image": "stormthehouse2.jpg", "url": "stormthehouse2" },
  { "name": "Subway Surfers", "image": "img/splash.jpg", "url": "subway-surfers" },
  { "name": "Subway Surfers NY", "image": "NewYorkIcon.png", "url": "subway-surfers-ny" },
  { "name": "Superhot", "image": "hot.jpg", "url": "superhot" },
  { "name": "Super Mario Construct", "image": "icons/icon-256.png", "url": "supermarioconstruct" },
  { "name": "Surviv", "image": "img/favicon.png", "url": "surviv" },
  { "name": "Sushi Unroll", "image": "favicon.png", "url": "sushi-unroll" },
  { "name": "Swerve", "image": "img/favicon.jpg", "url": "swerve" },
  { "name": "Synesthesia", "image": "index.splash.png", "url": "synesthesia" },
  { "name": "Tactical Weapon Pack 2", "image": "splash.jpg", "url": "tactical-weapon-pack-2" },
  { "name": "Tactical Assassin 2", "image": "tacticalassassin2.png", "url": "tacticalassasin2" },
  { "name": "Tank Trouble 2", "image": "tank.jpeg", "url": "tank-trouble-2" },
  { "name": "Tanuki Sunset", "image": "img/logo.png", "url": "tanuki-sunset" },
  { "name": "Temple Run 2", "image": "img/temple-run-2-256.png", "url": "temple-run-2" },
  { "name": "The Final Earth", "image": "images.png", "url": "the-final-earth" },
  { "name": "The Hotel", "image": "splash.png", "url": "the-hotel" },
  { "name": "The Battle", "image": "thebattle.png", "url": "thebattle" },
  { "name": "The Heist", "image": "theheist.jpg", "url": "theheist" },
  { "name": "There Is No Game", "image": "logo.png", "url": "there-is-no-game" },
  { "name": "This Is the Only Level", "image": "thisistheonlylevel.png", "url": "thisistheonlylevel" },
  { "name": "Tiny Fishing", "image": "tiny-fishing.png", "url": "tiny-fishing" },
  { "name": "Tiny Islands", "image": "splash.png", "url": "tiny-islands" },
  { "name": "Toss the Turtle", "image": "tosstheturtle.png", "url": "tosstheturtle" },
  { "name": "Townscaper", "image": "img/cover.jpg", "url": "townscaper" },
  { "name": "Tube Jumpers", "image": "img/icon.jpg", "url": "tube-jumpers" },
  { "name": "Tunnel Rush", "image": "img/tunnel.jpg", "url": "tunnel-rush" },
  { "name": "TV Static", "image": "static.png", "url": "tv-static" },
  { "name": "Twitch Tetris", "image": "logo.png", "url": "twitch-tetris" },
  { "name": "Veloce", "image": "qN6zkD.png", "url": "veloce" },
  { "name": "Vex 3", "image": "vex3.png", "url": "vex3" },
  { "name": "Vex 4", "image": "vex4.png", "url": "vex4" },
  { "name": "Vex 5", "image": "vex.jpeg", "url": "vex5" },
  { "name": "Vex 6", "image": "assets/icon.png", "url": "vex6" },
  { "name": "Vex 7", "image": "assets/icon.png", "url": "vex7" },
  { "name": "Wall Smash", "image": "thumb.png", "url": "wallsmash" },
  { "name": "Waterworks", "image": "square.png", "url": "waterworks" },
  { "name": "WeaveSilk", "image": "thumb.png", "url": "weavesilk" },
  { "name": "WebGL Fluid Simulation", "image": "promo_back.png", "url": "webgl-fluid-simulation" },
  { "name": "WebRetro", "image": "assets/icons/iconm256.png", "url": "webretro" },
  { "name": "Win the White House", "image": "splash.png", "url": "win-the-whitehouse" },
  { "name": "Wolf 3D", "image": "art/wolf3d.png", "url": "wolf3d" },
  { "name": "Wordle", "image": "img/logo_512x512.png", "url": "wordle" },
  { "name": "World's Hardest Game", "image": "images/splash.jpg", "url": "worlds-hardest-game" },
  { "name": "World's Hardest Game 2", "image": "the-worlds-hardest-game-2.jpg", "url": "worlds-hardest-game-2" },
  { "name": "X-Trial Racing", "image": "splash.png", "url": "x-trial-racing" },
  { "name": "xx142-B2.exe", "image": "splash.png", "url": "xx142-b2exe" },
  { "name": "Yoshi Fabrication", "image": "icons/icon-512.png", "url": "yoshifabrication" },
  { "name": "You Are Bezos", "image": "img/banner.png", "url": "you-are-bezos" },
  { "name": "Zombs Royale", "image": "zomb.png", "url": "zombs-royale" }
];

const GAME_BASE = 'https://gms.parcoil.com';

const cloakConfig = {
  default: { title: 'sight.w', favicon: 'https://image2url.com/r2/default/images/1772114193046-733bfa71-77a7-4fdc-bce4-d3e8ebe17a29.png' },
  canvas: { title: 'Canvas LMS', favicon: 'https://canvas.instructure.com/favicon.ico' },
  google: { title: 'Google', favicon: 'https://www.google.com/favicon.ico' },
  drive: { title: 'Google Drive', favicon: 'https://drive.google.com/favicon.ico' },
  docs: { title: 'Google Docs', favicon: 'https://docs.google.com/favicon.ico' },
  slides: { title: 'Google Slides', favicon: 'https://slides.google.com/favicon.ico' },
  classroom: { title: 'Google Classroom', favicon: 'https://classroom.google.com/favicon.ico' },
};

let currentGameUrl = '';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCloak();
  initSettings();
  initGames();
  initNav();
  initKeys();
  initStats();
  initPointerLock();
  updateTime();
  setInterval(updateTime, 1000);
  setTimeout(() => $('loadingScreen').classList.add('hidden'), 1200);
});

function initTheme() {
  const theme = store.get('theme') || 'dark';
  document.body.setAttribute('data-theme', theme);
  updateThemeBtns(theme);
  $all('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.setAttribute('data-theme', btn.dataset.theme);
      store.set('theme', btn.dataset.theme);
      updateThemeBtns(btn.dataset.theme);
      const iframe = $('gamesIframe');
      if (iframe && iframe.contentWindow) {
        try {
          iframe.contentWindow.postMessage({ type: 'theme', theme: btn.dataset.theme }, '*');
        } catch(e) {}
      }
    });
  });

  // sync theme to iframe after it loads
  $('gamesIframe').addEventListener('load', () => {
    try {
      $('gamesIframe').contentWindow.postMessage({ type: 'theme', theme: document.body.getAttribute('data-theme') || 'dark' }, '*');
    } catch(e) {}
  });
}

function updateThemeBtns(active) {
  $all('.theme-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.theme === active));
}

function initCloak() {
  const cloak = store.get('cloak') || 'default';
  applyCloak(cloak);
  $all('.cloak-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      store.set('cloak', btn.dataset.cloak);
      applyCloak(btn.dataset.cloak);
      $all('.cloak-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function applyCloak(cloak) {
  const c = cloakConfig[cloak];
  if (!c) return;
  document.title = c.title;
  const existing = document.getElementById('favicon');
  if (existing) {
    existing.href = c.favicon;
  } else {
    const link = document.createElement('link');
    link.id = 'favicon';
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = c.favicon;
    document.head.appendChild(link);
  }
}

function initSettings() {
  // FPS Booster
  const fps = store.get('fpsBooster') !== 'false';
  $('toggleFpsBooster').classList.toggle('on', fps);
  document.body.classList.toggle('fps-boost-mode', fps);
  $('toggleFpsBooster').onclick = () => {
    const on = $('toggleFpsBooster').classList.toggle('on');
    document.body.classList.toggle('fps-boost-mode', on);
    store.set('fpsBooster', on);
  };

  // Stats
  const stats = store.get('showStats') === 'true';
  $('toggleStats').classList.toggle('on', stats);
  $('statsOverlay').classList.toggle('visible', stats);
  $('toggleStats').onclick = () => {
    const on = $('toggleStats').classList.toggle('on');
    $('statsOverlay').classList.toggle('visible', on);
    store.set('showStats', on);
  };

  // Blur
  const blur = store.get('blur') !== 'false';
  $('toggleBlur').classList.toggle('on', blur);
  document.body.setAttribute('data-blur', blur ? 'true' : 'false');
  $('toggleBlur').onclick = () => {
    const on = $('toggleBlur').classList.toggle('on');
    document.body.setAttribute('data-blur', on ? 'true' : 'false');
    store.set('blur', on);
  };

  // Bypass buttons
  $('aboutBlankBtn').onclick = () => {
    const win = window.open('about:blank', '_blank');
    if (win) {
      win.document.write(`<!DOCTYPE html><html><head><title>Classroom</title></head><body style="margin:0"><iframe src="${location.href}" style="width:100%;height:100vh;border:none"></iframe></body></html>`);
      win.document.close();
    }
  };

  $('panicBtn').onclick = () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;z-index:10000;font-family:Inter,sans-serif;';
    const box = document.createElement('div');
    box.style.cssText = 'background:var(--glass);border:1px solid var(--glass-border);border-radius:16px;padding:28px;text-align:center;';
    const msg = document.createElement('p');
    msg.style.cssText = 'color:var(--fg);font-size:14px;margin-bottom:8px;';
    msg.textContent = 'Press any key to set as panic key';
    const sub = document.createElement('p');
    sub.style.cssText = 'color:var(--muted);font-size:11px;';
    sub.textContent = 'Press ESC to cancel';
    box.appendChild(msg);
    box.appendChild(sub);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    const handler = (e) => {
      e.preventDefault();
      document.removeEventListener('keydown', handler);
      document.body.removeChild(overlay);
      if (e.key === 'Escape') return;
      panicKey = e.key.toUpperCase();
      store.set('panicKey', panicKey);
      $('panicKeyDisplay').textContent = panicKey;
    };
    document.addEventListener('keydown', handler);
  };

  // Animations
  const anims = store.get('animations') !== 'false';
  $('toggleAnimations').classList.toggle('on', anims);
  document.body.classList.toggle('no-animations', !anims);
  $('toggleAnimations').onclick = () => {
    const on = $('toggleAnimations').classList.toggle('on');
    document.body.classList.toggle('no-animations', !on);
    store.set('animations', on);
  };

  // Compact mode
  const compact = store.get('compact') === 'true';
  $('toggleCompact').classList.toggle('on', compact);
  document.body.classList.toggle('compact-mode', compact);
  $('toggleCompact').onclick = () => {
    const on = $('toggleCompact').classList.toggle('on');
    document.body.classList.toggle('compact-mode', on);
    store.set('compact', on);
  };

  // Clear history
  $('toggleClearHistory').onclick = () => {
    const on = $('toggleClearHistory').classList.toggle('on');
    store.set('clearHistory', on);
  };

  // Stealth mode
  const stealth = store.get('stealth') === 'true';
  $('toggleStealth').classList.toggle('on', stealth);
  document.body.classList.toggle('stealth-mode', stealth);
  $('toggleStealth').onclick = () => {
    const on = $('toggleStealth').classList.toggle('on');
    document.body.classList.toggle('stealth-mode', on);
    store.set('stealth', on);
  };

  // Reset all
  $('resetAllBtn').onclick = () => {
 if (confirm('Reset all settings?')) {
      localStorage.clear();
      location.reload();
    }
  };

  // Modals
  $('embedClose').onclick = () => $('embedModal').classList.remove('active');
  $('creditsClose').onclick = () => $('creditsModal').classList.remove('active');
  $('legalClose').onclick = () => $('legalModal').classList.remove('active');

  $('copyEmbedBtn').onclick = () => {
    navigator.clipboard.writeText($('embedCode').value);
    $('copyEmbedBtn').textContent = 'Copied!';
    setTimeout(() => $('copyEmbedBtn').textContent = 'Copy to Clipboard', 1500);
  };

  $all('.legal-tab').forEach(tab => {
    tab.onclick = () => {
      $all('.legal-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      $('tosContent').style.display = tab.dataset.tab === 'tos' ? 'block' : 'none';
      $('privacyContent').style.display = tab.dataset.tab === 'privacy' ? 'block' : 'none';
    };
  });
}

function triggerPanic() {
  $('panicOverlay').classList.add('active');
  setTimeout(() => location.href = 'https://classroom.google.com', 800);
}

function initGames() {
  renderGames();

  $('gamesSearchInput').oninput = (e) => {
    const q = e.target.value.toLowerCase();
    $all('.game-card').forEach(card => {
      card.style.display = card.querySelector('p').textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  };

  $('firstGamesBtn').onclick = () => {
    $('gamesMenu').style.display = 'none';
    $('gamesHeader').style.display = 'flex';
    $('gamesIframeContainer').style.display = 'block';
    $('gamesBack').style.display = 'flex';
    $('gamesReload').style.display = 'flex';
    $('gamesIframe').src = 'https://tight-breeze-9313.brayyy316.workers.dev/';
  };

  $('secondGamesBtn').onclick = () => {
    $('gamesMenu').style.display = 'none';
    $('secondGamesContainer').style.display = 'block';
    $('gamesHeader').style.display = 'flex';
    $('gamesBack').style.display = 'flex';
  };

  $('thirdGamesBtn').onclick = () => {
    $('gamesMenu').style.display = 'none';
    $('gamesHeader').style.display = 'flex';
    $('gamesIframeContainer').style.display = 'block';
    $('gamesBack').style.display = 'flex';
    $('gamesReload').style.display = 'flex';
    $('gamesIframe').src = 'https://okayliterally.github.io/ixllearning/';
  };

  $('gamePlayerBack').onclick = () => {
    $('gamePlayerView').classList.remove('active');
    $('gamePlayerIframe').src = '';
    $('secondGamesContainer').style.display = 'block';
  };

  $('gamePlayerReload').onclick = () => {
    const src = $('gamePlayerIframe').src;
    $('gamePlayerIframe').src = '';
    $('gamePlayerIframe').src = src;
  };

  $('gamePlayerEmbed').onclick = () => {
    $('embedModal').classList.add('active');
    $('embedCode').value = `<iframe src="${GAME_BASE}/${currentGameUrl}/" width="100%" height="600" frameborder="0" allowfullscreen></iframe>`;
  };

  $('gamePlayerIframe').onload = () => setTimeout(() => $('gamePlayerLoading').classList.add('hidden'), 500);

  $('gamesBack').onclick = () => {
    $('gamesIframeContainer').style.display = 'none';
    $('secondGamesContainer').style.display = 'none';
    $('gamePlayerView').classList.remove('active');
    $('gamePlayerIframe').src = '';
    $('gamesHeader').style.display = 'none';
    $('gamesMenu').style.display = 'flex';
    $('gamesBack').style.display = 'none';
    $('gamesReload').style.display = 'none';
    $('gamesIframe').src = '';
  };

  $('gamesReload').onclick = () => {
    const src = $('gamesIframe').src;
    $('gamesIframe').src = '';
    $('gamesIframe').src = src;
  };

  $('gamesHideBar').onclick = () => {
    $('gamesHeader').style.display = 'none';
  };
}

function renderGames() {
  $('gamesGrid').innerHTML = gamesData.map(g => `
    <div class="game-card" data-url="${g.url}" data-name="${g.name}">
      <img src="${GAME_BASE}/${g.url}/${g.image}" alt="${g.name}" loading="lazy" onerror="this.style.display='none'">
      <p>${g.name}</p>
    </div>
  `).join('');

  $all('.game-card').forEach(card => {
    card.onclick = () => {
      currentGameUrl = card.dataset.url;
      $('gamePlayerTitle').textContent = card.dataset.name;
      $('secondGamesContainer').style.display = 'none';
      $('gamePlayerView').classList.add('active');
      $('gamePlayerLoading').classList.remove('hidden');
      $('gamePlayerIframe').src = `${GAME_BASE}/${currentGameUrl}/`;
    };
  });
}

function initNav() {
  function show(page) {
    $('homePage').style.display = 'none';
    $('gamesPage').classList.remove('active');
    $('moviesPage').classList.remove('active');
    $('chatPage').classList.remove('active');
    $('partnersPage').classList.remove('active');
    $('settingsPage').classList.remove('active');
    $all('.nav-link').forEach(l => l.classList.remove('active'));

    if (page === 'home') {
      $('homePage').style.display = 'flex';
      $('homeLink').classList.add('active');
    } else if (page === 'games') {
      $('gamesPage').classList.add('active');
      $('gamesLink').classList.add('active');
      $('gamesMenu').style.display = 'flex';
      $('gamesHeader').style.display = 'none';
      $('gamesIframeContainer').style.display = 'none';
      $('secondGamesContainer').style.display = 'none';
      $('gamePlayerView').classList.remove('active');
      $('gamesIframe').src = '';
      $('gamePlayerIframe').src = '';
    } else if (page === 'movies') {
      $('moviesPage').classList.add('active');
      $('moviesLink').classList.add('active');
      $('moviesIframe').src = 'https://www.fmovies.gd/home';
    } else if (page === 'chat') {
      $('chatPage').classList.add('active');
      $('chatLink').classList.add('active');
    } else if (page === 'partners') {
      $('partnersPage').classList.add('active');
      $('partnersLink').classList.add('active');
    } else if (page === 'settings') {
      $('settingsPage').classList.add('active');
    }
  }

  $('homeLink').onclick = () => show('home');
  $('gamesLink').onclick = () => show('games');
  $('moviesLink').onclick = () => show('movies');
  $('chatLink').onclick = () => show('chat');
  $('partnersLink').onclick = () => show('partners');
  $('settingsLink').onclick = () => show('settings');

  $('gamesHome').onclick = () => show('home');
  $('moviesHome').onclick = () => show('home');
  $('chatHome').onclick = () => show('home');
  $('partnersBack').onclick = () => show('home');
  $('settingsBack').onclick = () => show('home');

  $('creditsLink').onclick = () => $('creditsModal').classList.add('active');
  $('legalLink').onclick = () => $('legalModal').classList.add('active');

  $('sidebarCloseBtn').onclick = () => {
    $('sidebar').classList.add('collapsed');
    $('sidebarOpenBtn').classList.add('visible');
    $('mainWrapper').classList.add('expanded');
  };
  $('sidebarOpenBtn').onclick = () => {
    $('sidebar').classList.remove('collapsed');
    $('sidebarOpenBtn').classList.remove('visible');
    $('mainWrapper').classList.remove('expanded');
  };

  if (window.innerWidth <= 768) {
    $('sidebar').classList.add('collapsed');
    $('sidebarOpenBtn').classList.add('visible');
    $('mainWrapper').classList.add('expanded');
  }
}

let panicKey = (store.get('panicKey') || 'P').toUpperCase();
$('panicKeyDisplay').textContent = panicKey;

function initKeys() {
  document.onkeydown = (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key.toUpperCase() === panicKey) triggerPanic();
  };
}

function initPointerLock() {
  document.addEventListener('pointerlockchange', () => {
    if ($('pointerLockHint')) {
      $('pointerLockHint').classList.toggle('visible', !!document.pointerLockElement);
    }
  });
}

function initStats() {
  let last = performance.now(), frames = 0;
  function fps() {
    frames++;
    const now = performance.now();
    if (now - last >= 1000) {
      const f = Math.round(frames * 1000 / (now - last));
      $('fpsValue').textContent = f;
      $('fpsValue').className = 'stat-value ' + (f >= 50 ? 'good' : f >= 30 ? 'warn' : 'bad');
      frames = 0;
      last = now;
    }
    requestAnimationFrame(fps);
  }
  requestAnimationFrame(fps);

  setInterval(() => {
    const start = Date.now();
    fetch('https://www.google.com/favicon.ico', { mode: 'no-cors', cache: 'no-store' })
      .then(() => {
        const ping = Date.now() - start;
        $('pingValue').textContent = ping + 'ms';
        $('pingValue').className = 'stat-value ' + (ping < 100 ? 'good' : ping < 300 ? 'warn' : 'bad');
      }).catch(() => $('pingValue').textContent = '--');
  }, 5000);

  if (navigator.getBattery) {
    navigator.getBattery().then(b => {
      function bat() {
        const l = Math.round(b.level * 100);
        $('batteryValue').textContent = l + '%';
        $('batteryValue').className = 'stat-value ' + (l > 20 ? 'good' : 'bad');
      }
      bat();
      b.addEventListener('levelchange', bat);
    });
  }
}

function updateTime() {
  const now = new Date();
  $('time').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  $('date').textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
}
