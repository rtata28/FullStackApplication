# Customer Management API & React Frontend

This project is a full-stack application that provides a RESTful API for managing customer data, along with a React frontend UI. It supports CRUD operations, tier calculation based on annual spend, and includes unit tests and code coverage support.

---

## 🛠 Tech Stack

**Backend:**

* Java 17
* Spring Boot 3.x
* H2 (In-memory DB)
* JUnit 5, Mockito
* Maven
* JaCoCo for code coverage
* Swagger / OpenAPI

**Frontend:**

* React (via Create React App)
* Axios for HTTP calls
* Tailwind CSS for styling

---

## 📦 Backend Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/rtata28/customer-api
   cd customer-api
   ```

2. **Run locally**

   ```bash
   mvn spring-boot:run
   ```

3. **H2 Console**

    * URL: `http://localhost:8080/h2-console`
    * JDBC URL: `jdbc:h2:mem:testdb`

4. **Swagger UI**

    * URL: `http://localhost:8080/swagger-ui.html`

5. **Run tests + generate code coverage**

   ```bash
   mvn clean test
   mvn jacoco:report
   open target/site/jacoco/index.html
   ```

---

## 🧪 Test Coverage

* Unit tests cover:

    * CustomerService (all branches, validation, tier logic)
    * CustomerController (REST endpoint behavior)
    * Repository interfaces
    * DTOs and configuration classes
* Code coverage is tracked using the JaCoCo plugin.

---

## 🚀 Frontend Setup

1. **Navigate to frontend folder**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm start
   ```

   App will be available at `http://localhost:3000`

4. **Directory structure**

   ```bash
   frontend/
   └── src/
       ├── App.jsx
       ├── components/
       │   ├── CustomerForm.jsx
       │   ├── CustomerSearch.jsx
       │   └── CustomerTable.jsx
       ├── services/
       │   └── customerApi.js
       └── index.js
   ```

5. **Axios backend proxy (optional)** In `package.json`:

   ```json
   "proxy : http://localhost:8080"
   ```

---

## 🧮 Tier Logic

| Tier     | Criteria                                                |
| -------- | ------------------------------------------------------- |
| Silver   | Annual Spend < \$1000 OR no valid purchase date         |
| Gold     | \$1000 ≤ Spend < \$10,000 AND last purchase ≤ 12 months |
| Platinum | Spend ≥ \$10,000 AND last purchase ≤ 6 months           |

Displayed dynamically in the customer response.

---

## 🧾 Sample API Requests

### Create Customer (POST /customers)

```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "annualSpend": 15000,
  "lastPurchaseDate": "2024-12-01"
}
```

### Get Customer by ID

```http
GET /customers/{uuid}
```

### Search by name/email

```http
GET /customers?name=Alice
GET /customers?email=alice@example.com
```

### Update Customer

```http
PUT /customers/{uuid}
```

### Delete Customer

```http
DELETE /customers/{uuid}
```

---

## 📌 Assumptions

* ID is auto-generated (UUID)
* Tier is calculated at runtime and not stored
* Email must be valid format (validated client + server side)
* Annual spend must be non-negative
* Last purchase date must not be null

---

## 🖼 UI Features

* Form to create/update customer
* Table showing all customers with tier info
* Search by name/email
* Edit/Delete actions per row
* Responsive layout with Tailwind CSS

---

## 👤 Author

**Ramya Vaka**
Email: [ramya.tata@gmail.com](mailto:ramya.tata@gmail.com)
LinkedIn: [https://www.linkedin.com/in/ramya-tata-76a8a3/](https://www.linkedin.com/in/ramya-tata-76a8a3/)

---

## 📃 License

MIT – Free to use and modify.
