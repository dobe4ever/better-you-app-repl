### python generate_codebase_md.py

import os
import glob

def read_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

def generate_markdown(files_to_include):
    markdown_content = ""
    for file_pattern in files_to_include:
        if '*' in file_pattern:
            # If the pattern contains a wildcard, use glob to get all matching files
            matching_files = glob.glob(file_pattern, recursive=True)
            for file_path in matching_files:
                if os.path.isfile(file_path):  # Only process files, not directories
                    markdown_content += process_file(file_path)
        else:
            # If it's a specific file, process it directly
            if os.path.isfile(file_pattern):
                markdown_content += process_file(file_pattern)
    
    return markdown_content

def process_file(file_path):
    relative_path = file_path
    file_extension = os.path.splitext(file_path)[1]
    content = f'`{relative_path}`\n'
    content += f'```{file_extension[1:]}\n'  # Use file extension for syntax highlighting
    content += read_file(file_path)
    content += '\n```\n\n'
    return content

if __name__ == "__main__":
    files_to_include = [
        'src/**/*',
        # 'build/**/*',
        # 'public/index.html',
        'postcss.config.js',
        'tailwind.config.js',
        'package.json',
        # 'src/components/Header.js',
        # 'src/components/BottomNav.js',
        # 'src/components/HabitCard.js',
        # 'src/components/HabitCardBack.js',
        # 'src/components/ContextualMenu.js',
        # 'src/components/HabitsList.js',
        # 'src/components/ListsContainer.js',
        # 'src/data/dummyData.js',
        # 'src/components/TodoCard.js',
        # 'src/App.js',
    ]
    
    markdown_content = generate_markdown(files_to_include)
    
    with open('dev-ai/LastCode.md', 'w', encoding='utf-8') as md_file:
        md_file.write(markdown_content)
    print("Markdown document generated successfully: dev-ai/LastCode.md")