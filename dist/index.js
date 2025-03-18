(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // node_modules/.pnpm/air-datepicker@3.5.3/node_modules/air-datepicker/air-datepicker.js
  var require_air_datepicker = __commonJS({
    "node_modules/.pnpm/air-datepicker@3.5.3/node_modules/air-datepicker/air-datepicker.js"(exports, module) {
      init_live_reload();
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AirDatepicker = t() : e.AirDatepicker = t();
      }(exports, function() {
        return function() {
          "use strict";
          var e = { d: function(t2, i2) {
            for (var s2 in i2)
              e.o(i2, s2) && !e.o(t2, s2) && Object.defineProperty(t2, s2, { enumerable: true, get: i2[s2] });
          }, o: function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          } }, t = {};
          e.d(t, { default: function() {
            return R;
          } });
          var i = { days: "days", months: "months", years: "years", day: "day", month: "month", year: "year", eventChangeViewDate: "changeViewDate", eventChangeCurrentView: "changeCurrentView", eventChangeFocusDate: "changeFocusDate", eventChangeSelectedDate: "changeSelectedDate", eventChangeTime: "changeTime", eventChangeLastSelectedDate: "changeLastSelectedDate", actionSelectDate: "selectDate", actionUnselectDate: "unselectDate", cssClassWeekend: "-weekend-" }, s = { classes: "", inline: false, locale: { days: ["\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435", "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A", "\u0412\u0442\u043E\u0440\u043D\u0438\u043A", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440\u0433", "\u041F\u044F\u0442\u043D\u0438\u0446\u0430", "\u0421\u0443\u0431\u0431\u043E\u0442\u0430"], daysShort: ["\u0412\u043E\u0441", "\u041F\u043E\u043D", "\u0412\u0442\u043E", "\u0421\u0440\u0435", "\u0427\u0435\u0442", "\u041F\u044F\u0442", "\u0421\u0443\u0431"], daysMin: ["\u0412\u0441", "\u041F\u043D", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041F\u0442", "\u0421\u0431"], months: ["\u042F\u043D\u0432\u0430\u0440\u044C", "\u0424\u0435\u0432\u0440\u0430\u043B\u044C", "\u041C\u0430\u0440\u0442", "\u0410\u043F\u0440\u0435\u043B\u044C", "\u041C\u0430\u0439", "\u0418\u044E\u043D\u044C", "\u0418\u044E\u043B\u044C", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C", "\u041E\u043A\u0442\u044F\u0431\u0440\u044C", "\u041D\u043E\u044F\u0431\u0440\u044C", "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"], monthsShort: ["\u042F\u043D\u0432", "\u0424\u0435\u0432", "\u041C\u0430\u0440", "\u0410\u043F\u0440", "\u041C\u0430\u0439", "\u0418\u044E\u043D", "\u0418\u044E\u043B", "\u0410\u0432\u0433", "\u0421\u0435\u043D", "\u041E\u043A\u0442", "\u041D\u043E\u044F", "\u0414\u0435\u043A"], today: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F", clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C", dateFormat: "dd.MM.yyyy", timeFormat: "HH:mm", firstDay: 1 }, startDate: /* @__PURE__ */ new Date(), firstDay: "", weekends: [6, 0], dateFormat: "", altField: "", altFieldDateFormat: "T", toggleSelected: true, keyboardNav: true, selectedDates: false, container: "", isMobile: false, visible: false, position: "bottom left", offset: 12, view: i.days, minView: i.days, showOtherMonths: true, selectOtherMonths: true, moveToOtherMonthsOnSelect: true, showOtherYears: true, selectOtherYears: true, moveToOtherYearsOnSelect: true, minDate: "", maxDate: "", disableNavWhenOutOfRange: true, multipleDates: false, multipleDatesSeparator: ", ", range: false, dynamicRange: true, buttons: false, monthsField: "monthsShort", showEvent: "focus", autoClose: false, fixedHeight: false, prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>', nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>', navTitles: { days: "MMMM, <i>yyyy</i>", months: "yyyy", years: "yyyy1 - yyyy2" }, timepicker: false, onlyTimepicker: false, dateTimeSeparator: " ", timeFormat: "", minHours: 0, maxHours: 24, minMinutes: 0, maxMinutes: 59, hoursStep: 1, minutesStep: 1, onSelect: false, onChangeViewDate: false, onChangeView: false, onRenderCell: false, onShow: false, onHide: false, onClickDayName: false };
          function a(e2) {
            let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
            return "string" == typeof e2 ? t2.querySelector(e2) : e2;
          }
          function n() {
            let { tagName: e2 = "div", className: t2 = "", innerHtml: i2 = "", id: s2 = "", attrs: a2 = {} } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = document.createElement(e2);
            return t2 && n2.classList.add(...t2.split(" ")), s2 && (n2.id = s2), i2 && (n2.innerHTML = i2), a2 && r(n2, a2), n2;
          }
          function r(e2, t2) {
            for (let [i2, s2] of Object.entries(t2))
              void 0 !== s2 && e2.setAttribute(i2, s2);
            return e2;
          }
          function o(e2) {
            return new Date(e2.getFullYear(), e2.getMonth() + 1, 0).getDate();
          }
          function h(e2) {
            let t2 = e2.getHours(), { hours: i2, dayPeriod: s2 } = l(t2);
            return { year: e2.getFullYear(), month: e2.getMonth(), fullMonth: e2.getMonth() + 1 < 10 ? "0" + (e2.getMonth() + 1) : e2.getMonth() + 1, date: e2.getDate(), fullDate: e2.getDate() < 10 ? "0" + e2.getDate() : e2.getDate(), day: e2.getDay(), hours: t2, fullHours: d(t2), hours12: i2, dayPeriod: s2, fullHours12: d(i2), minutes: e2.getMinutes(), fullMinutes: e2.getMinutes() < 10 ? "0" + e2.getMinutes() : e2.getMinutes() };
          }
          function l(e2) {
            return { dayPeriod: e2 > 11 ? "pm" : "am", hours: e2 % 12 == 0 ? 12 : e2 % 12 };
          }
          function d(e2) {
            return e2 < 10 ? "0" + e2 : e2;
          }
          function c(e2) {
            let t2 = 10 * Math.floor(e2.getFullYear() / 10);
            return [t2, t2 + 9];
          }
          function u() {
            let e2 = [];
            for (var t2 = arguments.length, i2 = new Array(t2), s2 = 0; s2 < t2; s2++)
              i2[s2] = arguments[s2];
            return i2.forEach((t3) => {
              if ("object" == typeof t3)
                for (let i3 in t3)
                  t3[i3] && e2.push(i3);
              else
                t3 && e2.push(t3);
            }), e2.join(" ");
          }
          function p(e2, t2) {
            let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.days;
            if (!e2 || !t2)
              return false;
            let a2 = h(e2), n2 = h(t2);
            return { [i.days]: a2.date === n2.date && a2.month === n2.month && a2.year === n2.year, [i.months]: a2.month === n2.month && a2.year === n2.year, [i.years]: a2.year === n2.year }[s2];
          }
          function m(e2, t2, i2) {
            let s2 = g(e2, false).getTime(), a2 = g(t2, false).getTime();
            return i2 ? s2 >= a2 : s2 > a2;
          }
          function v(e2, t2) {
            return !m(e2, t2, true);
          }
          function g(e2) {
            let t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = new Date(e2.getTime());
            return "boolean" != typeof t2 || t2 || function(e3) {
              e3.setHours(0, 0, 0, 0);
            }(i2), i2;
          }
          function D(e2, t2, i2) {
            e2.length ? e2.forEach((e3) => {
              e3.addEventListener(t2, i2);
            }) : e2.addEventListener(t2, i2);
          }
          function y(e2, t2) {
            return !(!e2 || e2 === document || e2 instanceof DocumentFragment) && (e2.matches(t2) ? e2 : y(e2.parentNode, t2));
          }
          function f(e2, t2, i2) {
            return e2 > i2 ? i2 : e2 < t2 ? t2 : e2;
          }
          function w(e2) {
            for (var t2 = arguments.length, i2 = new Array(t2 > 1 ? t2 - 1 : 0), s2 = 1; s2 < t2; s2++)
              i2[s2 - 1] = arguments[s2];
            return i2.filter((e3) => e3).forEach((t3) => {
              for (let [i3, s3] of Object.entries(t3))
                if (void 0 !== s3 && "[object Object]" === s3.toString()) {
                  let t4 = void 0 !== e2[i3] ? e2[i3].toString() : void 0, a2 = s3.toString(), n2 = Array.isArray(s3) ? [] : {};
                  e2[i3] = e2[i3] ? t4 !== a2 ? n2 : e2[i3] : n2, w(e2[i3], s3);
                } else
                  e2[i3] = s3;
            }), e2;
          }
          function b(e2) {
            let t2 = e2;
            return e2 instanceof Date || ("string" == typeof e2 && /^\d{4}-\d{2}-\d{2}$/.test(e2) && (e2 += "T00:00:00"), t2 = new Date(e2)), isNaN(t2.getTime()) && (console.log(`Unable to convert value "${e2}" to Date object`), t2 = false), t2;
          }
          function k(e2) {
            let t2 = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
            return new RegExp("(^|>|" + t2 + ")(" + e2 + ")($|<|" + t2 + ")", "g");
          }
          function $(e2, t2, i2) {
            return (t2 = function(e3) {
              var t3 = function(e4, t4) {
                if ("object" != typeof e4 || null === e4)
                  return e4;
                var i3 = e4[Symbol.toPrimitive];
                if (void 0 !== i3) {
                  var s2 = i3.call(e4, "string");
                  if ("object" != typeof s2)
                    return s2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e4);
              }(e3);
              return "symbol" == typeof t3 ? t3 : String(t3);
            }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
          }
          class C {
            constructor() {
              let { type: e2, date: t2, dp: i2, opts: s2, body: a2 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              $(this, "focus", () => {
                this.$cell.classList.add("-focus-"), this.focused = true;
              }), $(this, "removeFocus", () => {
                this.$cell.classList.remove("-focus-"), this.focused = false;
              }), $(this, "select", () => {
                this.$cell.classList.add("-selected-"), this.selected = true;
              }), $(this, "removeSelect", () => {
                this.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), this.selected = false;
              }), $(this, "onChangeSelectedDate", () => {
                this.isDisabled || (this._handleSelectedStatus(), this.opts.range && this._handleRangeStatus());
              }), $(this, "onChangeFocusDate", (e3) => {
                if (!e3)
                  return void (this.focused && this.removeFocus());
                let t3 = p(e3, this.date, this.type);
                t3 ? this.focus() : !t3 && this.focused && this.removeFocus(), this.opts.range && this._handleRangeStatus();
              }), $(this, "render", () => (this.$cell.innerHTML = this._getHtml(), this._handleClasses(), this.$cell)), this.type = e2, this.singleType = this.type.slice(0, -1), this.date = t2, this.dp = i2, this.opts = s2, this.body = a2, this.customData = false, this.init();
            }
            init() {
              var e2;
              let { onRenderCell: t2 } = this.opts;
              t2 && (this.customData = t2({ date: this.date, cellType: this.singleType, datepicker: this.dp })), this._createElement(), this._bindDatepickerEvents(), null !== (e2 = this.customData) && void 0 !== e2 && e2.disabled && this.dp.disableDate(this.date);
            }
            _bindDatepickerEvents() {
              this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
            }
            unbindDatepickerEvents() {
              this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
            }
            _createElement() {
              var e2;
              let { year: t2, month: i2, date: s2 } = h(this.date), a2 = (null === (e2 = this.customData) || void 0 === e2 ? void 0 : e2.attrs) || {};
              this.$cell = n({ attrs: { "data-year": t2, "data-month": i2, "data-date": s2, ...a2 } }), this.$cell.adpCell = this;
            }
            _getClassName() {
              var e2;
              let t2 = /* @__PURE__ */ new Date(), { selectOtherMonths: s2, selectOtherYears: a2 } = this.opts, { minDate: n2, maxDate: r2, isDateDisabled: o2 } = this.dp, { day: l2 } = h(this.date), d2 = this._isOutOfMinMaxRange(), c2 = o2(this.date), m2 = u("air-datepicker-cell", `-${this.singleType}-`, { "-current-": p(t2, this.date, this.type), "-min-date-": n2 && p(n2, this.date, this.type), "-max-date-": r2 && p(r2, this.date, this.type) }), v2 = "";
              switch (this.type) {
                case i.days:
                  v2 = u({ "-weekend-": this.dp.isWeekend(l2), "-other-month-": this.isOtherMonth, "-disabled-": this.isOtherMonth && !s2 || d2 || c2 });
                  break;
                case i.months:
                  v2 = u({ "-disabled-": d2 });
                  break;
                case i.years:
                  v2 = u({ "-other-decade-": this.isOtherDecade, "-disabled-": d2 || this.isOtherDecade && !a2 });
              }
              return u(m2, v2, null === (e2 = this.customData) || void 0 === e2 ? void 0 : e2.classes).split(" ");
            }
            _getHtml() {
              var e2;
              let { year: t2, month: s2, date: a2 } = h(this.date), { showOtherMonths: n2, showOtherYears: r2 } = this.opts;
              if (null !== (e2 = this.customData) && void 0 !== e2 && e2.html)
                return this.customData.html;
              switch (this.type) {
                case i.days:
                  return !n2 && this.isOtherMonth ? "" : a2;
                case i.months:
                  return this.dp.locale[this.opts.monthsField][s2];
                case i.years:
                  return !r2 && this.isOtherDecade ? "" : t2;
              }
            }
            _isOutOfMinMaxRange() {
              let { minDate: e2, maxDate: t2 } = this.dp, { type: s2, date: a2 } = this, { month: n2, year: r2, date: o2 } = h(a2), l2 = s2 === i.days, d2 = s2 === i.years, c2 = !!e2 && new Date(r2, d2 ? e2.getMonth() : n2, l2 ? o2 : e2.getDate()), u2 = !!t2 && new Date(r2, d2 ? t2.getMonth() : n2, l2 ? o2 : t2.getDate());
              return e2 && t2 ? v(c2, e2) || m(u2, t2) : e2 ? v(c2, e2) : t2 ? m(u2, t2) : void 0;
            }
            destroy() {
              this.unbindDatepickerEvents();
            }
            _handleRangeStatus() {
              const { selectedDates: e2, focusDate: t2, rangeDateTo: i2, rangeDateFrom: s2 } = this.dp, a2 = e2.length;
              if (!a2)
                return;
              let n2 = s2, r2 = i2;
              if (1 === a2 && t2) {
                const i3 = m(t2, e2[0]);
                n2 = i3 ? e2[0] : t2, r2 = i3 ? t2 : e2[0];
              }
              let o2 = u({ "-in-range-": n2 && r2 && (h2 = this.date, l2 = n2, d2 = r2, m(h2, l2) && v(h2, d2)), "-range-from-": n2 && p(this.date, n2, this.type), "-range-to-": r2 && p(this.date, r2, this.type) });
              var h2, l2, d2;
              this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), o2 && this.$cell.classList.add(...o2.split(" "));
            }
            _handleSelectedStatus() {
              let e2 = this.dp._checkIfDateIsSelected(this.date, this.type);
              e2 ? this.select() : !e2 && this.selected && this.removeSelect();
            }
            _handleInitialFocusStatus() {
              p(this.dp.focusDate, this.date, this.type) && this.focus();
            }
            _handleClasses() {
              this.$cell.setAttribute("class", ""), this._handleInitialFocusStatus(), this.dp.hasSelectedDates && (this._handleSelectedStatus(), this.dp.opts.range && this._handleRangeStatus()), this.$cell.classList.add(...this._getClassName());
            }
            get isDisabled() {
              return this.$cell.matches(".-disabled-");
            }
            get isOtherMonth() {
              return this.dp.isOtherMonth(this.date);
            }
            get isOtherDecade() {
              return this.dp.isOtherDecade(this.date);
            }
          }
          function _(e2, t2, i2) {
            return (t2 = function(e3) {
              var t3 = function(e4, t4) {
                if ("object" != typeof e4 || null === e4)
                  return e4;
                var i3 = e4[Symbol.toPrimitive];
                if (void 0 !== i3) {
                  var s2 = i3.call(e4, "string");
                  if ("object" != typeof s2)
                    return s2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e4);
              }(e3);
              return "symbol" == typeof t3 ? t3 : String(t3);
            }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
          }
          let M = { [i.days]: `<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`, [i.months]: `<div class="air-datepicker-body--cells -${i.months}-"></div>`, [i.years]: `<div class="air-datepicker-body--cells -${i.years}-"></div>` };
          const S = ".air-datepicker-cell";
          class T {
            constructor(e2) {
              let { dp: t2, type: s2, opts: a2 } = e2;
              _(this, "handleClick", (e3) => {
                let t3 = e3.target.closest(S).adpCell;
                if (t3.isDisabled)
                  return;
                if (!this.dp.isMinViewReached)
                  return void this.dp.down();
                let i2 = this.dp._checkIfDateIsSelected(t3.date, t3.type);
                i2 ? this.dp._handleAlreadySelectedDates(i2, t3.date) : this.dp.selectDate(t3.date);
              }), _(this, "handleDayNameClick", (e3) => {
                let t3 = e3.target.getAttribute("data-day-index");
                this.opts.onClickDayName({ dayIndex: Number(t3), datepicker: this.dp });
              }), _(this, "onChangeCurrentView", (e3) => {
                e3 !== this.type ? this.hide() : (this.show(), this.render());
              }), _(this, "onMouseOverCell", (e3) => {
                let t3 = y(e3.target, S);
                this.dp.setFocusDate(!!t3 && t3.adpCell.date);
              }), _(this, "onMouseOutCell", () => {
                this.dp.setFocusDate(false);
              }), _(this, "onClickBody", (e3) => {
                let { onClickDayName: t3 } = this.opts, i2 = e3.target;
                i2.closest(S) && this.handleClick(e3), t3 && i2.closest(".air-datepicker-body--day-name") && this.handleDayNameClick(e3);
              }), _(this, "onMouseDown", (e3) => {
                this.pressed = true;
                let t3 = y(e3.target, S), i2 = t3 && t3.adpCell;
                p(i2.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = true), p(i2.date, this.dp.rangeDateTo) && (this.rangeToFocused = true);
              }), _(this, "onMouseMove", (e3) => {
                if (!this.pressed || !this.dp.isMinViewReached)
                  return;
                e3.preventDefault();
                let t3 = y(e3.target, S), i2 = t3 && t3.adpCell, { selectedDates: s3, rangeDateTo: a3, rangeDateFrom: n2 } = this.dp;
                if (!i2 || i2.isDisabled)
                  return;
                let { date: r2 } = i2;
                if (2 === s3.length) {
                  if (this.rangeFromFocused && !m(r2, a3)) {
                    let { hours: e4, minutes: t4 } = h(n2);
                    r2.setHours(e4), r2.setMinutes(t4), this.dp.rangeDateFrom = r2, this.dp.replaceDate(n2, r2);
                  }
                  if (this.rangeToFocused && !v(r2, n2)) {
                    let { hours: e4, minutes: t4 } = h(a3);
                    r2.setHours(e4), r2.setMinutes(t4), this.dp.rangeDateTo = r2, this.dp.replaceDate(a3, r2);
                  }
                }
              }), _(this, "onMouseUp", () => {
                this.pressed = false, this.rangeFromFocused = false, this.rangeToFocused = false;
              }), _(this, "onChangeViewDate", (e3, t3) => {
                if (!this.isVisible)
                  return;
                let s3 = c(e3), a3 = c(t3);
                switch (this.dp.currentView) {
                  case i.days:
                    if (p(e3, t3, i.months))
                      return;
                    break;
                  case i.months:
                    if (p(e3, t3, i.years))
                      return;
                    break;
                  case i.years:
                    if (s3[0] === a3[0] && s3[1] === a3[1])
                      return;
                }
                this.render();
              }), _(this, "render", () => {
                this.destroyCells(), this._generateCells(), this.cells.forEach((e3) => {
                  this.$cells.appendChild(e3.render());
                });
              }), this.dp = t2, this.type = s2, this.opts = a2, this.cells = [], this.$el = "", this.pressed = false, this.isVisible = true, this.init();
            }
            init() {
              this._buildBaseHtml(), this.type === i.days && this.renderDayNames(), this.render(), this._bindEvents(), this._bindDatepickerEvents();
            }
            _bindEvents() {
              let { range: e2, dynamicRange: t2 } = this.opts;
              D(this.$el, "mouseover", this.onMouseOverCell), D(this.$el, "mouseout", this.onMouseOutCell), D(this.$el, "click", this.onClickBody), e2 && t2 && (D(this.$el, "mousedown", this.onMouseDown), D(this.$el, "mousemove", this.onMouseMove), D(window.document, "mouseup", this.onMouseUp));
            }
            _bindDatepickerEvents() {
              this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
            }
            _buildBaseHtml() {
              this.$el = n({ className: `air-datepicker-body -${this.type}-`, innerHtml: M[this.type] }), this.$names = a(".air-datepicker-body--day-names", this.$el), this.$cells = a(".air-datepicker-body--cells", this.$el);
            }
            _getDayNamesHtml() {
              let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay, t2 = "", s2 = this.dp.isWeekend, { onClickDayName: a2 } = this.opts, n2 = e2, r2 = 0;
              for (; r2 < 7; ) {
                let e3 = n2 % 7;
                t2 += `<div class="${u("air-datepicker-body--day-name", { [i.cssClassWeekend]: s2(e3), "-clickable-": !!a2 })}" data-day-index='${e3}'>${this.dp.locale.daysMin[e3]}</div>`, r2++, n2++;
              }
              return t2;
            }
            renderDayNames() {
              this.$names.innerHTML = this._getDayNamesHtml();
            }
            _generateCell(e2) {
              let { type: t2, dp: i2, opts: s2 } = this;
              return new C({ type: t2, dp: i2, opts: s2, date: e2, body: this });
            }
            _generateCells() {
              T.getDatesFunction(this.type)(this.dp, (e2) => {
                this.cells.push(this._generateCell(e2));
              });
            }
            show() {
              this.isVisible = true, this.$el.classList.remove("-hidden-");
            }
            hide() {
              this.isVisible = false, this.$el.classList.add("-hidden-");
            }
            destroyCells() {
              this.cells.forEach((e2) => e2.destroy()), this.cells = [], this.$cells.innerHTML = "";
            }
            destroy() {
              this.destroyCells(), this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
            }
            static getDaysDates(e2, t2) {
              let { viewDate: i2, opts: { fixedHeight: s2 }, locale: { firstDay: a2 } } = e2, n2 = o(i2), { year: r2, month: l2 } = h(i2), d2 = new Date(r2, l2, 1), c2 = new Date(r2, l2, n2), u2 = d2.getDay() - a2, p2 = 6 - c2.getDay() + a2;
              u2 = u2 < 0 ? u2 + 7 : u2, p2 = p2 > 6 ? p2 - 7 : p2;
              let m2 = function(e3, t3) {
                let { year: i3, month: s3, date: a3 } = h(e3);
                return new Date(i3, s3, a3 - t3);
              }(d2, u2), v2 = n2 + u2 + p2, g2 = m2.getDate(), { year: D2, month: y2 } = h(m2), f2 = 0;
              s2 && (v2 = 42);
              const w2 = [];
              for (; f2 < v2; ) {
                let e3 = new Date(D2, y2, g2 + f2);
                t2 && t2(e3), w2.push(e3), f2++;
              }
              return w2;
            }
            static getMonthsDates(e2, t2) {
              let { year: i2 } = e2.parsedViewDate, s2 = 0, a2 = [];
              for (; s2 < 12; ) {
                const e3 = new Date(i2, s2);
                a2.push(e3), t2 && t2(e3), s2++;
              }
              return a2;
            }
            static getYearsDates(e2, t2) {
              let i2 = c(e2.viewDate), s2 = i2[0] - 1, a2 = i2[1] + 1, n2 = s2, r2 = [];
              for (; n2 <= a2; ) {
                const e3 = new Date(n2, 0);
                r2.push(e3), t2 && t2(e3), n2++;
              }
              return r2;
            }
            static getDatesFunction() {
              let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
              return { [i.days]: T.getDaysDates, [i.months]: T.getMonthsDates, [i.years]: T.getYearsDates }[e2];
            }
          }
          function F(e2, t2, i2) {
            return (t2 = function(e3) {
              var t3 = function(e4, t4) {
                if ("object" != typeof e4 || null === e4)
                  return e4;
                var i3 = e4[Symbol.toPrimitive];
                if (void 0 !== i3) {
                  var s2 = i3.call(e4, "string");
                  if ("object" != typeof s2)
                    return s2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e4);
              }(e3);
              return "symbol" == typeof t3 ? t3 : String(t3);
            }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
          }
          class V {
            constructor(e2) {
              let { dp: t2, opts: i2 } = e2;
              F(this, "onClickNav", (e3) => {
                let t3 = y(e3.target, ".air-datepicker-nav--action");
                if (!t3)
                  return;
                let i3 = t3.dataset.action;
                this.dp[i3]();
              }), F(this, "onChangeViewDate", () => {
                this.render(), this._resetNavStatus(), this.handleNavStatus();
              }), F(this, "onChangeCurrentView", () => {
                this.render(), this._resetNavStatus(), this.handleNavStatus();
              }), F(this, "onClickNavTitle", () => {
                this.dp.isFinalView || this.dp.up();
              }), F(this, "update", () => {
                let { prevHtml: e3, nextHtml: t3 } = this.opts;
                this.$prev.innerHTML = e3, this.$next.innerHTML = t3, this._resetNavStatus(), this.render(), this.handleNavStatus();
              }), F(this, "renderDelay", () => {
                setTimeout(this.render);
              }), F(this, "render", () => {
                this.$title.innerHTML = this._getTitle(), function(e3, t3) {
                  for (let i3 in t3)
                    t3[i3] ? e3.classList.add(i3) : e3.classList.remove(i3);
                }(this.$title, { "-disabled-": this.dp.isFinalView });
              }), this.dp = t2, this.opts = i2, this.init();
            }
            init() {
              this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
            }
            _defineDOM() {
              this.$title = a(".air-datepicker-nav--title", this.$el), this.$prev = a('[data-action="prev"]', this.$el), this.$next = a('[data-action="next"]', this.$el);
            }
            _bindEvents() {
              this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
            }
            _bindDatepickerEvents() {
              this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.on(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.on(i.eventChangeTime, this.render));
            }
            destroy() {
              this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.off(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.off(i.eventChangeTime, this.render));
            }
            _createElement() {
              this.$el = n({ tagName: "nav", className: "air-datepicker-nav" });
            }
            _getTitle() {
              let { dp: e2, opts: t2 } = this, i2 = t2.navTitles[e2.currentView];
              return "function" == typeof i2 ? i2(e2) : e2.formatDate(e2.viewDate, i2);
            }
            handleNavStatus() {
              let { disableNavWhenOutOfRange: e2 } = this.opts, { minDate: t2, maxDate: s2 } = this.dp;
              if (!t2 && !s2 || !e2)
                return;
              let { year: a2, month: n2 } = this.dp.parsedViewDate, r2 = !!t2 && h(t2), o2 = !!s2 && h(s2);
              switch (this.dp.currentView) {
                case i.days:
                  t2 && r2.month >= n2 && r2.year >= a2 && this._disableNav("prev"), s2 && o2.month <= n2 && o2.year <= a2 && this._disableNav("next");
                  break;
                case i.months:
                  t2 && r2.year >= a2 && this._disableNav("prev"), s2 && o2.year <= a2 && this._disableNav("next");
                  break;
                case i.years: {
                  let e3 = c(this.dp.viewDate);
                  t2 && r2.year >= e3[0] && this._disableNav("prev"), s2 && o2.year <= e3[1] && this._disableNav("next");
                  break;
                }
              }
            }
            _disableNav(e2) {
              a('[data-action="' + e2 + '"]', this.$el).classList.add("-disabled-");
            }
            _resetNavStatus() {
              !function(e2) {
                for (var t2 = arguments.length, i2 = new Array(t2 > 1 ? t2 - 1 : 0), s2 = 1; s2 < t2; s2++)
                  i2[s2 - 1] = arguments[s2];
                e2.length ? e2.forEach((e3) => {
                  e3.classList.remove(...i2);
                }) : e2.classList.remove(...i2);
              }(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
            }
            _buildBaseHtml() {
              let { prevHtml: e2, nextHtml: t2 } = this.opts;
              this.$el.innerHTML = `<div class="air-datepicker-nav--action" data-action="prev">${e2}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t2}</div>`;
            }
            get isNavIsFunction() {
              let { navTitles: e2 } = this.opts;
              return Object.keys(e2).find((t2) => "function" == typeof e2[t2]);
            }
          }
          var x = { today: { content: (e2) => e2.locale.today, onClick: (e2) => e2.setViewDate(/* @__PURE__ */ new Date()) }, clear: { content: (e2) => e2.locale.clear, onClick: (e2) => e2.clear() } };
          class H {
            constructor(e2) {
              let { dp: t2, opts: i2 } = e2;
              this.dp = t2, this.opts = i2, this.init();
            }
            init() {
              this.createElement(), this.render();
            }
            createElement() {
              this.$el = n({ className: "air-datepicker-buttons" });
            }
            destroy() {
              this.$el.parentNode.removeChild(this.$el);
            }
            clearHtml() {
              return this.$el.innerHTML = "", this;
            }
            generateButtons() {
              let { buttons: e2 } = this.opts;
              Array.isArray(e2) || (e2 = [e2]), e2.forEach((e3) => {
                let t2 = e3;
                "string" == typeof e3 && x[e3] && (t2 = x[e3]);
                let i2 = this.createButton(t2);
                t2.onClick && this.attachEventToButton(i2, t2.onClick), this.$el.appendChild(i2);
              });
            }
            attachEventToButton(e2, t2) {
              e2.addEventListener("click", () => {
                t2(this.dp);
              });
            }
            createButton(e2) {
              let { content: t2, className: i2, tagName: s2 = "button", attrs: a2 = {} } = e2;
              return n({ tagName: s2, innerHtml: `<span tabindex='-1'>${"function" == typeof t2 ? t2(this.dp) : t2}</span>`, className: u("air-datepicker-button", i2), attrs: a2 });
            }
            render() {
              this.generateButtons();
            }
          }
          function E(e2, t2, i2) {
            return (t2 = function(e3) {
              var t3 = function(e4, t4) {
                if ("object" != typeof e4 || null === e4)
                  return e4;
                var i3 = e4[Symbol.toPrimitive];
                if (void 0 !== i3) {
                  var s2 = i3.call(e4, "string");
                  if ("object" != typeof s2)
                    return s2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e4);
              }(e3);
              return "symbol" == typeof t3 ? t3 : String(t3);
            }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
          }
          class L {
            constructor() {
              let { opts: e2, dp: t2 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              E(this, "toggleTimepickerIsActive", (e3) => {
                this.dp.timepickerIsActive = e3;
              }), E(this, "onChangeSelectedDate", (e3) => {
                let { date: t3, updateTime: i2 = false } = e3;
                t3 && (this.setMinMaxTime(t3), this.setCurrentTime(!!i2 && t3), this.addTimeToDate(t3));
              }), E(this, "onChangeLastSelectedDate", (e3) => {
                e3 && (this.setTime(e3), this.render());
              }), E(this, "onChangeInputRange", (e3) => {
                let t3 = e3.target;
                this[t3.getAttribute("name")] = t3.value, this.updateText(), this.dp.trigger(i.eventChangeTime, { hours: this.hours, minutes: this.minutes });
              }), E(this, "onMouseEnterLeave", (e3) => {
                let t3 = e3.target.getAttribute("name"), i2 = this.$minutesText;
                "hours" === t3 && (i2 = this.$hoursText), i2.classList.toggle("-focus-");
              }), E(this, "onFocus", () => {
                this.toggleTimepickerIsActive(true);
              }), E(this, "onBlur", () => {
                this.toggleTimepickerIsActive(false);
              }), this.opts = e2, this.dp = t2;
              let { timeFormat: s2 } = this.dp.locale;
              s2 && (s2.match(k("h")) || s2.match(k("hh"))) && (this.ampm = true), this.init();
            }
            init() {
              this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), this.bindDOMEvents();
            }
            bindDatepickerEvents() {
              this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
            }
            bindDOMEvents() {
              let e2 = "input";
              navigator.userAgent.match(/trident/gi) && (e2 = "change"), D(this.$ranges, e2, this.onChangeInputRange), D(this.$ranges, "mouseenter", this.onMouseEnterLeave), D(this.$ranges, "mouseleave", this.onMouseEnterLeave), D(this.$ranges, "focus", this.onFocus), D(this.$ranges, "mousedown", this.onFocus), D(this.$ranges, "blur", this.onBlur);
            }
            createElement() {
              this.$el = n({ className: u("air-datepicker-time", { "-am-pm-": this.dp.ampm }) });
            }
            destroy() {
              this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate), this.$el.parentNode.removeChild(this.$el);
            }
            buildHtml() {
              let { ampm: e2, hours: t2, displayHours: i2, minutes: s2, minHours: a2, minMinutes: n2, maxHours: r2, maxMinutes: o2, dayPeriod: h2, opts: { hoursStep: l2, minutesStep: c2 } } = this;
              this.$el.innerHTML = `<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d(i2)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d(s2)}</span>   ` + (e2 ? `<span class='air-datepicker-time--current-ampm'>${h2}</span>` : "") + `</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">      <input type="range" name="hours" value="${t2}" min="${a2}" max="${r2}" step="${l2}"/>   </div>   <div class="air-datepicker-time--row">      <input type="range" name="minutes" value="${s2}" min="${n2}" max="${o2}" step="${c2}"/>   </div></div>`;
            }
            defineDOM() {
              let e2 = (e3) => a(e3, this.$el);
              this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = e2('[name="hours"]'), this.$minutes = e2('[name="minutes"]'), this.$hoursText = e2(".air-datepicker-time--current-hours"), this.$minutesText = e2(".air-datepicker-time--current-minutes"), this.$ampm = e2(".air-datepicker-time--current-ampm");
            }
            setTime(e2) {
              this.setMinMaxTime(e2), this.setCurrentTime(e2);
            }
            addTimeToDate(e2) {
              e2 && (e2.setHours(this.hours), e2.setMinutes(this.minutes));
            }
            setMinMaxTime(e2) {
              if (this.setMinMaxTimeFromOptions(), e2) {
                let { minDate: t2, maxDate: i2 } = this.dp;
                t2 && p(e2, t2) && this.setMinTimeFromMinDate(t2), i2 && p(e2, i2) && this.setMaxTimeFromMaxDate(i2);
              }
            }
            setCurrentTime(e2) {
              let { hours: t2, minutes: i2 } = e2 ? h(e2) : this;
              this.hours = f(t2, this.minHours, this.maxHours), this.minutes = f(i2, this.minMinutes, this.maxMinutes);
            }
            setMinMaxTimeFromOptions() {
              let { minHours: e2, minMinutes: t2, maxHours: i2, maxMinutes: s2 } = this.opts;
              this.minHours = f(e2, 0, 23), this.minMinutes = f(t2, 0, 59), this.maxHours = f(i2, 0, 23), this.maxMinutes = f(s2, 0, 59);
            }
            setMinTimeFromMinDate(e2) {
              let { lastSelectedDate: t2 } = this.dp;
              this.minHours = e2.getHours(), t2 && t2.getHours() > e2.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e2.getMinutes();
            }
            setMaxTimeFromMaxDate(e2) {
              let { lastSelectedDate: t2 } = this.dp;
              this.maxHours = e2.getHours(), t2 && t2.getHours() < e2.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e2.getMinutes();
            }
            updateSliders() {
              r(this.$hours, { min: this.minHours, max: this.maxHours }).value = this.hours, r(this.$minutes, { min: this.minMinutes, max: this.maxMinutes }).value = this.minutes;
            }
            updateText() {
              this.$hoursText.innerHTML = d(this.displayHours), this.$minutesText.innerHTML = d(this.minutes), this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
            }
            set hours(e2) {
              this._hours = e2;
              let { hours: t2, dayPeriod: i2 } = l(e2);
              this.displayHours = this.ampm ? t2 : e2, this.dayPeriod = i2;
            }
            get hours() {
              return this._hours;
            }
            render() {
              this.updateSliders(), this.updateText();
            }
          }
          function O(e2, t2, i2) {
            return (t2 = function(e3) {
              var t3 = function(e4, t4) {
                if ("object" != typeof e4 || null === e4)
                  return e4;
                var i3 = e4[Symbol.toPrimitive];
                if (void 0 !== i3) {
                  var s2 = i3.call(e4, "string");
                  if ("object" != typeof s2)
                    return s2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e4);
              }(e3);
              return "symbol" == typeof t3 ? t3 : String(t3);
            }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
          }
          class A {
            constructor(e2) {
              let { dp: t2, opts: i2 } = e2;
              O(this, "pressedKeys", /* @__PURE__ */ new Set()), O(this, "hotKeys", /* @__PURE__ */ new Map([[[["Control", "ArrowRight"], ["Control", "ArrowUp"]], (e3) => e3.month++], [[["Control", "ArrowLeft"], ["Control", "ArrowDown"]], (e3) => e3.month--], [[["Shift", "ArrowRight"], ["Shift", "ArrowUp"]], (e3) => e3.year++], [[["Shift", "ArrowLeft"], ["Shift", "ArrowDown"]], (e3) => e3.year--], [[["Alt", "ArrowRight"], ["Alt", "ArrowUp"]], (e3) => e3.year += 10], [[["Alt", "ArrowLeft"], ["Alt", "ArrowDown"]], (e3) => e3.year -= 10], [["Control", "Shift", "ArrowUp"], (e3, t3) => t3.up()]])), O(this, "handleHotKey", (e3) => {
                let t3 = this.hotKeys.get(e3), i3 = h(this.getInitialFocusDate());
                t3(i3, this.dp);
                let { year: s2, month: a2, date: n2 } = i3, r2 = o(new Date(s2, a2));
                r2 < n2 && (n2 = r2);
                let l2 = this.dp.getClampedDate(new Date(s2, a2, n2));
                this.dp.setFocusDate(l2, { viewDateTransition: true });
              }), O(this, "isHotKeyPressed", () => {
                let e3 = false, t3 = this.pressedKeys.size, i3 = (e4) => this.pressedKeys.has(e4);
                for (let [s2] of this.hotKeys) {
                  if (e3)
                    break;
                  if (Array.isArray(s2[0]))
                    s2.forEach((a2) => {
                      e3 || t3 !== a2.length || (e3 = a2.every(i3) && s2);
                    });
                  else {
                    if (t3 !== s2.length)
                      continue;
                    e3 = s2.every(i3) && s2;
                  }
                }
                return e3;
              }), O(this, "isArrow", (e3) => e3 >= 37 && e3 <= 40), O(this, "onKeyDown", (e3) => {
                let { key: t3, which: i3 } = e3, { dp: s2, dp: { focusDate: a2 }, opts: n2 } = this;
                this.registerKey(t3);
                let r2 = this.isHotKeyPressed();
                if (r2)
                  return e3.preventDefault(), void this.handleHotKey(r2);
                if (this.isArrow(i3))
                  return e3.preventDefault(), void this.focusNextCell(t3);
                if ("Enter" === t3) {
                  if (s2.currentView !== n2.minView)
                    return void s2.down();
                  if (a2) {
                    let e4 = s2._checkIfDateIsSelected(a2);
                    return void (e4 ? s2._handleAlreadySelectedDates(e4, a2) : s2.selectDate(a2));
                  }
                }
                "Escape" === t3 && this.dp.hide();
              }), O(this, "onKeyUp", (e3) => {
                this.removeKey(e3.key);
              }), this.dp = t2, this.opts = i2, this.init();
            }
            init() {
              this.bindKeyboardEvents();
            }
            bindKeyboardEvents() {
              let { $el: e2 } = this.dp;
              e2.addEventListener("keydown", this.onKeyDown), e2.addEventListener("keyup", this.onKeyUp);
            }
            destroy() {
              let { $el: e2 } = this.dp;
              e2.removeEventListener("keydown", this.onKeyDown), e2.removeEventListener("keyup", this.onKeyUp), this.hotKeys = null, this.pressedKeys = null;
            }
            getInitialFocusDate() {
              let { focusDate: e2, currentView: t2, selectedDates: s2, parsedViewDate: { year: a2, month: n2 } } = this.dp, r2 = e2 || s2[s2.length - 1];
              if (!r2)
                switch (t2) {
                  case i.days:
                    r2 = new Date(a2, n2, (/* @__PURE__ */ new Date()).getDate());
                    break;
                  case i.months:
                    r2 = new Date(a2, n2, 1);
                    break;
                  case i.years:
                    r2 = new Date(a2, 0, 1);
                }
              return r2;
            }
            focusNextCell(e2) {
              let t2 = this.getInitialFocusDate(), { currentView: s2 } = this.dp, { days: a2, months: n2, years: r2 } = i, o2 = h(t2), l2 = o2.year, d2 = o2.month, c2 = o2.date;
              switch (e2) {
                case "ArrowLeft":
                  s2 === a2 && (c2 -= 1), s2 === n2 && (d2 -= 1), s2 === r2 && (l2 -= 1);
                  break;
                case "ArrowUp":
                  s2 === a2 && (c2 -= 7), s2 === n2 && (d2 -= 3), s2 === r2 && (l2 -= 4);
                  break;
                case "ArrowRight":
                  s2 === a2 && (c2 += 1), s2 === n2 && (d2 += 1), s2 === r2 && (l2 += 1);
                  break;
                case "ArrowDown":
                  s2 === a2 && (c2 += 7), s2 === n2 && (d2 += 3), s2 === r2 && (l2 += 4);
              }
              let u2 = this.dp.getClampedDate(new Date(l2, d2, c2));
              this.dp.setFocusDate(u2, { viewDateTransition: true });
            }
            registerKey(e2) {
              this.pressedKeys.add(e2);
            }
            removeKey(e2) {
              this.pressedKeys.delete(e2);
            }
          }
          let N = { on(e2, t2) {
            this.__events || (this.__events = {}), this.__events[e2] ? this.__events[e2].push(t2) : this.__events[e2] = [t2];
          }, off(e2, t2) {
            this.__events && this.__events[e2] && (this.__events[e2] = this.__events[e2].filter((e3) => e3 !== t2));
          }, removeAllEvents() {
            this.__events = {};
          }, trigger(e2) {
            for (var t2 = arguments.length, i2 = new Array(t2 > 1 ? t2 - 1 : 0), s2 = 1; s2 < t2; s2++)
              i2[s2 - 1] = arguments[s2];
            this.__events && this.__events[e2] && this.__events[e2].forEach((e3) => {
              e3(...i2);
            });
          } };
          function I(e2, t2, i2) {
            return (t2 = function(e3) {
              var t3 = function(e4, t4) {
                if ("object" != typeof e4 || null === e4)
                  return e4;
                var i3 = e4[Symbol.toPrimitive];
                if (void 0 !== i3) {
                  var s2 = i3.call(e4, "string");
                  if ("object" != typeof s2)
                    return s2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e4);
              }(e3);
              return "symbol" == typeof t3 ? t3 : String(t3);
            }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
          }
          let P = "", j = "", B = false;
          class R {
            static buildGlobalContainer(e2) {
              B = true, P = n({ className: e2, id: e2 }), a("body").appendChild(P);
            }
            constructor(e2, t2) {
              var r2 = this;
              if (I(this, "viewIndexes", [i.days, i.months, i.years]), I(this, "next", () => {
                let { year: e3, month: t3 } = this.parsedViewDate;
                switch (this.currentView) {
                  case i.days:
                    this.setViewDate(new Date(e3, t3 + 1, 1));
                    break;
                  case i.months:
                    this.setViewDate(new Date(e3 + 1, t3, 1));
                    break;
                  case i.years:
                    this.setViewDate(new Date(e3 + 10, 0, 1));
                }
              }), I(this, "prev", () => {
                let { year: e3, month: t3 } = this.parsedViewDate;
                switch (this.currentView) {
                  case i.days:
                    this.setViewDate(new Date(e3, t3 - 1, 1));
                    break;
                  case i.months:
                    this.setViewDate(new Date(e3 - 1, t3, 1));
                    break;
                  case i.years:
                    this.setViewDate(new Date(e3 - 10, 0, 1));
                }
              }), I(this, "_finishHide", () => {
                this.hideAnimation = false, this._destroyComponents(), this.$container.removeChild(this.$datepicker);
              }), I(this, "setPosition", function(e3) {
                let t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if ("function" == typeof (e3 = e3 || r2.opts.position))
                  return void (r2.customHide = e3({ $datepicker: r2.$datepicker, $target: r2.$el, $pointer: r2.$pointer, isViewChange: t3, done: r2._finishHide }));
                let i2, s2, { isMobile: a2 } = r2.opts, n2 = r2.$el.getBoundingClientRect(), o3 = r2.$el.getBoundingClientRect(), h2 = r2.$datepicker.offsetParent, l3 = r2.$el.offsetParent, d2 = r2.$datepicker.getBoundingClientRect(), c2 = e3.split(" "), u2 = window.scrollY, p2 = window.scrollX, m2 = r2.opts.offset, v2 = c2[0], g2 = c2[1];
                if (a2)
                  r2.$datepicker.style.cssText = "left: 50%; top: 50%";
                else {
                  if (h2 === l3 && h2 !== document.body && (o3 = { top: r2.$el.offsetTop, left: r2.$el.offsetLeft, width: n2.width, height: r2.$el.offsetHeight }, u2 = 0, p2 = 0), h2 !== l3 && h2 !== document.body) {
                    let e4 = h2.getBoundingClientRect();
                    o3 = { top: n2.top - e4.top, left: n2.left - e4.left, width: n2.width, height: n2.height }, u2 = 0, p2 = 0;
                  }
                  switch (v2) {
                    case "top":
                      i2 = o3.top - d2.height - m2;
                      break;
                    case "right":
                      s2 = o3.left + o3.width + m2;
                      break;
                    case "bottom":
                      i2 = o3.top + o3.height + m2;
                      break;
                    case "left":
                      s2 = o3.left - d2.width - m2;
                  }
                  switch (g2) {
                    case "top":
                      i2 = o3.top;
                      break;
                    case "right":
                      s2 = o3.left + o3.width - d2.width;
                      break;
                    case "bottom":
                      i2 = o3.top + o3.height - d2.height;
                      break;
                    case "left":
                      s2 = o3.left;
                      break;
                    case "center":
                      /left|right/.test(v2) ? i2 = o3.top + o3.height / 2 - d2.height / 2 : s2 = o3.left + o3.width / 2 - d2.width / 2;
                  }
                  r2.$datepicker.style.cssText = `left: ${s2 + p2}px; top: ${i2 + u2}px`;
                }
              }), I(this, "_setInputValue", () => {
                let { opts: e3, $altField: t3, locale: { dateFormat: i2 } } = this, { altFieldDateFormat: s2, altField: a2 } = e3;
                a2 && t3 && (t3.value = this._getInputValue(s2)), this.$el.value = this._getInputValue(i2);
              }), I(this, "_getInputValue", (e3) => {
                let { selectedDates: t3, opts: i2 } = this, { multipleDates: s2, multipleDatesSeparator: a2 } = i2;
                if (!t3.length)
                  return "";
                let n2 = "function" == typeof e3, r3 = n2 ? e3(s2 ? t3 : t3[0]) : t3.map((t4) => this.formatDate(t4, e3));
                return r3 = n2 ? r3 : r3.join(a2), r3;
              }), I(this, "_checkIfDateIsSelected", function(e3) {
                let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.days, s2 = false;
                return r2.selectedDates.some((i2) => {
                  let a2 = p(e3, i2, t3);
                  return s2 = a2 && i2, a2;
                }), s2;
              }), I(this, "_scheduleCallAfterTransition", (e3) => {
                this._cancelScheduledCall(), e3 && e3(false), this._onTransitionEnd = () => {
                  e3 && e3(true);
                }, this.$datepicker.addEventListener("transitionend", this._onTransitionEnd, { once: true });
              }), I(this, "_cancelScheduledCall", () => {
                this.$datepicker.removeEventListener("transitionend", this._onTransitionEnd);
              }), I(this, "setViewDate", (e3) => {
                if (!((e3 = b(e3)) instanceof Date))
                  return;
                if (p(e3, this.viewDate))
                  return;
                let t3 = this.viewDate;
                this.viewDate = e3;
                let { onChangeViewDate: s2 } = this.opts;
                if (s2) {
                  let { month: e4, year: t4 } = this.parsedViewDate;
                  s2({ month: e4, year: t4, decade: this.curDecade });
                }
                this.trigger(i.eventChangeViewDate, e3, t3);
              }), I(this, "setFocusDate", function(e3) {
                let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (!e3 || (e3 = b(e3)) instanceof Date) && (r2.focusDate = e3, r2.trigger(i.eventChangeFocusDate, e3, t3));
              }), I(this, "setCurrentView", function(e3) {
                let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (r2.viewIndexes.includes(e3)) {
                  if (r2.currentView = e3, r2.elIsInput && r2.visible && r2.setPosition(void 0, true), r2.trigger(i.eventChangeCurrentView, e3), !r2.views[e3]) {
                    let t4 = r2.views[e3] = new T({ dp: r2, opts: r2.opts, type: e3 });
                    r2.shouldUpdateDOM && r2.$content.appendChild(t4.$el);
                  }
                  r2.opts.onChangeView && !t3.silent && r2.opts.onChangeView(e3);
                }
              }), I(this, "_updateLastSelectedDate", (e3) => {
                this.lastSelectedDate = e3, this.trigger(i.eventChangeLastSelectedDate, e3);
              }), I(this, "destroy", () => {
                if (this.isDestroyed)
                  return;
                let { showEvent: e3, isMobile: t3 } = this.opts, i2 = this.$datepicker.parentNode;
                i2 && i2.removeChild(this.$datepicker), this.$el.removeEventListener(e3, this._onFocus), this.$el.removeEventListener("blur", this._onBlur), window.removeEventListener("resize", this._onResize), t3 && this._removeMobileAttributes(), this.keyboardNav && this.keyboardNav.destroy(), this.views = null, this.nav = null, this.$datepicker = null, this.opts = {}, this.$customContainer = null, this.viewDate = null, this.focusDate = null, this.selectedDates = [], this.rangeDateFrom = null, this.rangeDateTo = null, this.isDestroyed = true;
              }), I(this, "update", function() {
                let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s2 = w({}, r2.opts), { silent: a2 } = t3;
                w(r2.opts, e3);
                let { timepicker: n2, buttons: o3, range: h2, selectedDates: l3, isMobile: d2 } = r2.opts, c2 = r2.visible || r2.treatAsInline;
                r2._createMinMaxDates(), r2._limitViewDateByMaxMinDates(), r2._handleLocale(), l3 && (r2.selectedDates = [], r2.selectDate(l3, { silent: a2 })), e3.view && r2.setCurrentView(e3.view, { silent: a2 }), r2._setInputValue(), s2.range && !h2 ? (r2.rangeDateTo = false, r2.rangeDateFrom = false) : !s2.range && h2 && r2.selectedDates.length && (r2.rangeDateFrom = r2.selectedDates[0], r2.rangeDateTo = r2.selectedDates[1]), s2.timepicker && !n2 ? (c2 && r2.timepicker.destroy(), r2.timepicker = false, r2.$timepicker.parentNode.removeChild(r2.$timepicker)) : !s2.timepicker && n2 && r2._addTimepicker(), !s2.buttons && o3 ? r2._addButtons() : s2.buttons && !o3 ? (r2.buttons.destroy(), r2.$buttons.parentNode.removeChild(r2.$buttons)) : c2 && s2.buttons && o3 && r2.buttons.clearHtml().render(), !s2.isMobile && d2 ? (r2.treatAsInline || j || r2._createMobileOverlay(), r2._addMobileAttributes(), r2.visible && r2._showMobileOverlay()) : s2.isMobile && !d2 && (r2._removeMobileAttributes(), r2.visible && (j.classList.remove("-active-"), "function" != typeof r2.opts.position && r2.setPosition())), c2 && (r2.nav.update(), r2.views[r2.currentView].render(), r2.currentView === i.days && r2.views[r2.currentView].renderDayNames());
              }), I(this, "disableDate", (e3, t3) => {
                (Array.isArray(e3) ? e3 : [e3]).forEach((e4) => {
                  let i2 = b(e4);
                  if (!i2)
                    return;
                  let s2 = t3 ? "delete" : "add";
                  this.disabledDates[s2](this.formatDate(i2, "yyyy-MM-dd"));
                  let a2 = this.getCell(i2, this.currentViewSingular);
                  a2 && a2.adpCell.render();
                }, []);
              }), I(this, "enableDate", (e3) => {
                this.disableDate(e3, true);
              }), I(this, "isDateDisabled", (e3) => {
                let t3 = b(e3);
                return this.disabledDates.has(this.formatDate(t3, "yyyy-MM-dd"));
              }), I(this, "isOtherMonth", (e3) => {
                let { month: t3 } = h(e3);
                return t3 !== this.parsedViewDate.month;
              }), I(this, "isOtherYear", (e3) => {
                let { year: t3 } = h(e3);
                return t3 !== this.parsedViewDate.year;
              }), I(this, "isOtherDecade", (e3) => {
                let { year: t3 } = h(e3), [i2, s2] = c(this.viewDate);
                return t3 < i2 || t3 > s2;
              }), I(this, "_onChangeSelectedDate", (e3) => {
                let { silent: t3 } = e3;
                setTimeout(() => {
                  this._setInputValue(), this.opts.onSelect && !t3 && this._triggerOnSelect();
                });
              }), I(this, "_onChangeFocusedDate", function(e3) {
                let { viewDateTransition: t3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e3)
                  return;
                let i2 = false;
                t3 && (i2 = r2.isOtherMonth(e3) || r2.isOtherYear(e3) || r2.isOtherDecade(e3)), i2 && r2.setViewDate(e3), r2.opts.onFocus && r2.opts.onFocus({ datepicker: r2, date: e3 });
              }), I(this, "_onChangeTime", (e3) => {
                let { hours: t3, minutes: i2 } = e3, s2 = /* @__PURE__ */ new Date(), { lastSelectedDate: a2, opts: { onSelect: n2 } } = this, r3 = a2;
                a2 || (r3 = s2);
                let o3 = this.getCell(r3, this.currentViewSingular), h2 = o3 && o3.adpCell;
                h2 && h2.isDisabled || (r3.setHours(t3), r3.setMinutes(i2), a2 ? (this._setInputValue(), n2 && this._triggerOnSelect()) : this.selectDate(r3));
              }), I(this, "_onFocus", (e3) => {
                this.visible || this.show();
              }), I(this, "_onBlur", (e3) => {
                this.inFocus || !this.visible || this.opts.isMobile || this.hide();
              }), I(this, "_onMouseDown", (e3) => {
                this.inFocus = true;
              }), I(this, "_onMouseUp", (e3) => {
                this.inFocus = false, this.$el.focus();
              }), I(this, "_onResize", () => {
                this.visible && "function" != typeof this.opts.position && this.setPosition();
              }), I(this, "_onClickOverlay", () => {
                this.visible && this.hide();
              }), I(this, "getViewDates", function() {
                let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
                return T.getDatesFunction(e3)(r2);
              }), I(this, "isWeekend", (e3) => this.opts.weekends.includes(e3)), I(this, "getClampedDate", (e3) => {
                let { minDate: t3, maxDate: i2 } = this, s2 = e3;
                return i2 && m(e3, i2) ? s2 = i2 : t3 && v(e3, t3) && (s2 = t3), s2;
              }), this.$el = a(e2), !this.$el)
                return;
              this.$datepicker = n({ className: "air-datepicker" }), this.opts = w({}, s, t2), this.$customContainer = !!this.opts.container && a(this.opts.container), this.$altField = a(this.opts.altField || false);
              let { view: o2, startDate: l2 } = this.opts;
              l2 || (this.opts.startDate = /* @__PURE__ */ new Date()), "INPUT" === this.$el.nodeName && (this.elIsInput = true), this.inited = false, this.visible = false, this.viewDate = b(this.opts.startDate), this.focusDate = false, this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = false, this.currentView = o2, this.selectedDates = [], this.disabledDates = /* @__PURE__ */ new Set(), this.isDestroyed = false, this.views = {}, this.keys = [], this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = false, this.treatAsInline = this.opts.inline || !this.elIsInput, this.init();
            }
            init() {
              let { opts: e2, treatAsInline: t2, opts: { inline: i2, isMobile: s2, selectedDates: n2, keyboardNav: r2, onlyTimepicker: o2 } } = this, h2 = a("body");
              (!B || B && P && !h2.contains(P)) && !i2 && this.elIsInput && !this.$customContainer && R.buildGlobalContainer(R.defaultGlobalContainerId), !s2 || j || t2 || this._createMobileOverlay(), this._handleLocale(), this._bindSubEvents(), this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this.elIsInput && (i2 || this._bindEvents(), r2 && !o2 && (this.keyboardNav = new A({ dp: this, opts: e2 }))), n2 && this.selectDate(n2, { silent: true }), this.opts.visible && !t2 && this.show(), s2 && !t2 && this.$el.setAttribute("readonly", true), t2 && this._createComponents();
            }
            _createMobileOverlay() {
              j = n({ className: "air-datepicker-overlay" }), P.appendChild(j);
            }
            _createComponents() {
              let { opts: e2, treatAsInline: t2, opts: { inline: i2, buttons: s2, timepicker: a2, position: n2, classes: r2, onlyTimepicker: o2, isMobile: h2 } } = this;
              this._buildBaseHtml(), this.elIsInput && (i2 || this._setPositionClasses(n2)), !i2 && this.elIsInput || this.$datepicker.classList.add("-inline-"), r2 && this.$datepicker.classList.add(...r2.split(" ")), o2 && this.$datepicker.classList.add("-only-timepicker-"), h2 && !t2 && this._addMobileAttributes(), this.views[this.currentView] = new T({ dp: this, type: this.currentView, opts: e2 }), this.nav = new V({ dp: this, opts: e2 }), a2 && this._addTimepicker(), s2 && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), this.$nav.appendChild(this.nav.$el);
            }
            _destroyComponents() {
              for (let e2 in this.views)
                this.views[e2].destroy();
              this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
            }
            _addMobileAttributes() {
              j.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), this.$el.setAttribute("readonly", true);
            }
            _removeMobileAttributes() {
              j.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), this.initialReadonly || "" === this.initialReadonly || this.$el.removeAttribute("readonly");
            }
            _createMinMaxDates() {
              let { minDate: e2, maxDate: t2 } = this.opts;
              this.minDate = !!e2 && b(e2), this.maxDate = !!t2 && b(t2);
            }
            _addTimepicker() {
              this.$timepicker = n({ className: "air-datepicker--time" }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new L({ dp: this, opts: this.opts }), this.$timepicker.appendChild(this.timepicker.$el);
            }
            _addButtons() {
              this.$buttons = n({ className: "air-datepicker--buttons" }), this.$datepicker.appendChild(this.$buttons), this.buttons = new H({ dp: this, opts: this.opts }), this.$buttons.appendChild(this.buttons.$el);
            }
            _bindSubEvents() {
              this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(i.eventChangeFocusDate, this._onChangeFocusedDate), this.on(i.eventChangeTime, this._onChangeTime);
            }
            _buildBaseHtml() {
              let { inline: e2 } = this.opts;
              var t2, i2;
              this.elIsInput ? e2 ? (t2 = this.$datepicker, (i2 = this.$el).parentNode.insertBefore(t2, i2.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', this.$content = a(".air-datepicker--content", this.$datepicker), this.$pointer = a(".air-datepicker--pointer", this.$datepicker), this.$nav = a(".air-datepicker--navigation", this.$datepicker);
            }
            _handleLocale() {
              let { locale: e2, dateFormat: t2, firstDay: i2, timepicker: s2, onlyTimepicker: a2, timeFormat: n2, dateTimeSeparator: r2 } = this.opts;
              var o2;
              this.locale = (o2 = e2, JSON.parse(JSON.stringify(o2))), t2 && (this.locale.dateFormat = t2), void 0 !== n2 && "" !== n2 && (this.locale.timeFormat = n2);
              let { timeFormat: h2 } = this.locale;
              if ("" !== i2 && (this.locale.firstDay = i2), s2 && "function" != typeof t2) {
                let e3 = h2 ? r2 : "";
                this.locale.dateFormat = [this.locale.dateFormat, h2 || ""].join(e3);
              }
              a2 && "function" != typeof t2 && (this.locale.dateFormat = this.locale.timeFormat);
            }
            _setPositionClasses(e2) {
              if ("function" == typeof e2)
                return void this.$datepicker.classList.add("-custom-position-");
              let t2 = (e2 = e2.split(" "))[0], i2 = `air-datepicker -${t2}-${e2[1]}- -from-${t2}-`;
              this.$datepicker.classList.add(...i2.split(" "));
            }
            _bindEvents() {
              this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp), window.addEventListener("resize", this._onResize);
            }
            _limitViewDateByMaxMinDates() {
              let { viewDate: e2, minDate: t2, maxDate: i2 } = this;
              i2 && m(e2, i2) && this.setViewDate(i2), t2 && v(e2, t2) && this.setViewDate(t2);
            }
            formatDate() {
              let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate, t2 = arguments.length > 1 ? arguments[1] : void 0;
              if (e2 = b(e2), !(e2 instanceof Date))
                return;
              let i2 = t2, s2 = this.locale, a2 = h(e2), n2 = a2.dayPeriod, r2 = c(e2), o2 = R.replacer, l2 = { T: e2.getTime(), m: a2.minutes, mm: a2.fullMinutes, h: a2.hours12, hh: a2.fullHours12, H: a2.hours, HH: a2.fullHours, aa: n2, AA: n2.toUpperCase(), E: s2.daysShort[a2.day], EEEE: s2.days[a2.day], d: a2.date, dd: a2.fullDate, M: a2.month + 1, MM: a2.fullMonth, MMM: s2.monthsShort[a2.month], MMMM: s2.months[a2.month], yy: a2.year.toString().slice(-2), yyyy: a2.year, yyyy1: r2[0], yyyy2: r2[1] };
              for (let [e3, t3] of Object.entries(l2))
                i2 = o2(i2, k(e3), t3);
              return i2;
            }
            down(e2) {
              this._handleUpDownActions(e2, "down");
            }
            up(e2) {
              this._handleUpDownActions(e2, "up");
            }
            selectDate(e2) {
              let t2, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { currentView: a2, parsedViewDate: n2, selectedDates: r2 } = this, { updateTime: o2 } = s2, { moveToOtherMonthsOnSelect: h2, moveToOtherYearsOnSelect: l2, multipleDates: d2, range: c2, autoClose: u2, onBeforeSelect: p2 } = this.opts, v2 = r2.length;
              if (Array.isArray(e2))
                return e2.forEach((e3) => {
                  this.selectDate(e3, s2);
                }), new Promise((e3) => {
                  setTimeout(e3);
                });
              if ((e2 = b(e2)) instanceof Date) {
                if (p2 && !p2({ date: e2, datepicker: this }))
                  return Promise.resolve();
                if (a2 === i.days && e2.getMonth() !== n2.month && h2 && (t2 = new Date(e2.getFullYear(), e2.getMonth(), 1)), a2 === i.years && e2.getFullYear() !== n2.year && l2 && (t2 = new Date(e2.getFullYear(), 0, 1)), t2 && this.setViewDate(t2), d2 && !c2) {
                  if (v2 === d2)
                    return;
                  this._checkIfDateIsSelected(e2) || r2.push(e2);
                } else if (c2)
                  switch (v2) {
                    case 1:
                      r2.push(e2), this.rangeDateTo || (this.rangeDateTo = e2), m(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, this.rangeDateFrom = e2), this.selectedDates = [this.rangeDateFrom, this.rangeDateTo];
                      break;
                    case 2:
                      this.selectedDates = [e2], this.rangeDateFrom = e2, this.rangeDateTo = "";
                      break;
                    default:
                      this.selectedDates = [e2], this.rangeDateFrom = e2;
                  }
                else
                  this.selectedDates = [e2];
                return this.trigger(i.eventChangeSelectedDate, { action: i.actionSelectDate, silent: null == s2 ? void 0 : s2.silent, date: e2, updateTime: o2 }), this._updateLastSelectedDate(e2), u2 && !this.timepickerIsActive && this.visible && (d2 || c2 ? c2 && 1 === v2 && this.hide() : this.hide()), new Promise((e3) => {
                  setTimeout(e3);
                });
              }
            }
            unselectDate(e2) {
              let t2 = this.selectedDates, s2 = this;
              if ((e2 = b(e2)) instanceof Date)
                return t2.some((a2, n2) => {
                  if (p(a2, e2))
                    return t2.splice(n2, 1), s2.selectedDates.length ? (s2.rangeDateTo = "", s2.rangeDateFrom = t2[0], s2._updateLastSelectedDate(s2.selectedDates[s2.selectedDates.length - 1])) : (s2.rangeDateFrom = "", s2.rangeDateTo = "", s2._updateLastSelectedDate(false)), this.trigger(i.eventChangeSelectedDate, { action: i.actionUnselectDate, date: e2 }), true;
                });
            }
            replaceDate(e2, t2) {
              let s2 = this.selectedDates.find((t3) => p(t3, e2, this.currentView)), a2 = this.selectedDates.indexOf(s2);
              a2 < 0 || p(this.selectedDates[a2], t2, this.currentView) || (this.selectedDates[a2] = t2, this.trigger(i.eventChangeSelectedDate, { action: i.actionSelectDate, date: t2, updateTime: true }), this._updateLastSelectedDate(t2));
            }
            clear() {
              let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return this.selectedDates = [], this.rangeDateFrom = false, this.rangeDateTo = false, this.lastSelectedDate = false, this.trigger(i.eventChangeSelectedDate, { action: i.actionUnselectDate, silent: e2.silent }), new Promise((e3) => {
                setTimeout(e3);
              });
            }
            show() {
              let { onShow: e2, isMobile: t2 } = this.opts;
              this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), this.visible = true, e2 && this._scheduleCallAfterTransition(e2), t2 && this._showMobileOverlay();
            }
            hide() {
              let { onHide: e2, isMobile: t2 } = this.opts, i2 = this._hasTransition();
              this.visible = false, this.hideAnimation = true, this.$datepicker.classList.remove("-active-"), this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition((t3) => {
                !this.customHide && (t3 && i2 || !t3 && !i2) && this._finishHide(), e2 && e2(t3);
              }), t2 && j.classList.remove("-active-");
            }
            _triggerOnSelect() {
              let e2 = [], t2 = [], { selectedDates: i2, locale: s2, opts: { onSelect: a2, multipleDates: n2, range: r2 } } = this, o2 = n2 || r2, h2 = "function" == typeof s2.dateFormat;
              i2.length && (e2 = i2.map(g), t2 = h2 ? n2 ? s2.dateFormat(e2) : e2.map((e3) => s2.dateFormat(e3)) : e2.map((e3) => this.formatDate(e3, s2.dateFormat))), a2({ date: o2 ? e2 : e2[0], formattedDate: o2 ? t2 : t2[0], datepicker: this });
            }
            _handleAlreadySelectedDates(e2, t2) {
              let { selectedDates: i2, rangeDateFrom: s2, rangeDateTo: a2 } = this, { range: n2, toggleSelected: r2 } = this.opts, o2 = i2.length, h2 = "function" == typeof r2 ? r2({ datepicker: this, date: t2 }) : r2, l2 = Boolean(n2 && 1 === o2 && e2), d2 = l2 ? g(t2) : t2;
              n2 && !h2 && (2 !== o2 && this.selectDate(d2), 2 === o2 && p(s2, a2)) || (h2 ? this.unselectDate(d2) : this._updateLastSelectedDate(l2 ? d2 : e2));
            }
            _handleUpDownActions(e2, t2) {
              if (!((e2 = b(e2 || this.focusDate || this.viewDate)) instanceof Date))
                return;
              let i2 = "up" === t2 ? this.viewIndex + 1 : this.viewIndex - 1;
              i2 > 2 && (i2 = 2), i2 < 0 && (i2 = 0), this.setViewDate(new Date(e2.getFullYear(), e2.getMonth(), 1)), this.setCurrentView(this.viewIndexes[i2]);
            }
            getCell(e2) {
              let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.day;
              if (!((e2 = b(e2)) instanceof Date))
                return;
              let { year: s2, month: a2, date: n2 } = h(e2), r2 = `[data-year="${s2}"]`, o2 = `[data-month="${a2}"]`, l2 = { [i.day]: `${r2}${o2}[data-date="${n2}"]`, [i.month]: `${r2}${o2}`, [i.year]: `${r2}` };
              return this.views[this.currentView] ? this.views[this.currentView].$el.querySelector(l2[t2]) : void 0;
            }
            _showMobileOverlay() {
              j.classList.add("-active-");
            }
            _hasTransition() {
              return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce((e2, t2) => parseFloat(t2) + e2, 0) > 0;
            }
            get shouldUpdateDOM() {
              return this.visible || this.treatAsInline;
            }
            get parsedViewDate() {
              return h(this.viewDate);
            }
            get currentViewSingular() {
              return this.currentView.slice(0, -1);
            }
            get curDecade() {
              return c(this.viewDate);
            }
            get viewIndex() {
              return this.viewIndexes.indexOf(this.currentView);
            }
            get isFinalView() {
              return this.currentView === i.years;
            }
            get hasSelectedDates() {
              return this.selectedDates.length > 0;
            }
            get isMinViewReached() {
              return this.currentView === this.opts.minView || this.currentView === i.days;
            }
            get $container() {
              return this.$customContainer || P;
            }
            static replacer(e2, t2, i2) {
              return e2.replace(t2, function(e3, t3, s2, a2) {
                return t3 + i2 + a2;
              });
            }
          }
          var K;
          return I(R, "defaults", s), I(R, "version", "3.5.3"), I(R, "defaultGlobalContainerId", "air-datepicker-global-container"), K = R.prototype, Object.assign(K, N), t.default;
        }();
      });
    }
  });

  // src/index.js
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/swiper.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/shared/swiper-core.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/shared/ssr-window.esm.mjs
  init_live_reload();
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    const noExtend = ["__proto__", "constructor", "prototype"];
    Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
      if (typeof target[key] === "undefined")
        target[key] = src[key];
      else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/shared/utils.mjs
  init_live_reload();
  function classesToTokens(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return classes2.trim().split(" ").filter((c) => !!c.trim());
  }
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e) {
      }
      try {
        delete object[key];
      } catch (e) {
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle2(el) {
    const window2 = getWindow();
    let style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = "x";
    }
    const window2 = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle2(el);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m41;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[12]);
      else
        curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m42;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[13]);
      else
        curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject2(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
  }
  function isNode(node) {
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend2() {
    const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
    const noExtend = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
      const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    let {
      swiper,
      targetPosition,
      side
    } = _ref;
    const window2 = getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window2.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = () => {
      time = (/* @__PURE__ */ new Date()).getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = "";
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition
          });
        });
        window2.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
    };
    animate();
  }
  function elementChildren(element, selector) {
    if (selector === void 0) {
      selector = "";
    }
    const window2 = getWindow();
    const children = [...element.children];
    if (window2.HTMLSlotElement && element instanceof HTMLSlotElement) {
      children.push(...element.assignedElements());
    }
    if (!selector) {
      return children;
    }
    return children.filter((el) => el.matches(selector));
  }
  function elementIsChildOfSlot(el, slot) {
    const elementsQueue = [slot];
    while (elementsQueue.length > 0) {
      const elementToCheck = elementsQueue.shift();
      if (el === elementToCheck) {
        return true;
      }
      elementsQueue.push(...elementToCheck.children, ...elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : [], ...elementToCheck.assignedElements ? elementToCheck.assignedElements() : []);
    }
  }
  function elementIsChildOf(el, parent) {
    const window2 = getWindow();
    let isChild = parent.contains(el);
    if (!isChild && window2.HTMLSlotElement && parent instanceof HTMLSlotElement) {
      const children = [...parent.assignedElements()];
      isChild = children.includes(el);
      if (!isChild) {
        isChild = elementIsChildOfSlot(el, parent);
      }
    }
    return isChild;
  }
  function showWarning(text) {
    try {
      console.warn(text);
      return;
    } catch (err) {
    }
  }
  function createElement(tag, classes2) {
    if (classes2 === void 0) {
      classes2 = [];
    }
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
    return el;
  }
  function elementOffset(el) {
    const window2 = getWindow();
    const document2 = getDocument();
    const box = el.getBoundingClientRect();
    const body = document2.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
    const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }
  function elementPrevAll(el, selector) {
    const prevEls = [];
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling;
      if (selector) {
        if (prev.matches(selector))
          prevEls.push(prev);
      } else
        prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector) {
    const nextEls = [];
    while (el.nextElementSibling) {
      const next = el.nextElementSibling;
      if (selector) {
        if (next.matches(selector))
          nextEls.push(next);
      } else
        nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    const window2 = getWindow();
    return window2.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    let child = el;
    let i;
    if (child) {
      i = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1)
          i += 1;
      }
      return i;
    }
    return void 0;
  }
  function elementParents(el, selector) {
    const parents = [];
    let parent = el.parentElement;
    while (parent) {
      if (selector) {
        if (parent.matches(selector))
          parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentElement;
    }
    return parents;
  }
  function elementOuterSize(el, size, includeMargins) {
    const window2 = getWindow();
    if (includeMargins) {
      return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    }
    return el.offsetWidth;
  }
  function makeElementsArray(el) {
    return (Array.isArray(el) ? el : [el]).filter((e) => !!e);
  }

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/shared/swiper-core.mjs
  var support;
  function calcSupport() {
    const window2 = getWindow();
    const document2 = getDocument();
    return {
      smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  var deviceCached;
  function calcDevice(_temp) {
    let {
      userAgent
    } = _temp === void 0 ? {} : _temp;
    const support2 = getSupport();
    const window2 = getWindow();
    const platform = window2.navigator.platform;
    const ua = userAgent || window2.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window2.screen.width;
    const screenHeight = window2.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad)
        ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  var browser;
  function calcBrowser() {
    const window2 = getWindow();
    const device = getDevice();
    let needPerspectiveFix = false;
    function isSafari() {
      const ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari()) {
      const ua = String(window2.navigator.userAgent);
      if (ua.includes("Version/")) {
        const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
      }
    }
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
    const isSafariBrowser = isSafari();
    const need3dFix = isSafariBrowser || isWebView && device.ios;
    return {
      isSafari: needPerspectiveFix || isSafariBrowser,
      needPerspectiveFix,
      need3dFix,
      isWebView
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize(_ref) {
    let {
      swiper,
      on,
      emit
    } = _ref;
    const window2 = getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      observer = new ResizeObserver((entries) => {
        animationFrame = window2.requestAnimationFrame(() => {
          const {
            width,
            height
          } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach((_ref2) => {
            let {
              contentBoxSize,
              contentRect,
              target
            } = _ref2;
            if (target && target !== swiper.el)
              return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window2.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      emit("orientationchange");
    };
    on("init", () => {
      if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
        createObserver();
        return;
      }
      window2.addEventListener("resize", resizeHandler);
      window2.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", () => {
      removeObserver();
      window2.removeEventListener("resize", resizeHandler);
      window2.removeEventListener("orientationchange", orientationChangeHandler);
    });
  }
  function Observer(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const observers = [];
    const window2 = getWindow();
    const attach = function(target, options) {
      if (options === void 0) {
        options = {};
      }
      const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      const observer = new ObserverFunc((mutations) => {
        if (swiper.__preventObserver__)
          return;
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate2() {
          emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      observers.push(observer);
    };
    const init = () => {
      if (!swiper.params.observer)
        return;
      if (swiper.params.observeParents) {
        const containerParents = elementParents(swiper.hostEl);
        for (let i = 0; i < containerParents.length; i += 1) {
          attach(containerParents[i]);
        }
      }
      attach(swiper.hostEl, {
        childList: swiper.params.observeSlideChildren
      });
      attach(swiper.wrapperEl, {
        attributes: false
      });
    };
    const destroy = () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on("init", init);
    on("destroy", destroy);
  }
  var eventsEmitter = {
    on(events2, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed)
        return self;
      if (typeof handler !== "function")
        return self;
      const method = priority ? "unshift" : "push";
      events2.split(" ").forEach((event2) => {
        if (!self.eventsListeners[event2])
          self.eventsListeners[event2] = [];
        self.eventsListeners[event2][method](handler);
      });
      return self;
    },
    once(events2, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed)
        return self;
      if (typeof handler !== "function")
        return self;
      function onceHandler() {
        self.off(events2, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self, args);
      }
      onceHandler.__emitterProxy = handler;
      return self.on(events2, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed)
        return self;
      if (typeof handler !== "function")
        return self;
      const method = priority ? "unshift" : "push";
      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }
      return self;
    },
    offAny(handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed)
        return self;
      if (!self.eventsAnyListeners)
        return self;
      const index = self.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self.eventsAnyListeners.splice(index, 1);
      }
      return self;
    },
    off(events2, handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed)
        return self;
      if (!self.eventsListeners)
        return self;
      events2.split(" ").forEach((event2) => {
        if (typeof handler === "undefined") {
          self.eventsListeners[event2] = [];
        } else if (self.eventsListeners[event2]) {
          self.eventsListeners[event2].forEach((eventHandler, index) => {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self.eventsListeners[event2].splice(index, 1);
            }
          });
        }
      });
      return self;
    },
    emit() {
      const self = this;
      if (!self.eventsListeners || self.destroyed)
        return self;
      if (!self.eventsListeners)
        return self;
      let events2;
      let data;
      let context;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events2 = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events2 = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }
      data.unshift(context);
      const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
      eventsArray.forEach((event2) => {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context, [event2, ...data]);
          });
        }
        if (self.eventsListeners && self.eventsListeners[event2]) {
          self.eventsListeners[event2].forEach((eventHandler) => {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    }
  };
  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = el.clientWidth;
    }
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = el.clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }
    width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
    height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width))
      width = 0;
    if (Number.isNaN(height))
      height = 0;
    Object.assign(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height
    });
  }
  function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const {
      wrapperEl,
      slidesEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize = -spaceBetween;
    slides.forEach((slideEl) => {
      if (rtl) {
        slideEl.style.marginLeft = "";
      } else {
        slideEl.style.marginRight = "";
      }
      slideEl.style.marginBottom = "";
      slideEl.style.marginTop = "";
    });
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slides);
    } else if (swiper.grid) {
      swiper.grid.unsetSlides();
    }
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
      return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for (let i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      let slide2;
      if (slides[i])
        slide2 = slides[i];
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide2, slides);
      }
      if (slides[i] && elementStyle(slide2, "display") === "none")
        continue;
      if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slides[i].style[swiper.getDirectionLabel("width")] = ``;
        }
        const slideStyles = getComputedStyle(slide2);
        const currentTransform = slide2.style.transform;
        const currentWebKitTransform = slide2.style.webkitTransform;
        if (currentTransform) {
          slide2.style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
        } else {
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth,
              offsetWidth
            } = slide2;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide2.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3)
          slidePosition = 0;
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (params.setWrapperSize) {
      wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid);
    }
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths)
          slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (isVirtual && params.loop) {
      const size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
        const groupSize = size * params.slidesPerGroup;
        for (let i = 0; i < groups; i += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper.virtualSize += size;
      }
    }
    if (snapGrid.length === 0)
      snapGrid = [0];
    if (spaceBetween !== 0) {
      const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
      slides.filter((_, slideIndex) => {
        if (!params.cssMode || params.loop)
          return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).forEach((slideEl) => {
        slideEl.style[key] = `${spaceBetween}px`;
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
      snapGrid = snapGrid.map((snap) => {
        if (snap <= 0)
          return -offsetBefore;
        if (snap > maxSnap)
          return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
      if (allSlidesSize + offsetSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
        snapGrid.forEach((snap, snapIndex) => {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach((snap, snapIndex) => {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow)
        swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    swiper.emit("slidesUpdated");
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
      const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
      const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded)
          swiper.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.el.classList.remove(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index) => {
      if (isVirtual) {
        return swiper.slides[swiper.getSlideIndexByData(index)];
      }
      return swiper.slides[index];
    };
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || []).forEach((slide2) => {
          activeSlides.push(slide2);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          const index = swiper.activeIndex + i;
          if (index > swiper.slides.length && !isVirtual)
            break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight || newHeight === 0)
      swiper.wrapperEl.style.height = `${newHeight}px`;
  }
  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
  }
  var toggleSlideClasses$1 = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesProgress(translate2) {
    if (translate2 === void 0) {
      translate2 = this && this.translate || 0;
    }
    const swiper = this;
    const params = swiper.params;
    const {
      slides,
      rtlTranslate: rtl,
      snapGrid
    } = swiper;
    if (slides.length === 0)
      return;
    if (typeof slides[0].swiperSlideOffset === "undefined")
      swiper.updateSlidesOffset();
    let offsetCenter = -translate2;
    if (rtl)
      offsetCenter = translate2;
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slide2 = slides[i];
      let slideOffset = slide2.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide2);
        swiper.visibleSlidesIndexes.push(i);
      }
      toggleSlideClasses$1(slide2, isVisible, params.slideVisibleClass);
      toggleSlideClasses$1(slide2, isFullyVisible, params.slideFullyVisibleClass);
      slide2.progress = rtl ? -slideProgress : slideProgress;
      slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
  }
  function updateProgress(translate2) {
    const swiper = this;
    if (typeof translate2 === "undefined") {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let {
      progress,
      isBeginning,
      isEnd,
      progressLoop
    } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate2 - swiper.minTranslate()) / translatesDiff;
      const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
      const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded)
        progress = 0;
      if (isEndRounded)
        progress = 1;
    }
    if (params.loop) {
      const firstSlideIndex = swiper.getSlideIndexByData(0);
      const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
      const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
      const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
      const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
      const translateAbs = Math.abs(translate2);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1)
        progressLoop -= 1;
    }
    Object.assign(swiper, {
      progress,
      progressLoop,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
      swiper.updateSlidesProgress(translate2);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }
  var toggleSlideClasses = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesClasses() {
    const swiper = this;
    const {
      slides,
      params,
      slidesEl,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector) => {
      return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
    };
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
      if (params.loop) {
        let slideIndex = activeIndex - swiper.virtual.slidesBefore;
        if (slideIndex < 0)
          slideIndex = swiper.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper.virtual.slides.length)
          slideIndex -= swiper.virtual.slides.length;
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
      } else {
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
      }
    } else {
      if (gridEnabled) {
        activeSlide = slides.find((slideEl) => slideEl.column === activeIndex);
        nextSlide = slides.find((slideEl) => slideEl.column === activeIndex + 1);
        prevSlide = slides.find((slideEl) => slideEl.column === activeIndex - 1);
      } else {
        activeSlide = slides[activeIndex];
      }
    }
    if (activeSlide) {
      if (!gridEnabled) {
        nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }
        prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
      }
    }
    slides.forEach((slideEl) => {
      toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
      toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
      toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
    });
    swiper.emitSlidesClasses();
  }
  var processLazyPreloader = (swiper, imageEl) => {
    if (!swiper || swiper.destroyed || !swiper.params)
      return;
    const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      if (!lazyEl && swiper.isElement) {
        if (slideEl.shadowRoot) {
          lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        } else {
          requestAnimationFrame(() => {
            if (slideEl.shadowRoot) {
              lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
              if (lazyEl)
                lazyEl.remove();
            }
          });
        }
      }
      if (lazyEl)
        lazyEl.remove();
    }
  };
  var unlazy = (swiper, index) => {
    if (!swiper.slides[index])
      return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl)
      imageEl.removeAttribute("loading");
  };
  var preload = (swiper) => {
    if (!swiper || swiper.destroyed || !swiper.params)
      return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0)
      return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
      const activeColumn = activeIndex;
      const preloadColumns = [activeColumn - amount];
      preloadColumns.push(...Array.from({
        length: amount
      }).map((_, i) => {
        return activeColumn + slidesPerView + i;
      }));
      swiper.slides.forEach((slideEl, i) => {
        if (preloadColumns.includes(slideEl.column))
          unlazy(swiper, i);
      });
      return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) {
      for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
        const realIndex = (i % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView)
          unlazy(swiper, realIndex);
      }
    } else {
      for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
        if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
          unlazy(swiper, i);
        }
      }
    }
  };
  function getActiveIndexByTranslate(swiper) {
    const {
      slidesGrid,
      params
    } = swiper;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate2 >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined")
        activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const {
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex) => {
      let realIndex2 = aIndex - swiper.virtual.slidesBefore;
      if (realIndex2 < 0) {
        realIndex2 = swiper.virtual.slides.length + realIndex2;
      }
      if (realIndex2 >= swiper.virtual.slides.length) {
        realIndex2 -= swiper.virtual.slides.length;
      }
      return realIndex2;
    };
    if (typeof activeIndex === "undefined") {
      activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate2) >= 0) {
      snapIndex = snapGrid.indexOf(translate2);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
      return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else if (gridEnabled) {
      const firstSlideInColumn = swiper.slides.find((slideEl) => slideEl.column === activeIndex);
      let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
      if (Number.isNaN(activeSlideIndex)) {
        activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
      }
      realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
      const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
      if (slideIndex) {
        realIndex = parseInt(slideIndex, 10);
      } else {
        realIndex = activeIndex;
      }
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper, {
      previousSnapIndex,
      snapIndex,
      previousRealIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    if (swiper.initialized) {
      preload(swiper);
    }
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      if (previousRealIndex !== realIndex) {
        swiper.emit("realIndexChange");
      }
      swiper.emit("slideChange");
    }
  }
  function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
    if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
      [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
        if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
          slide2 = pathEl;
        }
      });
    }
    let slideFound = false;
    let slideIndex;
    if (slide2) {
      for (let i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide2) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide2 && slideFound) {
      swiper.clickedSlide = slide2;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = void 0;
      swiper.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }
  var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? "x" : "y";
    }
    const swiper = this;
    const {
      params,
      rtlTranslate: rtl,
      translate: translate2,
      wrapperEl
    } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate2 : translate2;
    }
    if (params.cssMode) {
      return translate2;
    }
    let currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl)
      currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate2, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl,
      params,
      wrapperEl,
      progress
    } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate2 : translate2;
    } else {
      y = translate2;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      if (swiper.isHorizontal()) {
        x -= swiper.cssOverflowAdjustment();
      } else {
        y -= swiper.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate2);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
    if (translate2 === void 0) {
      translate2 = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    const swiper = this;
    const {
      params,
      wrapperEl
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate2 = swiper.minTranslate();
    const maxTranslate2 = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate2 > minTranslate2)
      newTranslate = minTranslate2;
    else if (translateBounds && translate2 < maxTranslate2)
      newTranslate = maxTranslate2;
    else
      newTranslate = translate2;
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth"
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
            if (!swiper || swiper.destroyed)
              return;
            if (e.target !== this)
              return;
            swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            swiper.animating = false;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };
  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
      swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
    }
    swiper.emit("setTransition", duration, byController);
  }
  function transitionEmit(_ref) {
    let {
      swiper,
      runCallbacks,
      direction,
      step
    } = _ref;
    const {
      activeIndex,
      previousIndex
    } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex)
        dir = "next";
      else if (activeIndex < previousIndex)
        dir = "prev";
      else
        dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit(`slideResetTransition${step}`);
        return;
      }
      swiper.emit(`slideChangeTransition${step}`);
      if (dir === "next") {
        swiper.emit(`slideNextTransition${step}`);
      } else {
        swiper.emit(`slidePrevTransition${step}`);
      }
    }
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    if (params.cssMode)
      return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "Start"
    });
  }
  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.animating = false;
    if (params.cssMode)
      return;
    swiper.setTransition(0);
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "End"
    });
  }
  var transition = {
    setTransition,
    transitionStart,
    transitionEnd
  };
  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      index = parseInt(index, 10);
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0)
      slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled
    } = swiper;
    if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    const translate2 = -snapGrid[snapIndex];
    if (params.normalizeSlideIndex) {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        const normalizedTranslate = -Math.floor(translate2 * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }
    swiper.updateProgress(translate2);
    let direction;
    if (slideIndex > activeIndex)
      direction = "next";
    else if (slideIndex < activeIndex)
      direction = "prev";
    else
      direction = "reset";
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const isInitialVirtual = isVirtual && initial;
    if (!isInitialVirtual && (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate2);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t = rtl ? translate2 : -translate2;
      if (speed === 0) {
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = "none";
          swiper._immediateVirtual = true;
        }
        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
          swiper._cssModeVirtualInitialSet = true;
          requestAnimationFrame(() => {
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
          });
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        }
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = "";
            swiper._immediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: t,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t,
          behavior: "smooth"
        });
      }
      return true;
    }
    const browser2 = getBrowser();
    const isSafari = browser2.isSafari;
    if (isVirtual && !initial && isSafari && swiper.isElement) {
      swiper.virtual.update(false, false, slideIndex);
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate2);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed)
            return;
          if (e.target !== this)
            return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      const indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    const swiper = this;
    if (swiper.destroyed)
      return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
      if (swiper.virtual && swiper.params.virtual.enabled) {
        newIndex = newIndex + swiper.virtual.slidesBefore;
      } else {
        let targetSlideIndex;
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          targetSlideIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
        } else {
          targetSlideIndex = swiper.getSlideIndexByData(newIndex);
        }
        const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
        const {
          centeredSlides
        } = swiper.params;
        let slidesPerView = swiper.params.slidesPerView;
        if (slidesPerView === "auto") {
          slidesPerView = swiper.slidesPerViewDynamic();
        } else {
          slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
          if (centeredSlides && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
          }
        }
        let needLoopFix = cols - targetSlideIndex < slidesPerView;
        if (centeredSlides) {
          needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
        }
        if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) {
          needLoopFix = false;
        }
        if (needLoopFix) {
          const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
          swiper.loopFix({
            direction,
            slideTo: true,
            activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
            slideRealIndex: direction === "next" ? swiper.realIndex : void 0
          });
        }
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          newIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
        } else {
          newIndex = swiper.getSlideIndexByData(newIndex);
        }
      }
    }
    requestAnimationFrame(() => {
      swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
  }
  function slideNext(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      enabled,
      params,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed)
      return swiper;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding)
        return false;
      swiper.loopFix({
        direction: "next"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
      if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
        requestAnimationFrame(() => {
          swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        });
        return true;
      }
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }
  function slidePrev(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params,
      snapGrid,
      slidesGrid,
      rtlTranslate,
      enabled,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed)
      return swiper;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding)
        return false;
      swiper.loopFix({
        direction: "prev"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0)
        return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate2);
    const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
    const isFreeMode = params.freeMode && params.freeMode.enabled;
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && (params.cssMode || isFreeMode)) {
      let prevSnapIndex;
      snapGrid.forEach((snap, snapIndex) => {
        if (normalizedTranslate >= snap) {
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0)
        prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(prevIndex, speed, runCallbacks, internal);
      });
      return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  function slideReset(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    if (swiper.destroyed)
      return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    const swiper = this;
    if (swiper.destroyed)
      return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate2 >= swiper.snapGrid[snapIndex]) {
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    const swiper = this;
    if (swiper.destroyed)
      return;
    const {
      params,
      slidesEl
    } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    if (params.loop) {
      if (swiper.animating)
        return;
      realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };
  function loopCreate(slideRealIndex) {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
      return;
    const initSlides = () => {
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      slides.forEach((el, index) => {
        el.setAttribute("data-swiper-slide-index", index);
      });
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides) => {
      for (let i = 0; i < amountOfSlides; i += 1) {
        const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
        swiper.slidesEl.append(slideEl);
      }
    };
    if (shouldFillGroup) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else if (shouldFillGrid) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else {
      initSlides();
    }
    swiper.loopFix({
      slideRealIndex,
      direction: params.centeredSlides ? void 0 : "next"
    });
  }
  function loopFix(_temp) {
    let {
      slideRealIndex,
      slideTo: slideTo2 = true,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController,
      byMousewheel
    } = _temp === void 0 ? {} : _temp;
    const swiper = this;
    if (!swiper.params.loop)
      return;
    swiper.emit("beforeLoopFix");
    const {
      slides,
      allowSlidePrev,
      allowSlideNext,
      slidesEl,
      params
    } = swiper;
    const {
      centeredSlides
    } = params;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
      if (slideTo2) {
        if (!params.centeredSlides && swiper.snapIndex === 0) {
          swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
        } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
          swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
        } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
          swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit("loopFix");
      return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === "auto") {
      slidesPerView = swiper.slidesPerViewDynamic();
    } else {
      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
      if (centeredSlides && slidesPerView % 2 === 0) {
        slidesPerView = slidesPerView + 1;
      }
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
      loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) {
      showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
    } else if (gridEnabled && params.grid.fill === "row") {
      showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === "undefined") {
      activeSlideIndex = swiper.getSlideIndex(slides.find((el) => el.classList.contains(params.slideActiveClass)));
    } else {
      activeIndex = activeSlideIndex;
    }
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
    if (activeColIndexWithShift < loopedSlides) {
      slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
      for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          const colIndexToPrepend = cols - index - 1;
          for (let i2 = slides.length - 1; i2 >= 0; i2 -= 1) {
            if (slides[i2].column === colIndexToPrepend)
              prependSlidesIndexes.push(i2);
          }
        } else {
          prependSlidesIndexes.push(cols - index - 1);
        }
      }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
      slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
      for (let i = 0; i < slidesAppended; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          slides.forEach((slide2, slideIndex) => {
            if (slide2.column === index)
              appendSlidesIndexes.push(slideIndex);
          });
        } else {
          appendSlidesIndexes.push(index);
        }
      }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
    if (isPrev) {
      prependSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === "auto") {
      swiper.updateSlides();
    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
      swiper.slides.forEach((slide2, slideIndex) => {
        swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
      });
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (slideTo2) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          if (setTranslate2) {
            const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
            swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
        }
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
      const loopParams = {
        slideRealIndex,
        direction,
        setTranslate: setTranslate2,
        activeSlideIndex,
        byController: true
      };
      if (Array.isArray(swiper.controller.control)) {
        swiper.controller.control.forEach((c) => {
          if (!c.destroyed && c.params.loop)
            c.loopFix({
              ...loopParams,
              slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
            });
        });
      } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
        swiper.controller.control.loopFix({
          ...loopParams,
          slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        });
      }
    }
    swiper.emit("loopFix");
  }
  function loopDestroy() {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
      return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl) => {
      const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl) => {
      slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl) => {
      slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
  }
  var loop = {
    loopCreate,
    loopFix,
    loopDestroy
  };
  function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
      return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
  };
  function closestElement(selector, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow())
        return null;
      if (el.assignedSlot)
        el = el.assignedSlot;
      const found = el.closest(selector);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function preventEdgeSwipe(swiper, event2, startX) {
    const window2 = getWindow();
    const {
      params
    } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event2.preventDefault();
        return true;
      }
      return false;
    }
    return true;
  }
  function onTouchStart(event2) {
    const swiper = this;
    const document2 = getDocument();
    let e = event2;
    if (e.originalEvent)
      e = e.originalEvent;
    const data = swiper.touchEventsData;
    if (e.type === "pointerdown") {
      if (data.pointerId !== null && data.pointerId !== e.pointerId) {
        return;
      }
      data.pointerId = e.pointerId;
    } else if (e.type === "touchstart" && e.targetTouches.length === 1) {
      data.touchId = e.targetTouches[0].identifier;
    }
    if (e.type === "touchstart") {
      preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
      return;
    }
    const {
      params,
      touches,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (!params.simulateTouch && e.pointerType === "mouse")
      return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let targetEl = e.target;
    if (params.touchEventsTarget === "wrapper") {
      if (!elementIsChildOf(targetEl, swiper.wrapperEl))
        return;
    }
    if ("which" in e && e.which === 3)
      return;
    if ("button" in e && e.button > 0)
      return;
    if (data.isTouched && data.isMoved)
      return;
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    const eventPath = e.composedPath ? e.composedPath() : e.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler))
        return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    if (!preventEdgeSwipe(swiper, e, startX)) {
      return;
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = void 0;
    if (params.threshold > 0)
      data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault = false;
      if (targetEl.nodeName === "SELECT") {
        data.isTouched = false;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
      document2.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
      e.preventDefault();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit("touchStart", e);
  }
  function onTouchMove(event2) {
    const document2 = getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (!params.simulateTouch && event2.pointerType === "mouse")
      return;
    let e = event2;
    if (e.originalEvent)
      e = e.originalEvent;
    if (e.type === "pointermove") {
      if (data.touchId !== null)
        return;
      const id = e.pointerId;
      if (id !== data.pointerId)
        return;
    }
    let targetTouch;
    if (e.type === "touchmove") {
      targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
      if (!targetTouch || targetTouch.identifier !== data.touchId)
        return;
    } else {
      targetTouch = e;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e);
      }
      return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!e.target.matches(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== e.target && e.pointerType !== "mouse") {
      document2.activeElement.blur();
    }
    if (document2.activeElement) {
      if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold)
      return;
    if (typeof data.isScrolling === "undefined") {
      let touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    if (typeof data.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
    if (!data.isMoved) {
      if (isLoop && allowLoopFix) {
        swiper.loopFix({
          direction: swiper.swipeDirection
        });
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true,
          detail: {
            bySwiperTouchMove: true
          }
        });
        swiper.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e);
    }
    let loopFixed;
    (/* @__PURE__ */ new Date()).getTime();
    if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
        startTranslate: data.currentTranslate
      });
      data.loopSwapReset = true;
      data.startTranslate = data.currentTranslate;
      return;
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
        swiper.loopFix({
          direction: "prev",
          setTranslate: true,
          activeSlideIndex: 0
        });
      }
      if (data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        }
      }
    } else if (diff < 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
        swiper.loopFix({
          direction: "next",
          setTranslate: true,
          activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
      }
      if (data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
      }
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode)
      return;
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    swiper.updateProgress(data.currentTranslate);
    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event2) {
    const swiper = this;
    const data = swiper.touchEventsData;
    let e = event2;
    if (e.originalEvent)
      e = e.originalEvent;
    let targetTouch;
    const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
    if (!isTouchEvent) {
      if (data.touchId !== null)
        return;
      if (e.pointerId !== data.pointerId)
        return;
      targetTouch = e;
    } else {
      targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
      if (!targetTouch || targetTouch.identifier !== data.touchId)
        return;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
      const proceed = ["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    data.pointerId = null;
    data.touchId = null;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      slidesGrid,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (!params.simulateTouch && e.pointerType === "mouse")
      return;
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      const pathTree = e.path || e.composedPath && e.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
      swiper.emit("tap click", e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper.destroyed)
        swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos
      });
      return;
    }
    const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + increment2] !== "undefined") {
        if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
          stopIndex = i;
          groupSize = slidesGrid[i + increment2] - slidesGrid[i];
        }
      } else if (swipeToLast || currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio)
          swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
        else
          swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    const swiper = this;
    const {
      params,
      el
    } = swiper;
    if (el && el.offsetWidth === 0)
      return;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    const {
      allowSlideNext,
      allowSlidePrev,
      snapGrid
    } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      if (swiper.params.loop && !isVirtual) {
        swiper.slideToLoop(swiper.realIndex, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      clearTimeout(swiper.autoplay.resizeTimeout);
      swiper.autoplay.resizeTimeout = setTimeout(() => {
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
          swiper.autoplay.resume();
        }
      }, 500);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e) {
    const swiper = this;
    if (!swiper.enabled)
      return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks)
        e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    const swiper = this;
    const {
      wrapperEl,
      rtlTranslate,
      enabled
    } = swiper;
    if (!enabled)
      return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === 0)
      swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }
  function onLoad(e) {
    const swiper = this;
    processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
      return;
    }
    swiper.update();
  }
  function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded)
      return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) {
      swiper.el.style.touchAction = "auto";
    }
  }
  var events = (swiper, method) => {
    const document2 = getDocument();
    const {
      params,
      el,
      wrapperEl,
      device
    } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    if (!el || typeof el === "string")
      return;
    document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
      passive: false,
      capture
    });
    el[domMethod]("touchstart", swiper.onTouchStart, {
      passive: false
    });
    el[domMethod]("pointerdown", swiper.onTouchStart, {
      passive: false
    });
    document2[domMethod]("touchmove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("pointermove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("touchend", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerup", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointercancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("touchcancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerout", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerleave", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("contextmenu", swiper.onTouchEnd, {
      passive: true
    });
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper[swiperMethod]("observerUpdate", onResize, true);
    }
    el[domMethod]("load", swiper.onLoad, {
      capture: true
    });
  };
  function attachEvents() {
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, "on");
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, "off");
  }
  var events$1 = {
    attachEvents,
    detachEvents
  };
  var isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const {
      realIndex,
      initialized,
      params,
      el
    } = swiper;
    const breakpoints2 = params.breakpoints;
    if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
      return;
    const document2 = getDocument();
    const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
    const breakpointContainer = ["window", "container"].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document2.querySelector(params.breakpointsBase);
    const breakpoint = swiper.getBreakpoint(breakpoints2, breakpointsBase, breakpointContainer);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint)
      return;
    const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasGrabCursor = swiper.params.grabCursor;
    const isGrabCursor = breakpointParams.grabCursor;
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    if (wasGrabCursor && !isGrabCursor) {
      swiper.unsetGrabCursor();
    } else if (!wasGrabCursor && isGrabCursor) {
      swiper.setGrabCursor();
    }
    ["navigation", "pagination", "scrollbar"].forEach((prop) => {
      if (typeof breakpointParams[prop] === "undefined")
        return;
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend2(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (initialized) {
      if (needsReLoop) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (!wasLoop && hasLoop) {
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (wasLoop && !hasLoop) {
        swiper.loopDestroy();
      }
    }
    swiper.emit("breakpoint", breakpointParams);
  }
  function getBreakpoint(breakpoints2, base, containerEl) {
    if (base === void 0) {
      base = "window";
    }
    if (!breakpoints2 || base === "container" && !containerEl)
      return void 0;
    let breakpoint = false;
    const window2 = getWindow();
    const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints2).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point
        };
      }
      return {
        value: point,
        point
      };
    });
    points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
    for (let i = 0; i < points.length; i += 1) {
      const {
        point,
        value
      } = points[i];
      if (base === "window") {
        if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }
  var breakpoints = {
    setBreakpoint,
    getBreakpoint
  };
  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const {
      classNames,
      params,
      rtl,
      el,
      device
    } = swiper;
    const suffixes = prepareClasses(["initialized", params.direction, {
      "free-mode": swiper.params.freeMode && params.freeMode.enabled
    }, {
      "autoheight": params.autoHeight
    }, {
      "rtl": rtl
    }, {
      "grid": params.grid && params.grid.rows > 1
    }, {
      "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
    }, {
      "android": device.android
    }, {
      "ios": device.ios
    }, {
      "css-mode": params.cssMode
    }, {
      "centered": params.cssMode && params.centeredSlides
    }, {
      "watch-progress": params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
  }
  function removeClasses() {
    const swiper = this;
    const {
      el,
      classNames
    } = swiper;
    if (!el || typeof el === "string")
      return;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
  }
  var classes = {
    addClasses,
    removeClasses
  };
  function checkOverflow() {
    const swiper = this;
    const {
      isLocked: wasLocked,
      params
    } = swiper;
    const {
      slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
  }
  var checkOverflow$1 = {
    checkOverflow
  };
  var defaults = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: "swiper",
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend2(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
        params[moduleParamName].auto = true;
      }
      if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
        params[moduleParamName].auto = true;
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend2(allModulesParams, obj);
        return;
      }
      if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName])
        params[moduleParamName] = {
          enabled: false
        };
      extend2(allModulesParams, obj);
    };
  }
  var prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
  };
  var extendedDefaults = {};
  var Swiper = class _Swiper {
    constructor() {
      let el;
      let params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params)
        params = {};
      params = extend2({}, params);
      if (el && !params.el)
        params.el = el;
      const document2 = getDocument();
      if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
        const swipers = [];
        document2.querySelectorAll(params.el).forEach((containerEl) => {
          const newParams = extend2({}, params, {
            el: containerEl
          });
          swipers.push(new _Swiper(newParams));
        });
        return swipers;
      }
      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper.modules.forEach((mod) => {
        mod({
          params,
          swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      });
      const swiperParams = extend2({}, defaults, allModulesParams);
      swiper.params = extend2({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend2({}, swiper.params);
      swiper.passedParams = extend2({}, params);
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach((eventName) => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical() {
          return swiper.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit("_swiper");
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    getDirectionLabel(property) {
      if (this.isHorizontal()) {
        return property;
      }
      return {
        "width": "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        "marginRight": "marginBottom"
      }[property];
    }
    getSlideIndex(slideEl) {
      const {
        slidesEl,
        params
      } = this;
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      const firstSlideIndex = elementIndex(slides[0]);
      return elementIndex(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
      return this.getSlideIndex(this.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index));
    }
    recalcSlides() {
      const swiper = this;
      const {
        slidesEl,
        params
      } = swiper;
      swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
      const swiper = this;
      if (swiper.enabled)
        return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit("enable");
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled)
        return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      const cls = swiper.el.className.split(" ").filter((className) => {
        return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      if (swiper.destroyed)
        return "";
      return slideEl.className.split(" ").filter((className) => {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(" ");
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      const updates = [];
      swiper.slides.forEach((slideEl) => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view, exact) {
      if (view === void 0) {
        view = "current";
      }
      if (exact === void 0) {
        exact = false;
      }
      const swiper = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex
      } = swiper;
      let spv = 1;
      if (typeof params.slidesPerView === "number")
        return params.slidesPerView;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
        let breakLoop;
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += Math.ceil(slides[i].swiperSlideSize);
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
      } else {
        if (view === "current") {
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed)
        return;
      const {
        snapGrid,
        params
      } = swiper;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        }
      });
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate2() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
        setTranslate2();
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
          const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
          translated = swiper.slideTo(slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper;
      }
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
      swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.forEach((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate)
        swiper.update();
      return swiper;
    }
    changeLanguageDirection(direction) {
      const swiper = this;
      if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr")
        return;
      swiper.rtl = direction === "rtl";
      swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
      if (swiper.rtl) {
        swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "rtl";
      } else {
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "ltr";
      }
      swiper.update();
    }
    mount(element) {
      const swiper = this;
      if (swiper.mounted)
        return true;
      let el = element || swiper.params.el;
      if (typeof el === "string") {
        el = document.querySelector(el);
      }
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
        swiper.isElement = true;
      }
      const getWrapperSelector = () => {
        return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = el.shadowRoot.querySelector(getWrapperSelector());
          return res;
        }
        return elementChildren(el, getWrapperSelector())[0];
      };
      let wrapperEl = getWrapper();
      if (!wrapperEl && swiper.params.createElements) {
        wrapperEl = createElement("div", swiper.params.wrapperClass);
        el.append(wrapperEl);
        elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
          wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper, {
        el,
        wrapperEl,
        slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
        hostEl: swiper.isElement ? el.parentNode.host : el,
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
        wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized)
        return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false)
        return swiper;
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }
      if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      }
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.attachEvents();
      const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
      if (swiper.isElement) {
        lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
      }
      lazyElements.forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        } else {
          imageEl.addEventListener("load", (e) => {
            processLazyPreloader(swiper, e.target);
          });
        }
      });
      preload(swiper);
      swiper.initialized = true;
      preload(swiper);
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      const swiper = this;
      const {
        params,
        el,
        wrapperEl,
        slides
      } = swiper;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        if (el && typeof el !== "string") {
          el.removeAttribute("style");
        }
        if (wrapperEl) {
          wrapperEl.removeAttribute("style");
        }
        if (slides && slides.length) {
          slides.forEach((slideEl) => {
            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            slideEl.removeAttribute("style");
            slideEl.removeAttribute("data-swiper-slide-index");
          });
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach((eventName) => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        if (swiper.el && typeof swiper.el !== "string") {
          swiper.el.swiper = null;
        }
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend2(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults;
    }
    static installModule(mod) {
      if (!_Swiper.prototype.__modules__)
        _Swiper.prototype.__modules__ = [];
      const modules = _Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules.indexOf(mod) < 0) {
        modules.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach((m) => _Swiper.installModule(m));
        return _Swiper;
      }
      _Swiper.installModule(module);
      return _Swiper;
    }
  };
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/index.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/virtual.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/keyboard.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/mousewheel.mjs
  init_live_reload();
  function Mousewheel(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const window2 = getWindow();
    extendParams({
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
        noMousewheelClass: "swiper-no-mousewheel"
      }
    });
    swiper.mousewheel = {
      enabled: false
    };
    let timeout;
    let lastScrollTime = now();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
      const PIXEL_STEP = 10;
      const LINE_HEIGHT = 40;
      const PAGE_HEIGHT = 800;
      let sX = 0;
      let sY = 0;
      let pX = 0;
      let pY = 0;
      if ("detail" in e) {
        sY = e.detail;
      }
      if ("wheelDelta" in e) {
        sY = -e.wheelDelta / 120;
      }
      if ("wheelDeltaY" in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ("wheelDeltaX" in e) {
        sX = -e.wheelDeltaX / 120;
      }
      if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }
      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;
      if ("deltaY" in e) {
        pY = e.deltaY;
      }
      if ("deltaX" in e) {
        pX = e.deltaX;
      }
      if (e.shiftKey && !pX) {
        pX = pY;
        pY = 0;
      }
      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }
      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }
      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }
      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
      };
    }
    function handleMouseEnter() {
      if (!swiper.enabled)
        return;
      swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
      if (!swiper.enabled)
        return;
      swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
      if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
        return false;
      }
      if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
        return false;
      }
      if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
        return true;
      }
      if (newEvent.direction < 0) {
        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
          swiper.slideNext();
          emit("scroll", newEvent.raw);
        }
      } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
        swiper.slidePrev();
        emit("scroll", newEvent.raw);
      }
      lastScrollTime = new window2.Date().getTime();
      return false;
    }
    function releaseScroll(newEvent) {
      const params = swiper.params.mousewheel;
      if (newEvent.direction < 0) {
        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
          return true;
        }
      } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
        return true;
      }
      return false;
    }
    function handle(event2) {
      let e = event2;
      let disableParentSwiper = true;
      if (!swiper.enabled)
        return;
      if (event2.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`))
        return;
      const params = swiper.params.mousewheel;
      if (swiper.params.cssMode) {
        e.preventDefault();
      }
      let targetEl = swiper.el;
      if (swiper.params.mousewheel.eventsTarget !== "container") {
        targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
      }
      const targetElContainsTarget = targetEl && targetEl.contains(e.target);
      if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges)
        return true;
      if (e.originalEvent)
        e = e.originalEvent;
      let delta = 0;
      const rtlFactor = swiper.rtlTranslate ? -1 : 1;
      const data = normalize(e);
      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY))
            delta = -data.pixelX * rtlFactor;
          else
            return true;
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX))
          delta = -data.pixelY;
        else
          return true;
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }
      if (delta === 0)
        return true;
      if (params.invert)
        delta = -delta;
      let positions = swiper.getTranslate() + delta * params.sensitivity;
      if (positions >= swiper.minTranslate())
        positions = swiper.minTranslate();
      if (positions <= swiper.maxTranslate())
        positions = swiper.maxTranslate();
      disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
      if (disableParentSwiper && swiper.params.nested)
        e.stopPropagation();
      if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event2
        };
        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift();
        }
        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
        recentWheelEvents.push(newEvent);
        if (prevEvent) {
          if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
            animateSlider(newEvent);
          }
        } else {
          animateSlider(newEvent);
        }
        if (releaseScroll(newEvent)) {
          return true;
        }
      } else {
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta)
        };
        const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
        if (!ignoreWheelEvents) {
          lastEventBeforeSnap = void 0;
          let position = swiper.getTranslate() + delta * params.sensitivity;
          const wasBeginning = swiper.isBeginning;
          const wasEnd = swiper.isEnd;
          if (position >= swiper.minTranslate())
            position = swiper.minTranslate();
          if (position <= swiper.maxTranslate())
            position = swiper.maxTranslate();
          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
          if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
            swiper.updateSlidesClasses();
          }
          if (swiper.params.loop) {
            swiper.loopFix({
              direction: newEvent.direction < 0 ? "next" : "prev",
              byMousewheel: true
            });
          }
          if (swiper.params.freeMode.sticky) {
            clearTimeout(timeout);
            timeout = void 0;
            if (recentWheelEvents.length >= 15) {
              recentWheelEvents.shift();
            }
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
            const firstEvent = recentWheelEvents[0];
            recentWheelEvents.push(newEvent);
            if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
              recentWheelEvents.splice(0);
            } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
              const snapToThreshold = delta > 0 ? 0.8 : 0.2;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              timeout = nextTick(() => {
                if (swiper.destroyed || !swiper.params)
                  return;
                swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
              }, 0);
            }
            if (!timeout) {
              timeout = nextTick(() => {
                if (swiper.destroyed || !swiper.params)
                  return;
                const snapToThreshold = 0.5;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
              }, 500);
            }
          }
          if (!ignoreWheelEvents)
            emit("scroll", e);
          if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction)
            swiper.autoplay.stop();
          if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
            return true;
          }
        }
      }
      if (e.preventDefault)
        e.preventDefault();
      else
        e.returnValue = false;
      return false;
    }
    function events2(method) {
      let targetEl = swiper.el;
      if (swiper.params.mousewheel.eventsTarget !== "container") {
        targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
      }
      targetEl[method]("mouseenter", handleMouseEnter);
      targetEl[method]("mouseleave", handleMouseLeave);
      targetEl[method]("wheel", handle);
    }
    function enable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener("wheel", handle);
        return true;
      }
      if (swiper.mousewheel.enabled)
        return false;
      events2("addEventListener");
      swiper.mousewheel.enabled = true;
      return true;
    }
    function disable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, handle);
        return true;
      }
      if (!swiper.mousewheel.enabled)
        return false;
      events2("removeEventListener");
      swiper.mousewheel.enabled = false;
      return true;
    }
    on("init", () => {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        disable();
      }
      if (swiper.params.mousewheel.enabled)
        enable();
    });
    on("destroy", () => {
      if (swiper.params.cssMode) {
        enable();
      }
      if (swiper.mousewheel.enabled)
        disable();
    });
    Object.assign(swiper.mousewheel, {
      enable,
      disable
    });
  }

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/navigation.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/shared/create-element-if-not-defined.mjs
  init_live_reload();
  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
          if (!element) {
            element = createElement("div", checkProps[key]);
            element.className = checkProps[key];
            swiper.el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/pagination.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/shared/classes-to-selector.mjs
  init_live_reload();
  function classesToSelector(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return `.${classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
  }

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/scrollbar.mjs
  init_live_reload();
  function Scrollbar(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const document2 = getDocument();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: `swiper-scrollbar-horizontal`,
        verticalClass: `swiper-scrollbar-vertical`
      }
    });
    swiper.scrollbar = {
      el: null,
      dragEl: null
    };
    function setTranslate2() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
        return;
      const {
        scrollbar,
        rtlTranslate: rtl
      } = swiper;
      const {
        dragEl,
        el
      } = scrollbar;
      const params = swiper.params.scrollbar;
      const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
      let newSize = dragSize;
      let newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
        dragEl.style.width = `${newSize}px`;
      } else {
        dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
        dragEl.style.height = `${newSize}px`;
      }
      if (params.hide) {
        clearTimeout(timeout);
        el.style.opacity = 1;
        timeout = setTimeout(() => {
          el.style.opacity = 0;
          el.style.transitionDuration = "400ms";
        }, 1e3);
      }
    }
    function setTransition2(duration) {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
        return;
      swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
    }
    function updateSize2() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
        return;
      const {
        scrollbar
      } = swiper;
      const {
        dragEl,
        el
      } = scrollbar;
      dragEl.style.width = "";
      dragEl.style.height = "";
      trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
      divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
      if (swiper.params.scrollbar.dragSize === "auto") {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }
      if (swiper.isHorizontal()) {
        dragEl.style.width = `${dragSize}px`;
      } else {
        dragEl.style.height = `${dragSize}px`;
      }
      if (divider >= 1) {
        el.style.display = "none";
      } else {
        el.style.display = "";
      }
      if (swiper.params.scrollbar.hide) {
        el.style.opacity = 0;
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](swiper.params.scrollbar.lockClass);
      }
    }
    function getPointerPosition(e) {
      return swiper.isHorizontal() ? e.clientX : e.clientY;
    }
    function setDragPosition(e) {
      const {
        scrollbar,
        rtlTranslate: rtl
      } = swiper;
      const {
        el
      } = scrollbar;
      let positionRatio;
      positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }
      const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
      const params = swiper.params.scrollbar;
      const {
        scrollbar,
        wrapperEl
      } = swiper;
      const {
        el,
        dragEl
      } = scrollbar;
      isTouched = true;
      dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
      e.preventDefault();
      e.stopPropagation();
      wrapperEl.style.transitionDuration = "100ms";
      dragEl.style.transitionDuration = "100ms";
      setDragPosition(e);
      clearTimeout(dragTimeout);
      el.style.transitionDuration = "0ms";
      if (params.hide) {
        el.style.opacity = 1;
      }
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style["scroll-snap-type"] = "none";
      }
      emit("scrollbarDragStart", e);
    }
    function onDragMove(e) {
      const {
        scrollbar,
        wrapperEl
      } = swiper;
      const {
        el,
        dragEl
      } = scrollbar;
      if (!isTouched)
        return;
      if (e.preventDefault && e.cancelable)
        e.preventDefault();
      else
        e.returnValue = false;
      setDragPosition(e);
      wrapperEl.style.transitionDuration = "0ms";
      el.style.transitionDuration = "0ms";
      dragEl.style.transitionDuration = "0ms";
      emit("scrollbarDragMove", e);
    }
    function onDragEnd(e) {
      const params = swiper.params.scrollbar;
      const {
        scrollbar,
        wrapperEl
      } = swiper;
      const {
        el
      } = scrollbar;
      if (!isTouched)
        return;
      isTouched = false;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style["scroll-snap-type"] = "";
        wrapperEl.style.transitionDuration = "";
      }
      if (params.hide) {
        clearTimeout(dragTimeout);
        dragTimeout = nextTick(() => {
          el.style.opacity = 0;
          el.style.transitionDuration = "400ms";
        }, 1e3);
      }
      emit("scrollbarDragEnd", e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    }
    function events2(method) {
      const {
        scrollbar,
        params
      } = swiper;
      const el = scrollbar.el;
      if (!el)
        return;
      const target = el;
      const activeListener = params.passiveListeners ? {
        passive: false,
        capture: false
      } : false;
      const passiveListener = params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      if (!target)
        return;
      const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
      target[eventMethod]("pointerdown", onDragStart, activeListener);
      document2[eventMethod]("pointermove", onDragMove, activeListener);
      document2[eventMethod]("pointerup", onDragEnd, passiveListener);
    }
    function enableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
        return;
      events2("on");
    }
    function disableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
        return;
      events2("off");
    }
    function init() {
      const {
        scrollbar,
        el: swiperEl
      } = swiper;
      swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      const params = swiper.params.scrollbar;
      if (!params.el)
        return;
      let el;
      if (typeof params.el === "string" && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = document2.querySelectorAll(params.el);
        if (!el.length)
          return;
      } else if (!el) {
        el = params.el;
      }
      if (swiper.params.uniqueNavElements && typeof params.el === "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
        el = swiperEl.querySelector(params.el);
      }
      if (el.length > 0)
        el = el[0];
      el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      let dragEl;
      if (el) {
        dragEl = el.querySelector(classesToSelector(swiper.params.scrollbar.dragClass));
        if (!dragEl) {
          dragEl = createElement("div", swiper.params.scrollbar.dragClass);
          el.append(dragEl);
        }
      }
      Object.assign(scrollbar, {
        el,
        dragEl
      });
      if (params.draggable) {
        enableDraggable();
      }
      if (el) {
        el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
      }
    }
    function destroy() {
      const params = swiper.params.scrollbar;
      const el = swiper.scrollbar.el;
      if (el) {
        el.classList.remove(...classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
      }
      disableDraggable();
    }
    on("changeDirection", () => {
      if (!swiper.scrollbar || !swiper.scrollbar.el)
        return;
      const params = swiper.params.scrollbar;
      let {
        el
      } = swiper.scrollbar;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on("init", () => {
      if (swiper.params.scrollbar.enabled === false) {
        disable();
      } else {
        init();
        updateSize2();
        setTranslate2();
      }
    });
    on("update resize observerUpdate lock unlock changeDirection", () => {
      updateSize2();
    });
    on("setTranslate", () => {
      setTranslate2();
    });
    on("setTransition", (_s, duration) => {
      setTransition2(duration);
    });
    on("enable disable", () => {
      const {
        el
      } = swiper.scrollbar;
      if (el) {
        el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
      }
    });
    on("destroy", () => {
      destroy();
    });
    const enable = () => {
      swiper.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      if (swiper.scrollbar.el) {
        swiper.scrollbar.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      }
      init();
      updateSize2();
      setTranslate2();
    };
    const disable = () => {
      swiper.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      if (swiper.scrollbar.el) {
        swiper.scrollbar.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      }
      destroy();
    };
    Object.assign(swiper.scrollbar, {
      enable,
      disable,
      updateSize: updateSize2,
      setTranslate: setTranslate2,
      init,
      destroy
    });
  }

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/parallax.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/zoom.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/controller.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/a11y.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/history.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/hash-navigation.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/autoplay.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/thumbs.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/free-mode.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/grid.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/manipulation.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/effect-fade.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/shared/effect-init.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/shared/effect-target.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/shared/effect-virtual-transition-end.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/effect-cube.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/effect-flip.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/shared/create-shadow.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/effect-coverflow.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/effect-creative.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.2.4/node_modules/swiper/modules/effect-cards.mjs
  init_live_reload();

  // src/index.js
  var import_air_datepicker = __toESM(require_air_datepicker(), 1);
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const BREAKPOINT = 991;
    const DEBOUNCE_DELAY = 50;
    const swiperArgs = {
      modules: [Scrollbar, Mousewheel],
      wrapperClass: "ef_packages-wrapper",
      slideClass: "ef_package_component",
      slidesPerView: "auto",
      speed: 300,
      spaceBetween: 32,
      a11y: true,
      grabCursor: true,
      keyboard: false,
      mousewheel: { forceToAxis: true },
      scrollbar: {
        el: ".ef_packages-scrollbar",
        dragClass: "ef_packages-scrollbar-drag",
        draggable: true
      },
      on: {
        beforeInit: (swiper) => {
          swiper.wrapperEl.style.gridColumnGap = "unset";
        }
      }
    };
    let packageSwiper = null;
    const handleResize = () => {
      const newWindowWidth = window.innerWidth || document.documentElement.clientWidth;
      if (newWindowWidth >= BREAKPOINT) {
        if (!packageSwiper) {
          packageSwiper = new Swiper(".ef_packages-container", swiperArgs);
        } else {
          packageSwiper.update();
        }
      } else if (packageSwiper) {
        packageSwiper.destroy(true, true);
        packageSwiper = null;
      }
    };
    window.addEventListener("resize", debounce(handleResize, DEBOUNCE_DELAY));
    handleResize();
    document.querySelectorAll(".ef_toggle-dropdown_head").forEach(
      (toggle) => toggle.addEventListener("click", (event2) => event2.currentTarget.classList.toggle("is-open"))
    );
    const localeNl = {
      days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
      daysShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
      daysMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
      months: [
        "Januari",
        "Februari",
        "Maart",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Augustus",
        "September",
        "Oktober",
        "November",
        "December"
      ],
      monthsShort: [
        "Jan",
        "Feb",
        "Mrt",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dec"
      ],
      today: "Vandaag",
      clear: "Legen",
      dateFormat: "dd-MM-yyyy",
      timeFormat: "HH:mm",
      firstDay: 1
    };
    const createDatepicker = (selector, options) => {
      const field = document.querySelector(selector);
      new import_air_datepicker.default(field, {
        ...options,
        locale: localeNl,
        dateFormat: "dd-MM-yyyy",
        onShow: () => field.classList.add("is-active"),
        onHide: () => field.classList.remove("is-active")
      });
    };
    createDatepicker("#Birthday", {
      maxDate: /* @__PURE__ */ new Date()
    });
    createDatepicker("#startdatum", {
      minDate: new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 20)),
      maxDate: new Date(new Date((/* @__PURE__ */ new Date()).setDate(1)).setMonth((/* @__PURE__ */ new Date()).getMonth() + 6))
    });
  });
  function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }
})();
//# sourceMappingURL=index.js.map
