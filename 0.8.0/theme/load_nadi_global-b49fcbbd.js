"use strict";

(async () => {
    const url = "/pkg/nadi_wasm.js";
    const mod = await import(url);
    await mod.default();
    window.wasmRunTasks = mod.run_tasks;
    window.can_run_nadi_in_wasm = mod.can_run_in_wasm;
})();
