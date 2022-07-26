var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
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
var app_default = "/build/_assets/app-ANMVWDLS.css";

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

// route:/Users/andres/Documents/Github/ttf/app/routes/questionnaire/resolved/$questionnaireId.tsx
var questionnaireId_exports = {};
__export(questionnaireId_exports, {
  action: () => action,
  default: () => QuestionnarieResolvedPage,
  loader: () => loader2
});
var import_ssr2 = require("@clerk/remix/ssr.server"), import_node = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// route:/Users/andres/Documents/Github/ttf/app/routes/questionnaire/resolved/$questionnaireId.tsx
var loader2 = async ({ request, params }) => {
  let { userId } = await (0, import_ssr2.getAuth)(request);
  if (!userId)
    return (0, import_node.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
  let { questionnaireId } = params;
  if (await db.resolve.findFirst({
    where: {
      userId,
      questionnaireId
    }
  }))
    return (0, import_node.redirect)("/");
  let questionnarie = await db.questionnaire.findFirst({
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
  return questionnarie ? questionnarie.userId === userId ? (0, import_node.redirect)(`/questionnaire/edit/${questionnarie.id}`) : { questionnarie } : (0, import_node.redirect)("/404");
}, action = async ({ request, params }) => {
  let { userId } = await (0, import_ssr2.getAuth)(request);
  if (!userId)
    return (0, import_node.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
  let { questionnaireId } = params, questionnarie = await db.questionnaire.findFirst({
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
  if (!questionnarie)
    return (0, import_node.redirect)("/404");
  let { questions } = questionnarie, formData = await request.formData(), formAnswers = questions.map((question) => {
    let { name } = question, value = formData.get(`${name}-answer`) === "true", isCorrect = question.answer === value;
    return { name, value, isCorrect };
  }), score = formAnswers.filter(({ isCorrect }) => isCorrect).length, resolve = await db.resolve.create({
    data: {
      userId,
      questionnaireId: questionnarie.id,
      score
    }
  }), { id: resolveId } = resolve, answers = formAnswers.map((answer) => __spreadValues({ resolveId }, answer));
  return await db.answer.createMany({
    data: answers
  }), { score, resolveId };
};
function QuestionnarieResolvedPage() {
  let { questionnarie } = (0, import_react5.useLoaderData)(), data = (0, import_react5.useActionData)(), { name, questions } = questionnarie, { state } = (0, import_react5.useTransition)();
  return /* @__PURE__ */ React.createElement("section", {
    className: "container m-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React.createElement(import_react5.Form, {
    method: "post",
    className: "flex flex-col md:w-8/12 md:m-0 md:mx-auto"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-900 text-3xl font-extrabold mb-4 mt-4",
    htmlFor: "name"
  }, name), questions.map(({ id, name: name2, description }) => {
    let identifierNumber = parseInt(name2.split("-")[1], 10);
    return /* @__PURE__ */ React.createElement("div", {
      className: "py-6 border-b border-b-slate-200 flex justify-between items-center",
      key: id
    }, /* @__PURE__ */ React.createElement("label", {
      className: "block text-slate-600 text-lg font-normal mb-2",
      htmlFor: `${name2}-description`
    }, description), /* @__PURE__ */ React.createElement("div", {
      className: "mt-6 flex gap-4"
    }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
      required: !0,
      id: `${name2}-answer-true`,
      value: "true",
      name: `${name2}-answer`,
      type: "radio",
      className: "sr-only peer"
    }), /* @__PURE__ */ React.createElement("label", {
      htmlFor: `${name2}-answer-true`,
      className: " text-sm cursor-pointer px-3 py-2 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white"
    }, "True")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
      required: !0,
      id: `${name2}-answer-false`,
      value: "false",
      name: `${name2}-answer`,
      type: "radio",
      className: "sr-only peer"
    }), /* @__PURE__ */ React.createElement("label", {
      htmlFor: `${name2}-answer-false`,
      className: "text-sm cursor-pointer px-3 py-2 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white"
    }, "False"))));
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 mb-32 flex justify-end"
  }, /* @__PURE__ */ React.createElement("button", {
    disabled: state === "submitting",
    type: "submit",
    className: "w-40 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 disabled:opacity-40 disabled:pointer-events-none"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "w-40 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-lg"
  }, "Resolve ", state === "submitting" ? " ..." : ""))))));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/questionnaire/edit/$questionnaireId.tsx
var questionnaireId_exports2 = {};
__export(questionnaireId_exports2, {
  action: () => action2,
  default: () => QuestionnaireEdit,
  loader: () => loader3
});
var import_ssr3 = require("@clerk/remix/ssr.server"), import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var loader3 = async ({ request, params }) => {
  let { userId } = await (0, import_ssr3.getAuth)(request);
  if (!userId)
    return (0, import_node2.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
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
    return (0, import_node2.redirect)("/404");
  if ((questionnaire == null ? void 0 : questionnaire.userId) !== userId)
    return (0, import_node2.redirect)("/404");
  let categories = await db.category.findMany();
  return { questionnaire, categories };
}, action2 = async ({ request, params }) => {
  var _a, _b;
  let { userId } = await (0, import_ssr3.getAuth)(request);
  if (!userId)
    return (0, import_node2.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
  let { questionnaireId } = params, questionnaire = await db.questionnaire.findFirst({
    where: {
      id: questionnaireId
    },
    include: {
      questions: !0
    }
  });
  if (questionnaire === null)
    return (0, import_node2.redirect)("/404");
  if ((questionnaire == null ? void 0 : questionnaire.userId) !== userId)
    return (0, import_node2.redirect)("/404");
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
  return await Promise.all(questionsUpdateList), (0, import_node2.redirect)("/questionnaire/owner");
};
function QuestionnaireEdit() {
  let { state } = (0, import_react6.useTransition)(), { questionnaire, categories } = (0, import_react6.useLoaderData)(), { name, questions, categoryId } = questionnaire;
  return /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React.createElement(import_react6.Form, {
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
      className: "mt-8 mb-2 md:flex md:justify-between md:gap-4 items-center",
      key: id
    }, /* @__PURE__ */ React.createElement("div", {
      className: "md:flex-1"
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
    })), /* @__PURE__ */ React.createElement("div", {
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
      className: "cursor-pointer px-3 py-2 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white"
    }, "True")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
      id: `${name2}-answer-false`,
      defaultChecked: answer === !1,
      value: "false",
      name: `${name2}-answer`,
      type: "radio",
      className: "sr-only peer"
    }), /* @__PURE__ */ React.createElement("label", {
      htmlFor: `${name2}-answer-false`,
      className: "cursor-pointer px-3 py-2 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white"
    }, "False"))));
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 mb-32 flex justify-end"
  }, /* @__PURE__ */ React.createElement("button", {
    disabled: state === "submitting",
    className: "w-40 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 disabled:opacity-40 disabled:pointer-events-none"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "w-40 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-lg"
  }, "Save ", state === "submitting" ? " ..." : ""))))));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/questionnaire/view/$questionnaireId.tsx
var questionnaireId_exports3 = {};
__export(questionnaireId_exports3, {
  default: () => QuestionnaireViewPage,
  loader: () => loader4
});
var import_ssr4 = require("@clerk/remix/ssr.server"), import_node3 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var loader4 = async ({ request, params }) => {
  let { userId } = await (0, import_ssr4.getAuth)(request);
  if (!userId)
    return (0, import_node3.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
  let { questionnaireId } = params, resolved = await db.resolve.findFirst({
    where: {
      userId,
      questionnaireId
    },
    include: {
      answers: {
        orderBy: {
          name: "asc"
        }
      },
      questionnaire: {
        include: {
          questions: !0
        }
      }
    }
  });
  return resolved ? { resolved } : (0, import_node3.redirect)("/404");
};
function QuestionnaireViewPage() {
  let { resolved } = (0, import_react7.useLoaderData)(), { questionnaire, answers, score } = resolved, { questions } = questionnaire, obtainQuestionByName = (name) => {
    var _a;
    return (_a = questions.find((question) => question.name === name)) == null ? void 0 : _a.description;
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "block text-gray-900 text-3xl font-extrabold mb-4 mt-4"
  }, questionnaire.name), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-slate-600 text-sm mb-8"
  }, "Score: ", score, " / 10"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-16"
  }, answers.map(({ name, value, isCorrect }) => /* @__PURE__ */ React.createElement("div", {
    className: "md:flex md:justify-between mb-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-2"
  }, obtainQuestionByName(name)), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-slate-600 font-extralight"
  }, value ? "True" : "False"), isCorrect ? /* @__PURE__ */ React.createElement("img", {
    src: "/img/correct.png",
    alt: "correct",
    className: "w-9"
  }) : /* @__PURE__ */ React.createElement("img", {
    src: "/img/incorrect.png",
    alt: "incorrect",
    className: "w-9"
  })))))));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/questionnaire/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action3,
  default: () => QuestionnairePageCreate,
  loader: () => loader5
});
var import_ssr5 = require("@clerk/remix/ssr.server"), import_node4 = require("@remix-run/node"), import_react8 = require("@remix-run/react");
var questionsKeyList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"], loader5 = async ({ request }) => {
  let { userId } = await (0, import_ssr5.getAuth)(request);
  if (!userId)
    return (0, import_node4.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
  let questionnarie = new URL(request.url).searchParams.get("questionnarie"), categories = await db.category.findMany();
  return { userId, questionnarie, categories };
}, action3 = async ({ request }) => {
  var _a, _b;
  let { userId } = await (0, import_ssr5.getAuth)(request);
  if (!userId)
    return (0, import_node4.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
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
  return await db.question.createMany({ data: questionsData }), (0, import_node4.redirect)("/questionnaire/owner");
};
function QuestionnairePageCreate() {
  let { state } = (0, import_react8.useTransition)(), { questionnarie, categories } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React.createElement(import_react8.Form, {
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
    className: "mt-8 mb-2 md:flex md:justify-between md:gap-4 items-center",
    key: questionKey
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:flex-1"
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
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 flex gap-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    id: `question-${questionKey}-answer-true`,
    value: "true",
    name: `question-${questionKey}-answer`,
    type: "radio",
    className: "sr-only peer"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: `question-${questionKey}-answer-true`,
    className: "cursor-pointer px-3 py-2 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white"
  }, "True")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    id: `question-${questionKey}-answer-false`,
    value: "false",
    name: `question-${questionKey}-answer`,
    type: "radio",
    className: "sr-only peer"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: `question-${questionKey}-answer-false`,
    className: "cursor-pointer px-3 py-2 rounded-md text-slate-600 bg-gradient-to-br from-white to-white peer-checked:bg-gradient-to-br border-purple-500 border-solid border-2 peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:text-white peer-checked:border-white"
  }, "False"))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 mb-32 flex justify-end"
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
  loader: () => loader6
});
var import_dayjs = __toESM(require("dayjs")), import_ssr6 = require("@clerk/remix/ssr.server"), import_node5 = require("@remix-run/node"), import_react9 = require("@remix-run/react");

// app/utils/params.server.ts
function getQueryIntParameter(request, name, defaultValue) {
  let url = new URL(request.url), param = parseInt(url.searchParams.get(name) ?? "", 10);
  return isNaN(param) ? defaultValue : param;
}
function getQueryStringParameter(request, name) {
  return new URL(request.url).searchParams.get(name);
}

// route:/Users/andres/Documents/Github/ttf/app/routes/questionnaire/owner.tsx
var import_react10 = require("react"), loader6 = async ({ request }) => {
  let { userId } = await (0, import_ssr6.getAuth)(request);
  if (!userId)
    return (0, import_node5.redirect)(`${process.env.CLERK_REDIRECT_LOGIN}?redirect_url=${request.url}`);
  let take = getQueryIntParameter(request, "per_page", 1), skip = getQueryIntParameter(request, "offset", 0), search = getQueryStringParameter(request, "search"), filter = {
    userId
  };
  search && (filter.name = {
    contains: search
  });
  let totalQuery = await db.questionnaire.count({
    where: __spreadValues({}, filter)
  }), questionnariesQuery = await db.questionnaire.findMany({
    skip,
    take,
    where: __spreadValues({}, filter),
    orderBy: {
      createdAt: "desc"
    },
    include: {
      category: !0
    }
  }), [total, questionnaries] = await Promise.all([totalQuery, questionnariesQuery]), hasPrev = skip > 0, hasNext = skip + take < total;
  return { total, questionnaries, offset: skip, hasPrev, hasNext };
};
function QuestionnarieOwnerPage() {
  let navigate = (0, import_react9.useNavigate)(), { questionnaries, hasPrev, hasNext, offset, search } = (0, import_react9.useLoaderData)(), [term, setTerm] = (0, import_react10.useState)(search);
  (0, import_react10.useEffect)(() => {
    term === "" && navigate("/questionnaire/owner");
  }, [term]);
  let handleOnChageSearch = (event) => setTerm(event.target.value), handleOnSearch = (event) => {
    event.preventDefault(), navigate(`/questionnaire/owner?search=${term}`);
  }, buildLinkPrev = () => {
    if (offset === 0 && !term)
      return "/questionnaire/owner";
    let params = new URLSearchParams(), offserDiff = offset - 1;
    return offserDiff > 0 && params.append("offset", offserDiff.toString()), term && params.append("search", term), `/questionnaire/owner?${params.toString()}`;
  }, buildLinkNext = () => {
    let params = new URLSearchParams(), nextOffset = offset + 1;
    return params.append("offset", nextOffset.toString()), term && params.append("search", term), `/questionnaire/owner?${params.toString()}`;
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:flex md:justify-between md:items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "mt-12 text-3xl mb-8 font-extrabold"
  }, "My Questionnaires"), /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleOnSearch,
    className: "mb-8 md:mb-0"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "search",
    className: "mb-2 text-sm font-medium text-gray-900 sr-only"
  }, "Search"), /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    className: "w-5 h-5 text-gray-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }))), /* @__PURE__ */ React.createElement("input", {
    type: "search",
    id: "search",
    name: "search",
    className: "block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500",
    placeholder: "Search...",
    required: !0,
    onChange: handleOnChageSearch
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-4 py-2"
  }, "Search")))), /* @__PURE__ */ React.createElement("div", {
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
  }, /* @__PURE__ */ React.createElement(import_react9.Link, {
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
  }, /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: buildLinkPrev(),
    className: `relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 disabled:opacity-50 disabled:pointer-events-none disabled:from-slate-300 disabled:to-slate-400 ${hasPrev ? "" : "pointer-events-none opacity-40 grayscale"}`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
  }, "Previous")), /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: buildLinkNext(),
    className: `relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 disabled:opacity-50 disabled:pointer-events-none disabled:from-slate-300 disabled:to-slate-400 ${hasNext ? "" : "pointer-events-none opacity-40 grayscale"}`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
  }, "Next"))))));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/api/questionnaires.ts
var questionnaires_exports = {};
__export(questionnaires_exports, {
  loader: () => loader7
});
var loader7 = async ({ request }) => {
  let take = getQueryIntParameter(request, "per_page", 1), skip = getQueryIntParameter(request, "offset", 0), search = getQueryStringParameter(request, "search"), categoryId = getQueryStringParameter(request, "category_id"), filter = {
    active: !0
  };
  categoryId && (filter.categoryId = categoryId), search && (filter.name = {
    contains: search
  });
  let totalQuery = db.questionnaire.count({
    where: __spreadValues({}, filter)
  }), questionnairesQuery = db.questionnaire.findMany({
    skip,
    take,
    where: __spreadValues({}, filter),
    orderBy: {
      createdAt: "desc"
    }
  }), [total, questionnaires] = await Promise.all([totalQuery, questionnairesQuery]);
  return { take, skip, search, total, questionnaires };
};

// route:/Users/andres/Documents/Github/ttf/app/routes/category/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => CategoryPage,
  loader: () => loader8
});
var import_react11 = require("react"), import_node6 = require("@remix-run/node"), import_react12 = require("@remix-run/react");

// app/components/category/questionnaire-item.tsx
var import_react_router_dom = require("react-router-dom");
function CategoryQuestionnaireItem({ questionnaire, userId }) {
  let { name, id, isOwner, isResolved } = questionnaire;
  return /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
  }, name), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, (() => isOwner ? /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: `/questionnaire/edit/${id}`,
    className: "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
  }, "Edit")) : isResolved ? /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: `/questionnaire/view/${id}`,
    className: "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
  }, "View")) : /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: `/questionnaire/resolved/${id}`,
    className: "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
  }, "Resolve")))()));
}

// route:/Users/andres/Documents/Github/ttf/app/routes/category/$slug.tsx
var import_ssr7 = require("@clerk/remix/ssr.server");

// app/utils/questionnaire.ts
function generateQuestionnairesExt(questionnaires, userId, resolved) {
  return questionnaires.map((item) => {
    let isOwner = userId === item.userId, isResolved = resolved.includes(item.id);
    return __spreadProps(__spreadValues({}, item), { isOwner, isResolved });
  });
}

// route:/Users/andres/Documents/Github/ttf/app/routes/category/$slug.tsx
var loader8 = async ({ request, params }) => {
  let { slug } = params, category = await db.category.findFirst({
    where: { slug }
  });
  if (!category)
    return (0, import_node6.redirect)("/404");
  let { userId } = await (0, import_ssr7.getAuth)(request), resolved = [];
  return userId && (resolved = (await db.resolve.findMany({
    where: {
      userId
    },
    select: {
      questionnaireId: !0
    }
  })).map((resolve) => resolve.questionnaireId)), { slug, category, userId, resolved };
};
function CategoryPage() {
  var _a;
  let { category, userId, resolved } = (0, import_react12.useLoaderData)(), [questionnaires, setQuestionnaires] = (0, import_react11.useState)([]), [offset, setOffset] = (0, import_react11.useState)(0), [search, setSeach] = (0, import_react11.useState)(""), { name, id: categoryId } = category, fetcher = (0, import_react12.useFetcher)();
  (0, import_react11.useEffect)(() => load(), []), (0, import_react11.useEffect)(() => {
    if (!fetcher.data)
      return;
    let { skip, questionnaires: paginQuestionnaires } = fetcher.data;
    setQuestionnaires(skip === 0 ? generateQuestionnairesExt(paginQuestionnaires, userId, resolved) : [...questionnaires, ...generateQuestionnairesExt(paginQuestionnaires, userId, resolved)]);
  }, [fetcher.data]), (0, import_react11.useEffect)(() => {
    search === "" && obtaintWithResetOffset();
  }, [search]);
  let handleOnMore = () => {
    let offsetMore = offset + 1;
    load(offsetMore), setOffset(offsetMore);
  }, handleOnChageSearch = (event) => setSeach(event.target.value), handleOnSearch = (event) => {
    event.preventDefault(), obtaintWithResetOffset();
  }, load = (currenOffset = 0) => {
    let params = new URLSearchParams();
    params.append("category_id", categoryId), params.append("offset", currenOffset.toString()), params.append("search", search), fetcher.load(`/api/questionnaires?${params.toString()}`);
  }, obtaintWithResetOffset = () => {
    load(0), setOffset(0);
  };
  return /* @__PURE__ */ React.createElement("section", {
    className: "container m-0 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:flex md:justify-between md:items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "mt-12 text-3xl mb-8 font-extrabold"
  }, "Category: ", name), /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleOnSearch,
    className: "mb-8 md:mb-0"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "search",
    className: "mb-2 text-sm font-medium text-gray-900 sr-only"
  }, "Search"), /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    className: "w-5 h-5 text-gray-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }))), /* @__PURE__ */ React.createElement("input", {
    type: "search",
    id: "search",
    name: "search",
    className: "block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500",
    placeholder: "Search...",
    required: !0,
    onChange: handleOnChageSearch
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-4 py-2"
  }, "Search")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-x-auto relative"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-full text-sm text-left text-gray-500"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-gray-50"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Questionnaire name"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Actions"))), /* @__PURE__ */ React.createElement("tbody", null, questionnaires.map((questionnaire) => /* @__PURE__ */ React.createElement(CategoryQuestionnaireItem, {
    key: questionnaire.id,
    questionnaire,
    userId
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8"
  }, questionnaires.length < ((_a = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a.total) ? /* @__PURE__ */ React.createElement("button", {
    disabled: fetcher.state === "submitting",
    type: "submit",
    onClick: handleOnMore,
    className: "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "relative px-12 py-3.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
  }, fetcher.state === "submitting" ? "Load more..." : "Load more")) : null))));
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
  loader: () => loader9
});
var import_remix6 = require("@clerk/remix"), import_react16 = require("@remix-run/react");

// app/components/category/explorer.tsx
var import_react13 = require("@remix-run/react");

// app/utils/gradient.ts
var gradients = [
  "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
  "bg-gradient-to-r from-green-400 via-blue-600 to-purple-700",
  "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
  "bg-gradient-to-r from-indigo-400 via-red-400 to-yellow-300",
  "bg-gradient-to-r from-yellow-300 via-yellow-600 to-yellow-700",
  "bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900",
  "bg-gradient-to-r from-green-400 via-green-600 to-purple-700",
  "bg-gradient-to-r from-rose-400 via-fuchsia-600 to-indigo-600",
  "bg-gradient-to-r from-yellow-300 via-pink-400 to-pink-600"
];
function getGradientColor(index) {
  let total = gradients.length;
  if (index < total)
    return gradients[index];
  let divider = index / total, range = index / divider;
  return gradients[range - 2];
}

// app/components/category/explorer.tsx
function CategoryExplorer({ categories }) {
  return /* @__PURE__ */ React.createElement("section", {
    className: "my-8"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "font-bold text-xl mb-8"
  }, "Explorer categories"), /* @__PURE__ */ React.createElement("ul", {
    className: "md:grid grid-cols-3 gap-8"
  }, categories.map(({ id, name, slug }, index) => /* @__PURE__ */ React.createElement("li", {
    key: id
  }, /* @__PURE__ */ React.createElement(import_react13.Link, {
    to: `/category/${slug}`,
    className: `text-white text-xl font-semibold py-16 flex justify-center items-center mb-8 rounded md:mb-0 md:text-2xl ${getGradientColor(index)}`
  }, name)))));
}

// app/components/home/create-form.tsx
var import_react14 = require("@remix-run/react"), import_react15 = require("react");
function CreateForm() {
  let [name, setName] = (0, import_react15.useState)(""), [path, setPath] = (0, import_react15.useState)("");
  (0, import_react15.useEffect)(() => {
    setPath(`/questionnaire/create?questionnarie=${name}`);
  }, [name]);
  let navigate = (0, import_react14.useNavigate)();
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
var loader9 = async () => ({ categories: await db.category.findMany() });
function Index() {
  let { categories } = (0, import_react16.useLoaderData)();
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
var assets_manifest_default = { version: "25c1d1db", entry: { module: "/build/entry.client-UI52GWGX.js", imports: ["/build/_shared/chunk-EEMW7LQ2.js", "/build/_shared/chunk-BNRLY3XL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-F6ZUGV5V.js", imports: ["/build/_shared/chunk-VSTSINXQ.js", "/build/_shared/chunk-G3QIDN43.js", "/build/_shared/chunk-A563IWXS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/404": { id: "routes/404", parentId: "root", path: "404", index: void 0, caseSensitive: void 0, module: "/build/routes/404-TJPSGBUX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/questionnaires": { id: "routes/api/questionnaires", parentId: "root", path: "api/questionnaires", index: void 0, caseSensitive: void 0, module: "/build/routes/api/questionnaires-TPEOKUXR.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/category/$slug": { id: "routes/category/$slug", parentId: "root", path: "category/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/category/$slug-FJROIHPX.js", imports: ["/build/_shared/chunk-5MLM22RV.js", "/build/_shared/chunk-SY7IAUC4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-VTG4AUDK.js", imports: ["/build/_shared/chunk-SY7IAUC4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/me/$": { id: "routes/me/$", parentId: "root", path: "me/*", index: void 0, caseSensitive: void 0, module: "/build/routes/me/$-4G3OFD4T.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/questionnaire/create": { id: "routes/questionnaire/create", parentId: "root", path: "questionnaire/create", index: void 0, caseSensitive: void 0, module: "/build/routes/questionnaire/create-XRUAMB5Q.js", imports: ["/build/_shared/chunk-SY7IAUC4.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/questionnaire/edit/$questionnaireId": { id: "routes/questionnaire/edit/$questionnaireId", parentId: "root", path: "questionnaire/edit/:questionnaireId", index: void 0, caseSensitive: void 0, module: "/build/routes/questionnaire/edit/$questionnaireId-EWZ64KNU.js", imports: ["/build/_shared/chunk-SY7IAUC4.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/questionnaire/owner": { id: "routes/questionnaire/owner", parentId: "root", path: "questionnaire/owner", index: void 0, caseSensitive: void 0, module: "/build/routes/questionnaire/owner-RRPADD2S.js", imports: ["/build/_shared/chunk-5MLM22RV.js", "/build/_shared/chunk-SY7IAUC4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/questionnaire/resolved/$questionnaireId": { id: "routes/questionnaire/resolved/$questionnaireId", parentId: "root", path: "questionnaire/resolved/:questionnaireId", index: void 0, caseSensitive: void 0, module: "/build/routes/questionnaire/resolved/$questionnaireId-EQBSG6SR.js", imports: ["/build/_shared/chunk-SY7IAUC4.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/questionnaire/view/$questionnaireId": { id: "routes/questionnaire/view/$questionnaireId", parentId: "root", path: "questionnaire/view/:questionnaireId", index: void 0, caseSensitive: void 0, module: "/build/routes/questionnaire/view/$questionnaireId-MEPKDPHO.js", imports: ["/build/_shared/chunk-SY7IAUC4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-DWLJKACQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-UBHR2C3H.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-25C1D1DB.js" };

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
  "routes/questionnaire/resolved/$questionnaireId": {
    id: "routes/questionnaire/resolved/$questionnaireId",
    parentId: "root",
    path: "questionnaire/resolved/:questionnaireId",
    index: void 0,
    caseSensitive: void 0,
    module: questionnaireId_exports
  },
  "routes/questionnaire/edit/$questionnaireId": {
    id: "routes/questionnaire/edit/$questionnaireId",
    parentId: "root",
    path: "questionnaire/edit/:questionnaireId",
    index: void 0,
    caseSensitive: void 0,
    module: questionnaireId_exports2
  },
  "routes/questionnaire/view/$questionnaireId": {
    id: "routes/questionnaire/view/$questionnaireId",
    parentId: "root",
    path: "questionnaire/view/:questionnaireId",
    index: void 0,
    caseSensitive: void 0,
    module: questionnaireId_exports3
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
  "routes/api/questionnaires": {
    id: "routes/api/questionnaires",
    parentId: "root",
    path: "api/questionnaires",
    index: void 0,
    caseSensitive: void 0,
    module: questionnaires_exports
  },
  "routes/category/$slug": {
    id: "routes/category/$slug",
    parentId: "root",
    path: "category/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
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
