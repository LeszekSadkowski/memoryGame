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
            const swap = Math.floor(Math.random()*)
        }
    }
};

