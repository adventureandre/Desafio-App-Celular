package br.dev.adventure.back.modules.produtos.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.dev.adventure.back.modules.produtos.ProdutoEntity;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

    @PostMapping
    public void create(@Valid @RequestBody ProdutoEntity produtoEntity) {
System.out.println("Candidato");
System.out.println(produtoEntity.getName());
System.out.println(produtoEntity.getValor());


    }

}
