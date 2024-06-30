# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

source $HOME/zsh-autocomplete/zsh-autocomplete.plugin.zsh

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

export DISABLE_AUTO_TITLE="true"

ZSH_THEME="darkblood"

COMPLETION_WAITING_DOTS="true"


# VARS
export NEO4J_HOME="/var/lib/neo4j"


# PLUGINS

plugins=(git)

fpath+="${ZSH_CUSTOM:-"$ZSH/custom"}/plugins/zsh-completions/src"

source $ZSH/oh-my-zsh.sh


## ALIASES
# General
alias docker="sudo docker"
alias zshrc="vim ~/.zshrc"
alias vimrc="vim ~/.vimrc"
alias tmuxconf="vim ~/.tmux.conf"

# Python
alias python=python3.10
alias pip=pip3
alias ja="python3 -m jupyter notebook"

# Neo4j
alias start_neo4j="sudo neo4j start"
alias stop_neo4j="sudo neo4j stop"
alias restart_neo4j="sudo neo4j restart"

# Tmux
alias tmux="TERM=screen-256color-bce tmux"
alias tls="tmux ls"
alias tks="tmux kill-session -t"

[ -f "/home/dalton/.ghcup/env" ] && . "/home/dalton/.ghcup/env" # ghcup-env
alias dotfiles=/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME
