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
var app_default = "/build/_assets/app-EEZZVMZN.css";

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

// route:/Users/andres/Documents/Github/ttf/app/routes/questionnaire/edit/$questionnaireId.tsx
var questionnaireId_exports = {};
__export(questionnaireId_exports, {
  action: () => action,
  default: () => QuestionnaireEdit,
  loader: () => loader2
});
var import_ssr2 = require("@clerk/remix/ssr.server"), import_node = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// route:/Users/andres/Documents/Github/ttf/app/routes/questionnaire/edit/$questionnaireId.tsx
var loader2 = async ({ request, params }) => {
  let { userId } = await (0, import_ssr2.getAuth)(request);
  if (!userId)
    return (0, import_node.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
  let { questionnaireId } = params, questionnaire = await db.questionnaire.findFirst({
    where: {
      id: questionnaireId
    },
    include: {
      questions: {
        orderBy: {
          name: "asc"
        }
      }
    }
  });
  if (questionnaire === null)
    return (0, import_node.redirect)("/404");
  if ((questionnaire == null ? void 0 : questionnaire.userId) !== userId)
    return (0, import_node.redirect)("/404");
  let categories = await db.category.findMany();
  return { questionnaire, categories };
}, action = async ({ request, params }) => {
  var _a, _b;
  let { userId } = await (0, import_ssr2.getAuth)(request);
  if (!userId)
    return (0, import_node.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
  let { questionnaireId } = params, questionnaire = await db.questionnaire.findFirst({
    where: {
      id: questionnaireId
    },
    include: {
      questions: !0
    }
  });
  if (questionnaire === null)
    return (0, import_node.redirect)("/404");
  if ((questionnaire == null ? void 0 : questionnaire.userId) !== userId)
    return (0, import_node.redirect)("/404");
  let formData = await request.formData(), name = ((_a = formData.get("name")) == null ? void 0 : _a.toString()) ?? "", categoryId = ((_b = formData.get("categoryId")) == null ? void 0 : _b.toString()) ?? "", { questions } = questionnaire;
  await db.questionnaire.update({
    where: {
      id: questionnaireId
    },
    data: {
      name,
      categoryId,
      userId
    }
  });
  let questionsUpdateList = questions.map((question) => {
    var _a2;
    let { id, name: name2 } = question, description = ((_a2 = formData.get(`${name2}-description`)) == null ? void 0 : _a2.toString()) ?? "", answer = formData.get(`${name2}-answer`) === "true";
    return db.question.update({
      where: {
        id
      },
      data: {
        description,
        answer
      }
    });
  });
  return await Promise.all(questionsUpdateList), (0, import_node.redirect)("/questionnaire/owner");
};
function QuestionnaireEdit() {
  let { state } = (0, import_react5.useTransition)(), { questionnaire, categories } = (0, import_react5.useLoaderData)(), { name, questions, categoryId } = questionnaire;
  return /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React.createElement(import_react5.Form, {
    method: "post",
    className: "flex flex-col md:w-8/12 md:m-0 md:mx-auto"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-900 text-3xl font-extrabold mb-4 mt-4",
    htmlFor: "name"
  }, "Questionnarie Name"), /* @__PURE__ */ React.createElement("input", {
    defaultValue: name,
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
    defaultValue: categoryId,
    name: "categoryId",
    id: "categoryId",
    className: "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  }, /* @__PURE__ */ React.createElement("option", {
    value: ""
  }, "- Select an option - "), categories.map(({ id, name: name2 }) => /* @__PURE__ */ React.createElement("option", {
    key: id,
    value: id
  }, name2)))), questions.map(({ id, name: name2, answer, description }) => {
    let identifierNumber = parseInt(name2.split("-")[1], 10);
    return /* @__PURE__ */ React.createElement("div", {
      className: "mt-8",
      key: id
    }, /* @__PURE__ */ React.createElement("label", {
      className: "block text-gray-700 text-sm font-bold mb-2",
      htmlFor: `${name2}-description`
    }, "Question ", identifierNumber), /* @__PURE__ */ React.createElement("input", {
      defaultValue: description,
      required: !0,
      className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      id: `${name2}-description`,
      name: `${name2}-description`,
      type: "text",
      placeholder: `Question ${identifierNumber}`
    }), /* @__PURE__ */ React.createElement("div", {
      className: "mt-6 flex gap-4"
    }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
      id: `${name2}-answer-true`,
      defaultChecked: answer === !0,
      value: "true",
      name: `${name2}-answer`,
      type: "radio",
      className: "sr-only peer"
    }), /* @__PURE__ */ React.createElement("label", {
      htmlFor: `${name2}-answer-true`,
      className: "cursor-pointer px-5 py-3 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white"
    }, "True")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
      id: `${name2}-answer-false`,
      defaultChecked: answer === !1,
      value: "false",
      name: `${name2}-answer`,
      type: "radio",
      className: "sr-only peer"
    }), /* @__PURE__ */ React.createElement("label", {
      htmlFor: `${name2}-answer-false`,
      className: "cursor-pointer px-5 py-3 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white"
    }, "False"))));
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-16 mb-32 flex justify-end"
  }, /* @__PURE__ */ React.createElement("button", {
    disabled: state === "submitting",
    className: "w-40 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 disabled:opacity-40 disabled:pointer-events-none"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "w-40 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-lg"
  }, "Save ", state === "submitting" ? " ..." : ""))))));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/questionnaire/resolved.tsx
var resolved_exports = {};
__export(resolved_exports, {
  default: () => QuestionnarieResolvedPage
});
function QuestionnarieResolvedPage() {
}

// route:/Users/andres/Documents/Github/ttf/app/routes/questionnaire/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action2,
  default: () => QuestionnairePageCreate,
  loader: () => loader3
});
var import_ssr3 = require("@clerk/remix/ssr.server"), import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var questionsKeyList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"], loader3 = async ({ request }) => {
  let { userId } = await (0, import_ssr3.getAuth)(request);
  if (!userId)
    return (0, import_node2.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
  let questionnarie = new URL(request.url).searchParams.get("questionnarie"), categories = await db.category.findMany();
  return { userId, questionnarie, categories };
}, action2 = async ({ request }) => {
  var _a, _b;
  let { userId } = await (0, import_ssr3.getAuth)(request);
  if (!userId)
    return (0, import_node2.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
  let formData = await request.formData(), name = ((_a = formData.get("name")) == null ? void 0 : _a.toString()) ?? "", categoryId = ((_b = formData.get("categoryId")) == null ? void 0 : _b.toString()) ?? "", questionnarie = await db.questionnaire.create({
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
  });
  return await db.question.createMany({ data: questionsData }), (0, import_node2.redirect)("/questionnaire/owner");
};
function QuestionnairePageCreate() {
  let { state } = (0, import_react6.useTransition)(), { questionnarie, categories } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React.createElement(import_react6.Form, {
    method: "post",
    className: "flex flex-col md:w-8/12 md:m-0 md:mx-auto"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-900 text-3xl font-extrabold mb-4",
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
    className: "mt-8 mb-4"
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
    className: "mt-8 mb-2",
    key: questionKey
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: `question-${questionKey}-description`
  }, "Question ", parseInt(questionKey, 10)), /* @__PURE__ */ React.createElement("input", {
    required: !0,
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: `question-${questionKey}-description`,
    name: `question-${questionKey}-description`,
    type: "text",
    placeholder: `Question ${parseInt(questionKey, 10)}`
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 flex gap-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    id: `question-${questionKey}-answer-true`,
    value: "true",
    name: `question-${questionKey}-answer`,
    type: "radio",
    className: "sr-only peer"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: `question-${questionKey}-answer-true`,
    className: "cursor-pointer px-5 py-3 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white"
  }, "True")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    defaultChecked: !0,
    id: `question-${questionKey}-answer-false`,
    value: "false",
    name: `question-${questionKey}-answer`,
    type: "radio",
    className: "sr-only peer"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: `question-${questionKey}-answer-false`,
    className: "cursor-pointer px-5 py-3 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white"
  }, "False"))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-16 mb-32 flex justify-end"
  }, /* @__PURE__ */ React.createElement("button", {
    disabled: state === "submitting",
    className: "w-40 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 disabled:opacity-40 disabled:pointer-events-none"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "w-40 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-lg"
  }, "Save ", state === "submitting" ? " ..." : "")))))));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/questionnaire/owner.tsx
var owner_exports = {};
__export(owner_exports, {
  default: () => QuestionnarieOwnerPage,
  loader: () => loader4
});
var import_ssr4 = require("@clerk/remix/ssr.server"), import_node3 = require("@remix-run/node"), import_dayjs = __toESM(require("dayjs")), import_react7 = require("@remix-run/react");

// app/utils/params.server.ts
function getQueryIntParameter(request, name, defaultValue) {
  let url = new URL(request.url), param = parseInt(url.searchParams.get(name) ?? "", 10);
  return isNaN(param) ? defaultValue : param;
}

// route:/Users/andres/Documents/Github/ttf/app/routes/questionnaire/owner.tsx
var loader4 = async ({ request }) => {
  let { userId } = await (0, import_ssr4.getAuth)(request);
  if (!userId)
    return (0, import_node3.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
  let take = getQueryIntParameter(request, "per_page", 2), skip = getQueryIntParameter(request, "offset", 0), totalQuery = await db.questionnaire.count({
    where: {
      userId
    }
  }), questionnariesQuery = await db.questionnaire.findMany({
    skip,
    take,
    where: {
      userId
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      category: !0
    }
  }), [total, questionnaries] = await Promise.all([totalQuery, questionnariesQuery]);
  return { total, questionnaries };
};
function QuestionnarieOwnerPage() {
  let { total, questionnaries } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-extrabold"
  }, "My Questionnaries"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    className: "overflow-x-auto relative"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-full text-sm text-left text-gray-500"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-gray-50"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Name"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Category"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Create At"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Actions"))), /* @__PURE__ */ React.createElement("tbody", null, questionnaries.map((questionnarie) => /* @__PURE__ */ React.createElement("tr", {
    key: questionnarie.id,
    className: "bg-white border-b"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
  }, questionnarie.name), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, questionnarie.category.name), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, (0, import_dayjs.default)(questionnarie.createdAt).format("MMMM D, YYYY h:mm A")), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: `/questionnaire/edit/${questionnarie.id}`,
    className: "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
  }, "Edit")), /* @__PURE__ */ React.createElement("button", {
    className: "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400  hover:from-pink-500 hover:to-orange-500 text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md bg-opacity-0"
  }, "Remove"))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 flex gap-4 justify-between"
  }, /* @__PURE__ */ React.createElement("button", {
    disabled: !0,
    className: "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 disabled:opacity-50 disabled:pointer-events-none disabled:from-slate-300 disabled:to-slate-400"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
  }, "Previous")), /* @__PURE__ */ React.createElement("button", {
    disabled: !0,
    className: "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 disabled:opacity-50 disabled:pointer-events-none disabled:from-slate-300 disabled:to-slate-400"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
  }, "Next"))))));
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

// route:/Users/andres/Documents/Github/ttf/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader5
});
var import_remix6 = require("@clerk/remix"), import_react10 = require("@remix-run/react");

// app/components/category/explorer.tsx
function CategoryExplorer({ categories }) {
  return /* @__PURE__ */ React.createElement("section", {
    className: "mt-8"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "font-bold text-xl"
  }, "Explorer categories"), /* @__PURE__ */ React.createElement("ul", null, categories.map(({ id, name }) => /* @__PURE__ */ React.createElement("li", {
    key: id
  }, name))));
}

// app/components/home/create-form.tsx
var import_react8 = require("@remix-run/react"), import_react9 = require("react");
function CreateForm() {
  let [name, setName] = (0, import_react9.useState)(""), [path, setPath] = (0, import_react9.useState)("");
  (0, import_react9.useEffect)(() => {
    setPath(`/questionnaire/create?questionnarie=${name}`);
  }, [name]);
  let navigate = (0, import_react8.useNavigate)();
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
function HomeIn({ categories }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React.createElement(CreateForm, null), /* @__PURE__ */ React.createElement(CategoryExplorer, {
    categories
  })));
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
var loader5 = async () => ({ categories: await db.category.findMany() });
function Index() {
  let { categories } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix6.SignedIn, null, /* @__PURE__ */ React.createElement(HomeIn, {
    categories
  })), /* @__PURE__ */ React.createElement(import_remix6.SignedOut, null, /* @__PURE__ */ React.createElement(HomeOut, null)));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/me/$.tsx
var __exports3 = {};
__export(__exports3, {
  default: () => MePage
});
var import_remix7 = require("@clerk/remix");
function MePage() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "mt-20"
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(import_remix7.UserProfile, null));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/404.tsx
var __exports4 = {};
__export(__exports4, {
  default: () => NotFound
});
function NotFound() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React.createElement("h1", null, "Not found")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "79d1c1e6", entry: { module: "/build/entry.client-VRGUGIDA.js", imports: ["/build/_shared/chunk-6DVABPHU.js", "/build/_shared/chunk-BNRLY3XL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DHD73UBA.js", imports: ["/build/_shared/chunk-EK7WFTK5.js", "/build/_shared/chunk-A563IWXS.js", "/build/_shared/chunk-XEIQH75F.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/404": { id: "routes/404", parentId: "root", path: "404", index: void 0, caseSensitive: void 0, module: "/build/routes/404-TJPSGBUX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-NH6LZMAF.js", imports: ["/build/_shared/chunk-SY7IAUC4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/me/$": { id: "routes/me/$", parentId: "root", path: "me/*", index: void 0, caseSensitive: void 0, module: "/build/routes/me/$-4QVGNMDG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/questionnaire/create": { id: "routes/questionnaire/create", parentId: "root", path: "questionnaire/create", index: void 0, caseSensitive: void 0, module: "/build/routes/questionnaire/create-WHAKRSO4.js", imports: ["/build/_shared/chunk-SY7IAUC4.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/questionnaire/edit/$questionnaireId": { id: "routes/questionnaire/edit/$questionnaireId", parentId: "root", path: "questionnaire/edit/:questionnaireId", index: void 0, caseSensitive: void 0, module: "/build/routes/questionnaire/edit/$questionnaireId-G7PX7DXR.js", imports: ["/build/_shared/chunk-SY7IAUC4.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/questionnaire/owner": { id: "routes/questionnaire/owner", parentId: "root", path: "questionnaire/owner", index: void 0, caseSensitive: void 0, module: "/build/routes/questionnaire/owner-AJ4L4VWU.js", imports: ["/build/_shared/chunk-SY7IAUC4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/questionnaire/resolved": { id: "routes/questionnaire/resolved", parentId: "root", path: "questionnaire/resolved", index: void 0, caseSensitive: void 0, module: "/build/routes/questionnaire/resolved-OP3WHT6W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-3PLBKNBZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-ZSMGRISJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-79D1C1E6.js" };

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
  "routes/questionnaire/edit/$questionnaireId": {
    id: "routes/questionnaire/edit/$questionnaireId",
    parentId: "root",
    path: "questionnaire/edit/:questionnaireId",
    index: void 0,
    caseSensitive: void 0,
    module: questionnaireId_exports
  },
  "routes/questionnaire/resolved": {
    id: "routes/questionnaire/resolved",
    parentId: "root",
    path: "questionnaire/resolved",
    index: void 0,
    caseSensitive: void 0,
    module: resolved_exports
  },
  "routes/questionnaire/create": {
    id: "routes/questionnaire/create",
    parentId: "root",
    path: "questionnaire/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/questionnaire/owner": {
    id: "routes/questionnaire/owner",
    parentId: "root",
    path: "questionnaire/owner",
    index: void 0,
    caseSensitive: void 0,
    module: owner_exports
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
  "routes/404": {
    id: "routes/404",
    parentId: "root",
    path: "404",
    index: void 0,
    caseSensitive: void 0,
    module: __exports4
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
