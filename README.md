This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To run this project using Docker, follow these steps:

1. Build the Docker image:

   ```bash
   docker build -t charge_map .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 --env-file .env charge_map
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
