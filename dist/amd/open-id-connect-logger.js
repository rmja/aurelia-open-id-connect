define(["require", "exports", "oidc-client"], function (require, exports, oidc_client_1) {
    "use strict";
    var OpenIdConnectLogger = (function () {
        function OpenIdConnectLogger() {
        }
        OpenIdConnectLogger.prototype.enableOidcClientLogging = function (level) {
            var validLevels = [
                oidc_client_1.Log.INFO,
                oidc_client_1.Log.WARN,
                oidc_client_1.Log.ERROR,
                oidc_client_1.Log.NONE,
            ];
            if (validLevels.indexOf(level) >= 0) {
                oidc_client_1.Log.level = level;
                oidc_client_1.Log.logger = console;
            }
            else {
                var concat = validLevels.join(", ");
                var message = "The log level must be one of " + concat;
                throw new Error(message);
            }
        };
        OpenIdConnectLogger.prototype.debug = function (message) {
            console.debug("DEBUG [OpenIdConnect] " + message);
        };
        return OpenIdConnectLogger;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = OpenIdConnectLogger;
});
//# sourceMappingURL=open-id-connect-logger.js.map