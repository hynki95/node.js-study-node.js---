// const parseCookies = (cookie = '') =>
//     cookie
//         .split(';')
//         .map(v => v.split('='))
//         .map(([k, ...vs]) => [k, vs.join('=')])
//         .reduce((acc, [k, v]) => {
//             acc[k.trim()] = decodeURIComponent(v);
//             return acc;
//         }, {});




const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => {
            console.log('v : ' + v);
            console.log('v.split(\'=\') : ' + v.split('='));
            return v.split('=');
        })
        .map(([k, ...vs]) => {
            console.log('k : ' + k);
            console.log('vs : ' + vs);
            console.log('vs.join(\'=\') : ' + vs.join('+'));
            console.log('[k, vs.join(\'=\')] : ' + [k, vs.join('+')]);

            return [k, vs.join('=')];
        })
        .reduce((acc, [k, v]) => {

            console.log('acc : ' + acc);
            console.log('[k, v] : ' + [k, v]);
            console.log('k.trim() : ' + k.trim());

            acc[k.trim()] = decodeURIComponent(v);
            console.log('acc[k.trim()] : ' + acc[k.trim()])
            return acc;
        }, {});

console.log(parseCookies('name=zerocho;year=1994;id=hyunki'));
