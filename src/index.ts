/**
 * Module index.
 *
 * @author samizdam <samizdam@inbox.ru>
 */

let packageInfo = require("../package.json");
export const TS_X_UNIT_VERSION = packageInfo.version;

export * from "./Suite";
export {AbstractUnitTestCase} from "./AbstractUnitTestCase";
export {AbstractDomTestCase} from "./AbstractDomTestCase";
export {LaunchMapBuilder} from "./LaunchMapBuilder";
export * from "./Logger";
export * from "./Printer"