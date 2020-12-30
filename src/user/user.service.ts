import { HttpException, HttpStatus, Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  getUser() {
    if (Math.random() > 0.5) {
      return "this is an user"
    } else {
      throw new HttpException('hahahh', HttpStatus.FORBIDDEN)
    }
  }
}
