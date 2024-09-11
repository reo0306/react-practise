// 非同期処理（await/async）
let a = 0;

init();

async function init() {
    try {
       // resolveが実行された処理が変数に格納
       const result = await new Promise((resolve, reject) => {
           setTimeout(() => {
                a = 1;
                reject(a)
            }, 2000);
        })
        console.log(result);
    } catch (e) {
        // rejectが実行されたとき
        console.log('catchが実行', e);
    }
}
