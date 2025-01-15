# config.nu
#
# Installed by:
# version = "0.101.0"
#
# This file is used to override default Nushell settings, define
# (or import) custom commands, or run any other startup tasks.
# See https://www.nushell.sh/book/configuration.html
#
# This file is loaded after env.nu and before login.nu
#
# You can open this file in your default editor using:
# config nu
#
# See `help config nu` for more options
#
# You can remove these comments if you want or leave
# them for future reference.

$env.config.buffer_editor = "vim"

# Tmux
def tns [name] {
    tmux new-session -s ($name)
}

def tls [] {
    tmux list-sessions
}

def tks [name] {
    tmux kill-session -t ($name)
}

# Logseq
def logseq [] {
    ~/Logseq-linux-x64-0.10.9.AppImage
}

# Zotero
def zotero [] {
    ~/Zotero_linux-x86_64/zotero
}


# Starship
mkdir ($nu.data-dir | path join "vendor/autoload")
starship init nu | save -f ($nu.data-dir | path join "vendor/autoload/starship.nu")

# Zoxide
source ~/.zoxide.nu
