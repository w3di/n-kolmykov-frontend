import { readFile } from 'fs/promises';
import path from 'path';

const DATA_ROOT = path.join(process.cwd(), 'src', 'data');

export async function readJsonFile<T>(relativePath: string): Promise<T | null> {
  try {
    const filePath = path.join(DATA_ROOT, relativePath);
    const content = await readFile(filePath, 'utf-8');
    return JSON.parse(content) as T;
  } catch {
    return null;
  }
}
