# Official nginx image as base
FROM nginx:alpine

# work directory inside nginx
WORKDIR /usr/share/nginx/html/

# Copy the application files to the work dir
COPY . .


# Expose port 80
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

