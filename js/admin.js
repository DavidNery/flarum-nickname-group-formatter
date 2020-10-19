import { Extend } from '@flarum/core/forum';

export const extend = [
  new Extend.Model('groups').attribute('displayStyle')
];

export * from './src/admin';