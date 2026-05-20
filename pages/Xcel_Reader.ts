import * as XLSX from 'xlsx';

export function readExcel(filePath: string) {

    const workbook = XLSX.readFile(filePath); //reading the file

    const sheetName = workbook.SheetNames[0]; // reading 1st sheet

    const sheet = workbook.Sheets[sheetName]; //opening perticular data

    return XLSX.utils.sheet_to_json(sheet); // conveting to json 
}