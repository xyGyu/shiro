/**
 * Created by bull on 17-5-16.
 */
$.extend(true, $.fn.dataTable.defaults, {
    "serverSide": true,
    "ordering": false,
    "searching": false,
    "stateSave": false, // 为true好像会导致一个问题
    "autoWidth": false,
    "pagingType": "full_numbers",
    "bLengthChange": false,
    // "lengthMenu": [ [10, 25, 50, 100], [10, 25, 50, 100] ], // 注释的原因：thymeleaf 渲染[[${items}}]]的时候，如果不小心代码格式化。那么[ [10, 25, 50, 100], [10, 25, 50, 100] ]会变成[[10, 25, 50, 100], [10, 25, 50, 100]]，那就出问题了
    "columnDefs": [{
        targets: "_all",
        defaultContent: "空",
        className: 'text-center',
        orderable: false
    }],
    "language": {
        "lengthMenu": "每页 _MENU_ 条记录",
        "zeroRecords": "<h4 class='text-center'>没有找到记录</h4>",
        "emptyTable": "<h4 class='text-center'>没有找到记录</h4>",
        "info": "显示 _START_ 到 _END_ 行，总共 _TOTAL_ 行， 第 _PAGE_ 页 ( 共 _PAGES_ 页 )",
        "infoEmpty": "无记录",
        "infoFiltered": "(从 _MAX_ 条记录过滤1)",
        "search": "查询：",
        "paginate": {
            "first": "首页",
            "last": "尾页",
            "previous": "上一页",
            "next": "下一页"
        }
    },
    // "createdRow": function(row, data, dataIndex){
    //      对行进行修改
    // }
})

/**
 * 字符串长度截取
 * @param str
 * @param length
 * @returns {string}
 */
function strLengthHandler(str, length) {
    if (str.length > length)
        return str.substring(0, length) + "...";
    else
        return str;
}

/**
 * 把阿拉伯数字转为中文数字
 * @param num
 * @returns {*}
 */
function getchinaNum(num) {
    var chinaNum = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十');
    return chinaNum[num];
}

/**
 * unix timestamp 转 2017-01-23这种
 * @param time
 * @returns {string}
 */
function renderDate(time) {
    var date = new Date(time);
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-"
        + date.getDate();
}

/**
 * unix timestamp 转 2017-01-23 04:05这种
 * @param time
 * @returns {string}
 */

function renderDate3(time) {
    return moment(time).format('YYYY-MM-DD HH:mm:ss');
}

function renderDate2(time) {
    var date = new Date(time);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return (year + '-' + month + '-' + day);
}

/**
 * 将秒数转换为小时
 * @param seconds
 */
function renderHour(seconds) {
    return Math.round(seconds / 3600);
}

/**
 * @return {number}
 */
function StringToUnix(time) {
    var date = new Date(time);
    return date.getTime() - 1000 * 8 * 3600;
}

/**
 * 将小时转换为秒
 * @param hour
 */
function renderSeconds(hour) {
    return hour * 3600;
}

/**
 * 判断是否为空  空则返回true
 * @param obj
 * @returns {boolean}
 */
function isNull(obj) {
    var reg = new RegExp("^\s*$");  //匹配空白符
    if (reg.test(obj) || obj == null)   //"" 或者 null 返回ture
        return true;
    else
        return false;
}

/**
 * 判断是否不为空
 * 如果为空则返回false， 不空则true
 * @param obj
 * @returns {boolean}
 */
function isNotNull(obj) {
    var reg = new RegExp("^\s*$");  //匹配空白符
    if (reg.test(obj) || obj == null)   //"" 或者 null 返回ture
        return false;
    else
        return true;
}

/**
 * 手机号验证
 * @returns {boolean}
 */
function checkMobile(phone) {
    if (!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(phone))) {
        return false;
    }
    return true;
}


/**
 * 根据ID 返回DOM对象
 * @param id
 * @returns {Element} DOM对象
 */
function getById(id) {
    return document.getElementById(id);
}


/**
 * 用于验证
 * 传入的json格式 { "值为空时弹出的消息": value }
 * 如果值为空 则会弹窗显示 key
 * @param json
 * @returns {boolean}
 */
function validateArgs(json) {
    for (var msg in json) {
        if (isNull(json[msg])) {
            toastr.error(msg);
            return false;
        }
    }
    return true;
}

/**
 * 吧容器中所有input设为null select默认选中第一个
 * @param id
 */
function resetForm(id) {
    $holder = $('#' + id);
    var inputs = $holder.find('input');
    var selects = $holder.find('select');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = null;
    }
    for (var i = 0; i < selects.length; i++) {
        $(selects[i]).find('option:first').prop("selected", 'selected');       //设置第一个为选中
    }
}

/**
 * size为b
 * @param size
 */
function fomatFileSize(size) {
    if (size < 1024)
        return size + "b";
    else if (size < Math.pow(1024, 2))
        return Math.ceil(size / 1024) + "kb";
    else if (size < Math.pow(1024, 3))
        return Math.ceil(size / Math.pow(1024, 2)) + "mb";
    else if (size < Math.pow(1024, 4))
        return Math.ceil(size / Math.pow(1024, 3)) + "gb";
}


/**
 * 折半查找  数组中找出指定值。
 *  可扩展成数组元素为json之类的
 * @param target
 * @param array
 * @param order     0数组从小到大， 1数组从大到小
 * @returns {*}
 */
function binarySearch(target, array, order) {
    var length = array.length;
    var beginIndex = 0;
    var endIndex = length;
    var half;
    if (order == 0) {       //从小到大排列
        for (var i = 0; i < length / 2; i++) {
            half = beginIndex + Math.round((endIndex - beginIndex) / 2);  //取中值
            if (target == array[half]) {
                return array[half];
            }

            if (target < array[half])
                endIndex = half;
            else
                beginIndex = half;
        }
    }
    if (order == 1) {       //从大到小排列
        for (var i = 0; i < length / 2; i++) {
            half = beginIndex + Math.round((endIndex - beginIndex) / 2);  //取中值
            if (target == array[half]) {
                return array[half];
            }

            if (target < array[half])
                beginIndex = half;
            else
                endIndex = half;
        }
    }
}

function renderDate(time) {
    if (isNull(time) || time == 0)   //如果为空 则返回空
        return "";
    var date = new Date(time);
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-"
        + date.getDate();
}

/**
 * 渲染状态相关的 html
 *
 * @param status 0 primary 1 gary/default 2 success 3 warning 4 danger
 * @param message
 */
function renderStatusBlock(status, message) {
    if (status == 0) {
        return '<div class="ivu-tag ivu-tag-blue  ivu-tag-dot ivu-tag-checked"><span class="ivu-tag-dot-inner"></span> <span class="ivu-tag-text">' + message + '</span></div>';
    } else if (status == 1) {
        return '<div class="ivu-tag ivu-tag-gray  ivu-tag-dot ivu-tag-checked"><span class="ivu-tag-dot-inner"></span> <span class="ivu-tag-text">' + message + '</span></div>';
    } else if (status == 2) {
        return '<div class="ivu-tag ivu-tag-green ivu-tag-dot ivu-tag-checked"><span class="ivu-tag-dot-inner"></span> <span class="ivu-tag-text">' + message + '</span></div>'
    } else if (status == 3) {
        return '<div class="ivu-tag ivu-tag-yellow ivu-tag-dot ivu-tag-checked"><span class="ivu-tag-dot-inner"></span> <span class="ivu-tag-text">' + message + '</span></div>'
    } else if (status == 4) {
        return '<div class="ivu-tag ivu-tag-red ivu-tag-dot ivu-tag-checked"><span class="ivu-tag-dot-inner"></span> <span class="ivu-tag-text">' + message + '</span></div>'
    }
}

function swalDelete(title, url, table) {
    swal({
        title: title,
        text: "",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#5ECD1E",
        confirmButtonText: "Yes, 确定",
        cancelButtonText: "No, 取消",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {

        if (isConfirm) {

            $.ajax({
                url: url,
                type: "delete",
                dataType: "json",
                success: function (data) {
                    if (data.code == 200) {
                        swal("删除成功！", "", "success");

                        redraw(table);
                    } else {
                        toastr.error(data.msg);
                    }
                    redraw();
                }
            });
        }
    });
}