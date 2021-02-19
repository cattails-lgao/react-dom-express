const required = true               // 必输字段
const email = true                  // 必须输入正确格式的电子邮件
const phone = true                  // 必须输入正确格式的手机号码
const url = true                    // 必须输入正确格式的网址
const date = true                   // 必须输入正确格式的日期
const dateISO = true                // 必须输入正确格式的日期(ISO)，例如：2009-06-23，1998/01/22 只验证格式，不验证有效性
const number = true                 // 必须输入合法的数字(负数，小数)
const digits = true                 // 必须输入整数
const maxlength = 5                // 输入长度最多是5的字符串(汉字算一个字符)
const minlength = 10               // 输入长度最小是10的字符串(汉字算一个字符)
const rangelength = [5,10]         // 输入长度必须介于 5 和 10 之间的字符串")(汉字算一个字符)
const range = [5,10]               // 输入值必须介于 5 和 10 之间
const max = 5                      // 输入值不能大于5
const min = 10                     // 输入值不能小于10
const initTips = '缺少参数';

const validate = {
    rules: [],
    checked: function(parameter) {
        let paramsKey = Object.keys(parameter);
        let result = this.rules.filter(item => {
            if(!item.required) return false;

            let index = paramsKey.findIndex(key => key == item.name);
            if(!~index) return true;
        })
        return result.map(item => item.name);
    }
};

module.exports = validate;