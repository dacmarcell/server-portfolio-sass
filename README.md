# SASS - Portfolio

[FIGMA](https://www.figma.com/design/IsOR19hpYOPF9KJrg4idXL/SASS?node-id=0-1&t=XYKZlDwwfrjKCJFX-0)

## Dependências

- [PostgreSQL Db](https://www.postgresql.org/docs/)
- [Node](https://nodejs.org/docs/latest/api/)

## Entidades

- Usuário (users)

user_id         TEXT            PRIMARY KEY     DEFAULT UUID
first_name      TEXT            NOT NULL
last_name       TEXT            NOT NULL
email           TEXT            NOT NULL
password        TEXT            NOT NULL
about           VARCHAR(600)    NOT NULL

- Links Sociais (social_links)

social_link_id  NUMBER          PRIMARY KEY    AUTO INCREMENT
name            ENUM([Linkedin, Github, Twitter, Facebook, Instagram])            NOT NULL
url             TEXT            NOT NULL

user_id         FK(users)

- Linguagens de Programação (programming_languages)

programming_language_id (definir tipo de ID)
name            TEXT    NOT NULL
level           TEXT    NOT NULL        DEFAULT(0)

- Projetos (projects)

project_id (definir tipo de ID)
name            TEXT    NOT NULL
repo_url        TEXT    NOT NULL
deploy_url      TEXT    NULL

user_id         FK(users)

- Áreas de atuação (fields_of_expertise)

field_code (definir tipo de ID)
area                    ENUM(['Back-end', 'Front-end', 'Full-stack', 'Mobile', 'DevOps', 'Data Science', 'UI/UX', 'Cybersecurity', 'AI/ML', 'Blockchain', 'IoT', 'Cloud Computing', 'AR/VR', 'Game Development', 'Quantum Computing', 'Big Data'])

## Relações

- Usuário <n-n> Áreas de atuação - (usuário tem várias áreas de atuação, área de atuação tem vários usuários) [UsuárioÁreaDeAtuação]
- Usuário <n-n> Linguagens de Programação - (usuário tem várias linguagens de programação, linguagem de programação tem vários usuários) [UsuárioLinguagensDeProgramacao]
- Usuário <1-n> Projeto - (usuário tem vários projetos, projeto só tem um usuário)
- Usuário <1-n> Links sociais - (usuário tem vários links sociais, link social tem um usuário)