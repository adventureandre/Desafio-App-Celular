package br.dev.adventure.back.modules.clientes;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class ClienteEntity {
    private int id;

    @NotEmpty(message = "O campo nome é inválido")
    private String name;

}
