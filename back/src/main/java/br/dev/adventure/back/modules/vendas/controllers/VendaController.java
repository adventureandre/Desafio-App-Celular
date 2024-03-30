package br.dev.adventure.back.modules.vendas.controllers;

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

import br.dev.adventure.back.modules.vendas.VendaEntity;
import br.dev.adventure.back.modules.vendas.repositorio.VendaRepositorio;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/venda")
public class VendaController {

    private final VendaRepositorio vendaRepositorio;

    @Autowired
    public VendaController(VendaRepositorio vendaRepositorio) {
        this.vendaRepositorio = vendaRepositorio;
    }

    @GetMapping
    public List<VendaEntity> getAllVendas() {
        return vendaRepositorio.listar();
    }

    @GetMapping("/{id}")
    public VendaEntity getVendaById(@PathVariable int id) {
        return vendaRepositorio.findById(id);
    }

    @PostMapping
    public void create(@Valid @RequestBody VendaEntity vendaEntity) {
        vendaRepositorio.save(vendaEntity);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable int id, @Valid @RequestBody VendaEntity vendaEntity) {
        vendaEntity.setId(id);
        vendaRepositorio.update(vendaEntity); 
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        vendaRepositorio.delete(id);
    }

}
