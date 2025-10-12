var Vm = Object.defineProperty;
var $m = (n, i, o) =>
  i in n
    ? Vm(n, i, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (n[i] = o);
var Uu = (n, i, o) => $m(n, typeof i != 'symbol' ? i + '' : i, o);
(function () {
  const i = document.createElement('link').relList;
  if (i && i.supports && i.supports('modulepreload')) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a);
  new MutationObserver((a) => {
    for (const f of a)
      if (f.type === 'childList')
        for (const d of f.addedNodes)
          d.tagName === 'LINK' && d.rel === 'modulepreload' && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(a) {
    const f = {};
    return (
      a.integrity && (f.integrity = a.integrity),
      a.referrerPolicy && (f.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : a.crossOrigin === 'anonymous'
          ? (f.credentials = 'omit')
          : (f.credentials = 'same-origin'),
      f
    );
  }
  function s(a) {
    if (a.ep) return;
    a.ep = !0;
    const f = o(a);
    fetch(a.href, f);
  }
})();
function Pp(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default')
    ? n.default
    : n;
}
var Bu = { exports: {} },
  Li = {},
  Vu = { exports: {} },
  we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nd;
function Hm() {
  if (Nd) return we;
  Nd = 1;
  var n = Symbol.for('react.element'),
    i = Symbol.for('react.portal'),
    o = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    a = Symbol.for('react.profiler'),
    f = Symbol.for('react.provider'),
    d = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    y = Symbol.for('react.memo'),
    g = Symbol.for('react.lazy'),
    w = Symbol.iterator;
  function C(R) {
    return R === null || typeof R != 'object'
      ? null
      : ((R = (w && R[w]) || R['@@iterator']),
        typeof R == 'function' ? R : null);
  }
  var N = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    E = Object.assign,
    A = {};
  function x(R, U, ye) {
    (this.props = R),
      (this.context = U),
      (this.refs = A),
      (this.updater = ye || N);
  }
  (x.prototype.isReactComponent = {}),
    (x.prototype.setState = function (R, U) {
      if (typeof R != 'object' && typeof R != 'function' && R != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, R, U, 'setState');
    }),
    (x.prototype.forceUpdate = function (R) {
      this.updater.enqueueForceUpdate(this, R, 'forceUpdate');
    });
  function D() {}
  D.prototype = x.prototype;
  function j(R, U, ye) {
    (this.props = R),
      (this.context = U),
      (this.refs = A),
      (this.updater = ye || N);
  }
  var I = (j.prototype = new D());
  (I.constructor = j), E(I, x.prototype), (I.isPureReactComponent = !0);
  var W = Array.isArray,
    H = Object.prototype.hasOwnProperty,
    Z = { current: null },
    ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ie(R, U, ye) {
    var ve,
      _e = {},
      Se = null,
      Te = null;
    if (U != null)
      for (ve in (U.ref !== void 0 && (Te = U.ref),
      U.key !== void 0 && (Se = '' + U.key),
      U))
        H.call(U, ve) && !ce.hasOwnProperty(ve) && (_e[ve] = U[ve]);
    var xe = arguments.length - 2;
    if (xe === 1) _e.children = ye;
    else if (1 < xe) {
      for (var Le = Array(xe), dt = 0; dt < xe; dt++)
        Le[dt] = arguments[dt + 2];
      _e.children = Le;
    }
    if (R && R.defaultProps)
      for (ve in ((xe = R.defaultProps), xe))
        _e[ve] === void 0 && (_e[ve] = xe[ve]);
    return {
      $$typeof: n,
      type: R,
      key: Se,
      ref: Te,
      props: _e,
      _owner: Z.current,
    };
  }
  function me(R, U) {
    return {
      $$typeof: n,
      type: R.type,
      key: U,
      ref: R.ref,
      props: R.props,
      _owner: R._owner,
    };
  }
  function Ee(R) {
    return typeof R == 'object' && R !== null && R.$$typeof === n;
  }
  function rt(R) {
    var U = { '=': '=0', ':': '=2' };
    return (
      '$' +
      R.replace(/[=:]/g, function (ye) {
        return U[ye];
      })
    );
  }
  var fe = /\/+/g;
  function pe(R, U) {
    return typeof R == 'object' && R !== null && R.key != null
      ? rt('' + R.key)
      : U.toString(36);
  }
  function Pe(R, U, ye, ve, _e) {
    var Se = typeof R;
    (Se === 'undefined' || Se === 'boolean') && (R = null);
    var Te = !1;
    if (R === null) Te = !0;
    else
      switch (Se) {
        case 'string':
        case 'number':
          Te = !0;
          break;
        case 'object':
          switch (R.$$typeof) {
            case n:
            case i:
              Te = !0;
          }
      }
    if (Te)
      return (
        (Te = R),
        (_e = _e(Te)),
        (R = ve === '' ? '.' + pe(Te, 0) : ve),
        W(_e)
          ? ((ye = ''),
            R != null && (ye = R.replace(fe, '$&/') + '/'),
            Pe(_e, U, ye, '', function (dt) {
              return dt;
            }))
          : _e != null &&
            (Ee(_e) &&
              (_e = me(
                _e,
                ye +
                  (!_e.key || (Te && Te.key === _e.key)
                    ? ''
                    : ('' + _e.key).replace(fe, '$&/') + '/') +
                  R,
              )),
            U.push(_e)),
        1
      );
    if (((Te = 0), (ve = ve === '' ? '.' : ve + ':'), W(R)))
      for (var xe = 0; xe < R.length; xe++) {
        Se = R[xe];
        var Le = ve + pe(Se, xe);
        Te += Pe(Se, U, ye, Le, _e);
      }
    else if (((Le = C(R)), typeof Le == 'function'))
      for (R = Le.call(R), xe = 0; !(Se = R.next()).done; )
        (Se = Se.value),
          (Le = ve + pe(Se, xe++)),
          (Te += Pe(Se, U, ye, Le, _e));
    else if (Se === 'object')
      throw (
        ((U = String(R)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (U === '[object Object]'
              ? 'object with keys {' + Object.keys(R).join(', ') + '}'
              : U) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    return Te;
  }
  function Oe(R, U, ye) {
    if (R == null) return R;
    var ve = [],
      _e = 0;
    return (
      Pe(R, ve, '', '', function (Se) {
        return U.call(ye, Se, _e++);
      }),
      ve
    );
  }
  function Ae(R) {
    if (R._status === -1) {
      var U = R._result;
      (U = U()),
        U.then(
          function (ye) {
            (R._status === 0 || R._status === -1) &&
              ((R._status = 1), (R._result = ye));
          },
          function (ye) {
            (R._status === 0 || R._status === -1) &&
              ((R._status = 2), (R._result = ye));
          },
        ),
        R._status === -1 && ((R._status = 0), (R._result = U));
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var ke = { current: null },
    Q = { transition: null },
    le = {
      ReactCurrentDispatcher: ke,
      ReactCurrentBatchConfig: Q,
      ReactCurrentOwner: Z,
    };
  function X() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (we.Children = {
      map: Oe,
      forEach: function (R, U, ye) {
        Oe(
          R,
          function () {
            U.apply(this, arguments);
          },
          ye,
        );
      },
      count: function (R) {
        var U = 0;
        return (
          Oe(R, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (R) {
        return (
          Oe(R, function (U) {
            return U;
          }) || []
        );
      },
      only: function (R) {
        if (!Ee(R))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return R;
      },
    }),
    (we.Component = x),
    (we.Fragment = o),
    (we.Profiler = a),
    (we.PureComponent = j),
    (we.StrictMode = s),
    (we.Suspense = m),
    (we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le),
    (we.act = X),
    (we.cloneElement = function (R, U, ye) {
      if (R == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            R +
            '.',
        );
      var ve = E({}, R.props),
        _e = R.key,
        Se = R.ref,
        Te = R._owner;
      if (U != null) {
        if (
          (U.ref !== void 0 && ((Se = U.ref), (Te = Z.current)),
          U.key !== void 0 && (_e = '' + U.key),
          R.type && R.type.defaultProps)
        )
          var xe = R.type.defaultProps;
        for (Le in U)
          H.call(U, Le) &&
            !ce.hasOwnProperty(Le) &&
            (ve[Le] = U[Le] === void 0 && xe !== void 0 ? xe[Le] : U[Le]);
      }
      var Le = arguments.length - 2;
      if (Le === 1) ve.children = ye;
      else if (1 < Le) {
        xe = Array(Le);
        for (var dt = 0; dt < Le; dt++) xe[dt] = arguments[dt + 2];
        ve.children = xe;
      }
      return {
        $$typeof: n,
        type: R.type,
        key: _e,
        ref: Se,
        props: ve,
        _owner: Te,
      };
    }),
    (we.createContext = function (R) {
      return (
        (R = {
          $$typeof: d,
          _currentValue: R,
          _currentValue2: R,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (R.Provider = { $$typeof: f, _context: R }),
        (R.Consumer = R)
      );
    }),
    (we.createElement = ie),
    (we.createFactory = function (R) {
      var U = ie.bind(null, R);
      return (U.type = R), U;
    }),
    (we.createRef = function () {
      return { current: null };
    }),
    (we.forwardRef = function (R) {
      return { $$typeof: h, render: R };
    }),
    (we.isValidElement = Ee),
    (we.lazy = function (R) {
      return { $$typeof: g, _payload: { _status: -1, _result: R }, _init: Ae };
    }),
    (we.memo = function (R, U) {
      return { $$typeof: y, type: R, compare: U === void 0 ? null : U };
    }),
    (we.startTransition = function (R) {
      var U = Q.transition;
      Q.transition = {};
      try {
        R();
      } finally {
        Q.transition = U;
      }
    }),
    (we.unstable_act = X),
    (we.useCallback = function (R, U) {
      return ke.current.useCallback(R, U);
    }),
    (we.useContext = function (R) {
      return ke.current.useContext(R);
    }),
    (we.useDebugValue = function () {}),
    (we.useDeferredValue = function (R) {
      return ke.current.useDeferredValue(R);
    }),
    (we.useEffect = function (R, U) {
      return ke.current.useEffect(R, U);
    }),
    (we.useId = function () {
      return ke.current.useId();
    }),
    (we.useImperativeHandle = function (R, U, ye) {
      return ke.current.useImperativeHandle(R, U, ye);
    }),
    (we.useInsertionEffect = function (R, U) {
      return ke.current.useInsertionEffect(R, U);
    }),
    (we.useLayoutEffect = function (R, U) {
      return ke.current.useLayoutEffect(R, U);
    }),
    (we.useMemo = function (R, U) {
      return ke.current.useMemo(R, U);
    }),
    (we.useReducer = function (R, U, ye) {
      return ke.current.useReducer(R, U, ye);
    }),
    (we.useRef = function (R) {
      return ke.current.useRef(R);
    }),
    (we.useState = function (R) {
      return ke.current.useState(R);
    }),
    (we.useSyncExternalStore = function (R, U, ye) {
      return ke.current.useSyncExternalStore(R, U, ye);
    }),
    (we.useTransition = function () {
      return ke.current.useTransition();
    }),
    (we.version = '18.3.1'),
    we
  );
}
var Od;
function Al() {
  return Od || ((Od = 1), (Vu.exports = Hm())), Vu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ld;
function bm() {
  if (Ld) return Li;
  Ld = 1;
  var n = Al(),
    i = Symbol.for('react.element'),
    o = Symbol.for('react.fragment'),
    s = Object.prototype.hasOwnProperty,
    a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(h, m, y) {
    var g,
      w = {},
      C = null,
      N = null;
    y !== void 0 && (C = '' + y),
      m.key !== void 0 && (C = '' + m.key),
      m.ref !== void 0 && (N = m.ref);
    for (g in m) s.call(m, g) && !f.hasOwnProperty(g) && (w[g] = m[g]);
    if (h && h.defaultProps)
      for (g in ((m = h.defaultProps), m)) w[g] === void 0 && (w[g] = m[g]);
    return {
      $$typeof: i,
      type: h,
      key: C,
      ref: N,
      props: w,
      _owner: a.current,
    };
  }
  return (Li.Fragment = o), (Li.jsx = d), (Li.jsxs = d), Li;
}
var Ad;
function Wm() {
  return Ad || ((Ad = 1), (Bu.exports = bm())), Bu.exports;
}
var re = Wm(),
  al = {},
  $u = { exports: {} },
  kt = {},
  Hu = { exports: {} },
  bu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fd;
function qm() {
  return (
    Fd ||
      ((Fd = 1),
      (function (n) {
        function i(Q, le) {
          var X = Q.length;
          Q.push(le);
          e: for (; 0 < X; ) {
            var R = (X - 1) >>> 1,
              U = Q[R];
            if (0 < a(U, le)) (Q[R] = le), (Q[X] = U), (X = R);
            else break e;
          }
        }
        function o(Q) {
          return Q.length === 0 ? null : Q[0];
        }
        function s(Q) {
          if (Q.length === 0) return null;
          var le = Q[0],
            X = Q.pop();
          if (X !== le) {
            Q[0] = X;
            e: for (var R = 0, U = Q.length, ye = U >>> 1; R < ye; ) {
              var ve = 2 * (R + 1) - 1,
                _e = Q[ve],
                Se = ve + 1,
                Te = Q[Se];
              if (0 > a(_e, X))
                Se < U && 0 > a(Te, _e)
                  ? ((Q[R] = Te), (Q[Se] = X), (R = Se))
                  : ((Q[R] = _e), (Q[ve] = X), (R = ve));
              else if (Se < U && 0 > a(Te, X))
                (Q[R] = Te), (Q[Se] = X), (R = Se);
              else break e;
            }
          }
          return le;
        }
        function a(Q, le) {
          var X = Q.sortIndex - le.sortIndex;
          return X !== 0 ? X : Q.id - le.id;
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var f = performance;
          n.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            h = d.now();
          n.unstable_now = function () {
            return d.now() - h;
          };
        }
        var m = [],
          y = [],
          g = 1,
          w = null,
          C = 3,
          N = !1,
          E = !1,
          A = !1,
          x = typeof setTimeout == 'function' ? setTimeout : null,
          D = typeof clearTimeout == 'function' ? clearTimeout : null,
          j = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function I(Q) {
          for (var le = o(y); le !== null; ) {
            if (le.callback === null) s(y);
            else if (le.startTime <= Q)
              s(y), (le.sortIndex = le.expirationTime), i(m, le);
            else break;
            le = o(y);
          }
        }
        function W(Q) {
          if (((A = !1), I(Q), !E))
            if (o(m) !== null) (E = !0), Ae(H);
            else {
              var le = o(y);
              le !== null && ke(W, le.startTime - Q);
            }
        }
        function H(Q, le) {
          (E = !1), A && ((A = !1), D(ie), (ie = -1)), (N = !0);
          var X = C;
          try {
            for (
              I(le), w = o(m);
              w !== null && (!(w.expirationTime > le) || (Q && !rt()));

            ) {
              var R = w.callback;
              if (typeof R == 'function') {
                (w.callback = null), (C = w.priorityLevel);
                var U = R(w.expirationTime <= le);
                (le = n.unstable_now()),
                  typeof U == 'function'
                    ? (w.callback = U)
                    : w === o(m) && s(m),
                  I(le);
              } else s(m);
              w = o(m);
            }
            if (w !== null) var ye = !0;
            else {
              var ve = o(y);
              ve !== null && ke(W, ve.startTime - le), (ye = !1);
            }
            return ye;
          } finally {
            (w = null), (C = X), (N = !1);
          }
        }
        var Z = !1,
          ce = null,
          ie = -1,
          me = 5,
          Ee = -1;
        function rt() {
          return !(n.unstable_now() - Ee < me);
        }
        function fe() {
          if (ce !== null) {
            var Q = n.unstable_now();
            Ee = Q;
            var le = !0;
            try {
              le = ce(!0, Q);
            } finally {
              le ? pe() : ((Z = !1), (ce = null));
            }
          } else Z = !1;
        }
        var pe;
        if (typeof j == 'function')
          pe = function () {
            j(fe);
          };
        else if (typeof MessageChannel < 'u') {
          var Pe = new MessageChannel(),
            Oe = Pe.port2;
          (Pe.port1.onmessage = fe),
            (pe = function () {
              Oe.postMessage(null);
            });
        } else
          pe = function () {
            x(fe, 0);
          };
        function Ae(Q) {
          (ce = Q), Z || ((Z = !0), pe());
        }
        function ke(Q, le) {
          ie = x(function () {
            Q(n.unstable_now());
          }, le);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (Q) {
            Q.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            E || N || ((E = !0), Ae(H));
          }),
          (n.unstable_forceFrameRate = function (Q) {
            0 > Q || 125 < Q
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (me = 0 < Q ? Math.floor(1e3 / Q) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return o(m);
          }),
          (n.unstable_next = function (Q) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var le = 3;
                break;
              default:
                le = C;
            }
            var X = C;
            C = le;
            try {
              return Q();
            } finally {
              C = X;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (Q, le) {
            switch (Q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                Q = 3;
            }
            var X = C;
            C = Q;
            try {
              return le();
            } finally {
              C = X;
            }
          }),
          (n.unstable_scheduleCallback = function (Q, le, X) {
            var R = n.unstable_now();
            switch (
              (typeof X == 'object' && X !== null
                ? ((X = X.delay),
                  (X = typeof X == 'number' && 0 < X ? R + X : R))
                : (X = R),
              Q)
            ) {
              case 1:
                var U = -1;
                break;
              case 2:
                U = 250;
                break;
              case 5:
                U = 1073741823;
                break;
              case 4:
                U = 1e4;
                break;
              default:
                U = 5e3;
            }
            return (
              (U = X + U),
              (Q = {
                id: g++,
                callback: le,
                priorityLevel: Q,
                startTime: X,
                expirationTime: U,
                sortIndex: -1,
              }),
              X > R
                ? ((Q.sortIndex = X),
                  i(y, Q),
                  o(m) === null &&
                    Q === o(y) &&
                    (A ? (D(ie), (ie = -1)) : (A = !0), ke(W, X - R)))
                : ((Q.sortIndex = U), i(m, Q), E || N || ((E = !0), Ae(H))),
              Q
            );
          }),
          (n.unstable_shouldYield = rt),
          (n.unstable_wrapCallback = function (Q) {
            var le = C;
            return function () {
              var X = C;
              C = le;
              try {
                return Q.apply(this, arguments);
              } finally {
                C = X;
              }
            };
          });
      })(bu)),
    bu
  );
}
var Dd;
function Km() {
  return Dd || ((Dd = 1), (Hu.exports = qm())), Hu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd;
function Qm() {
  if (zd) return kt;
  zd = 1;
  var n = Al(),
    i = Km();
  function o(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += '&args[]=' + encodeURIComponent(arguments[r]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var s = new Set(),
    a = {};
  function f(e, t) {
    d(e, t), d(e + 'Capture', t);
  }
  function d(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var h = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    m = Object.prototype.hasOwnProperty,
    y =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    w = {};
  function C(e) {
    return m.call(w, e)
      ? !0
      : m.call(g, e)
        ? !1
        : y.test(e)
          ? (w[e] = !0)
          : ((g[e] = !0), !1);
  }
  function N(e, t, r, l) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return l
          ? !1
          : r !== null
            ? !r.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function E(e, t, r, l) {
    if (t === null || typeof t > 'u' || N(e, t, r, l)) return !0;
    if (l) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function A(e, t, r, l, u, c, p) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = l),
      (this.attributeNamespace = u),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = p);
  }
  var x = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      x[e] = new A(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      x[t] = new A(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
      function (e) {
        x[e] = new A(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      x[e] = new A(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        x[e] = new A(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      x[e] = new A(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      x[e] = new A(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      x[e] = new A(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      x[e] = new A(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var D = /[\-:]([a-z])/g;
  function j(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(D, j);
      x[t] = new A(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(D, j);
        x[t] = new A(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(D, j);
      x[t] = new A(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      x[e] = new A(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (x.xlinkHref = new A(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1,
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      x[e] = new A(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function I(e, t, r, l) {
    var u = x.hasOwnProperty(t) ? x[t] : null;
    (u !== null
      ? u.type !== 0
      : l ||
        !(2 < t.length) ||
        (t[0] !== 'o' && t[0] !== 'O') ||
        (t[1] !== 'n' && t[1] !== 'N')) &&
      (E(t, r, u, l) && (r = null),
      l || u === null
        ? C(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
        : u.mustUseProperty
          ? (e[u.propertyName] = r === null ? (u.type === 3 ? !1 : '') : r)
          : ((t = u.attributeName),
            (l = u.attributeNamespace),
            r === null
              ? e.removeAttribute(t)
              : ((u = u.type),
                (r = u === 3 || (u === 4 && r === !0) ? '' : '' + r),
                l ? e.setAttributeNS(l, t, r) : e.setAttribute(t, r))));
  }
  var W = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    H = Symbol.for('react.element'),
    Z = Symbol.for('react.portal'),
    ce = Symbol.for('react.fragment'),
    ie = Symbol.for('react.strict_mode'),
    me = Symbol.for('react.profiler'),
    Ee = Symbol.for('react.provider'),
    rt = Symbol.for('react.context'),
    fe = Symbol.for('react.forward_ref'),
    pe = Symbol.for('react.suspense'),
    Pe = Symbol.for('react.suspense_list'),
    Oe = Symbol.for('react.memo'),
    Ae = Symbol.for('react.lazy'),
    ke = Symbol.for('react.offscreen'),
    Q = Symbol.iterator;
  function le(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Q && e[Q]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var X = Object.assign,
    R;
  function U(e) {
    if (R === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        R = (t && t[1]) || '';
      }
    return (
      `
` +
      R +
      e
    );
  }
  var ye = !1;
  function ve(e, t) {
    if (!e || ye) return '';
    ye = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (L) {
            var l = L;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (L) {
            l = L;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (L) {
          l = L;
        }
        e();
      }
    } catch (L) {
      if (L && l && typeof L.stack == 'string') {
        for (
          var u = L.stack.split(`
`),
            c = l.stack.split(`
`),
            p = u.length - 1,
            v = c.length - 1;
          1 <= p && 0 <= v && u[p] !== c[v];

        )
          v--;
        for (; 1 <= p && 0 <= v; p--, v--)
          if (u[p] !== c[v]) {
            if (p !== 1 || v !== 1)
              do
                if ((p--, v--, 0 > v || u[p] !== c[v])) {
                  var S =
                    `
` + u[p].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      S.includes('<anonymous>') &&
                      (S = S.replace('<anonymous>', e.displayName)),
                    S
                  );
                }
              while (1 <= p && 0 <= v);
            break;
          }
      }
    } finally {
      (ye = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : '') ? U(e) : '';
  }
  function _e(e) {
    switch (e.tag) {
      case 5:
        return U(e.type);
      case 16:
        return U('Lazy');
      case 13:
        return U('Suspense');
      case 19:
        return U('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = ve(e.type, !1)), e;
      case 11:
        return (e = ve(e.type.render, !1)), e;
      case 1:
        return (e = ve(e.type, !0)), e;
      default:
        return '';
    }
  }
  function Se(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case ce:
        return 'Fragment';
      case Z:
        return 'Portal';
      case me:
        return 'Profiler';
      case ie:
        return 'StrictMode';
      case pe:
        return 'Suspense';
      case Pe:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case rt:
          return (e.displayName || 'Context') + '.Consumer';
        case Ee:
          return (e._context.displayName || 'Context') + '.Provider';
        case fe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Oe:
          return (
            (t = e.displayName || null), t !== null ? t : Se(e.type) || 'Memo'
          );
        case Ae:
          (t = e._payload), (e = e._init);
          try {
            return Se(e(t));
          } catch {}
      }
    return null;
  }
  function Te(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return Se(t);
      case 8:
        return t === ie ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function xe(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Le(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function dt(e) {
    var t = Le(e) ? 'checked' : 'value',
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < 'u' &&
      typeof r.get == 'function' &&
      typeof r.set == 'function'
    ) {
      var u = r.get,
        c = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (p) {
            (l = '' + p), c.call(this, p);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (p) {
            l = '' + p;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function qn(e) {
    e._valueTracker || (e._valueTracker = dt(e));
  }
  function Xi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      l = '';
    return (
      e && (l = Le(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = l),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Kn(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function mr(e, t) {
    var r = t.checked;
    return X({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function Ql(e, t) {
    var r = t.defaultValue == null ? '' : t.defaultValue,
      l = t.checked != null ? t.checked : t.defaultChecked;
    (r = xe(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: l,
        initialValue: r,
        controlled:
          t.type === 'checkbox' || t.type === 'radio'
            ? t.checked != null
            : t.value != null,
      });
  }
  function Jl(e, t) {
    (t = t.checked), t != null && I(e, 'checked', t, !1);
  }
  function Yi(e, t) {
    Jl(e, t);
    var r = xe(t.value),
      l = t.type;
    if (r != null)
      l === 'number'
        ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
        : e.value !== '' + r && (e.value = '' + r);
    else if (l === 'submit' || l === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? O(e, t.type, r)
      : t.hasOwnProperty('defaultValue') && O(e, t.type, xe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function k(e, t, r) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var l = t.type;
      if (
        !(
          (l !== 'submit' && l !== 'reset') ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = '' + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== '' && (e.name = r);
  }
  function O(e, t, r) {
    (t !== 'number' || Kn(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
  }
  var z = Array.isArray;
  function J(e, t, r, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < r.length; u++) t['$' + r[u]] = !0;
      for (r = 0; r < e.length; r++)
        (u = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== u && (e[r].selected = u),
          u && l && (e[r].defaultSelected = !0);
    } else {
      for (r = '' + xe(r), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          (e[u].selected = !0), l && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function K(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return X({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function q(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(o(92));
        if (z(r)) {
          if (1 < r.length) throw Error(o(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ''), (r = t);
    }
    e._wrapperState = { initialValue: xe(r) };
  }
  function se(e, t) {
    var r = xe(t.value),
      l = xe(t.defaultValue);
    r != null &&
      ((r = '' + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      l != null && (e.defaultValue = '' + l);
  }
  function ge(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== '' &&
      t !== null &&
      (e.value = t);
  }
  function be(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Ve(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? be(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Ct,
    Gi = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, r, l, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, l, u);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = t;
      else {
        for (
          Ct = Ct || document.createElement('div'),
            Ct.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Ct.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function an(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var cn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Xl = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(cn).forEach(function (e) {
    Xl.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (cn[t] = cn[e]);
    });
  });
  function Qr(e, t, r) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : r || typeof t != 'number' || t === 0 || (cn.hasOwnProperty(e) && cn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Zi(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var l = r.indexOf('--') === 0,
          u = Qr(r, t[r], l);
        r === 'float' && (r = 'cssFloat'), l ? e.setProperty(r, u) : (e[r] = u);
      }
  }
  var eo = X(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Yl(e, t) {
    if (t) {
      if (eo[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(o(62));
    }
  }
  function Gl(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Zl = null;
  function es(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ts = null,
    yr = null,
    gr = null;
  function Wa(e) {
    if ((e = yi(e))) {
      if (typeof ts != 'function') throw Error(o(280));
      var t = e.stateNode;
      t && ((t = xo(t)), ts(e.stateNode, e.type, t));
    }
  }
  function qa(e) {
    yr ? (gr ? gr.push(e) : (gr = [e])) : (yr = e);
  }
  function Ka() {
    if (yr) {
      var e = yr,
        t = gr;
      if (((gr = yr = null), Wa(e), t)) for (e = 0; e < t.length; e++) Wa(t[e]);
    }
  }
  function Qa(e, t) {
    return e(t);
  }
  function Ja() {}
  var ns = !1;
  function Xa(e, t, r) {
    if (ns) return e(t, r);
    ns = !0;
    try {
      return Qa(e, t, r);
    } finally {
      (ns = !1), (yr !== null || gr !== null) && (Ja(), Ka());
    }
  }
  function Jr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var l = xo(r);
    if (l === null) return null;
    r = l[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != 'function') throw Error(o(231, t, typeof r));
    return r;
  }
  var rs = !1;
  if (h)
    try {
      var Xr = {};
      Object.defineProperty(Xr, 'passive', {
        get: function () {
          rs = !0;
        },
      }),
        window.addEventListener('test', Xr, Xr),
        window.removeEventListener('test', Xr, Xr);
    } catch {
      rs = !1;
    }
  function K0(e, t, r, l, u, c, p, v, S) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, L);
    } catch (V) {
      this.onError(V);
    }
  }
  var Yr = !1,
    to = null,
    no = !1,
    is = null,
    Q0 = {
      onError: function (e) {
        (Yr = !0), (to = e);
      },
    };
  function J0(e, t, r, l, u, c, p, v, S) {
    (Yr = !1), (to = null), K0.apply(Q0, arguments);
  }
  function X0(e, t, r, l, u, c, p, v, S) {
    if ((J0.apply(this, arguments), Yr)) {
      if (Yr) {
        var L = to;
        (Yr = !1), (to = null);
      } else throw Error(o(198));
      no || ((no = !0), (is = L));
    }
  }
  function Qn(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Ya(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Ga(e) {
    if (Qn(e) !== e) throw Error(o(188));
  }
  function Y0(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Qn(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var r = e, l = t; ; ) {
      var u = r.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (((l = u.return), l !== null)) {
          r = l;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === r) return Ga(u), e;
          if (c === l) return Ga(u), t;
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (r.return !== l.return) (r = u), (l = c);
      else {
        for (var p = !1, v = u.child; v; ) {
          if (v === r) {
            (p = !0), (r = u), (l = c);
            break;
          }
          if (v === l) {
            (p = !0), (l = u), (r = c);
            break;
          }
          v = v.sibling;
        }
        if (!p) {
          for (v = c.child; v; ) {
            if (v === r) {
              (p = !0), (r = c), (l = u);
              break;
            }
            if (v === l) {
              (p = !0), (l = c), (r = u);
              break;
            }
            v = v.sibling;
          }
          if (!p) throw Error(o(189));
        }
      }
      if (r.alternate !== l) throw Error(o(190));
    }
    if (r.tag !== 3) throw Error(o(188));
    return r.stateNode.current === r ? e : t;
  }
  function Za(e) {
    return (e = Y0(e)), e !== null ? ec(e) : null;
  }
  function ec(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ec(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var tc = i.unstable_scheduleCallback,
    nc = i.unstable_cancelCallback,
    G0 = i.unstable_shouldYield,
    Z0 = i.unstable_requestPaint,
    We = i.unstable_now,
    eh = i.unstable_getCurrentPriorityLevel,
    os = i.unstable_ImmediatePriority,
    rc = i.unstable_UserBlockingPriority,
    ro = i.unstable_NormalPriority,
    th = i.unstable_LowPriority,
    ic = i.unstable_IdlePriority,
    io = null,
    Yt = null;
  function nh(e) {
    if (Yt && typeof Yt.onCommitFiberRoot == 'function')
      try {
        Yt.onCommitFiberRoot(io, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Vt = Math.clz32 ? Math.clz32 : oh,
    rh = Math.log,
    ih = Math.LN2;
  function oh(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((rh(e) / ih) | 0)) | 0;
  }
  var oo = 64,
    lo = 4194304;
  function Gr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function so(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var l = 0,
      u = e.suspendedLanes,
      c = e.pingedLanes,
      p = r & 268435455;
    if (p !== 0) {
      var v = p & ~u;
      v !== 0 ? (l = Gr(v)) : ((c &= p), c !== 0 && (l = Gr(c)));
    } else (p = r & ~u), p !== 0 ? (l = Gr(p)) : c !== 0 && (l = Gr(c));
    if (l === 0) return 0;
    if (
      t !== 0 &&
      t !== l &&
      (t & u) === 0 &&
      ((u = l & -l), (c = t & -t), u >= c || (u === 16 && (c & 4194240) !== 0))
    )
      return t;
    if (((l & 4) !== 0 && (l |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= l; 0 < t; )
        (r = 31 - Vt(t)), (u = 1 << r), (l |= e[r]), (t &= ~u);
    return l;
  }
  function lh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function sh(e, t) {
    for (
      var r = e.suspendedLanes,
        l = e.pingedLanes,
        u = e.expirationTimes,
        c = e.pendingLanes;
      0 < c;

    ) {
      var p = 31 - Vt(c),
        v = 1 << p,
        S = u[p];
      S === -1
        ? ((v & r) === 0 || (v & l) !== 0) && (u[p] = lh(v, t))
        : S <= t && (e.expiredLanes |= v),
        (c &= ~v);
    }
  }
  function ls(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function oc() {
    var e = oo;
    return (oo <<= 1), (oo & 4194240) === 0 && (oo = 64), e;
  }
  function ss(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Zr(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Vt(t)),
      (e[t] = r);
  }
  function uh(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var u = 31 - Vt(r),
        c = 1 << u;
      (t[u] = 0), (l[u] = -1), (e[u] = -1), (r &= ~c);
    }
  }
  function us(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var l = 31 - Vt(r),
        u = 1 << l;
      (u & t) | (e[l] & t) && (e[l] |= t), (r &= ~u);
    }
  }
  var Ne = 0;
  function lc(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var sc,
    as,
    uc,
    ac,
    cc,
    cs = !1,
    uo = [],
    xn = null,
    Cn = null,
    Rn = null,
    ei = new Map(),
    ti = new Map(),
    Pn = [],
    ah =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      );
  function fc(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        xn = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Cn = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Rn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        ei.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        ti.delete(t.pointerId);
    }
  }
  function ni(e, t, r, l, u, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: l,
          nativeEvent: c,
          targetContainers: [u],
        }),
        t !== null && ((t = yi(t)), t !== null && as(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function ch(e, t, r, l, u) {
    switch (t) {
      case 'focusin':
        return (xn = ni(xn, e, t, r, l, u)), !0;
      case 'dragenter':
        return (Cn = ni(Cn, e, t, r, l, u)), !0;
      case 'mouseover':
        return (Rn = ni(Rn, e, t, r, l, u)), !0;
      case 'pointerover':
        var c = u.pointerId;
        return ei.set(c, ni(ei.get(c) || null, e, t, r, l, u)), !0;
      case 'gotpointercapture':
        return (
          (c = u.pointerId), ti.set(c, ni(ti.get(c) || null, e, t, r, l, u)), !0
        );
    }
    return !1;
  }
  function dc(e) {
    var t = Jn(e.target);
    if (t !== null) {
      var r = Qn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Ya(r)), t !== null)) {
            (e.blockedOn = t),
              cc(e.priority, function () {
                uc(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ao(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = ds(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var l = new r.constructor(r.type, r);
        (Zl = l), r.target.dispatchEvent(l), (Zl = null);
      } else return (t = yi(r)), t !== null && as(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function pc(e, t, r) {
    ao(e) && r.delete(t);
  }
  function fh() {
    (cs = !1),
      xn !== null && ao(xn) && (xn = null),
      Cn !== null && ao(Cn) && (Cn = null),
      Rn !== null && ao(Rn) && (Rn = null),
      ei.forEach(pc),
      ti.forEach(pc);
  }
  function ri(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      cs ||
        ((cs = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, fh)));
  }
  function ii(e) {
    function t(u) {
      return ri(u, e);
    }
    if (0 < uo.length) {
      ri(uo[0], e);
      for (var r = 1; r < uo.length; r++) {
        var l = uo[r];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      xn !== null && ri(xn, e),
        Cn !== null && ri(Cn, e),
        Rn !== null && ri(Rn, e),
        ei.forEach(t),
        ti.forEach(t),
        r = 0;
      r < Pn.length;
      r++
    )
      (l = Pn[r]), l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < Pn.length && ((r = Pn[0]), r.blockedOn === null); )
      dc(r), r.blockedOn === null && Pn.shift();
  }
  var vr = W.ReactCurrentBatchConfig,
    co = !0;
  function dh(e, t, r, l) {
    var u = Ne,
      c = vr.transition;
    vr.transition = null;
    try {
      (Ne = 1), fs(e, t, r, l);
    } finally {
      (Ne = u), (vr.transition = c);
    }
  }
  function ph(e, t, r, l) {
    var u = Ne,
      c = vr.transition;
    vr.transition = null;
    try {
      (Ne = 4), fs(e, t, r, l);
    } finally {
      (Ne = u), (vr.transition = c);
    }
  }
  function fs(e, t, r, l) {
    if (co) {
      var u = ds(e, t, r, l);
      if (u === null) Ns(e, t, l, fo, r), fc(e, l);
      else if (ch(u, e, t, r, l)) l.stopPropagation();
      else if ((fc(e, l), t & 4 && -1 < ah.indexOf(e))) {
        for (; u !== null; ) {
          var c = yi(u);
          if (
            (c !== null && sc(c),
            (c = ds(e, t, r, l)),
            c === null && Ns(e, t, l, fo, r),
            c === u)
          )
            break;
          u = c;
        }
        u !== null && l.stopPropagation();
      } else Ns(e, t, l, null, r);
    }
  }
  var fo = null;
  function ds(e, t, r, l) {
    if (((fo = null), (e = es(l)), (e = Jn(e)), e !== null))
      if (((t = Qn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Ya(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (fo = e), null;
  }
  function hc(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (eh()) {
          case os:
            return 1;
          case rc:
            return 4;
          case ro:
          case th:
            return 16;
          case ic:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Tn = null,
    ps = null,
    po = null;
  function mc() {
    if (po) return po;
    var e,
      t = ps,
      r = t.length,
      l,
      u = 'value' in Tn ? Tn.value : Tn.textContent,
      c = u.length;
    for (e = 0; e < r && t[e] === u[e]; e++);
    var p = r - e;
    for (l = 1; l <= p && t[r - l] === u[c - l]; l++);
    return (po = u.slice(e, 1 < l ? 1 - l : void 0));
  }
  function ho(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function mo() {
    return !0;
  }
  function yc() {
    return !1;
  }
  function Rt(e) {
    function t(r, l, u, c, p) {
      (this._reactName = r),
        (this._targetInst = u),
        (this.type = l),
        (this.nativeEvent = c),
        (this.target = p),
        (this.currentTarget = null);
      for (var v in e)
        e.hasOwnProperty(v) && ((r = e[v]), (this[v] = r ? r(c) : c[v]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? mo
          : yc),
        (this.isPropagationStopped = yc),
        this
      );
    }
    return (
      X(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = mo));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = mo));
        },
        persist: function () {},
        isPersistent: mo,
      }),
      t
    );
  }
  var wr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    hs = Rt(wr),
    oi = X({}, wr, { view: 0, detail: 0 }),
    hh = Rt(oi),
    ms,
    ys,
    li,
    yo = X({}, oi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: vs,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== li &&
              (li && e.type === 'mousemove'
                ? ((ms = e.screenX - li.screenX), (ys = e.screenY - li.screenY))
                : (ys = ms = 0),
              (li = e)),
            ms);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : ys;
      },
    }),
    gc = Rt(yo),
    mh = X({}, yo, { dataTransfer: 0 }),
    yh = Rt(mh),
    gh = X({}, oi, { relatedTarget: 0 }),
    gs = Rt(gh),
    vh = X({}, wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    wh = Rt(vh),
    Sh = X({}, wr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    kh = Rt(Sh),
    _h = X({}, wr, { data: 0 }),
    vc = Rt(_h),
    Eh = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    xh = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Ch = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function Rh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Ch[e])
        ? !!t[e]
        : !1;
  }
  function vs() {
    return Rh;
  }
  var Ph = X({}, oi, {
      key: function (e) {
        if (e.key) {
          var t = Eh[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = ho(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? xh[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: vs,
      charCode: function (e) {
        return e.type === 'keypress' ? ho(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? ho(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Th = Rt(Ph),
    Nh = X({}, yo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    wc = Rt(Nh),
    Oh = X({}, oi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: vs,
    }),
    Lh = Rt(Oh),
    Ah = X({}, wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fh = Rt(Ah),
    Dh = X({}, yo, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    zh = Rt(Dh),
    jh = [9, 13, 27, 32],
    ws = h && 'CompositionEvent' in window,
    si = null;
  h && 'documentMode' in document && (si = document.documentMode);
  var Mh = h && 'TextEvent' in window && !si,
    Sc = h && (!ws || (si && 8 < si && 11 >= si)),
    kc = ' ',
    _c = !1;
  function Ec(e, t) {
    switch (e) {
      case 'keyup':
        return jh.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function xc(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var Sr = !1;
  function Ih(e, t) {
    switch (e) {
      case 'compositionend':
        return xc(t);
      case 'keypress':
        return t.which !== 32 ? null : ((_c = !0), kc);
      case 'textInput':
        return (e = t.data), e === kc && _c ? null : e;
      default:
        return null;
    }
  }
  function Uh(e, t) {
    if (Sr)
      return e === 'compositionend' || (!ws && Ec(e, t))
        ? ((e = mc()), (po = ps = Tn = null), (Sr = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Sc && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Bh = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Cc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Bh[e.type] : t === 'textarea';
  }
  function Rc(e, t, r, l) {
    qa(l),
      (t = ko(t, 'onChange')),
      0 < t.length &&
        ((r = new hs('onChange', 'change', null, r, l)),
        e.push({ event: r, listeners: t }));
  }
  var ui = null,
    ai = null;
  function Vh(e) {
    bc(e, 0);
  }
  function go(e) {
    var t = Cr(e);
    if (Xi(t)) return e;
  }
  function $h(e, t) {
    if (e === 'change') return t;
  }
  var Pc = !1;
  if (h) {
    var Ss;
    if (h) {
      var ks = 'oninput' in document;
      if (!ks) {
        var Tc = document.createElement('div');
        Tc.setAttribute('oninput', 'return;'),
          (ks = typeof Tc.oninput == 'function');
      }
      Ss = ks;
    } else Ss = !1;
    Pc = Ss && (!document.documentMode || 9 < document.documentMode);
  }
  function Nc() {
    ui && (ui.detachEvent('onpropertychange', Oc), (ai = ui = null));
  }
  function Oc(e) {
    if (e.propertyName === 'value' && go(ai)) {
      var t = [];
      Rc(t, ai, e, es(e)), Xa(Vh, t);
    }
  }
  function Hh(e, t, r) {
    e === 'focusin'
      ? (Nc(), (ui = t), (ai = r), ui.attachEvent('onpropertychange', Oc))
      : e === 'focusout' && Nc();
  }
  function bh(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return go(ai);
  }
  function Wh(e, t) {
    if (e === 'click') return go(t);
  }
  function qh(e, t) {
    if (e === 'input' || e === 'change') return go(t);
  }
  function Kh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var $t = typeof Object.is == 'function' ? Object.is : Kh;
  function ci(e, t) {
    if ($t(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      l = Object.keys(t);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var u = r[l];
      if (!m.call(t, u) || !$t(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Lc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ac(e, t) {
    var r = Lc(e);
    e = 0;
    for (var l; r; ) {
      if (r.nodeType === 3) {
        if (((l = e + r.textContent.length), e <= t && l >= t))
          return { node: r, offset: t - e };
        e = l;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Lc(r);
    }
  }
  function Fc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Fc(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Dc() {
    for (var e = window, t = Kn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Kn(e.document);
    }
    return t;
  }
  function _s(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function Qh(e) {
    var t = Dc(),
      r = e.focusedElem,
      l = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      Fc(r.ownerDocument.documentElement, r)
    ) {
      if (l !== null && _s(r)) {
        if (
          ((t = l.start),
          (e = l.end),
          e === void 0 && (e = t),
          'selectionStart' in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var u = r.textContent.length,
            c = Math.min(l.start, u);
          (l = l.end === void 0 ? c : Math.min(l.end, u)),
            !e.extend && c > l && ((u = l), (l = c), (c = u)),
            (u = Ac(r, c));
          var p = Ac(r, l);
          u &&
            p &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== p.node ||
              e.focusOffset !== p.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            c > l
              ? (e.addRange(t), e.extend(p.node, p.offset))
              : (t.setEnd(p.node, p.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Jh = h && 'documentMode' in document && 11 >= document.documentMode,
    kr = null,
    Es = null,
    fi = null,
    xs = !1;
  function zc(e, t, r) {
    var l =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    xs ||
      kr == null ||
      kr !== Kn(l) ||
      ((l = kr),
      'selectionStart' in l && _s(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (fi && ci(fi, l)) ||
        ((fi = l),
        (l = ko(Es, 'onSelect')),
        0 < l.length &&
          ((t = new hs('onSelect', 'select', null, t, r)),
          e.push({ event: t, listeners: l }),
          (t.target = kr))));
  }
  function vo(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + t),
      (r['Moz' + e] = 'moz' + t),
      r
    );
  }
  var _r = {
      animationend: vo('Animation', 'AnimationEnd'),
      animationiteration: vo('Animation', 'AnimationIteration'),
      animationstart: vo('Animation', 'AnimationStart'),
      transitionend: vo('Transition', 'TransitionEnd'),
    },
    Cs = {},
    jc = {};
  h &&
    ((jc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete _r.animationend.animation,
      delete _r.animationiteration.animation,
      delete _r.animationstart.animation),
    'TransitionEvent' in window || delete _r.transitionend.transition);
  function wo(e) {
    if (Cs[e]) return Cs[e];
    if (!_r[e]) return e;
    var t = _r[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in jc) return (Cs[e] = t[r]);
    return e;
  }
  var Mc = wo('animationend'),
    Ic = wo('animationiteration'),
    Uc = wo('animationstart'),
    Bc = wo('transitionend'),
    Vc = new Map(),
    $c =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  function Nn(e, t) {
    Vc.set(e, t), f(t, [e]);
  }
  for (var Rs = 0; Rs < $c.length; Rs++) {
    var Ps = $c[Rs],
      Xh = Ps.toLowerCase(),
      Yh = Ps[0].toUpperCase() + Ps.slice(1);
    Nn(Xh, 'on' + Yh);
  }
  Nn(Mc, 'onAnimationEnd'),
    Nn(Ic, 'onAnimationIteration'),
    Nn(Uc, 'onAnimationStart'),
    Nn('dblclick', 'onDoubleClick'),
    Nn('focusin', 'onFocus'),
    Nn('focusout', 'onBlur'),
    Nn(Bc, 'onTransitionEnd'),
    d('onMouseEnter', ['mouseout', 'mouseover']),
    d('onMouseLeave', ['mouseout', 'mouseover']),
    d('onPointerEnter', ['pointerout', 'pointerover']),
    d('onPointerLeave', ['pointerout', 'pointerover']),
    f(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    f(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    f('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    f(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    f(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    f(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
  var di =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    Gh = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(di),
    );
  function Hc(e, t, r) {
    var l = e.type || 'unknown-event';
    (e.currentTarget = r), X0(l, t, void 0, e), (e.currentTarget = null);
  }
  function bc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var l = e[r],
        u = l.event;
      l = l.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = l.length - 1; 0 <= p; p--) {
            var v = l[p],
              S = v.instance,
              L = v.currentTarget;
            if (((v = v.listener), S !== c && u.isPropagationStopped()))
              break e;
            Hc(u, v, L), (c = S);
          }
        else
          for (p = 0; p < l.length; p++) {
            if (
              ((v = l[p]),
              (S = v.instance),
              (L = v.currentTarget),
              (v = v.listener),
              S !== c && u.isPropagationStopped())
            )
              break e;
            Hc(u, v, L), (c = S);
          }
      }
    }
    if (no) throw ((e = is), (no = !1), (is = null), e);
  }
  function De(e, t) {
    var r = t[zs];
    r === void 0 && (r = t[zs] = new Set());
    var l = e + '__bubble';
    r.has(l) || (Wc(t, e, 2, !1), r.add(l));
  }
  function Ts(e, t, r) {
    var l = 0;
    t && (l |= 4), Wc(r, e, l, t);
  }
  var So = '_reactListening' + Math.random().toString(36).slice(2);
  function pi(e) {
    if (!e[So]) {
      (e[So] = !0),
        s.forEach(function (r) {
          r !== 'selectionchange' && (Gh.has(r) || Ts(r, !1, e), Ts(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[So] || ((t[So] = !0), Ts('selectionchange', !1, t));
    }
  }
  function Wc(e, t, r, l) {
    switch (hc(t)) {
      case 1:
        var u = dh;
        break;
      case 4:
        u = ph;
        break;
      default:
        u = fs;
    }
    (r = u.bind(null, t, r, e)),
      (u = void 0),
      !rs ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (u = !0),
      l
        ? u !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: u })
          : e.addEventListener(t, r, !0)
        : u !== void 0
          ? e.addEventListener(t, r, { passive: u })
          : e.addEventListener(t, r, !1);
  }
  function Ns(e, t, r, l, u) {
    var c = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var p = l.tag;
        if (p === 3 || p === 4) {
          var v = l.stateNode.containerInfo;
          if (v === u || (v.nodeType === 8 && v.parentNode === u)) break;
          if (p === 4)
            for (p = l.return; p !== null; ) {
              var S = p.tag;
              if (
                (S === 3 || S === 4) &&
                ((S = p.stateNode.containerInfo),
                S === u || (S.nodeType === 8 && S.parentNode === u))
              )
                return;
              p = p.return;
            }
          for (; v !== null; ) {
            if (((p = Jn(v)), p === null)) return;
            if (((S = p.tag), S === 5 || S === 6)) {
              l = c = p;
              continue e;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    Xa(function () {
      var L = c,
        V = es(r),
        $ = [];
      e: {
        var B = Vc.get(e);
        if (B !== void 0) {
          var Y = hs,
            ee = e;
          switch (e) {
            case 'keypress':
              if (ho(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              Y = Th;
              break;
            case 'focusin':
              (ee = 'focus'), (Y = gs);
              break;
            case 'focusout':
              (ee = 'blur'), (Y = gs);
              break;
            case 'beforeblur':
            case 'afterblur':
              Y = gs;
              break;
            case 'click':
              if (r.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              Y = gc;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Y = yh;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Y = Lh;
              break;
            case Mc:
            case Ic:
            case Uc:
              Y = wh;
              break;
            case Bc:
              Y = Fh;
              break;
            case 'scroll':
              Y = hh;
              break;
            case 'wheel':
              Y = zh;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              Y = kh;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Y = wc;
          }
          var ne = (t & 4) !== 0,
            qe = !ne && e === 'scroll',
            P = ne ? (B !== null ? B + 'Capture' : null) : B;
          ne = [];
          for (var _ = L, T; _ !== null; ) {
            T = _;
            var b = T.stateNode;
            if (
              (T.tag === 5 &&
                b !== null &&
                ((T = b),
                P !== null &&
                  ((b = Jr(_, P)), b != null && ne.push(hi(_, b, T)))),
              qe)
            )
              break;
            _ = _.return;
          }
          0 < ne.length &&
            ((B = new Y(B, ee, null, r, V)),
            $.push({ event: B, listeners: ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((B = e === 'mouseover' || e === 'pointerover'),
            (Y = e === 'mouseout' || e === 'pointerout'),
            B &&
              r !== Zl &&
              (ee = r.relatedTarget || r.fromElement) &&
              (Jn(ee) || ee[fn]))
          )
            break e;
          if (
            (Y || B) &&
            ((B =
              V.window === V
                ? V
                : (B = V.ownerDocument)
                  ? B.defaultView || B.parentWindow
                  : window),
            Y
              ? ((ee = r.relatedTarget || r.toElement),
                (Y = L),
                (ee = ee ? Jn(ee) : null),
                ee !== null &&
                  ((qe = Qn(ee)),
                  ee !== qe || (ee.tag !== 5 && ee.tag !== 6)) &&
                  (ee = null))
              : ((Y = null), (ee = L)),
            Y !== ee)
          ) {
            if (
              ((ne = gc),
              (b = 'onMouseLeave'),
              (P = 'onMouseEnter'),
              (_ = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((ne = wc),
                (b = 'onPointerLeave'),
                (P = 'onPointerEnter'),
                (_ = 'pointer')),
              (qe = Y == null ? B : Cr(Y)),
              (T = ee == null ? B : Cr(ee)),
              (B = new ne(b, _ + 'leave', Y, r, V)),
              (B.target = qe),
              (B.relatedTarget = T),
              (b = null),
              Jn(V) === L &&
                ((ne = new ne(P, _ + 'enter', ee, r, V)),
                (ne.target = T),
                (ne.relatedTarget = qe),
                (b = ne)),
              (qe = b),
              Y && ee)
            )
              t: {
                for (ne = Y, P = ee, _ = 0, T = ne; T; T = Er(T)) _++;
                for (T = 0, b = P; b; b = Er(b)) T++;
                for (; 0 < _ - T; ) (ne = Er(ne)), _--;
                for (; 0 < T - _; ) (P = Er(P)), T--;
                for (; _--; ) {
                  if (ne === P || (P !== null && ne === P.alternate)) break t;
                  (ne = Er(ne)), (P = Er(P));
                }
                ne = null;
              }
            else ne = null;
            Y !== null && qc($, B, Y, ne, !1),
              ee !== null && qe !== null && qc($, qe, ee, ne, !0);
          }
        }
        e: {
          if (
            ((B = L ? Cr(L) : window),
            (Y = B.nodeName && B.nodeName.toLowerCase()),
            Y === 'select' || (Y === 'input' && B.type === 'file'))
          )
            var oe = $h;
          else if (Cc(B))
            if (Pc) oe = qh;
            else {
              oe = bh;
              var ue = Hh;
            }
          else
            (Y = B.nodeName) &&
              Y.toLowerCase() === 'input' &&
              (B.type === 'checkbox' || B.type === 'radio') &&
              (oe = Wh);
          if (oe && (oe = oe(e, L))) {
            Rc($, oe, r, V);
            break e;
          }
          ue && ue(e, B, L),
            e === 'focusout' &&
              (ue = B._wrapperState) &&
              ue.controlled &&
              B.type === 'number' &&
              O(B, 'number', B.value);
        }
        switch (((ue = L ? Cr(L) : window), e)) {
          case 'focusin':
            (Cc(ue) || ue.contentEditable === 'true') &&
              ((kr = ue), (Es = L), (fi = null));
            break;
          case 'focusout':
            fi = Es = kr = null;
            break;
          case 'mousedown':
            xs = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (xs = !1), zc($, r, V);
            break;
          case 'selectionchange':
            if (Jh) break;
          case 'keydown':
          case 'keyup':
            zc($, r, V);
        }
        var ae;
        if (ws)
          e: {
            switch (e) {
              case 'compositionstart':
                var de = 'onCompositionStart';
                break e;
              case 'compositionend':
                de = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                de = 'onCompositionUpdate';
                break e;
            }
            de = void 0;
          }
        else
          Sr
            ? Ec(e, r) && (de = 'onCompositionEnd')
            : e === 'keydown' &&
              r.keyCode === 229 &&
              (de = 'onCompositionStart');
        de &&
          (Sc &&
            r.locale !== 'ko' &&
            (Sr || de !== 'onCompositionStart'
              ? de === 'onCompositionEnd' && Sr && (ae = mc())
              : ((Tn = V),
                (ps = 'value' in Tn ? Tn.value : Tn.textContent),
                (Sr = !0))),
          (ue = ko(L, de)),
          0 < ue.length &&
            ((de = new vc(de, e, null, r, V)),
            $.push({ event: de, listeners: ue }),
            ae
              ? (de.data = ae)
              : ((ae = xc(r)), ae !== null && (de.data = ae)))),
          (ae = Mh ? Ih(e, r) : Uh(e, r)) &&
            ((L = ko(L, 'onBeforeInput')),
            0 < L.length &&
              ((V = new vc('onBeforeInput', 'beforeinput', null, r, V)),
              $.push({ event: V, listeners: L }),
              (V.data = ae)));
      }
      bc($, t);
    });
  }
  function hi(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function ko(e, t) {
    for (var r = t + 'Capture', l = []; e !== null; ) {
      var u = e,
        c = u.stateNode;
      u.tag === 5 &&
        c !== null &&
        ((u = c),
        (c = Jr(e, r)),
        c != null && l.unshift(hi(e, c, u)),
        (c = Jr(e, t)),
        c != null && l.push(hi(e, c, u))),
        (e = e.return);
    }
    return l;
  }
  function Er(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function qc(e, t, r, l, u) {
    for (var c = t._reactName, p = []; r !== null && r !== l; ) {
      var v = r,
        S = v.alternate,
        L = v.stateNode;
      if (S !== null && S === l) break;
      v.tag === 5 &&
        L !== null &&
        ((v = L),
        u
          ? ((S = Jr(r, c)), S != null && p.unshift(hi(r, S, v)))
          : u || ((S = Jr(r, c)), S != null && p.push(hi(r, S, v)))),
        (r = r.return);
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Zh = /\r\n?/g,
    em = /\u0000|\uFFFD/g;
  function Kc(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Zh,
        `
`,
      )
      .replace(em, '');
  }
  function _o(e, t, r) {
    if (((t = Kc(t)), Kc(e) !== t && r)) throw Error(o(425));
  }
  function Eo() {}
  var Os = null,
    Ls = null;
  function As(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Fs = typeof setTimeout == 'function' ? setTimeout : void 0,
    tm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Qc = typeof Promise == 'function' ? Promise : void 0,
    nm =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Qc < 'u'
          ? function (e) {
              return Qc.resolve(null).then(e).catch(rm);
            }
          : Fs;
  function rm(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ds(e, t) {
    var r = t,
      l = 0;
    do {
      var u = r.nextSibling;
      if ((e.removeChild(r), u && u.nodeType === 8))
        if (((r = u.data), r === '/$')) {
          if (l === 0) {
            e.removeChild(u), ii(t);
            return;
          }
          l--;
        } else (r !== '$' && r !== '$?' && r !== '$!') || l++;
      r = u;
    } while (r);
    ii(t);
  }
  function On(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function Jc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === '$' || r === '$!' || r === '$?') {
          if (t === 0) return e;
          t--;
        } else r === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var xr = Math.random().toString(36).slice(2),
    Gt = '__reactFiber$' + xr,
    mi = '__reactProps$' + xr,
    fn = '__reactContainer$' + xr,
    zs = '__reactEvents$' + xr,
    im = '__reactListeners$' + xr,
    om = '__reactHandles$' + xr;
  function Jn(e) {
    var t = e[Gt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[fn] || r[Gt])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = Jc(e); e !== null; ) {
            if ((r = e[Gt])) return r;
            e = Jc(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function yi(e) {
    return (
      (e = e[Gt] || e[fn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Cr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function xo(e) {
    return e[mi] || null;
  }
  var js = [],
    Rr = -1;
  function Ln(e) {
    return { current: e };
  }
  function ze(e) {
    0 > Rr || ((e.current = js[Rr]), (js[Rr] = null), Rr--);
  }
  function Fe(e, t) {
    Rr++, (js[Rr] = e.current), (e.current = t);
  }
  var An = {},
    st = Ln(An),
    yt = Ln(!1),
    Xn = An;
  function Pr(e, t) {
    var r = e.type.contextTypes;
    if (!r) return An;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
      return l.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      c;
    for (c in r) u[c] = t[c];
    return (
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function gt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Co() {
    ze(yt), ze(st);
  }
  function Xc(e, t, r) {
    if (st.current !== An) throw Error(o(168));
    Fe(st, t), Fe(yt, r);
  }
  function Yc(e, t, r) {
    var l = e.stateNode;
    if (((t = t.childContextTypes), typeof l.getChildContext != 'function'))
      return r;
    l = l.getChildContext();
    for (var u in l) if (!(u in t)) throw Error(o(108, Te(e) || 'Unknown', u));
    return X({}, r, l);
  }
  function Ro(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        An),
      (Xn = st.current),
      Fe(st, e),
      Fe(yt, yt.current),
      !0
    );
  }
  function Gc(e, t, r) {
    var l = e.stateNode;
    if (!l) throw Error(o(169));
    r
      ? ((e = Yc(e, t, Xn)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        ze(yt),
        ze(st),
        Fe(st, e))
      : ze(yt),
      Fe(yt, r);
  }
  var dn = null,
    Po = !1,
    Ms = !1;
  function Zc(e) {
    dn === null ? (dn = [e]) : dn.push(e);
  }
  function lm(e) {
    (Po = !0), Zc(e);
  }
  function Fn() {
    if (!Ms && dn !== null) {
      Ms = !0;
      var e = 0,
        t = Ne;
      try {
        var r = dn;
        for (Ne = 1; e < r.length; e++) {
          var l = r[e];
          do l = l(!0);
          while (l !== null);
        }
        (dn = null), (Po = !1);
      } catch (u) {
        throw (dn !== null && (dn = dn.slice(e + 1)), tc(os, Fn), u);
      } finally {
        (Ne = t), (Ms = !1);
      }
    }
    return null;
  }
  var Tr = [],
    Nr = 0,
    To = null,
    No = 0,
    Dt = [],
    zt = 0,
    Yn = null,
    pn = 1,
    hn = '';
  function Gn(e, t) {
    (Tr[Nr++] = No), (Tr[Nr++] = To), (To = e), (No = t);
  }
  function ef(e, t, r) {
    (Dt[zt++] = pn), (Dt[zt++] = hn), (Dt[zt++] = Yn), (Yn = e);
    var l = pn;
    e = hn;
    var u = 32 - Vt(l) - 1;
    (l &= ~(1 << u)), (r += 1);
    var c = 32 - Vt(t) + u;
    if (30 < c) {
      var p = u - (u % 5);
      (c = (l & ((1 << p) - 1)).toString(32)),
        (l >>= p),
        (u -= p),
        (pn = (1 << (32 - Vt(t) + u)) | (r << u) | l),
        (hn = c + e);
    } else (pn = (1 << c) | (r << u) | l), (hn = e);
  }
  function Is(e) {
    e.return !== null && (Gn(e, 1), ef(e, 1, 0));
  }
  function Us(e) {
    for (; e === To; )
      (To = Tr[--Nr]), (Tr[Nr] = null), (No = Tr[--Nr]), (Tr[Nr] = null);
    for (; e === Yn; )
      (Yn = Dt[--zt]),
        (Dt[zt] = null),
        (hn = Dt[--zt]),
        (Dt[zt] = null),
        (pn = Dt[--zt]),
        (Dt[zt] = null);
  }
  var Pt = null,
    Tt = null,
    Me = !1,
    Ht = null;
  function tf(e, t) {
    var r = Ut(5, null, null, 0);
    (r.elementType = 'DELETED'),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function nf(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Pt = e), (Tt = On(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Pt = e), (Tt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = Yn !== null ? { id: pn, overflow: hn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = Ut(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (Pt = e),
              (Tt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Bs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Vs(e) {
    if (Me) {
      var t = Tt;
      if (t) {
        var r = t;
        if (!nf(e, t)) {
          if (Bs(e)) throw Error(o(418));
          t = On(r.nextSibling);
          var l = Pt;
          t && nf(e, t)
            ? tf(l, r)
            : ((e.flags = (e.flags & -4097) | 2), (Me = !1), (Pt = e));
        }
      } else {
        if (Bs(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (Me = !1), (Pt = e);
      }
    }
  }
  function rf(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Pt = e;
  }
  function Oo(e) {
    if (e !== Pt) return !1;
    if (!Me) return rf(e), (Me = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== 'head' && t !== 'body' && !As(e.type, e.memoizedProps))),
      t && (t = Tt))
    ) {
      if (Bs(e)) throw (of(), Error(o(418)));
      for (; t; ) tf(e, t), (t = On(t.nextSibling));
    }
    if ((rf(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === '/$') {
              if (t === 0) {
                Tt = On(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        Tt = null;
      }
    } else Tt = Pt ? On(e.stateNode.nextSibling) : null;
    return !0;
  }
  function of() {
    for (var e = Tt; e; ) e = On(e.nextSibling);
  }
  function Or() {
    (Tt = Pt = null), (Me = !1);
  }
  function $s(e) {
    Ht === null ? (Ht = [e]) : Ht.push(e);
  }
  var sm = W.ReactCurrentBatchConfig;
  function gi(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(o(309));
          var l = r.stateNode;
        }
        if (!l) throw Error(o(147, e));
        var u = l,
          c = '' + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === c
          ? t.ref
          : ((t = function (p) {
              var v = u.refs;
              p === null ? delete v[c] : (v[c] = p);
            }),
            (t._stringRef = c),
            t);
      }
      if (typeof e != 'string') throw Error(o(284));
      if (!r._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Lo(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        o(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e,
        ),
      ))
    );
  }
  function lf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function sf(e) {
    function t(P, _) {
      if (e) {
        var T = P.deletions;
        T === null ? ((P.deletions = [_]), (P.flags |= 16)) : T.push(_);
      }
    }
    function r(P, _) {
      if (!e) return null;
      for (; _ !== null; ) t(P, _), (_ = _.sibling);
      return null;
    }
    function l(P, _) {
      for (P = new Map(); _ !== null; )
        _.key !== null ? P.set(_.key, _) : P.set(_.index, _), (_ = _.sibling);
      return P;
    }
    function u(P, _) {
      return (P = Vn(P, _)), (P.index = 0), (P.sibling = null), P;
    }
    function c(P, _, T) {
      return (
        (P.index = T),
        e
          ? ((T = P.alternate),
            T !== null
              ? ((T = T.index), T < _ ? ((P.flags |= 2), _) : T)
              : ((P.flags |= 2), _))
          : ((P.flags |= 1048576), _)
      );
    }
    function p(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function v(P, _, T, b) {
      return _ === null || _.tag !== 6
        ? ((_ = Fu(T, P.mode, b)), (_.return = P), _)
        : ((_ = u(_, T)), (_.return = P), _);
    }
    function S(P, _, T, b) {
      var oe = T.type;
      return oe === ce
        ? V(P, _, T.props.children, b, T.key)
        : _ !== null &&
            (_.elementType === oe ||
              (typeof oe == 'object' &&
                oe !== null &&
                oe.$$typeof === Ae &&
                lf(oe) === _.type))
          ? ((b = u(_, T.props)), (b.ref = gi(P, _, T)), (b.return = P), b)
          : ((b = tl(T.type, T.key, T.props, null, P.mode, b)),
            (b.ref = gi(P, _, T)),
            (b.return = P),
            b);
    }
    function L(P, _, T, b) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== T.containerInfo ||
        _.stateNode.implementation !== T.implementation
        ? ((_ = Du(T, P.mode, b)), (_.return = P), _)
        : ((_ = u(_, T.children || [])), (_.return = P), _);
    }
    function V(P, _, T, b, oe) {
      return _ === null || _.tag !== 7
        ? ((_ = lr(T, P.mode, b, oe)), (_.return = P), _)
        : ((_ = u(_, T)), (_.return = P), _);
    }
    function $(P, _, T) {
      if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
        return (_ = Fu('' + _, P.mode, T)), (_.return = P), _;
      if (typeof _ == 'object' && _ !== null) {
        switch (_.$$typeof) {
          case H:
            return (
              (T = tl(_.type, _.key, _.props, null, P.mode, T)),
              (T.ref = gi(P, null, _)),
              (T.return = P),
              T
            );
          case Z:
            return (_ = Du(_, P.mode, T)), (_.return = P), _;
          case Ae:
            var b = _._init;
            return $(P, b(_._payload), T);
        }
        if (z(_) || le(_))
          return (_ = lr(_, P.mode, T, null)), (_.return = P), _;
        Lo(P, _);
      }
      return null;
    }
    function B(P, _, T, b) {
      var oe = _ !== null ? _.key : null;
      if ((typeof T == 'string' && T !== '') || typeof T == 'number')
        return oe !== null ? null : v(P, _, '' + T, b);
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case H:
            return T.key === oe ? S(P, _, T, b) : null;
          case Z:
            return T.key === oe ? L(P, _, T, b) : null;
          case Ae:
            return (oe = T._init), B(P, _, oe(T._payload), b);
        }
        if (z(T) || le(T)) return oe !== null ? null : V(P, _, T, b, null);
        Lo(P, T);
      }
      return null;
    }
    function Y(P, _, T, b, oe) {
      if ((typeof b == 'string' && b !== '') || typeof b == 'number')
        return (P = P.get(T) || null), v(_, P, '' + b, oe);
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case H:
            return (
              (P = P.get(b.key === null ? T : b.key) || null), S(_, P, b, oe)
            );
          case Z:
            return (
              (P = P.get(b.key === null ? T : b.key) || null), L(_, P, b, oe)
            );
          case Ae:
            var ue = b._init;
            return Y(P, _, T, ue(b._payload), oe);
        }
        if (z(b) || le(b)) return (P = P.get(T) || null), V(_, P, b, oe, null);
        Lo(_, b);
      }
      return null;
    }
    function ee(P, _, T, b) {
      for (
        var oe = null, ue = null, ae = _, de = (_ = 0), nt = null;
        ae !== null && de < T.length;
        de++
      ) {
        ae.index > de ? ((nt = ae), (ae = null)) : (nt = ae.sibling);
        var Re = B(P, ae, T[de], b);
        if (Re === null) {
          ae === null && (ae = nt);
          break;
        }
        e && ae && Re.alternate === null && t(P, ae),
          (_ = c(Re, _, de)),
          ue === null ? (oe = Re) : (ue.sibling = Re),
          (ue = Re),
          (ae = nt);
      }
      if (de === T.length) return r(P, ae), Me && Gn(P, de), oe;
      if (ae === null) {
        for (; de < T.length; de++)
          (ae = $(P, T[de], b)),
            ae !== null &&
              ((_ = c(ae, _, de)),
              ue === null ? (oe = ae) : (ue.sibling = ae),
              (ue = ae));
        return Me && Gn(P, de), oe;
      }
      for (ae = l(P, ae); de < T.length; de++)
        (nt = Y(ae, P, de, T[de], b)),
          nt !== null &&
            (e &&
              nt.alternate !== null &&
              ae.delete(nt.key === null ? de : nt.key),
            (_ = c(nt, _, de)),
            ue === null ? (oe = nt) : (ue.sibling = nt),
            (ue = nt));
      return (
        e &&
          ae.forEach(function ($n) {
            return t(P, $n);
          }),
        Me && Gn(P, de),
        oe
      );
    }
    function ne(P, _, T, b) {
      var oe = le(T);
      if (typeof oe != 'function') throw Error(o(150));
      if (((T = oe.call(T)), T == null)) throw Error(o(151));
      for (
        var ue = (oe = null), ae = _, de = (_ = 0), nt = null, Re = T.next();
        ae !== null && !Re.done;
        de++, Re = T.next()
      ) {
        ae.index > de ? ((nt = ae), (ae = null)) : (nt = ae.sibling);
        var $n = B(P, ae, Re.value, b);
        if ($n === null) {
          ae === null && (ae = nt);
          break;
        }
        e && ae && $n.alternate === null && t(P, ae),
          (_ = c($n, _, de)),
          ue === null ? (oe = $n) : (ue.sibling = $n),
          (ue = $n),
          (ae = nt);
      }
      if (Re.done) return r(P, ae), Me && Gn(P, de), oe;
      if (ae === null) {
        for (; !Re.done; de++, Re = T.next())
          (Re = $(P, Re.value, b)),
            Re !== null &&
              ((_ = c(Re, _, de)),
              ue === null ? (oe = Re) : (ue.sibling = Re),
              (ue = Re));
        return Me && Gn(P, de), oe;
      }
      for (ae = l(P, ae); !Re.done; de++, Re = T.next())
        (Re = Y(ae, P, de, Re.value, b)),
          Re !== null &&
            (e &&
              Re.alternate !== null &&
              ae.delete(Re.key === null ? de : Re.key),
            (_ = c(Re, _, de)),
            ue === null ? (oe = Re) : (ue.sibling = Re),
            (ue = Re));
      return (
        e &&
          ae.forEach(function (Bm) {
            return t(P, Bm);
          }),
        Me && Gn(P, de),
        oe
      );
    }
    function qe(P, _, T, b) {
      if (
        (typeof T == 'object' &&
          T !== null &&
          T.type === ce &&
          T.key === null &&
          (T = T.props.children),
        typeof T == 'object' && T !== null)
      ) {
        switch (T.$$typeof) {
          case H:
            e: {
              for (var oe = T.key, ue = _; ue !== null; ) {
                if (ue.key === oe) {
                  if (((oe = T.type), oe === ce)) {
                    if (ue.tag === 7) {
                      r(P, ue.sibling),
                        (_ = u(ue, T.props.children)),
                        (_.return = P),
                        (P = _);
                      break e;
                    }
                  } else if (
                    ue.elementType === oe ||
                    (typeof oe == 'object' &&
                      oe !== null &&
                      oe.$$typeof === Ae &&
                      lf(oe) === ue.type)
                  ) {
                    r(P, ue.sibling),
                      (_ = u(ue, T.props)),
                      (_.ref = gi(P, ue, T)),
                      (_.return = P),
                      (P = _);
                    break e;
                  }
                  r(P, ue);
                  break;
                } else t(P, ue);
                ue = ue.sibling;
              }
              T.type === ce
                ? ((_ = lr(T.props.children, P.mode, b, T.key)),
                  (_.return = P),
                  (P = _))
                : ((b = tl(T.type, T.key, T.props, null, P.mode, b)),
                  (b.ref = gi(P, _, T)),
                  (b.return = P),
                  (P = b));
            }
            return p(P);
          case Z:
            e: {
              for (ue = T.key; _ !== null; ) {
                if (_.key === ue)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === T.containerInfo &&
                    _.stateNode.implementation === T.implementation
                  ) {
                    r(P, _.sibling),
                      (_ = u(_, T.children || [])),
                      (_.return = P),
                      (P = _);
                    break e;
                  } else {
                    r(P, _);
                    break;
                  }
                else t(P, _);
                _ = _.sibling;
              }
              (_ = Du(T, P.mode, b)), (_.return = P), (P = _);
            }
            return p(P);
          case Ae:
            return (ue = T._init), qe(P, _, ue(T._payload), b);
        }
        if (z(T)) return ee(P, _, T, b);
        if (le(T)) return ne(P, _, T, b);
        Lo(P, T);
      }
      return (typeof T == 'string' && T !== '') || typeof T == 'number'
        ? ((T = '' + T),
          _ !== null && _.tag === 6
            ? (r(P, _.sibling), (_ = u(_, T)), (_.return = P), (P = _))
            : (r(P, _), (_ = Fu(T, P.mode, b)), (_.return = P), (P = _)),
          p(P))
        : r(P, _);
    }
    return qe;
  }
  var Lr = sf(!0),
    uf = sf(!1),
    Ao = Ln(null),
    Fo = null,
    Ar = null,
    Hs = null;
  function bs() {
    Hs = Ar = Fo = null;
  }
  function Ws(e) {
    var t = Ao.current;
    ze(Ao), (e._currentValue = t);
  }
  function qs(e, t, r) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function Fr(e, t) {
    (Fo = e),
      (Hs = Ar = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (vt = !0), (e.firstContext = null));
  }
  function jt(e) {
    var t = e._currentValue;
    if (Hs !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Ar === null)) {
        if (Fo === null) throw Error(o(308));
        (Ar = e), (Fo.dependencies = { lanes: 0, firstContext: e });
      } else Ar = Ar.next = e;
    return t;
  }
  var Zn = null;
  function Ks(e) {
    Zn === null ? (Zn = [e]) : Zn.push(e);
  }
  function af(e, t, r, l) {
    var u = t.interleaved;
    return (
      u === null ? ((r.next = r), Ks(t)) : ((r.next = u.next), (u.next = r)),
      (t.interleaved = r),
      mn(e, l)
    );
  }
  function mn(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var Dn = !1;
  function Qs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function cf(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function yn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function zn(e, t, r) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ce & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (l.pending = t),
        mn(e, r)
      );
    }
    return (
      (u = l.interleaved),
      u === null ? ((t.next = t), Ks(l)) : ((t.next = u.next), (u.next = t)),
      (l.interleaved = t),
      mn(e, r)
    );
  }
  function Do(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (r |= l), (t.lanes = r), us(e, r);
    }
  }
  function ff(e, t) {
    var r = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), r === l)) {
      var u = null,
        c = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var p = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          c === null ? (u = c = p) : (c = c.next = p), (r = r.next);
        } while (r !== null);
        c === null ? (u = c = t) : (c = c.next = t);
      } else u = c = t;
      (r = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
        shared: l.shared,
        effects: l.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function zo(e, t, r, l) {
    var u = e.updateQueue;
    Dn = !1;
    var c = u.firstBaseUpdate,
      p = u.lastBaseUpdate,
      v = u.shared.pending;
    if (v !== null) {
      u.shared.pending = null;
      var S = v,
        L = S.next;
      (S.next = null), p === null ? (c = L) : (p.next = L), (p = S);
      var V = e.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (v = V.lastBaseUpdate),
        v !== p &&
          (v === null ? (V.firstBaseUpdate = L) : (v.next = L),
          (V.lastBaseUpdate = S)));
    }
    if (c !== null) {
      var $ = u.baseState;
      (p = 0), (V = L = S = null), (v = c);
      do {
        var B = v.lane,
          Y = v.eventTime;
        if ((l & B) === B) {
          V !== null &&
            (V = V.next =
              {
                eventTime: Y,
                lane: 0,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null,
              });
          e: {
            var ee = e,
              ne = v;
            switch (((B = t), (Y = r), ne.tag)) {
              case 1:
                if (((ee = ne.payload), typeof ee == 'function')) {
                  $ = ee.call(Y, $, B);
                  break e;
                }
                $ = ee;
                break e;
              case 3:
                ee.flags = (ee.flags & -65537) | 128;
              case 0:
                if (
                  ((ee = ne.payload),
                  (B = typeof ee == 'function' ? ee.call(Y, $, B) : ee),
                  B == null)
                )
                  break e;
                $ = X({}, $, B);
                break e;
              case 2:
                Dn = !0;
            }
          }
          v.callback !== null &&
            v.lane !== 0 &&
            ((e.flags |= 64),
            (B = u.effects),
            B === null ? (u.effects = [v]) : B.push(v));
        } else
          (Y = {
            eventTime: Y,
            lane: B,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            V === null ? ((L = V = Y), (S = $)) : (V = V.next = Y),
            (p |= B);
        if (((v = v.next), v === null)) {
          if (((v = u.shared.pending), v === null)) break;
          (B = v),
            (v = B.next),
            (B.next = null),
            (u.lastBaseUpdate = B),
            (u.shared.pending = null);
        }
      } while (!0);
      if (
        (V === null && (S = $),
        (u.baseState = S),
        (u.firstBaseUpdate = L),
        (u.lastBaseUpdate = V),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do (p |= u.lane), (u = u.next);
        while (u !== t);
      } else c === null && (u.shared.lanes = 0);
      (nr |= p), (e.lanes = p), (e.memoizedState = $);
    }
  }
  function df(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var l = e[t],
          u = l.callback;
        if (u !== null) {
          if (((l.callback = null), (l = r), typeof u != 'function'))
            throw Error(o(191, u));
          u.call(l);
        }
      }
  }
  var vi = {},
    Zt = Ln(vi),
    wi = Ln(vi),
    Si = Ln(vi);
  function er(e) {
    if (e === vi) throw Error(o(174));
    return e;
  }
  function Js(e, t) {
    switch ((Fe(Si, t), Fe(wi, e), Fe(Zt, vi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ve(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ve(t, e));
    }
    ze(Zt), Fe(Zt, t);
  }
  function Dr() {
    ze(Zt), ze(wi), ze(Si);
  }
  function pf(e) {
    er(Si.current);
    var t = er(Zt.current),
      r = Ve(t, e.type);
    t !== r && (Fe(wi, e), Fe(Zt, r));
  }
  function Xs(e) {
    wi.current === e && (ze(Zt), ze(wi));
  }
  var Ie = Ln(0);
  function jo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Ys = [];
  function Gs() {
    for (var e = 0; e < Ys.length; e++)
      Ys[e]._workInProgressVersionPrimary = null;
    Ys.length = 0;
  }
  var Mo = W.ReactCurrentDispatcher,
    Zs = W.ReactCurrentBatchConfig,
    tr = 0,
    Ue = null,
    Xe = null,
    et = null,
    Io = !1,
    ki = !1,
    _i = 0,
    um = 0;
  function ut() {
    throw Error(o(321));
  }
  function eu(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!$t(e[r], t[r])) return !1;
    return !0;
  }
  function tu(e, t, r, l, u, c) {
    if (
      ((tr = c),
      (Ue = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Mo.current = e === null || e.memoizedState === null ? dm : pm),
      (e = r(l, u)),
      ki)
    ) {
      c = 0;
      do {
        if (((ki = !1), (_i = 0), 25 <= c)) throw Error(o(301));
        (c += 1),
          (et = Xe = null),
          (t.updateQueue = null),
          (Mo.current = hm),
          (e = r(l, u));
      } while (ki);
    }
    if (
      ((Mo.current = Vo),
      (t = Xe !== null && Xe.next !== null),
      (tr = 0),
      (et = Xe = Ue = null),
      (Io = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function nu() {
    var e = _i !== 0;
    return (_i = 0), e;
  }
  function en() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return et === null ? (Ue.memoizedState = et = e) : (et = et.next = e), et;
  }
  function Mt() {
    if (Xe === null) {
      var e = Ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Xe.next;
    var t = et === null ? Ue.memoizedState : et.next;
    if (t !== null) (et = t), (Xe = e);
    else {
      if (e === null) throw Error(o(310));
      (Xe = e),
        (e = {
          memoizedState: Xe.memoizedState,
          baseState: Xe.baseState,
          baseQueue: Xe.baseQueue,
          queue: Xe.queue,
          next: null,
        }),
        et === null ? (Ue.memoizedState = et = e) : (et = et.next = e);
    }
    return et;
  }
  function Ei(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function ru(e) {
    var t = Mt(),
      r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var l = Xe,
      u = l.baseQueue,
      c = r.pending;
    if (c !== null) {
      if (u !== null) {
        var p = u.next;
        (u.next = c.next), (c.next = p);
      }
      (l.baseQueue = u = c), (r.pending = null);
    }
    if (u !== null) {
      (c = u.next), (l = l.baseState);
      var v = (p = null),
        S = null,
        L = c;
      do {
        var V = L.lane;
        if ((tr & V) === V)
          S !== null &&
            (S = S.next =
              {
                lane: 0,
                action: L.action,
                hasEagerState: L.hasEagerState,
                eagerState: L.eagerState,
                next: null,
              }),
            (l = L.hasEagerState ? L.eagerState : e(l, L.action));
        else {
          var $ = {
            lane: V,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          };
          S === null ? ((v = S = $), (p = l)) : (S = S.next = $),
            (Ue.lanes |= V),
            (nr |= V);
        }
        L = L.next;
      } while (L !== null && L !== c);
      S === null ? (p = l) : (S.next = v),
        $t(l, t.memoizedState) || (vt = !0),
        (t.memoizedState = l),
        (t.baseState = p),
        (t.baseQueue = S),
        (r.lastRenderedState = l);
    }
    if (((e = r.interleaved), e !== null)) {
      u = e;
      do (c = u.lane), (Ue.lanes |= c), (nr |= c), (u = u.next);
      while (u !== e);
    } else u === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function iu(e) {
    var t = Mt(),
      r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var l = r.dispatch,
      u = r.pending,
      c = t.memoizedState;
    if (u !== null) {
      r.pending = null;
      var p = (u = u.next);
      do (c = e(c, p.action)), (p = p.next);
      while (p !== u);
      $t(c, t.memoizedState) || (vt = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (r.lastRenderedState = c);
    }
    return [c, l];
  }
  function hf() {}
  function mf(e, t) {
    var r = Ue,
      l = Mt(),
      u = t(),
      c = !$t(l.memoizedState, u);
    if (
      (c && ((l.memoizedState = u), (vt = !0)),
      (l = l.queue),
      ou(vf.bind(null, r, l, e), [e]),
      l.getSnapshot !== t || c || (et !== null && et.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        xi(9, gf.bind(null, r, l, u, t), void 0, null),
        tt === null)
      )
        throw Error(o(349));
      (tr & 30) !== 0 || yf(r, t, u);
    }
    return u;
  }
  function yf(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Ue.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ue.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function gf(e, t, r, l) {
    (t.value = r), (t.getSnapshot = l), wf(t) && Sf(e);
  }
  function vf(e, t, r) {
    return r(function () {
      wf(t) && Sf(e);
    });
  }
  function wf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !$t(e, r);
    } catch {
      return !0;
    }
  }
  function Sf(e) {
    var t = mn(e, 1);
    t !== null && Kt(t, e, 1, -1);
  }
  function kf(e) {
    var t = en();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ei,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = fm.bind(null, Ue, e)),
      [t.memoizedState, e]
    );
  }
  function xi(e, t, r, l) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: l, next: null }),
      (t = Ue.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ue.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((l = r.next), (r.next = e), (e.next = l), (t.lastEffect = e))),
      e
    );
  }
  function _f() {
    return Mt().memoizedState;
  }
  function Uo(e, t, r, l) {
    var u = en();
    (Ue.flags |= e),
      (u.memoizedState = xi(1 | t, r, void 0, l === void 0 ? null : l));
  }
  function Bo(e, t, r, l) {
    var u = Mt();
    l = l === void 0 ? null : l;
    var c = void 0;
    if (Xe !== null) {
      var p = Xe.memoizedState;
      if (((c = p.destroy), l !== null && eu(l, p.deps))) {
        u.memoizedState = xi(t, r, c, l);
        return;
      }
    }
    (Ue.flags |= e), (u.memoizedState = xi(1 | t, r, c, l));
  }
  function Ef(e, t) {
    return Uo(8390656, 8, e, t);
  }
  function ou(e, t) {
    return Bo(2048, 8, e, t);
  }
  function xf(e, t) {
    return Bo(4, 2, e, t);
  }
  function Cf(e, t) {
    return Bo(4, 4, e, t);
  }
  function Rf(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Pf(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), Bo(4, 4, Rf.bind(null, t, e), r)
    );
  }
  function lu() {}
  function Tf(e, t) {
    var r = Mt();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    return l !== null && t !== null && eu(t, l[1])
      ? l[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function Nf(e, t) {
    var r = Mt();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    return l !== null && t !== null && eu(t, l[1])
      ? l[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function Of(e, t, r) {
    return (tr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (vt = !0)), (e.memoizedState = r))
      : ($t(r, t) ||
          ((r = oc()), (Ue.lanes |= r), (nr |= r), (e.baseState = !0)),
        t);
  }
  function am(e, t) {
    var r = Ne;
    (Ne = r !== 0 && 4 > r ? r : 4), e(!0);
    var l = Zs.transition;
    Zs.transition = {};
    try {
      e(!1), t();
    } finally {
      (Ne = r), (Zs.transition = l);
    }
  }
  function Lf() {
    return Mt().memoizedState;
  }
  function cm(e, t, r) {
    var l = Un(e);
    if (
      ((r = {
        lane: l,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Af(e))
    )
      Ff(t, r);
    else if (((r = af(e, t, r, l)), r !== null)) {
      var u = ht();
      Kt(r, e, l, u), Df(r, t, l);
    }
  }
  function fm(e, t, r) {
    var l = Un(e),
      u = {
        lane: l,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Af(e)) Ff(t, u);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var p = t.lastRenderedState,
            v = c(p, r);
          if (((u.hasEagerState = !0), (u.eagerState = v), $t(v, p))) {
            var S = t.interleaved;
            S === null
              ? ((u.next = u), Ks(t))
              : ((u.next = S.next), (S.next = u)),
              (t.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (r = af(e, t, u, l)),
        r !== null && ((u = ht()), Kt(r, e, l, u), Df(r, t, l));
    }
  }
  function Af(e) {
    var t = e.alternate;
    return e === Ue || (t !== null && t === Ue);
  }
  function Ff(e, t) {
    ki = Io = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function Df(e, t, r) {
    if ((r & 4194240) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (r |= l), (t.lanes = r), us(e, r);
    }
  }
  var Vo = {
      readContext: jt,
      useCallback: ut,
      useContext: ut,
      useEffect: ut,
      useImperativeHandle: ut,
      useInsertionEffect: ut,
      useLayoutEffect: ut,
      useMemo: ut,
      useReducer: ut,
      useRef: ut,
      useState: ut,
      useDebugValue: ut,
      useDeferredValue: ut,
      useTransition: ut,
      useMutableSource: ut,
      useSyncExternalStore: ut,
      useId: ut,
      unstable_isNewReconciler: !1,
    },
    dm = {
      readContext: jt,
      useCallback: function (e, t) {
        return (en().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: jt,
      useEffect: Ef,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          Uo(4194308, 4, Rf.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return Uo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Uo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = en();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var l = en();
        return (
          (t = r !== void 0 ? r(t) : t),
          (l.memoizedState = l.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (l.queue = e),
          (e = e.dispatch = cm.bind(null, Ue, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = en();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: kf,
      useDebugValue: lu,
      useDeferredValue: function (e) {
        return (en().memoizedState = e);
      },
      useTransition: function () {
        var e = kf(!1),
          t = e[0];
        return (e = am.bind(null, e[1])), (en().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var l = Ue,
          u = en();
        if (Me) {
          if (r === void 0) throw Error(o(407));
          r = r();
        } else {
          if (((r = t()), tt === null)) throw Error(o(349));
          (tr & 30) !== 0 || yf(l, t, r);
        }
        u.memoizedState = r;
        var c = { value: r, getSnapshot: t };
        return (
          (u.queue = c),
          Ef(vf.bind(null, l, c, e), [e]),
          (l.flags |= 2048),
          xi(9, gf.bind(null, l, c, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = en(),
          t = tt.identifierPrefix;
        if (Me) {
          var r = hn,
            l = pn;
          (r = (l & ~(1 << (32 - Vt(l) - 1))).toString(32) + r),
            (t = ':' + t + 'R' + r),
            (r = _i++),
            0 < r && (t += 'H' + r.toString(32)),
            (t += ':');
        } else (r = um++), (t = ':' + t + 'r' + r.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    pm = {
      readContext: jt,
      useCallback: Tf,
      useContext: jt,
      useEffect: ou,
      useImperativeHandle: Pf,
      useInsertionEffect: xf,
      useLayoutEffect: Cf,
      useMemo: Nf,
      useReducer: ru,
      useRef: _f,
      useState: function () {
        return ru(Ei);
      },
      useDebugValue: lu,
      useDeferredValue: function (e) {
        var t = Mt();
        return Of(t, Xe.memoizedState, e);
      },
      useTransition: function () {
        var e = ru(Ei)[0],
          t = Mt().memoizedState;
        return [e, t];
      },
      useMutableSource: hf,
      useSyncExternalStore: mf,
      useId: Lf,
      unstable_isNewReconciler: !1,
    },
    hm = {
      readContext: jt,
      useCallback: Tf,
      useContext: jt,
      useEffect: ou,
      useImperativeHandle: Pf,
      useInsertionEffect: xf,
      useLayoutEffect: Cf,
      useMemo: Nf,
      useReducer: iu,
      useRef: _f,
      useState: function () {
        return iu(Ei);
      },
      useDebugValue: lu,
      useDeferredValue: function (e) {
        var t = Mt();
        return Xe === null ? (t.memoizedState = e) : Of(t, Xe.memoizedState, e);
      },
      useTransition: function () {
        var e = iu(Ei)[0],
          t = Mt().memoizedState;
        return [e, t];
      },
      useMutableSource: hf,
      useSyncExternalStore: mf,
      useId: Lf,
      unstable_isNewReconciler: !1,
    };
  function bt(e, t) {
    if (e && e.defaultProps) {
      (t = X({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function su(e, t, r, l) {
    (t = e.memoizedState),
      (r = r(l, t)),
      (r = r == null ? t : X({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var $o = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Qn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var l = ht(),
        u = Un(e),
        c = yn(l, u);
      (c.payload = t),
        r != null && (c.callback = r),
        (t = zn(e, c, u)),
        t !== null && (Kt(t, e, u, l), Do(t, e, u));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var l = ht(),
        u = Un(e),
        c = yn(l, u);
      (c.tag = 1),
        (c.payload = t),
        r != null && (c.callback = r),
        (t = zn(e, c, u)),
        t !== null && (Kt(t, e, u, l), Do(t, e, u));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = ht(),
        l = Un(e),
        u = yn(r, l);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = zn(e, u, l)),
        t !== null && (Kt(t, e, l, r), Do(t, e, l));
    },
  };
  function zf(e, t, r, l, u, c, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, c, p)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ci(r, l) || !ci(u, c)
          : !0
    );
  }
  function jf(e, t, r) {
    var l = !1,
      u = An,
      c = t.contextType;
    return (
      typeof c == 'object' && c !== null
        ? (c = jt(c))
        : ((u = gt(t) ? Xn : st.current),
          (l = t.contextTypes),
          (c = (l = l != null) ? Pr(e, u) : An)),
      (t = new t(r, c)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = $o),
      (e.stateNode = t),
      (t._reactInternals = e),
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    );
  }
  function Mf(e, t, r, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(r, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(r, l),
      t.state !== e && $o.enqueueReplaceState(t, t.state, null);
  }
  function uu(e, t, r, l) {
    var u = e.stateNode;
    (u.props = r), (u.state = e.memoizedState), (u.refs = {}), Qs(e);
    var c = t.contextType;
    typeof c == 'object' && c !== null
      ? (u.context = jt(c))
      : ((c = gt(t) ? Xn : st.current), (u.context = Pr(e, c))),
      (u.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == 'function' && (su(e, t, c, r), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function' ||
        (typeof u.UNSAFE_componentWillMount != 'function' &&
          typeof u.componentWillMount != 'function') ||
        ((t = u.state),
        typeof u.componentWillMount == 'function' && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == 'function' &&
          u.UNSAFE_componentWillMount(),
        t !== u.state && $o.enqueueReplaceState(u, u.state, null),
        zo(e, r, u, l),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function zr(e, t) {
    try {
      var r = '',
        l = t;
      do (r += _e(l)), (l = l.return);
      while (l);
      var u = r;
    } catch (c) {
      u =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function au(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function cu(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var mm = typeof WeakMap == 'function' ? WeakMap : Map;
  function If(e, t, r) {
    (r = yn(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var l = t.value;
    return (
      (r.callback = function () {
        Jo || ((Jo = !0), (Cu = l)), cu(e, t);
      }),
      r
    );
  }
  function Uf(e, t, r) {
    (r = yn(-1, r)), (r.tag = 3);
    var l = e.type.getDerivedStateFromError;
    if (typeof l == 'function') {
      var u = t.value;
      (r.payload = function () {
        return l(u);
      }),
        (r.callback = function () {
          cu(e, t);
        });
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == 'function' &&
        (r.callback = function () {
          cu(e, t),
            typeof l != 'function' &&
              (Mn === null ? (Mn = new Set([this])) : Mn.add(this));
          var p = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: p !== null ? p : '',
          });
        }),
      r
    );
  }
  function Bf(e, t, r) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new mm();
      var u = new Set();
      l.set(t, u);
    } else (u = l.get(t)), u === void 0 && ((u = new Set()), l.set(t, u));
    u.has(r) || (u.add(r), (e = Nm.bind(null, e, t, r)), t.then(e, e));
  }
  function Vf(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function $f(e, t, r, l, u) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = yn(-1, 1)), (t.tag = 2), zn(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var ym = W.ReactCurrentOwner,
    vt = !1;
  function pt(e, t, r, l) {
    t.child = e === null ? uf(t, null, r, l) : Lr(t, e.child, r, l);
  }
  function Hf(e, t, r, l, u) {
    r = r.render;
    var c = t.ref;
    return (
      Fr(t, u),
      (l = tu(e, t, r, l, c, u)),
      (r = nu()),
      e !== null && !vt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          gn(e, t, u))
        : (Me && r && Is(t), (t.flags |= 1), pt(e, t, l, u), t.child)
    );
  }
  function bf(e, t, r, l, u) {
    if (e === null) {
      var c = r.type;
      return typeof c == 'function' &&
        !Au(c) &&
        c.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), Wf(e, t, c, l, u))
        : ((e = tl(r.type, null, l, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), (e.lanes & u) === 0)) {
      var p = c.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : ci), r(p, l) && e.ref === t.ref)
      )
        return gn(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = Vn(c, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Wf(e, t, r, l, u) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (ci(c, l) && e.ref === t.ref)
        if (((vt = !1), (t.pendingProps = l = c), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (vt = !0);
        else return (t.lanes = e.lanes), gn(e, t, u);
    }
    return fu(e, t, r, l, u);
  }
  function qf(e, t, r) {
    var l = t.pendingProps,
      u = l.children,
      c = e !== null ? e.memoizedState : null;
    if (l.mode === 'hidden')
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Fe(Mr, Nt),
          (Nt |= r);
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = c !== null ? c.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Fe(Mr, Nt),
            (Nt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = c !== null ? c.baseLanes : r),
          Fe(Mr, Nt),
          (Nt |= l);
      }
    else
      c !== null ? ((l = c.baseLanes | r), (t.memoizedState = null)) : (l = r),
        Fe(Mr, Nt),
        (Nt |= l);
    return pt(e, t, u, r), t.child;
  }
  function Kf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function fu(e, t, r, l, u) {
    var c = gt(r) ? Xn : st.current;
    return (
      (c = Pr(t, c)),
      Fr(t, u),
      (r = tu(e, t, r, l, c, u)),
      (l = nu()),
      e !== null && !vt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          gn(e, t, u))
        : (Me && l && Is(t), (t.flags |= 1), pt(e, t, r, u), t.child)
    );
  }
  function Qf(e, t, r, l, u) {
    if (gt(r)) {
      var c = !0;
      Ro(t);
    } else c = !1;
    if ((Fr(t, u), t.stateNode === null))
      bo(e, t), jf(t, r, l), uu(t, r, l, u), (l = !0);
    else if (e === null) {
      var p = t.stateNode,
        v = t.memoizedProps;
      p.props = v;
      var S = p.context,
        L = r.contextType;
      typeof L == 'object' && L !== null
        ? (L = jt(L))
        : ((L = gt(r) ? Xn : st.current), (L = Pr(t, L)));
      var V = r.getDerivedStateFromProps,
        $ =
          typeof V == 'function' ||
          typeof p.getSnapshotBeforeUpdate == 'function';
      $ ||
        (typeof p.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof p.componentWillReceiveProps != 'function') ||
        ((v !== l || S !== L) && Mf(t, p, l, L)),
        (Dn = !1);
      var B = t.memoizedState;
      (p.state = B),
        zo(t, l, p, u),
        (S = t.memoizedState),
        v !== l || B !== S || yt.current || Dn
          ? (typeof V == 'function' && (su(t, r, V, l), (S = t.memoizedState)),
            (v = Dn || zf(t, r, v, l, B, S, L))
              ? ($ ||
                  (typeof p.UNSAFE_componentWillMount != 'function' &&
                    typeof p.componentWillMount != 'function') ||
                  (typeof p.componentWillMount == 'function' &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == 'function' &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof p.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = S)),
            (p.props = l),
            (p.state = S),
            (p.context = L),
            (l = v))
          : (typeof p.componentDidMount == 'function' && (t.flags |= 4194308),
            (l = !1));
    } else {
      (p = t.stateNode),
        cf(e, t),
        (v = t.memoizedProps),
        (L = t.type === t.elementType ? v : bt(t.type, v)),
        (p.props = L),
        ($ = t.pendingProps),
        (B = p.context),
        (S = r.contextType),
        typeof S == 'object' && S !== null
          ? (S = jt(S))
          : ((S = gt(r) ? Xn : st.current), (S = Pr(t, S)));
      var Y = r.getDerivedStateFromProps;
      (V =
        typeof Y == 'function' ||
        typeof p.getSnapshotBeforeUpdate == 'function') ||
        (typeof p.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof p.componentWillReceiveProps != 'function') ||
        ((v !== $ || B !== S) && Mf(t, p, l, S)),
        (Dn = !1),
        (B = t.memoizedState),
        (p.state = B),
        zo(t, l, p, u);
      var ee = t.memoizedState;
      v !== $ || B !== ee || yt.current || Dn
        ? (typeof Y == 'function' && (su(t, r, Y, l), (ee = t.memoizedState)),
          (L = Dn || zf(t, r, L, l, B, ee, S) || !1)
            ? (V ||
                (typeof p.UNSAFE_componentWillUpdate != 'function' &&
                  typeof p.componentWillUpdate != 'function') ||
                (typeof p.componentWillUpdate == 'function' &&
                  p.componentWillUpdate(l, ee, S),
                typeof p.UNSAFE_componentWillUpdate == 'function' &&
                  p.UNSAFE_componentWillUpdate(l, ee, S)),
              typeof p.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof p.componentDidUpdate != 'function' ||
                (v === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != 'function' ||
                (v === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = ee)),
          (p.props = l),
          (p.state = ee),
          (p.context = S),
          (l = L))
        : (typeof p.componentDidUpdate != 'function' ||
            (v === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != 'function' ||
            (v === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return du(e, t, r, l, c, u);
  }
  function du(e, t, r, l, u, c) {
    Kf(e, t);
    var p = (t.flags & 128) !== 0;
    if (!l && !p) return u && Gc(t, r, !1), gn(e, t, c);
    (l = t.stateNode), (ym.current = t);
    var v =
      p && typeof r.getDerivedStateFromError != 'function' ? null : l.render();
    return (
      (t.flags |= 1),
      e !== null && p
        ? ((t.child = Lr(t, e.child, null, c)), (t.child = Lr(t, null, v, c)))
        : pt(e, t, v, c),
      (t.memoizedState = l.state),
      u && Gc(t, r, !0),
      t.child
    );
  }
  function Jf(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Xc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Xc(e, t.context, !1),
      Js(e, t.containerInfo);
  }
  function Xf(e, t, r, l, u) {
    return Or(), $s(u), (t.flags |= 256), pt(e, t, r, l), t.child;
  }
  var pu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function hu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Yf(e, t, r) {
    var l = t.pendingProps,
      u = Ie.current,
      c = !1,
      p = (t.flags & 128) !== 0,
      v;
    if (
      ((v = p) ||
        (v = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      v
        ? ((c = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (u |= 1),
      Fe(Ie, u & 1),
      e === null)
    )
      return (
        Vs(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((p = l.children),
            (e = l.fallback),
            c
              ? ((l = t.mode),
                (c = t.child),
                (p = { mode: 'hidden', children: p }),
                (l & 1) === 0 && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = p))
                  : (c = nl(p, l, 0, null)),
                (e = lr(e, l, r, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = hu(r)),
                (t.memoizedState = pu),
                e)
              : mu(t, p))
      );
    if (((u = e.memoizedState), u !== null && ((v = u.dehydrated), v !== null)))
      return gm(e, t, p, l, v, u, r);
    if (c) {
      (c = l.fallback), (p = t.mode), (u = e.child), (v = u.sibling);
      var S = { mode: 'hidden', children: l.children };
      return (
        (p & 1) === 0 && t.child !== u
          ? ((l = t.child),
            (l.childLanes = 0),
            (l.pendingProps = S),
            (t.deletions = null))
          : ((l = Vn(u, S)), (l.subtreeFlags = u.subtreeFlags & 14680064)),
        v !== null ? (c = Vn(v, c)) : ((c = lr(c, p, r, null)), (c.flags |= 2)),
        (c.return = t),
        (l.return = t),
        (l.sibling = c),
        (t.child = l),
        (l = c),
        (c = t.child),
        (p = e.child.memoizedState),
        (p =
          p === null
            ? hu(r)
            : {
                baseLanes: p.baseLanes | r,
                cachePool: null,
                transitions: p.transitions,
              }),
        (c.memoizedState = p),
        (c.childLanes = e.childLanes & ~r),
        (t.memoizedState = pu),
        l
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (l = Vn(c, { mode: 'visible', children: l.children })),
      (t.mode & 1) === 0 && (l.lanes = r),
      (l.return = t),
      (l.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = l),
      (t.memoizedState = null),
      l
    );
  }
  function mu(e, t) {
    return (
      (t = nl({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ho(e, t, r, l) {
    return (
      l !== null && $s(l),
      Lr(t, e.child, null, r),
      (e = mu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function gm(e, t, r, l, u, c, p) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (l = au(Error(o(422)))), Ho(e, t, p, l))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((c = l.fallback),
            (u = t.mode),
            (l = nl({ mode: 'visible', children: l.children }, u, 0, null)),
            (c = lr(c, u, p, null)),
            (c.flags |= 2),
            (l.return = t),
            (c.return = t),
            (l.sibling = c),
            (t.child = l),
            (t.mode & 1) !== 0 && Lr(t, e.child, null, p),
            (t.child.memoizedState = hu(p)),
            (t.memoizedState = pu),
            c);
    if ((t.mode & 1) === 0) return Ho(e, t, p, null);
    if (u.data === '$!') {
      if (((l = u.nextSibling && u.nextSibling.dataset), l)) var v = l.dgst;
      return (
        (l = v), (c = Error(o(419))), (l = au(c, l, void 0)), Ho(e, t, p, l)
      );
    }
    if (((v = (p & e.childLanes) !== 0), vt || v)) {
      if (((l = tt), l !== null)) {
        switch (p & -p) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        (u = (u & (l.suspendedLanes | p)) !== 0 ? 0 : u),
          u !== 0 &&
            u !== c.retryLane &&
            ((c.retryLane = u), mn(e, u), Kt(l, e, u, -1));
      }
      return Lu(), (l = au(Error(o(421)))), Ho(e, t, p, l);
    }
    return u.data === '$?'
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Om.bind(null, e)),
        (u._reactRetry = t),
        null)
      : ((e = c.treeContext),
        (Tt = On(u.nextSibling)),
        (Pt = t),
        (Me = !0),
        (Ht = null),
        e !== null &&
          ((Dt[zt++] = pn),
          (Dt[zt++] = hn),
          (Dt[zt++] = Yn),
          (pn = e.id),
          (hn = e.overflow),
          (Yn = t)),
        (t = mu(t, l.children)),
        (t.flags |= 4096),
        t);
  }
  function Gf(e, t, r) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), qs(e.return, t, r);
  }
  function yu(e, t, r, l, u) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: r,
          tailMode: u,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = l),
        (c.tail = r),
        (c.tailMode = u));
  }
  function Zf(e, t, r) {
    var l = t.pendingProps,
      u = l.revealOrder,
      c = l.tail;
    if ((pt(e, t, l.children, r), (l = Ie.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Gf(e, r, t);
          else if (e.tag === 19) Gf(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    if ((Fe(Ie, l), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (u) {
        case 'forwards':
          for (r = t.child, u = null; r !== null; )
            (e = r.alternate),
              e !== null && jo(e) === null && (u = r),
              (r = r.sibling);
          (r = u),
            r === null
              ? ((u = t.child), (t.child = null))
              : ((u = r.sibling), (r.sibling = null)),
            yu(t, !1, u, r, c);
          break;
        case 'backwards':
          for (r = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && jo(e) === null)) {
              t.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = r), (r = u), (u = e);
          }
          yu(t, !0, r, null, c);
          break;
        case 'together':
          yu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function bo(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function gn(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (nr |= t.lanes),
      (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, r = Vn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = Vn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function vm(e, t, r) {
    switch (t.tag) {
      case 3:
        Jf(t), Or();
        break;
      case 5:
        pf(t);
        break;
      case 1:
        gt(t.type) && Ro(t);
        break;
      case 4:
        Js(t, t.stateNode.containerInfo);
        break;
      case 10:
        var l = t.type._context,
          u = t.memoizedProps.value;
        Fe(Ao, l._currentValue), (l._currentValue = u);
        break;
      case 13:
        if (((l = t.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Fe(Ie, Ie.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? Yf(e, t, r)
              : (Fe(Ie, Ie.current & 1),
                (e = gn(e, t, r)),
                e !== null ? e.sibling : null);
        Fe(Ie, Ie.current & 1);
        break;
      case 19:
        if (((l = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (l) return Zf(e, t, r);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Fe(Ie, Ie.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), qf(e, t, r);
    }
    return gn(e, t, r);
  }
  var ed, gu, td, nd;
  (ed = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (gu = function () {}),
    (td = function (e, t, r, l) {
      var u = e.memoizedProps;
      if (u !== l) {
        (e = t.stateNode), er(Zt.current);
        var c = null;
        switch (r) {
          case 'input':
            (u = mr(e, u)), (l = mr(e, l)), (c = []);
            break;
          case 'select':
            (u = X({}, u, { value: void 0 })),
              (l = X({}, l, { value: void 0 })),
              (c = []);
            break;
          case 'textarea':
            (u = K(e, u)), (l = K(e, l)), (c = []);
            break;
          default:
            typeof u.onClick != 'function' &&
              typeof l.onClick == 'function' &&
              (e.onclick = Eo);
        }
        Yl(r, l);
        var p;
        r = null;
        for (L in u)
          if (!l.hasOwnProperty(L) && u.hasOwnProperty(L) && u[L] != null)
            if (L === 'style') {
              var v = u[L];
              for (p in v) v.hasOwnProperty(p) && (r || (r = {}), (r[p] = ''));
            } else
              L !== 'dangerouslySetInnerHTML' &&
                L !== 'children' &&
                L !== 'suppressContentEditableWarning' &&
                L !== 'suppressHydrationWarning' &&
                L !== 'autoFocus' &&
                (a.hasOwnProperty(L)
                  ? c || (c = [])
                  : (c = c || []).push(L, null));
        for (L in l) {
          var S = l[L];
          if (
            ((v = u != null ? u[L] : void 0),
            l.hasOwnProperty(L) && S !== v && (S != null || v != null))
          )
            if (L === 'style')
              if (v) {
                for (p in v)
                  !v.hasOwnProperty(p) ||
                    (S && S.hasOwnProperty(p)) ||
                    (r || (r = {}), (r[p] = ''));
                for (p in S)
                  S.hasOwnProperty(p) &&
                    v[p] !== S[p] &&
                    (r || (r = {}), (r[p] = S[p]));
              } else r || (c || (c = []), c.push(L, r)), (r = S);
            else
              L === 'dangerouslySetInnerHTML'
                ? ((S = S ? S.__html : void 0),
                  (v = v ? v.__html : void 0),
                  S != null && v !== S && (c = c || []).push(L, S))
                : L === 'children'
                  ? (typeof S != 'string' && typeof S != 'number') ||
                    (c = c || []).push(L, '' + S)
                  : L !== 'suppressContentEditableWarning' &&
                    L !== 'suppressHydrationWarning' &&
                    (a.hasOwnProperty(L)
                      ? (S != null && L === 'onScroll' && De('scroll', e),
                        c || v === S || (c = []))
                      : (c = c || []).push(L, S));
        }
        r && (c = c || []).push('style', r);
        var L = c;
        (t.updateQueue = L) && (t.flags |= 4);
      }
    }),
    (nd = function (e, t, r, l) {
      r !== l && (t.flags |= 4);
    });
  function Ci(e, t) {
    if (!Me)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case 'collapsed':
          r = e.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), (r = r.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function at(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags & 14680064),
          (l |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags),
          (l |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = r), t;
  }
  function wm(e, t, r) {
    var l = t.pendingProps;
    switch ((Us(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return at(t), null;
      case 1:
        return gt(t.type) && Co(), at(t), null;
      case 3:
        return (
          (l = t.stateNode),
          Dr(),
          ze(yt),
          ze(st),
          Gs(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Oo(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ht !== null && (Tu(Ht), (Ht = null)))),
          gu(e, t),
          at(t),
          null
        );
      case 5:
        Xs(t);
        var u = er(Si.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          td(e, t, r, l, u),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return at(t), null;
          }
          if (((e = er(Zt.current)), Oo(t))) {
            (l = t.stateNode), (r = t.type);
            var c = t.memoizedProps;
            switch (((l[Gt] = t), (l[mi] = c), (e = (t.mode & 1) !== 0), r)) {
              case 'dialog':
                De('cancel', l), De('close', l);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                De('load', l);
                break;
              case 'video':
              case 'audio':
                for (u = 0; u < di.length; u++) De(di[u], l);
                break;
              case 'source':
                De('error', l);
                break;
              case 'img':
              case 'image':
              case 'link':
                De('error', l), De('load', l);
                break;
              case 'details':
                De('toggle', l);
                break;
              case 'input':
                Ql(l, c), De('invalid', l);
                break;
              case 'select':
                (l._wrapperState = { wasMultiple: !!c.multiple }),
                  De('invalid', l);
                break;
              case 'textarea':
                q(l, c), De('invalid', l);
            }
            Yl(r, c), (u = null);
            for (var p in c)
              if (c.hasOwnProperty(p)) {
                var v = c[p];
                p === 'children'
                  ? typeof v == 'string'
                    ? l.textContent !== v &&
                      (c.suppressHydrationWarning !== !0 &&
                        _o(l.textContent, v, e),
                      (u = ['children', v]))
                    : typeof v == 'number' &&
                      l.textContent !== '' + v &&
                      (c.suppressHydrationWarning !== !0 &&
                        _o(l.textContent, v, e),
                      (u = ['children', '' + v]))
                  : a.hasOwnProperty(p) &&
                    v != null &&
                    p === 'onScroll' &&
                    De('scroll', l);
              }
            switch (r) {
              case 'input':
                qn(l), k(l, c, !0);
                break;
              case 'textarea':
                qn(l), ge(l);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof c.onClick == 'function' && (l.onclick = Eo);
            }
            (l = u), (t.updateQueue = l), l !== null && (t.flags |= 4);
          } else {
            (p = u.nodeType === 9 ? u : u.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = be(r)),
              e === 'http://www.w3.org/1999/xhtml'
                ? r === 'script'
                  ? ((e = p.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof l.is == 'string'
                    ? (e = p.createElement(r, { is: l.is }))
                    : ((e = p.createElement(r)),
                      r === 'select' &&
                        ((p = e),
                        l.multiple
                          ? (p.multiple = !0)
                          : l.size && (p.size = l.size)))
                : (e = p.createElementNS(e, r)),
              (e[Gt] = t),
              (e[mi] = l),
              ed(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((p = Gl(r, l)), r)) {
                case 'dialog':
                  De('cancel', e), De('close', e), (u = l);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  De('load', e), (u = l);
                  break;
                case 'video':
                case 'audio':
                  for (u = 0; u < di.length; u++) De(di[u], e);
                  u = l;
                  break;
                case 'source':
                  De('error', e), (u = l);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  De('error', e), De('load', e), (u = l);
                  break;
                case 'details':
                  De('toggle', e), (u = l);
                  break;
                case 'input':
                  Ql(e, l), (u = mr(e, l)), De('invalid', e);
                  break;
                case 'option':
                  u = l;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!l.multiple }),
                    (u = X({}, l, { value: void 0 })),
                    De('invalid', e);
                  break;
                case 'textarea':
                  q(e, l), (u = K(e, l)), De('invalid', e);
                  break;
                default:
                  u = l;
              }
              Yl(r, u), (v = u);
              for (c in v)
                if (v.hasOwnProperty(c)) {
                  var S = v[c];
                  c === 'style'
                    ? Zi(e, S)
                    : c === 'dangerouslySetInnerHTML'
                      ? ((S = S ? S.__html : void 0), S != null && Gi(e, S))
                      : c === 'children'
                        ? typeof S == 'string'
                          ? (r !== 'textarea' || S !== '') && an(e, S)
                          : typeof S == 'number' && an(e, '' + S)
                        : c !== 'suppressContentEditableWarning' &&
                          c !== 'suppressHydrationWarning' &&
                          c !== 'autoFocus' &&
                          (a.hasOwnProperty(c)
                            ? S != null && c === 'onScroll' && De('scroll', e)
                            : S != null && I(e, c, S, p));
                }
              switch (r) {
                case 'input':
                  qn(e), k(e, l, !1);
                  break;
                case 'textarea':
                  qn(e), ge(e);
                  break;
                case 'option':
                  l.value != null && e.setAttribute('value', '' + xe(l.value));
                  break;
                case 'select':
                  (e.multiple = !!l.multiple),
                    (c = l.value),
                    c != null
                      ? J(e, !!l.multiple, c, !1)
                      : l.defaultValue != null &&
                        J(e, !!l.multiple, l.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == 'function' && (e.onclick = Eo);
              }
              switch (r) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  l = !!l.autoFocus;
                  break e;
                case 'img':
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return at(t), null;
      case 6:
        if (e && t.stateNode != null) nd(e, t, e.memoizedProps, l);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(o(166));
          if (((r = er(Si.current)), er(Zt.current), Oo(t))) {
            if (
              ((l = t.stateNode),
              (r = t.memoizedProps),
              (l[Gt] = t),
              (c = l.nodeValue !== r) && ((e = Pt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  _o(l.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    _o(l.nodeValue, r, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else
            (l = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(l)),
              (l[Gt] = t),
              (t.stateNode = l);
        }
        return at(t), null;
      case 13:
        if (
          (ze(Ie),
          (l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Me && Tt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            of(), Or(), (t.flags |= 98560), (c = !1);
          else if (((c = Oo(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(o(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(o(317));
              c[Gt] = t;
            } else
              Or(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            at(t), (c = !1);
          } else Ht !== null && (Tu(Ht), (Ht = null)), (c = !0);
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ie.current & 1) !== 0
                  ? Ye === 0 && (Ye = 3)
                  : Lu())),
            t.updateQueue !== null && (t.flags |= 4),
            at(t),
            null);
      case 4:
        return (
          Dr(),
          gu(e, t),
          e === null && pi(t.stateNode.containerInfo),
          at(t),
          null
        );
      case 10:
        return Ws(t.type._context), at(t), null;
      case 17:
        return gt(t.type) && Co(), at(t), null;
      case 19:
        if ((ze(Ie), (c = t.memoizedState), c === null)) return at(t), null;
        if (((l = (t.flags & 128) !== 0), (p = c.rendering), p === null))
          if (l) Ci(c, !1);
          else {
            if (Ye !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((p = jo(e)), p !== null)) {
                  for (
                    t.flags |= 128,
                      Ci(c, !1),
                      l = p.updateQueue,
                      l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      l = r,
                      r = t.child;
                    r !== null;

                  )
                    (c = r),
                      (e = l),
                      (c.flags &= 14680066),
                      (p = c.alternate),
                      p === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = p.childLanes),
                          (c.lanes = p.lanes),
                          (c.child = p.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = p.memoizedProps),
                          (c.memoizedState = p.memoizedState),
                          (c.updateQueue = p.updateQueue),
                          (c.type = p.type),
                          (e = p.dependencies),
                          (c.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return Fe(Ie, (Ie.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              We() > Ir &&
              ((t.flags |= 128), (l = !0), Ci(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = jo(p)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                Ci(c, !0),
                c.tail === null &&
                  c.tailMode === 'hidden' &&
                  !p.alternate &&
                  !Me)
              )
                return at(t), null;
            } else
              2 * We() - c.renderingStartTime > Ir &&
                r !== 1073741824 &&
                ((t.flags |= 128), (l = !0), Ci(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((p.sibling = t.child), (t.child = p))
            : ((r = c.last),
              r !== null ? (r.sibling = p) : (t.child = p),
              (c.last = p));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = We()),
            (t.sibling = null),
            (r = Ie.current),
            Fe(Ie, l ? (r & 1) | 2 : r & 1),
            t)
          : (at(t), null);
      case 22:
      case 23:
        return (
          Ou(),
          (l = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (t.flags |= 8192),
          l && (t.mode & 1) !== 0
            ? (Nt & 1073741824) !== 0 &&
              (at(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : at(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Sm(e, t) {
    switch ((Us(t), t.tag)) {
      case 1:
        return (
          gt(t.type) && Co(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Dr(),
          ze(yt),
          ze(st),
          Gs(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Xs(t), null;
      case 13:
        if (
          (ze(Ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Or();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ze(Ie), null;
      case 4:
        return Dr(), null;
      case 10:
        return Ws(t.type._context), null;
      case 22:
      case 23:
        return Ou(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Wo = !1,
    ct = !1,
    km = typeof WeakSet == 'function' ? WeakSet : Set,
    G = null;
  function jr(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == 'function')
        try {
          r(null);
        } catch (l) {
          $e(e, t, l);
        }
      else r.current = null;
  }
  function vu(e, t, r) {
    try {
      r();
    } catch (l) {
      $e(e, t, l);
    }
  }
  var rd = !1;
  function _m(e, t) {
    if (((Os = co), (e = Dc()), _s(e))) {
      if ('selectionStart' in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var l = r.getSelection && r.getSelection();
          if (l && l.rangeCount !== 0) {
            r = l.anchorNode;
            var u = l.anchorOffset,
              c = l.focusNode;
            l = l.focusOffset;
            try {
              r.nodeType, c.nodeType;
            } catch {
              r = null;
              break e;
            }
            var p = 0,
              v = -1,
              S = -1,
              L = 0,
              V = 0,
              $ = e,
              B = null;
            t: for (;;) {
              for (
                var Y;
                $ !== r || (u !== 0 && $.nodeType !== 3) || (v = p + u),
                  $ !== c || (l !== 0 && $.nodeType !== 3) || (S = p + l),
                  $.nodeType === 3 && (p += $.nodeValue.length),
                  (Y = $.firstChild) !== null;

              )
                (B = $), ($ = Y);
              for (;;) {
                if ($ === e) break t;
                if (
                  (B === r && ++L === u && (v = p),
                  B === c && ++V === l && (S = p),
                  (Y = $.nextSibling) !== null)
                )
                  break;
                ($ = B), (B = $.parentNode);
              }
              $ = Y;
            }
            r = v === -1 || S === -1 ? null : { start: v, end: S };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Ls = { focusedElem: e, selectionRange: r }, co = !1, G = t;
      G !== null;

    )
      if (((t = G), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (G = e);
      else
        for (; G !== null; ) {
          t = G;
          try {
            var ee = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ee !== null) {
                    var ne = ee.memoizedProps,
                      qe = ee.memoizedState,
                      P = t.stateNode,
                      _ = P.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ne : bt(t.type, ne),
                        qe,
                      );
                    P.__reactInternalSnapshotBeforeUpdate = _;
                  }
                  break;
                case 3:
                  var T = t.stateNode.containerInfo;
                  T.nodeType === 1
                    ? (T.textContent = '')
                    : T.nodeType === 9 &&
                      T.documentElement &&
                      T.removeChild(T.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (b) {
            $e(t, t.return, b);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (G = e);
            break;
          }
          G = t.return;
        }
    return (ee = rd), (rd = !1), ee;
  }
  function Ri(e, t, r) {
    var l = t.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var u = (l = l.next);
      do {
        if ((u.tag & e) === e) {
          var c = u.destroy;
          (u.destroy = void 0), c !== void 0 && vu(t, r, c);
        }
        u = u.next;
      } while (u !== l);
    }
  }
  function qo(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var l = r.create;
          r.destroy = l();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function wu(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function id(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), id(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Gt],
          delete t[mi],
          delete t[zs],
          delete t[im],
          delete t[om])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function od(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ld(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || od(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Su(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Eo));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (Su(e, t, r), e = e.sibling; e !== null; )
        Su(e, t, r), (e = e.sibling);
  }
  function ku(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (l !== 4 && ((e = e.child), e !== null))
      for (ku(e, t, r), e = e.sibling; e !== null; )
        ku(e, t, r), (e = e.sibling);
  }
  var it = null,
    Wt = !1;
  function jn(e, t, r) {
    for (r = r.child; r !== null; ) sd(e, t, r), (r = r.sibling);
  }
  function sd(e, t, r) {
    if (Yt && typeof Yt.onCommitFiberUnmount == 'function')
      try {
        Yt.onCommitFiberUnmount(io, r);
      } catch {}
    switch (r.tag) {
      case 5:
        ct || jr(r, t);
      case 6:
        var l = it,
          u = Wt;
        (it = null),
          jn(e, t, r),
          (it = l),
          (Wt = u),
          it !== null &&
            (Wt
              ? ((e = it),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : it.removeChild(r.stateNode));
        break;
      case 18:
        it !== null &&
          (Wt
            ? ((e = it),
              (r = r.stateNode),
              e.nodeType === 8
                ? Ds(e.parentNode, r)
                : e.nodeType === 1 && Ds(e, r),
              ii(e))
            : Ds(it, r.stateNode));
        break;
      case 4:
        (l = it),
          (u = Wt),
          (it = r.stateNode.containerInfo),
          (Wt = !0),
          jn(e, t, r),
          (it = l),
          (Wt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ct &&
          ((l = r.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          u = l = l.next;
          do {
            var c = u,
              p = c.destroy;
            (c = c.tag),
              p !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && vu(r, t, p),
              (u = u.next);
          } while (u !== l);
        }
        jn(e, t, r);
        break;
      case 1:
        if (
          !ct &&
          (jr(r, t),
          (l = r.stateNode),
          typeof l.componentWillUnmount == 'function')
        )
          try {
            (l.props = r.memoizedProps),
              (l.state = r.memoizedState),
              l.componentWillUnmount();
          } catch (v) {
            $e(r, t, v);
          }
        jn(e, t, r);
        break;
      case 21:
        jn(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((ct = (l = ct) || r.memoizedState !== null), jn(e, t, r), (ct = l))
          : jn(e, t, r);
        break;
      default:
        jn(e, t, r);
    }
  }
  function ud(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new km()),
        t.forEach(function (l) {
          var u = Lm.bind(null, e, l);
          r.has(l) || (r.add(l), l.then(u, u));
        });
    }
  }
  function qt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = r[l];
        try {
          var c = e,
            p = t,
            v = p;
          e: for (; v !== null; ) {
            switch (v.tag) {
              case 5:
                (it = v.stateNode), (Wt = !1);
                break e;
              case 3:
                (it = v.stateNode.containerInfo), (Wt = !0);
                break e;
              case 4:
                (it = v.stateNode.containerInfo), (Wt = !0);
                break e;
            }
            v = v.return;
          }
          if (it === null) throw Error(o(160));
          sd(c, p, u), (it = null), (Wt = !1);
          var S = u.alternate;
          S !== null && (S.return = null), (u.return = null);
        } catch (L) {
          $e(u, t, L);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) ad(t, e), (t = t.sibling);
  }
  function ad(e, t) {
    var r = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((qt(t, e), tn(e), l & 4)) {
          try {
            Ri(3, e, e.return), qo(3, e);
          } catch (ne) {
            $e(e, e.return, ne);
          }
          try {
            Ri(5, e, e.return);
          } catch (ne) {
            $e(e, e.return, ne);
          }
        }
        break;
      case 1:
        qt(t, e), tn(e), l & 512 && r !== null && jr(r, r.return);
        break;
      case 5:
        if (
          (qt(t, e),
          tn(e),
          l & 512 && r !== null && jr(r, r.return),
          e.flags & 32)
        ) {
          var u = e.stateNode;
          try {
            an(u, '');
          } catch (ne) {
            $e(e, e.return, ne);
          }
        }
        if (l & 4 && ((u = e.stateNode), u != null)) {
          var c = e.memoizedProps,
            p = r !== null ? r.memoizedProps : c,
            v = e.type,
            S = e.updateQueue;
          if (((e.updateQueue = null), S !== null))
            try {
              v === 'input' && c.type === 'radio' && c.name != null && Jl(u, c),
                Gl(v, p);
              var L = Gl(v, c);
              for (p = 0; p < S.length; p += 2) {
                var V = S[p],
                  $ = S[p + 1];
                V === 'style'
                  ? Zi(u, $)
                  : V === 'dangerouslySetInnerHTML'
                    ? Gi(u, $)
                    : V === 'children'
                      ? an(u, $)
                      : I(u, V, $, L);
              }
              switch (v) {
                case 'input':
                  Yi(u, c);
                  break;
                case 'textarea':
                  se(u, c);
                  break;
                case 'select':
                  var B = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!c.multiple;
                  var Y = c.value;
                  Y != null
                    ? J(u, !!c.multiple, Y, !1)
                    : B !== !!c.multiple &&
                      (c.defaultValue != null
                        ? J(u, !!c.multiple, c.defaultValue, !0)
                        : J(u, !!c.multiple, c.multiple ? [] : '', !1));
              }
              u[mi] = c;
            } catch (ne) {
              $e(e, e.return, ne);
            }
        }
        break;
      case 6:
        if ((qt(t, e), tn(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (u = e.stateNode), (c = e.memoizedProps);
          try {
            u.nodeValue = c;
          } catch (ne) {
            $e(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (
          (qt(t, e), tn(e), l & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            ii(t.containerInfo);
          } catch (ne) {
            $e(e, e.return, ne);
          }
        break;
      case 4:
        qt(t, e), tn(e);
        break;
      case 13:
        qt(t, e),
          tn(e),
          (u = e.child),
          u.flags & 8192 &&
            ((c = u.memoizedState !== null),
            (u.stateNode.isHidden = c),
            !c ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (xu = We())),
          l & 4 && ud(e);
        break;
      case 22:
        if (
          ((V = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((ct = (L = ct) || V), qt(t, e), (ct = L)) : qt(t, e),
          tn(e),
          l & 8192)
        ) {
          if (
            ((L = e.memoizedState !== null),
            (e.stateNode.isHidden = L) && !V && (e.mode & 1) !== 0)
          )
            for (G = e, V = e.child; V !== null; ) {
              for ($ = G = V; G !== null; ) {
                switch (((B = G), (Y = B.child), B.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ri(4, B, B.return);
                    break;
                  case 1:
                    jr(B, B.return);
                    var ee = B.stateNode;
                    if (typeof ee.componentWillUnmount == 'function') {
                      (l = B), (r = B.return);
                      try {
                        (t = l),
                          (ee.props = t.memoizedProps),
                          (ee.state = t.memoizedState),
                          ee.componentWillUnmount();
                      } catch (ne) {
                        $e(l, r, ne);
                      }
                    }
                    break;
                  case 5:
                    jr(B, B.return);
                    break;
                  case 22:
                    if (B.memoizedState !== null) {
                      dd($);
                      continue;
                    }
                }
                Y !== null ? ((Y.return = B), (G = Y)) : dd($);
              }
              V = V.sibling;
            }
          e: for (V = null, $ = e; ; ) {
            if ($.tag === 5) {
              if (V === null) {
                V = $;
                try {
                  (u = $.stateNode),
                    L
                      ? ((c = u.style),
                        typeof c.setProperty == 'function'
                          ? c.setProperty('display', 'none', 'important')
                          : (c.display = 'none'))
                      : ((v = $.stateNode),
                        (S = $.memoizedProps.style),
                        (p =
                          S != null && S.hasOwnProperty('display')
                            ? S.display
                            : null),
                        (v.style.display = Qr('display', p)));
                } catch (ne) {
                  $e(e, e.return, ne);
                }
              }
            } else if ($.tag === 6) {
              if (V === null)
                try {
                  $.stateNode.nodeValue = L ? '' : $.memoizedProps;
                } catch (ne) {
                  $e(e, e.return, ne);
                }
            } else if (
              (($.tag !== 22 && $.tag !== 23) ||
                $.memoizedState === null ||
                $ === e) &&
              $.child !== null
            ) {
              ($.child.return = $), ($ = $.child);
              continue;
            }
            if ($ === e) break e;
            for (; $.sibling === null; ) {
              if ($.return === null || $.return === e) break e;
              V === $ && (V = null), ($ = $.return);
            }
            V === $ && (V = null),
              ($.sibling.return = $.return),
              ($ = $.sibling);
          }
        }
        break;
      case 19:
        qt(t, e), tn(e), l & 4 && ud(e);
        break;
      case 21:
        break;
      default:
        qt(t, e), tn(e);
    }
  }
  function tn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (od(r)) {
              var l = r;
              break e;
            }
            r = r.return;
          }
          throw Error(o(160));
        }
        switch (l.tag) {
          case 5:
            var u = l.stateNode;
            l.flags & 32 && (an(u, ''), (l.flags &= -33));
            var c = ld(e);
            ku(e, c, u);
            break;
          case 3:
          case 4:
            var p = l.stateNode.containerInfo,
              v = ld(e);
            Su(e, v, p);
            break;
          default:
            throw Error(o(161));
        }
      } catch (S) {
        $e(e, e.return, S);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Em(e, t, r) {
    (G = e), cd(e);
  }
  function cd(e, t, r) {
    for (var l = (e.mode & 1) !== 0; G !== null; ) {
      var u = G,
        c = u.child;
      if (u.tag === 22 && l) {
        var p = u.memoizedState !== null || Wo;
        if (!p) {
          var v = u.alternate,
            S = (v !== null && v.memoizedState !== null) || ct;
          v = Wo;
          var L = ct;
          if (((Wo = p), (ct = S) && !L))
            for (G = u; G !== null; )
              (p = G),
                (S = p.child),
                p.tag === 22 && p.memoizedState !== null
                  ? pd(u)
                  : S !== null
                    ? ((S.return = p), (G = S))
                    : pd(u);
          for (; c !== null; ) (G = c), cd(c), (c = c.sibling);
          (G = u), (Wo = v), (ct = L);
        }
        fd(e);
      } else
        (u.subtreeFlags & 8772) !== 0 && c !== null
          ? ((c.return = u), (G = c))
          : fd(e);
    }
  }
  function fd(e) {
    for (; G !== null; ) {
      var t = G;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                ct || qo(5, t);
                break;
              case 1:
                var l = t.stateNode;
                if (t.flags & 4 && !ct)
                  if (r === null) l.componentDidMount();
                  else {
                    var u =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : bt(t.type, r.memoizedProps);
                    l.componentDidUpdate(
                      u,
                      r.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var c = t.updateQueue;
                c !== null && df(t, c, l);
                break;
              case 3:
                var p = t.updateQueue;
                if (p !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  df(t, p, r);
                }
                break;
              case 5:
                var v = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = v;
                  var S = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      S.autoFocus && r.focus();
                      break;
                    case 'img':
                      S.src && (r.src = S.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var L = t.alternate;
                  if (L !== null) {
                    var V = L.memoizedState;
                    if (V !== null) {
                      var $ = V.dehydrated;
                      $ !== null && ii($);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          ct || (t.flags & 512 && wu(t));
        } catch (B) {
          $e(t, t.return, B);
        }
      }
      if (t === e) {
        G = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (G = r);
        break;
      }
      G = t.return;
    }
  }
  function dd(e) {
    for (; G !== null; ) {
      var t = G;
      if (t === e) {
        G = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (G = r);
        break;
      }
      G = t.return;
    }
  }
  function pd(e) {
    for (; G !== null; ) {
      var t = G;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              qo(4, t);
            } catch (S) {
              $e(t, r, S);
            }
            break;
          case 1:
            var l = t.stateNode;
            if (typeof l.componentDidMount == 'function') {
              var u = t.return;
              try {
                l.componentDidMount();
              } catch (S) {
                $e(t, u, S);
              }
            }
            var c = t.return;
            try {
              wu(t);
            } catch (S) {
              $e(t, c, S);
            }
            break;
          case 5:
            var p = t.return;
            try {
              wu(t);
            } catch (S) {
              $e(t, p, S);
            }
        }
      } catch (S) {
        $e(t, t.return, S);
      }
      if (t === e) {
        G = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        (v.return = t.return), (G = v);
        break;
      }
      G = t.return;
    }
  }
  var xm = Math.ceil,
    Ko = W.ReactCurrentDispatcher,
    _u = W.ReactCurrentOwner,
    It = W.ReactCurrentBatchConfig,
    Ce = 0,
    tt = null,
    Qe = null,
    ot = 0,
    Nt = 0,
    Mr = Ln(0),
    Ye = 0,
    Pi = null,
    nr = 0,
    Qo = 0,
    Eu = 0,
    Ti = null,
    wt = null,
    xu = 0,
    Ir = 1 / 0,
    vn = null,
    Jo = !1,
    Cu = null,
    Mn = null,
    Xo = !1,
    In = null,
    Yo = 0,
    Ni = 0,
    Ru = null,
    Go = -1,
    Zo = 0;
  function ht() {
    return (Ce & 6) !== 0 ? We() : Go !== -1 ? Go : (Go = We());
  }
  function Un(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Ce & 2) !== 0 && ot !== 0
        ? ot & -ot
        : sm.transition !== null
          ? (Zo === 0 && (Zo = oc()), Zo)
          : ((e = Ne),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : hc(e.type))),
            e);
  }
  function Kt(e, t, r, l) {
    if (50 < Ni) throw ((Ni = 0), (Ru = null), Error(o(185)));
    Zr(e, r, l),
      ((Ce & 2) === 0 || e !== tt) &&
        (e === tt && ((Ce & 2) === 0 && (Qo |= r), Ye === 4 && Bn(e, ot)),
        St(e, l),
        r === 1 &&
          Ce === 0 &&
          (t.mode & 1) === 0 &&
          ((Ir = We() + 500), Po && Fn()));
  }
  function St(e, t) {
    var r = e.callbackNode;
    sh(e, t);
    var l = so(e, e === tt ? ot : 0);
    if (l === 0)
      r !== null && nc(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = l & -l), e.callbackPriority !== t)) {
      if ((r != null && nc(r), t === 1))
        e.tag === 0 ? lm(md.bind(null, e)) : Zc(md.bind(null, e)),
          nm(function () {
            (Ce & 6) === 0 && Fn();
          }),
          (r = null);
      else {
        switch (lc(l)) {
          case 1:
            r = os;
            break;
          case 4:
            r = rc;
            break;
          case 16:
            r = ro;
            break;
          case 536870912:
            r = ic;
            break;
          default:
            r = ro;
        }
        r = Ed(r, hd.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function hd(e, t) {
    if (((Go = -1), (Zo = 0), (Ce & 6) !== 0)) throw Error(o(327));
    var r = e.callbackNode;
    if (Ur() && e.callbackNode !== r) return null;
    var l = so(e, e === tt ? ot : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t) t = el(e, l);
    else {
      t = l;
      var u = Ce;
      Ce |= 2;
      var c = gd();
      (tt !== e || ot !== t) && ((vn = null), (Ir = We() + 500), ir(e, t));
      do
        try {
          Pm();
          break;
        } catch (v) {
          yd(e, v);
        }
      while (!0);
      bs(),
        (Ko.current = c),
        (Ce = u),
        Qe !== null ? (t = 0) : ((tt = null), (ot = 0), (t = Ye));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((u = ls(e)), u !== 0 && ((l = u), (t = Pu(e, u)))),
        t === 1)
      )
        throw ((r = Pi), ir(e, 0), Bn(e, l), St(e, We()), r);
      if (t === 6) Bn(e, l);
      else {
        if (
          ((u = e.current.alternate),
          (l & 30) === 0 &&
            !Cm(u) &&
            ((t = el(e, l)),
            t === 2 && ((c = ls(e)), c !== 0 && ((l = c), (t = Pu(e, c)))),
            t === 1))
        )
          throw ((r = Pi), ir(e, 0), Bn(e, l), St(e, We()), r);
        switch (((e.finishedWork = u), (e.finishedLanes = l), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            or(e, wt, vn);
            break;
          case 3:
            if (
              (Bn(e, l),
              (l & 130023424) === l && ((t = xu + 500 - We()), 10 < t))
            ) {
              if (so(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & l) !== l)) {
                ht(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = Fs(or.bind(null, e, wt, vn), t);
              break;
            }
            or(e, wt, vn);
            break;
          case 4:
            if ((Bn(e, l), (l & 4194240) === l)) break;
            for (t = e.eventTimes, u = -1; 0 < l; ) {
              var p = 31 - Vt(l);
              (c = 1 << p), (p = t[p]), p > u && (u = p), (l &= ~c);
            }
            if (
              ((l = u),
              (l = We() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                    ? 480
                    : 1080 > l
                      ? 1080
                      : 1920 > l
                        ? 1920
                        : 3e3 > l
                          ? 3e3
                          : 4320 > l
                            ? 4320
                            : 1960 * xm(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = Fs(or.bind(null, e, wt, vn), l);
              break;
            }
            or(e, wt, vn);
            break;
          case 5:
            or(e, wt, vn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return St(e, We()), e.callbackNode === r ? hd.bind(null, e) : null;
  }
  function Pu(e, t) {
    var r = Ti;
    return (
      e.current.memoizedState.isDehydrated && (ir(e, t).flags |= 256),
      (e = el(e, t)),
      e !== 2 && ((t = wt), (wt = r), t !== null && Tu(t)),
      e
    );
  }
  function Tu(e) {
    wt === null ? (wt = e) : wt.push.apply(wt, e);
  }
  function Cm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var l = 0; l < r.length; l++) {
            var u = r[l],
              c = u.getSnapshot;
            u = u.value;
            try {
              if (!$t(c(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Bn(e, t) {
    for (
      t &= ~Eu,
        t &= ~Qo,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Vt(t),
        l = 1 << r;
      (e[r] = -1), (t &= ~l);
    }
  }
  function md(e) {
    if ((Ce & 6) !== 0) throw Error(o(327));
    Ur();
    var t = so(e, 0);
    if ((t & 1) === 0) return St(e, We()), null;
    var r = el(e, t);
    if (e.tag !== 0 && r === 2) {
      var l = ls(e);
      l !== 0 && ((t = l), (r = Pu(e, l)));
    }
    if (r === 1) throw ((r = Pi), ir(e, 0), Bn(e, t), St(e, We()), r);
    if (r === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      or(e, wt, vn),
      St(e, We()),
      null
    );
  }
  function Nu(e, t) {
    var r = Ce;
    Ce |= 1;
    try {
      return e(t);
    } finally {
      (Ce = r), Ce === 0 && ((Ir = We() + 500), Po && Fn());
    }
  }
  function rr(e) {
    In !== null && In.tag === 0 && (Ce & 6) === 0 && Ur();
    var t = Ce;
    Ce |= 1;
    var r = It.transition,
      l = Ne;
    try {
      if (((It.transition = null), (Ne = 1), e)) return e();
    } finally {
      (Ne = l), (It.transition = r), (Ce = t), (Ce & 6) === 0 && Fn();
    }
  }
  function Ou() {
    (Nt = Mr.current), ze(Mr);
  }
  function ir(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), tm(r)), Qe !== null))
      for (r = Qe.return; r !== null; ) {
        var l = r;
        switch ((Us(l), l.tag)) {
          case 1:
            (l = l.type.childContextTypes), l != null && Co();
            break;
          case 3:
            Dr(), ze(yt), ze(st), Gs();
            break;
          case 5:
            Xs(l);
            break;
          case 4:
            Dr();
            break;
          case 13:
            ze(Ie);
            break;
          case 19:
            ze(Ie);
            break;
          case 10:
            Ws(l.type._context);
            break;
          case 22:
          case 23:
            Ou();
        }
        r = r.return;
      }
    if (
      ((tt = e),
      (Qe = e = Vn(e.current, null)),
      (ot = Nt = t),
      (Ye = 0),
      (Pi = null),
      (Eu = Qo = nr = 0),
      (wt = Ti = null),
      Zn !== null)
    ) {
      for (t = 0; t < Zn.length; t++)
        if (((r = Zn[t]), (l = r.interleaved), l !== null)) {
          r.interleaved = null;
          var u = l.next,
            c = r.pending;
          if (c !== null) {
            var p = c.next;
            (c.next = u), (l.next = p);
          }
          r.pending = l;
        }
      Zn = null;
    }
    return e;
  }
  function yd(e, t) {
    do {
      var r = Qe;
      try {
        if ((bs(), (Mo.current = Vo), Io)) {
          for (var l = Ue.memoizedState; l !== null; ) {
            var u = l.queue;
            u !== null && (u.pending = null), (l = l.next);
          }
          Io = !1;
        }
        if (
          ((tr = 0),
          (et = Xe = Ue = null),
          (ki = !1),
          (_i = 0),
          (_u.current = null),
          r === null || r.return === null)
        ) {
          (Ye = 1), (Pi = t), (Qe = null);
          break;
        }
        e: {
          var c = e,
            p = r.return,
            v = r,
            S = t;
          if (
            ((t = ot),
            (v.flags |= 32768),
            S !== null && typeof S == 'object' && typeof S.then == 'function')
          ) {
            var L = S,
              V = v,
              $ = V.tag;
            if ((V.mode & 1) === 0 && ($ === 0 || $ === 11 || $ === 15)) {
              var B = V.alternate;
              B
                ? ((V.updateQueue = B.updateQueue),
                  (V.memoizedState = B.memoizedState),
                  (V.lanes = B.lanes))
                : ((V.updateQueue = null), (V.memoizedState = null));
            }
            var Y = Vf(p);
            if (Y !== null) {
              (Y.flags &= -257),
                $f(Y, p, v, c, t),
                Y.mode & 1 && Bf(c, L, t),
                (t = Y),
                (S = L);
              var ee = t.updateQueue;
              if (ee === null) {
                var ne = new Set();
                ne.add(S), (t.updateQueue = ne);
              } else ee.add(S);
              break e;
            } else {
              if ((t & 1) === 0) {
                Bf(c, L, t), Lu();
                break e;
              }
              S = Error(o(426));
            }
          } else if (Me && v.mode & 1) {
            var qe = Vf(p);
            if (qe !== null) {
              (qe.flags & 65536) === 0 && (qe.flags |= 256),
                $f(qe, p, v, c, t),
                $s(zr(S, v));
              break e;
            }
          }
          (c = S = zr(S, v)),
            Ye !== 4 && (Ye = 2),
            Ti === null ? (Ti = [c]) : Ti.push(c),
            (c = p);
          do {
            switch (c.tag) {
              case 3:
                (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                var P = If(c, S, t);
                ff(c, P);
                break e;
              case 1:
                v = S;
                var _ = c.type,
                  T = c.stateNode;
                if (
                  (c.flags & 128) === 0 &&
                  (typeof _.getDerivedStateFromError == 'function' ||
                    (T !== null &&
                      typeof T.componentDidCatch == 'function' &&
                      (Mn === null || !Mn.has(T))))
                ) {
                  (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                  var b = Uf(c, v, t);
                  ff(c, b);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        wd(r);
      } catch (oe) {
        (t = oe), Qe === r && r !== null && (Qe = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function gd() {
    var e = Ko.current;
    return (Ko.current = Vo), e === null ? Vo : e;
  }
  function Lu() {
    (Ye === 0 || Ye === 3 || Ye === 2) && (Ye = 4),
      tt === null ||
        ((nr & 268435455) === 0 && (Qo & 268435455) === 0) ||
        Bn(tt, ot);
  }
  function el(e, t) {
    var r = Ce;
    Ce |= 2;
    var l = gd();
    (tt !== e || ot !== t) && ((vn = null), ir(e, t));
    do
      try {
        Rm();
        break;
      } catch (u) {
        yd(e, u);
      }
    while (!0);
    if ((bs(), (Ce = r), (Ko.current = l), Qe !== null)) throw Error(o(261));
    return (tt = null), (ot = 0), Ye;
  }
  function Rm() {
    for (; Qe !== null; ) vd(Qe);
  }
  function Pm() {
    for (; Qe !== null && !G0(); ) vd(Qe);
  }
  function vd(e) {
    var t = _d(e.alternate, e, Nt);
    (e.memoizedProps = e.pendingProps),
      t === null ? wd(e) : (Qe = t),
      (_u.current = null);
  }
  function wd(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = wm(r, t, Nt)), r !== null)) {
          Qe = r;
          return;
        }
      } else {
        if (((r = Sm(r, t)), r !== null)) {
          (r.flags &= 32767), (Qe = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ye = 6), (Qe = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Qe = t;
        return;
      }
      Qe = t = e;
    } while (t !== null);
    Ye === 0 && (Ye = 5);
  }
  function or(e, t, r) {
    var l = Ne,
      u = It.transition;
    try {
      (It.transition = null), (Ne = 1), Tm(e, t, r, l);
    } finally {
      (It.transition = u), (Ne = l);
    }
    return null;
  }
  function Tm(e, t, r, l) {
    do Ur();
    while (In !== null);
    if ((Ce & 6) !== 0) throw Error(o(327));
    r = e.finishedWork;
    var u = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var c = r.lanes | r.childLanes;
    if (
      (uh(e, c),
      e === tt && ((Qe = tt = null), (ot = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Xo ||
        ((Xo = !0),
        Ed(ro, function () {
          return Ur(), null;
        })),
      (c = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || c)
    ) {
      (c = It.transition), (It.transition = null);
      var p = Ne;
      Ne = 1;
      var v = Ce;
      (Ce |= 4),
        (_u.current = null),
        _m(e, r),
        ad(r, e),
        Qh(Ls),
        (co = !!Os),
        (Ls = Os = null),
        (e.current = r),
        Em(r),
        Z0(),
        (Ce = v),
        (Ne = p),
        (It.transition = c);
    } else e.current = r;
    if (
      (Xo && ((Xo = !1), (In = e), (Yo = u)),
      (c = e.pendingLanes),
      c === 0 && (Mn = null),
      nh(r.stateNode),
      St(e, We()),
      t !== null)
    )
      for (l = e.onRecoverableError, r = 0; r < t.length; r++)
        (u = t[r]), l(u.value, { componentStack: u.stack, digest: u.digest });
    if (Jo) throw ((Jo = !1), (e = Cu), (Cu = null), e);
    return (
      (Yo & 1) !== 0 && e.tag !== 0 && Ur(),
      (c = e.pendingLanes),
      (c & 1) !== 0 ? (e === Ru ? Ni++ : ((Ni = 0), (Ru = e))) : (Ni = 0),
      Fn(),
      null
    );
  }
  function Ur() {
    if (In !== null) {
      var e = lc(Yo),
        t = It.transition,
        r = Ne;
      try {
        if (((It.transition = null), (Ne = 16 > e ? 16 : e), In === null))
          var l = !1;
        else {
          if (((e = In), (In = null), (Yo = 0), (Ce & 6) !== 0))
            throw Error(o(331));
          var u = Ce;
          for (Ce |= 4, G = e.current; G !== null; ) {
            var c = G,
              p = c.child;
            if ((G.flags & 16) !== 0) {
              var v = c.deletions;
              if (v !== null) {
                for (var S = 0; S < v.length; S++) {
                  var L = v[S];
                  for (G = L; G !== null; ) {
                    var V = G;
                    switch (V.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ri(8, V, c);
                    }
                    var $ = V.child;
                    if ($ !== null) ($.return = V), (G = $);
                    else
                      for (; G !== null; ) {
                        V = G;
                        var B = V.sibling,
                          Y = V.return;
                        if ((id(V), V === L)) {
                          G = null;
                          break;
                        }
                        if (B !== null) {
                          (B.return = Y), (G = B);
                          break;
                        }
                        G = Y;
                      }
                  }
                }
                var ee = c.alternate;
                if (ee !== null) {
                  var ne = ee.child;
                  if (ne !== null) {
                    ee.child = null;
                    do {
                      var qe = ne.sibling;
                      (ne.sibling = null), (ne = qe);
                    } while (ne !== null);
                  }
                }
                G = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && p !== null)
              (p.return = c), (G = p);
            else
              e: for (; G !== null; ) {
                if (((c = G), (c.flags & 2048) !== 0))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ri(9, c, c.return);
                  }
                var P = c.sibling;
                if (P !== null) {
                  (P.return = c.return), (G = P);
                  break e;
                }
                G = c.return;
              }
          }
          var _ = e.current;
          for (G = _; G !== null; ) {
            p = G;
            var T = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && T !== null)
              (T.return = p), (G = T);
            else
              e: for (p = _; G !== null; ) {
                if (((v = G), (v.flags & 2048) !== 0))
                  try {
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        qo(9, v);
                    }
                  } catch (oe) {
                    $e(v, v.return, oe);
                  }
                if (v === p) {
                  G = null;
                  break e;
                }
                var b = v.sibling;
                if (b !== null) {
                  (b.return = v.return), (G = b);
                  break e;
                }
                G = v.return;
              }
          }
          if (
            ((Ce = u),
            Fn(),
            Yt && typeof Yt.onPostCommitFiberRoot == 'function')
          )
            try {
              Yt.onPostCommitFiberRoot(io, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        (Ne = r), (It.transition = t);
      }
    }
    return !1;
  }
  function Sd(e, t, r) {
    (t = zr(r, t)),
      (t = If(e, t, 1)),
      (e = zn(e, t, 1)),
      (t = ht()),
      e !== null && (Zr(e, 1, t), St(e, t));
  }
  function $e(e, t, r) {
    if (e.tag === 3) Sd(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Sd(t, e, r);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' &&
              (Mn === null || !Mn.has(l)))
          ) {
            (e = zr(r, e)),
              (e = Uf(t, e, 1)),
              (t = zn(t, e, 1)),
              (e = ht()),
              t !== null && (Zr(t, 1, e), St(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Nm(e, t, r) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (t = ht()),
      (e.pingedLanes |= e.suspendedLanes & r),
      tt === e &&
        (ot & r) === r &&
        (Ye === 4 || (Ye === 3 && (ot & 130023424) === ot && 500 > We() - xu)
          ? ir(e, 0)
          : (Eu |= r)),
      St(e, t);
  }
  function kd(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = lo), (lo <<= 1), (lo & 130023424) === 0 && (lo = 4194304)));
    var r = ht();
    (e = mn(e, t)), e !== null && (Zr(e, t, r), St(e, r));
  }
  function Om(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), kd(e, r);
  }
  function Lm(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          u = e.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(t), kd(e, r);
  }
  var _d;
  _d = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || yt.current) vt = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return (vt = !1), vm(e, t, r);
        vt = (e.flags & 131072) !== 0;
      }
    else (vt = !1), Me && (t.flags & 1048576) !== 0 && ef(t, No, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var l = t.type;
        bo(e, t), (e = t.pendingProps);
        var u = Pr(t, st.current);
        Fr(t, r), (u = tu(null, t, l, e, u, r));
        var c = nu();
        return (
          (t.flags |= 1),
          typeof u == 'object' &&
          u !== null &&
          typeof u.render == 'function' &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              gt(l) ? ((c = !0), Ro(t)) : (c = !1),
              (t.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              Qs(t),
              (u.updater = $o),
              (t.stateNode = u),
              (u._reactInternals = t),
              uu(t, l, e, r),
              (t = du(null, t, l, !0, c, r)))
            : ((t.tag = 0), Me && c && Is(t), pt(null, t, u, r), (t = t.child)),
          t
        );
      case 16:
        l = t.elementType;
        e: {
          switch (
            (bo(e, t),
            (e = t.pendingProps),
            (u = l._init),
            (l = u(l._payload)),
            (t.type = l),
            (u = t.tag = Fm(l)),
            (e = bt(l, e)),
            u)
          ) {
            case 0:
              t = fu(null, t, l, e, r);
              break e;
            case 1:
              t = Qf(null, t, l, e, r);
              break e;
            case 11:
              t = Hf(null, t, l, e, r);
              break e;
            case 14:
              t = bf(null, t, l, bt(l.type, e), r);
              break e;
          }
          throw Error(o(306, l, ''));
        }
        return t;
      case 0:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : bt(l, u)),
          fu(e, t, l, u, r)
        );
      case 1:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : bt(l, u)),
          Qf(e, t, l, u, r)
        );
      case 3:
        e: {
          if ((Jf(t), e === null)) throw Error(o(387));
          (l = t.pendingProps),
            (c = t.memoizedState),
            (u = c.element),
            cf(e, t),
            zo(t, l, null, r);
          var p = t.memoizedState;
          if (((l = p.element), c.isDehydrated))
            if (
              ((c = {
                element: l,
                isDehydrated: !1,
                cache: p.cache,
                pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                transitions: p.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              (u = zr(Error(o(423)), t)), (t = Xf(e, t, l, r, u));
              break e;
            } else if (l !== u) {
              (u = zr(Error(o(424)), t)), (t = Xf(e, t, l, r, u));
              break e;
            } else
              for (
                Tt = On(t.stateNode.containerInfo.firstChild),
                  Pt = t,
                  Me = !0,
                  Ht = null,
                  r = uf(t, null, l, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Or(), l === u)) {
              t = gn(e, t, r);
              break e;
            }
            pt(e, t, l, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          pf(t),
          e === null && Vs(t),
          (l = t.type),
          (u = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (p = u.children),
          As(l, u) ? (p = null) : c !== null && As(l, c) && (t.flags |= 32),
          Kf(e, t),
          pt(e, t, p, r),
          t.child
        );
      case 6:
        return e === null && Vs(t), null;
      case 13:
        return Yf(e, t, r);
      case 4:
        return (
          Js(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Lr(t, null, l, r)) : pt(e, t, l, r),
          t.child
        );
      case 11:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : bt(l, u)),
          Hf(e, t, l, u, r)
        );
      case 7:
        return pt(e, t, t.pendingProps, r), t.child;
      case 8:
        return pt(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return pt(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((l = t.type._context),
            (u = t.pendingProps),
            (c = t.memoizedProps),
            (p = u.value),
            Fe(Ao, l._currentValue),
            (l._currentValue = p),
            c !== null)
          )
            if ($t(c.value, p)) {
              if (c.children === u.children && !yt.current) {
                t = gn(e, t, r);
                break e;
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null; ) {
                var v = c.dependencies;
                if (v !== null) {
                  p = c.child;
                  for (var S = v.firstContext; S !== null; ) {
                    if (S.context === l) {
                      if (c.tag === 1) {
                        (S = yn(-1, r & -r)), (S.tag = 2);
                        var L = c.updateQueue;
                        if (L !== null) {
                          L = L.shared;
                          var V = L.pending;
                          V === null
                            ? (S.next = S)
                            : ((S.next = V.next), (V.next = S)),
                            (L.pending = S);
                        }
                      }
                      (c.lanes |= r),
                        (S = c.alternate),
                        S !== null && (S.lanes |= r),
                        qs(c.return, r, t),
                        (v.lanes |= r);
                      break;
                    }
                    S = S.next;
                  }
                } else if (c.tag === 10) p = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((p = c.return), p === null)) throw Error(o(341));
                  (p.lanes |= r),
                    (v = p.alternate),
                    v !== null && (v.lanes |= r),
                    qs(p, r, t),
                    (p = c.sibling);
                } else p = c.child;
                if (p !== null) p.return = c;
                else
                  for (p = c; p !== null; ) {
                    if (p === t) {
                      p = null;
                      break;
                    }
                    if (((c = p.sibling), c !== null)) {
                      (c.return = p.return), (p = c);
                      break;
                    }
                    p = p.return;
                  }
                c = p;
              }
          pt(e, t, u.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (l = t.pendingProps.children),
          Fr(t, r),
          (u = jt(u)),
          (l = l(u)),
          (t.flags |= 1),
          pt(e, t, l, r),
          t.child
        );
      case 14:
        return (
          (l = t.type),
          (u = bt(l, t.pendingProps)),
          (u = bt(l.type, u)),
          bf(e, t, l, u, r)
        );
      case 15:
        return Wf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (l = t.type),
          (u = t.pendingProps),
          (u = t.elementType === l ? u : bt(l, u)),
          bo(e, t),
          (t.tag = 1),
          gt(l) ? ((e = !0), Ro(t)) : (e = !1),
          Fr(t, r),
          jf(t, l, u),
          uu(t, l, u, r),
          du(null, t, l, !0, e, r)
        );
      case 19:
        return Zf(e, t, r);
      case 22:
        return qf(e, t, r);
    }
    throw Error(o(156, t.tag));
  };
  function Ed(e, t) {
    return tc(e, t);
  }
  function Am(e, t, r, l) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ut(e, t, r, l) {
    return new Am(e, t, r, l);
  }
  function Au(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Fm(e) {
    if (typeof e == 'function') return Au(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === fe)) return 11;
      if (e === Oe) return 14;
    }
    return 2;
  }
  function Vn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = Ut(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function tl(e, t, r, l, u, c) {
    var p = 2;
    if (((l = e), typeof e == 'function')) Au(e) && (p = 1);
    else if (typeof e == 'string') p = 5;
    else
      e: switch (e) {
        case ce:
          return lr(r.children, u, c, t);
        case ie:
          (p = 8), (u |= 8);
          break;
        case me:
          return (
            (e = Ut(12, r, t, u | 2)), (e.elementType = me), (e.lanes = c), e
          );
        case pe:
          return (e = Ut(13, r, t, u)), (e.elementType = pe), (e.lanes = c), e;
        case Pe:
          return (e = Ut(19, r, t, u)), (e.elementType = Pe), (e.lanes = c), e;
        case ke:
          return nl(r, u, c, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Ee:
                p = 10;
                break e;
              case rt:
                p = 9;
                break e;
              case fe:
                p = 11;
                break e;
              case Oe:
                p = 14;
                break e;
              case Ae:
                (p = 16), (l = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ''));
      }
    return (
      (t = Ut(p, r, t, u)), (t.elementType = e), (t.type = l), (t.lanes = c), t
    );
  }
  function lr(e, t, r, l) {
    return (e = Ut(7, e, l, t)), (e.lanes = r), e;
  }
  function nl(e, t, r, l) {
    return (
      (e = Ut(22, e, l, t)),
      (e.elementType = ke),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Fu(e, t, r) {
    return (e = Ut(6, e, null, t)), (e.lanes = r), e;
  }
  function Du(e, t, r) {
    return (
      (t = Ut(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Dm(e, t, r, l, u) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = ss(0)),
      (this.expirationTimes = ss(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ss(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function zu(e, t, r, l, u, c, p, v, S) {
    return (
      (e = new Dm(e, t, r, v, S)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = Ut(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: l,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Qs(c),
      e
    );
  }
  function zm(e, t, r) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Z,
      key: l == null ? null : '' + l,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function xd(e) {
    if (!e) return An;
    e = e._reactInternals;
    e: {
      if (Qn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (gt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (gt(r)) return Yc(e, r, t);
    }
    return t;
  }
  function Cd(e, t, r, l, u, c, p, v, S) {
    return (
      (e = zu(r, l, !0, e, u, c, p, v, S)),
      (e.context = xd(null)),
      (r = e.current),
      (l = ht()),
      (u = Un(r)),
      (c = yn(l, u)),
      (c.callback = t ?? null),
      zn(r, c, u),
      (e.current.lanes = u),
      Zr(e, u, l),
      St(e, l),
      e
    );
  }
  function rl(e, t, r, l) {
    var u = t.current,
      c = ht(),
      p = Un(u);
    return (
      (r = xd(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = yn(c, p)),
      (t.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (t.callback = l),
      (e = zn(u, t, p)),
      e !== null && (Kt(e, u, p, c), Do(e, u, p)),
      p
    );
  }
  function il(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Rd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function ju(e, t) {
    Rd(e, t), (e = e.alternate) && Rd(e, t);
  }
  function jm() {
    return null;
  }
  var Pd =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Mu(e) {
    this._internalRoot = e;
  }
  (ol.prototype.render = Mu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      rl(e, t, null, null);
    }),
    (ol.prototype.unmount = Mu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          rr(function () {
            rl(null, e, null, null);
          }),
            (t[fn] = null);
        }
      });
  function ol(e) {
    this._internalRoot = e;
  }
  ol.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ac();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Pn.length && t !== 0 && t < Pn[r].priority; r++);
      Pn.splice(r, 0, e), r === 0 && dc(e);
    }
  };
  function Iu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ll(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Td() {}
  function Mm(e, t, r, l, u) {
    if (u) {
      if (typeof l == 'function') {
        var c = l;
        l = function () {
          var L = il(p);
          c.call(L);
        };
      }
      var p = Cd(t, l, e, 0, null, !1, !1, '', Td);
      return (
        (e._reactRootContainer = p),
        (e[fn] = p.current),
        pi(e.nodeType === 8 ? e.parentNode : e),
        rr(),
        p
      );
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof l == 'function') {
      var v = l;
      l = function () {
        var L = il(S);
        v.call(L);
      };
    }
    var S = zu(e, 0, !1, null, null, !1, !1, '', Td);
    return (
      (e._reactRootContainer = S),
      (e[fn] = S.current),
      pi(e.nodeType === 8 ? e.parentNode : e),
      rr(function () {
        rl(t, S, r, l);
      }),
      S
    );
  }
  function sl(e, t, r, l, u) {
    var c = r._reactRootContainer;
    if (c) {
      var p = c;
      if (typeof u == 'function') {
        var v = u;
        u = function () {
          var S = il(p);
          v.call(S);
        };
      }
      rl(t, p, e, u);
    } else p = Mm(r, t, e, u, l);
    return il(p);
  }
  (sc = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Gr(t.pendingLanes);
          r !== 0 &&
            (us(t, r | 1),
            St(t, We()),
            (Ce & 6) === 0 && ((Ir = We() + 500), Fn()));
        }
        break;
      case 13:
        rr(function () {
          var l = mn(e, 1);
          if (l !== null) {
            var u = ht();
            Kt(l, e, 1, u);
          }
        }),
          ju(e, 1);
    }
  }),
    (as = function (e) {
      if (e.tag === 13) {
        var t = mn(e, 134217728);
        if (t !== null) {
          var r = ht();
          Kt(t, e, 134217728, r);
        }
        ju(e, 134217728);
      }
    }),
    (uc = function (e) {
      if (e.tag === 13) {
        var t = Un(e),
          r = mn(e, t);
        if (r !== null) {
          var l = ht();
          Kt(r, e, t, l);
        }
        ju(e, t);
      }
    }),
    (ac = function () {
      return Ne;
    }),
    (cc = function (e, t) {
      var r = Ne;
      try {
        return (Ne = e), t();
      } finally {
        Ne = r;
      }
    }),
    (ts = function (e, t, r) {
      switch (t) {
        case 'input':
          if ((Yi(e, r), (t = r.name), r.type === 'radio' && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var l = r[t];
              if (l !== e && l.form === e.form) {
                var u = xo(l);
                if (!u) throw Error(o(90));
                Xi(l), Yi(l, u);
              }
            }
          }
          break;
        case 'textarea':
          se(e, r);
          break;
        case 'select':
          (t = r.value), t != null && J(e, !!r.multiple, t, !1);
      }
    }),
    (Qa = Nu),
    (Ja = rr);
  var Im = { usingClientEntryPoint: !1, Events: [yi, Cr, xo, qa, Ka, Nu] },
    Oi = {
      findFiberByHostInstance: Jn,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    Um = {
      bundleType: Oi.bundleType,
      version: Oi.version,
      rendererPackageName: Oi.rendererPackageName,
      rendererConfig: Oi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: W.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Za(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Oi.findFiberByHostInstance || jm,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ul.isDisabled && ul.supportsFiber)
      try {
        (io = ul.inject(Um)), (Yt = ul);
      } catch {}
  }
  return (
    (kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Im),
    (kt.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Iu(t)) throw Error(o(200));
      return zm(e, t, null, r);
    }),
    (kt.createRoot = function (e, t) {
      if (!Iu(e)) throw Error(o(299));
      var r = !1,
        l = '',
        u = Pd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = zu(e, 1, !1, null, null, r, !1, l, u)),
        (e[fn] = t.current),
        pi(e.nodeType === 8 ? e.parentNode : e),
        new Mu(t)
      );
    }),
    (kt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(o(188))
          : ((e = Object.keys(e).join(',')), Error(o(268, e)));
      return (e = Za(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (kt.flushSync = function (e) {
      return rr(e);
    }),
    (kt.hydrate = function (e, t, r) {
      if (!ll(t)) throw Error(o(200));
      return sl(null, e, t, !0, r);
    }),
    (kt.hydrateRoot = function (e, t, r) {
      if (!Iu(e)) throw Error(o(405));
      var l = (r != null && r.hydratedSources) || null,
        u = !1,
        c = '',
        p = Pd;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (u = !0),
          r.identifierPrefix !== void 0 && (c = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (p = r.onRecoverableError)),
        (t = Cd(t, null, e, 1, r ?? null, u, !1, c, p)),
        (e[fn] = t.current),
        pi(e),
        l)
      )
        for (e = 0; e < l.length; e++)
          (r = l[e]),
            (u = r._getVersion),
            (u = u(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, u])
              : t.mutableSourceEagerHydrationData.push(r, u);
      return new ol(t);
    }),
    (kt.render = function (e, t, r) {
      if (!ll(t)) throw Error(o(200));
      return sl(null, e, t, !1, r);
    }),
    (kt.unmountComponentAtNode = function (e) {
      if (!ll(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (rr(function () {
            sl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[fn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (kt.unstable_batchedUpdates = Nu),
    (kt.unstable_renderSubtreeIntoContainer = function (e, t, r, l) {
      if (!ll(r)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return sl(e, t, r, !1, l);
    }),
    (kt.version = '18.3.1-next-f1338f8080-20240426'),
    kt
  );
}
var jd;
function Jm() {
  if (jd) return $u.exports;
  jd = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), ($u.exports = Qm()), $u.exports;
}
var Md;
function Xm() {
  if (Md) return al;
  Md = 1;
  var n = Jm();
  return (al.createRoot = n.createRoot), (al.hydrateRoot = n.hydrateRoot), al;
}
var Ym = Xm();
const Gm = Pp(Ym);
var M = Al();
const Ot = Pp(M);
var Ai = {},
  Id;
function Zm() {
  if (Id) return Ai;
  (Id = 1),
    Object.defineProperty(Ai, '__esModule', { value: !0 }),
    (Ai.parse = d),
    (Ai.serialize = y);
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    i = /^[\u0021-\u003A\u003C-\u007E]*$/,
    o =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    s = /^[\u0020-\u003A\u003D-\u007E]*$/,
    a = Object.prototype.toString,
    f = (() => {
      const C = function () {};
      return (C.prototype = Object.create(null)), C;
    })();
  function d(C, N) {
    const E = new f(),
      A = C.length;
    if (A < 2) return E;
    const x = (N == null ? void 0 : N.decode) || g;
    let D = 0;
    do {
      const j = C.indexOf('=', D);
      if (j === -1) break;
      const I = C.indexOf(';', D),
        W = I === -1 ? A : I;
      if (j > W) {
        D = C.lastIndexOf(';', j - 1) + 1;
        continue;
      }
      const H = h(C, D, j),
        Z = m(C, j, H),
        ce = C.slice(H, Z);
      if (E[ce] === void 0) {
        let ie = h(C, j + 1, W),
          me = m(C, W, ie);
        const Ee = x(C.slice(ie, me));
        E[ce] = Ee;
      }
      D = W + 1;
    } while (D < A);
    return E;
  }
  function h(C, N, E) {
    do {
      const A = C.charCodeAt(N);
      if (A !== 32 && A !== 9) return N;
    } while (++N < E);
    return E;
  }
  function m(C, N, E) {
    for (; N > E; ) {
      const A = C.charCodeAt(--N);
      if (A !== 32 && A !== 9) return N + 1;
    }
    return E;
  }
  function y(C, N, E) {
    const A = (E == null ? void 0 : E.encode) || encodeURIComponent;
    if (!n.test(C)) throw new TypeError(`argument name is invalid: ${C}`);
    const x = A(N);
    if (!i.test(x)) throw new TypeError(`argument val is invalid: ${N}`);
    let D = C + '=' + x;
    if (!E) return D;
    if (E.maxAge !== void 0) {
      if (!Number.isInteger(E.maxAge))
        throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);
      D += '; Max-Age=' + E.maxAge;
    }
    if (E.domain) {
      if (!o.test(E.domain))
        throw new TypeError(`option domain is invalid: ${E.domain}`);
      D += '; Domain=' + E.domain;
    }
    if (E.path) {
      if (!s.test(E.path))
        throw new TypeError(`option path is invalid: ${E.path}`);
      D += '; Path=' + E.path;
    }
    if (E.expires) {
      if (!w(E.expires) || !Number.isFinite(E.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${E.expires}`);
      D += '; Expires=' + E.expires.toUTCString();
    }
    if (
      (E.httpOnly && (D += '; HttpOnly'),
      E.secure && (D += '; Secure'),
      E.partitioned && (D += '; Partitioned'),
      E.priority)
    )
      switch (
        typeof E.priority == 'string' ? E.priority.toLowerCase() : void 0
      ) {
        case 'low':
          D += '; Priority=Low';
          break;
        case 'medium':
          D += '; Priority=Medium';
          break;
        case 'high':
          D += '; Priority=High';
          break;
        default:
          throw new TypeError(`option priority is invalid: ${E.priority}`);
      }
    if (E.sameSite)
      switch (
        typeof E.sameSite == 'string' ? E.sameSite.toLowerCase() : E.sameSite
      ) {
        case !0:
        case 'strict':
          D += '; SameSite=Strict';
          break;
        case 'lax':
          D += '; SameSite=Lax';
          break;
        case 'none':
          D += '; SameSite=None';
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${E.sameSite}`);
      }
    return D;
  }
  function g(C) {
    if (C.indexOf('%') === -1) return C;
    try {
      return decodeURIComponent(C);
    } catch {
      return C;
    }
  }
  function w(C) {
    return a.call(C) === '[object Date]';
  }
  return Ai;
}
Zm();
/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Ud = 'popstate';
function ey(n = {}) {
  function i(s, a) {
    let { pathname: f, search: d, hash: h } = s.location;
    return aa(
      '',
      { pathname: f, search: d, hash: h },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default',
    );
  }
  function o(s, a) {
    return typeof a == 'string' ? a : Bi(a);
  }
  return ny(i, o, null, n);
}
function Be(n, i) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(i);
}
function sn(n, i) {
  if (!n) {
    typeof console < 'u' && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function ty() {
  return Math.random().toString(36).substring(2, 10);
}
function Bd(n, i) {
  return { usr: n.state, key: n.key, idx: i };
}
function aa(n, i, o = null, s) {
  return {
    pathname: typeof n == 'string' ? n : n.pathname,
    search: '',
    hash: '',
    ...(typeof i == 'string' ? br(i) : i),
    state: o,
    key: (i && i.key) || s || ty(),
  };
}
function Bi({ pathname: n = '/', search: i = '', hash: o = '' }) {
  return (
    i && i !== '?' && (n += i.charAt(0) === '?' ? i : '?' + i),
    o && o !== '#' && (n += o.charAt(0) === '#' ? o : '#' + o),
    n
  );
}
function br(n) {
  let i = {};
  if (n) {
    let o = n.indexOf('#');
    o >= 0 && ((i.hash = n.substring(o)), (n = n.substring(0, o)));
    let s = n.indexOf('?');
    s >= 0 && ((i.search = n.substring(s)), (n = n.substring(0, s))),
      n && (i.pathname = n);
  }
  return i;
}
function ny(n, i, o, s = {}) {
  let { window: a = document.defaultView, v5Compat: f = !1 } = s,
    d = a.history,
    h = 'POP',
    m = null,
    y = g();
  y == null && ((y = 0), d.replaceState({ ...d.state, idx: y }, ''));
  function g() {
    return (d.state || { idx: null }).idx;
  }
  function w() {
    h = 'POP';
    let x = g(),
      D = x == null ? null : x - y;
    (y = x), m && m({ action: h, location: A.location, delta: D });
  }
  function C(x, D) {
    h = 'PUSH';
    let j = aa(A.location, x, D);
    y = g() + 1;
    let I = Bd(j, y),
      W = A.createHref(j);
    try {
      d.pushState(I, '', W);
    } catch (H) {
      if (H instanceof DOMException && H.name === 'DataCloneError') throw H;
      a.location.assign(W);
    }
    f && m && m({ action: h, location: A.location, delta: 1 });
  }
  function N(x, D) {
    h = 'REPLACE';
    let j = aa(A.location, x, D);
    y = g();
    let I = Bd(j, y),
      W = A.createHref(j);
    d.replaceState(I, '', W),
      f && m && m({ action: h, location: A.location, delta: 0 });
  }
  function E(x) {
    let D = a.location.origin !== 'null' ? a.location.origin : a.location.href,
      j = typeof x == 'string' ? x : Bi(x);
    return (
      (j = j.replace(/ $/, '%20')),
      Be(
        D,
        `No window.location.(origin|href) available to create URL for href: ${j}`,
      ),
      new URL(j, D)
    );
  }
  let A = {
    get action() {
      return h;
    },
    get location() {
      return n(a, d);
    },
    listen(x) {
      if (m) throw new Error('A history only accepts one active listener');
      return (
        a.addEventListener(Ud, w),
        (m = x),
        () => {
          a.removeEventListener(Ud, w), (m = null);
        }
      );
    },
    createHref(x) {
      return i(a, x);
    },
    createURL: E,
    encodeLocation(x) {
      let D = E(x);
      return { pathname: D.pathname, search: D.search, hash: D.hash };
    },
    push: C,
    replace: N,
    go(x) {
      return d.go(x);
    },
  };
  return A;
}
function Tp(n, i, o = '/') {
  return ry(n, i, o, !1);
}
function ry(n, i, o, s) {
  let a = typeof i == 'string' ? br(i) : i,
    f = bn(a.pathname || '/', o);
  if (f == null) return null;
  let d = Np(n);
  iy(d);
  let h = null;
  for (let m = 0; h == null && m < d.length; ++m) {
    let y = my(f);
    h = py(d[m], y, s);
  }
  return h;
}
function Np(n, i = [], o = [], s = '') {
  let a = (f, d, h) => {
    let m = {
      relativePath: h === void 0 ? f.path || '' : h,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: d,
      route: f,
    };
    m.relativePath.startsWith('/') &&
      (Be(
        m.relativePath.startsWith(s),
        `Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (m.relativePath = m.relativePath.slice(s.length)));
    let y = Sn([s, m.relativePath]),
      g = o.concat(m);
    f.children &&
      f.children.length > 0 &&
      (Be(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${y}".`,
      ),
      Np(f.children, i, g, y)),
      !(f.path == null && !f.index) &&
        i.push({ path: y, score: fy(y, f.index), routesMeta: g });
  };
  return (
    n.forEach((f, d) => {
      var h;
      if (f.path === '' || !((h = f.path) != null && h.includes('?'))) a(f, d);
      else for (let m of Op(f.path)) a(f, d, m);
    }),
    i
  );
}
function Op(n) {
  let i = n.split('/');
  if (i.length === 0) return [];
  let [o, ...s] = i,
    a = o.endsWith('?'),
    f = o.replace(/\?$/, '');
  if (s.length === 0) return a ? [f, ''] : [f];
  let d = Op(s.join('/')),
    h = [];
  return (
    h.push(...d.map((m) => (m === '' ? f : [f, m].join('/')))),
    a && h.push(...d),
    h.map((m) => (n.startsWith('/') && m === '' ? '/' : m))
  );
}
function iy(n) {
  n.sort((i, o) =>
    i.score !== o.score
      ? o.score - i.score
      : dy(
          i.routesMeta.map((s) => s.childrenIndex),
          o.routesMeta.map((s) => s.childrenIndex),
        ),
  );
}
var oy = /^:[\w-]+$/,
  ly = 3,
  sy = 2,
  uy = 1,
  ay = 10,
  cy = -2,
  Vd = (n) => n === '*';
function fy(n, i) {
  let o = n.split('/'),
    s = o.length;
  return (
    o.some(Vd) && (s += cy),
    i && (s += sy),
    o
      .filter((a) => !Vd(a))
      .reduce((a, f) => a + (oy.test(f) ? ly : f === '' ? uy : ay), s)
  );
}
function dy(n, i) {
  return n.length === i.length && n.slice(0, -1).every((s, a) => s === i[a])
    ? n[n.length - 1] - i[i.length - 1]
    : 0;
}
function py(n, i, o = !1) {
  let { routesMeta: s } = n,
    a = {},
    f = '/',
    d = [];
  for (let h = 0; h < s.length; ++h) {
    let m = s[h],
      y = h === s.length - 1,
      g = f === '/' ? i : i.slice(f.length) || '/',
      w = kl(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: y },
        g,
      ),
      C = m.route;
    if (
      (!w &&
        y &&
        o &&
        !s[s.length - 1].route.index &&
        (w = kl(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          g,
        )),
      !w)
    )
      return null;
    Object.assign(a, w.params),
      d.push({
        params: a,
        pathname: Sn([f, w.pathname]),
        pathnameBase: wy(Sn([f, w.pathnameBase])),
        route: C,
      }),
      w.pathnameBase !== '/' && (f = Sn([f, w.pathnameBase]));
  }
  return d;
}
function kl(n, i) {
  typeof n == 'string' && (n = { path: n, caseSensitive: !1, end: !0 });
  let [o, s] = hy(n.path, n.caseSensitive, n.end),
    a = i.match(o);
  if (!a) return null;
  let f = a[0],
    d = f.replace(/(.)\/+$/, '$1'),
    h = a.slice(1);
  return {
    params: s.reduce((y, { paramName: g, isOptional: w }, C) => {
      if (g === '*') {
        let E = h[C] || '';
        d = f.slice(0, f.length - E.length).replace(/(.)\/+$/, '$1');
      }
      const N = h[C];
      return (
        w && !N ? (y[g] = void 0) : (y[g] = (N || '').replace(/%2F/g, '/')), y
      );
    }, {}),
    pathname: f,
    pathnameBase: d,
    pattern: n,
  };
}
function hy(n, i = !1, o = !0) {
  sn(
    n === '*' || !n.endsWith('*') || n.endsWith('/*'),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, '/*')}".`,
  );
  let s = [],
    a =
      '^' +
      n
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, h, m) => (
            s.push({ paramName: h, isOptional: m != null }),
            m ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    n.endsWith('*')
      ? (s.push({ paramName: '*' }),
        (a += n === '*' || n === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : o
        ? (a += '\\/*$')
        : n !== '' && n !== '/' && (a += '(?:(?=\\/|$))'),
    [new RegExp(a, i ? void 0 : 'i'), s]
  );
}
function my(n) {
  try {
    return n
      .split('/')
      .map((i) => decodeURIComponent(i).replace(/\//g, '%2F'))
      .join('/');
  } catch (i) {
    return (
      sn(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`,
      ),
      n
    );
  }
}
function bn(n, i) {
  if (i === '/') return n;
  if (!n.toLowerCase().startsWith(i.toLowerCase())) return null;
  let o = i.endsWith('/') ? i.length - 1 : i.length,
    s = n.charAt(o);
  return s && s !== '/' ? null : n.slice(o) || '/';
}
function yy(n, i = '/') {
  let {
    pathname: o,
    search: s = '',
    hash: a = '',
  } = typeof n == 'string' ? br(n) : n;
  return {
    pathname: o ? (o.startsWith('/') ? o : gy(o, i)) : i,
    search: Sy(s),
    hash: ky(a),
  };
}
function gy(n, i) {
  let o = i.replace(/\/+$/, '').split('/');
  return (
    n.split('/').forEach((a) => {
      a === '..' ? o.length > 1 && o.pop() : a !== '.' && o.push(a);
    }),
    o.length > 1 ? o.join('/') : '/'
  );
}
function Wu(n, i, o, s) {
  return `Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function vy(n) {
  return n.filter(
    (i, o) => o === 0 || (i.route.path && i.route.path.length > 0),
  );
}
function Lp(n) {
  let i = vy(n);
  return i.map((o, s) => (s === i.length - 1 ? o.pathname : o.pathnameBase));
}
function Ap(n, i, o, s = !1) {
  let a;
  typeof n == 'string'
    ? (a = br(n))
    : ((a = { ...n }),
      Be(
        !a.pathname || !a.pathname.includes('?'),
        Wu('?', 'pathname', 'search', a),
      ),
      Be(
        !a.pathname || !a.pathname.includes('#'),
        Wu('#', 'pathname', 'hash', a),
      ),
      Be(!a.search || !a.search.includes('#'), Wu('#', 'search', 'hash', a)));
  let f = n === '' || a.pathname === '',
    d = f ? '/' : a.pathname,
    h;
  if (d == null) h = o;
  else {
    let w = i.length - 1;
    if (!s && d.startsWith('..')) {
      let C = d.split('/');
      for (; C[0] === '..'; ) C.shift(), (w -= 1);
      a.pathname = C.join('/');
    }
    h = w >= 0 ? i[w] : '/';
  }
  let m = yy(a, h),
    y = d && d !== '/' && d.endsWith('/'),
    g = (f || d === '.') && o.endsWith('/');
  return !m.pathname.endsWith('/') && (y || g) && (m.pathname += '/'), m;
}
var Sn = (n) => n.join('/').replace(/\/\/+/g, '/'),
  wy = (n) => n.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Sy = (n) => (!n || n === '?' ? '' : n.startsWith('?') ? n : '?' + n),
  ky = (n) => (!n || n === '#' ? '' : n.startsWith('#') ? n : '#' + n);
function _y(n) {
  return (
    n != null &&
    typeof n.status == 'number' &&
    typeof n.statusText == 'string' &&
    typeof n.internal == 'boolean' &&
    'data' in n
  );
}
var Fp = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Fp);
var Ey = ['GET', ...Fp];
new Set(Ey);
var Wr = M.createContext(null);
Wr.displayName = 'DataRouter';
var Fl = M.createContext(null);
Fl.displayName = 'DataRouterState';
var Dp = M.createContext({ isTransitioning: !1 });
Dp.displayName = 'ViewTransition';
var xy = M.createContext(new Map());
xy.displayName = 'Fetchers';
var Cy = M.createContext(null);
Cy.displayName = 'Await';
var un = M.createContext(null);
un.displayName = 'Navigation';
var bi = M.createContext(null);
bi.displayName = 'Location';
var En = M.createContext({ outlet: null, matches: [], isDataRoute: !1 });
En.displayName = 'Route';
var Ta = M.createContext(null);
Ta.displayName = 'RouteError';
function Ry(n, { relative: i } = {}) {
  Be(
    Wi(),
    'useHref() may be used only in the context of a <Router> component.',
  );
  let { basename: o, navigator: s } = M.useContext(un),
    { hash: a, pathname: f, search: d } = qi(n, { relative: i }),
    h = f;
  return (
    o !== '/' && (h = f === '/' ? o : Sn([o, f])),
    s.createHref({ pathname: h, search: d, hash: a })
  );
}
function Wi() {
  return M.useContext(bi) != null;
}
function hr() {
  return (
    Be(
      Wi(),
      'useLocation() may be used only in the context of a <Router> component.',
    ),
    M.useContext(bi).location
  );
}
var zp =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function jp(n) {
  M.useContext(un).static || M.useLayoutEffect(n);
}
function Dl() {
  let { isDataRoute: n } = M.useContext(En);
  return n ? Uy() : Py();
}
function Py() {
  Be(
    Wi(),
    'useNavigate() may be used only in the context of a <Router> component.',
  );
  let n = M.useContext(Wr),
    { basename: i, navigator: o } = M.useContext(un),
    { matches: s } = M.useContext(En),
    { pathname: a } = hr(),
    f = JSON.stringify(Lp(s)),
    d = M.useRef(!1);
  return (
    jp(() => {
      d.current = !0;
    }),
    M.useCallback(
      (m, y = {}) => {
        if ((sn(d.current, zp), !d.current)) return;
        if (typeof m == 'number') {
          o.go(m);
          return;
        }
        let g = Ap(m, JSON.parse(f), a, y.relative === 'path');
        n == null &&
          i !== '/' &&
          (g.pathname = g.pathname === '/' ? i : Sn([i, g.pathname])),
          (y.replace ? o.replace : o.push)(g, y.state, y);
      },
      [i, o, f, a, n],
    )
  );
}
M.createContext(null);
function qi(n, { relative: i } = {}) {
  let { matches: o } = M.useContext(En),
    { pathname: s } = hr(),
    a = JSON.stringify(Lp(o));
  return M.useMemo(() => Ap(n, JSON.parse(a), s, i === 'path'), [n, a, s, i]);
}
function Ty(n, i) {
  return Mp(n, i);
}
function Mp(n, i, o, s) {
  var j;
  Be(
    Wi(),
    'useRoutes() may be used only in the context of a <Router> component.',
  );
  let { navigator: a, static: f } = M.useContext(un),
    { matches: d } = M.useContext(En),
    h = d[d.length - 1],
    m = h ? h.params : {},
    y = h ? h.pathname : '/',
    g = h ? h.pathnameBase : '/',
    w = h && h.route;
  {
    let I = (w && w.path) || '';
    Ip(
      y,
      !w || I.endsWith('*') || I.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${I}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${I}"> to <Route path="${I === '/' ? '*' : `${I}/*`}">.`,
    );
  }
  let C = hr(),
    N;
  if (i) {
    let I = typeof i == 'string' ? br(i) : i;
    Be(
      g === '/' || ((j = I.pathname) == null ? void 0 : j.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${I.pathname}" was given in the \`location\` prop.`,
    ),
      (N = I);
  } else N = C;
  let E = N.pathname || '/',
    A = E;
  if (g !== '/') {
    let I = g.replace(/^\//, '').split('/');
    A = '/' + E.replace(/^\//, '').split('/').slice(I.length).join('/');
  }
  let x =
    !f && o && o.matches && o.matches.length > 0
      ? o.matches
      : Tp(n, { pathname: A });
  sn(
    w || x != null,
    `No routes matched location "${N.pathname}${N.search}${N.hash}" `,
  ),
    sn(
      x == null ||
        x[x.length - 1].route.element !== void 0 ||
        x[x.length - 1].route.Component !== void 0 ||
        x[x.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    );
  let D = Fy(
    x &&
      x.map((I) =>
        Object.assign({}, I, {
          params: Object.assign({}, m, I.params),
          pathname: Sn([
            g,
            a.encodeLocation
              ? a.encodeLocation(I.pathname).pathname
              : I.pathname,
          ]),
          pathnameBase:
            I.pathnameBase === '/'
              ? g
              : Sn([
                  g,
                  a.encodeLocation
                    ? a.encodeLocation(I.pathnameBase).pathname
                    : I.pathnameBase,
                ]),
        }),
      ),
    d,
    o,
    s,
  );
  return i && D
    ? M.createElement(
        bi.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...N,
            },
            navigationType: 'POP',
          },
        },
        D,
      )
    : D;
}
function Ny() {
  let n = Iy(),
    i = _y(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
        ? n.message
        : JSON.stringify(n),
    o = n instanceof Error ? n.stack : null,
    s = 'rgba(200,200,200, 0.5)',
    a = { padding: '0.5rem', backgroundColor: s },
    f = { padding: '2px 4px', backgroundColor: s },
    d = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', n),
    (d = M.createElement(
      M.Fragment,
      null,
      M.createElement('p', null, '💿 Hey developer 👋'),
      M.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        M.createElement('code', { style: f }, 'ErrorBoundary'),
        ' or',
        ' ',
        M.createElement('code', { style: f }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    M.createElement(
      M.Fragment,
      null,
      M.createElement('h2', null, 'Unexpected Application Error!'),
      M.createElement('h3', { style: { fontStyle: 'italic' } }, i),
      o ? M.createElement('pre', { style: a }, o) : null,
      d,
    )
  );
}
var Oy = M.createElement(Ny, null),
  Ly = class extends M.Component {
    constructor(n) {
      super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        });
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, i) {
      return i.location !== n.location ||
        (i.revalidation !== 'idle' && n.revalidation === 'idle')
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : i.error,
            location: i.location,
            revalidation: n.revalidation || i.revalidation,
          };
    }
    componentDidCatch(n, i) {
      console.error(
        'React Router caught the following error during render',
        n,
        i,
      );
    }
    render() {
      return this.state.error !== void 0
        ? M.createElement(
            En.Provider,
            { value: this.props.routeContext },
            M.createElement(Ta.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function Ay({ routeContext: n, match: i, children: o }) {
  let s = M.useContext(Wr);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = i.route.id),
    M.createElement(En.Provider, { value: n }, o)
  );
}
function Fy(n, i = [], o = null, s = null) {
  if (n == null) {
    if (!o) return null;
    if (o.errors) n = o.matches;
    else if (i.length === 0 && !o.initialized && o.matches.length > 0)
      n = o.matches;
    else return null;
  }
  let a = n,
    f = o == null ? void 0 : o.errors;
  if (f != null) {
    let m = a.findIndex(
      (y) => y.route.id && (f == null ? void 0 : f[y.route.id]) !== void 0,
    );
    Be(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(',')}`,
    ),
      (a = a.slice(0, Math.min(a.length, m + 1)));
  }
  let d = !1,
    h = -1;
  if (o)
    for (let m = 0; m < a.length; m++) {
      let y = a[m];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (h = m),
        y.route.id)
      ) {
        let { loaderData: g, errors: w } = o,
          C =
            y.route.loader &&
            !g.hasOwnProperty(y.route.id) &&
            (!w || w[y.route.id] === void 0);
        if (y.route.lazy || C) {
          (d = !0), h >= 0 ? (a = a.slice(0, h + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((m, y, g) => {
    let w,
      C = !1,
      N = null,
      E = null;
    o &&
      ((w = f && y.route.id ? f[y.route.id] : void 0),
      (N = y.route.errorElement || Oy),
      d &&
        (h < 0 && g === 0
          ? (Ip(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration',
            ),
            (C = !0),
            (E = null))
          : h === g &&
            ((C = !0), (E = y.route.hydrateFallbackElement || null))));
    let A = i.concat(a.slice(0, g + 1)),
      x = () => {
        let D;
        return (
          w
            ? (D = N)
            : C
              ? (D = E)
              : y.route.Component
                ? (D = M.createElement(y.route.Component, null))
                : y.route.element
                  ? (D = y.route.element)
                  : (D = m),
          M.createElement(Ay, {
            match: y,
            routeContext: { outlet: m, matches: A, isDataRoute: o != null },
            children: D,
          })
        );
      };
    return o && (y.route.ErrorBoundary || y.route.errorElement || g === 0)
      ? M.createElement(Ly, {
          location: o.location,
          revalidation: o.revalidation,
          component: N,
          error: w,
          children: x(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
        })
      : x();
  }, null);
}
function Na(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Dy(n) {
  let i = M.useContext(Wr);
  return Be(i, Na(n)), i;
}
function zy(n) {
  let i = M.useContext(Fl);
  return Be(i, Na(n)), i;
}
function jy(n) {
  let i = M.useContext(En);
  return Be(i, Na(n)), i;
}
function Oa(n) {
  let i = jy(n),
    o = i.matches[i.matches.length - 1];
  return (
    Be(
      o.route.id,
      `${n} can only be used on routes that contain a unique "id"`,
    ),
    o.route.id
  );
}
function My() {
  return Oa('useRouteId');
}
function Iy() {
  var s;
  let n = M.useContext(Ta),
    i = zy('useRouteError'),
    o = Oa('useRouteError');
  return n !== void 0 ? n : (s = i.errors) == null ? void 0 : s[o];
}
function Uy() {
  let { router: n } = Dy('useNavigate'),
    i = Oa('useNavigate'),
    o = M.useRef(!1);
  return (
    jp(() => {
      o.current = !0;
    }),
    M.useCallback(
      async (a, f = {}) => {
        sn(o.current, zp),
          o.current &&
            (typeof a == 'number'
              ? n.navigate(a)
              : await n.navigate(a, { fromRouteId: i, ...f }));
      },
      [n, i],
    )
  );
}
var $d = {};
function Ip(n, i, o) {
  !i && !$d[n] && (($d[n] = !0), sn(!1, o));
}
M.memo(By);
function By({ routes: n, future: i, state: o }) {
  return Mp(n, void 0, o, i);
}
function dl(n) {
  Be(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.',
  );
}
function Vy({
  basename: n = '/',
  children: i = null,
  location: o,
  navigationType: s = 'POP',
  navigator: a,
  static: f = !1,
}) {
  Be(
    !Wi(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let d = n.replace(/^\/*/, '/'),
    h = M.useMemo(
      () => ({ basename: d, navigator: a, static: f, future: {} }),
      [d, a, f],
    );
  typeof o == 'string' && (o = br(o));
  let {
      pathname: m = '/',
      search: y = '',
      hash: g = '',
      state: w = null,
      key: C = 'default',
    } = o,
    N = M.useMemo(() => {
      let E = bn(m, d);
      return E == null
        ? null
        : {
            location: { pathname: E, search: y, hash: g, state: w, key: C },
            navigationType: s,
          };
    }, [d, m, y, g, w, C, s]);
  return (
    sn(
      N != null,
      `<Router basename="${d}"> is not able to match the URL "${m}${y}${g}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    N == null
      ? null
      : M.createElement(
          un.Provider,
          { value: h },
          M.createElement(bi.Provider, { children: i, value: N }),
        )
  );
}
function $y({ children: n, location: i }) {
  return Ty(ca(n), i);
}
function ca(n, i = []) {
  let o = [];
  return (
    M.Children.forEach(n, (s, a) => {
      if (!M.isValidElement(s)) return;
      let f = [...i, a];
      if (s.type === M.Fragment) {
        o.push.apply(o, ca(s.props.children, f));
        return;
      }
      Be(
        s.type === dl,
        `[${typeof s.type == 'string' ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Be(
          !s.props.index || !s.props.children,
          'An index route cannot have child routes.',
        );
      let d = {
        id: s.props.id || f.join('-'),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        loader: s.props.loader,
        action: s.props.action,
        hydrateFallbackElement: s.props.hydrateFallbackElement,
        HydrateFallback: s.props.HydrateFallback,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.hasErrorBoundary === !0 ||
          s.props.ErrorBoundary != null ||
          s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      s.props.children && (d.children = ca(s.props.children, f)), o.push(d);
    }),
    o
  );
}
var pl = 'get',
  hl = 'application/x-www-form-urlencoded';
function zl(n) {
  return n != null && typeof n.tagName == 'string';
}
function Hy(n) {
  return zl(n) && n.tagName.toLowerCase() === 'button';
}
function by(n) {
  return zl(n) && n.tagName.toLowerCase() === 'form';
}
function Wy(n) {
  return zl(n) && n.tagName.toLowerCase() === 'input';
}
function qy(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Ky(n, i) {
  return n.button === 0 && (!i || i === '_self') && !qy(n);
}
var cl = null;
function Qy() {
  if (cl === null)
    try {
      new FormData(document.createElement('form'), 0), (cl = !1);
    } catch {
      cl = !0;
    }
  return cl;
}
var Jy = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function qu(n) {
  return n != null && !Jy.has(n)
    ? (sn(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hl}"`,
      ),
      null)
    : n;
}
function Xy(n, i) {
  let o, s, a, f, d;
  if (by(n)) {
    let h = n.getAttribute('action');
    (s = h ? bn(h, i) : null),
      (o = n.getAttribute('method') || pl),
      (a = qu(n.getAttribute('enctype')) || hl),
      (f = new FormData(n));
  } else if (Hy(n) || (Wy(n) && (n.type === 'submit' || n.type === 'image'))) {
    let h = n.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let m = n.getAttribute('formaction') || h.getAttribute('action');
    if (
      ((s = m ? bn(m, i) : null),
      (o = n.getAttribute('formmethod') || h.getAttribute('method') || pl),
      (a =
        qu(n.getAttribute('formenctype')) ||
        qu(h.getAttribute('enctype')) ||
        hl),
      (f = new FormData(h, n)),
      !Qy())
    ) {
      let { name: y, type: g, value: w } = n;
      if (g === 'image') {
        let C = y ? `${y}.` : '';
        f.append(`${C}x`, '0'), f.append(`${C}y`, '0');
      } else y && f.append(y, w);
    }
  } else {
    if (zl(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (o = pl), (s = null), (a = hl), (d = n);
  }
  return (
    f && a === 'text/plain' && ((d = f), (f = void 0)),
    { action: s, method: o.toLowerCase(), encType: a, formData: f, body: d }
  );
}
function La(n, i) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(i);
}
async function Yy(n, i) {
  if (n.id in i) return i[n.id];
  try {
    let o = await import(n.module);
    return (i[n.id] = o), o;
  } catch (o) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`,
      ),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Gy(n) {
  return n == null
    ? !1
    : n.href == null
      ? n.rel === 'preload' &&
        typeof n.imageSrcSet == 'string' &&
        typeof n.imageSizes == 'string'
      : typeof n.rel == 'string' && typeof n.href == 'string';
}
async function Zy(n, i, o) {
  let s = await Promise.all(
    n.map(async (a) => {
      let f = i.routes[a.route.id];
      if (f) {
        let d = await Yy(f, o);
        return d.links ? d.links() : [];
      }
      return [];
    }),
  );
  return r2(
    s
      .flat(1)
      .filter(Gy)
      .filter((a) => a.rel === 'stylesheet' || a.rel === 'preload')
      .map((a) =>
        a.rel === 'stylesheet'
          ? { ...a, rel: 'prefetch', as: 'style' }
          : { ...a, rel: 'prefetch' },
      ),
  );
}
function Hd(n, i, o, s, a, f) {
  let d = (m, y) => (o[y] ? m.route.id !== o[y].route.id : !0),
    h = (m, y) => {
      var g;
      return (
        o[y].pathname !== m.pathname ||
        (((g = o[y].route.path) == null ? void 0 : g.endsWith('*')) &&
          o[y].params['*'] !== m.params['*'])
      );
    };
  return f === 'assets'
    ? i.filter((m, y) => d(m, y) || h(m, y))
    : f === 'data'
      ? i.filter((m, y) => {
          var w;
          let g = s.routes[m.route.id];
          if (!g || !g.hasLoader) return !1;
          if (d(m, y) || h(m, y)) return !0;
          if (m.route.shouldRevalidate) {
            let C = m.route.shouldRevalidate({
              currentUrl: new URL(
                a.pathname + a.search + a.hash,
                window.origin,
              ),
              currentParams: ((w = o[0]) == null ? void 0 : w.params) || {},
              nextUrl: new URL(n, window.origin),
              nextParams: m.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof C == 'boolean') return C;
          }
          return !0;
        })
      : [];
}
function e2(n, i, { includeHydrateFallback: o } = {}) {
  return t2(
    n
      .map((s) => {
        let a = i.routes[s.route.id];
        if (!a) return [];
        let f = [a.module];
        return (
          a.clientActionModule && (f = f.concat(a.clientActionModule)),
          a.clientLoaderModule && (f = f.concat(a.clientLoaderModule)),
          o &&
            a.hydrateFallbackModule &&
            (f = f.concat(a.hydrateFallbackModule)),
          a.imports && (f = f.concat(a.imports)),
          f
        );
      })
      .flat(1),
  );
}
function t2(n) {
  return [...new Set(n)];
}
function n2(n) {
  let i = {},
    o = Object.keys(n).sort();
  for (let s of o) i[s] = n[s];
  return i;
}
function r2(n, i) {
  let o = new Set();
  return (
    new Set(i),
    n.reduce((s, a) => {
      let f = JSON.stringify(n2(a));
      return o.has(f) || (o.add(f), s.push({ key: f, link: a })), s;
    }, [])
  );
}
function i2(n) {
  let i =
    typeof n == 'string'
      ? new URL(
          n,
          typeof window > 'u'
            ? 'server://singlefetch/'
            : window.location.origin,
        )
      : n;
  return (
    i.pathname === '/'
      ? (i.pathname = '_root.data')
      : (i.pathname = `${i.pathname.replace(/\/$/, '')}.data`),
    i
  );
}
function o2() {
  let n = M.useContext(Wr);
  return (
    La(
      n,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    n
  );
}
function l2() {
  let n = M.useContext(Fl);
  return (
    La(
      n,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    n
  );
}
var Aa = M.createContext(void 0);
Aa.displayName = 'FrameworkContext';
function Up() {
  let n = M.useContext(Aa);
  return (
    La(n, 'You must render this element inside a <HydratedRouter> element'), n
  );
}
function s2(n, i) {
  let o = M.useContext(Aa),
    [s, a] = M.useState(!1),
    [f, d] = M.useState(!1),
    {
      onFocus: h,
      onBlur: m,
      onMouseEnter: y,
      onMouseLeave: g,
      onTouchStart: w,
    } = i,
    C = M.useRef(null);
  M.useEffect(() => {
    if ((n === 'render' && d(!0), n === 'viewport')) {
      let A = (D) => {
          D.forEach((j) => {
            d(j.isIntersecting);
          });
        },
        x = new IntersectionObserver(A, { threshold: 0.5 });
      return (
        C.current && x.observe(C.current),
        () => {
          x.disconnect();
        }
      );
    }
  }, [n]),
    M.useEffect(() => {
      if (s) {
        let A = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(A);
        };
      }
    }, [s]);
  let N = () => {
      a(!0);
    },
    E = () => {
      a(!1), d(!1);
    };
  return o
    ? n !== 'intent'
      ? [f, C, {}]
      : [
          f,
          C,
          {
            onFocus: Fi(h, N),
            onBlur: Fi(m, E),
            onMouseEnter: Fi(y, N),
            onMouseLeave: Fi(g, E),
            onTouchStart: Fi(w, N),
          },
        ]
    : [!1, C, {}];
}
function Fi(n, i) {
  return (o) => {
    n && n(o), o.defaultPrevented || i(o);
  };
}
function u2({ page: n, ...i }) {
  let { router: o } = o2(),
    s = M.useMemo(() => Tp(o.routes, n, o.basename), [o.routes, n, o.basename]);
  return s ? M.createElement(c2, { page: n, matches: s, ...i }) : null;
}
function a2(n) {
  let { manifest: i, routeModules: o } = Up(),
    [s, a] = M.useState([]);
  return (
    M.useEffect(() => {
      let f = !1;
      return (
        Zy(n, i, o).then((d) => {
          f || a(d);
        }),
        () => {
          f = !0;
        }
      );
    }, [n, i, o]),
    s
  );
}
function c2({ page: n, matches: i, ...o }) {
  let s = hr(),
    { manifest: a, routeModules: f } = Up(),
    { loaderData: d, matches: h } = l2(),
    m = M.useMemo(() => Hd(n, i, h, a, s, 'data'), [n, i, h, a, s]),
    y = M.useMemo(() => Hd(n, i, h, a, s, 'assets'), [n, i, h, a, s]),
    g = M.useMemo(() => {
      if (n === s.pathname + s.search + s.hash) return [];
      let N = new Set(),
        E = !1;
      if (
        (i.forEach((x) => {
          var j;
          let D = a.routes[x.route.id];
          !D ||
            !D.hasLoader ||
            ((!m.some((I) => I.route.id === x.route.id) &&
              x.route.id in d &&
              (j = f[x.route.id]) != null &&
              j.shouldRevalidate) ||
            D.hasClientLoader
              ? (E = !0)
              : N.add(x.route.id));
        }),
        N.size === 0)
      )
        return [];
      let A = i2(n);
      return (
        E &&
          N.size > 0 &&
          A.searchParams.set(
            '_routes',
            i
              .filter((x) => N.has(x.route.id))
              .map((x) => x.route.id)
              .join(','),
          ),
        [A.pathname + A.search]
      );
    }, [d, s, a, m, i, n, f]),
    w = M.useMemo(() => e2(y, a), [y, a]),
    C = a2(y);
  return M.createElement(
    M.Fragment,
    null,
    g.map((N) =>
      M.createElement('link', {
        key: N,
        rel: 'prefetch',
        as: 'fetch',
        href: N,
        ...o,
      }),
    ),
    w.map((N) =>
      M.createElement('link', { key: N, rel: 'modulepreload', href: N, ...o }),
    ),
    C.map(({ key: N, link: E }) => M.createElement('link', { key: N, ...E })),
  );
}
function f2(...n) {
  return (i) => {
    n.forEach((o) => {
      typeof o == 'function' ? o(i) : o != null && (o.current = i);
    });
  };
}
var Bp =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  Bp && (window.__reactRouterVersion = '7.2.0');
} catch {}
function d2({ basename: n, children: i, window: o }) {
  let s = M.useRef();
  s.current == null && (s.current = ey({ window: o, v5Compat: !0 }));
  let a = s.current,
    [f, d] = M.useState({ action: a.action, location: a.location }),
    h = M.useCallback(
      (m) => {
        M.startTransition(() => d(m));
      },
      [d],
    );
  return (
    M.useLayoutEffect(() => a.listen(h), [a, h]),
    M.createElement(Vy, {
      basename: n,
      children: i,
      location: f.location,
      navigationType: f.action,
      navigator: a,
    })
  );
}
var Vp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  $r = M.forwardRef(function (
    {
      onClick: i,
      discover: o = 'render',
      prefetch: s = 'none',
      relative: a,
      reloadDocument: f,
      replace: d,
      state: h,
      target: m,
      to: y,
      preventScrollReset: g,
      viewTransition: w,
      ...C
    },
    N,
  ) {
    let { basename: E } = M.useContext(un),
      A = typeof y == 'string' && Vp.test(y),
      x,
      D = !1;
    if (typeof y == 'string' && A && ((x = y), Bp))
      try {
        let me = new URL(window.location.href),
          Ee = y.startsWith('//') ? new URL(me.protocol + y) : new URL(y),
          rt = bn(Ee.pathname, E);
        Ee.origin === me.origin && rt != null
          ? (y = rt + Ee.search + Ee.hash)
          : (D = !0);
      } catch {
        sn(
          !1,
          `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let j = Ry(y, { relative: a }),
      [I, W, H] = s2(s, C),
      Z = y2(y, {
        replace: d,
        state: h,
        target: m,
        preventScrollReset: g,
        relative: a,
        viewTransition: w,
      });
    function ce(me) {
      i && i(me), me.defaultPrevented || Z(me);
    }
    let ie = M.createElement('a', {
      ...C,
      ...H,
      href: x || j,
      onClick: D || f ? i : ce,
      ref: f2(N, W),
      target: m,
      'data-discover': !A && o === 'render' ? 'true' : void 0,
    });
    return I && !A
      ? M.createElement(M.Fragment, null, ie, M.createElement(u2, { page: j }))
      : ie;
  });
$r.displayName = 'Link';
var p2 = M.forwardRef(function (
  {
    'aria-current': i = 'page',
    caseSensitive: o = !1,
    className: s = '',
    end: a = !1,
    style: f,
    to: d,
    viewTransition: h,
    children: m,
    ...y
  },
  g,
) {
  let w = qi(d, { relative: y.relative }),
    C = hr(),
    N = M.useContext(Fl),
    { navigator: E, basename: A } = M.useContext(un),
    x = N != null && k2(w) && h === !0,
    D = E.encodeLocation ? E.encodeLocation(w).pathname : w.pathname,
    j = C.pathname,
    I =
      N && N.navigation && N.navigation.location
        ? N.navigation.location.pathname
        : null;
  o ||
    ((j = j.toLowerCase()),
    (I = I ? I.toLowerCase() : null),
    (D = D.toLowerCase())),
    I && A && (I = bn(I, A) || I);
  const W = D !== '/' && D.endsWith('/') ? D.length - 1 : D.length;
  let H = j === D || (!a && j.startsWith(D) && j.charAt(W) === '/'),
    Z =
      I != null &&
      (I === D || (!a && I.startsWith(D) && I.charAt(D.length) === '/')),
    ce = { isActive: H, isPending: Z, isTransitioning: x },
    ie = H ? i : void 0,
    me;
  typeof s == 'function'
    ? (me = s(ce))
    : (me = [
        s,
        H ? 'active' : null,
        Z ? 'pending' : null,
        x ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let Ee = typeof f == 'function' ? f(ce) : f;
  return M.createElement(
    $r,
    {
      ...y,
      'aria-current': ie,
      className: me,
      ref: g,
      style: Ee,
      to: d,
      viewTransition: h,
    },
    typeof m == 'function' ? m(ce) : m,
  );
});
p2.displayName = 'NavLink';
var h2 = M.forwardRef(
  (
    {
      discover: n = 'render',
      fetcherKey: i,
      navigate: o,
      reloadDocument: s,
      replace: a,
      state: f,
      method: d = pl,
      action: h,
      onSubmit: m,
      relative: y,
      preventScrollReset: g,
      viewTransition: w,
      ...C
    },
    N,
  ) => {
    let E = w2(),
      A = S2(h, { relative: y }),
      x = d.toLowerCase() === 'get' ? 'get' : 'post',
      D = typeof h == 'string' && Vp.test(h),
      j = (I) => {
        if ((m && m(I), I.defaultPrevented)) return;
        I.preventDefault();
        let W = I.nativeEvent.submitter,
          H = (W == null ? void 0 : W.getAttribute('formmethod')) || d;
        E(W || I.currentTarget, {
          fetcherKey: i,
          method: H,
          navigate: o,
          replace: a,
          state: f,
          relative: y,
          preventScrollReset: g,
          viewTransition: w,
        });
      };
    return M.createElement('form', {
      ref: N,
      method: x,
      action: A,
      onSubmit: s ? m : j,
      ...C,
      'data-discover': !D && n === 'render' ? 'true' : void 0,
    });
  },
);
h2.displayName = 'Form';
function m2(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function $p(n) {
  let i = M.useContext(Wr);
  return Be(i, m2(n)), i;
}
function y2(
  n,
  {
    target: i,
    replace: o,
    state: s,
    preventScrollReset: a,
    relative: f,
    viewTransition: d,
  } = {},
) {
  let h = Dl(),
    m = hr(),
    y = qi(n, { relative: f });
  return M.useCallback(
    (g) => {
      if (Ky(g, i)) {
        g.preventDefault();
        let w = o !== void 0 ? o : Bi(m) === Bi(y);
        h(n, {
          replace: w,
          state: s,
          preventScrollReset: a,
          relative: f,
          viewTransition: d,
        });
      }
    },
    [m, h, y, o, s, i, n, a, f, d],
  );
}
var g2 = 0,
  v2 = () => `__${String(++g2)}__`;
function w2() {
  let { router: n } = $p('useSubmit'),
    { basename: i } = M.useContext(un),
    o = My();
  return M.useCallback(
    async (s, a = {}) => {
      let { action: f, method: d, encType: h, formData: m, body: y } = Xy(s, i);
      if (a.navigate === !1) {
        let g = a.fetcherKey || v2();
        await n.fetch(g, o, a.action || f, {
          preventScrollReset: a.preventScrollReset,
          formData: m,
          body: y,
          formMethod: a.method || d,
          formEncType: a.encType || h,
          flushSync: a.flushSync,
        });
      } else
        await n.navigate(a.action || f, {
          preventScrollReset: a.preventScrollReset,
          formData: m,
          body: y,
          formMethod: a.method || d,
          formEncType: a.encType || h,
          replace: a.replace,
          state: a.state,
          fromRouteId: o,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition,
        });
    },
    [n, i, o],
  );
}
function S2(n, { relative: i } = {}) {
  let { basename: o } = M.useContext(un),
    s = M.useContext(En);
  Be(s, 'useFormAction must be used inside a RouteContext');
  let [a] = s.matches.slice(-1),
    f = { ...qi(n || '.', { relative: i }) },
    d = hr();
  if (n == null) {
    f.search = d.search;
    let h = new URLSearchParams(f.search),
      m = h.getAll('index');
    if (m.some((g) => g === '')) {
      h.delete('index'),
        m.filter((w) => w).forEach((w) => h.append('index', w));
      let g = h.toString();
      f.search = g ? `?${g}` : '';
    }
  }
  return (
    (!n || n === '.') &&
      a.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
    o !== '/' && (f.pathname = f.pathname === '/' ? o : Sn([o, f.pathname])),
    Bi(f)
  );
}
function k2(n, i = {}) {
  let o = M.useContext(Dp);
  Be(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: s } = $p('useViewTransitionState'),
    a = qi(n, { relative: i.relative });
  if (!o.isTransitioning) return !1;
  let f = bn(o.currentLocation.pathname, s) || o.currentLocation.pathname,
    d = bn(o.nextLocation.pathname, s) || o.nextLocation.pathname;
  return kl(a.pathname, d) != null || kl(a.pathname, f) != null;
}
new TextEncoder();
var Ku = { exports: {} },
  Qu = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bd;
function _2() {
  if (bd) return Qu;
  bd = 1;
  var n = Al();
  function i(m, y) {
    return (m === y && (m !== 0 || 1 / m === 1 / y)) || (m !== m && y !== y);
  }
  var o = typeof Object.is == 'function' ? Object.is : i,
    s = n.useSyncExternalStore,
    a = n.useRef,
    f = n.useEffect,
    d = n.useMemo,
    h = n.useDebugValue;
  return (
    (Qu.useSyncExternalStoreWithSelector = function (m, y, g, w, C) {
      var N = a(null);
      if (N.current === null) {
        var E = { hasValue: !1, value: null };
        N.current = E;
      } else E = N.current;
      N = d(
        function () {
          function x(H) {
            if (!D) {
              if (((D = !0), (j = H), (H = w(H)), C !== void 0 && E.hasValue)) {
                var Z = E.value;
                if (C(Z, H)) return (I = Z);
              }
              return (I = H);
            }
            if (((Z = I), o(j, H))) return Z;
            var ce = w(H);
            return C !== void 0 && C(Z, ce)
              ? ((j = H), Z)
              : ((j = H), (I = ce));
          }
          var D = !1,
            j,
            I,
            W = g === void 0 ? null : g;
          return [
            function () {
              return x(y());
            },
            W === null
              ? void 0
              : function () {
                  return x(W());
                },
          ];
        },
        [y, g, w, C],
      );
      var A = s(m, N[0], N[1]);
      return (
        f(
          function () {
            (E.hasValue = !0), (E.value = A);
          },
          [A],
        ),
        h(A),
        A
      );
    }),
    Qu
  );
}
var Wd;
function E2() {
  return Wd || ((Wd = 1), (Ku.exports = _2())), Ku.exports;
}
var x2 = E2();
function C2(n) {
  n();
}
function R2() {
  let n = null,
    i = null;
  return {
    clear() {
      (n = null), (i = null);
    },
    notify() {
      C2(() => {
        let o = n;
        for (; o; ) o.callback(), (o = o.next);
      });
    },
    get() {
      const o = [];
      let s = n;
      for (; s; ) o.push(s), (s = s.next);
      return o;
    },
    subscribe(o) {
      let s = !0;
      const a = (i = { callback: o, next: null, prev: i });
      return (
        a.prev ? (a.prev.next = a) : (n = a),
        function () {
          !s ||
            n === null ||
            ((s = !1),
            a.next ? (a.next.prev = a.prev) : (i = a.prev),
            a.prev ? (a.prev.next = a.next) : (n = a.next));
        }
      );
    },
  };
}
var qd = { notify() {}, get: () => [] };
function P2(n, i) {
  let o,
    s = qd,
    a = 0,
    f = !1;
  function d(A) {
    g();
    const x = s.subscribe(A);
    let D = !1;
    return () => {
      D || ((D = !0), x(), w());
    };
  }
  function h() {
    s.notify();
  }
  function m() {
    E.onStateChange && E.onStateChange();
  }
  function y() {
    return f;
  }
  function g() {
    a++, o || ((o = n.subscribe(m)), (s = R2()));
  }
  function w() {
    a--, o && a === 0 && (o(), (o = void 0), s.clear(), (s = qd));
  }
  function C() {
    f || ((f = !0), g());
  }
  function N() {
    f && ((f = !1), w());
  }
  const E = {
    addNestedSub: d,
    notifyNestedSubs: h,
    handleChangeWrapper: m,
    isSubscribed: y,
    trySubscribe: C,
    tryUnsubscribe: N,
    getListeners: () => s,
  };
  return E;
}
var T2 = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  N2 = T2(),
  O2 = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  L2 = O2(),
  A2 = () => (N2 || L2 ? M.useLayoutEffect : M.useEffect),
  F2 = A2(),
  Ju = Symbol.for('react-redux-context'),
  Xu = typeof globalThis < 'u' ? globalThis : {};
function D2() {
  if (!M.createContext) return {};
  const n = Xu[Ju] ?? (Xu[Ju] = new Map());
  let i = n.get(M.createContext);
  return i || ((i = M.createContext(null)), n.set(M.createContext, i)), i;
}
var Wn = D2();
function z2(n) {
  const { children: i, context: o, serverState: s, store: a } = n,
    f = M.useMemo(() => {
      const m = P2(a);
      return {
        store: a,
        subscription: m,
        getServerState: s ? () => s : void 0,
      };
    }, [a, s]),
    d = M.useMemo(() => a.getState(), [a]);
  F2(() => {
    const { subscription: m } = f;
    return (
      (m.onStateChange = m.notifyNestedSubs),
      m.trySubscribe(),
      d !== a.getState() && m.notifyNestedSubs(),
      () => {
        m.tryUnsubscribe(), (m.onStateChange = void 0);
      }
    );
  }, [f, d]);
  const h = o || Wn;
  return M.createElement(h.Provider, { value: f }, i);
}
var j2 = z2;
function Fa(n = Wn) {
  return function () {
    return M.useContext(n);
  };
}
var Hp = Fa();
function bp(n = Wn) {
  const i = n === Wn ? Hp : Fa(n),
    o = () => {
      const { store: s } = i();
      return s;
    };
  return Object.assign(o, { withTypes: () => o }), o;
}
var M2 = bp();
function I2(n = Wn) {
  const i = n === Wn ? M2 : bp(n),
    o = () => i().dispatch;
  return Object.assign(o, { withTypes: () => o }), o;
}
var U2 = I2(),
  B2 = (n, i) => n === i;
function V2(n = Wn) {
  const i = n === Wn ? Hp : Fa(n),
    o = (s, a = {}) => {
      const { equalityFn: f = B2 } =
          typeof a == 'function' ? { equalityFn: a } : a,
        d = i(),
        { store: h, subscription: m, getServerState: y } = d;
      M.useRef(!0);
      const g = M.useCallback(
          {
            [s.name](C) {
              return s(C);
            },
          }[s.name],
          [s],
        ),
        w = x2.useSyncExternalStoreWithSelector(
          m.addNestedSub,
          h.getState,
          y || h.getState,
          g,
          f,
        );
      return M.useDebugValue(w), w;
    };
  return Object.assign(o, { withTypes: () => o }), o;
}
var $2 = V2();
function Wp(n, i) {
  return function () {
    return n.apply(i, arguments);
  };
}
const { toString: H2 } = Object.prototype,
  { getPrototypeOf: Da } = Object,
  jl = ((n) => (i) => {
    const o = H2.call(i);
    return n[o] || (n[o] = o.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Xt = (n) => ((n = n.toLowerCase()), (i) => jl(i) === n),
  Ml = (n) => (i) => typeof i === n,
  { isArray: qr } = Array,
  Vi = Ml('undefined');
function b2(n) {
  return (
    n !== null &&
    !Vi(n) &&
    n.constructor !== null &&
    !Vi(n.constructor) &&
    Lt(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const qp = Xt('ArrayBuffer');
function W2(n) {
  let i;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (i = ArrayBuffer.isView(n))
      : (i = n && n.buffer && qp(n.buffer)),
    i
  );
}
const q2 = Ml('string'),
  Lt = Ml('function'),
  Kp = Ml('number'),
  Il = (n) => n !== null && typeof n == 'object',
  K2 = (n) => n === !0 || n === !1,
  ml = (n) => {
    if (jl(n) !== 'object') return !1;
    const i = Da(n);
    return (
      (i === null ||
        i === Object.prototype ||
        Object.getPrototypeOf(i) === null) &&
      !(Symbol.toStringTag in n) &&
      !(Symbol.iterator in n)
    );
  },
  Q2 = Xt('Date'),
  J2 = Xt('File'),
  X2 = Xt('Blob'),
  Y2 = Xt('FileList'),
  G2 = (n) => Il(n) && Lt(n.pipe),
  Z2 = (n) => {
    let i;
    return (
      n &&
      ((typeof FormData == 'function' && n instanceof FormData) ||
        (Lt(n.append) &&
          ((i = jl(n)) === 'formdata' ||
            (i === 'object' &&
              Lt(n.toString) &&
              n.toString() === '[object FormData]'))))
    );
  },
  eg = Xt('URLSearchParams'),
  [tg, ng, rg, ig] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    Xt,
  ),
  og = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Ki(n, i, { allOwnKeys: o = !1 } = {}) {
  if (n === null || typeof n > 'u') return;
  let s, a;
  if ((typeof n != 'object' && (n = [n]), qr(n)))
    for (s = 0, a = n.length; s < a; s++) i.call(null, n[s], s, n);
  else {
    const f = o ? Object.getOwnPropertyNames(n) : Object.keys(n),
      d = f.length;
    let h;
    for (s = 0; s < d; s++) (h = f[s]), i.call(null, n[h], h, n);
  }
}
function Qp(n, i) {
  i = i.toLowerCase();
  const o = Object.keys(n);
  let s = o.length,
    a;
  for (; s-- > 0; ) if (((a = o[s]), i === a.toLowerCase())) return a;
  return null;
}
const ur =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Jp = (n) => !Vi(n) && n !== ur;
function fa() {
  const { caseless: n } = (Jp(this) && this) || {},
    i = {},
    o = (s, a) => {
      const f = (n && Qp(i, a)) || a;
      ml(i[f]) && ml(s)
        ? (i[f] = fa(i[f], s))
        : ml(s)
          ? (i[f] = fa({}, s))
          : qr(s)
            ? (i[f] = s.slice())
            : (i[f] = s);
    };
  for (let s = 0, a = arguments.length; s < a; s++)
    arguments[s] && Ki(arguments[s], o);
  return i;
}
const lg = (n, i, o, { allOwnKeys: s } = {}) => (
    Ki(
      i,
      (a, f) => {
        o && Lt(a) ? (n[f] = Wp(a, o)) : (n[f] = a);
      },
      { allOwnKeys: s },
    ),
    n
  ),
  sg = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  ug = (n, i, o, s) => {
    (n.prototype = Object.create(i.prototype, s)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, 'super', { value: i.prototype }),
      o && Object.assign(n.prototype, o);
  },
  ag = (n, i, o, s) => {
    let a, f, d;
    const h = {};
    if (((i = i || {}), n == null)) return i;
    do {
      for (a = Object.getOwnPropertyNames(n), f = a.length; f-- > 0; )
        (d = a[f]), (!s || s(d, n, i)) && !h[d] && ((i[d] = n[d]), (h[d] = !0));
      n = o !== !1 && Da(n);
    } while (n && (!o || o(n, i)) && n !== Object.prototype);
    return i;
  },
  cg = (n, i, o) => {
    (n = String(n)),
      (o === void 0 || o > n.length) && (o = n.length),
      (o -= i.length);
    const s = n.indexOf(i, o);
    return s !== -1 && s === o;
  },
  fg = (n) => {
    if (!n) return null;
    if (qr(n)) return n;
    let i = n.length;
    if (!Kp(i)) return null;
    const o = new Array(i);
    for (; i-- > 0; ) o[i] = n[i];
    return o;
  },
  dg = (
    (n) => (i) =>
      n && i instanceof n
  )(typeof Uint8Array < 'u' && Da(Uint8Array)),
  pg = (n, i) => {
    const s = (n && n[Symbol.iterator]).call(n);
    let a;
    for (; (a = s.next()) && !a.done; ) {
      const f = a.value;
      i.call(n, f[0], f[1]);
    }
  },
  hg = (n, i) => {
    let o;
    const s = [];
    for (; (o = n.exec(i)) !== null; ) s.push(o);
    return s;
  },
  mg = Xt('HTMLFormElement'),
  yg = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (o, s, a) {
      return s.toUpperCase() + a;
    }),
  Kd = (
    ({ hasOwnProperty: n }) =>
    (i, o) =>
      n.call(i, o)
  )(Object.prototype),
  gg = Xt('RegExp'),
  Xp = (n, i) => {
    const o = Object.getOwnPropertyDescriptors(n),
      s = {};
    Ki(o, (a, f) => {
      let d;
      (d = i(a, f, n)) !== !1 && (s[f] = d || a);
    }),
      Object.defineProperties(n, s);
  },
  vg = (n) => {
    Xp(n, (i, o) => {
      if (Lt(n) && ['arguments', 'caller', 'callee'].indexOf(o) !== -1)
        return !1;
      const s = n[o];
      if (Lt(s)) {
        if (((i.enumerable = !1), 'writable' in i)) {
          i.writable = !1;
          return;
        }
        i.set ||
          (i.set = () => {
            throw Error("Can not rewrite read-only method '" + o + "'");
          });
      }
    });
  },
  wg = (n, i) => {
    const o = {},
      s = (a) => {
        a.forEach((f) => {
          o[f] = !0;
        });
      };
    return qr(n) ? s(n) : s(String(n).split(i)), o;
  },
  Sg = () => {},
  kg = (n, i) => (n != null && Number.isFinite((n = +n)) ? n : i);
function _g(n) {
  return !!(
    n &&
    Lt(n.append) &&
    n[Symbol.toStringTag] === 'FormData' &&
    n[Symbol.iterator]
  );
}
const Eg = (n) => {
    const i = new Array(10),
      o = (s, a) => {
        if (Il(s)) {
          if (i.indexOf(s) >= 0) return;
          if (!('toJSON' in s)) {
            i[a] = s;
            const f = qr(s) ? [] : {};
            return (
              Ki(s, (d, h) => {
                const m = o(d, a + 1);
                !Vi(m) && (f[h] = m);
              }),
              (i[a] = void 0),
              f
            );
          }
        }
        return s;
      };
    return o(n, 0);
  },
  xg = Xt('AsyncFunction'),
  Cg = (n) => n && (Il(n) || Lt(n)) && Lt(n.then) && Lt(n.catch),
  Yp = ((n, i) =>
    n
      ? setImmediate
      : i
        ? ((o, s) => (
            ur.addEventListener(
              'message',
              ({ source: a, data: f }) => {
                a === ur && f === o && s.length && s.shift()();
              },
              !1,
            ),
            (a) => {
              s.push(a), ur.postMessage(o, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (o) => setTimeout(o))(
    typeof setImmediate == 'function',
    Lt(ur.postMessage),
  ),
  Rg =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(ur)
      : (typeof process < 'u' && process.nextTick) || Yp,
  F = {
    isArray: qr,
    isArrayBuffer: qp,
    isBuffer: b2,
    isFormData: Z2,
    isArrayBufferView: W2,
    isString: q2,
    isNumber: Kp,
    isBoolean: K2,
    isObject: Il,
    isPlainObject: ml,
    isReadableStream: tg,
    isRequest: ng,
    isResponse: rg,
    isHeaders: ig,
    isUndefined: Vi,
    isDate: Q2,
    isFile: J2,
    isBlob: X2,
    isRegExp: gg,
    isFunction: Lt,
    isStream: G2,
    isURLSearchParams: eg,
    isTypedArray: dg,
    isFileList: Y2,
    forEach: Ki,
    merge: fa,
    extend: lg,
    trim: og,
    stripBOM: sg,
    inherits: ug,
    toFlatObject: ag,
    kindOf: jl,
    kindOfTest: Xt,
    endsWith: cg,
    toArray: fg,
    forEachEntry: pg,
    matchAll: hg,
    isHTMLForm: mg,
    hasOwnProperty: Kd,
    hasOwnProp: Kd,
    reduceDescriptors: Xp,
    freezeMethods: vg,
    toObjectSet: wg,
    toCamelCase: yg,
    noop: Sg,
    toFiniteNumber: kg,
    findKey: Qp,
    global: ur,
    isContextDefined: Jp,
    isSpecCompliantForm: _g,
    toJSONObject: Eg,
    isAsyncFn: xg,
    isThenable: Cg,
    setImmediate: Yp,
    asap: Rg,
  };
function he(n, i, o, s, a) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = 'AxiosError'),
    i && (this.code = i),
    o && (this.config = o),
    s && (this.request = s),
    a && ((this.response = a), (this.status = a.status ? a.status : null));
}
F.inherits(he, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: F.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Gp = he.prototype,
  Zp = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((n) => {
  Zp[n] = { value: n };
});
Object.defineProperties(he, Zp);
Object.defineProperty(Gp, 'isAxiosError', { value: !0 });
he.from = (n, i, o, s, a, f) => {
  const d = Object.create(Gp);
  return (
    F.toFlatObject(
      n,
      d,
      function (m) {
        return m !== Error.prototype;
      },
      (h) => h !== 'isAxiosError',
    ),
    he.call(d, n.message, i, o, s, a),
    (d.cause = n),
    (d.name = n.name),
    f && Object.assign(d, f),
    d
  );
};
const Pg = null;
function da(n) {
  return F.isPlainObject(n) || F.isArray(n);
}
function e0(n) {
  return F.endsWith(n, '[]') ? n.slice(0, -2) : n;
}
function Qd(n, i, o) {
  return n
    ? n
        .concat(i)
        .map(function (a, f) {
          return (a = e0(a)), !o && f ? '[' + a + ']' : a;
        })
        .join(o ? '.' : '')
    : i;
}
function Tg(n) {
  return F.isArray(n) && !n.some(da);
}
const Ng = F.toFlatObject(F, {}, null, function (i) {
  return /^is[A-Z]/.test(i);
});
function Ul(n, i, o) {
  if (!F.isObject(n)) throw new TypeError('target must be an object');
  (i = i || new FormData()),
    (o = F.toFlatObject(
      o,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (A, x) {
        return !F.isUndefined(x[A]);
      },
    ));
  const s = o.metaTokens,
    a = o.visitor || g,
    f = o.dots,
    d = o.indexes,
    m = (o.Blob || (typeof Blob < 'u' && Blob)) && F.isSpecCompliantForm(i);
  if (!F.isFunction(a)) throw new TypeError('visitor must be a function');
  function y(E) {
    if (E === null) return '';
    if (F.isDate(E)) return E.toISOString();
    if (!m && F.isBlob(E))
      throw new he('Blob is not supported. Use a Buffer instead.');
    return F.isArrayBuffer(E) || F.isTypedArray(E)
      ? m && typeof Blob == 'function'
        ? new Blob([E])
        : Buffer.from(E)
      : E;
  }
  function g(E, A, x) {
    let D = E;
    if (E && !x && typeof E == 'object') {
      if (F.endsWith(A, '{}'))
        (A = s ? A : A.slice(0, -2)), (E = JSON.stringify(E));
      else if (
        (F.isArray(E) && Tg(E)) ||
        ((F.isFileList(E) || F.endsWith(A, '[]')) && (D = F.toArray(E)))
      )
        return (
          (A = e0(A)),
          D.forEach(function (I, W) {
            !(F.isUndefined(I) || I === null) &&
              i.append(
                d === !0 ? Qd([A], W, f) : d === null ? A : A + '[]',
                y(I),
              );
          }),
          !1
        );
    }
    return da(E) ? !0 : (i.append(Qd(x, A, f), y(E)), !1);
  }
  const w = [],
    C = Object.assign(Ng, {
      defaultVisitor: g,
      convertValue: y,
      isVisitable: da,
    });
  function N(E, A) {
    if (!F.isUndefined(E)) {
      if (w.indexOf(E) !== -1)
        throw Error('Circular reference detected in ' + A.join('.'));
      w.push(E),
        F.forEach(E, function (D, j) {
          (!(F.isUndefined(D) || D === null) &&
            a.call(i, D, F.isString(j) ? j.trim() : j, A, C)) === !0 &&
            N(D, A ? A.concat(j) : [j]);
        }),
        w.pop();
    }
  }
  if (!F.isObject(n)) throw new TypeError('data must be an object');
  return N(n), i;
}
function Jd(n) {
  const i = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (s) {
    return i[s];
  });
}
function za(n, i) {
  (this._pairs = []), n && Ul(n, this, i);
}
const t0 = za.prototype;
t0.append = function (i, o) {
  this._pairs.push([i, o]);
};
t0.toString = function (i) {
  const o = i
    ? function (s) {
        return i.call(this, s, Jd);
      }
    : Jd;
  return this._pairs
    .map(function (a) {
      return o(a[0]) + '=' + o(a[1]);
    }, '')
    .join('&');
};
function Og(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function n0(n, i, o) {
  if (!i) return n;
  const s = (o && o.encode) || Og;
  F.isFunction(o) && (o = { serialize: o });
  const a = o && o.serialize;
  let f;
  if (
    (a
      ? (f = a(i, o))
      : (f = F.isURLSearchParams(i) ? i.toString() : new za(i, o).toString(s)),
    f)
  ) {
    const d = n.indexOf('#');
    d !== -1 && (n = n.slice(0, d)),
      (n += (n.indexOf('?') === -1 ? '?' : '&') + f);
  }
  return n;
}
class Xd {
  constructor() {
    this.handlers = [];
  }
  use(i, o, s) {
    return (
      this.handlers.push({
        fulfilled: i,
        rejected: o,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(i) {
    F.forEach(this.handlers, function (s) {
      s !== null && i(s);
    });
  }
}
const r0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Lg = typeof URLSearchParams < 'u' ? URLSearchParams : za,
  Ag = typeof FormData < 'u' ? FormData : null,
  Fg = typeof Blob < 'u' ? Blob : null,
  Dg = {
    isBrowser: !0,
    classes: { URLSearchParams: Lg, FormData: Ag, Blob: Fg },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  ja = typeof window < 'u' && typeof document < 'u',
  pa = (typeof navigator == 'object' && navigator) || void 0,
  zg =
    ja &&
    (!pa || ['ReactNative', 'NativeScript', 'NS'].indexOf(pa.product) < 0),
  jg =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  Mg = (ja && window.location.href) || 'http://localhost',
  Ig = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: ja,
        hasStandardBrowserEnv: zg,
        hasStandardBrowserWebWorkerEnv: jg,
        navigator: pa,
        origin: Mg,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  ft = { ...Ig, ...Dg };
function Ug(n, i) {
  return Ul(
    n,
    new ft.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (o, s, a, f) {
          return ft.isNode && F.isBuffer(o)
            ? (this.append(s, o.toString('base64')), !1)
            : f.defaultVisitor.apply(this, arguments);
        },
      },
      i,
    ),
  );
}
function Bg(n) {
  return F.matchAll(/\w+|\[(\w*)]/g, n).map((i) =>
    i[0] === '[]' ? '' : i[1] || i[0],
  );
}
function Vg(n) {
  const i = {},
    o = Object.keys(n);
  let s;
  const a = o.length;
  let f;
  for (s = 0; s < a; s++) (f = o[s]), (i[f] = n[f]);
  return i;
}
function i0(n) {
  function i(o, s, a, f) {
    let d = o[f++];
    if (d === '__proto__') return !0;
    const h = Number.isFinite(+d),
      m = f >= o.length;
    return (
      (d = !d && F.isArray(a) ? a.length : d),
      m
        ? (F.hasOwnProp(a, d) ? (a[d] = [a[d], s]) : (a[d] = s), !h)
        : ((!a[d] || !F.isObject(a[d])) && (a[d] = []),
          i(o, s, a[d], f) && F.isArray(a[d]) && (a[d] = Vg(a[d])),
          !h)
    );
  }
  if (F.isFormData(n) && F.isFunction(n.entries)) {
    const o = {};
    return (
      F.forEachEntry(n, (s, a) => {
        i(Bg(s), a, o, 0);
      }),
      o
    );
  }
  return null;
}
function $g(n, i, o) {
  if (F.isString(n))
    try {
      return (i || JSON.parse)(n), F.trim(n);
    } catch (s) {
      if (s.name !== 'SyntaxError') throw s;
    }
  return (o || JSON.stringify)(n);
}
const Qi = {
  transitional: r0,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (i, o) {
      const s = o.getContentType() || '',
        a = s.indexOf('application/json') > -1,
        f = F.isObject(i);
      if ((f && F.isHTMLForm(i) && (i = new FormData(i)), F.isFormData(i)))
        return a ? JSON.stringify(i0(i)) : i;
      if (
        F.isArrayBuffer(i) ||
        F.isBuffer(i) ||
        F.isStream(i) ||
        F.isFile(i) ||
        F.isBlob(i) ||
        F.isReadableStream(i)
      )
        return i;
      if (F.isArrayBufferView(i)) return i.buffer;
      if (F.isURLSearchParams(i))
        return (
          o.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          i.toString()
        );
      let h;
      if (f) {
        if (s.indexOf('application/x-www-form-urlencoded') > -1)
          return Ug(i, this.formSerializer).toString();
        if ((h = F.isFileList(i)) || s.indexOf('multipart/form-data') > -1) {
          const m = this.env && this.env.FormData;
          return Ul(
            h ? { 'files[]': i } : i,
            m && new m(),
            this.formSerializer,
          );
        }
      }
      return f || a ? (o.setContentType('application/json', !1), $g(i)) : i;
    },
  ],
  transformResponse: [
    function (i) {
      const o = this.transitional || Qi.transitional,
        s = o && o.forcedJSONParsing,
        a = this.responseType === 'json';
      if (F.isResponse(i) || F.isReadableStream(i)) return i;
      if (i && F.isString(i) && ((s && !this.responseType) || a)) {
        const d = !(o && o.silentJSONParsing) && a;
        try {
          return JSON.parse(i);
        } catch (h) {
          if (d)
            throw h.name === 'SyntaxError'
              ? he.from(h, he.ERR_BAD_RESPONSE, this, null, this.response)
              : h;
        }
      }
      return i;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ft.classes.FormData, Blob: ft.classes.Blob },
  validateStatus: function (i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
F.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (n) => {
  Qi.headers[n] = {};
});
const Hg = F.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  bg = (n) => {
    const i = {};
    let o, s, a;
    return (
      n &&
        n
          .split(
            `
`,
          )
          .forEach(function (d) {
            (a = d.indexOf(':')),
              (o = d.substring(0, a).trim().toLowerCase()),
              (s = d.substring(a + 1).trim()),
              !(!o || (i[o] && Hg[o])) &&
                (o === 'set-cookie'
                  ? i[o]
                    ? i[o].push(s)
                    : (i[o] = [s])
                  : (i[o] = i[o] ? i[o] + ', ' + s : s));
          }),
      i
    );
  },
  Yd = Symbol('internals');
function Di(n) {
  return n && String(n).trim().toLowerCase();
}
function yl(n) {
  return n === !1 || n == null ? n : F.isArray(n) ? n.map(yl) : String(n);
}
function Wg(n) {
  const i = Object.create(null),
    o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = o.exec(n)); ) i[s[1]] = s[2];
  return i;
}
const qg = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Yu(n, i, o, s, a) {
  if (F.isFunction(s)) return s.call(this, i, o);
  if ((a && (i = o), !!F.isString(i))) {
    if (F.isString(s)) return i.indexOf(s) !== -1;
    if (F.isRegExp(s)) return s.test(i);
  }
}
function Kg(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (i, o, s) => o.toUpperCase() + s);
}
function Qg(n, i) {
  const o = F.toCamelCase(' ' + i);
  ['get', 'set', 'has'].forEach((s) => {
    Object.defineProperty(n, s + o, {
      value: function (a, f, d) {
        return this[s].call(this, i, a, f, d);
      },
      configurable: !0,
    });
  });
}
let xt = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, o, s) {
    const a = this;
    function f(h, m, y) {
      const g = Di(m);
      if (!g) throw new Error('header name must be a non-empty string');
      const w = F.findKey(a, g);
      (!w || a[w] === void 0 || y === !0 || (y === void 0 && a[w] !== !1)) &&
        (a[w || m] = yl(h));
    }
    const d = (h, m) => F.forEach(h, (y, g) => f(y, g, m));
    if (F.isPlainObject(i) || i instanceof this.constructor) d(i, o);
    else if (F.isString(i) && (i = i.trim()) && !qg(i)) d(bg(i), o);
    else if (F.isHeaders(i)) for (const [h, m] of i.entries()) f(m, h, s);
    else i != null && f(o, i, s);
    return this;
  }
  get(i, o) {
    if (((i = Di(i)), i)) {
      const s = F.findKey(this, i);
      if (s) {
        const a = this[s];
        if (!o) return a;
        if (o === !0) return Wg(a);
        if (F.isFunction(o)) return o.call(this, a, s);
        if (F.isRegExp(o)) return o.exec(a);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(i, o) {
    if (((i = Di(i)), i)) {
      const s = F.findKey(this, i);
      return !!(s && this[s] !== void 0 && (!o || Yu(this, this[s], s, o)));
    }
    return !1;
  }
  delete(i, o) {
    const s = this;
    let a = !1;
    function f(d) {
      if (((d = Di(d)), d)) {
        const h = F.findKey(s, d);
        h && (!o || Yu(s, s[h], h, o)) && (delete s[h], (a = !0));
      }
    }
    return F.isArray(i) ? i.forEach(f) : f(i), a;
  }
  clear(i) {
    const o = Object.keys(this);
    let s = o.length,
      a = !1;
    for (; s--; ) {
      const f = o[s];
      (!i || Yu(this, this[f], f, i, !0)) && (delete this[f], (a = !0));
    }
    return a;
  }
  normalize(i) {
    const o = this,
      s = {};
    return (
      F.forEach(this, (a, f) => {
        const d = F.findKey(s, f);
        if (d) {
          (o[d] = yl(a)), delete o[f];
          return;
        }
        const h = i ? Kg(f) : String(f).trim();
        h !== f && delete o[f], (o[h] = yl(a)), (s[h] = !0);
      }),
      this
    );
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const o = Object.create(null);
    return (
      F.forEach(this, (s, a) => {
        s != null && s !== !1 && (o[a] = i && F.isArray(s) ? s.join(', ') : s);
      }),
      o
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, o]) => i + ': ' + o).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...o) {
    const s = new this(i);
    return o.forEach((a) => s.set(a)), s;
  }
  static accessor(i) {
    const s = (this[Yd] = this[Yd] = { accessors: {} }).accessors,
      a = this.prototype;
    function f(d) {
      const h = Di(d);
      s[h] || (Qg(a, d), (s[h] = !0));
    }
    return F.isArray(i) ? i.forEach(f) : f(i), this;
  }
};
xt.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
F.reduceDescriptors(xt.prototype, ({ value: n }, i) => {
  let o = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(s) {
      this[o] = s;
    },
  };
});
F.freezeMethods(xt);
function Gu(n, i) {
  const o = this || Qi,
    s = i || o,
    a = xt.from(s.headers);
  let f = s.data;
  return (
    F.forEach(n, function (h) {
      f = h.call(o, f, a.normalize(), i ? i.status : void 0);
    }),
    a.normalize(),
    f
  );
}
function o0(n) {
  return !!(n && n.__CANCEL__);
}
function Kr(n, i, o) {
  he.call(this, n ?? 'canceled', he.ERR_CANCELED, i, o),
    (this.name = 'CanceledError');
}
F.inherits(Kr, he, { __CANCEL__: !0 });
function l0(n, i, o) {
  const s = o.config.validateStatus;
  !o.status || !s || s(o.status)
    ? n(o)
    : i(
        new he(
          'Request failed with status code ' + o.status,
          [he.ERR_BAD_REQUEST, he.ERR_BAD_RESPONSE][
            Math.floor(o.status / 100) - 4
          ],
          o.config,
          o.request,
          o,
        ),
      );
}
function Jg(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (i && i[1]) || '';
}
function Xg(n, i) {
  n = n || 10;
  const o = new Array(n),
    s = new Array(n);
  let a = 0,
    f = 0,
    d;
  return (
    (i = i !== void 0 ? i : 1e3),
    function (m) {
      const y = Date.now(),
        g = s[f];
      d || (d = y), (o[a] = m), (s[a] = y);
      let w = f,
        C = 0;
      for (; w !== a; ) (C += o[w++]), (w = w % n);
      if (((a = (a + 1) % n), a === f && (f = (f + 1) % n), y - d < i)) return;
      const N = g && y - g;
      return N ? Math.round((C * 1e3) / N) : void 0;
    }
  );
}
function Yg(n, i) {
  let o = 0,
    s = 1e3 / i,
    a,
    f;
  const d = (y, g = Date.now()) => {
    (o = g), (a = null), f && (clearTimeout(f), (f = null)), n.apply(null, y);
  };
  return [
    (...y) => {
      const g = Date.now(),
        w = g - o;
      w >= s
        ? d(y, g)
        : ((a = y),
          f ||
            (f = setTimeout(() => {
              (f = null), d(a);
            }, s - w)));
    },
    () => a && d(a),
  ];
}
const _l = (n, i, o = 3) => {
    let s = 0;
    const a = Xg(50, 250);
    return Yg((f) => {
      const d = f.loaded,
        h = f.lengthComputable ? f.total : void 0,
        m = d - s,
        y = a(m),
        g = d <= h;
      s = d;
      const w = {
        loaded: d,
        total: h,
        progress: h ? d / h : void 0,
        bytes: m,
        rate: y || void 0,
        estimated: y && h && g ? (h - d) / y : void 0,
        event: f,
        lengthComputable: h != null,
        [i ? 'download' : 'upload']: !0,
      };
      n(w);
    }, o);
  },
  Gd = (n, i) => {
    const o = n != null;
    return [(s) => i[0]({ lengthComputable: o, total: n, loaded: s }), i[1]];
  },
  Zd =
    (n) =>
    (...i) =>
      F.asap(() => n(...i)),
  Gg = ft.hasStandardBrowserEnv
    ? ((n, i) => (o) => (
        (o = new URL(o, ft.origin)),
        n.protocol === o.protocol &&
          n.host === o.host &&
          (i || n.port === o.port)
      ))(
        new URL(ft.origin),
        ft.navigator && /(msie|trident)/i.test(ft.navigator.userAgent),
      )
    : () => !0,
  Zg = ft.hasStandardBrowserEnv
    ? {
        write(n, i, o, s, a, f) {
          const d = [n + '=' + encodeURIComponent(i)];
          F.isNumber(o) && d.push('expires=' + new Date(o).toGMTString()),
            F.isString(s) && d.push('path=' + s),
            F.isString(a) && d.push('domain=' + a),
            f === !0 && d.push('secure'),
            (document.cookie = d.join('; '));
        },
        read(n) {
          const i = document.cookie.match(
            new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'),
          );
          return i ? decodeURIComponent(i[3]) : null;
        },
        remove(n) {
          this.write(n, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function ev(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function tv(n, i) {
  return i ? n.replace(/\/?\/$/, '') + '/' + i.replace(/^\/+/, '') : n;
}
function s0(n, i, o) {
  let s = !ev(i);
  return (n && s) || o == !1 ? tv(n, i) : i;
}
const ep = (n) => (n instanceof xt ? { ...n } : n);
function fr(n, i) {
  i = i || {};
  const o = {};
  function s(y, g, w, C) {
    return F.isPlainObject(y) && F.isPlainObject(g)
      ? F.merge.call({ caseless: C }, y, g)
      : F.isPlainObject(g)
        ? F.merge({}, g)
        : F.isArray(g)
          ? g.slice()
          : g;
  }
  function a(y, g, w, C) {
    if (F.isUndefined(g)) {
      if (!F.isUndefined(y)) return s(void 0, y, w, C);
    } else return s(y, g, w, C);
  }
  function f(y, g) {
    if (!F.isUndefined(g)) return s(void 0, g);
  }
  function d(y, g) {
    if (F.isUndefined(g)) {
      if (!F.isUndefined(y)) return s(void 0, y);
    } else return s(void 0, g);
  }
  function h(y, g, w) {
    if (w in i) return s(y, g);
    if (w in n) return s(void 0, y);
  }
  const m = {
    url: f,
    method: f,
    data: f,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    withXSRFToken: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    responseEncoding: d,
    validateStatus: h,
    headers: (y, g, w) => a(ep(y), ep(g), w, !0),
  };
  return (
    F.forEach(Object.keys(Object.assign({}, n, i)), function (g) {
      const w = m[g] || a,
        C = w(n[g], i[g], g);
      (F.isUndefined(C) && w !== h) || (o[g] = C);
    }),
    o
  );
}
const u0 = (n) => {
    const i = fr({}, n);
    let {
      data: o,
      withXSRFToken: s,
      xsrfHeaderName: a,
      xsrfCookieName: f,
      headers: d,
      auth: h,
    } = i;
    (i.headers = d = xt.from(d)),
      (i.url = n0(s0(i.baseURL, i.url), n.params, n.paramsSerializer)),
      h &&
        d.set(
          'Authorization',
          'Basic ' +
            btoa(
              (h.username || '') +
                ':' +
                (h.password ? unescape(encodeURIComponent(h.password)) : ''),
            ),
        );
    let m;
    if (F.isFormData(o)) {
      if (ft.hasStandardBrowserEnv || ft.hasStandardBrowserWebWorkerEnv)
        d.setContentType(void 0);
      else if ((m = d.getContentType()) !== !1) {
        const [y, ...g] = m
          ? m
              .split(';')
              .map((w) => w.trim())
              .filter(Boolean)
          : [];
        d.setContentType([y || 'multipart/form-data', ...g].join('; '));
      }
    }
    if (
      ft.hasStandardBrowserEnv &&
      (s && F.isFunction(s) && (s = s(i)), s || (s !== !1 && Gg(i.url)))
    ) {
      const y = a && f && Zg.read(f);
      y && d.set(a, y);
    }
    return i;
  },
  nv = typeof XMLHttpRequest < 'u',
  rv =
    nv &&
    function (n) {
      return new Promise(function (o, s) {
        const a = u0(n);
        let f = a.data;
        const d = xt.from(a.headers).normalize();
        let { responseType: h, onUploadProgress: m, onDownloadProgress: y } = a,
          g,
          w,
          C,
          N,
          E;
        function A() {
          N && N(),
            E && E(),
            a.cancelToken && a.cancelToken.unsubscribe(g),
            a.signal && a.signal.removeEventListener('abort', g);
        }
        let x = new XMLHttpRequest();
        x.open(a.method.toUpperCase(), a.url, !0), (x.timeout = a.timeout);
        function D() {
          if (!x) return;
          const I = xt.from(
              'getAllResponseHeaders' in x && x.getAllResponseHeaders(),
            ),
            H = {
              data:
                !h || h === 'text' || h === 'json'
                  ? x.responseText
                  : x.response,
              status: x.status,
              statusText: x.statusText,
              headers: I,
              config: n,
              request: x,
            };
          l0(
            function (ce) {
              o(ce), A();
            },
            function (ce) {
              s(ce), A();
            },
            H,
          ),
            (x = null);
        }
        'onloadend' in x
          ? (x.onloadend = D)
          : (x.onreadystatechange = function () {
              !x ||
                x.readyState !== 4 ||
                (x.status === 0 &&
                  !(x.responseURL && x.responseURL.indexOf('file:') === 0)) ||
                setTimeout(D);
            }),
          (x.onabort = function () {
            x &&
              (s(new he('Request aborted', he.ECONNABORTED, n, x)), (x = null));
          }),
          (x.onerror = function () {
            s(new he('Network Error', he.ERR_NETWORK, n, x)), (x = null);
          }),
          (x.ontimeout = function () {
            let W = a.timeout
              ? 'timeout of ' + a.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const H = a.transitional || r0;
            a.timeoutErrorMessage && (W = a.timeoutErrorMessage),
              s(
                new he(
                  W,
                  H.clarifyTimeoutError ? he.ETIMEDOUT : he.ECONNABORTED,
                  n,
                  x,
                ),
              ),
              (x = null);
          }),
          f === void 0 && d.setContentType(null),
          'setRequestHeader' in x &&
            F.forEach(d.toJSON(), function (W, H) {
              x.setRequestHeader(H, W);
            }),
          F.isUndefined(a.withCredentials) ||
            (x.withCredentials = !!a.withCredentials),
          h && h !== 'json' && (x.responseType = a.responseType),
          y && (([C, E] = _l(y, !0)), x.addEventListener('progress', C)),
          m &&
            x.upload &&
            (([w, N] = _l(m)),
            x.upload.addEventListener('progress', w),
            x.upload.addEventListener('loadend', N)),
          (a.cancelToken || a.signal) &&
            ((g = (I) => {
              x &&
                (s(!I || I.type ? new Kr(null, n, x) : I),
                x.abort(),
                (x = null));
            }),
            a.cancelToken && a.cancelToken.subscribe(g),
            a.signal &&
              (a.signal.aborted ? g() : a.signal.addEventListener('abort', g)));
        const j = Jg(a.url);
        if (j && ft.protocols.indexOf(j) === -1) {
          s(new he('Unsupported protocol ' + j + ':', he.ERR_BAD_REQUEST, n));
          return;
        }
        x.send(f || null);
      });
    },
  iv = (n, i) => {
    const { length: o } = (n = n ? n.filter(Boolean) : []);
    if (i || o) {
      let s = new AbortController(),
        a;
      const f = function (y) {
        if (!a) {
          (a = !0), h();
          const g = y instanceof Error ? y : this.reason;
          s.abort(
            g instanceof he ? g : new Kr(g instanceof Error ? g.message : g),
          );
        }
      };
      let d =
        i &&
        setTimeout(() => {
          (d = null), f(new he(`timeout ${i} of ms exceeded`, he.ETIMEDOUT));
        }, i);
      const h = () => {
        n &&
          (d && clearTimeout(d),
          (d = null),
          n.forEach((y) => {
            y.unsubscribe
              ? y.unsubscribe(f)
              : y.removeEventListener('abort', f);
          }),
          (n = null));
      };
      n.forEach((y) => y.addEventListener('abort', f));
      const { signal: m } = s;
      return (m.unsubscribe = () => F.asap(h)), m;
    }
  },
  ov = function* (n, i) {
    let o = n.byteLength;
    if (o < i) {
      yield n;
      return;
    }
    let s = 0,
      a;
    for (; s < o; ) (a = s + i), yield n.slice(s, a), (s = a);
  },
  lv = async function* (n, i) {
    for await (const o of sv(n)) yield* ov(o, i);
  },
  sv = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n;
      return;
    }
    const i = n.getReader();
    try {
      for (;;) {
        const { done: o, value: s } = await i.read();
        if (o) break;
        yield s;
      }
    } finally {
      await i.cancel();
    }
  },
  tp = (n, i, o, s) => {
    const a = lv(n, i);
    let f = 0,
      d,
      h = (m) => {
        d || ((d = !0), s && s(m));
      };
    return new ReadableStream(
      {
        async pull(m) {
          try {
            const { done: y, value: g } = await a.next();
            if (y) {
              h(), m.close();
              return;
            }
            let w = g.byteLength;
            if (o) {
              let C = (f += w);
              o(C);
            }
            m.enqueue(new Uint8Array(g));
          } catch (y) {
            throw (h(y), y);
          }
        },
        cancel(m) {
          return h(m), a.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  Bl =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  a0 = Bl && typeof ReadableStream == 'function',
  uv =
    Bl &&
    (typeof TextEncoder == 'function'
      ? (
          (n) => (i) =>
            n.encode(i)
        )(new TextEncoder())
      : async (n) => new Uint8Array(await new Response(n).arrayBuffer())),
  c0 = (n, ...i) => {
    try {
      return !!n(...i);
    } catch {
      return !1;
    }
  },
  av =
    a0 &&
    c0(() => {
      let n = !1;
      const i = new Request(ft.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (n = !0), 'half';
        },
      }).headers.has('Content-Type');
      return n && !i;
    }),
  np = 64 * 1024,
  ha = a0 && c0(() => F.isReadableStream(new Response('').body)),
  El = { stream: ha && ((n) => n.body) };
Bl &&
  ((n) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((i) => {
      !El[i] &&
        (El[i] = F.isFunction(n[i])
          ? (o) => o[i]()
          : (o, s) => {
              throw new he(
                `Response type '${i}' is not supported`,
                he.ERR_NOT_SUPPORT,
                s,
              );
            });
    });
  })(new Response());
const cv = async (n) => {
    if (n == null) return 0;
    if (F.isBlob(n)) return n.size;
    if (F.isSpecCompliantForm(n))
      return (
        await new Request(ft.origin, { method: 'POST', body: n }).arrayBuffer()
      ).byteLength;
    if (F.isArrayBufferView(n) || F.isArrayBuffer(n)) return n.byteLength;
    if ((F.isURLSearchParams(n) && (n = n + ''), F.isString(n)))
      return (await uv(n)).byteLength;
  },
  fv = async (n, i) => {
    const o = F.toFiniteNumber(n.getContentLength());
    return o ?? cv(i);
  },
  dv =
    Bl &&
    (async (n) => {
      let {
        url: i,
        method: o,
        data: s,
        signal: a,
        cancelToken: f,
        timeout: d,
        onDownloadProgress: h,
        onUploadProgress: m,
        responseType: y,
        headers: g,
        withCredentials: w = 'same-origin',
        fetchOptions: C,
      } = u0(n);
      y = y ? (y + '').toLowerCase() : 'text';
      let N = iv([a, f && f.toAbortSignal()], d),
        E;
      const A =
        N &&
        N.unsubscribe &&
        (() => {
          N.unsubscribe();
        });
      let x;
      try {
        if (
          m &&
          av &&
          o !== 'get' &&
          o !== 'head' &&
          (x = await fv(g, s)) !== 0
        ) {
          let H = new Request(i, { method: 'POST', body: s, duplex: 'half' }),
            Z;
          if (
            (F.isFormData(s) &&
              (Z = H.headers.get('content-type')) &&
              g.setContentType(Z),
            H.body)
          ) {
            const [ce, ie] = Gd(x, _l(Zd(m)));
            s = tp(H.body, np, ce, ie);
          }
        }
        F.isString(w) || (w = w ? 'include' : 'omit');
        const D = 'credentials' in Request.prototype;
        E = new Request(i, {
          ...C,
          signal: N,
          method: o.toUpperCase(),
          headers: g.normalize().toJSON(),
          body: s,
          duplex: 'half',
          credentials: D ? w : void 0,
        });
        let j = await fetch(E);
        const I = ha && (y === 'stream' || y === 'response');
        if (ha && (h || (I && A))) {
          const H = {};
          ['status', 'statusText', 'headers'].forEach((me) => {
            H[me] = j[me];
          });
          const Z = F.toFiniteNumber(j.headers.get('content-length')),
            [ce, ie] = (h && Gd(Z, _l(Zd(h), !0))) || [];
          j = new Response(
            tp(j.body, np, ce, () => {
              ie && ie(), A && A();
            }),
            H,
          );
        }
        y = y || 'text';
        let W = await El[F.findKey(El, y) || 'text'](j, n);
        return (
          !I && A && A(),
          await new Promise((H, Z) => {
            l0(H, Z, {
              data: W,
              headers: xt.from(j.headers),
              status: j.status,
              statusText: j.statusText,
              config: n,
              request: E,
            });
          })
        );
      } catch (D) {
        throw (
          (A && A(),
          D && D.name === 'TypeError' && /fetch/i.test(D.message)
            ? Object.assign(new he('Network Error', he.ERR_NETWORK, n, E), {
                cause: D.cause || D,
              })
            : he.from(D, D && D.code, n, E))
        );
      }
    }),
  ma = { http: Pg, xhr: rv, fetch: dv };
F.forEach(ma, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, 'name', { value: i });
    } catch {}
    Object.defineProperty(n, 'adapterName', { value: i });
  }
});
const rp = (n) => `- ${n}`,
  pv = (n) => F.isFunction(n) || n === null || n === !1,
  f0 = {
    getAdapter: (n) => {
      n = F.isArray(n) ? n : [n];
      const { length: i } = n;
      let o, s;
      const a = {};
      for (let f = 0; f < i; f++) {
        o = n[f];
        let d;
        if (
          ((s = o),
          !pv(o) && ((s = ma[(d = String(o)).toLowerCase()]), s === void 0))
        )
          throw new he(`Unknown adapter '${d}'`);
        if (s) break;
        a[d || '#' + f] = s;
      }
      if (!s) {
        const f = Object.entries(a).map(
          ([h, m]) =>
            `adapter ${h} ` +
            (m === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        );
        let d = i
          ? f.length > 1
            ? `since :
` +
              f.map(rp).join(`
`)
            : ' ' + rp(f[0])
          : 'as no adapter specified';
        throw new he(
          'There is no suitable adapter to dispatch the request ' + d,
          'ERR_NOT_SUPPORT',
        );
      }
      return s;
    },
    adapters: ma,
  };
function Zu(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new Kr(null, n);
}
function ip(n) {
  return (
    Zu(n),
    (n.headers = xt.from(n.headers)),
    (n.data = Gu.call(n, n.transformRequest)),
    ['post', 'put', 'patch'].indexOf(n.method) !== -1 &&
      n.headers.setContentType('application/x-www-form-urlencoded', !1),
    f0
      .getAdapter(n.adapter || Qi.adapter)(n)
      .then(
        function (s) {
          return (
            Zu(n),
            (s.data = Gu.call(n, n.transformResponse, s)),
            (s.headers = xt.from(s.headers)),
            s
          );
        },
        function (s) {
          return (
            o0(s) ||
              (Zu(n),
              s &&
                s.response &&
                ((s.response.data = Gu.call(
                  n,
                  n.transformResponse,
                  s.response,
                )),
                (s.response.headers = xt.from(s.response.headers)))),
            Promise.reject(s)
          );
        },
      )
  );
}
const d0 = '1.8.1',
  Vl = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (n, i) => {
    Vl[n] = function (s) {
      return typeof s === n || 'a' + (i < 1 ? 'n ' : ' ') + n;
    };
  },
);
const op = {};
Vl.transitional = function (i, o, s) {
  function a(f, d) {
    return (
      '[Axios v' +
      d0 +
      "] Transitional option '" +
      f +
      "'" +
      d +
      (s ? '. ' + s : '')
    );
  }
  return (f, d, h) => {
    if (i === !1)
      throw new he(
        a(d, ' has been removed' + (o ? ' in ' + o : '')),
        he.ERR_DEPRECATED,
      );
    return (
      o &&
        !op[d] &&
        ((op[d] = !0),
        console.warn(
          a(
            d,
            ' has been deprecated since v' +
              o +
              ' and will be removed in the near future',
          ),
        )),
      i ? i(f, d, h) : !0
    );
  };
};
Vl.spelling = function (i) {
  return (o, s) => (console.warn(`${s} is likely a misspelling of ${i}`), !0);
};
function hv(n, i, o) {
  if (typeof n != 'object')
    throw new he('options must be an object', he.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(n);
  let a = s.length;
  for (; a-- > 0; ) {
    const f = s[a],
      d = i[f];
    if (d) {
      const h = n[f],
        m = h === void 0 || d(h, f, n);
      if (m !== !0)
        throw new he('option ' + f + ' must be ' + m, he.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0) throw new he('Unknown option ' + f, he.ERR_BAD_OPTION);
  }
}
const gl = { assertOptions: hv, validators: Vl },
  nn = gl.validators;
let cr = class {
  constructor(i) {
    (this.defaults = i),
      (this.interceptors = { request: new Xd(), response: new Xd() });
  }
  async request(i, o) {
    try {
      return await this._request(i, o);
    } catch (s) {
      if (s instanceof Error) {
        let a = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(a)
          : (a = new Error());
        const f = a.stack ? a.stack.replace(/^.+\n/, '') : '';
        try {
          s.stack
            ? f &&
              !String(s.stack).endsWith(f.replace(/^.+\n.+\n/, '')) &&
              (s.stack +=
                `
` + f)
            : (s.stack = f);
        } catch {}
      }
      throw s;
    }
  }
  _request(i, o) {
    typeof i == 'string' ? ((o = o || {}), (o.url = i)) : (o = i || {}),
      (o = fr(this.defaults, o));
    const { transitional: s, paramsSerializer: a, headers: f } = o;
    s !== void 0 &&
      gl.assertOptions(
        s,
        {
          silentJSONParsing: nn.transitional(nn.boolean),
          forcedJSONParsing: nn.transitional(nn.boolean),
          clarifyTimeoutError: nn.transitional(nn.boolean),
        },
        !1,
      ),
      a != null &&
        (F.isFunction(a)
          ? (o.paramsSerializer = { serialize: a })
          : gl.assertOptions(
              a,
              { encode: nn.function, serialize: nn.function },
              !0,
            )),
      o.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (o.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (o.allowAbsoluteUrls = !0)),
      gl.assertOptions(
        o,
        {
          baseUrl: nn.spelling('baseURL'),
          withXsrfToken: nn.spelling('withXSRFToken'),
        },
        !0,
      ),
      (o.method = (o.method || this.defaults.method || 'get').toLowerCase());
    let d = f && F.merge(f.common, f[o.method]);
    f &&
      F.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (E) => {
          delete f[E];
        },
      ),
      (o.headers = xt.concat(d, f));
    const h = [];
    let m = !0;
    this.interceptors.request.forEach(function (A) {
      (typeof A.runWhen == 'function' && A.runWhen(o) === !1) ||
        ((m = m && A.synchronous), h.unshift(A.fulfilled, A.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function (A) {
      y.push(A.fulfilled, A.rejected);
    });
    let g,
      w = 0,
      C;
    if (!m) {
      const E = [ip.bind(this), void 0];
      for (
        E.unshift.apply(E, h),
          E.push.apply(E, y),
          C = E.length,
          g = Promise.resolve(o);
        w < C;

      )
        g = g.then(E[w++], E[w++]);
      return g;
    }
    C = h.length;
    let N = o;
    for (w = 0; w < C; ) {
      const E = h[w++],
        A = h[w++];
      try {
        N = E(N);
      } catch (x) {
        A.call(this, x);
        break;
      }
    }
    try {
      g = ip.call(this, N);
    } catch (E) {
      return Promise.reject(E);
    }
    for (w = 0, C = y.length; w < C; ) g = g.then(y[w++], y[w++]);
    return g;
  }
  getUri(i) {
    i = fr(this.defaults, i);
    const o = s0(i.baseURL, i.url, i.allowAbsoluteUrls);
    return n0(o, i.params, i.paramsSerializer);
  }
};
F.forEach(['delete', 'get', 'head', 'options'], function (i) {
  cr.prototype[i] = function (o, s) {
    return this.request(
      fr(s || {}, { method: i, url: o, data: (s || {}).data }),
    );
  };
});
F.forEach(['post', 'put', 'patch'], function (i) {
  function o(s) {
    return function (f, d, h) {
      return this.request(
        fr(h || {}, {
          method: i,
          headers: s ? { 'Content-Type': 'multipart/form-data' } : {},
          url: f,
          data: d,
        }),
      );
    };
  }
  (cr.prototype[i] = o()), (cr.prototype[i + 'Form'] = o(!0));
});
let mv = class p0 {
  constructor(i) {
    if (typeof i != 'function')
      throw new TypeError('executor must be a function.');
    let o;
    this.promise = new Promise(function (f) {
      o = f;
    });
    const s = this;
    this.promise.then((a) => {
      if (!s._listeners) return;
      let f = s._listeners.length;
      for (; f-- > 0; ) s._listeners[f](a);
      s._listeners = null;
    }),
      (this.promise.then = (a) => {
        let f;
        const d = new Promise((h) => {
          s.subscribe(h), (f = h);
        }).then(a);
        return (
          (d.cancel = function () {
            s.unsubscribe(f);
          }),
          d
        );
      }),
      i(function (f, d, h) {
        s.reason || ((s.reason = new Kr(f, d, h)), o(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : (this._listeners = [i]);
  }
  unsubscribe(i) {
    if (!this._listeners) return;
    const o = this._listeners.indexOf(i);
    o !== -1 && this._listeners.splice(o, 1);
  }
  toAbortSignal() {
    const i = new AbortController(),
      o = (s) => {
        i.abort(s);
      };
    return (
      this.subscribe(o),
      (i.signal.unsubscribe = () => this.unsubscribe(o)),
      i.signal
    );
  }
  static source() {
    let i;
    return {
      token: new p0(function (a) {
        i = a;
      }),
      cancel: i,
    };
  }
};
function yv(n) {
  return function (o) {
    return n.apply(null, o);
  };
}
function gv(n) {
  return F.isObject(n) && n.isAxiosError === !0;
}
const ya = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ya).forEach(([n, i]) => {
  ya[i] = n;
});
function h0(n) {
  const i = new cr(n),
    o = Wp(cr.prototype.request, i);
  return (
    F.extend(o, cr.prototype, i, { allOwnKeys: !0 }),
    F.extend(o, i, null, { allOwnKeys: !0 }),
    (o.create = function (a) {
      return h0(fr(n, a));
    }),
    o
  );
}
const He = h0(Qi);
He.Axios = cr;
He.CanceledError = Kr;
He.CancelToken = mv;
He.isCancel = o0;
He.VERSION = d0;
He.toFormData = Ul;
He.AxiosError = he;
He.Cancel = He.CanceledError;
He.all = function (i) {
  return Promise.all(i);
};
He.spread = yv;
He.isAxiosError = gv;
He.mergeConfig = fr;
He.AxiosHeaders = xt;
He.formToJSON = (n) => i0(F.isHTMLForm(n) ? new FormData(n) : n);
He.getAdapter = f0.getAdapter;
He.HttpStatusCode = ya;
He.default = He;
const {
    Axios: iw,
    AxiosError: ow,
    CanceledError: lw,
    isCancel: sw,
    CancelToken: uw,
    VERSION: aw,
    all: cw,
    Cancel: fw,
    isAxiosError: dw,
    spread: pw,
    toFormData: hw,
    AxiosHeaders: mw,
    HttpStatusCode: yw,
    formToJSON: gw,
    getAdapter: vw,
    mergeConfig: ww,
  } = He,
  m0 = '',
  y0 = async (n, i, o, s) => {
    var a, f;
    if (o !== s) throw new Error('Пароли не совпадают');
    try {
      const d = await He.post(`${m0}/register`, {
        name: n,
        email: i,
        password: o,
      });
      if (d.data.token) return d.data.token;
      throw new Error('Не удалось зарегистрировать пользователя');
    } catch (d) {
      throw new Error(
        ((f = (a = d.response) == null ? void 0 : a.data) == null
          ? void 0
          : f.message) || 'Ошибка при регистрации',
      );
    }
  },
  $l = async (n, i) => {
    var o, s;
    try {
      const a = await He.post(`${m0}/login`, { email: n, password: i });
      if (a.data.token) return { token: a.data.token };
      throw new Error('Неверный email или пароль');
    } catch (a) {
      throw new Error(
        ((s = (o = a.response) == null ? void 0 : o.data) == null
          ? void 0
          : s.message) || 'Ошибка при входе',
      );
    }
  };
function lt(n) {
  return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var vv = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  lp = vv,
  ea = () => Math.random().toString(36).substring(7).split('').join('.'),
  wv = {
    INIT: `@@redux/INIT${ea()}`,
    REPLACE: `@@redux/REPLACE${ea()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ea()}`,
  },
  xl = wv;
function Ma(n) {
  if (typeof n != 'object' || n === null) return !1;
  let i = n;
  for (; Object.getPrototypeOf(i) !== null; ) i = Object.getPrototypeOf(i);
  return Object.getPrototypeOf(n) === i || Object.getPrototypeOf(n) === null;
}
function g0(n, i, o) {
  if (typeof n != 'function') throw new Error(lt(2));
  if (
    (typeof i == 'function' && typeof o == 'function') ||
    (typeof o == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(lt(0));
  if (
    (typeof i == 'function' && typeof o > 'u' && ((o = i), (i = void 0)),
    typeof o < 'u')
  ) {
    if (typeof o != 'function') throw new Error(lt(1));
    return o(g0)(n, i);
  }
  let s = n,
    a = i,
    f = new Map(),
    d = f,
    h = 0,
    m = !1;
  function y() {
    d === f &&
      ((d = new Map()),
      f.forEach((x, D) => {
        d.set(D, x);
      }));
  }
  function g() {
    if (m) throw new Error(lt(3));
    return a;
  }
  function w(x) {
    if (typeof x != 'function') throw new Error(lt(4));
    if (m) throw new Error(lt(5));
    let D = !0;
    y();
    const j = h++;
    return (
      d.set(j, x),
      function () {
        if (D) {
          if (m) throw new Error(lt(6));
          (D = !1), y(), d.delete(j), (f = null);
        }
      }
    );
  }
  function C(x) {
    if (!Ma(x)) throw new Error(lt(7));
    if (typeof x.type > 'u') throw new Error(lt(8));
    if (typeof x.type != 'string') throw new Error(lt(17));
    if (m) throw new Error(lt(9));
    try {
      (m = !0), (a = s(a, x));
    } finally {
      m = !1;
    }
    return (
      (f = d).forEach((j) => {
        j();
      }),
      x
    );
  }
  function N(x) {
    if (typeof x != 'function') throw new Error(lt(10));
    (s = x), C({ type: xl.REPLACE });
  }
  function E() {
    const x = w;
    return {
      subscribe(D) {
        if (typeof D != 'object' || D === null) throw new Error(lt(11));
        function j() {
          const W = D;
          W.next && W.next(g());
        }
        return j(), { unsubscribe: x(j) };
      },
      [lp]() {
        return this;
      },
    };
  }
  return (
    C({ type: xl.INIT }),
    { dispatch: C, subscribe: w, getState: g, replaceReducer: N, [lp]: E }
  );
}
function Sv(n) {
  Object.keys(n).forEach((i) => {
    const o = n[i];
    if (typeof o(void 0, { type: xl.INIT }) > 'u') throw new Error(lt(12));
    if (typeof o(void 0, { type: xl.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(lt(13));
  });
}
function kv(n) {
  const i = Object.keys(n),
    o = {};
  for (let f = 0; f < i.length; f++) {
    const d = i[f];
    typeof n[d] == 'function' && (o[d] = n[d]);
  }
  const s = Object.keys(o);
  let a;
  try {
    Sv(o);
  } catch (f) {
    a = f;
  }
  return function (d = {}, h) {
    if (a) throw a;
    let m = !1;
    const y = {};
    for (let g = 0; g < s.length; g++) {
      const w = s[g],
        C = o[w],
        N = d[w],
        E = C(N, h);
      if (typeof E > 'u') throw (h && h.type, new Error(lt(14)));
      (y[w] = E), (m = m || E !== N);
    }
    return (m = m || s.length !== Object.keys(d).length), m ? y : d;
  };
}
function Cl(...n) {
  return n.length === 0
    ? (i) => i
    : n.length === 1
      ? n[0]
      : n.reduce(
          (i, o) =>
            (...s) =>
              i(o(...s)),
        );
}
function _v(...n) {
  return (i) => (o, s) => {
    const a = i(o, s);
    let f = () => {
      throw new Error(lt(15));
    };
    const d = { getState: a.getState, dispatch: (m, ...y) => f(m, ...y) },
      h = n.map((m) => m(d));
    return (f = Cl(...h)(a.dispatch)), { ...a, dispatch: f };
  };
}
function Ev(n) {
  return Ma(n) && 'type' in n && typeof n.type == 'string';
}
var v0 = Symbol.for('immer-nothing'),
  sp = Symbol.for('immer-draftable'),
  At = Symbol.for('immer-state');
function Qt(n, ...i) {
  throw new Error(
    `[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Hr = Object.getPrototypeOf;
function dr(n) {
  return !!n && !!n[At];
}
function _n(n) {
  var i;
  return n
    ? w0(n) ||
        Array.isArray(n) ||
        !!n[sp] ||
        !!((i = n.constructor) != null && i[sp]) ||
        bl(n) ||
        Wl(n)
    : !1;
}
var xv = Object.prototype.constructor.toString();
function w0(n) {
  if (!n || typeof n != 'object') return !1;
  const i = Hr(n);
  if (i === null) return !0;
  const o = Object.hasOwnProperty.call(i, 'constructor') && i.constructor;
  return o === Object
    ? !0
    : typeof o == 'function' && Function.toString.call(o) === xv;
}
function Rl(n, i) {
  Hl(n) === 0
    ? Reflect.ownKeys(n).forEach((o) => {
        i(o, n[o], n);
      })
    : n.forEach((o, s) => i(s, o, n));
}
function Hl(n) {
  const i = n[At];
  return i ? i.type_ : Array.isArray(n) ? 1 : bl(n) ? 2 : Wl(n) ? 3 : 0;
}
function ga(n, i) {
  return Hl(n) === 2 ? n.has(i) : Object.prototype.hasOwnProperty.call(n, i);
}
function S0(n, i, o) {
  const s = Hl(n);
  s === 2 ? n.set(i, o) : s === 3 ? n.add(o) : (n[i] = o);
}
function Cv(n, i) {
  return n === i ? n !== 0 || 1 / n === 1 / i : n !== n && i !== i;
}
function bl(n) {
  return n instanceof Map;
}
function Wl(n) {
  return n instanceof Set;
}
function sr(n) {
  return n.copy_ || n.base_;
}
function va(n, i) {
  if (bl(n)) return new Map(n);
  if (Wl(n)) return new Set(n);
  if (Array.isArray(n)) return Array.prototype.slice.call(n);
  const o = w0(n);
  if (i === !0 || (i === 'class_only' && !o)) {
    const s = Object.getOwnPropertyDescriptors(n);
    delete s[At];
    let a = Reflect.ownKeys(s);
    for (let f = 0; f < a.length; f++) {
      const d = a[f],
        h = s[d];
      h.writable === !1 && ((h.writable = !0), (h.configurable = !0)),
        (h.get || h.set) &&
          (s[d] = {
            configurable: !0,
            writable: !0,
            enumerable: h.enumerable,
            value: n[d],
          });
    }
    return Object.create(Hr(n), s);
  } else {
    const s = Hr(n);
    if (s !== null && o) return { ...n };
    const a = Object.create(s);
    return Object.assign(a, n);
  }
}
function Ia(n, i = !1) {
  return (
    ql(n) ||
      dr(n) ||
      !_n(n) ||
      (Hl(n) > 1 && (n.set = n.add = n.clear = n.delete = Rv),
      Object.freeze(n),
      i && Object.entries(n).forEach(([o, s]) => Ia(s, !0))),
    n
  );
}
function Rv() {
  Qt(2);
}
function ql(n) {
  return Object.isFrozen(n);
}
var Pv = {};
function pr(n) {
  const i = Pv[n];
  return i || Qt(0, n), i;
}
var $i;
function k0() {
  return $i;
}
function Tv(n, i) {
  return {
    drafts_: [],
    parent_: n,
    immer_: i,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function up(n, i) {
  i &&
    (pr('Patches'),
    (n.patches_ = []),
    (n.inversePatches_ = []),
    (n.patchListener_ = i));
}
function wa(n) {
  Sa(n), n.drafts_.forEach(Nv), (n.drafts_ = null);
}
function Sa(n) {
  n === $i && ($i = n.parent_);
}
function ap(n) {
  return ($i = Tv($i, n));
}
function Nv(n) {
  const i = n[At];
  i.type_ === 0 || i.type_ === 1 ? i.revoke_() : (i.revoked_ = !0);
}
function cp(n, i) {
  i.unfinalizedDrafts_ = i.drafts_.length;
  const o = i.drafts_[0];
  return (
    n !== void 0 && n !== o
      ? (o[At].modified_ && (wa(i), Qt(4)),
        _n(n) && ((n = Pl(i, n)), i.parent_ || Tl(i, n)),
        i.patches_ &&
          pr('Patches').generateReplacementPatches_(
            o[At].base_,
            n,
            i.patches_,
            i.inversePatches_,
          ))
      : (n = Pl(i, o, [])),
    wa(i),
    i.patches_ && i.patchListener_(i.patches_, i.inversePatches_),
    n !== v0 ? n : void 0
  );
}
function Pl(n, i, o) {
  if (ql(i)) return i;
  const s = i[At];
  if (!s) return Rl(i, (a, f) => fp(n, s, i, a, f, o)), i;
  if (s.scope_ !== n) return i;
  if (!s.modified_) return Tl(n, s.base_, !0), s.base_;
  if (!s.finalized_) {
    (s.finalized_ = !0), s.scope_.unfinalizedDrafts_--;
    const a = s.copy_;
    let f = a,
      d = !1;
    s.type_ === 3 && ((f = new Set(a)), a.clear(), (d = !0)),
      Rl(f, (h, m) => fp(n, s, a, h, m, o, d)),
      Tl(n, a, !1),
      o &&
        n.patches_ &&
        pr('Patches').generatePatches_(s, o, n.patches_, n.inversePatches_);
  }
  return s.copy_;
}
function fp(n, i, o, s, a, f, d) {
  if (dr(a)) {
    const h =
        f && i && i.type_ !== 3 && !ga(i.assigned_, s) ? f.concat(s) : void 0,
      m = Pl(n, a, h);
    if ((S0(o, s, m), dr(m))) n.canAutoFreeze_ = !1;
    else return;
  } else d && o.add(a);
  if (_n(a) && !ql(a)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) return;
    Pl(n, a),
      (!i || !i.scope_.parent_) &&
        typeof s != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(o, s) &&
        Tl(n, a);
  }
}
function Tl(n, i, o = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && Ia(i, o);
}
function Ov(n, i) {
  const o = Array.isArray(n),
    s = {
      type_: o ? 1 : 0,
      scope_: i ? i.scope_ : k0(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: i,
      base_: n,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let a = s,
    f = Ua;
  o && ((a = [s]), (f = Hi));
  const { revoke: d, proxy: h } = Proxy.revocable(a, f);
  return (s.draft_ = h), (s.revoke_ = d), h;
}
var Ua = {
    get(n, i) {
      if (i === At) return n;
      const o = sr(n);
      if (!ga(o, i)) return Lv(n, o, i);
      const s = o[i];
      return n.finalized_ || !_n(s)
        ? s
        : s === ta(n.base_, i)
          ? (na(n), (n.copy_[i] = _a(s, n)))
          : s;
    },
    has(n, i) {
      return i in sr(n);
    },
    ownKeys(n) {
      return Reflect.ownKeys(sr(n));
    },
    set(n, i, o) {
      const s = _0(sr(n), i);
      if (s != null && s.set) return s.set.call(n.draft_, o), !0;
      if (!n.modified_) {
        const a = ta(sr(n), i),
          f = a == null ? void 0 : a[At];
        if (f && f.base_ === o)
          return (n.copy_[i] = o), (n.assigned_[i] = !1), !0;
        if (Cv(o, a) && (o !== void 0 || ga(n.base_, i))) return !0;
        na(n), ka(n);
      }
      return (
        (n.copy_[i] === o && (o !== void 0 || i in n.copy_)) ||
          (Number.isNaN(o) && Number.isNaN(n.copy_[i])) ||
          ((n.copy_[i] = o), (n.assigned_[i] = !0)),
        !0
      );
    },
    deleteProperty(n, i) {
      return (
        ta(n.base_, i) !== void 0 || i in n.base_
          ? ((n.assigned_[i] = !1), na(n), ka(n))
          : delete n.assigned_[i],
        n.copy_ && delete n.copy_[i],
        !0
      );
    },
    getOwnPropertyDescriptor(n, i) {
      const o = sr(n),
        s = Reflect.getOwnPropertyDescriptor(o, i);
      return (
        s && {
          writable: !0,
          configurable: n.type_ !== 1 || i !== 'length',
          enumerable: s.enumerable,
          value: o[i],
        }
      );
    },
    defineProperty() {
      Qt(11);
    },
    getPrototypeOf(n) {
      return Hr(n.base_);
    },
    setPrototypeOf() {
      Qt(12);
    },
  },
  Hi = {};
Rl(Ua, (n, i) => {
  Hi[n] = function () {
    return (arguments[0] = arguments[0][0]), i.apply(this, arguments);
  };
});
Hi.deleteProperty = function (n, i) {
  return Hi.set.call(this, n, i, void 0);
};
Hi.set = function (n, i, o) {
  return Ua.set.call(this, n[0], i, o, n[0]);
};
function ta(n, i) {
  const o = n[At];
  return (o ? sr(o) : n)[i];
}
function Lv(n, i, o) {
  var a;
  const s = _0(i, o);
  return s
    ? 'value' in s
      ? s.value
      : (a = s.get) == null
        ? void 0
        : a.call(n.draft_)
    : void 0;
}
function _0(n, i) {
  if (!(i in n)) return;
  let o = Hr(n);
  for (; o; ) {
    const s = Object.getOwnPropertyDescriptor(o, i);
    if (s) return s;
    o = Hr(o);
  }
}
function ka(n) {
  n.modified_ || ((n.modified_ = !0), n.parent_ && ka(n.parent_));
}
function na(n) {
  n.copy_ || (n.copy_ = va(n.base_, n.scope_.immer_.useStrictShallowCopy_));
}
var Av = class {
  constructor(n) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (i, o, s) => {
        if (typeof i == 'function' && typeof o != 'function') {
          const f = o;
          o = i;
          const d = this;
          return function (m = f, ...y) {
            return d.produce(m, (g) => o.call(this, g, ...y));
          };
        }
        typeof o != 'function' && Qt(6),
          s !== void 0 && typeof s != 'function' && Qt(7);
        let a;
        if (_n(i)) {
          const f = ap(this),
            d = _a(i, void 0);
          let h = !0;
          try {
            (a = o(d)), (h = !1);
          } finally {
            h ? wa(f) : Sa(f);
          }
          return up(f, s), cp(a, f);
        } else if (!i || typeof i != 'object') {
          if (
            ((a = o(i)),
            a === void 0 && (a = i),
            a === v0 && (a = void 0),
            this.autoFreeze_ && Ia(a, !0),
            s)
          ) {
            const f = [],
              d = [];
            pr('Patches').generateReplacementPatches_(i, a, f, d), s(f, d);
          }
          return a;
        } else Qt(1, i);
      }),
      (this.produceWithPatches = (i, o) => {
        if (typeof i == 'function')
          return (d, ...h) => this.produceWithPatches(d, (m) => i(m, ...h));
        let s, a;
        return [
          this.produce(i, o, (d, h) => {
            (s = d), (a = h);
          }),
          s,
          a,
        ];
      }),
      typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' &&
        this.setAutoFreeze(n.autoFreeze),
      typeof (n == null ? void 0 : n.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(n.useStrictShallowCopy);
  }
  createDraft(n) {
    _n(n) || Qt(8), dr(n) && (n = Fv(n));
    const i = ap(this),
      o = _a(n, void 0);
    return (o[At].isManual_ = !0), Sa(i), o;
  }
  finishDraft(n, i) {
    const o = n && n[At];
    (!o || !o.isManual_) && Qt(9);
    const { scope_: s } = o;
    return up(s, i), cp(void 0, s);
  }
  setAutoFreeze(n) {
    this.autoFreeze_ = n;
  }
  setUseStrictShallowCopy(n) {
    this.useStrictShallowCopy_ = n;
  }
  applyPatches(n, i) {
    let o;
    for (o = i.length - 1; o >= 0; o--) {
      const a = i[o];
      if (a.path.length === 0 && a.op === 'replace') {
        n = a.value;
        break;
      }
    }
    o > -1 && (i = i.slice(o + 1));
    const s = pr('Patches').applyPatches_;
    return dr(n) ? s(n, i) : this.produce(n, (a) => s(a, i));
  }
};
function _a(n, i) {
  const o = bl(n)
    ? pr('MapSet').proxyMap_(n, i)
    : Wl(n)
      ? pr('MapSet').proxySet_(n, i)
      : Ov(n, i);
  return (i ? i.scope_ : k0()).drafts_.push(o), o;
}
function Fv(n) {
  return dr(n) || Qt(10, n), E0(n);
}
function E0(n) {
  if (!_n(n) || ql(n)) return n;
  const i = n[At];
  let o;
  if (i) {
    if (!i.modified_) return i.base_;
    (i.finalized_ = !0), (o = va(n, i.scope_.immer_.useStrictShallowCopy_));
  } else o = va(n, !0);
  return (
    Rl(o, (s, a) => {
      S0(o, s, E0(a));
    }),
    i && (i.finalized_ = !1),
    o
  );
}
var Ft = new Av(),
  x0 = Ft.produce;
Ft.produceWithPatches.bind(Ft);
Ft.setAutoFreeze.bind(Ft);
Ft.setUseStrictShallowCopy.bind(Ft);
Ft.applyPatches.bind(Ft);
Ft.createDraft.bind(Ft);
Ft.finishDraft.bind(Ft);
function C0(n) {
  return ({ dispatch: o, getState: s }) =>
    (a) =>
    (f) =>
      typeof f == 'function' ? f(o, s, n) : a(f);
}
var Dv = C0(),
  zv = C0,
  jv =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? Cl
              : Cl.apply(null, arguments);
        },
  Mv = (n) => n && typeof n.match == 'function';
function Ii(n, i) {
  function o(...s) {
    if (i) {
      let a = i(...s);
      if (!a) throw new Error(kn(0));
      return {
        type: n,
        payload: a.payload,
        ...('meta' in a && { meta: a.meta }),
        ...('error' in a && { error: a.error }),
      };
    }
    return { type: n, payload: s[0] };
  }
  return (
    (o.toString = () => `${n}`),
    (o.type = n),
    (o.match = (s) => Ev(s) && s.type === n),
    o
  );
}
var R0 = class Mi extends Array {
  constructor(...i) {
    super(...i), Object.setPrototypeOf(this, Mi.prototype);
  }
  static get [Symbol.species]() {
    return Mi;
  }
  concat(...i) {
    return super.concat.apply(this, i);
  }
  prepend(...i) {
    return i.length === 1 && Array.isArray(i[0])
      ? new Mi(...i[0].concat(this))
      : new Mi(...i.concat(this));
  }
};
function dp(n) {
  return _n(n) ? x0(n, () => {}) : n;
}
function pp(n, i, o) {
  return n.has(i) ? n.get(i) : n.set(i, o(i)).get(i);
}
function Iv(n) {
  return typeof n == 'boolean';
}
var Uv = () =>
    function (i) {
      const {
        thunk: o = !0,
        immutableCheck: s = !0,
        serializableCheck: a = !0,
        actionCreatorCheck: f = !0,
      } = i ?? {};
      let d = new R0();
      return o && (Iv(o) ? d.push(Dv) : d.push(zv(o.extraArgument))), d;
    },
  Bv = 'RTK_autoBatch',
  hp = (n) => (i) => {
    setTimeout(i, n);
  },
  Vv =
    (n = { type: 'raf' }) =>
    (i) =>
    (...o) => {
      const s = i(...o);
      let a = !0,
        f = !1,
        d = !1;
      const h = new Set(),
        m =
          n.type === 'tick'
            ? queueMicrotask
            : n.type === 'raf'
              ? typeof window < 'u' && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : hp(10)
              : n.type === 'callback'
                ? n.queueNotification
                : hp(n.timeout),
        y = () => {
          (d = !1), f && ((f = !1), h.forEach((g) => g()));
        };
      return Object.assign({}, s, {
        subscribe(g) {
          const w = () => a && g(),
            C = s.subscribe(w);
          return (
            h.add(g),
            () => {
              C(), h.delete(g);
            }
          );
        },
        dispatch(g) {
          var w;
          try {
            return (
              (a = !((w = g == null ? void 0 : g.meta) != null && w[Bv])),
              (f = !a),
              f && (d || ((d = !0), m(y))),
              s.dispatch(g)
            );
          } finally {
            a = !0;
          }
        },
      });
    },
  $v = (n) =>
    function (o) {
      const { autoBatch: s = !0 } = o ?? {};
      let a = new R0(n);
      return s && a.push(Vv(typeof s == 'object' ? s : void 0)), a;
    };
function Hv(n) {
  const i = Uv(),
    {
      reducer: o = void 0,
      middleware: s,
      devTools: a = !0,
      preloadedState: f = void 0,
      enhancers: d = void 0,
    } = n || {};
  let h;
  if (typeof o == 'function') h = o;
  else if (Ma(o)) h = kv(o);
  else throw new Error(kn(1));
  let m;
  typeof s == 'function' ? (m = s(i)) : (m = i());
  let y = Cl;
  a && (y = jv({ trace: !1, ...(typeof a == 'object' && a) }));
  const g = _v(...m),
    w = $v(g);
  let C = typeof d == 'function' ? d(w) : w();
  const N = y(...C);
  return g0(h, f, N);
}
function P0(n) {
  const i = {},
    o = [];
  let s;
  const a = {
    addCase(f, d) {
      const h = typeof f == 'string' ? f : f.type;
      if (!h) throw new Error(kn(28));
      if (h in i) throw new Error(kn(29));
      return (i[h] = d), a;
    },
    addMatcher(f, d) {
      return o.push({ matcher: f, reducer: d }), a;
    },
    addDefaultCase(f) {
      return (s = f), a;
    },
  };
  return n(a), [i, o, s];
}
function bv(n) {
  return typeof n == 'function';
}
function Wv(n, i) {
  let [o, s, a] = P0(i),
    f;
  if (bv(n)) f = () => dp(n());
  else {
    const h = dp(n);
    f = () => h;
  }
  function d(h = f(), m) {
    let y = [
      o[m.type],
      ...s.filter(({ matcher: g }) => g(m)).map(({ reducer: g }) => g),
    ];
    return (
      y.filter((g) => !!g).length === 0 && (y = [a]),
      y.reduce((g, w) => {
        if (w)
          if (dr(g)) {
            const N = w(g, m);
            return N === void 0 ? g : N;
          } else {
            if (_n(g)) return x0(g, (C) => w(C, m));
            {
              const C = w(g, m);
              if (C === void 0) {
                if (g === null) return g;
                throw Error(
                  'A case reducer on a non-draftable value must not return undefined',
                );
              }
              return C;
            }
          }
        return g;
      }, h)
    );
  }
  return (d.getInitialState = f), d;
}
var qv = (n, i) => (Mv(n) ? n.match(i) : n(i));
function Kv(...n) {
  return (i) => n.some((o) => qv(o, i));
}
var Qv = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  Jv = (n = 21) => {
    let i = '',
      o = n;
    for (; o--; ) i += Qv[(Math.random() * 64) | 0];
    return i;
  },
  Xv = ['name', 'message', 'stack', 'code'],
  ra = class {
    constructor(n, i) {
      Uu(this, '_type');
      (this.payload = n), (this.meta = i);
    }
  },
  mp = class {
    constructor(n, i) {
      Uu(this, '_type');
      (this.payload = n), (this.meta = i);
    }
  },
  Yv = (n) => {
    if (typeof n == 'object' && n !== null) {
      const i = {};
      for (const o of Xv) typeof n[o] == 'string' && (i[o] = n[o]);
      return i;
    }
    return { message: String(n) };
  },
  T0 = (() => {
    function n(i, o, s) {
      const a = Ii(i + '/fulfilled', (m, y, g, w) => ({
          payload: m,
          meta: {
            ...(w || {}),
            arg: g,
            requestId: y,
            requestStatus: 'fulfilled',
          },
        })),
        f = Ii(i + '/pending', (m, y, g) => ({
          payload: void 0,
          meta: {
            ...(g || {}),
            arg: y,
            requestId: m,
            requestStatus: 'pending',
          },
        })),
        d = Ii(i + '/rejected', (m, y, g, w, C) => ({
          payload: w,
          error: ((s && s.serializeError) || Yv)(m || 'Rejected'),
          meta: {
            ...(C || {}),
            arg: g,
            requestId: y,
            rejectedWithValue: !!w,
            requestStatus: 'rejected',
            aborted: (m == null ? void 0 : m.name) === 'AbortError',
            condition: (m == null ? void 0 : m.name) === 'ConditionError',
          },
        }));
      function h(m) {
        return (y, g, w) => {
          const C = s != null && s.idGenerator ? s.idGenerator(m) : Jv(),
            N = new AbortController();
          let E, A;
          function x(j) {
            (A = j), N.abort();
          }
          const D = (async function () {
            var W, H;
            let j;
            try {
              let Z =
                (W = s == null ? void 0 : s.condition) == null
                  ? void 0
                  : W.call(s, m, { getState: g, extra: w });
              if ((Zv(Z) && (Z = await Z), Z === !1 || N.signal.aborted))
                throw {
                  name: 'ConditionError',
                  message: 'Aborted due to condition callback returning false.',
                };
              const ce = new Promise((ie, me) => {
                (E = () => {
                  me({ name: 'AbortError', message: A || 'Aborted' });
                }),
                  N.signal.addEventListener('abort', E);
              });
              y(
                f(
                  C,
                  m,
                  (H = s == null ? void 0 : s.getPendingMeta) == null
                    ? void 0
                    : H.call(
                        s,
                        { requestId: C, arg: m },
                        { getState: g, extra: w },
                      ),
                ),
              ),
                (j = await Promise.race([
                  ce,
                  Promise.resolve(
                    o(m, {
                      dispatch: y,
                      getState: g,
                      extra: w,
                      requestId: C,
                      signal: N.signal,
                      abort: x,
                      rejectWithValue: (ie, me) => new ra(ie, me),
                      fulfillWithValue: (ie, me) => new mp(ie, me),
                    }),
                  ).then((ie) => {
                    if (ie instanceof ra) throw ie;
                    return ie instanceof mp
                      ? a(ie.payload, C, m, ie.meta)
                      : a(ie, C, m);
                  }),
                ]));
            } catch (Z) {
              j =
                Z instanceof ra ? d(null, C, m, Z.payload, Z.meta) : d(Z, C, m);
            } finally {
              E && N.signal.removeEventListener('abort', E);
            }
            return (
              (s &&
                !s.dispatchConditionRejection &&
                d.match(j) &&
                j.meta.condition) ||
                y(j),
              j
            );
          })();
          return Object.assign(D, {
            abort: x,
            requestId: C,
            arg: m,
            unwrap() {
              return D.then(Gv);
            },
          });
        };
      }
      return Object.assign(h, {
        pending: f,
        rejected: d,
        fulfilled: a,
        settled: Kv(d, a),
        typePrefix: i,
      });
    }
    return (n.withTypes = () => n), n;
  })();
function Gv(n) {
  if (n.meta && n.meta.rejectedWithValue) throw n.payload;
  if (n.error) throw n.error;
  return n.payload;
}
function Zv(n) {
  return n !== null && typeof n == 'object' && typeof n.then == 'function';
}
var e1 = Symbol.for('rtk-slice-createasyncthunk');
function t1(n, i) {
  return `${n}/${i}`;
}
function n1({ creators: n } = {}) {
  var o;
  const i = (o = n == null ? void 0 : n.asyncThunk) == null ? void 0 : o[e1];
  return function (a) {
    const { name: f, reducerPath: d = f } = a;
    if (!f) throw new Error(kn(11));
    const h =
        (typeof a.reducers == 'function' ? a.reducers(i1()) : a.reducers) || {},
      m = Object.keys(h),
      y = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      g = {
        addCase(I, W) {
          const H = typeof I == 'string' ? I : I.type;
          if (!H) throw new Error(kn(12));
          if (H in y.sliceCaseReducersByType) throw new Error(kn(13));
          return (y.sliceCaseReducersByType[H] = W), g;
        },
        addMatcher(I, W) {
          return y.sliceMatchers.push({ matcher: I, reducer: W }), g;
        },
        exposeAction(I, W) {
          return (y.actionCreators[I] = W), g;
        },
        exposeCaseReducer(I, W) {
          return (y.sliceCaseReducersByName[I] = W), g;
        },
      };
    m.forEach((I) => {
      const W = h[I],
        H = {
          reducerName: I,
          type: t1(f, I),
          createNotation: typeof a.reducers == 'function',
        };
      l1(W) ? u1(H, W, g, i) : o1(H, W, g);
    });
    function w() {
      const [I = {}, W = [], H = void 0] =
          typeof a.extraReducers == 'function'
            ? P0(a.extraReducers)
            : [a.extraReducers],
        Z = { ...I, ...y.sliceCaseReducersByType };
      return Wv(a.initialState, (ce) => {
        for (let ie in Z) ce.addCase(ie, Z[ie]);
        for (let ie of y.sliceMatchers) ce.addMatcher(ie.matcher, ie.reducer);
        for (let ie of W) ce.addMatcher(ie.matcher, ie.reducer);
        H && ce.addDefaultCase(H);
      });
    }
    const C = (I) => I,
      N = new Map();
    let E;
    function A(I, W) {
      return E || (E = w()), E(I, W);
    }
    function x() {
      return E || (E = w()), E.getInitialState();
    }
    function D(I, W = !1) {
      function H(ce) {
        let ie = ce[I];
        return typeof ie > 'u' && W && (ie = x()), ie;
      }
      function Z(ce = C) {
        const ie = pp(N, W, () => new WeakMap());
        return pp(ie, ce, () => {
          const me = {};
          for (const [Ee, rt] of Object.entries(a.selectors ?? {}))
            me[Ee] = r1(rt, ce, x, W);
          return me;
        });
      }
      return {
        reducerPath: I,
        getSelectors: Z,
        get selectors() {
          return Z(H);
        },
        selectSlice: H,
      };
    }
    const j = {
      name: f,
      reducer: A,
      actions: y.actionCreators,
      caseReducers: y.sliceCaseReducersByName,
      getInitialState: x,
      ...D(d),
      injectInto(I, { reducerPath: W, ...H } = {}) {
        const Z = W ?? d;
        return (
          I.inject({ reducerPath: Z, reducer: A }, H), { ...j, ...D(Z, !0) }
        );
      },
    };
    return j;
  };
}
function r1(n, i, o, s) {
  function a(f, ...d) {
    let h = i(f);
    return typeof h > 'u' && s && (h = o()), n(h, ...d);
  }
  return (a.unwrapped = n), a;
}
var Ba = n1();
function i1() {
  function n(i, o) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: i, ...o };
  }
  return (
    (n.withTypes = () => n),
    {
      reducer(i) {
        return Object.assign(
          {
            [i.name](...o) {
              return i(...o);
            },
          }[i.name],
          { _reducerDefinitionType: 'reducer' },
        );
      },
      preparedReducer(i, o) {
        return {
          _reducerDefinitionType: 'reducerWithPrepare',
          prepare: i,
          reducer: o,
        };
      },
      asyncThunk: n,
    }
  );
}
function o1({ type: n, reducerName: i, createNotation: o }, s, a) {
  let f, d;
  if ('reducer' in s) {
    if (o && !s1(s)) throw new Error(kn(17));
    (f = s.reducer), (d = s.prepare);
  } else f = s;
  a.addCase(n, f)
    .exposeCaseReducer(i, f)
    .exposeAction(i, d ? Ii(n, d) : Ii(n));
}
function l1(n) {
  return n._reducerDefinitionType === 'asyncThunk';
}
function s1(n) {
  return n._reducerDefinitionType === 'reducerWithPrepare';
}
function u1({ type: n, reducerName: i }, o, s, a) {
  if (!a) throw new Error(kn(18));
  const {
      payloadCreator: f,
      fulfilled: d,
      pending: h,
      rejected: m,
      settled: y,
      options: g,
    } = o,
    w = a(n, f, g);
  s.exposeAction(i, w),
    d && s.addCase(w.fulfilled, d),
    h && s.addCase(w.pending, h),
    m && s.addCase(w.rejected, m),
    y && s.addMatcher(w.settled, y),
    s.exposeCaseReducer(i, {
      fulfilled: d || fl,
      pending: h || fl,
      rejected: m || fl,
      settled: y || fl,
    });
}
function fl() {}
function kn(n) {
  return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
const N0 = 'Ошибка авторизации',
  O0 = (n, i) => {
    typeof window < 'u' && localStorage, setItem(n, JSON.stringify(i));
  },
  a1 = (n) => (typeof window < 'u' && localStorage.getItem(n)) || null,
  L0 = (n) => {
    typeof window < 'u' && localStorage.removeItem(n);
  },
  c1 = { token: a1('authToken') || null, loading: !1, error: null },
  vl = T0(
    'auth/loginUser',
    async ({ email: n, password: i, token: o }, { rejectWithValue: s }) => {
      var a, f;
      try {
        if (o) return o;
        if (!n || !i) throw new Error('Требуется email и пароль');
        const d = await $l(n, i);
        if (!d.token) throw new Error('Токен не получен');
        return d.token;
      } catch (d) {
        const h =
          ((f = (a = d.response) == null ? void 0 : a.data) == null
            ? void 0
            : f.message) ||
          d.message ||
          N0;
        return s(h);
      }
    },
  ),
  A0 = Ba({
    name: 'auth',
    initialState: c1,
    reducers: {
      logout(n) {
        (n.token = null), L0('authToken');
      },
      setAuthToken(n, i) {
        (n.token = i.payload), O0('authToken', i.payload);
      },
    },
    extraReducers: (n) => {
      n.addCase(vl.pending, (i) => {
        (i.loading = !0), (i.error = null);
      })
        .addCase(vl.fulfilled, (i, o) => {
          (i.token = o.payload), (i.loading = !1);
        })
        .addCase(vl.rejected, (i, o) => {
          (i.loading = !1), (i.error = o.payload || N0);
        });
    },
  }),
  { logout: Sw, setAuthToken: F0 } = A0.actions,
  f1 = A0.reducer;
var Ji = (n) => n.type === 'checkbox',
  ar = (n) => n instanceof Date,
  mt = (n) => n == null;
const D0 = (n) => typeof n == 'object';
var Ke = (n) => !mt(n) && !Array.isArray(n) && D0(n) && !ar(n),
  d1 = (n) =>
    Ke(n) && n.target ? (Ji(n.target) ? n.target.checked : n.target.value) : n,
  p1 = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n,
  h1 = (n, i) => n.has(p1(i)),
  m1 = (n) => {
    const i = n.constructor && n.constructor.prototype;
    return Ke(i) && i.hasOwnProperty('isPrototypeOf');
  },
  Va =
    typeof window < 'u' &&
    typeof window.HTMLElement < 'u' &&
    typeof document < 'u';
function Bt(n) {
  let i;
  const o = Array.isArray(n),
    s = typeof FileList < 'u' ? n instanceof FileList : !1;
  if (n instanceof Date) i = new Date(n);
  else if (n instanceof Set) i = new Set(n);
  else if (!(Va && (n instanceof Blob || s)) && (o || Ke(n)))
    if (((i = o ? [] : {}), !o && !m1(n))) i = n;
    else for (const a in n) n.hasOwnProperty(a) && (i[a] = Bt(n[a]));
  else return n;
  return i;
}
var Kl = (n) => (Array.isArray(n) ? n.filter(Boolean) : []),
  Je = (n) => n === void 0,
  te = (n, i, o) => {
    if (!i || !Ke(n)) return o;
    const s = Kl(i.split(/[,[\].]+?/)).reduce((a, f) => (mt(a) ? a : a[f]), n);
    return Je(s) || s === n ? (Je(n[i]) ? o : n[i]) : s;
  },
  rn = (n) => typeof n == 'boolean',
  $a = (n) => /^\w*$/.test(n),
  z0 = (n) => Kl(n.replace(/["|']|\]/g, '').split(/\.|\[/)),
  je = (n, i, o) => {
    let s = -1;
    const a = $a(i) ? [i] : z0(i),
      f = a.length,
      d = f - 1;
    for (; ++s < f; ) {
      const h = a[s];
      let m = o;
      if (s !== d) {
        const y = n[h];
        m = Ke(y) || Array.isArray(y) ? y : isNaN(+a[s + 1]) ? {} : [];
      }
      if (h === '__proto__' || h === 'constructor' || h === 'prototype') return;
      (n[h] = m), (n = n[h]);
    }
    return n;
  };
const yp = { BLUR: 'blur', FOCUS_OUT: 'focusout' },
  Jt = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  wn = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  };
Ot.createContext(null);
var y1 = (n, i, o, s = !0) => {
    const a = { defaultValues: i._defaultValues };
    for (const f in n)
      Object.defineProperty(a, f, {
        get: () => {
          const d = f;
          return (
            i._proxyFormState[d] !== Jt.all &&
              (i._proxyFormState[d] = !s || Jt.all),
            n[d]
          );
        },
      });
    return a;
  },
  Et = (n) => Ke(n) && !Object.keys(n).length,
  g1 = (n, i, o, s) => {
    o(n);
    const { name: a, ...f } = n;
    return (
      Et(f) ||
      Object.keys(f).length >= Object.keys(i).length ||
      Object.keys(f).find((d) => i[d] === Jt.all)
    );
  },
  wl = (n) => (Array.isArray(n) ? n : [n]);
function v1(n) {
  const i = Ot.useRef(n);
  (i.current = n),
    Ot.useEffect(() => {
      const o =
        !n.disabled &&
        i.current.subject &&
        i.current.subject.subscribe({ next: i.current.next });
      return () => {
        o && o.unsubscribe();
      };
    }, [n.disabled]);
}
var ln = (n) => typeof n == 'string',
  w1 = (n, i, o, s, a) =>
    ln(n)
      ? (s && i.watch.add(n), te(o, n, a))
      : Array.isArray(n)
        ? n.map((f) => (s && i.watch.add(f), te(o, f)))
        : (s && (i.watchAll = !0), o),
  S1 = (n, i, o, s, a) =>
    i
      ? {
          ...o[n],
          types: { ...(o[n] && o[n].types ? o[n].types : {}), [s]: a || !0 },
        }
      : {},
  gp = (n) => ({
    isOnSubmit: !n || n === Jt.onSubmit,
    isOnBlur: n === Jt.onBlur,
    isOnChange: n === Jt.onChange,
    isOnAll: n === Jt.all,
    isOnTouch: n === Jt.onTouched,
  }),
  vp = (n, i, o) =>
    !o &&
    (i.watchAll ||
      i.watch.has(n) ||
      [...i.watch].some(
        (s) => n.startsWith(s) && /^\.\w+/.test(n.slice(s.length)),
      ));
const Ui = (n, i, o, s) => {
  for (const a of o || Object.keys(n)) {
    const f = te(n, a);
    if (f) {
      const { _f: d, ...h } = f;
      if (d) {
        if (d.refs && d.refs[0] && i(d.refs[0], a) && !s) return !0;
        if (d.ref && i(d.ref, d.name) && !s) return !0;
        if (Ui(h, i)) break;
      } else if (Ke(h) && Ui(h, i)) break;
    }
  }
};
var k1 = (n, i, o) => {
    const s = wl(te(n, o));
    return je(s, 'root', i[o]), je(n, o, s), n;
  },
  Ha = (n) => n.type === 'file',
  on = (n) => typeof n == 'function',
  Nl = (n) => {
    if (!Va) return !1;
    const i = n ? n.ownerDocument : 0;
    return (
      n instanceof
      (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement)
    );
  },
  Sl = (n) => ln(n),
  ba = (n) => n.type === 'radio',
  Ol = (n) => n instanceof RegExp;
const wp = { value: !1, isValid: !1 },
  Sp = { value: !0, isValid: !0 };
var j0 = (n) => {
  if (Array.isArray(n)) {
    if (n.length > 1) {
      const i = n
        .filter((o) => o && o.checked && !o.disabled)
        .map((o) => o.value);
      return { value: i, isValid: !!i.length };
    }
    return n[0].checked && !n[0].disabled
      ? n[0].attributes && !Je(n[0].attributes.value)
        ? Je(n[0].value) || n[0].value === ''
          ? Sp
          : { value: n[0].value, isValid: !0 }
        : Sp
      : wp;
  }
  return wp;
};
const kp = { isValid: !1, value: null };
var M0 = (n) =>
  Array.isArray(n)
    ? n.reduce(
        (i, o) =>
          o && o.checked && !o.disabled ? { isValid: !0, value: o.value } : i,
        kp,
      )
    : kp;
function _p(n, i, o = 'validate') {
  if (Sl(n) || (Array.isArray(n) && n.every(Sl)) || (rn(n) && !n))
    return { type: o, message: Sl(n) ? n : '', ref: i };
}
var Br = (n) => (Ke(n) && !Ol(n) ? n : { value: n, message: '' }),
  Ep = async (n, i, o, s, a, f) => {
    const {
        ref: d,
        refs: h,
        required: m,
        maxLength: y,
        minLength: g,
        min: w,
        max: C,
        pattern: N,
        validate: E,
        name: A,
        valueAsNumber: x,
        mount: D,
      } = n._f,
      j = te(o, A);
    if (!D || i.has(A)) return {};
    const I = h ? h[0] : d,
      W = (fe) => {
        a &&
          I.reportValidity &&
          (I.setCustomValidity(rn(fe) ? '' : fe || ''), I.reportValidity());
      },
      H = {},
      Z = ba(d),
      ce = Ji(d),
      ie = Z || ce,
      me =
        ((x || Ha(d)) && Je(d.value) && Je(j)) ||
        (Nl(d) && d.value === '') ||
        j === '' ||
        (Array.isArray(j) && !j.length),
      Ee = S1.bind(null, A, s, H),
      rt = (fe, pe, Pe, Oe = wn.maxLength, Ae = wn.minLength) => {
        const ke = fe ? pe : Pe;
        H[A] = {
          type: fe ? Oe : Ae,
          message: ke,
          ref: d,
          ...Ee(fe ? Oe : Ae, ke),
        };
      };
    if (
      f
        ? !Array.isArray(j) || !j.length
        : m &&
          ((!ie && (me || mt(j))) ||
            (rn(j) && !j) ||
            (ce && !j0(h).isValid) ||
            (Z && !M0(h).isValid))
    ) {
      const { value: fe, message: pe } = Sl(m)
        ? { value: !!m, message: m }
        : Br(m);
      if (
        fe &&
        ((H[A] = {
          type: wn.required,
          message: pe,
          ref: I,
          ...Ee(wn.required, pe),
        }),
        !s)
      )
        return W(pe), H;
    }
    if (!me && (!mt(w) || !mt(C))) {
      let fe, pe;
      const Pe = Br(C),
        Oe = Br(w);
      if (!mt(j) && !isNaN(j)) {
        const Ae = d.valueAsNumber || (j && +j);
        mt(Pe.value) || (fe = Ae > Pe.value),
          mt(Oe.value) || (pe = Ae < Oe.value);
      } else {
        const Ae = d.valueAsDate || new Date(j),
          ke = (X) => new Date(new Date().toDateString() + ' ' + X),
          Q = d.type == 'time',
          le = d.type == 'week';
        ln(Pe.value) &&
          j &&
          (fe = Q
            ? ke(j) > ke(Pe.value)
            : le
              ? j > Pe.value
              : Ae > new Date(Pe.value)),
          ln(Oe.value) &&
            j &&
            (pe = Q
              ? ke(j) < ke(Oe.value)
              : le
                ? j < Oe.value
                : Ae < new Date(Oe.value));
      }
      if ((fe || pe) && (rt(!!fe, Pe.message, Oe.message, wn.max, wn.min), !s))
        return W(H[A].message), H;
    }
    if ((y || g) && !me && (ln(j) || (f && Array.isArray(j)))) {
      const fe = Br(y),
        pe = Br(g),
        Pe = !mt(fe.value) && j.length > +fe.value,
        Oe = !mt(pe.value) && j.length < +pe.value;
      if ((Pe || Oe) && (rt(Pe, fe.message, pe.message), !s))
        return W(H[A].message), H;
    }
    if (N && !me && ln(j)) {
      const { value: fe, message: pe } = Br(N);
      if (
        Ol(fe) &&
        !j.match(fe) &&
        ((H[A] = {
          type: wn.pattern,
          message: pe,
          ref: d,
          ...Ee(wn.pattern, pe),
        }),
        !s)
      )
        return W(pe), H;
    }
    if (E) {
      if (on(E)) {
        const fe = await E(j, o),
          pe = _p(fe, I);
        if (pe && ((H[A] = { ...pe, ...Ee(wn.validate, pe.message) }), !s))
          return W(pe.message), H;
      } else if (Ke(E)) {
        let fe = {};
        for (const pe in E) {
          if (!Et(fe) && !s) break;
          const Pe = _p(await E[pe](j, o), I, pe);
          Pe &&
            ((fe = { ...Pe, ...Ee(pe, Pe.message) }),
            W(Pe.message),
            s && (H[A] = fe));
        }
        if (!Et(fe) && ((H[A] = { ref: I, ...fe }), !s)) return H;
      }
    }
    return W(!0), H;
  };
function _1(n, i) {
  const o = i.slice(0, -1).length;
  let s = 0;
  for (; s < o; ) n = Je(n) ? s++ : n[i[s++]];
  return n;
}
function E1(n) {
  for (const i in n) if (n.hasOwnProperty(i) && !Je(n[i])) return !1;
  return !0;
}
function Ze(n, i) {
  const o = Array.isArray(i) ? i : $a(i) ? [i] : z0(i),
    s = o.length === 1 ? n : _1(n, o),
    a = o.length - 1,
    f = o[a];
  return (
    s && delete s[f],
    a !== 0 &&
      ((Ke(s) && Et(s)) || (Array.isArray(s) && E1(s))) &&
      Ze(n, o.slice(0, -1)),
    n
  );
}
var ia = () => {
    let n = [];
    return {
      get observers() {
        return n;
      },
      next: (a) => {
        for (const f of n) f.next && f.next(a);
      },
      subscribe: (a) => (
        n.push(a),
        {
          unsubscribe: () => {
            n = n.filter((f) => f !== a);
          },
        }
      ),
      unsubscribe: () => {
        n = [];
      },
    };
  },
  Ea = (n) => mt(n) || !D0(n);
function Hn(n, i) {
  if (Ea(n) || Ea(i)) return n === i;
  if (ar(n) && ar(i)) return n.getTime() === i.getTime();
  const o = Object.keys(n),
    s = Object.keys(i);
  if (o.length !== s.length) return !1;
  for (const a of o) {
    const f = n[a];
    if (!s.includes(a)) return !1;
    if (a !== 'ref') {
      const d = i[a];
      if (
        (ar(f) && ar(d)) ||
        (Ke(f) && Ke(d)) ||
        (Array.isArray(f) && Array.isArray(d))
          ? !Hn(f, d)
          : f !== d
      )
        return !1;
    }
  }
  return !0;
}
var I0 = (n) => n.type === 'select-multiple',
  x1 = (n) => ba(n) || Ji(n),
  oa = (n) => Nl(n) && n.isConnected,
  U0 = (n) => {
    for (const i in n) if (on(n[i])) return !0;
    return !1;
  };
function Ll(n, i = {}) {
  const o = Array.isArray(n);
  if (Ke(n) || o)
    for (const s in n)
      Array.isArray(n[s]) || (Ke(n[s]) && !U0(n[s]))
        ? ((i[s] = Array.isArray(n[s]) ? [] : {}), Ll(n[s], i[s]))
        : mt(n[s]) || (i[s] = !0);
  return i;
}
function B0(n, i, o) {
  const s = Array.isArray(n);
  if (Ke(n) || s)
    for (const a in n)
      Array.isArray(n[a]) || (Ke(n[a]) && !U0(n[a]))
        ? Je(i) || Ea(o[a])
          ? (o[a] = Array.isArray(n[a]) ? Ll(n[a], []) : { ...Ll(n[a]) })
          : B0(n[a], mt(i) ? {} : i[a], o[a])
        : (o[a] = !Hn(n[a], i[a]));
  return o;
}
var zi = (n, i) => B0(n, i, Ll(i)),
  V0 = (n, { valueAsNumber: i, valueAsDate: o, setValueAs: s }) =>
    Je(n)
      ? n
      : i
        ? n === ''
          ? NaN
          : n && +n
        : o && ln(n)
          ? new Date(n)
          : s
            ? s(n)
            : n;
function la(n) {
  const i = n.ref;
  return Ha(i)
    ? i.files
    : ba(i)
      ? M0(n.refs).value
      : I0(i)
        ? [...i.selectedOptions].map(({ value: o }) => o)
        : Ji(i)
          ? j0(n.refs).value
          : V0(Je(i.value) ? n.ref.value : i.value, n);
}
var C1 = (n, i, o, s) => {
    const a = {};
    for (const f of n) {
      const d = te(i, f);
      d && je(a, f, d._f);
    }
    return {
      criteriaMode: o,
      names: [...n],
      fields: a,
      shouldUseNativeValidation: s,
    };
  },
  ji = (n) =>
    Je(n)
      ? n
      : Ol(n)
        ? n.source
        : Ke(n)
          ? Ol(n.value)
            ? n.value.source
            : n.value
          : n;
const xp = 'AsyncFunction';
var R1 = (n) =>
    !!n &&
    !!n.validate &&
    !!(
      (on(n.validate) && n.validate.constructor.name === xp) ||
      (Ke(n.validate) &&
        Object.values(n.validate).find((i) => i.constructor.name === xp))
    ),
  P1 = (n) =>
    n.mount &&
    (n.required ||
      n.min ||
      n.max ||
      n.maxLength ||
      n.minLength ||
      n.pattern ||
      n.validate);
function Cp(n, i, o) {
  const s = te(n, o);
  if (s || $a(o)) return { error: s, name: o };
  const a = o.split('.');
  for (; a.length; ) {
    const f = a.join('.'),
      d = te(i, f),
      h = te(n, f);
    if (d && !Array.isArray(d) && o !== f) return { name: o };
    if (h && h.type) return { name: f, error: h };
    a.pop();
  }
  return { name: o };
}
var T1 = (n, i, o, s, a) =>
    a.isOnAll
      ? !1
      : !o && a.isOnTouch
        ? !(i || n)
        : (o ? s.isOnBlur : a.isOnBlur)
          ? !n
          : (o ? s.isOnChange : a.isOnChange)
            ? n
            : !0,
  N1 = (n, i) => !Kl(te(n, i)).length && Ze(n, i);
const O1 = {
  mode: Jt.onSubmit,
  reValidateMode: Jt.onChange,
  shouldFocusError: !0,
};
function L1(n = {}) {
  let i = { ...O1, ...n },
    o = {
      submitCount: 0,
      isDirty: !1,
      isLoading: on(i.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: i.errors || {},
      disabled: i.disabled || !1,
    },
    s = {},
    a =
      Ke(i.defaultValues) || Ke(i.values)
        ? Bt(i.defaultValues || i.values) || {}
        : {},
    f = i.shouldUnregister ? {} : Bt(a),
    d = { action: !1, mount: !1, watch: !1 },
    h = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    m,
    y = 0;
  const g = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    w = { values: ia(), array: ia(), state: ia() },
    C = gp(i.mode),
    N = gp(i.reValidateMode),
    E = i.criteriaMode === Jt.all,
    A = (k) => (O) => {
      clearTimeout(y), (y = setTimeout(k, O));
    },
    x = async (k) => {
      if (!i.disabled && (g.isValid || k)) {
        const O = i.resolver ? Et((await ie()).errors) : await Ee(s, !0);
        O !== o.isValid && w.state.next({ isValid: O });
      }
    },
    D = (k, O) => {
      !i.disabled &&
        (g.isValidating || g.validatingFields) &&
        ((k || Array.from(h.mount)).forEach((z) => {
          z && (O ? je(o.validatingFields, z, O) : Ze(o.validatingFields, z));
        }),
        w.state.next({
          validatingFields: o.validatingFields,
          isValidating: !Et(o.validatingFields),
        }));
    },
    j = (k, O = [], z, J, K = !0, q = !0) => {
      if (J && z && !i.disabled) {
        if (((d.action = !0), q && Array.isArray(te(s, k)))) {
          const se = z(te(s, k), J.argA, J.argB);
          K && je(s, k, se);
        }
        if (q && Array.isArray(te(o.errors, k))) {
          const se = z(te(o.errors, k), J.argA, J.argB);
          K && je(o.errors, k, se), N1(o.errors, k);
        }
        if (g.touchedFields && q && Array.isArray(te(o.touchedFields, k))) {
          const se = z(te(o.touchedFields, k), J.argA, J.argB);
          K && je(o.touchedFields, k, se);
        }
        g.dirtyFields && (o.dirtyFields = zi(a, f)),
          w.state.next({
            name: k,
            isDirty: fe(k, O),
            dirtyFields: o.dirtyFields,
            errors: o.errors,
            isValid: o.isValid,
          });
      } else je(f, k, O);
    },
    I = (k, O) => {
      je(o.errors, k, O), w.state.next({ errors: o.errors });
    },
    W = (k) => {
      (o.errors = k), w.state.next({ errors: o.errors, isValid: !1 });
    },
    H = (k, O, z, J) => {
      const K = te(s, k);
      if (K) {
        const q = te(f, k, Je(z) ? te(a, k) : z);
        Je(q) || (J && J.defaultChecked) || O
          ? je(f, k, O ? q : la(K._f))
          : Oe(k, q),
          d.mount && x();
      }
    },
    Z = (k, O, z, J, K) => {
      let q = !1,
        se = !1;
      const ge = { name: k };
      if (!i.disabled) {
        const be = !!(te(s, k) && te(s, k)._f && te(s, k)._f.disabled);
        if (!z || J) {
          g.isDirty &&
            ((se = o.isDirty),
            (o.isDirty = ge.isDirty = fe()),
            (q = se !== ge.isDirty));
          const Ve = be || Hn(te(a, k), O);
          (se = !!(!be && te(o.dirtyFields, k))),
            Ve || be ? Ze(o.dirtyFields, k) : je(o.dirtyFields, k, !0),
            (ge.dirtyFields = o.dirtyFields),
            (q = q || (g.dirtyFields && se !== !Ve));
        }
        if (z) {
          const Ve = te(o.touchedFields, k);
          Ve ||
            (je(o.touchedFields, k, z),
            (ge.touchedFields = o.touchedFields),
            (q = q || (g.touchedFields && Ve !== z)));
        }
        q && K && w.state.next(ge);
      }
      return q ? ge : {};
    },
    ce = (k, O, z, J) => {
      const K = te(o.errors, k),
        q = g.isValid && rn(O) && o.isValid !== O;
      if (
        (i.delayError && z
          ? ((m = A(() => I(k, z))), m(i.delayError))
          : (clearTimeout(y),
            (m = null),
            z ? je(o.errors, k, z) : Ze(o.errors, k)),
        (z ? !Hn(K, z) : K) || !Et(J) || q)
      ) {
        const se = {
          ...J,
          ...(q && rn(O) ? { isValid: O } : {}),
          errors: o.errors,
          name: k,
        };
        (o = { ...o, ...se }), w.state.next(se);
      }
    },
    ie = async (k) => {
      D(k, !0);
      const O = await i.resolver(
        f,
        i.context,
        C1(k || h.mount, s, i.criteriaMode, i.shouldUseNativeValidation),
      );
      return D(k), O;
    },
    me = async (k) => {
      const { errors: O } = await ie(k);
      if (k)
        for (const z of k) {
          const J = te(O, z);
          J ? je(o.errors, z, J) : Ze(o.errors, z);
        }
      else o.errors = O;
      return O;
    },
    Ee = async (k, O, z = { valid: !0 }) => {
      for (const J in k) {
        const K = k[J];
        if (K) {
          const { _f: q, ...se } = K;
          if (q) {
            const ge = h.array.has(q.name),
              be = K._f && R1(K._f);
            be && g.validatingFields && D([J], !0);
            const Ve = await Ep(
              K,
              h.disabled,
              f,
              E,
              i.shouldUseNativeValidation && !O,
              ge,
            );
            if (
              (be && g.validatingFields && D([J]),
              Ve[q.name] && ((z.valid = !1), O))
            )
              break;
            !O &&
              (te(Ve, q.name)
                ? ge
                  ? k1(o.errors, Ve, q.name)
                  : je(o.errors, q.name, Ve[q.name])
                : Ze(o.errors, q.name));
          }
          !Et(se) && (await Ee(se, O, z));
        }
      }
      return z.valid;
    },
    rt = () => {
      for (const k of h.unMount) {
        const O = te(s, k);
        O &&
          (O._f.refs ? O._f.refs.every((z) => !oa(z)) : !oa(O._f.ref)) &&
          Se(k);
      }
      h.unMount = new Set();
    },
    fe = (k, O) => !i.disabled && (k && O && je(f, k, O), !Hn(R(), a)),
    pe = (k, O, z) =>
      w1(k, h, { ...(d.mount ? f : Je(O) ? a : ln(k) ? { [k]: O } : O) }, z, O),
    Pe = (k) =>
      Kl(te(d.mount ? f : a, k, i.shouldUnregister ? te(a, k, []) : [])),
    Oe = (k, O, z = {}) => {
      const J = te(s, k);
      let K = O;
      if (J) {
        const q = J._f;
        q &&
          (!q.disabled && je(f, k, V0(O, q)),
          (K = Nl(q.ref) && mt(O) ? '' : O),
          I0(q.ref)
            ? [...q.ref.options].forEach(
                (se) => (se.selected = K.includes(se.value)),
              )
            : q.refs
              ? Ji(q.ref)
                ? q.refs.length > 1
                  ? q.refs.forEach(
                      (se) =>
                        (!se.defaultChecked || !se.disabled) &&
                        (se.checked = Array.isArray(K)
                          ? !!K.find((ge) => ge === se.value)
                          : K === se.value),
                    )
                  : q.refs[0] && (q.refs[0].checked = !!K)
                : q.refs.forEach((se) => (se.checked = se.value === K))
              : Ha(q.ref)
                ? (q.ref.value = '')
                : ((q.ref.value = K),
                  q.ref.type || w.values.next({ name: k, values: { ...f } })));
      }
      (z.shouldDirty || z.shouldTouch) &&
        Z(k, K, z.shouldTouch, z.shouldDirty, !0),
        z.shouldValidate && X(k);
    },
    Ae = (k, O, z) => {
      for (const J in O) {
        const K = O[J],
          q = `${k}.${J}`,
          se = te(s, q);
        (h.array.has(k) || Ke(K) || (se && !se._f)) && !ar(K)
          ? Ae(q, K, z)
          : Oe(q, K, z);
      }
    },
    ke = (k, O, z = {}) => {
      const J = te(s, k),
        K = h.array.has(k),
        q = Bt(O);
      je(f, k, q),
        K
          ? (w.array.next({ name: k, values: { ...f } }),
            (g.isDirty || g.dirtyFields) &&
              z.shouldDirty &&
              w.state.next({
                name: k,
                dirtyFields: zi(a, f),
                isDirty: fe(k, q),
              }))
          : J && !J._f && !mt(q)
            ? Ae(k, q, z)
            : Oe(k, q, z),
        vp(k, h) && w.state.next({ ...o }),
        w.values.next({ name: d.mount ? k : void 0, values: { ...f } });
    },
    Q = async (k) => {
      d.mount = !0;
      const O = k.target;
      let z = O.name,
        J = !0;
      const K = te(s, z),
        q = () => (O.type ? la(K._f) : d1(k)),
        se = (ge) => {
          J =
            Number.isNaN(ge) ||
            (ar(ge) && isNaN(ge.getTime())) ||
            Hn(ge, te(f, z, ge));
        };
      if (K) {
        let ge, be;
        const Ve = q(),
          Ct = k.type === yp.BLUR || k.type === yp.FOCUS_OUT,
          Gi =
            (!P1(K._f) && !i.resolver && !te(o.errors, z) && !K._f.deps) ||
            T1(Ct, te(o.touchedFields, z), o.isSubmitted, N, C),
          an = vp(z, h, Ct);
        je(f, z, Ve),
          Ct
            ? (K._f.onBlur && K._f.onBlur(k), m && m(0))
            : K._f.onChange && K._f.onChange(k);
        const cn = Z(z, Ve, Ct, !1),
          Xl = !Et(cn) || an;
        if (
          (!Ct && w.values.next({ name: z, type: k.type, values: { ...f } }),
          Gi)
        )
          return (
            g.isValid && (i.mode === 'onBlur' && Ct ? x() : Ct || x()),
            Xl && w.state.next({ name: z, ...(an ? {} : cn) })
          );
        if ((!Ct && an && w.state.next({ ...o }), i.resolver)) {
          const { errors: Qr } = await ie([z]);
          if ((se(Ve), J)) {
            const Zi = Cp(o.errors, s, z),
              eo = Cp(Qr, s, Zi.name || z);
            (ge = eo.error), (z = eo.name), (be = Et(Qr));
          }
        } else
          D([z], !0),
            (ge = (await Ep(K, h.disabled, f, E, i.shouldUseNativeValidation))[
              z
            ]),
            D([z]),
            se(Ve),
            J && (ge ? (be = !1) : g.isValid && (be = await Ee(s, !0)));
        J && (K._f.deps && X(K._f.deps), ce(z, be, ge, cn));
      }
    },
    le = (k, O) => {
      if (te(o.errors, O) && k.focus) return k.focus(), 1;
    },
    X = async (k, O = {}) => {
      let z, J;
      const K = wl(k);
      if (i.resolver) {
        const q = await me(Je(k) ? k : K);
        (z = Et(q)), (J = k ? !K.some((se) => te(q, se)) : z);
      } else
        k
          ? ((J = (
              await Promise.all(
                K.map(async (q) => {
                  const se = te(s, q);
                  return await Ee(se && se._f ? { [q]: se } : se);
                }),
              )
            ).every(Boolean)),
            !(!J && !o.isValid) && x())
          : (J = z = await Ee(s));
      return (
        w.state.next({
          ...(!ln(k) || (g.isValid && z !== o.isValid) ? {} : { name: k }),
          ...(i.resolver || !k ? { isValid: z } : {}),
          errors: o.errors,
        }),
        O.shouldFocus && !J && Ui(s, le, k ? K : h.mount),
        J
      );
    },
    R = (k) => {
      const O = { ...(d.mount ? f : a) };
      return Je(k) ? O : ln(k) ? te(O, k) : k.map((z) => te(O, z));
    },
    U = (k, O) => ({
      invalid: !!te((O || o).errors, k),
      isDirty: !!te((O || o).dirtyFields, k),
      error: te((O || o).errors, k),
      isValidating: !!te(o.validatingFields, k),
      isTouched: !!te((O || o).touchedFields, k),
    }),
    ye = (k) => {
      k && wl(k).forEach((O) => Ze(o.errors, O)),
        w.state.next({ errors: k ? o.errors : {} });
    },
    ve = (k, O, z) => {
      const J = (te(s, k, { _f: {} })._f || {}).ref,
        K = te(o.errors, k) || {},
        { ref: q, message: se, type: ge, ...be } = K;
      je(o.errors, k, { ...be, ...O, ref: J }),
        w.state.next({ name: k, errors: o.errors, isValid: !1 }),
        z && z.shouldFocus && J && J.focus && J.focus();
    },
    _e = (k, O) =>
      on(k)
        ? w.values.subscribe({ next: (z) => k(pe(void 0, O), z) })
        : pe(k, O, !0),
    Se = (k, O = {}) => {
      for (const z of k ? wl(k) : h.mount)
        h.mount.delete(z),
          h.array.delete(z),
          O.keepValue || (Ze(s, z), Ze(f, z)),
          !O.keepError && Ze(o.errors, z),
          !O.keepDirty && Ze(o.dirtyFields, z),
          !O.keepTouched && Ze(o.touchedFields, z),
          !O.keepIsValidating && Ze(o.validatingFields, z),
          !i.shouldUnregister && !O.keepDefaultValue && Ze(a, z);
      w.values.next({ values: { ...f } }),
        w.state.next({ ...o, ...(O.keepDirty ? { isDirty: fe() } : {}) }),
        !O.keepIsValid && x();
    },
    Te = ({ disabled: k, name: O, field: z, fields: J }) => {
      ((rn(k) && d.mount) || k || h.disabled.has(O)) &&
        (k ? h.disabled.add(O) : h.disabled.delete(O),
        Z(O, la(z ? z._f : te(J, O)._f), !1, !1, !0));
    },
    xe = (k, O = {}) => {
      let z = te(s, k);
      const J = rn(O.disabled) || rn(i.disabled);
      return (
        je(s, k, {
          ...(z || {}),
          _f: {
            ...(z && z._f ? z._f : { ref: { name: k } }),
            name: k,
            mount: !0,
            ...O,
          },
        }),
        h.mount.add(k),
        z
          ? Te({
              field: z,
              disabled: rn(O.disabled) ? O.disabled : i.disabled,
              name: k,
            })
          : H(k, !0, O.value),
        {
          ...(J ? { disabled: O.disabled || i.disabled } : {}),
          ...(i.progressive
            ? {
                required: !!O.required,
                min: ji(O.min),
                max: ji(O.max),
                minLength: ji(O.minLength),
                maxLength: ji(O.maxLength),
                pattern: ji(O.pattern),
              }
            : {}),
          name: k,
          onChange: Q,
          onBlur: Q,
          ref: (K) => {
            if (K) {
              xe(k, O), (z = te(s, k));
              const q =
                  (Je(K.value) &&
                    K.querySelectorAll &&
                    K.querySelectorAll('input,select,textarea')[0]) ||
                  K,
                se = x1(q),
                ge = z._f.refs || [];
              if (se ? ge.find((be) => be === q) : q === z._f.ref) return;
              je(s, k, {
                _f: {
                  ...z._f,
                  ...(se
                    ? {
                        refs: [
                          ...ge.filter(oa),
                          q,
                          ...(Array.isArray(te(a, k)) ? [{}] : []),
                        ],
                        ref: { type: q.type, name: k },
                      }
                    : { ref: q }),
                },
              }),
                H(k, !1, void 0, q);
            } else
              (z = te(s, k, {})),
                z._f && (z._f.mount = !1),
                (i.shouldUnregister || O.shouldUnregister) &&
                  !(h1(h.array, k) && d.action) &&
                  h.unMount.add(k);
          },
        }
      );
    },
    Le = () => i.shouldFocusError && Ui(s, le, h.mount),
    dt = (k) => {
      rn(k) &&
        (w.state.next({ disabled: k }),
        Ui(
          s,
          (O, z) => {
            const J = te(s, z);
            J &&
              ((O.disabled = J._f.disabled || k),
              Array.isArray(J._f.refs) &&
                J._f.refs.forEach((K) => {
                  K.disabled = J._f.disabled || k;
                }));
          },
          0,
          !1,
        ));
    },
    qn = (k, O) => async (z) => {
      let J;
      z && (z.preventDefault && z.preventDefault(), z.persist && z.persist());
      let K = Bt(f);
      if (h.disabled.size) for (const q of h.disabled) je(K, q, void 0);
      if ((w.state.next({ isSubmitting: !0 }), i.resolver)) {
        const { errors: q, values: se } = await ie();
        (o.errors = q), (K = se);
      } else await Ee(s);
      if ((Ze(o.errors, 'root'), Et(o.errors))) {
        w.state.next({ errors: {} });
        try {
          await k(K, z);
        } catch (q) {
          J = q;
        }
      } else O && (await O({ ...o.errors }, z)), Le(), setTimeout(Le);
      if (
        (w.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Et(o.errors) && !J,
          submitCount: o.submitCount + 1,
          errors: o.errors,
        }),
        J)
      )
        throw J;
    },
    Xi = (k, O = {}) => {
      te(s, k) &&
        (Je(O.defaultValue)
          ? ke(k, Bt(te(a, k)))
          : (ke(k, O.defaultValue), je(a, k, Bt(O.defaultValue))),
        O.keepTouched || Ze(o.touchedFields, k),
        O.keepDirty ||
          (Ze(o.dirtyFields, k),
          (o.isDirty = O.defaultValue ? fe(k, Bt(te(a, k))) : fe())),
        O.keepError || (Ze(o.errors, k), g.isValid && x()),
        w.state.next({ ...o }));
    },
    Kn = (k, O = {}) => {
      const z = k ? Bt(k) : a,
        J = Bt(z),
        K = Et(k),
        q = K ? a : J;
      if ((O.keepDefaultValues || (a = z), !O.keepValues)) {
        if (O.keepDirtyValues) {
          const se = new Set([...h.mount, ...Object.keys(zi(a, f))]);
          for (const ge of Array.from(se))
            te(o.dirtyFields, ge) ? je(q, ge, te(f, ge)) : ke(ge, te(q, ge));
        } else {
          if (Va && Je(k))
            for (const se of h.mount) {
              const ge = te(s, se);
              if (ge && ge._f) {
                const be = Array.isArray(ge._f.refs)
                  ? ge._f.refs[0]
                  : ge._f.ref;
                if (Nl(be)) {
                  const Ve = be.closest('form');
                  if (Ve) {
                    Ve.reset();
                    break;
                  }
                }
              }
            }
          s = {};
        }
        (f = i.shouldUnregister ? (O.keepDefaultValues ? Bt(a) : {}) : Bt(q)),
          w.array.next({ values: { ...q } }),
          w.values.next({ values: { ...q } });
      }
      (h = {
        mount: O.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (d.mount = !g.isValid || !!O.keepIsValid || !!O.keepDirtyValues),
        (d.watch = !!i.shouldUnregister),
        w.state.next({
          submitCount: O.keepSubmitCount ? o.submitCount : 0,
          isDirty: K
            ? !1
            : O.keepDirty
              ? o.isDirty
              : !!(O.keepDefaultValues && !Hn(k, a)),
          isSubmitted: O.keepIsSubmitted ? o.isSubmitted : !1,
          dirtyFields: K
            ? {}
            : O.keepDirtyValues
              ? O.keepDefaultValues && f
                ? zi(a, f)
                : o.dirtyFields
              : O.keepDefaultValues && k
                ? zi(a, k)
                : O.keepDirty
                  ? o.dirtyFields
                  : {},
          touchedFields: O.keepTouched ? o.touchedFields : {},
          errors: O.keepErrors ? o.errors : {},
          isSubmitSuccessful: O.keepIsSubmitSuccessful
            ? o.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    mr = (k, O) => Kn(on(k) ? k(f) : k, O);
  return {
    control: {
      register: xe,
      unregister: Se,
      getFieldState: U,
      handleSubmit: qn,
      setError: ve,
      _executeSchema: ie,
      _getWatch: pe,
      _getDirty: fe,
      _updateValid: x,
      _removeUnmounted: rt,
      _updateFieldArray: j,
      _updateDisabledField: Te,
      _getFieldArray: Pe,
      _reset: Kn,
      _resetDefaultValues: () =>
        on(i.defaultValues) &&
        i.defaultValues().then((k) => {
          mr(k, i.resetOptions), w.state.next({ isLoading: !1 });
        }),
      _updateFormState: (k) => {
        o = { ...o, ...k };
      },
      _disableForm: dt,
      _subjects: w,
      _proxyFormState: g,
      _setErrors: W,
      get _fields() {
        return s;
      },
      get _formValues() {
        return f;
      },
      get _state() {
        return d;
      },
      set _state(k) {
        d = k;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return h;
      },
      set _names(k) {
        h = k;
      },
      get _formState() {
        return o;
      },
      set _formState(k) {
        o = k;
      },
      get _options() {
        return i;
      },
      set _options(k) {
        i = { ...i, ...k };
      },
    },
    trigger: X,
    register: xe,
    handleSubmit: qn,
    watch: _e,
    setValue: ke,
    getValues: R,
    reset: mr,
    resetField: Xi,
    clearErrors: ye,
    unregister: Se,
    setError: ve,
    setFocus: (k, O = {}) => {
      const z = te(s, k),
        J = z && z._f;
      if (J) {
        const K = J.refs ? J.refs[0] : J.ref;
        K.focus && (K.focus(), O.shouldSelect && on(K.select) && K.select());
      }
    },
    getFieldState: U,
  };
}
function A1(n = {}) {
  const i = Ot.useRef(void 0),
    o = Ot.useRef(void 0),
    [s, a] = Ot.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: on(n.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: n.errors || {},
      disabled: n.disabled || !1,
      defaultValues: on(n.defaultValues) ? void 0 : n.defaultValues,
    });
  i.current || (i.current = { ...L1(n), formState: s });
  const f = i.current.control;
  return (
    (f._options = n),
    v1({
      subject: f._subjects.state,
      next: (d) => {
        g1(d, f._proxyFormState, f._updateFormState) && a({ ...f._formState });
      },
    }),
    Ot.useEffect(() => f._disableForm(n.disabled), [f, n.disabled]),
    Ot.useEffect(() => {
      if (f._proxyFormState.isDirty) {
        const d = f._getDirty();
        d !== s.isDirty && f._subjects.state.next({ isDirty: d });
      }
    }, [f, s.isDirty]),
    Ot.useEffect(() => {
      n.values && !Hn(n.values, o.current)
        ? (f._reset(n.values, f._options.resetOptions),
          (o.current = n.values),
          a((d) => ({ ...d })))
        : f._resetDefaultValues();
    }, [n.values, f]),
    Ot.useEffect(() => {
      n.errors && f._setErrors(n.errors);
    }, [n.errors, f]),
    Ot.useEffect(() => {
      f._state.mount || (f._updateValid(), (f._state.mount = !0)),
        f._state.watch &&
          ((f._state.watch = !1), f._subjects.state.next({ ...f._formState })),
        f._removeUnmounted();
    }),
    Ot.useEffect(() => {
      n.shouldUnregister && f._subjects.values.next({ values: f._getWatch() });
    }, [n.shouldUnregister, f]),
    (i.current.formState = y1(s, f)),
    i.current
  );
}
const F1 = U2,
  D1 = (n) => {
    const [i, o] = M.useState(n),
      s = M.useCallback(() => {
        o((a) => !a);
      }, []);
    return [i, s];
  },
  $0 = () => {
    const {
        register: n,
        handleSubmit: i,
        getValues: o,
        formState: { errors: s },
        reset: a,
      } = A1(),
      f = F1(),
      { loading: d, error: h } = $2((N) => N.auth),
      [m, y] = D1(!1),
      [g, w] = M.useState(null),
      C = Dl();
    return {
      register: n,
      handleSubmit: i,
      getValues: o,
      errors: s,
      loading: d,
      error: h,
      showPassword: m,
      togglePasswordVisibility: y,
      serverError: g,
      setServerError: w,
      reset: a,
      navigate: C,
      dispatch: f,
    };
  },
  z1 = () => {
    const {
      register: n,
      handleSubmit: i,
      errors: o,
      loading: s,
      showPassword: a,
      togglePasswordVisibility: f,
      serverError: d,
      setServerError: h,
      reset: m,
      navigate: y,
      dispatch: g,
    } = $0();
    return {
      register: n,
      handleSubmit: i,
      errors: o,
      loading: s,
      showPassword: a,
      togglePasswordVisibility: f,
      serverError: d,
      onSubmit: async (C) => {
        h(null);
        try {
          const N = await $l(C.email, C.password);
          N.token
            ? (localStorage,
              setItem('authToken', N.token),
              g(F0(N.token)),
              h(null),
              y('/'))
            : h('Не удалось получить токен');
        } catch (N) {
          N instanceof Error ? h(N.message) : h('Произошла неизвестная ошибка');
        } finally {
          m();
        }
      },
    };
  };
function H0(n) {
  var i,
    o,
    s = '';
  if (typeof n == 'string' || typeof n == 'number') s += n;
  else if (typeof n == 'object')
    if (Array.isArray(n)) {
      var a = n.length;
      for (i = 0; i < a; i++)
        n[i] && (o = H0(n[i])) && (s && (s += ' '), (s += o));
    } else for (o in n) n[o] && (s && (s += ' '), (s += o));
  return s;
}
function xa() {
  for (var n, i, o = 0, s = '', a = arguments.length; o < a; o++)
    (n = arguments[o]) && (i = H0(n)) && (s && (s += ' '), (s += i));
  return s;
}
const j1 = '_button_4ykau_1',
  Rp = {
    button: j1,
    'button--primary': '_button--primary_4ykau_16',
    'button--secondary': '_button--secondary_4ykau_26',
  },
  b0 = ({ variant: n = 'primary', className: i, children: o, ...s }) =>
    re.jsx('button', {
      className: xa(Rp.button, Rp[`button--${n}`], i),
      ...s,
      children: o,
    }),
  M1 = {},
  Ca = ({ src: n, alt: i, onClick: o, className: s }) =>
    re.jsx('img', {
      src: n,
      alt: i,
      onClick: o,
      className: `${M1.icon} ${s}`,
      style: { cursor: o ? 'pointer' : 'default' },
    }),
  I1 = '_inputWrapper_1j7d5_1',
  U1 = '_input_1j7d5_1',
  B1 = '_icon_1j7d5_26',
  sa = { inputWrapper: I1, input: U1, icon: B1 },
  Vr = Ot.forwardRef(({ className: n, icon: i, ...o }, s) =>
    re.jsxs('div', {
      className: xa(sa.inputWrapper),
      children: [
        re.jsx('input', { className: xa(sa.input, n), ...o, ref: s }),
        i && re.jsx('span', { className: sa.icon, children: i }),
      ],
    }),
  ),
  W0 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20xml:space='preserve'%3e%3cdefs%3e%3c/defs%3e%3cg%20style='stroke:%20none;%20stroke-width:%200;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20none;%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='translate(1.4065934065934016%201.4065934065934016)%20scale(2.81%202.81)'%20%3e%3ccircle%20cx='45'%20cy='45'%20r='45'%20style='stroke:%20none;%20stroke-width:%201;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20rgb(132,130,130);%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='%20matrix(1%200%200%201%200%200)%20'/%3e%3cpolygon%20points='21.07,31.48%2036.59,45.44%2021.07,58.53%20'%20style='stroke:%20none;%20stroke-width:%201;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20rgb(51,51,51);%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='%20matrix(1%200%200%201%200%200)%20'/%3e%3cpolygon%20points='45,48.97%2023.68,29.79%2066.32,29.79%20'%20style='stroke:%20none;%20stroke-width:%201;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20rgb(51,51,51);%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='%20matrix(1%200%200%201%200%200)%20'/%3e%3cpath%20d='M%2038.842%2047.465%20l%205.155%204.637%20c%200.286%200.257%200.645%200.385%201.003%200.385%20s%200.718%20-0.128%201.003%20-0.385%20l%205.155%20-4.637%20l%2015.1%2012.743%20H%2023.741%20L%2038.842%2047.465%20z'%20style='stroke:%20none;%20stroke-width:%201;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20rgb(51,51,51);%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='%20matrix(1%200%200%201%200%200)%20'%20stroke-linecap='round'%20/%3e%3cpolygon%20points='53.41,45.44%2068.93,31.48%2068.93,58.53%20'%20style='stroke:%20none;%20stroke-width:%201;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20rgb(51,51,51);%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='%20matrix(1%200%200%201%200%200)%20'/%3e%3c/g%3e%3c/svg%3e",
  Ra =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20xml:space='preserve'%3e%3cdefs%3e%3c/defs%3e%3cg%20style='stroke:%20none;%20stroke-width:%200;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20none;%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='translate(1.4065934065934016%201.4065934065934016)%20scale(2.81%202.81)'%20%3e%3cpath%20d='M%2045%2073.264%20c%20-14.869%200%20-29.775%20-8.864%20-44.307%20-26.346%20c%20-0.924%20-1.112%20-0.924%20-2.724%200%20-3.836%20C%2015.225%2025.601%2030.131%2016.737%2045%2016.737%20c%2014.868%200%2029.775%208.864%2044.307%2026.345%20c%200.925%201.112%200.925%202.724%200%203.836%20C%2074.775%2064.399%2059.868%2073.264%2045%2073.264%20z%20M%206.934%2045%20C%2019.73%2059.776%2032.528%2067.264%2045%2067.264%20c%2012.473%200%2025.27%20-7.487%2038.066%20-22.264%20C%2070.27%2030.224%2057.473%2022.737%2045%2022.737%20C%2032.528%2022.737%2019.73%2030.224%206.934%2045%20z'%20style='stroke:%20none;%20stroke-width:%201;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20rgb(132,130,130);%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='%20matrix(1%200%200%201%200%200)%20'%20stroke-linecap='round'%20/%3e%3cpath%20d='M%2045%2062%20c%20-9.374%200%20-17%20-7.626%20-17%20-17%20s%207.626%20-17%2017%20-17%20s%2017%207.626%2017%2017%20S%2054.374%2062%2045%2062%20z%20M%2045%2034%20c%20-6.065%200%20-11%204.935%20-11%2011%20s%204.935%2011%2011%2011%20s%2011%20-4.935%2011%20-11%20S%2051.065%2034%2045%2034%20z'%20style='stroke:%20none;%20stroke-width:%201;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20rgb(132,130,130);%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='%20matrix(1%200%200%201%200%200)%20'%20stroke-linecap='round'%20/%3e%3c/g%3e%3c/svg%3e",
  Pa =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20xml:space='preserve'%3e%3cdefs%3e%3c/defs%3e%3cg%20style='stroke:%20none;%20stroke-width:%200;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20none;%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='translate(1.4065934065934016%201.4065934065934016)%20scale(2.81%202.81)'%20%3e%3cpath%20d='M%2013.148%2079.853%20c%20-0.768%200%20-1.536%20-0.293%20-2.121%20-0.879%20c%20-1.172%20-1.171%20-1.172%20-3.071%200%20-4.242%20l%2063.705%20-63.705%20c%201.172%20-1.172%203.07%20-1.172%204.242%200%20c%201.172%201.171%201.172%203.071%200%204.242%20L%2015.269%2078.974%20C%2014.684%2079.56%2013.916%2079.853%2013.148%2079.853%20z'%20style='stroke:%20none;%20stroke-width:%201;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20rgb(132,130,130);%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='%20matrix(1%200%200%201%200%200)%20'%20stroke-linecap='round'%20/%3e%3cpath%20d='M%2025.296%2067.703%20c%20-0.504%200%20-1.012%20-0.127%20-1.474%20-0.388%20C%2016.105%2062.961%208.323%2056.098%200.693%2046.918%20c%20-0.924%20-1.112%20-0.924%20-2.724%200%20-3.835%20c%2021.533%20-25.904%2043.565%20-32.767%2065.485%20-20.399%20c%200.816%200.461%201.371%201.277%201.498%202.207%20s%20-0.188%201.864%20-0.852%202.527%20L%2027.418%2066.824%20C%2026.841%2067.402%2026.073%2067.703%2025.296%2067.703%20z%20M%206.933%2045%20c%205.972%206.896%2011.974%2012.242%2017.891%2015.934%20l%2034.842%20-34.842%20C%2042.131%2018.098%2024.824%2024.311%206.933%2045%20z'%20style='stroke:%20none;%20stroke-width:%201;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20rgb(132,130,130);%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='%20matrix(1%200%200%201%200%200)%20'%20stroke-linecap='round'%20/%3e%3cpath%20d='M%2034.394%2058.606%20c%20-0.795%200%20-1.558%20-0.315%20-2.121%20-0.878%20C%2028.873%2054.329%2027%2049.809%2027%2045%20c%200%20-9.925%208.075%20-18%2018%20-18%20c%204.749%200%209.23%201.833%2012.617%205.163%20c%200.569%200.56%200.893%201.322%200.897%202.12%20s%20-0.308%201.565%20-0.869%202.132%20L%2036.524%2057.719%20c%20-0.562%200.566%20-1.326%200.886%20-2.124%200.888%20C%2034.398%2058.606%2034.396%2058.606%2034.394%2058.606%20z%20M%2045%2033%20c%20-6.617%200%20-12%205.383%20-12%2012%20c%200%202.175%200.574%204.261%201.651%206.085%20L%2050.995%2034.6%20C%2049.19%2033.556%2047.136%2033%2045%2033%20z'%20style='stroke:%20none;%20stroke-width:%201;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20rgb(132,130,130);%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='%20matrix(1%200%200%201%200%200)%20'%20stroke-linecap='round'%20/%3e%3cpath%20d='M%2044.973%2073.26%20c%20-3.552%200%20-7.104%20-0.501%20-10.657%20-1.505%20c%20-1.594%20-0.45%20-2.521%20-2.108%20-2.071%20-3.703%20c%200.45%20-1.594%202.105%20-2.524%203.703%20-2.07%20C%2051.38%2070.341%2067.226%2063.287%2083.066%2045%20c%20-3.977%20-4.592%20-7.98%20-8.514%20-11.925%20-11.68%20c%20-1.292%20-1.037%20-1.499%20-2.925%20-0.462%20-4.218%20c%201.038%20-1.292%202.927%20-1.499%204.218%20-0.462%20c%204.796%203.849%209.644%208.708%2014.409%2014.442%20c%200.925%201.111%200.925%202.724%200%203.835%20C%2074.743%2064.438%2059.874%2073.26%2044.973%2073.26%20z'%20style='stroke:%20none;%20stroke-width:%201;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20rgb(132,130,130);%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='%20matrix(1%200%200%201%200%200)%20'%20stroke-linecap='round'%20/%3e%3cpath%20d='M%2045%2063%20c%20-0.386%200%20-0.77%20-0.013%20-1.149%20-0.036%20c%20-1.654%20-0.101%20-2.913%20-1.523%20-2.812%20-3.178%20c%200.102%20-1.652%201.527%20-2.909%203.178%20-2.811%20C%2044.476%2056.991%2044.737%2057%2045%2057%20c%206.617%200%2012%20-5.383%2012%20-12%20c%200%20-0.27%20-0.009%20-0.538%20-0.026%20-0.803%20c%20-0.107%20-1.653%201.146%20-3.081%202.799%20-3.188%20c%201.665%20-0.103%203.082%201.146%203.189%202.799%20C%2062.987%2044.202%2063%2044.599%2063%2045%20C%2063%2054.925%2054.925%2063%2045%2063%20z'%20style='stroke:%20none;%20stroke-width:%201;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20rgb(132,130,130);%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='%20matrix(1%200%200%201%200%200)%20'%20stroke-linecap='round'%20/%3e%3c/g%3e%3c/svg%3e",
  _t = {
    'login-form': '_login-form_1pvs2_1',
    'login-form__form': '_login-form__form_1pvs2_10',
    'login-form__title': '_login-form__title_1pvs2_21',
    'login-form__label': '_login-form__label_1pvs2_35',
    'login-form__button': '_login-form__button_1pvs2_43',
    'login-form__error': '_login-form__error_1pvs2_46',
    'login-form__register-link': '_login-form__register-link_1pvs2_51',
  },
  V1 = () => {
    const {
      register: n,
      handleSubmit: i,
      loading: o,
      errors: s,
      onSubmit: a,
      showPassword: f,
      togglePasswordVisibility: d,
      serverError: h,
    } = z1();
    return re.jsx('div', {
      className: _t['login-form'],
      children: re.jsxs('form', {
        onSubmit: i(a),
        className: _t['login-form__form'],
        children: [
          re.jsx('div', {
            className: _t['login-form__title'],
            children: 'Вход',
          }),
          re.jsxs('div', {
            className: _t['login-form__label'],
            children: [
              re.jsx(Vr, {
                type: 'email',
                placeholder: 'Эл.почта*',
                className: _t['login-form__input'],
                ...n('email', {
                  setValueAs: (m) => m.trim(),
                  required: 'Email обязателен',
                  pattern: {
                    value:
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|co\.uk|ru|ua|etc)$/i,
                    message: 'Неверный формат email',
                  },
                  maxLength: {
                    value: 50,
                    message: 'E-mail не должен превышать 50 символов.',
                  },
                }),
                icon: re.jsx('img', { src: W0, alt: 'Email Icon' }),
              }),
              s.email &&
                re.jsx('span', {
                  className: _t['login-form__error'],
                  children: s.email.message,
                }),
            ],
          }),
          re.jsxs('div', {
            className: _t['login-form__label'],
            children: [
              re.jsx(Vr, {
                placeholder: 'Пароль*',
                type: f ? 'text' : 'password',
                className: `${_t['login-form__input']} ${_t['login-form__input-password']}`,
                ...n('password', {
                  required: 'Требуется пароль',
                  minLength: {
                    value: 6,
                    message: 'Пароль должен содержать минимум 6 символов.',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Пароль не должен превышать 20 символов.',
                  },
                }),
                icon: re.jsx(Ca, {
                  src: f ? Ra : Pa,
                  alt: f ? 'Скрыть пароль' : 'Показать пароль',
                  onClick: d,
                }),
              }),
              s.password &&
                re.jsx('span', {
                  className: _t['login-form__error'],
                  children: s.password.message,
                }),
              h &&
                re.jsx('span', {
                  className: _t['login-form__error'],
                  children: h,
                }),
              o && re.jsx('p', { children: 'Загрузка...' }),
            ],
          }),
          re.jsx(b0, {
            type: 'submit',
            variant: 'primary',
            className: _t['login-form__button'],
            children: 'Войти',
          }),
          re.jsxs('div', {
            className: _t['login-form__register-link'],
            children: [
              'Нет аккаунта?',
              re.jsx($r, {
                to: '/register',
                className: _t['login-form__register-link__text'],
                children: 'Зарегистрироваться',
              }),
            ],
          }),
        ],
      }),
    });
  },
  $1 = () => {
    const {
      register: n,
      handleSubmit: i,
      getValues: o,
      errors: s,
      loading: a,
      showPassword: f,
      togglePasswordVisibility: d,
      serverError: h,
      setServerError: m,
      reset: y,
      navigate: g,
      dispatch: w,
    } = $0();
    return {
      register: n,
      handleSubmit: i,
      getValues: o,
      errors: s,
      loading: a,
      showPassword: f,
      togglePasswordVisibility: d,
      serverError: h,
      onSubmit: async (N) => {
        m(null);
        try {
          console.log('Data before registration:', N);
          const E = await y0(N.name, N.email, N.password, N.confirmPassword);
          if ((console.log('Registration response:', E), E.token)) {
            const A = await $l(N.email, N.password);
            console.log('Login response:', A),
              A.token
                ? (localStorage,
                  setItem('authToken', A.token),
                  w(F0(A.token)),
                  g('/'))
                : m('Не удалось войти в систему после регистрации');
          } else m('Не удалось получить токен при регистрации');
        } catch (E) {
          console.log('Error:', E),
            m(E instanceof Error ? E.message : 'Произошла неизвестная ошибка');
        } finally {
          y();
        }
      },
    };
  },
  Ge = {
    'register-form': '_register-form_wvt00_1',
    'register-form__form': '_register-form__form_wvt00_10',
    'register-form__title': '_register-form__title_wvt00_21',
    'register-form__label': '_register-form__label_wvt00_35',
    'register-form__button': '_register-form__button_wvt00_43',
    'register-form__error': '_register-form__error_wvt00_46',
    'register-form__login-link': '_register-form__login-link_wvt00_51',
  },
  H1 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20xml:space='preserve'%3e%3cdefs%3e%3c/defs%3e%3cg%20style='stroke:%20none;%20stroke-width:%200;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20none;%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='translate(1.4065934065934016%201.4065934065934016)%20scale(2.81%202.81)'%20%3e%3cpath%20d='M%2045%200%20C%2020.147%200%200%2020.147%200%2045%20c%200%2024.853%2020.147%2045%2045%2045%20s%2045%20-20.147%2045%20-45%20C%2090%2020.147%2069.853%200%2045%200%20z%20M%2045%2022.007%20c%208.899%200%2016.14%207.241%2016.14%2016.14%20c%200%208.9%20-7.241%2016.14%20-16.14%2016.14%20c%20-8.9%200%20-16.14%20-7.24%20-16.14%20-16.14%20C%2028.86%2029.248%2036.1%2022.007%2045%2022.007%20z%20M%2045%2083.843%20c%20-11.135%200%20-21.123%20-4.885%20-27.957%20-12.623%20c%203.177%20-5.75%208.144%20-10.476%2014.05%20-13.341%20c%202.009%20-0.974%204.354%20-0.958%206.435%200.041%20c%202.343%201.126%204.857%201.696%207.473%201.696%20c%202.615%200%205.13%20-0.571%207.473%20-1.696%20c%202.083%20-1%204.428%20-1.015%206.435%20-0.041%20c%205.906%202.864%2010.872%207.591%2014.049%2013.341%20C%2066.123%2078.957%2056.135%2083.843%2045%2083.843%20z'%20style='stroke:%20none;%20stroke-width:%201;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20rgb(132,130,130);%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='%20matrix(1%200%200%201%200%200)%20'%20stroke-linecap='round'%20/%3e%3c/g%3e%3c/svg%3e",
  b1 = () => {
    const n = Dl(),
      {
        register: i,
        handleSubmit: o,
        loading: s,
        errors: a,
        onSubmit: f,
        showPassword: d,
        togglePasswordVisibility: h,
        serverError: m,
        getValues: y,
      } = $1(),
      g = async (w) => {
        (await f(w)) && n('/');
      };
    return re.jsx('div', {
      className: Ge['register-form'],
      children: re.jsxs('form', {
        onSubmit: o(g),
        className: Ge['register-form__form'],
        children: [
          re.jsx('div', {
            className: Ge['register-form__title'],
            children: 'Регистрация',
          }),
          re.jsxs('div', {
            className: Ge['register-form__label'],
            children: [
              re.jsx(Vr, {
                placeholder: 'Имя*',
                className: Ge['register-form__input'],
                ...i('name', {
                  setValueAs: (w) => w.trim(),
                  required: 'Имя обязательно',
                  minLength: {
                    value: 2,
                    message: 'Имя должно содержать минимум 2 символа.',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Имя должно содержать максимум 20 символа.',
                  },
                }),
                icon: re.jsx('img', { src: H1, alt: 'User Icon' }),
              }),
              a.name &&
                re.jsx('span', {
                  className: Ge['register-form__error'],
                  children: a.name.message,
                }),
            ],
          }),
          re.jsxs('div', {
            className: Ge['register-form__label'],
            children: [
              re.jsx(Vr, {
                type: 'email',
                placeholder: 'Email*',
                className: Ge['register-form__input'],
                ...i('email', {
                  setValueAs: (w) => w.trim(),
                  required: 'Email обязателен',
                  pattern: {
                    value:
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|co\.uk|ru|ua|etc)$/i,
                    message: 'Неверный формат email',
                  },
                  maxLength: {
                    value: 50,
                    message: 'E-mail не должен превышать 50 символов.',
                  },
                }),
                icon: re.jsx('img', { src: W0, alt: 'Email Icon' }),
              }),
              a.email &&
                re.jsx('span', {
                  className: Ge['register-form__error'],
                  children: a.email.message,
                }),
            ],
          }),
          re.jsxs('div', {
            className: Ge['register-form__label'],
            children: [
              re.jsx(Vr, {
                placeholder: 'Пароль*',
                type: d ? 'text' : 'password',
                className: `${Ge['register-form__input']}`,
                ...i('password', {
                  required: 'Требуется пароль',
                  minLength: {
                    value: 6,
                    message: 'Пароль должен содержать минимум 6 символов.',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Пароль не должен превышать 20 символов.',
                  },
                }),
                icon: re.jsx(Ca, {
                  src: d ? Ra : Pa,
                  alt: d ? 'Скрыть пароль' : 'Показать пароль',
                  onClick: h,
                }),
              }),
              a.password &&
                re.jsx('span', {
                  className: Ge['register-form__error'],
                  children: a.password.message,
                }),
            ],
          }),
          re.jsxs('div', {
            className: Ge['register-form__label'],
            children: [
              re.jsx(Vr, {
                placeholder: 'Подтвердите пароль*',
                type: d ? 'text' : 'password',
                className: `${Ge['register-form__input']}`,
                ...i('confirmPassword', {
                  required: 'Подтверждение пароля обязательно',
                  validate: (w) => w === y('password') || 'Пароли не совпадают',
                }),
                icon: re.jsx(Ca, {
                  src: d ? Ra : Pa,
                  alt: d ? 'Скрыть пароль' : 'Показать пароль',
                  onClick: h,
                }),
              }),
              a.confirmPassword &&
                re.jsx('span', {
                  className: Ge['register-form__error'],
                  children: a.confirmPassword.message,
                }),
            ],
          }),
          m &&
            re.jsx('span', {
              className: Ge['register-form__error'],
              children: m,
            }),
          s && re.jsx('p', { children: 'Загрузка...' }),
          re.jsx(b0, {
            type: 'submit',
            variant: 'primary',
            className: Ge['register-form__button'],
            children: 'Зарегистрироваться',
          }),
          re.jsxs('div', {
            className: Ge['register-form__login-link'],
            children: [
              'Уже есть аккаунт?',
              re.jsx($r, {
                to: '/login',
                className: Ge['register-form__login-link__text'],
                children: 'Войти',
              }),
            ],
          }),
        ],
      }),
    });
  },
  W1 = () => {
    const n = Dl();
    return (
      M.useEffect(() => {
        n('/register');
      }, [n]),
      re.jsxs('div', {
        children: [
          re.jsx('h1', { children: 'Welcome' }),
          re.jsx($r, { to: '/login', children: 'Login' }),
          re.jsx('br', {}),
          re.jsx($r, { to: '/register', children: 'Register' }),
        ],
      })
    );
  },
  q1 = () =>
    re.jsxs($y, {
      children: [
        re.jsx(dl, { path: '/', element: re.jsx(W1, {}) }),
        re.jsx(dl, { path: '/login', element: re.jsx(V1, {}) }),
        re.jsx(dl, { path: '/register', element: re.jsx(b1, {}) }),
      ],
    }),
  K1 = () => re.jsx('div', { children: re.jsx(q1, {}) }),
  Q1 = { loading: !1, error: null },
  ua = T0(
    'register/registerUser',
    async (
      { name: n, email: i, password: o, confirmPassword: s },
      { rejectWithValue: a, dispatch: f },
    ) => {
      try {
        if ((await y0(n, i, o, s)).token) {
          const h = await $l(i, o);
          if (h.token) return f(vl({ token: h.token })), h.token;
          throw new Error('Не удалось войти в систему после регистрации');
        } else throw new Error('Токен не получен');
      } catch (d) {
        return a(d.message || 'Неизвестная ошибка при регистрации');
      }
    },
  ),
  J1 = Ba({
    name: 'register',
    initialState: Q1,
    reducers: {},
    extraReducers: (n) => {
      n.addCase(ua.pending, (i) => {
        (i.loading = !0), (i.error = null);
      })
        .addCase(ua.fulfilled, (i, o) => {
          (i.loading = !1),
            (i.error = null),
            L0('registerToken'),
            O0('registerToken', o.payload),
            localStorage,
            setItem('authToken', o.payload);
        })
        .addCase(ua.rejected, (i, o) => {
          (i.loading = !1), (i.error = o.payload || 'Неизвестная ошибка');
        });
    },
  }),
  X1 = J1.reducer,
  Y1 = { email: null, token: null, id: null },
  q0 = Ba({
    name: 'user',
    initialState: Y1,
    reducers: {
      setUser(n, i) {
        (n.email = i.payload.email),
          (n.token = i.payload.token),
          (n.id = i.payload.id);
      },
      removeUser(n) {
        (n.email = null), (n.token = null), (n.id = null);
      },
    },
  }),
  { setUser: kw, removeUser: _w } = q0.actions,
  G1 = q0.reducer,
  Z1 = Hv({ reducer: { user: G1, auth: f1, register: X1 } }),
  ew = Gm.createRoot(document.getElementById('root'));
ew.render(
  re.jsx(j2, { store: Z1, children: re.jsx(d2, { children: re.jsx(K1, {}) }) }),
);
