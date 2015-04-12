# Pull base image.
FROM dockerfile/nodejs

# Set environment variables.
ENV HOME /root

# Define working directory.
WORKDIR /var/www

# Define default command.
CMD ["bash"]