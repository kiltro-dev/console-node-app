import { CreateTable } from '../domain/use-cases/create-table.usecase';

interface RunOptions {
  base: number;
  limit: number;
  show: boolean;
}

export class ServerApp {
  static run({ base, limit, show }: RunOptions) {
    console.log('Server running...');
    const table = new CreateTable().execute({ base, limit });
    show && console.log(table);
  }
}
