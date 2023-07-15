FROM  alpine:3.17.2
RUN apk update && \
apk add --no-cache zsh tmux openssh neovim git
RUN sed -i 's/ash/zsh/' /etc/passwd

RUN apk add nodejs=18.14.2-r0 npm=9.1.2-r0

#COPY mybashrc.sh /etc/profile.d/
#WORKDIR /work
#ENTRYPOINT ["bash"]
