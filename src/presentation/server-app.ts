import { CreateTable } from '../domain/use-cases/create-table.usecase';
import { SaveFile } from '../domain/use-cases/save-file.usecase';

interface RunOptions {
  base: number;
  limit: number;
  show: boolean;
}

export class ServerApp {
  static run({ base, limit, show }: RunOptions) {
    console.log('Server running...');
    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      fileDestination: `outputs/table-${base}`,
    });
    show && console.log(table);
    wasCreated
      ? console.log('File created!')
      : console.log('File not created!');
  }
}
