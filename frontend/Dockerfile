FROM oven/bun

WORKDIR /frontend

RUN touch /bin/run-frontend.sh
RUN chmod +x /bin/run-frontend.sh

# vite 必须要添加 --host 参数才能在容器外访问到 localhost
RUN echo "bun install --no-save;" \
         "bun dev --host" \ >> /bin/run-frontend.sh

EXPOSE 3003

CMD ["/bin/run-frontend.sh"]
