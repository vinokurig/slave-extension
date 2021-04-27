
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext) {
    const informationMessageTestCommand = {
        id: 'slave-extension-generated',
        label: "Test Command"
    };
    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestCommand, (...args: any[]) => {
        const master = theia.plugins.getPlugin('vinokurig.master-extension');
        if (master) {
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>> extension has been found');
            try {
                master.exports.onFunction();
            } catch (e) {
                console.log('error');
            }
        }
        theia.window.showInformationMessage('Command executed!');
    }));

}

export function stop() {

}
