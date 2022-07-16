var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/andres/Documents/Github/ttf/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => root_default,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_ssr = require("@clerk/remix/ssr.server"), import_remix = require("@clerk/remix"), import_remix2 = require("@clerk/remix");

// app/styles/app.css
var app_default = "/build/_assets/app-WZNF3NV4.css";

// route:/Users/andres/Documents/Github/ttf/app/root.tsx
var CatchBoundary = (0, import_remix2.ClerkCatchBoundary)(), loader = (args) => (0, import_ssr.rootAuthLoader)(args);
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "Ten True or False",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-white text-black min-h-full"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}
var root_default = (0, import_remix.ClerkApp)(App);

// route:/Users/andres/Documents/Github/ttf/app/routes/sign-in/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignInPage
});
var import_remix3 = require("@clerk/remix");
function SignInPage() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { border: "2px solid blue", padding: "2rem" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Sign In route"), /* @__PURE__ */ React.createElement(import_remix3.SignIn, {
    routing: "path",
    path: "/sign-in"
  }));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/sign-up/$.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => SignUpPage
});
var import_remix4 = require("@clerk/remix");
function SignUpPage() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { border: "2px solid blue", padding: "2rem" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Sign Up route"), /* @__PURE__ */ React.createElement(import_remix4.SignUp, {
    routing: "path",
    path: "/sign-up"
  }));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/privado.tsx
var privado_exports = {};
__export(privado_exports, {
  default: () => Privado,
  loader: () => loader2
});
var import_ssr2 = require("@clerk/remix/ssr.server"), import_remix5 = require("@clerk/remix"), import_node = require("@remix-run/node"), import_react3 = require("@remix-run/react"), loader2 = async ({ request }) => {
  let { userId } = await (0, import_ssr2.getAuth)(request);
  return userId ? { userId } : (0, import_node.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
};
function Privado() {
  let { userId } = (0, import_react3.useLoaderData)(), { signOut } = (0, import_remix5.useClerk)(), navigate = (0, import_react3.useNavigate)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Ruta privada (2)"), /* @__PURE__ */ React.createElement("p", null, userId), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("button", {
    onClick: async () => {
      console.log("comenzando"), await signOut(), console.log("terminado"), navigate("/", { replace: !0 });
    }
  }, "salir"));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/components/home/home-out.tsx
function HomeOut() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "mt-52"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-8xl text-zinc-900 font-extrabold"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
  }, "Ten True or False"), " the new age questions for developers")));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HomeOut, null));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/me/$.tsx
var __exports3 = {};
__export(__exports3, {
  default: () => MePage
});
var import_remix6 = require("@clerk/remix");
function MePage() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix6.UserProfile, null));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/uno.tsx
var uno_exports = {};
__export(uno_exports, {
  default: () => Index2,
  loader: () => loader3
});
var import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// route:/Users/andres/Documents/Github/ttf/app/routes/uno.tsx
var loader3 = async () => {
  let data = await db.questionnaire.findMany();
  return (0, import_node2.json)(data);
};
function Index2() {
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Ejemplo"), /* @__PURE__ */ React.createElement("p", null, "Total: ", data.length), /* @__PURE__ */ React.createElement("ul", null, data.map((q, index) => /* @__PURE__ */ React.createElement("li", {
    key: index
  }, q.name))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "9e89b655", entry: { module: "/build/entry.client-PFFY4HSH.js", imports: ["/build/_shared/chunk-NFY4WJ4J.js", "/build/_shared/chunk-BNRLY3XL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-UVYJGOL6.js", imports: ["/build/_shared/chunk-A563IWXS.js", "/build/_shared/chunk-EOBL3LET.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-CER3QJI4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/me/$": { id: "routes/me/$", parentId: "root", path: "me/*", index: void 0, caseSensitive: void 0, module: "/build/routes/me/$-6QMGUUIZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/privado": { id: "routes/privado", parentId: "root", path: "privado", index: void 0, caseSensitive: void 0, module: "/build/routes/privado-3DBG7N5X.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-GCCGMX6R.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-HHKKTIGO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/uno": { id: "routes/uno", parentId: "root", path: "uno", index: void 0, caseSensitive: void 0, module: "/build/routes/uno-L5MZA2SK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-9E89B655.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/sign-in/$": {
    id: "routes/sign-in/$",
    parentId: "root",
    path: "sign-in/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/sign-up/$": {
    id: "routes/sign-up/$",
    parentId: "root",
    path: "sign-up/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  },
  "routes/privado": {
    id: "routes/privado",
    parentId: "root",
    path: "privado",
    index: void 0,
    caseSensitive: void 0,
    module: privado_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/me/$": {
    id: "routes/me/$",
    parentId: "root",
    path: "me/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports3
  },
  "routes/uno": {
    id: "routes/uno",
    parentId: "root",
    path: "uno",
    index: void 0,
    caseSensitive: void 0,
    module: uno_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
