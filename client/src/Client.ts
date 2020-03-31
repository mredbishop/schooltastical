import '../sass/styles.scss';
import { LogManager, Aurelia, PLATFORM } from 'aurelia-framework';
import { ConsoleAppender } from 'aurelia-logging-console';
import { DialogConfiguration } from 'aurelia-dialog';

const configure = async (aurelia: Aurelia) => {
    LogManager.addAppender(new ConsoleAppender());
    LogManager.setLevel(LogManager.logLevel.debug);

    const aureliaDialogPlugin = PLATFORM.moduleName('aurelia-dialog');

    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin(aureliaDialogPlugin, (config: DialogConfiguration) => {
            config.useDefaults();
            config.settings.lock = true;
            config.settings.centerHorizontalOnly = false;
            config.settings.startingZIndex = 5;
            config.settings.keyboard = true;
        });

    await aurelia.start();
    await aurelia.setRoot(PLATFORM.moduleName('aurelia-app'), document.getElementById('app') as HTMLElement);
};

configure(new Aurelia());
