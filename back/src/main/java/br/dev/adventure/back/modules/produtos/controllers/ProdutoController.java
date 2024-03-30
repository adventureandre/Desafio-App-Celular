package br.dev.adventure.back.modules.produtos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.dev.adventure.back.modules.produtos.ProdutoEntity;
import br.dev.adventure.back.modules.produtos.repositorio.ProdutoRepositorio;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/produto")
public class ProdutoController {


private final ProdutoRepositorio produtoRepositorio;

    @Autowired
    public ProdutoController(ProdutoRepositorio produtoRepositorio) {
        this.produtoRepositorio = produtoRepositorio;
    }

    @GetMapping
    public List<ProdutoEntity> getAllProdutos() {
        return produtoRepositorio.listar();
    }

    @GetMapping("/{id}")
    public ProdutoEntity getProdutoById(@PathVariable int id) {
        return produtoRepositorio.findById(id);
    }

    @PostMapping
    public void create(@Valid @RequestBody ProdutoEntity produtoEntity) {
        produtoRepositorio.save(produtoEntity);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable int id, @Valid @RequestBody ProdutoEntity produtoEntity) {
        produtoEntity.setId(id);
        produtoRepositorio.update(produtoEntity); 
    }

     @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        produtoRepositorio.delete(id);
    }

}
