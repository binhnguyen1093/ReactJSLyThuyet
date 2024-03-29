/**
 * Enhanced object literal
 * 
 * 1. Khai báo key: key value cho object
 * 2. Khai báo method cho object
 * 3. Khai báo key cho object dưới dạng biến
 */

var name = 'Javascript';
var price = 1000;

var course = {
    name: name,
    price: price,
    getName: function () {
        return this.name
    }
}

console.log()

//Nếu key và value trùng tên với nhau thì ta có thể ghi 1 biến. VD phía dưới key và value thì chỉ cần ghi key.
// Với method thì ta bỏ luôn chữ function.
var course2 = {
    name,
    price,
    getName() {
        return this.name;
    }
}

//Khai báo key cho object. Có thể thay tên key bằng cách gán biến ngoài. Khai báo bằng dùng dấu [tên biến].
// Sử dụng trong trường hợp key object phụ thuộc vào giá trị trả về của 1 hàm nào đó dẫn đến fieldName thay đổi theo
var fieldName = 'name';
var filedPrice = 'price';

const course3 = {
    [fieldName]: 'Javascript',
    [filedPrice]: 1000
}

debugger;
let infoArr = [['name', 'John'], ['age', 30], ['city', 'New York']];
let i = 0;
const arrToObj = function (arr) {
    return arr.reduce((acc, curVal) => {
        i++;
        console.log(acc, i)
        acc[curVal[0]] = curVal[1];
        // Vì sao ko thể dùng acc.curVal[0] vì khi dùng như vây Javascript sẽ hiểu là ta đang truy cập vào key curVal của object acc 
        // mà rõ ràng lúc này object acc ko tồn tại key có tên là curVal nên dẫn đến lỗi undefine cho nên phải dùng cách "square bracket notation" để gán key cho object
        return acc;
    }, {});
}

const arrToObj2 = function (arr) {
    return arr.reduce((acc, [key, value]) => { //key và value đại diện cho index 0 va index 1 của mảng mới
        acc[key] = value;
        return acc;
    }, {});
}

console.log(arrToObj(infoArr));