const enc100 = (inPlaintext) => {
    var v_tabel = '7LjCtFH3A25iZlcoEw;USO_nQV9WMzmerTRDhI8vJXdyfbkqYxaPGK0B#pNg6u4s1!';
    if (inPlaintext.length % 2 !== 0) { inPlaintext += '!'; }
    var v_row = [];
    var v_hasil = '';
    for (var v_cacah1 = 0; v_cacah1 < inPlaintext.length; v_cacah1++) {
        v_row.push(v_tabel.indexOf(inPlaintext.charAt(v_cacah1)));
    }
    for (var v_cacah2 = 0; v_cacah2 < v_row.length / 2; v_cacah2++) {
        v_hasil += ('000' + (v_row[2 * v_cacah2] * 3 + v_row[2 * v_cacah2 + 1] * 2)).slice(-3);
        v_hasil += ('000' + (v_row[2 * v_cacah2] * 7 + v_row[2 * v_cacah2 + 1] * 1)).slice(-3).split('').reverse().join('');
    }
    return v_hasil;
}

export { enc100 };