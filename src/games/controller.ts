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

    // @Post('/advertisements')
    // @HttpCode(201)
    //     createAdvertisement(
    //     @Body() advertisement: Advertisement
    // ) {
    //     return advertisement.save()
    // }

}

// insert into games (name, color, board) values
//   ('Game 2.0', 'pink', 0);
