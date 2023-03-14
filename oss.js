const fs = require("fs");
const { join, dirname, basename } = require("path");


const rm = async function deleteFiles(path) {
    // 判断一下路径是否真实存在
    if (!fs.existsSync(path)) {
        console.warn(new Error("路径不存在。"));
        return;
    }

    const file = fs.lstatSync(path);

    // 是文件，直接删除
    if (file.isFile()) {
        fs.unlinkSync(path);
        return;
    }

    // 是文件夹，遍历下面的所有文件
    if (file.isDirectory()) {
        const files = await fs.readdirSync(path);
        if (files && files.length) {
            for (const fileName of files) {
                // 因为我之前项目使用的时候不想删除隐藏文件，所以在此过滤了.开头的文件
                if (fileName.startsWith(".")) {
                    continue;
                }
                const p = join(path, fileName);
                const f = fs.lstatSync(p);
                // 是文件，直接删除
                if (f.isFile()) {
                    fs.unlinkSync(p);
                }
                // 是文件夹，递归调用 deleteFiles
                if (f.isDirectory()) {
                    await deleteFiles(p);
                    // 文件夹内部文件删除完成之后，删除文件夹
                    fs.rmdirSync(p);
                }
            }
        }
        return;
    }
};

const copyFiles = async function copyFiles(oldPath, newPath) {
    // 判断路径是否存在，有一个不存在则抛出错误
    if (!fs.existsSync(oldPath) || !fs.existsSync(newPath)) {
        console.warn(new Error("路径不存在。"));
        return;
    }
    const oldFile = fs.lstatSync(oldPath);
    const newFile = fs.lstatSync(newPath);

    // 如果 oldPath 是文件，则直接复制 oldPath
    if (oldFile.isFile()) {
        // 需要考虑 newPath 是文件还是目录
        // 如果是文件路径，则可以直接使用进行复制
        // 如果是目录路径，则需要拼接上 oldPath 的文件名
        if (newFile.isDirectory()) {
            newPath = join(newPath, basename(oldPath));
        }
        fs.copyFileSync(oldPath, newPath);
        return;
    }

    // 如果 oldPath 是目录，则 newPath 应该也使目录
    // 若 newPath 目标路径是文件，则默认复制到文件的目录下
    if (newFile.isFile()) {
        console.warn(new Error("参数2应为路径。"));
        newPath = dirname(newPath);
    }

    if (oldFile.isDirectory()) {
        const files = await fs.readdirSync(oldPath);
        if (files && files.length) {
            // 遍历目录下的所有文件，并将 fileName 拼接上目录路径
            files.forEach(async(fileName) => {
                const oPath = join(oldPath, fileName);
                const oFile = fs.lstatSync(oPath);
                // 如果拼接后的路径为文件，则直接复制
                if (oFile.isFile()) {
                    // 当然，新文件也需要拼接上 fileName
                    const newFile = join(newPath, fileName);
                    fs.copyFileSync(oPath, newFile);
                }
                // 如果是目录，则递归调用 moveFiles
                if (oFile.isDirectory()) {
                    const oldDir = join(oldPath, fileName);
                    const newDir = join(newPath, fileName);
                    // 需要判断拼接后的 newDir 是否存在此目录，如果不存在则创建
                    if (!fs.existsSync(newDir)) {
                        await fs.mkdirSync(newDir);
                    }
                    moveFiles(oldDir, newDir);
                }
            });
        }
        return;
    }
};


copyFiles('./build/lowcode/meta.js', './dist/')
copyFiles('./build/lowcode/view.js', './dist/')
copyFiles('./build/lowcode/view.css', './dist/')