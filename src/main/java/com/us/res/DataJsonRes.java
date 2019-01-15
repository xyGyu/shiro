package com.us.res;

/**
 * 带返回数据的Json
 *
 * @author qisheng.chen
 * @create 2018-11-24
 */
public class DataJsonRes<T> extends JsonRes {
    private T data;

    public DataJsonRes() {
    }

    public DataJsonRes(String code, String msg, T data) {
        super(code, msg);
        this.data = data;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public static <T> DataJsonRes<T> buildSuccess(T data) {
        return new DataJsonRes<>(SUCCESS_CODE, "success", data);
    }
}
