package com.zzzpro.zzz.soo.component;

import java.util.Map;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class RiotApiClient {
    
    private final String API_KEY = "RGAPI-6ec77b31-bdf8-40a1-85d0-bad7830110db";
    private final String BASE_URL = "https://kr.api.riotgames.com/lol";
    private final RestTemplate restTemplate;

    public RiotApiClient(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public String getUserId(String summonerName) {
        String url = BASE_URL + "/summoner/v4/summoners/by-name/" + summonerName;
        
        // Set headers including API key
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-Riot-Token", API_KEY);
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
        
        // Make the HTTP GET request
        ResponseEntity<Map<String, Object>> response = restTemplate.exchange(url, HttpMethod.GET, entity, new ParameterizedTypeReference<Map<String, Object>>() {});
        
        // Parse the response and extract user id
        Map<String, Object> responseBody = response.getBody();
        String userId = (String) responseBody.get("id");
        
        return userId;
    }
    public String getRecentMatch(String userId) {
        String url = BASE_URL + "/match/v4/matchlists/by-account/" + userId + "/recent";
        
        // Set headers including API key
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-Riot-Token", API_KEY);
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
        
        // Make the HTTP GET request
        ResponseEntity<Map<String, Object>> response = restTemplate.exchange(url, HttpMethod.GET, entity, new ParameterizedTypeReference<Map<String, Object>>() {});
        
        // Parse the response and extract match data
        Map<String, Object> responseBody = response.getBody();
        // 여기서 매치 데이터를 추출하여 처리하면 됩니다.

        return responseBody.toString(); // 처리된 매치 데이터를 반환합니다.
    }
}
