package me.dev.TodoListWebApp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class ViewController {

    @GetMapping("/register")
    public String viewRegister(){
        return "register.html";
    }


    @GetMapping("/login")
    public String viewLogin(){
        return "login.html";
    }


    @GetMapping("/index")
    public String viewIndex(){
        return "index.html";
    }

    @GetMapping("/Todos")
    public String viewTodo(){
        return "Todo.html";
    }


}
