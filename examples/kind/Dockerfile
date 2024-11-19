FROM debian:buster
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get clean && apt-get update && apt-get -y upgrade
RUN apt-get -y install apt-utils  \
    vim unzip   \
	fakeroot dbus base whiptail hexedit \
	patch wamerican ucf manpages \
	file luajit make lua50 dialog curl \
	less  netcat-openbsd\
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Download and install Docker static binaries
RUN mkdir -p /etc/apt/keyrings && \
    curl -fsSL https://download.docker.com/linux/debian/gpg | tee /etc/apt/keyrings/docker.asc && \
    chmod a+r /etc/apt/keyrings/docker.asc && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list && \
    apt-get update && \
    apt-get install -y docker-ce docker-ce-cli containerd.io && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Download and install Go
ENV GO_VERSION=1.23.3
RUN curl -LO https://golang.org/dl/go${GO_VERSION}.linux-arm64.tar.gz && \
    tar -C /usr/local -xzf go${GO_VERSION}.linux-arm64.tar.gz 


# Download and install Kind
# For ARM64
RUN curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.25.0/kind-linux-arm64 && \
   chmod +x ./kind && \
    mv ./kind /usr/local/bin/kind

# Set up Go environment variables
ENV PATH="/usr/local/go/bin:${PATH}"
ENV GOPATH="/home/user/go"
ENV PATH="${GOPATH}/bin:${PATH}"


RUN useradd -m user && echo "user:password" | chpasswd && \
	usermod -aG sudo user && usermod -aG docker user


# We set WORKDIR, as this gets extracted by Webvm to be used as the cwd. This is optional.
WORKDIR /home/user/
# We set env, as this gets extracted by Webvm. This is optional.
ENV HOME="/home/user" TERM="xterm" USER="user" SHELL="/bin/bash" EDITOR="vim" LANG="en_US.UTF-8" LC_ALL="C"
RUN echo 'root:password' | chpasswd
CMD [ "/bin/bash" ]
