// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var ApiUtil$ReactTemplate = require("./ApiUtil.bs.js");

function decodeServer(json) {
  return /* record */[
          /* admin_role */Json_decode.field("admin_role", (function (param) {
                  return Json_decode.optional(Json_decode.$$int, param);
                }), json),
          /* command_prefixes */Json_decode.field("command_prefixes", (function (param) {
                  return Json_decode.optional((function (param) {
                                return Json_decode.array(Json_decode.string, param);
                              }), param);
                }), json),
          /* id */Json_decode.field("id", Json_decode.string, json),
          /* name */Json_decode.field("name", Json_decode.string, json)
        ];
}

function decodeAllServers(param) {
  return Json_decode.array(decodeServer, param);
}

function getServers(param) {
  return ApiUtil$ReactTemplate.getJson("api/servers", decodeAllServers);
}

function getServer(id) {
  return ApiUtil$ReactTemplate.getJson("api/servers/" + id, decodeServer);
}

var ServerAPI = /* module */[
  /* decodeServer */decodeServer,
  /* decodeAllServers */decodeAllServers,
  /* getServers */getServers,
  /* getServer */getServer
];

exports.ServerAPI = ServerAPI;
/* No side effect */