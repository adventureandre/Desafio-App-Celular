package br.dev.adventure.back.modules.produtos;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

@Data
public class ProdutoEntity {
    private int id;

    @NotEmpty(message = "O campo nome é inválido")
    private String name;

    private String descricao;

    @PositiveOrZero(message = "A quantidade deve ser um número positivo ou zero")
    private int quantidade;
    
    private String valor;

}
