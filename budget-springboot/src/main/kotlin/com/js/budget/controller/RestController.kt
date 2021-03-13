package com.js.budget.controller

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * Our very first controller
 */
@RestController
class FirstController {
    /** The ultimate answer to life, the universe and everything */
    @RequestMapping("/answer")
    fun answer() = 42
}