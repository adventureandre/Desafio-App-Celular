package br.dev.adventure.back.modules.clientes.controllers;

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

import br.dev.adventure.back.modules.clientes.ClienteEntity;
import br.dev.adventure.back.modules.clientes.repositorio.ClienteRepositorio;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cliente")
public class ClienteController {

    private final ClienteRepositorio clienteRepositorio;

    @Autowired
    public ClienteController(ClienteRepositorio clienteRepositorio) {
        this.clienteRepositorio = clienteRepositorio;
    }

    @GetMapping
    public List<ClienteEntity> getAllClientes() {
        return clienteRepositorio.listar();
    }

    @GetMapping("/{id}")
    public ClienteEntity getClienteById(@PathVariable int id) {
        return clienteRepositorio.findById(id);
    }

    @PostMapping
    public void create(@Valid @RequestBody ClienteEntity clienteEntity) {
        clienteRepositorio.save(clienteEntity);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable int id, @Valid @RequestBody ClienteEntity clienteEntity) {
        clienteEntity.setId(id);
        clienteRepositorio.update(clienteEntity); 
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        clienteRepositorio.delete(id);
    }

    @GetMapping("/buscar/{palavra}")
    public List<ClienteEntity> buscarPorPalavra(@PathVariable String palavra) {
        return clienteRepositorio.buscarPorPalavra(palavra);
    }
}
