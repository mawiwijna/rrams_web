const enc100 = (inPlaintext) => {
    const v_tabel = '7LjCtFH3A25iZlcoEw;USO_nQV9WMzmerTRDhI8vJXdyfbkqYxaPGK0B#pNg6u4s1!';
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
    return 'HELIUM' + v_hasil;
}

const dec100 = (inPlaintext2) => {
    // INV = [-1 7 ; 2 -3] * 1/11
    const v_tabel = '7LjCtFH3A25iZlcoEw;USO_nQV9WMzmerTRDhI8vJXdyfbkqYxaPGK0B#pNg6u4s1';
    var inPlaintext = inPlaintext2.replace('HELIUM', '');
    
    if (inPlaintext.length % 6 !== 0) return '';
    let v_hasil = '';
    for (let v_cacah1 = 0; v_cacah1 < inPlaintext.length / 6; v_cacah1++) {
        const v_angka1 = parseInt(inPlaintext.substr(6 * v_cacah1, 3));
        const v_angka2 = parseInt(inPlaintext.substr((6 * v_cacah1) + 3, 3).split('').reverse().join(''));
        const v_angkx1 = ((v_angka1 * -1) + (v_angka2 * 2)) / 11;
        if (v_angkx1 < v_tabel.length) v_hasil += v_tabel.charAt(v_angkx1);
        const v_angkx2 = ((v_angka1 * 7) + (v_angka2 * -3)) / 11;
        if (v_angkx2 < v_tabel.length) v_hasil += v_tabel.charAt(v_angkx2);
    }
    return v_hasil;
}

export { enc100, dec100 };