import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common'
@Injectable()
export class ValidatePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        return value
    }
}