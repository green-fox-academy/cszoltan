//*import {Thing} from "./thing";*/
import {Fleet} from "./fleet";
import { Thing } from "./things";

let fleet = new Fleet();
//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */

fleet.add(new Thing('Get Milk'));
fleet.add(new Thing('Remove Obstacles'));
fleet.add(new Thing('Stand up'));
fleet.add(new Thing('Eat lunch'));
fleet.complete(2);
fleet.complete(3);

fleet.print();