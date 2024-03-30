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
                                       loginEntity.setToken(rs.getString("token"));
                                       return loginEntity;
                                   });
    }

    public LoginEntity findByEmailAndPassword(String email, String password) {
        @SuppressWarnings("deprecation")
        List<LoginEntity> result = jdbcTemplate.query(
            "SELECT * FROM users WHERE email = ? AND password = ?",
            new Object[]{email, password},
            (rs, rowNum) -> {
                LoginEntity loginEntity = new LoginEntity();
                loginEntity.setId(rs.getInt("id"));
                loginEntity.setName(rs.getString("name"));
                loginEntity.setEmail(rs.getString("email"));
                loginEntity.setPassword(rs.getString("password"));
                loginEntity.setToken(rs.getString("token"));
                return loginEntity;
            }
        );

        return result.isEmpty() ? null : result.get(0);
    }
}
