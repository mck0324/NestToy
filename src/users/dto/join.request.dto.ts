import { ApiProperty, PickType } from "@nestjs/swagger";
import { Users } from "src/entities/Users";


export class JoinRequestDto extends PickType(Users, ['nickname', 'email', 'password'] as const ) {
    //PickType()으로 인해 아래 @ApiProperty가 필요 없어짐
    // @ApiProperty({
    //     example: 'mck@naver.com',
    //     description: '이메일',
    //     required: true,
    // })
    // public email: string;

    // @ApiProperty({
    //     example: 'mck',
    //     description: '닉네임',
    //     required: true,
    // })
    // public nickname: string;

    // @ApiProperty({
    //     example: '123',
    //     description: '비밀번호',
    //     required: true,
    // })
    // public password: string;
}