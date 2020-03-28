import '../sass/styles.scss';
import { bootstrap } from 'aurelia-bootstrapper';
import { LogManager, Aurelia, PLATFORM } from 'aurelia-framework';
import { ConsoleAppender } from 'aurelia-logging-console';
import { DialogConfiguration } from 'aurelia-dialog';

bootstrap(async (aurelia: Aurelia) => {
    LogManager.addAppender(new ConsoleAppender());
    LogManager.setLevel(LogManager.logLevel.debug);

    aurelia.use
        .defaultBindingLanguage()
        .defaultResources()
        .history()
        .router()
        .eventAggregator()
        .plugin('aurelia-dialog', (config: DialogConfiguration) => {
            config.useDefaults();
            config.settings.lock = true;
            config.settings.centerHorizontalOnly = false;
            config.settings.startingZIndex = 5;
            config.settings.keyboard = true;
        });

    await aurelia.start();
    await aurelia.setRoot(PLATFORM.moduleName('aurelia-app'), document.getElementById('app') as HTMLElement);
});
