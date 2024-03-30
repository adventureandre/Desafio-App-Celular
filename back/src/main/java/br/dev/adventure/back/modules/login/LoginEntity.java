package br.dev.adventure.back.modules.login;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class LoginEntity {
    private int id;

    @NotEmpty(message = "O campo [name] está inválido!")
    private String name;

    @Email(message = "O campo [email] deve conter um e-mail válido")
    private String email;

    @Length(min = 4, max = 20, message = "A senha deve conter entre (4) e (20) caracteres")
    private String password;
}
