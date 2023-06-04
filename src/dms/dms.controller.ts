import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
// :url은 param으로 불러오기
export class DmsController {
    @Get(':id/chat')
    // getChat(@Query('perPage') perPage, @Query('page') page) {
    //     console.log(perPage, page);
    // };
    getChat(@Query() query,@Param() param) {
        console.log(query.perPage, query.page);
    };

    @Post(':id/chats')
    postChat(@Body() body) {

    }
}
