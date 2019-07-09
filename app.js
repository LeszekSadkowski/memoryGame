const memoryGame = {
    tileCount:20,//number of bricks
    tileOnRow:5,//number bricks on row
    divBoard: null,//div with game board
    divScore: null,//div with game score
    tiles:[],//here comes randomized table
    tilesChecked:[],//selected blocks
    moveCount:0,//number of moves
    tilesIMG:[// graph bricks
        'title_1.png',
        'title_2.png',
        'title_3.png',
        'title_4.png',
        'title_5.png',
        'title_6.png',
        'title_7.png',
        'title_8.png',
        'title_9.png',
        'title_1.png'
    ],

    this.startGame = function(){
        //cleaning board
        this.divBoard = document.querySelector('.game-board');
        this.divBoard.innerHTML = '';

        //cleaning scoreboard
        this.divScore = document.querySelector('.game-score');
        this.divScore.innerHTML = '';

        //cleaning variables
        this.tiles=[];
        this.tilesChecked = [];
        this.moveCount = '';

        //cresting array with pairs the numbers of blocks
        for(let i=0; i<tileCount; i++){
            this.tiles.push(Math.floor(i/2));
        }
        // and randomize them
        for (let i=this.tileCount-1;i>0;i--){
            const swap = Math.floor(Math.random()*i);
            const tmp = this.tiles[i];
            this.tiles[i] = this.tiles[swap];
            this.tiles[swap] = tmp;
        }
        for(let i = 0; i<this.tileCount;i++){
            const tile = document.createElement('div');
            tile.classList.add('game-tile');
            this.divBoard.appendChild(tile);

            tile.dataset.cardType = this.tiles[i];
            tile.dataset.index = i;

            tile.style.left = 5 + (tile.offsetWidth + 10)*(i%this.tileOnRow) + "px";
            tile.style.top = 5 + (tile.offsetHeight + 10) * (Math.floor(i/this.tileOnRow)) + "px";
        }
    }
};

