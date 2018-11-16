/*wfsw:my_projects_header_dropdown_container*/
define('my_projects_header_dropdown_container', ['exports', 'react', 'prop-types', 'lnrs', 'tracking', 'my_projects_header_dropdown_api', 'my_projects_header_dropdown_card', 'room_planner_constants', 'design_services_constants', 'my_projects_header_dropdown_constants', 'logger', 'classnames', '@styles/plan_lane/my_projects_header_dropdown/my_projects_header_dropdown_container', 'turbine_helper_babel', 'turbine_helper_lnrs'], function(exports, _react, _propTypes, _lnrs, _tracking, _my_projects_header_dropdown_api, _my_projects_header_dropdown_card, _room_planner_constants, _design_services_constants, _my_projects_header_dropdown_constants, _logger, _classnames, _my_projects_header_dropdown_container, _turbine_helper_babel, _turbine_helper_lnrs) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var _lnrs2 = _turbine_helper_babel.interopRequireDefault(_lnrs);
    var _tracking2 = _turbine_helper_babel.interopRequireDefault(_tracking);
    var _my_projects_header_dropdown_card2 = _turbine_helper_babel.interopRequireDefault(_my_projects_header_dropdown_card);
    var _logger2 = _turbine_helper_babel.interopRequireDefault(_logger);
    var _classnames2 = _turbine_helper_babel.interopRequireDefault(_classnames);
    var _my_projects_header_dropdown_container2 = _turbine_helper_babel.interopRequireDefault(_my_projects_header_dropdown_container);
    var _lnrsDesignServices = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('DesignServices', 'Design Services'))
      , _lnrsKeepTrackOfAllYourProjectsAndCreateDesignsClientWillLovePeriod = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('KeepTrackOfAllYourProjectsAndCreateDesignsClientWillLovePeriod', 'Keep track of all your projects and create designs clients{1}will love.'))
      , _lnrsWorkWithDesignServices = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('WorkWithDesignServices', 'Work with Design Services'))
      , _lnrsCreateSpacesForRealClientAndFlexYourDesignSkillsPeriod = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('CreateSpacesForRealClientAndFlexYourDesignSkillsPeriod', 'Create spaces for real clients and flex your design{1}skills.'))
      , _lnrsDesignYourSpace = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('DesignYourSpace', 'Design Your Space'))
      , _lnrsPutTogetherAProfessionalSpaceWithALittleHelpFromWayfairPeriod = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('PutTogetherAProfessionalSpaceWithALittleHelpFromWayfairPeriod', 'Put together a professional space with a little help from{1}Wayfair.'))
      , _lnrsWorkWithARealInterior = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('WorkWithARealInterior', 'Work with a real interior designer with Design Services.'))
      , _lnrsMakeOverYourSpace = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('MakeOverYourSpace', 'Make Over Your Space'))
      , _lnrsWelcomeBackFirstnameExclamation = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('WelcomeBackFirstnameExclamation', 'Welcome Back, {1}!'))
      , _lnrsRoomPlanner = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('RoomPlanner', 'Room Planner'))
      , _lnrsGetCreative = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('GetCreative', 'Get Creative'))
      , _lnrsPlayAroundWithRoomPlanner = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('PlayAroundWithRoomPlanner', 'Play around with Room Planner to create mood boards & designs.'))
      , _lnrsLists = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('Lists', 'Lists'))
      , _lnrsSaveWhatYouLove = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('SaveWhatYouLove', 'Save What You Love'))
      , _lnrsKeepTrackOfItemsThat = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('KeepTrackOfItemsThat', 'Keep track of items that catch your eye by saving them to a List.'));
    var LISTS_ICON_ID = 'heart-empty';
    var ROOM_PLANNER_IRE_ID = 57029374;
    var LISTS_IRE_ID = 57029371;
    var DESIGN_SERVICES_IRE_ID = 57029367;
    var NO_CARD = 0;
    var ROOM_PLANNER_CARD = 1;
    var LISTS_CARD = 2;
    var DESIGN_SERVICES_CARD = 3;
    var MyProjectsHeaderDropdownContainer = function(_React$Component) {
        _turbine_helper_babel.inherits(MyProjectsHeaderDropdownContainer, _React$Component);
        function MyProjectsHeaderDropdownContainer() {
            var _ref;
            var _temp, _this, _ret;
            _turbine_helper_babel.classCallCheck(this, MyProjectsHeaderDropdownContainer);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _turbine_helper_babel.possibleConstructorReturn(this, (_ref = MyProjectsHeaderDropdownContainer.__proto__ || Object.getPrototypeOf(MyProjectsHeaderDropdownContainer)).call.apply(_ref, [this].concat(args))),
            _this),
            _this.state = {
                customerFirstName: '',
                interactedCard: NO_CARD,
                isDesignServicesUser: false,
                isUserB2BCustomer: false,
                isUserInteriorDesignerCompanyType: false,
                isDesignServicesUserInfoFetching: false
            },
            _this._mostRecentRoomPromise = Promise.resolve({}),
            _this._mostRecentProjectPromise = Promise.resolve({}),
            _this.handleClickRoomPlannerCard = function() {
                if (_this.state.interactedCard !== NO_CARD) {
                    return;
                }
                _this.setState({
                    interactedCard: ROOM_PLANNER_CARD
                });
                if (!(0,
                _my_projects_header_dropdown_api.isLoggedIn)()) {
                    (0,
                    _my_projects_header_dropdown_api.redirectToLoginThenRoomPlannerOnboardingPage)();
                } else {
                    _this._mostRecentRoomPromise.then(function(mostRecentRoom) {
                        if (mostRecentRoom && mostRecentRoom.url) {
                            (0,
                            _my_projects_header_dropdown_api.redirectToUrl)(mostRecentRoom.url);
                        } else {
                            (0,
                            _my_projects_header_dropdown_api.redirectToRoomPlannerOnboardingPage)();
                        }
                    });
                }
            }
            ,
            _this.handleClickListsCard = function() {
                if (_this.state.interactedCard !== NO_CARD) {
                    return;
                }
                _this.setState({
                    interactedCard: LISTS_CARD
                });
                (0,
                _my_projects_header_dropdown_api.redirectToListsPage)();
            }
            ,
            _this.handleClickDesignServicesCard = function() {
                if (_this.state.interactedCard !== NO_CARD || _this.state.isDesignServicesUserInfoFetching) {
                    return;
                }
                _this.setState({
                    interactedCard: DESIGN_SERVICES_CARD
                });
                if (!(0,
                _my_projects_header_dropdown_api.isLoggedIn)()) {
                    (0,
                    _my_projects_header_dropdown_api.redirectToDesignServicesClientLandingPage)();
                } else if ((0,
                _my_projects_header_dropdown_api.isUserDesigner)()) {
                    (0,
                    _my_projects_header_dropdown_api.redirectToDesignerDashboard)();
                } else if (_this.state.isUserB2BCustomer && !_this.state.isDesignServicesUser) {
                    if (_this.state.isUserInteriorDesignerCompanyType) {
                        (0,
                        _my_projects_header_dropdown_api.redirectToDesignServicesDesignerLandingPage)();
                    } else {
                        (0,
                        _my_projects_header_dropdown_api.redirectToBusinessInteriorsPage)();
                    }
                } else {
                    _this._mostRecentProjectPromise.then(function(mostRecentProject) {
                        if (mostRecentProject && mostRecentProject.url) {
                            (0,
                            _my_projects_header_dropdown_api.redirectToUrl)(mostRecentProject.url);
                        } else {
                            (0,
                            _my_projects_header_dropdown_api.redirectToDesignServicesClientLandingPage)();
                        }
                    });
                }
            }
            ,
            _this.shouldShowDesignServicesLoadingSpinner = function() {
                return _this.state.interactedCard === DESIGN_SERVICES_CARD || (0,
                _my_projects_header_dropdown_api.isLoggedIn)() && _this.state.isDesignServicesUserInfoFetching;
            }
            ,
            _this.allowHoverState = function() {
                return _this.state.interactedCard === NO_CARD;
            }
            ,
            _this.getDesignServicesCardInfo = function() {
                if ((0,
                _my_projects_header_dropdown_api.isUserDesigner)()) {
                    return {
                        title: _turbine_helper_lnrs.doReplacement({
                            key: 'DesignServices',
                            translation: _lnrsDesignServices,
                            replacements: []
                        }, _react2.default),
                        text: _turbine_helper_lnrs.doReplacement({
                            key: 'KeepTrackOfAllYourProjectsAndCreateDesignsClientWillLovePeriod',
                            translation: _lnrsKeepTrackOfAllYourProjectsAndCreateDesignsClientWillLovePeriod,
                            replacements: [[' ']]
                        }, _react2.default)
                    };
                } else if (_this.state.isUserB2BCustomer) {
                    return _this.state.isUserInteriorDesignerCompanyType ? {
                        title: _turbine_helper_lnrs.doReplacement({
                            key: 'WorkWithDesignServices',
                            translation: _lnrsWorkWithDesignServices,
                            replacements: []
                        }, _react2.default),
                        text: _turbine_helper_lnrs.doReplacement({
                            key: 'CreateSpacesForRealClientAndFlexYourDesignSkillsPeriod',
                            translation: _lnrsCreateSpacesForRealClientAndFlexYourDesignSkillsPeriod,
                            replacements: [[' ']]
                        }, _react2.default)
                    } : {
                        title: _turbine_helper_lnrs.doReplacement({
                            key: 'DesignYourSpace',
                            translation: _lnrsDesignYourSpace,
                            replacements: []
                        }, _react2.default),
                        text: _turbine_helper_lnrs.doReplacement({
                            key: 'PutTogetherAProfessionalSpaceWithALittleHelpFromWayfairPeriod',
                            translation: _lnrsPutTogetherAProfessionalSpaceWithALittleHelpFromWayfairPeriod,
                            replacements: [[' ']]
                        }, _react2.default)
                    };
                } else if ((0,
                _my_projects_header_dropdown_api.isLoggedIn)()) {
                    return {
                        title: _turbine_helper_lnrs.doReplacement({
                            key: 'DesignServices',
                            translation: _lnrsDesignServices,
                            replacements: []
                        }, _react2.default),
                        text: _turbine_helper_lnrs.doReplacement({
                            key: 'WorkWithARealInterior',
                            translation: _lnrsWorkWithARealInterior,
                            replacements: []
                        }, _react2.default)
                    };
                } else {
                    return {
                        title: _turbine_helper_lnrs.doReplacement({
                            key: 'MakeOverYourSpace',
                            translation: _lnrsMakeOverYourSpace,
                            replacements: []
                        }, _react2.default),
                        text: _turbine_helper_lnrs.doReplacement({
                            key: 'WorkWithARealInterior',
                            translation: _lnrsWorkWithARealInterior,
                            replacements: []
                        }, _react2.default)
                    };
                }
            }
            ,
            _this.shouldShowDesignServicesCard = function() {
                return _this.state.isDesignServicesUser || _this.props.shouldShowDesignServicesCard;
            }
            ,
            _temp),
            _turbine_helper_babel.possibleConstructorReturn(_this, _ret);
        }
        _turbine_helper_babel.createClass(MyProjectsHeaderDropdownContainer, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;
                if ((0,
                _my_projects_header_dropdown_api.isLoggedIn)()) {
                    this._mostRecentRoomPromise = (0,
                    _my_projects_header_dropdown_api.fetchMostRecentRoom)();
                    this._mostRecentProjectPromise = (0,
                    _my_projects_header_dropdown_api.fetchMostRecentProject)();
                    (0,
                    _my_projects_header_dropdown_api.fetchCustomerName)().then(function(customerFirstName) {
                        _this2.setState({
                            customerFirstName: customerFirstName
                        });
                    });
                    this.setState({
                        isDesignServicesUserInfoFetching: true
                    });
                    (0,
                    _my_projects_header_dropdown_api.fetchDesignServicesUserInfo)().then(function(_ref2) {
                        var isDesignServicesUser = _ref2.isDesignServicesUser
                          , isUserB2BCustomer = _ref2.isUserB2BCustomer
                          , companyType = _ref2.companyType;
                        _this2.setState({
                            isDesignServicesUser: isDesignServicesUser,
                            isUserB2BCustomer: isUserB2BCustomer,
                            isUserInteriorDesignerCompanyType: companyType === _my_projects_header_dropdown_constants.COMPANY_TYPE_INTERIOR_DESIGNER,
                            isDesignServicesUserInfoFetching: false
                        });
                    }).catch(function(error) {
                        _logger2.default.log(error);
                        _this2.setState({
                            isDesignServicesUserInfoFetching: false
                        });
                    });
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var customerFirstName = this.state.customerFirstName;
                return _react2.default.createElement('div', {
                    className: (0,
                    _classnames2.default)('MyProjectsDropdownContent', {
                        'MyProjectsDropdownContent--designerServicesCardShown': this.shouldShowDesignServicesCard()
                    })
                }, _react2.default.createElement('p', {
                    className: 'MyProjectsDropdownContent-topBar'
                }, (0,
                _my_projects_header_dropdown_api.isLoggedIn)() && _turbine_helper_lnrs.doReplacement({
                    key: 'WelcomeBackFirstnameExclamation',
                    translation: _lnrsWelcomeBackFirstnameExclamation,
                    replacements: [[customerFirstName]]
                }, _react2.default)), _react2.default.createElement('div', {
                    className: 'MyProjectsDropdownContent-cards'
                }, _react2.default.createElement(_my_projects_header_dropdown_card2.default, {
                    title: (0,
                    _my_projects_header_dropdown_api.isLoggedIn)() ? _turbine_helper_lnrs.doReplacement({
                        key: 'RoomPlanner',
                        translation: _lnrsRoomPlanner,
                        replacements: []
                    }, _react2.default) : _turbine_helper_lnrs.doReplacement({
                        key: 'GetCreative',
                        translation: _lnrsGetCreative,
                        replacements: []
                    }, _react2.default),
                    text: _turbine_helper_lnrs.doReplacement({
                        key: 'PlayAroundWithRoomPlanner',
                        translation: _lnrsPlayAroundWithRoomPlanner,
                        replacements: []
                    }, _react2.default),
                    iconId: _room_planner_constants.ROOM_PLANNER_ICON_ID,
                    imageId: ROOM_PLANNER_IRE_ID,
                    dataClickLocation: _my_projects_header_dropdown_constants.ROOM_PLANNER_HEADER_CLICK_LOCATION,
                    onClick: this.handleClickRoomPlannerCard,
                    allowHoverState: this.allowHoverState(),
                    showLoadingSpinner: this.state.interactedCard === ROOM_PLANNER_CARD
                }), _react2.default.createElement(_my_projects_header_dropdown_card2.default, {
                    title: (0,
                    _my_projects_header_dropdown_api.isLoggedIn)() ? _turbine_helper_lnrs.doReplacement({
                        key: 'Lists',
                        translation: _lnrsLists,
                        replacements: []
                    }, _react2.default) : _turbine_helper_lnrs.doReplacement({
                        key: 'SaveWhatYouLove',
                        translation: _lnrsSaveWhatYouLove,
                        replacements: []
                    }, _react2.default),
                    text: _turbine_helper_lnrs.doReplacement({
                        key: 'KeepTrackOfItemsThat',
                        translation: _lnrsKeepTrackOfItemsThat,
                        replacements: []
                    }, _react2.default),
                    iconId: LISTS_ICON_ID,
                    iconCssClasses: ['icon-heart'],
                    imageId: LISTS_IRE_ID,
                    dataClickLocation: _my_projects_header_dropdown_constants.LISTS_HEADER_CLICK_LOCATION,
                    dataCodeceptionId: _my_projects_header_dropdown_constants.LISTS_HEADER_CODECEPTION_ID,
                    onClick: this.handleClickListsCard,
                    allowHoverState: this.allowHoverState(),
                    showLoadingSpinner: this.state.interactedCard === LISTS_CARD
                }), this.shouldShowDesignServicesCard() && _react2.default.createElement(_my_projects_header_dropdown_card2.default, _turbine_helper_babel.extends({}, this.getDesignServicesCardInfo(), {
                    iconId: _design_services_constants.DESIGN_SERVICES_ICON_ID,
                    imageId: DESIGN_SERVICES_IRE_ID,
                    dataClickLocation: _my_projects_header_dropdown_constants.DESIGN_SERVICES_HEADER_CLICK_LOCATION,
                    onClick: this.handleClickDesignServicesCard,
                    allowHoverState: this.allowHoverState(),
                    showLoadingSpinner: this.shouldShowDesignServicesLoadingSpinner()
                }))));
            }
        }]);
        return MyProjectsHeaderDropdownContainer;
    }(_react2.default.Component);
    exports.default = _my_projects_header_dropdown_container2.default.hoc(MyProjectsHeaderDropdownContainer);
});
/*wfsw*/
/*wfsw:cart_dropdown_container_v2*/
define('cart_dropdown_container_v2', ['exports', 'react_redux', 'cart_dropdown_v2', 'cart_dropdown_actions', 'underscore', 'cart_dropdown_selectors', 'turbine_helper_babel'], function(exports, _react_redux, _cart_dropdown_v, _cart_dropdown_actions, _underscore, _cart_dropdown_selectors, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _cart_dropdown_v2 = _turbine_helper_babel.interopRequireDefault(_cart_dropdown_v);
    var _underscore2 = _turbine_helper_babel.interopRequireDefault(_underscore);
    var _cart_dropdown_selectors2 = _turbine_helper_babel.interopRequireDefault(_cart_dropdown_selectors);
    var mapStateToProps = function mapStateToProps(state) {
        var cartDropdownContent = _cart_dropdown_selectors2.default.getCartDropdown(state).cart_dropdown_content;
        var passThroughServerKeys = ['basket_url', 'basket_items', 'signin_url', 'total_cost_string', 'storeId', 'styleShowcaseUrl', 'browseByBrandUrl', 'use_elastigirl_design', 'is_logged_in', 'events_path', 'giftcard_page_url', 'store_company_name', 'brand_category_id', 'current_profile_url', 'is_b2b_customer'];
        return _turbine_helper_babel.extends({}, _underscore2.default.pick(cartDropdownContent, passThroughServerKeys), {
            lazyLoadingInProgress: _cart_dropdown_selectors2.default.getIsLazyLoadingInProgress(state),
            lazyLoadingComplete: _cart_dropdown_selectors2.default.getIsLazyLoadingComplete(state),
            cartQuantity: (0,
            _cart_dropdown_selectors.getCartQuantity)(state)
        });
    };
    var mapDispatchToProps = {
        loadCartDropDownContents: _cart_dropdown_actions.creators.loadCartDropDownContents,
        updateCartQuantity: _cart_dropdown_actions.creators.updateCartQuantity
    };
    exports.default = (0,
    _react_redux.connect)(mapStateToProps, mapDispatchToProps)(_cart_dropdown_v2.default);
});
/*wfsw*/
/*wfsw:pl_tooltip*/
define('pl_tooltip', ['exports', 'react', 'prop-types', 'classnames', 'with_tooltip_basics', 'pl-close-button', 'custom_prop_types', '@styles/_components/tooltip/pl_tooltip', 'turbine_helper_babel'], function(exports, _react, _propTypes, _classnames, _with_tooltip_basics, _plCloseButton, _custom_prop_types, _pl_tooltip, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var _classnames2 = _turbine_helper_babel.interopRequireDefault(_classnames);
    var _with_tooltip_basics2 = _turbine_helper_babel.interopRequireDefault(_with_tooltip_basics);
    var _plCloseButton2 = _turbine_helper_babel.interopRequireDefault(_plCloseButton);
    var _pl_tooltip2 = _turbine_helper_babel.interopRequireDefault(_pl_tooltip);
    var Tooltip = function Tooltip(_ref) {
        var caretPlacement = _ref.caretPlacement
          , caretPercentage = _ref.caretPercentage
          , hideCaret = _ref.hideCaret
          , content = _ref.content
          , left = _ref.left
          , onRequestClose = _ref.onRequestClose
          , placement = _ref.placement
          , elevatedIndex = _ref.elevatedIndex
          , ready = _ref.ready
          , showClose = _ref.showClose
          , spv2Tracking = _ref.spv2Tracking
          , spv2EventName = _ref.spv2EventName
          , title = _ref.title
          , tooltipRef = _ref.tooltipRef
          , top = _ref.top
          , secondary = _ref.secondary
          , tertiary = _ref.tertiary
          , tooltipWidth = _ref.tooltipWidth
          , contentPadding = _ref.contentPadding
          , variation = _ref.variation
          , setLastTabbableRef = _ref.setLastTabbableRef
          , isB2B = _ref.isB2B;
        var tooltipClasses = (0,
        _classnames2.default)('pl-Tooltip', 'pl-Tooltip--' + variation, 'pl-Tooltip--' + placement, {
            'pl-Tooltip--secondary': secondary,
            'pl-Tooltip--tertiary': tertiary,
            'pl-Tooltip--elevatedIndex': elevatedIndex,
            'pl-Tooltip--fullBleed': !contentPadding,
            'is-b2b': isB2B
        });
        var dataEventName = spv2Tracking ? {
            dataEventName: spv2EventName
        } : {};
        var tooltipStyle = {
            position: 'absolute',
            left: left,
            top: top,
            visibility: ready ? 'visible' : 'hidden',
            width: tooltipWidth
        };
        return _react2.default.createElement('div', {
            ref: tooltipRef,
            className: tooltipClasses,
            style: tooltipStyle,
            role: 'tooltip',
            tabIndex: '-1',
            'data-hb-id': 'pl_tooltip'
        }, _react2.default.createElement('div', {
            className: 'pl-Tooltip-inner'
        }, title && _react2.default.createElement('h3', {
            className: 'pl-Tooltip-title'
        }, title), content), showClose && _react2.default.createElement('div', {
            className: 'pl-Tooltip-close'
        }, _react2.default.createElement(_plCloseButton2.default, _turbine_helper_babel.extends({
            variation: variation === 'default' ? 'default' : 'inverted',
            innerRef: setLastTabbableRef
        }, dataEventName, {
            onClick: onRequestClose
        }))), !hideCaret && _react2.default.createElement('div', {
            className: (0,
            _classnames2.default)('pl-Tooltip-caret', {
                'is-b2b': isB2B
            }),
            style: _turbine_helper_babel.defineProperty({}, caretPlacement, caretPercentage)
        }));
    };
    Tooltip.defaultProps = {
        hideCaret: false,
        clickOutsideClose: false,
        onRequestClose: function onRequestClose() {},
        placement: 'right',
        elevatedIndex: false,
        showClose: true,
        spv2Tracking: false,
        spv2EventName: '',
        title: '',
        tooltipWidth: 250,
        contentPadding: true,
        variation: 'default',
        content: null,
        tooltipRef: function tooltipRef() {},
        ready: false,
        setLastTabbableRef: function setLastTabbableRef() {},
        top: 0,
        left: 0,
        enableFocusTrapping: true,
        isB2B: false,
        caretPercentage: null,
        caretPlacement: null
    };
    exports.default = _pl_tooltip2.default.hoc((0,
    _with_tooltip_basics2.default)(Tooltip));
});
/*wfsw*/
/*wfsw:visual_search_upload_modal*/
define('visual_search_upload_modal', ['exports', 'react', 'prop_types', 'wayfair', 'lnrs', 'fetch_query', 'lazy_component', 'lazy_component_with_placeholder', 'pl_grid', 'layout_constants', 'classnames', 'tracking', 'pl_icon', 'pl_button', 'pl_responsive_modal', 'lazy!visual_search_drop_zone', 'lazy!visual_search_upload_component', 'lazy!visual_search_paste_component', 'lazy!visual_search_launchpad', 'visual_search_helper', 'search_with_photo_queries', '@feature/visual_search_show_launchpad_on_upload_modal', '@styles/visual_search/search_with_photo/visual_search_upload_modal', 'turbine_helper_babel', 'turbine_helper_lnrs'], function(exports, _react, _prop_types, _wayfair, _lnrs, _fetch_query, _lazy_component, _lazy_component_with_placeholder, _pl_grid, _layout_constants, _classnames, _tracking, _pl_icon, _pl_button, _pl_responsive_modal, _lazyVisual_search_drop_zone, _lazyVisual_search_upload_component, _lazyVisual_search_paste_component, _lazyVisual_search_launchpad, _visual_search_helper, _search_with_photo_queries, _visual_search_show_launchpad_on_upload_modal, _visual_search_upload_modal, _turbine_helper_babel, _turbine_helper_lnrs) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _prop_types2 = _turbine_helper_babel.interopRequireDefault(_prop_types);
    var _wayfair2 = _turbine_helper_babel.interopRequireDefault(_wayfair);
    var _lnrs2 = _turbine_helper_babel.interopRequireDefault(_lnrs);
    var _fetch_query2 = _turbine_helper_babel.interopRequireDefault(_fetch_query);
    var _lazy_component2 = _turbine_helper_babel.interopRequireDefault(_lazy_component);
    var _lazy_component_with_placeholder2 = _turbine_helper_babel.interopRequireDefault(_lazy_component_with_placeholder);
    var _classnames2 = _turbine_helper_babel.interopRequireDefault(_classnames);
    var _tracking2 = _turbine_helper_babel.interopRequireDefault(_tracking);
    var _pl_icon2 = _turbine_helper_babel.interopRequireDefault(_pl_icon);
    var _pl_button2 = _turbine_helper_babel.interopRequireDefault(_pl_button);
    var _pl_responsive_modal2 = _turbine_helper_babel.interopRequireDefault(_pl_responsive_modal);
    var _lazyVisual_search_drop_zone2 = _turbine_helper_babel.interopRequireDefault(_lazyVisual_search_drop_zone);
    var _lazyVisual_search_upload_component2 = _turbine_helper_babel.interopRequireDefault(_lazyVisual_search_upload_component);
    var _lazyVisual_search_paste_component2 = _turbine_helper_babel.interopRequireDefault(_lazyVisual_search_paste_component);
    var _lazyVisual_search_launchpad2 = _turbine_helper_babel.interopRequireDefault(_lazyVisual_search_launchpad);
    var _visual_search_show_launchpad_on_upload_modal2 = _turbine_helper_babel.interopRequireDefault(_visual_search_show_launchpad_on_upload_modal);
    var _visual_search_upload_modal2 = _turbine_helper_babel.interopRequireDefault(_visual_search_upload_modal);
    var _lnrsUploadingEllipsis = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('UploadingEllipsis', 'Uploading\u2026'))
      , _lnrsFindingItemsInYourPhotoEllipsis = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('FindingItemsInYourPhotoEllipsis', 'Finding items in your photo\u2026'))
      , _lnrsTakeAPhoto = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('TakeAPhoto', 'Take A Photo'))
      , _lnrsPhotoLibrary = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('PhotoLibrary', 'Photo Library'))
      , _lnrsDragAndDrop = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('DragAndDrop', 'Drag & Drop'))
      , _lnrsXOrCommaXSelectASavedPhoto = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('XOrCommaXSelectASavedPhoto', '{1}Or,{2} select a saved photo'))
      , _lnrsOrCommaTryItWithOneOfOursColon = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('OrCommaTryItWithOneOfOursColon', 'Or, try it with one of ours:'));
    var noop = function noop() {};
    var UploadModal = function(_Component) {
        _turbine_helper_babel.inherits(UploadModal, _Component);
        function UploadModal() {
            var _ref;
            var _temp, _this, _ret;
            _turbine_helper_babel.classCallCheck(this, UploadModal);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _turbine_helper_babel.possibleConstructorReturn(this, (_ref = UploadModal.__proto__ || Object.getPrototypeOf(UploadModal)).call.apply(_ref, [this].concat(args))),
            _this),
            _this.state = {
                isDragging: false,
                isUploading: false,
                isDetectingObjects: false,
                errorMessage: null,
                launchpadIreIDs: null
            },
            _this.getUploadModalLaunchpadIreIDs = function() {
                var categoryId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                (0,
                _fetch_query2.default)({
                    query: _search_with_photo_queries.getLaunchpadIreIDs,
                    variables: {
                        limit: _visual_search_helper.LAUNCHPAD_IMAGE_LIMIT,
                        classId: _this.props.shouldShowAltLaunchpadImages ? _this.props.classId : 0,
                        categoryId: categoryId || 0
                    }
                }).then(function(response) {
                    var onboardingImages = _wayfair2.default.get('data.visualSearch.onboardingImages', response);
                    if (onboardingImages) {
                        var launchpadIreIDs = onboardingImages.map(function(image) {
                            return image.id;
                        });
                        _this.setState({
                            launchpadIreIDs: launchpadIreIDs
                        });
                    }
                }).catch(function() {
                    _wayfair2.default.logger.info('Visual Search: Failed to load images for Visual Search Launchpad');
                });
            }
            ,
            _this.getIsDropZoneHidden = function() {
                return _this.state.isUploading || !_this.state.isDragging || _this.state.isDetectingObjects;
            }
            ,
            _this.getIsDefaultStateHidden = function() {
                return _this.state.isUploading || _this.state.isDragging || _this.state.isDetectingObjects;
            }
            ,
            _this.toggleDragging = function(isDragging) {
                return _this.setState({
                    isDragging: isDragging
                });
            }
            ,
            _this.toggleUploading = function(isUploading) {
                return _this.setState({
                    isUploading: isUploading,
                    isDetectingObjects: false,
                    errorMessage: null
                });
            }
            ,
            _this.toggleDetectingObjects = function(isDetectingObjects) {
                return _this.setState({
                    isDetectingObjects: isDetectingObjects,
                    isUploading: false,
                    errorMessage: null
                });
            }
            ,
            _this.setErrorMessage = function() {
                var errorMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                _this.setState({
                    isDragging: false,
                    isUploading: false,
                    isDetectingObjects: false,
                    errorMessage: errorMessage
                });
            }
            ,
            _this.handleUploadStart = function() {
                _tracking2.default.recordEvent('VIS_ModalNewImage');
                _this.toggleUploading(true);
            }
            ,
            _this.handleLaunchPadUploading = function() {
                _this.toggleUploading(true);
            }
            ,
            _temp),
            _turbine_helper_babel.possibleConstructorReturn(_this, _ret);
        }
        _turbine_helper_babel.createClass(UploadModal, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                if (_visual_search_show_launchpad_on_upload_modal2.default && !this.props.useBestSellerImage) {
                    this.getUploadModalLaunchpadIreIDs();
                }
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if (_visual_search_show_launchpad_on_upload_modal2.default) {
                    if (!this.props.isOpen && this.state.launchpadIreIDs !== null && this.props.useBestSellerImage) {
                        this.setState({
                            launchpadIreIDs: null
                        });
                    } else if (this.props.isOpen !== nextProps.isOpen && !this.props.useBestSellerImage) {
                        this.getUploadModalLaunchpadIreIDs();
                    } else if (this.props.categoryId !== nextProps.categoryId && nextProps.categoryId && this.props.useBestSellerImage) {
                        this.getUploadModalLaunchpadIreIDs(nextProps.categoryId);
                    }
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var _this2 = this;
                var mobileTakePhotoButtonOptions = {
                    fullWidth: true,
                    hasIcon: true,
                    dataEventName: this.props.takeNewPhotoTrackingString
                };
                var mobilePhotoLibraryButtonOptions = {
                    fullWidth: true,
                    hasIcon: true,
                    variation: 'alternate',
                    dataEventName: this.props.usePhotoLibraryTrackingString
                };
                return _react2.default.createElement(_pl_responsive_modal2.default, {
                    title: _lnrs2.default.translate('SearchWithPhoto', 'Search with Photo'),
                    lgSize: _pl_responsive_modal.sizes.MEDIUM,
                    isOpen: this.props.isOpen,
                    handleOverlayClick: this.props.closeModal,
                    onRequestClose: this.props.closeModal
                }, this.state.isUploading && _react2.default.createElement('div', {
                    className: 'VisualSearchUploadModal-box VisualSearchUploadModal-box--uploading'
                }, _react2.default.createElement('p', {
                    className: 'VisualSearchUploadModal-progressBarStatus'
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'UploadingEllipsis',
                    translation: _lnrsUploadingEllipsis,
                    replacements: []
                }, _react2.default)), _react2.default.createElement('div', {
                    className: 'VisualSearchUploadModal-progressBar'
                })), this.state.isDetectingObjects && _react2.default.createElement('div', {
                    className: 'VisualSearchUploadModal-box VisualSearchUploadModal-box--uploading'
                }, _react2.default.createElement('p', {
                    className: 'VisualSearchUploadModal-progressBarStatus'
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'FindingItemsInYourPhotoEllipsis',
                    translation: _lnrsFindingItemsInYourPhotoEllipsis,
                    replacements: []
                }, _react2.default)), _react2.default.createElement('div', {
                    className: 'VisualSearchUploadModal-progressBar'
                })), this.props.isTouch ? _react2.default.createElement(_react.Fragment, null, _react2.default.createElement('div', {
                    className: 'VisualSearchUploadModal-button'
                }, _react2.default.createElement(_lazy_component_with_placeholder2.default, {
                    component: _lazyVisual_search_upload_component2.default,
                    buttonOptions: mobileTakePhotoButtonOptions,
                    onError: this.setErrorMessage,
                    onUploadStart: function onUploadStart() {
                        return _this2.toggleUploading(true);
                    },
                    lnrsImageUpload: _react2.default.createElement('span', null, _react2.default.createElement(_pl_icon2.default, {
                        iconId: 'camera'
                    }), _turbine_helper_lnrs.doReplacement({
                        key: 'TakeAPhoto',
                        translation: _lnrsTakeAPhoto,
                        replacements: []
                    }, _react2.default)),
                    newImageEventName: 'MODAL_CAMERA',
                    captureOption: 'environment',
                    placeholder: _react2.default.createElement(_pl_button2.default, mobileTakePhotoButtonOptions, _react2.default.createElement('span', null, _react2.default.createElement(_pl_icon2.default, {
                        iconId: 'camera'
                    }), _turbine_helper_lnrs.doReplacement({
                        key: 'TakeAPhoto',
                        translation: _lnrsTakeAPhoto,
                        replacements: []
                    }, _react2.default)))
                })), _react2.default.createElement('div', {
                    className: 'VisualSearchUploadModal-button'
                }, _react2.default.createElement(_lazy_component_with_placeholder2.default, {
                    component: _lazyVisual_search_upload_component2.default,
                    buttonOptions: mobilePhotoLibraryButtonOptions,
                    onError: this.setErrorMessage,
                    onUploadStart: function onUploadStart() {
                        return _this2.toggleUploading(true);
                    },
                    onDetectObjectsStart: function onDetectObjectsStart() {
                        return _this2.toggleDetectingObjects(true);
                    },
                    lnrsImageUpload: _react2.default.createElement('span', null, _react2.default.createElement(_pl_icon2.default, {
                        iconId: 'image'
                    }), _turbine_helper_lnrs.doReplacement({
                        key: 'PhotoLibrary',
                        translation: _lnrsPhotoLibrary,
                        replacements: []
                    }, _react2.default)),
                    newImageEventName: 'MODAL_LIBRARY',
                    placeholder: _react2.default.createElement(_pl_button2.default, mobilePhotoLibraryButtonOptions, _react2.default.createElement('span', null, _react2.default.createElement(_pl_icon2.default, {
                        iconId: 'image'
                    }), _turbine_helper_lnrs.doReplacement({
                        key: 'PhotoLibrary',
                        translation: _lnrsPhotoLibrary,
                        replacements: []
                    }, _react2.default)))
                }))) : _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_lazy_component2.default, {
                    component: _lazyVisual_search_drop_zone2.default,
                    cssClasses: (0,
                    _classnames2.default)({
                        'u-hiddenNode': this.getIsDropZoneHidden()
                    }),
                    isPhone: false,
                    onDragFileStart: function onDragFileStart() {
                        return _this2.toggleDragging(true);
                    },
                    onDragFileEnd: function onDragFileEnd() {
                        return _this2.toggleDragging(false);
                    },
                    onError: this.setErrorMessage,
                    onUploadStart: this.handleUploadStart,
                    onDetectObjectsStart: function onDetectObjectsStart() {
                        return _this2.toggleDetectingObjects(true);
                    }
                }), _react2.default.createElement('div', {
                    className: (0,
                    _classnames2.default)('VisualSearchUploadModal-wrapper', {
                        'u-hiddenNode': this.getIsDefaultStateHidden()
                    })
                }, _react2.default.createElement(_lazy_component2.default, {
                    component: _lazyVisual_search_paste_component2.default,
                    onUploadStart: function onUploadStart() {
                        return _this2.toggleUploading(true);
                    },
                    onDetectObjectsStart: function onDetectObjectsStart() {
                        return _this2.toggleDetectingObjects(true);
                    }
                }), _react2.default.createElement('div', {
                    className: 'VisualSearchUploadModal-box VisualSearchUploadModal-box--dragAndDrop'
                }, _react2.default.createElement(_pl_icon2.default, {
                    iconId: 'visual-product-search',
                    title: _lnrs2.default.translate('SearchWithPhoto', 'Search with Photo'),
                    cssClasses: 'VisualSearchUploadModal-svgIcon'
                }), _react2.default.createElement('h3', {
                    className: 'VisualSearchUploadModal-dragAndDrop'
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'DragAndDrop',
                    translation: _lnrsDragAndDrop,
                    replacements: []
                }, _react2.default)), _react2.default.createElement(_lazy_component_with_placeholder2.default, {
                    component: _lazyVisual_search_upload_component2.default,
                    buttonOptions: {
                        isPlainText: true,
                        dataEventName: this.props.uploadButtonDesktopTrackingString
                    },
                    isPhone: false,
                    onError: this.setErrorMessage,
                    onUploadStart: function onUploadStart() {
                        return _this2.toggleUploading(true);
                    },
                    onDetectObjectsStart: function onDetectObjectsStart() {
                        return _this2.toggleDetectingObjects(true);
                    },
                    lnrsImageUpload: _react2.default.createElement('span', {
                        className: 'VisualSearchUploadModal-textButton'
                    }, _turbine_helper_lnrs.doReplacement({
                        key: 'XOrCommaXSelectASavedPhoto',
                        translation: _lnrsXOrCommaXSelectASavedPhoto,
                        replacements: [[_turbine_helper_lnrs.openTag('span', {
                            'className': 'VisualSearchUploadModal-textBaseColor'
                        })], [_turbine_helper_lnrs.closeTag('span')]]
                    }, _react2.default)),
                    newImageEventName: 'ModalNewImage',
                    placeholder: _react2.default.createElement('span', {
                        className: 'VisualSearchUploadModal-textButton'
                    }, _turbine_helper_lnrs.doReplacement({
                        key: 'XOrCommaXSelectASavedPhoto',
                        translation: _lnrsXOrCommaXSelectASavedPhoto,
                        replacements: [[_turbine_helper_lnrs.openTag('span', {
                            'className': 'VisualSearchUploadModal-textBaseColor'
                        })], [_turbine_helper_lnrs.closeTag('span')]]
                    }, _react2.default))
                })), this.state.errorMessage && _react2.default.createElement('div', {
                    className: 'VisualSearchUploadModal-error'
                }, this.state.errorMessage))), _visual_search_show_launchpad_on_upload_modal2.default && _react2.default.createElement('div', {
                    className: 'VisualSearchUploadModal-launchpad'
                }, _react2.default.createElement('p', {
                    className: 'VisualSearchUploadModal-launchpadHeader'
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'OrCommaTryItWithOneOfOursColon',
                    translation: _lnrsOrCommaTryItWithOneOfOursColon,
                    replacements: []
                }, _react2.default)), _react2.default.createElement(_lazy_component_with_placeholder2.default, {
                    component: _lazyVisual_search_launchpad2.default,
                    trackingContext: this.props.trackingContext,
                    onUploading: this.handleLaunchPadUploading,
                    launchpadIreIDs: this.state.launchpadIreIDs,
                    useBestSellerImage: this.props.useBestSellerImage,
                    placeholder: _react2.default.createElement(_pl_grid.Grid, {
                        gutterFullBleed: true
                    }, (0,
                    _visual_search_helper.getImageSkeletons)())
                })));
            }
        }]);
        return UploadModal;
    }(_react.Component);
    UploadModal.defaultProps = {
        isOpen: false,
        closeModal: noop,
        trackingContext: 'VIS',
        uploadButtonDesktopTrackingString: '',
        takeNewPhotoTrackingString: '',
        classId: 0,
        shouldShowAltLaunchpadImages: false,
        usePhotoLibraryTrackingString: '',
        categoryId: null,
        useBestSellerImage: false
    };
    exports.default = _visual_search_upload_modal2.default.hoc(UploadModal);
});
/*wfsw*/
/*wfsw:g_media_container*/
define('g_media_container', ['exports', 'react_redux', 'g_media_component', 'g_media_selectors', 'g_media_actions', 'turbine_helper_babel'], function(exports, _react_redux, _g_media_component, _g_media_selectors, _g_media_actions, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _g_media_component2 = _turbine_helper_babel.interopRequireDefault(_g_media_component);
    var mapStateToProps = function mapStateToProps(state) {
        return {
            containerSettings: (0,
            _g_media_selectors.selectContainerSettings)(state),
            pageOptions: (0,
            _g_media_selectors.selectPageOptions)(state),
            titleText: (0,
            _g_media_selectors.selectTitleText)(state),
            isGMediaScriptLoaded: (0,
            _g_media_selectors.selectIsGMediaScriptLoaded)(state),
            isGoogleCsaLoaded: (0,
            _g_media_selectors.selectIsGoogleCsaLoaded)(state)
        };
    };
    var mapDispatchToProps = {
        fetchGoogleAdScript: _g_media_actions.fetchGoogleAdScript,
        fetchGoogleCsa: _g_media_actions.fetchGoogleCsa
    };
    exports.default = (0,
    _react_redux.connect)(mapStateToProps, mapDispatchToProps)(_g_media_component2.default);
});
/*wfsw*/
/*wfsw:pl_joss_logo*/
define('pl_joss_logo', ['exports', 'react', 'prop-types', 'turbine_helper_babel'], function(exports, _react, _propTypes, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var JossLogo = function JossLogo(_ref) {
        var width = _ref.width
          , height = _ref.height
          , variation = _ref.variation
          , fillColor = _ref.fillColor
          , rest = _turbine_helper_babel.objectWithoutProperties(_ref, ['width', 'height', 'variation', 'fillColor']);
        var aspectRatio = 0.20885466795;
        return _react2.default.createElement('svg', _turbine_helper_babel.extends({}, rest, {
            width: width,
            height: height(width, aspectRatio),
            xmlns: 'http://www.w3.org/2000/svg',
            role: 'img',
            'aria-label': 'Joss & Main',
            viewBox: '0 0 311.7 65.1'
        }), _react2.default.createElement('title', null, 'Joss & Main'), _react2.default.createElement('g', null, _react2.default.createElement('path', {
            fill: '#cc9999',
            d: 'M104,33l-3.8-2.1c-3.5-1.9-4.8-2.9-4.8-4.8c0-2,1.3-3.4,4-3.4c3.9,0,6.3,3.1,6.4,6.3l0,0 c0,0.2,0.1,0.3,0.3,0.3h1.1c0.2,0,0.3-0.1,0.3-0.3v-8.6c0-0.2-0.1-0.3-0.3-0.3h-1.1c-0.2,0-0.3,0.1-0.3,0.3v0.1 c-0.1,3.5-1.4-0.4-7.1-0.4c-4.1,0-8.1,2.9-8.1,7.2c0,2.5,1.4,5.9,5.3,7.9l4.4,2.4c2.8,1.4,4.4,2.9,4.4,4.8c0,2.2-1.9,4-4.4,4 c-5.3,0-8.3-4.6-8.7-8.1v-0.5c0-0.2-0.1-0.3-0.3-0.3h-1c-0.2,0-0.3,0.1-0.3,0.3v11c0,0.2,0.1,0.3,0.3,0.3h1c0.2,0,0.3-0.1,0.3-0.3 v-0.1l0,0c0.2-4.9,3.1,0.4,8.5,0.4c5.1,0,9.4-3.4,9.4-8.6C109.4,37.8,107.4,35,104,33z'
        }), _react2.default.createElement('path', {
            fill: '#cc9999',
            d: 'M47.1,20.2c-8.8,0-16,6.5-16,14.5s7.2,14.6,16,14.6s16-6.6,16-14.6S55.9,20.2,47.1,20.2z M47.1,46.2 c-6.5,0-9.6-5.1-9.6-11.5c0-6.3,3.1-11.5,9.6-11.5c6.6,0,9.6,5.1,9.6,11.5C56.7,41,53.6,46.2,47.1,46.2z'
        }), _react2.default.createElement('path', {
            fill: '#cc9999',
            d: 'M264,14c1.9,0,3.5-1.6,3.5-3.6c0-1.9-1.6-3.5-3.5-3.5s-3.5,1.6-3.5,3.5C260.4,12.4,262,14,264,14z'
        }), _react2.default.createElement('path', {
            fill: '#cc9999',
            d: 'M33,2.4c0.2,0,0.3-0.1,0.3-0.3V1c0-0.2-0.1-0.3-0.3-0.3H12c-0.2,0-0.3,0.1-0.3,0.3v1.1c0,0.2,0.1,0.3,0.3,0.3 h0.6c5.8,0.1,6.7,0.8,6.7,8.4v40.9c0,7.7-2.9,11-7.6,11c-4.2,0-6.2-2.8-6.2-5.2c0-1.5-1.2-2.7-2.7-2.7C1.2,54.8,0,56,0,57.5 c0,5,7,7.6,11.8,7.6c6.2,0,14-2.9,14-14.3v-40c0-7.7,0.9-8.4,7-8.4L33,2.4L33,2.4z'
        }), _react2.default.createElement('path', {
            fill: '#cc9999',
            d: 'M80.7,33l-3.8-2.1c-3.5-1.9-4.8-2.9-4.8-4.8c0-2,1.3-3.4,4-3.4c3.9,0,6.3,3.1,6.4,6.3l0,0 c0,0.2,0.1,0.3,0.3,0.3h1.1c0.2,0,0.3-0.1,0.3-0.3v-8.6c0-0.2-0.1-0.3-0.3-0.3h-1.1c-0.2,0-0.3,0.1-0.3,0.3v0.1 c-0.1,3.5-1.4-0.4-7.1-0.4c-4.1,0-8.1,2.9-8.1,7.2c0,2.5,1.4,5.9,5.3,7.9l4.4,2.4c2.8,1.4,4.4,2.9,4.4,4.8c0,2.2-1.9,4-4.4,4 c-5.3,0-8.3-4.6-8.7-8.1v-0.5c0-0.2-0.1-0.3-0.3-0.3h-1c-0.2,0-0.3,0.1-0.3,0.3v11c0,0.2,0.1,0.3,0.3,0.3h1c0.2,0,0.3-0.1,0.3-0.3 v-0.1l0,0c0.2-4.9,3.1,0.4,8.5,0.4c5.1,0,9.4-3.4,9.4-8.6C86.2,37.8,84.2,35,80.7,33z'
        }), _react2.default.createElement('path', {
            fill: '#cc9999',
            d: 'M159.5,10c-2.4,0-4.8,1.7-4.8,4c0,1.7,1.3,2.9,2.7,2.9c0.9,0,2.1-0.4,2.4-1.6c0.5-1,0.2-3.1,1.7-3.1 c1,0,1.5,1.3,1.5,2.8c0,2.5-2.4,4.8-5.5,6.1c-5,2.3-10.8,4.8-16,8c-3.3,2.1-5.3,4.5-5.3,9.9c0,0.4,0,0.9,0.1,1.3v0.2 c0,0.1,0.2,0.2,0.4,0.2l0.7-0.2c0.1,0,0.2-0.1,0.2-0.2l0,0c0.2-1.6,0.8-3.6,3.1-5.4c3.7-2.7,7.4-4.4,9.5-5.4l0,0c0,0,0,0,0.1,0 s0.1,0,0.1,0.1c1.2,2.2,1.9,3.7,1.9,7.2c0,7.1-5.8,12.4-14.3,12.4c-7.6,0-13.4-4.9-13.4-13.3c0-7.5,5-12.9,10.8-13 c0.3,0,0.5,0,0.8,0s1.7,0.1,2.4,0c0.7-0.1,1.1-0.3,1.4-0.6c0.4-0.4,0.6-0.8,0.5-1.3c0-0.5-0.2-0.8-0.6-1.1s-0.8-0.4-1.2-0.3 c-0.4,0.1-0.9,0.2-1.4,0.2s-1.1,0-1.8-0.2c-0.7-0.2-1.5-0.7-2.3-1.6c-0.6-0.6-1.1-1.5-1.5-2.4c-0.5-1.3-0.8-2.6-0.8-4.2 c0-5.2,4.2-8.3,8.1-8.3c0.4,0,0.9,0,1.3,0.1c1.7,0.3,3.7,1.4,4.9,5.8c0.6,1.4,2.2,0.9,2.8,0.7c1-0.5,1.1-1.5,0.9-2.5 c-0.2-0.9-0.9-1.9-2-3c0,0-1-1.1-3.2-2.4c-1.7-1-3.9-1.8-6.5-1.8c-5.5,0-11.3,3.3-11.3,10.2c0,5.9,3.9,8.3,5.8,9.5 c0,0,0.1,0,0.1,0.1c0,0,0,0.1-0.1,0.1l0,0c-4.7,0.4-13.4,5.5-13.4,16c0,10.8,9.1,16.9,18.6,16.9c9.3,0,17.7-6.2,17.7-16 c0-3.7-1.3-6.3-2.2-8.2l0,0c0-0.1,0-0.1,0.1-0.1c4.4-2.3,12.3-4.9,12.3-12.5C164.8,12.1,162.3,10,159.5,10z'
        }), _react2.default.createElement('path', {
            fill: '#cc9999',
            d: 'M311.5,47.2h-0.2c-5-0.1-5.9-1.6-5.9-9.4v-5.4c0-6.8-3.2-12.1-10.4-12.1c-5.1,0-8.7,3.3-10.9,6l0,0l-0.1,0.1 c-0.1,0-0.1-0.1-0.2-0.1l0,0c-0.3-1.6-0.8-4.2-1.2-5.2l0,0c0-0.1-0.1-0.2-0.2-0.2c0,0,0,0-0.1,0l-8.6,1.7c-0.1,0-0.2,0.1-0.2,0.3 v1.4c0,0.2,0.1,0.3,0.3,0.3h0.1c3.9,0.3,4.7,2.1,4.7,9.2v4c0,7.1-0.8,9-4.8,9.3l0,0c-0.2,0-0.3,0.1-0.3,0.3v1.1 c0,0.2,0.1,0.3,0.3,0.3h15.4c0.2,0,0.3-0.1,0.3-0.3v-1.1c0-0.2-0.1-0.3-0.3-0.3h-0.1c-4.6-0.1-5.2-1.3-5.2-9.4v-5.2 c0-4.4,4.8-8.4,9.2-8.4c4.8,0,6.6,3.4,6.6,8.6v5c0,7.8-1.1,9.3-6,9.4l0,0c-0.2,0-0.3,0.1-0.3,0.3v1.1c0,0.2,0.1,0.3,0.3,0.3h17.7 c0.2,0,0.3-0.1,0.3-0.3v-1.1C311.8,47.3,311.7,47.2,311.5,47.2z'
        }), _react2.default.createElement('path', {
            fill: '#cc9999',
            d: 'M270.7,47c-3.1-0.5-3.8-2.6-3.8-9.2V21.2l0,0l0,0c0-0.1-0.1-0.2-0.2-0.2l0,0l0,0l0,0l0,0l-9.5,1.6 c-0.1,0-0.3,0.1-0.3,0.3v1.5c0,0.2,0.1,0.3,0.3,0.3l0,0c3.6,0.4,4.4,2.2,4.4,9.2v4c0,7-0.8,8.9-4.4,9.3l0,0c-0.2,0-0.3,0.1-0.3,0.3 v1.2c0,0.2,0.1,0.3,0.3,0.3h3.5l0,0h10c0.2,0,0.3-0.1,0.3-0.3v-1.3C270.9,47.2,270.8,47,270.7,47z'
        }), _react2.default.createElement('path', {
            fill: '#cc9999',
            d: 'M254.1,46.2c-0.1-0.1-0.2-0.2-0.4-0.1l-0.3,0.2l0,0c-0.3,0.2-0.6,0.3-0.9,0.3c-1.2,0-1.8-1.1-1.8-3.1V31.2 c0-7.6-3.2-11.2-11-11.2c-5.1,0-10.2,2.6-10.2,6.4c0,1.6,1.2,2.8,2.8,2.8c1.5,0,2.7-1.2,2.7-2.8c0-2.6,2.7-3.9,4.6-3.8 c4.2,0,5.3,1.9,5.4,7.8l0,0c0,0.1-0.1,0.1-0.1,0.2l0,0C235.8,32.2,228,36,228,42.7c0,4.2,3.3,6.7,7.2,6.7c3.1,0,6-1.2,9.8-4.6h0.1 c0.1,0,0.1,0.1,0.2,0.1c0.5,2.7,2.4,4.4,5.4,4.4c1.3,0,2.8-0.5,4.1-1.5l0,0c0.1-0.1,0.2-0.2,0.1-0.4L254.1,46.2z M244.9,41.9 L244.9,41.9L244.9,41.9c0,0,0,0.1-0.1,0.1l0,0c-3.6,3.2-5.6,3.8-7.2,3.8c-2,0-3.8-1.5-3.8-4.1c0-3.5,3.4-6.9,10.9-8.7l0,0 c0.1,0,0.2,0.1,0.2,0.2l0,0l0,0V41.9z'
        }), _react2.default.createElement('path', {
            fill: '#cc9999',
            d: 'M226,0.7h-10.7c-0.1,0-0.2,0.1-0.3,0.2l-16.6,38.4l0,0c0,0.1-0.1,0.1-0.2,0.1s-0.1-0.1-0.2-0.1l0,0L181.3,0.9 l0,0c0-0.1-0.2-0.2-0.3-0.2h-12.3c-0.2,0-0.3,0.1-0.3,0.3v1.1c0,0.2,0.1,0.3,0.3,0.3h0.1c5.6,0.2,6.5,1.8,6.5,9.3v26 c0,7.5-1.2,9.3-6.5,9.3l0,0c-0.2,0-0.3,0.1-0.3,0.3v1.1c0,0.2,0.1,0.3,0.3,0.3h15.8c0.2,0,0.3-0.1,0.3-0.3v-1.1 c0-0.2-0.1-0.3-0.3-0.3h-0.4c-5.1-0.3-6-2.1-6-9.3V10l0,0c0-0.1,0.1-0.2,0.2-0.2s0.1,0,0.2,0.1L196,49.7c0,0.1,0.1,0.2,0.3,0.2h0.6 c0.1,0,0.2-0.1,0.3-0.2l0,0l16.3-37.4c0-0.1,0.1-0.1,0.1-0.1c0.1,0,0.2,0.1,0.2,0.2l0,0l0,0l0,0v25.3c0,7.4-0.8,9.1-6.1,9.3l0,0 c-0.2,0-0.3,0.1-0.3,0.3v1.1c0,0.2,0.1,0.3,0.3,0.3l0,0h0.6h17.8l0,0h0.1c0.2,0,0.3-0.1,0.3-0.3v-1.1c0-0.2-0.1-0.3-0.3-0.3l0,0 c-5.2-0.3-6-2-6-9.3v-26c0-7.3,0.8-9,6-9.2l0,0c0.2,0,0.3-0.1,0.3-0.3V1.1C226.3,0.9,226.2,0.7,226,0.7z'
        })));
    };
    exports.default = JossLogo;
});
/*wfsw*/
/*wfsw:pl_allmodern_logo*/
define('pl_allmodern_logo', ['exports', 'react', 'prop-types', 'turbine_helper_babel'], function(exports, _react, _propTypes, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var AllModernLogo = function AllModernLogo(_ref) {
        var width = _ref.width
          , height = _ref.height
          , variation = _ref.variation
          , fillColor = _ref.fillColor
          , rest = _turbine_helper_babel.objectWithoutProperties(_ref, ['width', 'height', 'variation', 'fillColor']);
        var aspectRatio = 0.13905817174;
        return _react2.default.createElement('svg', _turbine_helper_babel.extends({}, rest, {
            width: width,
            height: height(width, aspectRatio),
            xmlns: 'http://www.w3.org/2000/svg',
            role: 'img',
            'aria-label': 'AllModern',
            viewBox: '0 0 541.5 75.3'
        }), _react2.default.createElement('title', null, 'AllModern'), _react2.default.createElement('path', {
            fill: '#B2BB1E',
            d: 'M70.7,74.2v-73h13.7V62h31.7v12.2H70.7z'
        }), _react2.default.createElement('path', {
            fill: '#B2BB1E',
            d: 'M122.2,74.2v-73h13.7V62H168v12.2H122.2z'
        }), _react2.default.createElement('path', {
            fill: '#455560',
            d: 'M224.7,73.6V31.7L211,59h-9.5l-13.8-27.3v41.9h-14V1.7h13.8l18.8,38.9l18.7-38.9h13.8v71.9H224.7z'
        }), _react2.default.createElement('path', {
            fill: '#455560',
            d: 'M294.5,67.2c-5.2,5.2-11.5,8.1-20,8.1c-8.4,0-14.9-2.9-20.1-8.1c-7.5-7.5-7.3-16.7-7.3-29.5 c0-12.8-0.2-22.1,7.3-29.5c5.2-5.2,11.7-8.1,20.1-8.1c8.4,0,14.8,2.9,20,8.1c7.5,7.5,7.4,16.8,7.4,29.5 C301.9,50.5,302,59.7,294.5,67.2z M283.8,16.9c-2.1-2.4-5.3-4-9.3-4c-4,0-7.3,1.6-9.4,4c-2.8,3.1-3.5,6.6-3.5,20.8 s0.7,17.7,3.5,20.8c2.1,2.4,5.4,4,9.4,4c4,0,7.2-1.6,9.3-4c2.8-3.1,3.6-6.6,3.6-20.8S286.6,20,283.8,16.9z'
        }), _react2.default.createElement('path', {
            fill: '#455560',
            d: 'M355.3,66.7c-4.7,4.7-11.5,6.9-19,6.9h-25.9V1.7h25.9c7.5,0,14.2,2.1,19,6.9c8.1,8.1,7.3,18,7.3,28.8 C362.6,48.2,363.4,58.7,355.3,66.7z M345.5,18.7c-2.4-2.9-5.7-4.4-10.5-4.4h-10.6v46.8H335c4.8,0,8.1-1.5,10.5-4.4 c2.6-3.2,3-8.4,3-19.3S348.2,21.9,345.5,18.7z'
        }), _react2.default.createElement('path', {
            fill: '#455560',
            d: 'M369.5,73.6V1.7h47.4v12.5h-33.3v16.9h28.4v12.5h-28.4v17.5h33.3v12.5H369.5z'
        }), _react2.default.createElement('path', {
            fill: '#455560',
            d: 'M463.7,73.6l-14-28.7h-10.1v28.7h-14V1.7h28.2c14.6,0,23.3,10,23.3,22c0,10.1-6.2,16.4-13.1,18.9l16.1,31H463.7 z M452.8,14.2h-13.2v19h13.2c6.2,0,10.2-3.9,10.2-9.5C463,18.2,459,14.2,452.8,14.2z'
        }), _react2.default.createElement('path', {
            fill: '#455560',
            d: 'M529,73.8l-28.5-44.1v44.1h-14V1.9H499l28.5,44V1.5h14v72.3H529z'
        }), _react2.default.createElement('path', {
            fill: '#B2BB1E',
            d: 'M49.1,73.8L44.8,61H19.1l-4.4,12.8H0L26.3,1.5h11.1l26.4,72.4H49.1z M32.2,22.8l-9.1,26.3h18L32.2,22.8z'
        }));
    };
    exports.default = AllModernLogo;
});
/*wfsw*/
/*wfsw:pl_birch_logo*/
define('pl_birch_logo', ['exports', 'react', 'prop-types', 'turbine_helper_babel'], function(exports, _react, _propTypes, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var BirchLogo = function BirchLogo(_ref) {
        var width = _ref.width
          , height = _ref.height
          , variation = _ref.variation
          , fillColor = _ref.fillColor
          , rest = _turbine_helper_babel.objectWithoutProperties(_ref, ['width', 'height', 'variation', 'fillColor']);
        var aspectRatio = 0.08219415123;
        return _react2.default.createElement('svg', _turbine_helper_babel.extends({}, rest, {
            width: width,
            height: height(width, aspectRatio),
            xmlns: 'http://www.w3.org/2000/svg',
            role: 'img',
            'aria-label': 'Birch Lane',
            viewBox: '0 0 577.9 47.5'
        }), _react2.default.createElement('title', null, 'Birch Lane'), _react2.default.createElement('g', null, _react2.default.createElement('g', null, _react2.default.createElement('path', {
            fill: '#142F54',
            d: 'M557.4,2.5c3.9,0,7.1,0.6,9.8,1.7c1.6,0.7,3.1,1.9,4.5,3.5c1.1,1.4,2.1,2.8,2.8,4.4c0.7,1.5,1.5,3.2,2.4,6.3 h1V0.6h-48.8v1.9h1.2c2.8,0,4.9,0,6.3,1.4c1.4,1.4,2,3.5,2,6.3v26.7c0,5.6-2.8,7.7-8.3,7.7h-1.2v1.9h48.8V27.6h-1.2 c-0.7,2.6-1.5,3.9-2.1,5.5c-1.2,2.7-2.8,5-5,6.8c-1.2,1.1-2.6,1.9-4,2.6s-3,1.2-4.8,1.5s-3.8,0.5-6,0.5l-6.3,0.1V25.3 c3.1,0,7.3,0,7.8,0c3.7,0.1,5.2,4.4,5.4,5.2c0.2,0.9,0.4,1.8,0.6,2.8h0.9V15.1h-0.9c-0.1,1.1-0.3,1.9-0.4,2.5 c-0.3,1.3-2.1,5.7-5.6,5.6c-0.3,0-4.5,0-7.7,0V2.4L557.4,2.5L557.4,2.5z'
        }), _react2.default.createElement('g', null, _react2.default.createElement('path', {
            fill: '#142F54',
            d: 'M46,24.6c-2-0.8-4.6-1.5-7.8-2.1v-0.1c2.5-0.7,4.4-1.3,5.7-1.8c1.4-0.5,2.6-1.2,3.8-2 c2.9-1.9,4.4-4.3,4.4-6.9c0-1.6-0.5-3.2-1.4-4.6s-2.3-2.6-4-3.7c-1.4-0.9-3.3-1.5-5.7-2s-4.9-0.8-7.5-0.8H0v1.8h1.3 c2.8,0,4.9,0.7,6.3,2.1c1.4,1.4,2,2.8,2,5.6v26.6c0,2.8-0.7,4.3-2,5.7c-1.4,1.4-3.5,2-6.3,2H0v1.9h33.7c4.2,0,7.9-0.5,11-1.4 s5.5-2.3,7.2-4.1c1.7-1.8,2.5-3.8,2.5-6.2C54.3,30.4,51.5,27.1,46,24.6z M30.8,2.4c3.6,0,6.3,0.8,8,2.3c1.7,1.5,2.6,3.2,2.6,6.4 c0,7.1-4,11-12.2,11h-9.9V2.4L30.8,2.4L30.8,2.4z M39.6,41.6c-2.3,1.9-5.6,2.9-10,2.9H19.3V24.1H26c4,0,7,0.3,9,0.8 c2.1,0.5,3.8,1.5,5.2,3c1.9,1.8,2.8,3.2,2.8,6.3C43.1,37.6,41.9,39.6,39.6,41.6z'
        }), _react2.default.createElement('path', {
            fill: '#142F54',
            d: 'M61.8,2.5h1.3c2.6,0,4.6,0.6,5.9,1.7c0.7,0.6,1.3,1.3,1.6,2.1c0.4,0.9,0.6,1.4,0.7,2.9 c0.3,3.8,0.6,9.4,0.7,16.9c0,1.8,0,3.2,0,4.4c0,1.2-0.1,2.2-0.2,3.1s-0.2,2-0.4,3.1c0,2.8-0.7,4.3-2,5.6c-1.4,1.4-3.5,2-6.3,2 h-1.3v1.9h28.8v-1.9h-1.3c-2.8,0-4.9,0-6.2-1.4c-1.4-1.4-2-3.5-2-6.3V10.1c0-2.8,0.7-4.3,2-5.6c1.4-1.4,3.4-2,6.3-2h1.3V0.6H61.8 V2.5z'
        }), _react2.default.createElement('path', {
            fill: '#142F54',
            d: 'M379.1,31c-0.6,1.6-1.3,3-2,4.1s-1.5,2.3-2.4,3.4c-1.5,1.9-3.3,3.3-5.4,4.3s-4.3,1.6-6.6,1.6h-11.9V10.1 c0-2.8,0.7-4.9,2-6.3c1.4-1.4,3.4-1.4,6.3-1.4h3.3V0.5h-31.3v1.9h1.6c5.5,0,8.3,2.1,8.3,7.7v26.6c0,5.6-2.8,7.7-8.3,7.7h-1.6v1.9 h51V26.1h-1.2C380.3,28.2,379.7,29.4,379.1,31z'
        }), _react2.default.createElement('path', {
            fill: '#142F54',
            d: 'M441.3,42.8c-0.7-0.8-1.4-1.8-2-3.1L420.9-0.4h-1.5l-14.6,32.9c-2.2,5-4.2,8.3-6.5,10.1 c-1.1,0.9-2.7,1.7-5.9,1.7v1.9h18.7v-1.9c-0.4,0-2.5,0.2-3.3-0.4s-1.6-1.2-2.2-2.2s-0.8-2-0.8-3c0-1.2,0.2-2.3,0.7-3.5l1.3-3.1 h19.4l0.6,1.3c0.2,0.3,0.3,0.6,0.4,0.9s0.2,0.5,0.3,0.7c1.1,2.3,1.8,3.9,2.1,4.8c0.3,0.9,0.5,1.5,0.5,2.2c0,1-0.4,1.2-1.2,1.6 c-0.8,0.5-2.1,0.7-3.8,0.7h-3.5v1.9h26.6v-1.9H447C445.8,44.5,442.5,44.3,441.3,42.8z M425.2,30.4h-17.5l8.8-19.5L425.2,30.4z'
        }), _react2.default.createElement('path', {
            fill: '#142F54',
            d: 'M497.3,0.6v1.9c1.5,0.1,2.3,0.2,3.2,0.5c0.8,0.2,1.7,0.6,2.5,1.1c1.6,0.9,2.7,1.6,3.6,3.4 c0.8,1.8,1.2,3.9,1.2,6.3v19.3L476.3,0.6h-18.4v1.9h0.3c1.9,0,3.6,0.3,4.9,0.9c1.4,0.6,2.4,0.9,3.1,2s1.1,2.5,1.1,4.1v25.9 c0,2.1-0.4,3.9-1.1,5.4c-0.7,1.4-1.9,1.9-3.4,2.6s-3.2,1-5.7,1.2v1.9H481v-1.9c-1.7,0-6.6,0-7.8-1c-1.3-1-2.4-2.1-3.1-3.7 c-0.6-1.6-0.9-3.7-0.9-6.3V6.4L508.4,47h1.3V14.1c0-4,0.9-7,2.6-9.1c1.7-2.1,4.2-2.5,7.5-2.5h0.2V0.6H497.3z'
        })), _react2.default.createElement('path', {
            fill: '#142F54',
            d: 'M214.7,33.2c-0.3,0.8-0.7,1.6-1,2.2c-0.7,1.3-1.8,2.5-2.9,3.8c-1.4,1.5-2.6,2.4-4.2,3.5 c-1.6,1-6.2,2.7-9.8,2.7c-2.2,0-4.5-0.4-6.4-1c-1.8-0.7-3.4-1.7-4.7-3c-1-1.1-1.9-2.1-2.5-3.7c-0.7-1.6-1.3-3.2-1.7-5.5 c-0.3-2.4-0.5-5.1-0.5-8.1c0-5.3,0.5-9.3,1.5-12.7c0.9-3.4,2.5-5.4,4.5-7c1.9-1.6,4-2.4,7.1-2.4c2.5,0,5,0.6,7.4,1.7 c2.4,1.2,4.6,2.8,6.7,5c2,2.2,3.6,3.9,5.1,7c0.6,1.1,1,2.1,1.4,3.1c0.3,1,0.7,2.3,1.1,3.9h1.5V2.4h-1.1c-2.5,5.4-6,3.8-6.9,3.5 s-1.7-0.7-3.1-1.8c-1.3-1-2.6-1.8-3.9-2.4c-1.3-0.6-2.6-1-4-1.3S195.4,0,193.8,0c-4.7,0-8.9,1.2-12.4,3.5 c-2.4,1.5-4.5,3.4-6.3,5.6s-3.2,4.5-4.1,7c-0.9,2.5-1.4,5-1.4,7.5c0,4.2,1.2,8.2,3.6,11.9c2.4,3.7,5.6,6.6,9.6,8.8 c4,2.2,8.4,3.2,13,3.2c7.4,0,13.3-2.7,17.7-8.2c1.1-1.4,2-2.7,2.6-4c0.3-0.6,0.6-1.3,0.8-2h-2.2V33.2z'
        }), _react2.default.createElement('path', {
            fill: '#142F54',
            d: 'M284.8,3.8c1.4-1.4,3.5-1.4,6.3-1.4h1.3V0.5h-28.6v1.9h1c2.8,0,4.9,0,6.3,1.4s2,3.5,2,6.3v12h-24.6v-12 c0-2.8,0.7-4.9,2-6.3c1.4-1.4,3.5-1.4,6.3-1.4h1V0.5h-28.7v1.9h1.3c2.8,0,4.9,0,6.3,1.4c1.4,1.4,2.1,3.5,2.1,6.3v26.6 c0,2.8-0.7,4.9-2.1,6.3c-1.4,1.4-3.5,1.4-6.2,1.4h-1.4v1.9h28.6v-1.9h-1c-2.8,0-4.8-0.1-6.2-1.5c-1.4-1.4-2.1-3.5-2.1-6.3V23.8 H273v12.8c0,2.8-0.7,4.9-2.1,6.3s-3.5,1.4-6.3,1.4h-1v1.9h28.6v-1.9h-1.3c-2.8,0-4.8-0.1-6.2-1.4c-1.4-1.4-2.1-3.5-2.1-6.3V10.1 C282.7,7.3,283.4,5.2,284.8,3.8z'
        })), _react2.default.createElement('path', {
            fill: '#142F54',
            d: 'M163.1,44.5c-2.6,0-4.7,0.1-6.1-0.8c-0.7-0.5-1.6-1.5-2.7-2.9c-1.1-1.4-2.3-3-3.5-4.8 c-0.5-0.7-0.9-1.3-1.2-1.8s-0.9-1.3-1.6-2.4l-1.1-1.6c-1.4-2.1-3.2-6.2-5.7-6.2c0.3-0.1,1.4-0.2,1.4-0.2c1.5-0.3,3.3-0.7,5-1.1 c2.3-0.7,4.1-1.2,5.4-1.9c3.6-2.1,5.4-4.9,5.4-8.3c0-1.3-0.3-2.5-0.8-3.8c-0.6-1.3-1.3-2.4-2.2-3.3c-1.6-1.7-3.9-2.8-6.6-3.5 c-2.8-0.7-6.6-1-11.4-1h-35.5v1.9h1.2c2.8,0,4.9,0.7,6.3,2c1.4,1.4,2,2.8,2,5.6V37c0,2.8-0.7,4.9-2,6.3c-1.4,1.4-3.5,1.5-6.3,1.5 h-1.2v1.9h28.9v-1.9h-1.3c-2.8,0-4.9-0.1-6.3-1.5c-1.4-1.4-2.1-3.5-2.1-6.3V24.2h4.3c0.2,0,1.1,0,1.2,0c0.2,0,1.1,0.1,1.2,0.1 c0.1,0,1.3,0.1,2.1,0.5c0.9,0.3,1.9,0.8,3.4,2.4c0.2,0.2,0.4,0.4,0.6,0.6l0.6,0.9c0,0,0,0,0,0.1l0,0c0,0,9.3,12.9,10.1,14.4 s-2.3,1.6-4.4,1.6h-1.3v1.9h25.4v-1.9h-1.2V44.5z M134.1,22h-13V2.5h13.2c8.8,0,13.3,2.8,13.3,9.7c0,2.4-0.5,3.7-1.5,5.2 s-2.4,2.7-4.4,3.4C139.7,21.6,137.2,22,134.1,22z'
        })));
    };
    exports.default = BirchLogo;
});
/*wfsw*/
/*wfsw:footer_social_block*/
define('footer_social_block', ['exports', 'react', 'prop_types', 'pl_icon', '@styles/footer/components/footer_social_block', 'turbine_helper_babel'], function(exports, _react, _prop_types, _pl_icon, _footer_social_block, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _prop_types2 = _turbine_helper_babel.interopRequireDefault(_prop_types);
    var _pl_icon2 = _turbine_helper_babel.interopRequireDefault(_pl_icon);
    var _footer_social_block2 = _turbine_helper_babel.interopRequireDefault(_footer_social_block);
    var FooterSocialBlock = function FooterSocialBlock(props) {
        var iconList = props.iconList;
        return _react2.default.createElement('ul', {
            className: 'FooterSocialBlock'
        }, iconList.map(function(icon) {
            return _react2.default.createElement('li', {
                key: icon.link
            }, _react2.default.createElement('a', {
                href: icon.link,
                className: 'FooterSocialBlock-link',
                target: '_blank',
                rel: 'noopener noreferrer'
            }, _react2.default.createElement(_pl_icon2.default, {
                iconId: icon.id,
                cssClasses: 'FooterSocialBlock-icon',
                title: icon.id
            })));
        }));
    };
    exports.default = _footer_social_block2.default.hoc(FooterSocialBlock);
});
/*wfsw*/
/*wfsw:feedback_drawer*/
define('feedback_drawer', ['exports', 'react', 'prop-types', 'pl_drawer', 'pl_interstitial_header', 'lnrs', 'feedback_contact_fork', 'feedback_modal', 'turbine_helper_babel'], function(exports, _react, _propTypes, _pl_drawer, _pl_interstitial_header, _lnrs, _feedback_contact_fork, _feedback_modal, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var _pl_drawer2 = _turbine_helper_babel.interopRequireDefault(_pl_drawer);
    var _pl_interstitial_header2 = _turbine_helper_babel.interopRequireDefault(_pl_interstitial_header);
    var _lnrs2 = _turbine_helper_babel.interopRequireDefault(_lnrs);
    var _feedback_contact_fork2 = _turbine_helper_babel.interopRequireDefault(_feedback_contact_fork);
    var _feedback_modal2 = _turbine_helper_babel.interopRequireDefault(_feedback_modal);
    var FeedbackDrawer = function(_Component) {
        _turbine_helper_babel.inherits(FeedbackDrawer, _Component);
        function FeedbackDrawer() {
            var _ref;
            var _temp, _this, _ret;
            _turbine_helper_babel.classCallCheck(this, FeedbackDrawer);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _turbine_helper_babel.possibleConstructorReturn(this, (_ref = FeedbackDrawer.__proto__ || Object.getPrototypeOf(FeedbackDrawer)).call.apply(_ref, [this].concat(args))),
            _this),
            _this.state = {
                showFork: true
            },
            _this.getDrawerTitle = function() {
                var title = _lnrs2.default.translate('PleaseSubmitYourFeedback', 'Please Submit your Feedback');
                if (_this.state.showFork) {
                    title = _lnrs2.default.translate('HowCanWeHelpYou', 'How Can We Help You?');
                }
                return title;
            }
            ,
            _this.handleDrawerClose = function() {
                _this.setState({
                    showFork: true
                });
                _this.props.handleClose();
            }
            ,
            _this.handleFeedbackFork = function() {
                _this.setState({
                    showFork: false
                });
            }
            ,
            _this.handleToastToggle = function(showToast) {
                _this.props.toggleToast(showToast);
            }
            ,
            _temp),
            _turbine_helper_babel.possibleConstructorReturn(_this, _ret);
        }
        _turbine_helper_babel.createClass(FeedbackDrawer, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(_pl_drawer2.default, {
                    size: 'fullWidth',
                    isOpen: this.props.isOpen,
                    onRequestClose: this.handleDrawerClose,
                    headerComponent: _react2.default.createElement(_pl_interstitial_header2.default, {
                        onBackClick: this.handleDrawerClose,
                        title: this.getDrawerTitle(),
                        showBackButton: true,
                        backButtonUseIcon: true
                    }),
                    showHeader: true
                }, this.state.showFork ? _react2.default.createElement(_feedback_contact_fork2.default, {
                    handleClose: this.handleDrawerClose,
                    handleFeedbackFork: this.handleFeedbackFork
                }) : _react2.default.createElement(_feedback_modal2.default, {
                    handleClose: this.handleDrawerClose,
                    toggleToast: this.handleToastToggle,
                    fullName: this.props.fullName,
                    emailAddress: this.props.emailAddress
                }));
            }
        }]);
        return FeedbackDrawer;
    }(_react.Component);
    FeedbackDrawer.defaultProps = {
        handleClose: {},
        fullName: '',
        emailAddress: ''
    };
    exports.default = FeedbackDrawer;
});
/*wfsw*/
/*wfsw:device_fingerprint_hashes*/
define('device_fingerprint_hashes', ['exports', 'react', '@feature/enable_scribe_device_fingerprint_hashes', 'wf_scheduler', 'wf_storage', 'string_utils', 'canvas_detect', 'font_detect', 'scribe', '@styles/tracking/device_fingerprint/components/device_fingerprint_hashes', 'turbine_helper_babel'], function(exports, _react, _enable_scribe_device_fingerprint_hashes, _wf_scheduler, _wf_storage, _string_utils, _canvas_detect, _font_detect, _scribe, _device_fingerprint_hashes, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.DeviceFingerprintHashes = undefined;
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _enable_scribe_device_fingerprint_hashes2 = _turbine_helper_babel.interopRequireDefault(_enable_scribe_device_fingerprint_hashes);
    var _wf_storage2 = _turbine_helper_babel.interopRequireDefault(_wf_storage);
    var _string_utils2 = _turbine_helper_babel.interopRequireDefault(_string_utils);
    var _canvas_detect2 = _turbine_helper_babel.interopRequireDefault(_canvas_detect);
    var _font_detect2 = _turbine_helper_babel.interopRequireDefault(_font_detect);
    var _scribe2 = _turbine_helper_babel.interopRequireDefault(_scribe);
    var _device_fingerprint_hashes2 = _turbine_helper_babel.interopRequireDefault(_device_fingerprint_hashes);
    var hashCode = _string_utils2.default.hashCode;
    var PLUGIN_HASH = 'pluginHash';
    var LANGUAGE_HASH = 'languageHash';
    var FONT_HASH = 'fontHash';
    var CANVAS_HASHES = 'canvasHashes';
    var STANDARD_FONT_CANVAS_HASH = 'standardFont';
    var FALLBACK_FONT_CANVAS_HASH = 'fallbackFont';
    var WEBGL_CANVAS_HASH = 'webGl';
    var PLUGIN_HASH_COOKIE = 'pluginHashCookie';
    var LANGUAGE_HASH_COOKIE = 'languageHashCookie';
    var FONT_HASH_COOKIE = 'fontHashCookie';
    var STANDARD_FONT_CANVAS_HASH_COOKIE = 'standardFontCookie';
    var FALLBACK_FONT_CANVAS_HASH_COOKIE = 'fallbackFontCookie';
    var WEBGL_CANVAS_HASH_COOKIE = 'webGlCookie';
    var COOKIE_TTL = 1;
    var hashesCalculated = {};
    var calculatePluginHash = function calculatePluginHash() {
        var plugins = window.navigator.plugins;
        if (plugins) {
            return btoa(hashCode({
                str: Array.from(plugins, function(plugin) {
                    return plugin.name;
                }).join()
            }));
        } else {
            return null;
        }
    };
    var calculateLanguageHash = function calculateLanguageHash() {
        var languages = window.navigator.languages;
        if (languages) {
            return btoa(hashCode({
                str: languages.join()
            }));
        } else {
            return null;
        }
    };
    var addHashToHashesCalculatedBlob = function addHashToHashesCalculatedBlob(hashKey, hash) {
        if (hashKey === FALLBACK_FONT_CANVAS_HASH || hashKey === STANDARD_FONT_CANVAS_HASH || hashKey === WEBGL_CANVAS_HASH) {
            if (!hashesCalculated[CANVAS_HASHES]) {
                hashesCalculated[CANVAS_HASHES] = {};
            }
            hashesCalculated[CANVAS_HASHES][hashKey] = hash;
        } else {
            hashesCalculated[hashKey] = hash;
        }
    };
    var trackDeviceFingerprintHashesCalculation = function trackDeviceFingerprintHashesCalculation() {
        if (Object.keys(hashesCalculated).length) {
            _scribe2.default.trackWebAction('device_fingerprint_hashes_calculation', hashesCalculated);
        }
    };
    var HASH_FUNCTIONS = [{
        fn: calculatePluginHash,
        hashKey: PLUGIN_HASH,
        cookieKey: PLUGIN_HASH_COOKIE
    }, {
        fn: calculateLanguageHash,
        hashKey: LANGUAGE_HASH,
        cookieKey: LANGUAGE_HASH_COOKIE
    }, {
        fn: _canvas_detect.calculateFallbackFontCanvasHash,
        hashKey: FALLBACK_FONT_CANVAS_HASH,
        cookieKey: FALLBACK_FONT_CANVAS_HASH_COOKIE
    }, {
        fn: _canvas_detect.calculateStandardFontCanvasHash,
        hashKey: STANDARD_FONT_CANVAS_HASH,
        cookieKey: STANDARD_FONT_CANVAS_HASH_COOKIE
    }, {
        fn: _canvas_detect.calculateWebGlCanvasHash,
        hashKey: WEBGL_CANVAS_HASH,
        cookieKey: WEBGL_CANVAS_HASH_COOKIE
    }, {
        fn: _font_detect.calculateFontHash,
        hashKey: FONT_HASH,
        cookieKey: FONT_HASH_COOKIE
    }];
    var DeviceFingerprintHashes = exports.DeviceFingerprintHashes = function(_Component) {
        _turbine_helper_babel.inherits(DeviceFingerprintHashes, _Component);
        function DeviceFingerprintHashes() {
            var _ref;
            var _temp, _this, _ret;
            _turbine_helper_babel.classCallCheck(this, DeviceFingerprintHashes);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _turbine_helper_babel.possibleConstructorReturn(this, (_ref = DeviceFingerprintHashes.__proto__ || Object.getPrototypeOf(DeviceFingerprintHashes)).call.apply(_ref, [this].concat(args))),
            _this),
            _this.componentDidMount = function() {
                if (_enable_scribe_device_fingerprint_hashes2.default) {
                    (0,
                    _wf_scheduler.queuePostLoadTask)(function() {
                        window.addEventListener('unload', trackDeviceFingerprintHashesCalculation);
                        window.requestIdleCallback(function() {
                            HASH_FUNCTIONS.forEach(function(_ref2) {
                                var fn = _ref2.fn
                                  , hashKey = _ref2.hashKey
                                  , cookieKey = _ref2.cookieKey;
                                if (!_wf_storage2.default.cookie.get({
                                    key: cookieKey
                                }) || !_wf_storage2.default.local.get({
                                    key: hashKey
                                })) {
                                    var hash = fn();
                                    if (hash) {
                                        _wf_storage2.default.local.set({
                                            key: hashKey,
                                            value: hash
                                        });
                                        _wf_storage2.default.cookie.set({
                                            key: cookieKey,
                                            value: true,
                                            ttl: COOKIE_TTL
                                        });
                                        addHashToHashesCalculatedBlob(hashKey, hash);
                                    }
                                }
                            });
                            trackDeviceFingerprintHashesCalculation();
                            window.removeEventListener('unload', trackDeviceFingerprintHashesCalculation);
                        });
                    });
                }
            }
            ,
            _this.shouldComponentUpdate = function() {
                return false;
            }
            ,
            _temp),
            _turbine_helper_babel.possibleConstructorReturn(_this, _ret);
        }
        _turbine_helper_babel.createClass(DeviceFingerprintHashes, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement('div', {
                    className: 'DeviceFingerprintHashes'
                }, _enable_scribe_device_fingerprint_hashes2.default && _react2.default.createElement(_canvas_detect2.default, null), _enable_scribe_device_fingerprint_hashes2.default && _react2.default.createElement(_font_detect2.default, null));
            }
        }]);
        return DeviceFingerprintHashes;
    }(_react.Component);
    exports.default = _device_fingerprint_hashes2.default.hoc(DeviceFingerprintHashes);
});
/*wfsw*/
/*wfsw:apn_media_service*/
define('apn_media_service', ['wayfair', 'underscore', 'apn_media_utils', 'featuredetect', 'logger', 'apn_media_constants', 'performance_stats', 'pbjs'], function(_wf, _, _apnMediaUtils, featuredetect, logger, _apnMediaConstants, _performanceStats) {
    'use strict';
    var _turbine_helper_amd = require('turbine_helper_amd')
      , wf = _turbine_helper_amd.interopRequireAmd(_wf)
      , apnMediaUtils = _turbine_helper_amd.interopRequireAmd(_apnMediaUtils)
      , apnMediaConstants = _turbine_helper_amd.interopRequireAmd(_apnMediaConstants)
      , performanceStats = _turbine_helper_amd.interopRequireAmd(_performanceStats);
    var PREBID_FLAG = false;
    var bidWinners = {};
    var stop = performanceStats.stop;
    var _getApnTag = function _getApnTag() {
        var apntag = wf.isClient && window.apntag || {};
        apntag.anq = apntag.anq || [];
        return apntag;
    };
    var _getPbjsObject = function _getPbjsObject() {
        var pbjs = wf.isClient && window.pbjs || {};
        pbjs.que = pbjs.que || [];
        return pbjs;
    };
    var setOptions = function setOptions(extraTargeting) {
        var apntag = _getApnTag();
        if (!window.apntag) {
            return;
        }
        apntag.anq.push(function() {
            apntag.setPageOpts(apnMediaUtils.getPageOptions(extraTargeting));
        });
    };
    var defineAdsSetPageOptions = function defineAdsSetPageOptions(ads, extraTargeting) {
        var apntag = _getApnTag();
        if (!window.apntag) {
            return;
        }
        apntag.anq.push(function() {
            apntag.setPageOpts(apnMediaUtils.getPageOptions(extraTargeting));
            ads.forEach(function(ad) {
                if (ad.omitRequest) {
                    return;
                }
                apntag.defineTag(ad);
            });
        });
    };
    var defineLoadAndShowAds = function defineLoadAndShowAds(ads, extraTargeting, postLoadCallback, adLoadedCallback) {
        defineAdsSetPageOptions(ads, extraTargeting);
        loadAds(ads, postLoadCallback);
        showAds(ads, postLoadCallback, adLoadedCallback);
    };
    var loadAds = function loadAds(ads, adFailedCallback) {
        var apntag = _getApnTag();
        var pbjs = _getPbjsObject();
        var prebidAds = [];
        if (!window.apntag || !window.pbjs) {
            return;
        }
        ads.forEach(function(ad) {
            if (ad.isPrebid) {
                prebidAds.push(runPrebidSetup(pbjs, ad));
                PREBID_FLAG = true;
            }
        });
        if (PREBID_FLAG) {
            pbjs.que.push(function() {
                pbjs.addAdUnits(prebidAds);
                pbjs.requestBids({
                    timeout: apnMediaConstants.PREBID_TIMEOUT,
                    bidsBackHandler: function bidsBackHandler() {
                        if (pbjs.adserverRequestSent) {
                            return;
                        }
                        pbjs.adserverRequestSent = true;
                        pbjs.que.push(function() {
                            apntag.anq.push(function() {
                                pbjs.setTargetingForAst();
                                makeAdRequest(adFailedCallback);
                            });
                        });
                    }
                });
            });
            PREBID_FLAG = false;
        } else {
            makeAdRequest(adFailedCallback);
        }
    };
    var runPrebidSetup = function runPrebidSetup(pbjs, ad) {
        pbjs.setConfig({
            priceGranularity: apnMediaConstants.customGranularity
        });
        pbjs.adserverRequestSent = false;
        pbjs.bidderSettings = featuredetect.isPhone() ? apnMediaUtils.getMobileBidderSettings() : apnMediaUtils.getBidderSettings();
        var bidders = ad.adBidders.split(';');
        var bidsArray = [];
        pbjs.que.push(function() {
            pbjs.onEvent('auctionEnd', function() {
                if (wf.apnData && wf.apnData.showAdminOverlay) {
                    var winner = getBidWinner(ad.targetId);
                    if (!bidWinners[ad.targetId] && winner) {
                        bidWinners[ad.targetId] = winner;
                    }
                }
                if (pbjs.adUnits) {
                    for (var i in pbjs.adUnits) {
                        if (pbjs.adUnits.hasOwnProperty(i)) {
                            pbjs.removeAdUnit(pbjs.adUnits[i].code);
                        }
                    }
                }
                pbjs.offEvent('auctionEnd', this);
            });
            bidders.forEach(function(bid) {
                switch (bid) {
                case apnMediaConstants.RUBICON:
                    {
                        bidsArray = bidsArray.concat({
                            bidder: 'rubicon',
                            params: apnMediaUtils.getRubiconParams(ad)
                        });
                        break;
                    }
                case apnMediaConstants.OPENX:
                    {
                        bidsArray = bidsArray.concat({
                            bidder: 'openx',
                            params: {
                                unit: apnMediaUtils.getOpenXUnitId(ad),
                                delDomain: 'wayfairssp-d.openx.net'
                            }
                        });
                        break;
                    }
                case apnMediaConstants.TRIPLELIFT:
                    {
                        bidsArray = bidsArray.concat({
                            bidder: 'triplelift',
                            params: {
                                inventoryCode: apnMediaUtils.getTripleLiftInventoryCode(ad)
                            }
                        });
                        break;
                    }
                case apnMediaConstants.INDEXEXCHANGE:
                    {
                        bidsArray = bidsArray.concat({
                            bidder: 'ix',
                            params: {
                                siteId: apnMediaUtils.getIndexExchangeSiteId(ad),
                                id: ad.tagId,
                                size: ad.sizes
                            }
                        });
                        break;
                    }
                default:
                    break;
                }
            });
        });
        return {
            code: ad.targetId,
            sizes: ad.sizes,
            bids: _.shuffle(bidsArray)
        };
    };
    var makeAdRequest = function makeAdRequest(requestFailedCallback) {
        var apntag = _getApnTag();
        if (!window.apntag) {
            return false;
        }
        apntag.anq.push(function() {
            try {
                apntag.loadTags();
                apntag.onEvent('adRequestFailure', function() {
                    requestFailedCallback();
                    apntag.offEvent('adRequestFailure');
                });
                apntag.onEvent('adRequested', function() {
                    apntag.onEvent('adError', function(adObj, adError) {
                        requestFailedCallback();
                        logger.useLogger(apnMediaConstants.LOGGER_NAME).info('Ad callback executed : ' + adObj);
                        logger.useLogger(apnMediaConstants.LOGGER_NAME).info('Ad Error : ' + adError);
                    });
                });
            } catch (err) {
                logger.useLogger(apnMediaConstants.LOGGER_NAME).info('AppNexus V2 call not made, placements are not loaded : ' + err.message);
            }
        });
    };
    var showAds = function showAds(ads, postLoadCallback, adLoadedCallback) {
        var apntag = _getApnTag();
        if (!window.apntag) {
            postLoadCallback();
            return;
        }
        apntag.anq.push(function() {
            ads.forEach(function(ad) {
                apntag.onEvent('adAvailable', ad.targetId, function(adObj) {
                    if (wf.apnData && wf.apnData.showAdminOverlay) {
                        adObj.bidWinner = bidWinners[ad.targetId] || 'N/A';
                    }
                    adLoadedCallback(adObj);
                    postLoadCallback();
                    if (!ad.isHomepageSliderAd) {
                        switch (adObj.adType) {
                        case 'banner':
                            {
                                apntag.showTag(ad.targetId);
                                break;
                            }
                        default:
                            break;
                        }
                    }
                    stop(apnMediaConstants.APN_MEDIA_TIMER);
                });
                apntag.onEvent('adNoBid', ad.targetId, function(adObj) {
                    apntag.offEvent('adAvailable', ad.targetId);
                    adLoadedCallback({
                        tagId: ad.tagId,
                        nobid: true
                    });
                    postLoadCallback();
                });
            });
        });
    };
    var getBidWinner = function getBidWinner(targetId) {
        var pbjs = _getPbjsObject();
        if (!window.pbjs) {
            return '';
        }
        var response = pbjs.getBidResponses();
        var bidResponse = response[targetId];
        var bidWinner = null;
        var cpm = 0.0;
        if (bidResponse) {
            bidResponse.bids.map(function(bid) {
                if (bid.cpm > cpm) {
                    bidWinner = bid.bidder;
                    cpm = bid.cpm;
                }
            });
        }
        return bidWinner;
    };
    var setAdSpecificKeyWords = function setAdSpecificKeyWords(targetId, parameters) {
        var apntag = _getApnTag();
        if (!window.apntag) {
            return;
        }
        apntag.anq.push(function() {
            apntag.setKeywords(targetId, parameters);
        });
    };
    var resizeAd = function resizeAd(targetId, size) {
        var apntag = _getApnTag();
        if (!window.apntag) {
            return;
        }
        apntag.anq.push(function() {
            apntag.resizeAd(targetId, size);
        });
    };
    var refreshAds = function refreshAds(ads) {
        var apntag = _getApnTag();
        if (!window.apntag) {
            return;
        }
        var targetIds = [];
        ads.forEach(function(ad) {
            targetIds.push(ad.targetId);
        });
        apntag.anq.push(function() {
            apntag.refresh(targetIds);
        });
    };
    var isRequested = function isRequested(ad) {
        var apntag = _getApnTag();
        if (!window.apntag) {
            return false;
        }
        if (apntag.requests.tags && apntag.requests.tags[ad.targetId]) {
            return true;
        } else {
            return false;
        }
    };
    var modifyAd = function modifyAd(targetId, params) {
        var apntag = _getApnTag();
        if (!window.apntag) {
            return;
        }
        apntag.anq.push(function() {
            apntag.modifyTag(targetId, params);
        });
    };
    var resetAds = function resetAds() {
        var apntag = _getApnTag();
        if (!window.apntag) {
            return;
        }
        apntag.anq.push(function() {
            apntag.clearRequest();
        });
    };
    return {
        setOptions: setOptions,
        defineAdsSetPageOptions: defineAdsSetPageOptions,
        loadAds: loadAds,
        makeAdRequest: makeAdRequest,
        showAds: showAds,
        resizeAd: resizeAd,
        refreshAds: refreshAds,
        isRequested: isRequested,
        modifyAd: modifyAd,
        setAdSpecificKeyWords: setAdSpecificKeyWords,
        resetAds: resetAds,
        defineLoadAndShowAds: defineLoadAndShowAds
    };
});
/*wfsw*/
/*wfsw:my_projects_header_dropdown_api*/
define('my_projects_header_dropdown_api', ['exports', 'wayfair', 'favorites_constants', 'room_planner_constants', 'design_services_constants', 'design_services_data_selectors', 'design_services_header_dropdown_queries', 'room_planner_api', 'wf-wretch', 'fetch_query', 'url_utils', 'graphql_tag', 'performance_stats', 'turbine_helper_babel'], function(exports, _wayfair, _favorites_constants, _room_planner_constants, _design_services_constants, _design_services_data_selectors, _design_services_header_dropdown_queries, _room_planner_api, _wfWretch, _fetch_query, _url_utils, _graphql_tag, _performance_stats, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.isLoggedIn = isLoggedIn;
    exports.isUserDesigner = isUserDesigner;
    exports.fetchCustomerName = fetchCustomerName;
    exports.fetchMostRecentRoom = fetchMostRecentRoom;
    exports.fetchMostRecentProject = fetchMostRecentProject;
    exports.redirectToLoginThenRoomPlannerOnboardingPage = redirectToLoginThenRoomPlannerOnboardingPage;
    exports.redirectToUrl = redirectToUrl;
    exports.redirectToRoomPlannerOnboardingPage = redirectToRoomPlannerOnboardingPage;
    exports.redirectToListsPage = redirectToListsPage;
    exports.redirectToDesignServicesClientLandingPage = redirectToDesignServicesClientLandingPage;
    exports.redirectToDesignerDashboard = redirectToDesignerDashboard;
    exports.redirectToDesignServicesDesignerLandingPage = redirectToDesignServicesDesignerLandingPage;
    exports.redirectToBusinessInteriorsPage = redirectToBusinessInteriorsPage;
    exports.fetchDesignServicesUserInfo = fetchDesignServicesUserInfo;
    var _wayfair2 = _turbine_helper_babel.interopRequireDefault(_wayfair);
    var _favorites_constants2 = _turbine_helper_babel.interopRequireDefault(_favorites_constants);
    var _design_services_header_dropdown_queries2 = _turbine_helper_babel.interopRequireDefault(_design_services_header_dropdown_queries);
    var _room_planner_api2 = _turbine_helper_babel.interopRequireDefault(_room_planner_api);
    var _wfWretch2 = _turbine_helper_babel.interopRequireDefault(_wfWretch);
    var _fetch_query2 = _turbine_helper_babel.interopRequireDefault(_fetch_query);
    var _url_utils2 = _turbine_helper_babel.interopRequireDefault(_url_utils);
    var _graphql_tag2 = _turbine_helper_babel.interopRequireDefault(_graphql_tag);
    function isLoggedIn() {
        return _wayfair2.default.get('appData.session.isLoggedInAsRealCustomer');
    }
    function isUserDesigner() {
        return _wayfair2.default.get('appData.session.isDesigner');
    }
    function fetchCustomerName() {
        return (0,
        _wfWretch2.default)('/a/header/get_customer_info').post().json().then(function(_ref) {
            var customerFirstName = _ref.customerFirstName;
            return customerFirstName;
        }).catch(function() {
            _wayfair2.default.logger.info('Failed to load customer name for contextual sign in component');
            return '';
        });
    }
    function fetchMostRecentRoom() {
        return _room_planner_api2.default.fetchSavedRooms(1, '', false).then(function(response) {
            var edges = _wayfair2.default.get('data.me.customer.roomConnection.edges', response);
            if (edges && edges.length > 0) {
                return edges[0].node;
            }
            return {};
        }).catch(function() {
            (0,
            _performance_stats.increment)('my_projects_header_fetch_room_failure');
            return {};
        });
    }
    function fetchMostRecentProject() {
        return (0,
        _fetch_query2.default)({
            query: _design_services_header_dropdown_queries2.default
        }).then(function(response) {
            var projects = _wayfair2.default.get('data.me.customer.projects', response);
            if (projects && projects.length > 0) {
                return projects[0];
            }
            return {};
        }).catch(function() {
            (0,
            _performance_stats.increment)('my_projects_header_fetch_project_failure');
            return {};
        });
    }
    function redirectToLoginThenRoomPlannerOnboardingPage() {
        _url_utils2.default.redirectToLogin(encodeURIComponent(_room_planner_constants.ROOM_PLANNER_ONBOARDING_PAGE_URL_SUFFIX));
    }
    function redirectToUrl(url) {
        window.location.href = url;
    }
    function redirectToRoomPlannerOnboardingPage() {
        redirectToUrl(_room_planner_constants.ROOM_PLANNER_ONBOARDING_PAGE_URL_SUFFIX);
    }
    function redirectToListsPage() {
        redirectToUrl(_favorites_constants2.default.DEFAULT_PROFILE_URL);
    }
    function redirectToDesignServicesClientLandingPage() {
        redirectToUrl(_design_services_constants.CLIENT_LANDING_LINK);
    }
    function redirectToDesignerDashboard() {
        redirectToUrl(_design_services_constants.DESIGNER_DASHBOARD_OPEN_PLAN_LANE_LINK);
    }
    function redirectToDesignServicesDesignerLandingPage() {
        redirectToUrl(_design_services_constants.DESIGNER_LANDING_LINK);
    }
    function redirectToBusinessInteriorsPage() {
        redirectToUrl(_design_services_constants.BUSINESS_INTERIORS_LANDING_PAGE);
    }
    var designServicesUserInfo = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query getDesignServicesUserInfo {\n me {\n customer {\n isDesignServicesUser\n businessProgram {\n ... on b2bContact {\n account {\n companyType\n }\n }\n }\n }\n }\n }\n']].concat(f));
        q.path = 'my_projects_header_dropdown_api~0' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    function fetchDesignServicesUserInfo() {
        return (0,
        _fetch_query2.default)({
            query: designServicesUserInfo
        }).then(function(_ref2) {
            var data = _ref2.data;
            return {
                isDesignServicesUser: (0,
                _design_services_data_selectors.selectIsDesignServicesUser)(data),
                isUserB2BCustomer: !!(0,
                _design_services_data_selectors.selectBusinessProgramAccount)(data),
                companyType: (0,
                _design_services_data_selectors.selectBusinessProgramAccountCompanyType)(data)
            };
        });
    }
});
/*wfsw*/
/*wfsw:my_projects_header_dropdown_card*/
define('my_projects_header_dropdown_card', ['exports', 'react', 'prop_types', 'pl_image', 'pl_icon', 'classnames', '@styles/plan_lane/my_projects_header_dropdown/my_projects_header_dropdown_card', 'turbine_helper_babel'], function(exports, _react, _prop_types, _pl_image, _pl_icon, _classnames, _my_projects_header_dropdown_card, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _prop_types2 = _turbine_helper_babel.interopRequireDefault(_prop_types);
    var _pl_image2 = _turbine_helper_babel.interopRequireDefault(_pl_image);
    var _pl_icon2 = _turbine_helper_babel.interopRequireDefault(_pl_icon);
    var _classnames2 = _turbine_helper_babel.interopRequireDefault(_classnames);
    var _my_projects_header_dropdown_card2 = _turbine_helper_babel.interopRequireDefault(_my_projects_header_dropdown_card);
    var MyProjectsHeaderDropdownCard = function MyProjectsHeaderDropdownCard(props) {
        return _react2.default.createElement('button', {
            className: (0,
            _classnames2.default)('MyProjectsDropdownCard', {
                'MyProjectsDropdownCard-allowHover': props.allowHoverState
            }),
            onClick: props.onClick,
            'data-click-location': props.dataClickLocation,
            'data-codeception-id': props.dataCodeceptionId
        }, _react2.default.createElement('div', {
            className: 'MyProjectsDropdownCard-image'
        }, _react2.default.createElement(_pl_image2.default, {
            imageId: props.imageId,
            alt: props.title,
            lazyLoadImage: true,
            isFullWidth: true,
            width: 321,
            height: 193,
            shimmer: true
        })), _react2.default.createElement('div', {
            className: 'MyProjectsDropdownCard-textBox'
        }, _react2.default.createElement('div', {
            className: 'MyProjectsDropdownCard-iconWrap'
        }, _react2.default.createElement(_pl_icon2.default, {
            iconId: props.iconId,
            cssClasses: (0,
            _classnames2.default)('MyProjectsDropdownCard-iconWrap-icon', props.iconCssClasses)
        })), _react2.default.createElement('h3', {
            className: 'MyProjectsDropdownCard-title'
        }, props.title), _react2.default.createElement('p', {
            className: 'MyProjectsDropdownCard-caption'
        }, props.text)), props.showLoadingSpinner && _react2.default.createElement('div', {
            className: 'MyProjectsDropdownCard-loading'
        }, _react2.default.createElement('div', {
            className: 'waiting'
        })));
    };
    MyProjectsHeaderDropdownCard.defaultProps = {
        iconCssClasses: [],
        allowHoverState: true,
        showLoadingSpinner: false,
        dataCodeceptionId: ''
    };
    exports.default = _my_projects_header_dropdown_card2.default.hoc(MyProjectsHeaderDropdownCard);
});
/*wfsw*/
/*wfsw:room_planner_constants*/
define('room_planner_constants', ['exports'], function(exports) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var ROOM_PLANNER_ROOM_TYPE = exports.ROOM_PLANNER_ROOM_TYPE = 'ROOMPLANNER';
    var GALLERY_WALL_ROOM_TYPE = exports.GALLERY_WALL_ROOM_TYPE = 'GALLERYWALL';
    var FRONT_DOOR_ROOM_TYPE = exports.FRONT_DOOR_ROOM_TYPE = 'FRONTDOOR';
    var TABLE_SCAPE_ROOM_TYPE = exports.TABLE_SCAPE_ROOM_TYPE = 'TABLESCAPE';
    var ROOM_PLANNER_ENTRY_POINT = exports.ROOM_PLANNER_ENTRY_POINT = 'RoomPlanner';
    var FRONT_DOOR_ENTRY_POINT = exports.FRONT_DOOR_ENTRY_POINT = 'FrontDoor';
    var GALLERY_WALL_ENTRY_POINT = exports.GALLERY_WALL_ENTRY_POINT = 'GalleryWall';
    var TABLE_SCAPE_ENTRY_POINT = exports.TABLE_SCAPE_ENTRY_POINT = 'TableScape';
    var ROOT_CATEGORY_ID = exports.ROOT_CATEGORY_ID = 0;
    var DEFAULT_LOAD_THRESHOLD = exports.DEFAULT_LOAD_THRESHOLD = 500;
    var DEFAULT_PRODUCT_PAGE = exports.DEFAULT_PRODUCT_PAGE = 1;
    var DEFAULT_ROOM_WIDTH = exports.DEFAULT_ROOM_WIDTH = 969;
    var DEFAULT_ROOM_HEIGHT = exports.DEFAULT_ROOM_HEIGHT = 606;
    var DEFAULT_ROOM_HEIGHT_INCHES = exports.DEFAULT_ROOM_HEIGHT_INCHES = 9 * 12;
    var DEFAULT_FRONT_DOOR_HEIGHT_INCHES = exports.DEFAULT_FRONT_DOOR_HEIGHT_INCHES = 7.93 * 12;
    var ITEM_PX_FOR_LARGER_IMAGE = exports.ITEM_PX_FOR_LARGER_IMAGE = 450;
    var MAX_SCALE_SIZE = exports.MAX_SCALE_SIZE = 4;
    var DEFAULT_BACKGROUND_HEIGHT = exports.DEFAULT_BACKGROUND_HEIGHT = 800;
    var DEFAULT_BACKGROUND_WIDTH = exports.DEFAULT_BACKGROUND_WIDTH = 1423;
    var THREE_D_TYPE_THREE_SIXTY = exports.THREE_D_TYPE_THREE_SIXTY = 1;
    var THREE_D_TYPE_PERSPECTIVE_RUG = exports.THREE_D_TYPE_PERSPECTIVE_RUG = 2;
    var THREE_D_TYPE_QA = exports.THREE_D_TYPE_QA = 3;
    var THREE_D_TYPE_PERSPECTIVE_WALL_ART = exports.THREE_D_TYPE_PERSPECTIVE_WALL_ART = 4;
    var MID_ROOM_WALL_RATIO = exports.MID_ROOM_WALL_RATIO = 0.91474245;
    var AUTO_SCALE_MIN_HEIGHT = exports.AUTO_SCALE_MIN_HEIGHT = 3;
    var AUTO_SCALE_MIN_HEIGHT_WHEN_LESS_THAN_DEPTH = exports.AUTO_SCALE_MIN_HEIGHT_WHEN_LESS_THAN_DEPTH = 15;
    var OLD_ROOM_ITEM_IMAGE_SIZE = exports.OLD_ROOM_ITEM_IMAGE_SIZE = 800;
    var OLD_QA_ROOM_ITEM_IMAGE_SIZE = exports.OLD_QA_ROOM_ITEM_IMAGE_SIZE = 400;
    var DEFAULT_ROOM_ITEM_IMAGE_SIZE = exports.DEFAULT_ROOM_ITEM_IMAGE_SIZE = 400;
    var DESIGN_SERVICES_DEFAULT_ROOM_ITEM_IMAGE_SIZE = exports.DESIGN_SERVICES_DEFAULT_ROOM_ITEM_IMAGE_SIZE = 800;
    var INITIAL_X = exports.INITIAL_X = 0.3;
    var INITIAL_Y = exports.INITIAL_Y = 0.3;
    var INITIAL_ROTATION = exports.INITIAL_ROTATION = 0;
    var INITIAL_ROTATION_Z_ANGLE = exports.INITIAL_ROTATION_Z_ANGLE = 0;
    var INITIAL_RUG_ROTATION_Z_ANGLE = exports.INITIAL_RUG_ROTATION_Z_ANGLE = 90;
    var FRONT_VIEW_ROTATION_Z_ANGLE = exports.FRONT_VIEW_ROTATION_Z_ANGLE = 0;
    var INITIAL_IS_MIRRORED = exports.INITIAL_IS_MIRRORED = false;
    var DEFAULT_INITIAL_SCALE = exports.DEFAULT_INITIAL_SCALE = 0.5;
    var DEFAULT_RUG_INITIAL_SCALE = exports.DEFAULT_RUG_INITIAL_SCALE = 1;
    var LAYER_TOOL_POPOVER_SHOWN_KEY = exports.LAYER_TOOL_POPOVER_SHOWN_KEY = 'roomPlannerLayerToolPopoverShown';
    var GALLERY_WALL_TOUR_SHOWN_KEY = exports.GALLERY_WALL_TOUR_SHOWN_KEY = 'roomPlannerGalleryWallTourShown';
    var ROOM_PLANNER_ONBOARDING_PAGE_URL_SUFFIX = exports.ROOM_PLANNER_ONBOARDING_PAGE_URL_SUFFIX = '/' + ROOM_PLANNER_ENTRY_POINT + '/new';
    var ROOM_PLANNER_MWEB_PAGE_URL_SUFFIX = exports.ROOM_PLANNER_MWEB_PAGE_URL_SUFFIX = '/v/room_planner/view';
    var ROOM_PLANNER_ICON_ID = exports.ROOM_PLANNER_ICON_ID = 'room-planner';
    var UNITS_INCHES = exports.UNITS_INCHES = 1;
    var UNITS_INCHES_STRING = exports.UNITS_INCHES_STRING = '"';
    var UNITS_CENTIMETERS = exports.UNITS_CENTIMETERS = 2;
    var UNITS_CENTIMETERS_STRING = exports.UNITS_CENTIMETERS_STRING = ' cm';
    var INCHES_IN_CENTIMETER = exports.INCHES_IN_CENTIMETER = 0.393701;
    var NUM_LISTS_IN_DROPDOWN = exports.NUM_LISTS_IN_DROPDOWN = 4;
    var ROOM_PLANNER_ITEM_TOOLTIP_WIDTH = exports.ROOM_PLANNER_ITEM_TOOLTIP_WIDTH = 250;
    var DRAG_TYPE_ITEM = exports.DRAG_TYPE_ITEM = 'item';
    var DRAG_TYPE_PRODUCT = exports.DRAG_TYPE_PRODUCT = 'product';
    var DRAG_TYPE_PRODUCT_DETAILS = exports.DRAG_TYPE_PRODUCT_DETAILS = 'product_details';
    var ADD_PRODUCT_TO_ROOM_TRACKING_EVENT = exports.ADD_PRODUCT_TO_ROOM_TRACKING_EVENT = 'RP_CAT_ITEM';
    var ADD_PRODUCT_TO_ROOM_FROM_DETAILS_TRACKING_EVENT = exports.ADD_PRODUCT_TO_ROOM_FROM_DETAILS_TRACKING_EVENT = 'RP_PDETAIL_ITEM';
    var INITIAL_PAGE = exports.INITIAL_PAGE = 0;
    var INITIAL_LISTS_FETCHED = exports.INITIAL_LISTS_FETCHED = 6;
    var OVERALL_DIMENSION_DATA = exports.OVERALL_DIMENSION_DATA = 'Overall';
    var RUG_CLASS_IDS = exports.RUG_CLASS_IDS = [167, 6962];
    var GARLAND_CLASS_ID = exports.GARLAND_CLASS_ID = 1014;
    var DEFAULT_X_ADJUSTMENT = exports.DEFAULT_X_ADJUSTMENT = 0.5;
    var DEFAULT_Y_ADJUSTMENT = exports.DEFAULT_Y_ADJUSTMENT = 0.3;
    var MAX_X_DIFF_FOR_VERTICAL_LINE = exports.MAX_X_DIFF_FOR_VERTICAL_LINE = 0.05;
    var GALLERY_WALL_DEFAULT_WIDTH = exports.GALLERY_WALL_DEFAULT_WIDTH = 60;
    var GALLERY_WALL_DEFAULT_HEIGHT = exports.GALLERY_WALL_DEFAULT_HEIGHT = 48;
    var GALLERY_WALL_VERTICAL_PADDING = exports.GALLERY_WALL_VERTICAL_PADDING = 0.15;
    var GALLERY_WALL_HORIZONTAL_PADDING = exports.GALLERY_WALL_HORIZONTAL_PADDING = 0.02;
    var GALLERY_WALL_CONSOLE_TABLE_WIDTH = exports.GALLERY_WALL_CONSOLE_TABLE_WIDTH = 60;
    var BACKGROUND_IRE_IDS_WITH_LANTERNS = exports.BACKGROUND_IRE_IDS_WITH_LANTERNS = [163366146, 263366147, 363366149, 463366150, 563366151, 663366152, 763366154, 863366155, 963366156, 1063366157, 1163366161, 1263366162, 1363366163, 1463366164, 1563366167, 1663366169, 1763366171, 1863366173, 62743383, 63366146, 63366147, 63366149, 63366150, 63366151, 63366152, 63366154, 63366155, 63366156, 63366157, 63366161, 63366162, 63366163, 63366164, 63366167, 63366169, 63366171, 63366173];
});
/*wfsw*/
/*wfsw:design_services_constants*/
define('design_services_constants', ['exports', 'react', 'lnrs', 'designer_dashboard_constants', 'turbine_helper_lnrs', 'turbine_helper_babel'], function(exports, _react, _lnrs, _designer_dashboard_constants, _turbine_helper_lnrs, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.EXAMPLE_FLOOR_PLAN_IRE_ID = exports.EXAMPLE_ROOM_DESIGN_IRE_ID = exports.EXAMPLE_CONCEPT_IRE_ID = exports.ROOM_TYPE_OTHER = exports.ROOM_TYPE_OUTDOOR = exports.ROOM_TYPE_OFFICE = exports.ROOM_TYPE_GUEST_BEDROOM = exports.ROOM_TYPE_NURSERY = exports.ROOM_TYPE_MASTER_BEDROOM = exports.ROOM_TYPE_BATHROOM = exports.ROOM_TYPE_DINING_ROOM = exports.ROOM_TYPE_LIVING_ROOM = exports.DESIGN_SERVICES_ICON_ID = exports.CANNOT_CHANGE_WALL_COLOR_TEXT = exports.CAN_CHANGE_WALL_COLOR_TEXT = exports.getPackageButtonText = exports.PACKAGE_DATA = exports.CLASSIC_TAB_INDEX = exports.LITE_TAB_INDEX = exports.PATTERN_PREFERENCES = exports.COLOR_INTENSITY_PREFERENCES = exports.PREFERENCE_OPTION_MINIMAL = exports.PREFERENCE_OPTION_LESS = exports.PREFERENCE_OPTION_MORE = exports.DESIGNER_MAX_CAPACITY = exports.PROJECT_TYPES = exports.DESIGNER_STATUSES = exports.BUSINESS_INTERIORS_LANDING_PAGE = exports.DESIGNER_APPLICATION_URL = exports.DESIGNER_DASHBOARD_OPEN_PLAN_LANE_LINK = exports.DESIGNER_LANDING_LINK = exports.CLIENT_LANDING_LINK = exports.STYLE_SURVEY_LINK = exports.PROJECTS_HOME_LINK = undefined;
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _lnrs2 = _turbine_helper_babel.interopRequireDefault(_lnrs);
    var _lnrsLite = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('Lite', 'Lite')), _lnrs30minutes = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('30minutes', '30 minutes')), _lnrsMostPopular = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('MostPopular', 'Most Popular')), _lnrsClassic = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('Classic', 'Classic')), _lnrs60minutes = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('60minutes', '60 minutes')), _PACKAGE_DATA, _lnrsPickLiteForDollarSignX = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('PickLiteForDollarSignX', 'Pick Lite for ${1}')), _lnrsPickLite = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('PickLite', 'Pick Lite')), _lnrsPickClassicForDollarSignX = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('PickClassicForDollarSignX', 'Pick Classic for ${1}')), _lnrsPickClassic = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('PickClassic', 'Pick Classic'));
    var PROJECTS_HOME_LINK = exports.PROJECTS_HOME_LINK = '/v/designer_services/project/home';
    var STYLE_SURVEY_LINK = exports.STYLE_SURVEY_LINK = '/design_services/style_survey';
    var CLIENT_LANDING_LINK = exports.CLIENT_LANDING_LINK = '/v/designer_services/designer_services/landing';
    var DESIGNER_LANDING_LINK = exports.DESIGNER_LANDING_LINK = '/v/designer_services/designer_services/designer_landing';
    var DESIGNER_DASHBOARD_OPEN_PLAN_LANE_LINK = exports.DESIGNER_DASHBOARD_OPEN_PLAN_LANE_LINK = _designer_dashboard_constants.DASHBOARD_BASE_PATH + '?open_plan_lane=1';
    var DESIGNER_APPLICATION_URL = exports.DESIGNER_APPLICATION_URL = 'https://wayfairdesignservices.typeform.com/to/C2Kpxp';
    var BUSINESS_INTERIORS_LANDING_PAGE = exports.BUSINESS_INTERIORS_LANDING_PAGE = '/business_interiors';
    var DESIGNER_STATUSES = exports.DESIGNER_STATUSES = {
        NONE: null,
        DS_LEAD: 'STATUS_DS_LEAD',
        IN_PROGRESS: 'STATUS_IN_PROGRESS',
        IN_REVIEW: 'STATUS_IN_REVIEW',
        ACCEPTED: 'STATUS_ACCEPTED',
        WAITLISTED: 'STATUS_WAITLISTED',
        DECLINED: 'STATUS_DECLINED',
        ACCOUNT_SETUP: 'STATUS_ACCOUNT_SETUP',
        ACTIVE: 'STATUS_ACTIVE',
        INACTIVE: 'STATUS_INACTIVE',
        SUSPENDED: 'STATUS_SUSPENDED',
        DEACTIVATED: 'STATUS_DEACTIVATED'
    };
    var PROJECT_TYPES = exports.PROJECT_TYPES = {
        LITE: 'LITE',
        CLASSIC: 'CLASSIC'
    };
    var DESIGNER_MAX_CAPACITY = exports.DESIGNER_MAX_CAPACITY = 10;
    var PREFERENCE_OPTION_MORE = exports.PREFERENCE_OPTION_MORE = 3;
    var PREFERENCE_OPTION_LESS = exports.PREFERENCE_OPTION_LESS = 2;
    var PREFERENCE_OPTION_MINIMAL = exports.PREFERENCE_OPTION_MINIMAL = 1;
    var COLOR_INTENSITY_PREFERENCES = exports.COLOR_INTENSITY_PREFERENCES = [{
        ireId: 51168000,
        text: _lnrs2.default.translate('TheBrighterTheBetter', 'The brighter, the better'),
        preferenceOption: PREFERENCE_OPTION_MORE
    }, {
        ireId: 51168004,
        text: _lnrs2.default.translate('APopOfColorHereAndThere', 'A pop of color here and there'),
        preferenceOption: PREFERENCE_OPTION_LESS
    }, {
        ireId: 51168002,
        text: _lnrs2.default.translate('IPreferNeutrals', 'I prefer neutrals'),
        preferenceOption: PREFERENCE_OPTION_MINIMAL
    }];
    var PATTERN_PREFERENCES = exports.PATTERN_PREFERENCES = [{
        ireId: 51168249,
        text: _lnrs2.default.translate('ImAllAboutPatterns', "I'm all about patterns"),
        preferenceOption: PREFERENCE_OPTION_MORE
    }, {
        ireId: 51168246,
        text: _lnrs2.default.translate('HereAndThereIsFine', 'Here and there is fine'),
        preferenceOption: PREFERENCE_OPTION_LESS
    }, {
        ireId: 51168247,
        text: _lnrs2.default.translate('IPreferToKeepItSimple', 'I prefer to keep it simple'),
        preferenceOption: PREFERENCE_OPTION_MINIMAL
    }];
    var LITE_TAB_INDEX = exports.LITE_TAB_INDEX = 0;
    var CLASSIC_TAB_INDEX = exports.CLASSIC_TAB_INDEX = 1;
    var PACKAGE_DATA = exports.PACKAGE_DATA = (_PACKAGE_DATA = {},
    _turbine_helper_babel.defineProperty(_PACKAGE_DATA, LITE_TAB_INDEX, {
        packageName: _turbine_helper_lnrs.doReplacement({
            key: 'Lite',
            translation: _lnrsLite,
            replacements: []
        }, _react2.default),
        index: LITE_TAB_INDEX,
        phoneTime: _turbine_helper_lnrs.doReplacement({
            key: '30minutes',
            translation: _lnrs30minutes,
            replacements: []
        }, _react2.default),
        flag: _turbine_helper_lnrs.doReplacement({
            key: 'MostPopular',
            translation: _lnrsMostPopular,
            replacements: []
        }, _react2.default)
    }),
    _turbine_helper_babel.defineProperty(_PACKAGE_DATA, CLASSIC_TAB_INDEX, {
        packageName: _turbine_helper_lnrs.doReplacement({
            key: 'Classic',
            translation: _lnrsClassic,
            replacements: []
        }, _react2.default),
        index: CLASSIC_TAB_INDEX,
        phoneTime: _turbine_helper_lnrs.doReplacement({
            key: '60minutes',
            translation: _lnrs60minutes,
            replacements: []
        }, _react2.default),
        flag: null
    }),
    _PACKAGE_DATA);
    var getPackageButtonText = exports.getPackageButtonText = function getPackageButtonText(_ref) {
        var projectType = _ref.projectType
          , _ref$isDrawerAction = _ref.isDrawerAction
          , isDrawerAction = _ref$isDrawerAction === undefined ? false : _ref$isDrawerAction
          , litePrice = _ref.litePrice
          , classicPrice = _ref.classicPrice;
        if (projectType === PROJECT_TYPES.LITE) {
            return isDrawerAction ? _turbine_helper_lnrs.doReplacement({
                key: 'PickLiteForDollarSignX',
                translation: _lnrsPickLiteForDollarSignX,
                replacements: [[litePrice]]
            }, _react2.default) : _turbine_helper_lnrs.doReplacement({
                key: 'PickLite',
                translation: _lnrsPickLite,
                replacements: []
            }, _react2.default);
        } else {
            return isDrawerAction ? _turbine_helper_lnrs.doReplacement({
                key: 'PickClassicForDollarSignX',
                translation: _lnrsPickClassicForDollarSignX,
                replacements: [[classicPrice]]
            }, _react2.default) : _turbine_helper_lnrs.doReplacement({
                key: 'PickClassic',
                translation: _lnrsPickClassic,
                replacements: []
            }, _react2.default);
        }
    }
    ;
    var CAN_CHANGE_WALL_COLOR_TEXT = exports.CAN_CHANGE_WALL_COLOR_TEXT = _lnrs2.default.translate('YesImOpenToANewLook', "Yes, I'm open to a new look");
    var CANNOT_CHANGE_WALL_COLOR_TEXT = exports.CANNOT_CHANGE_WALL_COLOR_TEXT = _lnrs2.default.translate('ImHappyWithMyCurrentColor', "I'm happy with my current color");
    var DESIGN_SERVICES_ICON_ID = exports.DESIGN_SERVICES_ICON_ID = 'design-services';
    var ROOM_TYPE_LIVING_ROOM = exports.ROOM_TYPE_LIVING_ROOM = 1;
    var ROOM_TYPE_DINING_ROOM = exports.ROOM_TYPE_DINING_ROOM = 2;
    var ROOM_TYPE_BATHROOM = exports.ROOM_TYPE_BATHROOM = 3;
    var ROOM_TYPE_MASTER_BEDROOM = exports.ROOM_TYPE_MASTER_BEDROOM = 4;
    var ROOM_TYPE_NURSERY = exports.ROOM_TYPE_NURSERY = 5;
    var ROOM_TYPE_GUEST_BEDROOM = exports.ROOM_TYPE_GUEST_BEDROOM = 6;
    var ROOM_TYPE_OFFICE = exports.ROOM_TYPE_OFFICE = 7;
    var ROOM_TYPE_OUTDOOR = exports.ROOM_TYPE_OUTDOOR = 8;
    var ROOM_TYPE_OTHER = exports.ROOM_TYPE_OTHER = 9;
    var EXAMPLE_CONCEPT_IRE_ID = exports.EXAMPLE_CONCEPT_IRE_ID = 57380068;
    var EXAMPLE_ROOM_DESIGN_IRE_ID = exports.EXAMPLE_ROOM_DESIGN_IRE_ID = 57380061;
    var EXAMPLE_FLOOR_PLAN_IRE_ID = exports.EXAMPLE_FLOOR_PLAN_IRE_ID = 57380041;
});
/*wfsw*/
/*wfsw:my_projects_header_dropdown_constants*/
define('my_projects_header_dropdown_constants', ['exports'], function(exports) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var DESIGN_SERVICES_HEADER_CLICK_LOCATION = exports.DESIGN_SERVICES_HEADER_CLICK_LOCATION = 'TN_IB_DESIGNSERVICES';
    var ROOM_PLANNER_HEADER_CLICK_LOCATION = exports.ROOM_PLANNER_HEADER_CLICK_LOCATION = 'TN_IB_ROOMPLANNER';
    var LISTS_HEADER_CLICK_LOCATION = exports.LISTS_HEADER_CLICK_LOCATION = 'TN_IB_LISTS';
    var LISTS_HEADER_CODECEPTION_ID = exports.LISTS_HEADER_CODECEPTION_ID = 'responsive_my_projects_top_nav_lists_button';
    var COMPANY_TYPE_INTERIOR_DESIGNER = exports.COMPANY_TYPE_INTERIOR_DESIGNER = 3;
});
/*wfsw*/
;(function() {
    var k = "unencoded__DesignServices";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Design Services";
    define("_t!%5B%22DesignServices%22%2C%22Design%20Services%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__KeepTrackOfAllYourProjectsAndCreateDesignsClientWillLovePeriod";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Keep track of all your projects and create designs clients{1}will love.";
    define("_t!%5B%22KeepTrackOfAllYourProjectsAndCreateDesignsClientWillLovePeriod%22%2C%22Keep%20track%20of%20all%20your%20projects%20and%20create%20designs%20clients%7B1%7Dwill%20love.%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__WorkWithDesignServices";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Work with Design Services";
    define("_t!%5B%22WorkWithDesignServices%22%2C%22Work%20with%20Design%20Services%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__CreateSpacesForRealClientAndFlexYourDesignSkillsPeriod";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Create spaces for real clients and flex your design{1}skills.";
    define("_t!%5B%22CreateSpacesForRealClientAndFlexYourDesignSkillsPeriod%22%2C%22Create%20spaces%20for%20real%20clients%20and%20flex%20your%20design%7B1%7Dskills.%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__DesignYourSpace";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Design Your Space";
    define("_t!%5B%22DesignYourSpace%22%2C%22Design%20Your%20Space%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__PutTogetherAProfessionalSpaceWithALittleHelpFromWayfairPeriod";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Put together a professional space with a little help from{1}Wayfair.";
    define("_t!%5B%22PutTogetherAProfessionalSpaceWithALittleHelpFromWayfairPeriod%22%2C%22Put%20together%20a%20professional%20space%20with%20a%20little%20help%20from%7B1%7DWayfair.%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__WorkWithARealInterior";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Work with a real interior designer with Design Services.";
    define("_t!%5B%22WorkWithARealInterior%22%2C%22Work%20with%20a%20real%20interior%20designer%20with%20Design%20Services.%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__MakeOverYourSpace";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Make Over Your Space";
    define("_t!%5B%22MakeOverYourSpace%22%2C%22Make%20Over%20Your%20Space%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__WelcomeBackFirstnameExclamation";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Welcome Back, {1}!";
    define("_t!%5B%22WelcomeBackFirstnameExclamation%22%2C%22Welcome%20Back%2C%20%7B1%7D!%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__RoomPlanner";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Room Planner";
    define("_t!%5B%22RoomPlanner%22%2C%22Room%20Planner%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__GetCreative";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Get Creative";
    define("_t!%5B%22GetCreative%22%2C%22Get%20Creative%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__PlayAroundWithRoomPlanner";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Play around with Room Planner to create mood boards & designs.";
    define("_t!%5B%22PlayAroundWithRoomPlanner%22%2C%22Play%20around%20with%20Room%20Planner%20to%20create%20mood%20boards%20%26%20designs.%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__Lists";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Lists";
    define("_t!%5B%22Lists%22%2C%22Lists%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__SaveWhatYouLove";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Save What You Love";
    define("_t!%5B%22SaveWhatYouLove%22%2C%22Save%20What%20You%20Love%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__KeepTrackOfItemsThat";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Keep track of items that catch your eye by saving them to a List.";
    define("_t!%5B%22KeepTrackOfItemsThat%22%2C%22Keep%20track%20of%20items%20that%20catch%20your%20eye%20by%20saving%20them%20to%20a%20List.%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
/*wfsw:cart_dropdown_v2*/
define('cart_dropdown_v2', ['exports', 'react', 'wayfair', 'underscore', 'prop-types', 'wf_events', 'event_dispatch', 'classnames', 'lnrs', 'pl_button', 'cart_dropdown_product', 'scribe', 'scribe_event_constants', 'track-click-location', 'share_of_wallet_messaging_container', '@styles/header/components/cart_dropdown_v2', 'turbine_helper_babel', 'turbine_helper_lnrs'], function(exports, _react, _wayfair, _underscore, _propTypes, _wf_events, _event_dispatch, _classnames, _lnrs, _pl_button, _cart_dropdown_product, _scribe, _scribe_event_constants, _trackClickLocation, _share_of_wallet_messaging_container, _cart_dropdown_v, _turbine_helper_babel, _turbine_helper_lnrs) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _wayfair2 = _turbine_helper_babel.interopRequireDefault(_wayfair);
    var _underscore2 = _turbine_helper_babel.interopRequireDefault(_underscore);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var _wf_events2 = _turbine_helper_babel.interopRequireDefault(_wf_events);
    var _event_dispatch2 = _turbine_helper_babel.interopRequireDefault(_event_dispatch);
    var _classnames2 = _turbine_helper_babel.interopRequireDefault(_classnames);
    var _lnrs2 = _turbine_helper_babel.interopRequireDefault(_lnrs);
    var _pl_button2 = _turbine_helper_babel.interopRequireDefault(_pl_button);
    var _cart_dropdown_product2 = _turbine_helper_babel.interopRequireDefault(_cart_dropdown_product);
    var _scribe2 = _turbine_helper_babel.interopRequireDefault(_scribe);
    var _scribe_event_constants2 = _turbine_helper_babel.interopRequireDefault(_scribe_event_constants);
    var _trackClickLocation2 = _turbine_helper_babel.interopRequireDefault(_trackClickLocation);
    var _share_of_wallet_messaging_container2 = _turbine_helper_babel.interopRequireDefault(_share_of_wallet_messaging_container);
    var _cart_dropdown_v2 = _turbine_helper_babel.interopRequireDefault(_cart_dropdown_v);
    var _lnrsYourShoppingCartIsEmpty = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('YourShoppingCartIsEmpty', 'Your shopping cart is empty.'))
      , _lnrsYourCartIsEmpty = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('YourCartIsEmpty', 'Your cart is empty.'))
      , _lnrsShopLimitedTimeDeals = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('ShopLimitedTimeDeals', 'Lets get started. Shop todays limited-time deals + curated collections in{1}Deals + Design Ideas{2}.'))
      , _lnrsFillItWithAGiftCard = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('FillItWithAGiftCard', 'Fill it with a{1}, {2}, gift card{3}.'))
      , _lnrsBrowseByBrandOrAddAnItemFromYourIdeaBoards = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('BrowseByBrandOrAddAnItemFromYourIdeaBoards', '{1}Browse by brand{2} or add an item from your{3}Idea Boards{4}'))
      , _lnrsLetsGetItRollingPeriodStartSaving = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('LetsGetItRollingPeriodStartSaving', 'Let\'s get it rolling. Start saving with{1} Daily Sales{2}.'))
      , _lnrsYouMayHaveAddedItemsFromAnotherComputerOrDevice = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('YouMayHaveAddedItemsFromAnotherComputerOrDevice', 'You may have added items from another computer or device.'))
      , _lnrsYourCartIsEmptySomethingMissing = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('YourCartIsEmptySomethingMissing', 'Your cart is empty. Something missing?'))
      , _lnrsCartEmptyStateBodyLoggedOut = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('Cart.EmptyState.Body.LoggedOut', 'Sign in to see items you may have added or saved during a previous visit.'))
      , _lnrsSignIn = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('SignIn', 'Sign In'))
      , _lnrsCartTotal = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('CartTotal', 'Cart Total'))
      , _lnrsViewCart = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('ViewCart', 'View Cart'))
      , _lnrsCheckoutHeaderBasket = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('CheckoutHeaderBasket', 'Checkout'))
      , _lnrsProceedToCheckout = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('ProceedToCheckout', 'Proceed to Checkout'));
    var noop = function noop() {};
    var CartDropdown = function(_Component) {
        _turbine_helper_babel.inherits(CartDropdown, _Component);
        function CartDropdown() {
            var _ref;
            var _temp, _this, _ret;
            _turbine_helper_babel.classCallCheck(this, CartDropdown);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _turbine_helper_babel.possibleConstructorReturn(this, (_ref = CartDropdown.__proto__ || Object.getPrototypeOf(CartDropdown)).call.apply(_ref, [this].concat(args))),
            _this),
            _this.reloadCartContents = function() {
                _this.props.loadCartDropDownContents();
            }
            ,
            _this.checkoutClick = function(e) {
                e.preventDefault();
                _scribe2.default.sendEvent({
                    eventType: _scribe_event_constants2.default.WEB_CLICK,
                    clickLocation: 'tn_cart_proceed_to_checkout'
                });
                var cartCheckoutBtn = _wayfair2.default.$doc.find('#btnCheckout');
                if (cartCheckoutBtn.length) {
                    cartCheckoutBtn.trigger('click');
                } else {
                    window.location = _wayfair2.default.constants.STORE_URL + '/v/checkout/basket/show?finalizestdco=1';
                }
            }
            ,
            _this.handleAssignCartRef = function(node) {
                _this.cartDropdownNode = node;
            }
            ,
            _this.getShowShareOfWallet = function() {
                return _this.props.lazyLoadingComplete && _this.props.is_b2b_customer && _this.props.cartQuantity > 0;
            }
            ,
            _temp),
            _turbine_helper_babel.possibleConstructorReturn(_this, _ret);
        }
        _turbine_helper_babel.createClass(CartDropdown, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;
                if (this.props.isOpen) {
                    this.reloadCartContents();
                }
                this.props.updateCartQuantity(parseInt(_wayfair2.default.appData.headerData.cartQuantity, 10));
                _wf_events2.default.listenTo(_wf_events2.default, 'basket_count_updated', function(basketCount) {
                    _this2.props.updateCartQuantity(parseInt(basketCount, 10) || 0);
                });
                _event_dispatch2.default.on(_wayfair2.default.constants.eventTypes.CART_UPDATE_EVENT_TYPE, {}, function(e) {
                    if (e.verb === 'BASKET_COUNT') {
                        _this2.reloadCartContents();
                    }
                });
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps) {
                var _this3 = this;
                if (!prevProps.isOpen && this.props.isOpen) {
                    _underscore2.default.defer(function() {
                        if (_this3.cartDropdownNode) {
                            _this3.props.openDropdown();
                            _this3.reloadCartContents();
                        }
                    });
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var waitingClasses = (0,
                _classnames2.default)('waiting', {
                    'u-hiddenNode': !this.props.lazyLoadingInProgress
                });
                return _react2.default.createElement('div', {
                    ref: this.handleAssignCartRef,
                    className: 'CartDropdown'
                }, _react2.default.createElement('div', {
                    className: waitingClasses
                }), this.props.lazyLoadingComplete && this.props.cartQuantity === 0 && [this.props.is_logged_in ? [this.props.use_elastigirl_design && _react2.default.createElement('p', {
                    className: 'header_dropdown_empty_cart_message margin_sm_bottom'
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'YourShoppingCartIsEmpty',
                    translation: _lnrsYourShoppingCartIsEmpty,
                    replacements: []
                }, _react2.default)), !this.props.use_elastigirl_design && _react2.default.createElement('p', {
                    className: 'header_dropdown_empty_cart_message wf_primarylighttext margin_sm_bottom emphasis'
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'YourCartIsEmpty',
                    translation: _lnrsYourCartIsEmpty,
                    replacements: []
                }, _react2.default)), this.props.storeId === _wayfair2.default.constants.ALLMODERN_ID && _turbine_helper_lnrs.doReplacement({
                    key: 'ShopLimitedTimeDeals',
                    translation: _lnrsShopLimitedTimeDeals,
                    replacements: [[_turbine_helper_lnrs.openTag('a', {
                        'data-click-location': 'tn_cart_dailysales',
                        'href': this.props.events_path
                    })], [_turbine_helper_lnrs.closeTag('a')]]
                }, _react2.default), (this.props.storeId === _wayfair2.default.constants.BIRCH_ID || this.props.storeId === _wayfair2.default.constants.DWELL_ID) && _turbine_helper_lnrs.doReplacement({
                    key: 'FillItWithAGiftCard',
                    translation: _lnrsFillItWithAGiftCard,
                    replacements: [[_turbine_helper_lnrs.openTag('a', {
                        'data-click-location': 'tn_cart_dailysales',
                        'href': this.props.giftcard_page_url
                    })], [this.props.store_company_name], [_turbine_helper_lnrs.closeTag('a')]]
                }, _react2.default), this.props.storeId === _wayfair2.default.constants.PERIGOLD_ID && _react2.default.createElement('p', {
                    className: 'header_dropdown_empty_cart_copy'
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'BrowseByBrandOrAddAnItemFromYourIdeaBoards',
                    translation: _lnrsBrowseByBrandOrAddAnItemFromYourIdeaBoards,
                    replacements: [[_turbine_helper_lnrs.openTag(_trackClickLocation2.default, {
                        'clickLocation': 'tn_cart_dailysales'
                    }), _turbine_helper_lnrs.openTag('a', {
                        'href': this.props.browseByBrandUrl
                    })], [_turbine_helper_lnrs.closeTag('a'), _turbine_helper_lnrs.closeTag(_trackClickLocation2.default)], [_turbine_helper_lnrs.openTag(_trackClickLocation2.default, {
                        'clickLocation': 'tn_cart_dailysales'
                    }), _turbine_helper_lnrs.openTag('a', {
                        'href': this.props.styleShowcaseUrl
                    })], [_turbine_helper_lnrs.closeTag('a'), _turbine_helper_lnrs.closeTag(_trackClickLocation2.default)]]
                }, _react2.default)), (this.props.storeId === _wayfair2.default.constants.WAYFAIR_UK_ID || this.props.storeId === _wayfair2.default.constants.WAYFAIR_DE_ID || this.props.storeId === _wayfair2.default.constants.WAYFAIR_ID) && _react2.default.createElement('p', {
                    className: 'header_dropdown_empty_cart_copy'
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'LetsGetItRollingPeriodStartSaving',
                    translation: _lnrsLetsGetItRollingPeriodStartSaving,
                    replacements: [[_turbine_helper_lnrs.openTag('a', {
                        'data-click-location': 'tn_cart_dailysales',
                        'href': this.props.events_path
                    })], [_turbine_helper_lnrs.closeTag('a')]]
                }, _react2.default))] : [this.props.use_elastigirl_design && _react2.default.createElement('div', null, _react2.default.createElement('p', {
                    className: 'header_dropdown_empty_cart_message margin_sm_bottom'
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'YourShoppingCartIsEmpty',
                    translation: _lnrsYourShoppingCartIsEmpty,
                    replacements: []
                }, _react2.default)), _react2.default.createElement('p', {
                    className: 'header_dropdown_empty_cart_copy'
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'YouMayHaveAddedItemsFromAnotherComputerOrDevice',
                    translation: _lnrsYouMayHaveAddedItemsFromAnotherComputerOrDevice,
                    replacements: []
                }, _react2.default))), !this.props.use_elastigirl_design && _react2.default.createElement('div', null, _react2.default.createElement('div', {
                    className: 'header_dropdown_empty_cart_message wf_primarylighttext margin_sm_bottom emphasis'
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'YourCartIsEmptySomethingMissing',
                    translation: _lnrsYourCartIsEmptySomethingMissing,
                    replacements: []
                }, _react2.default)), _react2.default.createElement('p', {
                    className: 'header_dropdown_empty_cart_copy'
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'Cart.EmptyState.Body.LoggedOut',
                    translation: _lnrsCartEmptyStateBodyLoggedOut,
                    replacements: []
                }, _react2.default))), _react2.default.createElement('div', {
                    className: 'CartNavigation-dropdown-signInBtn CartDropdown-signInBtn js-dropdown-link',
                    key: 'signInBtn',
                    'data-click-location': 'cart_dropdown_signin'
                }, _react2.default.createElement(_pl_button2.default, {
                    variation: 'transaction',
                    href: this.props.signin_url,
                    fullWidth: true
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'SignIn',
                    translation: _lnrsSignIn,
                    replacements: []
                }, _react2.default)))]], this.props.lazyLoadingComplete && this.props.cartQuantity > 0 && _react2.default.createElement('div', {
                    className: 'CartDropdown-productWrap'
                }, _react2.default.createElement('div', {
                    className: 'CartDropdown-subtotal'
                }, _react2.default.createElement('p', {
                    className: 'CartNavigation-subtotal'
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'CartTotal',
                    translation: _lnrsCartTotal,
                    replacements: []
                }, _react2.default), ':', ' ', this.props.total_cost_string)), _react2.default.createElement('div', {
                    className: 'CartDropdown-productWrap-inner'
                }, _react2.default.createElement('div', {
                    className: 'CartDropdown-productWrap-scroll'
                }, this.props.basket_items.map(function(product) {
                    return _react2.default.createElement('div', {
                        key: product.order_product_id,
                        'data-click-location': 'tn_cart_product',
                        className: 'CartDropdown-productCardWrap'
                    }, _react2.default.createElement(_cart_dropdown_product2.default, {
                        product: product
                    }));
                }))), !(_wayfair2.default.appData.pageAlias === 'Basket') && _react2.default.createElement('div', {
                    'data-click-location': 'tn_cart_view',
                    className: 'CartDropdown-buttonWrap'
                }, _react2.default.createElement(_pl_button2.default, {
                    variation: 'transaction',
                    href: this.props.url,
                    fullWidth: true
                }, this.props.use_elastigirl_design ? _turbine_helper_lnrs.doReplacement({
                    key: 'ViewCart',
                    translation: _lnrsViewCart,
                    replacements: []
                }, _react2.default) : _turbine_helper_lnrs.doReplacement({
                    key: 'CheckoutHeaderBasket',
                    translation: _lnrsCheckoutHeaderBasket,
                    replacements: []
                }, _react2.default))), _wayfair2.default.appData.pageAlias === 'Basket' && _react2.default.createElement('div', {
                    className: 'CartDropdown-buttonWrap'
                }, _react2.default.createElement(_pl_button2.default, {
                    variation: 'transaction',
                    href: this.props.url,
                    onClick: this.checkoutClick,
                    fullWidth: true
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'ProceedToCheckout',
                    translation: _lnrsProceedToCheckout,
                    replacements: []
                }, _react2.default)))), this.getShowShareOfWallet() && _react2.default.createElement(_share_of_wallet_messaging_container2.default, {
                    dropDown: true
                }));
            }
        }]);
        return CartDropdown;
    }(_react.Component);
    CartDropdown.defaultProps = {
        basket_items: [],
        url: '',
        total_cost_string: '',
        signin_url: '',
        updateCartQuantity: noop,
        lazyLoadingInProgress: false,
        lazyLoadingComplete: false,
        loadCartDropDownContents: noop,
        cartQuantity: 0,
        is_logged_in: false,
        sales_category_url: '',
        events_path: '',
        styleShowcaseUrl: '',
        browseByBrandUrl: '',
        giftcard_page_url: '',
        store_company_name: '',
        use_elastigirl_design: false,
        storeId: _wayfair2.default.constants.WAYFAIR_ID,
        isContextualHeaderTest: false,
        is_b2b_customer: false
    };
    exports.default = _cart_dropdown_v2.default.hoc(CartDropdown);
});
/*wfsw*/
/*wfsw:with_tooltip_basics*/
define('with_tooltip_basics', ['exports', 'react', 'prop_types', 'custom_prop_types', 'portal', 'with_delayed_close', 'click_outside', 'jquery', 'turbine_helper_babel'], function(exports, _react, _prop_types, _custom_prop_types, _portal, _with_delayed_close, _click_outside, _jquery, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.updateTooltipPosition = undefined;
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _prop_types2 = _turbine_helper_babel.interopRequireDefault(_prop_types);
    var _portal2 = _turbine_helper_babel.interopRequireDefault(_portal);
    var _with_delayed_close2 = _turbine_helper_babel.interopRequireDefault(_with_delayed_close);
    var _click_outside2 = _turbine_helper_babel.interopRequireDefault(_click_outside);
    var _jquery2 = _turbine_helper_babel.interopRequireDefault(_jquery);
    var horizontalPlacement = ['left', 'right', 'horizontal'];
    var verticalPlacement = ['top', 'bottom', 'vertical'];
    var updateTooltipPosition = exports.updateTooltipPosition = function updateTooltipPosition(doc, win) {
        return function(state, props) {
            var placement = props.placement;
            if (props.useStickyPlacement) {
                placement = state.placement;
            }
            if (state.isPhone && !verticalPlacement.includes(placement)) {
                placement = 'vertical';
            }
            var target = state.target
              , tooltip = state.tooltip;
            var windowWidth = Math.min(doc.documentElement.clientWidth, win.innerWidth);
            var position = {
                top: !props.relative ? target.top : 0,
                left: !props.relative ? target.left : 0,
                placement: placement
            };
            if (horizontalPlacement.includes(placement)) {
                position.top += target.height / 2 - tooltip.height * props.caretPosition;
                if (placement === 'horizontal') {
                    var moreSpaceRight = (target.windowLeft + tooltip.width / 2) * 2 < windowWidth;
                    position.placement = moreSpaceRight ? 'right' : 'left';
                }
                if (position.placement === 'right') {
                    position.left += target.width;
                } else {
                    position.left -= tooltip.width;
                }
            }
            if (verticalPlacement.includes(placement)) {
                var targetMidPoint = target.windowLeft + target.width / 2;
                var overflowsRight = targetMidPoint + tooltip.width / 2 > windowWidth && props.caretPosition <= 0.5;
                var overflowsLeft = target.windowLeft < tooltip.width / 2 && props.caretPosition >= 0.5;
                position.left += target.width / 2 - tooltip.width * props.caretPosition;
                if (state.isPhone) {
                    position.left = 0;
                }
                if (!state.isPhone && overflowsRight) {
                    position.left = windowWidth - tooltip.width;
                }
                if (!state.isPhone && overflowsLeft) {
                    position.left = target.windowLeft / 2;
                }
                if (placement === 'vertical') {
                    var moreSpaceBottom = target.windowTop < window.innerHeight / 2;
                    position.placement = moreSpaceBottom ? 'bottom' : 'top';
                }
                if (position.placement === 'top') {
                    position.top -= tooltip.height;
                } else {
                    position.top += target.height;
                }
            }
            return {
                position: position,
                placement: position.placement
            };
        }
        ;
    }
    ;
    var scheduleCallback = function scheduleCallback(cb) {
        return typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame(cb) : function(cb) {
            return cb();
        }
        ;
    };
    var withTooltipBasics = function withTooltipBasics(WrappedComponent) {
        var WithTooltipBasics = function(_React$Component) {
            _turbine_helper_babel.inherits(WithTooltipBasics, _React$Component);
            function WithTooltipBasics() {
                var _ref;
                var _temp, _this, _ret;
                _turbine_helper_babel.classCallCheck(this, WithTooltipBasics);
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                return _ret = (_temp = (_this = _turbine_helper_babel.possibleConstructorReturn(this, (_ref = WithTooltipBasics.__proto__ || Object.getPrototypeOf(WithTooltipBasics)).call.apply(_ref, [this].concat(args))),
                _this),
                _this.state = {
                    tooltip: {
                        width: 0,
                        height: 0,
                        windowTop: 0,
                        windowLeft: 0
                    },
                    target: {
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        windowTop: 0,
                        windowLeft: 0
                    },
                    position: {
                        left: 0,
                        right: 0,
                        top: 0
                    },
                    hasSetTargetRefFromProps: false,
                    isPhone: false,
                    placement: _this.props.useStickyPlacement ? _this.props.placement : null
                },
                _this.handleKeyDown = function(e) {
                    if (!_this.props.isOpen) {
                        return;
                    }
                    switch (e.key) {
                    case 'Tab':
                        _this.handleTab(e);
                        break;
                    case 'Escape':
                        _this.props.onRequestClose(e);
                        break;
                    }
                }
                ,
                _this.setLastTabbableRef = function(ref) {
                    _this.lastTabbable = ref;
                }
                ,
                _this.handleTab = function(event) {
                    if (event.target === _this.lastTabbable) {
                        event.stopPropagation();
                        event.preventDefault();
                        scheduleCallback(function() {
                            if (_this.$tooltip && _this.$tooltip.focus) {
                                _this.$tooltip.focus();
                            }
                        });
                    } else if (event.target === _this.$tooltip && event.shiftKey) {
                        event.stopPropagation();
                        event.preventDefault();
                        scheduleCallback(function() {
                            if (_this.lastTabbable && _this.lastTabbable.focus) {
                                _this.lastTabbable.focus();
                            }
                        });
                    }
                }
                ,
                _this.triggerContentReflow = function() {
                    _this.updateTooltipCoords();
                }
                ,
                _this.$target = null,
                _this.targetRef = function(node) {
                    if (node) {
                        _this.$target = node;
                        _this.updateTargetCoords();
                    }
                }
                ,
                _this.updateTargetCoords = function() {
                    if (_this.$target) {
                        var offset = (0,
                        _jquery2.default)(_this.$target).offset();
                        var rect = _this.$target.getBoundingClientRect();
                        var top = offset.top
                          , left = offset.left;
                        var width = rect.width
                          , height = rect.height
                          , windowTop = rect.top
                          , windowLeft = rect.left;
                        var target = _this.state.target;
                        if (target.top !== top || target.left !== left || target.width !== width || target.height !== height || target.windowTop !== windowTop || target.windowLeft !== windowLeft) {
                            _this.setState({
                                target: {
                                    top: top,
                                    left: left,
                                    width: width,
                                    height: height,
                                    windowTop: windowTop,
                                    windowLeft: windowLeft
                                }
                            }, _this.calculateTooltipPosition);
                        }
                    }
                }
                ,
                _this.$tooltip = null,
                _this.tooltipRef = function(node) {
                    if (node) {
                        _this.$tooltip = node;
                        _this.updateTooltipCoords();
                    }
                }
                ,
                _this.updateTooltipCoords = function() {
                    if (_this.$tooltip) {
                        var rect = _this.$tooltip.getBoundingClientRect();
                        var width = rect.width
                          , height = rect.height
                          , windowTop = rect.top
                          , windowLeft = rect.left;
                        var tooltip = _this.state.tooltip;
                        if (tooltip.width !== width || tooltip.height !== height || tooltip.windowTop !== windowTop || tooltip.windowLeft !== windowLeft) {
                            _this.setState({
                                tooltip: {
                                    width: width,
                                    height: height,
                                    windowLeft: windowLeft,
                                    windowTop: windowTop
                                }
                            }, _this.calculateTooltipPosition);
                        }
                    }
                }
                ,
                _this.calculateTooltipPosition = function() {
                    _this.setState(updateTooltipPosition(document, window), _this.calculateCaretPosition);
                }
                ,
                _this.calculateCaretPosition = function() {
                    var _this$state = _this.state
                      , target = _this$state.target
                      , tooltip = _this$state.tooltip;
                    var windowWidth = Math.min(document.documentElement.clientWidth, window.innerWidth);
                    var targetMidPoint = target.windowLeft + target.width / 2;
                    var overflowsRight = targetMidPoint + tooltip.width / 2 > windowWidth && _this.props.caretPosition <= 0.5;
                    var overflowsLeft = target.windowLeft < tooltip.width / 2 && _this.props.caretPosition >= 0.5;
                    var caretPosition = void 0;
                    if (_this.state.isPhone) {
                        caretPosition = (target.width / 2 + target.windowLeft - tooltip.windowLeft) / tooltip.width * 100 + '%';
                    }
                    if (verticalPlacement.includes(_this.state.placement)) {
                        if (!_this.state.isPhone && overflowsRight) {
                            caretPosition = targetMidPoint - _this.state.position.left + 'px';
                        }
                        if (!_this.state.isPhone && overflowsLeft) {
                            caretPosition = target.windowLeft - _this.state.position.left + target.width / 2 + 'px';
                        }
                    }
                    _this.setState({
                        caretPosition: caretPosition || _this.props.caretPosition * 100 + '%'
                    });
                }
                ,
                _temp),
                _turbine_helper_babel.possibleConstructorReturn(_this, _ret);
            }
            _turbine_helper_babel.createClass(WithTooltipBasics, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    window.addEventListener('resize', this.updateTargetCoords);
                    if (this.props.escapeClose || this.props.enableFocusTrapping) {
                        document.addEventListener('keydown', this.handleKeyDown);
                    }
                    var isPhone = this.props.isConstrained && window.innerWidth <= 750;
                    this.setState({
                        isPhone: isPhone
                    });
                }
            }, {
                key: 'componentWillReceiveProps',
                value: function componentWillReceiveProps(nextProps) {
                    if (nextProps.targetRef && !this.state.hasSetTargetRefFromProps) {
                        this.targetRef(nextProps.targetRef);
                        this.setState({
                            hasSetTargetRefFromProps: true
                        });
                    } else if (nextProps.isOpen && !this.props.isOpen) {
                        this.updateTargetCoords();
                    }
                }
            }, {
                key: 'componentDidUpdate',
                value: function componentDidUpdate(prevProps) {
                    var _this2 = this;
                    if (!this.props.enableFocusTrapping) {
                        return;
                    }
                    if (this.props.isOpen && !prevProps.isOpen) {
                        this.previousActiveElement = document.activeElement;
                        scheduleCallback(function() {
                            if (_this2.$tooltip && _this2.$tooltip.focus) {
                                _this2.$tooltip.focus();
                            }
                        });
                    } else if (!this.props.isOpen && prevProps.isOpen) {
                        scheduleCallback(function() {
                            if (_this2.previousActiveElement && _this2.previousActiveElement.focus) {
                                _this2.previousActiveElement.focus();
                            }
                        });
                    }
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    window.removeEventListener('resize', this.updateTargetCoords);
                    if (this.props.escapeClose || this.props.enableFocusTrapping) {
                        document.removeEventListener('keydown', this.handleKeyDown);
                    }
                }
            }, {
                key: 'render',
                value: function render() {
                    var placement = this.state.isPhone ? 'vertical' : this.state.placement;
                    var props = _turbine_helper_babel.extends({}, this.props, {
                        left: this.state.position.left,
                        right: this.state.position.right,
                        top: this.state.position.top,
                        placement: this.state.position.placement || this.state.placement,
                        tooltipRef: this.tooltipRef,
                        ready: this.state.tooltip.width > 0 && this.state.tooltip.height > 0,
                        caretPlacement: horizontalPlacement.includes(placement) ? 'top' : 'left',
                        caretPercentage: this.state.caretPosition || this.props.caretPosition * 100 + '%',
                        triggerContentReflow: this.triggerContentReflow,
                        setLastTabbableRef: this.setLastTabbableRef
                    });
                    var content = this.props.clickOutsideClose ? _react2.default.createElement(_click_outside2.default, {
                        onClickOutside: this.props.isOpen ? this.props.onRequestClose : function() {}
                        ,
                        triggerElement: this.$target
                    }, _react2.default.createElement(WrappedComponent, props)) : _react2.default.createElement(WrappedComponent, props);
                    return _react2.default.createElement('span', {
                        ref: this.targetRef
                    }, this.props.target, this.props.isOpen && this.props.relative && content, !this.props.relative && _react2.default.createElement(_portal2.default, {
                        isOpen: this.props.isOpen
                    }, content));
                }
            }]);
            return WithTooltipBasics;
        }(_react2.default.Component);
        WithTooltipBasics.defaultProps = _turbine_helper_babel.extends({
            caretPosition: 0.5,
            clickOutsideClose: false,
            closeDelayMs: 0,
            isOpen: false,
            isPhone: false,
            onRequestClose: function onRequestClose() {},
            placement: 'right',
            relative: false,
            escapeClose: true,
            isConstrained: true,
            useStickyPlacement: false,
            enableFocusTrapping: true
        }, WrappedComponent.defaultProps);
        return (0,
        _with_delayed_close2.default)(WithTooltipBasics);
    };
    exports.default = withTooltipBasics;
});
/*wfsw*/
/*wfsw:visual_search_helper*/
define('visual_search_helper', ['exports', 'react', 'layout_constants', 'pl_grid', 'shimmer', 'turbine_helper_babel'], function(exports, _react, _layout_constants, _pl_grid, _shimmer, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.getImageSkeletons = exports.LAUNCHPAD_IMAGE_LIMIT = undefined;
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _shimmer2 = _turbine_helper_babel.interopRequireDefault(_shimmer);
    var WIDTH_3 = _layout_constants.gridWidthConstants.WIDTH_3
      , WIDTH_6 = _layout_constants.gridWidthConstants.WIDTH_6;
    var LAUNCHPAD_IMAGE_LIMIT = exports.LAUNCHPAD_IMAGE_LIMIT = 4;
    var getImageSkeletons = exports.getImageSkeletons = function getImageSkeletons() {
        return Array(LAUNCHPAD_IMAGE_LIMIT).fill(0).map(function(e, i) {
            return _react2.default.createElement(_pl_grid.Column, {
                key: i.toString(),
                size: WIDTH_6,
                smSize: WIDTH_3
            }, _react2.default.createElement('div', {
                className: 'VisualSearchUploadModal-launchpadPlaceholder'
            }, _react2.default.createElement(_shimmer2.default, {
                className: 'VisualSearchUploadModal-launchpadShimmer'
            })));
        });
    }
    ;
});
/*wfsw*/
;(function() {
    var k = "unencoded__UploadingEllipsis";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Uploading\u2026";
    define("_t!%5B%22UploadingEllipsis%22%2C%22Uploading%E2%80%A6%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__FindingItemsInYourPhotoEllipsis";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Finding items in your photo\u2026";
    define("_t!%5B%22FindingItemsInYourPhotoEllipsis%22%2C%22Finding%20items%20in%20your%20photo%E2%80%A6%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__TakeAPhoto";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Take A Photo";
    define("_t!%5B%22TakeAPhoto%22%2C%22Take%20A%20Photo%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__PhotoLibrary";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Photo Library";
    define("_t!%5B%22PhotoLibrary%22%2C%22Photo%20Library%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__DragAndDrop";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Drag & Drop";
    define("_t!%5B%22DragAndDrop%22%2C%22Drag%20%26%20Drop%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__XOrCommaXSelectASavedPhoto";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "{1}Or,{2} select a saved photo";
    define("_t!%5B%22XOrCommaXSelectASavedPhoto%22%2C%22%7B1%7DOr%2C%7B2%7D%20select%20a%20saved%20photo%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__OrCommaTryItWithOneOfOursColon";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Or, try it with one of ours:";
    define("_t!%5B%22OrCommaTryItWithOneOfOursColon%22%2C%22Or%2C%20try%20it%20with%20one%20of%20ours%3A%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
/*wfsw:g_media_component*/
define('g_media_component', ['exports', 'react', 'prop-types', 'featuredetect', '@feature/enable_gmedia_ie', 'wf_scheduler', 'turbine_helper_babel'], function(exports, _react, _propTypes, _featuredetect, _enable_gmedia_ie, _wf_scheduler, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var _featuredetect2 = _turbine_helper_babel.interopRequireDefault(_featuredetect);
    var _enable_gmedia_ie2 = _turbine_helper_babel.interopRequireDefault(_enable_gmedia_ie);
    var _wf_scheduler2 = _turbine_helper_babel.interopRequireDefault(_wf_scheduler);
    var initializeGoogleAdScript = !_featuredetect2.default.isIE() || _enable_gmedia_ie2.default;
    var GMediaComponent = function(_Component) {
        _turbine_helper_babel.inherits(GMediaComponent, _Component);
        function GMediaComponent() {
            _turbine_helper_babel.classCallCheck(this, GMediaComponent);
            return _turbine_helper_babel.possibleConstructorReturn(this, (GMediaComponent.__proto__ || Object.getPrototypeOf(GMediaComponent)).apply(this, arguments));
        }
        _turbine_helper_babel.createClass(GMediaComponent, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;
                _wf_scheduler2.default.queuePostLoadTask(function() {
                    if (initializeGoogleAdScript && !_this2.props.isGMediaScriptLoaded) {
                        _this2.props.fetchGoogleAdScript().then(function() {
                            _this2.props.fetchGoogleCsa('ads', _this2.props.pageOptions, _this2.props.containerSettings);
                        });
                    }
                });
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps) {
                if (this.props.isGMediaScriptLoaded && (this.props.pageOptions.adPage !== prevProps.pageOptions.adPage || this.props.pageOptions.query !== prevProps.pageOptions.query)) {
                    this.props.fetchGoogleCsa('ads', this.props.pageOptions, this.props.containerSettings);
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props
                  , containerSettings = _props.containerSettings
                  , titleText = _props.titleText
                  , isGoogleCsaLoaded = _props.isGoogleCsaLoaded;
                return _react2.default.createElement('div', {
                    className: 'gglad_block_adcontainer1 ggl_sponsered_links'
                }, isGoogleCsaLoaded && _react2.default.createElement('h3', {
                    className: 'MediaWell-title'
                }, titleText), _react2.default.createElement('div', {
                    id: containerSettings.container,
                    'data-codeception-id': 'G-Media-Container'
                }));
            }
        }]);
        return GMediaComponent;
    }(_react.Component);
    GMediaComponent.defaultProps = {
        titleText: '',
        isGMediaScriptLoaded: false,
        isGoogleCsaLoaded: false,
        fetchGoogleAdScript: function fetchGoogleAdScript() {},
        fetchGoogleCsa: function fetchGoogleCsa() {}
    };
    exports.default = GMediaComponent;
});
/*wfsw*/
/*wfsw:g_media_selectors*/
define('g_media_selectors', ['exports'], function(exports) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var selectGMedia = function selectGMedia(state) {
        return state.gMedia || {};
    };
    var selectContainerSettings = exports.selectContainerSettings = function selectContainerSettings(state) {
        return selectGMedia(state).containerSettings || {};
    }
    ;
    var selectPageOptions = exports.selectPageOptions = function selectPageOptions(state) {
        return selectGMedia(state).pageOptions || {};
    }
    ;
    var selectTitleText = exports.selectTitleText = function selectTitleText(state) {
        return selectGMedia(state).titleText || '';
    }
    ;
    var selectIsGMediaScriptLoaded = exports.selectIsGMediaScriptLoaded = function selectIsGMediaScriptLoaded(state) {
        return selectGMedia(state).isGMediaScriptLoaded || false;
    }
    ;
    var selectIsGoogleCsaLoaded = exports.selectIsGoogleCsaLoaded = function selectIsGoogleCsaLoaded(state) {
        return selectGMedia(state).isGoogleCsaLoaded || false;
    }
    ;
});
/*wfsw*/
/*wfsw:pl_drawer*/
define('pl_drawer', ['exports', 'react', 'prop-types', 'custom_prop_types', 'with_modal_basics', 'classnames', 'portal', 'pl_icon', 'lnrs', 'pl_veil', 'pl-drawer-header', 'pl-drawer-actions', '@styles/_components/drawer/pl_drawer', 'turbine_helper_babel'], function(exports, _react, _propTypes, _custom_prop_types, _with_modal_basics, _classnames, _portal, _pl_icon, _lnrs, _pl_veil, _plDrawerHeader, _plDrawerActions, _pl_drawer, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var _with_modal_basics2 = _turbine_helper_babel.interopRequireDefault(_with_modal_basics);
    var _classnames2 = _turbine_helper_babel.interopRequireDefault(_classnames);
    var _portal2 = _turbine_helper_babel.interopRequireDefault(_portal);
    var _pl_icon2 = _turbine_helper_babel.interopRequireDefault(_pl_icon);
    var _lnrs2 = _turbine_helper_babel.interopRequireDefault(_lnrs);
    var _pl_veil2 = _turbine_helper_babel.interopRequireDefault(_pl_veil);
    var _plDrawerHeader2 = _turbine_helper_babel.interopRequireDefault(_plDrawerHeader);
    var _plDrawerActions2 = _turbine_helper_babel.interopRequireDefault(_plDrawerActions);
    var _pl_drawer2 = _turbine_helper_babel.interopRequireDefault(_pl_drawer);
    var Drawer = function Drawer(props) {
        var _cx;
        var children = props.children
          , closeButtonContent = props.closeButtonContent
          , size = props.size
          , isOpen = props.isOpen
          , onRequestClose = props.onRequestClose
          , overlayClick = props.overlayClick
          , contentPadding = props.contentPadding
          , showHeader = props.showHeader
          , scrollLock = props.scrollLock
          , showClose = props.showClose
          , willClose = props.willClose
          , setRef = props.setRef
          , codeceptionId = props.codeceptionId
          , setLastTabbableRef = props.setLastTabbableRef
          , setScrollableRef = props.setScrollableRef
          , hideVeil = props.hideVeil;
        if (!isOpen) {
            return null;
        }
        var wrapperClasses = (0,
        _classnames2.default)({
            'pl-Drawer-wrap': true,
            'is-scrollable': scrollLock
        });
        var drawerClasses = (0,
        _classnames2.default)((_cx = {
            'pl-Drawer': true,
            'pl-Drawer-transition--fadeInRight': true,
            'is-transitioned-right': true
        },
        _turbine_helper_babel.defineProperty(_cx, 'pl-Drawer-transition--fadeOutRight', willClose),
        _turbine_helper_babel.defineProperty(_cx, 'pl-Drawer--' + size, size),
        _turbine_helper_babel.defineProperty(_cx, 'pl-Drawer--fullWidth', size === 'fullWidth'),
        _turbine_helper_babel.defineProperty(_cx, 'pl-Drawer--withoutVeil', hideVeil),
        _turbine_helper_babel.defineProperty(_cx, 'pl-Drawer--alternate', props.background === 'alternate'),
        _turbine_helper_babel.defineProperty(_cx, 'is-registry', props.isRegistry),
        _cx));
        var contentClasses = (0,
        _classnames2.default)({
            'pl-Drawer-content': true,
            'pl-Drawer-content--fullBlead': !contentPadding,
            'pl-Drawer-content--scrollLock': props.scrollLockContent,
            'pl-Drawer-content--alternate': props.background === 'alternate'
        });
        var contentWrapClasses = (0,
        _classnames2.default)({
            'pl-Drawer-contentWrap': true,
            'pl-Drawer-contentWrap--scrollLock': props.scrollLockContent,
            'pl-Drawer-contentWrap--hasActions': !!props.actions
        });
        return _react2.default.createElement(_portal2.default, {
            isOpen: isOpen
        }, _react2.default.createElement('div', {
            className: wrapperClasses,
            'data-codeception-id': codeceptionId
        }, showClose && size !== 'fullWidth' && _react2.default.createElement('button', {
            type: 'button',
            className: (0,
            _classnames2.default)({
                'pl-Drawer-close': true,
                'pl-Drawer-close--right': size !== 'xlWidth',
                'pl-Drawer-close--xlRight': size === 'xlWidth',
                'pl-Drawer-close--xxlRight': size === 'xxlWidth',
                'pl-Drawer-close--fadeOutRight': willClose
            }),
            onClick: onRequestClose
        }, closeButtonContent), _react2.default.createElement('section', {
            className: drawerClasses,
            ref: setRef,
            tabIndex: '0',
            role: 'dialog',
            open: 'open',
            'data-hb-id': 'pl_drawer'
        }, _react2.default.createElement('div', {
            className: contentWrapClasses,
            ref: setScrollableRef
        }, showHeader && props.headerComponent, props.header, _react2.default.createElement('div', {
            className: contentClasses
        }, children)), props.actions), _react2.default.createElement(_pl_veil2.default, {
            handleClick: overlayClick || onRequestClose,
            willClose: willClose,
            isVisible: !hideVeil || props.shouldShowOverlay,
            innerRef: setLastTabbableRef,
            enzymeId: 'pl_drawer_veil',
            codeceptionId: 'pl_drawer_veil'
        })));
    };
    var noop = function noop() {};
    Drawer.defaultProps = {
        closeButtonContent: _react2.default.createElement(_pl_icon2.default, {
            iconId: 'dismiss',
            title: _lnrs2.default.translate('Dismiss', 'Dismiss')
        }),
        contentPadding: true,
        size: null,
        showClose: true,
        scrollLock: true,
        onRequestClose: noop,
        shouldShowOverlay: true,
        codeceptionId: null,
        overlayClick: noop,
        children: null,
        showHeader: false,
        headerComponent: null,
        header: null,
        actions: null,
        background: 'default',
        isRegistry: false,
        hideVeil: false,
        scrollLockContent: false,
        closeDelayMs: 225,
        setRef: noop,
        willClose: false,
        setLastTabbableRef: noop,
        setScrollableRef: noop
    };
    Drawer.displayName = 'Drawer';
    var WrappedDrawer = (0,
    _with_modal_basics2.default)(_pl_drawer2.default.hoc(Drawer));
    WrappedDrawer.sharedPropTypes = {
        size: _propTypes2.default.oneOf(['xlWidth', 'xxlWidth', 'fullWidth'])
    };
    WrappedDrawer.Header = _plDrawerHeader2.default;
    WrappedDrawer.Actions = _plDrawerActions2.default;
    exports.default = WrappedDrawer;
});
/*wfsw*/
/*wfsw:pl_interstitial_header*/
define('pl_interstitial_header', ['exports', 'react', 'prop-types', 'classnames', 'pl_button', 'pl_icon', 'lnrs', 'pl_sticky_container', 'pl-visually-hidden', '@styles/_components/interstitial_header/pl_interstitial_header', 'turbine_helper_babel', 'turbine_helper_lnrs'], function(exports, _react, _propTypes, _classnames, _pl_button, _pl_icon, _lnrs, _pl_sticky_container, _plVisuallyHidden, _pl_interstitial_header, _turbine_helper_babel, _turbine_helper_lnrs) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var _classnames2 = _turbine_helper_babel.interopRequireDefault(_classnames);
    var _pl_button2 = _turbine_helper_babel.interopRequireDefault(_pl_button);
    var _pl_icon2 = _turbine_helper_babel.interopRequireDefault(_pl_icon);
    var _lnrs2 = _turbine_helper_babel.interopRequireDefault(_lnrs);
    var _pl_sticky_container2 = _turbine_helper_babel.interopRequireDefault(_pl_sticky_container);
    var _plVisuallyHidden2 = _turbine_helper_babel.interopRequireDefault(_plVisuallyHidden);
    var _pl_interstitial_header2 = _turbine_helper_babel.interopRequireDefault(_pl_interstitial_header);
    var _lnrsBack = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('Back', 'Back'));
    var InterstitialHeader = function(_Component) {
        _turbine_helper_babel.inherits(InterstitialHeader, _Component);
        function InterstitialHeader() {
            var _ref;
            var _temp, _this, _ret;
            _turbine_helper_babel.classCallCheck(this, InterstitialHeader);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _turbine_helper_babel.possibleConstructorReturn(this, (_ref = InterstitialHeader.__proto__ || Object.getPrototypeOf(InterstitialHeader)).call.apply(_ref, [this].concat(args))),
            _this),
            _this.onBackButtonClick = function() {
                window.history.back();
            }
            ,
            _temp),
            _turbine_helper_babel.possibleConstructorReturn(_this, _ret);
        }
        _turbine_helper_babel.createClass(InterstitialHeader, [{
            key: 'render',
            value: function render() {
                var _this2 = this;
                var _props = this.props
                  , stickyEnabled = _props.stickyEnabled
                  , showBackButton = _props.showBackButton
                  , showActionButton = _props.showActionButton
                  , backButtonText = _props.backButtonText
                  , backButtonUseIcon = _props.backButtonUseIcon
                  , dataEventNameBack = _props.dataEventNameBack
                  , actionButtonUrl = _props.actionButtonUrl
                  , title = _props.title
                  , actionButtonText = _props.actionButtonText
                  , actionButtonDisabled = _props.actionButtonDisabled
                  , onActionClick = _props.onActionClick
                  , onBackClick = _props.onBackClick
                  , backCodeceptionId = _props.backCodeceptionId
                  , actionCodeceptionId = _props.actionCodeceptionId;
                var Heading = 'h' + this.props.headingLevel;
                return _react2.default.createElement(_pl_sticky_container2.default, {
                    isContained: stickyEnabled,
                    enableSticky: stickyEnabled,
                    cssStickyEnabled: this.props.cssStickyEnabled,
                    render: function render(isSticking, useCssSticky) {
                        return _react2.default.createElement('div', {
                            className: (0,
                            _classnames2.default)({
                                'InterstitialHeader-header': true,
                                'InterstitialHeader-header--sticky': stickyEnabled,
                                'is-sticking': isSticking || useCssSticky
                            })
                        }, showBackButton && _react2.default.createElement('span', {
                            className: (0,
                            _classnames2.default)({
                                'InterstitialHeader-button--back': true,
                                'InterstitialHeader-button--icon': backButtonUseIcon
                            })
                        }, _react2.default.createElement(_pl_button2.default, {
                            isPlainText: true,
                            size: 'medium',
                            onClick: onBackClick || _this2.onBackButtonClick,
                            iconOnly: backButtonUseIcon,
                            dataEventName: dataEventNameBack,
                            'data-codeception-id': backCodeceptionId
                        }, backButtonUseIcon ? _react2.default.createElement(_pl_icon2.default, {
                            iconId: 'dismiss',
                            title: _lnrs2.default.translate('Back', 'Back')
                        }) : backButtonText)), _this2.props.showTitle ? _react2.default.createElement(Heading, {
                            className: 'InterstitialHeader-title'
                        }, title) : _react2.default.createElement(_plVisuallyHidden2.default, null, title), showActionButton && _react2.default.createElement('span', {
                            className: 'InterstitialHeader-button--action'
                        }, _react2.default.createElement(_pl_button2.default, {
                            isPlainText: true,
                            size: 'medium',
                            href: actionButtonUrl,
                            onClick: onActionClick,
                            disabled: actionButtonDisabled,
                            'data-codeception-id': actionCodeceptionId
                        }, actionButtonText)));
                    }
                });
            }
        }]);
        return InterstitialHeader;
    }(_react.Component);
    InterstitialHeader.defaultProps = {
        stickyEnabled: true,
        cssStickyEnabled: true,
        headingLevel: 1,
        showActionButton: false,
        showBackButton: true,
        backButtonUseIcon: false,
        backButtonText: _turbine_helper_lnrs.doReplacement({
            key: 'Back',
            translation: _lnrsBack,
            replacements: []
        }, _react2.default),
        dataEventNameBack: null,
        actionButtonUrl: '',
        actionButtonText: '',
        actionButtonDisabled: false,
        onActionClick: function onActionClick() {},
        onBackClick: function onBackClick() {},
        showTitle: true,
        backCodeceptionId: 'Interstitial_Back_Button',
        actionCodeceptionId: 'Interstitial_Action_Button'
    };
    exports.default = _pl_interstitial_header2.default.hoc(InterstitialHeader);
});
/*wfsw*/
/*wfsw:feedback_contact_fork*/
define('feedback_contact_fork', ['exports', 'react', 'prop_types', 'pl_button', 'lnrs', 'wayfair', 'portus_constants', 'turbine_helper_lnrs', 'turbine_helper_babel'], function(exports, _react, _prop_types, _pl_button, _lnrs, _wayfair, _portus_constants, _turbine_helper_lnrs, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _prop_types2 = _turbine_helper_babel.interopRequireDefault(_prop_types);
    var _pl_button2 = _turbine_helper_babel.interopRequireDefault(_pl_button);
    var _lnrs2 = _turbine_helper_babel.interopRequireDefault(_lnrs);
    var _wayfair2 = _turbine_helper_babel.interopRequireDefault(_wayfair);
    var _portus_constants2 = _turbine_helper_babel.interopRequireDefault(_portus_constants);
    var _lnrsHelpWithOrderButton = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('HelpWithOrderButton', 'I need help with an order'))
      , _lnrsSiteFeedbackButton = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('SiteFeedbackButton', 'I want to give feedback on your site'));
    var CONTACT_US_URL = '/contact_us?source=' + _portus_constants2.default.SOURCE.FEEDBACK;
    var TRACKING_GROUP = 'PC_FeedbackModalFork';
    var FeedbackContactFork = function FeedbackContactFork(props) {
        return _react2.default.createElement('div', null, _react2.default.createElement(_pl_button2.default, {
            dataGroupName: TRACKING_GROUP,
            dataEventName: 'FeedbackFork=HelpWithOrder',
            href: '' + _wayfair2.default.constants.STORE_URL + CONTACT_US_URL,
            fullWidth: true,
            openInNewWindow: true
        }, _turbine_helper_lnrs.doReplacement({
            key: 'HelpWithOrderButton',
            translation: _lnrsHelpWithOrderButton,
            replacements: []
        }, _react2.default)), _react2.default.createElement('br', null), _react2.default.createElement(_pl_button2.default, {
            dataGroupName: TRACKING_GROUP,
            dataEventName: 'FeedbackFork=SiteFeedback',
            onClick: props.handleFeedbackFork,
            fullWidth: true
        }, _turbine_helper_lnrs.doReplacement({
            key: 'SiteFeedbackButton',
            translation: _lnrsSiteFeedbackButton,
            replacements: []
        }, _react2.default)));
    };
    exports.default = FeedbackContactFork;
});
/*wfsw*/
/*wfsw:feedback_modal*/
define('feedback_modal', ['exports', 'react', 'prop_types', 'wayfair', 'pl_text_input', 'pl_radio_group', 'pl_radio_button', 'pl_button', 'wf_ajax', 'event_dispatch', 'lnrs', 'pl_block', 'layout_constants', 'string_utils', 'turbine_helper_babel', 'turbine_helper_lnrs'], function(exports, _react, _prop_types, _wayfair, _pl_text_input, _pl_radio_group, _pl_radio_button, _pl_button, _wf_ajax, _event_dispatch, _lnrs, _pl_block, _layout_constants, _string_utils, _turbine_helper_babel, _turbine_helper_lnrs) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _prop_types2 = _turbine_helper_babel.interopRequireDefault(_prop_types);
    var _wayfair2 = _turbine_helper_babel.interopRequireDefault(_wayfair);
    var _pl_text_input2 = _turbine_helper_babel.interopRequireDefault(_pl_text_input);
    var _pl_radio_group2 = _turbine_helper_babel.interopRequireDefault(_pl_radio_group);
    var _pl_radio_button2 = _turbine_helper_babel.interopRequireDefault(_pl_radio_button);
    var _pl_button2 = _turbine_helper_babel.interopRequireDefault(_pl_button);
    var _wf_ajax2 = _turbine_helper_babel.interopRequireDefault(_wf_ajax);
    var _event_dispatch2 = _turbine_helper_babel.interopRequireDefault(_event_dispatch);
    var _lnrs2 = _turbine_helper_babel.interopRequireDefault(_lnrs);
    var _string_utils2 = _turbine_helper_babel.interopRequireDefault(_string_utils);
    var _lnrsSelectFeedbackTopic = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('SelectFeedbackTopic', 'Select Feedback Topic'))
      , _lnrsCartCheckoutFeedbackType = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('CartCheckoutFeedbackType', 'Cart or Checkout'))
      , _lnrsSearchFeedbackType = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('SearchFeedbackType', 'Search'))
      , _lnrsProductFeedbackType = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('ProductFeedbackType', 'Product'))
      , _lnrsWebsiteFeedbackType = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('WebsiteFeedbackType', 'Website'))
      , _lnrsGeneralSuggestionFeedbackType = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('GeneralSuggestionFeedbackType', 'General Suggestion'))
      , _lnrsSubmitFeedback = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('SubmitFeedback', 'Please Submit your Feedback'))
      , _lnrsSubmitFeedbackButton = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('SubmitFeedbackButton', 'Submit'));
    var EmailRegEx = _string_utils2.default.EmailRegEx;
    var SPACE_4 = _layout_constants.SPACING.SPACE_4;
    var SPV2_TRACKING_TYPE = _wayfair2.default.constants.eventTypes.TRACKING_EVENT_TYPE;
    var CART_CHECKOUT_FEEDBACK_TYPE = '3124';
    var SEARCH_FEEDBACK_TYPE = '3';
    var PRODUCT_FEEDBACK_TYPE = '1026';
    var WEBSITE_FEEDBACK_TYPE = '3123';
    var GENERAL_SUGGESTION_FEEDBACK_TYPE = '1364';
    var FeedbackMobileModal = function(_Component) {
        _turbine_helper_babel.inherits(FeedbackMobileModal, _Component);
        function FeedbackMobileModal() {
            var _ref;
            var _temp, _this, _ret;
            _turbine_helper_babel.classCallCheck(this, FeedbackMobileModal);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _turbine_helper_babel.possibleConstructorReturn(this, (_ref = FeedbackMobileModal.__proto__ || Object.getPrototypeOf(FeedbackMobileModal)).call.apply(_ref, [this].concat(args))),
            _this),
            _this.state = {
                name: _this.props.fullName,
                email: _this.props.emailAddress,
                feedbackType: GENERAL_SUGGESTION_FEEDBACK_TYPE,
                feedbackMessage: '',
                initialSelectedOption: true,
                nameValidityMessage: '',
                emailValidityMessage: '',
                feedbackMessageValidityMessage: ''
            },
            _this.setName = function(event) {
                var selectedValue = event.target.value;
                if (selectedValue !== _this.state.name) {
                    _this.setState({
                        name: selectedValue
                    });
                }
                _this.setState({
                    nameValidityMessage: ''
                });
                _this.sendTrackingNameData();
            }
            ,
            _this.setEmail = function(event) {
                var selectedValue = event.target.value;
                if (selectedValue !== _this.state.email) {
                    _this.setState({
                        email: selectedValue
                    });
                }
                _this.setState({
                    emailValidityMessage: ''
                });
                _this.sendTrackingEmailData();
            }
            ,
            _this.setFeedbackType = function(event) {
                var selectedValue = event.target.value;
                if (selectedValue !== _this.state.feedbackType) {
                    _this.setState({
                        feedbackType: selectedValue
                    });
                }
                _this.sendTrackingFeedbackTypeData();
            }
            ,
            _this.setFeedbackMessage = function(event) {
                var selectedValue = event.target.value;
                if (selectedValue !== _this.state.feedbackMessage) {
                    _this.setState({
                        feedbackMessage: selectedValue
                    });
                }
                _this.setState({
                    feedbackMessageValidityMessage: ''
                });
                _this.sendTrackingFeedbackMessageData();
            }
            ,
            _this.sendTrackingNameData = function() {
                _event_dispatch2.default.trigger(SPV2_TRACKING_TYPE, {
                    verb: 'SPVTWO',
                    data: {
                        rlLocation: window.location.href,
                        rfCstmVars: 'Name = ' + _this.state.name + ';'
                    }
                });
            }
            ,
            _this.sendTrackingEmailData = function() {
                _event_dispatch2.default.trigger(SPV2_TRACKING_TYPE, {
                    verb: 'SPVTWO',
                    data: {
                        rfLocation: window.location.href,
                        rfCstmVars: 'Email = ' + _this.state.email + ';'
                    }
                });
            }
            ,
            _this.sendTrackingFeedbackTypeData = function() {
                _event_dispatch2.default.trigger(SPV2_TRACKING_TYPE, {
                    verb: 'SPVTWO',
                    data: {
                        rfLocation: window.location.href,
                        rfCstmVars: 'FeedbackType = ' + _this.state.feedbackType + ';'
                    }
                });
            }
            ,
            _this.sendTrackingFeedbackMessageData = function() {
                _event_dispatch2.default.trigger(SPV2_TRACKING_TYPE, {
                    verb: 'SPVTWO',
                    data: {
                        rfLocation: window.location.href,
                        rfCstmVars: 'FeedbackMessage = ' + _this.state.feedbackMessage + ';'
                    }
                });
            }
            ,
            _this.sendTrackingData = function() {
                _event_dispatch2.default.trigger(SPV2_TRACKING_TYPE, {
                    verb: 'SPVTWO',
                    data: {
                        rfLocation: window.location.href,
                        rfCstmVars: 'Name = ' + _this.state.name + ';\n                     Email = ' + _this.state.email + ';\n                     Feedback Type = ' + _this.state.feedbackType + ';\n                     Feedback Message = ' + _this.state.feedbackMessage + ';'
                    }
                });
            }
            ,
            _this.toggleFeedbackModal = function() {
                _this.props.handleClose();
            }
            ,
            _this.getValidityMessages = function() {
                var stateRef = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state;
                return {
                    nameValidityMessage: stateRef.name === '' ? _lnrs2.default.translate('FeedbackDrawerNameRequired', 'Name is required') : '',
                    emailValidityMessage: !EmailRegEx.test(stateRef.email) ? _lnrs2.default.translate('FeedbackDrawerInputValidEmail', 'Please input a valid email') : '',
                    feedbackMessageValidityMessage: stateRef.feedbackMessage === '' ? _lnrs2.default.translate('FeedbackDrawerMessageRequired', 'Feedback message is required') : ''
                };
            }
            ,
            _this.submitFeedback = function() {
                var validityMessages = _this.getValidityMessages();
                _this.sendTrackingData();
                if (Object.keys(validityMessages).reduce(function(accumulator, key) {
                    return accumulator + validityMessages[key];
                }, '').length === 0) {
                    return Promise.resolve(_wf_ajax2.default.ajax({
                        type: 'GET',
                        dataType: 'json',
                        url: '/v/feedback/feedback/submit_feedback',
                        data: {
                            name: _this.state.name,
                            email: _this.state.email,
                            feedback_type: _this.state.feedbackType,
                            feedback_message: _this.state.feedbackMessage
                        }
                    })).then(function() {
                        _this.setState({
                            name: '',
                            email: '',
                            feedbackMessage: ''
                        });
                        _this.toggleFeedbackModal();
                        _this.props.toggleToast(true);
                    }).catch(function() {
                        _this.toggleFeedbackModal();
                    });
                } else {
                    _this.setState(function(prevState) {
                        return _this.getValidityMessages(prevState);
                    });
                    return null;
                }
            }
            ,
            _temp),
            _turbine_helper_babel.possibleConstructorReturn(_this, _ret);
        }
        _turbine_helper_babel.createClass(FeedbackMobileModal, [{
            key: 'render',
            value: function render() {
                var _this2 = this;
                return _react2.default.createElement('div', null, _react2.default.createElement(_pl_block.Block, {
                    mb: SPACE_4
                }, _react2.default.createElement(_pl_text_input2.default, {
                    id: 'name',
                    label: _lnrs2.default.translate('FeedbackCustomerName', 'Name'),
                    onChange: this.setName,
                    value: this.state.name,
                    validityMessage: this.state.nameValidityMessage
                })), _react2.default.createElement(_pl_block.Block, {
                    mb: SPACE_4
                }, _react2.default.createElement(_pl_text_input2.default, {
                    id: 'email_address',
                    label: _lnrs2.default.translate('FeedbackCustomerEmailAddress', 'Email Address'),
                    onChange: this.setEmail,
                    value: this.state.email,
                    validityMessage: this.state.emailValidityMessage
                })), _react2.default.createElement(_pl_block.Block, {
                    mb: SPACE_4
                }, _react2.default.createElement(_pl_radio_group2.default, {
                    ref: function ref(group) {
                        return _this2.radios = group;
                    },
                    legend: _turbine_helper_lnrs.doReplacement({
                        key: 'SelectFeedbackTopic',
                        translation: _lnrsSelectFeedbackTopic,
                        replacements: []
                    }, _react2.default),
                    name: 'feedback-type-radios',
                    value: this.state.feedbackType,
                    onChange: this.setFeedbackType
                }, _react2.default.createElement(_pl_radio_button2.default, {
                    value: CART_CHECKOUT_FEEDBACK_TYPE
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'CartCheckoutFeedbackType',
                    translation: _lnrsCartCheckoutFeedbackType,
                    replacements: []
                }, _react2.default)), _react2.default.createElement(_pl_radio_button2.default, {
                    value: SEARCH_FEEDBACK_TYPE
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'SearchFeedbackType',
                    translation: _lnrsSearchFeedbackType,
                    replacements: []
                }, _react2.default)), _react2.default.createElement(_pl_radio_button2.default, {
                    value: PRODUCT_FEEDBACK_TYPE
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'ProductFeedbackType',
                    translation: _lnrsProductFeedbackType,
                    replacements: []
                }, _react2.default)), _react2.default.createElement(_pl_radio_button2.default, {
                    value: WEBSITE_FEEDBACK_TYPE
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'WebsiteFeedbackType',
                    translation: _lnrsWebsiteFeedbackType,
                    replacements: []
                }, _react2.default)), _react2.default.createElement(_pl_radio_button2.default, {
                    value: GENERAL_SUGGESTION_FEEDBACK_TYPE,
                    checked: this.state.initialSelectedOption
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'GeneralSuggestionFeedbackType',
                    translation: _lnrsGeneralSuggestionFeedbackType,
                    replacements: []
                }, _react2.default)))), _react2.default.createElement(_pl_block.Block, {
                    mb: SPACE_4
                }, _react2.default.createElement(_pl_text_input2.default, {
                    id: 'feedback-message',
                    label: _turbine_helper_lnrs.doReplacement({
                        key: 'SubmitFeedback',
                        translation: _lnrsSubmitFeedback,
                        replacements: []
                    }, _react2.default),
                    variation: 'textarea',
                    onChange: this.setFeedbackMessage,
                    value: this.state.feedbackMessage,
                    validityMessage: this.state.feedbackMessageValidityMessage
                })), _react2.default.createElement(_pl_button2.default, {
                    onClick: this.submitFeedback
                }, _turbine_helper_lnrs.doReplacement({
                    key: 'SubmitFeedbackButton',
                    translation: _lnrsSubmitFeedbackButton,
                    replacements: []
                }, _react2.default)));
            }
        }]);
        return FeedbackMobileModal;
    }(_react.Component);
    FeedbackMobileModal.defaultProps = {
        fullName: '',
        emailAddress: ''
    };
    exports.default = FeedbackMobileModal;
});
/*wfsw*/
;(function() {
    var k = "unencoded__PleaseSubmitYourFeedback";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Please Submit Your Feedback";
    define("_t!%5B%22PleaseSubmitYourFeedback%22%2C%22Please%20Submit%20your%20Feedback%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__HowCanWeHelpYou";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "How Can We Help You?";
    define("_t!%5B%22HowCanWeHelpYou%22%2C%22How%20Can%20We%20Help%20You%3F%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
/*wfsw:canvas_detect*/
define('canvas_detect', ['exports', 'react', 'string_utils', 'turbine_helper_babel'], function(exports, _react, _string_utils, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.calculateWebGlCanvasHash = exports.calculateStandardFontCanvasHash = exports.calculateFallbackFontCanvasHash = undefined;
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _string_utils2 = _turbine_helper_babel.interopRequireDefault(_string_utils);
    var hashCode = _string_utils2.default.hashCode;
    var canvasText = 'Cwm *"\u06FF \uCDBF\\n-x8\uC5A0BaL \uD83D\uDE03'
      , canvasDetectCanvasClass = 'CanvasDetect-canvas'
      , standardFontId = 'CanvasDetect-canvas-standardFont'
      , fallbackFontId = 'CanvasDetect-canvas-fallbackFont'
      , webGlId = 'CanvasDetect-canvas-webGl'
      , invalidFont = 'asdf!Q@#jlsd9sdf';
    var getCanvasHash = function getCanvasHash(canvasElement) {
        return btoa(hashCode({
            str: canvasElement.toDataURL().split('data:image/png;base64,')[1]
        }));
    };
    var calculateFallbackFontCanvasHash = exports.calculateFallbackFontCanvasHash = function calculateFallbackFontCanvasHash() {
        var canvasElement = document.getElementById(fallbackFontId)
          , canvasContext = canvasElement.getContext('2d');
        if (canvasContext) {
            canvasContext.textBaseline = 'alphabetic';
            canvasContext.fillStyle = '#f60';
            canvasContext.fillRect(125, 1, 62, 20);
            canvasContext.fillStyle = '#069';
            canvasContext.font = '11pt no-real-font-123';
            canvasContext.fillText(canvasText, 2, 15);
            canvasContext.fillStyle = 'rgba(102, 204, 0, 0.7)';
            try {
                canvasContext.font = '18pt ' + invalidFont;
            } catch (e) {}
            canvasContext.fillText(canvasText, 4, 45);
            return getCanvasHash(canvasElement);
        } else {
            return null;
        }
    }
    ;
    var calculateStandardFontCanvasHash = exports.calculateStandardFontCanvasHash = function calculateStandardFontCanvasHash() {
        var canvasElement = document.getElementById(standardFontId)
          , canvasContext = canvasElement.getContext('2d');
        if (canvasContext) {
            canvasContext.textBaseline = 'alphabetic';
            canvasContext.fillStyle = '#f60';
            canvasContext.fillRect(125, 1, 62, 20);
            canvasContext.fillStyle = '#069';
            canvasContext.font = '11pt no-real-font-123';
            canvasContext.fillText(canvasText, 2, 15);
            canvasContext.fillStyle = 'rgba(102, 204, 0, 0.7)';
            canvasContext.font = '18pt Arial';
            canvasContext.fillText(canvasText, 4, 45);
            return getCanvasHash(canvasElement);
        } else {
            return null;
        }
    }
    ;
    var calculateWebGlCanvasHash = exports.calculateWebGlCanvasHash = function calculateWebGlCanvasHash() {
        var canvasElement = document.getElementById(webGlId)
          , canvasContext = canvasElement.getContext('webgl') || canvasElement.getContext('experimental-webgl');
        if (canvasContext) {
            var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
              , fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
              , vertexPosBuffer = canvasContext.createBuffer();
            canvasContext.bindBuffer(canvasContext.ARRAY_BUFFER, vertexPosBuffer);
            var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0]);
            canvasContext.bufferData(canvasContext.ARRAY_BUFFER, vertices, canvasContext.STATIC_DRAW);
            vertexPosBuffer.itemSize = 3;
            vertexPosBuffer.numItems = 3;
            var program = canvasContext.createProgram()
              , vshader = canvasContext.createShader(canvasContext.VERTEX_SHADER);
            canvasContext.shaderSource(vshader, vShaderTemplate);
            canvasContext.compileShader(vshader);
            var fshader = canvasContext.createShader(canvasContext.FRAGMENT_SHADER);
            canvasContext.shaderSource(fshader, fShaderTemplate);
            canvasContext.compileShader(fshader);
            canvasContext.attachShader(program, vshader);
            canvasContext.attachShader(program, fshader);
            canvasContext.linkProgram(program);
            canvasContext.useProgram(program);
            program.vertexPosAttrib = canvasContext.getAttribLocation(program, 'attrVertex');
            program.offsetUniform = canvasContext.getUniformLocation(program, 'uniformOffset');
            canvasContext.enableVertexAttribArray(program.vertexPosArray);
            canvasContext.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, canvasContext.FLOAT, !1, 0, 0);
            canvasContext.uniform2f(program.offsetUniform, 1, 1);
            canvasContext.drawArrays(canvasContext.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
            return getCanvasHash(canvasElement);
        } else {
            return null;
        }
    }
    ;
    var CanvasDetect = function CanvasDetect() {
        return _react2.default.createElement('div', {
            className: 'CanvasDetect'
        }, _react2.default.createElement('canvas', {
            id: fallbackFontId,
            className: canvasDetectCanvasClass
        }), _react2.default.createElement('canvas', {
            id: standardFontId,
            className: canvasDetectCanvasClass
        }), _react2.default.createElement('canvas', {
            id: webGlId,
            className: canvasDetectCanvasClass
        }));
    };
    exports.default = CanvasDetect;
});
/*wfsw*/
/*wfsw:font_detect*/
define('font_detect', ['exports', 'react', 'string_utils', 'turbine_helper_babel'], function(exports, _react, _string_utils, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.calculateFontHash = undefined;
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _string_utils2 = _turbine_helper_babel.interopRequireDefault(_string_utils);
    var hashCode = _string_utils2.default.hashCode;
    var baseFonts = ['Monospace', 'Sans-Serif', 'Serif'];
    var fontsToDetect = ['Abadi MT Condensed Light', 'Adobe Fangsong Std', 'Adobe Hebrew', 'Adobe Ming Std', 'Agency FB', 'Aharoni', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Aparajita', 'Arab', 'Arabic Transparent', 'Arabic Typesetting', 'Arial Baltic', 'Arial Black', 'Arial CE', 'Arial CYR', 'Arial Greek', 'Arial TUR', 'Batang', 'BatangChe', 'Bauhaus 93', 'Bell MT', 'Bitstream Vera Serif', 'Bodoni MT', 'Bookman Old Style', 'Braggadocio', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Calibri Light', 'Calibri', 'Californian FB', 'Cambria Math', 'Cambria', 'Candara', 'Castellar', 'Casual', 'Centaur', 'Century Gothic', 'Chalkduster', 'Colonna MT', 'Comic Sans MS', 'Consolas', 'Constantia', 'Copperplate Gothic Light', 'Corbel', 'Cordia New', 'CordiaUPC', 'Courier New Baltic', 'Courier New CE', 'Courier New CYR', 'Courier New Greek', 'Courier New TUR', 'Courier New', 'DFKai-SB', 'DaunPenh', 'David', 'DejaVu LGC Sans Mono', 'Desdemona', 'DilleniaUPC', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Engravers MT', 'Eras Bold ITC', 'Estrangelo Edessa', 'EucrosiaUPC', 'Euphemia', 'Eurostile', 'FangSong', 'Forte', 'FrankRuehl', 'Franklin Gothic Heavy', 'Franklin Gothic Medium', 'FreesiaUPC', 'French Script MT', 'Gabriola', 'Gautami', 'Georgia', 'Gigi', 'Gisha', 'Goudy Old Style', 'Gulim', 'GulimChe', 'GungSeo', 'Gungsuh', 'GungsuhChe', 'Haettenschweiler', 'Harrington', 'Hei S', 'HeiT', 'Heisei Kaku Gothic', 'Hiragino Sans GB', 'Informal Roman', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'KacstOne', 'KaiTi', 'Kalinga', 'Kartika', 'Khmer UI', 'Kino MT', 'KodchiangUPC', 'Kokila', 'Kozuka Gothic Pr6N', 'Lao UI', 'Latha', 'Leelawadee', 'Levenim MT', 'LilyUPC', 'Lohit Gujarati', 'Loma', 'Lucida Bright', 'Lucida Console', 'Lucida Fax', 'MS Gothic', 'MS Mincho', 'MS PGothic', 'MS PMincho', 'MS Reference Sans Serif', 'MS UI Gothic', 'MV Boli', 'Magneto', 'Malgun Gothic', 'Mangal', 'Marlett', 'Matura MT Script Capitals', 'Meiryo UI', 'Meiryo', 'Menlo', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Sans Serif', 'Microsoft Tai Le', 'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU-ExtB', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'Miriam Fixed', 'Miriam', 'Mongolian Baiti', 'MoolBoran', 'NSimSun', 'Narkisim', 'News Gothic MT', 'Niagara Solid', 'Nyala', 'PMingLiU', 'PMingLiU-ExtB', 'Palace Script MT', 'Palatino Linotype', 'Papyrus', 'Perpetua', 'Plantagenet Cherokee', 'Playbill', 'Prelude Bold', 'Prelude Condensed Bold', 'Prelude Condensed Medium', 'Prelude Medium', 'PreludeCompressedWGL Black', 'PreludeCompressedWGL Bold', 'PreludeCompressedWGL Light', 'PreludeCompressedWGL Medium', 'PreludeCondensedWGL Black', 'PreludeCondensedWGL Bold', 'PreludeCondensedWGL Light', 'PreludeCondensedWGL Medium', 'PreludeWGL Black', 'PreludeWGL Bold', 'PreludeWGL Light', 'PreludeWGL Medium', 'Raavi', 'Rachana', 'Rockwell', 'Rod', 'Sakkal Majalla', 'Sawasdee', 'Script MT Bold', 'Segoe Print', 'Segoe Script', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol', 'Segoe UI', 'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'SimHei', 'SimSun', 'SimSun-ExtB', 'Simplified Arabic Fixed', 'Simplified Arabic', 'Snap ITC', 'Sylfaen', 'Symbol', 'Times New Roman Baltic', 'Times New Roman CE', 'Times New Roman CYR', 'Times New Roman Greek', 'Times New Roman TUR', 'TlwgMono', 'Traditional Arabic', 'Tunga', 'Tw Cen MT Condensed Extra Bold', 'Ubuntu', 'Umpush', 'Univers', 'Utopia', 'Utsaah', 'Vani', 'Vijaya', 'Vladimir Script', 'Vrinda', 'Webdings', 'Wide Latin', 'Wingdings'];
    var fontDetectCanvasClass = 'FontDetect-canvas'
      , fontDetectCanvasId = 'FontDetect-canvas'
      , fontText = 'mmmmmmmmmmlli'
      , fontSize = '72px'
      , canvasHeight = '100px'
      , canvasWidth = '100px';
    var getFontWidth = function getFontWidth(twoDimensionalCanvasContext, font) {
        twoDimensionalCanvasContext.font = fontSize + ' ' + font;
        var fontWidth = twoDimensionalCanvasContext.measureText(fontText).width;
        twoDimensionalCanvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
        return fontWidth;
    };
    var calculateFontHash = exports.calculateFontHash = function calculateFontHash() {
        var canvasElement = document.getElementById(fontDetectCanvasId);
        var canvasContext = canvasElement.getContext('2d');
        if (canvasContext) {
            var baseFontWidths = baseFonts.map(function(baseFont) {
                return getFontWidth(canvasContext, baseFont);
            });
            var fontString = '';
            fontsToDetect.map(function(font) {
                for (var i = 0; i < baseFontWidths.length; i++) {
                    if (getFontWidth(canvasContext, font) === baseFontWidths[i]) {
                        fontString += font;
                        break;
                    }
                }
            });
            return btoa(hashCode({
                str: fontString
            }));
        } else {
            return null;
        }
    }
    ;
    var FontDetect = function FontDetect() {
        return _react2.default.createElement('div', {
            className: 'FontDetect'
        }, _react2.default.createElement('canvas', {
            id: fontDetectCanvasId,
            className: fontDetectCanvasClass
        }));
    };
    exports.default = FontDetect;
});
/*wfsw*/
/*wfsw:pbjs*/
define('pbjs', [], function() {
    !function(d) {
        var s = window.pbjsChunk;
        window.pbjsChunk = function(e, t, n) {
            for (var r, i, o, a = 0, u = []; a < e.length; a++)
                i = e[a],
                c[i] && u.push(c[i][0]),
                c[i] = 0;
            for (r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (d[r] = t[r]);
            for (s && s(e, t, n); u.length; )
                u.shift()();
            if (n)
                for (a = 0; a < n.length; a++)
                    o = f(f.s = n[a]);
            return o;
        }
        ;
        var n = {}
          , c = {
            169: 0
        };
        function f(e) {
            if (n[e])
                return n[e].exports;
            var t = n[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return d[e].call(t.exports, t, t.exports, f),
            t.l = !0,
            t.exports;
        }
        f.m = d,
        f.c = n,
        f.d = function(e, t, n) {
            f.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: n
            });
        }
        ,
        f.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            }
            : function() {
                return e;
            }
            ;
            return f.d(t, "a", t),
            t;
        }
        ,
        f.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }
        ,
        f.p = "",
        f.oe = function(e) {
            throw console.error(e),
            e;
        }
        ,
        f(f.s = 569);
    }({
        0: function(e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }),
            a.getLatestHighestCpmBid = a.getOldestHighestCpmBid = a.getHighestCpm = void 0;
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }
              , u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }
            ;
            a.getAdUnitSizes = function(e) {
                if (!e)
                    return;
                var t = [];
                if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                    var n = e.mediaTypes.banner.sizes;
                    Array.isArray(n[0]) ? t = n : t.push(n);
                } else
                    Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
                return t;
            }
            ,
            a.parseSizesInput = function(e) {
                var t = [];
                if ("string" == typeof e) {
                    var n = e.split(",")
                      , r = /^(\d)+x(\d)+$/i;
                    if (n)
                        for (var i in n)
                            w(n, i) && n[i].match(r) && t.push(n[i]);
                } else if ("object" === (void 0 === e ? "undefined" : u(e))) {
                    var o = e.length;
                    if (0 < o)
                        if (2 === o && "number" == typeof e[0] && "number" == typeof e[1])
                            t.push(A(e));
                        else
                            for (var a = 0; a < o; a++)
                                t.push(A(e[a]));
                }
                return t;
            }
            ,
            a.parseGPTSingleSizeArray = A,
            a.uniques = C,
            a.flatten = O,
            a.getBidRequest = function(n, e) {
                var r = void 0;
                return e.some(function(e) {
                    var t = (0,
                    o.default)(e.bids, function(t) {
                        return ["bidId", "adId", "bid_id"].some(function(e) {
                            return t[e] === n;
                        });
                    });
                    return t && (r = t),
                    t;
                }),
                r;
            }
            ,
            a.getKeys = B,
            a.getValue = R,
            a.getBidderCodes = function() {
                return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function(e) {
                    return e.bids.map(function(e) {
                        return e.bidder;
                    }).reduce(O, []);
                }).reduce(O).filter(C);
            }
            ,
            a.isGptPubadsDefined = function() {
                if (window.googletag && a.isFn(window.googletag.pubads) && a.isFn(window.googletag.pubads().getSlots))
                    return !0;
            }
            ,
            a.shuffle = function(e) {
                var t = e.length;
                for (; 0 < t; ) {
                    var n = Math.floor(Math.random() * t)
                      , r = e[--t];
                    e[t] = e[n],
                    e[n] = r;
                }
                return e;
            }
            ,
            a.adUnitsFilter = function(e, t) {
                return (0,
                d.default)(e, t && t.adUnitCode);
            }
            ,
            a.isSrcdocSupported = function(e) {
                return e.defaultView && e.defaultView.frameElement && "srcdoc"in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent);
            }
            ,
            a.deepClone = function(e) {
                return (0,
                i.default)(e);
            }
            ,
            a.inIframe = function() {
                try {
                    return a.getWindowSelf() !== a.getWindowTop();
                } catch (e) {
                    return !0;
                }
            }
            ,
            a.isSafariBrowser = function() {
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            }
            ,
            a.replaceAuctionPrice = function(e, t) {
                if (!e)
                    return;
                return e.replace(/\$\{AUCTION_PRICE\}/g, t);
            }
            ,
            a.timestamp = function() {
                return new Date().getTime();
            }
            ,
            a.checkCookieSupport = function() {
                if (window.navigator.cookieEnabled || document.cookie.length)
                    return !0;
            }
            ,
            a.cookiesAreEnabled = function() {
                if (a.checkCookieSupport())
                    return !0;
                return window.document.cookie = "prebid.cookieTest",
                -1 != window.document.cookie.indexOf("prebid.cookieTest");
            }
            ,
            a.delayExecution = function(e, t) {
                if (t < 1)
                    throw new Error("numRequiredCalls must be a positive number. Got " + t);
                var n = 0;
                return function() {
                    ++n === t && e.apply(null, arguments);
                }
                ;
            }
            ,
            a.groupBy = function(e, n) {
                return e.reduce(function(e, t) {
                    return (e[t[n]] = e[t[n]] || []).push(t),
                    e;
                }, {});
            }
            ,
            a.deepAccess = function(e, t) {
                if (!e)
                    return;
                t = String(t).split(".");
                for (var n = 0; n < t.length; n++)
                    if (void 0 === (e = e[t[n]]))
                        return;
                return e;
            }
            ,
            a.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
                if (!e)
                    return "";
                return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="' + e + '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>';
            }
            ,
            a.getDefinedParams = function(n, e) {
                return e.filter(function(e) {
                    return n[e];
                }).reduce(function(e, t) {
                    return r(e, function(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n;
                        return e;
                    }({}, t, n[t]));
                }, {});
            }
            ,
            a.isValidMediaTypes = function(e) {
                var t = ["banner", "native", "video"];
                if (!Object.keys(e).every(function(e) {
                    return (0,
                    d.default)(t, e);
                }))
                    return !1;
                if (e.video && e.video.context)
                    return (0,
                    d.default)(["instream", "outstream"], e.video.context);
                return !0;
            }
            ,
            a.getBidderRequest = function(e, t, n) {
                return (0,
                o.default)(e, function(e) {
                    return 0 < e.bids.filter(function(e) {
                        return e.bidder === t && e.adUnitCode === n;
                    }).length;
                }) || {
                    start: null,
                    auctionId: null
                };
            }
            ,
            a.getUserConfiguredParams = function(e, t, n) {
                return e.filter(function(e) {
                    return e.code === t;
                }).map(function(e) {
                    return e.bids;
                }).reduce(O, []).filter(function(e) {
                    return e.bidder === n;
                }).map(function(e) {
                    return e.params || {};
                });
            }
            ,
            a.getOrigin = function() {
                return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
            }
            ,
            a.getDNT = function() {
                return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack;
            }
            ,
            a.isAdUnitCodeMatchingSlot = function(t) {
                return function(e) {
                    return U(t, e);
                }
                ;
            }
            ,
            a.isSlotMatchingAdUnitCode = function(t) {
                return function(e) {
                    return U(e, t);
                }
                ;
            }
            ,
            a.unsupportedBidderMessage = function(e, t) {
                var n = Object.keys(e.mediaTypes || {
                    banner: "banner"
                }).join(", ");
                return "\n    " + e.code + " is a " + n + " ad unit\n    containing bidders that don't support " + n + ": " + t + ".\n    This bidder won't fetch demand.\n  ";
            }
            ,
            a.deletePropertyFromObject = function(e, t) {
                var n = r({}, e);
                return delete n[t],
                n;
            }
            ,
            a.removeRequestId = function(e) {
                return a.deletePropertyFromObject(e, "requestId");
            }
            ,
            a.isInteger = function(e) {
                return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
            }
            ,
            a.convertCamelToUnderscore = function(e) {
                return e.replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
                    return "_" + t.toLowerCase();
                }).replace(/^_/, "");
            }
            ,
            a.transformBidderParamKeywords = function(e) {
                var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords"
                  , i = [];
                return a._each(e, function(e, t) {
                    if (a.isArray(e)) {
                        var n = [];
                        a._each(e, function(e) {
                            (e = a.getValueString(r + "." + t, e)) && n.push(e);
                        }),
                        e = n;
                    } else {
                        if (e = a.getValueString(r + "." + t, e),
                        !a.isStr(e))
                            return;
                        e = [e];
                    }
                    i.push({
                        key: t,
                        value: e
                    });
                }),
                i;
            }
            ,
            a.convertTypes = function(r, i) {
                return Object.keys(r).forEach(function(e) {
                    var t, n;
                    i[e] && (a.isFn(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e],
                    n = i[e],
                    "string" === t ? n && n.toString() : "number" === t ? Number(n) : n),
                    isNaN(i[e]) && delete i.key);
                }),
                i;
            }
            ;
            var n = t(3)
              , i = c(t(66))
              , o = c(t(10))
              , d = c(t(5))
              , s = t(11);
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var f = t(4)
              , l = !1
              , g = Object.prototype.toString
              , p = Boolean(window.console)
              , v = Boolean(p && window.console.log)
              , y = Boolean(p && window.console.info)
              , m = Boolean(p && window.console.warn)
              , b = Boolean(p && window.console.error);
            a.replaceTokenInString = function(i, e, o) {
                return a._each(e, function(e, t) {
                    e = void 0 === e ? "" : e;
                    var n = o + t.toUpperCase() + o
                      , r = new RegExp(n,"g");
                    i = i.replace(r, e);
                }),
                i;
            }
            ;
            var h, S = (h = 0,
            function() {
                return ++h;
            }
            );
            function E() {
                return S() + Math.random().toString(16).substr(2);
            }
            function A(e) {
                if (a.isArray(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]))
                    return e[0] + "x" + e[1];
            }
            function T(e, t) {
                return e = [].slice.call(e),
                t && e.unshift(t),
                e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"),
                e.unshift("%cPrebid"),
                e;
            }
            a.getUniqueIdentifierStr = E,
            a.generateUUID = function e(t) {
                return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
            }
            ,
            a.getBidIdParameter = function(e, t) {
                return t && t[e] ? t[e] : "";
            }
            ,
            a.tryAppendQueryString = function(e, t, n) {
                return n ? e + (t + "=") + encodeURIComponent(n) + "&" : e;
            }
            ,
            a.parseQueryStringParameters = function(e) {
                var t = "";
                for (var n in e)
                    e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
                return t;
            }
            ,
            a.transformAdServerTargetingObj = function(t) {
                return t && 0 < Object.getOwnPropertyNames(t).length ? B(t).map(function(e) {
                    return e + "=" + encodeURIComponent(R(t, e));
                }).join("&") : "";
            }
            ,
            a.getTopWindowLocation = function() {
                if (a.inIframe()) {
                    var e = void 0;
                    try {
                        e = a.getAncestorOrigins() || a.getTopFrameReferrer();
                    } catch (e) {
                        logInfo("could not obtain top window location", e);
                    }
                    if (e)
                        return (0,
                        s.parse)(e, {
                            decodeSearchAsString: !0
                        });
                }
                return a.getWindowLocation();
            }
            ,
            a.getTopFrameReferrer = function() {
                try {
                    window.top.location.toString();
                    for (var e = "", t = void 0; (t = t ? t.parent : window).document && t.document.referrer && (e = t.document.referrer),
                    t !== window.top; )
                        ;
                    return e;
                } catch (e) {
                    return window.document.referrer;
                }
            }
            ,
            a.getAncestorOrigins = function() {
                if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length)
                    return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1];
            }
            ,
            a.getWindowTop = function() {
                return window.top;
            }
            ,
            a.getWindowSelf = function() {
                return window.self;
            }
            ,
            a.getWindowLocation = function() {
                return window.location;
            }
            ,
            a.getTopWindowUrl = function() {
                var t = void 0;
                try {
                    t = a.getTopWindowLocation().href;
                } catch (e) {
                    t = "";
                }
                return t;
            }
            ,
            a.getTopWindowReferrer = function() {
                try {
                    return window.top.document.referrer;
                } catch (e) {
                    return document.referrer;
                }
            }
            ,
            a.logMessage = function() {
                I() && v && console.log.apply(console, T(arguments, "MESSAGE:"));
            }
            ,
            a.logInfo = function() {
                I() && y && console.info.apply(console, T(arguments, "INFO:"));
            }
            ,
            a.logWarn = function() {
                I() && m && console.warn.apply(console, T(arguments, "WARNING:"));
            }
            ,
            a.logError = function() {
                I() && b && console.error.apply(console, T(arguments, "ERROR:"));
            }
            ,
            a.hasConsoleLogger = function() {
                return v;
            }
            ;
            var I = function() {
                if (!1 === n.config.getConfig("debug") && !1 === l) {
                    var e = "TRUE" === _(f.DEBUG_MODE).toUpperCase();
                    n.config.setConfig({
                        debug: e
                    }),
                    l = !0;
                }
                return !!n.config.getConfig("debug");
            };
            a.debugTurnedOn = I,
            a.createInvisibleIframe = function() {
                var e = document.createElement("iframe");
                return e.id = E(),
                e.height = 0,
                e.width = 0,
                e.border = "0px",
                e.hspace = "0",
                e.vspace = "0",
                e.marginWidth = "0",
                e.marginHeight = "0",
                e.style.border = "0",
                e.scrolling = "no",
                e.frameBorder = "0",
                e.src = "about:blank",
                e.style.display = "none",
                e;
            }
            ;
            var _ = function(e) {
                var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
                return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "));
            };
            a.getParameterByName = _,
            a.hasValidBidRequest = function(e, n, t) {
                var r = !1;
                function i(e, t) {
                    t === n[o] && (r = !0);
                }
                for (var o = 0; o < n.length; o++)
                    if (r = !1,
                    a._each(e, i),
                    !r)
                        return a.logError("Params are missing for bid request. One of these required paramaters are missing: " + n, t),
                        !1;
                return !0;
            }
            ,
            a.addEventHandler = function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n);
            }
            ,
            a.isA = function(e, t) {
                return g.call(e) === "[object " + t + "]";
            }
            ,
            a.isFn = function(e) {
                return a.isA(e, "Function");
            }
            ,
            a.isStr = function(e) {
                return a.isA(e, "String");
            }
            ,
            a.isArray = function(e) {
                return a.isA(e, "Array");
            }
            ,
            a.isNumber = function(e) {
                return a.isA(e, "Number");
            }
            ,
            a.isPlainObject = function(e) {
                return a.isA(e, "Object");
            }
            ,
            a.isBoolean = function(e) {
                return a.isA(e, "Boolean");
            }
            ,
            a.isEmpty = function(e) {
                if (!e)
                    return !0;
                if (a.isArray(e) || a.isStr(e))
                    return !(0 < e.length);
                for (var t in e)
                    if (hasOwnProperty.call(e, t))
                        return !1;
                return !0;
            }
            ,
            a.isEmptyStr = function(e) {
                return a.isStr(e) && (!e || 0 === e.length);
            }
            ,
            a._each = function(e, t) {
                if (!a.isEmpty(e)) {
                    if (a.isFn(e.forEach))
                        return e.forEach(t, this);
                    var n = 0
                      , r = e.length;
                    if (0 < r)
                        for (; n < r; n++)
                            t(e[n], n, e);
                    else
                        for (n in e)
                            hasOwnProperty.call(e, n) && t.call(this, e[n], n);
                }
            }
            ,
            a.contains = function(e, t) {
                if (a.isEmpty(e))
                    return !1;
                if (a.isFn(e.indexOf))
                    return -1 !== e.indexOf(t);
                for (var n = e.length; n--; )
                    if (e[n] === t)
                        return !0;
                return !1;
            }
            ,
            a.indexOf = function() {
                if (Array.prototype.indexOf)
                    return Array.prototype.indexOf;
            }(),
            a._map = function(n, r) {
                if (a.isEmpty(n))
                    return [];
                if (a.isFn(n.map))
                    return n.map(r);
                var i = [];
                return a._each(n, function(e, t) {
                    i.push(r(e, t, n));
                }),
                i;
            }
            ;
            var w = function(e, t) {
                return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
            };
            function C(e, t, n) {
                return n.indexOf(e) === t;
            }
            function O(e, t) {
                return e.concat(t);
            }
            function B(e) {
                return Object.keys(e);
            }
            function R(e, t) {
                return e[t];
            }
            a.insertElement = function(e, t, n) {
                t = t || document;
                var r = void 0;
                r = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
                try {
                    (r = r.length ? r : t.getElementsByTagName("body")).length && (r = r[0]).insertBefore(e, r.firstChild);
                } catch (e) {}
            }
            ,
            a.triggerPixel = function(e) {
                new Image().src = e;
            }
            ,
            a.callBurl = function(e) {
                var t = e.source
                  , n = e.burl;
                t === f.S2S.SRC && n && a.triggerPixel(n);
            }
            ,
            a.insertHtmlIntoIframe = function(e) {
                if (e) {
                    var t = document.createElement("iframe");
                    t.id = a.getUniqueIdentifierStr(),
                    t.width = 0,
                    t.height = 0,
                    t.hspace = "0",
                    t.vspace = "0",
                    t.marginWidth = "0",
                    t.marginHeight = "0",
                    t.style.display = "none",
                    t.style.height = "0px",
                    t.style.width = "0px",
                    t.scrolling = "no",
                    t.frameBorder = "0",
                    t.allowtransparency = "true",
                    a.insertElement(t, document, "body"),
                    t.contentWindow.document.open(),
                    t.contentWindow.document.write(e),
                    t.contentWindow.document.close();
                }
            }
            ,
            a.insertUserSyncIframe = function(e) {
                var t = a.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin")
                  , n = document.createElement("div");
                n.innerHTML = t;
                var r = n.firstChild;
                a.insertElement(r);
            }
            ,
            a.createTrackPixelHtml = function(e) {
                if (!e)
                    return "";
                var t = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
                return t += '<img src="' + encodeURI(e) + '"></div>';
            }
            ,
            a.createTrackPixelIframeHtml = function(e) {
                var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
                  , n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
                return e ? (t && (e = encodeURI(e)),
                n && (n = 'sandbox="' + n + '"'),
                "<iframe " + n + ' id="' + a.getUniqueIdentifierStr() + '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="' + e + '">\n    </iframe>') : "";
            }
            ,
            a.getIframeDocument = function(e) {
                if (e) {
                    var t = void 0;
                    try {
                        t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument;
                    } catch (e) {
                        a.logError("Cannot get iframe document", e);
                    }
                    return t;
                }
            }
            ,
            a.getValueString = function(e, t, n) {
                return null == t ? n : a.isStr(t) ? t : a.isNumber(t) ? t.toString() : void a.logWarn("Unsuported type for param: " + e + " required type: String");
            }
            ;
            a.getHighestCpm = N("timeToRespond", function(e, t) {
                return t < e;
            }),
            a.getOldestHighestCpmBid = N("responseTimestamp", function(e, t) {
                return t < e;
            }),
            a.getLatestHighestCpmBid = N("responseTimestamp", function(e, t) {
                return e < t;
            });
            function N(n, r) {
                return function(e, t) {
                    return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e;
                }
                ;
            }
            var U = function(e, t) {
                return e.getAdUnitPath() === t || e.getSlotElementId() === t;
            };
        },
        1: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var c = function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return function(e, t) {
                        var n = []
                          , r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            o = e;
                        } finally {
                            try {
                                !r && u.return && u.return();
                            } finally {
                                if (i)
                                    throw o;
                            }
                        }
                        return n;
                    }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
              , p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }
              , v = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }
            ;
            t.registerBidder = function(t) {
                var n = Array.isArray(t.supportedMediaTypes) ? {
                    supportedMediaTypes: t.supportedMediaTypes
                } : void 0;
                function r(e) {
                    var t = g(e);
                    i.default.registerBidAdapter(t, e.code, n);
                }
                r(t),
                Array.isArray(t.aliases) && t.aliases.forEach(function(e) {
                    i.default.aliasRegistry[e] = t.code,
                    r(v({}, t, {
                        code: e
                    }));
                });
            }
            ,
            t.newBidder = g,
            t.isValid = S;
            var r = f(n(28))
              , i = f(n(8))
              , o = n(3)
              , y = f(n(16))
              , a = n(18)
              , u = n(17)
              , d = n(40)
              , m = f(n(4))
              , b = f(n(9))
              , s = f(n(5))
              , h = n(0);
            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var l = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"];
            function g(f) {
                return v(new r.default(f.code), {
                    getSpec: function() {
                        return Object.freeze(f);
                    },
                    registerSyncs: l,
                    callBids: function(o, a, t, n) {
                        if (Array.isArray(o.bids)) {
                            var u = {}
                              , d = []
                              , e = o.bids.filter(g);
                            if (0 !== e.length) {
                                var s = {};
                                e.forEach(function(e) {
                                    (s[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode);
                                });
                                var r = f.buildRequests(e, o);
                                if (r && 0 !== r.length) {
                                    Array.isArray(r) || (r = [r]);
                                    var c = (0,
                                    h.delayExecution)(i, r.length);
                                    r.forEach(function(i) {
                                        switch (i.method) {
                                        case "GET":
                                            n("" + i.url + function(e) {
                                                if (e)
                                                    return "?" + ("object" === (void 0 === e ? "undefined" : p(e)) ? (0,
                                                    h.parseQueryStringParameters)(e) : e);
                                                return "";
                                            }(i.data), {
                                                success: e,
                                                error: t
                                            }, void 0, v({
                                                method: "GET",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        case "POST":
                                            n(i.url, {
                                                success: e,
                                                error: t
                                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), v({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        default:
                                            (0,
                                            h.logWarn)("Skipping invalid request from " + f.code + ". Request type " + i.type + " must be GET or POST"),
                                            c();
                                        }
                                        function e(e, t) {
                                            try {
                                                e = JSON.parse(e);
                                            } catch (e) {}
                                            e = {
                                                body: e,
                                                headers: {
                                                    get: t.getResponseHeader.bind(t)
                                                }
                                            },
                                            d.push(e);
                                            var n = void 0;
                                            try {
                                                n = f.interpretResponse(e, i);
                                            } catch (e) {
                                                return (0,
                                                h.logError)("Bidder " + f.code + " failed to interpret the server's response. Continuing without bids", null, e),
                                                void c();
                                            }
                                            function r(e) {
                                                var t, n, r = s[e.requestId];
                                                if (r) {
                                                    var i = v(y.default.createBid(m.default.STATUS.GOOD, r), e);
                                                    t = r.adUnitCode,
                                                    n = i,
                                                    u[t] = !0,
                                                    S(t, n, [o]) && a(t, n);
                                                } else
                                                    (0,
                                                    h.logWarn)("Bidder " + f.code + " made bid for unknown request ID: " + e.requestId + ". Ignoring.");
                                            }
                                            n && (n.forEach ? n.forEach(r) : r(n)),
                                            c(n);
                                        }
                                        function t(e) {
                                            (0,
                                            h.logError)("Server call for " + f.code + " failed: " + e + ". Continuing without bids."),
                                            c();
                                        }
                                    });
                                } else
                                    i();
                            } else
                                i();
                        }
                        function i(e) {
                            t(),
                            b.default.emit(m.default.EVENTS.BIDDER_DONE, o),
                            l(d, o.gdprConsent);
                        }
                    }
                });
                function l(e, t) {
                    if (f.getUserSyncs) {
                        var n = o.config.getConfig("userSync.filterSettings")
                          , r = f.getUserSyncs({
                            iframeEnabled: !!(o.config.getConfig("userSync.iframeEnabled") || n && (n.iframe || n.all)),
                            pixelEnabled: !!(o.config.getConfig("userSync.pixelEnabled") || n && (n.image || n.all))
                        }, e, t);
                        r && (Array.isArray(r) || (r = [r]),
                        r.forEach(function(e) {
                            a.userSync.registerSync(e.type, f.code, e.url);
                        }));
                    }
                }
                function g(e) {
                    return !!f.isBidRequestValid(e) || ((0,
                    h.logWarn)("Invalid bid sent to bidder " + f.code + ": " + JSON.stringify(e)),
                    !1);
                }
            }
            function S(e, t, n) {
                function r(e) {
                    return "Invalid bid from " + t.bidderCode + ". Ignoring bid: " + e;
                }
                return e ? t ? (i = Object.keys(t),
                l.every(function(e) {
                    return (0,
                    s.default)(i, e) && !(0,
                    s.default)([void 0, null], t[e]);
                }) ? "native" !== t.mediaType || (0,
                u.nativeBidIsValid)(t, n) ? "video" !== t.mediaType || (0,
                d.isValidVideoBid)(t, n) ? !("banner" === t.mediaType && !function(e, t, n) {
                    if ((t.width || 0 === t.width) && (t.height || 0 === t.height))
                        return !0;
                    var r = (0,
                    h.getBidderRequest)(n, t.bidderCode, e)
                      , i = r && r.bids && r.bids[0] && r.bids[0].sizes
                      , o = (0,
                    h.parseSizesInput)(i);
                    if (1 === o.length) {
                        var a = o[0].split("x")
                          , u = c(a, 2)
                          , d = u[0]
                          , s = u[1];
                        return t.width = d,
                        t.height = s,
                        !0;
                    }
                    return !1;
                }(e, t, n)) || ((0,
                h.logError)(r("Banner bids require a width and height")),
                !1) : ((0,
                h.logError)(r("Video bid does not have required vastUrl or renderer property")),
                !1) : ((0,
                h.logError)(r("Native bid missing some required properties.")),
                !1) : ((0,
                h.logError)(r("Bidder " + t.bidderCode + " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")),
                !1)) : ((0,
                h.logWarn)("Some adapter tried to add an undefined bid for " + e + "."),
                !1) : ((0,
                h.logWarn)("No adUnitCode was supplied to addBidResponse."),
                !1);
                var i;
            }
        },
        10: function(e, t, n) {
            n(46),
            e.exports = n(13).Array.find;
        },
        105: function(e, t, n) {
            "use strict";
            var r = n(14)
              , i = n(34)(6)
              , o = "findIndex"
              , a = !0;
            o in [] && Array(1)[o](function() {
                a = !1;
            }),
            r(r.P + r.F * a, "Array", {
                findIndex: function(e) {
                    return i(this, e, 1 < arguments.length ? arguments[1] : void 0);
                }
            }),
            n(27)(o);
        },
        11: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return function(e, t) {
                        var n = []
                          , r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            o = e;
                        } finally {
                            try {
                                !r && u.return && u.return();
                            } finally {
                                if (i)
                                    throw o;
                            }
                        }
                        return n;
                    }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
            function i(e) {
                return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
                    var n = t.split("=")
                      , r = a(n, 2)
                      , i = r[0]
                      , o = r[1];
                    return /\[\]$/.test(i) ? (e[i = i.replace("[]", "")] = e[i] || [],
                    e[i].push(o)) : e[i] = o || "",
                    e;
                }, {}) : {};
            }
            function r(e) {
                return Object.keys(e).map(function(t) {
                    return Array.isArray(e[t]) ? e[t].map(function(e) {
                        return t + "[]=" + e;
                    }).join("&") : t + "=" + e[t];
                }).join("&");
            }
            t.parseQS = i,
            t.formatQS = r,
            t.parse = function(e, t) {
                var n = document.createElement("a");
                t && "noDecodeWholeURL"in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
                var r = t && "decodeSearchAsString"in t && t.decodeSearchAsString;
                return {
                    href: n.href,
                    protocol: (n.protocol || "").replace(/:$/, ""),
                    hostname: n.hostname,
                    port: +n.port,
                    pathname: n.pathname.replace(/^(?!\/)/, "/"),
                    search: r ? n.search : i(n.search || ""),
                    hash: (n.hash || "").replace(/^#/, ""),
                    host: n.host || window.location.host
                };
            }
            ,
            t.format = function(e) {
                return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + r(e.search || "") : "") + (e.hash ? "#" + e.hash : "");
            }
            ;
        },
        12: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.Renderer = r;
            var u = n(22)
              , d = function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e,
                    t;
                }
            }(n(0));
            function r(e) {
                var t = this
                  , n = e.url
                  , r = e.config
                  , i = e.id
                  , o = e.callback
                  , a = e.loaded;
                this.url = n,
                this.config = r,
                this.handlers = {},
                this.id = i,
                this.loaded = a,
                this.cmd = [],
                this.push = function(e) {
                    "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : d.logError("Commands given to Renderer.push must be wrapped in a function");
                }
                ,
                this.callback = o || function() {
                    t.loaded = !0,
                    t.process();
                }
                ,
                (0,
                u.loadScript)(n, this.callback, !0);
            }
            r.install = function(e) {
                return new r({
                    url: e.url,
                    config: e.config,
                    id: e.id,
                    callback: e.callback,
                    loaded: e.loaded
                });
            }
            ,
            r.prototype.getConfig = function() {
                return this.config;
            }
            ,
            r.prototype.setRender = function(e) {
                this.render = e;
            }
            ,
            r.prototype.setEventHandlers = function(e) {
                this.handlers = e;
            }
            ,
            r.prototype.handleVideoEvent = function(e) {
                var t = e.id
                  , n = e.eventName;
                "function" == typeof this.handlers[n] && this.handlers[n](),
                d.logMessage("Prebid Renderer event for id " + t + " type " + n);
            }
            ,
            r.prototype.process = function() {
                for (; 0 < this.cmd.length; )
                    try {
                        this.cmd.shift().call();
                    } catch (e) {
                        d.logError("Error processing Renderer command: ", e);
                    }
            }
            ;
        },
        13: function(e, t) {
            var n = e.exports = {
                version: "2.5.7"
            };
            "number" == typeof __e && (__e = n);
        },
        14: function(e, t, n) {
            var v = n(19)
              , y = n(13)
              , m = n(32)
              , b = n(48)
              , h = n(55)
              , S = "prototype"
              , E = function(e, t, n) {
                var r, i, o, a = e & E.F, u = e & E.G, d = e & E.S, s = e & E.P, c = e & E.B, f = e & E.W, l = u ? y : y[t] || (y[t] = {}), g = l[S], p = u ? v : d ? v[t] : (v[t] || {})[S];
                for (r in u && (n = t),
                n)
                    (i = !a && p && void 0 !== p[r]) && h(l, r) || (o = i ? p[r] : n[r],
                    l[r] = u && "function" != typeof p[r] ? n[r] : c && i ? m(o, v) : f && p[r] == o ? function(r) {
                        var e = function(e, t, n) {
                            if (this instanceof r) {
                                switch (arguments.length) {
                                case 0:
                                    return new r();
                                case 1:
                                    return new r(e);
                                case 2:
                                    return new r(e,t);
                                }
                                return new r(e,t,n);
                            }
                            return r.apply(this, arguments);
                        };
                        return e[S] = r[S],
                        e;
                    }(o) : s && "function" == typeof o ? m(Function.call, o) : o,
                    s && ((l.virtual || (l.virtual = {}))[r] = o,
                    e & E.R && g && !g[r] && b(g, r, o)));
            };
            E.F = 1,
            E.G = 2,
            E.S = 4,
            E.P = 8,
            E.B = 16,
            E.W = 32,
            E.U = 64,
            E.R = 128,
            e.exports = E;
        },
        15: function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e;
            }
            ;
        },
        16: function(e, t, n) {
            "use strict";
            var o = n(0);
            function r(e, t) {
                var n = t && t.bidId || o.getUniqueIdentifierStr()
                  , r = t && t.src || "client"
                  , i = e || 0;
                this.bidderCode = t && t.bidder || "",
                this.width = 0,
                this.height = 0,
                this.statusMessage = function() {
                    switch (i) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out";
                    }
                }(),
                this.adId = n,
                this.mediaType = "banner",
                this.source = r,
                this.getStatusCode = function() {
                    return i;
                }
                ,
                this.getSize = function() {
                    return this.width + "x" + this.height;
                }
                ;
            }
            t.createBid = function(e, t) {
                return new r(e,t);
            }
            ;
        },
        17: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.hasNonNativeBidder = t.nativeBidder = t.nativeAdUnit = t.NATIVE_TARGETING_KEYS = t.NATIVE_KEYS = t.nativeAdapters = void 0;
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }
            ;
            t.processNativeAdUnitParams = function(e) {
                if (e && e.type && function(e) {
                    if (!e || !(0,
                    u.default)(Object.keys(c), e))
                        return (0,
                        a.logError)(e + " nativeParam is not supported"),
                        !1;
                    return !0;
                }(e.type))
                    return c[e.type];
                return e;
            }
            ,
            t.nativeBidIsValid = function(t, e) {
                var n = (0,
                a.getBidRequest)(t.adId, e);
                if (!n)
                    return !1;
                if (!(0,
                a.deepAccess)(t, "native.clickUrl"))
                    return !1;
                if ((0,
                a.deepAccess)(t, "native.image") && (!(0,
                a.deepAccess)(t, "native.image.height") || !(0,
                a.deepAccess)(t, "native.image.width")))
                    return !1;
                if ((0,
                a.deepAccess)(t, "native.icon") && (!(0,
                a.deepAccess)(t, "native.icon.height") || !(0,
                a.deepAccess)(t, "native.icon.width")))
                    return !1;
                var r = n.nativeParams;
                if (!r)
                    return !0;
                var i = Object.keys(r).filter(function(e) {
                    return r[e].required;
                })
                  , o = Object.keys(t.native).filter(function(e) {
                    return t.native[e];
                });
                return i.every(function(e) {
                    return (0,
                    u.default)(o, e);
                });
            }
            ,
            t.fireNativeTrackers = function(e, t) {
                var n = void 0;
                "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers,
                t.native && t.native.javascriptTrackers && (0,
                a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
                (n || []).forEach(a.triggerPixel);
            }
            ,
            t.getNativeTargeting = function(r) {
                var i = {};
                return Object.keys(r.native).forEach(function(e) {
                    var t = s[e]
                      , n = r.native[e];
                    "object" === (void 0 === n ? "undefined" : o(n)) && n.url && (n = n.url),
                    t && (i[t] = n);
                }),
                i;
            }
            ;
            var r, a = n(0), i = n(5), u = (r = i) && r.__esModule ? r : {
                default: r
            };
            var d = t.nativeAdapters = []
              , s = t.NATIVE_KEYS = {
                title: "hb_native_title",
                body: "hb_native_body",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                cta: "hb_native_cta"
            }
              , c = (t.NATIVE_TARGETING_KEYS = Object.keys(s).map(function(e) {
                return s[e];
            }),
            {
                image: {
                    image: {
                        required: !0
                    },
                    title: {
                        required: !0
                    },
                    sponsoredBy: {
                        required: !0
                    },
                    clickUrl: {
                        required: !0
                    },
                    body: {
                        required: !1
                    },
                    icon: {
                        required: !1
                    }
                }
            });
            t.nativeAdUnit = function(e) {
                var t = "native" === e.mediaType
                  , n = (0,
                a.deepAccess)(e, "mediaTypes.native");
                return t || n;
            }
            ;
            var f = t.nativeBidder = function(e) {
                return (0,
                u.default)(d, e.bidder);
            }
            ;
            t.hasNonNativeBidder = function(e) {
                return e.bids.filter(function(e) {
                    return !f(e);
                }).length;
            }
            ;
        },
        18: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.userSync = void 0;
            var i = function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return function(e, t) {
                        var n = []
                          , r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            o = e;
                        } finally {
                            try {
                                !r && u.return && u.return();
                            } finally {
                                if (i)
                                    throw o;
                            }
                        }
                        return n;
                    }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
              , s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }
            ;
            t.newUserSync = a;
            var r, c = function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e,
                    t;
                }
            }(n(0)), f = n(3), o = n(5), l = (r = o) && r.__esModule ? r : {
                default: r
            };
            function a(e) {
                var t = {}
                  , o = {
                    image: [],
                    iframe: []
                }
                  , n = !1
                  , a = {}
                  , u = {
                    image: !1,
                    iframe: !1
                }
                  , d = e.config;
                function r() {
                    if (d.syncEnabled && e.browserSupportsCookies && !n) {
                        try {
                            !function() {
                                if (!d.pixelEnabled && !u.image)
                                    return;
                                c.shuffle(o.image).forEach(function(e) {
                                    var t = i(e, 2)
                                      , n = t[0]
                                      , r = t[1];
                                    c.logMessage("Invoking image pixel user sync for bidder: " + n),
                                    c.triggerPixel(r);
                                });
                            }(),
                            function() {
                                if (!d.iframeEnabled && !u.iframe)
                                    return;
                                c.shuffle(o.iframe).forEach(function(e) {
                                    var t = i(e, 2)
                                      , n = t[0]
                                      , r = t[1];
                                    c.logMessage("Invoking iframe user sync for bidder: " + n),
                                    c.insertUserSyncIframe(r);
                                });
                            }();
                        } catch (e) {
                            return c.logError("Error firing user syncs", e);
                        }
                        o = {
                            image: [],
                            iframe: []
                        },
                        n = !0;
                    }
                }
                return f.config.getConfig("userSync", function(e) {
                    d = s(d, e.userSync);
                }),
                t.registerSync = function(e, t, n) {
                    if (!d.syncEnabled || !c.isArray(o[e]))
                        return c.logWarn('User sync type "' + e + '" not supported');
                    if (!t)
                        return c.logWarn("Bidder is required for registering sync");
                    if (Number(a[t]) >= d.syncsPerBidder)
                        return c.logWarn('Number of user syncs exceeded for "' + t + '"');
                    if (d.filterSettings) {
                        if (function(e, t) {
                            var n = d.filterSettings;
                            if (function(e, t) {
                                if (e.all && e[t])
                                    return c.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.' + t + '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'),
                                    !1;
                                var n = e.all ? e.all : e[t]
                                  , r = e.all ? "all" : t;
                                if (!n)
                                    return !1;
                                var i = n.filter
                                  , o = n.bidders;
                                if (i && "include" !== i && "exclude" !== i)
                                    return c.logWarn('UserSync "filterSettings.' + r + ".filter\" setting '" + i + "' is not a valid option; use either 'include' or 'exclude'."),
                                    !1;
                                if ("*" !== o && !(Array.isArray(o) && 0 < o.length && o.every(function(e) {
                                    return c.isStr(e) && "*" !== e;
                                })))
                                    return c.logWarn('Detected an invalid setup in userSync "filterSettings.' + r + ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."),
                                    !1;
                                return !0;
                            }(n, e)) {
                                u[e] = !0;
                                var r = n.all ? n.all : n[e]
                                  , i = "*" === r.bidders ? [t] : r.bidders
                                  , o = r.filter || "include"
                                  , a = {
                                    include: function(e, t) {
                                        return !(0,
                                        l.default)(e, t);
                                    },
                                    exclude: function(e, t) {
                                        return (0,
                                        l.default)(e, t);
                                    }
                                };
                                return a[o](i, t);
                            }
                            return !1;
                        }(e, t))
                            return c.logWarn("Bidder '" + t + "' is not permitted to register their userSync " + e + " pixels as per filterSettings config.");
                    } else if (d.enabledBidders && d.enabledBidders.length && d.enabledBidders.indexOf(t) < 0)
                        return c.logWarn('Bidder "' + t + '" not permitted to register their userSync pixels.');
                    var r, i;
                    o[e].push([t, n]),
                    (r = a)[i = t] ? r[i] += 1 : r[i] = 1,
                    a = r;
                }
                ,
                t.syncUsers = function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (e)
                        return setTimeout(r, Number(e));
                    r();
                }
                ,
                t.triggerUserSyncs = function() {
                    d.enableOverride && t.syncUsers();
                }
                ,
                t;
            }
            f.config.setDefaults({
                userSync: {
                    syncEnabled: !0,
                    pixelEnabled: !0,
                    syncsPerBidder: 5,
                    syncDelay: 3e3
                }
            });
            var u = !c.isSafariBrowser() && c.cookiesAreEnabled();
            t.userSync = a({
                config: f.config.getConfig("userSync"),
                browserSupportsCookies: u
            });
        },
        19: function(e, t) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n);
        },
        2: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.NATIVE = "native",
            t.VIDEO = "video",
            t.BANNER = "banner";
        },
        20: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }
              , d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }
            ;
            t.createHook = function(r, i, e) {
                var u = [{
                    fn: i,
                    priority: 0
                }]
                  , o = {
                    sync: function() {
                        for (var t = this, e = arguments.length, n = Array(e), r = 0; r < e; r++)
                            n[r] = arguments[r];
                        u.forEach(function(e) {
                            e.fn.apply(t, n);
                        });
                    },
                    asyncSeries: function() {
                        for (var o = this, e = arguments.length, t = Array(e), n = 0; n < e; n++)
                            t[n] = arguments[n];
                        var a = 0;
                        return u[a].fn.apply(this, t.concat(function e() {
                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                                n[r] = arguments[r];
                            var i = u[++a];
                            if ("object" === (void 0 === i ? "undefined" : d(i)) && "function" == typeof i.fn)
                                return i.fn.apply(o, n.concat(e));
                        }));
                    }
                };
                if (!o[r])
                    throw "invalid hook type";
                var t = {
                    addHook: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10;
                        "function" == typeof e && (u.push({
                            fn: e,
                            priority: t
                        }),
                        u.sort(function(e, t) {
                            return t.priority - e.priority;
                        }));
                    },
                    removeHook: function(t) {
                        u = u.filter(function(e) {
                            return e.fn === i || e.fn !== t;
                        });
                    },
                    hasHook: function(t) {
                        return u.some(function(e) {
                            return e.fn === t;
                        });
                    }
                };
                "string" == typeof e && (s[e] = t);
                return a(function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    if (1 === u.length && u[0].fn === i)
                        return i.apply(this, t);
                    return o[r].apply(this, t);
                }, t);
            }
            ;
            var s = t.hooks = {};
        },
        207: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.store = function(e, t) {
                var n = {
                    puts: e.map(a)
                };
                (0,
                i.ajax)(o.config.getConfig("cache.url"), (r = t,
                {
                    success: function(e) {
                        var t = void 0;
                        try {
                            t = JSON.parse(e).responses;
                        } catch (e) {
                            return void r(e, []);
                        }
                        t ? r(null, t) : r(new Error("The cache server didn't respond with a responses property."), []);
                    },
                    error: function(e, t) {
                        r(new Error("Error storing video ad in the cache: " + e + ": " + JSON.stringify(t)), []);
                    }
                }), JSON.stringify(n), {
                    contentType: "text/plain",
                    withCredentials: !0
                });
                var r;
            }
            ,
            t.getCacheUrl = function(e) {
                return o.config.getConfig("cache.url") + "?uuid=" + e;
            }
            ;
            var i = n(7)
              , o = n(3);
            function a(e) {
                var t, n;
                return {
                    type: "xml",
                    value: e.vastXml ? e.vastXml : (t = e.vastUrl,
                    n = e.vastImpUrl,
                    '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' + t + "]]></VASTAdTagURI>\n        <Impression>" + (n ? "<![CDATA[" + n + "]]>" : "") + "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")
                };
            }
        },
        21: function(e, t, n) {
            n(105),
            e.exports = n(13).Array.findIndex;
        },
        22: function(e, t, n) {
            "use strict";
            var r, i = n(5), o = (r = i) && r.__esModule ? r : {
                default: r
            }, a = function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e,
                    t;
                }
            }(n(0));
            var u = {}
              , d = ["criteo"];
            function s(e, t) {
                var n = document.createElement("script");
                n.type = "text/javascript",
                n.async = !0,
                t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
                    "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null,
                    t());
                }
                : n.onload = function() {
                    t();
                }
                ),
                n.src = e;
                var r = document.getElementsByTagName("head");
                (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild);
            }
            t.loadExternalScript = function(e, t) {
                if (t && e) {
                    if ((0,
                    o.default)(d, t)) {
                        if (!u[e]) {
                            a.logWarn("module " + t + " is loading external JavaScript");
                            var n = document.createElement("script");
                            n.type = "text/javascript",
                            n.async = !0,
                            n.src = e,
                            a.insertElement(n),
                            u[e] = !0;
                        }
                    } else
                        a.logError(t + " not whitelisted for loading external JavaScript");
                } else
                    a.logError("cannot load external script without url and moduleCode");
            }
            ,
            t.loadScript = function(t, e, n) {
                t ? n ? u[t] ? e && "function" == typeof e && (u[t].loaded ? e() : u[t].callbacks.push(e)) : (u[t] = {
                    loaded: !1,
                    callbacks: []
                },
                e && "function" == typeof e && u[t].callbacks.push(e),
                s(t, function() {
                    u[t].loaded = !0;
                    try {
                        for (var e = 0; e < u[t].callbacks.length; e++)
                            u[t].callbacks[e]();
                    } catch (e) {
                        a.logError("Error executing callback", "adloader.js:loadScript", e);
                    }
                })) : s(t, e) : a.logError("Error attempting to request empty URL", "adloader.js:loadScript");
            }
            ;
        },
        23: function(e, t, n) {
            e.exports = !n(33)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            });
        },
        24: function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1);
            }
            ;
        },
        25: function(e, t) {
            e.exports = function(e) {
                if (null == e)
                    throw TypeError("Can't call method on  " + e);
                return e;
            }
            ;
        },
        26: function(e, t, n) {
            var r = n(59)("wks")
              , i = n(61)
              , o = n(19).Symbol
              , a = "function" == typeof o;
            (e.exports = function(e) {
                return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e));
            }
            ).store = r;
        },
        27: function(e, t) {
            e.exports = function() {}
            ;
        },
        28: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = function(e) {
                var t = e;
                return {
                    callBids: function() {},
                    setBidderCode: function(e) {
                        t = e;
                    },
                    getBidderCode: function() {
                        return t;
                    }
                };
            }
            ;
        },
        29: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.auctionManager = void 0,
            t.newAuctionManager = d;
            var r, i = n(0), s = n(43), o = n(10), a = (r = o) && r.__esModule ? r : {
                default: r
            };
            var u = n(4);
            function d() {
                var d = []
                  , r = {};
                return r.addWinningBid = function(t) {
                    var e = (0,
                    a.default)(d, function(e) {
                        return e.getAuctionId() === t.auctionId;
                    });
                    e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid");
                }
                ,
                r.getAllWinningBids = function() {
                    return d.map(function(e) {
                        return e.getWinningBids();
                    }).reduce(i.flatten, []);
                }
                ,
                r.getBidsRequested = function() {
                    return d.map(function(e) {
                        return e.getBidRequests();
                    }).reduce(i.flatten, []);
                }
                ,
                r.getBidsReceived = function() {
                    return d.map(function(e) {
                        if (e.getAuctionStatus() === s.AUCTION_COMPLETED)
                            return e.getBidsReceived();
                    }).reduce(i.flatten, []).filter(function(e) {
                        return e;
                    });
                }
                ,
                r.getAdUnits = function() {
                    return d.map(function(e) {
                        return e.getAdUnits();
                    }).reduce(i.flatten, []);
                }
                ,
                r.getAdUnitCodes = function() {
                    return d.map(function(e) {
                        return e.getAdUnitCodes();
                    }).reduce(i.flatten, []).filter(i.uniques);
                }
                ,
                r.createAuction = function(e) {
                    var t, n = e.adUnits, r = e.adUnitCodes, i = e.callback, o = e.cbTimeout, a = e.labels, u = (0,
                    s.newAuction)({
                        adUnits: n,
                        adUnitCodes: r,
                        callback: i,
                        cbTimeout: o,
                        labels: a
                    });
                    return t = u,
                    d.push(t),
                    u;
                }
                ,
                r.findBidByAdId = function(t) {
                    return (0,
                    a.default)(d.map(function(e) {
                        return e.getBidsReceived();
                    }).reduce(i.flatten, []), function(e) {
                        return e.adId === t;
                    });
                }
                ,
                r.getStandardBidderAdServerTargeting = function() {
                    return (0,
                    s.getStandardBidderSettings)()[u.JSON_MAPPING.ADSERVER_TARGETING];
                }
                ,
                r.setStatusForBids = function(e, t) {
                    var n = r.findBidByAdId(e);
                    n && (n.status = t);
                }
                ,
                r;
            }
            t.auctionManager = d();
        },
        3: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.config = t.RANDOM = void 0;
            var d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }
              , s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }
            ;
            t.newConfig = u;
            var r = n(31)
              , c = o(n(10))
              , f = o(n(5))
              , i = n(20);
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var l = n(0)
              , g = !1
              , p = 3e3
              , v = window.location.origin
              , y = 100
              , m = !0
              , b = !1
              , h = 200
              , a = t.RANDOM = "random"
              , S = {};
            S[a] = !0,
            S.fixed = !0;
            var E = a
              , A = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            }
              , T = "*";
            function u() {
                var o = []
                  , a = void 0
                  , u = void 0;
                function e() {
                    function i(t) {
                        return (0,
                        c.default)(Object.keys(A), function(e) {
                            return t === A[e];
                        });
                    }
                    function o(e) {
                        if (!e)
                            return l.logError("Prebid Error: no value passed to `setPriceGranularity()`"),
                            !1;
                        if ("string" == typeof e)
                            i(e) || l.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                        else if ("object" === (void 0 === e ? "undefined" : s(e)) && !(0,
                        r.isValidPriceConfig)(e))
                            return l.logError("Invalid custom price value passed to `setPriceGranularity()`"),
                            !1;
                        return !0;
                    }
                    a = {},
                    u = {
                        _debug: g,
                        get debug() {
                            return this._debug;
                        },
                        set debug(e) {
                            this._debug = e;
                        },
                        _bidderTimeout: p,
                        get bidderTimeout() {
                            return this._bidderTimeout;
                        },
                        set bidderTimeout(e) {
                            this._bidderTimeout = e;
                        },
                        _publisherDomain: v,
                        get publisherDomain() {
                            return this._publisherDomain;
                        },
                        set publisherDomain(e) {
                            this._publisherDomain = e;
                        },
                        _cookieSyncDelay: y,
                        get cookieSyncDelay() {
                            return pbjs.cookieSyncDelay || this._cookieSyncDelay;
                        },
                        set cookieSyncDelay(e) {
                            this._cookieSyncDelay = e;
                        },
                        _priceGranularity: A.MEDIUM,
                        set priceGranularity(e) {
                            o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : A.MEDIUM : "object" === (void 0 === e ? "undefined" : s(e)) && (this._customPriceBucket = e,
                            this._priceGranularity = A.CUSTOM,
                            l.logMessage("Using custom price granularity")));
                        },
                        get priceGranularity() {
                            return this._priceGranularity;
                        },
                        _customPriceBucket: {},
                        get customPriceBucket() {
                            return this._customPriceBucket;
                        },
                        _mediaTypePriceGranularity: {},
                        get mediaTypePriceGranularity() {
                            return this._mediaTypePriceGranularity;
                        },
                        set mediaTypePriceGranularity(n) {
                            var r = this;
                            this._mediaTypePriceGranularity = Object.keys(n).reduce(function(e, t) {
                                return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : "object" === (void 0 === n ? "undefined" : s(n)) && (e[t] = n[t],
                                l.logMessage("Using custom price granularity for " + t)) : l.logWarn("Invalid price granularity for media type: " + t),
                                e;
                            }, {});
                        },
                        _sendAllBids: m,
                        get enableSendAllBids() {
                            return this._sendAllBids;
                        },
                        set enableSendAllBids(e) {
                            this._sendAllBids = e;
                        },
                        _bidderSequence: E,
                        get bidderSequence() {
                            return this._bidderSequence;
                        },
                        set bidderSequence(e) {
                            S[e] ? this._bidderSequence = e : l.logWarn("Invalid order: " + e + ". Bidder Sequence was not set.");
                        },
                        _timoutBuffer: h,
                        get timeoutBuffer() {
                            return this._timoutBuffer;
                        },
                        set timeoutBuffer(e) {
                            this._timoutBuffer = e;
                        },
                        _disableAjaxTimeout: b,
                        get disableAjaxTimeout() {
                            return this._disableAjaxTimeout;
                        },
                        set disableAjaxTimeout(e) {
                            this._disableAjaxTimeout = e;
                        }
                    };
                }
                var t = (0,
                i.createHook)("asyncSeries", function(n) {
                    if ("object" === (void 0 === n ? "undefined" : s(n))) {
                        var i, t, e = Object.keys(n), r = {};
                        e.forEach(function(e) {
                            var t = n[e];
                            "object" === s(a[e]) && "object" === (void 0 === t ? "undefined" : s(t)) && (t = d({}, a[e], t)),
                            r[e] = u[e] = t;
                        }),
                        i = r,
                        t = Object.keys(i),
                        o.filter(function(e) {
                            return (0,
                            f.default)(t, e.topic);
                        }).forEach(function(e) {
                            var t, n, r;
                            e.callback((t = {},
                            n = e.topic,
                            r = i[e.topic],
                            n in t ? Object.defineProperty(t, n, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[n] = r,
                            t));
                        }),
                        o.filter(function(e) {
                            return e.topic === T;
                        }).forEach(function(e) {
                            return e.callback(i);
                        });
                    } else
                        l.logError("setConfig options must be an object");
                });
                return e(),
                {
                    getConfig: function() {
                        if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                            var e = arguments.length <= 0 ? void 0 : arguments[0];
                            return e ? l.deepAccess(u, e) : u;
                        }
                        return function(e, t) {
                            var n = t;
                            if ("string" != typeof e && (n = e,
                            e = T),
                            "function" == typeof n)
                                return o.push({
                                    topic: e,
                                    callback: n
                                }),
                                function() {
                                    o.splice(o.indexOf(t), 1);
                                }
                                ;
                            l.logError("listener must be a function");
                        }
                        .apply(void 0, arguments);
                    },
                    setConfig: t,
                    setDefaults: function(e) {
                        "object" === (void 0 === a ? "undefined" : s(a)) ? (d(a, e),
                        d(u, e)) : l.logError("defaults must be an object");
                    },
                    resetConfig: e
                };
            }
            t.config = u();
        },
        30: function(tr, ur) {
            var vr;
            vr = function() {
                return this;
            }();
            try {
                vr = vr || Function("return this")() || eval("this");
            } catch (e) {
                "object" == typeof window && (vr = window);
            }
            tr.exports = vr;
        },
        31: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isValidPriceConfig = t.getPriceBucketString = void 0;
            var r, i = n(10), v = (r = i) && r.__esModule ? r : {
                default: r
            };
            var o = n(0)
              , y = 2
              , a = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .5
                }]
            }
              , u = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .1
                }]
            }
              , d = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .01
                }]
            }
              , s = {
                buckets: [{
                    min: 0,
                    max: 3,
                    increment: .01
                }, {
                    min: 3,
                    max: 8,
                    increment: .05
                }, {
                    min: 8,
                    max: 20,
                    increment: .5
                }]
            }
              , c = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .05
                }, {
                    min: 5,
                    max: 10,
                    increment: .1
                }, {
                    min: 10,
                    max: 20,
                    increment: .5
                }]
            };
            function f(n, e, r) {
                var i = "";
                if (!m(e))
                    return i;
                var t, o, a, u, d, s, c, f, l, g = e.buckets.reduce(function(e, t) {
                    return e.max > t.max ? e : t;
                }, {
                    max: 0
                }), p = (0,
                v.default)(e.buckets, function(e) {
                    if (n > g.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = y),
                        i = (e.max * r).toFixed(t);
                    } else if (n <= e.max * r && n >= e.min * r)
                        return e;
                });
                return p && (t = n,
                a = r,
                u = void 0 !== (o = p).precision ? o.precision : y,
                d = o.increment * a,
                s = o.min * a,
                c = Math.pow(10, u + 2),
                f = (t * c - s * c) / (d * c),
                l = Math.floor(f) * d + s,
                i = (l = Number(l.toFixed(10))).toFixed(u)),
                i;
            }
            function m(e) {
                if (o.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets))
                    return !1;
                var t = !0;
                return e.buckets.forEach(function(e) {
                    void 0 !== e.min && e.max && e.increment || (t = !1);
                }),
                t;
            }
            t.getPriceBucketString = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1
                  , r = parseFloat(e);
                return isNaN(r) && (r = ""),
                {
                    low: "" === r ? "" : f(e, a, n),
                    med: "" === r ? "" : f(e, u, n),
                    high: "" === r ? "" : f(e, d, n),
                    auto: "" === r ? "" : f(e, c, n),
                    dense: "" === r ? "" : f(e, s, n),
                    custom: "" === r ? "" : f(e, t, n)
                };
            }
            ,
            t.isValidPriceConfig = m;
        },
        32: function(e, t, n) {
            var o = n(47);
            e.exports = function(r, i, e) {
                if (o(r),
                void 0 === i)
                    return r;
                switch (e) {
                case 1:
                    return function(e) {
                        return r.call(i, e);
                    }
                    ;
                case 2:
                    return function(e, t) {
                        return r.call(i, e, t);
                    }
                    ;
                case 3:
                    return function(e, t, n) {
                        return r.call(i, e, t, n);
                    }
                    ;
                }
                return function() {
                    return r.apply(i, arguments);
                }
                ;
            }
            ;
        },
        33: function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e();
                } catch (e) {
                    return !0;
                }
            }
            ;
        },
        34: function(e, t, n) {
            var h = n(32)
              , S = n(35)
              , E = n(56)
              , A = n(36)
              , r = n(57);
            e.exports = function(f, e) {
                var l = 1 == f
                  , g = 2 == f
                  , p = 3 == f
                  , v = 4 == f
                  , y = 6 == f
                  , m = 5 == f || y
                  , b = e || r;
                return function(e, t, n) {
                    for (var r, i, o = E(e), a = S(o), u = h(t, n, 3), d = A(a.length), s = 0, c = l ? b(e, d) : g ? b(e, 0) : void 0; s < d; s++)
                        if ((m || s in a) && (i = u(r = a[s], s, o),
                        f))
                            if (l)
                                c[s] = i;
                            else if (i)
                                switch (f) {
                                case 3:
                                    return !0;
                                case 5:
                                    return r;
                                case 6:
                                    return s;
                                case 2:
                                    c.push(r);
                                }
                            else if (v)
                                return !1;
                    return y ? -1 : p || v ? v : c;
                }
                ;
            }
            ;
        },
        35: function(e, t, n) {
            var r = n(24);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == r(e) ? e.split("") : Object(e);
            }
            ;
        },
        36: function(e, t, n) {
            var r = n(37)
              , i = Math.min;
            e.exports = function(e) {
                return 0 < e ? i(r(e), 9007199254740991) : 0;
            }
            ;
        },
        37: function(e, t) {
            var n = Math.ceil
              , r = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e);
            }
            ;
        },
        38: function(e, t, n) {
            var r = n(24);
            e.exports = Array.isArray || function(e) {
                return "Array" == r(e);
            }
            ;
        },
        39: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.adunitCounter = void 0;
            var r = n(0)
              , i = {};
            var o = {
                incrementCounter: function(e) {
                    return i[e] = i[e] || {},
                    i[e].counter = (0,
                    r.deepAccess)(i, e + ".counter") + 1 || 1,
                    i[e].counter;
                },
                getCounter: function(e) {
                    return (0,
                    r.deepAccess)(i, e + ".counter") || 0;
                }
            };
            t.adunitCounter = o;
        },
        4: function(e, t) {
            e.exports = {
                JSON_MAPPING: {
                    PL_CODE: "code",
                    PL_SIZE: "sizes",
                    PL_BIDS: "bids",
                    BD_BIDDER: "bidder",
                    BD_ID: "paramsd",
                    BD_PL_ID: "placementId",
                    ADSERVER_TARGETING: "adserverTargeting",
                    BD_SETTING_STANDARD: "standard"
                },
                REPO_AND_VERSION: "prebid_prebid_1.26.0-pre",
                DEBUG_MODE: "pbjs_debug",
                STATUS: {
                    GOOD: 1,
                    NO_BID: 2
                },
                CB: {
                    TYPE: {
                        ALL_BIDS_BACK: "allRequestedBidsBack",
                        AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                        BID_WON: "bidWon",
                        REQUEST_BIDS: "requestBids"
                    }
                },
                EVENTS: {
                    AUCTION_INIT: "auctionInit",
                    AUCTION_END: "auctionEnd",
                    BID_ADJUSTMENT: "bidAdjustment",
                    BID_TIMEOUT: "bidTimeout",
                    BID_REQUESTED: "bidRequested",
                    BID_RESPONSE: "bidResponse",
                    BID_WON: "bidWon",
                    BIDDER_DONE: "bidderDone",
                    SET_TARGETING: "setTargeting",
                    REQUEST_BIDS: "requestBids",
                    ADD_AD_UNITS: "addAdUnits",
                    AD_RENDER_FAILED: "adRenderFailed"
                },
                AD_RENDER_FAILED_REASON: {
                    PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                    NO_AD: "noAd",
                    EXCEPTION: "exception",
                    CANNOT_FIND_AD: "cannotFindAd",
                    MISSING_DOC_OR_ADID: "missingDocOrAdid"
                },
                EVENT_ID_PATHS: {
                    bidWon: "adUnitCode"
                },
                GRANULARITY_OPTIONS: {
                    LOW: "low",
                    MEDIUM: "medium",
                    HIGH: "high",
                    AUTO: "auto",
                    DENSE: "dense",
                    CUSTOM: "custom"
                },
                TARGETING_KEYS: ["hb_bidder", "hb_adid", "hb_pb", "hb_size", "hb_deal", "hb_source", "hb_format"],
                S2S: {
                    SRC: "s2s",
                    DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                    SYNCED_BIDDERS_KEY: "pbjsSyncs"
                }
            };
        },
        40: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.hasNonVideoBidder = t.videoBidder = t.videoAdUnit = t.OUTSTREAM = void 0,
            t.isValidVideoBid = function(e, t) {
                var n = (0,
                o.getBidRequest)(e.adId, t)
                  , r = n && (0,
                o.deepAccess)(n, "mediaTypes.video")
                  , i = r && (0,
                o.deepAccess)(r, "context");
                if (!n || r && i !== s)
                    return a.config.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0,
                    o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),
                    !1);
                if (i === s)
                    return !(!e.renderer && !n.renderer);
                return !0;
            }
            ;
            var r, i = n(8), o = n(0), a = n(3), u = n(5), d = (r = u) && r.__esModule ? r : {
                default: r
            };
            var s = t.OUTSTREAM = "outstream"
              , c = (t.videoAdUnit = function(e) {
                var t = "video" === e.mediaType
                  , n = (0,
                o.deepAccess)(e, "mediaTypes.video");
                return t || n;
            }
            ,
            t.videoBidder = function(e) {
                return (0,
                d.default)(i.videoAdapters, e.bidder);
            }
            );
            t.hasNonVideoBidder = function(e) {
                return e.bids.filter(function(e) {
                    return !c(e);
                }).length;
            }
            ;
        },
        41: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getGlobal = function() {
                return window.pbjs;
            }
            ,
            window.pbjs = window.pbjs || {},
            window.pbjs.cmd = window.pbjs.cmd || [],
            window.pbjs.que = window.pbjs.que || [];
        },
        42: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.targeting = t.isBidNotExpired = t.RENDERED = t.BID_TARGETING_SET = void 0;
            var h = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }
            ;
            t.getHighestCpmBidsFromBidPool = R,
            t.newTargeting = c;
            var r, S = n(0), E = n(3), A = n(17), i = n(29), o = n(5), T = (r = o) && r.__esModule ? r : {
                default: r
            };
            function I(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n;
                }
                return Array.from(e);
            }
            function _(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e;
            }
            var w = n(0)
              , C = n(4)
              , O = []
              , a = t.BID_TARGETING_SET = "targetingSet"
              , u = t.RENDERED = "rendered"
              , B = 20
              , d = (t.isBidNotExpired = function(e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > (0,
                S.timestamp)();
            }
            ,
            function(e) {
                return e && (e.status && !(0,
                T.default)([a, u], e.status) || !e.status);
            }
            );
            function R(e, n) {
                var r = []
                  , i = (0,
                S.groupBy)(e, "adUnitCode");
                return Object.keys(i).forEach(function(e) {
                    var t = (0,
                    S.groupBy)(i[e], "bidderCode");
                    Object.keys(t).forEach(function(e) {
                        return r.push(t[e].reduce(n, s()));
                    });
                }),
                r;
            }
            function s(e) {
                return {
                    adUnitCode: e,
                    cpm: 0,
                    adserverTargeting: {},
                    timeToRespond: 0
                };
            }
            function c(n) {
                var g = {};
                function p(e) {
                    return "string" == typeof e ? [e] : w.isArray(e) ? e : n.getAdUnitCodes() || [];
                }
                function v() {
                    return R(n.getBidsReceived().filter(d).filter(t.isBidNotExpired), S.getOldestHighestCpmBid);
                }
                function y() {
                    return n.getStandardBidderAdServerTargeting().map(function(e) {
                        return e.key;
                    }).concat(C.TARGETING_KEYS).filter(S.uniques);
                }
                function m(r, i, e, t) {
                    return Object.keys(i.adserverTargeting).filter(o()).forEach(function(e) {
                        var t, n;
                        r.length && r.filter((n = e,
                        function(e) {
                            return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n];
                        }
                        )).forEach((t = e,
                        function(e) {
                            w.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]),
                            e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(S.uniques),
                            delete i.adserverTargeting[t];
                        }
                        ));
                    }),
                    r.push(i),
                    r;
                }
                function o() {
                    var t = y();
                    return function(e) {
                        return -1 === t.indexOf(e);
                    }
                    ;
                }
                function b(t) {
                    return _({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(o()).map(function(e) {
                        return _({}, e.substring(0, B), [t.adserverTargeting[e]]);
                    }));
                }
                return g.resetPresetTargeting = function(e) {
                    if ((0,
                    S.isGptPubadsDefined)()) {
                        var t = p(e)
                          , r = n.getAdUnits().filter(function(e) {
                            return (0,
                            T.default)(t, e.code);
                        });
                        window.googletag.pubads().getSlots().forEach(function(n) {
                            O.forEach(function(t) {
                                r.forEach(function(e) {
                                    e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null);
                                });
                            });
                        });
                    }
                }
                ,
                g.getAllTargeting = function(e) {
                    var r, t, i, n, o, a, u, d, s, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : v(), f = p(e), l = (a = f,
                    u = c,
                    d = g.getWinningBids(a, u),
                    s = y(),
                    d = d.map(function(o) {
                        return _({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function(e) {
                            return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === s.indexOf(e);
                        }).reduce(function(e, t) {
                            var n = [o.adserverTargeting[t]]
                              , r = _({}, t.substring(0, B), n);
                            if ("hb_deal" === t) {
                                var i = _({}, (t + "_" + o.bidderCode).substring(0, B), n);
                                return [].concat(I(e), [r, i]);
                            }
                            return [].concat(I(e), [r]);
                        }, []));
                    })).concat((n = f,
                    o = c,
                    o.filter(function(e) {
                        return (0,
                        T.default)(n, e.adUnitCode);
                    }).map(function(e) {
                        return h({}, e);
                    }).reduce(m, []).map(b).filter(function(e) {
                        return e;
                    }))).concat(E.config.getConfig("enableSendAllBids") ? (r = f,
                    t = c,
                    i = C.TARGETING_KEYS.concat(A.NATIVE_TARGETING_KEYS),
                    R(t, S.getHighestCpm).map(function(t) {
                        if (t.adserverTargeting && r && (w.isArray(r) && (0,
                        T.default)(r, t.adUnitCode) || "string" == typeof r && t.adUnitCode === r))
                            return _({}, t.adUnitCode, (n = t,
                            i.filter(function(e) {
                                return void 0 !== t.adserverTargeting[e];
                            }).map(function(e) {
                                return _({}, (e + "_" + n.bidderCode).substring(0, B), [n.adserverTargeting[e]]);
                            })));
                        var n;
                    }).filter(function(e) {
                        return e;
                    })) : []);
                    return l.map(function(t) {
                        Object.keys(t).map(function(e) {
                            t[e].map(function(e) {
                                -1 === O.indexOf(Object.keys(e)[0]) && (O = Object.keys(e).concat(O));
                            });
                        });
                    }),
                    l = l.map(function(e) {
                        return _({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                            return _({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "));
                        }).reduce(function(e, t) {
                            return h(t, e);
                        }, {}));
                    }).reduce(function(e, t) {
                        var n = Object.keys(t)[0];
                        return e[n] = h({}, e[n], t[n]),
                        e;
                    }, {}),
                    f.forEach(function(e) {
                        l[e] || (l[e] = {});
                    }),
                    l;
                }
                ,
                g.setTargetingForGPT = function(i, e) {
                    window.googletag.pubads().getSlots().forEach(function(r) {
                        Object.keys(i).filter(e ? e(r) : (0,
                        S.isAdUnitCodeMatchingSlot)(r)).forEach(function(n) {
                            return Object.keys(i[n]).forEach(function(t) {
                                var e = i[n][t].split(",");
                                (e = 1 < e.length ? [e] : e).map(function(e) {
                                    return w.logMessage("Attempting to set key value for slot: " + r.getSlotElementId() + " key: " + t + " value: " + e),
                                    e;
                                }).forEach(function(e) {
                                    r.setTargeting(t, e);
                                });
                            });
                        });
                    });
                }
                ,
                g.getWinningBids = function(e) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : v()
                      , t = p(e);
                    return n.filter(function(e) {
                        return (0,
                        T.default)(t, e.adUnitCode);
                    }).filter(function(e) {
                        return 0 < e.cpm;
                    }).map(function(e) {
                        return e.adUnitCode;
                    }).filter(S.uniques).map(function(t) {
                        return n.filter(function(e) {
                            return e.adUnitCode === t ? e : null;
                        }).reduce(S.getHighestCpm, s(t));
                    });
                }
                ,
                g.setTargetingForAst = function() {
                    var r = g.getAllTargeting();
                    Object.keys(r).forEach(function(n) {
                        return Object.keys(r[n]).forEach(function(e) {
                            if (w.logMessage("Attempting to set targeting for targetId: " + n + " key: " + e + " value: " + r[n][e]),
                            w.isStr(r[n][e]) || w.isArray(r[n][e])) {
                                var t = {};
                                e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e],
                                window.apntag.setKeywords(n, t);
                            }
                        });
                    });
                }
                ,
                g.isApntagDefined = function() {
                    if (window.apntag && w.isFn(window.apntag.setKeywords))
                        return !0;
                }
                ,
                g;
            }
            t.targeting = c(i.auctionManager);
        },
        43: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.addBidResponse = t.AUCTION_COMPLETED = t.AUCTION_IN_PROGRESS = t.AUCTION_STARTED = void 0;
            var m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }
              , b = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }
            ;
            t.newAuction = function(e) {
                var f = e.adUnits
                  , t = e.adUnitCodes
                  , n = e.callback
                  , r = e.cbTimeout
                  , i = e.labels
                  , c = f
                  , l = i
                  , g = t
                  , p = []
                  , v = []
                  , y = void 0
                  , m = O.generateUUID()
                  , b = void 0
                  , h = n
                  , S = void 0
                  , E = r
                  , o = [];
                function A(e, t) {
                    if (t && clearTimeout(S),
                    null != h) {
                        var n = [];
                        e && (O.logMessage("Auction " + m + " timedOut"),
                        u = v,
                        d = (a = p).filter(function(e) {
                            return !e.doneCbCallCount;
                        }).map(function(e) {
                            return e.bidderCode;
                        }).filter(I.uniques),
                        s = u.map(function(e) {
                            return e.bidder;
                        }).filter(I.uniques),
                        c = d.filter(function(e) {
                            return !(0,
                            w.default)(s, e);
                        }),
                        (n = a.map(function(e) {
                            return (e.bids || []).filter(function(e) {
                                return (0,
                                w.default)(c, e.bidder);
                            });
                        }).reduce(I.flatten, []).map(function(e) {
                            return {
                                bidId: e.bidId,
                                bidder: e.bidder,
                                adUnitCode: e.adUnitCode,
                                auctionId: e.auctionId
                            };
                        })).length && R.emit(N.EVENTS.BID_TIMEOUT, n)),
                        R.emit(N.EVENTS.AUCTION_END, {
                            auctionId: m
                        });
                        try {
                            b = D;
                            var r = g
                              , i = v.filter(I.adUnitsFilter.bind(this, r)).reduce(V, {});
                            h.apply(pbjs, [i, e]);
                        } catch (e) {
                            O.logError("Error executing bidsBackHandler", null, e);
                        } finally {
                            n.length && B.callTimedOutBidders(f, n, E);
                            var o = _.config.getConfig("userSync") || {};
                            o.enableOverride || C(o.syncDelay);
                        }
                        h = null;
                    }
                    var a, u, d, s, c;
                }
                function T(e) {
                    O.logInfo("Bids Received for Auction with id: " + m, v),
                    b = D,
                    A(!1, !0);
                }
                return {
                    addBidReceived: function(e) {
                        v = v.concat(e);
                    },
                    executeCallback: A,
                    callBids: function() {
                        var o = this;
                        b = U,
                        y = Date.now();
                        var a = B.makeBidRequests(c, y, m, E, l);
                        O.logInfo("Bids Requested for Auction with id: " + m, a),
                        a.forEach(function(e) {
                            var t;
                            t = e,
                            p = p.concat(t);
                        });
                        var u = {}
                          , e = {
                            bidRequests: a,
                            run: function() {
                                var e, t;
                                e = A.bind(null, !0),
                                t = setTimeout(e, E),
                                S = t,
                                b = j;
                                var n = {
                                    timestamp: y,
                                    auctionId: m,
                                    timeout: E
                                };
                                R.emit(N.EVENTS.AUCTION_INIT, n);
                                var r = G(T, o)
                                  , i = {
                                    auctionAddBidResponse: r.addBidResponse
                                };
                                B.callBids(c, a, q.bind(i), r.adapterDone, {
                                    request: function(e, t) {
                                        s(k, t),
                                        s(u, e),
                                        x[e] || (x[e] = {
                                            SRA: !0,
                                            origin: t
                                        }),
                                        1 < u[e] && (x[e].SRA = !1);
                                    },
                                    done: function(e) {
                                        k[e]--,
                                        M[0] && d(M[0]) && M.shift();
                                    }
                                }, E);
                            }
                        };
                        d(e) || (O.logWarn("queueing auction due to limited endpoint capacity"),
                        M.push(e));
                        function d(e) {
                            var r = !0
                              , i = _.config.getConfig("maxRequestsPerOrigin") || P;
                            return e.bidRequests.some(function(e) {
                                var t = 1
                                  , n = void 0 !== e.src && e.src === N.S2S.SRC ? "s2s" : e.bidderCode;
                                return x[n] && (!1 === x[n].SRA && (t = Math.min(e.bids.length, i)),
                                k[x[n].origin] + t > i && (r = !1)),
                                !r;
                            }),
                            r && e.run(),
                            r;
                        }
                        function s(e, t) {
                            void 0 === e[t] ? e[t] = 1 : e[t]++;
                        }
                    },
                    addWinningBid: function(e) {
                        o = o.concat(e),
                        B.callBidWonBidder(e.bidder, e, f);
                    },
                    getWinningBids: function() {
                        return o;
                    },
                    getTimeout: function() {
                        return E;
                    },
                    getAuctionId: function() {
                        return m;
                    },
                    getAuctionStatus: function() {
                        return b;
                    },
                    getAdUnits: function() {
                        return c;
                    },
                    getAdUnitCodes: function() {
                        return g;
                    },
                    getBidRequests: function() {
                        return p;
                    },
                    getBidsReceived: function() {
                        return v;
                    }
                };
            }
            ,
            t.auctionCallbacks = G,
            t.getStandardBidderSettings = u,
            t.getKeyValueTargetingPairs = F,
            t.adjustBids = s;
            var I = n(0)
              , h = n(31)
              , i = n(17)
              , S = n(207)
              , E = n(12)
              , _ = n(3)
              , r = n(18)
              , o = n(20)
              , A = a(n(10))
              , w = a(n(5))
              , T = n(40);
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var C = r.userSync.syncUsers
              , O = n(0)
              , B = n(8)
              , R = n(9)
              , N = n(4)
              , U = t.AUCTION_STARTED = "started"
              , j = t.AUCTION_IN_PROGRESS = "inProgress"
              , D = t.AUCTION_COMPLETED = "completed";
            R.on(N.EVENTS.BID_ADJUSTMENT, function(e) {
                s(e);
            });
            var P = 4
              , k = {}
              , x = {}
              , M = [];
            var q = t.addBidResponse = (0,
            o.createHook)("asyncSeries", function(e, t) {
                this.auctionAddBidResponse(e, t);
            }, "addBidResponse");
            function G(e, p) {
                var v = 0
                  , t = !1
                  , n = (0,
                I.delayExecution)(function() {
                    t = !0;
                }, p.getBidRequests().length);
                function y() {
                    v--,
                    t && 0 === v && e();
                }
                return {
                    addBidResponse: function(e, t) {
                        v++;
                        var n = p.getBidRequests()
                          , r = p.getAuctionId()
                          , i = (0,
                        I.getBidderRequest)(n, t.bidderCode, e)
                          , o = function(e) {
                            var t = e.adUnitCode
                              , n = e.bid
                              , r = e.bidRequest
                              , i = e.auctionId
                              , o = r.start
                              , a = b({}, n, {
                                auctionId: i,
                                responseTimestamp: (0,
                                I.timestamp)(),
                                requestTimestamp: o,
                                cpm: parseFloat(n.cpm) || 0,
                                bidder: n.bidderCode,
                                adUnitCode: t
                            });
                            a.timeToRespond = a.responseTimestamp - a.requestTimestamp,
                            R.emit(N.EVENTS.BID_ADJUSTMENT, a);
                            var u = r.bids && (0,
                            A.default)(r.bids, function(e) {
                                return e.adUnitCode == t;
                            })
                              , d = u && u.renderer;
                            d && d.url && (a.renderer = E.Renderer.install({
                                url: d.url
                            }),
                            a.renderer.setRender(d.render));
                            var s, c = _.config.getConfig("mediaTypePriceGranularity." + n.mediaType), f = (0,
                            h.getPriceBucketString)(a.cpm, "object" === (void 0 === c ? "undefined" : m(c)) ? c : _.config.getConfig("customPriceBucket"), _.config.getConfig("currency.granularityMultiplier"));
                            return a.pbLg = f.low,
                            a.pbMg = f.med,
                            a.pbHg = f.high,
                            a.pbAg = f.auto,
                            a.pbDg = f.dense,
                            a.pbCg = f.custom,
                            a.bidderCode && (0 < a.cpm || a.dealId) && (s = F(a.bidderCode, a)),
                            a.adserverTargeting = b(a.adserverTargeting || {}, s),
                            a;
                        }({
                            adUnitCode: e,
                            bid: t,
                            bidRequest: i,
                            auctionId: r
                        });
                        "video" === o.mediaType ? (a = p,
                        u = o,
                        d = i,
                        s = y,
                        c = !0,
                        f = (0,
                        I.getBidRequest)(u.adId, [d]),
                        l = f && (0,
                        I.deepAccess)(f, "mediaTypes.video"),
                        g = l && (0,
                        I.deepAccess)(l, "context"),
                        _.config.getConfig("cache.url") && g !== T.OUTSTREAM && (u.videoCacheKey ? u.vastUrl || (O.logError("videoCacheKey specified but not required vastUrl for video bid"),
                        c = !1) : (c = !1,
                        (0,
                        S.store)([u], function(e, t) {
                            e ? (O.logWarn("Failed to save to the video cache: " + e + ". Video bid must be discarded."),
                            W(a, u)) : (u.videoCacheKey = t[0].uuid,
                            u.vastUrl || (u.vastUrl = (0,
                            S.getCacheUrl)(u.videoCacheKey)),
                            z(a, u),
                            s());
                        }))),
                        c && (z(a, u),
                        s())) : (z(p, o),
                        y());
                        var a, u, d, s, c, f, l, g;
                    },
                    adapterDone: function() {
                        n(),
                        t && 0 === v && e();
                    }
                };
            }
            function W(e, t) {
                t.timeToRespond > e.getTimeout() + _.config.getConfig("timeoutBuffer") && e.executeCallback(!0);
            }
            function z(e, t) {
                R.emit(N.EVENTS.BID_RESPONSE, t),
                e.addBidReceived(t),
                W(e, t);
            }
            function u(e) {
                var t = _.config.getConfig("mediaTypePriceGranularity." + e)
                  , n = "string" == typeof e && t ? "string" == typeof t ? t : "custom" : _.config.getConfig("priceGranularity")
                  , r = pbjs.bidderSettings;
                return r[N.JSON_MAPPING.BD_SETTING_STANDARD] || (r[N.JSON_MAPPING.BD_SETTING_STANDARD] = {}),
                r[N.JSON_MAPPING.BD_SETTING_STANDARD][N.JSON_MAPPING.ADSERVER_TARGETING] || (r[N.JSON_MAPPING.BD_SETTING_STANDARD][N.JSON_MAPPING.ADSERVER_TARGETING] = [{
                    key: "hb_bidder",
                    val: function(e) {
                        return e.bidderCode;
                    }
                }, {
                    key: "hb_adid",
                    val: function(e) {
                        return e.adId;
                    }
                }, {
                    key: "hb_pb",
                    val: function(e) {
                        return n === N.GRANULARITY_OPTIONS.AUTO ? e.pbAg : n === N.GRANULARITY_OPTIONS.DENSE ? e.pbDg : n === N.GRANULARITY_OPTIONS.LOW ? e.pbLg : n === N.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : n === N.GRANULARITY_OPTIONS.HIGH ? e.pbHg : n === N.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0;
                    }
                }, {
                    key: "hb_size",
                    val: function(e) {
                        return e.size;
                    }
                }, {
                    key: "hb_deal",
                    val: function(e) {
                        return e.dealId;
                    }
                }, {
                    key: "hb_source",
                    val: function(e) {
                        return e.source;
                    }
                }, {
                    key: "hb_format",
                    val: function(e) {
                        return e.mediaType;
                    }
                }]),
                r[N.JSON_MAPPING.BD_SETTING_STANDARD];
            }
            function F(e, t) {
                if (!t)
                    return {};
                var n = {}
                  , r = pbjs.bidderSettings;
                r && (d(n, u(t.mediaType), t),
                e && r[e] && r[e][N.JSON_MAPPING.ADSERVER_TARGETING] && (d(n, r[e], t),
                t.sendStandardTargeting = r[e].sendStandardTargeting));
                return t.native && (n = b({}, n, (0,
                i.getNativeTargeting)(t))),
                n;
            }
            function d(r, i, o) {
                var e = i[N.JSON_MAPPING.ADSERVER_TARGETING];
                return o.size = o.getSize(),
                O._each(e, function(e) {
                    var t = e.key
                      , n = e.val;
                    if (r[t] && O.logWarn("The key: " + t + " is getting ovewritten"),
                    O.isFn(n))
                        try {
                            n = n(o);
                        } catch (e) {
                            O.logError("bidmanager", "ERROR", e);
                        }
                    (void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && "hb_deal" !== t || !O.isEmptyStr(n) && null != n ? r[t] = n : O.logInfo("suppressing empty key '" + t + "' from adserver targeting");
                }),
                r;
            }
            function s(e) {
                var t = e.bidderCode
                  , n = e.cpm
                  , r = void 0;
                if (pbjs.bidderSettings && (t && pbjs.bidderSettings[t] && "function" == typeof pbjs.bidderSettings[t].bidCpmAdjustment ? r = pbjs.bidderSettings[t].bidCpmAdjustment : pbjs.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (r = pbjs.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),
                r))
                    try {
                        n = r(e.cpm, b({}, e));
                    } catch (e) {
                        O.logError("Error during bid adjustment", "bidmanager.js", e);
                    }
                0 <= n && (e.cpm = n);
            }
            function V(e, t) {
                return e[t.adUnitCode] || (e[t.adUnitCode] = {
                    bids: []
                }),
                e[t.adUnitCode].bids.push(t),
                e;
            }
        },
        46: function(e, t, n) {
            "use strict";
            var r = n(14)
              , i = n(34)(5)
              , o = "find"
              , a = !0;
            o in [] && Array(1)[o](function() {
                a = !1;
            }),
            r(r.P + r.F * a, "Array", {
                find: function(e) {
                    return i(this, e, 1 < arguments.length ? arguments[1] : void 0);
                }
            }),
            n(27)(o);
        },
        47: function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e)
                    throw TypeError(e + " is not a function!");
                return e;
            }
            ;
        },
        48: function(e, t, n) {
            var r = n(49)
              , i = n(54);
            e.exports = n(23) ? function(e, t, n) {
                return r.f(e, t, i(1, n));
            }
            : function(e, t, n) {
                return e[t] = n,
                e;
            }
            ;
        },
        49: function(e, t, n) {
            var r = n(50)
              , i = n(51)
              , o = n(53)
              , a = Object.defineProperty;
            t.f = n(23) ? Object.defineProperty : function(e, t, n) {
                if (r(e),
                t = o(t, !0),
                r(n),
                i)
                    try {
                        return a(e, t, n);
                    } catch (e) {}
                if ("get"in n || "set"in n)
                    throw TypeError("Accessors not supported!");
                return "value"in n && (e[t] = n.value),
                e;
            }
            ;
        },
        5: function(e, t, n) {
            n(62),
            e.exports = n(13).Array.includes;
        },
        50: function(e, t, n) {
            var r = n(15);
            e.exports = function(e) {
                if (!r(e))
                    throw TypeError(e + " is not an object!");
                return e;
            }
            ;
        },
        51: function(e, t, n) {
            e.exports = !n(23) && !n(33)(function() {
                return 7 != Object.defineProperty(n(52)("div"), "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            });
        },
        52: function(e, t, n) {
            var r = n(15)
              , i = n(19).document
              , o = r(i) && r(i.createElement);
            e.exports = function(e) {
                return o ? i.createElement(e) : {};
            }
            ;
        },
        53: function(e, t, n) {
            var i = n(15);
            e.exports = function(e, t) {
                if (!i(e))
                    return e;
                var n, r;
                if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e)))
                    return r;
                if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e)))
                    return r;
                if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e)))
                    return r;
                throw TypeError("Can't convert object to primitive value");
            }
            ;
        },
        54: function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                };
            }
            ;
        },
        55: function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t);
            }
            ;
        },
        56: function(e, t, n) {
            var r = n(25);
            e.exports = function(e) {
                return Object(r(e));
            }
            ;
        },
        569: function(e, t, n) {
            e.exports = n(570);
        },
        57: function(e, t, n) {
            var r = n(58);
            e.exports = function(e, t) {
                return new (r(e))(t);
            }
            ;
        },
        570: function(e, t, n) {
            "use strict";
            var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }
            , o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }
            , a = n(41), u = n(0), d = n(571), s = n(18), c = n(22), f = n(3), l = n(29), g = n(42), p = n(20), v = n(572), y = n(5), m = (r = y) && r.__esModule ? r : {
                default: r
            }, b = n(39);
            var h = (0,
            a.getGlobal)()
              , S = n(4)
              , E = n(0)
              , A = n(8)
              , T = n(16)
              , I = n(9)
              , _ = s.userSync.triggerUserSyncs
              , w = S.EVENTS
              , C = w.ADD_AD_UNITS
              , O = w.BID_WON
              , B = w.REQUEST_BIDS
              , R = w.SET_TARGETING
              , N = w.AD_RENDER_FAILED
              , U = S.AD_RENDER_FAILED_REASON
              , j = U.PREVENT_WRITING_ON_MAIN_DOCUMENT
              , D = U.NO_AD
              , P = U.EXCEPTION
              , k = U.CANNOT_FIND_AD
              , x = U.MISSING_DOC_OR_ADID
              , M = {
                bidWon: function(e) {
                    var t = l.auctionManager.getBidsRequested().map(function(e) {
                        return e.bids.map(function(e) {
                            return e.adUnitCode;
                        });
                    }).reduce(u.flatten).filter(u.uniques);
                    if (!E.contains(t, e))
                        return void E.logError('The "' + e + '" placement is not defined.');
                    return !0;
                }
            };
            function q(e, t, n) {
                e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t,
                e.defaultView.frameElement.height = n);
            }
            function G(e, t, n) {
                var r = {};
                r.reason = e,
                r.message = t,
                n && (r.bid = n),
                E.logError(t),
                I.emit(N, r);
            }
            function W(e) {
                e.forEach(function(e) {
                    if (void 0 === e.called)
                        try {
                            e.call(),
                            e.called = !0;
                        } catch (e) {
                            E.logError("Error processing command :", "prebid.js", e);
                        }
                });
            }
            (0,
            v.sessionLoader)(),
            h.bidderSettings = h.bidderSettings || {},
            h.libLoaded = !0,
            h.version = "v1.26.0-pre",
            E.logInfo("Prebid.js v1.26.0-pre loaded"),
            h.adUnits = h.adUnits || [],
            h.triggerUserSyncs = _,
            h.getAdserverTargetingForAdUnitCodeStr = function(e) {
                if (E.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments),
                e) {
                    var t = h.getAdserverTargetingForAdUnitCode(e);
                    return E.transformAdServerTargetingObj(t);
                }
                E.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode");
            }
            ,
            h.getAdserverTargetingForAdUnitCode = function(e) {
                return h.getAdserverTargeting(e)[e];
            }
            ,
            h.getAdserverTargeting = function(e) {
                return E.logInfo("Invoking pbjs.getAdserverTargeting", arguments),
                g.targeting.getAllTargeting(e);
            }
            ,
            h.getBidResponses = function() {
                E.logInfo("Invoking pbjs.getBidResponses", arguments);
                var e = l.auctionManager.getBidsReceived().filter(u.adUnitsFilter.bind(this, l.auctionManager.getAdUnitCodes()))
                  , n = e && e.length && e[e.length - 1].auctionId;
                return e.map(function(e) {
                    return e.adUnitCode;
                }).filter(u.uniques).map(function(t) {
                    return e.filter(function(e) {
                        return e.auctionId === n && e.adUnitCode === t;
                    });
                }).filter(function(e) {
                    return e && e[0] && e[0].adUnitCode;
                }).map(function(e) {
                    return t = {},
                    n = e[0].adUnitCode,
                    r = {
                        bids: e.map(u.removeRequestId)
                    },
                    n in t ? Object.defineProperty(t, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = r,
                    t;
                    var t, n, r;
                }).reduce(function(e, t) {
                    return o(e, t);
                }, {});
            }
            ,
            h.getBidResponsesForAdUnitCode = function(t) {
                return {
                    bids: l.auctionManager.getBidsReceived().filter(function(e) {
                        return e.adUnitCode === t;
                    }).map(u.removeRequestId)
                };
            }
            ,
            h.setTargetingForGPTAsync = function(e, t) {
                if (E.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments),
                (0,
                u.isGptPubadsDefined)()) {
                    var n = g.targeting.getAllTargeting(e);
                    g.targeting.resetPresetTargeting(e),
                    g.targeting.setTargetingForGPT(n, t),
                    Object.keys(n).forEach(function(t) {
                        Object.keys(n[t]).forEach(function(e) {
                            "hb_adid" === e && l.auctionManager.setStatusForBids(n[t][e], g.BID_TARGETING_SET);
                        });
                    }),
                    I.emit(R, n);
                } else
                    E.logError("window.googletag is not defined on the page");
            }
            ,
            h.setTargetingForAst = function() {
                E.logInfo("Invoking pbjs.setTargetingForAn", arguments),
                g.targeting.isApntagDefined() ? (g.targeting.setTargetingForAst(),
                I.emit(R, g.targeting.getAllTargeting())) : E.logError("window.apntag is not defined on the page");
            }
            ,
            h.renderAd = function(e, t) {
                if (E.logInfo("Invoking pbjs.renderAd", arguments),
                E.logMessage("Calling renderAd with adId :" + t),
                e && t)
                    try {
                        var n = l.auctionManager.findBidByAdId(t);
                        if (n) {
                            n.status = g.RENDERED,
                            n.ad = E.replaceAuctionPrice(n.ad, n.cpm),
                            n.adUrl = E.replaceAuctionPrice(n.adUrl, n.cpm),
                            l.auctionManager.addWinningBid(n),
                            I.emit(O, n);
                            var r = n.height
                              , i = n.width
                              , o = n.ad
                              , a = n.mediaType
                              , u = n.adUrl
                              , d = n.renderer
                              , s = document.createComment("Creative " + n.creativeId + " served by " + n.bidder + " Prebid.js Header Bidding");
                            if (E.insertElement(s, e, "body"),
                            d && d.url)
                                d.render(n);
                            else if (e === document && !E.inIframe() || "video" === a) {
                                G(j, "Error trying to write ad. Ad render call ad id " + t + " was prevented from writing to the main document.", n);
                            } else if (o)
                                e.write(o),
                                e.close(),
                                q(e, i, r),
                                E.callBurl(n);
                            else if (u) {
                                var c = E.createInvisibleIframe();
                                c.height = r,
                                c.width = i,
                                c.style.display = "inline",
                                c.style.overflow = "hidden",
                                c.src = u,
                                E.insertElement(c, e, "body"),
                                q(e, i, r),
                                E.callBurl(n);
                            } else {
                                G(D, "Error trying to write ad. No ad for bid response id: " + t, n);
                            }
                        } else {
                            G(k, "Error trying to write ad. Cannot find ad by given id : " + t);
                        }
                    } catch (e) {
                        var f = "Error trying to write ad Id :" + t + " to the page:" + e.message;
                        G(P, f);
                    }
                else
                    G(x, "Error trying to write ad Id :" + t + " to the page. Missing document or adId");
            }
            ,
            h.removeAdUnit = function(e) {
                if (E.logInfo("Invoking pbjs.removeAdUnit", arguments),
                e)
                    for (var t = 0; t < h.adUnits.length; t++)
                        h.adUnits[t].code === e && h.adUnits.splice(t, 1);
            }
            ,
            h.requestBids = (0,
            p.createHook)("asyncSeries", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.bidsBackHandler
                  , n = e.timeout
                  , r = e.adUnits
                  , i = e.adUnitCodes
                  , o = e.labels;
                I.emit(B);
                var a = n || f.config.getConfig("bidderTimeout");
                if (r = r || h.adUnits,
                E.logInfo("Invoking pbjs.requestBids", arguments),
                i && i.length ? r = r.filter(function(e) {
                    return (0,
                    m.default)(i, e.code);
                }) : i = r && r.map(function(e) {
                    return e.code;
                }),
                r.forEach(function(i) {
                    var o = Object.keys(i.mediaTypes || {
                        banner: "banner"
                    })
                      , e = i.bids.map(function(e) {
                        return e.bidder;
                    })
                      , a = A.bidderRegistry
                      , t = f.config.getConfig("s2sConfig")
                      , n = t && t.bidders
                      , r = n ? e.filter(function(e) {
                        return !(0,
                        m.default)(n, e);
                    }) : e;
                    i.transactionId || (i.transactionId = E.generateUUID()),
                    r.forEach(function(t) {
                        var e = a[t]
                          , n = e && e.getSpec && e.getSpec()
                          , r = n && n.supportedMediaTypes || ["banner"];
                        o.some(function(e) {
                            return (0,
                            m.default)(r, e);
                        }) || (E.logWarn(E.unsupportedBidderMessage(i, t)),
                        i.bids = i.bids.filter(function(e) {
                            return e.bidder !== t;
                        }));
                    }),
                    b.adunitCounter.incrementCounter(i.code);
                }),
                r && 0 !== r.length) {
                    var u = l.auctionManager.createAuction({
                        adUnits: r,
                        adUnitCodes: i,
                        callback: t,
                        cbTimeout: a,
                        labels: o
                    });
                    return u.callBids(),
                    u;
                }
                if (E.logMessage("No adUnits configured. No bids requested."),
                "function" == typeof t)
                    try {
                        t();
                    } catch (e) {
                        E.logError("Error executing bidsBackHandler", null, e);
                    }
            }),
            h.addAdUnits = function(e) {
                E.logInfo("Invoking pbjs.addAdUnits", arguments),
                E.isArray(e) ? h.adUnits.push.apply(h.adUnits, e) : "object" === (void 0 === e ? "undefined" : i(e)) && h.adUnits.push(e),
                I.emit(C);
            }
            ,
            h.onEvent = function(e, t, n) {
                E.logInfo("Invoking pbjs.onEvent", arguments),
                E.isFn(t) ? !n || M[e].call(null, n) ? I.on(e, t, n) : E.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : E.logError('The event handler provided is not a function and was not set on event "' + e + '".');
            }
            ,
            h.offEvent = function(e, t, n) {
                E.logInfo("Invoking pbjs.offEvent", arguments),
                n && !M[e].call(null, n) || I.off(e, t, n);
            }
            ,
            h.registerBidAdapter = function(e, t) {
                E.logInfo("Invoking pbjs.registerBidAdapter", arguments);
                try {
                    A.registerBidAdapter(e(), t);
                } catch (e) {
                    E.logError("Error registering bidder adapter : " + e.message);
                }
            }
            ,
            h.registerAnalyticsAdapter = function(e) {
                E.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
                try {
                    A.registerAnalyticsAdapter(e);
                } catch (e) {
                    E.logError("Error registering analytics adapter : " + e.message);
                }
            }
            ,
            h.createBid = function(e) {
                return E.logInfo("Invoking pbjs.createBid", arguments),
                T.createBid(e);
            }
            ,
            h.loadScript = function(e, t, n) {
                E.logInfo("Invoking pbjs.loadScript", arguments),
                (0,
                c.loadScript)(e, t, n);
            }
            ,
            h.enableAnalytics = function(e) {
                e && !E.isEmpty(e) ? (E.logInfo("Invoking pbjs.enableAnalytics for: ", e),
                A.enableAnalytics(e)) : E.logError("pbjs.enableAnalytics should be called with option {}");
            }
            ,
            h.aliasBidder = function(e, t) {
                E.logInfo("Invoking pbjs.aliasBidder", arguments),
                e && t ? A.aliasBidAdapter(e, t) : E.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder");
            }
            ,
            h.getAllWinningBids = function() {
                return l.auctionManager.getAllWinningBids().map(u.removeRequestId);
            }
            ,
            h.getAllPrebidWinningBids = function() {
                return l.auctionManager.getBidsReceived().filter(function(e) {
                    return e.status === g.BID_TARGETING_SET;
                }).map(u.removeRequestId);
            }
            ,
            h.getHighestCpmBids = function(e) {
                var t = (0,
                g.getHighestCpmBidsFromBidPool)(l.auctionManager.getBidsReceived(), u.getLatestHighestCpmBid);
                return g.targeting.getWinningBids(e, t).map(u.removeRequestId);
            }
            ,
            h.markWinningBidAsUsed = function(t) {
                var e = [];
                t.adUnitCode && t.adId ? e = l.auctionManager.getBidsReceived().filter(function(e) {
                    return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
                }) : t.adUnitCode ? e = g.targeting.getWinningBids(t.adUnitCode) : t.adId ? e = l.auctionManager.getBidsReceived().filter(function(e) {
                    return e.adId === t.adId;
                }) : E.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."),
                0 < e.length && (e[0].status = g.RENDERED);
            }
            ,
            h.getConfig = f.config.getConfig,
            h.setConfig = f.config.setConfig,
            h.que.push(function() {
                return (0,
                d.listenMessagesFromCreative)();
            }),
            h.cmd.push = function(e) {
                if ("function" == typeof e)
                    try {
                        e.call();
                    } catch (e) {
                        E.logError("Error processing command :", e.message, e.stack);
                    }
                else
                    E.logError("Commands written into pbjs.cmd.push must be wrapped in a function");
            }
            ,
            h.que.push = h.cmd.push,
            h.processQueue = function() {
                W(h.que),
                W(h.cmd);
            }
            ;
        },
        571: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.listenMessagesFromCreative = function() {
                addEventListener("message", o, !1);
            }
            ;
            var y = i(n(9))
              , m = n(17)
              , r = n(4)
              , b = n(0)
              , h = n(29)
              , S = i(n(10));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var E = r.EVENTS.BID_WON;
            function o(e) {
                var t, n, r, i, o, a, u, d, s, c, f, l, g = e.message ? "message" : "data", p = {};
                try {
                    p = JSON.parse(e[g]);
                } catch (e) {
                    return;
                }
                if (p && p.adId) {
                    var v = (0,
                    S.default)(h.auctionManager.getBidsReceived(), function(e) {
                        return e.adId === p.adId;
                    });
                    "Prebid Request" === p.message && (t = v,
                    n = p.adServerDomain,
                    r = e.source,
                    i = t.adId,
                    o = t.ad,
                    a = t.adUrl,
                    u = t.width,
                    d = t.height,
                    i && (c = (s = t).adUnitCode,
                    f = s.width,
                    l = s.height,
                    ["div", "iframe"].forEach(function(e) {
                        var t, n = (t = e,
                        document.getElementById((0,
                        S.default)(window.googletag.pubads().getSlots().filter((0,
                        b.isSlotMatchingAdUnitCode)(c)), function(e) {
                            return e;
                        }).getSlotElementId()).querySelector(t)).style;
                        n.width = f + "px",
                        n.height = l + "px";
                    }),
                    r.postMessage(JSON.stringify({
                        message: "Prebid Response",
                        ad: o,
                        adUrl: a,
                        adId: i,
                        width: u,
                        height: d
                    }), n)),
                    h.auctionManager.addWinningBid(v),
                    y.default.emit(E, v)),
                    "Prebid Native" === p.message && ((0,
                    m.fireNativeTrackers)(p, v),
                    h.auctionManager.addWinningBid(v),
                    y.default.emit(E, v));
                }
            }
        },
        572: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.boundHook = void 0;
            var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }
            ;
            n.disableOverrides = f,
            n.addBidResponseHook = l,
            n.getConfig = g,
            n.sessionLoader = function(e) {
                var t = void 0;
                try {
                    e = e || window.sessionStorage,
                    t = JSON.parse(e.getItem(u));
                } catch (e) {}
                t && c(t, !0);
            }
            ;
            var r = t(3)
              , a = t(0)
              , i = t(43)
              , u = "pbjs:debugging"
              , d = n.boundHook = void 0;
            function s(e) {
                (0,
                a.logMessage)("DEBUG: " + e);
            }
            function c(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                r.config.setConfig({
                    debug: !0
                }),
                s("bidder overrides enabled" + (t ? " from session" : "")),
                d && i.addBidResponse.removeHook(d),
                n.boundHook = d = l.bind(null, e),
                i.addBidResponse.addHook(d, 5);
            }
            function f() {
                d && (i.addBidResponse.removeHook(d),
                s("bidder overrides disabled"));
            }
            function l(e, r, i, t) {
                if (Array.isArray(e.bidders) && -1 === e.bidders.indexOf(i.bidderCode))
                    return n = "bidder '" + i.bidderCode + "' excluded from auction by bidder overrides",
                    void (0,
                    a.logWarn)("DEBUG: " + n);
                var n;
                Array.isArray(e.bids) && e.bids.forEach(function(n) {
                    n.bidder && n.bidder !== i.bidderCode || n.adUnitCode && n.adUnitCode !== r || (i = o({}, i),
                    Object.keys(n).filter(function(e) {
                        return -1 === ["bidder", "adUnitCode"].indexOf(e);
                    }).forEach(function(e) {
                        var t = n[e];
                        s("bidder overrides changed '" + r + "/" + i.bidderCode + "' bid." + e + " from '" + i[e] + "' to '" + t + "'"),
                        i[e] = t;
                    }));
                }),
                t(r, i);
            }
            function g(e) {
                if (e.enabled) {
                    try {
                        window.sessionStorage.setItem(u, JSON.stringify(e));
                    } catch (e) {}
                    c(e);
                } else {
                    f();
                    try {
                        window.sessionStorage.removeItem(u);
                    } catch (e) {}
                }
            }
            r.config.getConfig("debugging", function(e) {
                return g(e.debugging);
            });
        },
        58: function(e, t, n) {
            var r = n(15)
              , i = n(38)
              , o = n(26)("species");
            e.exports = function(e) {
                var t;
                return i(e) && ("function" != typeof (t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0),
                r(t) && null === (t = t[o]) && (t = void 0)),
                void 0 === t ? Array : t;
            }
            ;
        },
        59: function(e, t, n) {
            var r = n(13)
              , i = n(19)
              , o = "__core-js_shared__"
              , a = i[o] || (i[o] = {});
            (e.exports = function(e, t) {
                return a[e] || (a[e] = void 0 !== t ? t : {});
            }
            )("versions", []).push({
                version: r.version,
                mode: n(60) ? "pure" : "global",
                copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
            });
        },
        60: function(e, t) {
            e.exports = !0;
        },
        61: function(e, t) {
            var n = 0
              , r = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36));
            }
            ;
        },
        62: function(e, t, n) {
            "use strict";
            var r = n(14)
              , i = n(63)(!0);
            r(r.P, "Array", {
                includes: function(e) {
                    return i(this, e, 1 < arguments.length ? arguments[1] : void 0);
                }
            }),
            n(27)("includes");
        },
        63: function(e, t, n) {
            var d = n(64)
              , s = n(36)
              , c = n(65);
            e.exports = function(u) {
                return function(e, t, n) {
                    var r, i = d(e), o = s(i.length), a = c(n, o);
                    if (u && t != t) {
                        for (; a < o; )
                            if ((r = i[a++]) != r)
                                return !0;
                    } else
                        for (; a < o; a++)
                            if ((u || a in i) && i[a] === t)
                                return u || a || 0;
                    return !u && -1;
                }
                ;
            }
            ;
        },
        64: function(e, t, n) {
            var r = n(35)
              , i = n(25);
            e.exports = function(e) {
                return r(i(e));
            }
            ;
        },
        65: function(e, t, n) {
            var r = n(37)
              , i = Math.max
              , o = Math.min;
            e.exports = function(e, t) {
                return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t);
            }
            ;
        },
        66: function(e, t) {
            e.exports = function e(t) {
                var n = Array.isArray(t) ? [] : {};
                for (var r in t) {
                    var i = t[r];
                    n[r] = i && "object" == typeof i ? e(i) : i;
                }
                return n;
            }
            ;
        },
        67: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }
            ;
            t.setSizeConfig = a,
            t.resolveStatus = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.labels
                  , n = void 0 === t ? [] : t
                  , r = e.labelAll
                  , i = void 0 !== r && r
                  , o = e.activeLabels
                  , a = void 0 === o ? [] : o
                  , u = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []
                  , d = (c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : p,
                c.reduce(function(n, e) {
                    return "object" === (void 0 === e ? "undefined" : f(e)) && "string" == typeof e.mediaQuery ? matchMedia(e.mediaQuery).matches && (Array.isArray(e.sizesSupported) && (n.shouldFilter = !0),
                    ["labels", "sizesSupported"].forEach(function(t) {
                        return (e[t] || []).forEach(function(e) {
                            return n[t][e] = !0;
                        });
                    })) : (0,
                    l.logWarn)('sizeConfig rule missing required property "mediaQuery"'),
                    n;
                }, {
                    labels: {},
                    sizesSupported: {},
                    shouldFilter: !1
                }))
                  , s = void 0;
                var c;
                s = d.shouldFilter ? u.filter(function(e) {
                    return d.sizesSupported[e];
                }) : u;
                return {
                    active: 0 < s.length && (0 === n.length || !i && (n.some(function(e) {
                        return d.labels[e];
                    }) || n.some(function(e) {
                        return (0,
                        g.default)(a, e);
                    })) || i && n.reduce(function(e, t) {
                        return e ? d.labels[t] || (0,
                        g.default)(a, t) : e;
                    }, !0)),
                    sizes: s
                };
            }
            ;
            var r, i = n(3), l = n(0), o = n(5), g = (r = o) && r.__esModule ? r : {
                default: r
            };
            var p = [];
            function a(e) {
                p = e;
            }
            i.config.getConfig("sizeConfig", function(e) {
                return a(e.sizeConfig);
            });
        },
        68: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getRefererInfo = void 0,
            t.detectReferer = r;
            var a = n(0);
            function r(i) {
                function o() {
                    var e = function() {
                        var t = []
                          , n = void 0;
                        do {
                            try {
                                n = n ? n.parent : i;
                                try {
                                    t.push({
                                        referrer: n.document.referrer || null,
                                        location: n.location.href || null,
                                        isTop: n == i.top
                                    });
                                } catch (e) {
                                    t.push({
                                        referrer: null,
                                        location: null,
                                        isTop: n == i.top
                                    }),
                                    (0,
                                    a.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                                }
                            } catch (e) {
                                return t.push({
                                    referrer: null,
                                    location: null,
                                    isTop: !1
                                }),
                                t;
                            }
                        } while (n != i.top);return t;
                    }()
                      , t = function() {
                        try {
                            if (!i.location.ancestorOrigins)
                                return;
                            return i.location.ancestorOrigins;
                        } catch (e) {}
                    }();
                    if (t)
                        for (var n = 0, r = t.length; n < r; n++)
                            e[n].ancestor = t[n];
                    return e;
                }
                return function() {
                    try {
                        var e = o()
                          , t = e.length - 1
                          , n = null !== e[t].location || 0 < t && null !== e[t - 1].referrer
                          , r = function(e) {
                            var t = []
                              , n = null
                              , r = null
                              , i = null
                              , o = null
                              , a = null
                              , u = void 0;
                            for (u = e.length - 1; 0 <= u; u--) {
                                try {
                                    n = e[u].location;
                                } catch (e) {}
                                if (n)
                                    t.push(n),
                                    a || (a = n);
                                else if (0 !== u) {
                                    r = e[u - 1];
                                    try {
                                        i = r.referrer,
                                        o = r.ancestor;
                                    } catch (e) {}
                                    i ? (t.push(i),
                                    a || (a = i)) : o ? (t.push(o),
                                    a || (a = o)) : t.push(null);
                                } else
                                    t.push(null);
                            }
                            return {
                                stack: t,
                                detectedRefererUrl: a
                            };
                        }(e);
                        return {
                            referer: r.detectedRefererUrl,
                            reachedTop: n,
                            numIframes: t,
                            stack: r.stack
                        };
                    } catch (e) {}
                }
                ;
            }
            t.getRefererInfo = r(window);
        },
        7: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ajax = void 0;
            var l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }
              , g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }
            ;
            t.ajaxBuilder = r;
            var p = n(11)
              , v = n(3)
              , y = n(0)
              , m = 4;
            t.ajax = r();
            function r() {
                var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3
                  , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                  , c = e.request
                  , f = e.done;
                return function(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                    try {
                        var i = void 0
                          , o = r.method || (n ? "POST" : "GET")
                          , a = document.createElement("a");
                        a.href = e;
                        var u = "object" === (void 0 === t ? "undefined" : g(t)) && null !== t ? t : {
                            success: function() {
                                y.logMessage("xhr success");
                            },
                            error: function(e) {
                                y.logError("xhr error", null, e);
                            }
                        };
                        if ("function" == typeof t && (u.success = t),
                        (i = new window.XMLHttpRequest()).onreadystatechange = function() {
                            if (i.readyState === m) {
                                "function" == typeof f && f(a.origin);
                                var e = i.status;
                                200 <= e && e < 300 || 304 === e ? u.success(i.responseText, i) : u.error(i.statusText, i);
                            }
                        }
                        ,
                        v.config.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                            y.logError("  xhr timeout after ", i.timeout, "ms");
                        }
                        ),
                        "GET" === o && n) {
                            var d = (0,
                            p.parse)(e, r);
                            l(d.search, n),
                            e = (0,
                            p.format)(d);
                        }
                        i.open(o, e, !0),
                        v.config.getConfig("disableAjaxTimeout") || (i.timeout = s),
                        r.withCredentials && (i.withCredentials = !0),
                        y._each(r.customHeaders, function(e, t) {
                            i.setRequestHeader(t, e);
                        }),
                        r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                        i.setRequestHeader("Content-Type", r.contentType || "text/plain"),
                        "function" == typeof c && c(a.origin),
                        "POST" === o && n ? i.send(n) : i.send();
                    } catch (e) {
                        y.logError("xhr construction", e);
                    }
                }
                ;
            }
        },
        8: function(e, h, t) {
            "use strict";
            var b = function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return function(e, t) {
                        var n = []
                          , r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            o = e;
                        } finally {
                            try {
                                !r && u.return && u.return();
                            } finally {
                                if (i)
                                    throw o;
                            }
                        }
                        return n;
                    }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
              , l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }
              , S = t(0)
              , g = t(67)
              , p = t(17)
              , c = t(1)
              , E = t(7)
              , A = t(3)
              , T = n(t(5))
              , I = n(t(10))
              , v = t(39)
              , _ = t(68);
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var w = t(0)
              , C = t(4)
              , O = t(9)
              , B = void 0
              , R = {};
            h.bidderRegistry = R,
            h.aliasRegistry = {};
            var N = {};
            A.config.getConfig("s2sConfig", function(e) {
                N = e.s2sConfig;
            });
            var r = {};
            function y(e, t) {
                return e.labelAll ? {
                    labelAll: !0,
                    labels: e.labelAll,
                    activeLabels: t
                } : {
                    labelAll: !1,
                    labels: e.labelAny,
                    activeLabels: t
                };
            }
            function U(e) {
                var r = e.bidderCode
                  , s = e.auctionId
                  , c = e.bidderRequestId
                  , t = e.adUnits
                  , f = e.labels;
                return t.reduce(function(e, a) {
                    var u = w.deepAccess(a, "mediaTypes.banner.sizes")
                      , t = (0,
                    g.resolveStatus)(y(a, f), u || a.sizes)
                      , n = t.active
                      , d = t.sizes;
                    return n && e.push(a.bids.filter(function(e) {
                        return e.bidder === r;
                    }).reduce(function(e, t) {
                        var n = a.nativeParams || w.deepAccess(a, "mediaTypes.native");
                        n && (t = l({}, t, {
                            nativeParams: (0,
                            p.processNativeAdUnitParams)(n)
                        })),
                        t = l({}, t, (0,
                        S.getDefinedParams)(a, ["mediaType", "renderer"]));
                        var r = (0,
                        g.resolveStatus)(y(t, f), d)
                          , i = r.active
                          , o = r.sizes;
                        return a.mediaTypes && (w.isValidMediaTypes(a.mediaTypes) ? (u && (a.mediaTypes.banner.sizes = o),
                        t = l({}, t, {
                            mediaTypes: a.mediaTypes
                        })) : w.logError("mediaTypes is not correctly configured for adunit " + a.code)),
                        i && e.push(l({}, t, {
                            adUnitCode: a.code,
                            transactionId: a.transactionId,
                            sizes: o,
                            bidId: t.bid_id || w.getUniqueIdentifierStr(),
                            bidderRequestId: c,
                            auctionId: s,
                            bidRequestsCount: v.adunitCounter.getCounter(a.code)
                        })),
                        e;
                    }, [])),
                    e;
                }, []).reduce(S.flatten, []).filter(function(e) {
                    return "" !== e;
                });
            }
            function j() {
                return N && N.enabled && N.testing && B;
            }
            function i(t, n, e) {
                try {
                    var r = R[t].getSpec();
                    r && r[n] && "function" == typeof r[n] && (w.logInfo("Invoking " + t + "." + n),
                    r[n](e));
                } catch (e) {
                    w.logWarn("Error calling " + n + " of " + t);
                }
            }
            h.gdprDataHandler = {
                consentData: null,
                setConsentData: function(e) {
                    this.consentData = e;
                },
                getConsentData: function() {
                    return this.consentData;
                }
            },
            h.makeBidRequests = function(e, i, o, a, u) {
                var d = [];
                e = h.checkBidRequestSizes(e);
                var t = (0,
                S.getBidderCodes)(e);
                A.config.getConfig("bidderSequence") === A.RANDOM && (t = (0,
                S.shuffle)(t));
                var n, r, s, c = (0,
                _.getRefererInfo)(), f = t, l = [];
                if (N.enabled) {
                    j() && (l = B.getSourceBidderMap(e)[B.CLIENT]);
                    var g = N.bidders;
                    f = t.filter(function(e) {
                        return !(0,
                        T.default)(g, e) || (0,
                        T.default)(l, e);
                    });
                    var p = (n = e,
                    r = N.bidders,
                    (s = w.deepClone(n)).forEach(function(e) {
                        e.bids = e.bids.filter(function(e) {
                            return (0,
                            T.default)(r, e.bidder) && (!j() || e.finalSource !== B.CLIENT);
                        }).map(function(e) {
                            return e.bid_id = w.getUniqueIdentifierStr(),
                            e;
                        });
                    }),
                    s = s.filter(function(e) {
                        return 0 !== e.bids.length;
                    }))
                      , v = w.generateUUID();
                    g.forEach(function(e) {
                        var t = w.getUniqueIdentifierStr()
                          , n = {
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            tid: v,
                            bids: U({
                                bidderCode: e,
                                auctionId: o,
                                bidderRequestId: t,
                                adUnits: p,
                                labels: u
                            }),
                            auctionStart: i,
                            timeout: N.timeout,
                            src: C.S2S.SRC,
                            refererInfo: c
                        };
                        0 !== n.bids.length && d.push(n);
                    }),
                    p.forEach(function(e) {
                        var t = e.bids.filter(function(t) {
                            return (0,
                            I.default)(d, function(e) {
                                return (0,
                                I.default)(e.bids, function(e) {
                                    return e.bidId === t.bid_id;
                                });
                            });
                        });
                        e.bids = t;
                    }),
                    d.forEach(function(e) {
                        e.adUnitsS2SCopy = p.filter(function(e) {
                            return 0 < e.bids.length;
                        });
                    });
                }
                var y, m, b = (y = e,
                (m = w.deepClone(y)).forEach(function(e) {
                    e.bids = e.bids.filter(function(e) {
                        return !j() || e.finalSource !== B.SERVER;
                    });
                }),
                m = m.filter(function(e) {
                    return 0 !== e.bids.length;
                }));
                return f.forEach(function(e) {
                    var t = w.getUniqueIdentifierStr()
                      , n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        bids: U({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: b,
                            labels: u
                        }),
                        auctionStart: i,
                        timeout: a,
                        refererInfo: c
                    }
                      , r = R[e];
                    r || w.logError("Trying to make a request for bidder that does not exist: " + e),
                    r && n.bids && 0 !== n.bids.length && d.push(n);
                }),
                h.gdprDataHandler.getConsentData() && d.forEach(function(e) {
                    e.gdprConsent = h.gdprDataHandler.getConsentData();
                }),
                d;
            }
            ,
            h.checkBidRequestSizes = function(e) {
                function u(e) {
                    return Array.isArray(e) && 2 === e.length && w.isInteger(e[0]) && w.isInteger(e[1]);
                }
                return e.forEach(function(e) {
                    var t = e.mediaTypes
                      , n = w.getAdUnitSizes(e);
                    if (t && t.banner) {
                        var r = t.banner;
                        r.sizes ? (r.sizes = n,
                        e.sizes = n) : (w.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."),
                        delete e.mediaTypes.banner);
                    } else
                        e.sizes && (w.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."),
                        e.sizes = n);
                    if (t && t.video) {
                        var i = t.video;
                        if (i.playerSize)
                            if (Array.isArray(i.playerSize) && 1 === i.playerSize.length && i.playerSize.every(u))
                                e.sizes = i.playerSize;
                            else if (u(i.playerSize)) {
                                var o = [];
                                o.push(i.playerSize),
                                w.logInfo("Transforming video.playerSize from " + i.playerSize + " to " + o + " so it's in the proper format."),
                                e.sizes = i.playerSize = o;
                            } else
                                w.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),
                                delete e.mediaTypes.video.playerSize;
                    }
                    if (t && t.native) {
                        var a = t.native;
                        a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (w.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),
                        delete e.mediaTypes.native.image.sizes),
                        a.image && a.image.aspect_ratios && !Array.isArray(a.image.aspect_ratios) && (w.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),
                        delete e.mediaTypes.native.image.aspect_ratios),
                        a.icon && a.icon.sizes && !Array.isArray(a.icon.sizes) && (w.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),
                        delete e.mediaTypes.native.icon.sizes);
                    }
                }),
                e;
            }
            ,
            h.callBids = function(e, t, r, i, o, a) {
                if (t.length) {
                    var n = t.reduce(function(e, t) {
                        return e[Number(void 0 !== t.src && t.src === C.S2S.SRC)].push(t),
                        e;
                    }, [[], []])
                      , u = b(n, 2)
                      , d = u[0]
                      , s = u[1];
                    if (s.length) {
                        var c = (0,
                        E.ajaxBuilder)(a, o ? {
                            request: o.request.bind(null, "s2s"),
                            done: o.done
                        } : void 0)
                          , f = N.bidders
                          , l = R[N.adapter]
                          , g = s[0].tid
                          , p = s[0].adUnitsS2SCopy;
                        if (l) {
                            var v = {
                                tid: g,
                                ad_units: p
                            };
                            if (v.ad_units.length) {
                                var y = s.map(function(e) {
                                    return e.start = (0,
                                    S.timestamp)(),
                                    i;
                                })
                                  , m = v.ad_units.reduce(function(e, t) {
                                    return e.concat((t.bids || []).reduce(function(e, t) {
                                        return e.concat(t.bidder);
                                    }, []));
                                }, []);
                                w.logMessage("CALLING S2S HEADER BIDDERS ==== " + f.filter(function(e) {
                                    return (0,
                                    T.default)(m, e);
                                }).join(",")),
                                s.forEach(function(e) {
                                    O.emit(C.EVENTS.BID_REQUESTED, e);
                                }),
                                l.callBids(v, s, r, function() {
                                    return y.forEach(function(e) {
                                        return e();
                                    });
                                }, c);
                            }
                        }
                    }
                    d.forEach(function(e) {
                        e.start = (0,
                        S.timestamp)();
                        var t = R[e.bidderCode];
                        w.logMessage("CALLING BIDDER ======= " + e.bidderCode),
                        O.emit(C.EVENTS.BID_REQUESTED, e);
                        var n = (e.doneCbCallCount = 0,
                        E.ajaxBuilder)(a, o ? {
                            request: o.request.bind(null, e.bidderCode),
                            done: o.done
                        } : void 0);
                        t.callBids(e, r, i, n);
                    });
                } else
                    w.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
            }
            ,
            h.videoAdapters = [],
            h.registerBidAdapter = function(e, t) {
                var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes
                  , r = void 0 === n ? [] : n;
                e && t ? "function" == typeof e.callBids ? (R[t] = e,
                (0,
                T.default)(r, "video") && h.videoAdapters.push(t),
                (0,
                T.default)(r, "native") && p.nativeAdapters.push(t)) : w.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : w.logError("bidAdaptor or bidderCode not specified");
            }
            ,
            h.aliasBidAdapter = function(t, e) {
                var n, r;
                if (void 0 === R[e]) {
                    var i = R[t];
                    if (void 0 === i) {
                        var o = A.config.getConfig("s2sConfig")
                          , a = o && o.bidders;
                        a && (0,
                        T.default)(a, e) ? h.aliasRegistry[e] = t : w.logError('bidderCode "' + t + '" is not an existing bidder.', "adaptermanager.aliasBidAdapter");
                    } else
                        try {
                            var u = void 0
                              , d = (n = t,
                            r = [],
                            (0,
                            T.default)(h.videoAdapters, n) && r.push("video"),
                            (0,
                            T.default)(p.nativeAdapters, n) && r.push("native"),
                            r);
                            if (i.constructor.prototype != Object.prototype)
                                (u = new i.constructor()).setBidderCode(e);
                            else {
                                var s = i.getSpec();
                                u = (0,
                                c.newBidder)(l({}, s, {
                                    code: e
                                })),
                                h.aliasRegistry[e] = t;
                            }
                            this.registerBidAdapter(u, e, {
                                supportedMediaTypes: d
                            });
                        } catch (e) {
                            w.logError(t + " bidder does not currently support aliasing.", "adaptermanager.aliasBidAdapter");
                        }
                } else
                    w.logMessage('alias name "' + e + '" has been already specified.');
            }
            ,
            h.registerAnalyticsAdapter = function(e) {
                var t = e.adapter
                  , n = e.code;
                t && n ? "function" == typeof t.enableAnalytics ? (t.code = n,
                r[n] = t) : w.logError('Prebid Error: Analytics adaptor error for analytics "' + n + '"\n        analytics adapter must implement an enableAnalytics() function') : w.logError("Prebid Error: analyticsAdapter or analyticsCode not specified");
            }
            ,
            h.enableAnalytics = function(e) {
                w.isArray(e) || (e = [e]),
                w._each(e, function(e) {
                    var t = r[e.provider];
                    t ? t.enableAnalytics(e) : w.logError("Prebid Error: no analytics adapter found in registry for\n        " + e.provider + ".");
                });
            }
            ,
            h.getBidAdapter = function(e) {
                return R[e];
            }
            ,
            h.setS2STestingModule = function(e) {
                B = e;
            }
            ,
            h.callTimedOutBidders = function(t, n, r) {
                n = n.map(function(e) {
                    return e.params = w.getUserConfiguredParams(t, e.adUnitCode, e.bidder),
                    e.timeout = r,
                    e;
                }),
                n = w.groupBy(n, "bidder"),
                Object.keys(n).forEach(function(e) {
                    i(e, "onTimeout", n[e]);
                });
            }
            ,
            h.callBidWonBidder = function(e, t, n) {
                t.params = w.getUserConfiguredParams(n, t.adUnitCode, t.bidder),
                i(e, "onBidWon", t);
            }
            ;
        },
        9: function(e, t, n) {
            "use strict";
            var u, r, i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }
            , d = n(0), o = n(4), a = Array.prototype.slice, s = Array.prototype.push, c = d._map(o.EVENTS, function(e) {
                return e;
            }), f = o.EVENT_ID_PATHS, l = [];
            e.exports = (u = {},
            (r = {}).on = function(e, t, n) {
                if (i = e,
                d.contains(c, i)) {
                    var r = u[e] || {
                        que: []
                    };
                    n ? (r[n] = r[n] || {
                        que: []
                    },
                    r[n].que.push(t)) : r.que.push(t),
                    u[e] = r;
                } else
                    d.logError("Wrong event name : " + e + " Valid event names :" + c);
                var i;
            }
            ,
            r.emit = function(e) {
                !function(e, t) {
                    d.logMessage("Emitting event for: " + e);
                    var n = t[0] || {}
                      , r = n[f[e]]
                      , i = u[e] || {
                        que: []
                    }
                      , o = d._map(i, function(e, t) {
                        return t;
                    })
                      , a = [];
                    l.push({
                        eventType: e,
                        args: n,
                        id: r
                    }),
                    r && d.contains(o, r) && s.apply(a, i[r].que),
                    s.apply(a, i.que),
                    d._each(a, function(e) {
                        if (e)
                            try {
                                e.apply(null, t);
                            } catch (e) {
                                d.logError("Error executing handler:", "events.js", e);
                            }
                    });
                }(e, a.call(arguments, 1));
            }
            ,
            r.off = function(e, n, r) {
                var i = u[e];
                d.isEmpty(i) || d.isEmpty(i.que) && d.isEmpty(i[r]) || r && (d.isEmpty(i[r]) || d.isEmpty(i[r].que)) || (r ? d._each(i[r].que, function(e) {
                    var t = i[r].que;
                    e === n && t.splice(d.indexOf.call(t, e), 1);
                }) : d._each(i.que, function(e) {
                    var t = i.que;
                    e === n && t.splice(d.indexOf.call(t, e), 1);
                }),
                u[e] = i);
            }
            ,
            r.get = function() {
                return u;
            }
            ,
            r.getEvents = function() {
                var n = [];
                return d._each(l, function(e) {
                    var t = i({}, e);
                    n.push(t);
                }),
                n;
            }
            ,
            r);
        }
    });
    pbjsChunk([138], {
        135: function(e, r, a) {
            a(136),
            e.exports = a(137);
        },
        136: function(e, r, a) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.spec = void 0;
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }
              , o = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a)
                        Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                }
                return e;
            }
              , p = a(12)
              , u = function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var r = {};
                    if (null != e)
                        for (var a in e)
                            Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
                    return r.default = e,
                    r;
                }
            }(a(0))
              , t = a(1)
              , m = a(2)
              , l = s(a(10))
              , f = s(a(5));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var c = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"]
              , y = ["age", "external_uid", "segments", "gender", "dnt", "language"]
              , v = ["geo", "device_id"]
              , b = {
                body: "description",
                cta: "ctatext",
                image: {
                    serverName: "main_image",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                icon: {
                    serverName: "icon",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                sponsoredBy: "sponsored_by"
            }
              , i = r.spec = {
                code: "appnexus",
                aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm"],
                supportedMediaTypes: [m.BANNER, m.VIDEO, m.NATIVE],
                isBidRequestValid: function(e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode);
                },
                buildRequests: function(e, r) {
                    var a = e.map(g)
                      , t = (0,
                    l.default)(e, h)
                      , s = void 0;
                    t && (s = {},
                    Object.keys(t.params.user).filter(function(e) {
                        return (0,
                        f.default)(y, e);
                    }).forEach(function(e) {
                        return s[e] = t.params.user[e];
                    }));
                    var n = (0,
                    l.default)(e, E)
                      , i = void 0;
                    n && n.params && n.params.app && (i = {},
                    Object.keys(n.params.app).filter(function(e) {
                        return (0,
                        f.default)(v, e);
                    }).forEach(function(e) {
                        return i[e] = n.params.app[e];
                    }));
                    var d = (0,
                    l.default)(e, k)
                      , o = void 0;
                    d && d.params && n.params.app && n.params.app.id && (o = {
                        appid: d.params.app.id
                    });
                    var p = (0,
                    l.default)(e, I)
                      , u = p ? parseInt(p.params.member, 10) : 0
                      , m = {
                        tags: [].concat(function(e) {
                            if (Array.isArray(e)) {
                                for (var r = 0, a = Array(e.length); r < e.length; r++)
                                    a[r] = e[r];
                                return a;
                            }
                            return Array.from(e);
                        }(a)),
                        user: s,
                        sdk: {
                            source: "pbjs",
                            version: "1.26.0-pre"
                        }
                    };
                    if (0 < u && (m.member_id = u),
                    n && (m.device = i),
                    d && (m.app = o),
                    r && r.gdprConsent && (m.gdpr_consent = {
                        consent_string: r.gdprConsent.consentString,
                        consent_required: r.gdprConsent.gdprApplies
                    }),
                    r && r.refererInfo) {
                        var c = {
                            rd_ref: encodeURIComponent(r.refererInfo.referer),
                            rd_top: r.refererInfo.reachedTop,
                            rd_ifs: r.refererInfo.numIframes,
                            rd_stk: r.refererInfo.stack.map(function(e) {
                                return encodeURIComponent(e);
                            }).join(",")
                        };
                        m.referrer_detection = c;
                    }
                    return {
                        method: "POST",
                        url: "//ib.adnxs.com/ut/v3/prebid",
                        data: JSON.stringify(m),
                        bidderRequest: r
                    };
                },
                interpretResponse: function(e, r) {
                    var n = this
                      , i = r.bidderRequest;
                    e = e.body;
                    var d = [];
                    if (!e || e.error) {
                        var a = "in response for " + i.bidderCode + " adapter";
                        return e && e.error && (a += ": " + e.error),
                        u.logError(a),
                        d;
                    }
                    return e.tags && e.tags.forEach(function(e) {
                        var r, a, t = (r = e) && r.ads && r.ads.length && (0,
                        l.default)(r.ads, function(e) {
                            return e.rtb;
                        });
                        if (t && 0 !== t.cpm && (0,
                        f.default)(n.supportedMediaTypes, t.ad_type)) {
                            var s = function(e, r, a) {
                                var t = {
                                    requestId: e.uuid,
                                    cpm: r.cpm,
                                    creativeId: r.creative_id,
                                    dealId: r.deal_id,
                                    currency: "USD",
                                    netRevenue: !0,
                                    ttl: 300,
                                    appnexus: {
                                        buyerMemberId: r.buyer_member_id
                                    }
                                };
                                if (r.rtb.video) {
                                    if (o(t, {
                                        width: r.rtb.video.player_width,
                                        height: r.rtb.video.player_height,
                                        vastUrl: r.rtb.video.asset_url,
                                        vastImpUrl: r.notify_url,
                                        ttl: 3600
                                    }),
                                    r.renderer_url) {
                                        var s = u.deepAccess(a.bids[0], "renderer.options");
                                        o(t, {
                                            adResponse: e,
                                            renderer: function(e, r) {
                                                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
                                                  , t = p.Renderer.install({
                                                    id: r.renderer_id,
                                                    url: r.renderer_url,
                                                    config: a,
                                                    loaded: !1
                                                });
                                                try {
                                                    t.setRender(T);
                                                } catch (e) {
                                                    u.logWarn("Prebid Error calling setRender on renderer", e);
                                                }
                                                return t.setEventHandlers({
                                                    impression: function() {
                                                        return u.logMessage("AppNexus outstream video impression event");
                                                    },
                                                    loaded: function() {
                                                        return u.logMessage("AppNexus outstream video loaded event");
                                                    },
                                                    ended: function() {
                                                        u.logMessage("AppNexus outstream renderer video event"),
                                                        document.querySelector("#" + e).style.display = "none";
                                                    }
                                                }),
                                                t;
                                            }(t.adUnitCode, r, s)
                                        }),
                                        t.adResponse.ad = t.adResponse.ads[0],
                                        t.adResponse.ad.video = t.adResponse.ad.rtb.video;
                                    }
                                } else if (r.rtb[m.NATIVE]) {
                                    var n = r.rtb[m.NATIVE];
                                    t[m.NATIVE] = {
                                        title: n.title,
                                        body: n.desc,
                                        cta: n.ctatext,
                                        sponsoredBy: n.sponsored,
                                        clickUrl: n.link.url,
                                        clickTrackers: n.link.click_trackers,
                                        impressionTrackers: n.impression_trackers,
                                        javascriptTrackers: n.javascript_trackers
                                    },
                                    n.main_img && (t.native.image = {
                                        url: n.main_img.url,
                                        height: n.main_img.height,
                                        width: n.main_img.width
                                    }),
                                    n.icon && (t.native.icon = {
                                        url: n.icon.url,
                                        height: n.icon.height,
                                        width: n.icon.width
                                    });
                                } else {
                                    o(t, {
                                        width: r.rtb.banner.width,
                                        height: r.rtb.banner.height,
                                        ad: r.rtb.banner.content
                                    });
                                    try {
                                        var i = r.rtb.trackers[0].impression_urls[0]
                                          , d = u.createTrackPixelHtml(i);
                                        t.ad += d;
                                    } catch (e) {
                                        u.logError("Error appending tracking pixel", e);
                                    }
                                }
                                return t;
                            }(e, t, i);
                            s.mediaType = (a = t.ad_type) === m.VIDEO ? m.VIDEO : a === m.NATIVE ? m.NATIVE : m.BANNER,
                            d.push(s);
                        }
                    }),
                    d;
                },
                getUserSyncs: function(e) {
                    if (e.iframeEnabled)
                        return [{
                            type: "iframe",
                            url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                        }];
                },
                transformBidParams: function(a, e) {
                    return a = u.convertTypes({
                        member: "string",
                        invCode: "string",
                        placementId: "number",
                        keywords: u.transformBidderParamKeywords
                    }, a),
                    e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule,
                    a.usePaymentRule && delete a.usePaymentRule,
                    Object.keys(a).forEach(function(e) {
                        var r = u.convertCamelToUnderscore(e);
                        r !== e && (a[r] = a[e],
                        delete a[e]);
                    })),
                    a;
                }
            };
            function g(r) {
                var i, d, a = {};
                if (a.sizes = _(r.sizes),
                a.primary_size = a.sizes[0],
                a.ad_types = [],
                a.uuid = r.bidId,
                r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode,
                a.allow_smaller_sizes = r.params.allowSmallerSizes || !1,
                a.use_pmt_rule = r.params.usePaymentRule || !1,
                a.prebid = !0,
                a.disable_psa = !0,
                r.params.reserve && (a.reserve = r.params.reserve),
                r.params.position && (a.position = {
                    above: 1,
                    below: 2
                }[r.params.position] || 0),
                r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode),
                r.params.privateSizes && (a.private_sizes = _(r.params.privateSizes)),
                r.params.supplyType && (a.supply_type = r.params.supplyType),
                r.params.pubClick && (a.pubclick = r.params.pubClick),
                r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode),
                r.params.externalImpId && (a.external_imp_id = r.params.externalImpId),
                u.isEmpty(r.params.keywords) || (a.keywords = u.transformBidderParamKeywords(r.params.keywords)),
                (r.mediaType === m.NATIVE || u.deepAccess(r, "mediaTypes." + m.NATIVE)) && (a.ad_types.push(m.NATIVE),
                r.nativeParams)) {
                    var e = (i = r.nativeParams,
                    d = {},
                    Object.keys(i).forEach(function(e) {
                        var r = b[e] && b[e].serverName || b[e] || e
                          , a = b[e] && b[e].requiredParams;
                        d[r] = o({}, a, i[e]);
                        var t = b[e] && b[e].minimumParams;
                        if (a && t) {
                            var s = Object.keys(i[e])
                              , n = Object.keys(a);
                            0 === s.filter(function(e) {
                                return !(0,
                                f.default)(n, e);
                            }).length && (d[r] = o({}, d[r], t));
                        }
                    }),
                    d);
                    a[m.NATIVE] = {
                        layouts: [e]
                    };
                }
                var t = u.deepAccess(r, "mediaTypes." + m.VIDEO)
                  , s = u.deepAccess(r, "mediaTypes.video.context");
                return (r.mediaType === m.VIDEO || t) && a.ad_types.push(m.VIDEO),
                (r.mediaType === m.VIDEO || t && "outstream" !== s) && (a.require_asset_url = !0),
                r.params.video && (a.video = {},
                Object.keys(r.params.video).filter(function(e) {
                    return (0,
                    f.default)(c, e);
                }).forEach(function(e) {
                    return a.video[e] = r.params.video[e];
                })),
                (u.isEmpty(r.mediaType) && u.isEmpty(r.mediaTypes) || r.mediaType === m.BANNER || r.mediaTypes && r.mediaTypes[m.BANNER]) && a.ad_types.push(m.BANNER),
                a;
            }
            function _(e) {
                var r = []
                  , a = {};
                if (u.isArray(e) && 2 === e.length && !u.isArray(e[0]))
                    a.width = parseInt(e[0], 10),
                    a.height = parseInt(e[1], 10),
                    r.push(a);
                else if ("object" === (void 0 === e ? "undefined" : n(e)))
                    for (var t = 0; t < e.length; t++) {
                        var s = e[t];
                        (a = {}).width = parseInt(s[0], 10),
                        a.height = parseInt(s[1], 10),
                        r.push(a);
                    }
                return r;
            }
            function h(e) {
                return !!e.params.user;
            }
            function I(e) {
                return !!parseInt(e.params.member, 10);
            }
            function E(e) {
                if (e.params)
                    return !!e.params.app;
            }
            function k(e) {
                return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
            }
            function T(e) {
                e.renderer.push(function() {
                    window.ANOutstreamVideo.renderAd({
                        tagId: e.adResponse.tag_id,
                        sizes: [e.getSize().split("x")],
                        targetId: e.adUnitCode,
                        uuid: e.adResponse.uuid,
                        adResponse: e.adResponse,
                        rendererOptions: e.renderer.getConfig()
                    }, function(e, r, a) {
                        e.renderer.handleVideoEvent({
                            id: r,
                            eventName: a
                        });
                    }
                    .bind(null, e));
                });
            }
            (0,
            t.registerBidder)(i);
        },
        137: function(e, r) {}
    }, [135]);
    pbjsChunk([0], {
        291: function(r, e, t) {
            t(292),
            r.exports = t(298);
        },
        292: function(r, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.spec = void 0;
            var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                return typeof r;
            }
            : function(r) {
                return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
            }
              , b = function(r) {
                {
                    if (r && r.__esModule)
                        return r;
                    var e = {};
                    if (null != r)
                        for (var t in r)
                            Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
                    return e.default = r,
                    e;
                }
            }(t(0))
              , n = t(2)
              , h = t(3)
              , i = s(t(293))
              , o = s(t(295))
              , a = t(1);
            function s(r) {
                return r && r.__esModule ? r : {
                    default: r
                };
            }
            var p = [n.BANNER]
              , f = 100
              , c = 35
              , m = !0
              , d = !0;
            0 !== b.getTopWindowLocation().protocol.indexOf("https") && (d = !1);
            var g = d ? "https://as-sec.casalemedia.com/cygnus" : "http://as.casalemedia.com/cygnus"
              , y = {
                JPY: 1
            };
            function u(r) {
                return (0,
                i.default)(r) && 2 === r.length && (0,
                o.default)(r[0]) && (0,
                o.default)(r[1]);
            }
            var v = e.spec = {
                code: "ix",
                supportedMediaTypes: p,
                isBidRequestValid: function(r) {
                    if (!u(r.params.size))
                        return !1;
                    if (!function(r, e) {
                        if (u(r))
                            return r[0] === e[0] && r[1] === e[1];
                        for (var t = 0; t < r.length; t++)
                            if (r[t][0] === e[0] && r[t][1] === e[1])
                                return !0;
                        return !1;
                    }(r.sizes, r.params.size))
                        return !1;
                    if (r.hasOwnProperty("mediaType") && "banner" !== r.mediaType)
                        return !1;
                    if (r.hasOwnProperty("mediaTypes") && !b.deepAccess(r, "mediaTypes.banner.sizes"))
                        return !1;
                    if ("string" != typeof r.params.siteId && "number" != typeof r.params.siteId)
                        return !1;
                    var e, t, n = r.params.hasOwnProperty("bidFloor"), i = r.params.hasOwnProperty("bidFloorCur");
                    return !n && !i || n && i && (e = r.params.bidFloor,
                    t = r.params.bidFloorCur,
                    Boolean("number" == typeof e && "string" == typeof t && t.match(/^[A-Z]{3}$/)));
                },
                buildRequests: function(r, e) {
                    for (var t, n, i = [], o = null, a = null, s = 0; s < r.length; s++)
                        o = r[s],
                        n = void 0,
                        (n = {}).id = (t = o).bidId,
                        n.banner = {},
                        n.banner.w = t.params.size[0],
                        n.banner.h = t.params.size[1],
                        n.banner.topframe = b.inIframe() ? 0 : 1,
                        n.ext = {},
                        n.ext.siteID = t.params.siteId,
                        !t.params.hasOwnProperty("id") || "string" != typeof t.params.id && "number" != typeof t.params.id ? n.ext.sid = t.params.size[0] + "x" + t.params.size[1] : n.ext.sid = String(t.params.id),
                        t.params.hasOwnProperty("bidFloor") && t.params.hasOwnProperty("bidFloorCur") && (n.bidfloor = t.params.bidFloor,
                        n.bidfloorcur = t.params.bidFloorCur),
                        a = n,
                        i.push(a);
                    var p = {};
                    if (p.id = r[0].bidderRequestId,
                    p.imp = i,
                    p.site = {},
                    p.site.page = b.getTopWindowUrl(),
                    p.site.ref = b.getTopWindowReferrer(),
                    p.ext = {},
                    p.ext.source = "prebid",
                    e && e.gdprConsent) {
                        var d = e.gdprConsent;
                        d.hasOwnProperty("gdprApplies") && (p.regs = {
                            ext: {
                                gdpr: d.gdprApplies ? 1 : 0
                            }
                        }),
                        d.hasOwnProperty("consentString") && (p.user = {
                            ext: {
                                consent: d.consentString || ""
                            }
                        });
                    }
                    var u = {}
                      , f = h.config.getConfig("ix");
                    if (f) {
                        if ("object" === l(f.firstPartyData)) {
                            var c = f.firstPartyData
                              , m = "?";
                            for (var y in c)
                                c.hasOwnProperty(y) && (m += encodeURIComponent(y) + "=" + encodeURIComponent(c[y]) + "&");
                            m = m.slice(0, -1),
                            p.site.page += m;
                        }
                        "number" == typeof f.timeout && (u.t = f.timeout);
                    }
                    return u.s = r[0].params.siteId,
                    u.v = 7.2,
                    u.r = JSON.stringify(p),
                    u.ac = "j",
                    u.sd = 1,
                    {
                        method: "GET",
                        url: g,
                        data: u
                    };
                },
                interpretResponse: function(r) {
                    var e = []
                      , t = null;
                    if (!r.hasOwnProperty("body") || !r.body.hasOwnProperty("seatbid"))
                        return e;
                    for (var n, i, o, a = r.body, s = a.seatbid, p = 0; p < s.length; p++)
                        if (s[p].hasOwnProperty("bid"))
                            for (var d = s[p].bid, u = 0; u < d.length; u++)
                                n = d[u],
                                i = a.cur,
                                o = void 0,
                                o = {},
                                y.hasOwnProperty(i) ? o.cpm = n.price / y[i] : o.cpm = n.price / f,
                                o.requestId = n.impid,
                                o.width = n.w,
                                o.height = n.h,
                                o.ad = n.adm,
                                o.dealId = b.deepAccess(n, "ext.dealid"),
                                o.ttl = c,
                                o.netRevenue = m,
                                o.currency = i,
                                o.creativeId = n.hasOwnProperty("crid") ? n.crid : "-",
                                t = o,
                                e.push(t);
                    return e;
                },
                transformBidParams: function(r, e) {
                    return b.convertTypes({
                        siteID: "number"
                    }, r);
                }
            };
            (0,
            a.registerBidder)(v);
        },
        293: function(r, e, t) {
            t(294),
            r.exports = t(13).Array.isArray;
        },
        294: function(r, e, t) {
            var n = t(14);
            n(n.S, "Array", {
                isArray: t(38)
            });
        },
        295: function(r, e, t) {
            t(296),
            r.exports = t(13).Number.isInteger;
        },
        296: function(r, e, t) {
            var n = t(14);
            n(n.S, "Number", {
                isInteger: t(297)
            });
        },
        297: function(r, e, t) {
            var n = t(15)
              , i = Math.floor;
            r.exports = function(r) {
                return !n(r) && isFinite(r) && i(r) === r;
            }
            ;
        },
        298: function(r, e) {}
    }, [291]);
    pbjsChunk([73], {
        357: function(e, t, r) {
            r(358),
            e.exports = r(359);
        },
        358: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.spec = void 0;
            var o = function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return function(e, t) {
                        var r = []
                          , n = !0
                          , i = !1
                          , a = void 0;
                        try {
                            for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value),
                            !t || r.length !== t); n = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            a = e;
                        } finally {
                            try {
                                !n && o.return && o.return();
                            } finally {
                                if (i)
                                    throw a;
                            }
                        }
                        return r;
                    }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
            t.resetBoPixel = function() {
                f = !0;
            }
            ;
            var d = r(3)
              , n = r(1)
              , c = function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e,
                    t;
                }
            }(r(0))
              , u = r(18)
              , p = r(2)
              , m = r(11);
            var i = [p.BANNER, p.VIDEO]
              , l = "openx"
              , a = "hb_pb"
              , s = "2.1.4"
              , f = !0;
            var h = t.spec = {
                code: l,
                supportedMediaTypes: i,
                isBidRequestValid: function(e) {
                    return c.deepAccess(e, "mediaTypes.banner") && e.params.delDomain ? !!e.params.unit || 0 < c.deepAccess(e, "mediaTypes.banner.sizes.length") : !(!e.params.unit || !e.params.delDomain);
                },
                buildRequests: function(e, a) {
                    if (0 === e.length)
                        return [];
                    var s = []
                      , t = e.reduce(function(e, t) {
                        var r;
                        return r = t,
                        c.deepAccess(r, "mediaTypes.video") || r.mediaType === p.VIDEO ? e[0].push(t) : e[1].push(t),
                        e;
                    }, [[], []])
                      , r = o(t, 2)
                      , n = r[0]
                      , i = r[1];
                    return 0 < i.length && s.push(function(e, t) {
                        var r = []
                          , n = !1
                          , i = b(e, t)
                          , a = c._map(e, function(e) {
                            return e.params.unit;
                        });
                        i.aus = c._map(e, function(e) {
                            return c.parseSizesInput(e.sizes).join(",");
                        }).join("|"),
                        i.divIds = c._map(e, function(e) {
                            return encodeURIComponent(e.adUnitCode);
                        }).join(","),
                        a.some(function(e) {
                            return e;
                        }) && (i.auid = a.join(","));
                        e.some(function(e) {
                            return e.params.doNotTrack;
                        }) && (i.ns = 1);
                        e.some(function(e) {
                            return e.params.coppa;
                        }) && (i.tfcd = 1);
                        e.forEach(function(i) {
                            if (i.params.customParams) {
                                var e = c._map(Object.keys(i.params.customParams), function(e) {
                                    return t = e,
                                    r = i.params.customParams,
                                    n = r[t],
                                    c.isArray(n) && (n = n.join(",")),
                                    (t.toLowerCase() + "=" + n.toLowerCase()).replace("+", ".").replace("/", "_");
                                    var t, r, n;
                                })
                                  , t = window.btoa(e.join("&"));
                                n = !0,
                                r.push(t);
                            } else
                                r.push("");
                        }),
                        n && (i.tps = r.join(","));
                        var s = []
                          , o = !1;
                        e.forEach(function(e) {
                            e.params.customFloor ? (s.push(1e3 * e.params.customFloor),
                            o = !0) : s.push(0);
                        }),
                        o && (i.aumfs = s.join(","));
                        return {
                            method: "GET",
                            url: "//" + e[0].params.delDomain + "/w/1.0/arj",
                            data: i,
                            payload: {
                                bids: e,
                                startTime: new Date()
                            }
                        };
                    }(i, a)),
                    0 < n.length && n.forEach(function(e) {
                        var t, r, n, i;
                        s.push((r = a,
                        n = "//" + (t = e).params.delDomain + "/v/1.0/avjp",
                        i = function(e, t) {
                            var r = b([e], t)
                              , n = c.deepAccess(e, "params.video") || {}
                              , i = c.deepAccess(e, "mediaTypes.video.context")
                              , a = c.deepAccess(e, "mediaTypes.video.playerSize")
                              , s = void 0
                              , o = void 0;
                            c.isArray(e.sizes) && 2 === e.sizes.length && !c.isArray(e.sizes[0]) ? (s = parseInt(e.sizes[0], 10),
                            o = parseInt(e.sizes[1], 10)) : c.isArray(e.sizes) && c.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (s = parseInt(e.sizes[0][0], 10),
                            o = parseInt(e.sizes[0][1], 10)) : c.isArray(a) && 2 === a.length && (s = parseInt(a[0], 10),
                            o = parseInt(a[1], 10));
                            Object.keys(n).forEach(function(e) {
                                "openrtb" === e ? (n[e].w = s || n[e].w,
                                n[e].v = o || n[e].v,
                                r[e] = JSON.stringify(n[e])) : e in r || "url" === e || (r[e] = n[e]);
                            }),
                            r.auid = e.params.unit,
                            r.vwd = s || n.vwd,
                            r.vht = o || n.vht,
                            "outstream" === i && (r.vos = "101");
                            n.mimes && (r.vmimes = n.mimes);
                            return r;
                        }(t, r),
                        {
                            method: "GET",
                            url: n,
                            data: i,
                            payload: {
                                bid: t,
                                startTime: new Date()
                            }
                        }));
                    }),
                    s;
                },
                interpretResponse: function(e, t) {
                    var r = e.body;
                    return (/avjp$/.test(t.url) ? p.VIDEO : p.BANNER) === p.VIDEO ? function(e, t) {
                        var r = t.bid
                          , n = t.startTime
                          , i = [];
                        if (void 0 !== e && "" !== e.vastUrl && "" !== e.pub_rev) {
                            var a = (0,
                            m.parse)(e.vastUrl).search || {}
                              , s = {};
                            s.requestId = r.bidId,
                            s.bidderCode = l,
                            s.ttl = 300,
                            s.netRevenue = !0,
                            s.currency = e.currency,
                            s.cpm = Number(e.pub_rev) / 1e3,
                            s.width = e.width,
                            s.height = e.height,
                            s.creativeId = e.adid,
                            s.vastUrl = e.vastUrl,
                            s.mediaType = p.VIDEO,
                            e.ph = a.ph,
                            e.colo = a.colo,
                            e.ts = a.ts,
                            i.push(s),
                            g(p.VIDEO, e, n);
                        }
                        return i;
                    }(r, t.payload) : function(e, t) {
                        for (var r = t.bids, n = t.startTime, i = e.ads.ad, a = [], s = 0; s < i.length; s++) {
                            var o = i[s]
                              , d = parseInt(o.idx, 10)
                              , c = {};
                            if (c.requestId = r[d].bidId,
                            o.pub_rev) {
                                c.cpm = Number(o.pub_rev) / 1e3;
                                var u = o.creative[0];
                                u && (c.width = u.width,
                                c.height = u.height),
                                c.creativeId = u.id,
                                c.ad = o.html,
                                o.deal_id && (c.dealId = o.deal_id),
                                c.ttl = 300,
                                c.netRevenue = !0,
                                c.currency = o.currency,
                                o.tbd && (c.tbd = o.tbd),
                                c.ts = o.ts,
                                a.push(c),
                                g(p.BANNER, o, n);
                            }
                        }
                        return a;
                    }(r, t.payload);
                },
                getUserSyncs: function(e, t) {
                    if (e.iframeEnabled)
                        return [{
                            type: "iframe",
                            url: c.deepAccess(t, "0.body.ads.pixels") || c.deepAccess(t, "0.body.pixels") || "//u.openx.net/w/1.0/pd"
                        }];
                },
                transformBidParams: function(e, t) {
                    return c.convertTypes({
                        unit: "string",
                        customFloor: "number"
                    }, e);
                }
            };
            function v(t) {
                for (var e in t)
                    t.hasOwnProperty(e) && (t[e] || delete t[e]);
                return c._map(Object.keys(t), function(e) {
                    return e + "=" + t[e];
                }).join("&");
            }
            function b(e, t) {
                var r = c.inIframe()
                  , n = void 0;
                if (n = {
                    ju: d.config.getConfig("pageUrl") || c.getTopWindowUrl(),
                    jr: c.getTopWindowReferrer(),
                    ch: document.charSet || document.characterSet,
                    res: screen.width + "x" + screen.height + "x" + screen.colorDepth,
                    ifr: r,
                    tz: new Date().getTimezoneOffset(),
                    tws: function(e) {
                        var t = void 0
                          , r = void 0
                          , n = window
                          , i = document
                          , a = i.documentElement
                          , s = void 0;
                        if (e) {
                            try {
                                n = window.top,
                                i = window.top.document;
                            } catch (e) {
                                return;
                            }
                            a = i.documentElement,
                            s = i.body,
                            t = n.innerWidth || a.clientWidth || s.clientWidth,
                            r = n.innerHeight || a.clientHeight || s.clientHeight;
                        } else
                            a = i.documentElement,
                            t = n.innerWidth || a.clientWidth,
                            r = n.innerHeight || a.clientHeight;
                        return t + "x" + r;
                    }(r),
                    be: 1,
                    bc: e[0].params.bc || a + "_" + s,
                    dddid: c._map(e, function(e) {
                        return e.transactionId;
                    }).join(","),
                    nocache: new Date().getTime()
                },
                c.deepAccess(t, "gdprConsent")) {
                    var i = t.gdprConsent;
                    void 0 !== i.consentString && (n.gdpr_consent = i.consentString),
                    void 0 !== i.gdprApplies && (n.gdpr = i.gdprApplies ? 1 : 0),
                    "iab" === d.config.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1);
                }
                return n;
            }
            function g(e, t, r) {
                if (f) {
                    f = !1;
                    var n = d.config.getConfig("bidderTimeout")
                      , i = void 0;
                    window.PREBID_TIMEOUT && (n = Math.min(window.PREBID_TIMEOUT, n));
                    var a = {
                        bd: +new Date() - r,
                        bp: t.pub_rev,
                        br: "0",
                        bs: c.getTopWindowLocation().hostname,
                        bt: n,
                        ts: t.ts
                    };
                    if (a.br = a.bt < a.bd ? "t" : "p",
                    e === p.VIDEO) {
                        var s = (0,
                        m.parse)(t.colo);
                        a.ph = t.ph,
                        i = "//" + s.hostname + "/w/1.0/bo?" + v(a);
                    } else {
                        var o = c.deepAccess(t, "creative.0.tracking.impression").match(/([^?]+\/)ri\?/);
                        o && 1 < o.length && (i = o[1] + "bo?" + v(a));
                    }
                    i && u.userSync.registerSync("image", l, i);
                }
            }
            (0,
            n.registerBidder)(h);
        },
        359: function(e, t) {}
    }, [357]);
    pbjsChunk([47], {
        442: function(e, r, t) {
            t(443),
            e.exports = t(444);
        },
        443: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.spec = r.SYNC_ENDPOINT = r.VIDEO_ENDPOINT = r.FASTLANE_ENDPOINT = void 0;
            var u = function(e, r) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return function(e, r) {
                        var t = []
                          , i = !0
                          , n = !1
                          , o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value),
                            !r || t.length !== r); i = !0)
                                ;
                        } catch (e) {
                            n = !0,
                            o = e;
                        } finally {
                            try {
                                !i && s.return && s.return();
                            } finally {
                                if (n)
                                    throw o;
                            }
                        }
                        return t;
                    }(e, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
              , p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }
            ;
            r.hasVideoMediaType = c,
            r.masSizeOrdering = h,
            r.resetUserSync = function() {
                A = !1;
            }
            ;
            var l = function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var r = {};
                    if (null != e)
                        for (var t in e)
                            Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e,
                    r;
                }
            }(t(0))
              , i = t(1)
              , f = t(3)
              , v = t(2);
            var y = "pbjs_lite_v1.26.0-pre";
            var a = r.FASTLANE_ENDPOINT = "//localhost:7070/slowlane.json"
              , s = r.VIDEO_ENDPOINT = "//fastlane-adv.rubiconproject.com/v1/auction/video"
              , n = r.SYNC_ENDPOINT = "https://eus.rubiconproject.com/usync.html"
              , g = {
                1: "468x60",
                2: "728x90",
                5: "120x90",
                8: "120x600",
                9: "160x600",
                10: "300x600",
                13: "200x200",
                14: "250x250",
                15: "300x250",
                16: "336x280",
                19: "300x100",
                31: "980x120",
                32: "250x360",
                33: "180x500",
                35: "980x150",
                37: "468x400",
                38: "930x180",
                39: "750x100",
                40: "750x200",
                41: "750x300",
                43: "320x50",
                44: "300x50",
                48: "300x300",
                53: "1024x768",
                54: "300x1050",
                55: "970x90",
                57: "970x250",
                58: "1000x90",
                59: "320x80",
                60: "320x150",
                61: "1000x1000",
                64: "580x500",
                65: "640x480",
                67: "320x480",
                68: "1800x1000",
                72: "320x320",
                73: "320x160",
                78: "980x240",
                79: "980x300",
                80: "980x400",
                83: "480x300",
                94: "970x310",
                96: "970x210",
                101: "480x320",
                102: "768x1024",
                103: "480x280",
                108: "320x240",
                113: "1000x300",
                117: "320x100",
                125: "800x250",
                126: "200x600",
                144: "980x600",
                159: "320x250",
                195: "600x300",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                229: "320x180",
                232: "580x400",
                257: "400x600"
            };
            l._each(g, function(e, r) {
                return g[e] = r;
            });
            var d = r.spec = {
                code: "rubicon",
                aliases: ["rubiconLite"],
                supportedMediaTypes: [v.BANNER, v.VIDEO],
                isBidRequestValid: function(e) {
                    return "object" === p(e.params) && !!/^\d+$/.test(e.params.accountId) && !!x(e, !0);
                },
                buildRequests: function(e, o) {
                    var r = []
                      , t = e.filter(function(e) {
                        return "video" === x(e);
                    }).map(function(e) {
                        e.startTime = new Date().getTime();
                        var r = e.params
                          , t = _(e)
                          , i = {
                            page_url: b(e),
                            resolution: m(),
                            account_id: r.accountId,
                            integration: y,
                            "x_source.tid": e.transactionId,
                            timeout: o.timeout - (Date.now() - o.auctionStart + 500),
                            stash_creatives: !0,
                            slots: []
                        }
                          , n = {
                            site_id: r.siteId,
                            zone_id: r.zoneId,
                            position: "atf" === r.position || "btf" === r.position ? r.position : "unknown",
                            floor: .01 < parseFloat(r.floor) ? r.floor : .01,
                            element_id: e.adUnitCode,
                            name: e.adUnitCode,
                            width: t[0],
                            height: t[1],
                            size_id: "outstream" === l.deepAccess(e, "mediaTypes." + v.VIDEO + ".context") ? 203 : r.video.size_id
                        };
                        return r.video && (i.ae_pass_through_parameters = r.video.aeParams,
                        n.language = r.video.language),
                        r.inventory && "object" === p(r.inventory) && (n.inventory = r.inventory),
                        r.keywords && Array.isArray(r.keywords) && (n.keywords = r.keywords),
                        r.visitor && "object" === p(r.visitor) && (n.visitor = r.visitor),
                        i.slots.push(n),
                        o.gdprConsent && ("boolean" == typeof o.gdprConsent.gdprApplies && (i.gdpr = Number(o.gdprConsent.gdprApplies)),
                        i.gdpr_consent = o.gdprConsent.consentString),
                        {
                            method: "POST",
                            url: s,
                            data: i,
                            bidRequest: e
                        };
                    });
                    if (!0 !== f.config.getConfig("rubicon.singleRequest"))
                        r = t.concat(e.filter(function(e) {
                            return "banner" === x(e);
                        }).map(function(e) {
                            var i = d.createSlotParams(e, o);
                            return {
                                method: "GET",
                                url: a,
                                data: d.getOrderedParams(i).reduce(function(e, r) {
                                    var t = i[r];
                                    return l.isStr(t) && "" !== t || l.isNumber(t) ? "" + e + r + "=" + encodeURIComponent(t) + "&" : e;
                                }, "") + "slots=1&rand=" + Math.random(),
                                bidRequest: e
                            };
                        }));
                    else {
                        var n = e.filter(function(e) {
                            return "banner" === x(e);
                        }).reduce(function(e, r) {
                            return (e[r.params.siteId] = e[r.params.siteId] || []).push(r),
                            e;
                        }, {});
                        r = t.concat(Object.keys(n).map(function(e) {
                            var r = n[e];
                            10 < r.length && (l.logWarn("Rubicon bid adapter Warning: single request mode has a limit of 10 bids: " + (r.length - 10) + " bids were not sent"),
                            r = r.slice(0, 10));
                            var i = d.combineSlotUrlParams(r.map(function(e) {
                                return d.createSlotParams(e, o);
                            }));
                            return {
                                method: "GET",
                                url: a,
                                data: d.getOrderedParams(i).reduce(function(e, r) {
                                    var t = i[r];
                                    return l.isStr(t) && "" !== t || l.isNumber(t) ? "" + e + r + "=" + encodeURIComponent(t) + "&" : e;
                                }, "") + "slots=" + r.length + "&rand=" + Math.random(),
                                bidRequest: r
                            };
                        }));
                    }
                    return r;
                },
                getOrderedParams: function(e) {
                    var r = /^tg_v/
                      , t = /^tg_i/
                      , i = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(e).filter(function(e) {
                        return r.test(e);
                    })).concat(Object.keys(e).filter(function(e) {
                        return t.test(e);
                    })).concat(["tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                    return i.concat(Object.keys(e).filter(function(e) {
                        return -1 === i.indexOf(e);
                    }));
                },
                combineSlotUrlParams: function(n) {
                    if (1 === n.length)
                        return n[0];
                    var i = n.reduce(function(r, t, i) {
                        return Object.keys(t).forEach(function(e) {
                            r.hasOwnProperty(e) || (r[e] = new Array(n.length)),
                            r[e].splice(i, 1, t[e]);
                        }),
                        r;
                    }, {})
                      , o = new RegExp("^([^;]*)(;\\1)+$");
                    return Object.keys(i).forEach(function(e) {
                        var r = i[e].join(";")
                          , t = r.match(o);
                        i[e] = t ? t[1] : r;
                    }),
                    i;
                },
                createSlotParams: function(e, r) {
                    e.startTime = new Date().getTime();
                    var t = e.params
                      , i = _(e)
                      , n = t.latLong || []
                      , o = u(n, 2)
                      , a = o[0]
                      , s = o[1]
                      , d = {
                        account_id: t.accountId,
                        site_id: t.siteId,
                        zone_id: t.zoneId,
                        size_id: i[0],
                        alt_size_ids: i.slice(1).join(",") || void 0,
                        p_pos: "atf" === t.position || "btf" === t.position ? t.position : "unknown",
                        rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                        rp_secure: "https:" === location.protocol ? "1" : "0",
                        tk_flint: y,
                        "x_source.tid": e.transactionId,
                        p_screen_res: m(),
                        kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                        tk_user_key: t.userId,
                        "p_geo.latitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                        "p_geo.longitude": isNaN(parseFloat(s)) ? void 0 : parseFloat(s).toFixed(4),
                        "tg_fl.eid": e.code,
                        rf: b(e)
                    };
                    r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (d.gdpr = Number(r.gdprConsent.gdprApplies)),
                    d.gdpr_consent = r.gdprConsent.consentString),
                    null !== t.visitor && "object" === p(t.visitor) && Object.keys(t.visitor).forEach(function(e) {
                        d["tg_v." + e] = t.visitor[e].toString();
                    }),
                    null !== t.inventory && "object" === p(t.inventory) && Object.keys(t.inventory).forEach(function(e) {
                        d["tg_i." + e] = t.inventory[e].toString();
                    });
                    var c = function() {
                        var e = (r = window.DigiTrust && (f.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                            member: "T9QSFKPDN9"
                        })),
                        r && r.success && r.identity || null);
                        var r;
                        if (!e || e.privacy && e.privacy.optout)
                            return [];
                        return {
                            "dt.id": e.id,
                            "dt.keyv": e.keyv,
                            "dt.pref": 0
                        };
                    }();
                    return Object.keys(c).forEach(function(e) {
                        d[e] = c[e];
                    }),
                    d;
                },
                interpretResponse: function(d, e) {
                    var c = e.bidRequest;
                    if (!(d = d.body) || "object" !== (void 0 === d ? "undefined" : p(d)))
                        return [];
                    var r = d.ads;
                    return "object" !== (void 0 === c ? "undefined" : p(c)) || Array.isArray(c) || "video" !== x(c) || "object" !== (void 0 === r ? "undefined" : p(r)) || (r = r[c.adUnitCode]),
                    !Array.isArray(r) || r.length < 1 ? [] : r.reduce(function(e, r, t) {
                        if ("ok" !== r.status)
                            return e;
                        var i, n = Array.isArray(c) ? c[t] : c;
                        if (n && "object" === (void 0 === n ? "undefined" : p(n))) {
                            var o = {
                                requestId: n.bidId,
                                currency: "USD",
                                creativeId: r.creative_id || (r.network || "") + "-" + (r.advertiser || ""),
                                cpm: r.cpm || 0,
                                dealId: r.deal,
                                ttl: 300,
                                netRevenue: f.config.getConfig("rubicon.netRevenue") || !1,
                                rubicon: {
                                    advertiserId: r.advertiser,
                                    networkId: r.network
                                }
                            };
                            if (r.creative_type && (o.mediaType = r.creative_type),
                            r.creative_type === v.VIDEO)
                                o.width = n.params.video.playerWidth,
                                o.height = n.params.video.playerHeight,
                                o.vastUrl = r.creative_depot_url,
                                o.impression_id = r.impression_id,
                                o.videoCacheKey = r.impression_id;
                            else {
                                o.ad = (i = r.script,
                                "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='" + r.impression_id + "'>\n<script type='text/javascript'>" + i + "<\/script>\n</div>\n</body>\n</html>");
                                var a = g[r.size_id].split("x").map(function(e) {
                                    return Number(e);
                                })
                                  , s = u(a, 2);
                                o.width = s[0],
                                o.height = s[1];
                            }
                            o.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(function(e, r) {
                                return e[r.key] = r.values[0],
                                e;
                            }, {
                                rpfl_elemid: n.adUnitCode
                            }),
                            e.push(o);
                        } else
                            l.logError("Rubicon bid adapter Error: bidRequest undefined at index position:" + t, c, d);
                        return e;
                    }, []).sort(function(e, r) {
                        return (r.cpm || 0) - (e.cpm || 0);
                    });
                },
                getUserSyncs: function(e, r, t) {
                    if (!A && e.iframeEnabled) {
                        var i = "";
                        return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? i += "?gdpr=" + Number(t.gdprApplies) + "&gdpr_consent=" + t.consentString : i += "?gdpr_consent=" + t.consentString),
                        A = !0,
                        {
                            type: "iframe",
                            url: n + i
                        };
                    }
                },
                transformBidParams: function(e, r) {
                    return l.convertTypes({
                        accountId: "number",
                        siteId: "number",
                        zoneId: "number"
                    }, e);
                }
            };
            function m() {
                return [window.screen.width, window.screen.height].join("x");
            }
            function b(e) {
                var r = f.config.getConfig("pageUrl");
                return e.params.referrer ? r = e.params.referrer : r || (r = l.getTopWindowUrl()),
                e.params.secure ? r.replace(/^http:/i, "https:") : r;
            }
            function _(e) {
                var r = e.params;
                if (c(e)) {
                    var t = [];
                    return r.video && r.video.playerWidth && r.video.playerHeight ? t = [r.video.playerWidth, r.video.playerHeight] : Array.isArray(l.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? t = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (t = e.sizes[0]),
                    t;
                }
                var i = [];
                return Array.isArray(r.sizes) ? i = r.sizes : void 0 !== l.deepAccess(e, "mediaTypes.banner.sizes") ? i = o(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? i = o(e.sizes) : l.logWarn("Warning: no sizes are setup or found"),
                h(i);
            }
            function o(e) {
                return l.parseSizesInput(e).reduce(function(e, r) {
                    var t = parseInt(g[r], 10);
                    return t && e.push(t),
                    e;
                }, []);
            }
            function c(e) {
                return e.mediaType === v.VIDEO || void 0 !== l.deepAccess(e, "mediaTypes." + v.VIDEO);
            }
            function x(e) {
                var r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                  , t = void 0;
                if (c(e)) {
                    if (t = !0,
                    "instream" === l.deepAccess(e, "mediaTypes." + v.VIDEO + ".context") || e.mediaType === v.VIDEO ? void 0 === l.deepAccess(e, "params.video.size_id") && (r && l.logError("Rubicon bid adapter Error: size id is missing for instream video request."),
                    t = !1) : "outstream" === l.deepAccess(e, "mediaTypes." + v.VIDEO + ".context") ? 203 !== l.deepAccess(e, "params.video.size_id") && r && l.logWarn("Rubicon bid adapter Warning: outstream video is sending invalid size id, converting size id to 203.") : (r && l.logError("Rubicon bid adapter Error: no instream or outstream context defined in mediaTypes."),
                    t = !1),
                    t)
                        return void 0 !== l.deepAccess(e, "mediaTypes." + v.BANNER) && r && l.logWarn("Rubicon bid adapter Warning: video and banner requested for same adUnit, continuing with video request, multi-format request is not supported by rubicon yet."),
                        "video";
                    if (void 0 === l.deepAccess(e, "mediaTypes." + v.BANNER))
                        return;
                }
                if (0 < _(e).length)
                    return r && !1 === t && l.logWarn("Rubicon bid adapter Warning: invalid video requested for adUnit, continuing with banner request."),
                    "banner";
            }
            function h(e) {
                var n = [15, 2, 9];
                return e.sort(function(e, r) {
                    var t = n.indexOf(e)
                      , i = n.indexOf(r);
                    return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r;
                });
            }
            var A = !1;
            (0,
            i.registerBidder)(d);
        },
        444: function(e, r) {}
    }, [442]);
    pbjsChunk([32], {
        493: function(e, r, t) {
            t(494),
            e.exports = t(495);
        },
        494: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.tripleliftAdapterSpec = void 0;
            var n = t(2)
              , i = t(1)
              , p = function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var r = {};
                    if (null != e)
                        for (var t in e)
                            Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e,
                    r;
                }
            }(t(0));
            var o = document.location.protocol + "//tlx.3lift.com/header/auction?"
              , u = !0
              , a = null
              , d = r.tripleliftAdapterSpec = {
                code: "triplelift",
                supportedMediaTypes: [n.BANNER],
                isBidRequestValid: function(e) {
                    return void 0 !== e.params.inventoryCode;
                },
                buildRequests: function(e, r) {
                    var t, n = o, i = p.getTopWindowUrl(), d = ((t = {}).imp = e.map(function(e, r) {
                        return {
                            id: r,
                            tagid: e.params.inventoryCode,
                            floor: e.params.floor,
                            banner: {
                                format: (t = e.sizes,
                                t.filter(l).map(function(e) {
                                    return {
                                        w: e[0],
                                        h: e[1]
                                    };
                                }))
                            }
                        };
                        var t;
                    }),
                    t);
                    return n = p.tryAppendQueryString(n, "lib", "prebid"),
                    n = p.tryAppendQueryString(n, "v", "1.26.0-pre"),
                    n = p.tryAppendQueryString(n, "referrer", i),
                    r && r.timeout && (n = p.tryAppendQueryString(n, "tmax", r.timeout)),
                    r && r.gdprConsent && (void 0 !== r.gdprConsent.gdprApplies && (u = r.gdprConsent.gdprApplies,
                    n = p.tryAppendQueryString(n, "gdpr", u.toString())),
                    void 0 !== r.gdprConsent.consentString && (a = r.gdprConsent.consentString,
                    n = p.tryAppendQueryString(n, "cmp_cs", a))),
                    n.lastIndexOf("&") === n.length - 1 && (n = n.substring(0, n.length - 1)),
                    p.logMessage("tlCall request built: " + n),
                    {
                        method: "POST",
                        url: n,
                        data: d,
                        bidderRequest: r
                    };
                },
                interpretResponse: function(e, r) {
                    var t = r.bidderRequest;
                    return (e.body.bids || []).map(function(e) {
                        return function(e, r) {
                            var t = {}
                              , n = r.width || 1
                              , i = r.height || 1
                              , d = r.deal_id || ""
                              , p = r.imp_id;
                            0 != r.cpm && r.ad && (t = {
                                requestId: e.bids[p].bidId,
                                cpm: r.cpm,
                                width: n,
                                height: i,
                                netRevenue: !0,
                                ad: r.ad,
                                creativeId: p,
                                dealId: d,
                                currency: "USD",
                                ttl: 33
                            });
                            return t;
                        }(t, e);
                    });
                },
                getUserSyncs: function(e) {
                    var r = "//ib.3lift.com/sync?";
                    if (null !== a && (r = p.tryAppendQueryString(r, "gdpr", u),
                    r = p.tryAppendQueryString(r, "cmp_cs", a)),
                    e.iframeEnabled)
                        return [{
                            type: "iframe",
                            url: r
                        }];
                }
            };
            function l(e) {
                return 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1];
            }
            (0,
            i.registerBidder)(d);
        },
        495: function(e, r) {}
    }, [493]);
    pbjs.processQueue();
    return pbjs;
});
/*wfsw*/
/*wfsw:favorites_constants*/
define('favorites_constants', ['lnrs'], function(_Lnrs) {
    'use strict';
    var _turbine_helper_amd = require('turbine_helper_amd')
      , Lnrs = _turbine_helper_amd.interopRequireAmd(_Lnrs);
    var TYPE_PRODUCT = 1;
    var TYPE_CONFIGURED_PRODUCT = 2;
    var TYPE_PHOTO = 3;
    var TYPE_CONTENT = 4;
    var TYPE_COLOR_SWATCH = 5;
    var TYPE_ARTICLE = 6;
    var TYPE_REGISTRY_PRODUCT = 7;
    var TYPE_VIDEO_CAMPAIGN_CLIP = 8;
    var TYPE_MULTIMEDIA_CAMPAIGN = 9;
    var TYPE_KIT = 10;
    var TYPE_UPLOADED_PRODUCT = 11;
    var TYPE_SHARE_AND_EARN = 12;
    var TYPE_MANUFACTURER = 13;
    var TYPE_CLIPPED_PRODUCT = 15;
    return {
        VIEW_IN_ROOM_DEFAULT_BACKGROUND_ID: 47963691,
        VIEW_IN_ROOM_BLANK_CANVAS_ID: 39945541,
        VIEW_IN_ROOM_MILLISECONDS_BEFORE_AUTOSAVE: 5000,
        TYPE_PRODUCT: TYPE_PRODUCT,
        TYPE_CONFIGURED_PRODUCT: TYPE_CONFIGURED_PRODUCT,
        TYPE_PHOTO: TYPE_PHOTO,
        TYPE_CONTENT: TYPE_CONTENT,
        TYPE_COLOR_SWATCH: TYPE_COLOR_SWATCH,
        TYPE_ARTICLE: TYPE_ARTICLE,
        TYPE_REGISTRY_PRODUCT: TYPE_REGISTRY_PRODUCT,
        TYPE_VIDEO_CAMPAIGN_CLIP: TYPE_VIDEO_CAMPAIGN_CLIP,
        TYPE_MULTIMEDIA_CAMPAIGN: TYPE_MULTIMEDIA_CAMPAIGN,
        TYPE_KIT: TYPE_KIT,
        TYPE_UPLOADED_PRODUCT: TYPE_UPLOADED_PRODUCT,
        TYPE_SHARE_AND_EARN: TYPE_SHARE_AND_EARN,
        TYPE_MANUFACTURER: TYPE_MANUFACTURER,
        TYPE_CLIPPED_PRODUCT: TYPE_CLIPPED_PRODUCT,
        ALL_TYPES: [TYPE_PRODUCT, TYPE_CONFIGURED_PRODUCT, TYPE_PHOTO, TYPE_CONTENT, TYPE_COLOR_SWATCH, TYPE_ARTICLE, TYPE_REGISTRY_PRODUCT, TYPE_VIDEO_CAMPAIGN_CLIP, TYPE_MULTIMEDIA_CAMPAIGN, TYPE_KIT, TYPE_UPLOADED_PRODUCT, TYPE_SHARE_AND_EARN, TYPE_MANUFACTURER, TYPE_CLIPPED_PRODUCT],
        CONFIGURED_TYPES: [TYPE_CONFIGURED_PRODUCT, TYPE_REGISTRY_PRODUCT],
        ARTICLE_TYPES: [TYPE_CONTENT, TYPE_ARTICLE],
        PRODUCT_TYPES: [TYPE_PRODUCT, TYPE_CONFIGURED_PRODUCT, TYPE_REGISTRY_PRODUCT, TYPE_KIT, TYPE_UPLOADED_PRODUCT, TYPE_CLIPPED_PRODUCT],
        REMOVE: 0,
        ROLE_OWNER: 0,
        ROLE_EDITOR: 1,
        ROLE_VIEWER: 2,
        PREVIEW_ITEMS_PER_BOARD: 4,
        DROP_DOWN_LIST_COUNT: 2,
        DEFAULT_PROFILE_URL: '/v/ideaboards/profile',
        DEFAULT_HEADER_IMAGE_URLS: ['st4/stores/common/boards/fav_woodenchair_hero_icon_mobile.jpg', 'st4/stores/common/boards/not-found-1.jpg', 'st4/stores/common/boards/not-found-2.jpg', 'st4/stores/common/boards/not-found-3.jpg'],
        DEFAULT_SUGGESTED_BOARD_NAMES: [Lnrs.translate('LivingRoom', 'Living Room'), Lnrs.translate('Kitchen', 'Kitchen'), Lnrs.translate('Bathroom', 'Bathroom')],
        LNRS_SIGN_IN_BUTTON: Lnrs.translate('SignIn', 'Sign In'),
        LNRS_CONTINUE_BUTTON: Lnrs.translate('Continue', 'Continue'),
        LNRS_ADMIN_SIGN_IN_BUTTON: Lnrs.translate('SignInAsAdmin', 'Sign In As Admin'),
        LOGIN_NONE: 0,
        LOGIN_RECOGNIZED: 3,
        LOGIN_SOFT: 7,
        LOGIN_PERSISTENT: 11,
        LOGIN_FULL: 13,
        ITEMS_TAB_INDEX: 0,
        BACKGROUNDS_TAB_INDEX: 1,
        CATALOG_TAB_INDEX: 2,
        LAYERS_TAB_INDEX: 3,
        COLORS_TAB_INDEX: 4,
        THUMB_WIDTH: 200,
        THUMB_HEIGHT: 200,
        TYPE_GENERAL_LIST: 1,
        TYPE_SAVED_FROM_CART_LIST: 2,
        TYPE_REGISTRY_LIST: 3,
        TYPE_DESIGNER_SERVICES_LIST: 4,
        TYPE_GRAYMATTER_SERVICES_LIST: 5,
        TYPE_ROOM_PLANNER_LIST: 6,
        TYPE_SHARE_AND_EARN_LIST: 7,
        SESSION_TIMEOUT: 30 * 60,
        BOARDS_STORAGE_KEY: 'boardsLocalStorageKey',
        OPEN_PLAN_LANE_DRAWER_ON_PAGE_LOAD: 'openPlanLaneDrawerOnPageLoad',
        BOARD_ITEMS_TAB_INDEX: 0,
        BOARD_ROOM_PLANNER_TAB_INDEX: 1,
        SKELETON_ITEM_LIST_ID: 0,
        SEARCH_RETURNED_EMPTY: -1,
        ITEM_PLACEHOLDER_VARIATIONS: ['chair', 'desk', 'mixer', 'office_chair'],
        BOARD_CARD_ITEM_COUNT: 4,
        ERROR_MESSAGE: Lnrs.translate('AnErrorHasOccurredPeriodPleaseTryAgainLater', 'An error has occurred. Please try again later.'),
        TOAST_DURATION: 3000,
        POPOVER_CLOSE_TIMEOUT: 2000,
        LEFTNAV_IDEA_BOARD_TAB_INDEX: 0,
        LEFTNAV_ROOM_PLANNER_TAB_INDEX: 1,
        LEFTNAV_DESIGN_SERVICE_TAB_INDEX: 2,
        SHOW_ALL_LIST: 'showAllList',
        LISTS_PER_PAGE: 24,
        FAVORITE_LISTS_NUMBER_OF_SKELETONS_TO_DISPLAY: 4,
        CATALOG_NAVIGATION_SKELETON_COUNT: 9,
        DEFAULT_NON_EXISTENT_ROOM: 0,
        DEFAULT_NON_EXISTENT_LIST: 0,
        SKELETON_SAVED_ROOM_CARD_COUNT: 4,
        FAVORITES_LIST_PAGE_INITAL_NUMBER_OF_SKELETONS: 12,
        CONTROL: 'Control',
        DEFERRED_LOGIN_ONE_STEP: 'deferred_login_one_step',
        DEFERRED_LOGIN_TWO_STEPS: 'deferred_login_two_steps',
        INIT_LISTS_COUNT: 8,
        LISTS_PER_QUERY: 48,
        FAVORITES_BUTTON_TRACKING_EVENT: 'FAV_MobileHeartClick',
        BOARD_DELETE: 'BOARD_DELETE',
        FETCH_HEARTS_ERROR_MESSAGE: Lnrs.translate('AnErrorHasOccurredWhenFetchHearts', 'An error has occurred when fetch hearts'),
        FETCH_LISTS_ERROR_MESSAGE: Lnrs.translate('AnErrorHasOccurredWhenFetchLists', 'An error has occurred when fetch lists'),
        CREATE_LIST_ERROR_MESSAGE: Lnrs.translate('AnErrorHasOccurredWhenCreateANewList', 'An error has occurred when create a new list'),
        ADD_ITEM_ERROR_MESSAGE: Lnrs.translate('AnErrorHasOccurredWhenAddAnItemToAList', 'An error has occurred when add an item to a list'),
        FAV_UNSAVE_ITEM: 'FAV_UNSAVE_ITEM',
        FAVORITES_HEART_DEBOUNCE_TIME: 200,
        NOT_FETCHING_LISTS: 'notFetchingLists',
        IS_FETCHING_LISTS: 'isFetchingLists',
        HAS_FETCHED_LISTS: 'hasFetchedLists',
        NOT_FETCHING_HEARTS: 'notFetchingHearts',
        IS_FETCHING_HEARTS: 'isFetchingHearts',
        HAS_FETCHED_HEARTS: 'hasFetchedHearts',
        TYPE_USER_UPLOADED_LIST_ITEM: 1,
        TYPE_DESIGN_SERVICES_EXTERNAL_SITE: 2,
        TYPE_DESIGN_SERVICES_CLIENT_ITEM: 3,
        USER_UPLOAD_DEFAULT_INPUT_ATTRIBUTES: {
            maxLength: 35
        },
        USER_UPLOAD_URL_INPUT_ATTRIBUTES: {
            maxLength: 2500
        },
        USER_UPLOAD_PRICE_INPUT_ATTRIBUTES: {
            pattern: '^([0-9]*)([.]{0,1})([0-9]{0,2})$',
            step: 0.01,
            min: 0
        },
        USER_UPLOADED_LIST_ITEM: 'USER_UPLOADED_LIST_ITEM',
        DESIGN_SERVICES_EXTERNAL_SITE: 'DESIGN_SERVICES_EXTERNAL_SITE',
        DESIGN_SERVICES_CLIENT_ITEM: 'DESIGN_SERVICES_CLIENT_ITEM',
        OUT_OF_STOCK_NOTIFICATION_SCROLL_POSITION: 525,
        OUT_OF_STOCK_NOTIFICATION_SCROLL_OFFSET: 400,
        OUT_OF_STOCK_NOTIFICATION_SCROLL_TIME: 700,
        FAVORITES_LIST_PAGE_INITIAL_NUMBER_OF_ITEMS: 16,
        INFINITE_LOAD_ITEMS_PER_PAGE: 4,
        LAZY_LOAD_THROTTLE_WAIT_TIME: 250,
        FAVORITES_LIST_ITEM_TRACK_EVENT_NAME: 'FL_ITEM_DETAIL',
        FAVORITES_LIST_REMOVE_ITEM_EVENT_NAME: 'FL_ITEM_REMOVE',
        FAVORITES_LIST_REMOVED_ITEM_EVENT_NAME: 'FL_ITEM_REMOVED',
        FAVORITES_LIST_UNDO_REMOVE_ITEM_EVENT_NAME: 'FL_ITEM_REMOVE_UNDO',
        FL_ATC: 'FL_ATC',
        FL_SEE_DETAILS: 'FL_SEE_DETAILS',
        CAN_EDIT: 1,
        VIEW_ONLY: 2,
        TOOLTIP_REMOVE_MESSAGE_WIDTH: 140,
        SHOW_ATC_BUTTON: 'SHOW_ATC_BUTTON',
        SHOW_DETAILS_BUTTON: 'SHOW_DETAILS_BUTTON',
        SHOW_REPLACEMENT_BUTTON: 'SHOW_REPLACEMENT_BUTTON'
    };
});
/*wfsw*/
/*wfsw:design_services_data_selectors*/
define('design_services_data_selectors', ['exports', 'project_constants'], function(exports, _project_constants) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.selectSaveRoomInput = exports.selectInstructionRoomListId = undefined;
    exports.selectInstructionRoomList = exports.selectInstructionRoomItems = exports.selectInstructionRoomName = exports.selectInstructionRoomId = exports.selectInstructionRoom = exports.selectInstructionFloorPlanIreId = exports.selectInstructionHasBeenPublished = exports.selectInstructionStatus = exports.selectInstructionComparisons = exports.selectInstructionDescription = exports.selectProjectsPaginatedProjects = exports.selectProjectsPaginatedTotalCount = exports.selectProjectsPaginated = exports.selectDesignServicesDesigner = exports.selectProjectListItems = exports.selectProjectBoardUrl = exports.selectProjectBoardPrices = exports.selectProjectBoardItems = exports.selectProjectBoardId = exports.selectRoomRenderingDeliverableShoppingListPrices = exports.selectRoomRenderingDeliverableShoppingListItems = exports.selectRoomRenderingDeliverableStagingListPrices = exports.selectRoomRenderingDeliverableStagingListItems = exports.selectRoomRenderingDeliverablePublishes = exports.selectRoomRenderingDeliverableRoomRenderingIreId = exports.selectRoomRenderingDeliverableRoomRendering = exports.selectRoomRenderingDeliverableStagedDesignerNote = exports.selectRoomRenderingDeliverablePublishCount = exports.selectRoomRenderingDeliverableDesignerNote = exports.selectRoomRenderingDeliverablePublishedIreId = exports.selectRoomRenderingDeliverableId = exports.selectRoomRenderingDeliverable = exports.selectActiveDeliverableShoppingListPrices = exports.selectActiveDeliverableShoppingListItems = exports.selectActiveDeliverableFeedbackRating = exports.selectActiveDeliverableFeedbackId = exports.selectActiveDeliverableFeedback = exports.selectActiveDeliverableType = exports.selectActiveDeliverablePublish = exports.selectActiveDeliverableDesignerNote = exports.selectActiveDeliverablePublishedIreId = exports.selectActiveDeliverable = exports.selectRoomPlannerDeliverableShoppingListPrices = exports.selectRoomPlannerDeliverableShoppingListItems = exports.selectRoomPlannerDeliverableStagingListPrices = exports.selectRoomPlannerDeliverableStagingListItems = exports.selectRoomItemsPrices = exports.selectRoomPlannerDeliverableRoomListItems = exports.selectRoomPlannerDeliverablePublishes = exports.selectRoomPlannerDeliverableRoomItemPrice = exports.selectRoomPlannerDeliverableFeedback = exports.selectRoomPlannerDeliverableEditRoomUrl = exports.selectRoomPlannerDeliverableSavedRoomImageId = exports.selectRoomPlannerDeliverableStagedDesignerNote = exports.selectRoomPlannerDeliverablePublishCount = exports.selectRoomPlannerDeliverableDesignerNote = exports.selectRoomPlannerDeliverablePublishedIreId = exports.selectRoomPlannerDeliverableId = exports.selectRoomPlannerDeliverable = exports.selectDesignerCoverPhotoIreId = exports.selectDesignerCoverPhoto = exports.selectDesignerProfileImageIreId = exports.selectDesignerProfilePicture = exports.selectDesignerProfileUrl = exports.selectDesignerProfile = exports.selectDesignerName = exports.selectDesignerLastName = exports.selectDesignerFirstName = exports.selectDesignerId = exports.selectDesigner = exports.selectClientFirstName = exports.selectClient = exports.selectProjectUpdateStyleDetails = exports.selectProjectPhoneNumber = exports.selectProjectRating = exports.selectProjectName = exports.selectFloorPlanUploadAuthToken = exports.selectFloorPlanIreId = exports.selectProjectBudgetMax = exports.selectProjectType = exports.selectProjectStatus = exports.selectProjectConversationId = exports.selectClientProjectPhase = exports.selectDesignerProjectPhase = exports.selectProjectId = exports.selectProject = exports.selectClassicPackagePrice = exports.selectLitePackagePrice = exports.selectDeliverableNegativeFeedbackOptions = exports.selectDeliverablePositiveFeedbackOptions = exports.selectDeliverableFeedbackRatingOptions = exports.selectDeliverableFeedbackQuestionOptions = exports.selectAvailableDesigners = exports.selectDesignServices = exports.selectBusinessProgramAccountCompanyType = exports.selectBusinessProgramAccount = exports.selectBusinessProgram = exports.selectIsDesignServicesUser = exports.selectMePhoneNumber = exports.selectMeFirstName = undefined;
    var selectMe = function selectMe(data) {
        return data.me;
    };
    var selectMeCustomer = function selectMeCustomer(data) {
        return selectMe(data).customer;
    };
    var selectMeFirstName = exports.selectMeFirstName = function selectMeFirstName(data) {
        return selectMeCustomer(data).firstName;
    }
    ;
    var selectMePhoneNumber = exports.selectMePhoneNumber = function selectMePhoneNumber(data) {
        return selectMeCustomer(data).phoneNumber;
    }
    ;
    var selectIsDesignServicesUser = exports.selectIsDesignServicesUser = function selectIsDesignServicesUser(data) {
        return selectMeCustomer(data).isDesignServicesUser;
    }
    ;
    var selectBusinessProgram = exports.selectBusinessProgram = function selectBusinessProgram(data) {
        return selectMeCustomer(data).businessProgram || null;
    }
    ;
    var selectBusinessProgramAccount = exports.selectBusinessProgramAccount = function selectBusinessProgramAccount(data) {
        return (selectBusinessProgram(data) || {}).account || null;
    }
    ;
    var selectBusinessProgramAccountCompanyType = exports.selectBusinessProgramAccountCompanyType = function selectBusinessProgramAccountCompanyType(data) {
        return (selectBusinessProgramAccount(data) || {}).companyType || null;
    }
    ;
    var selectDesignServices = exports.selectDesignServices = function selectDesignServices(data) {
        return data.designServices;
    }
    ;
    var selectAvailableDesigners = exports.selectAvailableDesigners = function selectAvailableDesigners(data) {
        return selectDesignServices(data).availableDesigners;
    }
    ;
    var selectDeliverableFeedbackQuestionOptions = exports.selectDeliverableFeedbackQuestionOptions = function selectDeliverableFeedbackQuestionOptions(data) {
        return selectDesignServices(data).deliverableFeedbackQuestionOptions;
    }
    ;
    var selectDeliverableFeedbackRatingOptions = exports.selectDeliverableFeedbackRatingOptions = function selectDeliverableFeedbackRatingOptions(data) {
        return selectDeliverableFeedbackQuestionOptions(data).ratingOptions;
    }
    ;
    var selectDeliverablePositiveFeedbackOptions = exports.selectDeliverablePositiveFeedbackOptions = function selectDeliverablePositiveFeedbackOptions(data) {
        return selectDeliverableFeedbackQuestionOptions(data).positiveFeedbackOptions;
    }
    ;
    var selectDeliverableNegativeFeedbackOptions = exports.selectDeliverableNegativeFeedbackOptions = function selectDeliverableNegativeFeedbackOptions(data) {
        return selectDeliverableFeedbackQuestionOptions(data).negativeFeedbackOptions;
    }
    ;
    var selectPackageDetails = function selectPackageDetails(data) {
        return selectDesignServices(data).packageDetails;
    };
    var selectLitePackagePrice = exports.selectLitePackagePrice = function selectLitePackagePrice(data) {
        return selectPackageDetails(data)[_project_constants.PROJECT_TYPE_ENUM_INDEX[_project_constants.PROJECT_TYPE_ENUMS.LITE]].price;
    }
    ;
    var selectClassicPackagePrice = exports.selectClassicPackagePrice = function selectClassicPackagePrice(data) {
        return selectPackageDetails(data)[_project_constants.PROJECT_TYPE_ENUM_INDEX[_project_constants.PROJECT_TYPE_ENUMS.CLASSIC]].price;
    }
    ;
    var selectProject = exports.selectProject = function selectProject(data) {
        return selectDesignServices(data).project;
    }
    ;
    var selectProjectId = exports.selectProjectId = function selectProjectId(data) {
        return selectProject(data).id;
    }
    ;
    var selectDesignerProjectPhase = exports.selectDesignerProjectPhase = function selectDesignerProjectPhase(data) {
        return selectProject(data).designerProjectPhase;
    }
    ;
    var selectClientProjectPhase = exports.selectClientProjectPhase = function selectClientProjectPhase(data) {
        return selectProject(data).clientProjectPhase;
    }
    ;
    var selectProjectConversationId = exports.selectProjectConversationId = function selectProjectConversationId(data) {
        return selectProject(data).conversationId;
    }
    ;
    var selectProjectStatus = exports.selectProjectStatus = function selectProjectStatus(data) {
        return selectProject(data).projectStatus || selectProject(data).status;
    }
    ;
    var selectProjectType = exports.selectProjectType = function selectProjectType(data) {
        return selectProject(data).type || selectProject(data).projectType;
    }
    ;
    var selectProjectBudgetMax = exports.selectProjectBudgetMax = function selectProjectBudgetMax(data) {
        return selectProject(data).budgetMax;
    }
    ;
    var selectFloorPlanIreId = exports.selectFloorPlanIreId = function selectFloorPlanIreId(data) {
        return selectProject(data).floorPlanIreId;
    }
    ;
    var selectFloorPlanUploadAuthToken = exports.selectFloorPlanUploadAuthToken = function selectFloorPlanUploadAuthToken(data) {
        return selectProject(data).floorPlanUploadAuthToken;
    }
    ;
    var selectProjectName = exports.selectProjectName = function selectProjectName(data) {
        return selectProject(data).name;
    }
    ;
    var selectProjectRating = exports.selectProjectRating = function selectProjectRating(data) {
        return selectProject(data).rating;
    }
    ;
    var selectProjectPhoneNumber = exports.selectProjectPhoneNumber = function selectProjectPhoneNumber(data) {
        return selectProject(data).phoneNumber;
    }
    ;
    var selectProjectUpdateStyleDetails = exports.selectProjectUpdateStyleDetails = function selectProjectUpdateStyleDetails(data) {
        return selectProject(data).updateStyleDetails;
    }
    ;
    var selectClient = exports.selectClient = function selectClient(data) {
        return selectProject(data).client;
    }
    ;
    var selectClientFirstName = exports.selectClientFirstName = function selectClientFirstName(data) {
        return selectClient(data).firstName;
    }
    ;
    var selectDesigner = exports.selectDesigner = function selectDesigner(data) {
        return selectProject(data).designer;
    }
    ;
    var selectDesignerId = exports.selectDesignerId = function selectDesignerId(data) {
        var designer = selectDesigner(data);
        return designer && designer.id;
    }
    ;
    var selectDesignerFirstName = exports.selectDesignerFirstName = function selectDesignerFirstName(data) {
        var designer = selectDesigner(data);
        return designer && designer.firstName;
    }
    ;
    var selectDesignerLastName = exports.selectDesignerLastName = function selectDesignerLastName(data) {
        return selectDesigner(data).lastName;
    }
    ;
    var selectDesignerName = exports.selectDesignerName = function selectDesignerName(data) {
        return selectDesigner(data).name;
    }
    ;
    var selectDesignerProfile = exports.selectDesignerProfile = function selectDesignerProfile(data) {
        var designer = selectDesigner(data);
        return designer && designer.designerProfile;
    }
    ;
    var selectDesignerProfileUrl = exports.selectDesignerProfileUrl = function selectDesignerProfileUrl(data) {
        var designerProfile = selectDesignerProfile(data);
        return designerProfile && designerProfile.url;
    }
    ;
    var selectDesignerProfilePicture = exports.selectDesignerProfilePicture = function selectDesignerProfilePicture(data) {
        var designerProfile = selectDesignerProfile(data);
        return designerProfile && designerProfile.profilePicture;
    }
    ;
    var selectDesignerProfileImageIreId = exports.selectDesignerProfileImageIreId = function selectDesignerProfileImageIreId(data) {
        var designerProfilePicture = selectDesignerProfilePicture(data);
        return designerProfilePicture && designerProfilePicture.id;
    }
    ;
    var selectDesignerCoverPhoto = exports.selectDesignerCoverPhoto = function selectDesignerCoverPhoto(data) {
        return selectDesignerProfile(data).coverPhoto;
    }
    ;
    var selectDesignerCoverPhotoIreId = exports.selectDesignerCoverPhotoIreId = function selectDesignerCoverPhotoIreId(data) {
        var photo = selectDesignerCoverPhoto(data);
        return photo ? photo.id : null;
    }
    ;
    var selectRoomPlannerDeliverable = exports.selectRoomPlannerDeliverable = function selectRoomPlannerDeliverable(data) {
        return selectProject(data).roomPlannerDeliverable || {};
    }
    ;
    var selectRoomPlannerDeliverableId = exports.selectRoomPlannerDeliverableId = function selectRoomPlannerDeliverableId(data) {
        return selectRoomPlannerDeliverable(data).id;
    }
    ;
    var selectRoomPlannerDeliverablePublishedIreId = exports.selectRoomPlannerDeliverablePublishedIreId = function selectRoomPlannerDeliverablePublishedIreId(data) {
        return selectRoomPlannerDeliverable(data).publishedIreId;
    }
    ;
    var selectRoomPlannerDeliverableDesignerNote = exports.selectRoomPlannerDeliverableDesignerNote = function selectRoomPlannerDeliverableDesignerNote(data) {
        return selectRoomPlannerDeliverable(data).designerNote;
    }
    ;
    var selectRoomPlannerDeliverablePublishCount = exports.selectRoomPlannerDeliverablePublishCount = function selectRoomPlannerDeliverablePublishCount(data) {
        return selectRoomPlannerDeliverable(data).publishCount;
    }
    ;
    var selectRoomPlannerDeliverableStagedDesignerNote = exports.selectRoomPlannerDeliverableStagedDesignerNote = function selectRoomPlannerDeliverableStagedDesignerNote(data) {
        return selectRoomPlannerDeliverable(data).stagedDesignerNote;
    }
    ;
    var selectRoomPlannerDeliverableSavedRoomImageId = exports.selectRoomPlannerDeliverableSavedRoomImageId = function selectRoomPlannerDeliverableSavedRoomImageId(data) {
        return selectRoomPlannerDeliverable(data).savedRoomImageId;
    }
    ;
    var selectRoomPlannerDeliverableEditRoomUrl = exports.selectRoomPlannerDeliverableEditRoomUrl = function selectRoomPlannerDeliverableEditRoomUrl(data) {
        return selectRoomPlannerDeliverable(data).editRoomUrl;
    }
    ;
    var selectRoomPlannerDeliverableFeedback = exports.selectRoomPlannerDeliverableFeedback = function selectRoomPlannerDeliverableFeedback(data) {
        return selectRoomPlannerDeliverable(data).feedback;
    }
    ;
    var selectRoomPlannerDeliverableRoomItemPrice = exports.selectRoomPlannerDeliverableRoomItemPrice = function selectRoomPlannerDeliverableRoomItemPrice(data) {
        return selectRoomPlannerDeliverable(data).roomItemPrice;
    }
    ;
    var selectRoomPlannerDeliverablePublishes = exports.selectRoomPlannerDeliverablePublishes = function selectRoomPlannerDeliverablePublishes(data) {
        return selectRoomPlannerDeliverable(data).publishes;
    }
    ;
    var selectRoomPlannerDeliverableRoomList = function selectRoomPlannerDeliverableRoomList(data) {
        return selectRoomPlannerDeliverable(data).roomItemsList;
    };
    var selectRoomPlannerDeliverableRoomListItems = exports.selectRoomPlannerDeliverableRoomListItems = function selectRoomPlannerDeliverableRoomListItems(data) {
        return selectRoomPlannerDeliverableRoomList(data).items;
    }
    ;
    var selectRoomItemsPrices = exports.selectRoomItemsPrices = function selectRoomItemsPrices(data) {
        return selectRoomPlannerDeliverable(data).roomItemsPrices;
    }
    ;
    var selectRoomPlannerDeliverableStagingList = function selectRoomPlannerDeliverableStagingList(data) {
        return selectRoomPlannerDeliverable(data).stagingList;
    };
    var selectRoomPlannerDeliverableStagingListItems = exports.selectRoomPlannerDeliverableStagingListItems = function selectRoomPlannerDeliverableStagingListItems(data) {
        return selectRoomPlannerDeliverableStagingList(data).items;
    }
    ;
    var selectRoomPlannerDeliverableStagingListPrices = exports.selectRoomPlannerDeliverableStagingListPrices = function selectRoomPlannerDeliverableStagingListPrices(data) {
        return selectRoomPlannerDeliverable(data).stagingListPrices;
    }
    ;
    var selectRoomPlannerDeliverableShoppingList = function selectRoomPlannerDeliverableShoppingList(data) {
        return selectRoomPlannerDeliverable(data).shoppingList;
    };
    var selectRoomPlannerDeliverableShoppingListItems = exports.selectRoomPlannerDeliverableShoppingListItems = function selectRoomPlannerDeliverableShoppingListItems(data) {
        return selectRoomPlannerDeliverableShoppingList(data).items;
    }
    ;
    var selectRoomPlannerDeliverableShoppingListPrices = exports.selectRoomPlannerDeliverableShoppingListPrices = function selectRoomPlannerDeliverableShoppingListPrices(data) {
        return selectRoomPlannerDeliverable(data).shoppingListPrices;
    }
    ;
    var selectActiveDeliverable = exports.selectActiveDeliverable = function selectActiveDeliverable(data) {
        return selectProject(data).activeDeliverable;
    }
    ;
    var selectActiveDeliverablePublishedIreId = exports.selectActiveDeliverablePublishedIreId = function selectActiveDeliverablePublishedIreId(data) {
        var activeDeliverable = selectActiveDeliverable(data);
        return activeDeliverable && activeDeliverable.publishedIreId;
    }
    ;
    var selectActiveDeliverableDesignerNote = exports.selectActiveDeliverableDesignerNote = function selectActiveDeliverableDesignerNote(data) {
        return selectActiveDeliverable(data).designerNote;
    }
    ;
    var selectActiveDeliverablePublish = exports.selectActiveDeliverablePublish = function selectActiveDeliverablePublish(data) {
        return selectActiveDeliverable(data).publish;
    }
    ;
    var selectActiveDeliverableType = exports.selectActiveDeliverableType = function selectActiveDeliverableType(data) {
        var activeDeliverable = selectActiveDeliverable(data);
        return activeDeliverable && activeDeliverable.type;
    }
    ;
    var selectActiveDeliverableFeedback = exports.selectActiveDeliverableFeedback = function selectActiveDeliverableFeedback(data) {
        return selectActiveDeliverable(data).feedback;
    }
    ;
    var selectActiveDeliverableFeedbackId = exports.selectActiveDeliverableFeedbackId = function selectActiveDeliverableFeedbackId(data) {
        var feedback = selectActiveDeliverableFeedback(data);
        return feedback && feedback.id;
    }
    ;
    var selectActiveDeliverableFeedbackRating = exports.selectActiveDeliverableFeedbackRating = function selectActiveDeliverableFeedbackRating(data) {
        var feedback = selectActiveDeliverableFeedback(data);
        return feedback && feedback.rating;
    }
    ;
    var selectActiveDeliverableShoppingList = function selectActiveDeliverableShoppingList(data) {
        return selectActiveDeliverable(data).shoppingList;
    };
    var selectActiveDeliverableShoppingListItems = exports.selectActiveDeliverableShoppingListItems = function selectActiveDeliverableShoppingListItems(data) {
        return selectActiveDeliverableShoppingList(data).items;
    }
    ;
    var selectActiveDeliverableShoppingListPrices = exports.selectActiveDeliverableShoppingListPrices = function selectActiveDeliverableShoppingListPrices(data) {
        return selectActiveDeliverable(data).shoppingListPrices;
    }
    ;
    var selectRoomRenderingDeliverable = exports.selectRoomRenderingDeliverable = function selectRoomRenderingDeliverable(data) {
        return selectProject(data).roomRenderingDeliverable || {};
    }
    ;
    var selectRoomRenderingDeliverableId = exports.selectRoomRenderingDeliverableId = function selectRoomRenderingDeliverableId(data) {
        return selectRoomRenderingDeliverable(data).id;
    }
    ;
    var selectRoomRenderingDeliverablePublishedIreId = exports.selectRoomRenderingDeliverablePublishedIreId = function selectRoomRenderingDeliverablePublishedIreId(data) {
        return selectRoomRenderingDeliverable(data).publishedIreId;
    }
    ;
    var selectRoomRenderingDeliverableDesignerNote = exports.selectRoomRenderingDeliverableDesignerNote = function selectRoomRenderingDeliverableDesignerNote(data) {
        return selectRoomRenderingDeliverable(data).designerNote;
    }
    ;
    var selectRoomRenderingDeliverablePublishCount = exports.selectRoomRenderingDeliverablePublishCount = function selectRoomRenderingDeliverablePublishCount(data) {
        return selectRoomRenderingDeliverable(data).publishCount;
    }
    ;
    var selectRoomRenderingDeliverableStagedDesignerNote = exports.selectRoomRenderingDeliverableStagedDesignerNote = function selectRoomRenderingDeliverableStagedDesignerNote(data) {
        return selectRoomRenderingDeliverable(data).stagedDesignerNote;
    }
    ;
    var selectRoomRenderingDeliverableRoomRendering = exports.selectRoomRenderingDeliverableRoomRendering = function selectRoomRenderingDeliverableRoomRendering(data) {
        return selectRoomRenderingDeliverable(data).roomRendering;
    }
    ;
    var selectRoomRenderingDeliverableRoomRenderingIreId = exports.selectRoomRenderingDeliverableRoomRenderingIreId = function selectRoomRenderingDeliverableRoomRenderingIreId(data) {
        return selectRoomRenderingDeliverableRoomRendering(data).id;
    }
    ;
    var selectRoomRenderingDeliverablePublishes = exports.selectRoomRenderingDeliverablePublishes = function selectRoomRenderingDeliverablePublishes(data) {
        return selectRoomRenderingDeliverable(data).publishes;
    }
    ;
    var selectRoomRenderingDeliverableStagingList = function selectRoomRenderingDeliverableStagingList(data) {
        return selectRoomRenderingDeliverable(data).stagingList;
    };
    var selectRoomRenderingDeliverableStagingListItems = exports.selectRoomRenderingDeliverableStagingListItems = function selectRoomRenderingDeliverableStagingListItems(data) {
        return selectRoomRenderingDeliverableStagingList(data).items;
    }
    ;
    var selectRoomRenderingDeliverableStagingListPrices = exports.selectRoomRenderingDeliverableStagingListPrices = function selectRoomRenderingDeliverableStagingListPrices(data) {
        return selectRoomRenderingDeliverable(data).stagingListPrices;
    }
    ;
    var selectRoomRenderingDeliverableShoppingList = function selectRoomRenderingDeliverableShoppingList(data) {
        return selectRoomRenderingDeliverable(data).shoppingList;
    };
    var selectRoomRenderingDeliverableShoppingListItems = exports.selectRoomRenderingDeliverableShoppingListItems = function selectRoomRenderingDeliverableShoppingListItems(data) {
        return selectRoomRenderingDeliverableShoppingList(data).items;
    }
    ;
    var selectRoomRenderingDeliverableShoppingListPrices = exports.selectRoomRenderingDeliverableShoppingListPrices = function selectRoomRenderingDeliverableShoppingListPrices(data) {
        return selectRoomRenderingDeliverable(data).shoppingListPrices;
    }
    ;
    var selectProjectBoard = function selectProjectBoard(data) {
        return selectProject(data).board;
    };
    var selectProjectBoardId = exports.selectProjectBoardId = function selectProjectBoardId(data) {
        return selectProjectBoard(data).id;
    }
    ;
    var selectProjectBoardItems = exports.selectProjectBoardItems = function selectProjectBoardItems(data) {
        return selectProjectBoard(data).items;
    }
    ;
    var selectProjectBoardPrices = exports.selectProjectBoardPrices = function selectProjectBoardPrices(data) {
        return selectProject(data).boardPrices;
    }
    ;
    var selectProjectBoardUrl = exports.selectProjectBoardUrl = function selectProjectBoardUrl(data) {
        return selectProjectBoard(data).url;
    }
    ;
    var selectProjectListItems = exports.selectProjectListItems = function selectProjectListItems(data) {
        return selectProjectBoard(data).itemConnection.edges;
    }
    ;
    var selectDesignServicesDesigner = exports.selectDesignServicesDesigner = function selectDesignServicesDesigner(data) {
        return selectDesignServices(data).designer;
    }
    ;
    var selectProjectsPaginated = exports.selectProjectsPaginated = function selectProjectsPaginated(data) {
        return selectDesignServicesDesigner(data).projectsPaginated;
    }
    ;
    var selectProjectsPaginatedTotalCount = exports.selectProjectsPaginatedTotalCount = function selectProjectsPaginatedTotalCount(data) {
        return selectProjectsPaginated(data).totalCount;
    }
    ;
    var selectProjectsPaginatedProjects = exports.selectProjectsPaginatedProjects = function selectProjectsPaginatedProjects(data) {
        return selectProjectsPaginated(data).projects;
    }
    ;
    var selectInstruction = function selectInstruction(data) {
        return selectRoomRenderingDeliverable(data).instruction || {};
    };
    var selectInstructionDescription = exports.selectInstructionDescription = function selectInstructionDescription(data) {
        return selectInstruction(data).description;
    }
    ;
    var selectInstructionComparisons = exports.selectInstructionComparisons = function selectInstructionComparisons(data) {
        return selectInstruction(data).instructionComparisons || [];
    }
    ;
    var selectInstructionStatus = exports.selectInstructionStatus = function selectInstructionStatus(data) {
        return selectInstruction(data).status;
    }
    ;
    var selectInstructionHasBeenPublished = exports.selectInstructionHasBeenPublished = function selectInstructionHasBeenPublished(data) {
        return selectInstruction(data).hasBeenPublished;
    }
    ;
    var selectInstructionFloorPlanIreId = exports.selectInstructionFloorPlanIreId = function selectInstructionFloorPlanIreId(data) {
        return selectInstruction(data).floorPlanIreId;
    }
    ;
    var selectInstructionRoom = exports.selectInstructionRoom = function selectInstructionRoom(data) {
        return selectInstruction(data).room;
    }
    ;
    var selectInstructionRoomId = exports.selectInstructionRoomId = function selectInstructionRoomId(data) {
        return selectInstructionRoom(data).roomId;
    }
    ;
    var selectInstructionRoomName = exports.selectInstructionRoomName = function selectInstructionRoomName(data) {
        return selectInstructionRoom(data).name;
    }
    ;
    var selectInstructionRoomItems = exports.selectInstructionRoomItems = function selectInstructionRoomItems(data) {
        return selectInstructionRoom(data).roomItems;
    }
    ;
    var selectInstructionRoomList = exports.selectInstructionRoomList = function selectInstructionRoomList(data) {
        return selectInstructionRoom(data).list;
    }
    ;
    var selectInstructionRoomListId = exports.selectInstructionRoomListId = function selectInstructionRoomListId(data) {
        return selectInstructionRoomList(data).listId;
    }
    ;
    var selectInstructionRoomBackground = function selectInstructionRoomBackground(data) {
        return selectInstructionRoom(data).background;
    };
    var selectInstructionRoomBackgroundImage = function selectInstructionRoomBackgroundImage(data) {
        return selectInstructionRoomBackground(data).image;
    };
    var selectSaveRoomInput = exports.selectSaveRoomInput = function selectSaveRoomInput(data) {
        var room = selectInstructionRoom(data);
        var backgroundImage = selectInstructionRoomBackgroundImage(data);
        return {
            room_name: room.name,
            background_image_id: backgroundImage.id,
            background_image_width: backgroundImage.width,
            background_image_height: backgroundImage.height,
            room_items: room.roomItems.map(function(_ref) {
                var id = _ref.id
                  , itemId = _ref.itemId
                  , xPosition = _ref.xPosition
                  , yPosition = _ref.yPosition;
                return {
                    id: id,
                    item_id: itemId,
                    scale: 1,
                    x_position: xPosition,
                    y_position: yPosition,
                    modified: false
                };
            })
        };
    }
    ;
});
/*wfsw*/
/*wfsw:design_services_header_dropdown_queries*/
define('design_services_header_dropdown_queries', ['exports', 'graphql_tag', 'turbine_helper_babel'], function(exports, _graphql_tag, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _graphql_tag2 = _turbine_helper_babel.interopRequireDefault(_graphql_tag);
    var designServicesHeaderDropdownQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query fetchProjectsForHeader {\n me {\n customer {\n projects {\n projectId\n url\n }\n }\n }\n }\n']].concat(f));
        q.path = 'design_services_header_dropdown_queries~0' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    exports.default = designServicesHeaderDropdownQuery;
});
/*wfsw*/
/*wfsw:room_planner_api*/
define('room_planner_api', ['exports', 'wayfair', 'query_service', 'wf-wretch', 'room_planner_queries', 'room_planner_catalog_queries', 'turbine_helper_babel'], function(exports, _wayfair, _query_service, _wfWretch, _room_planner_queries, _room_planner_catalog_queries, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _wayfair2 = _turbine_helper_babel.interopRequireDefault(_wayfair);
    var _query_service2 = _turbine_helper_babel.interopRequireDefault(_query_service);
    var _wfWretch2 = _turbine_helper_babel.interopRequireDefault(_wfWretch);
    var _wf$appData = _wayfair2.default.appData
      , csrfToken = _wf$appData.csrfToken
      , csrfTokenParam = _wf$appData.csrfTokenParam;
    var STORE_ID = _wayfair2.default.constants.STORE_ID;
    var DEFAULT_ROOM_ID = -1;
    function copyTemplateRoom(_ref) {
        var roomId = _ref.roomId
          , roomName = _ref.roomName;
        return _query_service2.default.fetchQuery({
            query: _room_planner_queries.copyTemplateRoomMutation,
            fetchPolicy: 'network-only',
            variables: {
                roomId: roomId,
                roomName: roomName
            }
        }).then(function(response) {
            if (response.errors) {
                throw new Error(response.errors.map(function(_ref2) {
                    var message = _ref2.message;
                    return message;
                }).join(','));
            }
            var savedRoomData = _wayfair2.default.get('data.roomPlanner.copyTemplateRoom', response);
            if (savedRoomData) {
                return savedRoomData;
            }
            throw new Error('copyTemplateRoom failed');
        });
    }
    function saveRoom(_ref3) {
        var _ref3$roomId = _ref3.roomId
          , roomId = _ref3$roomId === undefined ? DEFAULT_ROOM_ID : _ref3$roomId
          , roomName = _ref3.roomName
          , roomType = _ref3.roomType
          , backgroundImageId = _ref3.backgroundImageId
          , backgroundImageWidth = _ref3.backgroundImageWidth
          , backgroundImageHeight = _ref3.backgroundImageHeight
          , roomItems = _ref3.roomItems
          , listId = _ref3.listId
          , userProvidedWidth = _ref3.userProvidedWidth
          , userProvidedHeight = _ref3.userProvidedHeight;
        return _query_service2.default.fetchQuery({
            query: _room_planner_queries.saveRoomMutation,
            fetchPolicy: 'network-only',
            variables: {
                roomId: roomId,
                saveRoomInput: {
                    room_name: roomName,
                    room_type: roomType,
                    background_image_id: backgroundImageId,
                    background_image_width: backgroundImageWidth,
                    background_image_height: backgroundImageHeight,
                    room_items: roomItems,
                    list_id: listId,
                    user_provided_width: userProvidedWidth,
                    user_provided_height: userProvidedHeight
                }
            }
        }).then(function(response) {
            if (response.errors) {
                throw new Error(response.errors.map(function(_ref4) {
                    var message = _ref4.message;
                    return message;
                }).join(','));
            }
            var savedRoomData = _wayfair2.default.get('data.roomPlanner.room.saveRoom', response);
            if (savedRoomData) {
                return savedRoomData;
            }
            throw new Error('saveRoom failed');
        });
    }
    function saveItemProduct(_ref5) {
        var ownerCustomerId = _ref5.ownerCustomerId
          , listId = _ref5.listId
          , sku = _ref5.sku
          , selectedOptionIds = _ref5.selectedOptionIds
          , ireId = _ref5.ireId
          , imageSize = _ref5.imageSize
          , _ref5$storeId = _ref5.storeId
          , storeId = _ref5$storeId === undefined ? STORE_ID : _ref5$storeId;
        return _query_service2.default.fetchQuery({
            query: _room_planner_queries.saveItemProductQuery,
            fetchPolicy: 'network-only',
            variables: {
                itemListInput: {
                    ownerCustomerId: ownerCustomerId,
                    listId: listId
                },
                itemInput: {
                    sku: sku,
                    selectedOptionIds: selectedOptionIds,
                    ireId: ireId,
                    storeId: storeId
                },
                image_size: imageSize
            }
        }).then(function(response) {
            if (response.errors) {
                throw new Error(response.errors.map(function(_ref6) {
                    var message = _ref6.message;
                    return message;
                }).join(','));
            }
            if (_wayfair2.default.get('data.favorites.list.saveItemProduct', response)) {
                return response.data.favorites.list.saveItemProduct;
            }
            throw new Error('Save item product failed.');
        });
    }
    function getSTLItems(stlPhotoId) {
        return _query_service2.default.fetchQuery({
            query: _room_planner_queries.stlItemsQuery,
            fetchPolicy: 'network-only',
            variables: {
                stlPhotoId: stlPhotoId
            }
        }).then(function(response) {
            if (response.errors) {
                throw new Error(response.errors.map(function(_ref7) {
                    var message = _ref7.message;
                    return message;
                }).join(','));
            }
            if (_wayfair2.default.get('data.shop_the_look.room.tags', response)) {
                return response.data.shop_the_look.room.tags;
            }
            throw new Error('Get STL items failed.');
        });
    }
    function deleteRoomWithMutation(roomId) {
        return _query_service2.default.fetchQuery({
            query: _room_planner_queries.deleteRoomMutation,
            fetchPolicy: 'network-only',
            variables: {
                roomId: roomId
            }
        }).then(function(response) {
            if (response.errors) {
                throw new Error(response.errors.map(function(_ref8) {
                    var message = _ref8.message;
                    return message;
                }).join(','));
            }
            if (_wayfair2.default.get('data.roomPlanner.room.deleteRoom', response)) {
                return response.data.roomPlanner.room.deleteRoom;
            }
            throw new Error('Room Delete failed.');
        });
    }
    function searchByKeyword(keyword, currentPage, filters) {
        return (0,
        _wfWretch2.default)(_wayfair2.default.constants.STORE_URL + '/keyword.php').query({
            keyword: keyword,
            current_page: currentPage,
            no_redir: true,
            product_dimensions: true,
            filters: filters
        }).post().json().then(function(response) {
            if (response.errors) {
                throw new Error(response.errors.map(function(_ref9) {
                    var message = _ref9.message;
                    return message;
                }).join(','));
            }
            return response;
        });
    }
    function fetchCategoryProducts(_ref10) {
        var id = _ref10.id
          , currentPage = _ref10.currentPage
          , filterString = _ref10.filterString;
        return _query_service2.default.fetchQuery({
            query: _room_planner_catalog_queries.fetchCategoryProductsQuery,
            fetchPolicy: 'network-only',
            variables: {
                category_id: id,
                current_page: currentPage,
                filter: filterString
            }
        });
    }
    function fetchCurationProducts(_ref11) {
        var id = _ref11.id
          , roomType = _ref11.roomType
          , currentPage = _ref11.currentPage;
        return _query_service2.default.fetchQuery({
            query: _room_planner_catalog_queries.fetchCurationProductsQuery,
            fetchPolicy: 'network-only',
            variables: {
                curationType: roomType,
                id: id,
                page: currentPage
            }
        });
    }
    function fetchCategoryFilter(categoryId) {
        return _query_service2.default.fetchQuery({
            query: _room_planner_catalog_queries.fetchCategoryFilterQuery,
            fetchPolicy: 'network-only',
            variables: {
                category_id: categoryId
            }
        });
    }
    function saveRoomAjax(roomData) {
        roomData[csrfTokenParam] = csrfToken;
        return (0,
        _wfWretch2.default)('/a/favorites/list/save_room').json(roomData).post().json(function(response) {
            if (!response) {
                throw new Error('Response empty');
            }
            if (response.errors) {
                throw new Error(response.errors.map(function(_ref12) {
                    var message = _ref12.message;
                    return message;
                }).join(','));
            }
            return response;
        });
    }
    function uploadUserBackground(fileData) {
        fileData[csrfTokenParam] = csrfToken;
        return (0,
        _wfWretch2.default)(_wayfair2.default.constants.STORE_URL + '/incoming/handlers/favorites_room_background.php').formData(fileData).post().json(function(response) {
            if (response.errors) {
                throw new Error(response.errors.map(function(_ref13) {
                    var message = _ref13.message;
                    return message;
                }).join(','));
            }
            return response;
        });
    }
    function fetchSavedRooms(first, after, includeItems) {
        return _query_service2.default.fetchQuery({
            query: _room_planner_queries.savedRoomsQuery,
            variables: {
                first: first,
                after: after,
                includeItems: includeItems
            }
        });
    }
    var roomPlannerApi = {
        copyTemplateRoom: copyTemplateRoom,
        saveRoom: saveRoom,
        saveItemProduct: saveItemProduct,
        getSTLItems: getSTLItems,
        deleteRoomWithMutation: deleteRoomWithMutation,
        searchByKeyword: searchByKeyword,
        fetchCategoryProducts: fetchCategoryProducts,
        fetchCurationProducts: fetchCurationProducts,
        uploadUserBackground: uploadUserBackground,
        fetchSavedRooms: fetchSavedRooms,
        fetchCategoryFilter: fetchCategoryFilter
    };
    exports.default = roomPlannerApi;
});
/*wfsw*/
/*wfsw:designer_dashboard_constants*/
define('designer_dashboard_constants', ['exports'], function(exports) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var DASHBOARD_BASE_PATH = exports.DASHBOARD_BASE_PATH = '/design_services/designer_dashboard';
    var DASHBOARD_PAYMENT_HISTORY_PATH = exports.DASHBOARD_PAYMENT_HISTORY_PATH = DASHBOARD_BASE_PATH + '/payment_history';
    var DASHBOARD_PROJECT_HISTORY_PATH = exports.DASHBOARD_PROJECT_HISTORY_PATH = DASHBOARD_BASE_PATH + '/project_history';
    var DESIGNER_PAYMENT_TYPE_ENUM = exports.DESIGNER_PAYMENT_TYPE_ENUM = {
        NORMAL: 'NORMAL',
        BONUS: 'BONUS'
    };
    var DESIGNER_PAYMENT_STATUS_ENUM = exports.DESIGNER_PAYMENT_STATUS_ENUM = {
        PROCESSING: 'PROCESSING',
        PAID: 'PAID'
    };
    var SORTABLE_PROJECT_FIELDS = exports.SORTABLE_PROJECT_FIELDS = {
        SORT_CODE_RATING: 'RATING_SORT',
        SORT_CODE_COMPLETED_DATE: 'COMPLETED_DATE_SORT'
    };
});
/*wfsw*/
;(function() {
    var k = "unencoded__Lite";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Lite";
    define("_t!%5B%22Lite%22%2C%22Lite%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__30minutes";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "30 minutes";
    define("_t!%5B%2230minutes%22%2C%2230%20minutes%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__MostPopular";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Most Popular";
    define("_t!%5B%22MostPopular%22%2C%22Most%20Popular%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__Classic";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Classic";
    define("_t!%5B%22Classic%22%2C%22Classic%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__60minutes";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "60 minutes";
    define("_t!%5B%2260minutes%22%2C%2260%20minutes%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__PickLiteForDollarSignX";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Pick Lite for ${1}";
    define("_t!%5B%22PickLiteForDollarSignX%22%2C%22Pick%20Lite%20for%20%24%7B1%7D%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__PickLite";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Pick Lite";
    define("_t!%5B%22PickLite%22%2C%22Pick%20Lite%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__PickClassicForDollarSignX";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Pick Classic for ${1}";
    define("_t!%5B%22PickClassicForDollarSignX%22%2C%22Pick%20Classic%20for%20%24%7B1%7D%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__PickClassic";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Pick Classic";
    define("_t!%5B%22PickClassic%22%2C%22Pick%20Classic%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__TheBrighterTheBetter";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "The brighter, the better";
    define("_t!%5B%22TheBrighterTheBetter%22%2C%22The%20brighter%2C%20the%20better%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__APopOfColorHereAndThere";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "A pop of color here and there";
    define("_t!%5B%22APopOfColorHereAndThere%22%2C%22A%20pop%20of%20color%20here%20and%20there%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__IPreferNeutrals";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "I prefer neutrals";
    define("_t!%5B%22IPreferNeutrals%22%2C%22I%20prefer%20neutrals%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__ImAllAboutPatterns";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "I'm all about patterns";
    define("_t!%5B%22ImAllAboutPatterns%22%2C%22I'm%20all%20about%20patterns%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__HereAndThereIsFine";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Here and there is fine";
    define("_t!%5B%22HereAndThereIsFine%22%2C%22Here%20and%20there%20is%20fine%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__IPreferToKeepItSimple";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "I prefer to keep it simple";
    define("_t!%5B%22IPreferToKeepItSimple%22%2C%22I%20prefer%20to%20keep%20it%20simple%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__YesImOpenToANewLook";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Yes, I'm open to a new look";
    define("_t!%5B%22YesImOpenToANewLook%22%2C%22Yes%2C%20I'm%20open%20to%20a%20new%20look%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__ImHappyWithMyCurrentColor";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "I'm happy with my current color";
    define("_t!%5B%22ImHappyWithMyCurrentColor%22%2C%22I'm%20happy%20with%20my%20current%20color%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
/*wfsw:cart_dropdown_product*/
define('cart_dropdown_product', ['exports', 'react', 'prop_types', 'header_image_helper', 'image_url_helper', 'pl_image', 'pl_product_card', 'image_unavailable_text', '@styles/header/components/cart_dropdown_product', 'addon_service_utils', 'turbine_helper_babel'], function(exports, _react, _prop_types, _header_image_helper, _image_url_helper, _pl_image, _pl_product_card, _image_unavailable_text, _cart_dropdown_product, _addon_service_utils, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _prop_types2 = _turbine_helper_babel.interopRequireDefault(_prop_types);
    var _pl_image2 = _turbine_helper_babel.interopRequireDefault(_pl_image);
    var _pl_product_card2 = _turbine_helper_babel.interopRequireDefault(_pl_product_card);
    var _image_unavailable_text2 = _turbine_helper_babel.interopRequireDefault(_image_unavailable_text);
    var _cart_dropdown_product2 = _turbine_helper_babel.interopRequireDefault(_cart_dropdown_product);
    var PRODUCT_IMAGE_SIZE_PX = 115;
    var CartDropdownProduct = function CartDropdownProduct(props) {
        var productData = {
            price: {
                displayPrice: props.product.item_price_string,
                listPrice: props.product.unit_list_price
            },
            productName: (0,
            _addon_service_utils.getBasketItemName)({
                isAssemblyInstallation: props.product.is_assembly_installation_service,
                isInstallation: props.product.is_installation_service,
                name: props.product.product_name
            }),
            manufacturer: props.product.manufacturer,
            url: props.product.product_url
        };
        return _react2.default.createElement(_pl_product_card2.default, {
            productData: productData,
            showListPrice: props.product.show_list_price,
            image: _react2.default.createElement('div', {
                className: 'CartDropdownProduct-imageWrapper'
            }, _react2.default.createElement(_pl_image2.default, {
                imageId: props.product.image.image_resource_id,
                src: !props.product.image.image_resource_id ? props.product.image.url : null,
                alt: props.product.product_name,
                name: 'product',
                commands: (0,
                _header_image_helper.getImageCommands)(_image_url_helper.RESIZE, _image_url_helper.DEFAULT_COMPRESSION_QUALITY, PRODUCT_IMAGE_SIZE_PX, PRODUCT_IMAGE_SIZE_PX),
                height: PRODUCT_IMAGE_SIZE_PX,
                width: PRODUCT_IMAGE_SIZE_PX,
                sizes: [PRODUCT_IMAGE_SIZE_PX + 'px']
            }), props.product.image.image_unavailable_string && _react2.default.createElement(_image_unavailable_text2.default, null, props.product.image.image_unavailable_string)),
            listView: true
        });
    };
    exports.default = _cart_dropdown_product2.default.hoc(CartDropdownProduct);
});
/*wfsw*/
;(function() {
    var k = "unencoded__BrowseByBrandOrAddAnItemFromYourIdeaBoards";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "{1}Browse by brand{2} or add an item from your{3}Idea Boards{4}";
    define("_t!%5B%22BrowseByBrandOrAddAnItemFromYourIdeaBoards%22%2C%22%7B1%7DBrowse%20by%20brand%7B2%7D%20or%20add%20an%20item%20from%20your%7B3%7DIdea%20Boards%7B4%7D%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
/*wfsw:click_outside*/
define('click_outside', ['exports', 'react', 'prop_types', 'custom_prop_types', 'turbine_helper_babel'], function(exports, _react, _prop_types, _custom_prop_types, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _prop_types2 = _turbine_helper_babel.interopRequireDefault(_prop_types);
    var ClickOutside = function(_Component) {
        _turbine_helper_babel.inherits(ClickOutside, _Component);
        function ClickOutside() {
            var _ref;
            var _temp, _this, _ret;
            _turbine_helper_babel.classCallCheck(this, ClickOutside);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _turbine_helper_babel.possibleConstructorReturn(this, (_ref = ClickOutside.__proto__ || Object.getPrototypeOf(ClickOutside)).call.apply(_ref, [this].concat(args))),
            _this),
            _this.eventType = null,
            _this.handle = function(e) {
                var el = _this.container;
                if (!_this.eventType) {
                    _this.eventType = e.type;
                }
                var clickTargetNotInContainer = !el.contains(e.target);
                var clickTargetNotInTargetProp = !_this.props.triggerElement || !_this.props.triggerElement.contains(e.target);
                if (_this.eventType === e.type && clickTargetNotInContainer && clickTargetNotInTargetProp) {
                    _this.props.onClickOutside(e);
                }
            }
            ,
            _temp),
            _turbine_helper_babel.possibleConstructorReturn(_this, _ret);
        }
        _turbine_helper_babel.createClass(ClickOutside, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                document.addEventListener('touchstart', this.handle, true);
                document.addEventListener('click', this.handle, true);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                document.removeEventListener('touchstart', this.handle, true);
                document.removeEventListener('click', this.handle, true);
            }
        }, {
            key: 'render',
            value: function render() {
                var _this2 = this;
                var _props = this.props
                  , children = _props.children
                  , onClickOutside = _props.onClickOutside
                  , triggerElement = _props.triggerElement
                  , props = _turbine_helper_babel.objectWithoutProperties(_props, ['children', 'onClickOutside', 'triggerElement']);
                return _react2.default.createElement('div', _turbine_helper_babel.extends({}, props, {
                    ref: function ref(_ref2) {
                        return _this2.container = _ref2;
                    }
                }), children);
            }
        }]);
        return ClickOutside;
    }(_react.Component);
    ClickOutside.defaultProps = {
        children: null,
        triggerElement: null
    };
    exports.default = ClickOutside;
});
/*wfsw*/
/*wfsw:shimmer*/
define('shimmer', ['exports', 'react', 'classnames', 'prop-types', '@styles/header/components/shimmer', 'turbine_helper_babel'], function(exports, _react, _classnames, _propTypes, _shimmer, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _classnames2 = _turbine_helper_babel.interopRequireDefault(_classnames);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var _shimmer2 = _turbine_helper_babel.interopRequireDefault(_shimmer);
    var Shimmer = function Shimmer(_ref) {
        var className = _ref.className
          , rest = _turbine_helper_babel.objectWithoutProperties(_ref, ['className']);
        return _react2.default.createElement('div', _turbine_helper_babel.extends({
            className: (0,
            _classnames2.default)('Shimmer', className)
        }, rest));
    };
    Shimmer.defaultProps = {
        className: ''
    };
    exports.default = _shimmer2.default.hoc(Shimmer);
});
/*wfsw*/
/*wfsw:pl-drawer-header*/
define('pl-drawer-header', ['exports', 'react', 'prop-types', 'pl-close-button', '@styles/_components/drawer/internal/pl-drawer-header', 'turbine_helper_babel'], function(exports, _react, _propTypes, _plCloseButton, _plDrawerHeader, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var _plCloseButton2 = _turbine_helper_babel.interopRequireDefault(_plCloseButton);
    var _plDrawerHeader2 = _turbine_helper_babel.interopRequireDefault(_plDrawerHeader);
    var Header = function Header(_ref) {
        var title = _ref.title
          , onClose = _ref.onClose;
        return _react2.default.createElement('header', {
            className: 'pl-DrawerHeader'
        }, _react2.default.createElement('div', {
            className: 'pl-DrawerHeader-close'
        }, _react2.default.createElement(_plCloseButton2.default, {
            variation: 'primary',
            onClick: onClose
        })), _react2.default.createElement('h2', {
            className: 'pl-DrawerHeader-title'
        }, title));
    };
    Header.defaultProps = {
        onClose: function onClose() {}
    };
    exports.default = _plDrawerHeader2.default.hoc(Header);
});
/*wfsw*/
/*wfsw:pl-drawer-actions*/
define('pl-drawer-actions', ['exports', 'react', 'prop-types', 'classnames', '@styles/_components/drawer/internal/pl-drawer-actions', 'turbine_helper_babel'], function(exports, _react, _propTypes, _classnames, _plDrawerActions, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var _classnames2 = _turbine_helper_babel.interopRequireDefault(_classnames);
    var _plDrawerActions2 = _turbine_helper_babel.interopRequireDefault(_plDrawerActions);
    var Actions = function Actions(_ref) {
        var children = _ref.children
          , compact = _ref.compact;
        return _react2.default.createElement('footer', {
            className: (0,
            _classnames2.default)('pl-DrawerActions', {
                'pl-DrawerActions--compact': compact
            })
        }, children);
    };
    Actions.defaultProps = {
        compact: false
    };
    exports.default = _plDrawerActions2.default.hoc(Actions);
});
/*wfsw*/
/*wfsw:pl_sticky_container*/
define('pl_sticky_container', ['exports', 'react', 'prop-types', 'classnames', 'underscore', 'featuredetect', '@styles/_components/sticky_container/pl_sticky_container', 'turbine_helper_babel'], function(exports, _react, _propTypes, _classnames, _underscore, _featuredetect, _pl_sticky_container, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var _classnames2 = _turbine_helper_babel.interopRequireDefault(_classnames);
    var _underscore2 = _turbine_helper_babel.interopRequireDefault(_underscore);
    var _featuredetect2 = _turbine_helper_babel.interopRequireDefault(_featuredetect);
    var _pl_sticky_container2 = _turbine_helper_babel.interopRequireDefault(_pl_sticky_container);
    var StickyContainer = function(_Component) {
        _turbine_helper_babel.inherits(StickyContainer, _Component);
        function StickyContainer() {
            var _ref;
            var _temp, _this, _ret;
            _turbine_helper_babel.classCallCheck(this, StickyContainer);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _turbine_helper_babel.possibleConstructorReturn(this, (_ref = StickyContainer.__proto__ || Object.getPrototypeOf(StickyContainer)).call.apply(_ref, [this].concat(args))),
            _this),
            _this.state = {
                supportsCSSSticky: false,
                isSticking: false
            },
            _this.containerQuerySelector = null,
            _this.getOffsetTop = function() {
                if (!_this.stickyContainerElement) {
                    return 0 - _this.props.offsetTop;
                }
                var rect = _this.stickyContainerElement.getBoundingClientRect();
                if (!rect) {
                    return 0 - _this.props.offsetTop;
                }
                return rect.top + window.pageYOffset - _this.props.offsetTop;
            }
            ,
            _this.getOffsetBottom = function() {
                if (_this.props.containerRef) {
                    var targetContainerRect = _this.props.containerRef.getBoundingClientRect();
                    if (targetContainerRect) {
                        return targetContainerRect.bottom + window.pageYOffset;
                    }
                }
                return 0;
            }
            ,
            _this.updateStickyState = function(offsetTop, offsetBottom) {
                var scrollTop = _this.containerQuerySelector === window ? _this.containerQuerySelector.pageYOffset : _this.containerQuerySelector.scrollTop;
                var isSticking = offsetBottom === 0 ? scrollTop >= offsetTop : scrollTop >= offsetTop && scrollTop <= offsetBottom;
                _this.setState({
                    isSticking: isSticking
                });
            }
            ,
            _this.handleScroll = function() {
                _this.updateStickyState(_this.getOffsetTop(), _this.getOffsetBottom());
            }
            ,
            _this.throttledHandleScroll = _underscore2.default.throttle(_this.handleScroll, 500),
            _this.useCssSticky = function() {
                return _this.state.supportsCSSSticky && _this.props.cssStickyEnabled;
            }
            ,
            _temp),
            _turbine_helper_babel.possibleConstructorReturn(_this, _ret);
        }
        _turbine_helper_babel.createClass(StickyContainer, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.setState(function() {
                    return {
                        supportsCSSSticky: _featuredetect2.default.supportsCssPositionSticky
                    };
                });
                if (!this.useCssSticky() && this.props.enableSticky) {
                    this.containerQuerySelector = this.props.containerQuerySelector ? document.querySelector(this.props.containerQuerySelector) : window;
                    this.containerQuerySelector.addEventListener('scroll', this.throttledHandleScroll, {
                        passive: true
                    });
                    this.props.scheduleCallback(this.handleScroll);
                }
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if (nextProps.enableSticky && !this.props.enableSticky && !this.useCssSticky()) {
                    this.containerQuerySelector = this.props.containerQuerySelector ? document.querySelector(this.props.containerQuerySelector) : window;
                    this.containerQuerySelector.addEventListener('scroll', this.throttledHandleScroll, {
                        passive: true
                    });
                } else if (!nextProps.enableSticky && this.props.enableSticky && !this.useCssSticky()) {
                    this.containerQuerySelector.removeEventListener('scroll', this.throttledHandleScroll);
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                if (this.containerQuerySelector) {
                    this.containerQuerySelector.removeEventListener('scroll', this.throttledHandleScroll);
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var _this2 = this;
                return _react2.default.createElement('div', {
                    ref: function ref(el) {
                        return _this2.stickyContainerElement = el;
                    },
                    className: (0,
                    _classnames2.default)({
                        StickyContainer: true,
                        'StickyContainer--css-sticky': this.useCssSticky(),
                        'StickyContainer--low-index': this.props.lowIndex
                    }),
                    style: _turbine_helper_babel.extends({}, this.useCssSticky() && {
                        top: this.props.offsetTop
                    })
                }, _react2.default.createElement('header', {
                    className: (0,
                    _classnames2.default)({
                        'StickyContainer-header': true,
                        'StickyContainer-header--low-index': this.props.lowIndex,
                        'is-sticking': this.state.isSticking,
                        'is-contained': this.props.isContained
                    })
                }, this.props.render(this.state.isSticking, this.useCssSticky())), this.state.isSticking && _react2.default.createElement('div', {
                    className: 'StickyContainer-placeholder'
                }));
            }
        }]);
        return StickyContainer;
    }(_react.Component);
    StickyContainer.defaultProps = {
        enableSticky: true,
        cssStickyEnabled: true,
        lowIndex: false,
        containerQuerySelector: '',
        isContained: false,
        offsetTop: 0,
        scheduleCallback: typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function() {}
        ,
        containerRef: null
    };
    exports.default = _pl_sticky_container2.default.hoc(StickyContainer);
});
/*wfsw*/
/*wfsw:portus_constants*/
define('portus_constants', ['exports'], function(exports) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var PortusConstants = {};
    PortusConstants.ACCOUNT_TYPES = {
        B2C: 1,
        ManagedBusinessAccount: 2,
        NonManagedBusinessAccount: 3
    };
    PortusConstants.CREDIT_CARD_PATTERN = /\b[0-9]{4}[-\s]*[0-9]{4}[-\s]*[0-9]{2}[-\s]*[0-9]{2}[-\s]*[0-9]{3}[0-9]?\b/g;
    PortusConstants.PORTUS_PATHS = {
        ACCOUNT: 'account',
        SERVICE: 'service',
        SALES: 'products',
        EMAIL: 'email_us',
        EMAIL_SENT_SUCCESS: 'email_success',
        SERVICE_ISSUE: 'service_issue',
        RECENT_ISSUE: 'recent_issue',
        REFUND_METHOD: 'refund_method'
    };
    PortusConstants.PORTUS_FLOWS = {
        ACCOUNT: 'Account',
        SERVICE: 'Service',
        SALES: 'Sales',
        RECENT: 'Recent'
    };
    var SERVICE_ISSUE_TYPES = {
        DAMAGE_DEFECT: 'damage_defect',
        WRONG_PRODUCT: 'wrong_product',
        CANCEL: 'cancel',
        RETURN: 'return',
        SHIPPING_DELIVERY: 'shipping_delivery',
        BILLING: 'billing',
        REFUND_REPLACEMENT: 'refund_replacement',
        MANAGE_EMAIL_SUBSCRIPTIONS: 'manage_email_subscriptions',
        CHANGE_EMAIL_OR_PASSWORD: 'change_email_or_password'
    };
    var ACCOUNT_ISSUE_TYPES = {
        MANAGE_EMAIL_SUBSCRIPTIONS: 'manage_email_subscriptions',
        CHANGE_EMAIL_OR_PASSWORD: 'change_email_or_password',
        WAYFAIR_CREDIT_CARD: 'wf_cc_questions'
    };
    PortusConstants.EXPERT_CATEGORIES = [{
        categoryId: 45342,
        imageResourceId: 48146759,
        name: 'Home Improvement',
        mkcId: 78
    }, {
        categoryId: 414871,
        imageResourceId: 53244566,
        name: 'Mattresses',
        mkcId: 43
    }, {
        categoryId: 1826903,
        imageResourceId: 48145150,
        name: 'Upholstery',
        mkcId: 31
    }, {
        categoryId: 332627,
        imageResourceId: 7952800,
        name: 'Office',
        mkcId: 121
    }, {
        categoryId: 32334,
        imageResourceId: 43277623,
        name: 'Outdoor',
        mkcId: 122
    }, {
        categoryId: 45974,
        imageResourceId: 39846776,
        name: 'Other',
        mkcId: 6
    }];
    PortusConstants.SELECTION_ID = {
        SALES_PATH: 1,
        SERVICE_PATH: 2,
        ACCOUNT_PATH: 3,
        SALES_PRODUCT: 4,
        SALES_CATEGORY: 5,
        SERVICE_ORDER_PRODUCT: 6,
        DAMAGE_DEFECT: 7,
        WRONG_PRODUCT: 8,
        RETURN: 9,
        SHIPPING_DELIVERY: 10,
        CANCEL_ORDER: 11,
        BILLING: 12,
        MANAGE_EMAIL_SUBSCRIPTIONS: 13,
        CHANGE_EMAIL_OR_PASSWORD: 14,
        CHANGE_PAYMENT_METHOD: 15,
        UPDATE_ADDRESS: 16,
        CALL_US_DPN: 17,
        CALL_US_PORTUS_NUMBER: 18,
        EMAIL_US: 19,
        SALES_OTHER_PRODUCT: 29,
        CHAT_WITH_US: 30,
        SELF_SERVICE_DAMAGE_DEFECT: 20,
        SELF_SERVICE_WRONG_PRODUCT: 21,
        SELF_SERVICE_RETURN: 22,
        SELF_SERVICE_SHIPPING_DELIVERY: 23,
        SELF_SERVICE_CANCEL_ORDER: 24,
        SELF_SERVICE_MANAGE_EMAIL_SUBSCRIPTIONS: 25,
        SELF_SERVICE_CHANGE_EMAIL_OR_PASSWORD: 26,
        SELF_SERVICE_CHANGE_DELIVERY_METHOD: 31,
        SELF_SERVICE_VIEW_ASSEMBLY_INSTRUCTIONS: 32,
        RECENT_ISSUE_PATH: 33,
        REFUND_REPLACEMENT: 34,
        SELF_SERVICE_REFUND: 35,
        QUESTIONS_ABOUT_WAYFAIR_CC: 36,
        SELF_SERVICE_PAY_WAYFAIR_CC: 37,
        REFUND_METHOD_STORE_CREDIT: 38,
        REFUND_METHOD_ORIGINAL_PAYMENT: 39
    };
    PortusConstants.REFUND_METHOD = [{
        name: 'store_credit',
        text: 'store credit',
        id: PortusConstants.SELECTION_ID.REFUND_METHOD_STORE_CREDIT
    }, {
        name: 'original_payment_method',
        text: 'original payment method',
        id: PortusConstants.SELECTION_ID.REFUND_METHOD_ORIGINAL_PAYMENT
    }];
    PortusConstants.ACCOUNT_FALLBACK_ISSUES = [{
        name: ACCOUNT_ISSUE_TYPES.MANAGE_EMAIL_SUBSCRIPTIONS,
        text: 'Manage Email Subscriptions',
        textKey: 'PortusIssueEmailSubscriptions',
        emailText: 'I want to manage my email subscriptions',
        emailTextKey: 'PortusIssueEmailSubscriptionsEmailText',
        selectionId: PortusConstants.SELECTION_ID.MANAGE_EMAIL_SUBSCRIPTIONS,
        iconKey: 'Email'
    }, {
        name: ACCOUNT_ISSUE_TYPES.CHANGE_EMAIL_OR_PASSWORD,
        text: 'Change Email/Password',
        textKey: 'PortusIssueEmailPassword',
        emailText: 'You need help changing your email address or password',
        emailTextKey: 'PortusIssueEmailPasswordEmailText',
        selectionId: PortusConstants.SELECTION_ID.CHANGE_EMAIL_OR_PASSWORD,
        iconKey: 'ChangePassword'
    }, {
        name: ACCOUNT_ISSUE_TYPES.WAYFAIR_CREDIT_CARD,
        text: 'Wayfair Credit Card',
        emailText: 'I have questions about my Wayfair Credit Card',
        selectionId: PortusConstants.SELECTION_ID.QUESTIONS_ABOUT_WAYFAIR_CC,
        iconKey: 'Card'
    }];
    PortusConstants.SERVICE_FALLBACK_ISSUES = [{
        name: SERVICE_ISSUE_TYPES.DAMAGE_DEFECT,
        text: 'Damaged or defective',
        textKey: 'PortusIssueDamageDefect',
        emailText: 'Damaged or defective',
        emailTextKey: 'PortusIssueDamageDefectEmailText',
        selectionId: PortusConstants.SELECTION_ID.DAMAGE_DEFECT,
        iconKey: 'Damage'
    }, {
        name: SERVICE_ISSUE_TYPES.WRONG_PRODUCT,
        text: 'Wrong product',
        textKey: 'PortusIssueWrongProduct',
        emailText: 'Wrong product',
        emailTextKey: 'PortusIssueWrongProductEmailText',
        selectionId: PortusConstants.SELECTION_ID.WRONG_PRODUCT,
        iconKey: 'PackageExclamation'
    }, {
        name: SERVICE_ISSUE_TYPES.RETURN,
        text: 'Start a return',
        textKey: 'PortusIssueReturn',
        emailText: 'Start a return',
        emailTextKey: 'PortusIssueReturnEmailText',
        selectionId: PortusConstants.SELECTION_ID.RETURN,
        iconKey: 'Return'
    }, {
        name: SERVICE_ISSUE_TYPES.SHIPPING_DELIVERY,
        text: 'Shipping and delivery',
        textKey: 'PortusIssueShipping',
        emailText: 'Shipping and delivery',
        emailTextKey: 'PortusIssueShippingEmailText',
        selectionId: PortusConstants.SELECTION_ID.SHIPPING_DELIVERY,
        iconKey: 'Truck'
    }, {
        name: SERVICE_ISSUE_TYPES.CANCEL,
        text: 'Cancel or change order',
        textKey: 'PortusIssueCancel',
        emailText: 'Cancel or change order',
        emailTextKey: 'PortusIssueCancelEmailText',
        selectionId: PortusConstants.SELECTION_ID.CANCEL_ORDER,
        iconKey: 'Calendar'
    }, {
        name: SERVICE_ISSUE_TYPES.BILLING,
        text: 'Billing and payment',
        textKey: 'PortusIssueBillingPayment',
        emailText: 'Billing and payment',
        emailTextKey: 'PortusIssueBillingPaymentEmailText',
        selectionId: PortusConstants.SELECTION_ID.BILLING,
        iconKey: 'Card'
    }];
    PortusConstants.SERVICE_ISSUE_TYPES = SERVICE_ISSUE_TYPES;
    PortusConstants.ACCOUNT_ISSUE_TYPES = ACCOUNT_ISSUE_TYPES;
    PortusConstants.QUESTION_ID = {
        PATH_SELECT: 1,
        SALES_PRODUCT_CATEGORY_SELECT: 2,
        ACCOUNT_ISSUE_SELECT: 3,
        SERVICE_ISSUE_SELECT: 4,
        SERVICE_ORDER_PRODUCT_SELECT: 5,
        RESOLUTION_SELECT: 6,
        REFUND_METHOD_SELECT: 7
    };
    PortusConstants.TRACKING_EVENTS = {
        LANDING: 'PC_Landing',
        ACCOUNT_FLOW_ONE: 'PC_AccountFlow_1',
        ACCOUNT_FLOW_TWO: 'PC_AccountFlow_2',
        SALES_FLOW_ONE: 'PC_SalesFlow_1',
        SALES_FLOW_TWO: 'PC_SalesFlow_2',
        ORDER_FLOW_ONE: 'PC_OrderFlow_1',
        ORDER_FLOW_TWO: 'PC_OrderFlow_2',
        ORDER_FLOW_THREE: 'PC_OrderFlow_3',
        RECENT_ISSUE_FLOW: 'PC_PrevSelfServeItem',
        CALL_US: 'PC_CallUs',
        EMAIL_US: 'PC_EmailUs',
        CHAT_WITH_US: 'PC_ChatWithUs',
        SELF_SERVICE: 'PC_SelfService',
        DPN: 'DPNClickedPreCheck',
        SELECTED_ORDER_PRODUCT: 'PC_OrderProduct',
        SELECTED_CATEGORY: 'PC_Category',
        SELECTED_SKU: 'PC_Sku',
        SELECTED_ISSUE: 'PC_Issue',
        SEE_MORE_ORDER_PRODUCTS: 'PC_SeeMoreOrderProduct',
        SEE_MORE_SKUS: 'PC_SeeMoreSku',
        SELECTED_OTHER_SKU: 'PC_OtherProduct',
        SELECTED_REFUND_METHOD: 'PC_RefundMethod',
        SALES: 'PC_Sales',
        ORDER: 'PC_Order',
        ACCOUNT: 'PC_Account',
        PORTUS_RUN_CREATED: 'PC_PortusRun',
        EMAIL_SENT: 'PC_EmailSend',
        BREADCRUMB_CLICK: 'PC_Breadcrumb',
        CLICKED_CATEGORY_CARD: 'PC_SelectedCategory',
        CLICKED_PRODUCT_CARD: 'PC_SelectedProduct',
        RETURN_TO_HELP_PAGE: 'PC_BackToHelp'
    };
    PortusConstants.PORTUS_ORDER_WIZARD_DRAWER_AVAILABILITY_TIME = 86400;
    PortusConstants.DEFAULT_NUM_PRODUCTS_DISPLAYED_SERVICE = 8;
    PortusConstants.ORDER_PRODUCT_STATUS_ID = {
        PREPARING_FOR_SHIPPING: 127,
        SHIPPED: 8
    };
    PortusConstants.SOURCE = {
        HELP_CENTER: 1,
        ORDER_SEARCH: 2,
        SMS: 3,
        QUICK_SERVICE: 4,
        FEEDBACK: 5,
        EMAIL: 6,
        TRANSACTIONAL_EMAIL_BUTTON: 7,
        FAQ_REDIRECT: 8,
        OLD_CS_REDIRECT: 9,
        FAQ: 10,
        PDP_FAB: 11,
        RETURNS_FLOW_FOOTER: 12,
        IOS_APP: 13
    };
    PortusConstants.cardImages = {
        DAMAGE_DEFECT: ''
    };
    PortusConstants.WAYFAIR_CREDIT_CARD_PHONE_NUMBER = '866-513-5795';
    PortusConstants.RECENT_ISSUE_PATHS = {
        COMPLETED_RETURN: 1,
        ABANDONED_RETURN: 2
    };
    PortusConstants.INVAILD_ACCOUNT_MANAGER = {
        EMPLOYEE_BDG_SPECIALIST: 12488,
        DEAD_ACCOUNT_HOLDING_USER: 12910
    };
    PortusConstants.INVAILD_ACCOUNT_MANAGERS = [PortusConstants.INVAILD_ACCOUNT_MANAGER.EMPLOYEE_BDG_SPECIALIST, PortusConstants.INVAILD_ACCOUNT_MANAGER.DEAD_ACCOUNT_HOLDING_USER];
    PortusConstants.FILE_UPLOAD_HANDLERS = {
        CONTACT_US: 'contact_us_attachments.php',
        WAYCHAT: 'waychat_attachments.php'
    };
    exports.default = PortusConstants;
});
/*wfsw*/
;(function() {
    var k = "unencoded__HelpWithOrderButton";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "I need help with an order or account issue";
    define("_t!%5B%22HelpWithOrderButton%22%2C%22I%20need%20help%20with%20an%20order%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__SiteFeedbackButton";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "I want to give feedback on your site";
    define("_t!%5B%22SiteFeedbackButton%22%2C%22I%20want%20to%20give%20feedback%20on%20your%20site%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
/*wfsw:pl_radio_group*/
define('pl_radio_group', ['exports', 'react', 'prop-types', 'pl-visually-hidden', 'pl_block', 'turbine_helper_babel'], function(exports, _react, _propTypes, _plVisuallyHidden, _pl_block, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var _plVisuallyHidden2 = _turbine_helper_babel.interopRequireDefault(_plVisuallyHidden);
    var RadioGroup = function(_Component) {
        _turbine_helper_babel.inherits(RadioGroup, _Component);
        function RadioGroup() {
            var _ref;
            var _temp, _this, _ret;
            _turbine_helper_babel.classCallCheck(this, RadioGroup);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _turbine_helper_babel.possibleConstructorReturn(this, (_ref = RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call.apply(_ref, [this].concat(args))),
            _this),
            _this.state = {
                value: _this.props.defaultValue == null ? null : _this.props.defaultValue
            },
            _this.isControlled = function() {
                return typeof _this.props.value !== 'undefined';
            }
            ,
            _this.references = {},
            _this.handleRef = function(index) {
                return function(node) {
                    _this.references[index] = node;
                }
                ;
            }
            ,
            _this.handleChange = function(e) {
                if (_this.props.disabled) {
                    return;
                }
                _this.props.onChange(e);
                if (!_this.isControlled()) {
                    var selectedValue = e.target.value;
                    _this.setState(function() {
                        return {
                            value: selectedValue
                        };
                    });
                }
            }
            ,
            _this.getValue = function() {
                return _this.isControlled() ? _this.props.value : _this.state.value;
            }
            ,
            _temp),
            _turbine_helper_babel.possibleConstructorReturn(_this, _ret);
        }
        _turbine_helper_babel.createClass(RadioGroup, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;
                var hasAnyUndefinedRefs = Object.values(this.references).some(function(ref) {
                    return typeof ref === 'undefined';
                });
                if (this.props.isControlled && Object.keys(this.references).length > 0 && !hasAnyUndefinedRefs) {
                    Object.values(this.references).forEach(function(ref) {
                        if (ref.checked) {
                            _this2.props.onChange({
                                target: ref,
                                value: ref.checked,
                                checked: ref.checked,
                                name: name,
                                domSync: true
                            });
                        }
                    });
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var _this3 = this;
                var _props = this.props
                  , children = _props.children
                  , name = _props.name
                  , disabled = _props.disabled
                  , legend = _props.legend
                  , isControlled = _props.isControlled
                  , displayInline = _props.displayInline
                  , hiddenLegend = _props.hiddenLegend;
                return _react2.default.createElement('fieldset', {
                    className: 'pl-RadioGroup',
                    name: name,
                    disabled: disabled,
                    'data-hb-id': 'pl_radio_group'
                }, legend && !hiddenLegend ? _react2.default.createElement(_pl_block.Block, {
                    mb: _pl_block.SPACING.SPACE_5,
                    is: 'legend'
                }, legend) : _react2.default.createElement('legend', null, _react2.default.createElement(_plVisuallyHidden2.default, null, legend)), _react.Children.map(children, function(child, index) {
                    return isControlled ? _react2.default.cloneElement(child, _turbine_helper_babel.extends({}, child.props, {
                        name: name,
                        onChange: _this3.handleChange,
                        checked: _this3.getValue() === child.props.value,
                        disabled: disabled || child.props.disabled,
                        refCallback: _this3.handleRef(index),
                        displayInline: displayInline
                    })) : _react2.default.cloneElement(child, _turbine_helper_babel.extends({}, child.props, {
                        name: name,
                        onChange: _this3.handleChange,
                        checked: _this3.getValue() === child.props.value,
                        displayInline: displayInline
                    }));
                }));
            }
        }]);
        return RadioGroup;
    }(_react.Component);
    RadioGroup.defaultProps = {
        disabled: false,
        legend: null,
        isControlled: true,
        children: null,
        onChange: function onChange() {},
        displayInline: false,
        hiddenLegend: false,
        defaultValue: null
    };
    exports.default = RadioGroup;
});
/*wfsw*/
/*wfsw:pl_radio_button*/
define('pl_radio_button', ['exports', 'react', 'prop-types', 'classnames', 'switch', 'pl_radio_base', '@styles/_components/radio_button/pl_radio_button', 'turbine_helper_babel'], function(exports, _react, _propTypes, _classnames, _switch, _pl_radio_base, _pl_radio_button, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _propTypes2 = _turbine_helper_babel.interopRequireDefault(_propTypes);
    var _classnames2 = _turbine_helper_babel.interopRequireDefault(_classnames);
    var _switch2 = _turbine_helper_babel.interopRequireDefault(_switch);
    var _pl_radio_base2 = _turbine_helper_babel.interopRequireDefault(_pl_radio_base);
    var _pl_radio_button2 = _turbine_helper_babel.interopRequireDefault(_pl_radio_button);
    var noop = function noop() {};
    var RadioButton = function(_Component) {
        _turbine_helper_babel.inherits(RadioButton, _Component);
        function RadioButton() {
            var _ref;
            var _temp, _this, _ret;
            _turbine_helper_babel.classCallCheck(this, RadioButton);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _turbine_helper_babel.possibleConstructorReturn(this, (_ref = RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call.apply(_ref, [this].concat(args))),
            _this),
            _this.state = {
                isHovered: false
            },
            _this.handleMouseEnterFocus = function() {
                _this.setState({
                    isHovered: true
                });
            }
            ,
            _this.handleMouseLeaveBlur = function() {
                _this.setState({
                    isHovered: false
                });
            }
            ,
            _temp),
            _turbine_helper_babel.possibleConstructorReturn(_this, _ret);
        }
        _turbine_helper_babel.createClass(RadioButton, [{
            key: 'render',
            value: function render() {
                var _this2 = this;
                var _props = this.props
                  , checked = _props.checked
                  , defaultChecked = _props.defaultChecked
                  , children = _props.children
                  , disabled = _props.disabled
                  , id = _props.id
                  , name = _props.name
                  , onChange = _props.onChange
                  , value = _props.value
                  , hiddenLabel = _props.hiddenLabel
                  , refCallback = _props.refCallback
                  , displayInline = _props.displayInline
                  , isTopAligned = _props.isTopAligned
                  , enzymeId = _props.enzymeId
                  , rest = _turbine_helper_babel.objectWithoutProperties(_props, ['checked', 'defaultChecked', 'children', 'disabled', 'id', 'name', 'onChange', 'value', 'hiddenLabel', 'refCallback', 'displayInline', 'isTopAligned', 'enzymeId']);
                var wrappingClassnames = (0,
                _classnames2.default)('pl-RadioButton', {
                    'pl-RadioButton--inline': displayInline,
                    'pl-RadioButton--isTopAligned': isTopAligned
                });
                var eventHandlers = {
                    onMouseEnter: this.handleMouseEnterFocus,
                    onMouseLeave: this.handleMouseLeaveBlur,
                    onFocus: this.handleMouseEnterFocus,
                    onBlur: this.handleMouseLeaveBlur
                };
                return _react2.default.createElement('label', _turbine_helper_babel.extends({
                    className: wrappingClassnames
                }, eventHandlers, {
                    'data-hb-id': 'pl_radio_button'
                }), _react2.default.createElement(_switch2.default, _turbine_helper_babel.extends({}, rest, {
                    className: 'pl-RadioButton-switch',
                    id: id,
                    type: 'radio',
                    name: name,
                    onChange: onChange,
                    innerRef: refCallback,
                    checked: checked,
                    defaultChecked: defaultChecked,
                    disabled: disabled,
                    value: value,
                    'aria-label': hiddenLabel ? children : null,
                    render: function render(_ref2) {
                        var disabled = _ref2.disabled
                          , checked = _ref2.checked;
                        return _react2.default.createElement(_pl_radio_base2.default, {
                            disabled: disabled,
                            checked: checked,
                            isHovered: _this2.state.isHovered,
                            displayInline: displayInline
                        });
                    }
                })), !hiddenLabel && _react2.default.createElement('span', {
                    className: (0,
                    _classnames2.default)('pl-RadioButton-label', {
                        'is-hovered': this.state.isHovered,
                        'is-checked': checked
                    })
                }, children));
            }
        }]);
        return RadioButton;
    }(_react.Component);
    RadioButton.defaultProps = {
        name: null,
        disabled: false,
        onChange: noop,
        value: null,
        hiddenLabel: false,
        refCallback: noop,
        enzymeId: null,
        displayInline: false,
        id: null,
        isTopAligned: false
    };
    exports.default = _pl_radio_button2.default.hoc(RadioButton);
});
/*wfsw*/
;(function() {
    var k = "unencoded__SelectFeedbackTopic";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Select Feedback Topic";
    define("_t!%5B%22SelectFeedbackTopic%22%2C%22Select%20Feedback%20Topic%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__CartCheckoutFeedbackType";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Cart or Checkout";
    define("_t!%5B%22CartCheckoutFeedbackType%22%2C%22Cart%20or%20Checkout%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__SearchFeedbackType";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Search";
    define("_t!%5B%22SearchFeedbackType%22%2C%22Search%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__ProductFeedbackType";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Product";
    define("_t!%5B%22ProductFeedbackType%22%2C%22Product%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__WebsiteFeedbackType";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Website";
    define("_t!%5B%22WebsiteFeedbackType%22%2C%22Website%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__GeneralSuggestionFeedbackType";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "General Suggestion";
    define("_t!%5B%22GeneralSuggestionFeedbackType%22%2C%22General%20Suggestion%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__SubmitFeedback";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Please Submit your Feedback";
    define("_t!%5B%22SubmitFeedback%22%2C%22Please%20Submit%20your%20Feedback%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__SubmitFeedbackButton";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Submit";
    define("_t!%5B%22SubmitFeedbackButton%22%2C%22Submit%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__FeedbackDrawerNameRequired";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Name is required";
    define("_t!%5B%22FeedbackDrawerNameRequired%22%2C%22Name%20is%20required%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__FeedbackDrawerInputValidEmail";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Please input a valid email";
    define("_t!%5B%22FeedbackDrawerInputValidEmail%22%2C%22Please%20input%20a%20valid%20email%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__FeedbackDrawerMessageRequired";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Feedback message is required";
    define("_t!%5B%22FeedbackDrawerMessageRequired%22%2C%22Feedback%20message%20is%20required%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__FeedbackCustomerName";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Name";
    define("_t!%5B%22FeedbackCustomerName%22%2C%22Name%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__FeedbackCustomerEmailAddress";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Email Address";
    define("_t!%5B%22FeedbackCustomerEmailAddress%22%2C%22Email%20Address%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__LivingRoom";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Living Room";
    define("_t!%5B%22LivingRoom%22%2C%22Living%20Room%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__Kitchen";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Kitchen";
    define("_t!%5B%22Kitchen%22%2C%22Kitchen%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__Bathroom";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Bathroom";
    define("_t!%5B%22Bathroom%22%2C%22Bathroom%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__SignInAsAdmin";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Sign In as Admin";
    define("_t!%5B%22SignInAsAdmin%22%2C%22Sign%20In%20As%20Admin%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__AnErrorHasOccurredPeriodPleaseTryAgainLater";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "An error has occurred. Please try again later.";
    define("_t!%5B%22AnErrorHasOccurredPeriodPleaseTryAgainLater%22%2C%22An%20error%20has%20occurred.%20Please%20try%20again%20later.%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__AnErrorHasOccurredWhenFetchHearts";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "An error has occurred when fetch hearts";
    define("_t!%5B%22AnErrorHasOccurredWhenFetchHearts%22%2C%22An%20error%20has%20occurred%20when%20fetch%20hearts%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__AnErrorHasOccurredWhenFetchLists";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "An error has occurred when fetch lists";
    define("_t!%5B%22AnErrorHasOccurredWhenFetchLists%22%2C%22An%20error%20has%20occurred%20when%20fetch%20lists%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__AnErrorHasOccurredWhenCreateANewList";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "An error has occurred when create a new list";
    define("_t!%5B%22AnErrorHasOccurredWhenCreateANewList%22%2C%22An%20error%20has%20occurred%20when%20create%20a%20new%20list%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__AnErrorHasOccurredWhenAddAnItemToAList";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "An error has occurred when add an item to a list";
    define("_t!%5B%22AnErrorHasOccurredWhenAddAnItemToAList%22%2C%22An%20error%20has%20occurred%20when%20add%20an%20item%20to%20a%20list%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
/*wfsw:project_constants*/
define('project_constants', ['exports', 'turbine_helper_babel'], function(exports, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _PROJECT_TYPE_ENUM_IN;
    var userTypes = exports.userTypes = {
        CLIENT: 1,
        DESIGNER: 3
    };
    var feedbackStatuses = exports.feedbackStatuses = {
        POSITIVE: 1,
        NEGATIVE: 2
    };
    var PROJECT_TYPE_ENUMS = exports.PROJECT_TYPE_ENUMS = {
        LITE: 'LITE',
        CLASSIC: 'CLASSIC'
    };
    var PROJECT_TYPE_ENUM_INDEX = exports.PROJECT_TYPE_ENUM_INDEX = (_PROJECT_TYPE_ENUM_IN = {},
    _turbine_helper_babel.defineProperty(_PROJECT_TYPE_ENUM_IN, PROJECT_TYPE_ENUMS.LITE, 0),
    _turbine_helper_babel.defineProperty(_PROJECT_TYPE_ENUM_IN, PROJECT_TYPE_ENUMS.CLASSIC, 1),
    _PROJECT_TYPE_ENUM_IN);
    var CHAT_DOMAIN = exports.CHAT_DOMAIN = 'customer_service';
    var PROJECT_STATUS = exports.PROJECT_STATUS = {
        STATUS_NEW: 1,
        STATUS_INITIATED: 2,
        STATUS_READY_FOR_MATCH: 3,
        STATUS_MATCHED: 4,
        STATUS_IN_PROGRESS: 5,
        STATUS_COMPLETE: 6,
        STATUS_CANCELED: 7
    };
    var DELIVERABLE_TYPES = exports.DELIVERABLE_TYPES = {
        ROOM_PLANNER: 'ROOM_PLANNER',
        ROOM_RENDERING: 'ROOM_RENDERING'
    };
    var CLIENT_STEPS = exports.CLIENT_STEPS = {
        SURVEY_STEP: 1,
        WAITING_STEP: 2,
        COLLABORATE_STEP: 3,
        COMPLETE_STEP: 4
    };
    var DESIGNER_STEPS = exports.DESIGNER_STEPS = {
        DESIGN_STEP: 1,
        FINALIZE_STEP: 2,
        COMPLETE_STEP: 3
    };
    var CLIENT_PHASE_ENUMS = exports.CLIENT_PHASE_ENUMS = {
        COMPLETE_ROOM_DETAILS: 'COMPLETE_ROOM_DETAILS',
        WAIT_FOR_MATCH: 'WAIT_FOR_MATCH',
        CHOOSE_DESIGNER: 'CHOOSE_DESIGNER',
        WAIT_FOR_DELIVERABLE: 'WAIT_FOR_DELIVERABLE',
        COLLABORATE: 'COLLABORATE',
        PROJECT_COMPLETE: 'PROJECT_COMPLETE'
    };
    var surveyUrls = exports.surveyUrls = {
        CLIENT: 'https://designerservices.typeform.com/to/voc6O0',
        DESIGNER: 'https://designerservices.typeform.com/to/nvN0HV'
    };
    var PROJECT_CONVERSATION_LIMIT = exports.PROJECT_CONVERSATION_LIMIT = 300;
    var PROJECT_MESSAGE_COUNT = exports.PROJECT_MESSAGE_COUNT = 500;
    var PROJECT_MESSAGE_INDICATOR_MAX_COUNT = exports.PROJECT_MESSAGE_INDICATOR_MAX_COUNT = 99;
    var THUMBNAIL_DIAMETER = exports.THUMBNAIL_DIAMETER = 80;
    var DRAWER_TAB_IDS = exports.DRAWER_TAB_IDS = {
        SHOPPING_LIST: 1
    };
    var DEFAULT_DESIGNER_COVER_PHOTO_IRE_ID = exports.DEFAULT_DESIGNER_COVER_PHOTO_IRE_ID = 52663678;
    var PAPER_CHECKMARK_ASSET_IRE_ID = exports.PAPER_CHECKMARK_ASSET_IRE_ID = 54649627;
    var ZERO_PRICE = exports.ZERO_PRICE = 0;
});
/*wfsw*/
/*wfsw:query_service*/
define('query_service', ['exports', 'fetch_query', 'turbine_helper_babel'], function(exports, _fetch_query, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _fetch_query2 = _turbine_helper_babel.interopRequireDefault(_fetch_query);
    var queryService = {
        fetchQuery: _fetch_query2.default
    };
    exports.default = queryService;
});
/*wfsw*/
/*wfsw:room_planner_queries*/
define('room_planner_queries', ['exports', 'graphql_tag', 'room_planner_query_fragments', 'turbine_helper_babel'], function(exports, _graphql_tag, _room_planner_query_fragments, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.reportBadImageMutation = exports.updateRoomNameMutation = exports.deleteRoomBackgroundMutation = exports.saveInstructionRoomMutation = exports.saveRoomMutation = exports.copyTemplateRoomMutation = exports.stlItemsQuery = exports.largeImageUrlQuery = exports.roomProductsShuffledQuery = exports.roomProductsQuery = exports.deleteRoomMutation = exports.saveItemProductQuery = exports.savedRoomsQuery = exports.productQuery = exports.productItemQuery = exports.getRoomForDesignBinder = exports.ssrRoomQuery = exports.itemsQuery = exports.getAllListsQuery = exports.listNamesQuery = undefined;
    var _graphql_tag2 = _turbine_helper_babel.interopRequireDefault(_graphql_tag);
    var listNamesQuery = exports.listNamesQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query getProfilePage($first: Int!) {\n me {\n customer {\n itemListsConnection(first: $first, itemNumber: 0) {\n edges {\n node {\n itemListId: listId\n itemListName: name\n itemCount: itemCount\n }\n }\n }\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_queries~0' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var getAllListsQuery = exports.getAllListsQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query getAllLists($first: Int!, $after: String!, $itemNumber: Int!) {\n me {\n customer {\n itemListsConnection(\n first: $first\n after: $after\n itemNumber: $itemNumber\n ) {\n edges {\n node {\n itemListId: listId\n itemListName: name\n itemCount: itemCount\n }\n }\n pageInfo {\n endCursor\n hasNextPage\n }\n }\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_queries~1' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var itemsQuery = exports.itemsQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query getCarousel(\n $board_id: Int!\n $customer_id: Int!\n $page: Int!\n $item_types: [Int]!\n $room_planner: Boolean!\n $image_size: Int\n ) {\n board(\n board_id: $board_id\n customer_id: $customer_id\n page: $page\n item_types: $item_types\n room_planner: $room_planner\n ) {\n id\n name\n url\n can_upload_item_custom_image\n items(image_size: $image_size) {\n ...fullItemDetails\n }\n page\n permissions {\n can_edit_room\n }\n }\n }\n ', '']].concat(f));
        q.path = 'room_planner_queries~2' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([_room_planner_query_fragments.fullItemDetails]);
    var fullProductDetails = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n fragment FullProductDetails on Product_Interface_Type {\n __typename\n sku\n name\n b_suppl_or_manu_discontinued\n manufacturer_short_name\n unit_sale_price\n unit_list_price\n has_stock\n is_low_in_stock\n low_in_stock_text\n is_kit\n product_option_categories {\n category_name\n product_options {\n option_id\n name\n cost\n }\n }\n product_customizations {\n cost\n customizations {\n customize_text_id\n name\n is_required\n }\n }\n has_trade_price\n class_ids\n display_info {\n dimensions {\n units\n maxHeight\n maxWidth\n maxDepth\n }\n measurements {\n tags {\n title\n value\n units\n }\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_queries~3' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var ssrRoomQuery = exports.ssrRoomQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query getRoomById(\n $room_id: Int!\n $customer_id: Int!\n $image_size: Int\n $curation_type: RoomEnum!\n ) {\n roomPlanner {\n room(roomInput: {roomId: $room_id, customerId: $customer_id}) {\n background {\n image {\n id\n width\n height\n }\n url\n }\n roomItems {\n ...fullRoomItemDetails\n item_model(image_size: $image_size) {\n ...fullItemDetails\n }\n }\n userProvidedWidth\n userProvidedHeight\n }\n curation(type: $curation_type) {\n ... on CurationInterface {\n collections {\n collectionId\n title\n dropPoints {\n dropPointX\n dropPointY\n anchorPointX\n anchorPointY\n }\n image {\n id\n }\n }\n }\n }\n }\n }\n ', '', '']].concat(f));
        q.path = 'room_planner_queries~4' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([_room_planner_query_fragments.fullRoomItemDetails, _room_planner_query_fragments.fullItemDetails]);
    var getRoomForDesignBinder = exports.getRoomForDesignBinder = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query getRoomForDesignBinder(\n $roomID: Int64!\n $customerID: Int!\n $imageSize: Int\n ) {\n room(owner_customer_id: $customerID, room_id: $roomID) {\n id\n itemList {\n listId\n owner {\n customerId\n }\n type\n name\n }\n background_image_id\n background_image_url\n background_image_width\n background_image_height\n room_items {\n ...fullRoomItemDetails\n item_model(image_size: $imageSize) {\n id\n name\n object_key\n favorited_store\n type\n image_url\n image_resource_id(is_silhouette: true)\n product_silhouette_images {\n id\n width\n height\n }\n image_data {\n flipped_image_url(is_silhouette: true)\n }\n width\n height\n selected_option_ids\n product_3d_images {\n ire_id\n image_url\n thumbnail_image_url\n rotation_z_angle\n image_width\n image_height\n three_d_image_type\n }\n }\n }\n }\n }\n ', '']].concat(f));
        q.path = 'room_planner_queries~5' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([_room_planner_query_fragments.fullRoomItemDetails]);
    var productItemQuery = exports.productItemQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query getProductDetailsForItems(\n $board_id: Int!\n $customer_id: Int!\n $page: Int!\n $item_types: [Int]!\n $room_planner: Boolean!\n $image_size: Int\n ) {\n board(\n board_id: $board_id\n customer_id: $customer_id\n page: $page\n item_types: $item_types\n room_planner: $room_planner\n ) {\n items(image_size: $image_size) {\n id\n product_silhouette_images {\n id\n width\n height\n }\n image_data {\n flipped_image_url(is_silhouette: true)\n }\n url\n product: product_model(load_with_store: true) {\n ...FullProductDetails\n }\n }\n page\n }\n }\n ', '']].concat(f));
        q.path = 'room_planner_queries~6' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([fullProductDetails]);
    var productQuery = exports.productQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query getProductData(\n $item_id: Int!\n $owner_customer_id: Int!\n $image_size: Int\n ) {\n item(\n item_id: $item_id\n owner_customer_id: $owner_customer_id\n image_size: $image_size\n ) {\n id\n product_silhouette_images {\n id\n width\n height\n }\n image_data {\n flipped_image_url(is_silhouette: true)\n }\n url\n product: product_model(load_with_store: true) {\n ...FullProductDetails\n }\n }\n }\n ', '']].concat(f));
        q.path = 'room_planner_queries~7' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([fullProductDetails]);
    var savedRoomsQuery = exports.savedRoomsQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query getSavedRooms($first: Int!, $after: String!, $includeItems: Boolean!) {\n me {\n customer {\n roomConnection(\n first: $first\n after: $after\n includeItems: $includeItems\n ) {\n edges {\n node {\n roomId\n type\n name\n url\n savedRoomImage {\n id\n }\n dateUpdated\n }\n cursor\n }\n pageInfo {\n startCursor\n endCursor\n hasNextPage\n }\n }\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_queries~8' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var saveItemProductQuery = exports.saveItemProductQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n mutation saveItemProduct(\n $itemListInput: ItemListInput!\n $itemInput: ProductItemInput!\n $image_size: Int\n ) {\n favorites {\n list(itemListInput: $itemListInput) {\n saveItemProduct(itemInput: $itemInput, image_size: $image_size) {\n ...fullItemDetails\n }\n }\n }\n }\n ', '']].concat(f));
        q.path = 'room_planner_queries~9' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([_room_planner_query_fragments.fullItemDetails]);
    var deleteRoomMutation = exports.deleteRoomMutation = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n mutation deleteRoom($roomId: Int!) {\n roomPlanner {\n room(roomId: $roomId) {\n deleteRoom {\n id: roomId\n }\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_queries~10' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var roomProductsQuery = exports.roomProductsQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query getRoomProducts($roomInput: RoomInput!) {\n roomPlanner {\n room(roomInput: $roomInput) {\n roomItems {\n item: item_model {\n id\n url\n product: product_model(load_with_store: true) {\n ...FullProductDetails\n }\n }\n }\n }\n }\n }\n ', '']].concat(f));
        q.path = 'room_planner_queries~11' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([fullProductDetails]);
    var roomProductsShuffledQuery = exports.roomProductsShuffledQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query getRoomProductsShuffled($roomInput: RoomInput!, $image_size: Int) {\n roomPlanner {\n room(roomInput: $roomInput) {\n randomShuffledItems {\n ...fullRoomItemDetails\n item_model(image_size: $image_size) {\n ...partialItemDetails\n product: product_model(load_with_store: true) {\n ...FullProductDetails\n }\n }\n }\n }\n }\n }\n ', '', '', '']].concat(f));
        q.path = 'room_planner_queries~12' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([_room_planner_query_fragments.fullRoomItemDetails, fullProductDetails, _room_planner_query_fragments.partialItemDetails]);
    var largeImageUrlQuery = exports.largeImageUrlQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query largeImageUrl(\n $item_id: Int!\n $owner_customer_id: Int!\n $image_size: Int!\n ) {\n item(\n item_id: $item_id\n owner_customer_id: $owner_customer_id\n image_size: $image_size\n ) {\n id\n image_url\n width\n height\n product_3d_images {\n ire_id\n image_url\n thumbnail_image_url\n rotation_z_angle\n image_width\n image_height\n width\n height\n depth\n three_d_image_type\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_queries~13' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var stlItemsQuery = exports.stlItemsQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query getSTLItems($stlPhotoId: Int!) {\n shop_the_look {\n room(photo_id: $stlPhotoId) {\n tags {\n x\n y\n focusWidth\n focusHeight\n angle\n item {\n selected_option_ids\n width\n height\n image_resource_id\n product_3d_images {\n ire_id\n image_url\n rotation_z_angle\n image_width\n image_height\n width\n height\n depth\n three_d_image_type\n }\n }\n product {\n sku\n name\n master_class_id\n display_info {\n dimensions {\n units\n maxHeight\n maxWidth\n maxDepth\n }\n measurements {\n tags {\n title\n value\n units\n }\n }\n }\n }\n }\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_queries~14' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var copyTemplateRoomMutation = exports.copyTemplateRoomMutation = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n mutation copyTemplateRoomMutation($roomId: Int!, $roomName: String!) {\n roomPlanner {\n copyTemplateRoom(roomId: $roomId, roomName: $roomName) {\n id: roomId\n date_updated: dateUpdated\n list {\n listId\n }\n room_items: roomItems {\n id\n temporary_id\n item_id\n item_model {\n list_id\n object_key\n }\n }\n room_name: name\n savedRoomImage {\n id\n }\n url\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_queries~15' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var saveRoomMutation = exports.saveRoomMutation = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n mutation saveRoom($roomId: Int!, $saveRoomInput: SaveRoomInput!) {\n roomPlanner {\n room(roomId: $roomId) {\n saveRoom(saveRoomInput: $saveRoomInput) {\n id: roomId\n date_updated: dateUpdated\n list {\n listId\n }\n room_items: roomItems {\n id\n temporary_id\n item_id\n item_model {\n list_id\n object_key\n }\n }\n room_name: name\n savedRoomImage {\n id\n }\n url\n }\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_queries~16' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var saveInstructionRoomMutation = exports.saveInstructionRoomMutation = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n mutation saveRoom($roomId: Int!, $saveRoomInput: SaveRoomInput!) {\n roomPlanner {\n __typename\n room(roomId: $roomId) {\n __typename\n saveRoom(saveRoomInput: $saveRoomInput) {\n __typename\n id\n background {\n __typename\n id\n image {\n __typename\n id\n width\n height\n }\n }\n roomItems {\n __typename\n id\n xPosition: x_position\n yPosition: y_position\n }\n savedRoomImage {\n __typename\n id\n }\n url\n userProvidedWidth\n userProvidedHeight\n name\n }\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_queries~17' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var deleteRoomBackgroundMutation = exports.deleteRoomBackgroundMutation = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n mutation deleteRoomBackground($ireId: Int!) {\n roomPlanner {\n roomBackground(ireId: $ireId) {\n deleteRoomBackground {\n image {\n id\n }\n }\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_queries~18' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var updateRoomNameMutation = exports.updateRoomNameMutation = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n mutation updateName($roomId: Int!, $roomName: String!) {\n roomPlanner {\n room(roomId: $roomId) {\n updateName(roomName: $roomName) {\n id: roomId\n name\n }\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_queries~19' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var reportBadImageMutation = exports.reportBadImageMutation = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n mutation reportRoomItem($roomItemId: Int64!, $ireId: Int64!) {\n roomPlanner {\n roomItem(roomItemId: $roomItemId) {\n report(ireId: $ireId)\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_queries~20' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
});
/*wfsw*/
/*wfsw:room_planner_catalog_queries*/
define('room_planner_catalog_queries', ['exports', 'graphql_tag', 'turbine_helper_babel'], function(exports, _graphql_tag, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.fetchCurationProductsQuery = exports.fetchCategoryFilterQuery = exports.fetchCategoryProductsQuery = exports.fetchCategoryQuery = undefined;
    var _graphql_tag2 = _turbine_helper_babel.interopRequireDefault(_graphql_tag);
    var fetchCategoryQuery = exports.fetchCategoryQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query getCategoryById($category_id: String!) {\n category(category_id: $category_id) {\n category_id\n name\n display_name\n image_resource_id\n subcategories {\n category_id\n name\n display_name\n image_resource_id\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_catalog_queries~0' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var fetchCategoryProductsQuery = exports.fetchCategoryProductsQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query getCategoryById(\n $category_id: String!\n $current_page: Int!\n $filter: String\n ) {\n category(category_id: $category_id) {\n category_id\n name\n display_name\n image_resource_id\n browse(current_page: $current_page, filter: $filter) {\n products {\n name\n sku\n manufacturer {\n name\n }\n url\n selected_image_id\n unitPrice {\n listPrice\n customerPrice\n }\n optionCategories {\n id\n options {\n id\n images {\n image {\n id\n }\n }\n }\n }\n default_options\n display_info {\n dimensions {\n units\n maxWidth\n maxHeight\n maxDepth\n }\n measurements {\n tags {\n title\n value\n units\n }\n }\n }\n }\n product_count\n current_page\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_catalog_queries~1' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var fetchCategoryFilterQuery = exports.fetchCategoryFilterQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query getCategoryFitlerById($category_id: String!) {\n category(category_id: $category_id) {\n name\n category_id\n browse {\n refine {\n attributes {\n name\n type\n attribute_id\n solr_attribute_name\n view_style\n options {\n name\n display_name\n value\n count\n checked\n clickable\n hidden\n filter_string\n filter_string_unencoded\n color_hex_code\n stars_count\n }\n }\n }\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_catalog_queries~2' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var fetchCurationProductsQuery = exports.fetchCurationProductsQuery = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n query curationQuery($curationType: RoomEnum!, $id: Int64!, $page: Int32!) {\n roomPlanner {\n curationCollection(type: $curationType, id: $id) {\n collectionId\n curatedProducts(page: $page) {\n image_resource_id\n selected_option_ids\n product_width\n product_height\n product: product_model {\n name\n sku\n manufacturer {\n name\n }\n url\n selected_image_id\n unitPrice {\n listPrice\n customerPrice\n }\n default_options\n product_option_categories {\n product_options {\n option_id\n cost\n }\n }\n display_info {\n dimensions {\n units\n maxWidth\n maxHeight\n maxDepth\n }\n measurements {\n tags {\n title\n value\n units\n }\n }\n }\n }\n }\n curatedProductCount\n }\n }\n }\n']].concat(f));
        q.path = 'room_planner_catalog_queries~3' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
});
/*wfsw*/
/*wfsw:image_unavailable_text*/
define('image_unavailable_text', ['exports', 'react', 'prop_types', '@styles/shared/image_unavailable_text/image_unavailable_text', 'turbine_helper_babel'], function(exports, _react, _prop_types, _image_unavailable_text, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _prop_types2 = _turbine_helper_babel.interopRequireDefault(_prop_types);
    var _image_unavailable_text2 = _turbine_helper_babel.interopRequireDefault(_image_unavailable_text);
    var styles = _image_unavailable_text2.default.hoc;
    var ImageUnavailableText = function ImageUnavailableText(_ref) {
        var children = _ref.children;
        return _react2.default.createElement('p', {
            className: 'ImageUnavailableText'
        }, children);
    };
    exports.default = styles(ImageUnavailableText);
});
/*wfsw*/
/*wfsw:addon_service_utils*/
define('addon_service_utils', ['exports', 'react', 'lnrs', 'turbine_helper_lnrs', 'turbine_helper_babel'], function(exports, _react, _lnrs, _turbine_helper_lnrs, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.serviceCalendarExplanationText = exports.serviceCalendarInstructionText = exports.getBasketItemName = exports.getServiceProviderName = exports.getUppercaseServiceNameByCode = exports.getLowercaseServiceName = exports.getUppercaseServiceName = exports.getServiceTypeByCode = exports.DEFAULT_INSTALLATION_TYPE = exports.ELECTRICAL_INSTALLATION_TYPE = exports.PLUMBING_INSTALLATION_TYPE = exports.CEILING_FAN_INSTALLATION_TYPE = exports.LIGHTING_MKC_ID = exports.CEILING_FAN_CLASS_ID = exports.PLUMBING_VANITIES_MKC_ID = exports.PLUMBING_MKC_ID = exports.WAYFAIR_PROVIDER_ID = exports.SERVICE_PROVIDER_NAME_WAYFAIR = exports.HANDY_PROVIDER_ID = exports.SERVICE_PROVIDER_NAME_HANDY = exports.SERVICE_GEO_GROUP_STRING_WALL_HANGING = exports.SERVICE_TYPE_STRING_WALL_HANGING = exports.SERVICE_TYPE_STRING_ASSEMBLY = exports.SERVICE_TYPE_STRING_INSTALLATION = exports.SERVICE_TYPE_WALL_HANGING = exports.SERVICE_TYPE_ASSEMBLY = exports.SERVICE_TYPE_INSTALLATION = exports.SERVICE_TYPE_DEFAULT = exports.HANDY_IMAGE_ID = undefined;
    var _react2 = _turbine_helper_babel.interopRequireDefault(_react);
    var _lnrs2 = _turbine_helper_babel.interopRequireDefault(_lnrs);
    var _lnrsAddonServiceDefault = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('AddonServiceDefault', 'Service')), _lnrsInstallation = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('Installation', 'Installation')), _lnrsAssembly = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('Assembly', 'Assembly')), _lnrsWallHanging = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('WallHanging', 'Wall Hanging')), _uppercaseAddonServic, _serviceProviderNames, _lnrsAddonServiceDefaultLowercase = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('AddonServiceDefaultLowercase', 'service')), _lnrsInstallationLowerCase = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('InstallationLowerCase', 'installation')), _lnrsAssemblyLowerCase = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('AssemblyLowerCase', 'assembly')), _lnrsWallHangingLowerCase = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('WallHangingLowerCase', 'wall hanging')), _lowercaseAddonServic, _lnrsInstallationService = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('InstallationService', 'Installation Service')), _lnrsAssemblyService = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('AssemblyService', 'Assembly Service')), _lnrsPleaseSelectYourServiceStartTime = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('PleaseSelectYourServiceStartTime', 'Please select your service start time:')), _lnrsSelectAnArrivalWindow = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('SelectAnArrivalWindow', 'Select an arrival window:')), _serviceCalendarInstr, _lnrsServiceTakesBetweenOneToFourHoursPeriod = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('ServiceTakesBetweenOneToFourHoursPeriod', '(Service takes between 1-4 hours. Handy will email you to confirm your service length.)')), _lnrsServiceTypicallyTakesBetweenOneToFourHours = _turbine_helper_lnrs.initTranslation(_lnrs2.default.translate('ServiceTypicallyTakesBetweenOneToFourHours', '(Service typically takes between 1-4 hours.)')), _serviceCalendarExpla;
    var HANDY_IMAGE_ID = 52357309
      , SERVICE_TYPE_DEFAULT = 0
      , SERVICE_TYPE_INSTALLATION = 1
      , SERVICE_TYPE_ASSEMBLY = 2
      , SERVICE_TYPE_WALL_HANGING = 3
      , SERVICE_TYPE_STRING_INSTALLATION = 'INSTALLATION'
      , SERVICE_TYPE_STRING_ASSEMBLY = 'ASSEMBLY'
      , SERVICE_TYPE_STRING_WALL_HANGING = 'WALL_HANGING'
      , SERVICE_GEO_GROUP_STRING_WALL_HANGING = 'Service Geo Group 7'
      , SERVICE_PROVIDER_NAME_HANDY = 'Handy'
      , HANDY_PROVIDER_ID = 4
      , SERVICE_PROVIDER_NAME_WAYFAIR = 'Wayfair Home Services'
      , WAYFAIR_PROVIDER_ID = 6
      , PLUMBING_MKC_ID = 24
      , PLUMBING_VANITIES_MKC_ID = 123
      , CEILING_FAN_CLASS_ID = 230
      , LIGHTING_MKC_ID = 15
      , CEILING_FAN_INSTALLATION_TYPE = 'ceiling_fan_installation'
      , PLUMBING_INSTALLATION_TYPE = 'plumbing_installation'
      , ELECTRICAL_INSTALLATION_TYPE = 'electrical_installation'
      , DEFAULT_INSTALLATION_TYPE = 'default_installation';
    var uppercaseAddonServiceStrings = (_uppercaseAddonServic = {},
    _turbine_helper_babel.defineProperty(_uppercaseAddonServic, SERVICE_TYPE_DEFAULT, _turbine_helper_lnrs.doReplacement({
        key: 'AddonServiceDefault',
        translation: _lnrsAddonServiceDefault,
        replacements: []
    }, _react2.default)),
    _turbine_helper_babel.defineProperty(_uppercaseAddonServic, SERVICE_TYPE_INSTALLATION, _turbine_helper_lnrs.doReplacement({
        key: 'Installation',
        translation: _lnrsInstallation,
        replacements: []
    }, _react2.default)),
    _turbine_helper_babel.defineProperty(_uppercaseAddonServic, SERVICE_TYPE_ASSEMBLY, _turbine_helper_lnrs.doReplacement({
        key: 'Assembly',
        translation: _lnrsAssembly,
        replacements: []
    }, _react2.default)),
    _turbine_helper_babel.defineProperty(_uppercaseAddonServic, SERVICE_TYPE_WALL_HANGING, _turbine_helper_lnrs.doReplacement({
        key: 'WallHanging',
        translation: _lnrsWallHanging,
        replacements: []
    }, _react2.default)),
    _uppercaseAddonServic);
    var serviceProviderNames = (_serviceProviderNames = {},
    _turbine_helper_babel.defineProperty(_serviceProviderNames, HANDY_PROVIDER_ID, SERVICE_PROVIDER_NAME_HANDY),
    _turbine_helper_babel.defineProperty(_serviceProviderNames, WAYFAIR_PROVIDER_ID, SERVICE_PROVIDER_NAME_WAYFAIR),
    _serviceProviderNames);
    var lowercaseAddonServiceStrings = (_lowercaseAddonServic = {},
    _turbine_helper_babel.defineProperty(_lowercaseAddonServic, SERVICE_TYPE_DEFAULT, _turbine_helper_lnrs.doReplacement({
        key: 'AddonServiceDefaultLowercase',
        translation: _lnrsAddonServiceDefaultLowercase,
        replacements: []
    }, _react2.default)),
    _turbine_helper_babel.defineProperty(_lowercaseAddonServic, SERVICE_TYPE_INSTALLATION, _turbine_helper_lnrs.doReplacement({
        key: 'InstallationLowerCase',
        translation: _lnrsInstallationLowerCase,
        replacements: []
    }, _react2.default)),
    _turbine_helper_babel.defineProperty(_lowercaseAddonServic, SERVICE_TYPE_ASSEMBLY, _turbine_helper_lnrs.doReplacement({
        key: 'AssemblyLowerCase',
        translation: _lnrsAssemblyLowerCase,
        replacements: []
    }, _react2.default)),
    _turbine_helper_babel.defineProperty(_lowercaseAddonServic, SERVICE_TYPE_WALL_HANGING, _turbine_helper_lnrs.doReplacement({
        key: 'WallHangingLowerCase',
        translation: _lnrsWallHangingLowerCase,
        replacements: []
    }, _react2.default)),
    _lowercaseAddonServic);
    var getUppercaseServiceName = function getUppercaseServiceName(serviceType) {
        return uppercaseAddonServiceStrings[serviceType];
    };
    var getLowercaseServiceName = function getLowercaseServiceName(serviceType) {
        return lowercaseAddonServiceStrings[serviceType];
    };
    var getServiceProviderName = function getServiceProviderName(providerId) {
        return serviceProviderNames[providerId] || SERVICE_PROVIDER_NAME_HANDY;
    };
    var getServiceTypeByCode = function getServiceTypeByCode(serviceCode) {
        switch (serviceCode) {
        case SERVICE_TYPE_STRING_INSTALLATION:
            return SERVICE_TYPE_INSTALLATION;
        case SERVICE_TYPE_STRING_ASSEMBLY:
            return SERVICE_TYPE_ASSEMBLY;
        case SERVICE_TYPE_STRING_WALL_HANGING:
            return SERVICE_TYPE_WALL_HANGING;
        default:
            return 0;
        }
    };
    var getUppercaseServiceNameByCode = function getUppercaseServiceNameByCode(serviceCode) {
        var serviceType = getServiceTypeByCode(serviceCode);
        return getUppercaseServiceName(serviceType);
    };
    var getBasketItemName = function getBasketItemName(basketData) {
        var isAssemblyInstallation = basketData.isAssemblyInstallation
          , isInstallation = basketData.isInstallation
          , name = basketData.name;
        if (isAssemblyInstallation) {
            return isInstallation ? _turbine_helper_lnrs.doReplacement({
                key: 'InstallationService',
                translation: _lnrsInstallationService,
                replacements: []
            }, _react2.default) : _turbine_helper_lnrs.doReplacement({
                key: 'AssemblyService',
                translation: _lnrsAssemblyService,
                replacements: []
            }, _react2.default);
        } else {
            return name;
        }
    };
    var serviceCalendarInstructionText = (_serviceCalendarInstr = {},
    _turbine_helper_babel.defineProperty(_serviceCalendarInstr, HANDY_PROVIDER_ID, _turbine_helper_lnrs.doReplacement({
        key: 'PleaseSelectYourServiceStartTime',
        translation: _lnrsPleaseSelectYourServiceStartTime,
        replacements: []
    }, _react2.default)),
    _turbine_helper_babel.defineProperty(_serviceCalendarInstr, WAYFAIR_PROVIDER_ID, _turbine_helper_lnrs.doReplacement({
        key: 'SelectAnArrivalWindow',
        translation: _lnrsSelectAnArrivalWindow,
        replacements: []
    }, _react2.default)),
    _serviceCalendarInstr);
    var serviceCalendarExplanationText = (_serviceCalendarExpla = {},
    _turbine_helper_babel.defineProperty(_serviceCalendarExpla, HANDY_PROVIDER_ID, _turbine_helper_lnrs.doReplacement({
        key: 'ServiceTakesBetweenOneToFourHoursPeriod',
        translation: _lnrsServiceTakesBetweenOneToFourHoursPeriod,
        replacements: []
    }, _react2.default)),
    _turbine_helper_babel.defineProperty(_serviceCalendarExpla, WAYFAIR_PROVIDER_ID, _turbine_helper_lnrs.doReplacement({
        key: 'ServiceTypicallyTakesBetweenOneToFourHours',
        translation: _lnrsServiceTypicallyTakesBetweenOneToFourHours,
        replacements: []
    }, _react2.default)),
    _serviceCalendarExpla);
    exports.HANDY_IMAGE_ID = HANDY_IMAGE_ID;
    exports.SERVICE_TYPE_DEFAULT = SERVICE_TYPE_DEFAULT;
    exports.SERVICE_TYPE_INSTALLATION = SERVICE_TYPE_INSTALLATION;
    exports.SERVICE_TYPE_ASSEMBLY = SERVICE_TYPE_ASSEMBLY;
    exports.SERVICE_TYPE_WALL_HANGING = SERVICE_TYPE_WALL_HANGING;
    exports.SERVICE_TYPE_STRING_INSTALLATION = SERVICE_TYPE_STRING_INSTALLATION;
    exports.SERVICE_TYPE_STRING_ASSEMBLY = SERVICE_TYPE_STRING_ASSEMBLY;
    exports.SERVICE_TYPE_STRING_WALL_HANGING = SERVICE_TYPE_STRING_WALL_HANGING;
    exports.SERVICE_GEO_GROUP_STRING_WALL_HANGING = SERVICE_GEO_GROUP_STRING_WALL_HANGING;
    exports.SERVICE_PROVIDER_NAME_HANDY = SERVICE_PROVIDER_NAME_HANDY;
    exports.HANDY_PROVIDER_ID = HANDY_PROVIDER_ID;
    exports.SERVICE_PROVIDER_NAME_WAYFAIR = SERVICE_PROVIDER_NAME_WAYFAIR;
    exports.WAYFAIR_PROVIDER_ID = WAYFAIR_PROVIDER_ID;
    exports.PLUMBING_MKC_ID = PLUMBING_MKC_ID;
    exports.PLUMBING_VANITIES_MKC_ID = PLUMBING_VANITIES_MKC_ID;
    exports.CEILING_FAN_CLASS_ID = CEILING_FAN_CLASS_ID;
    exports.LIGHTING_MKC_ID = LIGHTING_MKC_ID;
    exports.CEILING_FAN_INSTALLATION_TYPE = CEILING_FAN_INSTALLATION_TYPE;
    exports.PLUMBING_INSTALLATION_TYPE = PLUMBING_INSTALLATION_TYPE;
    exports.ELECTRICAL_INSTALLATION_TYPE = ELECTRICAL_INSTALLATION_TYPE;
    exports.DEFAULT_INSTALLATION_TYPE = DEFAULT_INSTALLATION_TYPE;
    exports.getServiceTypeByCode = getServiceTypeByCode;
    exports.getUppercaseServiceName = getUppercaseServiceName;
    exports.getLowercaseServiceName = getLowercaseServiceName;
    exports.getUppercaseServiceNameByCode = getUppercaseServiceNameByCode;
    exports.getServiceProviderName = getServiceProviderName;
    exports.getBasketItemName = getBasketItemName;
    exports.serviceCalendarInstructionText = serviceCalendarInstructionText;
    exports.serviceCalendarExplanationText = serviceCalendarExplanationText;
});
/*wfsw*/
/*wfsw:room_planner_query_fragments*/
define('room_planner_query_fragments', ['exports', 'graphql_tag', 'turbine_helper_babel'], function(exports, _graphql_tag, _turbine_helper_babel) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.partialItemDetails = exports.fullItemDetails = exports.fullRoomItemDetails = undefined;
    var _graphql_tag2 = _turbine_helper_babel.interopRequireDefault(_graphql_tag);
    var fullRoomItemDetails = exports.fullRoomItemDetails = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n fragment fullRoomItemDetails on Room_Item_ {\n __typename\n id\n item_id\n x_position\n y_position\n image {\n id\n }\n scale\n rotation\n rotation_z_angle\n is_mirrored\n is_locked\n }\n']].concat(f));
        q.path = 'room_planner_query_fragments~0' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var baseItemDetails = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n fragment baseItemDetails on Item_ {\n id\n object_key\n objectKey: object_key\n type\n itemHash\n image_resource_id(is_silhouette: true)\n image_url\n thumbnail_image_url\n selected_option_ids\n selectedOptionIds: selected_option_ids\n saved_customizations {\n cpt_id\n text\n }\n favorited_store\n name\n url\n price\n brand\n item_parent_id\n kit_parent_sku\n has_item_custom_image\n }\n']].concat(f));
        q.path = 'room_planner_query_fragments~1' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([]);
    var fullItemDetails = exports.fullItemDetails = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n fragment fullItemDetails on Item_ {\n ...baseItemDetails\n width\n height\n image_data {\n flipped_image_url(is_silhouette: true)\n }\n product_3d_images {\n ire_id\n image_url\n thumbnail_image_url\n rotation_z_angle\n image_width\n image_height\n width\n height\n depth\n three_d_image_type\n }\n productWidth: product_width\n productHeight: product_height\n }\n ', '']].concat(f));
        q.path = 'room_planner_query_fragments~2' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([baseItemDetails]);
    var partialItemDetails = exports.partialItemDetails = function(f) {
        var q = _graphql_tag2.default.apply(this, [['\n fragment partialItemDetails on Item_ {\n ...baseItemDetails\n width\n height\n productWidth: product_width\n productHeight: product_height\n }\n ', '']].concat(f));
        q.path = 'room_planner_query_fragments~3' + f.reduce(function(a, n) {
            n = a + '#' + n.path;
            return n;
        }, '');
        q.shouldUsePath = true;
        return q;
    }([baseItemDetails]);
});
/*wfsw*/
;(function() {
    var k = "unencoded__AddonServiceDefault";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Service";
    define("_t!%5B%22AddonServiceDefault%22%2C%22Service%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__Installation";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Installation";
    define("_t!%5B%22Installation%22%2C%22Installation%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__Assembly";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Assembly";
    define("_t!%5B%22Assembly%22%2C%22Assembly%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__WallHanging";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "wall hanging";
    define("_t!%5B%22WallHanging%22%2C%22Wall%20Hanging%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__AddonServiceDefaultLowercase";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "service";
    define("_t!%5B%22AddonServiceDefaultLowercase%22%2C%22service%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__InstallationLowerCase";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "installation";
    define("_t!%5B%22InstallationLowerCase%22%2C%22installation%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__AssemblyLowerCase";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "assembly";
    define("_t!%5B%22AssemblyLowerCase%22%2C%22assembly%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__WallHangingLowerCase";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "wall hanging";
    define("_t!%5B%22WallHangingLowerCase%22%2C%22wall%20hanging%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__InstallationService";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Installation Service";
    define("_t!%5B%22InstallationService%22%2C%22Installation%20Service%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__AssemblyService";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Assembly Service";
    define("_t!%5B%22AssemblyService%22%2C%22Assembly%20Service%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__PleaseSelectYourServiceStartTime";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Please select your service start time:";
    define("_t!%5B%22PleaseSelectYourServiceStartTime%22%2C%22Please%20select%20your%20service%20start%20time%3A%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__SelectAnArrivalWindow";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "Select an arrival window:";
    define("_t!%5B%22SelectAnArrivalWindow%22%2C%22Select%20an%20arrival%20window%3A%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__ServiceTakesBetweenOneToFourHoursPeriod";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "(Service takes between 1-4 hours. Handy will email you to confirm your service length.)";
    define("_t!%5B%22ServiceTakesBetweenOneToFourHoursPeriod%22%2C%22(Service%20takes%20between%201-4%20hours.%20Handy%20will%20email%20you%20to%20confirm%20your%20service%20length.)%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/*wfsw*/
;(function() {
    var k = "unencoded__ServiceTypicallyTakesBetweenOneToFourHours";
    var wf = window.wf = (window.wf || {});
    wf.translations = wf.translations || {};
    wf.translations[k] = "(Service typically takes between 1-4 hours.)";
    define("_t!%5B%22ServiceTypicallyTakesBetweenOneToFourHours%22%2C%22(Service%20typically%20takes%20between%201-4%20hours.)%22%2Ctrue%5D", [], function() {
        return wf.translations[k];
    });
}
)();
/* Requested File List: bundler:{"modules":["my_projects_header_dropdown_container","cart_dropdown_container_v2","pl_tooltip","visual_search_upload_modal","g_media_container","pl_joss_logo","pl_allmodern_logo","pl_birch_logo","footer_social_block","feedback_drawer","device_fingerprint_hashes","apn_media_service"],"omit":["init_page","responsive_header","responsive_footer","react_factory","popup_block","tungsten_react_wrapper","recent_pages","@Templates\/stores\/components\/image_component_view","wf_tungsten_view_base","wf_model_base","desktop_category_page_container","browse_core_product_grid_container"]} */
/** nbs--315360000-315360000 **/
window.wf = window.wf || {};
window.wf._bundles = window.wf._bundles || {};
window.wf._bundles["ae476d57f06d39047748b12994d7c0ec.js"] = 402036;

/* CB:0000000001542364937 RqV:0000000001542364937 */
/* RtV:0000000001542364937 */
/* Timer[finished]: 104.669094 ms */
/* lang: eng_us*/
