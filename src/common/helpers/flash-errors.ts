import { Request } from 'express';

export const flashErrors = (req, res, next) => {
  res.locals.session = req.session;
  const flashErrors: string[] = req.session.flashErrors;
  const old: string[] = req.session.old;

  if (flashErrors) {
    res.locals.flashErrors = flashErrors;
    res.locals.errors = flashErrors;
    req.session.flashErrors = null;
    req.session.errors = null;
  }

  if (old) {
    res.locals.old = old;
    req.session.old = null;
  }

  next();
};

export const setFlashErrors = (
  req: Partial<Request>,
  errors: string[] | string,
) => {
  req.session['flashErrors'] = errors;
  req.session['errors'] = errors;
};

export const setOld = (req: Partial<Request>, old: any) => {
  req.session['old'] = old;
};
