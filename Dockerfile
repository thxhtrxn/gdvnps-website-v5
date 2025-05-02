FROM oven/bun:1

WORKDIR /app

COPY . .

# Install dependencies using Bun
RUN bun install

# Build the SvelteKit app
RUN bun run build

# Expose the port the app runs on
EXPOSE 4173

# Run the app in preview mode
CMD ["bun", "run", "preview"]

