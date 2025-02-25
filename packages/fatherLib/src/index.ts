import { buildableLib } from '../../buildable-lib/src/index';
import { nonBuildableLib } from '../../non-buildable-lib/src/index';

export function fatherLib() {
  buildableLib();
  nonBuildableLib();
}

fatherLib();

