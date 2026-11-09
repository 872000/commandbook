// CommandBook data — 100% original reference content.
// Every entry is a real command with correct syntax, checked against
// macOS (zsh), Windows PowerShell 5.1/7, and CMD.
// Schema per command: id, platform, shell, category, command, syntax,
// description, steps[], example, tags[], note (optional).

var COMMANDS = [
  // ---------------- macOS (Terminal / zsh) ----------------
  {
    id: "mac-ls",
    platform: "macOS",
    shell: "zsh",
    category: "Files & folders",
    command: "ls",
    syntax: "ls -la [path]",
    description: "List files and folders in a directory, including hidden ones.",
    steps: [
      "Open Terminal (Spotlight: Cmd + Space, type Terminal, press Enter).",
      "Type ls and press Enter to list the current folder.",
      "Add -l for details like size and date, and -a to include hidden files (names starting with a dot).",
      "Add a path, such as ls -la ~/Documents, to list a different folder without moving there."
    ],
    example: "ls -la ~/Documents",
    tags: ["list", "files", "folders", "directory", "hidden"]
  },
  {
    id: "mac-cd",
    platform: "macOS",
    shell: "zsh",
    category: "Files & folders",
    command: "cd",
    syntax: "cd [path]",
    description: "Change the current directory (move into a different folder).",
    steps: [
      "Type cd followed by the folder path and press Enter.",
      "Use cd .. to go up one level, and cd ~ or just cd to go back to your home folder.",
      "Use cd - to jump back to the previous folder you were in.",
      "Drag a folder from Finder into the Terminal window to paste its path automatically."
    ],
    example: "cd ~/Documents/Projects",
    tags: ["change directory", "navigate", "folders", "cd"]
  },
  {
    id: "mac-pwd",
    platform: "macOS",
    shell: "zsh",
    category: "Files & folders",
    command: "pwd",
    syntax: "pwd",
    description: "Print the full path of the folder you are currently in.",
    steps: [
      "Type pwd and press Enter.",
      "The terminal prints the absolute path, for example /Users/yourname/Documents.",
      "Use it whenever you are lost or before running a command that depends on your location."
    ],
    example: "pwd",
    tags: ["where am i", "path", "current directory"]
  },
  {
    id: "mac-mkdir",
    platform: "macOS",
    shell: "zsh",
    category: "Files & folders",
    command: "mkdir",
    syntax: "mkdir [-p] <folder-name>",
    description: "Create a new folder. The -p flag creates parent folders too and does not complain if the folder already exists.",
    steps: [
      "Type mkdir followed by the folder name and press Enter.",
      "Add -p to create nested folders in one go, such as mkdir -p Projects/website/images.",
      "Use quotes around names with spaces: mkdir \"My Photos\"."
    ],
    example: "mkdir -p ~/Documents/Projects/website",
    tags: ["create", "make directory", "new folder"]
  },
  {
    id: "mac-cp",
    platform: "macOS",
    shell: "zsh",
    category: "Files & folders",
    command: "cp",
    syntax: "cp [-R] <source> <destination>",
    description: "Copy a file or folder. Add -R to copy a folder and everything inside it.",
    steps: [
      "Type cp, then the file to copy, then where it should go.",
      "To copy a folder, add -R: cp -R Photos Photos-backup.",
      "Add -i to be asked before overwriting an existing file.",
      "Use cp -R with a trailing slash carefully: cp -R Photos/ Backup/ copies the contents of Photos into Backup."
    ],
    example: "cp -R ~/Documents/report.docx ~/Desktop/",
    tags: ["copy", "duplicate", "backup", "files"]
  },
  {
    id: "mac-mv",
    platform: "macOS",
    shell: "zsh",
    category: "Files & folders",
    command: "mv",
    syntax: "mv <source> <destination>",
    description: "Move a file or folder, or rename it by moving it to a new name in the same folder.",
    steps: [
      "Type mv, then the file, then the destination folder or new name.",
      "To rename: mv old-name.txt new-name.txt.",
      "To move into another folder: mv file.txt ~/Documents/.",
      "Add -i to be asked before overwriting a file with the same name."
    ],
    example: "mv ~/Downloads/photo.jpg ~/Pictures/",
    tags: ["move", "rename", "files"]
  },
  {
    id: "mac-rm",
    platform: "macOS",
    shell: "zsh",
    category: "Files & folders",
    command: "rm",
    syntax: "rm [-i] [-r] <file-or-folder>",
    description: "Delete a file or folder. Deleted files do NOT go to the Trash — they are gone immediately.",
    steps: [
      "Type rm followed by the file name to delete one file.",
      "Add -r to delete a folder and everything inside it.",
      "Add -i to be asked to confirm each file before deleting it.",
      "Never run rm -rf / or rm -rf ~ — that deletes your whole system or home folder."
    ],
    example: "rm -i old-notes.txt",
    tags: ["delete", "remove", "trash", "files"],
    note: "There is no undo. When in doubt, use rm -i, or move the file to the Trash with Finder instead."
  },
  {
    id: "mac-touch",
    platform: "macOS",
    shell: "zsh",
    category: "Files & folders",
    command: "touch",
    syntax: "touch <filename>",
    description: "Create an empty file, or update the timestamp of a file that already exists.",
    steps: [
      "Type touch followed by the file name and press Enter.",
      "If the file does not exist, an empty file is created.",
      "If it already exists, its modification time is updated to now and its contents are untouched."
    ],
    example: "touch notes.txt",
    tags: ["create file", "empty file", "timestamp"]
  },
  {
    id: "mac-cat",
    platform: "macOS",
    shell: "zsh",
    category: "Files & folders",
    command: "cat",
    syntax: "cat <file>",
    description: "Print the whole contents of a text file to the terminal.",
    steps: [
      "Type cat followed by the file name and press Enter.",
      "For long files the output scrolls past — use less instead so you can page through it.",
      "You can print several files in a row: cat part1.txt part2.txt."
    ],
    example: "cat ~/.zshrc",
    tags: ["read", "view", "print file", "text"]
  },
  {
    id: "mac-less",
    platform: "macOS",
    shell: "zsh",
    category: "Files & folders",
    command: "less",
    syntax: "less <file>",
    description: "View a file one screen at a time, with scrolling and searching.",
    steps: [
      "Type less followed by the file name and press Enter.",
      "Use the arrow keys or Page Down to scroll, and press / then a word to search inside the file.",
      "Press n to jump to the next match, and q to quit back to the prompt."
    ],
    example: "less /var/log/system.log",
    tags: ["read", "view", "scroll", "pager", "log"]
  },
  {
    id: "mac-open",
    platform: "macOS",
    shell: "zsh",
    category: "Files & folders",
    command: "open",
    syntax: "open [file-or-folder-or-url]",
    description: "Open a file, folder, or URL with its default app — the Terminal way of double-clicking.",
    steps: [
      "Type open followed by a file, folder, or web address.",
      "open . opens the current folder in Finder.",
      "Use open -a AppName file to pick a specific app, such as open -a TextEdit notes.txt."
    ],
    example: "open ~/Documents",
    tags: ["open", "launch", "finder", "app"]
  },
  {
    id: "mac-find",
    platform: "macOS",
    shell: "zsh",
    category: "Searching",
    command: "find",
    syntax: "find <start-folder> -name \"<pattern>\"",
    description: "Find files and folders by name, starting from a folder and searching everything below it.",
    steps: [
      "Type find, then the folder to start from, then -name and the pattern in quotes.",
      "Use * as a wildcard: find ~ -name \"*.pdf\" finds every PDF under your home folder.",
      "Add -type f to match files only, or -type d for folders only.",
      "Searching from / is slow and shows permission errors — start from ~ or a project folder instead."
    ],
    example: "find ~/Documents -name \"*.pdf\" -type f",
    tags: ["find", "search files", "locate", "wildcard"]
  },
  {
    id: "mac-grep",
    platform: "macOS",
    shell: "zsh",
    category: "Searching",
    command: "grep",
    syntax: "grep [-r] [-i] [-n] \"<text>\" <file-or-folder>",
    description: "Search inside files for a word or phrase, and print the matching lines.",
    steps: [
      "Type grep, then the text in quotes, then the file to search.",
      "Add -r to search a whole folder and its subfolders.",
      "Add -i to ignore upper/lower case, and -n to show line numbers.",
      "Pipe another command into grep to filter its output: ps aux | grep Safari."
    ],
    example: "grep -rn \"TODO\" ~/Documents/Projects",
    tags: ["search text", "find in files", "filter", "grep"]
  },
  {
    id: "mac-ping",
    platform: "macOS",
    shell: "zsh",
    category: "Networking",
    command: "ping",
    syntax: "ping [-c <count>] <host>",
    description: "Check whether another computer or website is reachable, and how long replies take.",
    steps: [
      "Type ping followed by a hostname or IP address.",
      "On macOS ping runs forever until you stop it — press Ctrl + C to stop.",
      "Add -c 4 to send exactly 4 packets and stop automatically.",
      "No replies usually means the host is down, blocking ping, or your network is down — try pinging 8.8.8.8 to test your connection itself."
    ],
    example: "ping -c 4 google.com",
    tags: ["network", "connectivity", "internet", "latency", "ping"]
  },
  {
    id: "mac-curl",
    platform: "macOS",
    shell: "zsh",
    category: "Networking",
    command: "curl",
    syntax: "curl [-O] [-L] <url>",
    description: "Download a file or fetch a web page from the command line, and test APIs.",
    steps: [
      "Type curl followed by a URL to print the page contents to the terminal.",
      "Add -O to save the file with its original name, or -o name.zip to choose a name.",
      "Add -L to follow redirects (many download links need this).",
      "Add -I to fetch only the headers — a quick way to check if a site is up."
    ],
    example: "curl -L -O https://example.com/file.zip",
    tags: ["download", "http", "api", "web", "fetch"]
  },
  {
    id: "mac-ifconfig",
    platform: "macOS",
    shell: "zsh",
    category: "Networking",
    command: "ifconfig",
    syntax: "ifconfig [interface]",
    description: "Show your network interfaces and IP addresses (Wi-Fi is usually en0).",
    steps: [
      "Type ifconfig and press Enter to list every interface.",
      "Look for en0 (Wi-Fi) and find inet — the number after it is your local IP address.",
      "Run ifconfig en0 to see only the Wi-Fi interface.",
      "For a cleaner one-liner, use ipconfig getifaddr en0 to print just your Wi-Fi IP."
    ],
    example: "ipconfig getifaddr en0",
    tags: ["ip address", "wifi", "network", "interface"]
  },
  {
    id: "mac-ps",
    platform: "macOS",
    shell: "zsh",
    category: "Processes",
    command: "ps",
    syntax: "ps aux | grep <name>",
    description: "List running processes, with their owner, CPU and memory use.",
    steps: [
      "Type ps aux to list every running process.",
      "Pipe it through grep to find one app: ps aux | grep Chrome.",
      "The second column is the PID (process ID) — you need it for the kill command.",
      "The grep command itself shows up in the results; ignore that line."
    ],
    example: "ps aux | grep -i spotify",
    tags: ["processes", "running apps", "pid", "cpu", "memory"]
  },
  {
    id: "mac-top",
    platform: "macOS",
    shell: "zsh",
    category: "Processes",
    command: "top",
    syntax: "top [-o cpu | -o mem]",
    description: "Show a live, updating list of processes sorted by CPU or memory use.",
    steps: [
      "Type top and press Enter.",
      "Press o then cpu to sort by CPU, or o then mem to sort by memory.",
      "Press q to quit.",
      "For a nicer view, install htop with Homebrew (brew install htop) and run htop instead."
    ],
    example: "top -o cpu",
    tags: ["processes", "live", "cpu", "memory", "monitor"]
  }
];

COMMANDS.push(
  {
    id: "mac-kill",
    platform: "macOS",
    shell: "zsh",
    category: "Processes",
    command: "kill",
    syntax: "kill [-9] <PID>",
    description: "Stop a running process by its process ID (PID).",
    steps: [
      "Find the PID first with ps aux | grep AppName.",
      "Type kill followed by the PID to ask the process to quit politely.",
      "If it refuses to quit, use kill -9 <PID> to force it — unsaved work in that app will be lost.",
      "Never kill a PID you do not recognize; system processes keep macOS running."
    ],
    example: "kill -9 12345",
    tags: ["kill process", "stop", "force quit", "pid", "frozen"]
  },
  {
    id: "mac-killall",
    platform: "macOS",
    shell: "zsh",
    category: "Processes",
    command: "killall",
    syntax: "killall <app-name>",
    description: "Quit all processes with a given name — no PID needed.",
    steps: [
      "Type killall followed by the app name as it appears in ps (case-sensitive).",
      "For example, killall Finder restarts Finder; killall Safari quits Safari.",
      "Add -9 to force-quit: killall -9 Slack.",
      "If nothing happens, check the exact process name with ps aux | grep -i name."
    ],
    example: "killall -9 Slack",
    tags: ["kill process", "force quit", "frozen app", "by name"]
  },
  {
    id: "mac-df",
    platform: "macOS",
    shell: "zsh",
    category: "Disk",
    command: "df",
    syntax: "df -h",
    description: "Show how much free space each disk and volume has.",
    steps: [
      "Type df -h (the -h means human-readable, so sizes show as GB, not blocks).",
      "Read the Avail column for free space and the Capacity column for how full the disk is.",
      "Your main disk is usually / (mounted as /System/Volumes/Data on modern macOS)."
    ],
    example: "df -h",
    tags: ["disk space", "free space", "storage", "full disk"]
  },
  {
    id: "mac-du",
    platform: "macOS",
    shell: "zsh",
    category: "Disk",
    command: "du",
    syntax: "du -sh <folder> | du -sh <folder>/*",
    description: "Show how much disk space a folder uses — the fastest way to find what is eating your disk.",
    steps: [
      "Type du -sh followed by a folder to see its total size.",
      "To rank everything inside a folder, use du -sh ~/Documents/* | sort -h.",
      "Add sudo du -sh /Library/Caches to check system folders (you will be asked for your password).",
      "See the step-by-step guide below for a full disk-space hunt."
    ],
    example: "du -sh ~/Library/Caches/* | sort -h | tail -10",
    tags: ["disk space", "disk usage", "storage", "large files", "cleanup"]
  },
  {
    id: "mac-diskutil",
    platform: "macOS",
    shell: "zsh",
    category: "Disk",
    command: "diskutil",
    syntax: "diskutil list",
    description: "List all disks, partitions, and volumes attached to your Mac.",
    steps: [
      "Type diskutil list to see every disk and its partitions.",
      "External drives appear as /dev/disk2, /dev/disk3, and so on.",
      "Use diskutil info /Volumes/Name to see details about one volume.",
      "To eject a disk from the terminal: diskutil eject /Volumes/Name."
    ],
    example: "diskutil list",
    tags: ["disks", "volumes", "partitions", "usb", "external drive"]
  },
  {
    id: "mac-whoami",
    platform: "macOS",
    shell: "zsh",
    category: "Users & permissions",
    command: "whoami",
    syntax: "whoami",
    description: "Print the username you are currently signed in as.",
    steps: [
      "Type whoami and press Enter.",
      "Use id to see more: your user ID, group ID, and all groups you belong to.",
      "Use whoami in a script when a command needs to know which account is running it."
    ],
    example: "whoami",
    tags: ["user", "username", "identity", "account"]
  },
  {
    id: "mac-sudo",
    platform: "macOS",
    shell: "zsh",
    category: "Users & permissions",
    command: "sudo",
    syntax: "sudo <command>",
    description: "Run a command with administrator (root) privileges. You will be asked for your Mac password.",
    steps: [
      "Put sudo in front of a command that says Permission denied.",
      "Type your Mac login password when asked — nothing appears on screen as you type, which is normal.",
      "Only use sudo for commands you understand; a mistyped sudo command can damage the system.",
      "To run several commands as admin, type sudo -s to open a root shell, then type exit when done."
    ],
    example: "sudo rm -rf /Library/Caches/com.apple.Safari",
    tags: ["admin", "root", "permission denied", "privileges"],
    note: "Your password is not shown while you type it. That is normal — type it and press Enter."
  },
  {
    id: "mac-chmod",
    platform: "macOS",
    shell: "zsh",
    category: "Users & permissions",
    command: "chmod",
    syntax: "chmod <permissions> <file>",
    description: "Change who can read, write, or execute a file. The classic fix for a script that will not run.",
    steps: [
      "Use chmod +x script.sh to make a script executable.",
      "Use numbers for exact control: 755 means owner can do everything, everyone else can read and run (rwxr-xr-x).",
      "Use 644 for normal files (owner can edit, everyone can read) and 600 for private files.",
      "Add -R to change a whole folder and everything inside it."
    ],
    example: "chmod +x install.sh",
    tags: ["permissions", "executable", "access", "chmod", "script"]
  },
  {
    id: "mac-chown",
    platform: "macOS",
    shell: "zsh",
    category: "Users & permissions",
    command: "chown",
    syntax: "sudo chown [-R] <user>[:<group>] <file-or-folder>",
    description: "Change who owns a file or folder. Usually needed after a restore, migration, or a sudo mistake.",
    steps: [
      "Type sudo chown followed by your username and the file or folder.",
      "Add -R to change a folder and everything inside it.",
      "Use chown user:staff file to set both the owner and the group.",
      "Never run chown -R on system folders like /System or /usr — that breaks macOS."
    ],
    example: "sudo chown -R $(whoami) ~/Documents/Projects",
    tags: ["owner", "ownership", "permissions", "chown"]
  },
  {
    id: "mac-brew-install",
    platform: "macOS",
    shell: "zsh",
    category: "Package managers",
    command: "brew install",
    syntax: "brew install <package>",
    description: "Install command-line tools and apps with Homebrew, the package manager for macOS.",
    steps: [
      "Install Homebrew first if you do not have it: paste the command from brew.sh into Terminal.",
      "Type brew install followed by the package name, such as brew install git.",
      "To install a Mac app, use brew install --cask firefox.",
      "Run brew list to see everything you have installed."
    ],
    example: "brew install node",
    tags: ["homebrew", "install", "apps", "package manager"]
  },
  {
    id: "mac-brew-upgrade",
    platform: "macOS",
    shell: "zsh",
    category: "Package managers",
    command: "brew update / brew upgrade",
    syntax: "brew update && brew upgrade",
    description: "Update Homebrew itself, then upgrade all installed packages to their latest versions.",
    steps: [
      "Run brew update to fetch the latest list of available packages.",
      "Run brew upgrade to upgrade everything you have installed.",
      "Add a package name to upgrade just one thing: brew upgrade node.",
      "Run brew cleanup afterwards to delete old versions and free disk space."
    ],
    example: "brew update && brew upgrade",
    tags: ["homebrew", "update", "upgrade", "latest"]
  },
  {
    id: "mac-brew-search",
    platform: "macOS",
    shell: "zsh",
    category: "Package managers",
    command: "brew search",
    syntax: "brew search <name>",
    description: "Search Homebrew for a package before installing it.",
    steps: [
      "Type brew search followed by part of the name.",
      "Use brew info <package> to see what a package does, its version, and its dependencies.",
      "If nothing matches, check the exact spelling — package names are usually lowercase with no spaces."
    ],
    example: "brew search python",
    tags: ["homebrew", "search", "find package"]
  },
  {
    id: "mac-uname",
    platform: "macOS",
    shell: "zsh",
    category: "System info",
    command: "uname / sw_vers",
    syntax: "uname -a; sw_vers",
    description: "Show the kernel version and the macOS version you are running.",
    steps: [
      "Type uname -a for the kernel name, version, and chip (arm64 means Apple Silicon, x86_64 means Intel).",
      "Type sw_vers for the macOS product name and version, such as macOS 15.2.",
      "Combine them when reporting a bug or checking whether your Mac supports a tool."
    ],
    example: "sw_vers",
    tags: ["system info", "macos version", "kernel", "apple silicon"]
  },
  {
    id: "mac-system-profiler",
    platform: "macOS",
    shell: "zsh",
    category: "System info",
    command: "system_profiler",
    syntax: "system_profiler SPHardwareDataType",
    description: "Print detailed hardware info: model, chip, RAM, serial number, and more.",
    steps: [
      "Type system_profiler SPHardwareDataType for the hardware summary.",
      "Use SPDisplaysDataType for screens, or SPNetworkDataType for network hardware.",
      "Add | grep -i memory to filter the output to one line, such as system_profiler SPHardwareDataType | grep Memory."
    ],
    example: "system_profiler SPHardwareDataType",
    tags: ["hardware", "specs", "ram", "model", "serial"]
  },
  {
    id: "mac-history",
    platform: "macOS",
    shell: "zsh",
    category: "System info",
    command: "history",
    syntax: "history [n]",
    description: "Show commands you ran recently, so you can find and re-run one.",
    steps: [
      "Type history to list recent commands with numbers.",
      "Add a number to limit the list: history 20 shows the last 20.",
      "Re-run a command by number with ! followed by the number, such as !42.",
      "Press Ctrl + R and start typing to search your history interactively."
    ],
    example: "history 20",
    tags: ["history", "previous commands", "recall"]
  },
  {
    id: "mac-man",
    platform: "macOS",
    shell: "zsh",
    category: "System info",
    command: "man",
    syntax: "man <command>",
    description: "Open the built-in manual page for any command — the official documentation, offline.",
    steps: [
      "Type man followed by the command name, such as man ls.",
      "Use the arrow keys to scroll and / to search inside the manual.",
      "Press q to quit.",
      "If a command has no manual page, try <command> --help instead."
    ],
    example: "man grep",
    tags: ["help", "manual", "documentation", "help"]
  },
  {
    id: "mac-caffeinate",
    platform: "macOS",
    shell: "zsh",
    category: "System info",
    command: "caffeinate",
    syntax: "caffeinate [-t <seconds>] [-d]",
    description: "Keep your Mac awake while a long job runs, so it does not sleep mid-download or mid-render.",
    steps: [
      "Type caffeinate and press Enter to keep the Mac awake until you press Ctrl + C.",
      "Add -t 3600 to stay awake for one hour (3600 seconds), then sleep normally.",
      "Add -d to prevent the display from sleeping too.",
      "Or run it in front of a command: caffeinate -i make backup runs the backup with sleep disabled."
    ],
    example: "caffeinate -t 3600",
    tags: ["stay awake", "sleep", "prevent sleep", "download"]
  }
);

COMMANDS.push(
  // ---------------- Windows (PowerShell / CMD) ----------------
  {
    id: "win-dir",
    platform: "Windows",
    shell: "PowerShell",
    category: "Files & folders",
    command: "Get-ChildItem (dir / ls)",
    syntax: "Get-ChildItem [-Force] [path]",
    description: "List files and folders. dir and ls are built-in aliases for Get-ChildItem in PowerShell.",
    steps: [
      "Open PowerShell (Start menu, type PowerShell, press Enter).",
      "Type Get-ChildItem or just dir to list the current folder.",
      "Add -Force to include hidden files and folders.",
      "Add -Recurse to list everything in subfolders too, and -Filter *.pdf to show only matching files."
    ],
    example: "Get-ChildItem -Force ~\\Documents",
    tags: ["list", "files", "folders", "directory", "dir", "ls"],
    note: "In old CMD, the same job is done by dir. In PowerShell, dir is just an alias for this command."
  },
  {
    id: "win-cd",
    platform: "Windows",
    shell: "PowerShell",
    category: "Files & folders",
    command: "Set-Location (cd)",
    syntax: "Set-Location [path]",
    description: "Change the current directory. cd is the built-in alias, so it works exactly like the classic command.",
    steps: [
      "Type cd followed by the folder path and press Enter.",
      "Use cd .. to go up one level, and cd ~ to go to your home folder.",
      "Switch drives by typing the drive letter, such as D: and pressing Enter.",
      "In PowerShell, cd - is not supported; use Pop-Location instead to return to the previous folder."
    ],
    example: "cd C:\\Users\\YourName\\Documents",
    tags: ["change directory", "navigate", "folders", "cd"]
  },
  {
    id: "win-pwd",
    platform: "Windows",
    shell: "PowerShell",
    category: "Files & folders",
    command: "Get-Location (pwd)",
    syntax: "Get-Location",
    description: "Print the full path of the folder you are currently in. pwd is the built-in alias.",
    steps: [
      "Type Get-Location or pwd and press Enter.",
      "The prompt itself usually shows the current folder, but this prints the full path for copying.",
      "Use it in a script as $PWD or (Get-Location).Path when another command needs the current folder path."
    ],
    example: "Get-Location",
    tags: ["where am i", "path", "current directory"]
  },
  {
    id: "win-new-item",
    platform: "Windows",
    shell: "PowerShell",
    category: "Files & folders",
    command: "New-Item",
    syntax: "New-Item -ItemType <Directory|File> -Path <path> [-Force]",
    description: "Create a new folder or file. The PowerShell replacement for mkdir and touch.",
    steps: [
      "To make a folder: New-Item -ItemType Directory -Path C:\\Projects\\website.",
      "To make an empty file: New-Item -ItemType File -Path notes.txt.",
      "Add -Force to create missing parent folders and to overwrite without asking.",
      "The classic mkdir still works in PowerShell as an alias for this command."
    ],
    example: "New-Item -ItemType Directory -Path C:\\Projects\\website",
    tags: ["create", "new folder", "new file", "mkdir"]
  },
  {
    id: "win-copy-item",
    platform: "Windows",
    shell: "PowerShell",
    category: "Files & folders",
    command: "Copy-Item",
    syntax: "Copy-Item [-Recurse] <source> <destination>",
    description: "Copy a file or folder. Add -Recurse to copy a folder and everything inside it.",
    steps: [
      "Type Copy-Item, then the file to copy, then the destination.",
      "To copy a folder, add -Recurse.",
      "Use a wildcard to copy many files at once: Copy-Item *.jpg C:\\Pictures\\.",
      "In CMD, the equivalent command is copy for files and xcopy / robocopy for folders."
    ],
    example: "Copy-Item -Recurse C:\\Projects\\website C:\\Backup\\",
    tags: ["copy", "duplicate", "backup", "files"]
  },
  {
    id: "win-move-item",
    platform: "Windows",
    shell: "PowerShell",
    category: "Files & folders",
    command: "Move-Item",
    syntax: "Move-Item <source> <destination>",
    description: "Move a file or folder, or rename it by moving it to a new name in the same folder.",
    steps: [
      "Type Move-Item, then the file, then the destination folder or new name.",
      "To rename: Move-Item old-name.txt new-name.txt.",
      "Add -Force to overwrite a file with the same name at the destination.",
      "In CMD, the equivalent command is move."
    ],
    example: "Move-Item .\\photo.jpg C:\\Users\\YourName\\Pictures\\",
    tags: ["move", "rename", "files"]
  },
  {
    id: "win-remove-item",
    platform: "Windows",
    shell: "PowerShell",
    category: "Files & folders",
    command: "Remove-Item",
    syntax: "Remove-Item [-Recurse] [-Force] <path>",
    description: "Delete a file or folder. Deleted files do NOT go to the Recycle Bin — they are gone immediately.",
    steps: [
      "Type Remove-Item followed by the file or folder path.",
      "Add -Recurse to delete a folder and everything inside it.",
      "Add -Force to delete hidden or read-only files without asking.",
      "In CMD, the equivalents are del for files and rmdir /s for folders."
    ],
    example: "Remove-Item -Recurse -Force C:\\Temp\\old-build",
    tags: ["delete", "remove", "recycle bin", "files"],
    note: "There is no undo. When in doubt, move the file somewhere safe first instead of deleting it."
  },
  {
    id: "win-get-content",
    platform: "Windows",
    shell: "PowerShell",
    category: "Files & folders",
    command: "Get-Content (type / cat)",
    syntax: "Get-Content <file>",
    description: "Print the contents of a text file to the terminal. type and cat are aliases in PowerShell.",
    steps: [
      "Type Get-Content followed by the file name and press Enter.",
      "Add -TotalCount 20 to see only the first 20 lines of a long file.",
      "Add -Tail 20 to see only the last 20 lines — useful for log files.",
      "Add -Wait to keep watching a file as new lines are added, like tail -f."
    ],
    example: "Get-Content -Tail 20 C:\\Logs\\app.log",
    tags: ["read", "view", "print file", "text", "log"]
  },
  {
    id: "win-select-string",
    platform: "Windows",
    shell: "PowerShell",
    category: "Searching",
    command: "Select-String",
    syntax: "Select-String -Pattern \"<text>\" -Path <file> [-Recurse]",
    description: "Search inside files for a word or phrase. This is PowerShell's version of grep.",
    steps: [
      "Type Select-String -Pattern, then the text in quotes, then -Path and the file.",
      "To search a whole folder, use Get-ChildItem -Recurse -Filter *.txt | Select-String -Pattern \"TODO\".",
      "Add -CaseSensitive only if upper/lower case matters (it is ignored by default).",
      "In CMD, the equivalent command is findstr."
    ],
    example: "Select-String -Pattern \"error\" -Path C:\\Logs\\*.log",
    tags: ["search text", "find in files", "grep", "filter"]
  },
  {
    id: "win-findstr",
    platform: "Windows",
    shell: "CMD",
    category: "Searching",
    command: "findstr",
    syntax: "findstr [/S] [/I] \"<text>\" <files>",
    description: "Search inside files for text from CMD. The classic Windows equivalent of grep.",
    steps: [
      "Type findstr followed by the text in quotes and the files to search.",
      "Add /S to search subfolders and /I to ignore upper/lower case.",
      "Add /N to show the line number of each match.",
      "Pipe another command into it to filter output: tasklist | findstr chrome."
    ],
    example: "findstr /S /I \"TODO\" C:\\Projects\\*.txt",
    tags: ["search text", "find in files", "grep", "cmd"]
  },
  {
    id: "win-test-connection",
    platform: "Windows",
    shell: "PowerShell",
    category: "Networking",
    command: "Test-Connection (ping)",
    syntax: "Test-Connection [-Count <n>] <host>",
    description: "Check whether another computer or website is reachable, and how long replies take. ping works in both PowerShell and CMD.",
    steps: [
      "Type Test-Connection followed by a hostname or IP address.",
      "Unlike macOS ping, it sends 4 packets and stops on its own.",
      "Add -Count 1 for a single quick check.",
      "Add -Quiet to get a simple True or False answer for use in scripts."
    ],
    example: "Test-Connection -Count 4 google.com",
    tags: ["network", "connectivity", "internet", "latency", "ping"]
  },
  {
    id: "win-ipconfig",
    platform: "Windows",
    shell: "CMD",
    category: "Networking",
    command: "ipconfig",
    syntax: "ipconfig [/all]",
    description: "Show your network adapters, IP address, subnet mask, and gateway. Works in both CMD and PowerShell.",
    steps: [
      "Type ipconfig to see a short summary of every adapter.",
      "Add /all to see full details, including the DNS servers and MAC (physical) address.",
      "Look for the Wi-Fi adapter section and the IPv4 Address line — that is your local IP.",
      "Run ipconfig /flushdns to clear the DNS cache if a site loads an old address."
    ],
    example: "ipconfig /all",
    tags: ["ip address", "wifi", "network", "dns", "gateway"]
  },
  {
    id: "win-test-netconnection",
    platform: "Windows",
    shell: "PowerShell",
    category: "Networking",
    command: "Test-NetConnection",
    syntax: "Test-NetConnection [-Port <n>] <host>",
    description: "Test whether a specific port on a host is open — the go-to check when an app cannot connect.",
    steps: [
      "Type Test-NetConnection followed by the hostname.",
      "Add -Port 443 to test a specific port, such as a website (443), remote desktop (3389), or a game server.",
      "A TcpTestSucceeded value of True means the port is reachable; False usually means a firewall is blocking it.",
      "Add -TraceRoute to also see the route your packets take to the host."
    ],
    example: "Test-NetConnection -Port 443 github.com",
    tags: ["network", "port", "firewall", "connectivity", "troubleshoot"]
  },
  {
    id: "win-get-process",
    platform: "Windows",
    shell: "PowerShell",
    category: "Processes",
    command: "Get-Process",
    syntax: "Get-Process [[-Name] <name>]",
    description: "List running processes with CPU and memory use. The PowerShell version of Task Manager in text form.",
    steps: [
      "Type Get-Process to list every running process.",
      "Add a name to filter: Get-Process chrome shows all Chrome processes.",
      "Sort by memory with Get-Process | Sort-Object WS -Descending | Select-Object -First 10.",
      "The Id column is the PID — you need it for Stop-Process."
    ],
    example: "Get-Process | Sort-Object CPU -Descending | Select-Object -First 10",
    tags: ["processes", "running apps", "pid", "cpu", "memory", "task manager"]
  },
  {
    id: "win-stop-process",
    platform: "Windows",
    shell: "PowerShell",
    category: "Processes",
    command: "Stop-Process",
    syntax: "Stop-Process [-Id <PID> | -Name <name>] [-Force]",
    description: "Stop a running process by name or PID. The PowerShell way to force-quit a frozen app.",
    steps: [
      "Find the process first with Get-Process.",
      "Type Stop-Process -Name chrome to stop every process with that name.",
      "Or use the PID: Stop-Process -Id 12345.",
      "Add -Force if the process refuses to stop — unsaved work in that app will be lost."
    ],
    example: "Stop-Process -Name notepad -Force",
    tags: ["kill process", "stop", "force quit", "frozen", "pid"]
  },
  {
    id: "win-tasklist",
    platform: "Windows",
    shell: "CMD",
    category: "Processes",
    command: "tasklist / taskkill",
    syntax: "tasklist | taskkill /IM <name> [/F] | taskkill /PID <PID> [/F]",
    description: "List and kill processes from CMD. tasklist shows them, taskkill ends them.",
    steps: [
      "Type tasklist to list every running process with its PID.",
      "Filter it: tasklist | findstr chrome.",
      "Kill by image name: taskkill /IM chrome.exe /F (the /F forces it).",
      "Kill by PID: taskkill /PID 12345 /F.",
      "Without /F, taskkill asks the app to close politely first."
    ],
    example: "taskkill /IM notepad.exe /F",
    tags: ["kill process", "processes", "task manager", "cmd", "frozen"]
  }
);

COMMANDS.push(
  {
    id: "win-disk",
    platform: "Windows",
    shell: "PowerShell",
    category: "Disk",
    command: "Get-PSDrive / Get-Volume",
    syntax: "Get-PSDrive -PSProvider FileSystem | Get-Volume",
    description: "Show every drive and how much free space it has.",
    steps: [
      "Type Get-PSDrive -PSProvider FileSystem to see each drive letter, used space, and free space.",
      "Or type Get-Volume for a table with drive labels, health status, and size in GB.",
      "In CMD, the quick check is wmic logicaldisk get caption,freespace,size — or just look in File Explorer."
    ],
    example: "Get-Volume",
    tags: ["disk space", "free space", "storage", "drives", "full disk"]
  },
  {
    id: "win-disk-usage",
    platform: "Windows",
    shell: "PowerShell",
    category: "Disk",
    command: "Measure-Object (folder size)",
    syntax: "Get-ChildItem -Recurse <folder> | Measure-Object -Property Length -Sum",
    description: "Measure how much disk space a folder uses, so you can find what is eating your disk.",
    steps: [
      "Type the command with the folder you want to measure.",
      "The Sum property is the total size in bytes — divide by 1GB for gigabytes.",
      "To rank subfolders, use: Get-ChildItem C:\\Users\\YourName -Directory | ForEach-Object { [PSCustomObject]@{ Name = $_.Name; GB = [math]::Round((Get-ChildItem $_.FullName -Recurse -File -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum / 1GB, 2) } } | Sort-Object GB -Descending.",
      "See the step-by-step guide below for a full disk-space hunt."
    ],
    example: "(Get-ChildItem -Recurse $env:USERPROFILE\\Downloads -File | Measure-Object -Property Length -Sum).Sum / 1MB",
    tags: ["disk space", "disk usage", "storage", "large files", "cleanup"]
  },
  {
    id: "win-whoami",
    platform: "Windows",
    shell: "PowerShell",
    category: "Users & permissions",
    command: "whoami",
    syntax: "whoami [/groups | /priv]",
    description: "Print the username you are currently signed in as, and optionally your groups and privileges.",
    steps: [
      "Type whoami to see your account name, such as desktop-pc\\yourname.",
      "Add /groups to see every group you belong to.",
      "Add /priv to see your privileges — useful when checking whether you can run something as admin."
    ],
    example: "whoami /groups",
    tags: ["user", "username", "identity", "account"]
  },
  {
    id: "win-net-user",
    platform: "Windows",
    shell: "CMD",
    category: "Users & permissions",
    command: "net user",
    syntax: "net user [<username>]",
    description: "List user accounts on the computer, or show details for one account. Works in CMD and PowerShell.",
    steps: [
      "Type net user to list every local account.",
      "Add a username for details: net user yourname shows when the password was last set and when it expires.",
      "An admin can add an account with net user newname password /add.",
      "For Microsoft accounts and domain users, check Settings instead — net user only covers local accounts."
    ],
    example: "net user",
    tags: ["users", "accounts", "admin", "password"]
  },
  {
    id: "win-icacls",
    platform: "Windows",
    shell: "CMD",
    category: "Users & permissions",
    command: "icacls",
    syntax: "icacls <file-or-folder> [/grant <user>:<permission>]",
    description: "View and change file and folder permissions from the command line. The Windows equivalent of chmod.",
    steps: [
      "Type icacls followed by a file or folder to see who can access it.",
      "Grant access with: icacls C:\\Shared /grant YourName:(OI)(CI)F — F means full control, (OI)(CI) applies it to files and subfolders.",
      "Use :R for read-only or :M for modify instead of :F.",
      "Run PowerShell or CMD as administrator first, or the command will fail with Access is denied."
    ],
    example: "icacls C:\\Shared /grant YourName:(OI)(CI)M",
    tags: ["permissions", "access", "acl", "security", "chmod"]
  },
  {
    id: "win-winget-install",
    platform: "Windows",
    shell: "PowerShell",
    category: "Package managers",
    command: "winget install",
    syntax: "winget install [--id] <package>",
    description: "Install apps from the command line with winget, the official Windows Package Manager (built into Windows 10 and 11).",
    steps: [
      "Type winget search to find a package first, or install by exact ID.",
      "Type winget install followed by the app ID, such as winget install Mozilla.Firefox.",
      "Add --silent to skip installer prompts, and --accept-source-agreements on first use.",
      "Some installs need an admin terminal — right-click PowerShell and choose Run as administrator."
    ],
    example: "winget install Microsoft.VisualStudioCode",
    tags: ["winget", "install", "apps", "package manager"]
  },
  {
    id: "win-winget-upgrade",
    platform: "Windows",
    shell: "PowerShell",
    category: "Package managers",
    command: "winget upgrade",
    syntax: "winget upgrade [--all]",
    description: "Check for updates to your installed apps, and upgrade them all at once.",
    steps: [
      "Type winget upgrade to list every installed app that has an update available.",
      "Type winget upgrade --all to update all of them.",
      "Add a package ID to update one app: winget upgrade Mozilla.Firefox.",
      "Add --silent to let upgrades run without installer pop-ups."
    ],
    example: "winget upgrade --all",
    tags: ["winget", "update", "upgrade", "latest"]
  },
  {
    id: "win-choco",
    platform: "Windows",
    shell: "PowerShell",
    category: "Package managers",
    command: "choco install",
    syntax: "choco install <package> [-y]",
    description: "Install software with Chocolatey, the community package manager for Windows. Useful when winget does not have a package.",
    steps: [
      "Install Chocolatey first from chocolatey.org (run the install command in an admin PowerShell).",
      "Type choco install followed by the package name, such as choco install git.",
      "Add -y to accept all prompts automatically.",
      "Update everything later with choco upgrade all -y, and search with choco search <name>."
    ],
    example: "choco install vlc -y",
    tags: ["chocolatey", "install", "apps", "package manager"]
  },
  {
    id: "win-systeminfo",
    platform: "Windows",
    shell: "CMD",
    category: "System info",
    command: "systeminfo",
    syntax: "systeminfo",
    description: "Print a full summary of your PC: Windows version, processor, RAM, install date, and more.",
    steps: [
      "Type systeminfo and press Enter — it takes a few seconds to gather the details.",
      "Look for OS Name, OS Version, Processor, and Total Physical Memory.",
      "In PowerShell, the same info is available as Get-ComputerInfo, which is easier to filter: Get-ComputerInfo | Select-Object WindowsProductName, WindowsVersion, TotalPhysicalMemory."
    ],
    example: "systeminfo",
    tags: ["system info", "specs", "windows version", "ram", "cpu"]
  },
  {
    id: "win-get-service",
    platform: "Windows",
    shell: "PowerShell",
    category: "System info",
    command: "Get-Service",
    syntax: "Get-Service [[-Name] <name>]",
    description: "List Windows services and whether they are running or stopped.",
    steps: [
      "Type Get-Service to list every service and its status.",
      "Filter by name with a wildcard: Get-Service *spool* finds the print spooler.",
      "Stop a service with Stop-Service -Name spooler, and start it again with Start-Service -Name spooler.",
      "Restart a misbehaving service with Restart-Service -Name spooler (needs an admin terminal)."
    ],
    example: "Get-Service | Where-Object Status -eq Running",
    tags: ["services", "windows services", "running", "restart"]
  },
  {
    id: "win-shutdown",
    platform: "Windows",
    shell: "CMD",
    category: "System info",
    command: "shutdown / Restart-Computer",
    syntax: "shutdown /s /t <seconds> | shutdown /r /t <seconds>",
    description: "Shut down or restart the computer from the command line, now or after a delay.",
    steps: [
      "Type shutdown /s to shut down, or shutdown /r to restart.",
      "Add /t 60 to wait 60 seconds first, and /f to force apps to close.",
      "Cancel a pending shutdown with shutdown /a.",
      "In PowerShell, the same jobs are Restart-Computer and Stop-Computer."
    ],
    example: "shutdown /r /t 60",
    tags: ["shutdown", "restart", "reboot", "power"]
  },
  {
    id: "win-clear",
    platform: "Windows",
    shell: "PowerShell",
    category: "System info",
    command: "Clear-Host (cls)",
    syntax: "Clear-Host",
    description: "Clear the terminal screen so you start with a clean slate.",
    steps: [
      "Type Clear-Host or cls and press Enter.",
      "The scrollback history is kept — this only clears what is on screen.",
      "On macOS, the equivalent is clear or Cmd + K."
    ],
    example: "Clear-Host",
    tags: ["clear", "screen", "cls", "clean"]
  },
  {
    id: "win-history",
    platform: "Windows",
    shell: "PowerShell",
    category: "System info",
    command: "Get-History",
    syntax: "Get-History [n]",
    description: "Show commands you ran recently in this PowerShell session, so you can find and re-run one.",
    steps: [
      "Type Get-History to list commands from the current session.",
      "Re-run one by ID with Invoke-History 12, or press the Up arrow to step through them one at a time.",
      "PowerShell also saves history across sessions: press Ctrl + R and start typing to search it.",
      "In CMD, the equivalent is pressing F7 for a pop-up list, or doskey /history to print it."
    ],
    example: "Get-History",
    tags: ["history", "previous commands", "recall"]
  },
  {
    id: "win-start-process",
    platform: "Windows",
    shell: "PowerShell",
    category: "Files & folders",
    command: "Start-Process",
    syntax: "Start-Process <app-or-file>",
    description: "Launch an app, open a file, or open a URL — the PowerShell way of double-clicking.",
    steps: [
      "Type Start-Process followed by an app name, file, or URL.",
      "Add -Verb RunAs to launch it as administrator: Start-Process notepad -Verb RunAs.",
      "Open the current folder in File Explorer with: Start-Process .",
      "In CMD, the equivalent command is start."
    ],
    example: "Start-Process https://github.com",
    tags: ["open", "launch", "run as admin", "app"]
  },
  {
    id: "win-compress",
    platform: "Windows",
    shell: "PowerShell",
    category: "Files & folders",
    command: "Compress-Archive / Expand-Archive",
    syntax: "Compress-Archive <source> <zip-file> | Expand-Archive <zip-file> <destination>",
    description: "Create and extract ZIP files without any extra software.",
    steps: [
      "To zip a folder: Compress-Archive -Path C:\\Projects\\website -DestinationPath website.zip.",
      "To unzip: Expand-Archive -Path website.zip -DestinationPath C:\\Projects\\.",
      "Add -Force to overwrite an existing zip or destination folder.",
      "In CMD, there is no built-in zip command — use PowerShell or File Explorer instead."
    ],
    example: "Compress-Archive -Path .\\website -DestinationPath website-backup.zip",
    tags: ["zip", "compress", "archive", "unzip", "extract"]
  },
  {
    id: "win-get-help",
    platform: "Windows",
    shell: "PowerShell",
    category: "System info",
    command: "Get-Help",
    syntax: "Get-Help <command> [-Examples]",
    description: "Show built-in help for any PowerShell command, including examples.",
    steps: [
      "Type Get-Help followed by the command name, such as Get-Help Get-Process.",
      "Add -Examples to see real usage examples — usually the most useful part.",
      "Add -Online to open the full Microsoft Docs page in your browser.",
      "If help is empty, run Update-Help once in an admin terminal to download it."
    ],
    example: "Get-Help Get-ChildItem -Examples",
    tags: ["help", "documentation", "examples", "manual"]
  },
  {
    id: "win-execution-policy",
    platform: "Windows",
    shell: "PowerShell",
    category: "System info",
    command: "Set-ExecutionPolicy",
    syntax: "Set-ExecutionPolicy RemoteSigned [-Scope CurrentUser]",
    description: "Control whether PowerShell is allowed to run script files (.ps1). The fix for the classic cannot be loaded because running scripts is disabled error.",
    steps: [
      "Type Get-ExecutionPolicy to see the current setting.",
      "Set it to RemoteSigned to run your own scripts and signed scripts from the internet: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser.",
      "RemoteSigned is the safe middle ground: local scripts run freely, downloaded scripts must be signed or unblocked.",
      "If you downloaded a script and it is blocked, right-click it, choose Properties, and tick Unblock — or run Unblock-File script.ps1."
    ],
    example: "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser",
    tags: ["scripts", "execution policy", "blocked", "ps1", "security"],
    note: "Never set this to Unrestricted. RemoteSigned is the recommended setting for everyday use."
  },
  {
    id: "win-wsl",
    platform: "Windows",
    shell: "PowerShell",
    category: "System info",
    command: "wsl",
    syntax: "wsl [--install] [--list] [--shutdown]",
    description: "Run Linux inside Windows with the Windows Subsystem for Linux — no full virtual machine needed.",
    steps: [
      "Install it from an admin PowerShell: wsl --install (this installs Ubuntu by default and restarts your PC).",
      "Type wsl to open your Linux shell, or wsl --list --online to see other distros you can install.",
      "Install another distro with wsl --install -d Debian.",
      "Type wsl --shutdown to stop all Linux distros, and wsl --update to update the WSL kernel.",
      "See the full WSL guide in the Virtual machines section below."
    ],
    example: "wsl --install -d Ubuntu",
    tags: ["wsl", "linux", "ubuntu", "bash", "virtual machine"]
  }
);

COMMANDS.push(
  // ---------------- Cross-platform: Git & SSH ----------------
  {
    id: "x-git-status",
    platform: "Cross-platform",
    shell: "zsh / PowerShell / Git Bash",
    category: "Git",
    command: "git status",
    syntax: "git status",
    description: "Show what has changed in your repository: modified files, new files, and what is staged for commit.",
    steps: [
      "Open a terminal inside your project folder (the folder with the .git directory).",
      "Type git status and press Enter.",
      "Red files are changed but not staged; green files are staged and ready to commit.",
      "Run this before every commit — it is the single most useful Git command."
    ],
    example: "git status",
    tags: ["git", "status", "changes", "staged", "version control"]
  },
  {
    id: "x-git-clone",
    platform: "Cross-platform",
    shell: "zsh / PowerShell / Git Bash",
    category: "Git",
    command: "git clone",
    syntax: "git clone <repository-url> [folder-name]",
    description: "Download a copy of a remote repository onto your computer.",
    steps: [
      "Copy the repository URL from GitHub (use the green Code button, then copy the HTTPS or SSH link).",
      "Type git clone followed by the URL.",
      "Add a folder name at the end to name the local folder yourself.",
      "cd into the new folder and run git status to confirm it worked."
    ],
    example: "git clone https://github.com/872000/commandbook.git",
    tags: ["git", "clone", "download", "github", "repository"]
  },
  {
    id: "x-git-add",
    platform: "Cross-platform",
    shell: "zsh / PowerShell / Git Bash",
    category: "Git",
    command: "git add",
    syntax: "git add <file> | git add .",
    description: "Stage changes so they are included in your next commit.",
    steps: [
      "Type git add followed by a file name to stage one file.",
      "Type git add . to stage every changed file in the current folder and below.",
      "Run git status afterwards to check that the right files turned green.",
      "Use git add -p to review and stage changes hunk by hunk."
    ],
    example: "git add index.html styles.css",
    tags: ["git", "stage", "add", "commit", "version control"]
  },
  {
    id: "x-git-commit",
    platform: "Cross-platform",
    shell: "zsh / PowerShell / Git Bash",
    category: "Git",
    command: "git commit",
    syntax: "git commit -m \"<message>\"",
    description: "Save your staged changes into the repository history with a message describing what changed.",
    steps: [
      "Stage your changes first with git add.",
      "Type git commit -m followed by a short message in quotes.",
      "Write messages in the present tense, such as Add search bar or Fix login crash.",
      "One commit should cover one logical change — small, focused commits are easier to undo."
    ],
    example: "git commit -m \"Add live search to command list\"",
    tags: ["git", "commit", "save", "history", "version control"]
  },
  {
    id: "x-git-push",
    platform: "Cross-platform",
    shell: "zsh / PowerShell / Git Bash",
    category: "Git",
    command: "git push",
    syntax: "git push [origin <branch>]",
    description: "Upload your local commits to the remote repository (for example, GitHub).",
    steps: [
      "Type git push to upload the current branch to its remote.",
      "The first time you push a new branch, use git push -u origin branch-name to link them.",
      "If the push is rejected, someone else changed the remote first — run git pull, resolve any conflicts, then push again.",
      "GitHub no longer accepts account passwords for pushing; use a personal access token or SSH key instead."
    ],
    example: "git push origin main",
    tags: ["git", "push", "upload", "github", "remote"]
  },
  {
    id: "x-git-pull",
    platform: "Cross-platform",
    shell: "zsh / PowerShell / Git Bash",
    category: "Git",
    command: "git pull",
    syntax: "git pull [origin <branch>]",
    description: "Download the latest changes from the remote repository and merge them into your local copy.",
    steps: [
      "Type git pull to fetch and merge the latest commits from the remote.",
      "Run it at the start of every work session so you are never working on stale code.",
      "If you have uncommitted changes that clash, commit or stash them first (git stash, then git pull, then git stash pop).",
      "Use git pull --rebase to keep your history in a straight line instead of adding merge commits."
    ],
    example: "git pull origin main",
    tags: ["git", "pull", "download", "update", "sync"]
  },
  {
    id: "x-git-log",
    platform: "Cross-platform",
    shell: "zsh / PowerShell / Git Bash",
    category: "Git",
    command: "git log",
    syntax: "git log [--oneline] [-n <count>]",
    description: "Show the history of commits in the current branch.",
    steps: [
      "Type git log to see full commit details, newest first.",
      "Add --oneline for a compact one-line-per-commit list.",
      "Add -5 to see only the last 5 commits.",
      "Press q to quit the viewer, and use git log --graph --oneline --all to see branches drawn as a graph."
    ],
    example: "git log --oneline -10",
    tags: ["git", "history", "log", "commits"]
  },
  {
    id: "x-git-branch",
    platform: "Cross-platform",
    shell: "zsh / PowerShell / Git Bash",
    category: "Git",
    command: "git branch",
    syntax: "git branch [-a] | git switch <branch> | git switch -c <new-branch>",
    description: "List branches, switch between them, or create a new one.",
    steps: [
      "Type git branch to list local branches — the current one has a * next to it.",
      "Add -a to also show remote branches.",
      "Switch branches with git switch branch-name.",
      "Create and switch to a new branch in one step: git switch -c feature/search.",
      "Older guides use git checkout instead of git switch; both work, but switch is clearer."
    ],
    example: "git switch -c feature/dark-mode",
    tags: ["git", "branch", "switch", "checkout"]
  },
  {
    id: "x-ssh",
    platform: "Cross-platform",
    shell: "zsh / PowerShell / CMD",
    category: "SSH",
    command: "ssh",
    syntax: "ssh [user@]<host> [-p <port>]",
    description: "Log in to another computer over a secure, encrypted connection.",
    steps: [
      "Type ssh followed by your username, @, and the server address, such as ssh parth@192.168.1.50.",
      "The first time you connect, you will be asked to confirm the host fingerprint — type yes.",
      "Enter the password, or use an SSH key so you are not asked (see the SSH key guide below).",
      "Add -p 2222 if the server listens on a port other than the default 22.",
      "Type exit to close the session."
    ],
    example: "ssh parth@example.com",
    tags: ["ssh", "remote", "server", "login", "secure shell"]
  },
  {
    id: "x-ssh-keygen",
    platform: "Cross-platform",
    shell: "zsh / PowerShell / Git Bash",
    category: "SSH",
    command: "ssh-keygen",
    syntax: "ssh-keygen -t ed25519 -C \"<your-email>\"",
    description: "Generate an SSH key pair so you can log in to servers and GitHub without typing a password.",
    steps: [
      "Type ssh-keygen -t ed25519 -C with your email in quotes.",
      "Press Enter to accept the default location (~/.ssh/id_ed25519).",
      "Choose a passphrase (recommended) or press Enter twice for none.",
      "Copy the public key (id_ed25519.pub) to the server or to GitHub: on macOS use pbcopy < ~/.ssh/id_ed25519.pub, on Windows use Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard.",
      "See the step-by-step guide below for the full setup."
    ],
    example: "ssh-keygen -t ed25519 -C \"parth@example.com\"",
    tags: ["ssh", "keys", "github", "passwordless", "authentication"]
  },
  {
    id: "x-scp",
    platform: "Cross-platform",
    shell: "zsh / PowerShell / Git Bash",
    category: "SSH",
    command: "scp",
    syntax: "scp [-r] <source> <user@host>:<destination>",
    description: "Copy files between your computer and a remote server over SSH.",
    steps: [
      "To upload a file: scp report.pdf parth@server.com:~/Documents/.",
      "To download a file: scp parth@server.com:~/backup.zip .",
      "Add -r to copy a whole folder.",
      "Add -P 2222 (capital P) if the server uses a non-standard SSH port."
    ],
    example: "scp -r ./website parth@example.com:/var/www/",
    tags: ["ssh", "copy", "transfer", "upload", "download", "server"]
  }
);

// ---------------- Step-by-step guides ----------------
var GUIDES = [
  {
    id: "guide-ssh-keys",
    title: "Set up SSH keys (so you never type a server password again)",
    platforms: "macOS & Windows",
    difficulty: "Beginner · 10 minutes",
    intro: "An SSH key pair lets you log in to servers and push to GitHub without a password. You generate the keys once, then copy the public half wherever you need access.",
    steps: [
      "Open Terminal (macOS) or PowerShell (Windows) and check for existing keys: ls ~/.ssh — if you see id_ed25519 and id_ed25519.pub, you already have a pair and can skip to step 4.",
      "Generate a key: ssh-keygen -t ed25519 -C \"your@email.com\". Press Enter to accept the default location, then choose a passphrase (recommended) or press Enter twice for none.",
      "Start the agent and add your key: macOS — eval \"$(ssh-agent -s)\" then ssh-add --apple-use-keychain ~/.ssh/id_ed25519. Windows — in PowerShell, run Start-Service ssh-agent then ssh-add $env:USERPROFILE\\.ssh\\id_ed25519.",
      "Copy your public key to the clipboard: macOS — pbcopy < ~/.ssh/id_ed25519.pub. Windows PowerShell — Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard.",
      "For a server: paste the key into ~/.ssh/authorized_keys on the server (or use ssh-copy-id user@host on macOS). For GitHub: paste it at github.com → Settings → SSH and GPG keys → New SSH key.",
      "Test it: ssh -T git@github.com should reply with a greeting and your username. Or ssh user@your-server — you should log in without a password prompt."
    ],
    gotchas: [
      "Never share the private key file (id_ed25519, no .pub). The .pub file is safe to paste anywhere.",
      "If GitHub still asks for a password, your remote is probably HTTPS — switch it with git remote set-url origin git@github.com:username/repo.git.",
      "On Windows, OpenSSH comes with Windows 10/11; if ssh is not recognized, install it from Settings → Apps → Optional features → OpenSSH Client."
    ]
  },
  {
    id: "guide-disk-space",
    title: "Find what is eating your disk space",
    platforms: "macOS & Windows",
    difficulty: "Beginner · 15 minutes",
    intro: "A full disk makes everything slow. Work from the biggest folders down, and only delete things you recognize.",
    steps: [
      "Check the total first: macOS — df -h. Windows — Get-Volume in PowerShell. This tells you how much room you actually need to free.",
      "Rank your home folder: macOS — du -sh ~/* | sort -h | tail -15. Windows PowerShell — run the folder-size command from the Measure-Object entry above on your user folder.",
      "Drill into the biggest folder and repeat until you find the culprit — usually Downloads, a phone backup, a game, or a node_modules folder.",
      "On macOS, check the usual suspects: ~/Library/Caches, ~/Library/Application Support, and ~/Library/Mobile Documents (iCloud). On Windows: %TEMP%, Downloads, and C:\\Users\\YourName\\AppData\\Local.",
      "Empty the trash/recycle bin, then clear caches: macOS — brew cleanup (if you use Homebrew). Windows — Disk Cleanup (cleanmgr) or Settings → System → Storage → Temporary files.",
      "Re-run the first check to confirm how much space you freed."
    ],
    gotchas: [
      "Do not delete anything inside /System, /Library, or C:\\Windows — those files keep your OS running.",
      "A folder full of small files (like node_modules) is safe to delete if you can reinstall it; a folder you do not recognize is not — search its name first.",
      "iCloud/OneDrive files that say they are in the cloud still take space if they are downloaded. Right-click → Remove download / Free up space to keep them cloud-only."
    ]
  },
  {
    id: "guide-kill-process",
    title: "Kill a stuck or frozen process",
    platforms: "macOS & Windows",
    difficulty: "Beginner · 5 minutes",
    intro: "When an app freezes and will not quit normally, end its process from the terminal instead of restarting the whole computer.",
    steps: [
      "Find the process: macOS — ps aux | grep -i appname, or open top and look for it. Windows — Get-Process appname in PowerShell, or tasklist | findstr appname in CMD.",
      "Note the PID (the number in the PID/Id column) — or just use the app name.",
      "Quit it politely first: macOS — kill <PID>. Windows PowerShell — Stop-Process -Name appname. CMD — taskkill /IM appname.exe.",
      "If it is still there after a few seconds, force it: macOS — kill -9 <PID> or killall -9 AppName. Windows — Stop-Process -Name appname -Force, or taskkill /IM appname.exe /F.",
      "Verify it is gone by running the find command from step 1 again."
    ],
    gotchas: [
      "Force-killing loses unsaved work in that app — always try the polite quit first.",
      "If a process comes back instantly, something is relaunching it (a helper, a service, or a login item). Check Activity Monitor / Task Manager → Startup, or stop the parent service.",
      "Never kill processes you do not recognize. System processes (kernel_task, System, csrss.exe) keep the OS alive."
    ]
  },
  {
    id: "guide-share-files",
    title: "Share files between two machines",
    platforms: "macOS & Windows",
    difficulty: "Intermediate · 15 minutes",
    intro: "Three reliable ways, from simplest to most powerful: a shared folder, a USB-free network copy, or a direct secure copy.",
    steps: [
      "Option A — a shared folder (same Wi-Fi network): on macOS, go to System Settings → General → Sharing and turn on File Sharing. On Windows, right-click a folder → Properties → Sharing → Share. The other computer then sees it in Finder (Network) or File Explorer (Network).",
      "Option B — send one file with scp: from the machine that has the file, run scp file.zip user@other-computer:~/Desktop/. You need the other machine's IP address and an SSH server running on it (macOS: enable Remote Login in Sharing settings; Windows: install OpenSSH Server).",
      "Option C — a USB drive formatted as exFAT, which both macOS and Windows read and write. Copy the files on, eject safely, plug into the other machine.",
      "For large or frequent transfers, set up a permanent share (Option A) once instead of copying files one by one.",
      "Always eject the drive or disconnect the share when you are done, so a half-written file does not get corrupted."
    ],
    gotchas: [
      "Both machines must be on the same network for Options A and B, and the firewall must allow file sharing/SSH.",
      "Windows file sharing uses your Microsoft account or a local username and password — the guest account is usually disabled.",
      "FAT32 drives cannot hold files larger than 4 GB. Use exFAT for large files."
    ]
  },
  {
    id: "guide-wifi-password",
    title: "Find your saved Wi-Fi password",
    platforms: "macOS & Windows",
    difficulty: "Beginner · 5 minutes",
    intro: "You connected months ago and forgot the password. Your computer still remembers it — here is how to read it back.",
    steps: [
      "macOS: open Terminal and run security find-generic-password -ga \"Your Wi-Fi Name\" -w. Enter your Mac password when asked and the Wi-Fi password prints out. (Or open Keychain Access, search the Wi-Fi name, double-click it, and tick Show password.)",
      "Windows: open CMD or PowerShell as administrator and run netsh wlan show profile name=\"Your Wi-Fi Name\" key=clear. The password is on the Key Content line.",
      "To list every saved network first: Windows — netsh wlan show profiles. macOS — open Keychain Access and search for AirPort.",
      "Copy the password into your password manager so you only have to do this once."
    ],
    gotchas: [
      "On macOS, the security command needs your login password and will ask for it twice (once for the keychain, once for the item).",
      "On Windows, key=clear only works from an administrator terminal.",
      "Only do this for networks you own or are authorized to use."
    ]
  },
  {
    id: "guide-terminal-apps",
    title: "Install and update apps from the terminal",
    platforms: "macOS & Windows",
    difficulty: "Beginner · 10 minutes",
    intro: "One command installs an app, and one command updates everything. No clicking through installers.",
    steps: [
      "macOS: install Homebrew from brew.sh if you do not have it, then run brew install firefox to install Firefox, or brew install --cask firefox for the Mac app version.",
      "Windows: winget is built in. Run winget search firefox to find it, then winget install Mozilla.Firefox. If winget lacks a package, install Chocolatey and use choco install firefox -y.",
      "Update everything at once: macOS — brew update && brew upgrade && brew cleanup. Windows — winget upgrade --all, or choco upgrade all -y for Chocolatey.",
      "Check what is installed: macOS — brew list. Windows — winget list.",
      "Remove an app the same way: macOS — brew uninstall <name> (or brew uninstall --cask <name>). Windows — winget uninstall <id>."
    ],
    gotchas: [
      "Installers downloaded by a package manager still ask for admin permission on first run — that is normal.",
      "Always search before installing: package names are exact, and a typo can install the wrong thing.",
      "Run updates weekly. Out-of-date browsers and tools are the most common way malware gets in."
    ]
  }
];

// ---------------- Virtual machine guides ----------------
var VM_GUIDES = [
  {
    id: "vm-utm-windows-mac",
    title: "Windows 11 on a Mac with UTM (Apple Silicon)",
    host: "macOS (Apple Silicon)",
    guest: "Windows 11 ARM",
    cost: "Free (UTM is free and open source; Windows 11 ARM needs a license for full use)",
    needs: ["A Mac with Apple Silicon (M1/M2/M3/M4)", "UTM (free from getutm.app or the Mac App Store)", "A Windows 11 ARM64 ISO (download from Microsoft's site — you need a Microsoft account)", "At least 64 GB free disk space and 8 GB RAM (give the VM 4 GB RAM and 64 GB disk minimum)"],
    steps: [
      "Download and install UTM, then download the Windows 11 ARM64 ISO from Microsoft.",
      "Open UTM, click Create a New Virtual Machine, and choose Virtualize (not Emulate — virtualize is far faster on Apple Silicon).",
      "Pick Windows, point UTM at the ISO, and give the VM 4 GB RAM (or half your Mac's RAM) and a 64 GB virtual disk.",
      "Start the VM and install Windows as normal. When it asks for a product key, choose I don't have a product key to finish setup and activate later.",
      "At the Windows setup screen, if it complains about missing drivers or the network, press Shift + F10, type OOBE\\BYPASSNRO, and press Enter — the VM restarts and lets you continue without a Microsoft account.",
      "Install the UTM guest tools (SPICE tools) from the UTM menu for better screen resolution, clipboard sharing, and shared folders.",
      "Take a snapshot in UTM before installing big software, so you can roll back if something breaks."
    ],
    gotchas: [
      "Windows 11 ARM runs most Windows apps through emulation, but a few old 32-bit apps and some games with anti-cheat will not work.",
      "UTM's Emulate mode runs x86 Windows very slowly — only use Virtualize with the ARM ISO on Apple Silicon.",
      "Give the VM at least 4 GB RAM or Windows will crawl; close heavy Mac apps while the VM runs."
    ]
  },
  {
    id: "vm-parallels-windows-mac",
    title: "Windows 11 on a Mac with Parallels Desktop",
    host: "macOS (Apple Silicon or Intel)",
    guest: "Windows 11",
    cost: "Paid (Parallels Desktop subscription; free 14-day trial)",
    needs: ["Parallels Desktop (parallels.com)", "A Windows 11 license for full activation", "At least 64 GB free disk space", "A Microsoft account (Parallels can download Windows 11 automatically)"],
    steps: [
      "Install Parallels Desktop and open it.",
      "Click the + button, choose Get Windows 11 from Microsoft, and let Parallels download and install it automatically — this handles the ISO, drivers, and setup for you.",
      "When prompted, sign in with your Microsoft account and choose whether this VM is for productivity or gaming (Parallels tunes the settings).",
      "Install Parallels Tools when prompted — it enables copy-paste, drag-and-drop, shared folders, and Coherence mode (Windows apps appear as Mac windows).",
      "In Parallels settings, set the VM to use half your CPU cores and half your RAM for a good balance.",
      "Shut the VM down properly from the Windows Start menu instead of closing the window, so Windows updates install cleanly."
    ],
    gotchas: [
      "Parallels is a yearly subscription — the VM keeps working after it lapses only if you do not update Parallels itself, so budget for renewal.",
      "Coherence mode is convenient but can confuse which app is Mac and which is Windows — press Ctrl + Cmd + F to exit it.",
      "On Apple Silicon, Parallels also runs Windows 11 ARM only, with the same app-compatibility limits as UTM."
    ]
  },
  {
    id: "vm-virtualbox-linux-windows",
    title: "Ubuntu Linux on Windows with VirtualBox",
    host: "Windows 10/11",
    guest: "Ubuntu Linux",
    cost: "Free (VirtualBox and Ubuntu are both free)",
    needs: ["VirtualBox (virtualbox.org)", "An Ubuntu Desktop ISO (ubuntu.com/download/desktop)", "At least 25 GB free disk space and 4 GB RAM to spare", "Virtualization enabled in your BIOS/UEFI (Intel VT-x or AMD-V)"],
    steps: [
      "Install VirtualBox, then download the Ubuntu ISO.",
      "In VirtualBox, click New, name the VM Ubuntu, set Type to Linux and Version to Ubuntu (64-bit), and give it 4096 MB RAM.",
      "Create a virtual hard disk: VDI format, Dynamically allocated, 25 GB or more.",
      "Select the VM, click Settings → Storage, click the empty optical drive, and choose the Ubuntu ISO file.",
      "Start the VM and choose Try or Install Ubuntu. Pick Install Ubuntu, follow the installer, and restart when it tells you to.",
      "After install, go to Devices → Insert Guest Additions CD Image inside the VM and install it for full-screen resolution, shared clipboard, and shared folders.",
      "Set up a shared folder in Settings → Shared Folders so files move easily between Windows and Ubuntu."
    ],
    gotchas: [
      "If VirtualBox says VT-x is not available, restart into BIOS/UEFI and enable Intel Virtualization Technology or AMD SVM.",
      "Hyper-V and VirtualBox fight over the same hardware feature — if VirtualBox VMs refuse to start, turn off Hyper-V (or use Hyper-V instead, see the next guide).",
      "Dynamically allocated disks grow as needed but never shrink on their own — do not give the VM more disk than you can spare."
    ]
  },
  {
    id: "vm-hyperv-linux-windows",
    title: "Linux on Windows with Hyper-V",
    host: "Windows 10/11 Pro, Enterprise, or Education",
    guest: "Ubuntu (or another Linux distro)",
    cost: "Free (built into Windows Pro — no extra software)",
    needs: ["Windows 10/11 Pro, Enterprise, or Education (Hyper-V is NOT in Home edition)", "Virtualization enabled in BIOS/UEFI", "An Ubuntu ISO, or just the built-in Quick Create gallery", "At least 25 GB free disk space"],
    steps: [
      "Enable Hyper-V: open PowerShell as administrator and run Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All, then restart.",
      "Open Hyper-V Manager from the Start menu.",
      "Click Quick Create on the right, pick Ubuntu from the gallery, and click Create Virtual Machine — Hyper-V downloads and sets up Ubuntu for you.",
      "Or create a custom VM: Action → New → Virtual Machine, choose Generation 2, give it 4 GB RAM, attach the Ubuntu ISO, and install as normal.",
      "Use Enhanced Session Mode (the toolbar button) for full-screen resolution and clipboard sharing.",
      "Shut the VM down from inside Ubuntu, not by closing the Hyper-V window, to avoid disk corruption."
    ],
    gotchas: [
      "Hyper-V is not included in Windows Home. If you have Home, use VirtualBox or WSL instead.",
      "Hyper-V runs in the background even when no VM is open, which can slow down VirtualBox, VMware, and some games — disable it if you switch tools.",
      "Generation 2 VMs need a 64-bit UEFI-compatible OS image; Generation 1 works with older 32-bit images."
    ]
  },
  {
    id: "vm-vmware-windows",
    title: "Any OS on Windows with VMware Workstation Player",
    host: "Windows 10/11",
    guest: "Windows, Linux, or macOS (see gotcha)",
    cost: "Free for personal use (Workstation Player is free for non-commercial use)",
    needs: ["VMware Workstation Player (vmware.com — free personal license)", "An ISO of the OS you want to install", "Virtualization enabled in BIOS/UEFI", "At least 25–64 GB free disk space depending on the guest OS"],
    steps: [
      "Install VMware Workstation Player and restart if asked.",
      "Click Create a New Virtual Machine, choose Installer disc image file (ISO), and browse to your ISO.",
      "VMware detects most OSes automatically and offers Easy Install — enter a username and password and it handles the install for you.",
      "Set the disk size (25 GB for Linux, 60 GB for Windows) and choose Store virtual disk as a single file for the best performance.",
      "After the install, go to Player → Manage → Install VMware Tools for better graphics, clipboard sharing, and drag-and-drop.",
      "Use Player → File → Take Snapshot before risky changes so you can roll back in one click."
    ],
    gotchas: [
      "Running macOS as a guest on non-Apple hardware violates Apple's license — only do it on a Mac host, and check the current rules first.",
      "VMware Player cannot run two VMs at once in the free version — use Workstation Pro or VirtualBox if you need several VMs simultaneously.",
      "If a VM feels slow, check that the host still has free RAM — never give a VM more than half your total RAM."
    ]
  },
  {
    id: "vm-wsl",
    title: "WSL 2 — Linux on Windows without a full VM",
    host: "Windows 10 (version 2004+) / Windows 11",
    guest: "Ubuntu / Debian / other Linux distros",
    cost: "Free (built into Windows)",
    needs: ["Windows 10 version 2004 or newer, or Windows 11", "An admin PowerShell terminal", "Internet access for the one-time download", "About 1–2 GB free disk space for Ubuntu"],
    steps: [
      "Open PowerShell as administrator and run wsl --install. This installs WSL 2 and Ubuntu, then asks you to restart.",
      "After the restart, Ubuntu opens and asks you to create a Linux username and password.",
      "Update the Linux packages inside Ubuntu: sudo apt update && sudo apt upgrade.",
      "Open Ubuntu any time from the Start menu, or by typing wsl in PowerShell or Windows Terminal.",
      "Access your Windows files from inside Linux at /mnt/c/Users/YourName, and access Linux files from Windows Explorer at \\\\wsl$\\Ubuntu.",
      "Install another distro with wsl --install -d Debian, and list installed distros with wsl --list --verbose.",
      "If you use VS Code, install the WSL extension — it lets you edit Linux files and run the terminal inside VS Code."
    ],
    gotchas: [
      "WSL 2 is a lightweight VM, not an emulator — it runs a real Linux kernel, so almost all Linux commands work.",
      "Do not edit Linux files with Windows apps (Notepad, Explorer drag-and-drop) outside the \\\\wsl$ path — it can corrupt them. Use VS Code with the WSL extension instead.",
      "GUI Linux apps work on Windows 11 out of the box (WSLg). On Windows 10 you need an X server, or just use the terminal.",
      "WSL is not a replacement for a full VM when you need a Linux desktop, snapshots, or a different kernel — use VirtualBox or Hyper-V for that."
    ]
  }
];

// Browser + Node compatibility: expose the data either way.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { COMMANDS: COMMANDS, GUIDES: GUIDES, VM_GUIDES: VM_GUIDES };
}
