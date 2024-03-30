package br.dev.adventure.back.modules.clientes.repositorio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import br.dev.adventure.back.modules.clientes.ClienteEntity;

@Repository
public class ClienteRepositorio {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<ClienteEntity> listar(){
        return jdbcTemplate.query("SELECT * FROM clientes",
                                (rs,rowNum)->{
                                    ClienteEntity cliente =  new ClienteEntity();
                                    cliente.setId(rs.getInt("id"));
                                    cliente.setName(rs.getString("name"));
                                   return cliente;
                                });
    }

    public void save(ClienteEntity cliente) {
        jdbcTemplate.update("INSERT INTO clientes (name) VALUES (?)",
            cliente.getName());
    }


    public void delete(int id) {
        jdbcTemplate.update("DELETE FROM clientes WHERE id = ?", id);
    }

    public void update(ClienteEntity cliente) {
        jdbcTemplate.update("UPDATE clientes SET name = ? WHERE id = ?",
            cliente.getName(), cliente.getId());
    }

    public ClienteEntity findById(int id) {
        String sql = "SELECT * FROM clientes WHERE id = ?";
        RowMapper<ClienteEntity> rowMapper = new BeanPropertyRowMapper<>(ClienteEntity.class);
        return jdbcTemplate.queryForObject(sql, rowMapper, id);
    }

    public List<ClienteEntity> buscarPorPalavra(String palavra){
        String sql = "SELECT * FROM clientes WHERE name LIKE ?";
        String parametro = "%" + palavra + "%";
        RowMapper<ClienteEntity> rowMapper = new BeanPropertyRowMapper<>(ClienteEntity.class);
        return jdbcTemplate.query(sql, rowMapper, parametro);
    }
}
