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

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth/auth.service */ "./apps/api/src/app/auth/auth.service.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ./auth/guards/jwt-auth.guard */ "./apps/api/src/app/auth/guards/jwt-auth.guard.ts");
const local_auth_guard_1 = __webpack_require__(/*! ./auth/guards/local-auth.guard */ "./apps/api/src/app/auth/guards/local-auth.guard.ts");
let AppController = class AppController {
    constructor(authService) {
        this.authService = authService;
    }
    root() {
        return { message: 'Welcome to api!' };
    }
    login(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.authService.login(req.user);
        });
    }
    getProfile(req) {
        return req.user;
    }
};
tslib_1.__decorate([
    common_1.Get('/'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "root", null);
tslib_1.__decorate([
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('auth/login'),
    tslib_1.__param(0, common_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
tslib_1.__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('profile'),
    tslib_1.__param(0, common_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
AppController = tslib_1.__decorate([
    common_1.Controller(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
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
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./apps/api/src/app/users/users.module.ts");
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
            users_module_1.UsersModule,
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
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./apps/api/src/app/users/users.module.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/api/src/app/auth/auth.service.ts");
const constants_1 = __webpack_require__(/*! ./constants */ "./apps/api/src/app/auth/constants.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./strategies/jwt.strategy */ "./apps/api/src/app/auth/strategies/jwt.strategy.ts");
const local_strategy_1 = __webpack_require__(/*! ./strategies/local.strategy */ "./apps/api/src/app/auth/strategies/local.strategy.ts");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
            }),
        ],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService],
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

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ../users/users.service */ "./apps/api/src/app/users/users.service.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    validateUser(username, pass) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.findOne(username);
            if (user && user.password === pass) {
                const { password } = user, result = tslib_1.__rest(user, ["password"]);
                return result;
            }
            return null;
        });
    }
    login(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const payload = { username: user.username, sub: user.userId };
            return {
                access_token: this.jwtService.sign(payload),
            };
        });
    }
};
AuthService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/api/src/app/auth/constants.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/auth/constants.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: 'secretKey',
};


/***/ }),

/***/ "./apps/api/src/app/auth/guards/jwt-auth.guard.ts":
/*!********************************************************!*\
  !*** ./apps/api/src/app/auth/guards/jwt-auth.guard.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends passport_1.AuthGuard('jwt') {
};
JwtAuthGuard = tslib_1.__decorate([
    common_1.Injectable()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),

/***/ "./apps/api/src/app/auth/guards/local-auth.guard.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/auth/guards/local-auth.guard.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAuthGuard = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends passport_1.AuthGuard('local') {
};
LocalAuthGuard = tslib_1.__decorate([
    common_1.Injectable()
], LocalAuthGuard);
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),

/***/ "./apps/api/src/app/auth/strategies/jwt.strategy.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/auth/strategies/jwt.strategy.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const constants_1 = __webpack_require__(/*! ../constants */ "./apps/api/src/app/auth/constants.ts");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: constants_1.jwtConstants.secret,
        });
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return { userId: payload.sub, username: payload.username };
        });
    }
};
JwtStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/api/src/app/auth/strategies/local.strategy.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/app/auth/strategies/local.strategy.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const auth_service_1 = __webpack_require__(/*! ../auth.service */ "./apps/api/src/app/auth/auth.service.ts");
let LocalStrategy = class LocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy) {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    validate(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.authService.validateUser(username, password);
            if (!user) {
                throw new common_1.UnauthorizedException();
            }
            return user;
        });
    }
};
LocalStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


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

/***/ "./apps/api/src/app/users/users.module.ts":
/*!************************************************!*\
  !*** ./apps/api/src/app/users/users.module.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/api/src/app/users/users.service.ts");
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    common_1.Module({
        providers: [users_service_1.UsersService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/api/src/app/users/users.service.ts":
/*!*************************************************!*\
  !*** ./apps/api/src/app/users/users.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
            },
            {
                userId: 2,
                username: 'maria',
                password: 'guess',
            },
        ];
    }
    findOne(username) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.users.find((user) => user.username === username);
        });
    }
};
UsersService = tslib_1.__decorate([
    common_1.Injectable()
], UsersService);
exports.UsersService = UsersService;


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

module.exports = __webpack_require__(/*! /home/sb/workspace/carsforrent/carsforrent/apps/api/src/main.ts */"./apps/api/src/main.ts");


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

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/jwt");

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

/***/ "@nestjs/serve-static":
/*!***************************************!*\
  !*** external "@nestjs/serve-static" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

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

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-local");

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