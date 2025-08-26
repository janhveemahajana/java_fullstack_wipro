package com.wipro.usermgmt.service.impl;

import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Service;

import com.wipro.usermgmt.dto.Token;
import com.wipro.usermgmt.entity.User;
import com.wipro.usermgmt.repo.UserRepo;
import com.wipro.usermgmt.service.UserService;
import com.wipro.usermgmt.util.AppConstant;
import com.wipro.usermgmt.util.EncryptUtil;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class UserServiceImpl implements UserService {
	// private static final String SECRET = "d3No4uat7HEgU6RHjJ902G+gTj3+qHNZZ/CN6BUeCa4cKFSkp1AGFXH7ODj3A+fPDf1WQB2x6Yknr6VFh5ySyw==";


	@Autowired
	UserRepo userRepo;
	
	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return userRepo.findAll();
	}

	@Override
	public User findById(int id) {
		// TODO Auto-generated method stub
		Optional<User> userOpt= userRepo.findById(id);
		if(userOpt.isPresent())
		{
			return userOpt.get();
		}
		return null;
	}

	@Override
	public void save(User user) {
		if (user.getPassWord() != null) {
	        String salt = org.springframework.security.crypto.bcrypt.BCrypt.gensalt();
	        user.setSalt(salt); // optional, since bcrypt embeds salt
	        String encryptedPass = EncryptUtil.getEncryptedPassword(user.getPassWord(), salt);
	        user.setPassWord(encryptedPass);
	    }
	    userRepo.save(user);
	}

	@Override
	public void deleteById(int id) {
		// TODO Auto-generated method stub
		userRepo.deleteById(id);
	}

	@Override
	public Token login(User user) {
		User userData = userRepo.findByEmail(user.getEmail());

	    if (userData != null) {
	        boolean passwordMatches = org.springframework.security.crypto.bcrypt.BCrypt.checkpw(
	                user.getPassWord(),
	                userData.getPassWord()
	        );

	        if (passwordMatches) {
	            String jwtToken = "Bearer " + getJWTToken(user.getEmail());
	            Token token = new Token();
	            token.setToken(jwtToken);
	            return token;
	        }
	    }
	    return null;
	}
	
	

	 private String getJWTToken(String username) {
	        Key key = Keys.hmacShaKeyFor(Base64.getDecoder().decode(AppConstant.SECRET));
		 	List<GrantedAuthority> grantedAuthorities = AuthorityUtils.commaSeparatedStringToAuthorityList("ROLE_USER");

	        return Jwts.builder()
	                .setId("jwtExample")
	                .setSubject(username)
	                .claim("authorities", grantedAuthorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
	                .setIssuedAt(new Date())
	                .setExpiration(new Date(System.currentTimeMillis() + 600000))
	                .signWith(key)
	                .compact();
	    }

}