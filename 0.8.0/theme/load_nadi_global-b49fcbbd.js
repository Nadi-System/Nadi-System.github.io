"use strict";

(async () => {
    const url = "/pkg/nadi_wasm.js";
    const mod = await import(url);
    await mod.default();
    window.wasmRunTasks = mod.run_tasks;
    window.can_run_nadi_in_wasm = mod.can_run_in_wasm;
    
    Array.from(document.querySelectorAll('.playground')).forEach(function(pre_block) {
	const buttons = pre_block.firstChild;
	
    	if (!window.can_run_nadi_in_wasm(playground_text(pre_block))){
	    const warnCodeButton = document.createElement('button');
            warnCodeButton.className = 'warn-button';
            warnCodeButton.hidden = false;
            warnCodeButton.title = 'This code might not run';
            warnCodeButton.setAttribute('aria-label', warnCodeButton.title);
	    warnCodeButton.innerHTML = `<span class=fa-svg style="color:#ff0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="m 288.02178,24.473926 c -20.25854,0 -38.82886,10.491026 -49.44047,27.734893 L 26.349074,399.49793 c -10.973371,17.8468 -11.335601,40.27588 -1.085748,58.48446 10.249853,18.20855 29.544162,29.54368 50.526215,29.54368 H 500.25402 c 20.98204,0 40.27635,-11.33513 50.5262,-29.54368 10.24986,-18.20858 9.76705,-40.63766 -1.08575,-58.48446 L 337.46224,52.208819 C 326.97122,34.964952 308.28031,24.473926 288.02178,24.473926 Z m -0.0212,98.296824 c 26.49789,0 47.8295,21.32927 47.8295,47.82715 v 110.92309 c 0,26.49789 -21.33161,47.83187 -47.8295,47.83187 -26.4979,0 -47.82951,-21.33398 -47.82951,-47.83187 V 170.5979 c 0,-26.49788 21.33161,-47.82715 47.82951,-47.82715 z m 0,225.87595 c 26.49789,0 47.8295,21.3316 47.8295,47.82951 v 7.63086 c 0,26.49789 -21.33161,47.82716 -47.8295,47.82716 -26.4979,-2e-5 -47.82951,-21.32927 -47.82951,-47.82716 v -7.63086 c 0,-26.49791 21.33161,-47.82951 47.82951,-47.82951 z"/></svg></span>`
            buttons.insertBefore(warnCodeButton, buttons.firstChild);
	}
    })
})();
