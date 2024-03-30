package br.dev.adventure.back.modules.produtos.repositorio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import br.dev.adventure.back.modules.produtos.ProdutoEntity;

@Repository
public class ProdutoRepositorio {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<ProdutoEntity> listar(){
        return jdbcTemplate.query("SELECT * FROM produtos",
                                (rs,rowNum)->{
                                    ProdutoEntity produto =  new ProdutoEntity();
                                    produto.setId(rs.getInt("id"));
                                    produto.setName(rs.getString("name"));
                                    produto.setDescricao(rs.getString("descricao"));
                                    produto.setQuantidade(rs.getInt("quantidade"));
                                    produto.setValor(rs.getString("valor"));
                                    return produto;
                                });
    }

    public void save(ProdutoEntity produto) {
        jdbcTemplate.update("INSERT INTO produtos (name, descricao, quantidade, valor) VALUES (?, ?, ?, ?)",
            produto.getName(), produto.getDescricao(), produto.getQuantidade(), produto.getValor());
    }


    public void delete(int id) {
        jdbcTemplate.update("DELETE FROM produtos WHERE id = ?", id);
    }

    public void update(ProdutoEntity produto) {
        jdbcTemplate.update("UPDATE produtos SET name = ?, descricao = ?, quantidade = ?, valor = ? WHERE id = ?",
            produto.getName(), produto.getDescricao(), produto.getQuantidade(), produto.getValor(), produto.getId());
    }
    
}
