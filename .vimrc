set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize

call plug#begin('~/.vim/plugged')

Plug 'vim-scripts/indentpython.vim'
Plug 'kkoomen/vim-doge'
Plug 'tmsvg/pear-tree'
Plug 'preservim/nerdtree'
Plug 'frazrepo/vim-rainbow'
Plug 'preservim/nerdcommenter'
Plug 'airblade/vim-gitgutter'
Plug 'ycm-core/YouCompleteMe'
Plug 'Lokaltog/powerline', {'rtp': 'powerline/bindings/vim/'}
Plug 'prabirshrestha/vim-lsp'
Plug 'mattn/vim-lsp-settings'
Plug 'lervag/vimtex'
Plug 'SirVer/ultisnips'
Plug 'honza/vim-snippets'
Plug 'iamcco/markdown-preview.nvim'
Plug 'hashivim/vim-terraform'
Plug 'thedenisnikulin/vim-cyberpunk'
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'

" All of your Plugs must be added before the following line
call plug#end()

syntax on
filetype plugin indent on

" Tabs
:set tabstop=4 shiftwidth=4 expandtab

" Backspace
:set backspace=indent,eol,start 

" Line numbers
:set number relativenumber

" DoGe
let g:doge_doc_standard_python = 'numpy'

" vimtex
let g:tex_flavor='latex'
let g:vimtex_view_method='skim'
let g:vimtex_quickfix_mode=0
set conceallevel=1
let g:tex_conceal='abdmg'

" Line centering
:nnoremap j jzz
:nnoremap k kzz
:nnoremap G Gzz
:nnoremap n nzz
:nnoremap N Nzz

" LSP - Ruff
if executable('ruff')
    au User lsp_setup call lsp#register_server({
        \ 'name': 'ruff',
        \ 'cmd': {server_info->['ruff', 'server']},
        \ 'allowlist': ['python'],
        \ 'workspace_config': {},
        \ })
endif

augroup lsp_install
    au!
    " call s:on_lsp_buffer_enabled only for languages that has the server registered.
    autocmd User lsp_buffer_enabled call s:on_lsp_buffer_enabled()
augroup END


" Haskell-vim
let g:haskell_enable_quantification = 1   " to enable highlighting of `forall`
let g:haskell_enable_recursivedo = 1      " to enable highlighting of `mdo` and `rec`
let g:haskell_enable_arrowsyntax = 1      " to enable highlighting of `proc`
let g:haskell_enable_pattern_synonyms = 1 " to enable highlighting of `pattern`
let g:haskell_enable_typeroles = 1        " to enable highlighting of type roles
let g:haskell_enable_static_pointers = 1  " to enable highlighting of `static`
let g:haskell_backpack = 1                " to enable highlighting of backpack keywords

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
