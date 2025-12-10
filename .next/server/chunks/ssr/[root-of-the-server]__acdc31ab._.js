module.exports = [
"[project]/src/app/teste/action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "testandoRequest",
    ()=>testandoRequest
]);
async function testandoRequest() {
    const url = 'https://sessions.bugsnag.com/';
    const headers = {
        'Content-Type': 'application/json',
        'Bugsnag-Api-Key': 'YOUR-NOTIFIER-API-KEY',
        'Bugsnag-Payload-Version': '1.0 - The version of the payload. Currently 1.0',
        'Bugsnag-Sent-At': '2017-01-01T15:00:00.000Z - The time (in ISO 8601 format) that the session payload is being sent.'
    };
    const body = {
        'notifier': {
            'name': 'iOS Bugsnag Notifier',
            'version': '5.10.1',
            'url': 'https://github.com/bugsnag/bugsnag-cocoa'
        },
        'app': {
            'type': 'rails',
            'releaseStage': 'production',
            'version': '1.1.3',
            'versionCode': 1234,
            'bundleVersion': '1234',
            'codeBundleId': '1.0-1234'
        },
        'device': {
            'hostname': 'mailer-1',
            'id': 'fd124e87760c4281aef',
            'manufacturer': 'Apple',
            'model': 'iPad4,4',
            'modelNumber': 'J85AP',
            'jailbroken': true,
            'osName': 'OpenBSD',
            'osVersion': '10.12.2',
            'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36',
            'runtimeVersions': {
                'androidApiLevel': '28',
                'bottle': '0.12.8',
                'celery': '4.2.0',
                'clangVersion': '7.0.1',
                'cocos2dx': '3.17.2',
                'delayedJob': '4.1.8',
                'django': '2.1.7',
                'dotnet': '.NET Framework 4.7.3416.0',
                'dotnetApiCompatibility': '.NET 2.0 Subset',
                'dotnetClr': '4.0.30319.17379',
                'dotnetScriptingRuntime': '.NET 3.5 equivalent',
                'eventMachine': '1.2.7',
                'flask': '1.0.2',
                'gin': '1.3.0',
                'go': '1.11.2',
                'javaType': 'Java(TM) SE Runtime Environment',
                'javaVersion': '1.8.0_131-b11',
                'jruby': '9.2.5.0',
                'laravel': '5.7.22',
                'lumen': '5.7',
                'magento': '2.3.0',
                'mailman': '0.8.0',
                'martini': '1.0',
                'negroni': '1.0.0',
                'node': '10.14.1',
                'osBuild': '16D57',
                'php': '7.2.12',
                'python': '3.7.1',
                'que': '0.14.3',
                'rack': '2.0.6',
                'rails': '5.2.2',
                'rake': '12.3.2',
                'reactNative': '0.57.5',
                'reactNativeJsEngine': 'hermes',
                'resque': '2.0.0',
                'revel': '0.21.0',
                'ruby': '2.5.3',
                'shoryoken': '5.0.1',
                'sidekiq': '5.1.3',
                'silex': '2.1.0',
                'sinatra': '2.0.3',
                'springBoot': '1.5.13.RELEASE',
                'springFramework': '4.2.13.RELEASE',
                'swift': '4.2',
                'symfony': '4.2.11',
                'tornado': '5.1.1',
                'unity': '2018.2.17',
                'unityScriptingBackend': 'Mono',
                'wordpress': '5.1'
            }
        },
        'sessions': [
            {
                'id': '9f65c975-8155-456f-91e5-c4c4b3db0555',
                'startedAt': '2017-01-01T14:30:00.000Z',
                'user': {
                    'id': '19',
                    'name': 'Robert Hawkins',
                    'email': 'bob@example.com'
                }
            }
        ],
        'sessionCounts': [
            {
                'startedAt': '2017-01-01T14:30Z',
                'sessionsStarted': 1000
            }
        ]
    };
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });
        const respText = await res.text();
        console.log('Status:', res.status);
        console.log('Headers:', Array.from(res.headers.entries()).map(([k, v])=>`${k}: ${v}`).join('\n'));
        console.log('Body:', respText);
    } catch (err) {
        console.error(err);
    }
}
}),
"[project]/src/app/teste/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00413a98e30b15bdc44ef5725a367e014b91dddbb9":"$$RSC_SERVER_ACTION_0"},"",""] */ __turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "default",
    ()=>page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$teste$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/teste/action.ts [app-rsc] (ecmascript)");
;
;
;
const $$RSC_SERVER_ACTION_0 = async function testando() {
    const response = await fetch('https://tiny4k.com/models/riley-reid');
    const data = await response.json();
    return response;
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "00413a98e30b15bdc44ef5725a367e014b91dddbb9", null);
async function page() {
    var testando = $$RSC_SERVER_ACTION_0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$teste$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["testandoRequest"])();
    const data = await testando();
    console.log(data);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: "Teste"
        }, void 0, false, {
            fileName: "[project]/src/app/teste/page.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/teste/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/.next-internal/server/app/teste/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/teste/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$teste$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/teste/page.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/teste/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/teste/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00413a98e30b15bdc44ef5725a367e014b91dddbb9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$teste$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$teste$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$teste$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/teste/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/teste/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$teste$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/teste/page.tsx [app-rsc] (ecmascript)");
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/teste/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/teste/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__acdc31ab._.js.map