package br.dev.adventure.back.modules.produtos;

import java.util.UUID;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class ProdutoEntity {
    
    private UUID id;

    @NotEmpty(message = "o campo nome e invalído")
    private String name;

    private String description;

    @Email(message = "O campo deve conter um email valido")
    private String quantidade;
    
    private String valor;

}
