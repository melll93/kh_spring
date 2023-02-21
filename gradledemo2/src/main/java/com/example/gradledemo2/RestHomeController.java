package com.example.gradledemo2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class RestHomeController {

    @GetMapping("/home")
    public String home() {

        log.debug("debug");
        log.info("info");
        log.warn("warn");
        log.error("error");

        return "Spring Gradle Test!!";
    }
}
