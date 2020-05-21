window.alert = (s) => {
    let tipDiv = $('#tipDiv');
    let tips = $('#tips');
    tips.html(s);
    tipDiv.show();
    tipDiv.height(tips.height() + 150);
    tipDiv.width(tips.width() + 200);
    tipDiv.css({
        'left': (window.innerWidth - tipDiv.width()) / 2 + 'px',
        'top': (window.innerHeight - tipDiv.height()) / 2 + 'px',
    });
};
let chromeURL = nw.Shell.openExternal;
let win = nw.Window.get(undefined);
let runMode = process.versions['nw-flavor'];
if (runMode === 'sdk') {
    // win.showDevTools();
    setTimeout(() =>
            win.capturePage((buffer) => {
                let fs = require('fs');
                fs.writeFileSync('src/screenshot.png', buffer);
            }, {'format': 'png', 'datatype': 'buffer'})
        , 1000);
}
let minimizeMainWindow = () => {
    win.minimize();
};
let maximizeMainWindow = () => {
    alert('暂不支持修改窗口大小');
};
let closeMainWindow = () => {
    win.close();
};
let showWindow = (WINDOW_NAME) => {
    let [
        welcomDiv,
        PROCESSING_TASKS,
        WAITING_TASKS,
        FINISHED_TASKS,
        STOPPED_TASKS,
        settingDiv,
        aboutDiv
    ] = [
        $('#welcomeDiv'),
        $('#PROCESSING_TASKS'),
        $('#WAITING_TASKS'),
        $('#FINISHED_TASKS'),
        $('#STOPPED_TASKS'),
        $('#settingDiv'),
        $('#aboutDiv')
    ];
    welcomDiv.hide();
    PROCESSING_TASKS.hide();
    WAITING_TASKS.hide();
    FINISHED_TASKS.hide();
    STOPPED_TASKS.hide();
    settingDiv.hide();
    aboutDiv.hide();
    switch (WINDOW_NAME) {
        case 'PROCESSING_TASKS':
            PROCESSING_TASKS.show();
            break;
        case 'WAITING_TASKS':
            WAITING_TASKS.show();
            break;
        case 'FINISHED_TASKS':
            FINISHED_TASKS.show();
            break;
        case 'STOPPED_TASKS':
            STOPPED_TASKS.show();
            break;
        case 'SETTING':
            settingDiv.show();
            break;
        case 'ABOUT':
            aboutDiv.show();
            break;
    }
};