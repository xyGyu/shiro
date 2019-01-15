package com.us.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author yuhongxiang
 * @create 2019-01-15
 */
@Controller
@RequestMapping("/")
public class PortalController {

    /**
     * 跳转到404页面
     */
    @RequestMapping(value = "/404")
    public String notFoundPage() {
        return "404";
    }

    /**
     * 跳转到401页面
     */
    @RequestMapping(value = "/403")
    public String unauthorizedPage() {
        return "403";
    }

    @RequestMapping(value = "/login")
    public String login() {
        return "login";
    }

}
