import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, {metatype}: ArgumentMetadata): Promise<object> {
    if (!metatype || !this.toValidate(metatype)) {
      return value
    }

    const object: object = plainToClass(metatype, value)
    const errors: Array<any> = await validate(object)
    if (errors.length) {
      const msg = Object.values(errors[0].constraints)[0]
      throw new BadRequestException(`验证失败：${msg}`)
    }

    return value
    
  }

  private toValidate(metatype: any): boolean {
    const types: any[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

}
