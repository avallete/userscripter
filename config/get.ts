// Do not edit this file, but instead config.json.

import * as Userscripter from "../.userscripter/build/userscripter";

const USERSCRIPT_CONFIG = Userscripter.readConfig();

function get(key: string): string {
    if (USERSCRIPT_CONFIG[key] === undefined) {
        throw new Error(`Undefined userscript config key: ${key}`);
    } else {
        return USERSCRIPT_CONFIG[key];
    }
}

export default get;
