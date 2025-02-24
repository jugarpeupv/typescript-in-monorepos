import { buildableLib } from '@repo/buildable-lib';
import { nonBuildableLib } from '@repo/non-buildable-lib';

export function fatherLib() {
  buildableLib();
  nonBuildableLib();
}

fatherLib();

