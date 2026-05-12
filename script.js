const baseUrl = "https://s3.us-east-1.amazonaws.com/hanosoonv10.3-6767776777676767676767666767676767676767676766767/";

const gamesData = [
    { title: "10mintilldawn", href: "work/10minutestilldawn/10minutestilldawnhanson.html", img: "images/10mindawn.jpg" },
    { title: "a dance of fire and ice", href: "work/a-dance-of-fire-and-ice/index.html", img: "images/adofai.webp" },
    { title: "basket random", href: "work/basketrandom/basketrandomhanson.html", img: "images/basketrandom better quality.png" },
    { title: "basketball stars", href: "work/basketballstars/index.html", img: "images/basketballstars.png" },
    { title: "backrooms", href: "work/backrooms/backroomshanson.html", img: "images/backroomsbetter quality.png" },
    { title: "balatro", href: "work/balatro/index.html", img: "images/balatro.webp" },
    { title: "baldis basics", href: "work/baldibasics/index.html", img: "images/baldis basics.png" },
    { title: "baconmaydie", href: "work/baconmaydie/baconsmaydiehanson.html", img: "images/baconmaydie.png" },
    { title: "bike obby", href: "work/bikeobby/index.html", img: "images/bikeobby.webp" },
    { title: "block blast", href: "work/blockblast/blockblasthanson.html", img: "images/blockblast.png" },
    { title: "bottle flip 3d", href: "work/bottleflip3d/index.html", img: "images/bottle-flip-3d.png" },
    { title: "boxing random", href: "work/boxingrandom/boxingrandomhanson.html", img: "images/boxingrandom.jpg" },
    { title: "cluster rush", href: "work/cluster_rush/clusterrushhanson.html", img: "images/cluster_rush.png" },
    { title: "cookie clicker", href: "work/cookieclicker/cookieclickerhanson.html", img: "images/cookie clicker.png" },
    { title: "core ball", href: "work/coreball/index.html", img: "images/coreball.png" },
    { title: "crazy cattle 3d", href: "work/crazycattle3d/index.html", img: "images/crazy-cattle-3d.png" },
    { title: "crossy road", href: "work/crossyroad/index.html", img: "images/crossy-road.avif" },
    { title: "dadish 3", href: "work/dadish3/index.html", img: "images/dadish3.png" },
    { title: "draw the hill", href: "work/drawthehill/index.html", img: "images/draw-the-hill.webp" },
    { title: "drive mad", href: "work/drivemad/drivemadhanson.html", img: "images/drivemad.jpeg" },
    { title: "eaglercraft 1.12", href: "work/eaglercraft 1.12/Eaglercraft_1.12_Offline_en_US.html", img: "images/minecraft.png" },
    { title: "eaglercraft 1.5.2", href: "work/eaglercraft 1.5.2/EaglerCraft-20230428T144157Z-001/EaglerCraft/This is Game/Offline_Download_Version.html", img: "images/minecraft.png" },
    { title: "eaglercraft 1.8.8", href: "work/eaglercraft 1.8.8 mulitplayer/eaglercraft.1.8.8.html", img: "images/minecraft.png" },
    { title: "escape road", href: "work/escaperoad/escaperoad.html", img: "images/escaperoad.png" },
    { title: "escape road 2", href: "work/escaperoad2/index.html", img: "images/escape-road-2-cover.png" },
    { title: "geodashlite", href: "work/geodashlite/geodashlitehanson.html", img: "images/geodashlite.png" },
    { title: "getaway shootout", href: "work/getawayshootout/index.html", img: "images/getaway shootout.webp" },
    { title: "granny", href: "work/granny/index.html", img: "images/granny.png" },
    { title: "hole.io", href: "work/holeio2018/hansonholeio.html", img: "images/Hole.io_logo.jpg" },
    { title: "its raining boxes", href: "work/itsrainingboxes/itsrainingboxeshanson.html", img: "images/itsrainingboxes.jpg" },
    { title: "justfall.lol", href: "work/justfall.lol/justfalllolhanson.html", img: "images/just-fallbiglogo.png" },
    { title: "level devil", href: "work/leveldevil/index.html", img: "images/level-devil.avif" },
    { title: "monkey mart", href: "work/monkeymart/hansonmonkeymart.html", img: "images/monkeymart.jpg" },
    { title: "monster tracks", href: "work/monstertracks/monstertrackshanson.html", img: "images/monstertracksbiglogo.jpg" },
    { title: "motox3m", href: "work/motox3m/index.html", img: "images/moto-x3m_1x1-cover.png" },
    { title: "OvO", href: "work/ovo better/index.html", img: "images/OvO.jpg" },
    { title: "paperio", href: "work/paperio2/paperio.html", img: "images/paperio2.jpg" },
    { title: "pokepath td", href: "work/pokepath/index.html", img: "images/pokepath-td.png" },
    { title: "poly track un-modded", href: "work/polytrack unmodded/index.html", img: "images/polytrack.jpg" },
    { title: "poly track", href: "work/polytrack.3/hansonpolytrack.html", img: "images/polytrack.jpg" },
    { title: "poor bunny", href: "work/poorbunny/index.html", img: "images/poorbunny.png" },
    { title: "retrobowl", href: "work/retrobowl/retrobowlhanson.html", img: "images/retrobowl.png" },
    { title: "rooftopsnipers2", href: "work/rooftopsnipers2/rooftopsnipershanson.html", img: "images/rooftop-snipers-2.jpg" },
    { title: "slope", href: "work/slope/index.html", img: "images/slope.png" },
    { title: "slow roads", href: "work/slowroadsv1.01/slowroadshanson.html", img: "images/slowroads.svg" },
    { title: "snowbattle.io", href: "work/snowbattle.io/index.html", img: "images/snowbattleio.png" },
    { title: "snowrider3d", href: "work/snowrider3d/snowrider3dhanson.html", img: "images/snowrider.png" },
    { title: "spacebar clicker", href: "work/spacebarclicker/index.html", img: "images/spacebarclicker.png" },
    { title: "space huggers", href: "work/spacehuggers/spacehuggers.html", img: "images/space-huggers.jpg" },
    { title: "space waves", href: "work/spacewaves/index.html", img: "images/spacewaves.png" },
    { title: "stack", href: "work/stack/hansonstack.html", img: "images/stack.png" },
    { title: "stickman hook", href: "work/stickmanhook/index.html", img: "images/stickmanhook.jpg" },
    { title: "subway surfers", href: "work/subwaysurfers/subwaysurfershanson.html", img: "images/subwaysurfers.jpg" },
    { title: "superhot", href: "work/superhot/index.html", img: "images/superhot.avif" },
    { title: "temple run 2", href: "work/templerun2/index.html", img: "images/temple-run-2.avif" },
    { title: "there is no game", href: "work/thereisnogame/index.html", img: "images/thereisnogame.png" },
    { title: "time shooter 3", href: "work/timeshooter3/index.html", img: "images/time-shooter-3-swat_1x1-cover.png" },
    { title: "tiny fishing", href: "work/tinyfishing/index.html", img: "images/tiny-fishing.jpg" },
    { title: "totm", href: "work/totm/hansontotm.html", img: "images/totm.jpeg" },
    { title: "tube jumpers", href: "work/tube-jumpers/index.html", img: "images/tubejumpers.jpg" },
    { title: "tunnel rush", href: "work/tunnel rush/tunnelrushhanson.html", img: "images/tunnelrush.png" },
    { title: "vex8", href: "work/vex8/Vex8/index.html", img: "images/vex8.jpeg" },
    { title: "volley random", href: "work/volleyrandom/volleyrandomhanson.html", img: "images/volleyrandom.png" }
];

const gamesGrid = document.getElementById('games-grid');
const searchInput = document.getElementById('search-input');
const gameModal = document.getElementById('game-modal');
const gameIframe = document.getElementById('game-iframe');
const modalTitle = document.getElementById('modal-title');
const closeModalBtn = document.getElementById('close-modal-btn');
const fullscreenBtn = document.getElementById('fullscreen-btn');

// Rendering logic
function renderGames(games) {
    gamesGrid.innerHTML = '';
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div class="card-image-wrapper">
                <img class="card-image" src="${baseUrl}${game.img}" alt="${game.title}" loading="lazy">
            </div>
            <div class="card-title">${game.title}</div>
        `;
        
        card.addEventListener('click', () => openGame(game));
        
        // Interactive 3D Tilt Effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;
            
            card.style.transition = 'transform 0.1s ease-out';
            card.style.transform = `perspective(1000px) scale(1.05) translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            card.style.transform = '';
        });

        gamesGrid.appendChild(card);
    });
}

// Search logic
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = gamesData.filter(game => game.title.toLowerCase().includes(term));
    renderGames(filtered);
});

// Modal logic
function openGame(game) {
    modalTitle.textContent = game.title;
    gameIframe.src = baseUrl + game.href;
    gameModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

closeModalBtn.addEventListener('click', () => {
    gameModal.style.display = 'none';
    gameIframe.src = '';
    document.body.style.overflow = '';
});

fullscreenBtn.addEventListener('click', () => {
    if (gameIframe.requestFullscreen) {
        gameIframe.requestFullscreen();
    } else if (gameIframe.webkitRequestFullscreen) {
        gameIframe.webkitRequestFullscreen();
    } else if (gameIframe.msRequestFullscreen) {
        gameIframe.msRequestFullscreen();
    }
});

// Initial Render
renderGames(gamesData);

// ==========================================
// DATE & TIME LOGIC
// ==========================================
function updateDateTime() {
    const timeDisplay = document.getElementById('time-display');
    const dateDisplay = document.getElementById('date-display');
    
    if (!timeDisplay || !dateDisplay) return;

    const now = new Date();
    
    // Format Time (e.g., 04:20:45 PM)
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const timeString = now.toLocaleTimeString(undefined, timeOptions);
    
    // Format Date (e.g., Monday, October 23, 2026)
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, dateOptions);
    
    timeDisplay.textContent = timeString;
    dateDisplay.textContent = dateString;
}

updateDateTime();
setInterval(updateDateTime, 1000);

// ==========================================
// INTERACTIVE FLOATING BALLS BACKGROUND
// ==========================================

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
let mouse = { x: null, y: null, radius: 150 };

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.color = `rgba(0, 240, 255, ${Math.random() * 0.5 + 0.2})`;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        // Continuous slow movement
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction
        if (mouse.x != null && mouse.y != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                // Calculate push force
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (mouse.radius - distance) / mouse.radius;
                const directionX = forceDirectionX * force * this.density;
                const directionY = forceDirectionY * force * this.density;
                
                this.x -= directionX;
                this.y -= directionY;
            }
        }
    }
}

function initParticles() {
    particles = [];
    const particleCount = Math.floor((width * height) / 9000);
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    
    // Draw connecting lines
    connectParticles();
    
    requestAnimationFrame(animateParticles);
}

function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = dx * dx + dy * dy;
            
            if (distance < 15000) {
                const opacity = 1 - (distance / 15000);
                ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * 0.2})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

initParticles();
animateParticles();
