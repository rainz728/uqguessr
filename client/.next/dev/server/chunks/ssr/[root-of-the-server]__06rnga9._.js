module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/client/src/components/GameScreen/GameScreen.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameScreen
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$PanoramaViewer$2f$viewer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/PanoramaViewer/viewer.js [ssr] (ecmascript)");
;
;
function GameScreen({ game, clientId, send }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: "pageShell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "hero compactHero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: [
                            "ROOM ",
                            game.code
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        children: "Game starting soon…"
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: "The host will begin the round shortly."
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "PLAYERS"
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        className: "playerList",
                        children: game.players.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                className: "playerRow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "rankBubble",
                                        children: "#"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "playerIdentity",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                children: p.nickname
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                                                lineNumber: 19,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "playerRoundStatus",
                                                children: "Connected"
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                                                lineNumber: 20,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                                        lineNumber: 18,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, p.clientId, true, {
                                fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "roomActions",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: "secondaryButton",
                    type: "button",
                    onClick: ()=>send({
                            type: "leave_game",
                            code: game.code
                        }),
                    children: "Leave game"
                }, void 0, false, {
                    fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "card",
                style: {
                    marginTop: "2rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "PANORAMA VIEWER"
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$PanoramaViewer$2f$viewer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        view: {
                            panoramaUrl: "/panoramas/scene1.jpg",
                            heading: 0,
                            pitch: 0,
                            id: "test"
                        }
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/src/components/GameScreen/GameScreen.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/client/src/components/HomeScreen/HomeScreen.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeScreen
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/router.js [ssr] (ecmascript)");
;
;
;
function HomeScreen({ connected, error, send }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [nickname, setNickname] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!router.isReady) return;
        const incoming = typeof router.query.join === "string" ? router.query.join : "";
        if (incoming) setCode(incoming.toUpperCase().slice(0, 4));
    }, [
        router.isReady,
        router.query.join
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: "pageShell homePage",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "brandMark",
                        children: "UQ"
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "UQ COMPUTING SOCIETY HACKATHON"
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        children: "UQGuessr"
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: "Explore a 360° campus location, drop your pin, then see who actually knows St Lucia."
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "twoCol entryGrid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: "PRESENTING?"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                children: "Create a room"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "muted",
                                children: "Use this on the laptop connected to the projector."
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "primaryButton fullButton",
                                type: "button",
                                disabled: !connected,
                                onClick: ()=>send({
                                        type: "create_game"
                                    }),
                                children: "Create game"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: "PLAYING?"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                children: "Join the audience game"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                className: "fieldLabel",
                                htmlFor: "room-code",
                                children: "Room code"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                id: "room-code",
                                className: "textInput codeInput",
                                value: code,
                                maxLength: 4,
                                placeholder: "AB12",
                                onChange: (e)=>setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 4))
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                className: "fieldLabel",
                                htmlFor: "nickname",
                                children: "Nickname"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                id: "nickname",
                                className: "textInput",
                                value: nickname,
                                maxLength: 18,
                                placeholder: "Nick",
                                onChange: (e)=>setNickname(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "secondaryButton fullButton",
                                type: "button",
                                disabled: !connected || code.length !== 4 || nickname.trim().length < 1,
                                onClick: ()=>send({
                                        type: "join_game",
                                        code,
                                        nickname
                                    }),
                                children: "Join game"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "connectionBar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: connected ? "statusDot online" : "statusDot"
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    connected ? "Multiplayer server connected" : "Connecting to multiplayer server…"
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "errorBanner",
                children: error
            }, void 0, false, {
                fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
                lineNumber: 78,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/client/src/components/HomeScreen/HomeScreen.js",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/client/src/components/Lobby/Lobby.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>Lobby
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$PlayerList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/Lobby/PlayerList.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$QrJoin$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/Lobby/QrJoin.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$QrJoin$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$QrJoin$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function Lobby({ game, send }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: "pageShell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "hero compactHero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: [
                            "ROOM ",
                            game.code
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/components/Lobby/Lobby.js",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        children: "Lobby"
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/Lobby/Lobby.js",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: "Waiting for players to join…"
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/Lobby/Lobby.js",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/Lobby/Lobby.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "twoCol lobbyGrid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: "JOIN VIA QR"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/Lobby/Lobby.js",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$QrJoin$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                code: game.code
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/Lobby/Lobby.js",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/components/Lobby/Lobby.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: "PLAYERS"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/Lobby/Lobby.js",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$PlayerList$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                players: game.players
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/Lobby/Lobby.js",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/components/Lobby/Lobby.js",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/Lobby/Lobby.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "roomActions",
                children: game.isHost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: "primaryButton",
                    type: "button",
                    onClick: ()=>send({
                            type: "start_game",
                            code: game.code
                        }),
                    children: "Start game"
                }, void 0, false, {
                    fileName: "[project]/client/src/components/Lobby/Lobby.js",
                    lineNumber: 27,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "waitingChip",
                    children: "Waiting for host…"
                }, void 0, false, {
                    fileName: "[project]/client/src/components/Lobby/Lobby.js",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/components/Lobby/Lobby.js",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/src/components/Lobby/Lobby.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/client/src/components/Lobby/PlayerList.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlayerList
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function PlayerList({ players = [], showRound = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "playerList",
        children: players.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
            className: "muted",
            children: "Waiting for players…"
        }, void 0, false, {
            fileName: "[project]/client/src/components/Lobby/PlayerList.js",
            lineNumber: 5,
            columnNumber: 9
        }, this) : players.map((p, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "playerRow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "rankBubble",
                        children: index + 1
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/Lobby/PlayerList.js",
                        lineNumber: 9,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "playerIdentity",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: p.nickname
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/Lobby/PlayerList.js",
                                lineNumber: 11,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: p.connected ? "Connected" : "Disconnected"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/Lobby/PlayerList.js",
                                lineNumber: 12,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/components/Lobby/PlayerList.js",
                        lineNumber: 10,
                        columnNumber: 13
                    }, this),
                    showRound ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "playerRoundStatus",
                        children: p.hasGuessed ? "✓ Submitted" : "Waiting"
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/Lobby/PlayerList.js",
                        lineNumber: 15,
                        columnNumber: 15
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                        className: "scoreNumber",
                        children: p.totalScore.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/Lobby/PlayerList.js",
                        lineNumber: 19,
                        columnNumber: 13
                    }, this)
                ]
            }, p.clientId, true, {
                fileName: "[project]/client/src/components/Lobby/PlayerList.js",
                lineNumber: 8,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/client/src/components/Lobby/PlayerList.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/client/src/components/Lobby/QrJoin.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>QrJoin
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$qrcode$2e$react__$5b$external$5d$__$28$qrcode$2e$react$2c$__esm_import$2c$__$5b$project$5d2f$client$2f$node_modules$2f$qrcode$2e$react$29$__ = __turbopack_context__.i("[externals]/qrcode.react [external] (qrcode.react, esm_import, [project]/client/node_modules/qrcode.react)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$qrcode$2e$react__$5b$external$5d$__$28$qrcode$2e$react$2c$__esm_import$2c$__$5b$project$5d2f$client$2f$node_modules$2f$qrcode$2e$react$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$qrcode$2e$react__$5b$external$5d$__$28$qrcode$2e$react$2c$__esm_import$2c$__$5b$project$5d2f$client$2f$node_modules$2f$qrcode$2e$react$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function QrJoin({ code }) {
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        code
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "qrCard",
        children: [
            url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$qrcode$2e$react__$5b$external$5d$__$28$qrcode$2e$react$2c$__esm_import$2c$__$5b$project$5d2f$client$2f$node_modules$2f$qrcode$2e$react$29$__["QRCodeSVG"], {
                value: url,
                size: 150,
                level: "M",
                includeMargin: true
            }, void 0, false, {
                fileName: "[project]/client/src/components/Lobby/QrJoin.js",
                lineNumber: 15,
                columnNumber: 14
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "ROOM CODE"
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/Lobby/QrJoin.js",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "roomCode",
                        children: code
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/Lobby/QrJoin.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: "Scan the QR code or enter the code on another phone."
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/Lobby/QrJoin.js",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/Lobby/QrJoin.js",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/src/components/Lobby/QrJoin.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/client/src/components/PanoramaViewer/viewer.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Viewer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
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
    if ("TURBOPACK compile-time truthy", 1) return Promise.reject(new Error("Browser only"));
    //TURBOPACK unreachable
    ;
}
function Viewer({ view }) {
    const panoramaRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const viewerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("Loading 360° view…");
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
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
                wheelHandler = (event)=>{
                    if (!viewerRef.current) return;
                    event.preventDefault();
                    const before = viewerRef.current.mouseEventToCoords(event);
                    let delta = event.deltaY;
                    if (event.deltaMode === 1) delta *= 16;
                    if (event.deltaMode === 2) delta *= 100;
                    delta = Math.max(-60, Math.min(60, delta));
                    const zoomFactor = Math.exp(delta * WHEEL_SENSITIVITY);
                    viewerRef.current.setHfov(clampHfov(viewerRef.current.getHfov() * zoomFactor), false);
                    recentre(before, viewerRef.current.mouseEventToCoords(event));
                };
                panoramaElement.addEventListener("wheel", wheelHandler, {
                    passive: false
                });
            } catch (error) {
                console.error(error);
                if (!cancelled) setMessage("Custom panorama failed to load.");
            }
        }
        init();
        return ()=>{
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
        };
    }, [
        view?.id,
        view?.panoramaUrl,
        view?.heading,
        view?.pitch
    ]);
    const zoomIn = ()=>{
        const viewer = viewerRef.current;
        if (!viewer) return;
        viewer.setHfov(clampHfov(viewer.getHfov() / BUTTON_STEP), 500);
    };
    const zoomOut = ()=>{
        const viewer = viewerRef.current;
        if (!viewer) return;
        viewer.setHfov(clampHfov(viewer.getHfov() * BUTTON_STEP), 500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "streetViewWrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                ref: panoramaRef,
                className: "streetView"
            }, void 0, false, {
                fileName: "[project]/client/src/components/PanoramaViewer/viewer.js",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            !message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                        lineNumber: 189,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                        lineNumber: 197,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/PanoramaViewer/viewer.js",
                lineNumber: 178,
                columnNumber: 9
            }, this) : null,
            message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "streetViewMessage",
                children: message
            }, void 0, false, {
                fileName: "[project]/client/src/components/PanoramaViewer/viewer.js",
                lineNumber: 208,
                columnNumber: 18
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/client/src/components/PanoramaViewer/viewer.js",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
}),
"[project]/client/src/hooks/useGameSocket.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useGameSocket
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const SESSION_KEY = "uqguessr-session-v1";
const CLIENT_KEY = "uqguessr-client-id-v1";
const RECONNECT_DELAY_MS = 1500;
function getClientId() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    let id;
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
    if ("TURBOPACK compile-time truthy", 1) return "ws://localhost:8080";
    //TURBOPACK unreachable
    ;
    const configured = undefined;
    const protocol = undefined;
}
function removeJoinCodeFromUrl() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const url = undefined;
}
function useGameSocket() {
    const [connected, setConnected] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [game, setGame] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const reconnectTimerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const clientId = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>("TURBOPACK compile-time truthy", 1) ? null : "TURBOPACK unreachable", []);
    const clearSavedSession = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((message = "", clearJoinCode = true)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setSession(null);
        setGame(null);
        setError(message);
    }, []);
    const sendRaw = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((payload)=>{
        const ws = socketRef.current;
        if (!ws || ws.readyState !== WebSocket.OPEN) {
            setError("Game server is not connected yet.");
            return false;
        }
        ws.send(JSON.stringify(payload));
        return true;
    }, []);
    const send = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((payload)=>sendRaw({
            ...payload,
            clientId
        }), [
        clientId,
        sendRaw
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!clientId) return undefined;
        let disposed = false;
        const connect = ()=>{
            if (disposed) return;
            const ws = new WebSocket(getSocketUrl());
            socketRef.current = ws;
            ws.addEventListener("open", ()=>{
                if (disposed) return;
                setConnected(true);
                setError("");
                try {
                    const saved = JSON.parse(window.localStorage.getItem(SESSION_KEY) || "null");
                    if (saved?.code) {
                        ws.send(JSON.stringify({
                            type: "reconnect",
                            clientId,
                            code: saved.code
                        }));
                    }
                } catch (_) {
                    window.localStorage.removeItem(SESSION_KEY);
                }
            });
            ws.addEventListener("message", (event)=>{
                let msg;
                try {
                    msg = JSON.parse(event.data);
                } catch (_) {
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
            });
            ws.addEventListener("close", ()=>{
                if (socketRef.current === ws) socketRef.current = null;
                if (disposed) return;
                setConnected(false);
                clearTimeout(reconnectTimerRef.current);
                reconnectTimerRef.current = setTimeout(connect, RECONNECT_DELAY_MS);
            });
            ws.addEventListener("error", ()=>{
                if (!disposed) {
                    setError("Could not connect to the multiplayer server. Retrying…");
                }
            });
        };
        connect();
        return ()=>{
            disposed = true;
            clearTimeout(reconnectTimerRef.current);
            const ws = socketRef.current;
            socketRef.current = null;
            if (ws) ws.close();
        };
    }, [
        clientId,
        clearSavedSession
    ]);
    const clearSession = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        clearSavedSession("");
    }, [
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
}),
"[project]/client/src/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$HomeScreen$2f$HomeScreen$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/HomeScreen/HomeScreen.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$Lobby$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/Lobby/Lobby.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$GameScreen$2f$GameScreen$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/GameScreen/GameScreen.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$hooks$2f$useGameSocket$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/hooks/useGameSocket.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$Lobby$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$Lobby$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function Home() {
    const { connected, game, error, send, clientId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$hooks$2f$useGameSocket$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
    // Default screen = HomeScreen
    let content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$HomeScreen$2f$HomeScreen$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        connected: connected,
        error: error,
        send: send
    }, void 0, false, {
        fileName: "[project]/client/src/pages/index.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
    // Lobby screen
    if (game?.status === "lobby") {
        content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$Lobby$2f$Lobby$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            game: game,
            send: send
        }, void 0, false, {
            fileName: "[project]/client/src/pages/index.js",
            lineNumber: 22,
            columnNumber: 7
        }, this);
    }
    // Game screen (any status except lobby)
    if (game && game.status !== "lobby") {
        content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$GameScreen$2f$GameScreen$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            game: game,
            clientId: clientId,
            send: send
        }, void 0, false, {
            fileName: "[project]/client/src/pages/index.js",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "UQGuessr"
                    }, void 0, false, {
                        fileName: "[project]/client/src/pages/index.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Realtime multiplayer UQ campus guessing game"
                    }, void 0, false, {
                        fileName: "[project]/client/src/pages/index.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, void 0, false, {
                        fileName: "[project]/client/src/pages/index.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/pages/index.js",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            content
        ]
    }, void 0, true, {
        fileName: "[project]/client/src/pages/index.js",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__06rnga9._.js.map