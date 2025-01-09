This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To run this project using Docker Compose, follow these steps:

1. Create a `.env` file in the root directory of your project and add your environment variables:

   ```env
   # Example environment variables
    BASE_API_URL=/
    ACCESS_KEY=/

   ```

2. Build the Docker image without using the cache:

   ```bash
   docker-compose build --no-cache
   ```

3. Run the Docker container:

   ```bash
   docker-compose up
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
