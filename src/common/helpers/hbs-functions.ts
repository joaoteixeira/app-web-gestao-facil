const helpers = {
  dateFormat: (date: string) => {
    const locale = new Date(date);
    return locale.toLocaleString('pt-BR');
  },
  inc: (value: string) => parseInt(value) + 1,
  json: (value: any) => { console.log(value); return JSON.stringify(value) },
  'error-message': (errors: any[], key: string) => errors?.find(i => i.property == key)?.message,
  'error-messages': (errors: any[], key: string) => errors?.find(i => i.property == key)?.messages
};

export const hbsRegisterHelpers = (hbs: any) => {
  for (const functionName in helpers) {
    hbs.registerHelper(functionName, helpers[functionName]);
  }
};
