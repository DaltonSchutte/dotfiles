set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

Plugin 'vim-scripts/indentpython.vim'
Plugin 'dense-analysis/ale'
Plugin 'kkoomen/vim-doge'
Plugin 'tmsvg/pear-tree'
Plugin 'preservim/nerdtree'
Plugin 'frazrepo/vim-rainbow'
Plugin 'preservim/nerdcommenter'
Plugin 'airblade/vim-gitgutter'
Plugin 'ycm-core/YouCompleteMe'
Plugin 'Lokaltog/powerline', {'rtp': 'powerline/bindings/vim/'}
Plugin 'lervag/vimtex'
Plugin 'SirVer/ultisnips'
Plugin 'iamcco/markdown-preview.nvim'
Plugin 'neovimhaskell/haskell-vim'
Plugin 'thedenisnikulin/vim-cyberpunk'
Plugin 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plugin 'junegunn/fzf.vim'

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required

syntax on
filetype plugin indent on

" Tabs
:set tabstop=4 shiftwidth=4 expandtab

" Line numbers
:set number relativenumber

" Line centering
:nnoremap j jzz
:nnoremap k kzz
:nnoremap G Gzz

" Colorscheme
:set termguicolors
colorscheme cyberpunk
let g:airline_theme='cyberpunk'

" Transparent gui
hi Normal guibg=NONE ctermbg=NONE

" Set scrolloff
:set so=8

" Long lines
set nowrap                            " Don't wrap long lines
set listchars=extends:→               " Show arrow if line continues rightwards
set listchars+=precedes:←             " Show arrow if line continues leftwards