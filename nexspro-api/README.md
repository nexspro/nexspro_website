# Nexspro API

**Nexspro API** is the backend of the Nexspro platform – a centralized hub that powers user portfolios, project showcases, digital libraries, social links, and more. Built with Ruby on Rails and designed to serve a modern frontend in Next.js.

## 🧰 Tech Stack

- **Ruby on Rails 8 (API-only)**
- **PostgreSQL**
- **RSpec** for testing
- **Devise + JWT** for authentication
- **Pundit** for authorization
- **Active Storage** for file uploads
- **Stripe** for payments
- **Docker** for containerization

## 📁 Project Structure

- `app/controllers/api/v1/` – versioned API controllers
- `app/models/` – ActiveRecord models
- `spec/requests/api/v1/` – RSpec request specs
- `lib/` – business logic modules and services
- `config/` – credentials, routes, environments
- `db/` – migrations and seeds
