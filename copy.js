function copy(dst) {

    for (var i=1; i<arguments.length; i++) {

       // var obj = arguments[i];

        for (var key in arguments[i]) {

            dst[key] = arguments[i][key];

        }

    }

    return dst;
}
/**
 * Created by a.y.kovalenko on 03.03.2015.
 */
