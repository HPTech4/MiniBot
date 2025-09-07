# Use official lightweight nginx image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static files (welcome page)
RUN rm -rf ./*

# Copy your frontend files into nginx
COPY . .

# Expose port 80
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
