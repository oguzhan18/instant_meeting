(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+0KU":
    /*!******************************************************!*\
      !*** ./src/app/video-panel/video-panel.component.ts ***!
      \******************************************************/

    /*! exports provided: VideoPanelComponent */

    /***/
    function KU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoPanelComponent", function () {
        return VideoPanelComponent;
      });
      /* harmony import */


      var _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../video-player/video-player.component */
      "I7aQ");
      /* harmony import */


      var _video_panel_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./video-panel.directive */
      "Je/J");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      function VideoPanelComponent_ng_template_1_Template(rf, ctx) {}

      var VideoPanelComponent = /*#__PURE__*/function () {
        function VideoPanelComponent(componentFactoryResolver) {
          _classCallCheck(this, VideoPanelComponent);

          this.componentFactoryResolver = componentFactoryResolver;
          this.children = new Map();
        }

        _createClass(VideoPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addParticipant",
          value: function addParticipant(peer, stream) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_0__["VideoPlayerComponent"]);
            var viewContainerRef = this.videoHost.viewContainerRef;
            var componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.stream = stream;
            this.children.set(peer.id, componentRef.instance);
          }
        }, {
          key: "updateParticipant",
          value: function updateParticipant(peer, stream) {
            if (this.children.has(peer.id)) {
              this.children.get(peer.id).stream = stream;
            } else {
              this.addParticipant(peer, stream);
            }
          }
        }, {
          key: "removeParticipant",
          value: function removeParticipant(peer) {
            this.children["delete"](peer.id);
          }
        }]);

        return VideoPanelComponent;
      }();

      VideoPanelComponent.ɵfac = function VideoPanelComponent_Factory(t) {
        return new (t || VideoPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]));
      };

      VideoPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: VideoPanelComponent,
        selectors: [["app-video-panel"]],
        viewQuery: function VideoPanelComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_video_panel_directive__WEBPACK_IMPORTED_MODULE_1__["VideoPanelDirective"], 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.videoHost = _t.first);
          }
        },
        decls: 2,
        vars: 0,
        consts: [[1, "video-panel"], ["videoHost", ""]],
        template: function VideoPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VideoPanelComponent_ng_template_1_Template, 0, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        directives: [_video_panel_directive__WEBPACK_IMPORTED_MODULE_1__["VideoPanelDirective"]],
        styles: [".video-panel[_ngcontent-%COMP%] {\n    border: 1px dashed green;\n    height: 100%;\n    width: 100%;\n}\n.my-video[_ngcontent-%COMP%] {\n    height: 80%;\n    width: 100%;\n}\n.participants-panel[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    border: 1px dashed blueviolet;\n    height: 20%;\n}\n.participant-panel[_ngcontent-%COMP%] {\n    height: 100px;\n    width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQiIsImZpbGUiOiJ2aWRlby1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLXBhbmVsIHtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgZ3JlZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm15LXZpZGVvIHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5wYXJ0aWNpcGFudHMtcGFuZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgYmx1ZXZpb2xldDtcbiAgICBoZWlnaHQ6IDIwJTtcbn1cbi5wYXJ0aWNpcGFudC1wYW5lbCB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/aifasoft/Desktop/instant_meeting/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "55LC":
    /*!********************************************************!*\
      !*** ./src/app/participants/participants.component.ts ***!
      \********************************************************/

    /*! exports provided: ParticipantsComponent */

    /***/
    function LC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParticipantsComponent", function () {
        return ParticipantsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _conference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../conference.service */
      "YZm9");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ParticipantsComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", member_r1.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.info.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.status);
        }
      }

      var ParticipantsComponent = /*#__PURE__*/function () {
        function ParticipantsComponent(confService) {
          _classCallCheck(this, ParticipantsComponent);

          this.confService = confService;
        }

        _createClass(ParticipantsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "participants",
          get: function get() {
            return this.confService.all.filter(function (user) {
              return user.type === 'user';
            });
          }
        }]);

        return ParticipantsComponent;
      }();

      ParticipantsComponent.ɵfac = function ParticipantsComponent_Factory(t) {
        return new (t || ParticipantsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_conference_service__WEBPACK_IMPORTED_MODULE_1__["ConferenceService"]));
      };

      ParticipantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ParticipantsComponent,
        selectors: [["app-participants"]],
        decls: 3,
        vars: 1,
        consts: [[1, "right-panel"], [4, "ngFor", "ngForOf"], [1, "participant"], [1, "name", 3, "id"], [1, "info"], [1, "status"]],
        template: function ParticipantsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ParticipantsComponent_li_2_Template, 7, 3, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.participants);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: [".right-panel[_ngcontent-%COMP%] {\n    min-width: 25%;\n    height: 100%;\n    border: 1px dashed gray;\n}\n\n.participant[_ngcontent-%COMP%] {\n\n}\n\n.name[_ngcontent-%COMP%] {\n    font-size: larger;\n}\n\n.info[_ngcontent-%COMP%] {\n    font-size: smaller;\n}\n\nul[_ngcontent-%COMP%] {\n    list-style: none;\n    padding: 0;\n    margin-left: 2em;\n    margin-right: 2em;\n}\n\nli[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpY2lwYW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoicGFydGljaXBhbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHQtcGFuZWwge1xuICAgIG1pbi13aWR0aDogMjUlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgZ3JheTtcbn1cblxuLnBhcnRpY2lwYW50IHtcblxufVxuXG4ubmFtZSB7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi5pbmZvIHtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbn1cblxubGkge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "I7aQ":
    /*!********************************************************!*\
      !*** ./src/app/video-player/video-player.component.ts ***!
      \********************************************************/

    /*! exports provided: VideoPlayerComponent */

    /***/
    function I7aQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function () {
        return VideoPlayerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["video"];

      function VideoPlayerComponent_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.error);
        }
      }

      var VideoPlayerComponent = /*#__PURE__*/function () {
        function VideoPlayerComponent() {
          _classCallCheck(this, VideoPlayerComponent);

          this.error = null;
        }

        _createClass(VideoPlayerComponent, [{
          key: "stream",
          get: function get() {
            return this.videoStream;
          },
          set: function set(value) {
            this.videoStream = value;

            if (this.video) {
              if (this.videoStream != null && this.videoStream.getVideoTracks().length) {
                this.video.nativeElement.srcObject = this.videoStream;
                this.video.nativeElement.play();
              } else {
                this.video.nativeElement.srcObject = null;
              }
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VideoPlayerComponent;
      }();

      VideoPlayerComponent.ɵfac = function VideoPlayerComponent_Factory(t) {
        return new (t || VideoPlayerComponent)();
      };

      VideoPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VideoPlayerComponent,
        selectors: [["app-video-player"]],
        viewQuery: function VideoPlayerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
          }
        },
        decls: 3,
        vars: 1,
        consts: [["playsinline", "true", "autoplay", "autoplay", "muted", "true", "width", "200", "height", "200"], ["video", ""], [4, "ngIf"]],
        template: function VideoPlayerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VideoPlayerComponent_p_2_Template, 2, 1, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby1wbGF5ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "J96M":
    /*!****************************************************!*\
      !*** ./src/app/conference/conference.component.ts ***!
      \****************************************************/

    /*! exports provided: ConferenceComponent */

    /***/
    function J96M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConferenceComponent", function () {
        return ConferenceComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _video_panel_video_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../video-panel/video-panel.component */
      "+0KU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _conference_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../conference.service */
      "YZm9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _participants_participants_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../participants/participants.component */
      "55LC");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function ConferenceComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
        }
      }

      function ConferenceComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-video-panel", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-participants");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConferenceComponent_div_1_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.onToggleVideoClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConferenceComponent_div_1_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.onToggleAudioClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConferenceComponent_div_1_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.onLeaveClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "exit_to_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Leave ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("me", ctx_r1.me);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.toggleVideoButtonIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.toggleVideoButtonTitle, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.toggleAudioButtonIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.toggleAudioButtonTitle, " ");
        }
      }

      var ConferenceComponent = /*#__PURE__*/function () {
        function ConferenceComponent(confService, route, router) {
          _classCallCheck(this, ConferenceComponent);

          this.confService = confService;
          this.route = route;
          this.router = router;
          this.streamObserver = null;
          this.conferenceId = null;
          this.conference = null;
          this.name = null;
          this.me = null;
          this.error = null;
          this.audioActive = false;
          this.videoActive = false;
          this.initStreamObserver();
        }

        _createClass(ConferenceComponent, [{
          key: "toggleAudioButtonTitle",
          get: function get() {
            return this.audioActive ? 'Mute Audio' : 'Unmute Audio';
          }
        }, {
          key: "toggleAudioButtonIcon",
          get: function get() {
            return this.audioActive ? 'voice_over_off' : 'record_voice_over';
          }
        }, {
          key: "toggleVideoButtonTitle",
          get: function get() {
            return this.videoActive ? 'Disable Video' : 'Enable Video';
          }
        }, {
          key: "toggleVideoButtonIcon",
          get: function get() {
            return this.videoActive ? 'videocam_off' : 'videocam';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var conf;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // read conference id and participant name from URI
                      this.conferenceId = this.route.snapshot.paramMap.get('id');
                      this.name = this.route.snapshot.paramMap.get('name');
                      _context.prev = 2;
                      _context.next = 5;
                      return this.confService.join(this.conferenceId, this.name, this.streamObserver);

                    case 5:
                      conf = _context.sent;
                      this.conference = conf;
                      this.audioActive = true;
                      this.videoActive = false;
                      this.me = this.confService.me;
                      _context.next = 15;
                      break;

                    case 12:
                      _context.prev = 12;
                      _context.t0 = _context["catch"](2);
                      this.error = _context.t0;

                    case 15:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[2, 12]]);
            }));
          }
        }, {
          key: "initStreamObserver",
          value: function initStreamObserver() {
            var _this = this;

            this.streamObserver = {
              next: function next(_ref) {
                var peer = _ref.peer,
                    stream = _ref.stream,
                    eventType = _ref.eventType;

                if (eventType === "streamAdded") {
                  _this.videoPanel.addParticipant(peer, stream);
                } else if (eventType === "streamUpdated") {
                  _this.videoPanel.updateParticipant(peer, stream);
                } else {
                  _this.videoPanel.removeParticipant(peer);
                }
              },
              error: function error(errorMessage) {
                _this.error = errorMessage;
              },
              complete: function complete() {}
            };
          }
        }, {
          key: "onToggleAudioClick",
          value: function onToggleAudioClick() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.audioActive) {
                        _context2.next = 5;
                        break;
                      }

                      _context2.next = 3;
                      return this.confService.stopAudio();

                    case 3:
                      _context2.next = 7;
                      break;

                    case 5:
                      _context2.next = 7;
                      return this.confService.startAudio();

                    case 7:
                      this.audioActive = !this.audioActive;

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onToggleVideoClick",
          value: function onToggleVideoClick() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this.videoActive) {
                        _context3.next = 5;
                        break;
                      }

                      _context3.next = 3;
                      return this.confService.stopVideo();

                    case 3:
                      _context3.next = 7;
                      break;

                    case 5:
                      _context3.next = 7;
                      return this.confService.startVideo();

                    case 7:
                      this.videoActive = !this.videoActive;

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "onLeaveClick",
          value: function onLeaveClick() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.confService.leave();

                    case 2:
                      this.router.navigate(['/']);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return ConferenceComponent;
      }();

      ConferenceComponent.ɵfac = function ConferenceComponent_Factory(t) {
        return new (t || ConferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_conference_service__WEBPACK_IMPORTED_MODULE_3__["ConferenceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      ConferenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ConferenceComponent,
        selectors: [["app-conference"]],
        viewQuery: function ConferenceComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_video_panel_video_panel_component__WEBPACK_IMPORTED_MODULE_1__["VideoPanelComponent"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.videoPanel = _t.first);
          }
        },
        decls: 2,
        vars: 2,
        consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "main-panel"], [1, "video-panel", 3, "me"], [1, "controls-panel"], ["mat-stroked-button", "", "id", "mute-video-btn", 1, "ctrl-button", 3, "click"], ["mat-stroked-button", "", "id", "mute-audio-btn", 1, "ctrl-button", 3, "click"], ["mat-stroked-button", "", "id", "leave-btn", 1, "ctrl-button", 3, "click"]],
        template: function ConferenceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ConferenceComponent_div_0_Template, 3, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConferenceComponent_div_1_Template, 17, 5, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error !== null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error === null);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _video_panel_video_panel_component__WEBPACK_IMPORTED_MODULE_1__["VideoPanelComponent"], _participants_participants_component__WEBPACK_IMPORTED_MODULE_6__["ParticipantsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
        styles: [".main-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 70%;\n}\n\n.video-panel[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.controls-panel[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.ctrl-button[_ngcontent-%COMP%] {\n    margin: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZlcmVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJjb25mZXJlbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNzAlO1xufVxuXG4udmlkZW8tcGFuZWwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRyb2xzLXBhbmVsIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmN0cmwtYnV0dG9uIHtcbiAgICBtYXJnaW46IDRweDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Je/J":
    /*!******************************************************!*\
      !*** ./src/app/video-panel/video-panel.directive.ts ***!
      \******************************************************/

    /*! exports provided: VideoPanelDirective */

    /***/
    function JeJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoPanelDirective", function () {
        return VideoPanelDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var VideoPanelDirective = function VideoPanelDirective(viewContainerRef) {
        _classCallCheck(this, VideoPanelDirective);

        this.viewContainerRef = viewContainerRef;
      };

      VideoPanelDirective.ɵfac = function VideoPanelDirective_Factory(t) {
        return new (t || VideoPanelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      VideoPanelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: VideoPanelDirective,
        selectors: [["", "videoHost", ""]]
      });
      /***/
    },

    /***/
    "NZXM":
    /*!**************************************!*\
      !*** ./src/app/translate.service.ts ***!
      \**************************************/

    /*! exports provided: TranslateService */

    /***/
    function NZXM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslateService", function () {
        return TranslateService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var TranslateService = /*#__PURE__*/function () {
        function TranslateService(http) {
          _classCallCheck(this, TranslateService);

          this.http = http;
          this.data = {};
        }

        _createClass(TranslateService, [{
          key: "use",
          value: function use(lang) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              var langPath = "assets/languageFiles/".concat(lang || 'en', ".json");

              _this2.http.get(langPath).subscribe(function (translation) {
                _this2.data = Object.assign({}, translation || {});
                resolve(_this2.data);
              }, function (error) {
                _this2.data = {};
                resolve(_this2.data);
              });
            });
          }
        }]);

        return TranslateService;
      }();

      TranslateService.ɵfac = function TranslateService_Factory(t) {
        return new (t || TranslateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      TranslateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TranslateService,
        factory: TranslateService.ɵfac
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./translate.service */
      "NZXM");
      /* harmony import */


      var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./top-bar/top-bar.component */
      "oDk3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _translate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./translate.pipe */
      "eKg/");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(translate) {
          _classCallCheck(this, AppComponent);

          this.translate = translate;
          this.title = 'instant_meeting';
          console.log(translate.data);
        }

        _createClass(AppComponent, [{
          key: "setLang",
          value: function setLang(lang) {
            this.translate.use(lang);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 3,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome to ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "TITLE"), "! ");
          }
        },
        directives: [_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__["TopBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        pipes: [_translate_pipe__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "Tysi":
    /*!**************************************************************!*\
      !*** ./src/app/join-conference/join-conference.component.ts ***!
      \**************************************************************/

    /*! exports provided: JoinConferenceComponent */

    /***/
    function Tysi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoinConferenceComponent", function () {
        return JoinConferenceComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../translate.pipe */
      "eKg/");

      var JoinConferenceComponent = /*#__PURE__*/function () {
        function JoinConferenceComponent(route, router, formBuilder) {
          _classCallCheck(this, JoinConferenceComponent);

          this.route = route;
          this.router = router;
          this.formBuilder = formBuilder;
          this.conferenceId = null;
          this.conferenceForm = this.formBuilder.group({
            id: '',
            name: ''
          });
        }

        _createClass(JoinConferenceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.conferenceId = this.route.snapshot.paramMap.get('id');
                      this.conferenceForm.setValue({
                        id: this.conferenceId,
                        name: ''
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.router.navigate(['/conference', {
              id: this.conferenceForm.value.id,
              name: this.conferenceForm.value.name
            }]);
          }
        }]);

        return JoinConferenceComponent;
      }();

      JoinConferenceComponent.ɵfac = function JoinConferenceComponent_Factory(t) {
        return new (t || JoinConferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
      };

      JoinConferenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: JoinConferenceComponent,
        selectors: [["app-join-conference"]],
        decls: 19,
        vars: 13,
        consts: [[1, "create-conference-container"], [1, "create-conference-content"], [1, "mat-headline"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "id", "id", "type", "text", "formControlName", "id", "required", ""], ["matInput", "", "id", "name", "type", "text", "formControlName", "name", "required", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "button"]],
        template: function JoinConferenceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function JoinConferenceComponent_Template_form_ngSubmit_5_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, "Joinaconference"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.conferenceForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "Joinaconference_Id"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 9, "Joinaconference_Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 11, "CreatingaConference_Join"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        pipes: [_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: [".create-conference-content[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10%;\n  width: 30%;\n}\n\n.create-conference-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvaW4tY29uZmVyZW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJqb2luLWNvbmZlcmVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtY29uZmVyZW5jZS1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICB3aWR0aDogMzAlO1xufVxuXG4uY3JlYXRlLWNvbmZlcmVuY2UtY29udGVudCBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "YZm9":
    /*!***************************************!*\
      !*** ./src/app/conference.service.ts ***!
      \***************************************/

    /*! exports provided: ConferenceService */

    /***/
    function YZm9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConferenceService", function () {
        return ConferenceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @voxeet/voxeet-web-sdk */
      "cvBF");
      /* harmony import */


      var _voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./storage.service */
      "qkCY");
      /* harmony import */


      var _credentials_vault_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./credentials-vault.service */
      "rcye");

      var ConferenceService = /*#__PURE__*/function () {
        function ConferenceService(storage, credentialsVault) {
          var _this3 = this;

          _classCallCheck(this, ConferenceService);

          this.storage = storage;
          this.credentialsVault = credentialsVault;
          this.allowedEvents = ["streamAdded", "streamUpdated", "streamRemoved"];

          var _iterator = _createForOfIteratorHelper(this.allowedEvents),
              _step;

          try {
            var _loop = function _loop() {
              var eventType = _step.value;

              _voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.conference.on(eventType, function (peer, stream) {
                if (_this3.streamObserver) {
                  _this3.streamObserver.next({
                    peer: peer,
                    stream: stream,
                    eventType: eventType
                  });
                }
              });
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        _createClass(ConferenceService, [{
          key: "initialize",
          value: function initialize() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var credentials;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.credentialsVault.getCredentials();

                    case 2:
                      credentials = _context6.sent;

                      _voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.initialize(credentials.key, credentials.secret);

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "join",
          value: function join(alias, name, observer) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var conferenceDefaults, conferenceOptions, conference;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.streamObserver = observer; // load conference details and settings from storage

                      _context7.next = 3;
                      return this.storage.load(alias);

                    case 3:
                      conferenceDefaults = _context7.sent;
                      _context7.next = 6;
                      return _voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.session.open({
                        name: name
                      });

                    case 6:
                      conferenceOptions = {
                        alias: conferenceDefaults.id,
                        params: Object.assign({}, conferenceDefaults.options)
                      }; // create conference

                      _context7.next = 9;
                      return _voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.conference.create(conferenceOptions);

                    case 9:
                      conference = _context7.sent;
                      _context7.next = 12;
                      return _voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.conference.join(conference, {
                        constraints: {
                          audio: true,
                          video: false
                        }
                      });

                    case 12:
                      return _context7.abrupt("return", _context7.sent);

                    case 13:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "leave",
          value: function leave() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.streamObserver.complete();
                      this.streamObserver = null;
                      _context8.next = 4;
                      return _voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.conference.leave();

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "startAudio",
          value: function startAudio() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return _voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.conference.startAudio(this.me);

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "stopAudio",
          value: function stopAudio() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return _voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.conference.stopAudio(this.me);

                    case 2:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "startVideo",
          value: function startVideo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var videoConstraints;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      videoConstraints = {
                        width: {
                          min: '500',
                          max: '1280'
                        },
                        height: {
                          min: '300',
                          max: '720'
                        }
                      };
                      _context11.next = 3;
                      return _voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.conference.startVideo(this.me, videoConstraints);

                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "stopVideo",
          value: function stopVideo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return _voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.conference.stopVideo(this.me);

                    case 2:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "me",
          get: function get() {
            return _voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.session.participant;
          }
        }, {
          key: "connected",
          get: function get() {
            var all = _toConsumableArray(_voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.conference.participants).map(function (val) {
              return val[1];
            });

            return all.filter(function (item) {
              return item.status === 'Connected';
            });
          }
        }, {
          key: "all",
          get: function get() {
            return _toConsumableArray(_voxeet_voxeet_web_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.conference.participants).map(function (val) {
              return val[1];
            });
          }
        }]);

        return ConferenceService;
      }();

      ConferenceService.ɵfac = function ConferenceService_Factory(t) {
        return new (t || ConferenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_credentials_vault_service__WEBPACK_IMPORTED_MODULE_4__["CredentialsVaultService"]));
      };

      ConferenceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ConferenceService,
        factory: ConferenceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: setupTranslateFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setupTranslateFactory", function () {
        return setupTranslateFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _conference_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./conference.service */
      "YZm9");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./top-bar/top-bar.component */
      "oDk3");
      /* harmony import */


      var _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./welcome-page/welcome-page.component */
      "fDIK");
      /* harmony import */


      var _create_conference_create_conference_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./create-conference/create-conference.component */
      "hJfk");
      /* harmony import */


      var _join_conference_join_conference_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./join-conference/join-conference.component */
      "Tysi");
      /* harmony import */


      var _conference_conference_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./conference/conference.component */
      "J96M");
      /* harmony import */


      var _video_panel_video_panel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./video-panel/video-panel.component */
      "+0KU");
      /* harmony import */


      var _participants_participants_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./participants/participants.component */
      "55LC");
      /* harmony import */


      var _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./video-player/video-player.component */
      "I7aQ");
      /* harmony import */


      var _video_panel_video_panel_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./video-panel/video-panel.directive */
      "Je/J");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _translate_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./translate.service */
      "NZXM");
      /* harmony import */


      var _translate_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./translate.pipe */
      "eKg/");
      /* harmony import */


      var src_AppSettings__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! src/AppSettings */
      "oA9W"); // import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
      // import { TranslateHttpLoader } from "@ngx-translate/http-loader";


      var Router = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
        path: '',
        component: _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_16__["WelcomePageComponent"]
      }, {
        path: 'welcome-page',
        component: _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_16__["WelcomePageComponent"]
      }, {
        path: 'create-conference',
        component: _create_conference_create_conference_component__WEBPACK_IMPORTED_MODULE_17__["CreateConferenceComponent"]
      }, {
        path: 'join-conference',
        component: _join_conference_join_conference_component__WEBPACK_IMPORTED_MODULE_18__["JoinConferenceComponent"]
      }, {
        path: 'conference',
        component: _conference_conference_component__WEBPACK_IMPORTED_MODULE_19__["ConferenceComponent"]
      }]);

      function setupTranslateFactory(service) {
        return function () {
          return service.use(src_AppSettings__WEBPACK_IMPORTED_MODULE_28__["AppSettings"].language);
        };
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [_conference_service__WEBPACK_IMPORTED_MODULE_12__["ConferenceService"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
          useFactory: function useFactory(svc) {
            return function () {
              return svc.initialize();
            };
          },
          deps: [_conference_service__WEBPACK_IMPORTED_MODULE_12__["ConferenceService"]],
          multi: true
        }, _translate_service__WEBPACK_IMPORTED_MODULE_26__["TranslateService"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
          useFactory: setupTranslateFactory,
          deps: [_translate_service__WEBPACK_IMPORTED_MODULE_26__["TranslateService"]],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], Router, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_15__["TopBarComponent"], _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_16__["WelcomePageComponent"], _create_conference_create_conference_component__WEBPACK_IMPORTED_MODULE_17__["CreateConferenceComponent"], _join_conference_join_conference_component__WEBPACK_IMPORTED_MODULE_18__["JoinConferenceComponent"], _conference_conference_component__WEBPACK_IMPORTED_MODULE_19__["ConferenceComponent"], _video_panel_video_panel_component__WEBPACK_IMPORTED_MODULE_20__["VideoPanelComponent"], _participants_participants_component__WEBPACK_IMPORTED_MODULE_21__["ParticipantsComponent"], _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_22__["VideoPlayerComponent"], _video_panel_video_panel_directive__WEBPACK_IMPORTED_MODULE_23__["VideoPanelDirective"], _translate_pipe__WEBPACK_IMPORTED_MODULE_27__["TranslatePipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"]]
        });
      })();
      /***/

    },

    /***/
    "eKg/":
    /*!***********************************!*\
      !*** ./src/app/translate.pipe.ts ***!
      \***********************************/

    /*! exports provided: TranslatePipe */

    /***/
    function eKg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslatePipe", function () {
        return TranslatePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./translate.service */
      "NZXM");

      var TranslatePipe = /*#__PURE__*/function () {
        function TranslatePipe(translate) {
          _classCallCheck(this, TranslatePipe);

          this.translate = translate;
        }

        _createClass(TranslatePipe, [{
          key: "transform",
          value: function transform(key) {
            return this.translate.data[key] || key;
          }
        }]);

        return TranslatePipe;
      }();

      TranslatePipe.ɵfac = function TranslatePipe_Factory(t) {
        return new (t || TranslatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
      };

      TranslatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "translate",
        type: TranslatePipe,
        pure: false
      });
      /***/
    },

    /***/
    "fDIK":
    /*!********************************************************!*\
      !*** ./src/app/welcome-page/welcome-page.component.ts ***!
      \********************************************************/

    /*! exports provided: WelcomePageComponent */

    /***/
    function fDIK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function () {
        return WelcomePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _translate_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../translate.pipe */
      "eKg/");

      var WelcomePageComponent = /*#__PURE__*/function () {
        function WelcomePageComponent() {
          _classCallCheck(this, WelcomePageComponent);
        }

        _createClass(WelcomePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WelcomePageComponent;
      }();

      WelcomePageComponent.ɵfac = function WelcomePageComponent_Factory(t) {
        return new (t || WelcomePageComponent)();
      };

      WelcomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WelcomePageComponent,
        selectors: [["app-welcome-page"]],
        decls: 24,
        vars: 12,
        consts: [["width", "380px", "height", "500px", "viewBox", "0 0 837 1045", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xmlns", "sketch", "http://www.bohemiancoding.com/sketch/ns"], ["id", "Page-1", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd", 0, "sketch", "type", "MSPage"], ["d", "M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z", "id", "Polygon-1", "stroke", "#007FB2", "stroke-width", "6", 0, "sketch", "type", "MSShapeGroup"], ["d", "M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z", "id", "Polygon-2", "stroke", "#EF4A5B", "stroke-width", "6", 0, "sketch", "type", "MSShapeGroup"], ["d", "M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z", "id", "Polygon-3", "stroke", "#795D9C", "stroke-width", "6", 0, "sketch", "type", "MSShapeGroup"], ["d", "M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z", "id", "Polygon-4", "stroke", "#F2773F", "stroke-width", "6", 0, "sketch", "type", "MSShapeGroup"], ["d", "M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z", "id", "Polygon-5", "stroke", "#36B455", "stroke-width", "6", 0, "sketch", "type", "MSShapeGroup"], [1, "message-box"], [1, "buttons-con"], [1, "action-link-wrap"], [1, "link-button"], ["mat-button", "", "mat-button", "", "color", "primary", "routerLink", "/create-conference"], ["mat-button", "", "mat-button", "", "color", "primary", "routerLink", "/join-conference"]],
        template: function WelcomePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, "TITLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, "Welcome_message"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 8, "Welcome_btm_new_meeting"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, "Welcome_btn_join"));
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        pipes: [_translate_pipe__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
        styles: [".welcome-page-content[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10%;\n  width: 70%;\n}\n\n.welcome-page-link[_ngcontent-%COMP%] {\n  color: white;\n  cursor: pointer;\n}\n\n.mat-headline[_ngcontent-%COMP%]{\n  text-align: center;\n  font-size:2em;\n}\n\n.welcome-page-link[_ngcontent-%COMP%]{\n  background-color: rgb(141, 17, 85);\n}\n\nsvg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -250px;\n  margin-left: -400px;\n}\n\n.message-box[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 380px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: 50px;\n  color: #FFF;\n  font-family: Roboto;\n  font-weight: 300;\n}\n\n.message-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 46px;\n  margin-bottom: 40px;\n}\n\n.buttons-con[_ngcontent-%COMP%]   .action-link-wrap[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.buttons-con[_ngcontent-%COMP%]   .action-link-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #68c950;\n  padding: 8px 25px;\n  border-radius: 4px;\n  color: #FFF;\n  font-weight: bold;\n  font-size: 14px;\n  transition: all 0.3s linear;\n  cursor: pointer;\n  text-decoration: none;\n  margin-right: 10px\n}\n\n.buttons-con[_ngcontent-%COMP%]   .action-link-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #5A5C6C;\n  color: #fff;\n}\n\n#Polygon-1[_ngcontent-%COMP%], #Polygon-2[_ngcontent-%COMP%], #Polygon-3[_ngcontent-%COMP%], #Polygon-4[_ngcontent-%COMP%], #Polygon-4[_ngcontent-%COMP%], #Polygon-5[_ngcontent-%COMP%] {\n  -webkit-animation: float 1s infinite ease-in-out alternate;\n          animation: float 1s infinite ease-in-out alternate;\n}\n\n#Polygon-2[_ngcontent-%COMP%] {\n  -webkit-animation-delay: .2s;\n          animation-delay: .2s; \n}\n\n#Polygon-3[_ngcontent-%COMP%] {\n  -webkit-animation-delay: .4s;\n          animation-delay: .4s; \n}\n\n#Polygon-4[_ngcontent-%COMP%] {\n  -webkit-animation-delay: .6s;\n          animation-delay: .6s; \n}\n\n#Polygon-5[_ngcontent-%COMP%] {\n  -webkit-animation-delay: .8s;\n          animation-delay: .8s; \n}\n\n@-webkit-keyframes float {\n\t100% {\n    transform: translateY(20px);\n  }\n}\n\n@keyframes float {\n\t100% {\n    transform: translateY(20px);\n  }\n}\n\n@media (max-width: 450px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -250px;\n    margin-left: -190px;\n  }\n  .message-box[_ngcontent-%COMP%] {\n    top: 50%;\n    left: 50%;\n    margin-top: -100px;\n    margin-left: -190px;\n    text-align: center;\n  }\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  display: inline-block;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n  height: 60px;\n  width: 100%;\n  background: #bbb;\n  padding: 10px 20px;\n  float: none;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n\nli[_ngcontent-%COMP%] {\n  float: right;\n  margin: 0px 10px;\n}\n\n\n\n\n\n#welcome-page[_ngcontent-%COMP%] {\n  background-image: url(http://www.bartsalle.nl/wp-content/uploads/2013/12/background-css-750x450.jpg);\n  background-attachment: fixed;\n  background-position: center;\n  background-size: cover;\n  height: 700px;\n}\n\n#welcome-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.block[_ngcontent-%COMP%] {\n  background: rgba(128, 128, 128, 128);\n  border: #FFF 20px double;\n  border-radius: 10px;\n  color:red;\n  display: inline-block;\n  font-size: 60px;\n  font-weight: 800;\n  padding: 0 10px 7px;\n  margin: 250px;\n  text-align: center;\n}\n\n\n\n#aboutme[_ngcontent-%COMP%] {\n  background-size: cover;\n  background: #d3d9d9;\n  background-image: url(https://i.stack.imgur.com/jGlzr.png);\n  background-attachment: fixed;\n  background-position: center;\n  height: 700px;\n}\n\n#portfolio[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-image: url(https://images6.alphacoders.com/389/389875.jpg);\n  background-attachment: fixed;\n  background-position: center;\n  height: 700px;\n}\n\n#footer[_ngcontent-%COMP%] {\n  text-align: center;\n  background-size: cover;\n  background-image: url(http://carmel.coop/wp-content/uploads/2014/04/Blurred-Background_4.jpg);\n  background-attachment: fixed;\n  background-position: center;\n  height: 250px;\n  padding: 20px;\n}\n\n.fs[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n\n.img[_ngcontent-%COMP%] {\n  margin: 60px 20px;\n  border-radius: 50%;\n  height: 550px;\n  display: inline-block;\n  transform: scale(-1, 1);\n  -webkit-transform: scale(-1, 1);\n  -moz-transform: scale(-1, 1);\n  -o-transform: scale(-1, 1);\n}\n\n.title[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: grey;\n  border: #AAA 5px double;\n  border-radius: 10px;\n  color: blue;\n  padding-left: 40px;\n  padding-right: 40px;\n  text-shadow: 2px 2px 5px #000;\n  font-size: 30px;\n}\n\n.icon-btn[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQVdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixxQkFBcUI7RUFDckI7QUFDRjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwREFBa0Q7VUFBbEQsa0RBQWtEO0FBQ3BEOztBQUNBO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFFQTtDQUNDO0lBQ0csMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBSkE7Q0FDQztJQUNHLDJCQUEyQjtFQUM3QjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBR0Esc0JBQXNCOztBQUd0QixpQkFBaUI7O0FBRWpCO0VBQ0Usb0dBQW9HO0VBQ3BHLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFHQSx3QkFBd0I7O0FBRXhCO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwwREFBMEQ7RUFDMUQsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIscUVBQXFFO0VBQ3JFLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw2RkFBNkY7RUFDN0YsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6IndlbGNvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtcGFnZS1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICB3aWR0aDogNzAlO1xufVxuXG4ud2VsY29tZS1wYWdlLWxpbmsge1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYXQtaGVhZGxpbmV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOjJlbTtcbn1cbi53ZWxjb21lLXBhZ2UtbGlua3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MSwgMTcsIDg1KTtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMjUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNDAwcHg7XG59XG4ubWVzc2FnZS1ib3gge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMzgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ubWVzc2FnZS1ib3ggaDEge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLmJ1dHRvbnMtY29uIC5hY3Rpb24tbGluay13cmFwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5idXR0b25zLWNvbiAuYWN0aW9uLWxpbmstd3JhcCBhIHtcbiAgYmFja2dyb3VuZDogIzY4Yzk1MDtcbiAgcGFkZGluZzogOHB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMTBweFxufVxuLmJ1dHRvbnMtY29uIC5hY3Rpb24tbGluay13cmFwIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNUE1QzZDO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI1BvbHlnb24tMSAsICNQb2x5Z29uLTIgLCAjUG9seWdvbi0zICwgI1BvbHlnb24tNCAsICNQb2x5Z29uLTQsICNQb2x5Z29uLTUge1xuICBhbmltYXRpb246IGZsb2F0IDFzIGluZmluaXRlIGVhc2UtaW4tb3V0IGFsdGVybmF0ZTtcbn1cbiNQb2x5Z29uLTIge1xuICBhbmltYXRpb24tZGVsYXk6IC4yczsgXG59XG4jUG9seWdvbi0zIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAuNHM7IFxufVxuI1BvbHlnb24tNCB7XG4gIGFuaW1hdGlvbi1kZWxheTogLjZzOyBcbn1cbiNQb2x5Z29uLTUge1xuICBhbmltYXRpb24tZGVsYXk6IC44czsgXG59XG5cbkBrZXlmcmFtZXMgZmxvYXQge1xuXHQxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICBzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTI1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTkwcHg7XG4gIH1cbiAgLm1lc3NhZ2UtYm94IHtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTkwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNiYmI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG5saSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbn1cblxuXG4vKiBFbmQgb2YgTmF2YmFyIENTUyAqL1xuXG5cbi8qIFdlbGNvbWUgUGFnZSAqL1xuXG4jd2VsY29tZS1wYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly93d3cuYmFydHNhbGxlLm5sL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEzLzEyL2JhY2tncm91bmQtY3NzLTc1MHg0NTAuanBnKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDcwMHB4O1xufVxuXG4jd2VsY29tZS10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmxvY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDEyOCk7XG4gIGJvcmRlcjogI0ZGRiAyMHB4IGRvdWJsZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6cmVkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogMCAxMHB4IDdweDtcbiAgbWFyZ2luOiAyNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi8qIEVuZCBvZiBXZWxjb21lIFBhZ2UgKi9cblxuI2Fib3V0bWUge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kOiAjZDNkOWQ5O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLnN0YWNrLmltZ3VyLmNvbS9qR2x6ci5wbmcpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogNzAwcHg7XG59XG5cbiNwb3J0Zm9saW8ge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXM2LmFscGhhY29kZXJzLmNvbS8zODkvMzg5ODc1LmpwZyk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MDBweDtcbn1cblxuI2Zvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly9jYXJtZWwuY29vcC93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wNC9CbHVycmVkLUJhY2tncm91bmRfNC5qcGcpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mcyB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuXG4uaW1nIHtcbiAgbWFyZ2luOiA2MHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG59XG5cbi50aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgYm9yZGVyOiAjQUFBIDVweCBkb3VibGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiBibHVlO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCAjMDAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5pY29uLWJ0biB7XG4gIG1hcmdpbjogMCAyMHB4O1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "hJfk":
    /*!******************************************************************!*\
      !*** ./src/app/create-conference/create-conference.component.ts ***!
      \******************************************************************/

    /*! exports provided: CreateConferenceComponent */

    /***/
    function hJfk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateConferenceComponent", function () {
        return CreateConferenceComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! uuid */
      "4USb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _translate_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../translate.pipe */
      "eKg/");

      function CreateConferenceComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateConferenceComponent_div_1_Template_form_ngSubmit_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-checkbox", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "H264");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "V8");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 11, "CreatingaConference"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.conferenceForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 13, "PinCode"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 15, "UseDolbyVoice"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 17, "AllowLiveRecording"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 19, "RTCPMode"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 21, "RTCPMode1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 23, "RTCPMode2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 25, "RTCPMode3"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 27, "VideoCodec"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](42, 29, "Create"));
        }
      }

      function CreateConferenceComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateConferenceComponent_div_2_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.onJoinClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, "CreatingaConferenceSuccses"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, "CreatingaConference_Join_Mesagge"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.conferenceId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 8, "CreatingaConference_Join"));
        }
      }

      var CreateConferenceComponent = /*#__PURE__*/function () {
        function CreateConferenceComponent(storage, formBuilder, router) {
          _classCallCheck(this, CreateConferenceComponent);

          this.storage = storage;
          this.formBuilder = formBuilder;
          this.router = router;
          this.conferenceId = null;
          this.conferenceForm = this.formBuilder.group({
            alias: '',
            pinCode: '',
            dolbyVoice: true,
            liveRecording: false,
            rtcpMode: 'average',
            videoCodec: 'H264'
          });
        }

        _createClass(CreateConferenceComponent, [{
          key: "onSubmit",
          value: function onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      // Process checkout data 
                      this.conferenceId = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
                      this.storage.save({
                        id: this.conferenceId,
                        options: this.conferenceForm.value
                      });

                    case 2:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "onJoinClick",
          value: function onJoinClick() {
            this.router.navigate(['/join-conference', {
              id: this.conferenceId
            }]);
          }
        }]);

        return CreateConferenceComponent;
      }();

      CreateConferenceComponent.ɵfac = function CreateConferenceComponent_Factory(t) {
        return new (t || CreateConferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      CreateConferenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CreateConferenceComponent,
        selectors: [["app-create-conference"]],
        decls: 3,
        vars: 2,
        consts: [[1, "create-conference-container"], ["class", "create-conference-content", 4, "ngIf"], [1, "create-conference-content"], [1, "mat-headline"], [3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "id", "pinCode", "type", "text", "formControlName", "pinCode"], [1, "conf-options-section"], ["formControlName", "dolbyVoice", 1, "checkbox-margin"], ["formControlName", "liveRecording", 1, "checkbox-margin"], ["formControlName", "rtcpMode"], ["value", "worst"], ["value", "average"], ["value", "max"], ["required", "", "formControlName", "videoCodec"], ["value", "H264", "selected", ""], ["value", "V8"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "button"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "mt10", 3, "click"]],
        template: function CreateConferenceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateConferenceComponent_div_1_Template, 43, 31, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateConferenceComponent_div_2_Template, 12, 10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.conferenceId === null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.conferenceId !== null);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"]],
        pipes: [_translate_pipe__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]],
        styles: [".create-conference-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.create-conference-content[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10%;\n  width: 30%;\n}\n\n.create-conference-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.checkbox-margin[_ngcontent-%COMP%] {\n  margin-right: 2em;\n  margin-bottom: 1em;\n}\n\n.mt10[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jb25mZXJlbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoiY3JlYXRlLWNvbmZlcmVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtY29uZmVyZW5jZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jcmVhdGUtY29uZmVyZW5jZS1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICB3aWR0aDogMzAlO1xufVxuXG4uY3JlYXRlLWNvbmZlcmVuY2UtY29udGVudCBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNoZWNrYm94LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5tdDEwIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "oA9W":
    /*!****************************!*\
      !*** ./src/AppSettings.ts ***!
      \****************************/

    /*! exports provided: AppSettings */

    /***/
    function oA9W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
        return AppSettings;
      });

      var AppSettings = function AppSettings() {
        _classCallCheck(this, AppSettings);
      };

      AppSettings.language = 'en';
      /***/
    },

    /***/
    "oDk3":
    /*!**********************************************!*\
      !*** ./src/app/top-bar/top-bar.component.ts ***!
      \**********************************************/

    /*! exports provided: TopBarComponent */

    /***/
    function oDk3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
        return TopBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../translate.service */
      "NZXM");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../translate.pipe */
      "eKg/");

      var TopBarComponent = /*#__PURE__*/function () {
        function TopBarComponent(translate) {
          _classCallCheck(this, TopBarComponent);

          this.translate = translate;
          console.log(translate.data);
        }

        _createClass(TopBarComponent, [{
          key: "setLang",
          value: function setLang(lang) {
            this.translate.use(lang);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TopBarComponent;
      }();

      TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
        return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
      };

      TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TopBarComponent,
        selectors: [["app-top-bar"]],
        decls: 47,
        vars: 5,
        consts: [["color", "primary"], ["routerLink", "/", 1, "header", 2, "margin-left", "1rem"], [1, "fill-remaining-space", 2, "position", "absolute", "right", "5rem !important"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [3, "overlapTrigger"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]],
        template: function TopBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "videocam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "translate \uD83C\uDDEC\uD83C\uDDE7 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_12_listener() {
              return ctx.setLang("en");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\uD83C\uDDEC\uD83C\uDDE7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "English");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_17_listener() {
              return ctx.setLang("tr");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\uD83C\uDDF9\uD83C\uDDF7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Turkish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_22_listener() {
              return ctx.setLang("fr");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\uD83C\uDDEB\uD83C\uDDF7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "French");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_27_listener() {
              return ctx.setLang("gr");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\uD83C\uDDE9\uD83C\uDDEA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "German");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_32_listener() {
              return ctx.setLang("sh");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\uD83C\uDDEA\uD83C\uDDF8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Spanish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_37_listener() {
              return ctx.setLang("fl");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\uD83C\uDDF3\uD83C\uDDF1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Dutch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_42_listener() {
              return ctx.setLang("ua");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\uD83C\uDDF8\uD83C\uDDE6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Arabic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "TITLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"]],
        pipes: [_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: [".header[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkIiLCJmaWxlIjoidG9wLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "qkCY":
    /*!************************************!*\
      !*** ./src/app/storage.service.ts ***!
      \************************************/

    /*! exports provided: StorageService */

    /***/
    function qkCY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StorageService = /*#__PURE__*/function () {
        function StorageService() {
          _classCallCheck(this, StorageService);
        }

        _createClass(StorageService, [{
          key: "save",
          value: function save(conferenceOptions) {
            // TODO: save conference defaults to a storage
            return new Promise(function (resolve) {
              return resolve(true);
            });
          }
        }, {
          key: "load",
          value: function load(conferenceId) {
            return new Promise(function (resolve) {
              return resolve({
                id: conferenceId,
                options: {
                  alias: conferenceId,
                  pinCode: '',
                  dolbyVoice: true,
                  liveRecording: false,
                  rtcpMode: 'average',
                  videoCodec: 'H264'
                }
              });
            });
          }
        }]);

        return StorageService;
      }();

      StorageService.ɵfac = function StorageService_Factory(t) {
        return new (t || StorageService)();
      };

      StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StorageService,
        factory: StorageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "rcye":
    /*!**********************************************!*\
      !*** ./src/app/credentials-vault.service.ts ***!
      \**********************************************/

    /*! exports provided: CredentialsVaultService */

    /***/
    function rcye(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CredentialsVaultService", function () {
        return CredentialsVaultService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CredentialsVaultService = /*#__PURE__*/function () {
        function CredentialsVaultService() {
          _classCallCheck(this, CredentialsVaultService);
        }

        _createClass(CredentialsVaultService, [{
          key: "getCredentials",
          value: function getCredentials() {
            return Promise.resolve({
              key: 'AocrLmFwH3_3QWw5H2a-SA==',
              secret: 'JV9ranRSxiezp88AQe3JiuSbB2LG10DcfwBt-1L_1N8='
            });
          }
        }]);

        return CredentialsVaultService;
      }();

      CredentialsVaultService.ɵfac = function CredentialsVaultService_Factory(t) {
        return new (t || CredentialsVaultService)();
      };

      CredentialsVaultService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CredentialsVaultService,
        factory: CredentialsVaultService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map