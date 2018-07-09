"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var hoc_1 = require("../hoc");
var utils_1 = require("../utils");
var DataGridBodyPanel_1 = require("./DataGridBodyPanel");
var DataGridBody = /** @class */ (function (_super) {
    __extends(DataGridBody, _super);
    function DataGridBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.onMouseDownBody = function (e) {
            var _a = _this.props, _b = _a.filteredList, filteredList = _b === void 0 ? [] : _b, _c = _a.colGroup, colGroup = _c === void 0 ? [] : _c, _d = _a.headerColGroup, headerColGroup = _d === void 0 ? [] : _d, _e = _a.scrollLeft, scrollLeft = _e === void 0 ? 0 : _e, _f = _a.scrollTop, scrollTop = _f === void 0 ? 0 : _f, _g = _a.focusedRow, focusedRow = _g === void 0 ? 0 : _g, _h = _a.focusedCol, focusedCol = _h === void 0 ? 0 : _h, isInlineEditing = _a.isInlineEditing, _j = _a.inlineEditingCell, inlineEditingCell = _j === void 0 ? {} : _j, _k = _a.styles, styles = _k === void 0 ? {} : _k, setStoreState = _a.setStoreState, getRootNode = _a.getRootNode, _l = _a.rootObject, rootObject = _l === void 0 ? {} : _l;
            var _m = styles.frozenPanelWidth, frozenPanelWidth = _m === void 0 ? 0 : _m, _o = styles.frozenPanelHeight, frozenPanelHeight = _o === void 0 ? 0 : _o, _p = styles.headerHeight, headerHeight = _p === void 0 ? 0 : _p, _q = styles.bodyHeight, bodyHeight = _q === void 0 ? 0 : _q, _r = styles.CTInnerWidth, CTInnerWidth = _r === void 0 ? 0 : _r, _s = styles.verticalScrollerWidth, verticalScrollerWidth = _s === void 0 ? 0 : _s, _t = styles.bodyTrHeight, bodyTrHeight = _t === void 0 ? 0 : _t, _u = styles.asidePanelWidth, asidePanelWidth = _u === void 0 ? 0 : _u, _v = styles.scrollContentWidth, scrollContentWidth = _v === void 0 ? 0 : _v, _w = styles.scrollContentHeight, scrollContentHeight = _w === void 0 ? 0 : _w, _x = styles.scrollContentContainerWidth, scrollContentContainerWidth = _x === void 0 ? 0 : _x, _y = styles.scrollContentContainerHeight, scrollContentContainerHeight = _y === void 0 ? 0 : _y;
            var startMousePosition = utils_1.getMousePosition(e);
            var spanType = e.target.getAttribute('data-span');
            var rootNode = utils_1.getNode(getRootNode);
            var _z = rootNode && rootNode.getBoundingClientRect(), _0 = _z.x, leftPadding = _0 === void 0 ? 0 : _0, _1 = _z.y, topPadding = _1 === void 0 ? 0 : _1;
            var startScrollLeft = scrollLeft;
            var startScrollTop = scrollTop;
            var startX = startMousePosition.x - leftPadding;
            var startY = startMousePosition.y - topPadding;
            var getRowIndex = function (y, _scrollTop) {
                var i = Math.floor((y -
                    headerHeight -
                    (y - headerHeight < frozenPanelHeight ? 0 : _scrollTop)) /
                    bodyTrHeight);
                return i < 0
                    ? 0
                    : i >= filteredList.length - 1 ? filteredList.length - 1 : i;
            };
            var getColIndex = function (x, _scrollLeft) {
                var p = x -
                    asidePanelWidth -
                    (x - asidePanelWidth < frozenPanelWidth ? 0 : _scrollLeft);
                var cl = colGroup.length;
                var i = -1;
                while (cl--) {
                    var col = colGroup[cl];
                    if (col && (col._sx || 0) <= p && (col._ex || 0) >= p) {
                        i = col.colIndex;
                        break;
                    }
                }
                return i;
            };
            var procBodySelect = function () {
                if (selectStartedCol < 0) {
                    return;
                }
                var onMouseMove = function (ee) {
                    var currMousePosition = utils_1.getMousePosition(ee);
                    // 인터벌 무빙 함수 아래 구문에서 연속 스크롤이 필요하면 사용
                    var setStateCall = function (currState, _moving) {
                        var _a = currState.selectionEndOffset, currSelectionEndOffset = _a === void 0 ? {} : _a, _b = currState.scrollLeft, currScrollLeft = _b === void 0 ? 0 : _b, _c = currState.scrollTop, currScrollTop = _c === void 0 ? 0 : _c;
                        var _d = currSelectionEndOffset.x, selectionEndOffsetX = _d === void 0 ? 0 : _d, _e = currSelectionEndOffset.y, selectionEndOffsetY = _e === void 0 ? 0 : _e;
                        var selectEndedRow = getRowIndex(selectionEndOffsetY, currScrollTop);
                        var selectEndedCol = getColIndex(selectionEndOffsetX, currScrollLeft);
                        // 컬럼인덱스를 찾지 못했다면
                        if (selectEndedCol === -1) {
                            var p = selectionEndOffsetX - asidePanelWidth - scrollLeft;
                            var lastCol = headerColGroup[headerColGroup.length - 1] || {};
                            if (p < 0) {
                                selectEndedCol = 0;
                            }
                            else if (typeof lastCol._ex !== 'undefined' && lastCol._ex <= p) {
                                selectEndedCol = lastCol.colIndex || 0;
                            }
                            else {
                                selectEndedCol = 0;
                            }
                        }
                        var sRow = Math.min(selectStartedRow, selectEndedRow);
                        var eRow = Math.max(selectStartedRow, selectEndedRow);
                        var sCol = Math.min(selectStartedCol, selectEndedCol);
                        var eCol = Math.max(selectStartedCol, selectEndedCol);
                        if (sRow !== -1 && eRow !== -1 && sCol !== -1 && eCol !== -1) {
                            currState.selectionRows = {};
                            currState.selectionCols = {};
                            for (var i = sRow; i < eRow + 1; i++) {
                                currState.selectionRows[i] = true;
                            }
                            for (var i = sCol; i < eCol + 1; i++) {
                                currState.selectionCols[i] = true;
                            }
                        }
                        else {
                            console.log('get selection fail', sRow, eRow, sCol, eCol);
                        }
                        setStoreState(currState);
                    };
                    var scrollMoving = function (_moving) {
                        var _a = _this.props, _b = _a.scrollTop, propsScrollTop = _b === void 0 ? 0 : _b, _c = _a.scrollLeft, propsScrollLeft = _c === void 0 ? 0 : _c, propsSelectionEndOffset = _a.selectionEndOffset;
                        var _scrollTop = propsScrollTop;
                        var _scrollLeft = propsScrollLeft;
                        if (_moving.top) {
                            _scrollTop = propsScrollTop + bodyTrHeight;
                        }
                        else if (_moving.bottom) {
                            _scrollTop = propsScrollTop - bodyTrHeight;
                        }
                        if (_moving.left) {
                            _scrollLeft = propsScrollLeft + 100;
                        }
                        else if (_moving.right) {
                            _scrollLeft = propsScrollLeft - 100;
                        }
                        var _d = utils_1.getScrollPosition(_scrollLeft, _scrollTop, {
                            scrollWidth: scrollContentWidth,
                            scrollHeight: scrollContentHeight,
                            clientWidth: scrollContentContainerWidth,
                            clientHeight: scrollContentContainerHeight,
                        }), newScrollLeft = _d.scrollLeft, newScrollTop = _d.scrollTop, endScroll = _d.endScroll;
                        setStateCall({
                            scrollTop: newScrollTop,
                            scrollLeft: newScrollLeft,
                            selectionEndOffset: propsSelectionEndOffset,
                        }, _moving);
                        return !endScroll;
                    };
                    var x1 = startMousePosition.x - leftPadding;
                    var y1 = startMousePosition.y - topPadding;
                    var x2 = currMousePosition.x - leftPadding;
                    var y2 = currMousePosition.y - topPadding;
                    var p1X = Math.min(x1, x2);
                    var p2X = Math.max(x1, x2);
                    var p1Y = Math.min(y1, y2);
                    var p2Y = Math.max(y1, y2);
                    var moving = {
                        active: false,
                        top: false,
                        left: false,
                        bottom: false,
                        right: false,
                    };
                    if (p1Y < headerHeight) {
                        moving.active = true;
                        moving.top = true;
                    }
                    else if (p2Y > headerHeight + bodyHeight) {
                        moving.active = true;
                        moving.bottom = true;
                    }
                    if (p1X < asidePanelWidth) {
                        moving.active = true;
                        moving.left = true;
                    }
                    else if (p2X > CTInnerWidth - verticalScrollerWidth) {
                        moving.active = true;
                        moving.right = true;
                    }
                    // moving.active 이면 타임 인터벌 시작
                    if (rootObject.timer) {
                        clearInterval(rootObject.timer);
                    }
                    if (moving.active) {
                        rootObject.timer = setInterval(function () {
                            if (!scrollMoving(moving)) {
                                // clearInterval(this.scrollMovingTimer);
                            }
                        }, 60);
                    }
                    else {
                        setStateCall({
                            dragging: true,
                            scrollTop: scrollTop,
                            scrollLeft: scrollLeft,
                            selectionStartOffset: {
                                x: x1,
                                y: y1,
                            },
                            selectionEndOffset: {
                                x: x2,
                                y: y2,
                            },
                            selectionMinOffset: {
                                x: p1X,
                                y: p1Y,
                            },
                            selectionMaxOffset: {
                                x: p2X,
                                y: p2Y,
                            },
                        }, moving);
                    }
                };
                var offEvent = function (ee) {
                    ee.preventDefault();
                    if (rootObject.timer) {
                        clearInterval(rootObject.timer);
                    }
                    setStoreState({
                        dragging: false,
                        selectionStartOffset: undefined,
                        selectionEndOffset: undefined,
                        selectionMinOffset: undefined,
                        selectionMaxOffset: undefined,
                    });
                    document.removeEventListener('mousemove', throttledOnMouseMove);
                    document.removeEventListener('mouseup', offEvent);
                    document.removeEventListener('mouseleave', offEvent);
                };
                var throttledOnMouseMove = utils_1.throttle(onMouseMove, 10);
                if (e.metaKey || (e.shiftKey && focusedRow > -1 && focusedCol > -1)) {
                    if (e.shiftKey) {
                        var state = {
                            dragging: false,
                            selectionRows: {},
                            selectionCols: {},
                        };
                        var sRow = Math.min(focusedRow, selectStartedRow);
                        var sCol = Math.min(focusedCol, selectStartedCol);
                        var eRow = Math.max(focusedRow, selectStartedRow);
                        var eCol = Math.max(focusedCol, selectStartedCol);
                        for (var i = sRow; i < eRow + 1; i++) {
                            state.selectionRows[i] = true;
                        }
                        for (var i = sCol; i < eCol + 1; i++) {
                            state.selectionCols[i] = true;
                        }
                        setStoreState(state);
                        selectStartedRow = focusedRow;
                        selectStartedCol = focusedCol;
                        document.addEventListener('mousemove', throttledOnMouseMove);
                        document.addEventListener('mouseup', offEvent);
                        document.addEventListener('mouseleave', offEvent);
                    }
                }
                else {
                    // 셀렉션 저장정보 초기화
                    setStoreState({
                        dragging: false,
                        selectionStartOffset: undefined,
                        selectionEndOffset: undefined,
                        selectionMinOffset: undefined,
                        selectionMaxOffset: undefined,
                        selectionRows: (_a = {}, _a[selectStartedRow] = true, _a),
                        selectionCols: (_b = {}, _b[selectStartedCol] = true, _b),
                        focusedRow: selectStartedRow,
                        focusedCol: selectStartedCol,
                    });
                    document.addEventListener('mousemove', throttledOnMouseMove);
                    document.addEventListener('mouseup', offEvent);
                    document.addEventListener('mouseleave', offEvent);
                }
                var _a, _b;
            };
            var procClickLinenumber = function () {
                var state = {
                    dragging: false,
                    selectionRows: {},
                    selectionCols: (function () {
                        var cols = {};
                        colGroup.forEach(function (col) {
                            cols[col.colIndex || 0] = true;
                        });
                        return cols;
                    })(),
                    focusedRow: focusedRow,
                    focusedCol: 0,
                };
                if (e.shiftKey) {
                    state.selectionRows = (function () {
                        var rows = {};
                        utils_1.arrayFromRange(Math.min(focusedRow, selectStartedRow), Math.max(focusedRow, selectStartedRow) + 1).forEach(function (i) {
                            rows[i] = true;
                        });
                        return rows;
                    })();
                }
                else {
                    state.selectionRows = (_a = {},
                        _a[selectStartedRow] = true,
                        _a);
                    state.focusedRow = selectStartedRow;
                }
                setStoreState(state);
                var _a;
            };
            // 선택이 시작된 row / col
            var selectStartedRow = getRowIndex(startY, startScrollTop);
            var selectStartedCol = getColIndex(startX, startScrollLeft);
            if (isInlineEditing &&
                inlineEditingCell.rowIndex === selectStartedRow &&
                inlineEditingCell.colIndex === selectStartedCol) {
                // 선택된 셀이 에디팅중인 셀이라면 함수 실행 중지
                return false;
            }
            if (spanType === 'lineNumber') {
                // click lineNumber
                procClickLinenumber();
            }
            else {
                procBodySelect();
            }
            return true;
        };
        return _this;
    }
    DataGridBody.prototype.render = function () {
        var _a = this.props, _b = _a.scrollLeft, scrollLeft = _b === void 0 ? 0 : _b, _c = _a.scrollTop, scrollTop = _c === void 0 ? 0 : _c, _d = _a.options, options = _d === void 0 ? {} : _d, _e = _a.styles, styles = _e === void 0 ? {} : _e;
        var _f = options.frozenRowIndex, frozenRowIndex = _f === void 0 ? 0 : _f;
        var _g = styles.CTInnerWidth, CTInnerWidth = _g === void 0 ? 0 : _g, _h = styles.bodyHeight, bodyHeight = _h === void 0 ? 0 : _h, _j = styles.bodyTrHeight, bodyTrHeight = _j === void 0 ? 0 : _j, _k = styles.asidePanelWidth, asidePanelWidth = _k === void 0 ? 0 : _k, _l = styles.frozenPanelWidth, frozenPanelWidth = _l === void 0 ? 0 : _l, _m = styles.frozenPanelHeight, frozenPanelHeight = _m === void 0 ? 0 : _m, _o = styles.rightPanelWidth, rightPanelWidth = _o === void 0 ? 0 : _o, _p = styles.footSumHeight, footSumHeight = _p === void 0 ? 0 : _p;
        var sRowIndex = Math.floor(-scrollTop / (bodyTrHeight || 0)) + frozenRowIndex;
        var topBodyScrollConfig = {
            frozenRowIndex: 0,
            sRowIndex: 0,
            eRowIndex: frozenRowIndex,
        };
        var bodyScrollConfig = {
            frozenRowIndex: frozenRowIndex,
            sRowIndex: sRowIndex,
            eRowIndex: sRowIndex + Math.ceil(bodyHeight / bodyTrHeight) + 1,
        };
        var topAsideBodyPanelStyle = {
            left: 0,
            width: asidePanelWidth,
            top: 0,
            height: frozenPanelHeight,
        };
        var topLeftBodyPanelStyle = {
            left: asidePanelWidth,
            width: frozenPanelWidth,
            top: 0,
            height: frozenPanelHeight,
        };
        var topBodyPanelStyle = {
            left: frozenPanelWidth + asidePanelWidth,
            width: CTInnerWidth - asidePanelWidth - frozenPanelWidth - rightPanelWidth,
            top: 0,
            height: frozenPanelHeight,
        };
        var asideBodyPanelStyle = {
            left: 0,
            width: asidePanelWidth,
            top: frozenPanelHeight,
            height: bodyHeight - frozenPanelHeight - footSumHeight,
        };
        var leftBodyPanelStyle = {
            left: asidePanelWidth,
            width: frozenPanelWidth,
            top: frozenPanelHeight,
            height: bodyHeight - frozenPanelHeight - footSumHeight,
        };
        var bodyPanelStyle = {
            left: frozenPanelWidth + asidePanelWidth,
            width: CTInnerWidth - asidePanelWidth - frozenPanelWidth - rightPanelWidth,
            top: frozenPanelHeight,
            height: bodyHeight - frozenPanelHeight - footSumHeight,
        };
        return (React.createElement("div", { className: 'axui-datagrid-body', style: { height: styles.bodyHeight }, onMouseDown: this.onMouseDownBody },
            React.createElement(DataGridBodyPanel_1.default, { panelName: "top-aside-body-scroll", containerStyle: topAsideBodyPanelStyle, panelScrollConfig: topBodyScrollConfig }),
            React.createElement(DataGridBodyPanel_1.default, { panelName: "top-left-body-scroll", containerStyle: topLeftBodyPanelStyle, panelScrollConfig: topBodyScrollConfig }),
            React.createElement(DataGridBodyPanel_1.default, { panelName: "top-body-scroll", containerStyle: topBodyPanelStyle, panelScrollConfig: topBodyScrollConfig, panelLeft: scrollLeft }),
            React.createElement(DataGridBodyPanel_1.default, { panelName: "aside-body-scroll", containerStyle: asideBodyPanelStyle, panelScrollConfig: bodyScrollConfig, panelTop: scrollTop }),
            React.createElement(DataGridBodyPanel_1.default, { panelName: "left-body-scroll", containerStyle: leftBodyPanelStyle, panelScrollConfig: bodyScrollConfig, panelTop: scrollTop }),
            React.createElement(DataGridBodyPanel_1.default, { panelName: "body-scroll", containerStyle: bodyPanelStyle, panelScrollConfig: bodyScrollConfig, panelLeft: scrollLeft, panelTop: scrollTop })));
    };
    return DataGridBody;
}(React.Component));
exports.default = hoc_1.connectStore(DataGridBody);
//# sourceMappingURL=DataGridBody.js.map