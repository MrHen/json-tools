import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript';

import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/lint.js';
import 'codemirror/addon/lint/json-lint';

import * as CodeMirror from "codemirror";
import * as JSON5 from "json5";

import "./stylesheet.css";

var editor:any = null

function start () {
  var area = getJsonArea();
  area.innerText = JSON.stringify({"hello": "world"}, null, 2) + '\n';

  editor = CodeMirror.fromTextArea(area, {
    lineNumbers: true,
    // theme: 'monokai',
    mode: {
      name: "javascript",
      json: true
    },
    gutters: ["CodeMirror-lint-markers"],
    lint: true
  });
}

function getJsonArea (id = "code") {
  return <HTMLTextAreaElement>document.getElementById(id)
}

function getContent () {
  var value = editor ? editor.getValue() : null
  return value
}

function setContent (value: string) {
  return editor ? editor.setValue(value) : null
}

export function prettify () {
  try {
    var value = getContent();
    var json = JSON.parse(value)
    setContent(JSON.stringify(json, null, 2) + '\n')
  } catch (e) {}
}

export function minifiy () {
  try {
    var value = getContent();
    var json = JSON.parse(value)
    setContent(JSON.stringify(json))
  } catch (e) {}
}

export function stringify () {
  try {
    var value = getContent();
    setContent(JSON.stringify(value))
  } catch (e) {}
}

export function parse () {
  try {
    var value = getContent();
    var json = JSON.parse(value)
    json = JSON.parse(json)
    setContent(JSON.stringify(json))
  } catch (e) {}
}

export function convert () {
  try {
    var value = getContent();
    var json = JSON5.parse(value)
    setContent(JSON.stringify(json))
  } catch (e) {}
}

start();
