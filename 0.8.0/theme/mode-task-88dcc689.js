ace.define("ace/mode/task_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module){"use strict";
var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var TaskHighlightRules = function () {
    var keywords = "clear|import|exec|from|node|network|net|networks|networksmap|netm|env|exit|end|help|input|inputs|inputsmap|im|output|outputs|outputsmap|om|nodes|nodesmap|nm|root|roots|rootsmap|rm|leaves|leavesmap|lm|if|else|while|try|catch|in|match|hook|local|loc|struct|function|func|return|break|continue|error|for|map|attrs|loop|progress|prog|do|dopar|par";
var NadiInternalFuncs = "all|and|any|array|attrmap|clip|command|count|count_str|day|debug|echo|eq|exists|first_attr|float|float_div|float_mult|float_transform|get_attr|gt|has_attr|has_outlet|ifelse|inputs|inputs_len|int|isinf|isna|load_attrs|load_file|load_str|load_toml_render|lt|max|max_num|min|min_num|month|not|or|output|parallel|print_all_attrs|print_attrs|prod|render|render_nodes|render_template|run|save_csv|save_file|series_csv|set_attrs|set_attrs_ifelse|set_attrs_render|set_nodesize_attrs|set_series|sleep|sr_count|sr_dtype|sr_len|sr_list|sr_mean|sr_sum|sr_to_array|str|str_count|str_find|str_find_all|strmap|str_match|str_replace|subset|sum|table_to_markdown|ts_count|ts_dtype|ts_len|ts_list|ts_print|ts_print_csv|type_name|unique_str|year";
    var keywordMapper = this.createKeywordMapper({
        "keyword": keywords,
	"constant.language": "true|false|nan|inf",
	"support.function": NadiInternalFuncs,
	"keyword.operator": "sequential|inverse|inputsfirst|outputfirst|seq|inv|inp|out",
    }, "identifier", false);
    this.$rules = {
        "start": [{
                token: "comment",
                regex: "#.*$"
            }, {
                token: "string.start",
                regex: '"',
                next: [
                    { token: "constant.language.escape", regex: /\\(?:[ntvfa\\"]|[0-7]{1,3}|\x[a-fA-F\d]{1,2}|)/, consumeLineEnd: true },
                    { token: "string.end", regex: '"|$', next: "start" },
                    { defaultToken: "string" }
                ]
            }, {
                token: "string",
                regex: "'^[']'"
            }, {
                token: "constant.numeric", // float
                regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
            }, {
                token: keywordMapper,
                regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            }, {
                token: "keyword.operator",
                regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|->|="
            }, {
                token: "paren.lparen",
                regex: "[\\(]"
            }, {
                token: "paren.rparen",
                regex: "[\\)]"
            }, {
                token: "text",
                regex: "\\s+"
            }]
    };
    this.normalizeRules();
};
oop.inherits(TaskHighlightRules, TextHighlightRules);
exports.TaskHighlightRules = TaskHighlightRules;

});

ace.define("ace/mode/task",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/task_highlight_rules","ace/range"], function(require, exports, module){"use strict";
var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var TaskHighlightRules = require("./task_highlight_rules").TaskHighlightRules;
var Range = require("../range").Range;
var Mode = function () {
    this.HighlightRules = TaskHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);
(function () {
    this.lineCommentStart = "//";
    this.blockComment = { start: "/*", end: "*/" };
    this.$quotes = { '"': '"' };
    this.$id = "ace/mode/task";
}).call(Mode.prototype);
exports.Mode = Mode;

});                (function() {
                    ace.require(["ace/mode/task"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
