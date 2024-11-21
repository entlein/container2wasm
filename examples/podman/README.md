# Run Podman rootless inside wasi 
(tested on chrome on amd64)

Whats working:
- gcc compile
- podman build -t <myfile> .
  


Whats not working:
CORS -> used chrome extension to work around allowed origins, which solves most issues but not all
podman keeps on complaining about schema-version 2 (which is unlikely the real issue) Accrd to the internet, this might be masking a permission issue