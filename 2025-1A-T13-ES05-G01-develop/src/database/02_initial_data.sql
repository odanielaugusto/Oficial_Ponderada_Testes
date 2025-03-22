INSERT INTO "user" (password, email, type, institution_id) VALUES
('hash1', 'gerente.unidade1@exemplo.com', 'Gerente Unidade', 1),
('hash2', 'gerente.admin1@exemplo.com', 'Gerente Administrativo', 2),
('hash3', 'gerente.unidade2@exemplo.com', 'Gerente Unidade', 3),
('hash4', 'gerente.admin2@exemplo.com', 'Gerente Administrativo', 4),
('hash5', 'gerente.unidade3@exemplo.com', 'Gerente Unidade', 5),
('hash6', 'gerente.admin3@exemplo.com', 'Gerente Administrativo', 6);

INSERT INTO assistive_technology (type, description) VALUES
('Lupa', 'Lupa de alta ampliação, modelo A'),
('Leitor de Tela', 'Software leitor de tela, versão X'),
('Cadeira de Rodas', 'Cadeira de rodas com ajustes ergonômicos'),
('Lupa', 'Lupa portátil, modelo B'),
('Leitor de Tela', 'Leitor de tela com voz sintetizada');

INSERT INTO professional (type, name, phone_number) VALUES
('Cuidador', 'Ana Silva', '111111111'),
('Agente de Inclusão Escolar', 'Bruno Souza', '222222222'),
('Psicólogo', 'Carlos Pereira', '333333333'),
('Tradutor e Intérprete de Libras', 'Daniela Rocha', '444444444'),
('Técnico de Enfermagem', 'Eduardo Lima', '555555555'),
('Cuidador', 'Fernanda Costa', '666666666'),
('Agente de Inclusão Escolar', 'Gustavo Lima', '777777777'),
('Psicólogo', 'Helena Gomes', '888888888'),
('Tradutor e Intérprete de Libras', 'Igor Santos', '999999999'),
('Técnico de Enfermagem', 'Juliana Alves', '101010101');

INSERT INTO appointment (professional_id, student_id, assistive_technology_id, start_date, end_date, description, status) VALUES
(1, 201, NULL, '2025-03-01', '2025-03-01', 'Consulta de rotina com cuidador', 'Finalizado'),
(3, 202, NULL, '2025-03-02', NULL, 'Sessão de psicologia individual', 'Ativo'),
(5, 203, NULL, '2025-03-03', '2025-03-04', 'Atendimento de enfermagem', 'Finalizado'),
(2, 204, NULL, '2025-03-04', NULL, 'Inclusão escolar', 'Ativo'),
(4, 205, NULL, '2025-03-05', '2025-03-05', 'Interpretação de Libras em reunião', 'Finalizado'),
(NULL, 206, 1, '2025-03-06', NULL, 'Uso de lupa para leitura', 'Ativo'),
(NULL, 207, 2, '2025-03-07', '2025-03-07', 'Instalação de leitor de tela', 'Finalizado'),
(NULL, 208, 3, '2025-03-08', NULL, 'Ajuste na cadeira de rodas', 'Ativo'),
(NULL, 209, 4, '2025-03-09', '2025-03-09', 'Consulta com lupa modelo B', 'Finalizado'),
(NULL, 210, 5, '2025-03-10', NULL, 'Teste de leitor de tela com nova versão', 'Ativo'),
(6, 211, NULL, '2025-03-11', NULL, 'Consulta com cuidador para acompanhamento', 'Ativo'),
(7, 212, NULL, '2025-03-12', '2025-03-12', 'Inclusão escolar acompanhamento', 'Finalizado'),
(NULL, 213, 2, '2025-03-13', NULL, 'Atualização de software leitor de tela', 'Ativo');

INSERT INTO log_usage (action, user_id, details, appointment_id) VALUES
('Login', 1, 'Login bem-sucedido', NULL),
('Criação de atendimento', 2, 'Atendimento criado para o estudante 201', 1),
('Atualização de atendimento', 1, 'Atendimento atualizado para o estudante 202', 2),
('Criação de atendimento', 3, 'Novo atendimento para estudante 203', 3),
('Cancelamento de atendimento', 4, 'Atendimento cancelado para o estudante 204', 4),
('Finalização de atendimento', 5, 'Atendimento finalizado para o estudante 205', 5),
('Login', 2, 'Usuário logado', NULL),
('Criação de atendimento', 1, 'Atendimento criado para o estudante 206', 6),
('Atualização de atendimento', 2, 'Atendimento atualizado para o estudante 207', 7),
('Criação de atendimento', 3, 'Atendimento iniciado para o estudante 208', 8),
('Atualização de atendimento', 4, 'Detalhes atualizados para o estudante 209', 9),
('Criação de atendimento', 5, 'Atendimento iniciado para o estudante 210', 10),
('Login', 1, 'Login bem-sucedido novamente', NULL),
('Atualização de atendimento', 3, 'Atendimento reativado para o estudante 211', 11),
('Criação de atendimento', 2, 'Atendimento criado para o estudante 212', 12),
('Atualização de atendimento', 4, 'Ajustes no atendimento para o estudante 213', 13);
