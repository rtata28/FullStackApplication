package com.example.customerapi.dto;

import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;

class CustomerDTOTest {

    @Test
    void testConstructorAndGetters() {
        LocalDate lastPurchaseDate = LocalDate.now().minusDays(10);
        CustomerDTO dto = new CustomerDTO("John Doe", "john@example.com", BigDecimal.valueOf(1200), lastPurchaseDate);

        assertEquals("John Doe", dto.getName());
        assertEquals("john@example.com", dto.getEmail());
        assertEquals(BigDecimal.valueOf(1200), dto.getAnnualSpend());
        assertEquals(lastPurchaseDate, dto.getLastPurchaseDate());
    }

    @Test
    void testSetters() {
        CustomerDTO dto = new CustomerDTO(null, null, null, null);

        LocalDate date = LocalDate.of(2024, 12, 31);
        dto.setName("Jane");
        dto.setEmail("jane@example.com");
        dto.setAnnualSpend(BigDecimal.valueOf(900));
        dto.setLastPurchaseDate(date);

        assertEquals("Jane", dto.getName());
        assertEquals("jane@example.com", dto.getEmail());
        assertEquals(BigDecimal.valueOf(900), dto.getAnnualSpend());
        assertEquals(date, dto.getLastPurchaseDate());
    }
}

