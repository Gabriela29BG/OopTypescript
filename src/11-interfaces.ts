// Definición de la interfaz Driver que especifica la estructura que deben tener las implementaciones de los controladores de bases de datos
export interface Driver {
    database: string;
    password: string;
    port: number;
  
    // Métodos que deben ser implementados por las clases que cumplen con la interfaz
    connect(): void;
    disconnect(): void;
    isConnected(name: string): boolean;
  }
  
  // Clase que implementa la interfaz Driver para PostgreSQL
  class PostgresDriver implements Driver {
    constructor(
      public database: string,
      public password: string,
      public port: number,
      private host: number,
    ) {}
  
    // Implementación del método disconnect específico para PostgreSQL
    disconnect(): void {
      // Código específico para desconectar de PostgreSQL
    }
  
    // Implementación del método isConnected específico para PostgreSQL
    isConnected(name: string): boolean {
      // Código específico para verificar la conexión en PostgreSQL
      return true;
    }
  
    // Implementación del método connect específico para PostgreSQL
    connect(): void {
      // Código específico para conectar a PostgreSQL
    }
  }
  
  // Clase que implementa la interfaz Driver para Oracle
  class OracleDriver implements Driver {
    constructor(
      public database: string,
      public password: string,
      public port: number
    ) {}
  
    // Implementación del método connect específico para Oracle
    connect(): void {
      // Código específico para conectar a Oracle
    }
  
    // Implementación del método disconnect específico para Oracle
    disconnect(): void {
      // Código específico para desconectar de Oracle
    }
  
    // Implementación del método isConnected específico para Oracle
    isConnected(name: string): boolean {
      // Código específico para verificar la conexión en Oracle
      return true;
    }
  }
  