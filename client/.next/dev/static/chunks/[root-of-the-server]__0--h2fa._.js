(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/client/src/pages/index\" }", (function(__turbopack_context__){
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/client/src/pages/index.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/client/src/pages/index.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/client/src/pages/index.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if ("TURBOPACK compile-time truthy", 1) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[project]/client/src/components/GameScreen/GameScreen.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$compiler$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/compiler-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$PanoramaViewer$2f$viewer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/PanoramaViewer/viewer.js [client] (ecmascript)");
;
;
;
function GameScreen(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$compiler$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "e4b51c903d7f834ea4b4b3dacaea75784baaf73fd137d5534180bcbd47c41315") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e4b51c903d7f834ea4b4b3dacaea75784baaf73fd137d5534180bcbd47c41315";
    }
    const { game, send } = t0;
    let t1;
    if ($[1] !== game.code) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "eyebrow",
            children: [
                "ROOM ",
                game.code
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        $[1] = game.code;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Game starting soon…"
        }, void 0, false, {
            fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "muted",
            children: "The host will begin the round shortly."
        }, void 0, false, {
            fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t1) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "hero compactHero",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "eyebrow",
            children: "PLAYERS"
        }, void 0, false, {
            fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== game.players) {
        t6 = game.players.map(_GameScreenGamePlayersMap);
        $[8] = game.players;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "playerList",
                    children: t6
                }, void 0, false, {
                    fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                    lineNumber: 59,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== game.code || $[13] !== send) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "roomActions",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "secondaryButton",
                type: "button",
                onClick: {
                    "GameScreen[<button>.onClick]": ()=>send({
                            type: "leave_game",
                            code: game.code
                        })
                }["GameScreen[<button>.onClick]"],
                children: "Leave game"
            }, void 0, false, {
                fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                lineNumber: 67,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[12] = game.code;
        $[13] = send;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t10;
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            marginTop: "2rem"
        };
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "eyebrow",
            children: "PANORAMA VIEWER"
        }, void 0, false, {
            fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
            lineNumber: 85,
            columnNumber: 11
        }, this);
        $[15] = t10;
        $[16] = t9;
    } else {
        t10 = $[15];
        t9 = $[16];
    }
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card",
            style: t9,
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$PanoramaViewer$2f$viewer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    view: {
                        panoramaUrl: "/panoramas/scene1.jpg",
                        heading: 0,
                        pitch: 0,
                        id: "test"
                    }
                }, void 0, false, {
                    fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                    lineNumber: 94,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
            lineNumber: 94,
            columnNumber: 11
        }, this);
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t4 || $[19] !== t7 || $[20] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "pageShell",
            children: [
                t4,
                t7,
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[18] = t4;
        $[19] = t7;
        $[20] = t8;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    return t12;
}
_c = GameScreen;
function _GameScreenGamePlayersMap(p) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "playerRow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rankBubble",
                children: "#"
            }, void 0, false, {
                fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                lineNumber: 117,
                columnNumber: 53
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "playerIdentity",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: p.nickname
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                        lineNumber: 117,
                        columnNumber: 120
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "playerRoundStatus",
                        children: "Connected"
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                        lineNumber: 117,
                        columnNumber: 149
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                lineNumber: 117,
                columnNumber: 88
            }, this)
        ]
    }, p.clientId, true, {
        fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
        lineNumber: 117,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "GameScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/HomeScreen/HomeScreen.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$compiler$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/compiler-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/router.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function HomeScreen(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$compiler$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["c"])(53);
    if ($[0] !== "71a9b35d94ed75aef0e148421fb799328ea9ed795ee83b064503c240cbf92cdd") {
        for(let $i = 0; $i < 53; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "71a9b35d94ed75aef0e148421fb799328ea9ed795ee83b064503c240cbf92cdd";
    }
    const { connected, error, send } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [nickname, setNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    let t2;
    if ($[1] !== router.isReady || $[2] !== router.query.join) {
        t1 = ({
            "HomeScreen[useEffect()]": ()=>{
                if (!router.isReady) {
                    return;
                }
                const incoming = typeof router.query.join === "string" ? router.query.join : "";
                if (incoming) {
                    setCode(incoming.toUpperCase().slice(0, 4));
                }
            }
        })["HomeScreen[useEffect()]"];
        t2 = [
            router.isReady,
            router.query.join
        ];
        $[1] = router.isReady;
        $[2] = router.query.join;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "hero",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "brandMark",
                    children: "UQ"
                }, void 0, false, {
                    fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                    lineNumber: 46,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "eyebrow",
                    children: "UQ COMPUTING SOCIETY HACKATHON"
                }, void 0, false, {
                    fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                    lineNumber: 46,
                    columnNumber: 71
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "UQGuessr"
                }, void 0, false, {
                    fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                    lineNumber: 46,
                    columnNumber: 134
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Explore a 360° campus location, drop your pin, then see who actually knows St Lucia."
                }, void 0, false, {
                    fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                    lineNumber: 46,
                    columnNumber: 151
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "eyebrow",
            children: "PRESENTING?"
        }, void 0, false, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: "Create a room"
        }, void 0, false, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "muted",
            children: "Use this on the laptop connected to the projector."
        }, void 0, false, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
    } else {
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
    }
    const t7 = !connected;
    let t8;
    if ($[9] !== send) {
        t8 = ({
            "HomeScreen[<button>.onClick]": ()=>send({
                    type: "create_game"
                })
        })["HomeScreen[<button>.onClick]"];
        $[9] = send;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t7 || $[12] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card",
            children: [
                t4,
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "primaryButton fullButton",
                    type: "button",
                    disabled: t7,
                    onClick: t8,
                    children: "Create game"
                }, void 0, false, {
                    fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                    lineNumber: 81,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[11] = t7;
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    let t11;
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "eyebrow",
            children: "PLAYING?"
        }, void 0, false, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 92,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: "Join the audience game"
        }, void 0, false, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "fieldLabel",
            htmlFor: "room-code",
            children: "Room code"
        }, void 0, false, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 94,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t11;
        $[16] = t12;
    } else {
        t10 = $[14];
        t11 = $[15];
        t12 = $[16];
    }
    let t13;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "HomeScreen[<input>.onChange]": (e)=>setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 4))
        })["HomeScreen[<input>.onChange]"];
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] !== code) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: "room-code",
            className: "textInput codeInput",
            value: code,
            maxLength: 4,
            placeholder: "AB12",
            onChange: t13
        }, void 0, false, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[18] = code;
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    let t15;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "fieldLabel",
            htmlFor: "nickname",
            children: "Nickname"
        }, void 0, false, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "HomeScreen[<input>.onChange]": (e_0)=>setNickname(e_0.target.value)
        })["HomeScreen[<input>.onChange]"];
        $[21] = t16;
    } else {
        t16 = $[21];
    }
    let t17;
    if ($[22] !== nickname) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: "nickname",
            className: "textInput",
            value: nickname,
            maxLength: 18,
            placeholder: "Nick",
            onChange: t16
        }, void 0, false, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[22] = nickname;
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    let t18;
    if ($[24] !== code || $[25] !== connected || $[26] !== nickname) {
        t18 = !connected || code.length !== 4 || nickname.trim().length < 1;
        $[24] = code;
        $[25] = connected;
        $[26] = nickname;
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    let t19;
    if ($[28] !== code || $[29] !== nickname || $[30] !== send) {
        t19 = ({
            "HomeScreen[<button>.onClick]": ()=>send({
                    type: "join_game",
                    code,
                    nickname
                })
        })["HomeScreen[<button>.onClick]"];
        $[28] = code;
        $[29] = nickname;
        $[30] = send;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== t18 || $[33] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "secondaryButton fullButton",
            type: "button",
            disabled: t18,
            onClick: t19,
            children: "Join game"
        }, void 0, false, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[32] = t18;
        $[33] = t19;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] !== t14 || $[36] !== t17 || $[37] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card",
            children: [
                t10,
                t11,
                t12,
                t14,
                t15,
                t17,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[35] = t14;
        $[36] = t17;
        $[37] = t20;
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    if ($[39] !== t21 || $[40] !== t9) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "twoCol entryGrid",
            children: [
                t9,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[39] = t21;
        $[40] = t9;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    const t23 = connected ? "statusDot online" : "statusDot";
    let t24;
    if ($[42] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t23
        }, void 0, false, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[42] = t23;
        $[43] = t24;
    } else {
        t24 = $[43];
    }
    const t25 = connected ? "Multiplayer server connected" : "Connecting to multiplayer server\u2026";
    let t26;
    if ($[44] !== t24 || $[45] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "connectionBar",
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[44] = t24;
        $[45] = t25;
        $[46] = t26;
    } else {
        t26 = $[46];
    }
    let t27;
    if ($[47] !== error) {
        t27 = error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "errorBanner",
            children: error
        }, void 0, false, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 219,
            columnNumber: 19
        }, this) : null;
        $[47] = error;
        $[48] = t27;
    } else {
        t27 = $[48];
    }
    let t28;
    if ($[49] !== t22 || $[50] !== t26 || $[51] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "pageShell homePage",
            children: [
                t3,
                t22,
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[49] = t22;
        $[50] = t26;
        $[51] = t27;
        $[52] = t28;
    } else {
        t28 = $[52];
    }
    return t28;
}
_s(HomeScreen, "T9mXVyw91BtmHnyPi6RA2I0LA0U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HomeScreen;
var _c;
__turbopack_context__.k.register(_c, "HomeScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/Lobby/Lobby.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lobby
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$compiler$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/compiler-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$PlayerList$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/Lobby/PlayerList.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$QrJoin$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/Lobby/QrJoin.js [client] (ecmascript)");
;
;
;
;
function Lobby(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$compiler$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "750ebf6bc6668842850ce43451c53900261582bafb7787f975bf6d068811828b") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "750ebf6bc6668842850ce43451c53900261582bafb7787f975bf6d068811828b";
    }
    const { game, send } = t0;
    let t1;
    if ($[1] !== game.code) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "eyebrow",
            children: [
                "ROOM ",
                game.code
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/Lobby/Lobby.js",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = game.code;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Lobby"
        }, void 0, false, {
            fileName: "[project]/client/src/components/Lobby/Lobby.js",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "muted",
            children: "Waiting for players to join…"
        }, void 0, false, {
            fileName: "[project]/client/src/components/Lobby/Lobby.js",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t1) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "hero compactHero",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/Lobby/Lobby.js",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "eyebrow",
            children: "JOIN VIA QR"
        }, void 0, false, {
            fileName: "[project]/client/src/components/Lobby/Lobby.js",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== game.code) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$QrJoin$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    code: game.code
                }, void 0, false, {
                    fileName: "[project]/client/src/components/Lobby/Lobby.js",
                    lineNumber: 52,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/Lobby/Lobby.js",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[8] = game.code;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "eyebrow",
            children: "PLAYERS"
        }, void 0, false, {
            fileName: "[project]/client/src/components/Lobby/Lobby.js",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== game.players) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$PlayerList$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    players: game.players
                }, void 0, false, {
                    fileName: "[project]/client/src/components/Lobby/Lobby.js",
                    lineNumber: 67,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/Lobby/Lobby.js",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[11] = game.players;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t6 || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "twoCol lobbyGrid",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/Lobby/Lobby.js",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[13] = t6;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== game.code || $[17] !== game.isHost || $[18] !== send) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "roomActions",
            children: game.isHost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "primaryButton",
                type: "button",
                onClick: {
                    "Lobby[<button>.onClick]": ()=>send({
                            type: "start_game",
                            code: game.code
                        })
                }["Lobby[<button>.onClick]"],
                children: "Start game"
            }, void 0, false, {
                fileName: "[project]/client/src/components/Lobby/Lobby.js",
                lineNumber: 84,
                columnNumber: 55
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "waitingChip",
                children: "Waiting for host…"
            }, void 0, false, {
                fileName: "[project]/client/src/components/Lobby/Lobby.js",
                lineNumber: 89,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/components/Lobby/Lobby.js",
            lineNumber: 84,
            columnNumber: 11
        }, this);
        $[16] = game.code;
        $[17] = game.isHost;
        $[18] = send;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10 || $[21] !== t4 || $[22] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "pageShell",
            children: [
                t4,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/Lobby/Lobby.js",
            lineNumber: 99,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t4;
        $[22] = t9;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    return t11;
}
_c = Lobby;
var _c;
__turbopack_context__.k.register(_c, "Lobby");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/Lobby/PlayerList.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlayerList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$compiler$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/compiler-runtime.js [client] (ecmascript)");
;
;
function PlayerList(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$compiler$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "8c70b747642fac605e517d4f160ac0613aad26103c89dcb1b3b66628fda34693") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8c70b747642fac605e517d4f160ac0613aad26103c89dcb1b3b66628fda34693";
    }
    const { players: t1, showRound: t2 } = t0;
    let t3;
    if ($[1] !== t1) {
        t3 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const players = t3;
    const showRound = t2 === undefined ? false : t2;
    let t4;
    if ($[3] !== players || $[4] !== showRound) {
        t4 = players.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "muted",
            children: "Waiting for players…"
        }, void 0, false, {
            fileName: "[project]/client/src/components/Lobby/PlayerList.js",
            lineNumber: 26,
            columnNumber: 33
        }, this) : players.map({
            "PlayerList[players.map()]": (p, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "playerRow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rankBubble",
                            children: index + 1
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/Lobby/PlayerList.js",
                            lineNumber: 27,
                            columnNumber: 94
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "playerIdentity",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: p.nickname
                                }, void 0, false, {
                                    fileName: "[project]/client/src/components/Lobby/PlayerList.js",
                                    lineNumber: 27,
                                    columnNumber: 171
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: p.connected ? "Connected" : "Disconnected"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/components/Lobby/PlayerList.js",
                                    lineNumber: 27,
                                    columnNumber: 200
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/components/Lobby/PlayerList.js",
                            lineNumber: 27,
                            columnNumber: 139
                        }, this),
                        showRound ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "playerRoundStatus",
                            children: p.hasGuessed ? "\u2713 Submitted" : "Waiting"
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/Lobby/PlayerList.js",
                            lineNumber: 27,
                            columnNumber: 276
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "scoreNumber",
                            children: p.totalScore.toLocaleString()
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/Lobby/PlayerList.js",
                            lineNumber: 27,
                            columnNumber: 372
                        }, this)
                    ]
                }, p.clientId, true, {
                    fileName: "[project]/client/src/components/Lobby/PlayerList.js",
                    lineNumber: 27,
                    columnNumber: 50
                }, this)
        }["PlayerList[players.map()]"]);
        $[3] = players;
        $[4] = showRound;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "playerList",
            children: t4
        }, void 0, false, {
            fileName: "[project]/client/src/components/Lobby/PlayerList.js",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
}
_c = PlayerList;
var _c;
__turbopack_context__.k.register(_c, "PlayerList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/Lobby/QrJoin.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QrJoin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$compiler$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/compiler-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/qrcode.react/lib/esm/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function QrJoin(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$compiler$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "395e40d18535b93b452f1e626e2695de0d8afc3ea01b657811d997703dd47599") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "395e40d18535b93b452f1e626e2695de0d8afc3ea01b657811d997703dd47599";
    }
    const { code } = t0;
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    let t2;
    if ($[1] !== code) {
        t1 = ({
            "QrJoin[useEffect()]": ()=>{
                if ("TURBOPACK compile-time truthy", 1) {
                    setUrl(`${window.location.origin}/?join=${encodeURIComponent(code)}`);
                }
            }
        })["QrJoin[useEffect()]"];
        t2 = [
            code
        ];
        $[1] = code;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== url) {
        t3 = url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
            value: url,
            size: 150,
            level: "M",
            includeMargin: true
        }, void 0, false, {
            fileName: "[project]/client/src/components/Lobby/QrJoin.js",
            lineNumber: 37,
            columnNumber: 16
        }, this) : null;
        $[4] = url;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "eyebrow",
            children: "ROOM CODE"
        }, void 0, false, {
            fileName: "[project]/client/src/components/Lobby/QrJoin.js",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== code) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "roomCode",
            children: code
        }, void 0, false, {
            fileName: "[project]/client/src/components/Lobby/QrJoin.js",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[7] = code;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "muted",
            children: "Scan the QR code or enter the code on another phone."
        }, void 0, false, {
            fileName: "[project]/client/src/components/Lobby/QrJoin.js",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/Lobby/QrJoin.js",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t3 || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "qrCard",
            children: [
                t3,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/Lobby/QrJoin.js",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[12] = t3;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    return t8;
}
_s(QrJoin, "7HKkcpU9cHVSx2vcifXxNbEsizo=");
_c = QrJoin;
var _c;
__turbopack_context__.k.register(_c, "QrJoin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/PanoramaViewer/viewer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Viewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
console.log(">>> viewer.js LOADED");
;
const PANNELLUM_CSS = "https://cdn.jsdelivr.net/npm/pannellum@2.5.7/build/pannellum.css";
const PANNELLUM_JS = "https://cdn.jsdelivr.net/npm/pannellum@2.5.7/build/pannellum.js";
const MIN_HFOV = 25;
const MAX_HFOV = 110;
const WHEEL_SENSITIVITY = 0.0075;
const BUTTON_STEP = 1.33;
function clampHfov(value) {
    return Math.max(MIN_HFOV, Math.min(MAX_HFOV, value));
}
function normaliseYawDifference(value) {
    let result = value;
    while(result > 180)result -= 360;
    while(result < -180)result += 360;
    return result;
}
function loadPannellum() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (window.pannellum) return Promise.resolve(window.pannellum);
    if (!document.getElementById("pannellum-css")) {
        const link = document.createElement("link");
        link.id = "pannellum-css";
        link.rel = "stylesheet";
        link.href = PANNELLUM_CSS;
        document.head.appendChild(link);
    }
    if (!window.__uqguessrPannellumPromise) {
        window.__uqguessrPannellumPromise = new Promise((resolve, reject)=>{
            const existing = document.getElementById("pannellum-js");
            if (existing) {
                existing.addEventListener("load", ()=>resolve(window.pannellum), {
                    once: true
                });
                existing.addEventListener("error", reject, {
                    once: true
                });
                return;
            }
            const script = document.createElement("script");
            script.id = "pannellum-js";
            script.src = PANNELLUM_JS;
            script.async = true;
            script.onload = ()=>resolve(window.pannellum);
            script.onerror = ()=>reject(new Error("Failed to load Pannellum"));
            document.head.appendChild(script);
        });
    }
    return window.__uqguessrPannellumPromise;
}
function Viewer({ view }) {
    _s();
    const panoramaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("Loading 360° view…");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Viewer.useEffect": ()=>{
            let cancelled = false;
            let panoramaElement = null;
            let wheelHandler = null;
            async function init() {
                if (!view?.panoramaUrl) {
                    setMessage("This round does not have a custom panorama configured yet.");
                    return;
                }
                try {
                    const pannellum = await loadPannellum();
                    if (cancelled || !panoramaRef.current) return;
                    panoramaElement = panoramaRef.current;
                    panoramaElement.innerHTML = "";
                    const initialYaw = Number.isFinite(view.heading) ? view.heading : Math.random() * 360 - 180;
                    const viewer = pannellum.viewer(panoramaElement, {
                        type: "equirectangular",
                        panorama: view.panoramaUrl,
                        autoLoad: true,
                        yaw: initialYaw,
                        pitch: Number.isFinite(view.pitch) ? view.pitch : 0,
                        hfov: 90,
                        mouseZoom: false,
                        minHfov: MIN_HFOV,
                        maxHfov: MAX_HFOV,
                        showControls: false,
                        showZoomCtrl: false,
                        showFullscreenCtrl: false,
                        keyboardZoom: false
                    });
                    viewerRef.current = viewer;
                    setMessage("");
                    function recentre(before, after) {
                        if (!before || !after || !viewerRef.current) return;
                        const pitchDifference = before[0] - after[0];
                        const yawDifference = normaliseYawDifference(before[1] - after[1]);
                        viewerRef.current.setPitch(viewerRef.current.getPitch() + pitchDifference, false);
                        viewerRef.current.setYaw(viewerRef.current.getYaw() + yawDifference, false);
                    }
                    wheelHandler = ({
                        "Viewer.useEffect.init": (event)=>{
                            if (!viewerRef.current) return;
                            event.preventDefault();
                            const before_0 = viewerRef.current.mouseEventToCoords(event);
                            let delta = event.deltaY;
                            if (event.deltaMode === 1) delta *= 16;
                            if (event.deltaMode === 2) delta *= 100;
                            delta = Math.max(-60, Math.min(60, delta));
                            const zoomFactor = Math.exp(delta * WHEEL_SENSITIVITY);
                            viewerRef.current.setHfov(clampHfov(viewerRef.current.getHfov() * zoomFactor), false);
                            recentre(before_0, viewerRef.current.mouseEventToCoords(event));
                        }
                    })["Viewer.useEffect.init"];
                    panoramaElement.addEventListener("wheel", wheelHandler, {
                        passive: false
                    });
                } catch (error) {
                    console.error(error);
                    if (!cancelled) setMessage("Custom panorama failed to load.");
                }
            }
            init();
            return ({
                "Viewer.useEffect": ()=>{
                    cancelled = true;
                    if (panoramaElement && wheelHandler) {
                        panoramaElement.removeEventListener("wheel", wheelHandler);
                    }
                    if (viewerRef.current?.destroy) {
                        try {
                            viewerRef.current.destroy();
                        } catch (_) {}
                    }
                    viewerRef.current = null;
                }
            })["Viewer.useEffect"];
        }
    }["Viewer.useEffect"], [
        view?.id,
        view?.panoramaUrl,
        view?.heading,
        view?.pitch
    ]);
    const zoomIn = ()=>{
        const viewer_0 = viewerRef.current;
        if (!viewer_0) return;
        viewer_0.setHfov(clampHfov(viewer_0.getHfov() / BUTTON_STEP), 500);
    };
    const zoomOut = ()=>{
        const viewer_1 = viewerRef.current;
        if (!viewer_1) return;
        viewer_1.setHfov(clampHfov(viewer_1.getHfov() * BUTTON_STEP), 500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "streetViewWrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: panoramaRef,
                className: "streetView"
            }, void 0, false, {
                fileName: "[project]/client/src/components/PanoramaViewer/viewer.js",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            !message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 18,
                    left: 18,
                    zIndex: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Zoom in",
                        onClick: zoomIn,
                        style: {
                            width: 48,
                            height: 48,
                            fontSize: 28,
                            cursor: "pointer"
                        },
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/PanoramaViewer/viewer.js",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Zoom out",
                        onClick: zoomOut,
                        style: {
                            width: 48,
                            height: 48,
                            fontSize: 28,
                            cursor: "pointer"
                        },
                        children: "−"
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/PanoramaViewer/viewer.js",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/PanoramaViewer/viewer.js",
                lineNumber: 143,
                columnNumber: 19
            }, this) : null,
            message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "streetViewMessage",
                children: message
            }, void 0, false, {
                fileName: "[project]/client/src/components/PanoramaViewer/viewer.js",
                lineNumber: 170,
                columnNumber: 18
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/client/src/components/PanoramaViewer/viewer.js",
        lineNumber: 140,
        columnNumber: 10
    }, this);
}
_s(Viewer, "IWqp33WW0FZb2RwwxviYzA3Q3GI=");
_c = Viewer;
var _c;
__turbopack_context__.k.register(_c, "Viewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/hooks/useGameSocket.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useGameSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/index.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const SESSION_KEY = "uqguessr-session-v1";
const CLIENT_KEY = "uqguessr-client-id-v1";
const RECONNECT_DELAY_MS = 1500;
function getClientId() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let id = window.localStorage.getItem(CLIENT_KEY);
    if (!id) {
        id = window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`;
        window.localStorage.setItem(CLIENT_KEY, id);
    }
    return id;
}
function isLocalNetworkHost(hostname) {
    if (hostname === "localhost" || hostname === "127.0.0.1") return true;
    if (hostname.startsWith("10.")) return true;
    if (hostname.startsWith("192.168.")) return true;
    const match = hostname.match(/^172\.(\d+)\./);
    if (match) {
        const second = Number(match[1]);
        return second >= 16 && second <= 31;
    }
    return false;
}
function getSocketUrl() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // For localhost / LAN testing, always use the hostname that loaded the page.
    // This is what makes QR joins work from phones without hard-coding your laptop IP.
    if (isLocalNetworkHost(window.location.hostname)) {
        return `ws://${window.location.hostname}:8080`;
    }
    const configured = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_WS_URL?.trim();
    if (configured) return configured;
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    return `${protocol}//${window.location.hostname}:8080`;
}
function removeJoinCodeFromUrl() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const url = new URL(window.location.href);
    if (!url.searchParams.has("join")) return;
    url.searchParams.delete("join");
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}
function useGameSocket() {
    _s();
    const [connected, setConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [game, setGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reconnectTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clientId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useGameSocket.useMemo[clientId]": ()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : getClientId()
    }["useGameSocket.useMemo[clientId]"], []);
    const clearSavedSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGameSocket.useCallback[clearSavedSession]": (message = "", clearJoinCode = true)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                window.localStorage.removeItem(SESSION_KEY);
                if (clearJoinCode) removeJoinCodeFromUrl();
            }
            setSession(null);
            setGame(null);
            setError(message);
        }
    }["useGameSocket.useCallback[clearSavedSession]"], []);
    const sendRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGameSocket.useCallback[sendRaw]": (payload)=>{
            const ws = socketRef.current;
            if (!ws || ws.readyState !== WebSocket.OPEN) {
                setError("Game server is not connected yet.");
                return false;
            }
            ws.send(JSON.stringify(payload));
            return true;
        }
    }["useGameSocket.useCallback[sendRaw]"], []);
    const send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGameSocket.useCallback[send]": (payload_0)=>sendRaw({
                ...payload_0,
                clientId
            })
    }["useGameSocket.useCallback[send]"], [
        clientId,
        sendRaw
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGameSocket.useEffect": ()=>{
            if (!clientId) return undefined;
            let disposed = false;
            const connect = {
                "useGameSocket.useEffect.connect": ()=>{
                    if (disposed) return;
                    const ws_0 = new WebSocket(getSocketUrl());
                    socketRef.current = ws_0;
                    ws_0.addEventListener("open", {
                        "useGameSocket.useEffect.connect": ()=>{
                            if (disposed) return;
                            setConnected(true);
                            setError("");
                            try {
                                const saved = JSON.parse(window.localStorage.getItem(SESSION_KEY) || "null");
                                if (saved?.code) {
                                    ws_0.send(JSON.stringify({
                                        type: "reconnect",
                                        clientId,
                                        code: saved.code
                                    }));
                                }
                            } catch (_) {
                                window.localStorage.removeItem(SESSION_KEY);
                            }
                        }
                    }["useGameSocket.useEffect.connect"]);
                    ws_0.addEventListener("message", {
                        "useGameSocket.useEffect.connect": (event)=>{
                            let msg;
                            try {
                                msg = JSON.parse(event.data);
                            } catch (__0) {
                                return;
                            }
                            if (msg.type === "state") {
                                setGame(msg.game);
                                setError("");
                                return;
                            }
                            if (msg.type === "session") {
                                const next = {
                                    code: msg.code,
                                    role: msg.role
                                };
                                setSession(next);
                                setError("");
                                window.localStorage.setItem(SESSION_KEY, JSON.stringify(next));
                                return;
                            }
                            if (msg.type === "session_cleared") {
                                clearSavedSession(msg.message || "You left the room.");
                                return;
                            }
                            if (msg.type === "room_closed") {
                                clearSavedSession(msg.message || "That game has ended.");
                                return;
                            }
                            if (msg.type === "error") {
                                if (msg.resetSession) {
                                    clearSavedSession(msg.message || "Your previous game is no longer available.");
                                } else {
                                    setError(msg.message || "Game server error.");
                                }
                            }
                        }
                    }["useGameSocket.useEffect.connect"]);
                    ws_0.addEventListener("close", {
                        "useGameSocket.useEffect.connect": ()=>{
                            if (socketRef.current === ws_0) socketRef.current = null;
                            if (disposed) return;
                            setConnected(false);
                            clearTimeout(reconnectTimerRef.current);
                            reconnectTimerRef.current = setTimeout(connect, RECONNECT_DELAY_MS);
                        }
                    }["useGameSocket.useEffect.connect"]);
                    ws_0.addEventListener("error", {
                        "useGameSocket.useEffect.connect": ()=>{
                            if (!disposed) {
                                setError("Could not connect to the multiplayer server. Retrying…");
                            }
                        }
                    }["useGameSocket.useEffect.connect"]);
                }
            }["useGameSocket.useEffect.connect"];
            connect();
            return ({
                "useGameSocket.useEffect": ()=>{
                    disposed = true;
                    clearTimeout(reconnectTimerRef.current);
                    const ws_1 = socketRef.current;
                    socketRef.current = null;
                    if (ws_1) ws_1.close();
                }
            })["useGameSocket.useEffect"];
        }
    }["useGameSocket.useEffect"], [
        clientId,
        clearSavedSession
    ]);
    const clearSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGameSocket.useCallback[clearSession]": ()=>{
            clearSavedSession("");
        }
    }["useGameSocket.useCallback[clearSession]"], [
        clearSavedSession
    ]);
    return {
        connected,
        game,
        error,
        session,
        send,
        clearSession,
        clientId
    };
}
_s(useGameSocket, "VR4w6lF0WeHBqv0JZvcMZerpzsw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/pages/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$compiler$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react/compiler-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$HomeScreen$2f$HomeScreen$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/HomeScreen/HomeScreen.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$Lobby$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/Lobby/Lobby.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$GameScreen$2f$GameScreen$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/GameScreen/GameScreen.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$hooks$2f$useGameSocket$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/hooks/useGameSocket.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$compiler$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "c1dd2c75fb17ddc7452adf63357a16e7d8ecbba16d3582f0448747bd059863db") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1dd2c75fb17ddc7452adf63357a16e7d8ecbba16d3582f0448747bd059863db";
    }
    const { connected, game, error, send, clientId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$hooks$2f$useGameSocket$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
    let t0;
    if ($[1] !== connected || $[2] !== error || $[3] !== send) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$HomeScreen$2f$HomeScreen$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            connected: connected,
            error: error,
            send: send
        }, void 0, false, {
            fileName: "[project]/client/src/pages/index.js",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = connected;
        $[2] = error;
        $[3] = send;
        $[4] = t0;
    } else {
        t0 = $[4];
    }
    let content = t0;
    if (game?.status === "lobby") {
        let t1;
        if ($[5] !== game || $[6] !== send) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$Lobby$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                game: game,
                send: send
            }, void 0, false, {
                fileName: "[project]/client/src/pages/index.js",
                lineNumber: 36,
                columnNumber: 12
            }, this);
            $[5] = game;
            $[6] = send;
            $[7] = t1;
        } else {
            t1 = $[7];
        }
        content = t1;
    }
    if (game && game.status !== "lobby") {
        let t1;
        if ($[8] !== clientId || $[9] !== game || $[10] !== send) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$GameScreen$2f$GameScreen$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                game: game,
                clientId: clientId,
                send: send
            }, void 0, false, {
                fileName: "[project]/client/src/pages/index.js",
                lineNumber: 48,
                columnNumber: 12
            }, this);
            $[8] = clientId;
            $[9] = game;
            $[10] = send;
            $[11] = t1;
        } else {
            t1 = $[11];
        }
        content = t1;
    }
    let t1;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "UQGuessr"
                }, void 0, false, {
                    fileName: "[project]/client/src/pages/index.js",
                    lineNumber: 60,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                    name: "description",
                    content: "Realtime multiplayer UQ campus guessing game"
                }, void 0, false, {
                    fileName: "[project]/client/src/pages/index.js",
                    lineNumber: 60,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }, void 0, false, {
                    fileName: "[project]/client/src/pages/index.js",
                    lineNumber: 60,
                    columnNumber: 121
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/pages/index.js",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[12] = t1;
    } else {
        t1 = $[12];
    }
    let t2;
    if ($[13] !== content) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t1,
                content
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/pages/index.js",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[13] = content;
        $[14] = t2;
    } else {
        t2 = $[14];
    }
    return t2;
}
_s(Home, "p9trpIxqL1bBoCdyscToGFBs7+o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$hooks$2f$useGameSocket$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime/runtime-types.d.ts" />
/// <reference path="../../../shared/runtime/dev-globals.d.ts" />
/// <reference path="../../../shared/runtime/dev-protocol.d.ts" />
/// <reference path="../../../shared/runtime/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateB.type === 'total') {
        // A total update replaces the entire chunk, so it supersedes any prior update.
        return updateB;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0--h2fa._.js.map