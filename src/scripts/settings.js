'use strict';

// Set client auth mode - true to enable client auth, false to disable it
const isClientAuthEnabled = false;
const lapi_1= '#ff7800'
const lapi_2='#d94f18'
const hover='#2e96af'

//custom colors property  
const colors_lapi_1={    //custom colors property  
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

/*const complete_colors_settings={
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
}*/

const initSdk = (name) => {
    if (!name) {
        name = 'Bots';          // Set default reference name to 'Bots'
    }
    let Bots;
    //let log='src/images/logo1.png'
    let logo='https://github.com/BrayanQuirinoSPS/notas/raw/master/Oracle_Digital_Assitant/Lapi/chatbot_web/src/images/logo1.png'
    setTimeout(() => {
        let chatWidgetSettings = {
            //enableTimestamp: true,
            timestampFormat: "hh:mm a",
            logoIcon: logo, 
            botIcon: logo,
            //personIcon: 'images/user-icon.png', 
            botButtonIcon: logo, 
            //clearMessageIcon: 'src/images/eliminar.png',        
            //enableClearMessage: true,
            //timestampMode: "relative",
            //enableBotAudioResponse: true,
            //letra y tema
            //font: '14px Verdana, Geneva, sans-serif',
            //theme: 'classic',
            //theme: 'redwood-dark'
            // Método para embeber el bot en un div
            /*embedded: true,
            targetElement: 'chat-container',    
            embedTopStickyId: 'top-text',
            embedTopScrollId : 'top-text',
            customHeaderElementId: 'custom-header',*/
            //showConnectionStatus: true,
            //position: {bottom: '2px', right: '2px'},
            //Inicializador del bot
            initUserHiddenMessage: 'Hola',
            conversationBeginPosition: 'bottom',
            //Caracteristicas escondidas
            i18n: {
                en: {
                    chatTitle: 'LAPI Laboratorio Médico',       
                    connected: 'Conectado',            
                    inputPlaceholder: 'Escribe tu mensaje...', 
                    send: 'Enviar (Enter)'  
                }
            },
            "colors": colors_lapi_1,
            clientAuthEnabled: isClientAuthEnabled,
            URI: 'oda-299d9648040a4a0abe6a946d4a14e717-da2.data.digitalassistant.oci.oraclecloud.com',
            channelId: 'abb40491-1b0d-4c90-916c-ed610498d558'
            //URI: process.env.URI,
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
