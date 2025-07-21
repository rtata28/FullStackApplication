package com.example.customerapi.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
public class CustomerDTO {
    private String name;
    private String email;
    private BigDecimal annualSpend;
    private LocalDate lastPurchaseDate;

    // Constructors, getters, setters
    public CustomerDTO(String name, String email, BigDecimal annualSpend, LocalDate lastPurchaseDate) {
        this.name = name;
        this.email = email;
        this.annualSpend = annualSpend;
        this.lastPurchaseDate = lastPurchaseDate;
    }
    // Default constructor, Getters and Setters omitted for brevity
}

