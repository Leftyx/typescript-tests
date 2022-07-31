import { runner as genericsRunner } from './tests/test-generics';
import { runner as unknownRunner } from './tests/test-unknown-type';
import { runner as arraysRunner } from './tests/test-arrays';
import { runner as spreadRunner } from './tests/test-spread';
import { runner as enumsRunner } from './tests/test-enums';
import { runner as funcOverloadRunner } from './tests/test-function-overload';
import { runner as utilityTypesRunner } from './tests/test-utlity-types';
import { runner as functionsRunner } from './tests/test-functions';
import { runner as flyweigthRunner } from './tests/test-flyweight';

// genericsRunner();
// unknownRunner();
// arraysRunner();
// spreadRunner();
// enumsRunner();
// funcOverloadRunner();
// utilityTypesRunner();
// functionsRunner();

flyweigthRunner().then((x) => {
   return x;
});
