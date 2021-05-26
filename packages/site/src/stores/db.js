import { writable, get } from "svelte/store";
import metadata from "../metadata.json";

const Settings = {
  local: {
    api: "http://127.0.0.1:8787",
  },
  public: {
    api: "https://example.com",
  },
};

export const API_URL =
  location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? Settings.local.api
    : Settings.public.api;

export const version = writable(
  metadata.buildMajor + "." + metadata.buildMinor + "." + metadata.buildRevision
);

Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
  var value = this.getItem(key);
  if (value == undefined) return [];
  return value && JSON.parse(value);
};

Array.prototype.remove = function () {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};