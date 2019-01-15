import { NavigationInstruction } from 'aurelia-router';
import OpenIdConnectConfigurationManager from './open-id-connect-configuration-manager';
import OpenIdConnectLogger from './open-id-connect-logger';
import { UserManager } from 'oidc-client';
export default class OpenIdConnectNavigationStrategies {
    private logger;
    private openIdConnectConfiguration;
    private userManager;
    constructor(logger: OpenIdConnectLogger, openIdConnectConfiguration: OpenIdConnectConfigurationManager, userManager: UserManager);
    signInRedirectCallback(instruction: NavigationInstruction): Promise<any>;
    silentSignInCallback(instruction: NavigationInstruction): Promise<any>;
    signOutRedirectCallback(instruction: NavigationInstruction): Promise<any>;
    private runHandlerAndCompleteNavigationInstruction;
}
