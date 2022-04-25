(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable @typescript-eslint/no-empty-function */
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppController = class AppController {
    constructor() { }
    root() {
        return { message: 'Welcome to api!' };
    }
};
tslib_1.__decorate([
    common_1.Get('/'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "root", null);
AppController = tslib_1.__decorate([
    common_1.Controller(),
    tslib_1.__metadata("design:paramtypes", [])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const serve_static_1 = __webpack_require__(/*! @nestjs/serve-static */ "@nestjs/serve-static");
const path_1 = __webpack_require__(/*! path */ "path");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/api/src/app/auth/auth.module.ts");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./apps/api/src/app/user/user.module.ts");
const geolocation_module_1 = __webpack_require__(/*! ./geolocation/geolocation.module */ "./apps/api/src/app/geolocation/geolocation.module.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env'],
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'carsforrent'),
                exclude: ['/api*'],
            }),
            mongoose_1.MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.irozl.mongodb.net/carsrent?retryWrites=true&w=majority', { useNewUrlParser: true }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            geolocation_module_1.GeolocationModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = tslib_1.__decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.controller.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/app/auth/auth.controller.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_guard_1 = __webpack_require__(/*! @nestjs/passport/dist/auth.guard */ "@nestjs/passport/dist/auth.guard");
const register_dto_1 = __webpack_require__(/*! ../user/register.dto */ "./apps/api/src/app/user/register.dto.ts");
const user_service_1 = __webpack_require__(/*! ../user/user.service */ "./apps/api/src/app/user/user.service.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/api/src/app/auth/auth.service.ts");
const login_dto_1 = __webpack_require__(/*! ./login.dto */ "./apps/api/src/app/auth/login.dto.ts");
let AuthController = class AuthController {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    hiddenInformation() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return 'hidden information';
        });
    }
    publicInformation() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return 'this can be seen by anyone';
        });
    }
    register(registerDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.create(registerDTO);
            const payload = {
                email: user.email,
                isAdmin: user.isAdmin,
            };
            const token = yield this.authService.signPayload(payload);
            return { user, token };
        });
    }
    login(loginDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.findByLogin(loginDTO);
            const payload = {
                email: user.email,
                isAdmin: user.isAdmin,
            };
            const token = yield this.authService.signPayload(payload);
            return { user, token };
        });
    }
};
tslib_1.__decorate([
    common_1.Get('/onlyauth'),
    common_1.UseGuards(auth_guard_1.AuthGuard('jwt')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "hiddenInformation", null);
tslib_1.__decorate([
    common_1.Get('/anyone'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "publicInformation", null);
tslib_1.__decorate([
    common_1.Post('register'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof register_dto_1.RegisterDTO !== "undefined" && register_dto_1.RegisterDTO) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
tslib_1.__decorate([
    common_1.Post('login'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof login_dto_1.LoginDTO !== "undefined" && login_dto_1.LoginDTO) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = tslib_1.__decorate([
    common_1.Controller('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _c : Object, typeof (_d = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _d : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.module.ts":
/*!**********************************************!*\
  !*** ./apps/api/src/app/auth/auth.module.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_module_1 = __webpack_require__(/*! ../user/user.module */ "./apps/api/src/app/user/user.module.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/api/src/app/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/api/src/app/auth/auth.service.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./jwt.strategy */ "./apps/api/src/app/auth/jwt.strategy.ts");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    common_1.Module({
        imports: [user_module_1.UserModule],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./apps/api/src/app/auth/auth.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jsonwebtoken_1 = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
const user_service_1 = __webpack_require__(/*! ../user/user.service */ "./apps/api/src/app/user/user.service.ts");
let AuthService = class AuthService {
    constructor(userService) {
        this.userService = userService;
    }
    signPayload(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return jsonwebtoken_1.sign(payload, 'abcdefg12345WWW', { expiresIn: '7d' });
        });
    }
    validateUser(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.userService.findByPayload(payload);
        });
    }
};
AuthService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/api/src/app/auth/jwt.strategy.ts":
/*!***********************************************!*\
  !*** ./apps/api/src/app/auth/jwt.strategy.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const passport_jwt_2 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/api/src/app/auth/auth.service.ts");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_2.Strategy) {
    constructor(authService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'abcdefg12345WWW',
        });
        this.authService = authService;
    }
    validate(payload, done) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.authService.validateUser(payload);
            if (!user) {
                return done(new common_1.HttpException('Unauthorized access', common_1.HttpStatus.UNAUTHORIZED), false);
            }
            return done(null, user, payload.iat);
        });
    }
};
JwtStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/api/src/app/auth/login.dto.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/auth/login.dto.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./apps/api/src/app/geolocation/cityareas.service.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/geolocation/cityareas.service.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityAreasService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const cityareas_schema_1 = __webpack_require__(/*! ./schemas/cityareas.schema */ "./apps/api/src/app/geolocation/schemas/cityareas.schema.ts");
let CityAreasService = class CityAreasService {
    constructor(model) {
        this.model = model;
    }
    findAllCityAreas(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.model.find({ cityId: id }).exec();
        });
    }
};
CityAreasService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_1.InjectModel(cityareas_schema_1.cityareas.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], CityAreasService);
exports.CityAreasService = CityAreasService;


/***/ }),

/***/ "./apps/api/src/app/geolocation/countries.service.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/geolocation/countries.service.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const countries_schema_1 = __webpack_require__(/*! ./schemas/countries.schema */ "./apps/api/src/app/geolocation/schemas/countries.schema.ts");
let CountriesService = class CountriesService {
    constructor(model) {
        this.model = model;
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.model.find().exec();
        });
    }
};
CountriesService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_1.InjectModel(countries_schema_1.countries.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], CountriesService);
exports.CountriesService = CountriesService;


/***/ }),

/***/ "./apps/api/src/app/geolocation/geolocation.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/app/geolocation/geolocation.controller.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeolocationController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const countries_service_1 = __webpack_require__(/*! ./countries.service */ "./apps/api/src/app/geolocation/countries.service.ts");
const geolocation_service_1 = __webpack_require__(/*! ./geolocation.service */ "./apps/api/src/app/geolocation/geolocation.service.ts");
const cityareas_service_1 = __webpack_require__(/*! ./cityareas.service */ "./apps/api/src/app/geolocation/cityareas.service.ts");
let GeolocationController = class GeolocationController {
    constructor(service, countryService, cityAreasService) {
        this.service = service;
        this.countryService = countryService;
        this.cityAreasService = cityAreasService;
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.service.findAll();
        });
    }
    findAllCountries() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.countryService.findAll();
        });
    }
    find(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.service.findAllCities(id);
        });
    }
    findCities(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.cityAreasService.findAllCityAreas(id);
        });
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], GeolocationController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Get('/countries'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], GeolocationController.prototype, "findAllCountries", null);
tslib_1.__decorate([
    common_1.Get('/:id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], GeolocationController.prototype, "find", null);
tslib_1.__decorate([
    common_1.Get('/cities/:id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], GeolocationController.prototype, "findCities", null);
GeolocationController = tslib_1.__decorate([
    common_1.Controller('geolocation'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof geolocation_service_1.GeolocationService !== "undefined" && geolocation_service_1.GeolocationService) === "function" ? _a : Object, typeof (_b = typeof countries_service_1.CountriesService !== "undefined" && countries_service_1.CountriesService) === "function" ? _b : Object, typeof (_c = typeof cityareas_service_1.CityAreasService !== "undefined" && cityareas_service_1.CityAreasService) === "function" ? _c : Object])
], GeolocationController);
exports.GeolocationController = GeolocationController;


/***/ }),

/***/ "./apps/api/src/app/geolocation/geolocation.module.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/app/geolocation/geolocation.module.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GeolocationModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const geolocation_service_1 = __webpack_require__(/*! ./geolocation.service */ "./apps/api/src/app/geolocation/geolocation.service.ts");
const geolocation_controller_1 = __webpack_require__(/*! ./geolocation.controller */ "./apps/api/src/app/geolocation/geolocation.controller.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const geolocation_schema_1 = __webpack_require__(/*! ./schemas/geolocation.schema */ "./apps/api/src/app/geolocation/schemas/geolocation.schema.ts");
const countries_schema_1 = __webpack_require__(/*! ./schemas/countries.schema */ "./apps/api/src/app/geolocation/schemas/countries.schema.ts");
const countries_service_1 = __webpack_require__(/*! ./countries.service */ "./apps/api/src/app/geolocation/countries.service.ts");
const cityareas_schema_1 = __webpack_require__(/*! ./schemas/cityareas.schema */ "./apps/api/src/app/geolocation/schemas/cityareas.schema.ts");
const cityareas_service_1 = __webpack_require__(/*! ./cityareas.service */ "./apps/api/src/app/geolocation/cityareas.service.ts");
let GeolocationModule = class GeolocationModule {
};
GeolocationModule = tslib_1.__decorate([
    common_1.Module({
        providers: [geolocation_service_1.GeolocationService, countries_service_1.CountriesService, cityareas_service_1.CityAreasService],
        controllers: [geolocation_controller_1.GeolocationController],
        exports: [geolocation_service_1.GeolocationService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: geolocation_schema_1.locations.name, schema: geolocation_schema_1.GeoLocationSchema },
            ]),
            mongoose_1.MongooseModule.forFeature([
                { name: countries_schema_1.countries.name, schema: countries_schema_1.CountriesSchema },
            ]),
            mongoose_1.MongooseModule.forFeature([{ name: 'cityareas', schema: cityareas_schema_1.CityAreasSchema }]),
        ],
    })
], GeolocationModule);
exports.GeolocationModule = GeolocationModule;


/***/ }),

/***/ "./apps/api/src/app/geolocation/geolocation.service.ts":
/*!*************************************************************!*\
  !*** ./apps/api/src/app/geolocation/geolocation.service.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeolocationService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const geolocation_schema_1 = __webpack_require__(/*! ./schemas/geolocation.schema */ "./apps/api/src/app/geolocation/schemas/geolocation.schema.ts");
let GeolocationService = class GeolocationService {
    constructor(model) {
        this.model = model;
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.model.find().exec();
        });
    }
    findAllCities(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.model.find({ countryId: id }).exec();
        });
    }
};
GeolocationService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_1.InjectModel(geolocation_schema_1.locations.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], GeolocationService);
exports.GeolocationService = GeolocationService;


/***/ }),

/***/ "./apps/api/src/app/geolocation/schemas/cityareas.schema.ts":
/*!******************************************************************!*\
  !*** ./apps/api/src/app/geolocation/schemas/cityareas.schema.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CityAreasSchema = exports.cityareas = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* geolocation schema goes here */
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let cityareas = class cityareas {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], cityareas.prototype, "cityareaId", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], cityareas.prototype, "cityareaName", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], cityareas.prototype, "cityId", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], cityareas.prototype, "cityName", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], cityareas.prototype, "countryId", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], cityareas.prototype, "countryName", void 0);
cityareas = tslib_1.__decorate([
    mongoose_1.Schema()
], cityareas);
exports.cityareas = cityareas;
exports.CityAreasSchema = mongoose_1.SchemaFactory.createForClass(cityareas);


/***/ }),

/***/ "./apps/api/src/app/geolocation/schemas/countries.schema.ts":
/*!******************************************************************!*\
  !*** ./apps/api/src/app/geolocation/schemas/countries.schema.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesSchema = exports.countries = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* geolocation schema goes here */
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let countries = class countries {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], countries.prototype, "countryName", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], countries.prototype, "countryCode", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], countries.prototype, "countryId", void 0);
countries = tslib_1.__decorate([
    mongoose_1.Schema()
], countries);
exports.countries = countries;
exports.CountriesSchema = mongoose_1.SchemaFactory.createForClass(countries);


/***/ }),

/***/ "./apps/api/src/app/geolocation/schemas/geolocation.schema.ts":
/*!********************************************************************!*\
  !*** ./apps/api/src/app/geolocation/schemas/geolocation.schema.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoLocationSchema = exports.locations = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* geolocation schema goes here */
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let locations = class locations {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], locations.prototype, "cityName", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], locations.prototype, "cityCode", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], locations.prototype, "cityId", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], locations.prototype, "provinceName", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], locations.prototype, "provinceCode", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], locations.prototype, "provinceId", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], locations.prototype, "countryName", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], locations.prototype, "countryCode", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], locations.prototype, "countryId", void 0);
locations = tslib_1.__decorate([
    mongoose_1.Schema()
], locations);
exports.locations = locations;
exports.GeoLocationSchema = mongoose_1.SchemaFactory.createForClass(locations);


/***/ }),

/***/ "./apps/api/src/app/models/user.schema.ts":
/*!************************************************!*\
  !*** ./apps/api/src/app/models/user.schema.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
exports.UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
});
exports.UserSchema.pre('save', function (next) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            if (!this.isModified('password')) {
                return next();
            }
            const hashed = yield bcrypt.hash(this['password'], 10);
            this['password'] = hashed;
            return next();
        }
        catch (err) {
            return next(err);
        }
    });
});


/***/ }),

/***/ "./apps/api/src/app/user/register.dto.ts":
/*!***********************************************!*\
  !*** ./apps/api/src/app/user/register.dto.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./apps/api/src/app/user/user.module.ts":
/*!**********************************************!*\
  !*** ./apps/api/src/app/user/user.module.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./apps/api/src/app/user/user.service.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const user_schema_1 = __webpack_require__(/*! ../models/user.schema */ "./apps/api/src/app/models/user.schema.ts");
let UserModule = class UserModule {
};
UserModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_schema_1.UserSchema }]),
        ],
        providers: [user_service_1.UserService],
        controllers: [],
        exports: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./apps/api/src/app/user/user.service.ts":
/*!***********************************************!*\
  !*** ./apps/api/src/app/user/user.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    create(RegisterDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { email } = RegisterDTO;
            const user = yield this.userModel.findOne({ email });
            if (user) {
                throw new common_1.HttpException('user already exists', common_1.HttpStatus.BAD_REQUEST);
            }
            const createdUser = new this.userModel(RegisterDTO);
            yield createdUser.save();
            return this.sanitizeUser(createdUser);
        });
    }
    findByPayload(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { email } = payload;
            return yield this.userModel.findOne({ email });
        });
    }
    findByLogin(UserDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { email, password } = UserDTO;
            const user = yield this.userModel.findOne({ email });
            if (!user) {
                throw new common_1.HttpException('user doesnt exists', common_1.HttpStatus.BAD_REQUEST);
            }
            if (yield bcrypt.compare(password, user.password)) {
                return this.sanitizeUser(user);
            }
            else {
                throw new common_1.HttpException('invalid credential', common_1.HttpStatus.BAD_REQUEST);
            }
        });
    }
    sanitizeUser(user) {
        const sanitized = user.toObject();
        delete sanitized['password'];
        return sanitized;
    }
};
UserService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_1.InjectModel('User')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            common_1.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\New folder\carsforrent\apps\api\src\main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/passport/dist/auth.guard":
/*!***************************************************!*\
  !*** external "@nestjs/passport/dist/auth.guard" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport/dist/auth.guard");

/***/ }),

/***/ "@nestjs/serve-static":
/*!***************************************!*\
  !*** external "@nestjs/serve-static" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map