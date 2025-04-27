FROM oven/bun:1

COPY . .    

RUN bun i
RUN bun --bun run build

USER bun
EXPOSE 3001
ENTRYPOINT [ "bun", "run", "build/index.js"]