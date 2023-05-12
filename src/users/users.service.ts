import { Injectable } from "@nestjs/common";
import {CLIENT_ID, CLIENT_SECRET} from 'config/config.json';
import axios, { AxiosResponse } from "axios";
import { GithubCodeDto } from "./dto/users.dto";

export interface IGithubUserTypes {
  githubId: string;
  avatar: string;
  name: string;
  description: string;
  location: string;
}

@Injectable()
export default class UserService {
    public async getGithubInfo(githubCodeDto: GithubCodeDto): Promise<IGithubUserTypes> {
        const { code } = githubCodeDto;
        const getTokenUrl: string = 'https://github.com/login/oauth/access_token';

        const request = {
            code,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
        };

        const response: AxiosResponse = await axios.post(getTokenUrl, request, {
            headers: {
                accept: 'application/json',
            },
        });

        const { access_token } = response.data;

        const getUserUrl: string = 'https://api.github.com/user';

        const { data } = await axios.get(getUserUrl, {
            headers: {
                Authorization: `token ${access_token}`,
            },
        });

        const { login, avatar_url, name, bio, company } = data;

        const githubInfo: IGithubUserTypes = {
            githubId: login,
            avatar: avatar_url,
            name,
            description: bio,
            location: company,
        };

        return githubInfo;
    }
}