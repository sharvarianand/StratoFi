# StratoFi - AI-Powered Finance Platform

StratoFi is a comprehensive financial platform that leverages artificial intelligence to provide insights, predictions, and analysis for financial markets. The platform combines real-time market data with advanced AI models to deliver actionable financial intelligence.

## Features

- Real-time market data analysis
- AI-powered market predictions and forecasts
- Portfolio management and tracking
- Natural language financial insights
- Multi-language support for Indian languages
- Real-time notifications and alerts
- Secure authentication and authorization
- Advanced data visualization

## Tech Stack

### Backend
- Django (Admin, ORM, User Management)
- FastAPI (High-speed API for AI chatbot & forecasting)
- PostgreSQL (Primary database)
- Redis (Real-time caching)
- Celery + WebSockets (Background tasks & real-time updates)
- OAuth 2.0 Integration (Google, LinkedIn)
- Yahoo Finance API / Alpha Vantage
- Groq AI + LangChain
- Multilingual API support

### Frontend
- React with TypeScript
- Tailwind CSS
- Shadcn UI Components
- Recharts for data visualization
- WebSocket for real-time updates

## Project Structure

```
strato_fi/
├── backend/
│   ├── django_app/          # Django application
│   │   ├── users/          # User management
│   │   ├── portfolio/      # Portfolio management
│   │   ├── market_data/    # Market data handling
│   │   └── ai_insights/    # AI analysis and predictions
│   ├── fastapi_app/        # FastAPI application
│   │   └── main.py        # AI endpoints and services
│   ├── celery_worker/     # Background tasks
│   │   └── celery_app.py  # Celery configuration
│   └── shared/            # Shared utilities
├── frontend/              # React frontend
└── docker/               # Docker configurations
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/strato_fi.git
   cd strato_fi
   ```

2. Set up environment variables:
   ```bash
   cp backend/.env.example backend/.env
   # Edit backend/.env with your configuration
   ```

3. Set up the database:
   ```bash
   # Create PostgreSQL database
   createdb strato_fi
   ```

4. Install dependencies:
   ```bash
   # Backend dependencies
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt

   # Frontend dependencies
   cd ../frontend
   npm install
   ```

5. Run migrations:
   ```bash
   cd backend/django_app
   python manage.py migrate
   ```

6. Start the services:
   ```bash
   # Start Redis (if not running)
   redis-server

   # Start Celery worker
   cd backend/celery_worker
   celery -A celery_app worker --loglevel=info

   # Start Django development server
   cd backend/django_app
   python manage.py runserver

   # Start FastAPI server
   cd backend/fastapi_app
   uvicorn main:app --reload

   # Start frontend development server
   cd frontend
   npm run dev
   ```

## API Documentation

### Django REST API
- Admin interface: http://localhost:8000/admin/
- API endpoints: http://localhost:8000/api/

### FastAPI Documentation
- Swagger UI: http://localhost:8001/docs
- ReDoc: http://localhost:8001/redoc

## Development Guidelines

1. Code Style
   - Follow PEP 8 for Python code
   - Use ESLint and Prettier for JavaScript/TypeScript
   - Run tests before committing changes

2. Git Workflow
   - Create feature branches from develop
   - Use conventional commits
   - Submit pull requests for review

3. Testing
   - Write unit tests for new features
   - Run integration tests before deployment
   - Maintain test coverage above 80%

## Security Considerations

- All API endpoints require authentication
- Sensitive data is encrypted at rest
- Regular security audits
- Rate limiting on API endpoints
- Input validation and sanitization

## Deployment

1. Set up production environment variables
2. Configure SSL certificates
3. Set up monitoring and logging
4. Deploy using Docker Compose or Kubernetes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@strato_fi.com or join our Slack channel. 