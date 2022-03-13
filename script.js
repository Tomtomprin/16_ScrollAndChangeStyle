window.onscroll = function () {
    const ClassC = document.querySelector('.classC');
    // ↓メソッド「getBoundingClientRect」は、
    // 対象の画面左上からの距離を横は「x」縦は「y」の値として返す。
    const clientRect = ClassC.getBoundingClientRect();

    // 上記で得たYの値をメソッド「top」で取得してPYと名づける
    const PY = clientRect.top;

    // ↓メソッド「innerHeight」は画面の高さ。
    const WindowHeight = window.innerHeight;
    // ↓画面幅から要素の画面上部からの高さを引いて
    const Height = WindowHeight - PY;
    // ↓その値が20以上になったら、スタイル変更（画面に入ったらだと、1以上）
    if (Height > 20) {
        ClassC.style.background = 'pink';
    } else {
        ClassC.style.background = 'yellow'
    }
}