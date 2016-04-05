namespace FreeElephants.TSxUnit.Builder {

    export interface ScannerInterface {
        getNamespaceFromClassFile(filename: string): string;
        getShortClassNameFromClassFile(filename: string): string;
        getFullClassNameFromClassFile(filename: string):string;
    }
}

