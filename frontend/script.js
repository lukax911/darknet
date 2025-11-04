// External links used across the UI (update these when real URLs are ready)
const SOCIAL_URLS = {
    x: 'https://www.google.com',
    dex: 'https://www.google.com'
};

// Basic Solana address validation (Base58, 32-44 chars)
const SOLANA_ADDRESS_REGEX = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

// Category data - you can customize the content for each category
const categoryData = {
    'hackers-hub': {
        title: 'Hackers Hub',
        items: window.HACKERS_HUB_ITEMS || []
    },
    'drugs': {
        title: 'Drugs & Pharmacy',
        items: window.DRUGS_ITEMS || []
    },
    'crypto': {
        title: 'Crypto & Payments',
        items: window.CRYPTO_ITEMS || []
    },
    'operating-systems': {
        title: 'Operating Systems',
        items: window.OPERATING_SYSTEMS_ITEMS || []
    },
    'identity': {
        title: 'Identity',
        items: window.IDENTITY_ITEMS || []
    },
    'email-jabber': {
        title: 'Email & Jabber',
        items: window.EMAIL_JABBER_ITEMS || []
    },
    'markets-exchanges': {
        title: 'Markets & Exchanges',
        items: window.MARKETS_ITEMS || []
    },
    'information': {
        title: 'Information',
        items: window.INFORMATION_ITEMS || []
    },
    'news': {
        title: 'News',
        items: window.NEWS_ITEMS || []
    },
    'forums': {
        title: 'Forums',
        items: window.FORUMS_ITEMS || []
    },
    'services': {
        title: 'Services',
        items: window.SERVICES_ITEMS || []
    },
    'readme': {
        title: window.README_TITLE,
        type: 'txt',
        content: window.README_CONTENT
    },
    'trash': {
        title: 'Trash',
        items: [
            { name: 'epstein_list_LEAKED.txt', type: 'txt', content: `CONFIDENTIAL - LEAKED DOCUMENT
════════════════════════════════════

PROJECT: OPERATION [REDACTED]
FILE: EPSTEIN_ASSOCIATES_2019.txt
CLASSIFICATION: TOP SECRET
STATUS: DELETED BUT RECOVERED

WARNING: This document has been marked for deletion.
All names listed are purely fictional parody.

═══════════════════════════════════

KNOWN ASSOCIATES LIST:

1. [REDACTED] - Tech Industry
2. [REDACTED] - Finance Sector
3. [REDACTED] - Entertainment
4. John Q. Public - Nobody Real
5. [DATA CORRUPTED]
6. Jane Anonymous - Fictional Person
7. [REDACTED] - Government Official
8. [REDACTED] - Royal Family Member
9. Test Subject #4729
10. [FILE CORRUPTED - UNREADABLE]

═══════════════════════════════════

NOTE: This is a satirical document.
All content is fictional parody for
entertainment purposes only.

Last accessed: [TIMESTAMP DELETED]
Next burn date: OVERDUE

END OF DOCUMENT` },
            { name: 'jfk_assassination_truth.txt', type: 'txt', content: `CLASSIFIED DOCUMENT - EYES ONLY
════════════════════════════════════

PROJECT: OPERATION NORTHWOODS EXTENSION
FILE: JFK_DALLAS_1963_FINAL.txt
CLASSIFICATION: COSMIC TOP SECRET

════════════════════════════════════

KENNEDY ASSASSINATION - THE REAL STORY

Date: November 22, 1963
Location: Dealey Plaza, Dallas, TX

OFFICIAL NARRATIVE: [REDACTED]

ACTUAL EVENTS: [DATA EXPUNGED]

INVOLVED PARTIES:
- [REDACTED]
- The Grassy Knoll Guy (turned out to be lost tourist)
- [REDACTED]
- Magic Bullet (confirmed magic, studied by Hogwarts)

MAGIC BULLET TRAJECTORY:
[ASCII ART OF IMPOSSIBLE ANGLES]

CONCLUSION:
After 60 years of investigation, we've concluded
that [REDACTED] and also [REDACTED] because of
[REDACTED]. Makes total sense.

WITNESSES SILENCED: All of them. Even the ones still
alive and doing interviews. Super silenced.

════════════════════════════════════

DISCLAIMER: This is obvious satire.
Not real classified information.
Just spooky internet fun.

File scheduled for deletion: 1963
Still here though...

END TRANSMISSION` },
            { name: 'area51_employee_logs.txt', type: 'txt', content: `RESTRICTED ACCESS - AREA 51 PERSONNEL
════════════════════════════════════

FACILITY: GROOM LAKE / AREA 51
DOCUMENT: EMPLOYEE_ROSTER_2024.txt
CLEARANCE REQUIRED: MAJESTIC-12

════════════════════════════════════

CURRENT STAFF ROSTER:

ALIEN RELATIONS DEPARTMENT:
- Bob Smith - Chief Alien Whisperer
- Karen Johnson - Intergalactic HR
- Greg "Grey" Anderson - Cultural Liaison
- [REDACTED] - Definitely Not An Alien

SPACECRAFT MAINTENANCE:
- Joe "Plasma" Rodriguez - UFO Mechanic
- Sarah Chen - Anti-Gravity Specialist
- Mike Peters - Time Machine Technician (Still Late)

COVER-UP DIVISION:
- Chad Morrison - Weather Balloon Distributor
- Lisa Wang - Swamp Gas Expert
- Dave Brown - "You Saw Nothing" Specialist

CAFETERIA STAFF:
- Betty - Makes Amazing Space Tacos
- Carl - Knows Too Much (Great Coffee Though)

════════════════════════════════════

RECENT INCIDENTS:
- July 2024: Alien escaped, found at Vegas buffet
- Aug 2024: Time machine broke, yesterday happened twice
- Sept 2024: UFO joyride by intern (suspended)

NOTE: If you found this file, please return it.
We need to know who to promote to weather balloon duty.

This is satire. Area 51 is real but aliens aren't there.
Probably. Maybe. Who knows. 👽

END OF FILE` },
            { name: 'mkultra_subjects.txt', type: 'txt', content: `PROJECT MKULTRA - SUBJECT DATABASE
════════════════════════════════════

CIA MIND CONTROL PROGRAM
FILE: SUBJECT_ROSTER_[REDACTED].txt
STATUS: SUPPOSEDLY DESTROYED IN 1973

════════════════════════════════════

ACTIVE SUBJECTS:

SUBJECT #001: TEST USER
Status: Successful brainwashing
Current Location: Reading this file
Notes: If you're reading this, the program worked

SUBJECT #042: JOHN DOE
Status: Forgot his own name (too successful)
Last Seen: Wandering around asking "who am I?"

SUBJECT #069: JANE SMITH
Status: Can only speak in conspiracy theories
Side Effects: Sees surveillance everywhere

SUBJECT #420: [REDACTED]
Status: Too chill to mind control
Notes: Program failed, subject just ate chips

SUBJECT #666: KAREN JOHNSON
Status: Wants to speak to manager of mind control
Notes: Immune to all techniques

SUBJECT #777: LUCKY LARRY
Status: Won lottery, escaped program
Current: Living on private island, good for him

════════════════════════════════════

PROGRAM ASSESSMENT:
Success Rate: 3%
Failure Rate: 97%
Wasted Budget: $87 Million

CONCLUSION: Maybe just use social media instead?
Seems to work better.

════════════════════════════════════

LEGAL DISCLAIMER: This is fictional satire.
Real MKUltra was real but this ain't real data.

DELETE THIS FILE: Yes
File Status: Still Here, Obviously

END OF DOCUMENT` },
            { name: 'rothschild_secrets.txt', type: 'txt', content: `THE ROTHSCHILD CONSPIRACY FILES
════════════════════════════════════

ILLUMINATI CONFIRMED?????
FILE: BANKERS_RULE_WORLD.txt
SOURCE: Reddit + 4chan + My Uncle

════════════════════════════════════

SECRET MEETING NOTES - 2024

ATTENDEES:
- All the Rothschilds (lost count)
- The Illuminati CEO
- Lizard People Ambassador
- That Guy From The Memes
- Definitely Not Your Neighbor Steve

AGENDA:
1. Control world economy ✓
2. Hide gold in mountains ✓
3. Make up new conspiracy ✓
4. Lunch break ✓
5. Discuss why people believe this stuff ✓

WORLD DOMINATION PROGRESS:
Banks: Controlled
Gold: Hidden
Media: [REDACTED]
Your Mind: Reading This File

NEW WORLD ORDER STATUS:
Still pending. Forms stuck in bureaucracy.
Even secret societies have paperwork problems.

════════════════════════════════════

ILLUMINATI MEMBERSHIP PERKS:
✓ Free tinfoil hats
✓ Secret handshake tutorial
✓ Pyramid scheme discount
✓ All-seeing eye insurance

════════════════════════════════════

TRUTH: This is obviously a joke.
The real conspiracy is that there's
no good conspiracy. Just rich people
doing rich people things.

Boring, right?

FILE STATUS: Deleted but not really
NEXT MEETING: Same time, same secret location

END TRANSMISSION` }
        ]
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {

    // Start with landing page
    document.getElementById('landing-page').classList.add('active');

    setupSocialLinks();

    // Update time
    updateTime();
    setInterval(updateTime, 1000);

    // Access button click
    document.getElementById('access-btn').addEventListener('click', startBootSequence);

    // Also allow any key press on landing page
    document.addEventListener('keydown', function handleKeyPress(e) {
        if (document.getElementById('landing-page').classList.contains('active')) {
            startBootSequence();
            document.removeEventListener('keydown', handleKeyPress);
        }
    });

    // Desktop icon interactions
    setupDesktopIcons();

    // Wallet button
    setupWalletButton();
});

function setupSocialLinks() {
    const linkMap = [
        { id: 'x-btn-landing', url: SOCIAL_URLS.x },
        { id: 'x-btn-desktop', url: SOCIAL_URLS.x },
        { id: 'eagle-btn-landing', url: SOCIAL_URLS.dex },
        { id: 'eagle-btn-desktop', url: SOCIAL_URLS.dex }
    ];

    linkMap.forEach(({ id, url }) => {
        const anchor = document.getElementById(id);
        if (!anchor || !url) return;

        anchor.href = url;
        anchor.dataset.link = url;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
    });
}

function startBootSequence() {
    // Hide landing page
    document.getElementById('landing-page').classList.remove('active');

    // Show boot screen
    const bootScreen = document.getElementById('boot-screen');
    bootScreen.classList.add('active');

    // After boot sequence, show desktop
    setTimeout(() => {
        bootScreen.classList.remove('active');
        document.getElementById('desktop').classList.add('active');
    }, 4000);
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    document.getElementById('time').textContent = `${displayHours}:${minutes} ${ampm}`;
}

function setupDesktopIcons() {
    const icons = document.querySelectorAll('.icon');
    const trashIcon = document.getElementById('trash-icon');
    const desktopEl = document.getElementById('desktop');

    icons.forEach(icon => {
        if (icon.dataset.listenersBound === 'true') return;
        icon.dataset.listenersBound = 'true';

        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            icons.forEach(i => i.classList.remove('selected'));
            if (trashIcon) {
                trashIcon.classList.remove('selected');
            }
            icon.classList.add('selected');
        });

        icon.addEventListener('dblclick', () => {
            const category = icon.dataset.category;
            openWindow(category);
        });
    });

    if (trashIcon && trashIcon.dataset.listenersBound !== 'true') {
        trashIcon.dataset.listenersBound = 'true';

        trashIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            icons.forEach(i => i.classList.remove('selected'));
            trashIcon.classList.add('selected');
        });

        trashIcon.addEventListener('dblclick', () => {
            openWindow('trash');
        });
    }

    if (desktopEl && desktopEl.dataset.listenersBound !== 'true') {
        desktopEl.dataset.listenersBound = 'true';

        desktopEl.addEventListener('click', () => {
            icons.forEach(i => i.classList.remove('selected'));
            if (trashIcon) {
                trashIcon.classList.remove('selected');
            }
        });
    }
}

function setupWalletButton() {
    const walletButton = document.getElementById('wallet-button');
    if (!walletButton) return;

    if (walletButton.dataset.listenersBound === 'true') return;
    walletButton.dataset.listenersBound = 'true';

    if (walletConnected) {
        walletButton.textContent = 'CONNECTED';
        walletButton.classList.add('connected');
    }

    walletButton.addEventListener('click', () => {
        openWalletTerminal();
    });
}

function openWalletTerminal() {
    const template = document.getElementById('window-template');
    const windowEl = template.cloneNode(true);
    windowEl.id = `wallet-terminal-${windowCounter++}`;
    windowEl.style.display = 'block';

    const offset = activeWindows.length * 30;
    windowEl.style.left = `${140 + offset}px`;
    windowEl.style.top = `${100 + offset}px`;
    windowEl.querySelector('.title-bar-text').textContent = 'Wallet Connector';

    const windowContent = windowEl.querySelector('.window-content');
    windowContent.innerHTML = `
        <div class="wallet-terminal">
            <div class="terminal-header">VOID@CONNECT:~$ paste_wallet_address</div>
            <textarea class="terminal-input" id="wallet-input" placeholder="0x... or bc1..." spellcheck="false"></textarea>
            <div class="terminal-actions">
                <button class="terminal-btn" id="wallet-submit">link</button>
                <button class="terminal-btn" id="wallet-clear">clear</button>
            </div>
            <pre class="terminal-log" id="wallet-log">Awaiting wallet address...</pre>
        </div>
    `;

    document.getElementById('desktop').appendChild(windowEl);
    addTaskbarItem(windowEl.id, 'Wallet Connector');
    setupWindowControls(windowEl);
    makeWindowDraggable(windowEl);
    activeWindows.push(windowEl.id);
    bringToFront(windowEl);

    const input = windowEl.querySelector('#wallet-input');
    const submit = windowEl.querySelector('#wallet-submit');
    const clear = windowEl.querySelector('#wallet-clear');
    const log = windowEl.querySelector('#wallet-log');

    if (walletConnected && connectedWalletAddress) {
        input.value = connectedWalletAddress;
        log.textContent = `Connected to wallet:\n${connectedWalletAddress}`;
    }

    submit.addEventListener('click', () => {
        const value = input.value.trim();
        if (!value) {
            log.textContent = 'No input detected. Please paste a wallet address.';
            return;
        }
        if (!SOLANA_ADDRESS_REGEX.test(value)) {
            log.textContent = 'Invalid Solana address format. Please try again.';
            return;
        }

        markWalletConnected(value);
        log.textContent = `Address received:\n${value}\n\nConnection status: CONNECTED`;
    });

    clear.addEventListener('click', () => {
        input.value = '';
        log.textContent = 'Awaiting wallet address...';
    });
}

let windowCounter = 0;
let activeWindows = [];
let walletConnected = false;
let connectedWalletAddress = '';

function markWalletConnected(address) {
    const walletButton = document.getElementById('wallet-button');
    walletConnected = true;
    connectedWalletAddress = address;

    if (walletButton) {
        walletButton.textContent = 'CONNECTED';
        walletButton.classList.add('connected');
        walletButton.dataset.connectedAddress = address;
    }
}

function openWindow(category) {
    const data = categoryData[category];
    if (!data) return;

    if (data.type === 'txt' && data.content) {
        openTextViewer(data.title, data.content);
        return;
    }

    // Clone window template
    const template = document.getElementById('window-template');
    const windowEl = template.cloneNode(true);
    windowEl.id = `window-${windowCounter++}`;
    windowEl.style.display = 'block';

    // Position window
    const offset = activeWindows.length * 30;
    windowEl.style.left = `${100 + offset}px`;
    windowEl.style.top = `${80 + offset}px`;

    // Set title
    windowEl.querySelector('.title-bar-text').textContent = data.title;

    // Populate content
    const folderContent = windowEl.querySelector('.folder-content');
    data.items.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'folder-item';

        const icon = item.type === 'folder'
            ? generateFolderIcon()
            : generateFileIcon();

        itemEl.innerHTML = `
            <img src="${icon}" alt="${item.type}">
            <span>${item.name}</span>
        `;

        // Add click handler for txt files
        if (item.type === 'txt' && item.content) {
            itemEl.style.cursor = 'pointer';
            itemEl.addEventListener('dblclick', () => {
                openTextViewer(item.name, item.content);
            });
        }

        folderContent.appendChild(itemEl);
    });

    // Add to desktop
    document.getElementById('desktop').appendChild(windowEl);

    // Add to taskbar
    addTaskbarItem(windowEl.id, data.title);

    // Setup window controls
    setupWindowControls(windowEl);

    // Make draggable
    makeWindowDraggable(windowEl);

    activeWindows.push(windowEl.id);
    bringToFront(windowEl);
}

function setupWindowControls(windowEl) {
    const closeBtn = windowEl.querySelector('.close-btn');
    const minimizeBtn = windowEl.querySelector('.minimize-btn');
    const maximizeBtn = windowEl.querySelector('.maximize-btn');

    closeBtn.addEventListener('click', () => {
        closeWindow(windowEl);
    });

    minimizeBtn.addEventListener('click', () => {
        windowEl.style.display = 'none';
        updateTaskbarItem(windowEl.id, false);
    });

    maximizeBtn.addEventListener('click', () => {
        if (windowEl.classList.contains('maximized')) {
            windowEl.classList.remove('maximized');
            windowEl.style.width = '600px';
            windowEl.style.height = 'auto';
            windowEl.style.left = windowEl.dataset.originalLeft;
            windowEl.style.top = windowEl.dataset.originalTop;
        } else {
            windowEl.dataset.originalLeft = windowEl.style.left;
            windowEl.dataset.originalTop = windowEl.style.top;
            windowEl.classList.add('maximized');
            windowEl.style.width = 'calc(100vw - 20px)';
            windowEl.style.height = 'calc(100vh - 60px)';
            windowEl.style.left = '10px';
            windowEl.style.top = '10px';
        }
    });

    // Click window to bring to front
    windowEl.addEventListener('mousedown', () => {
        bringToFront(windowEl);
    });
}

function makeWindowDraggable(windowEl) {
    const titleBar = windowEl.querySelector('.title-bar');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;

    titleBar.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'BUTTON') return;

        isDragging = true;
        initialX = e.clientX - windowEl.offsetLeft;
        initialY = e.clientY - windowEl.offsetTop;
        windowEl.classList.add('dragging');
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        windowEl.style.left = currentX + 'px';
        windowEl.style.top = currentY + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            windowEl.classList.remove('dragging');
        }
    });
}

function closeWindow(windowEl) {
    removeTaskbarItem(windowEl.id);
    activeWindows = activeWindows.filter(id => id !== windowEl.id);
    windowEl.remove();
}

function bringToFront(windowEl) {
    const windows = document.querySelectorAll('.window');
    windows.forEach(w => {
        w.style.zIndex = 100;
    });
    windowEl.style.zIndex = 101;

    // Update taskbar
    const taskbarItems = document.querySelectorAll('.taskbar-item');
    taskbarItems.forEach(item => item.classList.remove('active'));
    const taskbarItem = document.querySelector(`[data-window-id="${windowEl.id}"]`);
    if (taskbarItem) {
        taskbarItem.classList.add('active');
    }
}

function addTaskbarItem(windowId, title) {
    const taskbarItems = document.querySelector('.taskbar-items');
    const item = document.createElement('div');
    item.className = 'taskbar-item active';
    item.dataset.windowId = windowId;
    item.textContent = title;

    item.addEventListener('click', () => {
        const windowEl = document.getElementById(windowId);
        if (windowEl.style.display === 'none') {
            windowEl.style.display = 'block';
            item.classList.add('active');
        } else if (windowEl.style.zIndex === '101') {
            windowEl.style.display = 'none';
            item.classList.remove('active');
        } else {
            bringToFront(windowEl);
        }
    });

    taskbarItems.appendChild(item);
}

function removeTaskbarItem(windowId) {
    const item = document.querySelector(`[data-window-id="${windowId}"]`);
    if (item) item.remove();
}

function updateTaskbarItem(windowId, isActive) {
    const item = document.querySelector(`[data-window-id="${windowId}"]`);
    if (item) {
        if (isActive) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    }
}

function generateFolderIcon() {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23001100' stroke='%2300ff00' stroke-width='1' d='M2 6h12l2 3h14v17H2z'/%3E%3Cpath fill='%23003300' d='M2 9h12l2 3h14v14H2z'/%3E%3C/svg%3E";
}

function generateFileIcon() {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23001100' stroke='%2300ff00' stroke-width='1' d='M6 2h14l6 6v22H6z'/%3E%3Cpath fill='%23003300' d='M20 2v6h6z'/%3E%3Cline x1='10' y1='14' x2='22' y2='14' stroke='%2300ff00' stroke-width='1'/%3E%3Cline x1='10' y1='18' x2='22' y2='18' stroke='%2300ff00' stroke-width='1'/%3E%3Cline x1='10' y1='22' x2='18' y2='22' stroke='%2300ff00' stroke-width='1'/%3E%3C/svg%3E";
}

// Text Viewer for .txt files
function openTextViewer(filename, content) {
    // Clone window template
    const template = document.getElementById('window-template');
    const windowEl = template.cloneNode(true);
    windowEl.id = `window-${windowCounter++}`;
    windowEl.style.display = 'block';

    // Position window
    const offset = activeWindows.length * 30;
    windowEl.style.left = `${120 + offset}px`;
    windowEl.style.top = `${100 + offset}px`;

    // Set title
    windowEl.querySelector('.title-bar-text').textContent = filename;

    // Replace folder content with text viewer
    const windowContent = windowEl.querySelector('.window-content');
    windowContent.innerHTML = `<pre class="text-viewer">${content}</pre>`;

    // Add to desktop
    document.getElementById('desktop').appendChild(windowEl);

    // Add to taskbar
    addTaskbarItem(windowEl.id, filename);

    // Setup window controls
    setupWindowControls(windowEl);

    // Make draggable
    makeWindowDraggable(windowEl);

    activeWindows.push(windowEl.id);
    bringToFront(windowEl);
}

// Matrix Rain Effect
function initMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/\\|';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff00';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 50);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Warning Dialog
function initWarningDialog() {
    const dialog = document.getElementById('warning-dialog');
    const acceptBtn = document.getElementById('dialog-accept');
    const declineBtn = document.getElementById('dialog-decline');
    const closeBtn = document.getElementById('dialog-close');

    // Show dialog after desktop loads
    setTimeout(() => {
        dialog.classList.add('active');
    }, 500);

    acceptBtn.addEventListener('click', () => {
        dialog.classList.remove('active');
    });

    declineBtn.addEventListener('click', () => {
        // Redirect to landing page
        document.getElementById('desktop').classList.remove('active');
        document.getElementById('landing-page').classList.add('active');
        dialog.classList.remove('active');
    });

    closeBtn.addEventListener('click', () => {
        dialog.classList.remove('active');
    });
}

// Random Glitch Effect
function randomGlitch() {
    const desktop = document.getElementById('desktop');
    if (!desktop.classList.contains('active')) return;

    const glitchClass = 'glitch-effect';
    desktop.classList.add(glitchClass);

    setTimeout(() => {
        desktop.classList.remove(glitchClass);
    }, 100);

    // Random interval between 10-30 seconds
    const nextGlitch = Math.random() * 20000 + 10000;
    setTimeout(randomGlitch, nextGlitch);
}

// Initialize Matrix and Dialog when desktop loads
const originalStartBootSequence = startBootSequence;
window.startBootSequence = function() {
    originalStartBootSequence();

    // Initialize Matrix rain when desktop becomes active
    setTimeout(() => {
        initMatrixRain();
        initWarningDialog();
        randomGlitch(); // Start glitch effects
    }, 4100);
};
