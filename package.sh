# 现实性mdbook build命令
mdbook build
# 如果不存在docs文件夹，则创建该文件夹 如果存在则覆盖
mkdir -p docs
# 将book文件夹内的所有文件复制到docs文件夹内
cp -r book/* docs/
