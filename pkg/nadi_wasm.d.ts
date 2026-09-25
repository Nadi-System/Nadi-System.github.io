/* tslint:disable */
/* eslint-disable */

export class Edge {
    free(): void;
    [Symbol.dispose](): void;
    constructor(start: string, end: string);
    readonly end: string;
    readonly start: string;
}

export class JsNode {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    attr(name: string): any | undefined;
    readonly name: string;
}

export class NadiTask {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    error(): string | undefined;
    run(ctx: WasmTaskCtx): TaskResponse;
    col: number;
    line: number;
}

export class TaskResponse {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    paste(elem_id: string): void;
}

export class WasmTaskCtx {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Provide a list for autocomplete, provides a full list
     */
    autocomplete(): string[];
    changed(): boolean;
    draw_on_canvas(canvas_id: string): Promise<void>;
    edges(): Edge[];
    load_edge_attrs(attrs: string): string | undefined;
    load_network(net: string): string | undefined;
    load_network_attrs(attrs: string): string | undefined;
    net_attr(name: string): any | undefined;
    constructor();
    node_by_index(ind: number): JsNode | undefined;
    node_by_name(name: string): JsNode | undefined;
    nodes(): string[];
    reset_changed(): void;
    run_tasks(code: string): TaskResponse;
    tooltip(tasks: string, line: number, col: number, hover: boolean): string | undefined;
}

/**
 * check if the tasks have plugins, those can't be run from wasm
 */
export function can_run_in_wasm(code: string): boolean;

export function get_one_task_at(tasks: string, line: number, col: number): NadiTask;

/**
 * autocomplete based on the given prefix
 */
export function nadi_autocomplete_list(pre: string): string[];

export function nadi_draw_network(canvas_id: string, net_id: string, node_color: string, edge_color: string, text_color: string): void;

export function nadi_function_help(func: string): string | undefined;

export function nadi_list_functions(search: string): string[];

export function run_tasks(code: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_edge_free: (a: number, b: number) => void;
    readonly __wbg_get_naditask_col: (a: number) => number;
    readonly __wbg_get_naditask_line: (a: number) => number;
    readonly __wbg_jsnode_free: (a: number, b: number) => void;
    readonly __wbg_naditask_free: (a: number, b: number) => void;
    readonly __wbg_set_naditask_col: (a: number, b: number) => void;
    readonly __wbg_set_naditask_line: (a: number, b: number) => void;
    readonly __wbg_taskresponse_free: (a: number, b: number) => void;
    readonly __wbg_wasmtaskctx_free: (a: number, b: number) => void;
    readonly can_run_in_wasm: (a: number, b: number) => number;
    readonly edge_end: (a: number) => [number, number];
    readonly edge_new: (a: number, b: number, c: number, d: number) => number;
    readonly edge_start: (a: number) => [number, number];
    readonly get_one_task_at: (a: number, b: number, c: number, d: number) => number;
    readonly jsnode_attr: (a: number, b: number, c: number) => any;
    readonly jsnode_name: (a: number) => [number, number];
    readonly nadi_autocomplete_list: (a: number, b: number) => [number, number];
    readonly nadi_draw_network: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => void;
    readonly nadi_function_help: (a: number, b: number) => [number, number];
    readonly nadi_list_functions: (a: number, b: number) => [number, number];
    readonly naditask_error: (a: number) => [number, number];
    readonly naditask_run: (a: number, b: number) => number;
    readonly run_tasks: (a: number, b: number) => [number, number];
    readonly taskresponse_paste: (a: number, b: number, c: number) => void;
    readonly wasmtaskctx_autocomplete: (a: number) => [number, number];
    readonly wasmtaskctx_changed: (a: number) => number;
    readonly wasmtaskctx_draw_on_canvas: (a: number, b: number, c: number) => any;
    readonly wasmtaskctx_edges: (a: number) => [number, number];
    readonly wasmtaskctx_load_edge_attrs: (a: number, b: number, c: number) => [number, number];
    readonly wasmtaskctx_load_network: (a: number, b: number, c: number) => [number, number];
    readonly wasmtaskctx_load_network_attrs: (a: number, b: number, c: number) => [number, number];
    readonly wasmtaskctx_net_attr: (a: number, b: number, c: number) => any;
    readonly wasmtaskctx_new: () => number;
    readonly wasmtaskctx_node_by_index: (a: number, b: number) => number;
    readonly wasmtaskctx_node_by_name: (a: number, b: number, c: number) => number;
    readonly wasmtaskctx_nodes: (a: number) => [number, number];
    readonly wasmtaskctx_reset_changed: (a: number) => void;
    readonly wasmtaskctx_run_tasks: (a: number, b: number, c: number) => number;
    readonly wasmtaskctx_tooltip: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number];
    readonly wasm_bindgen_85c0e06f67b82c55___convert__closures_____invoke___js_sys_4c4c80083218797f___Function_fn_wasm_bindgen_85c0e06f67b82c55___JsValue_____wasm_bindgen_85c0e06f67b82c55___sys__Undefined___js_sys_4c4c80083218797f___Function_fn_wasm_bindgen_85c0e06f67b82c55___JsValue_____wasm_bindgen_85c0e06f67b82c55___sys__Undefined_______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_85c0e06f67b82c55___convert__closures_____invoke___wasm_bindgen_85c0e06f67b82c55___JsValue__core_f0fd674eaa06beef___result__Result_____wasm_bindgen_85c0e06f67b82c55___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_drop_slice: (a: number, b: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
