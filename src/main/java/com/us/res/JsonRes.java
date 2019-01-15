package com.us.res;

/**
 * Json信息返回
 *
 * @author qisheng.chen
 * @create 2018-11-24
 */
public class JsonRes {
    public static final String SUCCESS_CODE = "200";
    public static final String BAD_REQUEST_CODE = "400";
    public static final String ERROR_CODE = "500";

    private String code;
    private String msg;
    private static final JsonRes success = new JsonRes(SUCCESS_CODE, "success");

    public JsonRes() {
    }

    public JsonRes(String code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public static JsonRes success() {
        return success;
    }

}
