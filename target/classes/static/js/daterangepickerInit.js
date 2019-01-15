function daterangepickerInit(option) {

    $('#' + option + '').daterangepicker({
        "locale": {
            "format": 'YYYY-MM-DD',
            "separator": "~",
            "applyLabel": "确定",
            "cancelLabel": "取消",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "日",
                "一",
                "二",
                "三",
                "四",
                "五",
                "六"
            ],
            "monthNames": [
                "一月",
                "二月",
                "三月",
                "四月",
                "五月",
                "六月",
                "七月",
                "八月",
                "九月",
                "十月",
                "十一月",
                "十二月"
            ],
            "firstDay": 1
        },
        "autoApply": true
    });
}
function datepickerInit(option) {

    $('#' + option + '').daterangepicker({
        "locale": {
            "format": 'YYYY-MM-DD',
            "separator": "~",
            "applyLabel": "确定",
            "cancelLabel": "取消",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "singleDatePicker":"true",
            "daysOfWeek": [
                "日",
                "一",
                "二",
                "三",
                "四",
                "五",
                "六"
            ],
            "monthNames": [
                "一月",
                "二月",
                "三月",
                "四月",
                "五月",
                "六月",
                "七月",
                "八月",
                "九月",
                "十月",
                "十一月",
                "十二月"
            ],
            "firstDay": 1
        },
        "autoApply": true
    });
}
function daterangepickerTimePickerInit(option) {

    $('#' + option + '').daterangepicker({
        "timePicker": true,
        "timePicker24Hour":true,
        "timePickerSeconds":true,
        "startDate":moment(),
        "minDate":moment(),
        "alwaysShowCalendars": true,
        "locale": {
            "format": 'YYYY-MM-DD HH:mm:ss',
            "separator": " - ",
            "applyLabel": "确定",
            "cancelLabel": "取消",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "手动选时",
            "weekLabel": "W",
            "daysOfWeek": [
                "日",
                "一",
                "二",
                "三",
                "四",
                "五",
                "六"
            ],
            "monthNames": [
                "一月",
                "二月",
                "三月",
                "四月",
                "五月",
                "六月",
                "七月",
                "八月",
                "九月",
                "十月",
                "十一月",
                "十二月"
            ],
            "firstDay": 1
        },
        "autoApply": true,
        "ranges": {
            '一小时': [moment(), moment().add(1,'hours')],
            '3小时': [moment(), moment().add(3,'hours')],
            '6小时': [moment(), moment().add(6,'hours')],
            '一天': [moment(), moment().add(1, 'days')],
            '7天': [moment(),moment().add(7, 'days'), moment()],
            '30天': [moment(),moment().add(30, 'days'), moment()],

        }
    });
}
