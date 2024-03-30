package br.dev.adventure.back.modules.login.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.dev.adventure.back.modules.login.LoginEntity;
import br.dev.adventure.back.modules.login.repositorio.LoginRepositorio;

@RestController
@RequestMapping("/sign-in")
public class LoginController {

    private final LoginRepositorio loginRepositorio;

    @Autowired
    public LoginController(LoginRepositorio loginRepositorio) {
        this.loginRepositorio = loginRepositorio;
    }

    @RequestMapping
    public ResponseEntity<String> login(@RequestBody LoginEntity loginEntity) {
        String email = loginEntity.getEmail();
        String password = loginEntity.getPassword();

         boolean isValid = loginRepositorio.validateCredentials(email, password);
        if (isValid) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
}
