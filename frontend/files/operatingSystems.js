window.OPERATING_SYSTEMS_ITEMS = [
    {
        name: 'README.txt',
        type: 'txt',
        content: `OPERATING SYSTEMS DIRECTORY
═════════════════════════════

Contents
- Tails.txt → Privacy-focused live system overview + install links
- Qubes OS.txt → Compartmentalized security desktop + install links
- Whonix.txt → Tor gateway/workstation pair + install links

Usage
Open the distro sheets for a quick brief and official download
pointers before you spin up the next environment.`
    },
    {
        name: 'Tails.txt',
        type: 'txt',
        content: `TAILS OVERVIEW
════════════════════════
Purpose
- Live OS that routes all traffic through Tor
- Leaves no trace on the host machine by default

Key Traits
- Amnesiac: wipes memory and storage on shutdown
- Ships with secure defaults (Tor Browser, KeePassXC, OnionShare)
- Easy verification workflow using PGP signatures

Install Links
- Download & install guide: https://tails.net/install/
- Signature verification: https://tails.net/install/download/index.en.html#verify

Best For
- Journalists, whistleblowers, privacy-focused travelers
- Situations where you cannot trust the host hardware`
    },
    {
        name: 'Qubes OS.txt',
        type: 'txt',
        content: `QUBES OS OVERVIEW
════════════════════════
Purpose
- Security by compartmentalization using Xen virtualization
- Runs apps in isolated VMs (qubes) with different trust levels

Key Traits
- Template-based VMs keep updates centralized
- Color-coded window borders show trust domains at a glance
- Disposable qubes launch from clean snapshots on demand

Install Links
- Download ISO: https://www.qubes-os.org/downloads/
- Installation docs: https://www.qubes-os.org/doc/installation-guide/

Best For
- Researchers, developers, security pros juggling mixed-trust tasks
- Power users comfortable managing multiple virtual machines`
    },
    {
        name: 'Whonix.txt',
        type: 'txt',
        content: `WHONIX OVERVIEW
════════════════════════
Purpose
- Debian-based OS that routes all traffic through Tor
- Splits networking into two VMs: Gateway (Tor) + Workstation (apps)

Key Traits
- Strong isolation between network and application layers
- Workstation cannot learn the external IP
- Works inside Qubes OS and other virtualization platforms

Install Links
- VirtualBox/KVM downloads: https://www.whonix.org/wiki/Download
- Setup instructions: https://www.whonix.org/wiki/Documentation

Best For
- Users needing persistent anonymity with strong compartmentalization
- Pairing with Qubes OS or other hypervisors for layered security`
    }
];
