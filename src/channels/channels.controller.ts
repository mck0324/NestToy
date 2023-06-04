import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('CHANNEL')
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

    @Get(':name/chats')
    getChats() {

    }

    @Post(':name/chats')
    postChat() {

    }

    @Get(':name/members')
    getAllMembers(){

    }

    @Post()
    inviteMembers() {
        
    }

}
