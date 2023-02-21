package com.example.gradledemo2;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class HomeController {

    @GetMapping("/index")
    public String index() {

        Logger logger = LoggerFactory.getLogger(HomeController.class);
        logger.info("200", "info : ");
        logger.error("error : ");
        logger.warn("warn : ");
        logger.debug("debug : ");
        logger.trace("trace : ");

        return "home/index";
    }
}
