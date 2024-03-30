package br.dev.adventure.back.modules.vendas.repositorio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import br.dev.adventure.back.modules.vendas.VendaEntity;

@Repository
public class VendaRepositorio {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<VendaEntity> listar(){
        return jdbcTemplate.query("SELECT * FROM vendas",
                                (rs,rowNum)->{
                                    VendaEntity venda =  new VendaEntity();
                                    venda.setId(rs.getInt("id"));
                                    venda.setIdcliente(rs.getInt("idcliente"));
                                    venda.setProdutos(rs.getString("produtos"));
                                    venda.setQuantidade(rs.getInt("quantidade"));
                                    venda.setTotal(rs.getString("total"));
                                    return venda;
                                });
    }

    public void save(VendaEntity venda) {
        jdbcTemplate.update("INSERT INTO vendas (idcliente, produtos, quantidade, total) VALUES (?, ?, ?, ?)",
            venda.getIdcliente(), venda.getProdutos(), venda.getQuantidade(), venda.getTotal());
    }


    public void delete(int id) {
        jdbcTemplate.update("DELETE FROM vendas WHERE id = ?", id);
    }

    public void update(VendaEntity venda) {
        jdbcTemplate.update("UPDATE vendas SET idcliente = ?, produtos = ?, quantidade = ?, total = ? WHERE id = ?",
            venda.getIdcliente(), venda.getProdutos(), venda.getQuantidade(), venda.getTotal(), venda.getId());
    }

    public VendaEntity findById(int id) {
        String sql = "SELECT * FROM vendas WHERE id = ?";
        RowMapper<VendaEntity> rowMapper = new BeanPropertyRowMapper<>(VendaEntity.class);
        return jdbcTemplate.queryForObject(sql, rowMapper, id);
    }

}
