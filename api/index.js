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
var app_default = "/build/_assets/app-VIHZIFK4.css";

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

// route:/Users/andres/Documents/Github/ttf/app/routes/questionnaire/create.tsx
var create_exports = {};
__export(create_exports, {
  default: () => Create
});
function Create() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "uno"));
}

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
var import_remix7 = require("@clerk/remix");

// app/components/home/create-form.tsx
var import_react4 = require("@remix-run/react"), import_react5 = require("react");
function CreateForm() {
  let [name, setName] = (0, import_react5.useState)(""), [path, setPath] = (0, import_react5.useState)("");
  (0, import_react5.useEffect)(() => {
    setPath(`/questionnaire/create?name=${name}`);
  }, [name]);
  let navigate = (0, import_react4.useNavigate)();
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("p", {
    className: "text-3xl font-extrabold"
  }, "Create a new quiz easily"), /* @__PURE__ */ React.createElement("form", {
    onSubmit: (event) => {
      event.preventDefault(), navigate(path);
    },
    className: "mb-4 mt-4 flex gap-4 items-center"
  }, /* @__PURE__ */ React.createElement("input", {
    value: name,
    onChange: (event) => setName(event.target.value),
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "username",
    type: "text",
    placeholder: "name of quiz"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-2 mb-2"
  }, "Create")));
}

// app/components/home/home-in.tsx
function HomeIn() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-24 px-8"
  }, /* @__PURE__ */ React.createElement(CreateForm, null)));
}

// app/components/home/home-out.tsx
function HomeOut() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    className: "mt-32 md:mt-52"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto p-8 md:p-16"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-6xl text-zinc-900 font-extrabold md:text-8xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
  }, "Ten True or False"), " the new age questions for developers"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-8 text-2xl text-gray-600 font-extralight md:text-3xl md:w-9/12 md:mt-12"
  }, "Create easily and simply questionnaires that help other developers to improve their knowledge and share your results with others"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 flex flex-col justify-center gap-4 md:flex-row md:justify-start md:w-9/12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4 md:flex-col"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/img/short.png",
    alt: "ten questions",
    width: "70"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-2"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "text-lg"
  }, "Short Questionnaires"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-500 font-light"
  }, "Just in ten questions test your knowledge"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4 md:flex-col"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/img/sharew.png",
    alt: "ten questions",
    width: "70"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-2"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "text-lg"
  }, "Share with the world"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-500 font-light"
  }, "Questionnaires that other programmers take can solve them"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4 md:flex-col"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/img/day.png",
    alt: "ten questions",
    width: "70"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-2"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "text-lg"
  }, "Stay up to date"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-500 font-light"
  }, "Continuously find new quizzes that improve your level")))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 flex gap-4"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:px-12 md:py-5"
  }, "Get starter"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "text-black hover:text-zinc-800 border border-black hover:bg-zinc-50 focus:ring-4 focus:outline-none focus:ring-zinc-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:px-12 md:py-5"
  }, "About us")))));
}

// app/components/navbar.tsx
var import_remix6 = require("@clerk/remix"), import_react6 = require("@remix-run/react"), import_react7 = require("react");
function Navbar() {
  let { signOut } = (0, import_remix6.useClerk)(), [isDisabled, setIsDisabled] = (0, import_react7.useState)(!1);
  return /* @__PURE__ */ React.createElement("nav", {
    className: "bg-white h-16 fixed top-0 left-0 right-0 flex justify-between items-center border-b border-slate-200 border-solid z-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center gap-2 ml-4"
  }, /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/img/logo.png",
    alt: "logo",
    className: "w-12 h-12 rounded-full"
  })), /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold"
  }, "#TenTrueOrFalse"))), /* @__PURE__ */ React.createElement(import_remix6.SignedIn, null, /* @__PURE__ */ React.createElement("div", {
    className: "mr-4 flex gap-6 text-sm items-center"
  }, /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: "me",
    className: "text-slate-600"
  }, "Perfil"), /* @__PURE__ */ React.createElement("button", {
    disabled: isDisabled,
    onClick: async () => {
      setIsDisabled(!0), await signOut(), setIsDisabled(!1), window.location.href = "/";
    },
    className: "bg-black text-white rounded px-4 py-2 border border-solid border-black hover:bg-white hover:text-black disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700"
  }, "Sign out"))), /* @__PURE__ */ React.createElement(import_remix6.SignedOut, null, /* @__PURE__ */ React.createElement("div", {
    className: "mr-4 flex gap-6 text-sm items-center"
  }, /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: "sign-in",
    className: "text-slate-600"
  }, "Sign In"), /* @__PURE__ */ React.createElement(import_react6.Link, {
    className: "bg-black text-white rounded px-4 py-2 border border-solid border-black hover:bg-white hover:text-black",
    to: "sign-up"
  }, "Sign Up"))));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(import_remix7.SignedIn, null, /* @__PURE__ */ React.createElement(HomeIn, null)), /* @__PURE__ */ React.createElement(import_remix7.SignedOut, null, /* @__PURE__ */ React.createElement(HomeOut, null)));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/me/$.tsx
var __exports3 = {};
__export(__exports3, {
  default: () => MePage
});
var import_remix8 = require("@clerk/remix");
function MePage() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "mt-20"
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(import_remix8.UserProfile, null));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/uno.tsx
var uno_exports = {};
__export(uno_exports, {
  default: () => Index2,
  loader: () => loader3
});
var import_node2 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// route:/Users/andres/Documents/Github/ttf/app/routes/uno.tsx
var loader3 = async () => {
  let data = await db.questionnaire.findMany();
  return (0, import_node2.json)(data);
};
function Index2() {
  let data = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Ejemplo"), /* @__PURE__ */ React.createElement("p", null, "Total: ", data.length), /* @__PURE__ */ React.createElement("ul", null, data.map((q, index) => /* @__PURE__ */ React.createElement("li", {
    key: index
  }, q.name))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "4e8f4234", entry: { module: "/build/entry.client-CNNKDAZV.js", imports: ["/build/_shared/chunk-KEDPB7PU.js", "/build/_shared/chunk-BNRLY3XL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-LBDTUTI2.js", imports: ["/build/_shared/chunk-A563IWXS.js", "/build/_shared/chunk-QOZOMJTS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-BPUDFQ2P.js", imports: ["/build/_shared/chunk-KWPNKKZJ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/me/$": { id: "routes/me/$", parentId: "root", path: "me/*", index: void 0, caseSensitive: void 0, module: "/build/routes/me/$-4EM4C4ZX.js", imports: ["/build/_shared/chunk-KWPNKKZJ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/privado": { id: "routes/privado", parentId: "root", path: "privado", index: void 0, caseSensitive: void 0, module: "/build/routes/privado-NGK426ZP.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/questionnaire/create": { id: "routes/questionnaire/create", parentId: "root", path: "questionnaire/create", index: void 0, caseSensitive: void 0, module: "/build/routes/questionnaire/create-FMQBX365.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-MFEVNVSM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-ERAYKVDD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/uno": { id: "routes/uno", parentId: "root", path: "uno", index: void 0, caseSensitive: void 0, module: "/build/routes/uno-F3RYE2PZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-4E8F4234.js" };

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
  "routes/questionnaire/create": {
    id: "routes/questionnaire/create",
    parentId: "root",
    path: "questionnaire/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
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
