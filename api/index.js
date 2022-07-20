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
var import_react4 = require("@remix-run/react"), import_ssr = require("@clerk/remix/ssr.server"), import_remix2 = require("@clerk/remix"), import_remix3 = require("@clerk/remix");

// app/styles/app.css
var app_default = "/build/_assets/app-XALKCACJ.css";

// app/components/navbar.tsx
var import_remix = require("@clerk/remix"), import_react2 = require("@remix-run/react"), import_react3 = require("react");
function Navbar() {
  let { signOut } = (0, import_remix.useClerk)(), [isDisabled, setIsDisabled] = (0, import_react3.useState)(!1);
  return /* @__PURE__ */ React.createElement("nav", {
    className: "bg-white h-16 fixed top-0 left-0 right-0 flex justify-between items-center border-b border-slate-200 border-solid z-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center gap-2 ml-4"
  }, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/img/logo.png",
    alt: "logo",
    className: "w-12 h-12 rounded-full"
  })), /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold"
  }, "#TenTrueOrFalse"))), /* @__PURE__ */ React.createElement(import_remix.SignedIn, null, /* @__PURE__ */ React.createElement("div", {
    className: "mr-4 flex gap-6 text-sm items-center"
  }, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "me",
    className: "text-slate-600"
  }, "Perfil"), /* @__PURE__ */ React.createElement("button", {
    disabled: isDisabled,
    onClick: async () => {
      setIsDisabled(!0), await signOut(), setIsDisabled(!1), window.location.href = "/";
    },
    className: "rounded px-4 py-2 border border-solid border-black bg-white text-black disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700"
  }, "Sign out"))), /* @__PURE__ */ React.createElement(import_remix.SignedOut, null, /* @__PURE__ */ React.createElement("div", {
    className: "mr-4 flex gap-6 text-sm items-center"
  }, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "sign-in",
    className: "text-slate-600"
  }, "Sign In"), /* @__PURE__ */ React.createElement(import_react2.Link, {
    className: "bg-black text-white rounded px-4 py-2 border border-solid border-black hover:bg-white hover:text-black",
    to: "sign-up"
  }, "Sign Up"))));
}

// route:/Users/andres/Documents/Github/ttf/app/root.tsx
var CatchBoundary = (0, import_remix3.ClerkCatchBoundary)(), loader = (args) => (0, import_ssr.rootAuthLoader)(args);
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
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react4.Meta, null), /* @__PURE__ */ React.createElement(import_react4.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-white text-black min-h-full"
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("div", {
    className: "mt-20"
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null)), /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)));
}
var root_default = (0, import_remix2.ClerkApp)(App);

// route:/Users/andres/Documents/Github/ttf/app/routes/questionnaire/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action,
  default: () => QuestionnaireCreate,
  loader: () => loader2
});
var import_ssr2 = require("@clerk/remix/ssr.server"), import_node = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// route:/Users/andres/Documents/Github/ttf/app/routes/questionnaire/create.tsx
var questionsKeyList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], loader2 = async ({ request }) => {
  let { userId } = await (0, import_ssr2.getAuth)(request);
  if (!userId)
    return (0, import_node.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
  let questionnarie = new URL(request.url).searchParams.get("questionnarie"), categories = await db.category.findMany();
  return { userId, questionnarie, categories };
}, action = async ({ request }) => {
  var _a;
  let { userId } = await (0, import_ssr2.getAuth)(request);
  if (!userId)
    return (0, import_node.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
  let formData = await request.formData(), name = ((_a = formData.get("name")) == null ? void 0 : _a.toString()) ?? "", categoryId = "21ffc43c-f3f1-4ed6-b1e5-24666584efe9", questionnarie = await db.questionnaire.create({
    data: {
      name,
      categoryId,
      userId
    }
  }), questionsData = questionsKeyList.map((questionKey) => {
    var _a2;
    let description = ((_a2 = formData.get(`question-${questionKey}-description`)) == null ? void 0 : _a2.toString()) ?? "", answer = formData.get(`question-${questionKey}-answer`) === "true";
    return {
      name: `question-${questionKey}`,
      description,
      answer,
      questionnaireId: questionnarie.id
    };
  }), questions = await db.question.createMany({ data: questionsData });
  return (0, import_node.json)({ name, id: questionnarie.id, questions: questions.count });
};
function QuestionnaireCreate() {
  let { state } = (0, import_react5.useTransition)(), { questionnarie, categories } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React.createElement(import_react5.Form, {
    method: "post",
    className: "flex flex-col md:w-8/12"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-900 text-2xl font-extrabold mb-2",
    htmlFor: "name"
  }, "Questionnarie Name"), /* @__PURE__ */ React.createElement("input", {
    defaultValue: questionnarie,
    required: !0,
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "name",
    name: "name",
    type: "text",
    placeholder: "name"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "mt-8"
  }, "Enter 10 questions each with a true or false answer, can be a combination of true/false or all true or all false"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "categoryId",
    className: "block text-gray-700 text-sm font-bold mb-2"
  }, "Category"), /* @__PURE__ */ React.createElement("select", {
    required: !0,
    name: "categoryId",
    id: "categoryId",
    className: "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  }, /* @__PURE__ */ React.createElement("option", {
    value: ""
  }, "- Select an option - "), categories.map(({ id, name }) => /* @__PURE__ */ React.createElement("option", {
    key: id,
    value: id
  }, name)))), questionsKeyList.map((questionKey) => /* @__PURE__ */ React.createElement("div", {
    className: "mt-8",
    key: questionKey
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: `question-${questionKey}-description`
  }, "Question ", questionKey), /* @__PURE__ */ React.createElement("input", {
    required: !0,
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: `question-${questionKey}-description`,
    name: `question-${questionKey}-description`,
    type: "text",
    placeholder: `Question ${questionKey}`
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 flex gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("input", {
    id: `question-${questionKey}-answer-true`,
    value: "true",
    name: `question-${questionKey}-answer`,
    type: "radio",
    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: `question-${questionKey}-answer-true`,
    className: "cursor-pointer ml-3 block text-sm font-medium text-gray-700"
  }, "True")), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("input", {
    id: `question-${questionKey}-answer-false`,
    defaultChecked: !0,
    value: "false",
    name: `question-${questionKey}-answer`,
    type: "radio",
    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: `question-${questionKey}-answer-false`,
    className: "cursor-pointer ml-3 block text-sm font-medium text-gray-700"
  }, "False"))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8"
  }, /* @__PURE__ */ React.createElement("button", {
    disabled: state === "submitting",
    type: "submit",
    className: "cursor-pointer text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-20"
  }, "Save"))))));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/sign-in/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignInPage
});
var import_remix4 = require("@clerk/remix");
function SignInPage() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { border: "2px solid blue", padding: "2rem" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Sign In route"), /* @__PURE__ */ React.createElement(import_remix4.SignIn, {
    routing: "path",
    path: "/sign-in"
  }));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/sign-up/$.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => SignUpPage
});
var import_remix5 = require("@clerk/remix");
function SignUpPage() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { border: "2px solid blue", padding: "2rem" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Sign Up route"), /* @__PURE__ */ React.createElement(import_remix5.SignUp, {
    routing: "path",
    path: "/sign-up"
  }));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/privado.tsx
var privado_exports = {};
__export(privado_exports, {
  default: () => Privado,
  loader: () => loader3
});
var import_ssr3 = require("@clerk/remix/ssr.server"), import_remix6 = require("@clerk/remix"), import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), loader3 = async ({ request }) => {
  let { userId } = await (0, import_ssr3.getAuth)(request);
  return userId ? { userId } : (0, import_node2.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
};
function Privado() {
  let { userId } = (0, import_react6.useLoaderData)(), { signOut } = (0, import_remix6.useClerk)(), navigate = (0, import_react6.useNavigate)();
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
var import_react7 = require("@remix-run/react"), import_react8 = require("react");
function CreateForm() {
  let [name, setName] = (0, import_react8.useState)(""), [path, setPath] = (0, import_react8.useState)("");
  (0, import_react8.useEffect)(() => {
    setPath(`/questionnaire/create?questionnarie=${name}`);
  }, [name]);
  let navigate = (0, import_react7.useNavigate)();
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
    className: "px-8"
  }, /* @__PURE__ */ React.createElement(CreateForm, null)));
}

// app/components/home/home-out.tsx
function HomeOut() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    className: ""
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

// route:/Users/andres/Documents/Github/ttf/app/routes/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix7.SignedIn, null, /* @__PURE__ */ React.createElement(HomeIn, null)), /* @__PURE__ */ React.createElement(import_remix7.SignedOut, null, /* @__PURE__ */ React.createElement(HomeOut, null)));
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
  loader: () => loader4
});
var import_node3 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var loader4 = async () => {
  let data = await db.questionnaire.findMany();
  return (0, import_node3.json)(data);
};
function Index2() {
  let data = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Ejemplo"), /* @__PURE__ */ React.createElement("p", null, "Total: ", data.length), /* @__PURE__ */ React.createElement("ul", null, data.map((q, index) => /* @__PURE__ */ React.createElement("li", {
    key: index
  }, q.name))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "cc0ddaac", entry: { module: "/build/entry.client-DNW2O5WR.js", imports: ["/build/_shared/chunk-FSOWSPSN.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MWCHEDLG.js", imports: ["/build/_shared/chunk-HAMLPOBF.js", "/build/_shared/chunk-D27OGKK2.js", "/build/_shared/chunk-DTHRHCWQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-M3KA75DS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/me/$": { id: "routes/me/$", parentId: "root", path: "me/*", index: void 0, caseSensitive: void 0, module: "/build/routes/me/$-6MXU3GXU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/privado": { id: "routes/privado", parentId: "root", path: "privado", index: void 0, caseSensitive: void 0, module: "/build/routes/privado-URNCU4HH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/questionnaire/create": { id: "routes/questionnaire/create", parentId: "root", path: "questionnaire/create", index: void 0, caseSensitive: void 0, module: "/build/routes/questionnaire/create-FL6G3QT6.js", imports: ["/build/_shared/chunk-QGJ43WGZ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-TVKNI73T.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-VIEZ37IZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/uno": { id: "routes/uno", parentId: "root", path: "uno", index: void 0, caseSensitive: void 0, module: "/build/routes/uno-SEZ6BKFR.js", imports: ["/build/_shared/chunk-QGJ43WGZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-CC0DDAAC.js" };

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
