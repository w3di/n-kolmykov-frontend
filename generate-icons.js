const fs = require("fs");
const path = require("path");

const ICONS_DIR = path.join(__dirname, "/public/svg/icons");
const OUTPUT_FILE = path.join(__dirname, "/src/components/ui/Icon/index.tsx");
const OUTPUT_DIR = path.dirname(OUTPUT_FILE);

function toCamelCase(str) {
  return str
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
    .replace(/^(.)/, (char) => char.toLowerCase());
}

function extractSvgContent(svgContent) {
  const match = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  if (!match) return "";

  let content = match[1].trim();

  return content;
}

// Функция для извлечения viewBox из SVG
function extractViewBox(svgContent) {
  const match = svgContent.match(/viewBox="([^"]*)"/i);
  return match ? match[1] : "0 0 24 24";
}

// Функция для извлечения width из SVG
function extractWidth(svgContent) {
  const match = svgContent.match(/width="([^"]*)"/i);
  return match ? parseInt(match[1]) || 24 : 24;
}

// Функция для извлечения height из SVG
function extractHeight(svgContent) {
  const match = svgContent.match(/height="([^"]*)"/i);
  return match ? parseInt(match[1]) || 24 : 24;
}

// Основная функция генерации
function generateIconComponent() {
  try {
    // Создаем директорию для компонента, если она не существует
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Читаем все SVG файлы
    const files = fs
      .readdirSync(ICONS_DIR)
      .filter((file) => file.endsWith(".svg"));

    if (files.length === 0) {
      console.log("❌ SVG файлы не найдены в папке:", ICONS_DIR);
      return;
    }

    console.log(`🔍 Найдено ${files.length} SVG файлов:`);
    files.forEach((file) => console.log(`  - ${file}`));

    // Генерируем типы и объект с иконками
    const iconNames = [];
    const iconObjects = [];

    files.forEach((file) => {
      const fileName = path.basename(file, ".svg");
      const kebabName = toCamelCase(fileName);
      const svgContent = fs.readFileSync(path.join(ICONS_DIR, file), "utf8");

      const content = extractSvgContent(svgContent);
      const viewBox = extractViewBox(svgContent);
      const width = extractWidth(svgContent);
      const height = extractHeight(svgContent);

      if (!content) {
        console.log(`⚠️  Не удалось извлечь содержимое из ${file}`);
        return;
      }

      iconNames.push(`'${kebabName}'`);
      iconObjects.push(`  '${kebabName}': {
    viewBox: '${viewBox}',
    width: ${width},
    height: ${height},
    content: (
      <>
        ${content
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean)
          .join("\n        ")}
      </>
    ),
  }`);
    });

    // Генерируем TypeScript компонент
    const componentContent = `import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  name: ${iconNames.join(" | ")}
  width?: number
  height?: number
}

const icons = {
${iconObjects.join(",\n")}
} as const

export default function Icon({ name, width, height, className, ...props }: IconProps) {
  const icon = icons[name]
  
  if (!icon) {
    console.warn(\`Icon "\${name}" not found\`)
    return null
  }

  return (
    <svg
      width={width || icon.width}
      height={height || icon.height}
      viewBox={icon.viewBox}
      fill="none"
      className={className}
      role="img"
      aria-hidden="true"
      {...props}
    >
      {icon.content}
    </svg>
  )
}

// Экспорт всех доступных имен иконок для удобства
export const iconNames = [${iconNames.join(", ")}] as const
export type IconName = typeof iconNames[number]
`;

    // Записываем файл
    fs.writeFileSync(OUTPUT_FILE, componentContent, "utf8");

    console.log("✅ Компонент Icon успешно сгенерирован!");
    console.log(`📁 Файл: ${OUTPUT_FILE}`);
    console.log(`🎨 Доступные иконки: ${iconNames.join(", ")}`);
    console.log("");
    console.log("📋 Пример использования:");
    console.log('  import Icon from "@/src/components/ui/Icon"');
    console.log('  <Icon name="book" width={20} height={20} />');
    console.log('  <Icon name="book" /> // использует оригинальные размеры');
  } catch (error) {
    console.error("❌ Ошибка при генерации компонента:", error.message);
    process.exit(1);
  }
}

// Запуск скрипта
generateIconComponent();
