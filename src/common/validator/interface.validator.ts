export interface IValidator {
  validate(data: any, update?: boolean): Promise<this>;
}