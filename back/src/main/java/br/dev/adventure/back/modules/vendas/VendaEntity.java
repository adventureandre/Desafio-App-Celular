package br.dev.adventure.back.modules.vendas;

import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

@Data
public class VendaEntity {
    private int id;

    private int idcliente;

    private String produtos;

    @PositiveOrZero(message = "A quantidade deve ser um número positivo ou zero")
    private int quantidade;
    
    private String total;

}
