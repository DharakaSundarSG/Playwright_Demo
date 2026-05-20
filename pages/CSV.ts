// pages/CSV_Reader.ts

import * as fs from "fs";

export function readCSV(filePath: string) {

    const fileContent = fs.readFileSync(filePath, "utf-8"); // reading the file path

    const lines = fileContent.trim().split("\n"); // how many row and how many column

    const headers = lines[0].split(",");  // Spliting the headers 

    return lines.slice(1).map(line => { 

        const values = line.split(",");  

        const row: any = {};

        headers.forEach((header, index) => {

            row[header.trim()] = values[index]?.trim();

        });

        return row;

    });

}
