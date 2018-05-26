import { JsonController, Get, Param, Body, Post, HttpCode } from 'routing-controllers'
import Game from './entity'

@JsonController()
export default class GameController {

    // @Get('/advertisements/:id')
    // getAdvertisements(
    //     @Param('id') id: number
    // ) {
    //     return Advertisement.findOne(id)    
    // }

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
        console.log("game");

        return game.save()
    }

}

const colors = ["red", "blue", "green", "yellow", "magenta"]
var random = colors[Math.floor(Math.random() * colors.length)]


// insert into games (name, color, board) values
//   ('Game 2.0', 'pink', 0);
