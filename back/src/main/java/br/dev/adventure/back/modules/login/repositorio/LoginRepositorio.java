package br.dev.adventure.back.modules.login.repositorio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import br.dev.adventure.back.modules.login.LoginEntity;

@Repository
public class LoginRepositorio {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<LoginEntity> listar() {
        return jdbcTemplate.query("SELECT * FROM users", 
                                   (rs, rowNum) -> {
                                       LoginEntity loginEntity = new LoginEntity();
                                       loginEntity.setId(rs.getInt("id"));
                                       loginEntity.setName(rs.getString("name"));
                                       loginEntity.setEmail(rs.getString("email"));
                                       loginEntity.setPassword(rs.getString("password"));
                                       return loginEntity;
                                   });
    }

    @SuppressWarnings("deprecation")
    public boolean validateCredentials(String email, String password) {
        // Implemente a lógica para validar as credenciais aqui
        // Por exemplo, consultando o banco de dados para verificar se as credenciais são válidas
        // Retorne true se as credenciais forem válidas, caso contrário, retorne false
        return jdbcTemplate.queryForObject(
            "SELECT COUNT(*) FROM users WHERE email = ? AND password = ?",
            new Object[]{email, password},
            Integer.class
        ) == 1;
    }
    
}
