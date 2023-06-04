import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
    @Get(':name/chats')
    getAllChannels() {

    }
    @Post(':name/chats')
    createChannel() {

    }

    @Get(':name')
    getSpecificChannel() {

    }

    @Get()
    getChats() {

    }

    @Post()
    postChat() {

    }

    @Get()
    getAllMembers(){

    }

    @Post()
    inviteMembers() {
        
    }

}
