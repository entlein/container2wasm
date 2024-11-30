#FROM mgoltzsche/podman:5.3.0
FROM registry.access.redhat.com/ubi8/podman@sha256:30cf71114ff4ab65c2cd9e9fb0af1d361e252f3fe851820a86c207beacf6c044

COPY app app

# Install necessary packages
RUN dnf install -y wget vim  git openssh gcc
#RUN apk add --no-cache wget curl bash vim git openssh gcc musl-dev

EXPOSE 2375
ENV PODMAN_IGNORE_CGROUPSV1_WARNING=true
RUN rm -rf /var/lib/containers/storage && rm -rf /var/run/containers/storage
COPY container.conf /etc/containers/containers.conf
# Start supervisord
CMD ["/bin/bash"]

#https://github.com/mgoltzsche/podman-static/blob/master/Dockerfile

#[root@localhost /]# podman image trust set -t accept registry.access.redhat.com