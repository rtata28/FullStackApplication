package com.example.customerapi.config;

import com.example.customerapi.Config.WebConfig;
import org.junit.jupiter.api.Test;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import static org.junit.jupiter.api.Assertions.*;

class WebConfigTest {

    @Test
    void testCorsConfigurerBeanDoesNotThrow() {
        WebConfig config = new WebConfig();
        WebMvcConfigurer corsConfigurer = config.corsConfigurer();

        CorsRegistry mockRegistry = new CorsRegistry();
        assertDoesNotThrow(() -> corsConfigurer.addCorsMappings(mockRegistry));
    }
}

