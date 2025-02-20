import { plainToInstance } from "class-transformer";
import { BaseValidator } from "src/common/validator/base.validator";
import { IValidator } from "src/common/validator/interface.validator";
import { ServidorDto, ServidorUpdateDto } from "./servidor.dto";

export class ServidorValidator extends BaseValidator implements IValidator {
    validate(data: any, update?: boolean): Promise<this> {
        if (update) {
            return this.validator(plainToInstance(ServidorUpdateDto, data));
        }

        return this.validator(plainToInstance(ServidorDto, data));
    }

    // validate(data: any): Promise<this> {
    //     const dados = plainToInstance(ServidorDto, data);

    //     return this.validator(dados);
    // }
}
