const { exec } = require('child_process');

// compile starts ~>
exec('npx rtlcss dist/css/lite.css dist/css/lite.rtl.css', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error compiling rtl.css: ${error}`);
        return;
    }
    console.log('\n[liteCSS]: RegularRTL File Generated!\n');
});

exec('npx rtlcss dist/css/lite.css.map dist/css/lite.rtl.css.map', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error compiling rtl.css: ${error}`);
        return;
    }
    console.log('\n[liteCSS]: RegularMapRTL File Generated!\n');
});

exec('npx rtlcss dist/css/lite.min.css dist/css/lite.min.rtl.css', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error compiling rtl.css: ${error}`);
        return;
    }
    console.log('\n[liteCSS]: MinRTL File Generated!\n');
});

exec('npx rtlcss dist/css/lite.min.css.map dist/css/lite.min.rtl.css.map', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error compiling rtl.css: ${error}`);
        return;
    }
    console.log('\n[liteCSS]: MinMapRTL File Generated!\n');
});