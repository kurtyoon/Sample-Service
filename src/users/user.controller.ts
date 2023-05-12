import { Controller, Post, Body } from '@nestjs/common';
import UserService from './users.service';
import { GithubCodeDto } from './dto/users.dto';

@Controller()
export default class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}
    
    @Post()
    public async getGithubInfo(@Body() githubCodeDto: GithubCodeDto) {
        const user = await this.userService.getGithubInfo(githubCodeDto);

        return {
            status: 200,
            message: '깃허브 유저 정보 성공',
            data: {
                user,
            },
        };
    }
}