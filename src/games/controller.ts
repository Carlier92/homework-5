import { JsonController, Get, Param, Body, Post, HttpCode, Put, NotFoundError } from 'routing-controllers'
import Game from './entity'

const colors = ["red", "blue", "green", "yellow", "magenta"]
const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
}

// const moves = (board1, board2) => 
//   board1
//     .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
//     .reduce((a, b) => a.concat(b))
//     .length

@JsonController()
export default class GameController {

    @Put('/games/:id')
    async updateGame(
        @Param('id') id: string,
        @Body() update: Partial<Game>
    ) {
        const game = await Game.findOne(id)
        if (!game) throw new NotFoundError('Cannot find page')

        game.color = randomColor();
        return Game.merge(game, update).save()
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
        return game.save()
    }
}
