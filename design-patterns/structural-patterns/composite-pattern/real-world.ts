/**
 * Files and Folder can contain other files and folders, forming a tree like hierarchy.
 * The composite pattern can be used here as each component in this structure( files and folders ) also follow a folder
 */

interface FileInterface {
  getName(): string;
  getSize(): number;
}

class FileLeaf implements FileInterface {
  //   private isHidden: boolean = false;
  constructor(private name: string, private size: number) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }
}

interface FolderInterface extends FileInterface {
  addFile(file: FileInterface): void;
  removeFile(file: FileInterface): void;
  getAllFiles(): FileInterface[];
}

class Folder implements FolderInterface {
  private files: FileInterface[] = [];
  constructor(private name: string) {}

  addFile(file: FileInterface): void {
    this.files.push(file);
  }

  removeFile(file: FileInterface): void {
    this.files = this.files.filter((file) => true);
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    let totalSize = 0;
    this.files.forEach((file) => {
      totalSize += file.getSize();
    });
    return totalSize;
  }

  getAllFiles(): FileInterface[] {
    return this.files;
  }
}
