let os = require('os');
let divAbout = $('#about');
divAbout.append(`Name: ${nw.App.manifest['name']}<br/>`);
divAbout.append(`Version: ${nw.App.manifest['version']}<br/><br/>`);
divAbout.append(`龙缘科技 版权所有<br/>
        Copyright &copy; DESMG 2016-2020 All Rights Reserved.<br/>
        Telegram: <a href="javascript:chromeURL('https://t.me/jyxjjj');" style="color: #CCCCCC;">@jyxjjj</a><br/>
        GitHub: <a href="javascript:chromeURL('https://github.com/jyxjjj/aria2-nw');" style="color: #CCCCCC;">jyxjjj/aria2-nw</a><br/>
        BUG Report: <a href="javascript:chromeURL('https://github.com/jyxjjj/aria2-nw/issues');" style="color: #CCCCCC;">GitHub Issues</a><br/>
        <br/>`);
divAbout.append(`OS Type: ${os.type()} ${os.platform()} ${os.arch()}<br/>`);
divAbout.append(`OS Version: ${os.version()} ${os.release()}<br/>`);
let cpus = os.cpus();
divAbout.append(`CPU: ${cpus[0].model} * ${process.env.NUMBER_OF_PROCESSORS}<br/>`);
divAbout.append(`Memory: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)}GiB / ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)}GiB`);