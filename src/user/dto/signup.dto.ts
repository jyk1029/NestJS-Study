import {IsNotEmpty, IsNumber} from "class-validator";

export class SignupDto {
    @IsNotEmpty()
    accountId: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    nickname: string;
    @IsNumber()
    @IsNotEmpty()
    age: Number;
}
