'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _layouts = require('../../../components/layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _requestRow = require('../../../components/requestRow');

var _requestRow2 = _interopRequireDefault(_requestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'renderRequestRows',
        value: function renderRequestRows() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                var complated = request[3];
                var approvalsCount = parseInt(request[4]);

                request[1] = parseFloat(_web2.default.fromWei(request[1], 'ether'));
                request[4] = parseInt(request[4]) + '/' + _this2.props.approversCount;
                request.splice(-2, 1);

                return _react2.default.createElement(_requestRow2.default, {
                    request: request,
                    id: index,
                    key: index,
                    approvalsCount: approvalsCount,
                    approversCount: _this2.props.approversCount,
                    complated: complated,
                    address: _this2.props.address
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_layouts2.default, null, _react2.default.createElement('h3', null, 'Request List'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new' }, _react2.default.createElement('a', null, _react2.default.createElement(_semanticUiReact.Button, {
                primary: true,
                floated: 'right',
                style: { marginBottom: 10 }
            }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, null, _react2.default.createElement(Header, null, _react2.default.createElement(Row, null, _react2.default.createElement(HeaderCell, null, 'ID'), _react2.default.createElement(HeaderCell, null, 'Description'), _react2.default.createElement(HeaderCell, null, 'Amount (wei)'), _react2.default.createElement(HeaderCell, null, 'Recipient'), _react2.default.createElement(HeaderCell, null, 'Approval Count'), _react2.default.createElement(HeaderCell, null, 'Approve'), _react2.default.createElement(HeaderCell, null, 'Finalize'))), _react2.default.createElement(Body, null, this.renderRequestRows())), _react2.default.createElement('div', null, 'Found ', this.props.requestsCount, ' requests'));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestsCount, approversCount, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.getRequestsCount();

                            case 4:
                                requestsCount = _context.sent;

                                requestsCount = parseInt(requestsCount);

                                _context.next = 8;
                                return campaign.approversCount();

                            case 8:
                                approversCount = _context.sent;

                                approversCount = parseInt(approversCount);

                                _context.next = 12;
                                return _promise2.default.all(Array(requestsCount).fill().map(function (element, index) {
                                    return campaign.requests(index);
                                }));

                            case 12:
                                requests = _context.sent;
                                return _context.abrupt('return', { address: address, requests: requests, requestsCount: requestsCount, approversCount: approversCount });

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;