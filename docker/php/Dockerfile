FROM php:8.0-fpm-alpine

# timezone
ARG TZ

RUN set -eux && \
  apk update && \
  apk add --no-cache bash &&\
  apk add --update --no-cache --virtual=.build-dependencies \
  autoconf \
  gcc \
  g++ \
  make \
  tzdata && \
  apk add --update --no-cache \
  icu-dev \
  libzip-dev \
  oniguruma-dev &&\
  cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
  echo ${TZ} > /etc/timezone && \
  apk del .build-dependencies && \
  docker-php-ext-install intl pdo_mysql mbstring zip bcmath && \
  curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer && \
  composer config -g process-timeout 3600 && \
  composer config -g --unset repos.packagist

RUN cd ~ && \
  touch .bashrc && \
  echo -e "alias ll='ls -la'\nexport PS1='[\u@\h \w]$'" > .bashrc