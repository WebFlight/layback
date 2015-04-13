# Pull base image.
FROM dockerfile/nodejs

# Set environment variables.
ENV HOME /root

# Adding the 
ADD ./ /var/www/

# Define working directory.
WORKDIR /var/www

# Install sleeper as bin
RUN npm link

# Define default command.
CMD ["bash"]