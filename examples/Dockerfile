FROM debian:slim
ARG DEBIAN_FRONTEND=noninteractive

# Install necessary packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    vim \
    unzip \
    bash \
    podman \
    supervisor && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Download and install Kind
RUN curl -Lo /usr/local/bin/kind https://kind.sigs.k8s.io/dl/v0.25.0/kind-linux-amd64 && \
    chmod +x /usr/local/bin/kind

# Copy supervisord configuration
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose necessary ports
EXPOSE 2375

# Start supervisord
CMD ["/usr/bin/supervisord"]