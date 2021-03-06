'use strict';

// Set client auth mode - true to enable client auth, false to disable it
const isClientAuthEnabled = false;
const lapi_1= '#ff7800'
const lapi_2='#d94f18'
const hover='#2e96af'
const colorsOrange={    //custom colors property  
    "branding": lapi_1,
    "text": "#000",
    //"textLight": "#737373",
    //conversationBackground: "#fff",fafafa
    //footerBackground: "#fff",
    //headerButtonFill: "#fff",
    //"timestamp": "#5b5652",
    "userMessageBackground": "#fafafa",
    "botMessageBackground": "#fafafa",
    "actionsBackground": lapi_1,
    "actionsBackgroundHover": hover,
    "actionsBorder":"#fff",
    "actionsText": "#fff",
    "globalActionsBackground": lapi_1,
    "globalActionsBackgroundHover": hover,
    "globalActionsBorder": "#fff",
    "globalActionsText": "#fff",
    "globalActionsTextHover": "#fff",
    //"links": "#0770bf",
    "cardNavButton":lapi_1,
    "cardNavText": "#fff",
    "cardNavButtonHover": hover,
    "recognitionViewButtonFill": "#fff",
    "recognitionViewText": "#fff",
    "typingIndicator": lapi_1
}
const colorsGray={    //custom colors property  
    "branding": lapi_1,
    "headerBackground": lapi_1,
    "visualizer": "#fff",
    "headerButtonFill": "#fff",
    "text": "#000",
    //"textLight": "#737373",
    //conversationBackground: "#fff",
    //"footerBackground": lapi_1,
    //"footerButtonFill": lapi_1,
    //"footerInlineButtonFill": "#fff",
    //headerButtonFill: "#fff",
    //"timestamp": "#5b5652",
    "cardBackground": "#fff",
    "userMessageBackground": "#fafafa",
    "botMessageBackground": "#fafafa",
    "actionsBackground": "#fff",
    "actionsBackgroundHover": lapi_1,
    "actionsBorder":"#aaaaaa",
    "actionsText": "#aaaaaa",
    "actionsTextHover": "#fff",
    "globalActionsBackground": "#fff",
    "globalActionsBackgroundHover": lapi_1,
    "globalActionsBorder": "#fff",
    "globalActionsText": "#aaaaaa",
    "globalActionsTextHover": lapi_1,
    //"links": "#0770bf",
    "cardNavButton":"#fff",
    "cardNavText": lapi_1,
    "cardNavButtonHover": lapi_1,
    "recognitionViewButtonFill": "#fff",
    "recognitionViewText": "#fff",
    "typingIndicator": lapi_1
}

const complete_colors={
    branding: "#025e7e",
	text: "#161513",
	textLight: "#3a3631",
	headerBackground: "#025e7e",
	headerButtonFill: "#fff",
	headerText: "#fff",
	conversationBackground: "#fff",
	timestamp: "#5b5652",
	typingIndicator: "#227e9e",
	botMessageBackground: "#e5f1ff",
	userMessageBackground: "#ececec",
	cardBackground: "#fcfbfa",
	cardNavButton: "#4190ac",
	cardNavButtonFocus: "#5fa2ba",
	cardNavButtonHover: "#0e7295",
	actionsBackground: "#025e7e",
	actionsBackgroundFocus: "#053242",
	actionsBackgroundHover: "#06485f",
	actionsBorder: "#025e7e",
	actionsText: "#fff",
	globalActionsBackground: "#fff",
	globalActionsBackgroundFocus: "#053242",
	globalActionsBackgroundHover: "#025e7e",
	globalActionsBorder: "#0e7295",
	globalActionsText: "#0e7295",
	links: "#0e7295",
	footerBackground: "#fff",
	inputBackground: "#fff",
	inputText: "#161513",
	recognitionViewButtonFill: "#fff",
	recognitionViewText: "#fff",
	notificationBadgeBackground: "#9a0007",
	notificationBadgeText: "#fff"
}
/**
 * Initializes the SDK and sets a global field with passed name for which
 * it can be referred to later.
 *
 * @param {string} name Name by which the chat widget should be referred
 */
const initSdk = (name) => {
    if (!name) {
        name = 'Bots';          // Set default reference name to 'Bots'
    }
    let Bots;

    setTimeout(() => {
        /**
            * SDK configuration settings
            * Other than URI, all fields are optional with two exceptions for auth modes
            * In client auth disabled mode, 'channelId' must be passed, 'userId' is optional
            * In client auth enabled mode, 'clientAuthEnabled: true' must be passed
            */
        let chatWidgetSettings = {
            //URI: process.env.URI,
            URI: 'oda-299d9648040a4a0abe6a946d4a14e717-da2.data.digitalassistant.oci.oraclecloud.com',
            //enableTimestamp: true,
            timestampFormat: "hh:mm a",
            //enableBotAudioResponse: true,
            //timestampMode: "relative",
            enableClearMessage: true,
            //botButtonIcon: 'images/lapibot_1.png', 
            logoIcon: '/images/lapibot_2.png', 
            botIcon: '/images/lapibot_2.png',
            //clearMessageIcon: 'src/images/eliminar.png',        
            //personIcon: 'images/user-icon.png', 
            //letra y tema
            //font: '14px Verdana, Geneva, sans-serif',
            //theme: 'classic',
            //theme: 'redwood-dark'
            /*embedded: true,
            targetElement: 'chat-container',    
            embedTopStickyId: 'top-text',
            embedTopScrollId : 'top-text',
            customHeaderElementId: 'custom-header',*/
            initUserHiddenMessage: 'Hola',
            //showConnectionStatus: true,
            //position: {bottom: '2px', right: '2px'},
            conversationBeginPosition: 'bottom',
            //Caracteristicas escondidas
            i18n: {
                en: {
                    chatTitle: 'LAPI Laboratorio Médico',       // Replaces Chat
                    connected: 'Conectado',            // Replaces Connected
                    inputPlaceholder: 'Escribe tu mensaje...', // Replaces Type a message
                    send: 'Enviar (Enter)'           // Replaces Send tool tip
                }
            },
            "colors": colorsGray,
            clientAuthEnabled: isClientAuthEnabled,
            channelId: 'abb40491-1b0d-4c90-916c-ed610498d558'
            //channelId: process.env.CHANNEL_ID 
        };

        // Initialize SDK
        if (isClientAuthEnabled) {
            Bots = new WebSDK(chatWidgetSettings, generateToken);
        } else {
            Bots = new WebSDK(chatWidgetSettings);
        }

        // Connect to the ODA
        Bots.connect();

        // Create global object to refer Bots
        window[name] = Bots;
    }, 0);
};
