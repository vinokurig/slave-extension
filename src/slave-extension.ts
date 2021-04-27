
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
        const master = theia.plugins.getPlugin('master-extension');
        if (master) {
            master.exports.onFunction(() => {
                theia.window.showInformationMessage('Done!');
            })
        }
        theia.window.showInformationMessage('Command executed!');
    }));

}

export function stop() {

}
