# CommandBook 📖

**Every command you need, in one place.** A searchable dictionary of real macOS Terminal and Windows PowerShell / CMD commands, plus step-by-step guides and virtual-machine walkthroughs — as a single static web app that works fully offline.

## What is in it

- **Command dictionary** — 79 entries across macOS (Terminal/zsh), Windows (PowerShell and CMD), and cross-platform Git & SSH. Every entry has the command, its syntax, a plain-English description, step-by-step usage, and a real example. Categories: Files & folders, Searching, Networking, Processes, Disk, Users & permissions, Package managers (Homebrew, winget, Chocolatey), Git, SSH, and System info.
- **Live search** — the search bar at the top filters entries as you type, matching the command name, description, syntax, and tags. Filter by platform (macOS / Windows / Both) and by category. Press `/` anywhere to jump to the search box. Each entry has a Copy button for its syntax.
- **Step-by-step guides** — 6 guides: set up SSH keys, find what is eating your disk space, kill a stuck process, share files between two machines, find your saved Wi-Fi password, and install/update apps from the terminal.
- **Virtual machines** — 6 guides: Windows 11 on a Mac with UTM, Windows 11 on a Mac with Parallels, Ubuntu on Windows with VirtualBox, Linux on Windows with Hyper-V, any OS on Windows with VMware Workstation Player, and WSL 2 as the lightweight alternative to a full VM. Each guide lists what you need, the steps, and common gotchas.

## How to use it

No build step, no server, no internet needed.

**Option 1 — open the file directly:**

Open `index.html` in any browser (double-click it, or drag it into a browser window).

**Option 2 — tiny local server (recommended if your browser blocks local files):**

```bash
# Python (already installed on macOS and most Linux systems)
python3 -m http.server 8000

# or Node
npx serve .
```

Then open http://localhost:8000 in your browser.

## How to run the tests

```bash
node tests/test.js
```

The suite (Node only, no dependencies, no network) checks that:

- every command entry has all required fields (command, syntax, description, steps, example, tags, …) and at least 3 steps;
- there are no duplicate command+platform pairs and no duplicate ids;
- there are at least 60 entries, with at least 25 for macOS and 25 for Windows;
- every guide and VM guide has steps and gotchas, and the VM section covers UTM, Parallels, VirtualBox, Hyper-V, VMware, and WSL;
- the search logic returns the right entries for sample queries (`disk`, `kill process`, `git`, `winget`, `wifi`) and nothing for nonsense queries;
- `index.html` wires up the search bar, `data.js`, and `app.js`, and the README/LICENSE are present.

## How to add a new entry

All content lives in `data.js` — no database, no build step.

1. Find the right `COMMANDS.push(...)` block (macOS, Windows, or Cross-platform).
2. Copy an existing entry and change every field:
   - `id` — unique, lowercase, e.g. `"mac-nano"`.
   - `platform` — `"macOS"`, `"Windows"`, or `"Cross-platform"`.
   - `shell` — `"zsh"`, `"PowerShell"`, `"CMD"`, or a combination.
   - `category` — use an existing category if one fits (see the category dropdown in the app).
   - `command` — the command name as typed.
   - `syntax` — the full usage line, with `<placeholders>` for things the user fills in.
   - `description` — one plain-English sentence.
   - `steps` — at least 3 steps, each a concrete action.
   - `example` — a real command the user can copy, paste, and run.
   - `tags` — lowercase keywords people would search for.
   - `note` — optional warning (e.g. "there is no undo").
3. To add a guide, add an object to `GUIDES` (fields: `id`, `title`, `platforms`, `difficulty`, `intro`, `steps`, `gotchas`). For a VM guide, add to `VM_GUIDES` (fields: `id`, `title`, `host`, `guest`, `cost`, `needs`, `steps`, `gotchas`).
4. Run `node tests/test.js` — it will fail if a field is missing or an id is duplicated.
5. Refresh `index.html` — the new entry appears automatically.

## Accuracy notes

Commands were written from the documented behaviour of macOS (zsh), Windows PowerShell 5.1/7, and CMD. Shells change over time: if a flag stops working, check `man <command>` on macOS or `Get-Help <command> -Examples` in PowerShell. Where a command differs between shells (for example `dir` vs `Get-ChildItem`, or `ping` stopping on its own in PowerShell but running forever on macOS), the entry says so.

## License

MIT — see [LICENSE](LICENSE).
