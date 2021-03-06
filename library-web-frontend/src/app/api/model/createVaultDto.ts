/**
 * Library
 * The library API description
 *
 * OpenAPI spec version: 1.0
 * Contact: drmrhdt@mail.ru
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface CreateVaultDto { 
    /**
     * The name of the vault
     */
    name: string;
    /**
     * The description of the vault
     */
    description?: string;
    /**
     * The number of shelfs
     */
    numShelfs: number;
    /**
     * The number of rows on shelf
     */
    numRows: number;
    /**
     * The max number of books
     */
    maxBooksOnShelf: number;
}