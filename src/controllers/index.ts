// import { DidWebLacController } from './did-web-lac/did.web.lac.controller';
// import { DidWebLacAttributeController } from './did-web-lac/attribute.controller';
import { DidLac1AttributeController } from './did-lac1/attribute.controller';
import { DidLac1DelegateController } from './did-lac1/delegate.controller';
import { DidLac1Controller } from './did-lac1/did.controller';

export const controllers = [
  DidLac1Controller,
  DidLac1AttributeController,
  DidLac1DelegateController
];
