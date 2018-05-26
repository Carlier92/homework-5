import { JsonController, Get, Param, Body, Post, HttpCode, Put } from 'routing-controllers'
import Game from './entity'

@JsonController()
export default class GameController {

    @Put('/games/:id')
    getGames(
        @Param('id') id: number
    ) {
        return Game.findOne(id)    
    }

    @Get('/games')
    async allGames() {
      const games = await Game.find()
      return { games }
    }

    @Post('/games')
    @HttpCode(201)
        createGames(
        @Body() game: Game
    ) {
        game.color = randomColor();
        // game.board = { board:[['o', 'o', 'o'], ['o', 'o', 'o'], ['o', 'o', 'o']]}
        return game.save()
    }
}

const colors = ["red", "blue", "green", "yellow", "magenta"]
const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
}


// var random = colors[Math.floor(Math.random() * colors.length)]
// console.log(colors)


// insert into games (name, color, board) values
//   ('Game 2.0', 'pink', 0);
